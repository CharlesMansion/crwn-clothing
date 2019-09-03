import { CartActionTypes } from './cart.types';

export const toggleHidden = () => {
    return {
        type:CartActionTypes.TOGGLE_HIDDEN
    }
}