import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';

function FinancialCard() {
    const [savings, setSavings] = useState(0);
    const [annualSavings, setAnnualSavings] = useState(0);
    const [monthlySavings, setMonthlySavings] = useState(0);
    const [dailySavings, setDailySavings] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const days = localStorage.getItem('days');
        const cigsPerDay = localStorage.getItem('cigsPerDay');
        const cigsPerPack = localStorage.getItem('cigsPerPack');
        const pricePerPack = localStorage.getItem('pricePerPack');
        if (days && cigsPerDay && cigsPerPack && pricePerPack) {
            const totalCigsSmoked = days * cigsPerDay;
            const totalPacksSmoked = totalCigsSmoked / cigsPerPack;
            const totalMoneySpent = totalPacksSmoked * pricePerPack;

            // Berechnung der Anzahl der gerauchten Zigaretten pro Jahr, Monat und Tag
            const cigarettesPerYear = cigsPerDay * 365;
            const cigarettesPerMonth = cigsPerDay * 30;
            const cigarettesPerDay = cigsPerDay;

            // Berechnung der Anzahl der gekauften Packungen pro Jahr, Monat und Tag
            const packsPerYear = cigarettesPerYear / cigsPerPack;
            const packsPerMonth = cigarettesPerMonth / cigsPerPack;
            const packsPerDay = cigarettesPerDay / cigsPerPack;

            // Berechnung des gesparten Geldes pro Jahr, Monat und Tag
            const yearlySavings = packsPerYear * pricePerPack;
            const monthlySavings = packsPerMonth * pricePerPack;
            const dailySavings = packsPerDay * pricePerPack;

            setSavings(totalMoneySpent.toFixed(2));
            setAnnualSavings(yearlySavings.toFixed(2));
            setMonthlySavings(monthlySavings.toFixed(2));
            setDailySavings(dailySavings.toFixed(2));
        }
      }, 1000);
    
      return () => clearInterval(interval);
    }, []);

    return (
        <Card title="Finanzen" content=
            {
                <>Du hast bereits <b>{savings}€</b> gespart!<br/>
                Dein jähliches Ersparnis beläuft sich auf <b>{annualSavings}€</b>. Das sind <b>{monthlySavings}€</b> im Monat bzw. <b>{dailySavings}€</b> am Tag!</>
            } 
        />
    );
}

export default FinancialCard;