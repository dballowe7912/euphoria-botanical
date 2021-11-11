import React from "react";
import { connect } from "react-redux";

import CartItem from "../CartItem/CartItem";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import './CartDropdown.scss';

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => (
                        <CartItem  
                            key={cartItem.name} 
                            name={cartItem.name} 
                            price={cartItem.price} 
                            quantity={cartItem.quantity}
                        />
                        ))
                }
            </div>
            <button className='btn btn-success'>Go to Checkout</button>
        </div>
    )
};

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});



export default connect(mapStateToProps)(CartDropdown);   
