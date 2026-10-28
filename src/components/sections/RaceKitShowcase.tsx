'use client';

import { useState } from 'react';
import { RaceKitImage } from '@/components/sections/RaceKitImage';

const medals = [
  {
    distance: '5K',
    finish: 'Perak',
    lanyard: '/images/medali-5k-pita.jpg',
    detail: '/images/medali-5k-detail.jpg',
    tone: 'border-[#c9ced1] text-[#e0e3e4]',
    glow: 'shadow-[0_14px_42px_-20px_rgba(201,206,209,.55)]',
  },
  {
    distance: '10K',
    finish: 'Emas',
    lanyard: '/images/medali-10k-pita.jpg',
    detail: '/images/medali-10k-detail.jpg',
    tone: 'border-[#d2a85a] text-[#e5c27e]',
    glow: 'shadow-[0_14px_42px_-20px_rgba(210,168,90,.55)]',
  },
];

export function RaceKitShowcase() {
  const [views, setViews] = useState<Record<string, 'lanyard' | 'detail'>>({});

  return (
    <section className="relative mt-10 overflow-hidden rounded-3xl bg-[#112a1e] p-3 text-[#f3f1ea] shadow-[0_24px_70px_-40px_rgba(6,31,19,.8)] sm:mt-12 sm:p-4 lg:p-5" aria-labelledby="race-kit-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_0%,rgba(238,127,160,.18),transparent_42%),linear-gradient(145deg,rgba(31,122,114,.12),transparent_52%)]" />
      <div className="relative grid gap-3 pb-1 sm:grid-cols-[1.1fr_.9fr] sm:items-end sm:gap-6">
        <div>
          <p className="text-[.65rem] font-bold uppercase tracking-[.22em] text-[#b9c9bd]">Race kit 2027</p>
          <h3 id="race-kit-title" className="font-display mt-1.5 text-3xl uppercase italic leading-[.95] tracking-tight sm:text-4xl">Koleksi eksklusif Sprin Run</h3>
          <div className="mt-3 h-1 w-10 rounded-full bg-[#ee7fa0]" />
        </div>
        <p className="max-w-lg text-xs leading-relaxed text-[#b9c9bd] sm:justify-self-end">Kenakan jersey kebanggaan dan dukung perjuangan perempuan Indonesia. Bawa semangat itu di setiap langkah, sekaligus ikut menyuarakan harapan untuk masa depan yang lebih sehat dan setara.</p>
      </div>

      <div className="relative mt-4 grid gap-3 lg:grid-cols-3">
        <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
        {medals.map((medal) => {
          const view = views[medal.distance] ?? 'lanyard';
          const image = view === 'lanyard' ? medal.lanyard : medal.detail;
          const label = `medali ${medal.distance} ${view === 'lanyard' ? 'dengan lanyard' : 'tampak depan dan belakang'}`;
          return (
            <article key={medal.distance} className={`min-w-0 rounded-xl border border-white/10 bg-[#1a3a2a] p-2.5 sm:p-3 ${medal.glow}`}>
              <header className="mb-2 flex items-center gap-2.5">
                <span className={`font-display text-3xl font-black leading-none ${medal.tone.split(' ').at(-1)}`}>{medal.distance}</span>
                <span className="text-xs font-semibold">Medali finisher <small className="block font-normal text-[#b9c9bd]">{medal.finish}</small></span>
              </header>
              <figure className={`relative aspect-[1.15/1] overflow-hidden rounded-lg border-2 bg-[#0c1d15] sm:aspect-square ${medal.tone.split(' ')[0]}`}>
                <RaceKitImage src={image} alt={`Medali finisher ${medal.distance} ${medal.finish.toLowerCase()} Sprin Run 2027, ${view === 'lanyard' ? 'dengan lanyard hijau' : 'tampak depan dan belakang'}.`} width={760} height={view === 'lanyard' ? 950 : 1009} sizes="(min-width: 1024px) 34vw, (min-width: 640px) 42vw, 90vw" className={`h-full w-full object-cover ${view === 'lanyard' ? 'object-[50%_30%]' : 'object-[50%_32%]'}`} label={label} />
              </figure>
              <div className="mt-2 flex gap-2" aria-label={`Pilih tampilan medali ${medal.distance}`}>
                {(['lanyard', 'detail'] as const).map((option) => (
                  <button key={option} type="button" aria-pressed={view === option} onClick={() => setViews((current) => ({ ...current, [medal.distance]: option }))} className={`focus-ring flex-1 rounded-full border px-2.5 py-1.5 text-[.68rem] font-semibold transition-colors ${view === option ? 'border-[#f3f1ea] bg-[#f3f1ea] text-[#112a1e]' : 'border-white/20 text-[#f3f1ea] hover:border-white/50'}`}>
                    {option === 'lanyard' ? 'Dengan lanyard' : 'Detail medali'}
                  </button>
                ))}
              </div>
            </article>
          );
        })}
        </div>

      <article className="relative mt-3 grid gap-3 rounded-xl bg-[#1a3a2a] p-2.5 sm:grid-cols-[1.4fr_1fr] sm:items-center sm:gap-4 sm:p-3 lg:mt-0 lg:grid-cols-1 lg:content-start lg:gap-2">
        <figure className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white sm:aspect-[329/188] lg:aspect-square">
          <RaceKitImage src="/images/jersey-event.png" alt="Jersey event Sprin Run 2027 berwarna teal, tampak depan dan belakang." width={942} height={707} sizes="(min-width: 1024px) 42vw, (min-width: 640px) 48vw, 90vw" className="h-full w-full object-contain" label="jersey event" />
        </figure>
        <div className="px-1 pb-1 sm:px-0">
          <p className="text-[.65rem] font-bold uppercase tracking-[.2em] text-[#b9c9bd]">Perlengkapan peserta</p>
          <h4 className="font-display mt-1.5 text-2xl font-black uppercase leading-none">Jersey event</h4>
          <p className="mt-1.5 text-xs leading-relaxed text-[#b9c9bd]">Desain khusus Sprin Run 2027 untuk menemani setiap langkahmu.</p>
        </div>
      </article>
      </div>
    </section>
  );
}
