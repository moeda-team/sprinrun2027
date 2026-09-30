import Link from 'next/link';
import { site } from '@/config/site';
export default function NotFound() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">{site.labels.notFoundTitle}</h1>
        <Link className="focus-ring mt-6 inline-block text-accent" href="/">
          {site.labels.notFoundAction}
        </Link>
      </div>
    </section>
  );
}
