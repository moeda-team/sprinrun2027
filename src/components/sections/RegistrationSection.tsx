import { Container } from '@/components/ui/Container';
import { Picture } from '@/components/ui/Picture';

export function RegistrationSection() {
  return (
    <section id="registration" className="relative overflow-hidden bg-deep-green py-14 text-off-white sm:py-20">
      <Picture src="/images/registration-runners.png" alt="" width={1672} height={941} sizes="100vw" className="absolute inset-0 h-full w-full object-cover object-top opacity-60" />
      <div aria-hidden="true" className="absolute inset-0 bg-deep-green/70" />
      <Container className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[.35em] text-off-white">BE PART OF IT</p>
          <h2 className="font-display mt-4 text-[clamp(2.8rem,5vw,4.4rem)] uppercase italic leading-[.84] tracking-[-.04em]">SIAP UNTUK MELANGKAH<br className="hidden sm:block"/> LEBIH JAUH?</h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-off-white/75 sm:text-base">Jangan lewatkan kesempatan untuk menjadi bagian dari SPRIN RUN 2027. Ajak teman, keluarga, dan komunitasmu!</p>
        </div>
        <a href="/kontak/" className="focus-ring inline-flex min-h-14 shrink-0 items-center justify-center gap-5 rounded-full bg-hot-pink px-8 font-extrabold text-off-white transition hover:bg-forest-green">Daftar Sekarang <span aria-hidden="true">→</span></a>
      </Container>
    </section>
  );
}
