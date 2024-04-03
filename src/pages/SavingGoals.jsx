import React, { useState } from 'react';
import Card from '../components/cards/Card';

const SavingGoals = () => {
  const [sparziel, setSparziel] = useState('');
  const [preis, setPreis] = useState('');

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div
        className='max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8'
        style={{ width: '800px' }}
      >
        <h1 className='text-4xl font-bold mb-8 text-center'>Sparziele</h1>
        <div>
          <div className='grid grid-cols-1 gap-4'>
            <h1 className='text-xl font-bold'>Sparziele</h1>
            <div className='flex flex-col space-y-4'>
              <label className='font-semibold'>Sparziel:</label>
              <input
                type='text'
                value={sparziel}
                onChange={(e) => setSparziel(e.target.value)}
                className='form-input px-4 py-3'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label className='font-semibold'>Preis (€):</label>
              <input
                type='number'
                value={preis}
                onChange={(e) => setPreis(e.target.value)}
                className='form-input px-4 py-3'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingGoals;
