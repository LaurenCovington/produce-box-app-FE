// 'see how it works' button leads to this page/comp to show how farmer would post an offering (leave category alone on home)
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { BrowserRouter } from "react-router-dom";

import CategoryList from "../components/CategoryList";
import Category from "../components/Category";
import OfferingList from "../components/OfferingList";
import Offering from "../components/Offering";
import NewCategoryForm from "../components/NewCategoryForm";
import NewOfferingForm from "../components/NewOfferingForm";

export const PretendFarmer = () => {
    // behaviors to go w 'show-category.js'
    const [categoriesData, setCategoriesData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({'category_title': ''});

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/food-categories`).then((response) => {
            setCategoriesData(response.data);
            console.log('get request FE INCOMING RESPONSE: ', response)
        }).catch((error) => {
            console.log("Error getting categories: ", error.message)
        })}, []);


  // behaviors to go w edit-category.js
    const createNewCategory = (newCategory) => { 
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/food-categories`, newCategory).then((response) => {
            const newCategories = [...categoriesData]
            newCategories.push(response.data.category);
            setCategoriesData(newCategories);
            console.log('post request FE INCOMING RESPONSE: ', response)
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
                    setOfferingsData([])})
                .catch((error) => {
                console.log("Problem deleteing category-upper", error)
                })
            })
            .catch((error) => {
                console.log("Problem deleteing category-lower", error)
            })
            }

    const [showCategoryForm, setShowCategoryForm] = useState(true)
	
    return (
		<div className="whole-walkthrough-page">
            <Navbar />

            <h1 className='walkthrough-title'> Our Farmers Agree To Contribute Portions of Their Harvests. </h1>
			<br />
			<h2 className='walkthrough-title-2'>Here's How They Share Their Contributions.</h2>
            <br />
            <h3 className='walkthrough-title-3'>Different regions yield different types of foods. Farmers can create categories according to what they can offer.</h3>
            <br />

            <section className='create-cat'>
                <h2>Create a New Category</h2>
                {showCategoryForm ? <NewCategoryForm createNewCategory={ createNewCategory }/> : '' }
            </section>
            <br />

            <section className='choose-category-prompt'>
                <h2>Choose An Offering Category</h2> 
                    < CategoryList 
                        categoriesData={ categoriesData }
                        selectedCategory={ setSelectedCategory }
                        deleteCategory={ deleteCategory }
                    />
            </section>

            <section className='offerings-container'> 
                <div className='currentcategory'>Contribute to the {selectedCategory.category_title} Category Below</div>
                    < OfferingList 
                        offeringsData={ offeringsData }
                        upCountOffering={ upCountOffering }
                        deleteOffering={ deleteOffering }
                        editOffering={ updateSingleOffering }
                        createNewOffering={ createNewOffering }
                    />
            </section>

            <section className='create-offering'> 
                {selectedCategory.id !== null ? 
                    <>
                    <h3>Post A New Offering</h3> 
                    
                    <NewOfferingForm createNewOffering={ createNewOffering }/>
                    </>
                    : ''

                }
            </section>
			
            <br />
			<h2 className='show-offerings-container'>
				<a className="show-offerings-button" href='/demoofferingview'><button>Submit the Posting to See What Our Community Residents Choose From</button></a> 
			</h2>

			{/* <p className='welcomepage-photo'>
				<img src='https://images.unsplash.com/photo-1486328228599-85db4443971f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80' alt='Greenhouse with fruiting tomato plants pictured' />
			</p> */}

			<div className='remnant'>
				<a href="https://github.com/LaurenCovington/">
					Code Housed Here 
				</a>
			</div>

			<div className='remnant'>
				<a href="/login">Logout</a>
                
            </div>
            <div className='remnant'>
                <Footer />
            </div>
			
			
		</div>
	);
};
export default PretendFarmer;
