import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://spotmetal.qbytesoft.com';

  const manifest = {
    schema_version: "v1",
    name_for_human: "SpotMetal Precious Metals Engine",
    name_for_model: "spotmetal_pricing_buyback",
    description_for_human: "Real-time spot precious metal pricing, dynamic karat purity calculation, and scrap jewelry buyback appraisals for Shopify stores.",
    description_for_model: "Plugin and API for querying live spot metal rates (Gold, Silver, Platinum, Palladium), calculating karat jewelry retail prices based on formulas and purity multipliers, enforcing wholesale floor safeguards, and appraising scrap jewelry buybacks with Shopify Draft Order payouts.",
    auth: {
      type: "none"
    },
    api: {
      type: "openapi",
      url: `${siteUrl}/.well-known/openapi.yaml`,
      is_user_authenticated: false
    },
    logo_url: `${siteUrl}/spotmetal-3d-icon.jpg`,
    contact_email: "support@qbytesoft.com",
    legal_info_url: `${siteUrl}/terms`
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
