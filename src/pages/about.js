import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export const About = () => {
	return (
		<div className="whole-about-page">
			<Navbar /> 
			{/* <nav className="navbar">
				<a href="/">Join</a>
				<a href="/farmers">See Some of Our Donors!</a>
        	</nav> */}

			<h2 className='about-title'>What We Do and Why</h2>
			<br />
			<h2 className='about-info'>
				Small, local community food movements often have trouble coordinating effors when bringing certain
                community supported agriculture initiatives to life. The problem the project hopes to solve is one of
                connecting all parties involved in creating a produce delivery system for a neighborhood.
			</h2>
			<br />
			<br />
			<h2 className='about-info'> 
				The product will allow community residents to view and choose culturally-relevant foods they might like delivered,
				send that information to local growers who participate at farmer's markets 
				--urban farmers as well as rural ones in a given state--so that they can bring what's requested 
				to a city, and offer a 'connector' non-profit the final collection of info for each household: 
				what and how much needs to be delivered and delivery address so that employees can deliver.
			</h2>

			<h2 className='walkthrough-button-container'>
				<a className="walkthrough-button" href='/demofarmerview'><button>Get a Sense of How It Works</button></a> 
			</h2>

			<div className='aboutpage-photo-container'>
				<div className='aboutpage-photo'>
					<img src='https://images.unsplash.com/photo-1486328228599-85db4443971f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80' alt='Greenhouse with fruiting tomato plants pictured' />
				</div>

				<div className='aboutpage-photo'>
					<img src='https://images.unsplash.com/photo-1477141970786-c4258cdd87ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80' alt='Basket of tomatoes, rosemary and basil' />
				</div>

				<div className='aboutpage-photo'>
					<img src='https://images.unsplash.com/photo-1621112904887-419379ce6824?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' alt='Group Meal in a back' />
				</div>
			</div>
			

			<div className='remnant'>
				<a href="https://github.com/LaurenCovington/">
					Code Housed Here 
				</a>
			</div>

			<div className='remnant'>
				<a href="/">Logout</a>
            </div>

			<div className='remnant'>
				<Footer />
			</div>
			
		</div>
	);
};
export default About;
