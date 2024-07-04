import React, { useState, useRef, useEffect } from 'react';

function NotificationCard() {
    const [isNotificationExpanded, setNotificationExpanded] = useState(false);
    const notificationMenuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                notificationMenuRef.current &&
                !notificationMenuRef.current.contains(event.target)
            ) {
                setNotificationExpanded(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [notificationMenuRef]);

    return (
        <div ref={notificationMenuRef} className='relative inline-block'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-2 cursor-pointer'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                onClick={() => setNotificationExpanded(!isNotificationExpanded)}
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 5.75 6 8.105 6 11v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
            </svg>
            {isNotificationExpanded && (
                <div className='absolute top-10 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                    <div
                        className='py-1'
                        role='menu'
                        aria-orientation='vertical'
                        aria-labelledby='user-menu'
                    >
                        <a
                            className='block px-4 py-2 text-sm text-gray-700'
                            role='menuitem'
                        >
                            Notification
                        </a>
                        <a
                            className='block px-4 py-2 text-sm text-gray-700'
                            role='menuitem'
                        >
                            Notification
                        </a>
                        <a
                            className='block px-4 py-2 text-sm text-gray-700'
                            role='menuitem'
                        >
                            Notification
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NotificationCard;
