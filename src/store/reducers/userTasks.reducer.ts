import { TaskItem } from "../types/todo.types";
import { ADD_TASK, LOAD_TODOS, REMOVE_TASK } from "../constants";
import { UserTasksState } from "../types/state.types";

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: {
    userId: string;
    task: TaskItem;
  };
}

interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: {
    userId: string;
    taskId: string;
  };
}

interface LoadTodosAction {
  type: typeof LOAD_TODOS;
  payload: {
    userId: string;
    todos: TaskItem[];
  };
}

export type UserTasksActionTypes = AddTaskAction | RemoveTaskAction | LoadTodosAction;

const userTasksReducer = (state: UserTasksState = {}, action: UserTasksActionTypes): UserTasksState => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        [action.payload.userId]: [...(state[action.payload.userId] || []), action.payload.task]
      };
    case REMOVE_TASK:
      return {
        ...state,
        [action.payload.userId]: state[action.payload.userId].filter(task => task.id !== action.payload.taskId)
      };
    case LOAD_TODOS:
      return {
        ...state,
        [action.payload.userId]: action.payload.todos
      };
    default:
      return state;
  }
};

export default userTasksReducer;
