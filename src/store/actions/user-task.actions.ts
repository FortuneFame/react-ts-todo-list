import { ThunkAction } from 'redux-thunk';
import { AppState } from '../types/state.types';
import { Action } from 'redux';
import { FETCH_USER_TASKS } from '../constants';
import { UserTask } from '../types/user-task.types';

interface FetchUserTasksAction {
  type: typeof FETCH_USER_TASKS;
  payload: UserTask[];
}

export type UserTaskActionTypes = FetchUserTasksAction;

export const fetchUserTasks = (userId: string): ThunkAction<void, AppState, unknown, Action<string>> => async dispatch => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  const data = await response.json();
  
  dispatch({
    type: FETCH_USER_TASKS,
    payload: data,
  });
};
