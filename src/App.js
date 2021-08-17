import React, { useState, useEffect } from 'react';
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import Login from './pages/login';

// initial
import LandingPage from './pages/landingpage';
import Register from './pages/register';
import About from './pages/about';
import Home from './pages/home';
// import CategoryList from './components/CategoryList';
// import OfferingList from './components/OfferingList';
// adds
import Cart from './components/Cart';
import OfferingDetails from './components/OfferingDetails';
import OrderSummary from './components/OrderSummary';
import PretendFarmer from './pages/pretendfarmer';
import PretendCommres from './pages/pretendcommres';
//import ShowOfferings from './components/ShowOfferings';

// router workaround
import {useRoutes} from 'hookrouter';
import './App.css';
import Products from './components/Products';

function App() {

// THIS WORKS but manually apply <Navbar /> and hope that React.Fragment isnt super needed...:
  const routes = {
    '/': () => <LandingPage />,
    '/register': () => <Register />,
    // '/login': () => <Login />,   >>>> it was supposed to be here but it never worked
    '/about': () => <About />,
    '/home': () => <Home />, // show <Products /> here? what exactly needs to be on home page at this point (12:26am, 8.17.21)
    '/showOfferings': () => <Products />, // duped down below but not rebuilding offerings at this point...

    '/demofarmerview': () => <PretendFarmer />,
    '/demoofferingview': () => <Products />,
    //'/pretend-nporep': () => <PretendNPO />,  >>>> taken care of w /order below (cart button sends us there)

    '/details/:id': () => <OfferingDetails />, // not ready yet
    '/order': () => <OrderSummary />, // not ready yet
    //'/categories': () => <CategoryList />,    >>>> arent these showing on home page already?
};

  const routeResult = useRoutes(routes);

  return (
    routeResult || <h1>Not Found</h1>
    )};

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
