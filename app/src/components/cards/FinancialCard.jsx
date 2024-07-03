import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Card from './Card';

function FinancialCard() {
    const { user } = useContext(UserContext);
    const [savings, setSavings] = useState(0);
    const [annualSavings, setAnnualSavings] = useState(0);
    const [monthlySavings, setMonthlySavings] = useState(0);
    const [dailySavings, setDailySavings] = useState(0);

    useEffect(() => {
        if (!user) return;

        const dateOfReturn = user.dateOfReturn;
        const startDate = new Date(dateOfReturn);
        const currentDate = new Date();
        const elapsedMilliseconds = currentDate - startDate;
        const days = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24));
        const cigsPerDay = user.cigsPerDay;
        const cigsPerPack = user.cigsPerPack;
        const pricePerPack = user.pricePerPack;

        if (days && cigsPerDay && cigsPerPack && pricePerPack) {
            const totalCigsSmoked = days * cigsPerDay;
            const totalPacksSmoked = totalCigsSmoked / cigsPerPack;
            const totalMoneySpent = totalPacksSmoked * pricePerPack;

            const cigarettesPerYear = cigsPerDay * 365;
            const cigarettesPerMonth = cigsPerDay * 30;
            const cigarettesPerDay = cigsPerDay;

            const packsPerYear = cigarettesPerYear / cigsPerPack;
            const packsPerMonth = cigarettesPerMonth / cigsPerPack;
            const packsPerDay = cigarettesPerDay / cigsPerPack;

            const yearlySavings = packsPerYear * pricePerPack;
            const monthlySavings = packsPerMonth * pricePerPack;
            const dailySavings = packsPerDay * pricePerPack;

            setSavings(totalMoneySpent.toFixed(2));
            setAnnualSavings(yearlySavings.toFixed(2));
            setMonthlySavings(monthlySavings.toFixed(2));
            setDailySavings(dailySavings.toFixed(2));
        }
    }, [user]);

    return (
        <Card
            title='Finanzen'
            content={
                <>
                    Du hast bereits <b>{savings}€</b> gespart!
                    <br />
                    Dein jährliches Ersparnis beläuft sich auf{' '}
                    <b>{annualSavings}€</b>. Das sind <b>{monthlySavings}€</b>{' '}
                    im Monat bzw. <b>{dailySavings}€</b> am Tag!
                </>
            }
        />
    );
}

export default FinancialCard;
