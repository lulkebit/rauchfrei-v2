import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function ProfileCard() {
  const [isProfileExpanded, setProfileExpanded] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/');
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <div
      onMouseEnter={() => setProfileExpanded(true)}
      onMouseLeave={() => setProfileExpanded(false)}
      className='relative inline-block'
    >
      <img
        src={currentUser ? currentUser.avatar : ''}
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
            {currentUser ? (
              <a
                className='block px-4 py-2 text-sm text-gray-700'
                role='menuitem'
              >
                {currentUser.email}
              </a>
            ) : (
              ''
            )}
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
            <button
              onClick={handleLogout}
              className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
              role='menuitem'
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
