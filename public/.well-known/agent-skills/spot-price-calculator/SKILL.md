---
name: spot-price-calculator
description: Calculate dynamic precious metal variant retail pricing based on live LBMA/GoldAPI commodities rates, karat purity multipliers (8K-24K), fine weight, and hard minimumPrice floor boundaries.
version: 1.0.0
type: mcp-tool
---

# SpotMetal Spot Price Calculator Skill

This skill allows AI agents to compute real-time product prices for precious metal jewelry, bullion bars, and coins on Shopify.

## Parameters
- `metal`: `gold` | `silver` | `platinum` | `palladium`
- `karat`: Purity level (e.g. `24K`, `22K`, `18K`, `14K`, `10K`, `925`, `999`)
- `weightGrams`: Numeric weight in grams
- `makingCharges`: (Optional) Craftsmanship or manufacturing charge
- `minimumPrice`: (Optional) Wholesale floor safeguard

## Mathematical Model
```text
FinalPrice = Max(minimumPrice, (LiveSpotPerGram * KaratMultiplier * WeightGrams) + MakingCharges) * (1 + RetailMargin)
```
