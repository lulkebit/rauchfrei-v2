import { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import CustomButton from '../../components/CustomButton';
import Logo from '../../components/Logo';

export default function Login() {
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
                window.location.reload(); // TODO find better solution than reloading the page
            }
        } catch (error) {
            console.log('Error on loginUser', error);
            toast.error('Error. Please try again.');
        }
    };

    return (
        <div className='svgBackground min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
                <h2 className='text-2xl font-semibold text-center text-gray-700 mb-4'>
                    Willkommen zurück!
                </h2>

                <Logo />

                <form className='mb-4' onSubmit={loginUser}>
                    <div className='mb-4'>
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor='username'
                        >
                            Email
                        </label>
                        <input
                            className='input input-bordered w-full'
                            id='username'
                            type='text'
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
                    <div className='flex items-center justify-center mt-8'>
                        <CustomButton>Anmelden</CustomButton>
                    </div>
                </form>
                <div className='mt-4 flex flex-col items-center justify-center'>
                    <button
                        onClick={() => navigate('/login')} // TODO add forgot password page
                        className='text-sm text-blue-500 hover:underline mb-3'
                    >
                        Passwort vergessen?
                    </button>
                    <p className='text-sm'>Noch kein Account?</p>
                    <button
                        onClick={() => navigate('/signup')}
                        className='text-sm link link-primary'
                    >
                        Registrieren
                    </button>
                </div>
            </div>
        </div>
    );
}
