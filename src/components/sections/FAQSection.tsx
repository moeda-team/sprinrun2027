import { Container } from '@/components/ui/Container';

const questions = [
  ['Kapan dan di mana SPRIN RUN 2027 diselenggarakan?', 'Informasi tanggal dan lokasi acara akan diumumkan melalui kanal resmi SPRIN RUN. Pantau halaman ini untuk pembaruan terbaru.'],
  ['Apa saja kategori yang tersedia?', 'SPRIN RUN menyediakan kategori 5K dan 10K. Pilih jarak yang paling sesuai dengan target dan pengalaman larimu.'],
  ['Berapa biaya pendaftaran?', 'Biaya pendaftaran bergantung pada kategori dan periode registrasi. Detail biaya akan tersedia saat pendaftaran dibuka.'],
  ['Apakah ada batasan usia?', 'Peserta di bawah usia 17 tahun perlu didampingi dan didaftarkan oleh orang tua atau wali.'],
  ['Bagaimana cara mengambil race kit?', 'Jadwal dan lokasi pengambilan race kit akan diinformasikan kepada peserta terdaftar menjelang hari acara.'],
] as const;

export function FAQSection() {
  return (
    <section id="faq" className="bg-off-white py-16 text-deep-green sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div className="max-w-md">
            <p className="text-xs font-bold uppercase tracking-[.35em] text-deep-green/45">FAQ</p>
            <h2 className="font-display mt-6 text-[clamp(3rem,5vw,4.7rem)] uppercase italic leading-[.83] tracking-[-.04em] text-deep-green">PERTANYAAN YANG SERING DITANYA</h2>
            <div className="mt-6 h-1 w-12 bg-hot-pink" />
            <p className="mt-6 leading-relaxed text-deep-green/70">Masih ada pertanyaan? Cek daftar pertanyaan yang paling sering ditanyakan oleh peserta.</p>
          </div>
          <div className="divide-y divide-deep-green/15">
            {questions.map(([question, answer]) => (
              <details key={question} className="group py-4">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-5 font-bold marker:hidden">{question}<span aria-hidden="true" className="text-2xl leading-none transition-transform group-open:rotate-45">+</span></summary>
                <p className="max-w-2xl pb-2 pr-10 pt-3 text-sm leading-relaxed text-deep-green/65">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
