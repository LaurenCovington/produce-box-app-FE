import React, { lazy, useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import {useRoutes} from 'hookrouter';
import './App.css';

//import Login from './pages/login';
const Login = lazy(() => import('./pages/login'));

//import LandingPage from './pages/landingpage';
const LandingPage = lazy(() => import('./pages/landingpage'));

//import Register from './pages/register';
const Register = lazy(() => import('./pages/register'));

//import About from './pages/about';
const About = lazy(() => import('./pages/about'));

//import Home from './pages/home';
const Home = lazy(() => import('./pages/home'));

//import Cart from './components/Cart';
const Cart = lazy(() => import('./components/Cart'));

//import OfferingDetails from './components/OfferingDetails';
const OfferingDetails = lazy(() => import('./components/OfferingDetails'));

//import OrderSummary from './components/OrderSummary';
const OrderSummary = lazy(() => import('./components/OrderSummary'));

//import PretendFarmer from './pages/pretendfarmer';
const PretendFarmer = lazy(() => import('./pages/pretendfarmer'));

//import Products from './components/Products';
const Products = lazy(() => import('./components/Products'));



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
