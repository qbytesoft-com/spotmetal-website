import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://spotmetal.qbytesoft.com';

  const oidcConfig = {
    issuer: siteUrl,
    authorization_endpoint: `${siteUrl}/oauth/authorize`,
    token_endpoint: `${siteUrl}/oauth/token`,
    userinfo_endpoint: `${siteUrl}/oauth/userinfo`,
    jwks_uri: `${siteUrl}/.well-known/jwks.json`,
    registration_endpoint: `${siteUrl}/oauth/register`,
    scopes_supported: [
      "openid",
      "profile",
      "email",
      "spotmetal:rates.read",
      "spotmetal:pricing.calculate",
      "spotmetal:buyback.appraise",
      "spotmetal:catalog.sync"
    ],
    response_types_supported: ["code", "token", "id_token"],
    grant_types_supported: ["authorization_code", "client_credentials", "refresh_token"],
    subject_types_supported: ["public"],
    id_token_signing_alg_values_supported: ["RS256", "ES256"],
    token_endpoint_auth_methods_supported: ["client_secret_post", "client_secret_basic", "private_key_jwt"],
    claims_supported: ["sub", "iss", "aud", "exp", "iat", "email", "shop_domain"],
    service_documentation: `${siteUrl}/docs`
  };

  return new Response(JSON.stringify(oidcConfig, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
