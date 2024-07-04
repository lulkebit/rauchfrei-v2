import React from 'react';
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
        return { days, hours, minutes, remainingSeconds };
    };

    const time = formatTime(timeElapsed);

    return (
        <div className='flex items-start justify-center w-full gap-4 count-down-main'>
            <div className='timer w-16'>
                <div>
                    <h3 className='countdown-element days font-manrope font-semibold text-2xl text-gray-700 text-center'>
                        {time.days}
                    </h3>
                </div>
                <p className='text-sm font-normal text-gray-700 mt-1 text-center w-full'>
                    Tage
                </p>
            </div>
            <h3 className='font-manrope font-semibold text-2xl text-gray-700'>
                :
            </h3>
            <div className='timer w-16'>
                <div>
                    <h3 className='countdown-element hours font-manrope font-semibold text-2xl text-gray-700 text-center'>
                        {time.hours}
                    </h3>
                </div>
                <p className='text-sm font-normal text-gray-700 mt-1 text-center w-full'>
                    Stunden
                </p>
            </div>
            <h3 className='font-manrope font-semibold text-2xl text-gray-700'>
                :
            </h3>
            <div className='timer w-16'>
                <div>
                    <h3 className='countdown-element minutes font-manrope font-semibold text-2xl text-gray-700 text-center'>
                        {time.minutes}
                    </h3>
                </div>
                <p className='text-sm font-normal text-gray-700 mt-1 text-center w-full'>
                    Minuten
                </p>
            </div>
            <h3 className='font-manrope font-semibold text-2xl text-gray-700'>
                :
            </h3>
            <div className='timer w-16'>
                <div>
                    <h3 className='countdown-element seconds font-manrope font-semibold text-2xl text-gray-700 text-center'>
                        {time.remainingSeconds}
                    </h3>
                </div>
                <p className='text-sm font-normal text-gray-700 mt-1 text-center w-full'>
                    Sekunden
                </p>
            </div>
        </div>
    );
}

export default SmokeFreeTimeCard;
