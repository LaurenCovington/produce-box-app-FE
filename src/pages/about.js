import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import Footer from "../components/footer";
import { Navbar } from "../components/navbar";
import { BrowserRouter } from "react-router-dom";
//import "../../styles/home.scss";

// if there's time, build out navbar links below! example offering and list of made up farmers respectively

export const About = () => {
	return (
		<div className="text-center mt-5">

			<nav id="navbar">
				<a href="/">Join</a>
				<a href="/farmers">See Some of Our Donors!</a>
        	</nav>

            <h1 className='about-title'> Welcome! </h1>
			<br />

			<h2>What We Do and Why</h2>
			<br />
			<h2>
				Small, local community food movements often have trouble coordinating effors when bringing certain
                community supported agriculture initiatives to life. The problem the project hopes to solve is one of
                connecting all parties involved in creating a produce delivery system for a neighborhood.
			</h2>
			<br />
			<br />
			<h2> 
				The product will allow community residents to view and choose culturally-relevant foods they might like delivered,
				send that information to local growers who participate at farmer's markets 
				--urban farmers as well as rural ones in a given state--so that they can bring what's requested 
				to a city, and offer a 'connector' non-profit the final collection of info for each household: 
				what and how much needs to be delivered and delivery address so that employees can deliver.
			</h2>

			<h2>
				<a href='/demofarmerview'><button className="walkthrough-button">Get a Sense of How It Works</button></a> 
			</h2>

			<p className='welcomepage-photo'>
				<img src='https://images.unsplash.com/photo-1486328228599-85db4443971f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80' alt='Greenhouse with fruiting tomato plants pictured' />
			</p>

			<div>
				<a href="https://github.com/LaurenCovington/">
					Code Housed Here 
				</a>
			</div>

			<div>
				<BrowserRouter>
					<Link to="/login">Logout</Link>
				</BrowserRouter>
                
            </div>

			<Footer />
			
		</div>
	);
};
export default About;
