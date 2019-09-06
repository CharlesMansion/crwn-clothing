import React from 'react';

import './cart.styles.scss';

import {ReactComponent as ShoppingIcon } from './shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleHidden } from '../../redux/cart/cart.action';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const Cart = ({toggleHidden, cartItemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{cartItemCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
        cartItemCount: selectCartItemsCount
    })

const mapDispatchToProps = (dispatch) => {
    return {
        toggleHidden: () => dispatch(toggleHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);