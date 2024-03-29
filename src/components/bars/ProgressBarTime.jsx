import React, { useEffect, useState } from 'react';

const ProgressBarTime = ({ minutes }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const dateOfReturn = localStorage.getItem('dateOfReturn');
      if (dateOfReturn) {
        const currentDate = new Date();
        const returnDate = new Date(dateOfReturn);
        const elapsedTime = currentDate - returnDate;
        const totalDuration = minutes * 60 * 1000; // Convert minutes to milliseconds

        const calculatedProgress = Math.min((elapsedTime / totalDuration) * 100, 100);
        setProgress(calculatedProgress);
      } else {
        setProgress(0);
      }
    };

    updateProgress();
    const interval = setInterval(updateProgress, 1000); // Update every second

    return () => clearInterval(interval);
  }, [minutes]);

  return (
    <progress className="progress progress-success w-56" value={progress} max="100"></progress>
  );
};

export default ProgressBarTime;
