import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/Atoms/Loader/Loader';
import Checkbox from '../../../components/Atoms/Checkbox/Checkbox';

interface UserTask {
  id: number;
  title: string;
  completed: boolean;
}

const UserTasks: React.FC = () => {
  const [tasks, setTasks] = useState<UserTask[]>([]);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then(response => response.json())
      .then(data => setTasks(data));
  }, [userId]);

  if (!tasks) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Loader />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
      <Typography marginBottom={'20px'} variant="h4" component="h2" gutterBottom>User Tasks:</Typography>
      {tasks.map(task => (
        <Card key={task.id} sx={{ border:'1px solid #EBEBEB',width: '100%', m: 1, p: 1, backgroundColor: 'transparent' }}>
          <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography
              textAlign={'start'}
              width={'80%'}
              marginBottom={'10px'}
              variant="body1"
              component="p"
              sx={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title.charAt(0).toUpperCase() + task.title.slice(1)}
            </Typography>
            <Checkbox
              width={'20%'}
              checked={task.completed}
              aria-label='controlled'
              onChange={() => { }}
              disabled
            />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default UserTasks;
