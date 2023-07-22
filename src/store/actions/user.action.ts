import { SET_USER, SET_ALL_USERS, SET_CURRENT_USER } from "../constants";
import { User } from "../types/user.types";

interface SetUserAction {
    type: typeof SET_USER;
    payload: User;
}

interface SetAllUsersAction {
    type: typeof SET_ALL_USERS;
    payload: User[];
}

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: User;
}

export const setCurrentUser = (user: User): UserActionTypes => ({
  type: SET_CURRENT_USER,
  payload: user
});

export type UserActionTypes = SetUserAction | SetAllUsersAction | SetCurrentUserAction;


