import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userRed from './user/user.reducer';
import cartRed from './cart/cart.reducer';
import directoryRed from './directory/directory.reducer';
import shopRed from './shop/shop.reducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user:userRed,
    cart:cartRed,
    directory:directoryRed,
    shop:shopRed
})

export default persistReducer(persistConfig, rootReducer)