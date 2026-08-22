import type { APIRoute } from 'astro';
import { docCategories } from '../data/docs';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://spotmetal.qbytesoft.com';

  let content = `# SpotMetal: Complete Technical Knowledge Base & Guide Repository
Official documentation and technical guides for SpotMetal — Automated Precious Metals Pricing & Buyback Engine on Shopify.
Website: ${siteUrl}

================================================================================
`;

  for (const cat of docCategories) {
    content += `\n# CATEGORY: ${cat.title.toUpperCase()}\n`;
    content += `================================================================================\n\n`;

    for (const article of cat.articles) {
      content += `## ${article.title}\n`;
      content += `URL: ${siteUrl}/docs/${article.slug}\n`;
      content += `Summary: ${article.description}\n\n`;
      content += `${article.content}\n\n`;
      content += `--------------------------------------------------------------------------------\n\n`;
    }
  }

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
