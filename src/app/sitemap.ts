import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return site.navigation.map(({ href }) => ({
    url: new URL(href, site.url).toString(),
    changeFrequency: 'monthly',
    priority: href === '/' ? 1 : 0.8,
  }));
}
