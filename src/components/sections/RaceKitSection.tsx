import { Container } from '@/components/ui/Container';
import { RaceKitImage } from '@/components/sections/RaceKitImage';

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
            <p className="body-copy mt-6 max-w-sm leading-relaxed text-deep-green/70">Setiap peserta kategori 5K dan 10K mendapatkan benefit berikut.</p>
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
        <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-deep-green text-off-white sm:mt-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_0%,rgba(204,40,111,.28),transparent_45%),linear-gradient(135deg,#0a4526,#062b19)]" />
          <div className="relative grid lg:grid-cols-[.8fr_1.2fr]">
            <div className="flex flex-col justify-center px-7 py-9 sm:px-10 sm:py-12 lg:px-12 lg:py-10">
              <p className="text-xs font-bold uppercase tracking-[.35em] text-soft-mint">RACE KIT 2027</p>
              <h3 className="font-display mt-5 max-w-lg text-4xl uppercase italic leading-[.95] tracking-tight sm:text-5xl">Koleksi eksklusif Sprin Run</h3>
              <div className="mt-6 h-1 w-12 bg-hot-pink" />
              <p className="mt-6 max-w-sm leading-relaxed text-off-white/75">Kenakan jersey kebanggaan dan dukung perjuangan perempuan Indonesia. Bawa semangat itu di setiap langkah, sekaligus ikut menyuarakan harapan untuk masa depan yang lebih sehat dan setara.</p>
              <div className="mt-8 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
                <span className="rounded-full border border-off-white/25 px-4 py-2">Jersey Event</span>
                <span className="rounded-full border border-off-white/25 px-4 py-2">Medali Finisher</span>
              </div>
            </div>
            <div className="grid gap-3 p-3 sm:grid-cols-[1.05fr_.95fr] sm:gap-4 sm:p-5 lg:pl-0">
              <figure className="group relative min-h-64 overflow-hidden rounded-[1.4rem] bg-black/20 sm:min-h-[26rem]">
                <RaceKitImage src="/images/medali-finisher.png" alt="Desain medali finisher Sprin Run 2027 dengan pita toska dan ilustrasi perjuangan perempuan." width={604} height={754} sizes="(min-width: 1024px) 34vw, (min-width: 640px) 48vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" label="medali finisher" />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-deep-green/85 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-off-white backdrop-blur">Medali Finisher</figcaption>
              </figure>
              <figure className="group relative min-h-64 overflow-hidden rounded-[1.4rem] bg-off-white sm:min-h-[26rem]">
                <RaceKitImage src="/images/jersey-event.png" alt="Desain jersey event Sprin Run 2027 berwarna toska, tampak depan dan belakang." width={942} height={707} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 43vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" label="jersey event" />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-deep-green px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-off-white">Jersey Event</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
