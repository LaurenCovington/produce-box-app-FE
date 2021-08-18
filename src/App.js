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
  const routes = {
    '/': () => <LandingPage />, // DONE
    '/register': () => <Register />, // *
    '/login': () => <Login />,   // * copy paste from register, over in pba_login or maybe use delia scrnshots to piece together?

    '/about': () => <About />, // DONE AND CART IS DONE
    '/home': () => <Home />, // not in play at this point...
    '/showOfferings': () => <Products />, // DONE

    '/demofarmerview': () => <PretendFarmer />, // DONE 
    '/demoofferingview': () => <Products />, // DONE

    '/details/:id': () => <OfferingDetails />, // ** not ready yet
    '/order': () => <OrderSummary /> // *
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
