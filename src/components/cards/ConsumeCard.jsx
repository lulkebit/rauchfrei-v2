import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';

function ConsumeCard() {
    const [cigsResisted, setCigsResisted] = useState(0);
    const [cigsResistedPerYear, setCigsResistedPerYear] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const days = localStorage.getItem('days');
        const cigsPerDay = localStorage.getItem('cigsPerDay');
        const cigsPerPack = localStorage.getItem('cigsPerPack');
        const pricePerPack = localStorage.getItem('pricePerPack');
        if (days && cigsPerDay && cigsPerPack && pricePerPack) {
          const totalCigsResistedTillNow = days * cigsPerDay;
          const totalCigsResistedPerYear = cigsPerDay * 365;

          setCigsResisted(totalCigsResistedTillNow);
          setCigsResistedPerYear(totalCigsResistedPerYear);
        }
      }, 1000);
    
      return () => clearInterval(interval);
    }, []);
    
    return (
        <Card title="Konsum" content=
            {
                <>Du hast bereits <b>{cigsResisted} Zigaretten</b> widerstanden.<br/>
                Auf ein Jahr gerechnet sind das <b>{cigsResistedPerYear} Stück</b></>
            } 
        />
    );
}

export default ConsumeCard;