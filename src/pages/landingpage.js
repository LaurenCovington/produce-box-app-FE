import React, { useContext } from "react";
import { BrowserRouter, Link } from 'react-router-dom';
//import { Context } from "../store/appContext";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
//import "../../styles/home.css";

export const LandingPage = () => {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<div className="start-buttons">
				<a href="/login">Login</a>
                <a href="/register">Register</a>
			</div>


			<div className='landingpage-text-container'>

				<div className='subcontainer-1'>
					<div className='landingpage-rundown'>
						<h1>With the Produce Box App, get free food deliveries and connect with your community</h1>
					</div>
					<div className='landingpage-tag'>
						<h2>Sign up for free and provide a delivery address to see what's offered in your area and arrange drop-offs.</h2>
					</div>
				</div>

				<div className='subcontainer-2'>
					<div className='landingpage-photo-container'>
						<div>
							<img className='landingpage-photo' src='https://images.unsplash.com/photo-1458917524587-d3236cc8c2c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' alt='Greenhouse with fruiting tomato plants pictured' />
						</div>
					</div>
				</div>
			</div>
		
		<div className='remnant'>
			<a href="https://github.com/LaurenCovington/">Code Housed Here </a>
		</div>
		<div className='remnant'>
			<Footer />
		</div>

		</div>
	);
};
export default LandingPage;
