import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types/state.types';
import { TaskItem } from '../../../store/types/task.types';
import TaskList from '../TaskList/TaskList';
import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';

const OfficeTaskPage: React.FC = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.taskReducer);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const office = require('../../../assets/at-the-office.svg').default;

  const officeTasks = tasks.filter((task: TaskItem) => task.type === 'Office Work');

  let filteredTasks;
  switch (filter) {
    case 'active':
      filteredTasks = officeTasks.filter((task) => !task.checked);
      break;
    case 'completed':
      filteredTasks = officeTasks.filter((task) => task.checked);
      break;
    default:
      filteredTasks = officeTasks;
      break;
  }

  return (
    <Container maxWidth={isMobile ? 'sm' : 'md'}>
      <Typography variant={isMobile ? 'h6' : 'h4'} gutterBottom style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        Office Task Page
      </Typography>
      <TaskList tasks={filteredTasks} />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <img src={office} alt="freelance" width={'50%'} />
      </div>
    </Container>
  );
};

export default OfficeTaskPage;
