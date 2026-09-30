import type { Metadata } from 'next';
import { site } from '@/config/site';

export function createMetadata({
  title,
  description,
  path = '/',
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonical = new URL(normalizedPath, site.url).toString();
  return {
    title,
    description: description ?? site.description,
    alternates: { canonical },
    openGraph: {
      title,
      description: description ?? site.description,
      url: canonical,
      type: 'website',
    },
  };
}
