import { Container } from '@/components/ui/Container';
import { Picture } from '@/components/ui/Picture';

function RunningShoeIcon() {
  return <svg aria-hidden="true" viewBox="0 0 48 48" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17h9M3 23h11M7 29h8" />
    <path d="m15 34 5-15c.7-2 2-3 3.8-3 1.3 0 2.2.7 3.2 2.3l4.2 6.2c1.2 1.8 2.8 3 5 3.7l5.8 1.8c1.8.6 2.8 2 2.8 3.8V38H13c-2.5 0-3.8-1.8-3-4 .7-1.8 2.2-2.8 5-3.2Z" />
    <path d="m22 21 5 3M20 26l6 2M18 31l6 1M30 25l-2 4M34 28l-2 3" />
  </svg>;
}

function HeartIcon() {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" className="h-14 w-14" stroke="currentColor" strokeWidth="1.8"><path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8a4.5 4.5 0 0 1 8.8-1.2 4.5 4.5 0 0 1 8.8 1.2Z" strokeLinejoin="round" /></svg>;
}

function MaternalIcon() {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" className="h-14 w-14" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="4.5" r="2" /><path d="M8.5 9c1.3-1.2 3-1.5 4.6-.8 2.2 1 3.1 3.4 3.1 6.2v5.1h-8v-6.1c0-1.8.1-3.2.3-4.4Z" strokeLinejoin="round" /><circle cx="13.1" cy="14" r="2.2" /><path d="M9 19.5 7.5 22M14.5 19.5 16 22" strokeLinecap="round" /></svg>;
}

function CommunityIcon() {
  return <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" className="h-14 w-14" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="7" r="2.4" /><circle cx="5.2" cy="9" r="1.8" /><circle cx="18.8" cy="9" r="1.8" /><path d="M7.5 19v-2.5a4.5 4.5 0 0 1 9 0V19h-9ZM2 18v-1.5a3.2 3.2 0 0 1 5-2.7M22 18v-1.5a3.2 3.2 0 0 0-5-2.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const highlights = [
  { title: 'DUKUNG KESEHATAN REPRODUKSI', description: 'Mendukung akses edukasi dan layanan kesehatan reproduksi.', icon: HeartIcon },
  { title: 'TURUNKAN ANGKA KEMATIAN IBU', description: 'Mendorong kepedulian dan dukungan untuk kesehatan ibu.', icon: MaternalIcon },
  { title: 'BERDAYAKAN PEREMPUAN INDONESIA', description: 'Bersama mendukung perempuan yang lebih sehat dan berdaya.', icon: CommunityIcon },
  { title: 'SEHAT BERSAMA BERMAKNA', description: 'Berlari bersama, memberi arti bagi kesehatan dan sesama.', icon: RunningShoeIcon },
];

const races = [
  { distance: '10K', name: 'CHALLENGE RUN', flagOff: '04.45 WIB', category: 'Umum & *Master', image: '/images/race-10k-photo.jpg', alt: 'Sekelompok pelari berlari menjauh di jalan Kota Lama.' },
  { distance: '5K', name: 'FUN RUN', flagOff: '05.15 WIB', category: 'Umum & *Master', image: '/images/race-5k-photo.jpg', alt: 'Lima pelari berlari bersama di kawasan Kota Lama.' },
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function RaceSection() {
  return (
    <section id="race" className="bg-off-white text-deep-green">
      <Container className="pb-8 pt-8 sm:pb-12 sm:pt-12" data-reveal>
        <div className="grid gap-12 border-b border-deep-green/10 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:pb-20">
          {highlights.map(({ title, description, icon: Icon }) => (
            <article key={title} className="group max-w-xs">
              <div className="text-deep-green transition-colors duration-300 group-hover:text-hot-pink"><Icon /></div>
              <h2 className="font-display mt-5 text-2xl uppercase leading-[0.95] tracking-wide text-deep-green sm:text-[1.7rem]">{title}</h2>
              <p className="body-copy mt-5 text-sm leading-relaxed text-deep-green/65">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(360px,1fr)_minmax(0,1.8fr)] lg:items-end lg:gap-14">
          <div className="relative z-10 min-w-0 max-w-sm">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-deep-green/45">RACE CATEGORY</p>
            <h2 className="font-display mt-7 text-[clamp(3.5rem,5vw,5rem)] uppercase italic leading-[0.78] tracking-[-0.04em] text-deep-green sm:text-[5rem]">CHOOSE<br />YOUR CHALLENGE</h2>
            <div className="mt-8 h-1 w-14 bg-hot-pink" />
            <p className="body-copy mt-7 text-base leading-relaxed text-deep-green/70">Pilih kategori 10K atau 5K. Keduanya tersedia untuk peserta Umum dan Master.</p>
            <a href="#registration" className="focus-ring group mt-8 inline-flex items-center gap-4 border-b-2 border-deep-green pb-2 font-bold text-deep-green transition-colors hover:border-hot-pink hover:text-hot-pink">Lihat Detail Race <ArrowIcon /></a>
          </div>

          <div>
          <div className="grid gap-5 sm:grid-cols-2">
            {races.map((race) => (
              <a href="#registration" key={race.distance} className="group relative isolate min-h-[390px] overflow-hidden rounded-sm bg-deep-green text-off-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <Picture src={race.image} alt={race.alt} width={1920} height={1280} sizes="(min-width: 1024px) 36vw, (min-width: 640px) 45vw, 92vw" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep-green via-deep-green/80 to-deep-green/5" />
                <div className="flex min-h-[390px] flex-col justify-end p-7 sm:p-8">
                  <p className="font-display text-[5rem] italic leading-[0.8] tracking-tight text-off-white">{race.distance}</p>
                  <p className="mt-4 text-xl font-bold text-off-white">{race.category}</p>
                  <h3 className="font-display mt-5 text-2xl italic uppercase text-off-white">{race.name}</h3>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[.16em] text-soft-mint">Flag-off {race.flagOff}</p>
                  <span className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full bg-hot-pink text-off-white transition-transform duration-300 group-hover:translate-x-1 sm:bottom-8 sm:right-8"><ArrowIcon /></span>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-deep-green/60">*Master = usia 45+</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
