import { ParticipantList } from '@/components/participants/ParticipantList';
import { site } from '@/config/site';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Daftar Peserta',
  description: 'Daftar peserta terdaftar SPRIN RUN 2027.',
  path: '/peserta/',
});

export default function PesertaPage() {
  return (
    <>
      <section className="bg-deep-green pb-16 pt-36 text-off-white sm:pb-20 sm:pt-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blush-pink">SPRIN RUN 2027</p>
          <h1 className="mt-3 font-display text-5xl uppercase italic tracking-tight sm:text-6xl">Daftar Peserta</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-off-white/75 sm:text-lg">Temukan peserta yang telah menyelesaikan pembayaran untuk {site.eventDate}.</p>
        </div>
      </section>
      <section className="pb-20 pt-10 sm:pb-28 sm:pt-14">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ParticipantList apiBaseUrl={process.env.NEXT_PUBLIC_REGISTRATION_API_URL} eventId={process.env.NEXT_PUBLIC_EVENT_ID} />
        </div>
      </section>
    </>
  );
}
