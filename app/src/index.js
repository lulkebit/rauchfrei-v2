import React from 'react';
import ReactDOM from 'react-dom/client';
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
import Settings from './pages/Settings';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';
import Debug from './pages/auth/debug';
import PrivateRoute from './components/PrivateRoute';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider>
        <Toaster position='bottom-right' toastDuration={{ duration: 2000 }} />
        <Router>
            <Routes>
                <Route path='/dashboard' element={<App />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/debug' element={<Debug />} />
                <Route path='/settings' element={<Settings />} />
                <Route exact path='/' element={<Navigate to='/dashboard' />} />
            </Routes>
        </Router>
    </UserContextProvider>
);
