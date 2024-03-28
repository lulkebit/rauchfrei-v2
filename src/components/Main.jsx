import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Health from '../pages/Health';
import Settings from '../pages/Settings';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/dashboard' element={<Dashboard />} />
      <Route exact path='/health' element={<Health />} />
      <Route exact path='/settings' element={<Settings />} />
      <Route exact path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default Main;