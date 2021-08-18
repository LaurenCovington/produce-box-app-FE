// might be tricky to adapt to OfferingList.js
import React, { Component } from 'react';
import Product from './Product';
import {ProductConsumer} from '../store/appContext'; // GET LOCATION
import Navbar from './navbar';
import Data  from '../store/data';


export default class Products extends Component {
  render() {
    return (
    <ProductConsumer>
      {value=>{
        const {data, addToCart,closeNavCart}=value;
        
        return(

        <div className="products">

        <Navbar />
        <h2>Offerings</h2>
    
        <div className="products-center">
          {data.map((product)=>{
              return  <Product key={product.id} product={product} addToCart={()=>addToCart(product.id)} closeNavCart={closeNavCart}  />
          })}  
        </div> 

      </div>
    )
}}
</ProductConsumer>
)
}
}
