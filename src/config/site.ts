export const site = {
  name: 'SPRIN RUN 2027',
  description: 'Ajang lari untuk bergerak lebih sehat, lebih kuat, dan lebih terhubung.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sprinrun2027.vercel.app',
  eventDate: 'Minggu, 17 Januari 2027',
  venue: 'Kantor Gubernur Jawa Tengah',
  routeStartMapUrl: 'https://www.google.com/maps/search/?api=1&query=-6.9931,110.4213',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  whatsappMessage: 'Halo, saya ingin mengetahui lebih lanjut tentang SPRIN RUN 2027.',
  registrationUrl: '#registration',
  labels: {
    menu: 'Menu',
    skipLink: 'Lewati ke konten',
    heroTitle: 'NO LIMITS. MORE MOTION.',
    heroAction: 'Info Pendaftaran',
    sectionTitle: 'Info Pendaftaran',
    sectionAction: 'Lihat Detail',
    notFoundTitle: 'Halaman Tidak Ditemukan',
    notFoundAction: 'Kembali ke Beranda',
  },
  navigation: [
    { label: 'Beranda', href: '#home' },
    { label: 'Race', href: '#race' },
    { label: 'Tentang', href: '#about' },
    { label: 'Race Kit', href: '#race-kit' },
    { label: 'Rute', href: '#route' },
    { label: 'Rundown', href: '#rundown' },
    { label: 'FAQ', href: '#faq' },
  ],
} as const;

export type SitePath = (typeof site.navigation)[number]['href'];
