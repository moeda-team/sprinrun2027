import { Container } from '@/components/ui/Container';
import { Picture } from '@/components/ui/Picture';

const benefits = [
  'Nomor BIB & Timing Chip',
  'Jersey Eksklusif',
  '*Medali Finisher',
  'Refreshment',
  'Asuransi & Proteksi Medis',
  'E-Sertifikat & Dokumentasi',
];

export function RaceKitSection() {
  return (
    <section id="race-kit" className="bg-off-white pb-8 pt-8 text-deep-green sm:pb-12 sm:pt-12">
      <Container data-reveal>
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-16">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[.35em] text-deep-green/45">RACE BENEFITS</p>
            <h2 className="font-display mt-6 text-[clamp(3rem,5vw,4.7rem)] uppercase italic leading-[.83] tracking-[-.04em] text-deep-green">BENEFITS</h2>
            <div className="mt-6 h-1 w-12 bg-hot-pink" />
            <p className="mt-6 max-w-sm leading-relaxed text-deep-green/70">Setiap peserta kategori 5K dan 10K mendapatkan benefit berikut.</p>
            <a href="#faq" className="focus-ring mt-7 inline-flex items-center gap-3 border-b-2 border-deep-green pb-2 font-bold">Lihat Detail Race Kit <span aria-hidden="true">→</span></a>
          </div>
          <div>
            <div className="overflow-hidden rounded-xl border border-deep-green/15 bg-deep-green text-off-white">
              <div className="grid grid-cols-[minmax(0,1fr)_5rem_5rem] items-center border-b border-off-white/20 bg-deep-green/95 px-5 py-4 text-center font-bold sm:grid-cols-[minmax(0,1fr)_7rem_7rem] sm:px-7">
                <span className="text-left text-xs uppercase tracking-[.2em] text-soft-mint">Benefit</span><span>5K</span><span>10K</span>
              </div>
              {benefits.map((benefit) => (
                <div key={benefit} className="grid grid-cols-[minmax(0,1fr)_5rem_5rem] items-center border-b border-off-white/15 px-5 py-4 last:border-0 sm:grid-cols-[minmax(0,1fr)_7rem_7rem] sm:px-7">
                  <span className="pr-3 text-sm font-semibold sm:text-base">{benefit}</span>
                  {[0, 1].map((distance) => <span key={distance} className="text-center text-2xl font-bold text-soft-mint" aria-label="Termasuk">✓</span>)}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-deep-green/60">*Medali finisher hanya diberikan kepada para finisher masing-masing kategori.</p>
          </div>
        </div>
        <div className="mt-16 grid gap-8 border-t border-deep-green/10 pt-12 sm:grid-cols-[.7fr_1.3fr] sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.35em] text-deep-green/45">RACE KIT</p>
            <h3 className="font-display mt-4 text-3xl uppercase italic leading-tight text-deep-green">KOLEKSI EKSKLUSIF SPRIN RUN 2027</h3>
            <p className="mt-4 leading-relaxed text-deep-green/70">Jersey event dan medali finisher dengan desain eksklusif.</p>
          </div>
          <div>
            <Picture src="/images/race-kit.png" alt="Kaos event Sprin Run berwarna hijau serta medali finisher dengan pita hijau dan pink." width={1672} height={941} sizes="(min-width: 1024px) 58vw, 100vw" className="aspect-[1.78] w-full rounded-xl object-cover" />
            <div className="mt-4 grid grid-cols-3 text-center text-xs font-extrabold text-deep-green sm:text-sm"><p>Jersey Event</p><p>Medali Finisher</p><p>Desain Eksklusif</p></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
