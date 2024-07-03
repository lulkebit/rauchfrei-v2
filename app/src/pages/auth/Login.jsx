import { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

export default function Signup() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const { setUser } = useContext(UserContext);

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
                setUser(data.user);
                setData({});
                toast.success('User logged in successfully');
                navigate('/');
                window.location.reload();
            }
        } catch (error) {
            console.log('Error on loginUser', error);
            toast.error('Error. Please try again.');
        }
    };

    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
            <div
                className='card flex-shrink-0 w-full max-w-sm bg-white'
                style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
            >
                <form onSubmit={loginUser} className='card-body'>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text text-black'>Email</span>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            value={data.email}
                            onChange={(event) => {
                                setData({ ...data, email: event.target.value });
                            }}
                            className='input input-bordered'
                        />
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text text-black'>
                                Password
                            </span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter your password'
                            value={data.password}
                            onChange={(event) => {
                                setData({
                                    ...data,
                                    password: event.target.value,
                                });
                            }}
                            className='input input-bordered'
                        />
                    </div>
                    <div className='form-control mt-6'>
                        <button className='w-full text-center bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
