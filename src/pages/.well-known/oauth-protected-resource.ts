import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://spotmetal.qbytesoft.com';

  const protectedResourceConfig = {
    resource: `${siteUrl}/api`,
    authorization_servers: [
      siteUrl
    ],
    scopes_supported: [
      "spotmetal:rates.read",
      "spotmetal:pricing.calculate",
      "spotmetal:buyback.appraise",
      "spotmetal:catalog.sync"
    ],
    bearer_methods_supported: [
      "header"
    ],
    resource_documentation: `${siteUrl}/docs`
  };

  return new Response(JSON.stringify(protectedResourceConfig, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
