'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';

const programs = [
  'Program kesehatan perempuan',
  'Pembagian vaksin',
  'Pemeriksaan kesehatan gratis',
];

const ACCOUNT_NUMBER = '135-0013171762';

export function CharitySection() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(ACCOUNT_NUMBER.replace(/-/g, '')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="charity" className="relative isolate overflow-hidden bg-forest-green py-16 text-off-white sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[min(65vw,34rem)] w-[min(65vw,34rem)] rounded-full bg-hot-pink/20 blur-3xl" />
      <Container>
        {/* Top label row */}
        <div className="mb-10 flex items-center justify-between" data-reveal>
          <p className="text-xs font-bold uppercase tracking-[.35em] text-soft-mint">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-hot-pink align-middle" />
            SPRIN RUN 2027 · CHARITY
          </p>
          <p className="hidden text-sm text-off-white/50 sm:block">Semangat BELA KARTINI</p>
        </div>

        {/* Main two-column grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16" data-reveal>

          {/* ── LEFT column ── */}
          <div>
            {/* Big headline */}
            <h2 className="font-display text-[clamp(3.2rem,7vw,6rem)] uppercase italic leading-[.88] tracking-[-.04em]">
              SETIAP LANGKAH DAPAT MENJADI{' '}
              <span className="text-hot-pink">KEBAIKAN</span>{' '}
              YANG LEBIH BESAR
            </h2>

            <p className="body-copy mt-7 max-w-xl text-base leading-relaxed text-off-white/75">
              Melalui program charity, masyarakat dapat memberikan dukungan tambahan untuk membantu rangkaian kegiatan sosial dan kesehatan dalam semangat BELA KARTINI, termasuk:
            </p>

            {/* Numbered program list */}
            <ol className="mt-8 divide-y divide-off-white/15 border-t border-off-white/15">
              {programs.map((program, i) => (
                <li key={program} className="flex items-center gap-5 py-4">
                  <span className="font-display w-8 shrink-0 text-lg italic leading-none text-hot-pink">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold text-off-white/90 sm:text-base">{program}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* ── RIGHT column ── */}
          <div className="flex flex-col gap-8">
            {/* Donation card */}
            <aside
              aria-labelledby="charity-donate-title"
              className="rounded-2xl bg-off-white p-6 text-deep-green shadow-xl shadow-night-green/25 sm:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[.3em] text-hot-pink">BERGERAK BERSAMA</p>
              <h3
                id="charity-donate-title"
                className="font-display mt-3 text-4xl uppercase italic leading-[.9] text-deep-green sm:text-5xl"
              >
                MARI BERBAGI
              </h3>
              <p className="body-copy mt-3 text-sm leading-relaxed text-deep-green/65 sm:text-base">
                Salurkan donasi Anda melalui rekening resmi POGI Cabang Semarang di bawah ini.
              </p>

              {/* Bank row */}
              <div className="mt-6 border-t border-deep-green/15 pt-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-deep-green/55">Bank</span>
                  <span className="font-bold">Bank Mandiri</span>
                </div>
              </div>

              {/* Account number pill */}
              <div className="mt-4 flex items-center justify-between rounded-xl bg-deep-green px-5 py-4 text-off-white">
                <div>
                  <p className="text-xs text-off-white/55">No. rekening</p>
                  <p className="mt-0.5 text-2xl font-bold tracking-wide sm:text-3xl">{ACCOUNT_NUMBER}</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="ml-4 shrink-0 rounded-full bg-hot-pink px-5 py-2 text-sm font-bold text-off-white transition-all hover:brightness-110 active:scale-95"
                  aria-label="Salin nomor rekening"
                >
                  {copied ? 'Tersalin!' : 'Salin'}
                </button>
              </div>

              {/* Account name row */}
              <div className="mt-4 border-t border-deep-green/15 pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-deep-green/55">Atas nama</span>
                  <span className="font-bold">POGI Cabang Semarang</span>
                </div>
              </div>
            </aside>

            {/* Quote block */}
            <div>
              <p className="font-display text-[clamp(2rem,4.5vw,3.5rem)] uppercase italic leading-[.9] text-hot-pink">
                TIDAK HARUS BESAR UNTUK BERARTI.
              </p>
              <p className="body-copy mt-4 max-w-md text-sm leading-relaxed text-off-white/65 sm:text-base">
                Ketika dilakukan bersama, langkah kecil dapat menjadi dukungan berarti bagi mereka yang membutuhkan.
              </p>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="body-copy mt-14 border-t border-off-white/15 pt-5 text-sm leading-relaxed text-off-white/50" data-reveal>
          Setiap donasi akan menjadi bagian dari dukungan terhadap rangkaian program charity SPRIN RUN 2027.
        </p>
      </Container>
    </section>
  );
}
