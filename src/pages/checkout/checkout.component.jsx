import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = ({cartItems,totalCost}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Qty</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItems={cartItem}/>)
            }
            <div className='total'> 
                <span>TOTAL:€{totalCost}</span>
            </div>
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    totalCost:selectCartTotal
})

export default connect(mapStateToProps)(Checkout);