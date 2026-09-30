import { site } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <p className="mb-4 text-sm text-accent">{site.name}</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          {site.labels.heroTitle}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink/70">{site.description}</p>
        <Button className="mt-8" href="/kontak/">
          {site.labels.heroAction}
        </Button>
      </Container>
    </section>
  );
}
