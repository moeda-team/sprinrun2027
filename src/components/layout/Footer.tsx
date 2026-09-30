import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <p className="text-sm text-ink/70">{site.name}</p>
      </Container>
    </footer>
  );
}
