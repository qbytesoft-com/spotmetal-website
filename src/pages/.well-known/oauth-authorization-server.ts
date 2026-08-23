import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://spotmetal.qbytesoft.com';

  const oauthServerConfig = {
    issuer: siteUrl,
    authorization_endpoint: `${siteUrl}/oauth/authorize`,
    token_endpoint: `${siteUrl}/oauth/token`,
    jwks_uri: `${siteUrl}/.well-known/jwks.json`,
    scopes_supported: [
      "spotmetal:rates.read",
      "spotmetal:pricing.calculate",
      "spotmetal:buyback.appraise",
      "spotmetal:catalog.sync"
    ],
    response_types_supported: ["code", "token"],
    grant_types_supported: ["authorization_code", "client_credentials", "refresh_token"],
    token_endpoint_auth_methods_supported: ["client_secret_post", "client_secret_basic"],
    service_documentation: `${siteUrl}/docs`
  };

  return new Response(JSON.stringify(oauthServerConfig, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
