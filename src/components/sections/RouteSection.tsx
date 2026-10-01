'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Container } from '@/components/ui/Container';

type RouteKey = '5K' | '10K';

const routeDetails: Record<RouteKey, { description: string; distance: string; flagOff: string; color: string; selectedText: string }> = {
  '5K': {
    description: 'Rute yang ramah untuk dinikmati bersama teman, keluarga, dan langkah pertamamu menuju garis finis.',
    distance: '5,0',
    flagOff: '05:30',
    color: 'var(--color-hot-pink)',
    selectedText: 'text-off-white',
  },
  '10K': {
    description: 'Jarak lebih jauh untuk kamu yang siap menjaga ritme dan menaklukkan tantangan berikutnya.',
    distance: '10,0',
    flagOff: '05:00',
    color: 'var(--color-forest-green)',
    selectedText: 'text-off-white',
  },
};

const InteractiveRouteMap = dynamic(() => import('./InteractiveRouteMap').then((module) => module.InteractiveRouteMap), {
  ssr: false,
  loading: () => <div className="aspect-[1.06] min-h-[330px] rounded-[1.5rem] bg-soft-mint sm:min-h-[440px]" aria-label="Memuat peta rute" />,
});

export function RouteSection() {
  const [activeRoute, setActiveRoute] = useState<RouteKey>('5K');
  const detail = routeDetails[activeRoute];

  return (
    <section id="route" className="overflow-hidden bg-paper py-20 text-ink sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,.75fr)] lg:items-center lg:gap-16">
          <InteractiveRouteMap activeRoute={activeRoute} />

          <div className="max-w-md lg:justify-self-end">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-ink">Explore The Course</p>
            <h2 className="font-display mt-4 text-[clamp(3.5rem,7vw,6.4rem)] uppercase italic leading-[.72] tracking-[-.055em] text-ink">FIND YOUR<br /><span className="text-hot-pink">FINISH LINE</span></h2>
            <p className="mt-7 text-base leading-relaxed text-ink/70">Pilih kategori untuk melihat jalur yang akan kamu taklukkan pada hari perlombaan.</p>

            <div className="mt-8 inline-flex rounded-full border border-line bg-soft-mint/50 p-1" role="tablist" aria-label="Pilih rute perlombaan">
              {(Object.keys(routeDetails) as RouteKey[]).map((route) => {
                const selected = route === activeRoute;
                return (
                  <button
                    key={route}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveRoute(route)}
                    className={`focus-ring rounded-full px-6 py-2.5 text-sm font-black transition ${selected ? routeDetails[route].selectedText : 'text-ink/60 hover:bg-white hover:text-ink'}`}
                    style={selected ? { backgroundColor: routeDetails[route].color } : undefined}
                  >
                    {route}
                  </button>
                );
              })}
            </div>

            <div className="mt-9" role="tabpanel">
              <div className="flex gap-9 sm:gap-12">
                <div>
                  <strong className="font-display block text-5xl leading-none tracking-wide text-ink sm:text-6xl">{detail.distance}</strong>
                  <span className="mt-2 block text-xs font-bold uppercase tracking-[.16em] text-ink/60">Kilometer</span>
                </div>
                <div>
                  <strong className="font-display block text-5xl leading-none tracking-wide text-ink sm:text-6xl">{detail.flagOff}</strong>
                  <span className="mt-2 block text-xs font-bold uppercase tracking-[.16em] text-ink/60">Flag off</span>
                </div>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/70">{detail.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
