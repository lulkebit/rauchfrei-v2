import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    setError('');
    setLoading(true);

    axios
      .post('http://localhost:3001/register', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then(() => {
        navigate('/');
      })
      .catch((e) => {
        setError(e.message);
      });

    setLoading(false);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md'>
        <h2 className='text-2xl font-bold text-center'>Sign Up</h2>
        {error && <p className='text-red-500'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='space-y-4'>
            <div>
              <label className='text-sm font-bold text-gray-600'>Email</label>
              <input
                type='email'
                ref={emailRef}
                required
                className='w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:shadow-outline bg-white'
              />
            </div>
            <div>
              <label className='text-sm font-bold text-gray-600'>
                Passwort
              </label>
              <input
                type='password'
                ref={passwordRef}
                required
                className='w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:shadow-outline bg-white'
              />
            </div>
            <div>
              <label className='text-sm font-bold text-gray-600'>
                Passwort bestätigen
              </label>
              <input
                type='password'
                ref={passwordConfirmRef}
                required
                className='w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:shadow-outline bg-white'
              />
            </div>
            <button
              disabled={loading}
              className='w-full px-3 py-2 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none'
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className='mt-2 text-center'>
        Already have an account?{' '}
        <Link to='/login' className='text-blue-500 underline'>
          Log In
        </Link>
      </div>
    </div>
  );
}
