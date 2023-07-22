import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Checkbox } from '@mui/material';
import { EDIT_TASK, REMOVE_TASK, TOGGLE_TASK } from '../../../store/constants';
import { TaskItem } from '../../../store/types/task.types';

type TaskProps = {
    task: TaskItem ;
};

const Task: FC<TaskProps> = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [name, setName] = useState(task.name);
    const [content, setContent] = useState(task.content);

    const handleEdit = () => {
        dispatch({ type: EDIT_TASK, payload: { id: task.id, content } });
        setIsEditing(false);
    };

    const handleEditTitle = () => {
        dispatch({ type: EDIT_TASK, payload: { id: task.id, title } });
        setIsEditingTitle(false);
    };

    const handleEditName = () => {
        dispatch({ type: EDIT_TASK, payload: { id: task.id, name } });
        setIsEditingName(false);
    };

    return (
        <div className={`task ${task.checked ? 'completed' : ''}`}>
            <Checkbox
                checked={task.checked}
                onChange={() => dispatch({ type: TOGGLE_TASK, payload: task.id })}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <div>
                <div onClick={() => setIsEditingTitle(true)}>
                    {isEditingTitle ? (
                        <div>
                            <input type="text" value={title} onChange={e => setTitle(e.target.value)} onBlur={handleEditTitle} />
                            <button onClick={handleEditTitle}>Сохранить</button>
                        </div>
                    ) : (
                        task.title
                    )}
                </div>
                <div onClick={() => setIsEditingName(true)}>
                    {isEditingName ? (
                        <div>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} onBlur={handleEditName} />
                            <button onClick={handleEditName}>Сохранить</button>
                        </div>
                    ) : (
                        task.name
                    )}
                </div>
                {isEditing ? (
                    <div>
                        <input type="text" value={content} onChange={e => setContent(e.target.value)} />
                        <button onClick={handleEdit}>Сохранить</button>
                    </div>
                ) : (
                    <div onClick={() => setIsEditing(true)}>{task.content}</div>
                )}
            </div>
            <Button variant="contained" color="secondary" onClick={() => dispatch({ type: REMOVE_TASK, payload: task.id })}>
                Удалить
            </Button>
        </div>
    );
};

export default Task;
