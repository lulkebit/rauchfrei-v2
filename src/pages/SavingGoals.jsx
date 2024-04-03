import React, { useState, useEffect } from 'react';
import SavingsInput from '../components/inputs/SavingsInputs';
import ProgressBarMoney from '../components/bars/ProgressBarMoney';

const SavingGoals = () => {
  const [sparziel, setSparziel] = useState('');
  const [preis, setPreis] = useState('');
  const [cards, setCards] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem('cards', JSON.stringify(cards));
    }
  }, [cards]);

  const handleClick = () => {
    if (sparziel && preis) {
      setCards([...cards, { title: sparziel, body: preis }]);
      setSparziel('');
      setPreis('');
      setError('');
    } else {
      setError('Please fill in both fields.');
    }
  };

  const handleDelete = (index) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
    localStorage.setItem('cards', JSON.stringify(newCards));
  };

  const handlePriceChange = (e) => {
    setPreis(e.target.value);
  };

  const handlePriceBlur = (e) => {
    let value = parseFloat(e.target.value.replace(',', '.')).toFixed(2);
    if (isNaN(value)) {
      value = '';
    }
    setPreis(value);
  };

  const days = localStorage.getItem('days');
  const cigsPerDay = localStorage.getItem('cigsPerDay');
  const cigsPerPack = localStorage.getItem('cigsPerPack');
  const pricePerPack = localStorage.getItem('pricePerPack');

  const cigsSmoked = days * cigsPerDay;
  const packsSmoked = cigsSmoked / cigsPerPack;
  const moneySaved = packsSmoked * pricePerPack;

  return (
    <div className='min-h-screen flex flex-col justify-center items-center mx-8'>
      <div
        className='max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8'
        style={{ width: '800px' }}
      >
        <h1 className='text-4xl font-bold mb-8 text-center'>Sparziele</h1>
        {error && <p className='text-red-500'>{error}</p>}
        <div>
          <div className='grid grid-cols-1 gap-4'>
            <SavingsInput
              label='Sparziel:'
              placeholder='"Porsche"'
              type='text'
              name='goal'
              value={sparziel}
              onChange={(e) => setSparziel(e.target.value)}
            />
            <SavingsInput
              label='Preis (€):'
              placeholder='"200.000€"'
              type='number'
              name='price'
              value={preis}
              onChange={handlePriceChange}
              onBlur={handlePriceBlur}
            />
            <button
              onClick={handleClick}
              className='bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded mb-4 w-auto inline-block self-start'
            >
              Hinzufügen
            </button>
          </div>
          {cards.map((card, index) => (
            <div key={index} className='card shadow-lg relative'>
              <div className='card-body'>
                <div className='flex justify-between items-center'>
                  <h2 className='card-title'>{card.title}</h2>
                  <button
                    onClick={() => handleDelete(index)}
                    className='text-red-500 bg-transparent'
                  >
                    X
                  </button>
                </div>
                <p>
                  Preis:{' '}
                  {new Intl.NumberFormat('de-DE', {
                    style: 'currency',
                    currency: 'EUR',
                  }).format(card.body)}
                </p>
                <ProgressBarMoney goal={card.body} current={moneySaved} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavingGoals;
