import React, { useContext } from 'react';
import { UserContext } from './context/userContext';
import Navbar from './components/Navbar';
import SmokeFreeTimeCard from './components/cards/SmokeFreeTimeCard';
import FinancialCard from './components/cards/FinancialCard';
import ConsumeCard from './components/cards/ConsumeCard';
import Health from './pages/Health';
import SavingGoals from './pages/SavingGoals';
import { Stat, StatGroup } from './components/Stats';
import { FaClock, FaMoneyBill, FaSmokingBan } from 'react-icons/fa';

function App() {
    const { user } = useContext(UserContext);

    const handleNavLinkClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const readableDate = new Date(user.dateOfReturn).toLocaleDateString(
        'de-DE',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    );

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
                            <div className='container mx-auto p-4'>
                                <StatGroup>
                                    <Stat
                                        title='Rauchfreie Zeit'
                                        value={<SmokeFreeTimeCard />}
                                        description={`Seit dem ${readableDate}`}
                                        icon={
                                            <FaClock className='text-blue-500' />
                                        }
                                    />
                                    <Stat
                                        title='Ersparnis'
                                        value={<FinancialCard />}
                                        description='↗︎ 8,7% mehr als der Durchschnitt'
                                        icon={
                                            <FaMoneyBill className='text-green-500' />
                                        }
                                    />
                                    <Stat
                                        title='Konsum'
                                        value={<ConsumeCard />}
                                        description='↘︎ 10% weniger als der Durchschnitt'
                                        icon={
                                            <FaSmokingBan className='text-red-500' />
                                        }
                                    />
                                </StatGroup>
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
