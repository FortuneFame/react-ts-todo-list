import { TaskInitialState, TaskState } from "../types/task.types";
import { ADD_TASK, EDIT_TASK, LOAD_TODOS, REMOVE_TASK, SET_FILTER, TOGGLE_TASK } from "../constants";
import { TaskActionTypes } from "../actions/task.action";

const taskReducer = (state = TaskInitialState, action: TaskActionTypes): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter(task => task.userId === action.payload.userId), action.payload]
      };
    case REMOVE_TASK:
    return {
        ...state,
        tasks: state.tasks.filter(task => task.userId !== action.payload.userId && task.id !== action.payload.taskId)
    };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, checked: !task.checked } : task)
      };
    case SET_FILTER:
      let filteredTasks = [];
      if (action.payload === 'active') {
        filteredTasks = state.tasks.filter(task => !task.checked);
      } else if (action.payload === 'completed') {
        filteredTasks = state.tasks.filter(task => task.checked);
      } else {
        filteredTasks = state.tasks;
      }
      return {
        ...state,
        filter: action.payload,
        filteredTasks
      }
case EDIT_TASK:
  return {
      ...state,
      tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
              return { 
                  ...task, 
                  title: action.payload.title ?? task.title, 
                  name: action.payload.name ?? task.name,
                  content: action.payload.content ?? task.content 
              }
          }
          return task;
      })
  }
    case LOAD_TODOS:
      return {
        ...state,
        tasks: action.payload
      }
    default:
      return state;
  }
};

export default taskReducer;
