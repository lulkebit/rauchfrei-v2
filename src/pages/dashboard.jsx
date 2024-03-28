import React from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

import Card from '../components/cards/Card';
import FunFactCard from '../components/cards/FunFactCard';
import SmokeFreeTimeCard from '../components/cards/SmokeFreeTimeCard';

function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center mx-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Landing Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FunFactCard />

        <SmokeFreeTimeCard />

        {/* Card 3 */}
        <Card title="Card 3" content="This is the content of card 3." />

        {/* Card 4 */}
        <Card title="Card 4" content="This is the content of card 4." />
      </div>
      <div className="mt-8 text-gray-600">
        Scroll down to continue exploring.
      </div>
    </div>
  );
}

export default LandingPage;
