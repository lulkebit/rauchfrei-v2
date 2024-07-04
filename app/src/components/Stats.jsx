import React from 'react';

const Stat = ({ title, value, description, icon }) => {
    return (
        <div className='bg-white rounded-lg shadow-md p-6 flex flex-col items-center'>
            {icon && <div className='text-3xl mb-2'>{icon}</div>}
            <div className='text-gray-700 text-sm'>{title}</div>
            <div className='text-3xl font-bold my-1'>{value}</div>
            {description && (
                <div className=' text-gray-600 text-xs'>{description}</div>
            )}
        </div>
    );
};

const StatGroup = ({ children }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {children}
        </div>
    );
};

export { Stat, StatGroup };
