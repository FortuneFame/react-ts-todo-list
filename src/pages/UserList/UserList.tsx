import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
    <div className="users-container">
      {users.map(user => (
        <div className="user-card" key={user.id}>
          <div>
            <img
              alt="avatar-user"
              src={`https://randomuser.me/api/portraits/thumb/men/${
                user.id % 100
              }.jpg`}
            />
          </div>
          <div>
            <h3>{user.name}</h3>
          </div>
          <button onClick={() => handleUserClick(user.id)}>View Details</button>
        </div>
      ))}
      <Link to="/">Back</Link>
    </div>
  );
};

export default UserList;
