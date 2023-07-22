import { ADD_TASK, EDIT_TASK, LOAD_TODOS, REMOVE_TASK, SET_FILTER, TOGGLE_TASK } from '../constants';
import { TaskItem } from '../types/todo.types';

interface AddTaskAction {
    type: typeof ADD_TASK;
    payload: TaskItem;
}

interface RemoveTaskAction {
    type: typeof REMOVE_TASK;
    payload: string;
}

interface ToggleTaskAction {
    type: typeof TOGGLE_TASK;
    payload: string;
}

interface SetFilterAction {
    type: typeof SET_FILTER;
    payload: string;
}

interface EditTaskAction {
    type: typeof EDIT_TASK;
    payload: {
        id: string;
        content: string;
    };
}

interface LoadTodosAction {
    type: typeof LOAD_TODOS;
    payload: TaskItem[];
}

export type TaskActionTypes = AddTaskAction | RemoveTaskAction | ToggleTaskAction | SetFilterAction | EditTaskAction | LoadTodosAction;
