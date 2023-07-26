import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, useMediaQuery, Box, Table, TableRow, TableCell, TableBody } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Save as SaveIcon } from '@mui/icons-material';
import { useTheme } from '@mui/system';
import { EDIT_TASK, REMOVE_TASK, TOGGLE_TASK } from '../../../store/constants';
import { TaskItem } from '../../../store/types/task.types';
import Checkbox from '../../../components/Atoms/Checkbox/Checkbox';

type TaskProps = {
    task: TaskItem;
};

const Task: FC<TaskProps> = ({ task }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [name, setName] = useState(task.name);
    const [content, setContent] = useState(task.content);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const handleEdit = () => {
        dispatch({ type: EDIT_TASK, payload: { id: task.id, content, title, name } });
        setIsEditing(false);
    };

    const handleDelete = () => {
        dispatch({ type: REMOVE_TASK, payload: { userId: task.userId, taskId: task.id } });
    };


    const TaskView = (
        <div style={{ textAlign: 'center', padding: '10px', marginBottom: '20px' }} onClick={() => setIsEditing(true)}>
            <div>{task.title}</div>
            <div>{task.name}</div>
            <div>{task.content}</div>
        </div>
    );

    const TaskEditView = (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
                style={{ marginBottom: '20px' }}
                fullWidth
                label="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <TextField
                style={{ marginBottom: '20px' }}
                fullWidth
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <TextField
                style={{ marginBottom: '20px' }}
                fullWidth
                label="Content"
                value={content}
                onChange={e => setContent(e.target.value)}
            />
        </div>
    );

    const ActionButtons = (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {isEditing ? (
                <Button variant="contained" color="success" size="small" onClick={handleEdit}>
                    <SaveIcon />
                </Button>
            ) : (
                <Button variant="contained" color="error" size="small" onClick={handleDelete}>
                    <DeleteIcon />
                </Button>
            )}
            {!isEditing && (
                <Button variant="contained" color="primary" size="small" onClick={() => setIsEditing(true)}>
                    <EditIcon />
                </Button>
            )}
        </div>
    );

    if (matches) {
        return (
            <Box style={{ textDecoration: task.checked ? 'line-through' : 'none', border: '1px solid #EBEBEB', marginBottom: '20px', padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    <Checkbox
                        checked={task.checked}
                        onChange={() => dispatch({ type: TOGGLE_TASK, payload: task.id })}
                    />
                </div>
                {isEditing ? TaskEditView : TaskView}
                {ActionButtons}
            </Box>
        );
    } else {
        return (
            <Table className={`task ${task.checked ? 'completed' : ''}`} style={{ textDecoration: task.checked ? 'line-through' : 'none' }}>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Checkbox
                                checked={task.checked}
                                onChange={() => dispatch({ type: TOGGLE_TASK, payload: task.id })}
                            />
                        </TableCell>
                        <TableCell>
                            {isEditing ? (
                                <TextField
                                    fullWidth
                                    label="Title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            ) : (
                                <div onClick={() => setIsEditing(true)}>
                                    {task.title}
                                </div>
                            )}
                        </TableCell>
                        <TableCell>
                            {isEditing ? (
                                <TextField
                                    fullWidth
                                    label="Name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            ) : (
                                <div onClick={() => setIsEditing(true)}>
                                    {task.name}
                                </div>
                            )}
                        </TableCell>
                        <TableCell>
                            {isEditing ? (
                                <TextField
                                    fullWidth
                                    label="Content"
                                    value={content}
                                    onChange={e => setContent(e.target.value)}
                                />
                            ) : (
                                <div onClick={() => setIsEditing(true)}>
                                    {task.content}
                                </div>
                            )}
                        </TableCell>
                        <TableCell>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                                {isEditing ? (
                                    <Button variant="contained" color="success" size="small" onClick={handleEdit}>
                                        <SaveIcon />
                                    </Button>
                                ) : (
                                    <Button variant="contained" color="error" size="small" onClick={handleDelete}>
                                        <DeleteIcon />
                                    </Button>
                                )}
                                {!isEditing && (
                                    <Button variant="contained" color="primary" size="small" onClick={() => setIsEditing(true)}>
                                        <EditIcon />
                                    </Button>
                                )}
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    };
};

export default Task;
