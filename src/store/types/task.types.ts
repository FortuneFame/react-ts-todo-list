export enum TaskType {
  WorkFromHome = 'Work From Home',
  Freelance = 'Freelance',
  OfficeWork = 'Office Work'
}
export interface TaskItem {
  userId: string;
  id: string;
  name: string;
  title: string;
  content: string;
  checked: boolean;
  type: TaskType;
}
export interface TaskState {
    todos: TaskItem[];
    tasks: TaskItem[];
    filter: string;
    filteredTasks: TaskItem[]; 
}

export const TaskInitialState: TaskState = {
  todos: [],
  tasks: [],
  filter: 'all',
  filteredTasks: [],
};