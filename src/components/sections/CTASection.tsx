import { Container } from '@/components/ui/Container';

export function CTASection() {
  return (
    <section className="bg-hot-pink py-16 text-off-white sm:py-24">
      <Container className="text-center" data-reveal>
        <p className="text-xs font-bold uppercase tracking-[.35em] text-off-white/75">SPRIN RUN 2027</p>
        <h2 className="font-display mx-auto mt-5 max-w-3xl text-[clamp(3.4rem,8vw,7rem)] uppercase italic leading-[.78] tracking-[-.05em]">SIAP UNTUK<br />GARIS FINIS?</h2>
        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-off-white/85">Simpan tanggalnya, ajak teman larimu, dan pantau informasi pendaftaran resmi di halaman ini.</p>
        <a href="#registration" className="focus-ring mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-deep-green px-8 font-extrabold text-off-white transition hover:bg-forest-green">Lihat Info Pendaftaran <span aria-hidden="true" className="ml-3">→</span></a>
      </Container>
    </section>
  );
}
