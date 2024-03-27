import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Health from '../pages/health';

const Main = () => {
  return (
    <Routes>
      <Route exact path='/dashboard' element={<Dashboard />} />
      <Route exact path='/health' element={<Health />} />
      <Route exact path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default Main;