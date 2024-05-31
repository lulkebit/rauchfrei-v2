import React, { useState } from 'react';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

const messages = [
    'Keine lästigen Zigarettenpausen mehr: Du kannst jetzt deine Zeit sinnvoller nutzen, zum Beispiel für einen kurzen Powernap!',
    'Nicht-Raucher haben einen unschlagbaren Vorteil: Sie müssen nicht ständig nach einem Feuerzeug suchen.',
    'Gute Nachrichten: Du wirst nicht mehr wie ein Spaziergänger durch einen Nebel aus Rauch gehen!',
    'Ohne Zigaretten riecht nicht nur deine Kleidung besser, sondern auch dein Geldbeutel!',
    'Geringeres Brandrisiko: Nichtraucher tragen nicht das Risiko, versehentlich einen Brand zu verursachen, indem sie eine Zigarette unbeaufsichtigt lassen oder falsch entsorgen.',
    'Nichtraucher können oft als positives Vorbild für Kinder und Jugendliche dienen, die vor den Gefahren des Rauchens gewarnt werden sollen.',
    'Nichtraucher haben tendenziell weißere Zähne und vermeiden die gelben Verfärbungen, die oft durch das Rauchen entstehen.',
    'Stell dir vor, du musst nie wieder einen Rauchmelder ausschalten, nur weil du eine Zigarette anzünden möchtest!',
    'Nicht-Raucher haben einen viel besseren Geruchssinn: Du wirst sogar die feinsten Düfte wahrnehmen!',
    'Rauchen aufzugeben ist wie eine tägliche Fitnessübung für deine Lungen!',
    'Keine Aschenbecher mehr zu leeren: Dein Mülleimer wird sich über die zusätzliche Freizeit freuen!',
    'Denke daran, wie viel Zeit du jetzt für wirklich wichtige Dinge hast, anstatt in einer Raucherecke herumzustehen!',
    'Herzlichen Glückwunsch! Du wirst nie wieder Panik haben, wenn du feststellst, dass deine Zigarettenschachtel fast leer ist.',
    'Mit jedem Tag ohne Zigarette sparst du Geld, das du stattdessen in Dinge investieren kannst, die dich wirklich glücklich machen!',
    'Wer braucht schon Rauchringe, wenn man stattdessen Luftblasen machen kann?',
    'Rauchen aufzugeben ist der beste Weg, um zu zeigen, dass du ein echter Durchhaltekünstler bist!',
    'Ein weiterer Vorteil des Nichtrauchens: Du musst nie wieder den Gestank von Rauch in deinen Haaren ertragen!',
    'Stell dir vor, du könntest deine Hände wieder sauber halten, ohne ständig nach einem Aschenbecher zu suchen!',
    'Das Aufhören mit dem Rauchen ist ein tolles Geschenk an dich selbst: Du investierst in deine Gesundheit und dein Wohlbefinden!',
    'Nicht-Raucher haben eine höhere Chance, sich in einem Zimmer voller Menschen wiederzufinden, ohne sich wie ein verirrtes Schornsteinfeger zu fühlen!',
    'Wer braucht schon Zigaretten, wenn man stattdessen Wolkenbilder am Himmel betrachten kann?',
    'Keine Sorge mehr, dass du dein Feuerzeug verlierst: Du wirst nie wieder in einem Rauchnebel gefangen sein!',
    'Das Leben als Nichtraucher ist wie eine frische Brise: Es fühlt sich gut an und ist gut für deine Gesundheit!',
    'Raucher aufgepasst: Das Aufhören mit dem Rauchen kann dazu führen, dass du plötzlich viel mehr Platz in deiner Handtasche oder deiner Jackentasche hast!',
    'Ein weiterer Grund, Nichtraucher zu werden: Du wirst nie wieder im Regen stehen, nur um eine Zigarette zu rauchen!',
    'Rauchen aufzugeben ist der ultimative Akt der Rebellion: Du trotzt den Verlockungen der Tabakindustrie!',
    'Nichtraucher haben den Vorteil, dass sie nie wieder eine Diskussion darüber führen müssen, ob sie in einem Restaurant drinnen oder draußen sitzen möchten!',
    'Nicht-Raucher haben einen klaren Vorteil: Sie können sich darauf verlassen, dass ihr Atem frisch und angenehm riecht!',
    'Denk daran, wie viel du aufhören kannst, um anzufangen: Zum Beispiel kannst du aufhören, nach einem Aschenbecher zu suchen!',
];

function FunFactCard() {
    const [currentMessage, setCurrentMessage] = useState(
        messages[Math.floor(Math.random() * messages.length)]
    );

    const rerollMessage = () => {
        setCurrentMessage(
            messages[Math.floor(Math.random() * messages.length)]
        );
    };

    return (
        <div className='flex flex-col items-center'>
            <Card title='Funfact' content={currentMessage} />
            <button
                onClick={rerollMessage}
                className='bg-teal-400 hover:bg-teal-500 text-white font-bold py-1 px-2 rounded mt-2 inline-flex items-center text-xs'
            >
                <FontAwesomeIcon icon={faRedo} size='xs' />
            </button>
        </div>
    );
}

export default FunFactCard;
