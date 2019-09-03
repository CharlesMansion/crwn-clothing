import React from 'react';

import './cart.styles.scss';

import {ReactComponent as ShoppingIcon } from './shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleHidden } from '../../redux/cart/cart.action';

const Cart = ({toggleHidden}) => {
    return (
        <div className="cart-icon" onClick={toggleHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleHidden: () => dispatch(toggleHidden())
    }
}

export default connect(null, mapDispatchToProps)(Cart);