import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/userContext';

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

const ProgressBarTime = ({ minutes }) => {
    const { user } = useContext(UserContext);
    const [timeLeft, setTimeLeft] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!user) {
            setProgress(0);
            setTimeLeft(0);
            return;
        }
        const dateOfReturn = user.dateOfReturn;
        if (dateOfReturn) {
            const currentDate = new Date();
            const returnDate = new Date(dateOfReturn);
            const elapsedTime = currentDate - returnDate;
            const totalDuration = minutes * 60 * 1000; // Convert minutes to milliseconds

            const calculatedProgress = Math.min(
                (elapsedTime / totalDuration) * 100,
                100
            );
            setProgress(calculatedProgress);

            const remainingTime = totalDuration - elapsedTime;
            const remainingMinutes = Math.ceil(remainingTime / (60 * 1000)); // Convert milliseconds to minutes
            setTimeLeft(remainingMinutes);
        } else {
            setProgress(0);
            setTimeLeft(0);
        }
    }, [minutes, user]);

    const timeLeftFormatted = convertMinutesToTimeFormat(timeLeft);

    return (
        <>
            <progress
                className='progress progress-success w-56'
                value={progress}
                max='100'
            />
            {progress < 100 ? (
                <p>{`Wird erreicht in ${timeLeftFormatted}`}</p>
            ) : (
                <p>Ziel erreicht!</p>
            )}
        </>
    );
};

export default ProgressBarTime;
