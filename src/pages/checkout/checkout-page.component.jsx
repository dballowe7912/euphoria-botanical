import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout-page.styles.scss';

function CheckoutPage({ cartItems, total }) {
    return (
        <div className='checkout-page'>
            <div className='checkout-header row'>
                <div className='header-block product'>
                    <span>Product</span>
                </div>
                {/* <div className='header-block'>
                    <span>Description</span>
                </div> */}
                <div className='header-block quantity'>
                    <span>Quantity</span>
                </div>
                <div className='header-block price'>
                    <span>Price</span>
                </div>
                <div className='header-block remove'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
                )
            }
            <div className='total'>
                <span>TOTAL ${total.toFixed(2)}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
