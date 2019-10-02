import { userActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser : null,
    error:null
}

const userRed = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGNIN_SUCCESS :
            return {
                ...state,
                currentUser:action.payload,
                error:null 
            }
        case userActionTypes.SIGN_OUT_SUCCESS :
            return {
                ...state,
                currentUser:null,
                error:null
            }
        case userActionTypes.SIGN_UP_FAIL :
        case userActionTypes.SIGN_OUT_FAIL :
        case userActionTypes.SIGNIN_FAIL :
            return {
                ...state,
                error: action.payload
            }
        case userActionTypes.SIGN_UP_SUCCESS : 
            return {
                ...state,
                currentUser:action.payload,
                error:null
            }
        
        default : 
        return state;
     }
    }
    
    export default userRed;