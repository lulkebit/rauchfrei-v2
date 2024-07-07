import React, { useState, useContext, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { toast } from 'react-hot-toast';
import SettingsCard from './SettingsCard';

export default function ProfileCard() {
    const [isProfileExpanded, setProfileExpanded] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const openSettings = () => setIsSettingsOpen(true);
    const closeSettings = () => setIsSettingsOpen(false);

    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const profileMenuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                profileMenuRef.current &&
                !profileMenuRef.current.contains(event.target)
            ) {
                setProfileExpanded(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileMenuRef]);

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
        <div className='relative inline-block' ref={profileMenuRef}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'
                alt='User avatar'
                className='w-8 h-8 rounded-full cursor-pointer'
                onClick={() => setProfileExpanded(!isProfileExpanded)}
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
                        <button
                            className='btn btn-primary'
                            onClick={openSettings}
                        >
                            Open Settings
                        </button>
                        <SettingsCard
                            isOpen={isSettingsOpen}
                            onClose={closeSettings}
                        />
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
