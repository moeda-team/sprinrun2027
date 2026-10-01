import { Container } from '@/components/ui/Container';
import { Picture } from '@/components/ui/Picture';

const steps = ['Pilih kategori', 'Isi data peserta', 'Lakukan pembayaran', 'Terima e-ticket'];

export function RegistrationSection() {
  return (
    <section id="registration" className="relative overflow-hidden bg-deep-green py-16 text-off-white sm:py-24">
      <Picture src="/images/registration-runners.png" alt="" width={1672} height={941} sizes="100vw" className="absolute inset-0 h-full w-full object-cover object-top opacity-60" />
      <div aria-hidden="true" className="absolute inset-0 bg-deep-green/70" />
      <Container className="relative" data-reveal>
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[.35em] text-off-white">SIAP BERLARI?</p>
          <h2 className="font-display mt-4 text-[clamp(2.8rem,5vw,4.4rem)] uppercase italic leading-[.84] tracking-[-.04em]">SIAP UNTUK MELANGKAH<br className="hidden sm:block"/> LEBIH JAUH?</h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-off-white/75 sm:text-base">Pendaftaran dan harga akan diumumkan melalui kanal resmi. Simpan tanggalnya dan siapkan teman larimu.</p>
        </div>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => <li key={step} className="flex items-center gap-3 rounded-xl border border-off-white/20 bg-deep-green/30 px-4 py-3 text-sm font-bold"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hot-pink text-xs">{index + 1}</span>{step}</li>)}
        </ol>
        <p className="mt-6 text-sm font-semibold text-soft-mint">Harga, periode pendaftaran, dan tautan pembayaran resmi akan tampil di sini saat pendaftaran dibuka.</p>
      </Container>
    </section>
  );
}
