import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types/state.types';
import { TaskItem } from '../../../store/types/task.types';
import TaskList from '../TaskList/TaskList';
import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';

const FreelanceTaskPage: React.FC = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.taskReducer);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const freelance = require('../../../assets/freelancer.svg').default;

  const freelanceTasks = tasks.filter((task: TaskItem) => task.type === 'Freelance');

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
    <Container maxWidth={isMobile ? 'sm' : 'md'}>
      <Typography variant={isMobile ? 'h6' : 'h4'} gutterBottom style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        Freelance Tasks Page
      </Typography>
      <TaskList tasks={filteredTasks} />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <img src={freelance} alt="freelance" width={'50%'} />
      </div>
    </Container>
  );
};

export default FreelanceTaskPage;
