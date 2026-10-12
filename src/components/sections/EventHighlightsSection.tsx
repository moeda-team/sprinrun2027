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
            <div className="absolute inset-0 -z-10 opacity-25">
              <Picture src="/images/registration-runners-photo.jpg" alt="" width={1920} height={1280} sizes="100vw" className="h-full w-full object-cover object-center" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.35em] text-soft-mint">TENTANG SPRIN RUN</p>
              <h2 className="font-display mt-6 text-[clamp(3rem,6vw,5rem)] uppercase italic leading-[.83] tracking-[-.04em]">APA ITU<br />SPRIN RUN?</h2>
            </div>
            <p className="body-copy mt-7 text-base font-medium leading-relaxed text-off-white/90 lg:mt-0 lg:text-lg">
              SPRIN RUN (Selamatkan Perempuan Indonesia) adalah inisiatif Perkumpulan Obstetri dan Ginekologi Indonesia (POGI) Semarang melalui program POGI SPRIN. Event ini memadukan kampanye hidup sehat melalui olahraga lari dan edukasi SPRIN.
            </p>
          </article>

          {/* Redesigned RUN & CHARITY / NAKES / UMUM GRID */}
          <div className="lg:col-span-2 grid gap-8 lg:grid-cols-2 items-start pt-4">
            {/* LEFT COLUMN: RUN & CHARITY STORY */}
            <article className="flex flex-col gap-7 pr-0 lg:pr-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="block h-[3px] w-8 rounded-full bg-hot-pink" />
                  <p className="text-xs font-bold uppercase tracking-[.25em] text-hot-pink">RUN FOR GOOD</p>
                </div>
                <h3 className="font-display text-[clamp(4.2rem,8vw,7rem)] uppercase italic leading-[.9] tracking-[-.03em] text-deep-green">
                  RUN<br />&amp; CHARITY
                </h3>
              </div>

              <p className="body-copy text-lg font-medium leading-relaxed text-deep-green sm:text-xl">
                Dengan ikut event ini, kamu tidak hanya berlari untuk kesehatan diri sendiri, tetapi juga ikut mendukung kesehatan perempuan Indonesia. Keuntungan dari pendaftaran disalurkan melalui badan resmi untuk mendukung program SPRIN.
              </p>

              <ul className="flex flex-col border-t-2 border-deep-green/80">
                <li className="grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] gap-3 py-5 border-b border-deep-green/20">
                  <span className="font-display text-3xl italic leading-none text-hot-pink">01</span>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-base sm:text-lg font-bold text-deep-green">Vaksinasi HPV &amp; skrining</h4>
                    <p className="body-copy text-sm sm:text-base leading-relaxed text-deep-green/80">
                      Dukungan ini membantu menghadirkan vaksinasi HPV dan skrining kesehatan reproduksi bagi perempuan yang membutuhkan.
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] gap-3 py-5 border-b border-deep-green/20">
                  <span className="font-display text-3xl italic leading-none text-hot-pink">02</span>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-base sm:text-lg font-bold text-deep-green">Edukasi &amp; deteksi dini</h4>
                    <p className="body-copy text-sm sm:text-base leading-relaxed text-deep-green/80">
                      Edukasi tentang kesehatan reproduksi juga menjadi bagian dari upaya pencegahan dan deteksi dini, agar lebih banyak perempuan dapat memperoleh informasi serta akses pemeriksaan yang dibutuhkan.
                    </p>
                  </div>
                </li>
                <li className="grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] gap-3 py-5 border-b border-deep-green/20">
                  <span className="font-display text-3xl italic leading-none text-hot-pink">03</span>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="text-base sm:text-lg font-bold text-deep-green">Setiap langkah berarti</h4>
                    <p className="body-copy text-sm sm:text-base leading-relaxed text-deep-green/80">
                      Melalui gerakan lari dan charity ini, setiap langkah mengajak lebih banyak orang peduli pada kesehatan perempuan—termasuk pentingnya persiapan kesehatan dan gizi sebelum kehamilan. Bersama, kita mendukung program SPRIN untuk membantu meningkatkan kesehatan perempuan dan menekan risiko yang dapat berujung pada Angka Kematian Ibu.
                    </p>
                  </div>
                </li>
              </ul>
            </article>

            {/* RIGHT COLUMN: BAGI PARA NAKES CARD */}
            <article className="rounded-3xl bg-deep-green p-7 text-off-white sm:p-10 shadow-xl shadow-night-green/15 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold uppercase tracking-[.25em] text-soft-mint">UNTUK TENAGA KESEHATAN</p>
                <h3 className="font-display text-4xl uppercase italic leading-[.92] text-off-white sm:text-5xl">
                  BAGI PARA NAKES
                </h3>
                <p className="body-copy text-sm sm:text-base leading-relaxed text-off-white/85">
                  Program SKP Kemenkes adalah sistem pengumpulan Satuan Kredit Profesi dari Kementerian Kesehatan yang wajib dipenuhi oleh tenaga medis dan tenaga kesehatan sebagai syarat untuk memperpanjang Surat Izin Praktik (SIP). Nantinya ada kategori yang memilih SKP khusus tenaga kesehatan.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                <span className="font-display text-4xl sm:text-5xl italic leading-none text-white">17</span>
                <span className="text-sm sm:text-base font-bold text-soft-mint">SKP tersedia untuk profesi berikut</span>
              </div>

              <div className="flex flex-col gap-5 pt-1">
                {/* Dokter Spesialis */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-[.18em] text-soft-mint/90">Dokter Spesialis</span>
                  <ul className="flex flex-wrap gap-2">
                    {[
                      'Dokter Spesialis Obstetri dan Ginekologi',
                      'Dokter Spesialis Penyakit Dalam',
                      'Dokter Spesialis Bedah',
                      'Dokter Spesialis Anestesiologi dan Terapi Intensif',
                      'Dokter Spesialis Patologi Klinik',
                      'Dokter Spesialis Patologi Anatomi',
                      'Dokter Gigi Spesialis Bedah Mulut dan Maksilofasial',
                    ].map((item) => (
                      <li key={item} className="rounded-full bg-white/10 px-3.5 py-2 text-xs sm:text-sm font-medium leading-tight text-off-white backdrop-blur-sm border border-white/10">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dokter */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-[.18em] text-soft-mint/90">Dokter</span>
                  <ul className="flex flex-wrap gap-2">
                    {['Dokter', 'Dokter Gigi'].map((item) => (
                      <li key={item} className="rounded-full bg-white/10 px-3.5 py-2 text-xs sm:text-sm font-medium leading-tight text-off-white backdrop-blur-sm border border-white/10">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Kebidanan & Keperawatan */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-[.18em] text-soft-mint/90">Kebidanan &amp; Keperawatan</span>
                  <ul className="flex flex-wrap gap-2">
                    {['Bidan Vokasi', 'Bidan Profesi', 'Perawat Vokasi', 'Ners'].map((item) => (
                      <li key={item} className="rounded-full bg-white/10 px-3.5 py-2 text-xs sm:text-sm font-medium leading-tight text-off-white backdrop-blur-sm border border-white/10">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Penunjang */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-[.18em] text-soft-mint/90">Penunjang</span>
                  <ul className="flex flex-wrap gap-2">
                    {[
                      'Tenaga Teknologi Laboratorium Medik',
                      'Apoteker',
                      'Psikolog Klinis',
                      'Penata Anestesi',
                    ].map((item) => (
                      <li key={item} className="rounded-full bg-white/10 px-3.5 py-2 text-xs sm:text-sm font-medium leading-tight text-off-white backdrop-blur-sm border border-white/10">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            {/* FULL-WIDTH BOTTOM BAND: BAGI MASYARAKAT UMUM */}
            <article className="lg:col-span-2 rounded-3xl border-2 border-deep-green bg-soft-mint/25 p-7 sm:p-10 grid gap-5 lg:grid-cols-[1fr_1.3fr] lg:items-center">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold uppercase tracking-[.25em] text-hot-pink">UNTUK SEMUA</p>
                <h3 className="font-display text-3xl uppercase italic leading-tight text-deep-green sm:text-4xl">
                  BAGI MASYARAKAT UMUM
                </h3>
              </div>
              <p className="body-copy text-base sm:text-lg leading-relaxed text-deep-green/85">
                Event ini menjadi langkah konkret untuk ikut menyelamatkan perempuan Indonesia melalui edukasi reproduksi, vaksin HPV, persiapan kesehatan dan gizi sebelum kehamilan, hingga upaya menurunkan Angka Kematian Ibu (AKI).
              </p>
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
                <p className="body-copy mt-2 text-sm leading-relaxed text-deep-green/70">{phase.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
