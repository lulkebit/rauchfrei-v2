import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';

export function useElapsedTime() {
    const { user } = useContext(UserContext);
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (user && user.dateOfReturn) {
                // Check if user is defined
                const startDate = new Date(user.dateOfReturn);
                const currentDate = new Date();
                const elapsedMilliseconds = currentDate - startDate;
                setTimeElapsed(elapsedMilliseconds);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [user]);

    return timeElapsed;
}
