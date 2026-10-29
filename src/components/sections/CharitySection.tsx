'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import { Container } from '@/components/ui/Container';

const programs = [
  {
    label: 'Program kesehatan perempuan',
    icon: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z',
  },
  {
    label: 'Pembagian vaksin',
    icon: 'm18 2 4 4M17 7l3-3M19 9l-8.7 8.7a2.8 2.8 0 0 1-4 0l-.9-.9a2.8 2.8 0 0 1 0-4L14 4M5 19l-3 3M14 7l3 3M10 11l3 3',
  },
  { label: 'Pemeriksaan kesehatan gratis', icon: 'M3 12h4l3-8 4 16 3-8h4' },
];

const ACCOUNT_NUMBER = '135-0001317179';

export function CharitySection() {
  const [copied, setCopied] = useState(false);
  const [isQrExpanded, setIsQrExpanded] = useState(false);

  useEffect(() => {
    if (!isQrExpanded) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsQrExpanded(false);
    }

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [isQrExpanded]);

  function handleCopy() {
    navigator.clipboard.writeText(ACCOUNT_NUMBER.replace(/-/g, '')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section
      id="charity"
      className="relative isolate overflow-hidden bg-forest-green py-16 text-off-white sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[min(65vw,34rem)] w-[min(65vw,34rem)] rounded-full bg-hot-pink/20 blur-3xl"
      />
      <Container>
        {/* Top label row */}
        <div
          className="mb-8 flex flex-col items-start gap-1 text-sm sm:flex-row sm:items-center sm:justify-between"
          data-reveal
        >
          <p className="text-xs font-bold uppercase tracking-[.35em] text-soft-mint">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-hot-pink align-middle" />
            Sprin Run 2027 Charity
          </p>
          <p className="text-sm text-off-white/65">Semangat BELA KARTINI</p>
        </div>

        {/* Main two-column grid */}
        <div className="grid items-stretch gap-9 lg:grid-cols-[1.1fr_.9fr] lg:gap-14" data-reveal>
          {/* ── LEFT column ── */}
          <div className="flex flex-col">
            {/* Big headline */}
            <h2 className="font-display text-[clamp(2.8rem,7vw,5.6rem)] uppercase leading-[.98] tracking-[.005em]">
              Setiap langkah dapat menjadi{' '}
              <span className="text-hot-pink">kebaikan yang lebih besar</span>
            </h2>

            <p className="body-copy mt-7 max-w-xl text-base leading-relaxed text-off-white/70 sm:text-lg">
              Melalui program charity, masyarakat dapat memberikan dukungan tambahan untuk membantu
              rangkaian kegiatan sosial dan kesehatan dalam semangat BELA KARTINI, termasuk:
            </p>

            <ul className="mt-2 flex max-w-xl flex-1 flex-col border-t border-off-white/15">
              {programs.map((program) => (
                <li
                  key={program.label}
                  className="flex min-h-[72px] flex-1 items-center gap-4 border-b border-off-white/15 py-4 text-base font-medium text-off-white/90 sm:text-lg"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-11 w-11 shrink-0 rounded-[11px] bg-off-white/10 p-2.5 text-hot-pink"
                  >
                    <path d={program.icon} />
                  </svg>
                  {program.label}
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT column ── */}
          <div>
            {/* Donation card */}
            <aside
              aria-labelledby="charity-donate-title"
              className="rounded-2xl bg-off-white p-6 text-deep-green shadow-xl shadow-night-green/25 sm:rounded-3xl sm:p-8"
            >
              <h3
                id="charity-donate-title"
                className="font-display text-4xl uppercase leading-none text-deep-green sm:text-5xl"
              >
                MARI BERBAGI
              </h3>
              <p className="body-copy mt-2 text-sm leading-relaxed text-deep-green/70 sm:text-base">
                Salurkan donasi Anda melalui rekening resmi POGI Cabang Semarang.
              </p>

              {/* QRIS first, as in the reference */}
              <div className="mt-6">
                <h4 className="mb-3 text-base font-bold">Donasi melalui QRIS</h4>
                <button
                  type="button"
                  onClick={() => setIsQrExpanded(true)}
                  aria-label="Perbesar kode QRIS"
                  aria-haspopup="dialog"
                  className="mx-auto block w-full max-w-[250px] cursor-zoom-in rounded-2xl border border-deep-green/10 bg-white p-[18px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-hot-pink"
                >
                  <Image
                    src="/images/qris-charity.png"
                    alt="Kode QRIS donasi POGI Cabang Semarang"
                    width={1288}
                    height={1289}
                    sizes="250px"
                    className="block h-auto w-full [image-rendering:pixelated]"
                  />
                </button>
                <p className="body-copy mt-3 text-center text-sm leading-relaxed text-deep-green/70">
                  Buka aplikasi bank atau e-wallet, lalu pindai kode ini.
                </p>
                <a
                  href="/images/qris-charity.png"
                  download="qris-pogi-semarang.png"
                  className="mt-3 block text-center text-sm font-bold text-hot-pink underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hot-pink"
                >
                  Unduh kode QRIS
                </a>
              </div>

              {/* Bank transfer */}
              <div className="mt-6 border-t border-deep-green/15 pt-5">
                <h4 className="mb-1 text-base font-bold">Atau transfer bank</h4>
                <div className="flex items-center justify-between gap-4 border-b border-deep-green/10 py-3 text-sm">
                  <span className="text-deep-green/60">Bank</span>
                  <strong className="text-right">Bank Mandiri</strong>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-deep-green px-4 py-4 text-off-white sm:px-5">
                  <div className="min-w-0">
                    <p className="text-xs text-off-white/65">No. rekening</p>
                    <p className="mt-0.5 break-all text-xl font-bold tabular-nums tracking-wide sm:text-2xl">
                      {ACCOUNT_NUMBER}
                    </p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="min-h-11 shrink-0 rounded-full bg-hot-pink px-5 py-2 text-sm font-bold text-deep-green transition-colors hover:bg-hot-pink/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hot-pink"
                    aria-label="Salin nomor rekening"
                  >
                    {copied ? 'Tersalin' : 'Salin'}
                  </button>
                </div>
                <div className="flex items-center justify-between gap-4 py-3 text-sm">
                  <span className="text-deep-green/60">Atas nama</span>
                  <strong className="text-right">POGI Cabang Semarang</strong>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer note */}
        <p
          className="body-copy mt-14 border-t border-off-white/15 pt-5 text-sm leading-relaxed text-off-white/50"
          data-reveal
        >
          Setiap donasi menjadi bagian dari dukungan untuk rangkaian program charity SPRIN RUN 2027.
        </p>
      </Container>
      {isQrExpanded &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Kode QRIS ukuran besar"
            onClick={() => setIsQrExpanded(false)}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <div className="relative" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                autoFocus
                onClick={() => setIsQrExpanded(false)}
                aria-label="Tutup gambar QRIS"
                className="absolute -right-3 -top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-off-white text-deep-green shadow-lg hover:bg-soft-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hot-pink"
              >
                <span aria-hidden="true" className="text-2xl leading-none">
                  ×
                </span>
              </button>
              <Image
                src="/images/qris-charity.png"
                alt="Kode QRIS donasi POGI Cabang Semarang"
                width={1288}
                height={1289}
                sizes="90vw"
                className="max-h-[85vh] w-auto max-w-[90vw] rounded-2xl bg-white object-contain p-3 shadow-2xl"
              />
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
