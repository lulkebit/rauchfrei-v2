import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import Logo from '../../components/Logo';

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
        <div className='svgBackground min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-semibold text-center text-gray-700 mb-4'>
                    Willkommen!
                </h2>

                <Logo />

                {showSettings ? (
                    <form className='mb-4' onSubmit={registerUser}>
                        <div className='mb-4'>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2'
                                htmlFor='cigsPerDay'
                            >
                                Zigaretten am Tag
                            </label>
                            <input
                                className='input input-bordered w-full'
                                id='cigsPerDay'
                                type='number'
                                value={data.cigsPerDay}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        cigsPerDay: event.target.value,
                                    });
                                }}
                                placeholder='Wie viele Zigaretten rauchst du am Tag?'
                            />
                        </div>

                        <div className='mb-6'>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2'
                                htmlFor='cigsPerPack'
                            >
                                Zigaretten pro Schachtel
                            </label>
                            <input
                                className='input input-bordered w-full'
                                id='cigsPerPack'
                                type='number'
                                placeholder='Wie viele Zigaretten sind in einer Schachtel?'
                                value={data.cigsPerPack}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        cigsPerPack: event.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className='mb-6'>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2'
                                htmlFor='pricePerPack'
                            >
                                Preis pro Schachtel
                            </label>
                            <input
                                className='input input-bordered w-full'
                                id='pricePerPack'
                                type='number'
                                placeholder='Wie viel kostet eine Schachtel?'
                                value={data.pricePerPack}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        pricePerPack: event.target.value,
                                    });
                                }}
                            />
                        </div>

                        <div className='mb-6'>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2'
                                htmlFor='dateOfReturn'
                            >
                                Tag des Aufhörens
                            </label>
                            <input
                                className='input input-bordered w-full'
                                id='dateOfReturn'
                                type='date'
                                placeholder='Wann hast du aufgehört?'
                                value={data.dateOfReturn}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        dateOfReturn: event.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className='flex items-center justify-center mt-8'>
                            <CustomButton>Registrieren</CustomButton>
                        </div>
                    </form>
                ) : (
                    <form className='mb-4' onSubmit={submitAccData}>
                        <div className='mb-4'>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2'
                                htmlFor='username'
                            >
                                Name
                            </label>
                            <input
                                className='input input-bordered w-full'
                                id='username'
                                type='text'
                                value={data.name}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        name: event.target.value,
                                    });
                                }}
                                placeholder='Gib deinen Namen ein'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2'
                                htmlFor='email'
                            >
                                Email
                            </label>
                            <input
                                className='input input-bordered w-full'
                                id='email'
                                type='email'
                                value={data.email}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        email: event.target.value,
                                    });
                                }}
                                placeholder='Gib deine E-Mail-Adresse ein'
                            />
                        </div>

                        <div className='mb-6'>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2'
                                htmlFor='password'
                            >
                                Passwort
                            </label>
                            <input
                                className='input input-bordered w-full'
                                id='password'
                                type='password'
                                placeholder='Gib dein Passwort ein'
                                value={data.password}
                                onChange={(event) => {
                                    setData({
                                        ...data,
                                        password: event.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center mt-8'>
                            <CustomButton>Weiter</CustomButton>´
                            <p className='text-sm'>
                                Du hast bereits ein Account?
                            </p>
                            <button
                                onClick={() => navigate('/login')}
                                className='text-sm link link-primary'
                            >
                                Anmelden
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
