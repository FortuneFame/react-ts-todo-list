import { createSelector } from 'reselect';
import { RootState } from '../store/types/state.types';
import { TaskItem, TaskType } from '../store/types/todo.types';

const getTasks = (state: RootState) => state.taskReducer.tasks;
const getUserId = (state: RootState) => state.userReducer.currentUser?.id;

export const getUserTasks = createSelector(
  [getTasks, getUserId],
  (tasks, userId) => tasks.filter(task => task.userId === userId)
);

export const selectTasksByType = (state: RootState, type: TaskType): TaskItem[] => {
  return state.taskReducer.tasks.filter(task => task.type === type);
}
