import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/login';
import Game from './components/game';
import { UsersData } from './core/models/user-model';

import './App.scss';

function App() {
  const [usersData, setUsersData] = useState<UsersData>({
    firstPlayer: '',
    secondPlayer: '',
  });

  const onUsersLogin = (usersData: UsersData) => {
    setUsersData(usersData);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login onUsersLogin={onUsersLogin} />} />
        <Route path="/game" element={<Game usersData={usersData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
