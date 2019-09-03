import { combineReducers } from 'redux';

import userRed from './user/user.reducer';
import cartRed from './cart/cart.reducer';

export default combineReducers({
    user:userRed,
    cart:cartRed
})