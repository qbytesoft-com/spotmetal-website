import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://spotmetal.qbytesoft.com';

  const mcpServerCard = {
    $schema: "https://modelcontextprotocol.io/schema/server-card.json",
    name: "spotmetal-mcp-server",
    version: "1.0.0",
    description: "Model Context Protocol server for SpotMetal Shopify precious metals calculation, live rates sync, and scrap buyback appraisals.",
    homepage: siteUrl,
    repository: "https://github.com/qbytesoft-com/spotmetal-website",
    vendor: {
      name: "SpotMetal Technologies / QByteSoft",
      url: "https://qbytesoft.com",
      support: "mailto:support@qbytesoft.com"
    },
    capabilities: {
      tools: true,
      resources: true,
      prompts: false
    },
    tools: [
      {
        name: "calculate_spot_price",
        description: "Calculate dynamic retail or wholesale jewelry price given spot metal rate, karat purity, weight, and formula parameters.",
        parameters: {
          type: "object",
          properties: {
            metal: {
              type: "string",
              enum: ["gold", "silver", "platinum", "palladium"],
              description: "Precious metal type"
            },
            karat: {
              type: "string",
              description: "Karat purity (e.g. 24K, 22K, 18K, 14K, 10K, 925, 999)"
            },
            weightGrams: {
              type: "number",
              description: "Fine weight in grams"
            },
            makingCharges: {
              type: "number",
              description: "Fixed or per-gram craftsmanship charge"
            },
            minimumPrice: {
              type: "number",
              description: "Hard price floor boundary"
            }
          },
          required: ["metal", "karat", "weightGrams"]
        }
      },
      {
        name: "get_live_rates",
        description: "Retrieve real-time commodities spot price for Gold (XAU), Silver (XAG), Platinum (XPT), and Palladium (XPD) in specified currency.",
        parameters: {
          type: "object",
          properties: {
            currency: {
              type: "string",
              default: "USD",
              description: "ISO currency code (USD, EUR, GBP, AED, CAD, AUD, CHF)"
            }
          }
        }
      },
      {
        name: "appraise_scrap_buyback",
        description: "Compute instant customer trade-in scrap gold valuation based on current live melt rates, merchant discount margin, and gram mass.",
        parameters: {
          type: "object",
          properties: {
            metal: { type: "string", enum: ["gold", "silver", "platinum"] },
            karat: { type: "string" },
            weightGrams: { type: "number" },
            payoutMethod: { type: "string", enum: ["cash", "store_credit"] }
          },
          required: ["metal", "karat", "weightGrams"]
        }
      }
    ]
  };

  return new Response(JSON.stringify(mcpServerCard, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
