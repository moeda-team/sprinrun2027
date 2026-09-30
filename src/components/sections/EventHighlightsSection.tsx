import { Container } from '@/components/ui/Container';
import { Picture } from '@/components/ui/Picture';

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function EventHighlightsSection() {
  return (
    <section id="about" className="bg-white text-deep-green">
      <Container className="px-0 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden lg:min-h-[620px] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[360px] bg-deep-green sm:min-h-[480px] lg:min-h-full">
            <Picture
              src="/images/event-highlights.png"
              alt="Pelari pria dan wanita berlari bersama di kota saat matahari terbenam."
              width={1672}
              height={941}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover object-[72%_center] lg:object-[78%_center]"
            />
          </div>

          <div className="flex items-center bg-white px-6 py-16 sm:px-12 sm:py-20 lg:px-16 xl:px-20">
            <div className="max-w-md">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-deep-green/45">EVENT HIGHLIGHTS</p>
              <h2 className="font-display mt-7 text-[clamp(3.4rem,5vw,5rem)] uppercase italic leading-[0.8] tracking-[-0.04em] text-black">LEBIH DARI<br />SEKADAR LARI</h2>
              <div className="mt-8 h-1 w-14 bg-hot-pink" />
              <p className="mt-7 max-w-sm text-base leading-relaxed text-deep-green/70">Rasakan pengalaman lengkap dengan rangkaian kegiatan, hiburan, serta berbagai aktivitas menarik untuk semua peserta.</p>
              <a href="#registration" className="focus-ring group mt-8 inline-flex items-center gap-4 border-b-2 border-deep-green pb-2 font-bold text-deep-green transition-colors hover:border-hot-pink hover:text-hot-pink">Lihat Selengkapnya <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
