import React, { useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import FormInput from '../components/inputs/FormInput';
import DateInput from '../components/inputs/DateInput';

function Settings() {
    const [formData, setFormData] = useState({
        cigsPerDay: '',
        cigsPerPack: '',
        pricePerPack: '',
        dateOfReturn: '',
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSave = async () => {
        try {
            const response = await axios.post('/updateUser', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error updating user', error);
        }
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center mx-8'>
            <div
                className='max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8'
                style={{ width: '800px' }}
            >
                <h1 className='text-4xl font-bold mb-8 text-center'>
                    Einstellungen
                </h1>
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Konfiguration</h2>
                    <div className='grid grid-cols-1 gap-4'>
                        <FormInput
                            label='Zigaretten am Tag'
                            placeholder='15'
                            type='number'
                            name='cigsPerDay'
                            value={formData.cigsPerDay}
                            onChange={handleInputChange}
                        />

                        <FormInput
                            label='Zigaretten pro Packung'
                            placeholder='80'
                            type='number'
                            name='cigsPerPack'
                            value={formData.cigsPerPack}
                            onChange={handleInputChange}
                        />

                        <FormInput
                            label='Preis pro Packung (€)'
                            placeholder='7'
                            type='number'
                            name='pricePerPack'
                            value={formData.pricePerPack}
                            onChange={handleInputChange}
                        />

                        <DateInput
                            label='Zeitpunkt des Aufhörens'
                            name='dateOfReturn'
                            value={formData.dateOfReturn}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
