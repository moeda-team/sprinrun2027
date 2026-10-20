import Link from 'next/link';
import { site } from '@/config/site';

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-deep-green py-32 text-off-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_20%,rgb(204_40_111_/_24%),transparent_38%),linear-gradient(145deg,#0f5c34,#062b19)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/2 hidden h-[30rem] w-[30rem] -translate-y-1/2 rounded-full border border-off-white/10 sm:block">
        <div className="absolute inset-8 rounded-full border border-off-white/10" />
        <div className="absolute inset-16 rounded-full border border-off-white/10" />
        <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-hot-pink shadow-[0_0_40px_rgb(204_40_111_/_70%)]" />
      </div>
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-off-white/20 bg-off-white/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blush-pink">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-hot-pink" /> SPRIN RUN 2027
          </p>
          <p aria-hidden="true" className="font-display mt-8 text-[clamp(7rem,24vw,15rem)] italic leading-[0.72] tracking-[-0.08em] text-off-white/10">404</p>
          <h1 className="font-display mt-5 text-4xl uppercase italic tracking-tight sm:text-6xl">{site.labels.notFoundTitle}</h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-off-white/70 sm:text-lg">
            Sepertinya kamu mengambil rute yang berbeda. Halaman ini tidak tersedia, tapi perjalananmu masih bisa berlanjut.
          </p>
          <Link
            className="focus-ring mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-hot-pink px-6 py-3 font-extrabold text-off-white shadow-lg shadow-night-green/30 transition hover:-translate-y-0.5 hover:brightness-110"
            href="/"
          >
            <span aria-hidden="true">←</span> {site.labels.notFoundAction}
          </Link>
        </div>
      </div>
    </section>
  );
}
