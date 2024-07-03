import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { toast } from 'react-hot-toast';

export default function ProfileCard() {
    const [isProfileExpanded, setProfileExpanded] = useState(false);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            const { data } = await axios.post('/logout');

            if (data.error) {
                return toast.error(data.error);
            } else {
                localStorage.removeItem('token');
                toast.success(data.message);
                navigate('/login');
            }
        } catch (error) {
            console.log('Error on user logout', error.message);
            toast.error(error.message);
        }
    };

    return (
        <div
            onMouseEnter={() => setProfileExpanded(true)}
            onMouseLeave={() => setProfileExpanded(false)}
            className='relative inline-block'
        >
            <img
                src={user ? user.avatar : ''}
                alt='User avatar'
                className='w-10 h-10 rounded-full'
            />
            {isProfileExpanded && (
                <div className='absolute top-10 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                    <div
                        className='py-1'
                        role='menu'
                        aria-orientation='vertical'
                        aria-labelledby='user-menu'
                    >
                        <a
                            className='block px-4 py-2 text-sm text-gray-700'
                            role='menuitem'
                        >
                            {user.name}
                        </a>
                        <a
                            className='block px-4 py-2 text-sm text-gray-700'
                            role='menuitem'
                        >
                            <b>DEBUG:</b>
                        </a>
                        <Link
                            to='/signup'
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                            role='menuitem'
                        >
                            Sign Up
                        </Link>
                        <Link
                            to='/login'
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                            role='menuitem'
                        >
                            Log In
                        </Link>
                        <a
                            className='block px-4 py-2 text-sm text-gray-700'
                            role='menuitem'
                        >
                            <b>FINAL:</b>
                        </a>
                        <Link
                            to='/profile'
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                            role='menuitem'
                        >
                            Profil
                        </Link>
                        <Link
                            to='/settings'
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                            role='menuitem'
                        >
                            Einstellungen
                        </Link>
                        <button
                            onClick={handleLogout}
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                            role='menuitem'
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
