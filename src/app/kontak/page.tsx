import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
export const metadata = createMetadata({ title: 'Kontak', path: '/kontak/' });
export default function KontakPage() {
  return (
    <section className="bg-paper py-28 text-deep-green">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[.35em] text-hot-pink">Kontak</p>
        <h1 className="font-display mt-5 text-5xl uppercase italic">Kanal Resmi</h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-deep-green/70">Nomor WhatsApp, email, dan tautan media sosial resmi akan diumumkan di halaman ini. Jangan melakukan pembayaran atau membagikan data kepada akun yang belum dikonfirmasi oleh panitia.</p>
        <Link href="/#registration" className="focus-ring mt-8 inline-flex rounded-full bg-hot-pink px-6 py-3 font-bold text-off-white transition hover:bg-forest-green">Lihat Info Pendaftaran</Link>
      </div>
    </section>
  );
}
