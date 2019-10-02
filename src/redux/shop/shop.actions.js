import { shopActionTypes } from './shop.types';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

export const updateCollectionsPending = (() => {
    return {
        type:shopActionTypes.UPDATE_COLLECTIONS_PENDING,
     
    }
})

export const updateCollectionsSuccess = (collectionsMap) => {
    return {
        type:shopActionTypes.UPDATE_COLLECTIONS_SUCCESS,
        payload:collectionsMap
    }
}

export const updateCollectionsFail = (error) => {
    return {
        type:shopActionTypes.UPDATE_COLLECTIONS_FAIL,
        payload:error
    }
}

export const updateCollectionsStartAsync = (() => {
    return dispatch => {
      
        const collectionRef = firestore.collection('collections')
        dispatch(updateCollectionsPending())
        collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot)
        dispatch(updateCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(updateCollectionsFail(error.message)))
    }
})