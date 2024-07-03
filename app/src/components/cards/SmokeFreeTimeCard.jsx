import React from 'react';
import Card from './Card';
import { useElapsedTime } from '../useElapsedTime';

function SmokeFreeTimeCard() {
    const timeElapsed = useElapsedTime();

    const formatTime = (milliseconds) => {
        let seconds = Math.floor(milliseconds / 1000);
        const days = Math.floor(seconds / (24 * 3600));
        seconds %= 24 * 3600;
        const hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${days} Tage ${hours} Stunden ${minutes} Minuten ${remainingSeconds} Sekunden`;
    };

    return (
        <Card
            title='Rauchfreie Zeit'
            content={
                typeof timeElapsed === 'number' && (
                    <>
                        Du bist <b>{formatTime(timeElapsed)}</b> rauchfrei!
                        Weiter so!
                    </>
                )
            }
        />
    );
}

export default SmokeFreeTimeCard;
