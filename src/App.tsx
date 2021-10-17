import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { UserData } from './@types/user';
import { createAnalyticsWorker } from './workers/utils';

const fetchUsers = async (): Promise<UserData | []> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    alert(`Error: ${res.status}`);
    return [];
  }
};

const App: React.FC = () => {
  const [users, setUsers] = useState<UserData | []>([]);
  const { sendAnalyticsMsg } = createAnalyticsWorker();

  const handleFetchUsers = async () => {
    const users = await fetchUsers();
    sendAnalyticsMsg({
      type: 'fetchUsers',
      createdAt: new Date(),
      userId: uuidv4(),
      msg: 'fetching some users data',
    });

    setUsers(users);

    return users;
  };

  return (
    <div>
      <h1>Analytics Shared Worker App</h1>
      <button onClick={handleFetchUsers}>Fetch users</button>
      {users?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default App;
