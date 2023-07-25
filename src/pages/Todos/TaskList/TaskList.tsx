import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../Task';
import { SET_FILTER } from '../../../store/constants';
import { RootState } from '../../../store/types/state.types';
import { TaskItem } from '../../../store/types/task.types';
import { Button, Grid, Typography, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { FilterList } from '@mui/icons-material';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';

type TaskListProps = {
  tasks?: TaskItem[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
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
    <Box sx={{ flexGrow: 1, padding: matches ? 3 : 1 }}>
      <Box sx={{ marginBottom: 2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Typography variant="body2" sx={{ marginRight: '15px' }}>
              Active Tasks:
            </Typography>
            <FilterListOffIcon />
            <Typography variant="body2" sx={{ marginLeft: 1 }}>
              {activeTasksCount}
            </Typography>
          </Box>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} >
            <Button
              fullWidth
              variant={filter === 'all' ? "contained" : "outlined"}
              style={filter === 'all' ? { backgroundColor: theme.palette.primary.main, color: ' #EBEBEB' } : { color: theme.palette.text.primary }}
              onClick={() => handleFilterChange('all')}>
              All Tasks
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              fullWidth
              variant={filter === 'active' ? "contained" : "outlined"}
              style={filter === 'active' ? { backgroundColor: theme.palette.primary.main, color: '#EBEBEB' } : { color: theme.palette.text.primary }}
              onClick={() => handleFilterChange('active')}>
              Active Tasks
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              fullWidth
              variant={filter === 'completed' ? "contained" : "outlined"}
              style={filter === 'completed' ? { backgroundColor: theme.palette.primary.main, color: '#EBEBEB' } : { color: theme.palette.text.primary }}
              onClick={() => handleFilterChange('completed')}>
              Completed Tasks
            </Button>
          </Grid>
        </Grid>
      </Box>
      <div style={{ display: 'flex', justifyContent: 'space-around'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <Typography variant="body2" sx={{ marginRight:'15px' }}>
            Filtered Tasks
          </Typography>
          <FilterList />
          <Typography variant="body2" sx={{ marginLeft: 1 }}>
            {filteredTasksCount}
          </Typography>
        </Box>
      </div>
      <Box>
        {filteredTasks.map((task: TaskItem) => (
          <Task key={task.id} task={task} />
        ))}
      </Box>
    </Box>
  );
};

export default TaskList;
