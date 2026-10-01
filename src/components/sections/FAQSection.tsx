import { Container } from '@/components/ui/Container';

const questions = [
  ['Kapan dan di mana SPRIN RUN 2027 diselenggarakan?', 'SPRIN RUN 2027 berlangsung pada Minggu, 17 Januari 2027 di Kantor Gubernur Jawa Tengah.'],
  ['Apa saja kategori yang tersedia?', 'SPRIN RUN menyediakan kategori 5K dan 10K. Pilih jarak yang paling sesuai dengan target dan pengalaman larimu.'],
  ['Berapa biaya pendaftaran?', 'Harga, periode early bird, dan batas akhir pendaftaran akan diumumkan saat registrasi dibuka.'],
  ['Apakah ada batasan usia?', 'Peserta di bawah usia 17 tahun perlu didampingi dan didaftarkan oleh orang tua atau wali.'],
  ['Bagaimana cara mengambil race kit?', 'Jadwal dan lokasi pengambilan race kit akan diinformasikan kepada peserta terdaftar menjelang hari acara.'],
  ['Apakah pendaftaran dapat dibatalkan atau dialihkan?', 'Ketentuan refund dan pengalihan bib akan diumumkan bersamaan dengan syarat dan ketentuan pendaftaran.'],
  ['Apa yang perlu dibawa pada hari acara?', 'Bawa e-ticket, identitas yang sesuai data pendaftaran, dan perlengkapan lari pribadi. Informasi teknis lengkap akan dikirim kepada peserta terdaftar.'],
  ['Bagaimana jika hujan?', 'Acara tetap berlangsung selama kondisi dinyatakan aman. Pembaruan operasional akan disampaikan melalui kanal resmi.'],
] as const;

export function FAQSection() {
  return (
    <section id="faq" className="bg-off-white py-16 text-deep-green sm:py-24">
      <Container data-reveal>
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
