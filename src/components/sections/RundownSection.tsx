import { Container } from '@/components/ui/Container';

const rundown = [
  { time: '04:30', activity: 'Registrasi ulang & pengambilan race pack', detail: 'Untuk peserta yang belum mengambil race pack.' },
  { time: '04:45', activity: 'Ceremonial pembukaan', detail: 'Sambutan oleh Gubernur Jawa Tengah atau yang mewakili.' },
  { time: '05:00', activity: 'Flag off kategori 10K', highlight: true },
  { time: '05:15', activity: 'Sambutan Ketua Panitia Sprinter Run 2027' },
  { time: '05:30', activity: 'Flag off kategori 5K', highlight: true },
  { time: '05:50', activity: 'Hiburan & finish line', detail: 'Pembagian medali dan refreshment.' },
  { time: '07:00', activity: 'Laporan & penerimaan hasil charity' },
  { time: '08:00', activity: 'Talkshow & edukasi kesehatan' },
  { time: '08:30', activity: 'Doorprize & grand prize' },
  { time: '09:15', activity: 'Bakti sosial & skrining' },
  { time: '10:00', activity: 'Penutupan acara', detail: 'Hiburan musik dan ramah tamah peserta serta panitia.' },
];

export function RundownSection() {
  return (
    <section id="rundown" className="bg-paper py-20 text-ink sm:py-28">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[.35em] text-hot-pink">Event Rundown</p>
            <h2 className="font-display mt-4 text-[clamp(3.5rem,7vw,6.4rem)] uppercase italic leading-[.72] tracking-[-.055em]">RANGKAIAN<br /><span className="text-hot-pink">ACARA</span></h2>
            <p className="mt-7 text-sm font-bold uppercase tracking-[.1em] text-ink/65">Sprinter Run 2027</p>
          </div>

          <ol className="mt-12 max-w-3xl">
            {rundown.map(({ time, activity, detail, highlight }) => (
              <li key={`${time}-${activity}`} className={`grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-4 border-t border-line py-4 sm:grid-cols-[5.25rem_minmax(0,1fr)] sm:gap-x-5 ${highlight ? '-mx-3 rounded-xl border-t-0 bg-blush-pink/60 px-3' : ''}`}>
                <time className={`font-display pt-0.5 text-3xl leading-none tracking-wide tabular-nums sm:text-4xl ${highlight ? 'text-hot-pink' : 'text-ink/55'}`}>{time}</time>
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-[.04em] text-ink sm:text-base">{activity}</h3>
                  {detail && <p className="mt-1 text-xs leading-snug text-ink/60 sm:text-sm">{detail}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
