import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = async (event) => {
        event.preventDefault();
        const { email, password } = data;
        try {
            const { data } = await axios.post('/login', {
                email,
                password,
            });

            if (data.error) {
                return toast.error(data.error);
            } else {
                setData({});
                toast.success('User logged in successfully');
                navigate('/');
            }
        } catch (error) {
            console.log('Error on loginUser', error);
            toast.error('Error. Please try again.');
        }
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
