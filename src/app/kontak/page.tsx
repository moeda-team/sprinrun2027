import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import { site } from '@/config/site';
export const metadata = createMetadata({ title: 'Kontak', path: '/kontak/' });
export default function KontakPage() {
  return (
    <section className="bg-paper py-28 text-deep-green">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[.35em] text-hot-pink">Kontak</p>
        <h1 className="font-display mt-5 text-5xl uppercase italic">Kanal Resmi</h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-deep-green/70">Untuk informasi SPRIN RUN 2027, hubungi kontak resmi berikut:</p>
        <address className="mt-7 not-italic">
          <p className="font-bold">{site.contactName}</p>
          <a href={`tel:${site.whatsappNumber}`} className="mt-1 inline-flex text-lg font-semibold text-hot-pink hover:underline">{site.contactPhone}</a>
        </address>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`} className="focus-ring inline-flex rounded-full bg-hot-pink px-6 py-3 font-bold text-off-white transition hover:bg-forest-green">Hubungi via WhatsApp</a>
          <Link href="/#registration" className="focus-ring inline-flex rounded-full border border-deep-green/20 px-6 py-3 font-bold transition hover:bg-deep-green hover:text-off-white">Lihat Info Pendaftaran</Link>
        </div>
      </div>
    </section>
  );
}
