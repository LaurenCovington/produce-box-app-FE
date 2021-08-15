import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';
import './App.css';
import Layout from './store/layout.js'
import CategoryList from './components/CategoryList';
import OfferingList from './components/OfferingList';
import NewCategoryForm from './components/NewCategoryForm';
import NewOfferingForm from './components/NewOfferingForm';
import Category from './components/Category';
// IMPORT COMPONENTS 

function App() {
  // behaviors to go w 'show-category.js'
  const [categoriesData, setCategoriesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({'title': ''});

  useEffect(() => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/food-categories`).then((response) => {
          setCategoriesData(response.data);
      }).catch((error) => {
          console.log("Error getting categories: ", error.message)
      })}, []);


  // behaviors to go w edit-category.js

  const createNewCategory = (newCategory) => { 
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/food-categories`, newCategory).then((response) => {
          const newCategories = [...categoriesData]
          newCategories.push(response.data.category);
          setCategoriesData(newCategories);
      }).catch((error) => {
          console.log('Error creating a category:', error);
          alert('Couldn\'t create a new category.');
      })};

  // behaviors for showing offerings by category
  const [offeringsData, setOfferingsData] = useState([])

  useEffect(() => {
      if (selectedCategory?.id) {
          axios.get(`${process.env.REACT_APP_BACKEND_URL}/food-categories/${selectedCategory.id}/offerings`).then((response) => {
              setOfferingsData(response.data);
              })
  }
  }, [selectedCategory]);


  // behaviors for editing offering
  const createNewOffering = (newOffering) => { 
          axios.post(`${process.env.REACT_APP_BACKEND_URL}/food-categories/${selectedCategory.id}/offerings`, newOffering).then((response) => {
              const newOfferings = [...offeringsData]
              newOfferings.push(response.data.offering)
              setOfferingsData(newOfferings);
          }).catch((error) => {
              console.log('Error:', error);
              alert('Couldn\'t create a new offering.');
          })
      };

      // this one needs to be edit desired count or smthg
  const upCountOffering = (selectedOfferingId) => {
      axios.put(`${process.env.REACT_APP_BACKEND_URL}/offerings/${selectedOfferingId}/upcount`)
      .then((response) => {
          updateOfferingsList(response.data.offering)
      })
      .catch((error) => {
          console.log("Problem upping the desired offering count", error.data.details)
      })
  };

  const deleteOffering = (selectedOfferingId) => {
      axios.delete(`${process.env.REACT_APP_BACKEND_URL}/offerings/${selectedOfferingId}`)
      .then((response) => {
      axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/food-categories/${selectedCategory.id}/offerings`)
          .then((response) => {
              setOfferingsData(response.data)
      })
          .catch((error) => {
              console.log("Issue deleting offering-upper: ", error.data.details)
          })
      })
      .catch((error) => {
          console.log("Issue deleting offering-lower: ", error.data.details)
      })
  };



  // edit OfferingList
  const updateOfferingsList = (selectedOffering) => {
      const offerings = offeringsData.map(offering => {
          if (selectedOffering.id === offering.id) {
              return selectedOffering;
          } else {
              return offering;
          }
      });
          setOfferingsData(offerings)
      };

// formatting of lines 110-119. ','s werent accepted; no error lines w ';'s
  const updateSingleOffering = (selectedOfferingId, newOfferingDetails) => {
      axios.put(`${process.env.REACT_APP_BACKEND_URL}/offerings/${selectedOfferingId}`, newOfferingDetails) 
          .then((response) => {
              const offerings = offeringsData.map(offering => {
              if (selectedOfferingId === offering.id) {
                offering.name = response.data.offering.name;
                offering.total_inventory = response.data.offering.total_inventory;
                offering.usda_organic = response.data.offering.usda_organic;
                offering.usage_time_limit = response.data.offering.usage_time_limit;
                offering.side_effects = response.data.offering.side_effects;
                offering.contribution_date = response.data.offering.contribution_date;
                offering.bake_date = response.data.offering.bake_date;
                offering.dried_date = response.data.offering.dried_date;
                offering.make_date = response.data.offering.make_date;
                offering.dropoff_location = response.data.offering.dropoff_location;
              }
              return offering
          })
              setOfferingsData(offerings)
          }).catch((error) => {
              console.log("Problem updating offering details", error)
          })
      };


  const deleteCategory = (selectedCategoryId) => {
          axios
          .delete(`${process.env.REACT_APP_BACKEND_URL}/food-categories/${selectedCategoryId}`)
          .then((response) => {
              axios
              .get(`${process.env.REACT_APP_BACKEND_URL}/food-categories`)
              .then((response) => {
                  setCategoriesData(response.data)
                  setCategoriesData([])
              .catch((error) => {
              console.log("Problem deleteing category-upper", error)
              })
          })
          .catch((error) => {
              console.log("Problem deleteing category-upper", error)
          })
          })
          };

  const [showCategoryForm, setShowCategoryForm] = useState(true)

  const categoryFormClick = () => {
          setShowCategoryForm(!showCategoryForm)
      }
      
      return (
              <div>
              <h1 className='homepage-title'> Welcome! </h1>
              <h2>Let's See What Seattle Growers Have to Offer: </h2>
              <button className="change-city">Change City</button> {/* this should redirect to 'edit acct info' page, where they change their delivery address */}
          
              <main>
              <section className='flex-container-wrap'>
                  <h2>Create a New Category</h2>
                  {showCategoryForm ? <NewCategoryForm createNewCategory={ createNewCategory }/> : '' }
                  {/* <div className='hide-button__container'><button class='hide-button' onClick={boardFormClick}>{showBoardForm ? 'Hide Me!' : 'Show Me!'}</button></div> */}
              </section>
          
              <section className='choose-category-prompt'>
                  <h2>Choose An Offering Category</h2> 
                  < CategoryList 
                  categoriesData={ categoriesData }
                  selectedCategory={ setSelectedCategory }
                  deleteCategory={ deleteCategory }
                  />
              </section>
          
              <section className='offerings_container'> 
          
                  <div className='currentcategory'>{selectedCategory.title}</div>
                  < OfferingList 
                  offeringsData={ offeringsData }
                  upCountOffering={ upCountOffering }
                  deleteOffering={ deleteOffering }
                  editOffering={ updateSingleOffering }
                  createNewOffering={ createNewOffering }
          
                  />
              </section>
          
              <section className='create-category-prompt'> 
                  {/* <div> */}
                      {selectedCategory.id !== null ? 
                      <>
                      <h3>Post A New Offering</h3> 
                      < NewOfferingForm createNewOffering={ createNewOffering }/>
                      </>
                      : ''
                      }
                  {/* </div> */}
                  </section>
          
              </main>
              </div>
              
          );
    };
    
    export default App;
    












// 8.15.21 use this last resort
// function App() {
//   // behaviors here

//   return (
//     <div className="App-Layout">
//       <Layout />
//     </div>
//   );
// }

// export default App;
