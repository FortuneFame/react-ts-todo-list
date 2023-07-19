// import { ADD_TASK, EDIT_TASK, FETCH_TASKS, LOAD_TODOS, REMOVE_TASK, SET_FILTER, SET_USER_TASKS, TOGGLE_TASK } from '../constants';
// import { TaskItem } from '../types/todo.types';

// interface AddTaskAction {
//     type: typeof ADD_TASK;
//     payload: TaskItem;
// }

// interface RemoveTaskAction {
//     type: typeof REMOVE_TASK;
//     payload: string;
// }

// interface ToggleTaskAction {
//     type: typeof TOGGLE_TASK;
//     payload: string;
// }

// interface SetFilterAction {
//     type: typeof SET_FILTER;
//     payload: string;
// }

// interface EditTaskAction {
//     type: typeof EDIT_TASK;
//     payload: {
//         id: string;
//         content: string;
//     };
// }

// interface LoadTodosAction {
//     type: typeof LOAD_TODOS;
//     payload: TaskItem[];
// }

// interface FetchTasksAction {
//     type: typeof FETCH_TASKS;
// }

// interface SetUserTasksAction {
//     type: typeof SET_USER_TASKS;
//     payload: TaskItem[];
// }


// export const toggleTask = (taskId: string): TaskActionTypes => ({
//     type: TOGGLE_TASK,
//     payload: taskId,
// });

// export const editTask = (taskId: string, content: string): TaskActionTypes => ({
//     type: EDIT_TASK,
//     payload: {
//         id: taskId,
//         content,
//     },
// });

// export const removeTask = (taskId: string): TaskActionTypes => ({
//     type: REMOVE_TASK,
//     payload: taskId,
// });

// export const setFilter = (filter: string): TaskActionTypes => ({
//     type: SET_FILTER,
//     payload: filter,
// });

// export const addTask = (task: TaskItem): TaskActionTypes => ({
//     type: ADD_TASK,
//     payload: task,
// });

// export const fetchTasks = (): TaskActionTypes => ({
//     type: FETCH_TASKS,
// });

// export const loadTodos = (todos: TaskItem[]): TaskActionTypes => ({
//     type: LOAD_TODOS,
//     payload: todos,
// });

// export const setAllFilter = (): TaskActionTypes => ({
//     type: SET_FILTER,
//     payload: 'all',
// });

// export const setActiveFilter = (): TaskActionTypes => ({
//     type: SET_FILTER,
//     payload: 'active',
// });

// export const setCompletedFilter = (): TaskActionTypes => ({
//     type: SET_FILTER,
//     payload: 'completed',
// });

// export const setUserTasks = (tasks: TaskItem[]): TaskActionTypes => ({
//     type: SET_USER_TASKS,
//     payload: tasks,
// });

// export type TaskActionTypes = AddTaskAction | RemoveTaskAction | ToggleTaskAction | SetFilterAction | EditTaskAction | LoadTodosAction | FetchTasksAction | SetUserTasksAction;

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
