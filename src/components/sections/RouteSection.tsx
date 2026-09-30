'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Container } from '@/components/ui/Container';

type RouteKey = '5K' | '10K';

const routeDetails: Record<RouteKey, { title: string; label: string; description: string; distance: string; color: string }> = {
  '5K': {
    title: 'FUN RUN ROUTE',
    label: '5K',
    description: 'Rute yang ramah untuk dinikmati bersama teman, keluarga, dan langkah pertamamu menuju garis finis.',
    distance: '5.0 KM',
    color: '#f2c230',
  },
  '10K': {
    title: 'CHALLENGE ROUTE',
    label: '10K',
    description: 'Jarak lebih jauh untuk kamu yang siap menjaga ritme dan menaklukkan tantangan berikutnya.',
    distance: '10.0 KM',
    color: '#46a7e9',
  },
};

const InteractiveRouteMap = dynamic(() => import('./InteractiveRouteMap').then((module) => module.InteractiveRouteMap), {
  ssr: false,
  loading: () => <div className="aspect-[1.06] min-h-[330px] rounded-[1.5rem] bg-[#dcebe1] sm:min-h-[440px]" aria-label="Memuat peta rute" />,
});

export function RouteSection() {
  const [activeRoute, setActiveRoute] = useState<RouteKey>('5K');
  const detail = routeDetails[activeRoute];

  return (
    <section id="route" className="overflow-hidden bg-deep-green py-20 text-off-white sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,.75fr)] lg:items-center lg:gap-16">
          <InteractiveRouteMap activeRoute={activeRoute} />

          <div className="max-w-md lg:justify-self-end">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-golden-yellow">Explore The Course</p>
            <h2 className="font-display mt-6 text-[clamp(3.6rem,6vw,5.75rem)] uppercase italic leading-[0.78] tracking-[-0.04em] text-white">FIND YOUR<br />FINISH LINE</h2>
            <p className="mt-7 text-base leading-relaxed text-white/70">Pilih kategori untuk melihat jalur yang akan kamu taklukkan pada hari perlombaan.</p>

            <div className="mt-9 grid grid-cols-2 gap-3" role="tablist" aria-label="Pilih rute perlombaan">
              {(Object.keys(routeDetails) as RouteKey[]).map((route) => {
                const selected = route === activeRoute;
                return (
                  <button
                    key={route}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveRoute(route)}
                    className={`focus-ring rounded-full border px-5 py-3 text-sm font-black transition ${selected ? 'border-transparent text-deep-green' : 'border-white/30 text-white hover:border-white hover:bg-white/10'}`}
                    style={selected ? { backgroundColor: routeDetails[route].color } : undefined}
                  >
                    {route} CATEGORY
                  </button>
                );
              })}
            </div>

            <div className="mt-10 border-t border-white/20 pt-7" role="tabpanel">
              <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: detail.color }}>{detail.label} CATEGORY</p>
              <div className="mt-3 flex items-end justify-between gap-5">
                <h3 className="font-display text-3xl uppercase italic tracking-wide text-white">{detail.title}</h3>
                <span className="shrink-0 text-sm font-bold text-white/55">{detail.distance}</span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">{detail.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
