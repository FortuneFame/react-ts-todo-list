import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types/state.types';
import { TaskItem } from '../../../store/types/todo.types';
import TaskList from '../TaskList/TaskList';

const HomeWorkTaskPage: React.FC = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.taskReducer);

  const homeWorkTasks = tasks.filter((task: TaskItem) => task.type === 'Работа по дому');

  let filteredTasks;
  switch (filter) {
    case 'active':
      filteredTasks = homeWorkTasks.filter((task) => !task.checked);
      break;
    case 'completed':
      filteredTasks = homeWorkTasks.filter((task) => task.checked);
      break;
    default:
      filteredTasks = homeWorkTasks;
      break;
  }

  return (
    <div>
      <h1>Страница задач по дому</h1>
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default HomeWorkTaskPage;
