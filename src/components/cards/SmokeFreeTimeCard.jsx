import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';

function SmokeFreeTimeCard() {
  const [timeElapsed, setTimeElapsed] = useState(0);

  // interval(); {* Vielleicht fix für delay? *}

  useEffect(() => {
    const interval = setInterval(() => {
      const dateOfReturn = localStorage.getItem('dateOfReturn');
      if (dateOfReturn) {
        const startDate = new Date(dateOfReturn);
        const currentDate = new Date();
        const elapsedMilliseconds = currentDate - startDate;
        const days = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24));
        setTimeElapsed(elapsedMilliseconds);
        localStorage.setItem('days', days);
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  const formatTime = (milliseconds) => {
    let seconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(seconds / (24 * 3600));
    seconds %= (24 * 3600);
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${days} Tage ${hours} Stunden ${minutes} Minuten ${remainingSeconds} Sekunden`;
  };

  return (
    <Card title="Rauchfreie Zeit" content=
      {
        typeof timeElapsed === 'number' && (
        <>Du bist <b>{formatTime(timeElapsed)}</b> rauchfrei! Weiter so!</>
      )} 
    />
  );
}

export default SmokeFreeTimeCard;