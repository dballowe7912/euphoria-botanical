import React from "react";
import { withRouter } from "react-router";

// Redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

// Reselect 
import { createStructuredSelector } from "reselect";

// Components
import CartItem from "../CartItem/CartItem";

// SCSS
import './CartDropdown.scss';

const CartDropdown = ({cartItems, history}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem  
                            key={cartItem.name} 
                            name={cartItem.name} 
                            price={cartItem.price} 
                            quantity={cartItem.quantity}
                        />
                        ))
                    ) : (
                        <span className='empty-message'>Your cart is empty</span>
                    )
                }
            </div>
            <button onClick={() => history.push('/checkout')}className='btn btn-success'>Go to Checkout</button>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});



export default withRouter(connect(mapStateToProps)(CartDropdown));   
