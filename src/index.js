import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './index.css';

import App from './App';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import PrivateRoute from './components/PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route path='/dashboard' element={<PrivateRoute Component={App} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route exact path='/' element={<Navigate to='/dashboard' />} />
      </Routes>
    </AuthProvider>
  </Router>
);
