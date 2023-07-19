export enum TaskType {
  WorkFromHome = 'Работа по дому',
  Freelance = 'Фриланс',
  OfficeWork = 'Работа по офису'
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

