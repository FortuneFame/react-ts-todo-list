import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface UserTask {
  id: number;
  title: string;
}

const UserTasks: React.FC = () => {
  const [tasks, setTasks] = useState<UserTask[]>([]);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then(response => response.json())
      .then(data => setTasks(data));
  }, [userId]);

  return (
    <div>
      <h2>User Tasks</h2>
      {tasks.map(task => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  );
};

export default UserTasks;
