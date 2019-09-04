import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({item:{imageUrl, name, price, quantity}}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name}/>
                <div className="item-details">
                    <span>{quantity}x{name}</span>
                    <span>€{price*quantity}</span>
                </div>
        </div>
    )
}

export default CartItem;