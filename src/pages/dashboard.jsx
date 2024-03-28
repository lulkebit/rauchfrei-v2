import React from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

import FunFactCard from '../components/cards/FunFactCard';
import SmokeFreeTimeCard from '../components/cards/SmokeFreeTimeCard';
import FinancialCard from '../components/cards/FinancialCard';
import ConsumeCard from '../components/cards/ConsumeCard';

function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center mx-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Landing Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FunFactCard />

        <SmokeFreeTimeCard />

        <FinancialCard />

        <ConsumeCard />
      </div>
      <div className="mt-8 text-gray-600">
        Scroll down to continue exploring.
      </div>
    </div>
  );
}

export default LandingPage;
