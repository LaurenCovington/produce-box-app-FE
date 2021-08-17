// equiv to Payment.js
// check Cart.js for syntax for rendering order? or just hardcode it for demo
import React, { useContext } from "react";
import { BrowserRouter, Link } from 'react-router-dom';
//import { Context } from "../store/appContext";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
//import "../../styles/home.css";

export const OrderSummary = () => {
	return (
	<div className="text-center mt-5">

        {/* <nav id="navbar">
            <a href="/">Join and Get Started!</a>
            <a href="/about">Start the Tour Over</a>
        </nav>

        <h1>Look Below to See the Order</h1>

        <p className='landingpage-photo'>
		    <img src='https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' alt='Greenhouse with fruiting tomato plants pictured' />
		</p>
        
        <div class="projects-container">

        <img alt="TV showing Netflix logo, viewer's feet crossed on couch" src="https://images.unsplash.com/photo-1586899028174-e7098604235b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"></img>
            <p>Viewing Party: I created a program that allows a viewer to add movies to their watchlist, 
                transfer them to an 'Already Watched' list and select favorite videos. 
                The learning focus was nested data structures and functions modeled after the single responsibilty principle.</p>

        
        </div>
			<a href="https://github.com/LaurenCovington/">Code Housed Here </a>
		</div> */}
		
		<Footer />
    </div>

		


        //     <h2>Projects</h2>

        //     <div class="projects-container">

        //         <div class="project">
        //             <img alt="TV showing Netflix logo, viewer's feet crossed on couch" src="https://images.unsplash.com/photo-1586899028174-e7098604235b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80">
        //             <p>
        //             <a href="https://github.com/LaurenCovington/viewing-party">Viewing Party</a>: I created a program that allows a viewer to add movies to their watchlist, transfer them to an 'Already Watched' list and select favorite videos. The learning focus was nested data structures and functions modeled after the single responsibilty principle.</p>
        //         </div>

        //         <div class="project">
        //             <img alt="Vintage copy of Ebony magazine at a garage sale." src="https://images.unsplash.com/photo-1569254105483-3927aec30cb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80">
        //             <p><a href="https://github.com/LaurenCovington/swap-meet">Swap Meet</a>: I wrote a program that replicates trading items at a swap meet. Completing this project was an exercise in object-oriented programming, requiring students to work with Python objects, classes, instance and class methods and inheritance.</p>
        //         </div>

        //         <div class="project">
        //             <img alt="A figure staring up at the night sky." src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80">
        //             <p>
        //             <a href="https://github.com/LaurenCovington/solar-system-api">Solar System API - Pairing Project</a>: My first pair project involved building an API that keeps track of the planets in our galaxy. The API has CRUD functionalities and follows RESTful design principles, allowing users to log new planets, see lists of all or individual planets, update details of a planet or delete one from the database. </p>
        //         </div>

        //         <div class="project">
        //             <img alt="Written to do list and laptop picture." src="https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80">
        //             <p>
        //             <a href="https://github.com/LaurenCovington/task-list-api">Task List API</a>: I created a second API that allows a user to create, view, sort, update and delete tasks from a virtual task list. RESTful design principles and one-to-many relationships included (backend only).</p>
        //         </div>

        //         <div class="project">
        //             <img alt="Two shelves of movies, sorted by genre." src="https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80">
        //             <p>
        //             <a href="https://github.com/LaurenCovington/retro-video-store">Retro Video Store</a>: We resurrected in-person movie rental stores, creating APIs that allow a user to log and update videos in a store's database, check them out to customers and check them back in (backend only).</p>
        //         </div>

        //         <div class="project">
        //             <img alt="Digital register pictured." src="https://images.unsplash.com/photo-1556741533-411cf82e4e2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80">
        //             <p>
        //             <a href="https://github.com/LaurenCovington/video-store-cli">Retro Video Store - Command Line Interface</a>: The front-end portion of the Retro Video Store project allows a movie rental store employee to interact with the store's database. For the employee, checking movies in and out, creating new customer accounts and updating customer account information no longer require in-depth knowledge of backend programming languages.</p>
        //         </div>

        //         <div class="project">
        //             <img alt="Mirror inside mirror effect." src="https://technologybubbles.files.wordpress.com/2011/02/3334621076_3d772b506f.jpeg">
        //             <p>
        //             <a href="https://github.com/LaurenCovington/personal-portfolio-site">Personal Portfolio Site</a>: The closest I've come so far to interacting with the concept of recursion, this static website is my latest project. Completing the site has been an exercise in HTML and CSS.</p>
        //         </div>
        
        //     </div>
	
	);
};
export default OrderSummary;
