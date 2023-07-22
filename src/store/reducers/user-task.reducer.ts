import { UserTaskActionTypes } from '../actions/user-task.actions';
import { FETCH_USER_TASKS } from '../constants';
import { UserTask } from '../types/user-task.types';

const initialState: UserTask[] = [];

const userTaskReducer = (state = initialState, action: UserTaskActionTypes): UserTask[] => {
  switch (action.type) {
    case FETCH_USER_TASKS:
      return action.payload;
    default:
      return state;
  }
};

export default userTaskReducer;
