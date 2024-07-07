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

    let readableDate = null;

    if (user) {
        readableDate = new Date(user.dateOfReturn).toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    const yearlySavingsAvg = 1800; // https://www.abnr.de/weltnichtrauchertag/2017-rauchen-kostet-nichtrauchen-kostet-nichts/#:~:text=Individuelle%20Kosten,dies%20entspricht%20jedem%20siebten%20Todesfall.
    let yearlySavings = localStorage.getItem('yearlySavings');
    yearlySavings = Number(yearlySavings);
    let savingDesc = '';

    if (!isNaN(yearlySavings)) {
        const percentageDifference =
            ((yearlySavings - yearlySavingsAvg) / yearlySavingsAvg) * 100;

        if (percentageDifference > 0) {
            savingDesc = `↗︎ Sie sparen ${percentageDifference.toFixed(
                2
            )}% mehr als der Durchschnitt.`;
        } else if (percentageDifference < 0) {
            savingDesc = `↘︎ Sie sparen ${Math.abs(
                percentageDifference
            ).toFixed(2)}% weniger als der Durchschnitt.`;
        } else {
            savingDesc = `= Sie sparen genauso viel wie der Durschnitt.`;
        }
    } else {
        savingDesc =
            'Jährliche Ersparnisse sind nicht definiert oder keine gültige Zahl.';
    }

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
                                        description={savingDesc}
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
