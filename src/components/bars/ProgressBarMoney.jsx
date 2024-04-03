import React from 'react';

const ProgressBarMoney = ({ goal, current }) => {
  const percentage = (current / goal) * 100;

  return (
    <>
      <progress
        className='progress progress-success w-56'
        value={percentage}
        max='100'
      ></progress>
      {percentage >= 100 && <p>Goal reached!</p>}
    </>
  );
};

export default ProgressBarMoney;
