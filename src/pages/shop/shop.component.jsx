import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data.jsx'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class Shop extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            collections:SHOP_DATA
        }
    }

render() {
   const {collections} = this.state
    return (
        <div className="shop-page">
        <h1>SHOP</h1>
            {collections.map(({id, ...otherCollectionProps}) => {
               return <CollectionPreview key={id} {...otherCollectionProps}/>
            })}
        </div>
    )
}

}

export default Shop;