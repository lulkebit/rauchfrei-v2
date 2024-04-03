import React from 'react';
import { Drawer } from 'vaul';

import Card from '../cards/Card';
import ProgressBarTime from '../bars/ProgressBarTime';

function HealthDrawer() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button>Mehr anzeigen</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40' />
        <Drawer.Content className='flex flex-col rounded-t-[10px] h-[80%] mt-24 fixed bottom-0 left-0 right-0 mx-auto max-w-screen-xl'>
          <div className='p-4 bg-gray-100 rounded-t-[10px] overflow-y-auto scrollbar-hide'>
            <div className='mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8' />
            <div className='max-w-2xl mx-auto'>
              <Drawer.Title className='font-bold text-2xl text-center mb-4'>
                Meilensteine:
              </Drawer.Title>
              <div className='grid grid-rows-1 gap-6'>
                <Card
                  title='Puls und Blutdruck'
                  content={
                    <>
                      <b>Nach 20 Minuten:</b> Puls und Blutdruck sinken auf
                      normale Werte. <ProgressBarTime minutes='20' />
                    </>
                  }
                />
                <Card
                  title='Frischer Atem'
                  content={
                    <>
                      <b>Nach 8 Stunden:</b> Das Kohlenmonoxid im Blut wurde
                      abgebaut und der stinkende Raucheratem hat sich
                      verflüchtigt. <ProgressBarTime minutes='480' />
                    </>
                  }
                />
                <Card
                  title='Herzinfarktrisiko'
                  content={
                    <>
                      <b>Nach 24 Stunden:</b> Jetzt schon senkt sich das Risiko
                      einen Herzinfarkt zu bekommen.
                      <ProgressBarTime minutes='1440' />
                    </>
                  }
                />
                <Card
                  title='Sinne'
                  content={
                    <>
                      <b>Nach 2 Tagen:</b> Nikotin ist aus dem Körper
                      eliminiert. Langsam kehren der natürliche Geruchs- und
                      Geschmakssinn wieder zurück.
                      <ProgressBarTime minutes='2880' />
                    </>
                  }
                />
                <Card
                  title='Atemwege'
                  content={
                    <>
                      <b>Nach 3 Tagen:</b> Die Atemwege entspannen sich, was zu
                      einer leichteren Atmung führt. Energie steigt.
                      <ProgressBarTime minutes='4320' />
                    </>
                  }
                />
                <Card
                  title='Durchblutung'
                  content={
                    <>
                      <b>Nach 2 Wochen:</b> Durchblutung verbessert sich, was zu
                      besserer Hautfarbe und -textur führt.
                      <ProgressBarTime minutes='20160' />
                    </>
                  }
                />
                <Card
                  title='Husten & Atemprobleme'
                  content={
                    <>
                      <b>Nach 6 Monaten:</b> Husten und Atemprobleme gehen
                      zurück. Flimmerhärchen in den Atemwegen beginnen, sich zu
                      regenerieren, was das Infektionsrisiko verringert.
                      <ProgressBarTime minutes='262800' />
                    </>
                  }
                />
                <Card
                  title='Koronare Herzkrankheiten'
                  content={
                    <>
                      <b>Nach 1 Jahr:</b> Das Risiko für koronare
                      Herzkrankheiten halbiert sich im Vergleich zu einem
                      Raucher.
                      <ProgressBarTime minutes='525600' />
                    </>
                  }
                />
                <Card
                  title='Krebs'
                  content={
                    <>
                      <b>Nach 5 Jahren:</b> Das Risiko für Mund-, Rachen-,
                      Speiseröhren- und Blasenkrebs sinkt um die Hälfte.
                      <ProgressBarTime minutes='2628000' />
                    </>
                  }
                />
                <Card
                  title='Lungenkrebs'
                  content={
                    <>
                      <b>Nach 10 Jahren:</b> Das Risiko für Lungenkrebs halbiert
                      sich im Vergleich zu einem Raucher.
                      <ProgressBarTime minutes='5256000' />
                    </>
                  }
                />
                <Card
                  title='Herzkrankheiten'
                  content={
                    <>
                      <b>Nach 15 Jahren:</b> Das Risiko für Herzkrankheiten ist
                      das gleiche wie bei einem Nichtraucher.
                      <ProgressBarTime minutes='7884000' />
                    </>
                  }
                />
                <Card
                  title='COPD'
                  content={
                    <>
                      <b>Nach 20 Jahren:</b> Das Risiko für chronisch
                      obstruktive Lungenerkrankungen (COPD) ist das gleiche wie
                      bei einem Nichtraucher.
                      <ProgressBarTime minutes='10512000' />
                    </>
                  }
                />
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default HealthDrawer;
