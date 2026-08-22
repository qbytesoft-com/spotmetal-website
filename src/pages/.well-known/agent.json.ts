import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://spotmetal.qbytesoft.com';

  const agentConfig = {
    agent_id: "spotmetal-agent-commerce",
    name: "SpotMetal Autonomous Commerce Agent",
    protocol_version: "1.0.0",
    description: "Autonomous agent interface for real-time precious metals catalog calculation, trade-in buyback appraisals, and inventory queries.",
    endpoints: {
      discovery: `${siteUrl}/.well-known/mcp.json`,
      documentation: `${siteUrl}/llms.txt`,
      full_knowledge: `${siteUrl}/llms-full.txt`,
      sitemap: `${siteUrl}/sitemap.xml`
    },
    commerce_capabilities: {
      live_pricing: true,
      dynamic_currency: true,
      circular_buyback: true,
      margin_floor_protection: true,
      platforms: ["shopify", "shopify_plus"]
    },
    maintainer: {
      name: "SpotMetal Technologies",
      contact: "support@qbytesoft.com",
      url: siteUrl
    }
  };

  return new Response(JSON.stringify(agentConfig, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
