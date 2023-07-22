// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Task from '../Task/Task';
// import { SET_FILTER } from '../../../store/constants';
// import { RootState } from '../../../store/types/state.types';
// import { TaskItem } from '../../../store/types/todo.types';

// const TaskList: React.FC = () => {
//     const { tasks = [], filter } = useSelector((state: RootState) => state.taskReducer);
//     const dispatch = useDispatch();
//     const activeTasksCount = tasks.filter(task => !task.checked).length;
//     let filteredTasks;

//     switch (filter) {
//         case 'active':
//             filteredTasks = tasks.filter(task => !task.checked);
//             break;
//         case 'completed':
//             filteredTasks = tasks.filter(task => task.checked);
//             break;
//         default:
//             filteredTasks = tasks;
//             break;
//     }

//     const filteredTasksCount = filteredTasks.length;

//     const handleFilterChange = (filter: string) => {
//         dispatch({ type: SET_FILTER, payload: filter });
//     };

//     return (
//        <div>
//       <button onClick={() => handleFilterChange('all')}>Все задачи</button>
//       <button onClick={() => handleFilterChange('active')}>Активные задачи</button>
//       <button onClick={() => handleFilterChange('completed')}>Выполненные задачи</button>
//       <p>Активные задачи: {activeTasksCount}</p>
//       <p>Задачи после фильтрации: {filteredTasksCount}</p>
//       {filteredTasks.map((task: TaskItem) => (
//         <Task key={task.id} task={task} />
//       ))}
//     </div>
//     );
// };


// export default TaskList;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../Task/Task';
import { SET_FILTER } from '../../../store/constants';
import { RootState } from '../../../store/types/state.types';
import { TaskItem } from '../../../store/types/todo.types';

type TaskListProps = {
  tasks?: TaskItem[]; 
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const { filter } = useSelector((state: RootState) => state.taskReducer);
  const dispatch = useDispatch();
  const activeTasksCount = tasks ? tasks.filter(task => !task.checked).length : 0;
  let filteredTasks;

  switch (filter) {
    case 'active':
      filteredTasks = tasks ? tasks.filter(task => !task.checked) : [];
      break;
    case 'completed':
      filteredTasks = tasks ? tasks.filter(task => task.checked) : [];
      break;
    default:
      filteredTasks = tasks || [];
      break;
  }

  const filteredTasksCount = filteredTasks.length;

  const handleFilterChange = (filter: string) => {
    dispatch({ type: SET_FILTER, payload: filter });
  };

  return (
    <div>
      <button onClick={() => handleFilterChange('all')}>Все задачи</button>
      <button onClick={() => handleFilterChange('active')}>Активные задачи</button>
      <button onClick={() => handleFilterChange('completed')}>Выполненные задачи</button>
      <p>Активные задачи: {activeTasksCount}</p>
      <p>Задачи после фильтрации: {filteredTasksCount}</p>
      {filteredTasks.map((task: TaskItem) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
