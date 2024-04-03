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
      <Navbar handleNavLinkClick={handleNavLinkClick} />{' '}
      {/* Render the Navbar component */}
      <section id='section1' className='h-screen bg-gray-100'>
        <Dashboard />
      </section>
      <div className='h-10 bg-gradient-to-b from-gray-100 to-green-200'></div>
      <section id='section2' className='h-screen bg-green-200'>
        <Health />
      </section>
      <div className='h-10 bg-gradient-to-b from-green-200 to-yellow-200'></div>
      <section id='section3' className='h-screen bg-yellow-200'>
        <SavingGoals />
      </section>
      <div className='h-10 bg-gradient-to-b from-yellow-200 to-red-200'></div>
      <section id='section4' className='h-screen bg-red-200'>
        <Settings />
      </section>
    </div>
  );
}

export default App;
