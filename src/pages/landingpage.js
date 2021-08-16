// home page: this is what users will see after logging in
//import "../../styles/home.scss";
// warning on 11???

import React, { useContext } from "react";
import { BrowserRouter, Link } from 'react-router-dom';
//import { Context } from "../store/appContext";
import Footer from "../components/footer";
import { Navbar } from "../components/navbar";
//import "../../styles/home.scss";

export const LandingPage = () => {

	return (
		<div className="text-center mt-5">
			<nav id="navbar">
				<a href="http://localhost:3000/about">What We Do and Why</a>
				<a href="http://localhost:3000/displayofferings">Check Out Our Set-Up</a>
        	</nav>

			<h1>Welcome, User!</h1>
			<h2>Please register or log in to get started:</h2>
		<BrowserRouter>
		<p>
                <Link to="/login">Login</Link>
            </p>

			<p>
                <Link to="/register">Register</Link>
            </p>

		</BrowserRouter>

			<p className='landingpage-photo'>
				<img src='https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' alt='Greenhouse with fruiting tomato plants pictured' />
			</p>
			{/* <div className="alert alert-info">{store.message || "Loading message from the backend..."}</div> message is in flux.js, part of tut */}
			<p>
				<a href="https://github.com/LaurenCovington/">
					Code Housed Here 
				</a>
			</p>
			
			<Footer />
			
		</div>
	);
};
export default LandingPage;
