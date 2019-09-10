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

export const removeItem = (item) => {
    return {
        type:CartActionTypes.REMOVE_ITEM,
        payload:item
    }
}

export const eraseItem = (item) => {
    return {
        type:CartActionTypes.ERASE_ITEM,
        payload:item
    }
}