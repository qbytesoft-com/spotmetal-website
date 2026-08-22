import type { APIRoute } from 'astro';
import { docCategories } from '../data/docs';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://spotmetal.qbytesoft.com';

  let content = `# SpotMetal: Automated Precious Metals Pricing & Buyback Engine for Shopify
> The complete software platform for fine jewelers, bullion dealers, and scrap recyclers on Shopify.

SpotMetal connects Shopify stores to live global commodity feeds (Gold XAU, Silver XAG, Platinum XPT, Palladium XPD) and automatically recalculates catalog prices, safeguards wholesale margins with hard price floors, and powers turnkey storefront customer scrap buybacks with 1-click Draft Order payouts.

## Core Capabilities & Architecture

- **Live Commodities Sync:** Sub-minute automated spot price ingestion via LBMA and ECB feeds.
- **Dynamic Karat Formula Engine:** Multi-karat purity multipliers (8K to 24K, 925 Sterling Silver), gram weight normalization, tiered fabrication brackets, and craftsmanship making charges.
- **Margin Floor Safeguards:** Hard \`minimumPrice\` bounds preventing below-cost catalog selling during market flash crashes.
- **Circular Buyback System:** Turnkey customer scrap trade-in appraisal calculators, \`BB-*\` shadow inventory, and 1-click Shopify Draft Order generation.
- **Omnichannel Retail Branch Stocks:** Multi-location physical inventory allocation and storefront store availability badges.
- **Tax & Audit Compliance:** EU §25a UStG differential margin taxation and immutable audit logging.

## API & Tool Discovery

- **MCP Server Card:** [${siteUrl}/.well-known/mcp.json](${siteUrl}/.well-known/mcp.json)
- **AI Plugin Manifest:** [${siteUrl}/.well-known/ai-plugin.json](${siteUrl}/.well-known/ai-plugin.json)
- **OpenAgent Manifest:** [${siteUrl}/.well-known/agent.json](${siteUrl}/.well-known/agent.json)
- **Full Knowledge Repository:** [${siteUrl}/llms-full.txt](${siteUrl}/llms-full.txt)

## Documentation Wiki Guides

`;

  for (const cat of docCategories) {
    content += `### ${cat.title}\n`;
    for (const article of cat.articles) {
      content += `- [${article.title}](${siteUrl}/docs/${article.slug}): ${article.description}\n`;
    }
    content += '\n';
  }

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
