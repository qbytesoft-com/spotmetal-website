export interface DocArticle {
  slug: string;
  categorySlug: string;
  categoryTitle: string;
  title: string;
  description: string;
  readingTime: string;
  lastUpdated: string;
  content: string;
  headings: { id: string; text: string; level: number }[];
}

export interface DocCategory {
  slug: string;
  title: string;
  icon: string;
  description: string;
  articles: {
    slug: string;
    title: string;
    description: string;
  }[];
}

export const docCategories: DocCategory[] = [
  {
    slug: "getting-started",
    title: "1. Getting Started",
    icon: "🚀",
    description: "Learn how to install SpotMetal, authenticate OAuth, and launch your first live-priced item.",
    articles: [
      {
        slug: "installation-and-onboarding",
        title: "Installation & Shopify OAuth Setup",
        description: "Step-by-step guide to installing SpotMetal from the Shopify App Store."
      },
      {
        slug: "understanding-spotmetal",
        title: "Understanding Core Concepts",
        description: "Spot feeds, Karat purities, Margin floors, and the Circular Buyback Loop."
      },
      {
        slug: "quick-start-checklist",
        title: "5-Step Quick Start Checklist",
        description: "Go from installation to a fully live-priced product catalog in 10 minutes."
      }
    ]
  },
  {
    slug: "rate-feeds",
    title: "2. Rate Feeds & Currency",
    icon: "⚙️",
    description: "Configure system feeds, custom API keys, and European Central Bank FX conversion.",
    articles: [
      {
        slug: "default-vs-custom-api",
        title: "System Default vs Custom API Keys",
        description: "Choose between pre-integrated Edelmetalle.de feeds and private API subscriptions."
      },
      {
        slug: "encrypted-api-credentials",
        title: "AES-256 Encrypted Credential Vault",
        description: "How your private market data provider API keys are securely protected."
      },
      {
        slug: "currency-fx-and-overrides",
        title: "Multi-Currency FX & Manual Locks",
        description: "Lock exchange rates to hedge against currency fluctuations across 15+ markets."
      }
    ]
  },
  {
    slug: "formula-engine",
    title: "3. Pricing Formula Engine",
    icon: "🧮",
    description: "Master mathematical modeling, karat multipliers, weight tiers, and floor boundaries.",
    articles: [
      {
        slug: "formula-basics-and-math",
        title: "Formula Mathematical Model",
        description: "The core formula: Material Value + Premium + Fixed Fabrication & Labor."
      },
      {
        slug: "karat-purity-multipliers",
        title: "Karat Multipliers (8K–24K)",
        description: "Exact purity factors from 0.333 to 0.999 fine gold and silver conversion."
      },
      {
        slug: "tiered-weight-brackets",
        title: "Tiered Weight Brackets",
        description: "Scale percentage margins dynamically based on gram mass brackets."
      },
      {
        slug: "price-floors-and-skipping",
        title: "Minimum Price Floor Safeguards",
        description: "Prevent accidental below-cost selling during sudden market flash crashes."
      },
      {
        slug: "collector-coin-exemptions",
        title: "Collector & Numismatic Exemptions",
        description: "Bypass spot rate updates for rare collector coins and fixed antique jewelry."
      }
    ]
  },
  {
    slug: "theme-extensions",
    title: "4. Storefront Theme Extensions",
    icon: "🎨",
    description: "Embed live ticker marquees, trade-in appraisal calculators, and stock badges in your theme.",
    articles: [
      {
        slug: "live-ticker-marquee",
        title: "Embedding Live Spot Ticker Marquee",
        description: "Add a 60fps auto-scrolling ticker bar into your Shopify theme header or footer."
      },
      {
        slug: "buyback-calculator-widget",
        title: "Storefront Buyback Calculator Widget",
        description: "Embed customer appraisal modals on your product or dedicated trade-in pages."
      },
      {
        slug: "product-buyback-popup",
        title: "PDP Trade-In Quick Submission Form",
        description: "Turn product pages into double-sided selling and acquisition hubs."
      },
      {
        slug: "physical-location-availability",
        title: "Retail Location & Trade-In Availability",
        description: "Display in-store bullion availability and local trade-in appraisal desks."
      }
    ]
  },
  {
    slug: "circular-buyback",
    title: "5. Circular Buyback System",
    icon: "🔄",
    description: "Automate scrap jewelry acquisition, customer appraisals, and 1-click Draft Orders.",
    articles: [
      {
        slug: "shadow-products-architecture",
        title: "Shadow Products & SKU Architecture",
        description: "How SpotMetal creates shadow appraisal items with BB-* SKU codes at $0.00."
      },
      {
        slug: "customer-inquiry-workflow",
        title: "Customer Submission & App Proxy Flow",
        description: "From storefront form submission to the admin review queue via App Proxy."
      },
      {
        slug: "draft-order-creation",
        title: "1-Click Shopify Draft Order Payouts",
        description: "Issue official customer payout invoices and credit receipts in seconds."
      }
    ]
  },
  {
    slug: "compliance-taxes",
    title: "6. Compliance & Differential Tax",
    icon: "⚖️",
    description: "Comply with German and EU §25a UStG margin taxation and immutable audit logging.",
    articles: [
      {
        slug: "differential-taxation-25a",
        title: "Differential Taxation (§25a UStG)",
        description: "Configure European margin-scheme VAT rules for vintage jewelry and bullion."
      },
      {
        slug: "audit-trail-and-security",
        title: "Immutable Audit Trails & GDPR",
        description: "Full audit logs of every spot rate sync, formula edit, and buyback payout."
      }
    ]
  },
  {
    slug: "troubleshooting",
    title: "7. Troubleshooting & FAQs",
    icon: "🛠️",
    description: "Diagnose GraphQL rate limits, webhook delays, and standard error codes.",
    articles: [
      {
        slug: "sync-lag-and-api-limits",
        title: "GraphQL Rate Limits & Sync Lag",
        description: "How SpotMetal batches mutations to stay within Shopify API leaky bucket limits."
      },
      {
        slug: "common-error-codes",
        title: "Error Codes Reference & Solutions",
        description: "PRICE_FLOOR_BOUND, API_AUTH_FAILED, and METAFIELD_SYNC_LAG explanations."
      }
    ]
  }
];

