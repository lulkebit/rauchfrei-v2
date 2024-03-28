import React from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import FormInput from '../components/inputs/FormInput';
import DateInput from '../components/inputs/DateInput';

function Settings() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center">
      <div className="max-w-2xl mx-auto bg-base-100 shadow-xl rounded-lg p-8" style={{ width: '800px' }}> {/* Nichtmehr responsive */}
        <h1 className="text-4xl font-bold mb-8 text-center">Einstellungen</h1>
        <div>
          <h2 className="text-2xl font-bold mb-4">Konfiguration</h2>
          <div className="grid grid-cols-1 gap-4">
            <FormInput
                label="Zigaretten am Tag"
                placeholder="15"
                type="number"
                name="cigsPerDay"
            />

            <FormInput
                label="Zigaretten pro Packung"
                placeholder="80"
                type="number"
                name="cigsPerPack"
            />

            <FormInput
                label="Preis pro Packung (€)"
                placeholder="7"
                type="number"
                name="pricePerPack"
            />

            <DateInput
                label="Zeitpunkt des Aufhörens"
                name="dateOfReturn"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
