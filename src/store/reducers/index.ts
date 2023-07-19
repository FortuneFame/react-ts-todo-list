import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import taskReducer from './task.reducer';
import userTasksReducer from './userTasks.reducer';

export default combineReducers({
    taskReducer,
    userReducer,
    userTasksReducer
})