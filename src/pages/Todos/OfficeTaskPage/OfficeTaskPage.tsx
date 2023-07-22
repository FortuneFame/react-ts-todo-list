import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types/state.types';
import { TaskItem } from '../../../store/types/todo.types';
import TaskList from '../TaskList/TaskList';

const OfficeTaskPage: React.FC = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.taskReducer);

  const officeTasks = tasks.filter((task: TaskItem) => task.type === 'Работа по офису');

  let filteredTasks;
  switch (filter) {
    case 'active':
      filteredTasks = officeTasks.filter((task) => !task.checked);
      break;
    case 'completed':
      filteredTasks = officeTasks.filter((task) => task.checked);
      break;
    default:
      filteredTasks = officeTasks;
      break;
  }

  return (
    <div>
      <h1>Страница офисных задач</h1>
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default OfficeTaskPage;
