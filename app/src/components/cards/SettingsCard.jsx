import React, { useState, useRef, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { UserContext } from '../../context/userContext';
import FormInput from '../inputs/FormInput';
import DateInput from '../inputs/DateInput';
import CustomButton from '../CustomButton';

const SettingsCard = ({ isOpen, onClose }) => {
    const { user } = useContext(UserContext);
    const [formData, setFormData] = useState({
        cigsPerDay: user.cigsPerDay || '',
        cigsPerPack: user.cigsPerPack || '',
        pricePerPack: user.pricePerPack || '',
        dateOfReturn: user.dateOfReturn || '',
    });

    const cardRef = useRef(null);

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
            toast.success('User updated successfully');
            onClose();
        } catch (error) {
            toast.error('Error updating user', error);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div
                className='bg-white rounded-lg shadow-xl p-6 w-96'
                ref={cardRef}
            >
                <h2 className='text-2xl font-bold mb-4'>Einstellungen</h2>

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
                </div>

                <div className='mt-6 flex justify-end'>
                    <button className='btn btn-ghost mr-2' onClick={onClose}>
                        Abbrechen
                    </button>
                    <CustomButton onClick={handleSave}>Save</CustomButton>
                </div>
            </div>
        </div>
    );
};

export default SettingsCard;
