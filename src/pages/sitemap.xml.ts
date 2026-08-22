import type { APIRoute } from 'astro';
import { docCategories } from '../data/docs';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://spotmetal.qbytesoft.com';
  const now = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/docs', priority: '0.9', changefreq: 'daily' },
    { url: '/privacy', priority: '0.5', changefreq: 'monthly' },
    { url: '/terms', priority: '0.5', changefreq: 'monthly' },
  ];

  const docRoutes = docCategories.flatMap(cat => 
    cat.articles.map(article => ({
      url: `/docs/${article.slug}`,
      priority: '0.8',
      changefreq: 'weekly',
    }))
  );

  const allRoutes = [...staticRoutes, ...docRoutes];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allRoutes
  .map(
    route => `  <url>
    <loc>${siteUrl}${route.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
