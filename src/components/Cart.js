import React from 'react';
import {ProductConsumer} from '../store/appContext';
import {Link} from 'react-router-dom';
import { Data } from '../store/data';

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
                    <button className='test' onClick={()=>deleteItem(product.id)}>Remove</button>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </div>
    </div>
            )
})}

        {/* totals */}
        <div className="extra-info">
            <h3><span> Amount Saved:</span> ${total}</h3>

        <div className="shipping">
            <h3><span>Delivery Costs Saved: </span>{total > 90? 'free':
            
            `$${shipping}`}
            
            </h3> 
        </div>

        <h3 ><span> Total Amount Saved:</span>
        ${total>90 ?total:total + shipping}</h3>

        <div className="payment" onClick={closeNavCart}>
                <a href='/order'>Confirm Delivery Info</a>
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
