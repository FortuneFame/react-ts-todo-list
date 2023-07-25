import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types/state.types';
import { TaskItem } from '../../../store/types/task.types';
import TaskList from '../TaskList/TaskList';
import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';

const HomeWorkTaskPage: React.FC = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.taskReducer);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const home = require('../../../assets/house.svg').default;
  
  const homeWorkTasks = tasks.filter((task: TaskItem) => task.type === 'Work From Home');

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
    <Container maxWidth={isMobile ? 'sm' : 'md'}>
      <Typography variant={isMobile ? 'h6' : 'h4'} gutterBottom style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        Home Tasks Page
      </Typography>
      <TaskList tasks={filteredTasks} />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <img src={home} alt="freelance" width={'50%'} />
      </div>
    </Container>
  );
};

export default HomeWorkTaskPage;