export const docArticles: Record<string, DocArticle> = {
  "installation-and-onboarding": {
    slug: "installation-and-onboarding",
    categorySlug: "getting-started",
    categoryTitle: "1. Getting Started",
    title: "Installation & Shopify OAuth Setup",
    description: "Step-by-step guide to installing SpotMetal from the Shopify App Store.",
    readingTime: "4 min read",
    lastUpdated: "Updated 2 days ago",
    headings: [
      { id: "prerequisites", text: "Prerequisites", level: 2 },
      { id: "installing-from-app-store", text: "Installing from the Shopify App Store", level: 2 },
      { id: "required-oauth-scopes", text: "Required OAuth Scopes Explained", level: 2 },
      { id: "initial-onboarding-wizard", text: "Initial Onboarding Wizard", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Installing SpotMetal into your Shopify store takes less than 2 minutes and requires zero code modifications to your backend database.</p>

      <h2 id="prerequisites">Prerequisites</h2>
      <p>Before installing, ensure your store meets the following basic requirements:</p>
      <ul>
        <li>A live or development Shopify store running any plan (Basic, Shopify, Advanced, or Plus).</li>
        <li>Store Owner or Staff permissions with access to <strong>Apps</strong> and <strong>Products</strong>.</li>
        <li>At least one product with defined metal attributes (e.g. Gold 14K, 18K, Silver 999).</li>
      </ul>

      <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 my-6">
        <strong>✦ Free 7-Day Trial:</strong> Every paid plan comes with an unrestricted 7-day trial. You can test live formula updates and buyback workflows with zero risk.
      </div>

      <h2 id="installing-from-app-store">Installing from the Shopify App Store</h2>
      <ol>
        <li>Navigate to the official <a href="https://apps.shopify.com/spotmetal-pricing-buyback" target="_blank" rel="noopener noreferrer" class="text-amber-400 font-bold underline">SpotMetal Shopify App Store Listing</a>.</li>
        <li>Click <strong>Install</strong>. You will be redirected to your Shopify Admin authentication page.</li>
        <li>Review the requested permissions and click <strong>Install App</strong> to finalize the OAuth handshake.</li>
      </ol>

      <h2 id="required-oauth-scopes">Required OAuth Scopes Explained</h2>
      <p>SpotMetal operates strictly on the principle of least privilege. The following scopes are requested:</p>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left text-sm font-sans border-collapse">
          <thead>
            <tr class="border-b border-white/10 text-slate-400 font-mono text-xs">
              <th class="py-3 px-4">OAuth Scope</th>
              <th class="py-3 px-4">Permission Type</th>
              <th class="py-3 px-4">Why SpotMetal Needs It</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-slate-200">
            <tr>
              <td class="py-3 px-4 font-mono text-amber-400">write_products</td>
              <td class="py-3 px-4">Read & Write</td>
              <td class="py-3 px-4">Updates variant price fields dynamically when spot market rates shift.</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-mono text-amber-400">write_draft_orders</td>
              <td class="py-3 px-4">Read & Write</td>
              <td class="py-3 px-4">Generates official payout draft invoices for accepted customer scrap buybacks.</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-mono text-amber-400">read_locations</td>
              <td class="py-3 px-4">Read Only</td>
              <td class="py-3 px-4">Determines local store branch availability for in-person bullion trade-ins.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="initial-onboarding-wizard">Initial Onboarding Wizard</h2>
      <p>Upon initial launch, SpotMetal greets you with a 3-step setup wizard:</p>
      <ol>
        <li><strong>Select Base Currency:</strong> Choose USD ($), EUR (€), GBP (£), CAD, AUD, or 15+ global currencies.</li>
        <li><strong>Choose Market Data Feed:</strong> Activate the built-in system feed (Edelmetalle.de) or connect your private API key.</li>
        <li><strong>Create Default Formula:</strong> Set your initial manufacturing markup and weight multiplier.</li>
      </ol>
    `
  },
  "understanding-spotmetal": {
    slug: "understanding-spotmetal",
    categorySlug: "getting-started",
    categoryTitle: "1. Getting Started",
    title: "Understanding Core Concepts",
    description: "Master the 4 core pillars of SpotMetal: Spot rates, Formulas, Karats, and Circular Buybacks.",
    readingTime: "5 min read",
    lastUpdated: "Updated 2 days ago",
    headings: [
      { id: "the-4-pillars", text: "The 4 Core Architectural Pillars", level: 2 },
      { id: "spot-rates", text: "1. Real-Time Spot Rates", level: 2 },
      { id: "formula-engine", text: "2. The Dynamic Formula Engine", level: 2 },
      { id: "margin-floors", text: "3. Minimum Price Floor Bounds", level: 2 },
      { id: "circular-buyback", text: "4. The Circular Buyback Trade-In Loop", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">SpotMetal treats inventory valuation as dynamic mathematical functions tied to global commodities markets.</p>

      <h2 id="the-4-pillars">The 4 Core Architectural Pillars</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div class="p-5 rounded-2xl bg-[#1A1B20] border border-white/10">
          <div class="text-2xl mb-2">⚡</div>
          <h3 class="text-lg font-bold text-white font-title">1. Real-Time Spot Sync</h3>
          <p class="text-xs text-slate-300 mt-1">Continuous sub-minute price feeds from London Bullion Market Association (LBMA) and NY spot exchanges.</p>
        </div>
        <div class="p-5 rounded-2xl bg-[#1A1B20] border border-white/10">
          <div class="text-2xl mb-2">🧮</div>
          <h3 class="text-lg font-bold text-white font-title">2. Dynamic Karat Math</h3>
          <p class="text-xs text-slate-300 mt-1">Multi-karat purity conversion (8K to 24K) with tiered weight brackets and craftsmanship labor add-ons.</p>
        </div>
        <div class="p-5 rounded-2xl bg-[#1A1B20] border border-white/10">
          <div class="text-2xl mb-2">🛡️</div>
          <h3 class="text-lg font-bold text-white font-title">3. Margin Floor Bounds</h3>
          <p class="text-xs text-slate-300 mt-1">Hard boundaries that prevent catalog prices from ever dropping below wholesale replacement costs.</p>
        </div>
        <div class="p-5 rounded-2xl bg-[#1A1B20] border border-white/10">
          <div class="text-2xl mb-2">🔄</div>
          <h3 class="text-lg font-bold text-white font-title">4. Circular Buybacks</h3>
          <p class="text-xs text-slate-300 mt-1">Interactive storefront appraisal calculators converting customer scrap metal into 1-click Draft Orders.</p>
        </div>
      </div>

      <h2 id="spot-rates">1. Real-Time Spot Rates</h2>
      <p>SpotMetal tracks Gold (XAU), Silver (XAG), Platinum (XPT), and Palladium (XPD) with sub-minute granularity.</p>

      <h2 id="formula-engine">2. The Dynamic Formula Engine</h2>
      <p>Formulas compute exact variant values automatically based on fine mass and karat fineness multipliers.</p>

      <h2 id="margin-floors">3. Minimum Price Floor Bounds</h2>
      <p>Hard floor bounds prevent selling below wholesale acquisition cost during sudden market dips.</p>

      <h2 id="circular-buyback">4. The Circular Buyback Trade-In Loop</h2>
      <p>Capture customer scrap trade-ins and generate instant Shopify Draft Orders for payouts.</p>
    `
  },
  "quick-start-checklist": {
    slug: "quick-start-checklist",
    categorySlug: "getting-started",
    categoryTitle: "1. Getting Started",
    title: "5-Step Quick Start Checklist",
    description: "Launch your first live-priced item in 5 quick steps.",
    readingTime: "3 min read",
    lastUpdated: "Updated 1 day ago",
    headings: [
      { id: "step-1", text: "Step 1: Verify Spot Feed Connection", level: 2 },
      { id: "step-2", text: "Step 2: Create Your First Pricing Formula", level: 2 },
      { id: "step-3", text: "Step 3: Assign Metal & Purity to a Product", level: 2 },
      { id: "step-4", text: "Step 4: Enable Storefront Ticker Marquee", level: 2 },
      { id: "step-5", text: "Step 5: Test a Live Sync Update", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Follow this 5-step checklist to launch your first live-priced catalog item on Shopify.</p>
      <h2 id="step-1">Step 1: Verify Spot Feed Connection</h2>
      <p>Ensure the status indicator in <strong>Settings > Rate Feeds</strong> shows <span class="text-emerald-400 font-mono font-bold">● Active</span>.</p>
      <h2 id="step-2">Step 2: Create Your First Pricing Formula</h2>
      <p>Go to <strong>Pricing > New Formula</strong> and configure your retail markup and fabrication fees.</p>
      <h2 id="step-3">Step 3: Assign Metal & Purity to a Product</h2>
      <p>Open any product in Shopify Admin. In the <strong>SpotMetal Product Admin Block</strong>, assign metal type, karat, and gram weight.</p>
      <h2 id="step-4">Step 4: Enable Storefront Ticker Marquee</h2>
      <p>In <strong>Theme Customize</strong>, add the <strong>SpotMetal Ticker Marquee</strong> block.</p>
      <h2 id="step-5">Step 5: Test a Live Sync Update</h2>
      <p>Verify live prices update accurately on your storefront.</p>
    `
  },
  "default-vs-custom-api": {
    slug: "default-vs-custom-api",
    categorySlug: "rate-feeds",
    categoryTitle: "2. Rate Feeds & Currency",
    title: "System Default vs Custom API Keys",
    description: "Choose between pre-integrated Edelmetalle.de feeds and private API subscriptions.",
    readingTime: "4 min read",
    lastUpdated: "Updated 3 days ago",
    headings: [
      { id: "overview", text: "Rate Feed Architecture", level: 2 },
      { id: "system-default", text: "Option A: System Default Feed (Edelmetalle.de)", level: 2 },
      { id: "custom-api", text: "Option B: Custom Market Data Provider Keys", level: 2 },
      { id: "supported-providers", text: "Supported Market Data Providers", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">SpotMetal provides flexible rate feed ingestion, supporting both turnkey out-of-the-box feeds and enterprise private API keys.</p>

      <h2 id="overview">Rate Feed Architecture</h2>
      <p>SpotMetal queries live spot pricing for Gold, Silver, Platinum, and Palladium every 60 seconds. You can choose between two feed ingestion models in <strong>Settings > Rate Feeds</strong>:</p>

      <h2 id="system-default">Option A: System Default Feed (Edelmetalle.de)</h2>
      <p>Pre-configured with zero setup required. Provides high-accuracy European Central Bank and London Bullion spot rates. Recommended for 90% of stores.</p>

      <h2 id="custom-api">Option B: Custom Market Data Provider Keys</h2>
      <p>Connect your own API key for dedicated quota and private endpoints. Ideal for high-frequency trading and refinery operations.</p>

      <h2 id="supported-providers">Supported Market Data Providers</h2>
      <ul>
        <li><strong>GoldAPI.io:</strong> LBMA spot rates with millisecond latency.</li>
        <li><strong>Metals-API:</strong> Global spot data across 170+ currency pairs.</li>
        <li><strong>MetalPriceAPI:</strong> Real-time and historical bullion benchmarks.</li>
        <li><strong>Custom Private Refinery JSON:</strong> Connect private refinery rate feeds via webhook or REST endpoint.</li>
      </ul>
    `
  },
  "encrypted-api-credentials": {
    slug: "encrypted-api-credentials",
    categorySlug: "rate-feeds",
    categoryTitle: "2. Rate Feeds & Currency",
    title: "AES-256 Encrypted Credential Vault",
    description: "How your private market data provider API keys are securely protected.",
    readingTime: "3 min read",
    lastUpdated: "Updated 5 days ago",
    headings: [
      { id: "security-model", text: "Security Architecture", level: 2 },
      { id: "encryption-at-rest", text: "AES-256 GCM Encryption at Rest", level: 2 },
      { id: "key-isolation", text: "Initialization Vector & Key Isolation", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Your proprietary API credentials and private refinery feeds are protected by enterprise-grade cryptographic standards.</p>

      <h2 id="security-model">Security Architecture</h2>
      <p>SpotMetal never stores plaintext API keys in the database. All sensitive tokens undergo authenticated encryption before database persistence.</p>

      <h2 id="encryption-at-rest">AES-256 GCM Encryption at Rest</h2>
      <p>We utilize the Advanced Encryption Standard in Galois/Counter Mode (AES-256-GCM), providing both confidentiality and cryptographic integrity verification.</p>

      <h2 id="key-isolation">Initialization Vector & Key Isolation</h2>
      <p>Every stored credential generates a unique 96-bit Initialization Vector (IV), ensuring identical keys produce distinct ciphertexts.</p>
    `
  },
  "currency-fx-and-overrides": {
    slug: "currency-fx-and-overrides",
    categorySlug: "rate-feeds",
    categoryTitle: "2. Rate Feeds & Currency",
    title: "Multi-Currency FX & Manual Locks",
    description: "Lock exchange rates to hedge against currency fluctuations across 15+ markets.",
    readingTime: "4 min read",
    lastUpdated: "Updated 4 days ago",
    headings: [
      { id: "ecb-sync", text: "European Central Bank (ECB) Live FX Ingestion", level: 2 },
      { id: "manual-lock", text: "Manual Exchange Rate Override & Hedging", level: 2 },
      { id: "buffer-safety", text: "FX Buffer Margin Multiplier", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Manage multi-currency precious metal pricing seamlessly across USD, EUR, GBP, CAD, AUD, JPY, and 15+ global currencies.</p>

      <h2 id="ecb-sync">European Central Bank (ECB) Live FX Ingestion</h2>
      <p>SpotMetal synchronizes daily exchange rate tables directly with official ECB reference rates to ensure accurate multi-market price conversions.</p>

      <h2 id="manual-lock">Manual Exchange Rate Override & Hedging</h2>
      <p>During periods of currency volatility, you can toggle <strong>Manual FX Lock</strong> in <strong>Settings > Currency</strong>. This fixes the conversion rate (e.g. 1 EUR = 1.0850 USD) to protect international sales margins.</p>

      <h2 id="buffer-safety">FX Buffer Margin Multiplier</h2>
      <p>Add a configurable 0.5% - 2.0% currency buffer to absorb intra-day forex spreads automatically.</p>
    `
  },
  "formula-basics-and-math": {
    slug: "formula-basics-and-math",
    categorySlug: "formula-engine",
    categoryTitle: "3. Pricing Formula Engine",
    title: "Formula Mathematical Model",
    description: "Deep dive into the mathematical algorithms powering SpotMetal's pricing calculations.",
    readingTime: "6 min read",
    lastUpdated: "Updated 3 days ago",
    headings: [
      { id: "core-equation", text: "The Master Pricing Equation", level: 2 },
      { id: "effective-mass", text: "Effective Mass & Conversion", level: 2 },
      { id: "karat-purity-table", text: "Karat Fineness Multiplication", level: 2 },
      { id: "worked-example", text: "Full Worked Example: 18K Diamond Band", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">SpotMetal computes prices using a continuous mathematical pipeline that accounts for spot commodity valuation, fine karat purity, tiered markups, and fixed casting labor.</p>

      <h2 id="core-equation">The Master Pricing Equation</h2>
      <div class="p-5 rounded-2xl bg-slate-900 border border-white/10 my-4 text-slate-100 font-mono text-sm space-y-2">
        <div class="text-amber-400 font-bold">Final Price = Material Value + Premium + Fixed Fee</div>
        <div class="text-slate-400 text-xs">Where:</div>
        <div class="text-slate-300 pl-4">Material Value = (SpotPricePerTroyOz / 31.1034768) * KaratPurity * GramWeight</div>
        <div class="text-slate-300 pl-4">Premium = Material Value * (MarkupPercentage / 100)</div>
        <div class="text-slate-300 pl-4">Fixed Fee = SettingFee + CastingLabor + HallmarkingCost</div>
      </div>

      <h2 id="effective-mass">Effective Mass & Conversion</h2>
      <p>All internal calculations normalize to 1 Troy Ounce = <strong>31.1034768 grams</strong>.</p>

      <h2 id="karat-purity-table">Karat Fineness Multiplication</h2>
      <p>Gold alloys contain varying proportions of pure 24K gold:</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full text-left text-sm font-sans border-collapse">
          <thead>
            <tr class="border-b border-white/10 text-slate-400 font-mono text-xs">
              <th class="py-3 px-4">Karat Purity</th>
              <th class="py-3 px-4">Fineness Ratio</th>
              <th class="py-3 px-4">Gold Content %</th>
              <th class="py-3 px-4">Value @ $2,942.10/oz</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-slate-200 font-mono text-xs">
            <tr><td class="py-3 px-4 text-amber-400 font-bold">24K (999.9)</td><td class="py-3 px-4">0.9999</td><td class="py-3 px-4">99.99%</td><td class="py-3 px-4 text-emerald-400 font-bold">$94.59 / g</td></tr>
            <tr><td class="py-3 px-4 text-amber-400 font-bold">22K (916)</td><td class="py-3 px-4">0.9167</td><td class="py-3 px-4">91.67%</td><td class="py-3 px-4 text-emerald-400 font-bold">$86.72 / g</td></tr>
            <tr><td class="py-3 px-4 text-amber-300 font-bold">18K (750)</td><td class="py-3 px-4">0.7500</td><td class="py-3 px-4">75.00%</td><td class="py-3 px-4 text-emerald-400 font-bold">$70.94 / g</td></tr>
            <tr><td class="py-3 px-4 text-amber-300 font-bold">14K (585)</td><td class="py-3 px-4">0.5850</td><td class="py-3 px-4">58.50%</td><td class="py-3 px-4 text-emerald-400 font-bold">$55.34 / g</td></tr>
            <tr><td class="py-3 px-4 text-amber-200 font-bold">10K (417)</td><td class="py-3 px-4">0.4170</td><td class="py-3 px-4">41.70%</td><td class="py-3 px-4 text-emerald-400 font-bold">$39.44 / g</td></tr>
            <tr><td class="py-3 px-4 text-amber-200 font-bold">9K (375)</td><td class="py-3 px-4">0.3750</td><td class="py-3 px-4">37.50%</td><td class="py-3 px-4 text-emerald-400 font-bold">$35.47 / g</td></tr>
            <tr><td class="py-3 px-4 text-amber-200 font-bold">8K (333)</td><td class="py-3 px-4">0.3333</td><td class="py-3 px-4">33.33%</td><td class="py-3 px-4 text-emerald-400 font-bold">$31.50 / g</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="worked-example">Full Worked Example: 18K Diamond Band</h2>
      <p>Let’s calculate an 18K gold ring weighing <strong>8.50 grams</strong> with current spot gold at <strong>$2,942.10/oz</strong>, a <strong>25% markup</strong>, and <strong>$60 fixed diamond setting fee</strong>:</p>
      <ol class="space-y-2">
        <li><strong>Raw 24K Spot/g:</strong> $2,942.10 / 31.1035 = $94.5905/g</li>
        <li><strong>18K Pure Alloy/g:</strong> $94.5905 * 0.75 = $70.9429/g</li>
        <li><strong>Raw Metal Value:</strong> $70.9429 * 8.50g = <strong>$603.01</strong></li>
        <li><strong>25% Premium:</strong> $603.01 * 0.25 = <strong>$150.75</strong></li>
        <li><strong>Fixed Setting Fee:</strong> <strong>$60.00</strong></li>
        <li><strong>Total Calculated Price:</strong> $603.01 + $150.75 + $60.00 = <span class="text-emerald-400 font-bold font-mono">$813.76</span></li>
      </ol>
    `
  },
  "karat-purity-multipliers": {
    slug: "karat-purity-multipliers",
    categorySlug: "formula-engine",
    categoryTitle: "3. Pricing Formula Engine",
    title: "Karat Multipliers (8K–24K)",
    description: "Exact purity factors from 0.333 to 0.999 fine gold and silver conversion.",
    readingTime: "4 min read",
    lastUpdated: "Updated 4 days ago",
    headings: [
      { id: "gold-karats", text: "Gold Karat Standards", level: 2 },
      { id: "silver-purities", text: "Silver Purity Factors", level: 2 },
      { id: "platinum-palladium", text: "Platinum & Palladium Benchmarks", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">SpotMetal supports all international hallmarking standards across Gold, Silver, Platinum, and Palladium.</p>

      <h2 id="gold-karats">Gold Karat Standards</h2>
      <p>Select any standard karat in the formula configuration: 8K (333), 9K (375), 10K (417), 14K (585), 18K (750), 22K (916), and 24K (999.9).</p>

      <h2 id="silver-purities">Silver Purity Factors</h2>
      <p>Supports <strong>999 Fine Silver</strong> (0.999) and <strong>925 Sterling Silver</strong> (0.925) with automatic manufacturing scrap allowance multipliers.</p>

      <h2 id="platinum-palladium">Platinum & Palladium Benchmarks</h2>
      <p>Supports Platinum 950 (0.950), Platinum 900 (0.900), and Palladium 950 (0.950) benchmark valuations.</p>
    `
  },
  "tiered-weight-brackets": {
    slug: "tiered-weight-brackets",
    categorySlug: "formula-engine",
    categoryTitle: "3. Pricing Formula Engine",
    title: "Tiered Weight Brackets",
    description: "Scale percentage margins dynamically based on gram mass brackets.",
    readingTime: "5 min read",
    lastUpdated: "Updated 3 days ago",
    headings: [
      { id: "why-brackets", text: "Why Use Tiered Weight Brackets?", level: 2 },
      { id: "configuring-tiers", text: "Configuring Weight Brackets in SpotMetal", level: 2 },
      { id: "bracket-example", text: "Standard Industry Bracket Setup", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Lightweight items require higher percentage markups to cover fixed labor fees, whereas heavy bullion items require tighter spreads to remain competitive.</p>

      <h2 id="why-brackets">Why Use Tiered Weight Brackets?</h2>
      <p>Tiered brackets allow you to apply non-linear markups automatically based on the variant's gram weight:</p>
      <ul>
        <li><strong>Light Pieces (0–5g):</strong> Higher markup (+25%) covers casting losses and retail packaging.</li>
        <li><strong>Medium Pieces (5–20g):</strong> Standard retail markup (+18%).</li>
        <li><strong>Heavy Items (>20g):</strong> Tighter spread (+12%) keeps bullion and thick chains market-competitive.</li>
      </ul>

      <h2 id="configuring-tiers">Configuring Weight Brackets in SpotMetal</h2>
      <p>Inside <strong>Pricing > Formulas > Edit Formula</strong>, toggle <strong>Enable Weight Brackets</strong> and click <strong>Add Bracket</strong> to define min/max gram ranges and corresponding percentage markups.</p>
    `
  },
  "price-floors-and-skipping": {
    slug: "price-floors-and-skipping",
    categorySlug: "formula-engine",
    categoryTitle: "3. Pricing Formula Engine",
    title: "Minimum Price Floor Safeguards",
    description: "Prevent accidental below-cost selling during sudden market flash crashes.",
    readingTime: "3 min read",
    lastUpdated: "Updated 5 days ago",
    headings: [
      { id: "how-floors-work", text: "How Price Floors Work", level: 2 },
      { id: "write-skipping", text: "Write Skipping Logic", level: 2 },
      { id: "audit-logging", text: "Floor Breach Audit Logging", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Safeguard your wholesale margins against sudden commodities flash crashes.</p>

      <h2 id="how-floors-work">How Price Floors Work</h2>
      <p>When you set <code>minimumPrice</code> on a formula or variant override, SpotMetal checks every computed price before writing to Shopify.</p>

      <h2 id="write-skipping">Write Skipping Logic</h2>
      <p>If the spot calculation would cause the retail price to drop below your floor, the engine skips the write update, preserving your margin.</p>

      <h2 id="audit-logging">Floor Breach Audit Logging</h2>
      <p>Every skipped price update records an entry in the <strong>Audit Log</strong> table with error code <code>PRICE_FLOOR_BOUND</code>.</p>
    `
  },
  "collector-coin-exemptions": {
    slug: "collector-coin-exemptions",
    categorySlug: "formula-engine",
    categoryTitle: "3. Pricing Formula Engine",
    title: "Collector & Numismatic Exemptions",
    description: "Bypass spot rate updates for rare collector coins and fixed antique jewelry.",
    readingTime: "3 min read",
    lastUpdated: "Updated 1 week ago",
    headings: [
      { id: "numismatic-pricing", text: "Fixed Numismatic Valuation", level: 2 },
      { id: "how-to-exempt", text: "How to Exempt Products from Sync", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Rare collector coins and antique estate jewelry carry numismatic value far exceeding their raw melt weight.</p>

      <h2 id="numismatic-pricing">Fixed Numismatic Valuation</h2>
      <p>To prevent spot updates from overriding fixed historical coin valuations, SpotMetal allows item-level exemption.</p>

      <h2 id="how-to-exempt">How to Exempt Products from Sync</h2>
      <p>Open the product in Shopify Admin, scroll to the <strong>SpotMetal Block</strong>, and toggle <strong>Exempt from Live Spot Sync</strong>, or add tag <code>spotmetal:exempt</code>.</p>
    `
  },
  "live-ticker-marquee": {
    slug: "live-ticker-marquee",
    categorySlug: "theme-extensions",
    categoryTitle: "4. Storefront Theme Extensions",
    title: "Embedding Live Spot Ticker Marquee",
    description: "How to add and customize the 60fps auto-scrolling live spot ticker in your Shopify theme.",
    readingTime: "3 min read",
    lastUpdated: "Updated 4 days ago",
    headings: [
      { id: "overview", text: "Extension Overview", level: 2 },
      { id: "adding-via-theme-editor", text: "Adding via Shopify Theme Editor", level: 2 },
      { id: "customizing-display", text: "Customizing Metals & Colors", level: 2 },
      { id: "liquid-code-snippet", text: "Liquid Code Snippet", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">The SpotMetal Live Ticker is a lightweight, zero-dependency Theme App Extension that displays real-time commodity prices with sub-minute accuracy.</p>

      <h2 id="overview">Extension Overview</h2>
      <ul>
        <li>Auto-scrolling infinite marquee with GPU acceleration.</li>
        <li>Zero render-blocking JavaScript.</li>
        <li>Supports Gold, Silver, Platinum, Palladium, and EUR/USD FX indicators.</li>
      </ul>

      <h2 id="adding-via-theme-editor">Adding via Shopify Theme Editor</h2>
      <ol>
        <li>Go to <strong>Shopify Admin > Online Store > Themes > Customize</strong>.</li>
        <li>Click <strong>Add Section</strong> and select <strong>SpotMetal Ticker Marquee</strong>.</li>
        <li>Position it above your header or above your footer and click <strong>Save</strong>.</li>
      </ol>

      <h2 id="customizing-display">Customizing Metals & Colors</h2>
      <p>Customize enabled metals (XAU, XAG, XPT, XPD), units ($/g or $/oz), scroll speed, and theme colors.</p>
    `
  },
  "buyback-calculator-widget": {
    slug: "buyback-calculator-widget",
    categorySlug: "theme-extensions",
    categoryTitle: "4. Storefront Theme Extensions",
    title: "Storefront Buyback Calculator Widget",
    description: "Embed customer appraisal modals on your product or dedicated trade-in pages.",
    readingTime: "4 min read",
    lastUpdated: "Updated 3 days ago",
    headings: [
      { id: "widget-overview", text: "Buyback Widget Overview", level: 2 },
      { id: "embedding-instructions", text: "Embedding via Theme App Blocks", level: 2 },
      { id: "customizing-discounts", text: "Setting Dealer Buyback Discount %", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Transform your store into a double-sided acquisition platform by letting customers appraise and trade in old scrap gold.</p>

      <h2 id="widget-overview">Buyback Widget Overview</h2>
      <p>The <code>buyback_calculator.liquid</code> widget allows customers to choose their metal type, karat purity, and gram weight to calculate an instant cash appraisal offer.</p>

      <h2 id="embedding-instructions">Embedding via Theme App Blocks</h2>
      <ol>
        <li>Open Theme Customizer on your dedicated <strong>/pages/trade-in</strong> template.</li>
        <li>Add the <strong>SpotMetal Buyback Calculator</strong> app block.</li>
        <li>Save changes.</li>
      </ol>

      <h2 id="customizing-discounts">Setting Dealer Buyback Discount %</h2>
      <p>In <strong>Settings > Buyback Settings</strong>, configure your scrap appraisal payout percentage (e.g. 85% of spot melt value) to lock in your acquisition spread.</p>
    `
  },
  "product-buyback-popup": {
    slug: "product-buyback-popup",
    categorySlug: "theme-extensions",
    categoryTitle: "4. Storefront Theme Extensions",
    title: "PDP Trade-In Quick Submission Form",
    description: "Turn product pages into double-sided selling and acquisition hubs.",
    readingTime: "3 min read",
    lastUpdated: "Updated 4 days ago",
    headings: [
      { id: "pdp-button", text: "Product Page Trade-In Trigger", level: 2 },
      { id: "app-block-setup", text: "Enabling buyback_button.liquid", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Encourage shoppers to trade in old jewelry directly on Product Detail Pages to offset their purchase cost.</p>

      <h2 id="pdp-button">Product Page Trade-In Trigger</h2>
      <p>Embeds a clean <em>"Trade in your old gold for store credit"</em> button directly below the Add to Cart button.</p>

      <h2 id="app-block-setup">Enabling buyback_button.liquid</h2>
      <p>In Theme Customizer on your default Product template, insert the <strong>SpotMetal Buyback Button</strong> block and customize the button label and accent colors.</p>
    `
  },
  "physical-location-availability": {
    slug: "physical-location-availability",
    categorySlug: "theme-extensions",
    categoryTitle: "4. Storefront Theme Extensions",
    title: "Retail Location & Trade-In Availability",
    description: "Display in-store bullion availability and local trade-in appraisal desks.",
    readingTime: "3 min read",
    lastUpdated: "Updated 6 days ago",
    headings: [
      { id: "omnichannel", text: "Omnichannel Bullion Availability", level: 2 },
      { id: "location-liquid", text: "Configuring location_availability.liquid", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Connect online shoppers with your physical retail locations for secure in-person bullion pickup and scrap appraisals.</p>

      <h2 id="omnichannel">Omnichannel Bullion Availability</h2>
      <p>Displays real-time inventory counts and local branch vault availability across all store locations.</p>

      <h2 id="location-liquid">Configuring location_availability.liquid</h2>
      <p>Enable the block in Theme Customizer to automatically pull location names and address hours from your Shopify Admin.</p>
    `
  },
  "shadow-products-architecture": {
    slug: "shadow-products-architecture",
    categorySlug: "circular-buyback",
    categoryTitle: "5. Circular Buyback System",
    title: "Shadow Products & SKU Architecture",
    description: "How SpotMetal creates shadow appraisal items with BB-* SKU codes at $0.00.",
    readingTime: "4 min read",
    lastUpdated: "Updated 4 days ago",
    headings: [
      { id: "shadow-architecture", text: "What are Shadow Products?", level: 2 },
      { id: "sku-naming", text: "The BB-* SKU Convention", level: 2 },
      { id: "analytics-isolation", text: "Sales Analytics Isolation", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Understand the underlying architecture enabling customer scrap trade-ins to pass through Shopify without corrupting sales analytics.</p>

      <h2 id="shadow-architecture">What are Shadow Products?</h2>
      <p>When a customer submits a scrap appraisal, SpotMetal generates a draft shadow product record with zero catalog visibility (hidden from storefront search and collections).</p>

      <h2 id="sku-naming">The BB-* SKU Convention</h2>
      <p>Every trade-in receives a unique SKU formatted as <code>BB-[INQUIRY_ID]-[KARAT]</code> (e.g. <code>BB-1042-14K</code>) carrying metadata for fine weight, purity, and offer valuation.</p>

      <h2 id="analytics-isolation">Sales Analytics Isolation</h2>
      <p>Shadow items are categorized under <code>Precious Metal Buyback</code> to keep scrap acquisitions cleanly separated from retail merchandise reports.</p>
    `
  },
  "customer-inquiry-workflow": {
    slug: "customer-inquiry-workflow",
    categorySlug: "circular-buyback",
    categoryTitle: "5. Circular Buyback System",
    title: "Customer Submission & App Proxy Flow",
    description: "From storefront form submission to the admin review queue via App Proxy.",
    readingTime: "4 min read",
    lastUpdated: "Updated 5 days ago",
    headings: [
      { id: "app-proxy", text: "App Proxy Route (/apps/metal-prices)", level: 2 },
      { id: "inquiry-lifecycle", text: "The 4-Stage Inquiry Lifecycle", level: 2 },
      { id: "staff-notifications", text: "Automated Staff Alerts", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Track customer scrap submissions from initial storefront appraisal to final trade-in approval.</p>

      <h2 id="app-proxy">App Proxy Route (/apps/metal-prices)</h2>
      <p>Submissions route through Shopify's secure App Proxy to bypass CORS restrictions, transmitting customer contact details and scrap specifications directly into the <code>BuybackOrder</code> table.</p>

      <h2 id="inquiry-lifecycle">The 4-Stage Inquiry Lifecycle</h2>
      <ol>
        <li><strong>Submitted:</strong> Customer submits weight, karat, and optional photos.</li>
        <li><strong>Under Review:</strong> Staff inspects item specifications in <strong>Buyback Orders</strong> console.</li>
        <li><strong>Approved:</strong> Official appraisal offer accepted.</li>
        <li><strong>Draft Order Issued:</strong> Payout invoice created in 1 click.</li>
      </ol>
    `
  },
  "draft-order-creation": {
    slug: "draft-order-creation",
    categorySlug: "circular-buyback",
    categoryTitle: "5. Circular Buyback System",
    title: "1-Click Shopify Draft Order Payouts",
    description: "Issue official customer payout invoices and credit receipts in seconds.",
    readingTime: "3 min read",
    lastUpdated: "Updated 4 days ago",
    headings: [
      { id: "draft-orders", text: "Draft Order Generation", level: 2 },
      { id: "credit-vs-payout", text: "Store Credit vs Bank Payout Invoices", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Convert accepted scrap appraisals into official Shopify Draft Orders with 1 click.</p>

      <h2 id="draft-orders">Draft Order Generation</h2>
      <p>Inside <strong>Buyback Orders</strong>, clicking <strong>Create Draft Order</strong> generates an official payout invoice in Shopify Admin with customer address, appraisal value, and tax exemptions pre-populated.</p>

      <h2 id="credit-vs-payout">Store Credit vs Bank Payout Invoices</h2>
      <p>Choose to issue payout via bank transfer or generate store discount vouchers with an optional bonus (e.g. +10% value if taken as store credit).</p>
    `
  },
  "differential-taxation-25a": {
    slug: "differential-taxation-25a",
    categorySlug: "compliance-taxes",
    categoryTitle: "6. Compliance & Differential Tax",
    title: "Differential Taxation (§25a UStG)",
    description: "Comply with German and EU margin taxation rules for second-hand jewelry and bullion.",
    readingTime: "5 min read",
    lastUpdated: "Updated 1 week ago",
    headings: [
      { id: "what-is-25a", text: "What is §25a UStG Differential Taxation?", level: 2 },
      { id: "how-spotmetal-handles-25a", text: "How SpotMetal Automates §25a Compliance", level: 2 },
      { id: "invoice-and-audit-requirements", text: "Invoice & Audit Trail Requirements", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">German and European tax laws permit antique jewelry, pre-owned bullion, and collector items to be taxed solely on the dealer's gross margin rather than the total sales price under §25a UStG.</p>

      <h2 id="what-is-25a">What is §25a UStG Differential Taxation?</h2>
      <div class="p-4 rounded-xl bg-slate-900 border border-white/10 font-mono text-xs text-emerald-400 my-4">
        VAT Payable = (Selling Price - Acquisition Buyback Cost) * (19 / 119)
      </div>

      <h2 id="how-spotmetal-handles-25a">How SpotMetal Automates §25a Compliance</h2>
      <p>SpotMetal tracks acquisition costs permanently in product metafields and generates the mandatory statutory statement on Shopify orders.</p>
    `
  },
  "audit-trail-and-security": {
    slug: "audit-trail-and-security",
    categorySlug: "compliance-taxes",
    categoryTitle: "6. Compliance & Differential Tax",
    title: "Immutable Audit Trails & GDPR",
    description: "Full audit logs of every spot rate sync, formula edit, and buyback payout.",
    readingTime: "4 min read",
    lastUpdated: "Updated 1 week ago",
    headings: [
      { id: "audit-logging", text: "AuditLog Architecture", level: 2 },
      { id: "gdpr-compliance", text: "GDPR Compliance & Webhook Handlers", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Maintain an unalterable audit log for tax authorities, accounting compliance, and store data privacy.</p>

      <h2 id="audit-logging">AuditLog Architecture</h2>
      <p>Every price mutation, formula adjustment, and rate sync writes a permanent record into the <code>AuditLog</code> table with timestamp, old price, new price, and user ID.</p>

      <h2 id="gdpr-compliance">GDPR Compliance & Webhook Handlers</h2>
      <p>SpotMetal fully supports mandatory Shopify GDPR webhooks: <code>customers/data_request</code>, <code>customers/redact</code>, and <code>shop/redact</code>.</p>
    `
  },
  "sync-lag-and-api-limits": {
    slug: "sync-lag-and-api-limits",
    categorySlug: "troubleshooting",
    categoryTitle: "7. Troubleshooting & FAQs",
    title: "GraphQL Rate Limits & Sync Lag",
    description: "How SpotMetal batches mutations to stay within Shopify API leaky bucket limits.",
    readingTime: "4 min read",
    lastUpdated: "Updated 2 days ago",
    headings: [
      { id: "rate-limits", text: "Shopify GraphQL Leaky Bucket Limits", level: 2 },
      { id: "batch-mutations", text: "Bulk Mutation Batching", level: 2 },
      { id: "optimizing-speed", text: "Optimizing Sync Performance", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Understand how SpotMetal synchronizes thousands of catalog variants without hitting Shopify GraphQL rate limits.</p>

      <h2 id="rate-limits">Shopify GraphQL Leaky Bucket Limits</h2>
      <p>Standard Shopify stores allow 100 API points/sec (Shopify Plus allows 500 points/sec). SpotMetal monitors bucket capacity dynamically.</p>

      <h2 id="batch-mutations">Bulk Mutation Batching</h2>
      <p>We bundle variant price mutations using <code>productVariantsBulkUpdate</code> to update up to 100 variants per single GraphQL request.</p>

      <h2 id="optimizing-speed">Optimizing Sync Performance</h2>
      <p>Group items under shared formulas to enable parallel asynchronous worker queues.</p>
    `
  },
  "common-error-codes": {
    slug: "common-error-codes",
    categorySlug: "troubleshooting",
    categoryTitle: "7. Troubleshooting & FAQs",
    title: "Error Codes Reference & Solutions",
    description: "PRICE_FLOOR_BOUND, API_AUTH_FAILED, and METAFIELD_SYNC_LAG explanations.",
    readingTime: "5 min read",
    lastUpdated: "Updated 1 day ago",
    headings: [
      { id: "error-table", text: "Standard Error Codes Reference Table", level: 2 },
      { id: "resolving-errors", text: "Step-by-Step Resolution Guides", level: 2 }
    ],
    content: `
      <p class="lead text-lg text-slate-200">Quick diagnostic guide for standard system error codes and recommended actions.</p>

      <h2 id="error-table">Standard Error Codes Reference Table</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left text-sm font-sans border-collapse">
          <thead>
            <tr class="border-b border-white/10 text-slate-400 font-mono text-xs">
              <th class="py-3 px-4">Error Code</th>
              <th class="py-3 px-4">Cause</th>
              <th class="py-3 px-4">Recommended Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 text-slate-200 font-sans text-xs">
            <tr>
              <td class="py-3 px-4 font-mono text-rose-400 font-bold">PRICE_FLOOR_BOUND</td>
              <td class="py-3 px-4">Calculated price dropped below configured minimum margin floor.</td>
              <td class="py-3 px-4">Review formula <code>minimumPrice</code> setting or adjust margin spread.</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-mono text-rose-400 font-bold">API_AUTH_FAILED</td>
              <td class="py-3 px-4">Custom market data provider rejected the stored API key.</td>
              <td class="py-3 px-4">Re-enter valid credentials in <strong>Settings > Rate Feeds</strong>.</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-mono text-amber-400 font-bold">METAFIELD_SYNC_LAG</td>
              <td class="py-3 px-4">Shopify storefront cache has not yet refreshed metafield updates.</td>
              <td class="py-3 px-4">Wait 30–60 seconds for Shopify CDN edge cache invalidation.</td>
            </tr>
            <tr>
              <td class="py-3 px-4 font-mono text-amber-400 font-bold">VARIANT_DELETED</td>
              <td class="py-3 px-4">Variant ID removed from Shopify catalog while formula was active.</td>
              <td class="py-3 px-4">Run <strong>Sync Catalog Inventory</strong> in Products console.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="resolving-errors">Step-by-Step Resolution Guides</h2>
      <p>If you encounter an unresolvable error code, reach out directly to our engineering desk via WhatsApp for instant live assistance.</p>
    `
  }
};
