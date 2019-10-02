import React from 'react';
import './shop.styles.scss';
import {Route} from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';

//import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {updateCollectionsPending} from '../../redux/shop/shop.actions';


class Shop extends React.Component {
    // state = {
    //    isLoading:true
    //}

    //unSubscribeFromSnapshot = null;
    
    componentDidMount() {
        // const { updateCollectionsStartAsync} = this.props
        // const { updateCollections } = this.props;
        // const collectionRef = firestore.collection('collections')
        const {updateCollectionsPending} = this.props
        // SUBSCRIPTION METHOD TO GET SHOP ITEMS

          // this.unSubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
          // const collectionsMap = convertCollectionSnapshotToMap(snapshot)
          // updateCollections(collectionsMap);
          // this.setState({isLoading:false})
          //  })
        
          // CLASSIC FETCH METHOD TO GET SHOP ITEMS

          // collectionRef.get().then(snapshot => {
          // const collectionsMap = convertCollectionSnapshotToMap(snapshot)
          // updateCollections(collectionsMap);
          // this.setState({isLoading:false})
          // })

          // REDUX-THUNK FETCHING METHOD TO GET SHOP ITEMS

          // updateCollectionsStartAsync()
        updateCollectionsPending();
    }

    render() {
      const {match} = this.props
     
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionContainer}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollectionsPending : () => dispatch(updateCollectionsPending())
    }
}

export default connect(null,mapDispatchToProps)(Shop);