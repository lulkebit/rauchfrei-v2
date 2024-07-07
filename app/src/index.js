// Step 1: Organize Imports
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';
import './index.css';

const App = lazy(() => import('./App'));
const Signup = lazy(() => import('./pages/auth/Signup'));
const Login = lazy(() => import('./pages/auth/Login'));
const Settings = lazy(() => import('./pages/Settings'));
const Debug = lazy(() => import('./pages/auth/debug'));

const routes = [
    { path: '/dashboard', element: App },
    { path: '/signup', element: Signup },
    { path: '/login', element: Login },
    { path: '/debug', element: Debug },
    { path: '/settings', element: Settings },
    { path: '/', element: Navigate, to: '/dashboard' },
];

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider>
        <Toaster position='bottom-right' toastDuration={{ duration: 2000 }} />
        <Router>
            <Suspense
                fallback={
                    <div className='flex justify-center items-center h-screen bg-gray-100'>
                        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500'></div>
                    </div>
                }
            >
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.element to={route.to} />}
                        />
                    ))}
                </Routes>
            </Suspense>
        </Router>
    </UserContextProvider>
);
