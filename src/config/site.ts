export const site = {
  name: 'SPRIN RUN 2027',
  description: 'A running event to bring a healthier, stronger and more connected community.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com',
  whatsappNumber: '6280000000000',
  whatsappMessage: 'Halo, saya ingin mengetahui lebih lanjut.',
  labels: {
    menu: 'Menu',
    skipLink: 'Lewati ke konten',
    heroTitle: 'NO LIMITS. MORE MOTION.',
    heroAction: 'Daftar Sekarang',
    sectionTitle: 'Judul Seksi',
    sectionAction: 'Pelajari Lebih Lanjut',
    notFoundTitle: 'Halaman Tidak Ditemukan',
    notFoundAction: 'Kembali ke Beranda',
  },
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Race', href: '#race' },
    { label: 'About', href: '#about' },
    { label: 'Benefits', href: '#race-kit' },
    { label: 'Route', href: '#route' },
    { label: 'Rundown', href: '#rundown' },
    { label: 'FAQ', href: '#faq' },
  ],
} as const;

export type SitePath = (typeof site.navigation)[number]['href'];
