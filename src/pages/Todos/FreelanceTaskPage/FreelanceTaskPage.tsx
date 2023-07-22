import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types/state.types';
import { TaskItem } from '../../../store/types/todo.types';
import TaskList from '../TaskList/TaskList';

const FreelanceTaskPage: React.FC = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.taskReducer);

  const freelanceTasks = tasks.filter((task: TaskItem) => task.type === 'Фриланс');

  let filteredTasks;
  switch (filter) {
    case 'active':
      filteredTasks = freelanceTasks.filter((task) => !task.checked);
      break;
    case 'completed':
      filteredTasks = freelanceTasks.filter((task) => task.checked);
      break;
    default:
      filteredTasks = freelanceTasks;
      break;
  }

  return (
    <div>
      <h1>Страница фриланс задач</h1>
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default FreelanceTaskPage;
