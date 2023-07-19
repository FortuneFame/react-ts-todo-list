import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../../components/Task/Task';

import { SET_FILTER } from '../../store/constants';
import { RootState } from '../../store/types/state.types';

const TaskList: React.FC = () => {
    const { tasks = [], filter } = useSelector((state: RootState) => state.taskReducer);
    const dispatch = useDispatch();
    let filteredTasks;

    switch (filter) {
        case 'active':
            filteredTasks = tasks.filter(task => !task.checked);
            break;
        case 'completed':
            filteredTasks = tasks.filter(task => task.checked);
            break;
        default:
            filteredTasks = tasks;
            break;
    }

    const handleFilterChange = (filter: string) => {
        dispatch({ type: SET_FILTER, payload: filter });
    };

    return (
        <div>
            <button onClick={() => handleFilterChange('all')}>Все задачи</button>
            <button onClick={() => handleFilterChange('active')}>Активные задачи</button>
            <button onClick={() => handleFilterChange('completed')}>Выполненные задачи</button>
            {filteredTasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};


export default TaskList;