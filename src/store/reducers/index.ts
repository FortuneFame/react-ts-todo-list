import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import taskReducer from './task.reducer';
import userTaskReducer from './user-task.reducer';
import commentsReducer  from './reviews.reducer';

export default combineReducers({
    taskReducer,
    userReducer,
    userTaskReducer,
    commentsReducer
})