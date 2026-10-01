import { Container } from '@/components/ui/Container';
import { Picture } from '@/components/ui/Picture';

export function RaceKitSection() {
  return (
    <section id="race-kit" className="bg-off-white py-16 text-deep-green sm:py-24">
      <Container data-reveal>
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-16">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[.35em] text-deep-green/45">RACE KIT</p>
            <h2 className="font-display mt-6 text-[clamp(3rem,5vw,4.7rem)] uppercase italic leading-[.83] tracking-[-.04em] text-deep-green">KOLEKSI EKSKLUSIF SPRIN RUN 2027</h2>
            <div className="mt-6 h-1 w-12 bg-hot-pink" />
            <p className="mt-6 max-w-sm leading-relaxed text-deep-green/70">Dapatkan race kit eksklusif dengan desain spesial untuk setiap peserta.</p>
            <a href="#faq" className="focus-ring mt-7 inline-flex items-center gap-3 border-b-2 border-deep-green pb-2 font-bold">Lihat Detail Race Kit <span aria-hidden="true">→</span></a>
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
