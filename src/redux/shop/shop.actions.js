import { shopActionTypes } from './shop.types';

export const updateCollections = ((collections) => {
    return {
        type:shopActionTypes.UPDATE_COLLECTIONS,
        payload: collections
    }
})