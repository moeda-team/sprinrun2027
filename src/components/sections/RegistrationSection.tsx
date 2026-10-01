import { Container } from '@/components/ui/Container';
import { Picture } from '@/components/ui/Picture';

const steps = ['Pilih kategori', 'Isi data peserta', 'Lakukan pembayaran', 'Terima e-ticket'];
const ticketGroups = [
  {
    name: 'Early Bird Umum',
    status: 'Tersedia',
    deadline: 'Berlaku sampai 30 Oktober 2026, 23.59',
    tickets: [
      { distance: '5K', price: 'Rp200.000' },
      { distance: '10K', price: 'Rp250.000' },
    ],
    expired: false,
  },
  {
    name: 'SKP Early — khusus tenaga kesehatan',
    status: 'Periode berakhir',
    deadline: 'Berakhir 30 September 2026, 23.59',
    tickets: [
      { distance: '5K', price: 'Rp300.000' },
      { distance: '10K', price: 'Rp350.000' },
    ],
    expired: true,
  },
];

export function RegistrationSection() {
  return (
    <section id="registration" className="relative overflow-hidden bg-deep-green py-16 text-off-white sm:py-24">
      <Picture src="/images/registration-runners.png" alt="" width={1672} height={941} sizes="100vw" className="absolute inset-0 h-full w-full object-cover object-top opacity-60" />
      <div aria-hidden="true" className="absolute inset-0 bg-deep-green/70" />
      <Container className="relative" data-reveal>
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[.35em] text-off-white">SIAP BERLARI?</p>
          <h2 className="font-display mt-4 text-[clamp(2.8rem,5vw,4.4rem)] uppercase italic leading-[.84] tracking-[-.04em]">SIAP UNTUK MELANGKAH<br className="hidden sm:block"/> LEBIH JAUH?</h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-off-white/75 sm:text-base">Pilih kategori 5K atau 10K dan cek harga tiket yang tersedia. Siapkan dirimu untuk berlari sambil mendukung kesehatan perempuan Indonesia.</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2" aria-label="Harga tiket SPRIN RUN 2027">
          {ticketGroups.map((group) => (
            <article key={group.name} className={`rounded-2xl border p-5 sm:p-7 ${group.expired ? 'border-off-white/15 bg-deep-green/35 text-off-white/65' : 'border-soft-mint/40 bg-deep-green/55 text-off-white'}`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-extrabold sm:text-xl">{group.name}</h3>
                <span className={`rounded-full px-3 py-1 text-[.65rem] font-black uppercase tracking-[.12em] ${group.expired ? 'bg-off-white/10 text-off-white/65' : 'bg-soft-mint text-deep-green'}`}>{group.status}</span>
              </div>
              <p className="mt-2 text-xs font-semibold text-off-white/60">{group.deadline}</p>
              <dl className="mt-5 grid grid-cols-2 gap-3">
                {group.tickets.map((ticket) => (
                  <div key={ticket.distance} className="rounded-xl border border-off-white/15 bg-black/10 px-4 py-3">
                    <dt className="text-xs font-bold uppercase tracking-[.15em] text-off-white/60">{ticket.distance}</dt>
                    <dd className="mt-1 text-xl font-black tabular-nums sm:text-2xl">{ticket.price}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => <li key={step} className="flex items-center gap-3 rounded-xl border border-off-white/20 bg-deep-green/30 px-4 py-3 text-sm font-bold"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hot-pink text-xs">{index + 1}</span>{step}</li>)}
        </ol>
        <p className="mt-6 text-sm font-semibold text-soft-mint">Informasi harga ditampilkan sesuai periode tiket. Ikuti kanal resmi SPRIN RUN untuk informasi pendaftaran dan pembayaran.</p>
      </Container>
    </section>
  );
}
