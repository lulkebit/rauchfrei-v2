import React from 'react';

const CustomButton = ({ children, onClick, state }) => {
    const buttonClasses = `text-white font-medium py-2 px-6 rounded-full text-sm transition-colors duration-200 ${
        state
            ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed'
            : 'bg-emerald-500 hover:bg-emerald-600'
    }`;

    return (
        <button className={buttonClasses} onClick={onClick} disabled={state}>
            {children}
        </button>
    );
};

export default CustomButton;
