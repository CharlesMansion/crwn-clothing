import { all, call } from 'redux-saga/effects';

import {updateCollectionsStart, shopSagas} from './shop/shop.sagas';
import {userSaga} from './user/user.sagas'
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
   yield all([call(updateCollectionsStart), call(userSaga), call(shopSagas), call(cartSagas)])
}