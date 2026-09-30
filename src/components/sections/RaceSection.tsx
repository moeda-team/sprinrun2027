import { Container } from '@/components/ui/Container';
import { Picture } from '@/components/ui/Picture';

function RunnerIcon() {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 48 48" className="h-14 w-14" stroke="currentColor" strokeWidth="2.5"><circle cx="29" cy="7" r="4" /><path d="m24 15 7 5 7-2M25 16l-5 10 8 5 4-8M28 31l-4 10M20 26l-10 5M34 18l7 8M18 40l-5 2M35 39l5 3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CommunityIcon() {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 48 48" className="h-14 w-14" stroke="currentColor" strokeWidth="2.5"><circle cx="24" cy="12" r="5" /><circle cx="10" cy="18" r="4" /><circle cx="38" cy="18" r="4" /><path d="M14 38v-5c0-6 4-10 10-10s10 4 10 10v5M3 37v-4c0-4 3-7 7-7 3 0 5 1 7 4M45 37v-4c0-4-3-7-7-7-3 0-5 1-7 4" strokeLinecap="round" /></svg>;
}

function LeafIcon() {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 48 48" className="h-14 w-14" stroke="currentColor" strokeWidth="2.5"><path d="M39 7C22 8 11 15 11 27c0 7 5 12 12 12 12 0 15-15 16-32Z" /><path d="M9 42c6-12 14-19 25-26" strokeLinecap="round" /></svg>;
}

function StarIcon() {
  return <svg aria-hidden="true" fill="currentColor" viewBox="0 0 48 48" className="h-14 w-14"><path d="m24 3 5.8 12.7 13.7 1.5-10.2 9.2 2.8 13.4L24 32.9 11.9 39.8l2.8-13.4-10.2-9.2 13.7-1.5L24 3Z" /></svg>;
}

const highlights = [
  { title: 'RACE FOR A HEALTHIER YOU', description: 'Tentang diri, raih versi terbaik dari kamu.', icon: RunnerIcon },
  { title: 'STRONGER COMMUNITY', description: 'Bergerak bersama, membangun komunitas yang lebih kuat.', icon: CommunityIcon },
  { title: 'POSITIVE IMPACT', description: 'Menghadirkan aksi nyata sehat dan lingkungan yang lebih baik.', icon: LeafIcon },
  { title: 'UNFORGETTABLE EXPERIENCE', description: 'Lebih dari sekadar lari, ini tentang cerita dan kebersamaan.', icon: StarIcon },
];

const races = [
  { distance: '5K', name: 'FUN RUN', description: 'Untuk kamu yang ingin memulai perjalanan lari.', image: '/images/race-5k.png', alt: 'Pelari menggunakan sepatu hijau dan merah muda di jalan saat matahari terbenam.' },
  { distance: '10K', name: 'CHALLENGE RUN', description: 'Tantangan lebih jauh untuk versi terbaikmu.', image: '/images/race-10k.png', alt: 'Pelari melangkah di jalan kota saat matahari terbenam.' },
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function RaceSection() {
  return (
    <section id="race" className="bg-off-white text-deep-green">
      <Container className="pb-20 pt-16 sm:pb-28 sm:pt-20">
        <div className="grid gap-12 border-b border-deep-green/10 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:pb-20">
          {highlights.map(({ title, description, icon: Icon }) => (
            <article key={title} className="max-w-xs">
              <Icon />
              <h2 className="font-display mt-5 text-2xl uppercase leading-[0.95] tracking-wide text-deep-green sm:text-[1.7rem]">{title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-deep-green/65">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(360px,1fr)_minmax(0,1.8fr)] lg:items-end lg:gap-14">
          <div className="relative z-10 min-w-0 max-w-sm">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-deep-green/45">RACE CATEGORY</p>
            <h2 className="font-display mt-7 text-[clamp(3.5rem,5vw,5rem)] uppercase italic leading-[0.78] tracking-[-0.04em] text-deep-green sm:text-[5rem]">CHOOSE<br />YOUR CHALLENGE</h2>
            <div className="mt-8 h-1 w-14 bg-hot-pink" />
            <p className="mt-7 text-base leading-relaxed text-deep-green/70">Dua kategori jarak untuk semua pengalaman lari, dari pemula hingga pelari berpengalaman.</p>
            <a href="#registration" className="focus-ring group mt-8 inline-flex items-center gap-4 border-b-2 border-deep-green pb-2 font-bold text-deep-green transition-colors hover:border-hot-pink hover:text-hot-pink">Lihat Detail Race <ArrowIcon /></a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {races.map((race) => (
              <a href="#registration" key={race.distance} className="group relative isolate min-h-[390px] overflow-hidden rounded-sm bg-deep-green text-off-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <Picture src={race.image} alt={race.alt} width={1774} height={887} sizes="(min-width: 1024px) 36vw, (min-width: 640px) 45vw, 92vw" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep-green via-deep-green/80 to-deep-green/5" />
                <div className="flex min-h-[390px] flex-col justify-end p-7 sm:p-8">
                  <p className="font-display text-[5rem] italic leading-[0.8] tracking-tight text-off-white">{race.distance}</p>
                  <h3 className="font-display mt-5 text-2xl italic uppercase text-off-white">{race.name}</h3>
                  <p className="mt-4 max-w-[18rem] pr-14 text-sm leading-relaxed text-off-white/80">{race.description}</p>
                  <span className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full bg-hot-pink text-off-white transition-transform duration-300 group-hover:translate-x-1 sm:bottom-8 sm:right-8"><ArrowIcon /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
