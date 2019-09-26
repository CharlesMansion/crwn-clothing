import React from 'react'

import './collection-item.styles.scss'

import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item
    return <div className="collection-item">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="collection-footer">
            <span>{name}</span>
            <span>{price}</span>
        </div>
        <CustomButton className='custom-button inverted' inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem : item => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);