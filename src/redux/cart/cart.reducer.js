import { CartActionTypes } from './cart.types';
import { addItemsToCart, eraseItemsFromCart } from './cart.utils';

const initialState = {
    hidden:true,
    cartItems: []
}

const cartRed = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_HIDDEN : 
            return {
                ...state,
                hidden:!state.hidden
            };
        case CartActionTypes.ADD_ITEM :
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM :
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartActionTypes.ERASE_ITEM :
            return {
                ...state,
                cartItems: eraseItemsFromCart(state.cartItems, action.payload)
            }
        default :
            return state;
    }
}

export default cartRed