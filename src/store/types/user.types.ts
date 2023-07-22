export interface FormValues {
    firstName: string;
    lastName: string;
    id: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export interface UserState {
  currentUser: User | null;
  allUsers: User[];
}
