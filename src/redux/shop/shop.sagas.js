import {shopActionTypes} from './shop.types'
import { updateCollectionsFail, updateCollectionsSuccess } from './shop.actions';
import { put, takeLatest, call, all} from 'redux-saga/effects';
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'

export function* updateCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionSnapshotToMap,snapshot)
        yield put(updateCollectionsSuccess(collectionsMap))
    }
    catch (error) {
        yield put(updateCollectionsFail(error.message))
    }
} 

export function* updateCollectionsStart() {
    yield takeLatest(
        shopActionTypes.UPDATE_COLLECTIONS_PENDING,
        updateCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([call(updateCollectionsStart)])
}