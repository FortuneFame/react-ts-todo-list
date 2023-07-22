import { ReviewComment, ReviewSingleComment } from "./reviews.types";
import { TaskItem, TaskState } from "./task.types";
import { UserTask } from "./user-task.types";
import { User } from "./user.types";

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

export interface UserTasksState {
  [userId: string]: TaskItem[];
}

export type AppState = {
  userReducer: {
    currentUser: User;
  };
  userTaskReducer: UserTask[]; 
};

export interface CommentRootState {
  commentsReducer: {
    comments: ReviewComment[];
    singleComment: ReviewSingleComment | null;
  };
  userTaskReducer: UserTasksState;
}
