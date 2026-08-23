import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const openApiYaml = `openapi: 3.1.0
info:
  title: SpotMetal Precious Metals API
  version: 2.4.0
  description: Official REST API for real-time precious metals spot pricing, dynamic karat purity calculations, and circular customer scrap buybacks on Shopify.
  contact:
    name: SpotMetal Engineering Support
    email: support@qbytesoft.com
    url: https://spotmetal.qbytesoft.com
servers:
  - url: https://spotmetal.qbytesoft.com/api
    description: Production API Gateway

paths:
  /rates:
    get:
      summary: Get Live Spot Commodity Rates
      description: Retrieve live market rates for Gold (XAU), Silver (XAG), Platinum (XPT), and Palladium (XPD).
      parameters:
        - name: currency
          in: query
          required: false
          schema:
            type: string
            default: USD
            example: USD
      responses:
        '200':
          description: Live spot commodity rates
          content:
            application/json:
              schema:
                type: object
                properties:
                  timestamp:
                    type: string
                    format: date-time
                  currency:
                    type: string
                  rates:
                    type: object
                    properties:
                      XAU:
                        type: number
                        example: 2942.10
                      XAG:
                        type: number
                        example: 32.85
                      XPT:
                        type: number
                        example: 985.00
                      XPD:
                        type: number
                        example: 1020.00

  /calculate:
    post:
      summary: Calculate Dynamic Karat Retail Price
      description: Compute final retail product price based on metal spot rate, karat purity multiplier, fine grams, making charges, and floor limits.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - metal
                - karat
                - weightGrams
              properties:
                metal:
                  type: string
                  enum: [gold, silver, platinum, palladium]
                karat:
                  type: string
                  example: "18K"
                weightGrams:
                  type: number
                  example: 12.5
                makingCharges:
                  type: number
                  example: 45.00
                minimumPrice:
                  type: number
                  example: 500.00
      responses:
        '200':
          description: Calculated pricing object
          content:
            application/json:
              schema:
                type: object
                properties:
                  spotRatePerGram:
                    type: number
                  purityMultiplier:
                    type: number
                  rawMaterialCost:
                    type: number
                  makingCharges:
                    type: number
                  isFloorBoundApplied:
                    type: boolean
                  finalPrice:
                    type: number
                    example: 1125.40

  /buyback/appraise:
    post:
      summary: Appraise Scrap Jewelry Trade-In
      description: Evaluate customer trade-in scrap item value and generate payout offers.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - metal
                - karat
                - weightGrams
              properties:
                metal:
                  type: string
                  enum: [gold, silver, platinum]
                karat:
                  type: string
                  example: "14K"
                weightGrams:
                  type: number
                  example: 25.0
      responses:
        '200':
          description: Payout valuation appraisal
          content:
            application/json:
              schema:
                type: object
                properties:
                  meltValue:
                    type: number
                  cashPayoutOffer:
                    type: number
                  storeCreditOffer:
                    type: number
`;

  return new Response(openApiYaml, {
    headers: {
      'Content-Type': 'application/yaml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
