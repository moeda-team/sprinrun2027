export const site = {
  name: 'Nama Perusahaan',
  description: 'Deskripsi singkat perusahaan.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com',
  whatsappNumber: '6280000000000',
  whatsappMessage: 'Halo, saya ingin mengetahui lebih lanjut.',
  labels: {
    menu: 'Menu',
    skipLink: 'Lewati ke konten',
    heroTitle: 'Judul Halaman',
    heroAction: 'Hubungi Kami',
    sectionTitle: 'Judul Seksi',
    sectionAction: 'Pelajari Lebih Lanjut',
    notFoundTitle: 'Halaman Tidak Ditemukan',
    notFoundAction: 'Kembali ke Beranda',
  },
  navigation: [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/tentang/' },
    { label: 'Layanan', href: '/layanan/' },
    { label: 'Kontak', href: '/kontak/' },
  ],
} as const;

export type SitePath = (typeof site.navigation)[number]['href'];
