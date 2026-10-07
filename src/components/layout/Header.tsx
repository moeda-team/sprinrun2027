import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';

export function Header() {
  const homeSectionHref = (href: string) => (href.startsWith('#') ? `/${href}` : href);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-off-white/10 bg-deep-green/95 text-off-white shadow-lg shadow-deep-green/10 backdrop-blur-sm">
      <Container className="flex min-h-24 items-center justify-between gap-6">
        <Link href="/#home" className="focus-ring flex items-center">
          <Image
            src="/images/logo-with-border.webp"
            alt="Sprin Run 2027"
            width={1200}
            height={400}
            priority
            className="h-auto w-[190px] sm:w-[250px]"
          />
        </Link>
        <details className="relative md:hidden">
          <summary className="focus-ring cursor-pointer list-none rounded-full border border-off-white/40 px-4 py-2 text-sm font-semibold">
            {site.labels.menu}
          </summary>
          <nav
            aria-label="Navigasi utama"
            className="absolute right-0 top-12 z-10 min-w-48 rounded-2xl border border-off-white/15 bg-deep-green p-3 shadow-xl"
          >
            {site.primaryNavigation.map((item) => (
              <Link
                className="focus-ring block rounded px-3 py-2 text-sm font-semibold text-off-white hover:bg-off-white/10"
                href={homeSectionHref(item.href)}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link href={homeSectionHref(site.registrationUrl)} className="focus-ring mt-2 block rounded-full bg-hot-pink px-3 py-2 text-center text-sm font-extrabold text-off-white hover:bg-forest-green">Info Pendaftaran</Link>
          </nav>
        </details>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-5 lg:gap-8 md:flex">
            {site.primaryNavigation.map((item) => (
              <Link
              className="focus-ring text-sm font-semibold text-off-white/85 transition-colors hover:text-off-white hover:underline hover:decoration-2 hover:decoration-hot-pink"
              href={homeSectionHref(item.href)}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href={homeSectionHref(site.registrationUrl)} className="focus-ring hidden rounded-full bg-hot-pink px-4 py-3 text-sm font-extrabold text-off-white transition hover:bg-forest-green md:inline-flex">Info Pendaftaran</Link>
      </Container>
    </header>
  );
}
