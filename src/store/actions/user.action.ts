// import { SET_USER, SET_ALL_USERS, SET_CURRENT_USER } from "../constants";

// interface SetUserAction {
//     type: typeof SET_USER;
//     payload: User;
// }

// interface SetAllUsersAction {
//     type: typeof SET_ALL_USERS;
//     payload: User[];
// }

// interface SetCurrentUserAction {
//   type: typeof SET_CURRENT_USER;
//   payload: User;
// }

// interface SetCurrentUserAction {
//   type: typeof SET_CURRENT_USER;
//   payload: User;
// }

// export const setCurrentUser = (user: User): UserActionTypes => ({
//   type: SET_CURRENT_USER,
//   payload: user
// });

// export interface User {
//     id: string;
//     firstName: string;
//     lastName: string;
// }

// export type UserActionTypes = SetUserAction | SetAllUsersAction | SetCurrentUserAction;

// // import { SET_USER } from "../constants";

// // interface SetUserAction {
// //     type: typeof SET_USER;
// //     payload: { id: string, firstName: string, lastName: string };
// // }

// // export type UserActionTypes = SetUserAction;

import { SET_USER, SET_ALL_USERS, SET_CURRENT_USER } from "../constants";

interface SetUserAction {
    type: typeof SET_USER;
    payload: User;
}

interface SetAllUsersAction {
    type: typeof SET_ALL_USERS;
    payload: User[];
}

export type UserActionTypes = SetUserAction | SetAllUsersAction | SetCurrentUserAction;

export interface User {
    id: string;
    firstName: string;
    lastName: string;
}

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: User;
}

export const setCurrentUser = (user: User): UserActionTypes => ({
  type: SET_CURRENT_USER,
  payload: user
});