import {shopActionTypes} from './shop.types';

const INITIAL_STATE = {
    collections:null,
    isFetching:false,
    errorMessage: undefined
}

const shopRed = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.UPDATE_COLLECTIONS_PENDING : 
            return {
                ...state,
                isFetching:true
            }
        case shopActionTypes.UPDATE_COLLECTIONS_SUCCESS : 
            return {
                ...state,
                collections:action.payload,
                isFetching:false
            }
        case shopActionTypes.UPDATE_COLLECTIONS_FAIL : 
            return {
                ...state,
                isFetching:false,
                errorMessage:action.payload
            }
        default :
         return state
    }
}

export default shopRed;