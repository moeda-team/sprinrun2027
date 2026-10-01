import { Container } from '@/components/ui/Container';

const hosts = [
  { src: '/images/hosts/host-1.svg', name: 'Host 1' },
  { src: '/images/hosts/host-2.svg', name: 'Host 2' },
  { src: '/images/hosts/host-3.svg', name: 'Host 3' },
];

export function HostsSection() {
  return (
    <section aria-labelledby="hosts-title" className="bg-paper py-12 sm:py-16">
      <Container>
        <h2 id="hosts-title" className="text-center text-xs font-extrabold uppercase tracking-[.3em] text-deep-green/65">
          Hosted by
        </h2>
        <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 items-center justify-items-center gap-8 sm:grid-cols-3 sm:gap-10">
          {hosts.map((host) => (
            <li key={host.src} className="flex h-28 w-full max-w-[220px] items-center justify-center sm:h-32">
              <img src={host.src} alt={host.name} className="max-h-full max-w-full object-contain" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
