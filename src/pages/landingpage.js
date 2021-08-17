import React, { useContext } from "react";
import { BrowserRouter, Link } from 'react-router-dom';
//import { Context } from "../store/appContext";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
//import "../../styles/home.css";

export const LandingPage = () => {
	return (
		<div className="text-center mt-5">
			<nav id="navbar">
				<a href="/about">What We Do and Why</a>
				{/* <a href="http://localhost:3000/displayofferings">Check Out Our Set-Up</a> */}
            </nav>

			<h1>Welcome to the Produce Box!</h1>
			<h2>Please register or log in to get started:</h2>

		<BrowserRouter>
			<div className="login-buttons">
				<a href="/login">Login</a>
                <a href="/register">Register</a>
			</div>
		</BrowserRouter>

		<p className='landingpage-photo'>
			<img src='https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' alt='Greenhouse with fruiting tomato plants pictured' />
		</p>
		
		<div>
			<a href="https://github.com/LaurenCovington/">Code Housed Here </a>
		</div>
		
		<Footer />

		</div>
	);
};
export default LandingPage;
