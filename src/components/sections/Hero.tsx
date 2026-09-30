import { site } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

function CalendarIcon({ className = '' }: { className?: string }) {
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M7 3v4M17 3v4M3.5 9.5h17" /></svg>;
}

function PinIcon({ className = '' }: { className?: string }) {
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></svg>;
}

function ArrowIcon({ className = '' }: { className?: string }) {
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[760px] overflow-hidden bg-forest-green text-off-white lg:min-h-screen">
      <div className="absolute inset-0 -z-20 bg-forest-green" />
      <div className="absolute inset-0 -z-10 bg-[url('/images/hero.png')] bg-cover bg-[65%_center] bg-no-repeat sm:bg-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep-green/85 via-deep-green/35 to-transparent lg:from-deep-green/75 lg:via-deep-green/10" />
      <Container className="flex min-h-[760px] items-center pb-12 pt-36 lg:min-h-screen lg:pb-16 lg:pt-28">
        <div className="max-w-3xl">
          <p className="hero-fade-up mb-5 text-xs font-bold uppercase tracking-[0.42em] text-soft-mint sm:text-sm">SPRIN RUN 2027</p>
          <h1 className="hero-fade-up hero-delay-1 hero-title text-[clamp(4rem,10vw,9rem)] font-bold uppercase italic leading-[0.82] tracking-[-0.065em]">
            <span className="block text-off-white">NO LIMITS.</span>
            <span className="block whitespace-nowrap text-hot-pink">MORE MOTION.</span>
          </h1>
          <div className="hero-fade-up hero-delay-2 mt-9 h-1 w-44 bg-off-white sm:w-64" />
          <p className="hero-fade-up hero-delay-2 mt-7 max-w-md text-base font-medium leading-relaxed text-off-white/85 sm:text-lg">
            {site.description}
          </p>
          <div className="hero-fade-up hero-delay-3 mt-8 flex flex-wrap gap-x-9 gap-y-5 text-sm font-semibold uppercase tracking-wide text-off-white">
            <div className="flex items-center gap-3">
              <CalendarIcon className="h-7 w-7 text-golden-yellow" />
              <span><strong className="block text-xs text-soft-mint">Sunday</strong>12 January 2027</span>
            </div>
            <div className="flex items-center gap-3">
              <PinIcon className="h-7 w-7 text-golden-yellow" />
              <span><strong className="block text-xs text-soft-mint">Location</strong>Diponegoro University Choir</span>
            </div>
          </div>
          <div className="hero-fade-up hero-delay-4 mt-10 flex flex-wrap items-center gap-7">
            <Button className="rounded-full bg-hot-pink px-7 font-extrabold tracking-wide text-deep-green shadow-lg shadow-deep-green/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-golden-yellow hover:text-deep-green" href="#race">
              {site.labels.heroAction} <ArrowIcon className="ml-3 h-5 w-5" />
            </Button>
            <a className="focus-ring group inline-flex items-center gap-3 font-semibold text-off-white transition-colors duration-300 hover:text-golden-yellow" href="#about">
              Lihat Detail <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
