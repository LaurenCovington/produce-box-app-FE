// home page: this is what users will see after logging in
//import "../../styles/home.scss";
// warning on 11???

import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import Footer from "../components/footer";
import { Navbar } from "../components/navbar";
import { BrowserRouter } from "react-router-dom";
//import "../../styles/home.scss";

export const About = () => {
	// const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">

			<nav id="navbar">
				<a href="http://localhost:3000/offerings">Get A Sense of What's Offered</a>
				<a href="http://localhost:3000/farmers">See Some of Our Donors!</a>
        	</nav>

            <h1 className='about-title'> Welcome! </h1>

			<h2>What We Do and Why</h2>

			<h2>Small, local community food movements often have trouble coordinating effors when bringing certain
                community supported agriculture initiatives to life. The problem the project hopes to solve is one of
                connecting all parties involved in creating a produce delivery system for a neighborhood. 
                The product will allow community residents to view and choose culturally-relevant foods they might like delivered,
                send that information to local growers who participate at farmer's markets 
                --urban farmers as well as rural ones in a given state--so that they can bring what's requested 
                to a city, and offer a 'connector' non-profit the final collection of info for each household: 
                what and how much needs to be delivered and delivery address so that employees can deliver.</h2>
			
			<p className='welcomepage-photo'>
				<img src='https://images.unsplash.com/photo-1486328228599-85db4443971f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80' alt='Greenhouse with fruiting tomato plants pictured' />
			</p>

			<p>
				<a href="https://github.com/LaurenCovington/">
					Code Housed Here 
				</a>
			</p>

			<p>
				<BrowserRouter>
					<Link to="/login">Logout</Link>
				</BrowserRouter>
                
            </p>

			<Footer />
			
		</div>
	);
};
export default About;
