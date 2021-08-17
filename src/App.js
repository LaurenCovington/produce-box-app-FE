import React, { useState, useEffect } from 'react';
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import Login from './pages/login';

// initial
import LandingPage from './pages/landingpage';
import Register from './pages/register';
import About from './pages/about';
import Home from './pages/home';
import CategoryList from './components/CategoryList';
import OfferingList from './components/OfferingList';

// adds
//import Navbar from "./components/Navbar.js";
//import Products from './components/Products'; // coming equivalent is OfferingList above; keeping here for reference
import Cart from './components/Cart';
import OfferingDetails from './components/OfferingDetails';
//import Payment from './components/Payment'; // maybe replace w Summary?
import ShowOfferings from './components/ShowOfferings';
import OrderSummary from './components/OrderSummary';

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
    '/home': () => <Home />,
    '/showOfferings': () => <Products />,
    // '/showOfferings': () => <ShowOfferings />,
    '/details/:id': () => <OfferingDetails />, // not ready yet
    '/order': () => <OrderSummary />,

    //'/categories': () => <CategoryList />,    >>>> arent these showing on home page already?
    '/offerings': ({id}) => <OfferingList />, // why is {id} in there? typo?
  
};

  const routeResult = useRoutes(routes);

  return (
    routeResult || <h1>Not Found</h1>
    )};

  export default App;


  // return (
  //   <React.Fragment>
  //     <Navbar />
  //   <Router>
  //   <Switch>
  //     <Route exact path="/" component={LandingPage} />
  //     <Route exact path="/register" component={Register} />
  //     <Route exact path="/about" component={About} />
  //     <Route exact path="/home" component={Home} />
  //     <Route exact path="/categories" component={CategoryList} />
  //     <Route exact path="/offerings" component={OfferingList} />

  //     {/* <Route exact path="/payment" component={Payment} />
  //     <Route exact path="/details/:id" component={Details} />  */}
      
  //   </Switch>
  //   </Router>
  //    {/* <Route exact path="/cart" component={Cart} /> */}
    
  //   </React.Fragment>
  //     );
  //   }














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
