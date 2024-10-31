import { BASE_URL } from '@/site.config.mjs';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
