import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 text-off-white">
      <Container className="flex min-h-24 items-center justify-between gap-6">
        <Link href="#home" className="focus-ring flex items-center">
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
          <summary className="focus-ring cursor-pointer list-none rounded-full border border-white/40 px-4 py-2 text-sm font-semibold">
            {site.labels.menu}
          </summary>
          <nav
            aria-label="Navigasi utama"
            className="absolute right-0 top-12 z-10 min-w-48 rounded-2xl border border-white/15 bg-deep-green p-3 shadow-xl"
          >
            {site.navigation.map((item) => (
              <Link
                className="focus-ring block rounded px-3 py-2 text-sm text-off-white hover:bg-white/10"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
        <nav aria-label="Navigasi utama" className="hidden items-center gap-5 lg:gap-7 md:flex">
            {site.navigation.map((item) => (
              <Link
              className="focus-ring text-sm font-medium text-off-white/85 transition-colors hover:text-golden-yellow"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
