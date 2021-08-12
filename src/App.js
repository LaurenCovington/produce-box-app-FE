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
    <Layout />
    //<div><Login /></div> // not wrapped in context; trying to get context that doesnt exist yet; nest Login w/i Layout context tag
    //<div><Login /></div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
