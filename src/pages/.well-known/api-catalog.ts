import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://spotmetal.qbytesoft.com';

  const linksetCatalog = {
    linkset: [
      {
        anchor: `${siteUrl}/api`,
        "service-desc": [
          {
            href: `${siteUrl}/.well-known/openapi.yaml`,
            type: "application/yaml",
            title: "SpotMetal OpenAPI 3.1 Specification"
          }
        ],
        "service-doc": [
          {
            href: `${siteUrl}/docs`,
            type: "text/html",
            title: "SpotMetal Technical Documentation Wiki"
          },
          {
            href: `${siteUrl}/llms.txt`,
            type: "text/plain",
            title: "LLMs Agent Documentation Index"
          }
        ],
        status: [
          {
            href: `${siteUrl}/api/health`,
            type: "application/json",
            title: "SpotMetal Service Health & Uptime Status"
          }
        ],
        "oauth-protected-resource": [
          {
            href: `${siteUrl}/.well-known/oauth-protected-resource`,
            type: "application/json"
          }
        ]
      }
    ]
  };

  return new Response(JSON.stringify(linksetCatalog, null, 2), {
    headers: {
      'Content-Type': 'application/linkset+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
