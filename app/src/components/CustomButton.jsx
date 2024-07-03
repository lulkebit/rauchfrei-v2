import React from 'react';

const CustomButton = ({ children, onClick }) => {
    return (
        <button
            className='bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-6 rounded-full text-sm transition-colors duration-200'
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CustomButton;
