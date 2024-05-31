import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Health from './pages/Health';
import Settings from './pages/Settings';
import SavingGoals from './pages/SavingGoals';

function App() {
    const [activeSection, setActiveSection] = useState('');

    const sectionColors = {
        dashboard: 'bg-blue-500',
        health: 'bg-green-500',
        settings: 'bg-yellow-500',
        savingGoals: 'bg-red-500',
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let prevSectionId = '';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100; // Adjust this offset according to your design
                if (window.scrollY >= sectionTop) {
                    prevSectionId = section.id;
                }
            });
            setActiveSection(prevSectionId);
            document.body.className = sectionColors[prevSectionId];
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavLinkClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Navbar handleNavLinkClick={handleNavLinkClick} />
            <section id='section1' className='h-screen bg-gray-100'>
                <Dashboard />
            </section>
            <ul className='timeline timeline-vertical bg-gray-100'>
                <li>
                    <hr className='bg-gradient-to-b from-emerald-600 via-green-500 to-teal-400' />
                    <div className='timeline-start'>
                        <section id='section2' className='h-screen bg-gray-100'>
                            <Health />
                        </section>
                    </div>
                    <hr className='bg-gradient-to-b from-teal-400 via-green-500 to-emerald-600' />
                </li>
                <li>
                    <hr className='bg-gradient-to-b from-emerald-600 via-green-500 to-teal-400' />
                    <div className='timeline-end'>
                        <section id='section3' className='h-screen bg-gray-100'>
                            <SavingGoals />
                        </section>
                    </div>
                    <hr className='bg-gradient-to-b from-teal-400 via-green-500 to-emerald-600' />
                </li>
                <li>
                    <hr className='bg-gradient-to-b from-emerald-600 via-green-500 to-teal-400' />
                    <div className='timeline-start'>
                        <section id='section4' className='h-screen bg-gray-100'>
                            <Settings />
                        </section>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default App;
