import { CartActionTypes } from './cart.types';

export const toggleHidden = () => {
    return {
        type:CartActionTypes.TOGGLE_HIDDEN
    }
}

export const addItem = (item) => {
    return {
        type:CartActionTypes.ADD_ITEM,
        payload:item
    }
} 