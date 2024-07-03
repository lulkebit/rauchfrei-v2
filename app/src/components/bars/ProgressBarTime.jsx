import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/userContext';

const ProgressBarTime = ({ minutes }) => {
    const { user } = useContext(UserContext);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            if (!user) {
                setProgress(0);
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
            } else {
                setProgress(0);
            }
        };

        updateProgress();
        const interval = setInterval(updateProgress, 1000); // Update every second

        return () => clearInterval(interval);
    }, [minutes, user]);

    return (
        <progress
            className='progress progress-success w-56'
            value={progress}
            max='100'
        ></progress>
    );
};

export default ProgressBarTime;
