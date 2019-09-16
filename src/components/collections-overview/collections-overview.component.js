import React from 'react';

import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selector';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'



const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
        <h1>SHOP</h1>
            {   
                collections.map(({id, ...otherCollectionProps}) => {
               return <CollectionPreview key={id} {...otherCollectionProps}/>
            })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections : selectShopCollectionsForPreview
}
)

export default connect(mapStateToProps)(CollectionsOverview);