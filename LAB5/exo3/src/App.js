// App.js
import React, { useState } from 'react';
import AuthenticationForm from './AuthenticationForm';
import UserList from './UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (username, password) => {
    const newUser = { username, password };
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>User Authentication and List Example</h1>
      <AuthenticationForm onFormSubmit={handleFormSubmit} />
      <UserList users={users} onDelete={handleDeleteUser} />
    </div>
  );
};

export default App;
