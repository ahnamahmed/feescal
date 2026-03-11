import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://feescal.com/';

  // Static Routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
  ];

  // Other pages (Dynamic Logic as requested)
  const otherPages = [
    '/calculator',
    '/blog',
    '/blog/ebay-seller-fees-2026',
    '/blog/poshmark-seller-fees-2026',
  ];

  const dynamicRoutes = otherPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
