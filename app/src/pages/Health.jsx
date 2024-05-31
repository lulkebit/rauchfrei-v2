import React from 'react';
import { Drawer } from 'vaul';

import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

import Card from '../components/cards/Card';
import ProgressBarTime from '../components/bars/ProgressBarTime';

const milestones = [
    {
        title: 'Puls und Blutdruck',
        minutes: 20,
        description: 'Puls und Blutdruck sinken auf normale Werte.',
    },
    {
        title: 'Frischer Atem',
        minutes: 480,
        description:
            'Das Kohlenmonoxid im Blut wurde abgebaut und der stinkende Raucheratem hat sich verflüchtigt.',
    },
    {
        title: 'Herzinfarktrisiko',
        minutes: 1440,
        description:
            'Jetzt schon senkt sich das Risiko einen Herzinfarkt zu bekommen.',
    },
    {
        title: 'Sinne',
        minutes: 2880,
        description:
            'Nikotin ist aus dem Körper eliminiert. Langsam kehren der natürliche Geruchs- und Geschmakssinn wieder zurück.',
    },
    {
        title: 'Atemwege',
        minutes: 4320,
        description:
            'Die Atemwege entspannen sich, was zu einer leichteren Atmung führt. Energie steigt.',
    },
    {
        title: 'Durchblutung',
        minutes: 20160,
        description:
            'Durchblutung verbessert sich, was zu besserer Hautfarbe und -textur führt.',
    },
    {
        title: 'Husten & Atemprobleme',
        minutes: 262800,
        description:
            'Husten und Atemprobleme gehen zurück. Flimmerhärchen in den Atemwegen beginnen, sich zu regenerieren, was das Infektionsrisiko verringert.',
    },
    {
        title: 'Koronare Herzkrankheiten',
        minutes: 525600,
        description:
            'Das Risiko für koronare Herzkrankheiten halbiert sich im Vergleich zu einem Raucher.',
    },
    {
        title: 'Krebs',
        minutes: 2628000,
        description:
            'Das Risiko für Mund-, Rachen-, Speiseröhren- und Blasenkrebs sinkt um die Hälfte.',
    },
    {
        title: 'Lungenkrebs',
        minutes: 5256000,
        description:
            'Das Risiko für Lungenkrebs halbiert sich im Vergleich zu einem Raucher.',
    },
    {
        title: 'Herzkrankheiten',
        minutes: 7884000,
        description:
            'Das Risiko für Herzkrankheiten ist das gleiche wie bei einem Nichtraucher.',
    },
    {
        title: 'COPD',
        minutes: 10512000,
        description:
            'Das Risiko für chronisch obstruktive Lungenerkrankungen (COPD) ist das gleiche wie bei einem Nichtraucher.',
    },
];

const dateOfReturn = localStorage.getItem('dateOfReturn');
const currentDate = Date.now();
const milestonesWithProgress = milestones.map((milestone) => {
    if (dateOfReturn) {
        const returnDate = new Date(dateOfReturn);
        const elapsedTime = currentDate - returnDate;
        const totalDuration = milestone.minutes * 60 * 1000; // Convert minutes to milliseconds

        const calculatedProgress = Math.min(
            (elapsedTime / totalDuration) * 100,
            100
        );

        return {
            ...milestone,
            progress: calculatedProgress,
        };
    } else {
        return {
            ...milestone,
            progress: 0,
        };
    }
});

const nextTwoMilestones = milestonesWithProgress
    .filter((milestone) => {
        const milestoneTime = currentDate + milestone.minutes * 60 * 1000;
        return (
            milestoneTime > currentDate &&
            milestoneTime <
                currentDate +
                    (100 - milestone.progress) * milestone.minutes * 60 * 1000
        );
    })
    .sort((a, b) => a.minutes - b.minutes)
    .slice(0, 2);

function convertMinutesToTimeFormat(minutes) {
    const timeUnits = [
        { unit: 'Jahr', value: 365 * 24 * 60 },
        { unit: 'Monat', value: 30 * 24 * 60 },
        { unit: 'Woche', value: 7 * 24 * 60 },
        { unit: 'Tag', value: 24 * 60 },
        { unit: 'Stunde', value: 60 },
        { unit: 'Minute', value: 1 },
    ];

    for (const { unit, value } of timeUnits) {
        const quantity = Math.floor(minutes / value);
        if (quantity > 0) {
            if (unit === 'Stunde' || unit === 'Woche' || unit === 'Minute') {
                return `${quantity} ${unit}${quantity > 1 ? 'n' : ''}`;
            } else {
                return `${quantity} ${unit}${quantity > 1 ? 'en' : ''}`;
            }
        }
    }
}

function Health() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center mx-8'>
            <h1 className='text-4xl font-bold mb-8'>Nächster Meilenstein:</h1>
            <div className='grid grid-rows-1 gap-6 max-w-4xl'>
                {nextTwoMilestones.map((milestone, index) => (
                    <Card
                        key={index}
                        title={milestone.title}
                        content={
                            <>
                                <b>{`Nach ${convertMinutesToTimeFormat(
                                    milestone.minutes
                                )}:`}</b>{' '}
                                {milestone.description}{' '}
                                <ProgressBarTime minutes={milestone.minutes} />
                            </>
                        }
                    />
                ))}
            </div>
            <div className='mb-4'></div>
            <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger asChild>
                    <button>Mehr anzeigen</button>
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className='fixed inset-0 bg-black/40' />
                    <Drawer.Content className='flex flex-col rounded-t-[10px] h-[90%] mt-24 fixed bottom-0 left-0 right-0 mx-auto max-w-screen-xl'>
                        <div className='p-4 bg-gray-100 rounded-t-[10px] overflow-y-auto scrollbar-hide'>
                            <div className='mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8' />
                            <div className='max-w-2xl mx-auto'>
                                <Drawer.Title className='font-bold text-2xl text-center mb-4'>
                                    Meilensteine:
                                </Drawer.Title>
                                <div className='grid grid-rows-1 gap-6'>
                                    {milestones.map((milestone, index) => (
                                        <Card
                                            key={index}
                                            title={milestone.title}
                                            content={
                                                <>
                                                    <b>{`Nach ${convertMinutesToTimeFormat(
                                                        milestone.minutes
                                                    )}:`}</b>{' '}
                                                    {milestone.description}{' '}
                                                    <ProgressBarTime
                                                        minutes={
                                                            milestone.minutes
                                                        }
                                                    />
                                                </>
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}

export default Health;
