import React from 'react'

import { connect } from 'react-redux'
import { removeItem, addItem, eraseItem } from '../../redux/cart/cart.action'

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItems, removeItem, addItem, eraseItem}) => {
   const {imageUrl, name, price, quantity} = cartItems
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>eraseItem(cartItems)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(cartItems)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={()=>removeItem(cartItems)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
    removeItem: (cartItems) => dispatch(removeItem(cartItems)),
    addItem: (cartItems) => dispatch(addItem(cartItems)),
    eraseItem: (cartItems) => dispatch(eraseItem(cartItems))

}
}

export default connect(null, mapDispatchToProps)(CheckoutItem);