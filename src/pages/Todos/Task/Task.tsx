import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Checkbox } from '@mui/material';
import { EDIT_TASK, REMOVE_TASK, TOGGLE_TASK } from '../../../store/constants';
import { TaskItem } from '../../../store/types/todo.types';

type TaskProps = {
    task: TaskItem ;
};

const Task: FC<TaskProps> = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(task.content);

    const handleEdit = () => {
        dispatch({ type: EDIT_TASK, payload: { id: task.id, content } });
        setIsEditing(false);
    };

    return (
        <div className={`task ${task.checked ? 'completed' : ''}`}>
            <Checkbox
                checked={task.checked}
                onChange={() => dispatch({ type: TOGGLE_TASK, payload: task.id })}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <div>
                <h3>{task.title}</h3>
                <p>{task.type}</p>
                {isEditing ? (
                    <div>
                        <input type="text" value={content} onChange={e => setContent(e.target.value)} />
                        <button onClick={handleEdit}>Сохранить</button>
                    </div>
                ) : (
                    <p onClick={() => setIsEditing(true)}>{task.content}</p>
                )}
            </div>
            <Button variant="contained" color="secondary" onClick={() => dispatch({ type: REMOVE_TASK, payload: task.id })}>
                Удалить
            </Button>
        </div>
    );
}

export default Task;