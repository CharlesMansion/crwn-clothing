import { CartActionTypes } from './cart.types';

const initialState = {
    hidden:true
}

const cartRed = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_HIDDEN : 
        return {
            ...state,
            hidden:!state.hidden
        }
        default :
        return state;
    }
}

export default cartRed