import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';

export function useElapsedTime() {
    const user = useContext(UserContext);
    const [timeElapsed, setTimeElapsed] = useState(() => {
        const dateOfReturn = user.dateOfReturn;
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
            const dateOfReturn = user.dateOfReturn;
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
