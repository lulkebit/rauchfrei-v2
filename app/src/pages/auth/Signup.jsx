import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const registerUser = async (event) => {
        event.preventDefault();
        const { name, email, password } = data;
        try {
            const { data } = await axios.post('/register', {
                name,
                email,
                password,
            });

            if (data.error) {
                return toast.error(data.error);
            } else {
                setData({});
                toast.success('User registered successfully');
                navigate('/login');
            }
        } catch (error) {
            console.log('Error on registerUser', error);
            toast.error('Error. Please try again.');
        }
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
