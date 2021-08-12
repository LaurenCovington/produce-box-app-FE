// import { useState, useEffect } from 'react';
// import axios from 'axios';
import logo from './logo.svg'; // REMOVE LATER
import { Login } from './pages/login.js'
import Layout from './store/layout.js'
// import './App.css';
// import PropTypes from 'prop-types'; // https://www.freecodecamp.org/learn/front-end-libraries/react/use-proptypes-to-define-the-props-you-expect
// import CategoryList from './components/CategoryList'
// import OfferingList from './components/CategoryList'
// import NewCategoryForm from './components/NewCategoryForm'
// import NewOfferingForm from './components/NewOfferingForm'

// // should this be on the home page? if so, should lines 6 and 7 be there too?
// import NewUserForm from './components/NewUserForm'


function App() {
  return (
    <div className="App-Layout">
      <Layout />
    </div>
  );
}

export default App;
