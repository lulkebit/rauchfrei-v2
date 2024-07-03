import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './context/userContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Health from './pages/Health';
import Settings from './pages/Settings';
import SavingGoals from './pages/SavingGoals';

function App() {
    const { user } = useContext(UserContext);

    const handleNavLinkClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            {user ? (
                <>
                    <Navbar handleNavLinkClick={handleNavLinkClick} />
                    <section id='section1' className='h-screen bg-gray-100'>
                        <Dashboard />
                    </section>
                    <ul className='timeline timeline-vertical bg-gray-100'>
                        <li>
                            <hr className='bg-gradient-to-b from-emerald-600 via-green-500 to-teal-400' />
                            <div className='timeline-start'>
                                <section
                                    id='section2'
                                    className='h-screen bg-gray-100'
                                >
                                    <Health />
                                </section>
                            </div>
                            <hr className='bg-gradient-to-b from-teal-400 via-green-500 to-emerald-600' />
                        </li>
                        <li>
                            <hr className='bg-gradient-to-b from-emerald-600 via-green-500 to-teal-400' />
                            <div className='timeline-end'>
                                <section
                                    id='section3'
                                    className='h-screen bg-gray-100'
                                >
                                    {/* <SavingGoals /> */}
                                </section>
                            </div>
                            <hr className='bg-gradient-to-b from-teal-400 via-green-500 to-emerald-600' />
                        </li>
                    </ul>
                </>
            ) : (
                <div className='flex justify-center items-center h-screen bg-gray-100'>
                    <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500'></div>
                </div>
            )}
        </div>
    );
}

export default App;
