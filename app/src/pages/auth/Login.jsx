import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = (event) => {
    event.preventDefault();
    axios.get('/');
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input
          type='email'
          placeholder='enter email...'
          value={data.email}
          onChange={(event) => {
            setData({ ...data, email: event.target.value });
          }}
        />
        <label>Password</label>
        <input
          type='password'
          placeholder='enter password...'
          value={data.password}
          onChange={(event) => {
            setData({ ...data, password: event.target.value });
          }}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
