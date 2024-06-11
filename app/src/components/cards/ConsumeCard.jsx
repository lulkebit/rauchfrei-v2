import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Card from './Card';

function ConsumeCard() {
    const user = useContext(UserContext);
    const [cigsResisted, setCigsResisted] = useState(0);
    const [cigsResistedPerYear, setCigsResistedPerYear] = useState(0);

    useEffect(() => {
        const dateOfReturn = user.dateOfReturn;
        const startDate = new Date(dateOfReturn);
        const currentDate = new Date();
        const elapsedMilliseconds = currentDate - startDate;
        const days = Math.floor(elapsedMilliseconds / (1000 * 60 * 60 * 24));
        const cigsPerDay = user.cigsPerDay;
        const cigsPerPack = user.cigsPerPack;
        const pricePerPack = user.pricePerPack;

        if (days && cigsPerDay && cigsPerPack && pricePerPack) {
            const totalCigsResistedTillNow = days * cigsPerDay;
            const totalCigsResistedPerYear = cigsPerDay * 365;

            setCigsResisted(totalCigsResistedTillNow);
            setCigsResistedPerYear(totalCigsResistedPerYear);
        }
    }, []);

    return (
        <Card
            title='Konsum'
            content={
                <>
                    Du hast bereits <b>{cigsResisted} Zigaretten</b>{' '}
                    widerstanden.
                    <br />
                    Auf ein Jahr gerechnet sind das{' '}
                    <b>{cigsResistedPerYear} Stück</b>
                </>
            }
        />
    );
}

export default ConsumeCard;
