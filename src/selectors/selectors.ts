import { createSelector } from 'reselect';
import { RootState } from '../store/types/state.types';

const getTasks = (state: RootState) => state.taskReducer.tasks;
const getUserId = (state: RootState) => state.userReducer.currentUser?.id;

export const getUserTasks = createSelector(
  [getTasks, getUserId],
  (tasks, userId) => tasks.filter(task => task.userId === userId)
);