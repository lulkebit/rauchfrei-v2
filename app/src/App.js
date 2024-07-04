import React, { useContext } from 'react';
import { UserContext } from './context/userContext';
import Navbar from './components/Navbar';
import FunFactCard from './components/cards/FunFactCard';
import SmokeFreeTimeCard from './components/cards/SmokeFreeTimeCard';
import FinancialCard from './components/cards/FinancialCard';
import ConsumeCard from './components/cards/ConsumeCard';
import Health from './pages/Health';
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
                        <div className='min-h-screen flex flex-col items-center justify-center mx-8'>
                            <h1 className='text-4xl font-bold mb-8'>
                                Hallo {user.name}!
                            </h1>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                                <FunFactCard />
                                <SmokeFreeTimeCard />
                                <FinancialCard />
                                <ConsumeCard />
                            </div>
                        </div>
                    </section>
                    <section id='section2' className='h-screen bg-gray-200'>
                        <Health />
                    </section>
                    <section id='section3' className='h-screen bg-gray-300'>
                        <SavingGoals />
                    </section>
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
