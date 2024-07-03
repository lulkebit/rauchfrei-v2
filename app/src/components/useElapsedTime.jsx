import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';

export function useElapsedTime() {
    const { user } = useContext(UserContext);
    const [timeElapsed, setTimeElapsed] = useState(0);

    // Function to calculate and set elapsed time
    const calculateAndSetElapsedTime = () => {
        if (user && user.dateOfReturn) {
            const startDate = new Date(user.dateOfReturn);
            const currentDate = new Date();
            const elapsedMilliseconds = currentDate - startDate;
            setTimeElapsed(elapsedMilliseconds);
        }
    };

    useEffect(() => {
        calculateAndSetElapsedTime(); // Set initial elapsed time immediately
        const interval = setInterval(calculateAndSetElapsedTime, 1000); // Update every second

        return () => clearInterval(interval);
    }, [user]);

    return timeElapsed;
}
