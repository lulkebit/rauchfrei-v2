import React, { useState, useEffect } from 'react';
import { Drawer } from 'vaul';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast';
import SavingsInput from '../components/inputs/SavingsInputs';
import ProgressBarMoney from '../components/bars/ProgressBarMoney';
import CustomButton from '../components/CustomButton';

const SavingGoals = () => {
    const [sparziel, setSparziel] = useState('');
    const [preis, setPreis] = useState('');
    const [cards, setCards] = useState([]);
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);

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
        if (cards.length === 0) {
            setOpen(false);
        }
    }, [cards]);

    const handleClick = () => {
        if (sparziel && preis) {
            setCards([
                ...cards,
                { id: uuidv4(), title: sparziel, body: preis },
            ]);
            setSparziel('');
            setPreis('');
            setError('');
            toast.success('Sparziel hinzugefügt.');
        } else {
            setError('Please fill in both fields.');
        }
    };

    const handleDelete = (cardToDelete) => {
        const index = cards.findIndex((card) => card.id === cardToDelete.id);
        if (index > -1) {
            const newCards = [...cards];
            newCards.splice(index, 1);
            setCards(newCards);
            localStorage.setItem('cards', JSON.stringify(newCards));
            toast.error('Sparziel gelöscht.');
        }
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

    const sortedCards = [...cards].sort((a, b) => a.body - b.body);

    const cardsToDisplay = sortedCards
        .filter((card) => card.body > moneySaved)
        .slice(0, 2);

    return (
        <div className='min-h-screen flex flex-col justify-center items-center mx-8'>
            <div
                className='max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8'
                style={{ width: '800px' }}
            >
                <h1 className='text-4xl font-bold mb-8 text-center'>
                    Sparziele
                </h1>
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
                        <CustomButton onClick={handleClick}>
                            Hinzufügen
                        </CustomButton>
                    </div>
                    {cardsToDisplay.map((card, index) => (
                        <div
                            key={index}
                            className='card shadow-lg relative mb-4'
                        >
                            <div className='card-body'>
                                <div className='flex justify-between items-center'>
                                    <h2 className='card-title'>{card.title}</h2>
                                    <button
                                        onClick={() => handleDelete(card)}
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
                                <ProgressBarMoney
                                    goal={card.body}
                                    current={moneySaved}
                                />
                            </div>
                        </div>
                    ))}
                    <div className='flex justify-center mt-5'>
                        <CustomButton
                            onClick={setOpen}
                            state={cards.length === 0}
                        >
                            Mehr anzeigen
                        </CustomButton>
                    </div>
                    <Drawer.Root
                        open={open}
                        onOpenChange={setOpen}
                        shouldScaleBackground
                    >
                        <Drawer.Portal>
                            <Drawer.Overlay className='fixed inset-0 bg-black/40' />
                            <Drawer.Content className='flex flex-col rounded-t-[10px] h-[90%] mt-0 fixed bottom-0 left-0 right-0 mx-auto max-w-screen-xl'>
                                <div className='p-4 bg-gray-100 rounded-t-[10px] overflow-y-auto scrollbar-hide h-full'>
                                    <div className='mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8' />
                                    <div className='max-w-2xl mx-auto'>
                                        <Drawer.Title className='font-bold text-2xl text-center mb-4'>
                                            Sparziele:
                                        </Drawer.Title>
                                        <div className='grid grid-rows-1 gap-6'>
                                            {cards.map((card, index) => (
                                                <div
                                                    key={index}
                                                    className='card shadow-lg relative'
                                                >
                                                    <div className='card-body'>
                                                        <div className='flex justify-between items-center'>
                                                            <h2 className='card-title'>
                                                                {card.title}
                                                            </h2>
                                                            <button
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        card
                                                                    )
                                                                }
                                                                className='text-red-500 bg-transparent'
                                                            >
                                                                X
                                                            </button>
                                                        </div>
                                                        <p>
                                                            Preis:{' '}
                                                            {new Intl.NumberFormat(
                                                                'de-DE',
                                                                {
                                                                    style: 'currency',
                                                                    currency:
                                                                        'EUR',
                                                                }
                                                            ).format(card.body)}
                                                        </p>
                                                        <ProgressBarMoney
                                                            goal={card.body}
                                                            current={moneySaved}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Drawer.Content>
                        </Drawer.Portal>
                    </Drawer.Root>
                </div>
            </div>
        </div>
    );
};

export default SavingGoals;
