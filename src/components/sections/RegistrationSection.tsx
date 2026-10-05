import { Container } from '@/components/ui/Container';
import { Picture } from '@/components/ui/Picture';

const ticketGroups = [
  { name: 'Early Bird Umum', detail: 'Harga terendah', prices: ['Rp200.000', 'Rp250.000'] },
  { name: 'Normal Umum', detail: 'Harga reguler', prices: ['Rp250.000', 'Rp300.000'] },
  { name: 'SKP', detail: 'Khusus tenaga kesehatan', prices: ['Rp300.000', 'Rp350.000'], skp: true },
];

const steps = ['Pilih kategori', 'Isi data peserta', 'Lakukan pembayaran', 'Terima e-ticket'];

export function RegistrationSection() {
  return (
    <section id="registration" className="relative overflow-hidden bg-deep-green py-16 text-off-white sm:py-24">
      <Picture src="/images/registration-runners.png" alt="" width={1672} height={941} sizes="100vw" className="absolute inset-0 h-full w-full object-cover object-top opacity-60" />
      <div aria-hidden="true" className="absolute inset-0 bg-deep-green/70" />
      <Container className="relative" data-reveal>
        <div className="max-w-3xl">
          <h2 className="font-display max-w-[10ch] text-[clamp(3.25rem,10vw,7.5rem)] uppercase italic leading-[.88] tracking-[-.04em]">
            Siap melangkah lebih jauh?
          </h2>
          <p className="body-copy mt-5 max-w-2xl text-base leading-relaxed text-off-white/75 sm:text-lg">
            Pilih kategori 5K atau 10K dan cek harga tiket yang tersedia. Siapkan dirimu untuk berlari sambil mendukung kesehatan perempuan Indonesia.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-3 sm:grid-cols-[minmax(0,1.3fr)_repeat(2,minmax(0,1fr))] sm:gap-x-4" role="table" aria-label="Harga tiket SPRIN RUN 2027">
          <div aria-hidden="true" className="hidden sm:block" />
          <div role="columnheader" className="font-display flex items-baseline gap-2 rounded-t-xl bg-off-white px-3 py-3 text-4xl leading-none text-deep-green sm:px-5 sm:py-4 sm:text-6xl">
            5K <span className="font-sans text-xs font-medium text-deep-green/65 sm:text-sm">kilometer</span>
          </div>
          <div role="columnheader" className="font-display flex items-baseline gap-2 rounded-t-xl bg-hot-pink px-3 py-3 text-4xl leading-none text-off-white sm:px-5 sm:py-4 sm:text-6xl">
            10K <span className="font-sans text-xs font-medium text-off-white/80 sm:text-sm">kilometer</span>
          </div>

          {ticketGroups.map((group, index) => (
            <div key={group.name} role="row" className="col-span-2 grid grid-cols-2 items-center gap-x-3 border-t border-off-white/25 py-4 sm:col-span-3 sm:grid-cols-[minmax(0,1.3fr)_repeat(2,minmax(0,1fr))] sm:gap-x-4 sm:py-5">
              <div role="rowheader" className={`col-span-2 pb-2 sm:col-span-1 sm:pb-0 ${group.skp ? 'text-blush-pink' : ''}`}>
                <strong className="block text-base font-semibold sm:text-xl">{group.name}</strong>
                <span className="text-sm text-off-white/65">{group.detail}</span>
              </div>
              {group.prices.map((price, priceIndex) => (
                <div key={priceIndex} role="cell" className={`font-display flex items-baseline rounded-sm px-3 py-3 text-[clamp(1.65rem,4vw,2.75rem)] leading-none sm:px-5 sm:py-4 ${group.skp ? 'bg-blush-pink/15' : 'bg-off-white/10'}`}>
                  <span className="mr-1 font-sans text-xs font-medium text-off-white/65 sm:text-sm">Rp</span>{price.replace('Rp', '')}
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="body-copy mt-4 max-w-3xl text-sm leading-relaxed text-off-white/75">
          <strong className="text-blush-pink">Tenaga kesehatan:</strong> gunakan email yang terdaftar di Plataran Sehat saat mendaftar kategori SKP.
        </p>

        <ol className="mt-12 grid list-none grid-cols-2 gap-x-4 gap-y-7 p-0 sm:mt-14 sm:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step} className="relative pt-9 text-sm font-semibold sm:pr-3">
              <span aria-hidden="true" className="absolute left-0 top-0 grid h-7 w-7 place-items-center rounded-full bg-hot-pink text-xs text-off-white">{index + 1}</span>
              {index < steps.length - 1 && <span aria-hidden="true" className={`absolute left-7 right-0 top-[13px] border-t-2 border-dashed border-off-white/35 ${index === 1 ? 'hidden sm:block' : ''}`} />}
              <span className="relative">{step}</span>
            </li>
          ))}
        </ol>

        <p className="body-copy mt-9 max-w-3xl text-sm leading-relaxed text-off-white/70">
          Harga ditampilkan sesuai periode tiket. Ikuti kanal resmi SPRIN RUN untuk informasi pendaftaran dan pembayaran.
        </p>
      </Container>
    </section>
  );
}
