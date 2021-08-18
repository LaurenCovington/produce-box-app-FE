// equiv to Payment.js
// check Cart.js for syntax for rendering order? or just hardcode it for demo
import React, { useContext } from "react";
import { BrowserRouter, Link } from 'react-router-dom';
//import { Context } from "../store/appContext";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
//import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ProductConsumer } from "../store/appContext";

export const OrderSummary = (props) => {
	return (
		<div>
            <Navbar />



            <div className="entire-order-page">

                <h1 className='about-title'> In a Week, Your Order Will Be Delivered to the Following Location!</h1>
                <br />
                <div classname='demo-address-container'>
                    <h2>Lauren Covington</h2>
                    <h2>4312 45th Street</h2>
                    <h2>Unit 29</h2>
                    <h2>Seattle, Washington</h2>
                    <h2>98105</h2>
                    <h2>Phone: 123-456-7890</h2>
                </div>
                <br />
                <br />
                <br />
                <div classname='contributor-container'>
                    <h2>Farmer(s) Who Contributed to Your Order</h2>
                    <h2>Rowen McDowell</h2>
                    <h2>McDowell Family Farm</h2>
                    <h2>Washington State</h2>
                    <h2>98105</h2>
                    <h2>Phone: 123-456-7890</h2>
                    <br />
                    <img className='contrib-photo' src='https://images.unsplash.com/photo-1481555716071-8830d3e254ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80' alt='McDowell farm and tractor pictured'/>
                </div>
                <br />
                <br />
                <h2>Want to Make Changes to Your Delivery?</h2>
                <a href='/showOfferings'>
                    <button className='edit-order-button'>Edit Order</button>
                </a>
                <br />
                <br />
                <h2>Need to Change the Delivery Location? If your order is more than 24 hours out, you can connect with your NPO delivery person to make changes to the address.</h2>
                <br />
                {/* <h3>If your order is more than 24 hours out, you can connect with your NPO delivery person to make changes to the address.</h3> */}
                <a href='https://www.gmail.com'>
                    <button className='edit-del-loc-button'>Shoot your NPO Rep An Email!</button>
                </a>
                <br />
                <br />




            </div>








			<div className='remnant'>
				<a href="https://github.com/LaurenCovington/">
					Code Housed Here 
				</a>
			</div>

			<div className='remnant'>
				<BrowserRouter>
					<Link to="/login">Logout</Link>
				</BrowserRouter>
                
            </div>
            <div className='remnant'>
            <Footer />
            </div>
			
			




		</div>
	);
};
export default OrderSummary;
