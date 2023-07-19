import { TaskState } from "./todo.types";

export interface UserState {
  currentUser: {
    id: string;
    firstName: string;
    lastName: string;
  };
  allUsers: {
    id: string;
    firstName: string;
    lastName: string;
  }[];
}


export interface RootState {
    taskReducer: TaskState;
    userReducer: UserState;
}
