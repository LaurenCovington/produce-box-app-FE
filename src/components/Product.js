import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../store/appContext';
import { Data } from '../store/data';


export default class Product extends Component {
    render(props) {
        const {id,img,name,total_inventory, usda_organic, usage_time_limit, side_effects, contribution_date, expiration_date, bake_date, dried_date, make_date, dropoff_location, price,isInCart}=this.props.product;
        const {addToCart,closeNavCart}=this.props;
        console.log('inside img: ', img)
        console.log('status of isInCart: ', isInCart);
        return (
            <ProductConsumer>
                {value=>{

                return(
                    <div className="product">

                <a href={`/details/${id}`} onClick={closeNavCart}>
                    <div className="img-div">
                        <img src={img}  alt="Food"/>
                    </div>
                </a>

                <div className="details">
                    <h3>{name}</h3>
                    <p>Batch Value: ${price}</p>
                    <div className="cartBtn">
                        <button onClick={addToCart} className={isInCart?'disabled':''}><i className="fas fa-shopping-cart"></i>{isInCart?'Already in cart':'Add to cart'}</button>
                    </div>
                </div>
                    </div>
                )
            }}
        </ProductConsumer>
        )
    }
}
