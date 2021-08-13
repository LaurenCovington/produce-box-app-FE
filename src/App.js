import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
//import { Login } from './pages/login.js'  <<< taken care of in Layout.js, right?
import Layout from './store/layout.js'
//import PropTypes from 'prop-types'; // https://www.freecodecamp.org/learn/front-end-libraries/react/use-proptypes-to-define-the-props-you-expect

// pulled/reconfig'd all from inspoboard-fe EXCEPT its return statement. may have addt'l logic to bring over but reserving this return for the Layout page
// the following bits connect FE calls to BE endpoints!
function App() {

  // const [categoriesData, setCategoriesData] = useState([])
  // const [selectedCategory, setSelectedCategory] = useState({
  //   'title': ''
  // });

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_BACKEND_URL}/food-categories`).then((response) => {
  //     setCategoriesData(response.data);
  //   }).catch((error) => {
  //     console.log(error.message)
  //   } )
  // }, []);

  // const createNewCategory = (newCategory) => { 
  //   axios.post(`${process.env.REACT_APP_BACKEND_URL}/food-categories`, newCategory).then((response) => {
  //     const newCategories = [...categoriesData]
  //     newCategories.push(response.data.category);
  //     setCategoriesData(newCategories);
  //   }).catch((error) => {
  //     console.log('Error:', error);
  //     alert('Couldn\'t create a new category.');
  //   })}
  
  // const [offeringsData, setOfferingsData] = useState([])

  // useEffect(() => {
  //   if (selectedCategory?.id) {
  //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/food-categories/${selectedCategory.id}/offerings`).then((response) => {
  //       setOfferingsData(response.data);
  //     })
  //   }
  // }, [selectedCategory]);

  // const createNewOffering = (newOffering) => { 
  //   axios.post(`${process.env.REACT_APP_BACKEND_URL}/food-categories/${selectedCategory.id}/offerings`, newOffering).then((response) => {
  //     const newOfferings = [...offeringsData]
  //     newOfferings.push(response.data.card)
  //     setOfferingsData(newOfferings);
  //   }).catch((error) => {
  //       console.log('Error:', error);
  //       alert('Couldn\'t create a new offering.');
  //   })
  // }










  // const upCountOffering = (selectedOfferingId) => {
  //   axios
  //   .put(`${process.env.REACT_APP_BACKEND_URL}/offerings/${selectedOfferingId}/upcount`)
  //   .then((response) => {
  //       updateCardsList(response.data.card)
  //   })
  //   .catch((error) => {
  //     console.log(error.data.details)
  //   })
  // };

  // const deleteCard = (selectedCardId) => {
  //   axios
  //   .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${selectedCardId}`)
  //   .then((response) => {
  //     axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard.id}/cards`)
  //     .then((response) => {
  //       setCardsData(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error.data.details)
  //     })
  //   })
  //   .catch((error) => {
  //     console.log(error.data.details)
  //   })
  // };

  // const updateCardsList = (selectedCard) => {
  //   const cards = cardsData.map(card => {
  //     if (selectedCard.id === card.id) {
  //       return selectedCard;
  //     } else {
  //       return card;
  //     }
  //   });
  //   setCardsData(cards)
  // };


  // const updateSingleCard = (selectedCardId, newMessage) => {
  //   axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${selectedCardId}`, newMessage) 
  //     .then((response) => {
  //       const cards = cardsData.map(card => {
  //         if (selectedCardId === card.id) {
  //           card.message = response.data.card.message
  //         }
  //         return card
  //     })
  //       setCardsData(cards)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // };


  // const deleteBoard = (selectedBoardId) => {
  //   axios
  //   .delete(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoardId}`)
  //   .then((response) => {
  //     axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
  //     .then((response) => {
  //       setBoardsData(response.data)
  //       setCardsData([])
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  //   })
  // };

  // const [showBoardForm, setShowBoardForm] = useState(true)

  // const boardFormClick = () => {
  //   setShowBoardForm(!showBoardForm)
  // }
  return (

    <div className="App-Layout">
      <Layout />
    </div>
  );
}

export default App;
