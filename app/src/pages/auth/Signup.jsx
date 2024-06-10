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
        cigsPerDay: '',
        cigsPerPack: '',
        pricePerPack: '',
        dateOfReturn: '',
    });
    const [showSettings, setShowSettings] = useState(false);

    const registerUser = async (event) => {
        event.preventDefault();
        const {
            name,
            email,
            password,
            cigsPerDay,
            cigsPerPack,
            pricePerPack,
            dateOfReturn,
        } = data;
        try {
            const { data } = await axios.post('/register', {
                name,
                email,
                password,
                cigsPerDay,
                cigsPerPack,
                pricePerPack,
                dateOfReturn,
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

    const submitAccData = (event) => {
        event.preventDefault();

        if (!data.name || data.name.trim() === '') {
            toast.error('Please enter your name.');
            return;
        } else if (
            !data.email ||
            !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email)
        ) {
            toast.error('Please enter a valid email address.');
            return;
        } else if (!data.password || data.password.length < 6) {
            toast.error('Please enter a password of at least 6 characters.');
            return;
        } else {
            setShowSettings(true);
        }
    };

    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
            <div
                className='card flex-shrink-0 w-full max-w-sm bg-white'
                style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
            >
                {showSettings ? (
                    <form onSubmit={registerUser} className='card-body'>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-black'>
                                    Cigarettes per day
                                </span>
                            </label>
                            <input
                                type='number'
                                placeholder='Enter cigarettes per day'
                                value={data.cigsPerDay}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        cigsPerDay: event.target.value,
                                    });
                                }}
                                className='input input-bordered'
                            />
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-black'>
                                    Cigarettes per pack
                                </span>
                            </label>
                            <input
                                type='number'
                                placeholder='Enter cigarettes per pack'
                                value={data.cigsPerPack}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        cigsPerPack: event.target.value,
                                    });
                                }}
                                className='input input-bordered'
                            />
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-black'>
                                    Price per pack
                                </span>
                            </label>
                            <input
                                type='number'
                                placeholder='Enter price per pack'
                                value={data.pricePerPack}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        pricePerPack: event.target.value,
                                    });
                                }}
                                className='input input-bordered'
                            />
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-black'>
                                    Date of return
                                </span>
                            </label>
                            <input
                                type='date'
                                placeholder='Enter date of return'
                                value={data.dateOfReturn}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        dateOfReturn: event.target.value,
                                    });
                                }}
                                className='input input-bordered'
                            />
                        </div>
                        <div className='form-control mt-6'>
                            <button className='w-full text-center bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded'>
                                Signup
                            </button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={submitAccData} className='card-body'>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-black'>
                                    Name
                                </span>
                            </label>
                            <input
                                type='text'
                                placeholder='Enter your name'
                                value={data.name}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        name: event.target.value,
                                    });
                                }}
                                className='input input-bordered'
                            />
                        </div>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-black'>
                                    Email
                                </span>
                            </label>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                value={data.email}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        email: event.target.value,
                                    });
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
                                Proceed
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
