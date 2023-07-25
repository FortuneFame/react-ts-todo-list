import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, Avatar, Button, Grid, Typography, Box } from '@mui/material';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleUserClick = (id: number) => {
    navigate(`/user/${id}`);
  };

  return (
    <>
    <Grid container spacing={2} sx={{ p: 2, justifyContent: 'center' }}>
      {users.map(user => (
        <Grid item xs={12} sm={6} md={5} lg={4} key={user.id}>
          <Card 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: '250px',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              '&:hover': {
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
                transform: 'scale(1.05)',
              },
            }}
          >
            <Avatar 
              alt="avatar-user"
              src={`https://randomuser.me/api/portraits/thumb/men/${user.id % 100}.jpg`}
              sx={{ width: 80, height: 80, my: 2 }}
            />
            <CardContent style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
              <Typography variant="h6" gutterBottom>
                {user.name}
              </Typography>
              <Button variant="contained" color="primary" onClick={() => handleUserClick(user.id)}>
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
      
      </Grid>
      <Box padding={'25px'} style={{ display: 'flex', justifyContent:'center' }}>
        <Button  variant="contained" color="primary" component={Link} to="/">
          Back
        </Button>
      </Box>
    </>
  );
};

export default UserList;
