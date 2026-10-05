import { Container } from '@/components/ui/Container';
import { Picture } from '@/components/ui/Picture';

const lifePhases = [
  { title: 'Remaja', description: 'Edukasi kesehatan reproduksi, skrining anemia, dan vaksinasi HPV untuk mencegah kanker serviks.' },
  { title: 'Dewasa & prakonsepsi', description: 'Persiapan kesehatan dan gizi sebelum kehamilan agar ibu siap mengandung.' },
  { title: 'Kehamilan', description: 'Pendampingan dan pemantauan rutin demi menjaga kesehatan ibu dan janin.' },
  { title: 'Persalinan & nifas', description: 'Persalinan yang aman, respons darurat cepat, serta perawatan pascamelahirkan.' },
];

export function EventHighlightsSection() {
  return (
    <section id="about" className="bg-off-white pb-8 pt-16 text-deep-green sm:pb-12 sm:pt-24">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2" data-reveal>
          <article className="relative isolate overflow-hidden rounded-2xl bg-deep-green px-7 py-10 text-off-white sm:px-10 sm:py-14 lg:col-span-2 lg:grid lg:grid-cols-[1fr_.85fr] lg:items-center lg:gap-10">
            <div className="absolute inset-0 -z-10 opacity-20">
              <Picture src="/images/event-highlights.png" alt="" width={1672} height={941} sizes="100vw" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.35em] text-soft-mint">TENTANG SPRIN RUN</p>
              <h2 className="font-display mt-6 text-[clamp(3rem,6vw,5rem)] uppercase italic leading-[.83] tracking-[-.04em]">APA ITU<br />SPRIN RUN?</h2>
            </div>
            <p className="mt-7 text-base font-medium leading-relaxed text-off-white/90 lg:mt-0 lg:text-lg">
              SPRIN RUN (Selamatkan Perempuan Indonesia) adalah inisiatif Perkumpulan Obstetri dan Ginekologi Indonesia (POGI) Semarang melalui program POGI SPRIN. Event ini memadukan kampanye hidup sehat melalui olahraga lari dan edukasi SPRIN.
            </p>
          </article>

          <article className="rounded-2xl bg-soft-mint/35 p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[.35em] text-deep-green/55">RUN FOR GOOD</p>
            <h3 className="font-display mt-5 text-4xl uppercase italic leading-[.9] tracking-[-.03em] text-deep-green sm:text-5xl">RUN<br />&amp; CHARITY</h3>
            <p className="mt-6 leading-relaxed text-deep-green/75">
              Dengan ikut event ini, kamu tidak hanya berlari untuk kesehatan diri sendiri, tetapi juga ikut mendukung kesehatan perempuan Indonesia. Keuntungan dari pendaftaran disalurkan melalui badan resmi untuk mendukung program SPRIN.
            </p>
            <p className="mt-4 leading-relaxed text-deep-green/75">
              Dukungan ini membantu menghadirkan vaksinasi HPV dan skrining kesehatan reproduksi bagi perempuan yang membutuhkan. Edukasi tentang kesehatan reproduksi juga menjadi bagian dari upaya pencegahan dan deteksi dini, agar lebih banyak perempuan dapat memperoleh informasi serta akses pemeriksaan yang dibutuhkan.
            </p>
            <p className="mt-4 leading-relaxed text-deep-green/75">
              Melalui gerakan lari dan charity ini, setiap langkah mengajak lebih banyak orang peduli pada kesehatan perempuan—termasuk pentingnya persiapan kesehatan dan gizi sebelum kehamilan. Bersama, kita mendukung program SPRIN untuk membantu meningkatkan kesehatan perempuan dan menekan risiko yang dapat berujung pada Angka Kematian Ibu.
            </p>
          </article>

          <div className="grid gap-6">
            <article className="rounded-2xl bg-deep-green p-7 text-off-white sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[.3em] text-soft-mint">UNTUK TENAGA KESEHATAN</p>
              <h3 className="font-display mt-4 text-3xl uppercase italic leading-tight sm:text-4xl">BAGI PARA NAKES</h3>
              <p className="mt-4 leading-relaxed text-off-white/80">SKP tersedia untuk Dokter Spesialis Obstetri dan Ginekologi, Dokter Spesialis Penyakit Dalam, Dokter Spesialis Bedah, Dokter Spesialis Anestesiologi dan Terapi Intensif, Dokter Spesialis Patologi Klinik, Dokter Spesialis Patologi Anatomi, Dokter Gigi Spesialis Bedah Mulut dan Maksilofasial, Dokter, Dokter Gigi, Bidan Vokasi, Bidan Profesi, Perawat Vokasi, Ners, Tenaga Teknologi Laboratorium Medik, Apoteker, Psikolog Klinis, dan Penata Anestesi.</p>
            </article>
            <article className="rounded-2xl border border-deep-green/15 bg-off-white p-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[.3em] text-hot-pink">UNTUK SEMUA</p>
              <h3 className="font-display mt-4 text-3xl uppercase italic leading-tight text-deep-green sm:text-4xl">BAGI MASYARAKAT UMUM</h3>
              <p className="mt-4 leading-relaxed text-deep-green/75">Event ini menjadi langkah konkret untuk ikut menyelamatkan perempuan Indonesia melalui edukasi reproduksi, vaksin HPV, persiapan kesehatan dan gizi sebelum kehamilan, hingga upaya menurunkan Angka Kematian Ibu (AKI).</p>
            </article>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-deep-green/10 bg-off-white p-7 sm:p-10" data-reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.35em] text-hot-pink">PENDEKATAN SPRIN</p>
            <h2 className="font-display mt-4 text-3xl uppercase italic leading-tight tracking-[-.03em] text-deep-green sm:text-4xl">PENDAMPINGAN DI SETIAP FASE KEHIDUPAN</h2>
          </div>
          <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lifePhases.map((phase, index) => (
              <li key={phase.title} className="rounded-xl bg-soft-mint/35 p-5">
                <span className="font-display text-3xl italic text-hot-pink">0{index + 1}</span>
                <h3 className="mt-3 font-extrabold text-deep-green">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-deep-green/70">{phase.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
