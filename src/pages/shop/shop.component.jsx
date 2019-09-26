import React from 'react';
import './shop.styles.scss';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';

import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import {updateCollections} from '../../redux/shop/shop.actions';

import withSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionWithSpinner = withSpinner(Collection)

class Shop extends React.Component {
    state = {
        isLoading:true
    }

    unSubscribeFromSnapshot = null;
    
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections')
        this.unSubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
           const collectionsMap = convertCollectionSnapshotToMap(snapshot)
           updateCollections(collectionsMap);
           this.setState({isLoading:false})
        })
    }
    render() {
      const {match} = this.props
      const {isLoading} = this.state
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={isLoading} {...props}/>}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollections : collections => dispatch(updateCollections(collections))
    }
}

export default connect(null,mapDispatchToProps)(Shop);