import { createMetadata } from '@/lib/seo';
import { site } from '@/config/site';
export const metadata = createMetadata({ title: site.navigation[3].label, path: '/kontak/' });
export default function KontakPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h1 className="text-4xl font-semibold">{site.labels.heroTitle}</h1>
      </div>
    </section>
  );
}
