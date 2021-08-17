import React from 'react';
import {ProductConsumer} from '../store/appContext'; // GET LOCATION
import {Link} from 'react-router-dom';

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
            return(
            <div className="cart-center" key={product.id}>
            <div className="img-cart">
                <img src={product.img} alt=""/> {/* was <img src={product.img} src={`/${product.img}`} alt=""/>*/}
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
            <div className="del-item" onClick={()=>deleteItem(product.id)} >
            <i className="fa fa-trash" aria-hidden="true"></i>

            </div>
    </div>
            )
})}

        {/* totals */}
        <div className="extra-info">
            <h3><span> amount :</span> ${total}</h3>

        <div className="shipping">
            <h3><span>shipping: </span>{total >90?'free':
            
            `+$${shipping}`}
            
            </h3> 
        </div>

        <h3 ><span> Total amount :</span>
        ${total>90 ?total:total+shipping}</h3>

        <div className="was-payment" onClick={closeNavCart}>
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
