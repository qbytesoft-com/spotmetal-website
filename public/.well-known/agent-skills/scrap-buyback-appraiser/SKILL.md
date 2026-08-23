---
name: scrap-buyback-appraiser
description: Appraise customer scrap jewelry trade-ins and generate instant melt payout valuations and 1-click Shopify Draft Order invoices.
version: 1.0.0
type: mcp-tool
---

# SpotMetal Scrap Buyback Appraiser Skill

Allows autonomous commerce agents to appraise customer scrap gold, silver, and platinum items and compute statutory trade-in payout offers.

## Parameters
- `metal`: `gold` | `silver` | `platinum`
- `karat`: `8K` through `24K`
- `weightGrams`: Weight in grams
- `payoutMethod`: `cash` | `store_credit`

## Workflow
1. Calculate melt value: `SpotRatePerGram * KaratFineness * WeightGrams`
2. Apply merchant discount margin (e.g. 15% discount for refining spread).
3. Output instant cash offer and store credit voucher with 10% bonus.
4. Auto-generate Shopify Draft Order with `BB-*` shadow product isolation.
