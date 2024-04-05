import React, { useEffect, useState } from 'react';

function convertMinutesToTimeFormat(minutes) {
  const timeUnits = [
    { unit: 'Jahr', value: 365 * 24 * 60 },
    { unit: 'Monat', value: 30 * 24 * 60 },
    { unit: 'Woche', value: 7 * 24 * 60 },
    { unit: 'Tag', value: 24 * 60 },
    { unit: 'Stunde', value: 60 },
    { unit: 'Minute', value: 1 },
  ];

  for (const { unit, value } of timeUnits) {
    const quantity = Math.floor(minutes / value);
    if (quantity > 0) {
      if (unit === 'Stunde' || unit === 'Woche' || unit === 'Minute') {
        return `${quantity} ${unit}${quantity > 1 ? 'n' : ''}`;
      } else {
        return `${quantity} ${unit}${quantity > 1 ? 'en' : ''}`;
      }
    }
  }
}

const ProgressBarMoney = ({ goal, current }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const days = localStorage.getItem('days');
    const cigsPerDay = localStorage.getItem('cigsPerDay');
    const cigsPerPack = localStorage.getItem('cigsPerPack');
    const pricePerPack = localStorage.getItem('pricePerPack');

    const savingsPerDay = (cigsPerDay / cigsPerPack) * pricePerPack;
    const remainingAmount = goal - current;
    const remainingDays = remainingAmount / savingsPerDay;

    setTimeLeft(Math.ceil(remainingDays));
  }, [goal, current]);

  const percentage = (current / goal) * 100;
  const timeLeftFormatted = convertMinutesToTimeFormat(timeLeft * 24 * 60); // convert days to minutes

  return (
    <>
      <progress
        className='progress progress-success w-56'
        value={percentage}
        max='100'
      ></progress>
      {percentage < 100 ? (
        <p>{`Wird erreicht in ${timeLeftFormatted}`}</p>
      ) : (
        <p>Ziel erreicht!</p>
      )}
    </>
  );
};

export default ProgressBarMoney;
