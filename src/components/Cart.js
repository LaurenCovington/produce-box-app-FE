import React from 'react';
import {ProductConsumer} from '../store/appContext'; // GET LOCATION
import {Link} from 'react-router-dom';
import { Data } from '../store/data';

// cartOpen and stuff are mentioned in here, Context file and Navbar file
// closeNavCart mentioned in here, context, navbar, offering, offeringlist
// handleCart... in here, context, navbar
// shipping in here and Context file

// ProductConsumer is fine but all other 'product' instances must be 'offering'
// cart is in here, App.js, context file, data, details, navbar, product (offering), and products (offeringlist)
// deleteItem - here and context file 
// increaseItem - here and context file
// decreaseItem - here and context file
// total - here and context file

// cartOpen - here, context and navbar
// handleCartNav - here, context and navbar
// product (lowercase) - here, product.js (offering), productS.js (offeringlist)


// Payment link and comp need to be like 'order review or smthg w the delivery address, contact info and pic of deliverer, if possible

export default function Cart(props) {
    const { cartOpen,
            closeNavCart,
            handleCartNav,
            shipping 
        } = props.value;
    
    return (
    <ProductConsumer>
        {value=>{
            const {cart,deleteItem,increaseItem, decreaseItem,total}= value;

        return(
            <ul className={cartOpen?"newCartNav cartNav cartItem":" cartNav cartItem"}>

            {cart.length===0 ?
        <div>
            <span className='inside-btn' onClick={handleCartNav}>X</span>
            <div className="empty">Cart is currently empty</div>
        </div>
        :

        <div className="cartItem">
        <span className='inside-btn' onClick={handleCartNav}>X</span>

        {cart.map((product)=>{
            console.log('PRODUCT IN CART: ', product)
            return(
                <div className="cart-center" key={product.id}>
                <div className="img-cart">
                    <img src={product.img} alt="Food2"/> 
                </div>

                <div className="item-cart">
                    <p>{product.name}</p>
                </div>
                    <div className="inc-dec-cart">
                    <button onClick={()=>decreaseItem(product.id)}>-</button>
                        {product.count}
                    <button onClick={()=>increaseItem(product.id)}>+</button>
                </div>
                <div className="price-cart">
                    <p>$ {product.price*product.count}</p> 
                </div>

                <div className="del-item"> {/* div used to also contain: onClick={()=>deleteItem(product.id)} */}
                    <button onClick={()=>deleteItem(product.id)}>Remove</button>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
    </div>
            )
})}

        {/* totals */}
        <div className="extra-info">
            <h3><span> Amount Saved:</span> ${total}</h3>

        <div className="shipping">
            <h3><span>Shipping Costs: </span>{total >90?'free':
            
            `+$${shipping}`}
            
            </h3> 
        </div>

        <h3 ><span> Total Amount Saved:</span>
        ${total>90 ?total:total+shipping}</h3>

        <div className="payment" onClick={closeNavCart}>
                <a href='/order'>See Order Summary</a>
        </div>

    </div>

        </div>
}

    </ul> 
        )
    }}
</ProductConsumer>
)
}
