// home page: this is what users will see after logging in
//import "../../styles/home.scss";
// warning on 11???

import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";
import Footer from "../components/footer";
import { Navbar } from "../components/navbar";
import Category from "../components/Category";
//import "../../styles/home.scss";

export const ShowOfferings = () => {
	const { store, actions } = useContext(Context);
// WILL CATEGORY.CATEGORY_TITLE WORK OR JUST LIST A CAT NAME FOR DEMO?
	return (
		<div className="text-center mt-5">
			<div>
				<Navbar />
			</div>
        <div className="category-title">
            <h1> {Category.category_title} </h1>
            <h2>Here's What's Available for {Category.category_title} </h2>
            <button className="change-city">Change City</button> {/* this should redirect to 'edit acct info' page, where they change their delivery address */}
        </div>


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
			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div> {/* message is in flux.js, part of tut */}
			<p>
				<a href="https://github.com/LaurenCovington/">
					Code Housed Here 
				</a>
			</p>
			<p>
                <Link to="/login">Logout</Link>
            </p>
			<p><Footer /></p>
		</div>
	);
};
export default ShowOfferings;
