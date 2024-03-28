import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Health from './pages/Health';
import Settings from './pages/Settings';
import SavingGoals from './pages/SavingGoals';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let prevSectionId = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust this offset according to your design
        if (window.scrollY >= sectionTop) {
          prevSectionId = section.id;
        }
      });
      setActiveSection(prevSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar handleNavLinkClick={handleNavLinkClick} /> {/* Render the Navbar component */}
      
      <section id="section1" className="h-screen bg-gray-100 animate__animated animate__fadeIn">
        <Dashboard/>
      </section>

      <section id="section2" className="h-screen bg-green-200 animate__animated animate__fadeIn">
        <Health/>
      </section>

      <section id="section3" className="h-screen bg-yellow-200 animate__animated animate__fadeIn">
        <SavingGoals/>
      </section>

      <section id="section4" className="h-screen bg-yellow-200 animate__animated animate__fadeIn">
        <Settings/>
      </section>
    </div>
  );
}

export default App;
