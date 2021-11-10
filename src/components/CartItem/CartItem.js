import React from 'react';

import './CartItem.scss';

const CartItem = (item) => {
    return (
        <div key={item.id} className='cart-item'>
            <div className='item-details'>
                <span className='name'>{item.name}</span>
                <span className='price'>{item.quantity} x ${item.price.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default CartItem;
