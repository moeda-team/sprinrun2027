import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({ title: 'Kebijakan Privasi', path: '/kebijakan-privasi/' });

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-paper py-28 text-deep-green">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[.35em] text-hot-pink">Legal</p>
        <h1 className="font-display mt-5 text-5xl uppercase italic">Kebijakan Privasi</h1>
        <p className="mt-8 leading-relaxed text-deep-green/70">Saat pendaftaran dibuka, kami hanya menggunakan data peserta untuk memproses pendaftaran, pembayaran, komunikasi acara, dan kebutuhan keselamatan penyelenggaraan.</p>
        <p className="mt-5 leading-relaxed text-deep-green/70">Data tidak akan diperjualbelikan. Rincian jenis data, masa penyimpanan, pihak pemroses pembayaran, dan kanal untuk permintaan data akan dipublikasikan bersama formulir pendaftaran resmi.</p>
      </article>
    </section>
  );
}
