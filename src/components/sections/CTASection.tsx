import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { site } from '@/config/site';

export function CTASection() {
  return (
    <section className="border-y border-line py-16">
      <Container>
        <h2 className="text-2xl font-semibold">{site.labels.sectionTitle}</h2>
        <Button className="mt-6" href="/kontak/">
          {site.labels.sectionAction}
        </Button>
      </Container>
    </section>
  );
}
