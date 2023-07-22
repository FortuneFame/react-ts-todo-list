import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import taskReducer from './task.reducer';

export default combineReducers({
    taskReducer,
    userReducer,
})