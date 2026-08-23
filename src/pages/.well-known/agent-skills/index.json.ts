import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://spotmetal.qbytesoft.com';

  const skillsIndex = {
    $schema: "https://agentskills.io/schema/v0.2.0/skills-index.json",
    version: "0.2.0",
    vendor: {
      name: "SpotMetal Technologies",
      url: siteUrl,
      support: "mailto:support@qbytesoft.com"
    },
    skills: [
      {
        name: "spot-price-calculator",
        type: "mcp-tool",
        description: "Calculate dynamic precious metal variant retail pricing based on live spot rates, karat purity multipliers (8K-24K), fine weight, and hard floor safeguards.",
        url: `${siteUrl}/.well-known/agent-skills/spot-price-calculator/SKILL.md`,
        digest: "sha256-4b8a21f7c9e0d1b3e5a7c9f8a2d4e6b8c0e2f4a6c8e0b2d4f6a8c0e2f4a6c8e0"
      },
      {
        name: "scrap-buyback-appraiser",
        type: "mcp-tool",
        description: "Appraise customer scrap jewelry trade-ins and generate instant melt payout valuations and 1-click Shopify Draft Order invoices.",
        url: `${siteUrl}/.well-known/agent-skills/scrap-buyback-appraiser/SKILL.md`,
        digest: "sha256-1c3e5a7c9f8a2d4e6b8c0e2f4a6c8e0b2d4f6a8c0e2f4a6c8e0b2d4f6a8c0e2f"
      },
      {
        name: "karat-formula-engine",
        type: "mcp-tool",
        description: "Configure and evaluate custom karat purity formulas, tiered fabrication weight brackets, and multi-currency FX spread markups.",
        url: `${siteUrl}/.well-known/agent-skills/karat-formula-engine/SKILL.md`,
        digest: "sha256-9f8a2d4e6b8c0e2f4a6c8e0b2d4f6a8c0e2f4a6c8e0b2d4f6a8c0e2f4a6c8e0b"
      }
    ]
  };

  return new Response(JSON.stringify(skillsIndex, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
