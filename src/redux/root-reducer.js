import { combineReducers } from 'redux';

import userRed from './user/user.reducer';

export default combineReducers({
    user:userRed
})