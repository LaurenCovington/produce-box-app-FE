import React, { Component } from 'react';
import {ProductConsumer} from '../store/appContext';



export default class Product extends Component {
    render(props) {
        const {id,img,name, price,isInCart}=this.props.product;
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
