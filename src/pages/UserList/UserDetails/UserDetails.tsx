import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import UserTasks from '../UserTasks/UserTasks';
import { Box, Typography, Avatar, Button } from '@mui/material';
import Loader from '../../../components/Atoms/Loader/Loader';

interface User {
  username: string;
  phone: string;
  website: string;
  address: any;
  id: number;
  name: string;
  email: string;
}

const UserDetails: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Loader />
      </Box>
    );
  }

  return (
    <Box className="single-user-container" sx={{ width: '100%', padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign:'center' }}>
      <Typography variant="h2" gutterBottom>User Details:</Typography>
      <Box className="user-details" sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom:'50px' }}>
        <Avatar
          alt="avatar-user"
          src={`https://randomuser.me/api/portraits/thumb/men/${parseInt(user.id.toString()) % 100}.jpg`}
          sx={{ width: 150, height: 150, marginBottom: 2 }}
        />
        <Typography><strong>Name:</strong> {user.name}</Typography>
        <Typography><strong>Login:</strong> {user.username}</Typography>
        <Typography><strong>Email:</strong> {user.email}</Typography>
        <Typography><strong>Phone:</strong> {user.phone}</Typography>
        <Typography><strong>Web:</strong> {user.website}</Typography>
        {user.address && (
          <Typography><strong>Address:</strong> city: {user.address.city}, street: {user.address.street}, {user.address.suite}</Typography>
        )}
      </Box>
      <UserTasks />
      <Button style={{margin:'25px'}} to="/users"color= "primary" component={Link} variant="contained">Back</Button>
    </Box>
  );
};

export default UserDetails;
