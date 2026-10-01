'use client';

import { useEffect, useState } from 'react';

const eventTime = new Date('2027-01-17T04:30:00+07:00').getTime();
const units = [
  { label: 'Hari', seconds: 86_400 },
  { label: 'Jam', seconds: 3_600 },
  { label: 'Menit', seconds: 60 },
  { label: 'Detik', seconds: 1 },
];

export function EventCountdown() {
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      setRemainingSeconds(Math.max(0, Math.floor((eventTime - Date.now()) / 1_000)));
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="hero-fade-up hero-delay-3 mt-8" aria-label="Hitung mundur menuju SPRIN RUN 2027">
      <p className="text-xs font-bold uppercase tracking-[.3em] text-soft-mint">Menuju garis start</p>
      <div className="mt-3 grid max-w-md grid-cols-4 gap-2 sm:gap-3" aria-live="off">
        {units.map(({ label, seconds }) => {
          const value = remainingSeconds === null
            ? '--'
            : String(label === 'Hari' ? Math.floor(remainingSeconds / seconds) : Math.floor(remainingSeconds / seconds) % 60).padStart(2, '0');

          return (
            <div key={label} className="rounded-xl border border-off-white/25 bg-deep-green/35 px-2 py-3 text-center backdrop-blur-sm sm:px-4">
              <span className="block font-display text-3xl leading-none tabular-nums sm:text-4xl">{value}</span>
              <span className="mt-2 block text-[.65rem] font-bold uppercase tracking-[.16em] text-off-white/75 sm:text-xs">{label}</span>
            </div>
          );
        })}
      </div>
      {remainingSeconds === 0 && <p className="mt-3 text-sm font-semibold text-soft-mint">SPRIN RUN 2027 telah dimulai!</p>}
    </div>
  );
}
