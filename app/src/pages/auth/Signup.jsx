import { useState } from 'react';

export default function Signup() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input
          type='text'
          placeholder='enter name...'
          value={data.name}
          onChange={(event) => {
            setData({ ...data, name: event.target.value });
          }}
        />
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
        <button type='submit'>Signup</button>
      </form>
    </div>
  );
}
