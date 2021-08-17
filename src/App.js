import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
import Login from './pages/login';

import LandingPage from './pages/landingpage';
import Register from './pages/register';
import About from './pages/about';
import Home from './pages/home';
import CategoryList from './components/CategoryList';
import OfferingList from './components/OfferingList';

import {useRoutes} from 'hookrouter';
import './App.css';

function App() {
  const routes = {
    '/': () => <LandingPage />,
    '/register': () => <Register />,
    // '/login': () => <Login />,   >>>> it was supposed to be here but it never worked
    '/about': () => <About />,
    '/home': () => <Home />,
    '/categories': () => <CategoryList />,
    '/offerings': ({id}) => <OfferingList />
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
