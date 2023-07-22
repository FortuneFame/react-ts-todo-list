import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import UserTasks from '../UserTasks/UserTasks';

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
    return null;
  }

  return (
    <div className="single-user-container">
      <h2>User Details</h2>
      <div className="user-details">
        <img
          width="150px"
          height="150px"
          alt="avatar-user"
          src={`https://randomuser.me/api/portraits/thumb/men/${
            parseInt(user.id.toString()) % 100
          }.jpg`}
        />
        <div>
          <strong>Name:</strong> {user.name}
        </div>
        <div>
          <strong>Login:</strong> {user.username}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Phone:</strong> {user.phone}
        </div>
        <div>
          <strong>Web:</strong> {user.website}
        </div>
        {user.address && (
          <div>
            <strong>Address:</strong> city: {user.address.city}, street:{' '}
            {user.address.street}, {user.address.suite}
          </div>
        )}
      </div>
      <UserTasks />
      <Link to="/users">Back</Link>
    </div>
  );
};

export default UserDetails;

