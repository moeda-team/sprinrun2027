'use client';

import { useEffect, useState } from 'react';
import { Picture } from '@/components/ui/Picture';

type RaceKitImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className: string;
  label: string;
};

export function RaceKitImage({ src, alt, width, height, sizes, className, label }: RaceKitImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="group/image absolute inset-0 h-full w-full cursor-zoom-in" aria-label={`Lihat gambar ${label}`}>
        <Picture src={src} alt={alt} width={width} height={height} sizes={sizes} className={className} />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/35 px-4 text-center text-xs font-bold uppercase tracking-[.16em] text-white opacity-0 transition-opacity duration-200 group-hover/image:opacity-100 group-focus-visible/image:opacity-100">Klik untuk melihat gambar</span>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Gambar ${label}`}
          onClick={() => setIsOpen(false)}
        >
          <button type="button" onClick={() => setIsOpen(false)} className="absolute right-4 top-4 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white hover:bg-white/25 sm:right-8 sm:top-8" aria-label="Tutup gambar">Tutup ✕</button>
          <Picture src={src} alt={alt} width={width} height={height} sizes="100vw" className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain" />
        </div>
      )}
    </>
  );
}
