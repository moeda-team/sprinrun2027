import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({ title: 'Syarat & Ketentuan', path: '/syarat-ketentuan/' });

export default function TermsPage() {
  return (
    <section className="bg-paper py-28 text-deep-green">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[.35em] text-hot-pink">Legal</p>
        <h1 className="font-display mt-5 text-5xl uppercase italic">Syarat & Ketentuan</h1>
        <p className="mt-8 leading-relaxed text-deep-green/70">Peserta wajib membaca dan menyetujui ketentuan resmi sebelum menyelesaikan pendaftaran. Ketentuan lengkap mengenai kelayakan peserta, pengambilan race kit, pembatalan, pengalihan bib, keselamatan, dan perubahan rute akan diterbitkan saat registrasi dibuka.</p>
        <p className="mt-5 leading-relaxed text-deep-green/70">Panitia berhak melakukan penyesuaian operasional apabila diperlukan demi keselamatan peserta dan kelancaran acara. Setiap pembaruan akan diumumkan melalui kanal resmi SPRIN RUN 2027.</p>
      </article>
    </section>
  );
}
