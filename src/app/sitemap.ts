import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/kontak/', '/kebijakan-privasi/', '/syarat-ketentuan/'].map((path) => ({
    url: new URL(path, site.url).toString(),
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.5,
  }));
}
