import { useState, useEffect } from 'react';

export function useElapsedTime() {
    const [timeElapsed, setTimeElapsed] = useState(() => {
        const dateOfReturn = localStorage.getItem('dateOfReturn');
        if (dateOfReturn) {
            const startDate = new Date(dateOfReturn);
            const currentDate = new Date();
            const elapsedMilliseconds = currentDate - startDate;
            return elapsedMilliseconds;
        }
        return 0; // If dateOfReturn is not set or invalid, return 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const dateOfReturn = localStorage.getItem('dateOfReturn');
            if (dateOfReturn) {
                const startDate = new Date(dateOfReturn);
                const currentDate = new Date();
                const elapsedMilliseconds = currentDate - startDate;
                setTimeElapsed(elapsedMilliseconds);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return timeElapsed;
}
