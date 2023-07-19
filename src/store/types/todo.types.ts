export interface TaskItem {
    userId: string;
    id: string;
    name: string;
    title: string;
    content: string;
    checked: boolean;
    type: string;
}

export interface TaskState {
    todos: TaskItem[];
    tasks: TaskItem[];
    filter: string;
    filteredTasks: TaskItem[]; 
}

