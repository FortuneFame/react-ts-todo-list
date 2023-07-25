import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TASK, LOAD_TODOS, SET_USER } from '../../store/constants';
import { TaskItem, TaskType } from '../../store/types/task.types';
import { RootState } from '../../store/types/state.types';
import HomeWorkTaskPage from './HomeWorkTaskPage';
import FreelanceTaskPage from './FreelanceTaskPage';
import OfficeTaskPage from './OfficeTaskPage';
import {
  Typography, Container, Grid, TextField, TextareaAutosize, Button, Select, MenuItem, FormControl, InputLabel, BottomNavigation, BottomNavigationAction, Box
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { ThemeContext } from '../../Context/themeContext';

const Todos: React.FC = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState<TaskType>(TaskType.WorkFromHome);
  const [value, setValue] = useState('homeWork');
  const [currentPage, setCurrentPage] = useState('homeWork');
  const { currentUser } = useSelector((state: RootState) => state.userReducer);
  const tasks = useSelector((state: RootState) => state.taskReducer.tasks);
  const appTheme = useContext(ThemeContext).theme;
  const dispatch = useDispatch();

  const about = require('../../assets/about-me.svg').default;

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (savedUser && savedUser.id) {
      dispatch({ type: SET_USER, payload: savedUser });
    }
  }, [dispatch]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      dispatch({ type: LOAD_TODOS, payload: JSON.parse(savedTodos) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && title && content) {
      const newTask: TaskItem = {
        id: uuidv4(),
        userId: currentUser?.id,
        name,
        title,
        content,
        checked: false,
        type,
      };
      dispatch({ type: ADD_TASK, payload: newTask });
      setName('');
      setTitle('');
      setContent('');
    }
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'homeWork':
        return <HomeWorkTaskPage />;
      case 'freelance':
        return <FreelanceTaskPage />;
      case 'officeWork':
        return <OfficeTaskPage />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" style={{ textAlign: 'center', padding: '30px' }}>
        Hello, {currentUser?.firstName} {currentUser?.lastName}!
      </Typography>
      <Grid p={'20px'} item xs={12} sm={6} md={4} lg={3} xl={2} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={about} alt="about" width={'60%'} />
      </Grid>
      <Typography variant="h5" textAlign={'center'} p={5} gutterBottom>
        Let's add a task!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputLabelProps={{ style: { color: appTheme.palette.text.primary } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              InputLabelProps={{ style: { color: appTheme.palette.text.primary } }}
            />
          </Grid>
          <Grid item xs={12} marginBottom={'20px'}>
            <TextareaAutosize
              minRows={4}
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ width: '100%', padding: '20px', resize: 'none', backgroundColor: 'inherit', color: appTheme.palette.text.primary }}
            />
          </Grid>
          <Grid item xs={12} marginBottom={'30px'}>
            <FormControl fullWidth variant="outlined">
              <InputLabel sx={{ color: appTheme.palette.text.primary }}>Task Type</InputLabel>
              <Select
                style={{ width: '100%' }}
                value={type}
                onChange={(e) => setType(e.target.value as TaskType)}
                label="Task Type"
              >
                <MenuItem style={{ color: appTheme.palette.primary.main }} value={TaskType.WorkFromHome}>Work From Home</MenuItem>
                <MenuItem style={{ color: appTheme.palette.primary.main }} value={TaskType.Freelance}>Freelance</MenuItem>
                <MenuItem style={{ color: appTheme.palette.primary.main }} value={TaskType.OfficeWork}>Office Work</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} marginBottom={'50px'} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" variant="contained" color="primary">
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box sx={{ width: '100%', marginBottom: '50px' }}>
        <BottomNavigation
          style={{ width: '100%', backgroundColor: 'inherit' }}
          value={value}
          onChange={(_event, newValue) => {
            setValue(newValue);
            handlePageChange(newValue);
          }}
        >
          <BottomNavigationAction
            style={{
              height: '80px',
              color: appTheme.palette.text.primary,
              border: '1px solid #EBEBEB'
            }} label="Home Tasks" value="homeWork" icon={<HomeIcon style={{ marginBottom: '10px' }} />} />
          <BottomNavigationAction
            style={{
              height: '80px',
              color: appTheme.palette.text.primary,
              border: '1px solid #EBEBEB'
            }} label="Freelance Tasks" value="freelance" icon={<WorkIcon style={{ marginBottom: '10px' }} />} />
          <BottomNavigationAction
            style={{
              height: '80px',
              color: appTheme.palette.text.primary,
              border: '1px solid #EBEBEB'
            }} label="Office Tasks" value="officeWork" icon={<BusinessCenterIcon style={{ marginBottom: '10px' }} />} />
        </BottomNavigation>
      </Box>
      {renderPageContent()}
    </Container>
  );
};

export default Todos;
