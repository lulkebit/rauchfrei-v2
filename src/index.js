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
import Signup from './components/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<App />} />
        <Route exact path='/' element={<Navigate to='/dashboard' />} />
      </Routes>
    </AuthProvider>
  </Router>
);
