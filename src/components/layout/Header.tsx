import Link from 'next/link';
import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';

export function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="focus-ring font-semibold text-ink">
          {site.name}
        </Link>
        <details className="relative md:hidden">
          <summary className="focus-ring cursor-pointer list-none rounded-md border border-line px-3 py-2 text-sm">
            {site.labels.menu}
          </summary>
          <nav
            aria-label="Navigasi utama"
            className="absolute right-0 top-12 z-10 min-w-44 rounded-md border border-line bg-paper p-3 shadow-sm"
          >
            {site.navigation.map((item) => (
              <Link
                className="focus-ring block rounded px-3 py-2 text-sm"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
        <nav aria-label="Navigasi utama" className="hidden gap-6 md:flex">
          {site.navigation.map((item) => (
            <Link
              className="focus-ring text-sm text-ink hover:text-accent"
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
