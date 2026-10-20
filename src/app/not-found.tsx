import Link from 'next/link';
import { site } from '@/config/site';

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-paper px-6 py-32 text-deep-green">
      <div className="w-full max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-hot-pink">SPRIN RUN 2027</p>
        <p aria-hidden="true" className="font-display mt-8 text-[clamp(9rem,35vw,17rem)] italic leading-[0.72] tracking-[-0.09em] text-deep-green">404</p>
        <div className="mx-auto mt-8 h-1 w-12 rounded-full bg-hot-pink" />
        <h1 className="font-display mt-6 text-3xl uppercase italic tracking-tight sm:text-5xl">{site.labels.notFoundTitle}</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-deep-green/65">
          Sepertinya kamu mengambil rute yang berbeda. Halaman ini tidak tersedia.
        </p>
        <Link
          className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-hot-pink px-7 py-3 font-bold text-off-white transition hover:brightness-110"
          href="/"
        >
          <span aria-hidden="true">←</span> {site.labels.notFoundAction}
        </Link>
      </div>
    </section>
  );
}
