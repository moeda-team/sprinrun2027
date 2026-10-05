import { Container } from '@/components/ui/Container';

const programs = [
  'Program kesehatan perempuan',
  'Pembagian vaksin',
  'Pemeriksaan kesehatan gratis',
];

export function CharitySection() {
  return (
    <section id="charity" className="relative isolate overflow-hidden bg-forest-green py-16 text-off-white sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[min(65vw,34rem)] w-[min(65vw,34rem)] rounded-full bg-hot-pink/25 blur-3xl" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start lg:gap-16" data-reveal>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.35em] text-soft-mint">SPRIN RUN 2027 · CHARITY</p>
            <h2 className="font-display mt-6 max-w-3xl text-[clamp(2.8rem,6.5vw,5.75rem)] uppercase italic leading-[.88] tracking-[-.04em]">
              SETIAP LANGKAH DAPAT MENJADI KEBAIKAN YANG LEBIH BESAR
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-off-white/75 sm:text-lg">
              Melalui program charity, masyarakat dapat memberikan dukungan tambahan untuk membantu rangkaian kegiatan sosial dan kesehatan dalam semangat BELA KARTINI, termasuk:
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {programs.map((program) => (
                <li key={program} className="rounded-full border border-off-white/25 px-4 py-2 text-sm font-semibold text-off-white/90">
                  {program}
                </li>
              ))}
            </ul>
            <blockquote className="mt-9 border-l-4 border-hot-pink pl-5">
              <p className="font-display text-3xl uppercase italic leading-none text-blush-pink sm:text-4xl">Tidak harus besar untuk berarti.</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-off-white/70 sm:text-base">
                Ketika dilakukan bersama, langkah kecil dapat menjadi dukungan berarti bagi mereka yang membutuhkan.
              </p>
            </blockquote>
          </div>

          <aside aria-labelledby="charity-donate-title" className="rounded-2xl bg-soft-mint p-6 text-deep-green shadow-xl shadow-night-green/20 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[.3em] text-hot-pink">BERGERAK BERSAMA</p>
            <h3 id="charity-donate-title" className="font-display mt-4 text-4xl uppercase italic leading-[.9] text-deep-green sm:text-5xl">
              MARI BERBAGI
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-deep-green/70 sm:text-base">
              Informasi resmi untuk donasi akan diumumkan segera.
            </p>

            <div className="mt-7 border-t border-dashed border-deep-green/25 pt-6">
              <h4 className="font-bold">Transfer bank</h4>
              <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                <dt className="text-deep-green/60">Bank</dt><dd className="font-semibold">Segera diumumkan</dd>
                <dt className="text-deep-green/60">No. rekening</dt><dd className="font-semibold">Segera diumumkan</dd>
                <dt className="text-deep-green/60">Atas nama</dt><dd className="font-semibold">Segera diumumkan</dd>
              </dl>
            </div>

            <div className="mt-6 border-t border-dashed border-deep-green/25 pt-6">
              <h4 className="font-bold">Donasi melalui QRIS</h4>
              <p className="mt-2 text-sm leading-relaxed text-deep-green/65">Kode QRIS akan tersedia setelah kanal donasi resmi dibuka.</p>
              <div className="mt-4 grid aspect-square w-36 place-items-center rounded-xl border-2 border-dashed border-deep-green/25 bg-deep-green/[.03] px-4 text-center text-xs font-semibold text-deep-green/45 sm:w-40" aria-label="QRIS segera tersedia">
                QRIS SEGERA TERSEDIA
              </div>
            </div>
          </aside>

          <p className="border-t border-off-white/20 pt-5 text-sm leading-relaxed text-off-white/65 lg:col-span-2">
            Setiap donasi akan menjadi bagian dari dukungan terhadap rangkaian program charity SPRIN RUN 2027.
          </p>
        </div>
      </Container>
    </section>
  );
}
