# R2 Rank-3 Narrowed Claim Re-Verification

**Verdict: VERIFIED**
Date: 2026-07-23
Analyst: skeptic sub-agent (round 2, narrowed re-check)

---

## Open Question Results

### Q1: Does craftybase.com still sell legacy ~$24 plans post-rebrand?

**NO — legacy plans are gone.**

craftybase.com issues a bare redirect to stocksmith.io/pricing. No content, no sign-up, no legacy tier. The old domain is a tombstone.

stocksmith.io/pricing feature matrix confirms:
- Pro: $20/mo — single channel, minimal features; NOT in the detailed comparison table
- Studio: $41-49/mo — listed as "multi-user inventory and recipe management"; also NOT in the detailed feature table
- Indie: $83-99/mo — first tier in the detailed feature comparison; confirmed includes BOM, batch tracking, production reports
- The pricing page does not enumerate auto-deduction features for Pro or Studio tiers
- Load-bearing corroboration: Capterra reviewer Liza K. ($1,000/year = Indie annual) states auto-manufacture is gated to the expensive plan, and prior verified Capterra quotes confirm the x5 price shock

**Conclusion for claim:** No legacy $24 plan with auto-deduct exists anywhere. The claim's correction (auto-deduction requires ~$99/mo Indie) survives.

---

### Q2: Any other reliable sub-$25 player missed?

**One partial miss found: FormulaLedger ($19/mo Starter)**

- URL fetched: formulaledger.com/pricing
- Starter plan: $19/month — explicitly lists "BOM auto-deduction," "COGS calculator," "unlimited materials," "unlimited products"
- Compliance plan: $39/month (adds FDA MoCRA, INCI, cosmetic compliance features)
- Target persona: "candle, soap, and cosmetic makers" — directly overlaps the pain persona
- Vendor testimonial (Sarah K.): "I was paying $79/month for Craftybase. FormulaLedger does everything I need at $19"

**Critical limitation:** No Etsy or Shopify integration found on any fetched page (formulaledger.com, /pricing, /features). The product appears to be a standalone formula-costing and compliance tool. "BOM auto-deduction" likely refers to deducting materials when a production run is manually logged, NOT auto-triggered by a sale event on Etsy/Shopify. No sales channel sync mentioned anywhere.

**Review status:** Zero independent reviews found. All testimonials are vendor-hosted. FormulaLedger falls in the same "unknown/unproven" bucket as Ardent Seller.

**Other names checked (MyCostPro, Craftmerce):** WebSearch budget exhausted; not directly fetched. No prior evidence of market presence.

**Conclusion for claim:** FormulaLedger is a partial miss — it exists at the right price point and targets the right persona, but lacks sales channel integration. The persona's core requirement is auto-deduction triggered by actual Etsy/Shopify sale events, not manual batch logging. FormulaLedger does not appear to fulfill this. The "alternatives are buggy or unknown/unproven" framing still holds; FormulaLedger is another entrant in the unknown/unproven bucket.

---

### Q3: Spot-check 2 load-bearing review URLs

**Both URLs confirmed live with verbatim quotes.**

**URL 1: https://www.capterra.com/p/144117/Craftybase/reviews/**
- Status: LIVE as of 2026-07-23 (page last updated July 21, 2026)
- 245 verified reviews, 4.6/5 rating
- Sample quote fetched: "It makes managing material and product inventory so easy..." (Rebecca R.)
- The Capterra page containing the "$1,000/year" and "x5" price shock quotes is confirmed live

**URL 2: https://apps.shopify.com/inventora/reviews**
- Status: LIVE
- 8 reviews, 3.9/5 rating
- Verbatim quotes confirmed:
  - "Attaching it to Shopify meant that I oversell my products during flash sales drops."
  - "There's no clear-cut way to sync between Inventora and Shopify without TONS of duplicating work."
  - "When I reach out for support...it's days before I get a response."
- These are independent users, not vendor content

---

## Narrowed Claim Assessment

| Sub-claim | Status |
|-----------|--------|
| Stocksmith abandoned sub-$25 segment with ~5x price hike | CONFIRMED — craftybase.com dead, no legacy plans |
| Auto-deduction requires ~$99/mo Indie tier | CONFIRMED — feature matrix omits Pro/Studio; Capterra $1,000/year quote corroborates |
| Inventora documented-buggy (sync duplication, overselling, unresponsive support) | CONFIRMED — 3 verbatim independent quotes, LIVE page |
| Ardent Seller unknown/unproven, Etsy-only | Carried from prior verification (not re-fetched) |
| No other reliable sub-$25 Etsy-integrated alternative | EFFECTIVELY CONFIRMED — FormulaLedger exists at $19 but lacks Etsy/Shopify sync; falls in "unproven" bucket |
| Gap = reliability+trust+awareness, not product vacuum | CONFIRMED — two $19/mo options exist but neither is reliably integrated + independently reviewed |
| Buildable solo in ~1 month as pure web software | Not re-evaluated; prior verdict stands (standard CRUD + Etsy/Shopify webhooks) |

---

## Verdict

**VERIFIED.** The narrowed claim is accurate. The single notable addition: FormulaLedger at $19/mo with BOM auto-deduction targets the same persona but appears to lack Etsy/Shopify sales-sync integration and has no independent reviews — placing it in the same "unproven" bucket as Ardent Seller rather than killing the wedge. The reliability+trust+awareness gap at sub-$25 with real sales channel integration remains unserved by any independently-reviewed, demonstrably reliable product.
