'use client';

import { useEffect, useState } from 'react';

export function ScrollMotion() {
  const [showRegistrationCta, setShowRegistrationCta] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.motionReady = 'true';

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5%' },
    );

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => revealObserver.observe(element));

    const hero = document.querySelector('#home');
    const heroObserver = hero && new IntersectionObserver(
      ([entry]) => setShowRegistrationCta(!entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (hero && heroObserver) heroObserver.observe(hero);

    return () => {
      revealObserver.disconnect();
      heroObserver?.disconnect();
      delete root.dataset.motionReady;
    };
  }, []);

  return (
    <a
      href="#registration"
      className={`focus-ring fixed bottom-4 left-4 z-30 inline-flex min-h-12 items-center rounded-full bg-hot-pink px-5 text-sm font-extrabold text-off-white shadow-lg shadow-deep-green/30 transition-all duration-300 hover:bg-forest-green md:hidden ${showRegistrationCta ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      Info Pendaftaran
    </a>
  );
}
