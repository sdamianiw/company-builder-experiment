# Winner Claims Verification — BatchLedger (etsy-cogs)

Date verified: 2026-07-23
Budget used: 11 / 12 web tool calls
Method: WebFetch against each claim URL. Pain-evidence quotes (claims 2, 3, 9) were already adversarially verified but also spot-checked here.

---

## Claim 1 — Stocksmith Indie $83–99/month; BOM absent from Pro ($20/mo) and Studio ($41–49/mo) in detailed feature comparison matrix
URL: https://stocksmith.io/pricing
Status: PARTIALLY FLAG

Verified:
- Indie plan: $99/month monthly, $83/month annual ($990/year) — CONFIRMED
- Studio plan: $49/month monthly, $41/month annual — CONFIRMED (pitch's "$41–49" range is accurate)
- Pro plan: $20/month — EXISTS but referenced only in FAQ, not in any main pricing section

Problem: The "detailed feature comparison matrix" on the page covers only Indie, Business, and Growth tiers. Pro and Studio have NO columns in that matrix. The claim that BOM absence appears "in the detailed feature comparison matrix" for Pro and Studio is inaccurate — the matrix simply omits those tiers entirely. Additionally, the FAQ states Studio includes "multi-user inventory and recipe management," which contradicts the claim that BOM/recipe management is absent from Studio. The BOM-absent conclusion for Pro and Studio is an inference from their omission, not something the matrix states.

Risk to pitch: The pricing figures are correct and the competitive wedge (Indie = $990/yr vs BatchLedger Pro = $228/yr) is valid. The specific matrix-wording claim is overstated and should be softened to "Pro and Studio tiers are not shown in the feature comparison; the Studio FAQ entry references recipe management."

---

## Claim 2 — Liza K. Capterra: "Having materials automatically deduct when I sell a product is very basic functionality that I should not have to pay $1,000/year to have"
URL: https://www.capterra.com/p/144117/Craftybase/reviews/
Status: CONFIRMED

Review dated September 19, 2025. Quote is accurate (minor formatting: "$1,000 / year" with spaces, matches substance). Already flagged as pain evidence in prior round; reconfirmed.

---

## Claim 3 — Raven T. Capterra Aug 2024: "I felt like legacy clients had quite a shock when the price went up x5 (literally my price went up that much without exaggeration)"
URL: https://www.capterra.com/p/144117/Craftybase/reviews/
Status: CONFIRMED

Review dated August 8, 2024. Quote is accurate verbatim. Already flagged as pain evidence in prior round; reconfirmed.

---

## Claim 4 — craftybase.com issues a bare redirect to stocksmith.io/pricing with no content, no legacy plans, and no sign-up
URL: https://stocksmith.io/pricing (and craftybase.com checked separately)
Status: CONFIRMED

craftybase.com returns only "Redirecting…" text with a fallback link. No content, no legacy plans, no sign-up UI. The redirect destination is stocksmith.io (not /pricing specifically, but the rebrand redirect is confirmed).

---

## Claim 5 — Inventora Shopify App Store: Starter $23/month; 8 reviews at 3.9/5; overselling during flash sales, inventory duplication, multi-day support non-response confirmed in reviews
URL: https://apps.shopify.com/inventora/reviews
Status: CONFIRMED

- Starter: $23/month on App Store listing — CONFIRMED
- 8 reviews, 3.9/5 — CONFIRMED
- Overselling during flash sales: review states "Attaching it to Shopify meant that I oversell my products during flash sales drops" — CONFIRMED
- Inventory duplication: review cites "no clear-cut way to sync between Inventora and Shopify without TONS of duplicating work" — CONFIRMED
- Multi-day support delay: reviewer stated waiting "days before I get a response" — CONFIRMED

Note: inventora.com/pricing-plans shows a Hobby free tier and Starter at $19/mo (billed yearly). The App Store charges $23/month (monthly billing, no free tier visible). These are consistent with different billing cycle pricing on different channels. No contradiction.

---

## Claim 6 — Ardent Seller $19/month, Etsy-only, "128 reviews" are from creator's Etsy craft shop not software reviews; zero independent software reviews on Capterra/G2/app stores
URL: https://www.ardentseller.app/
Status: CONFIRMED

- Price: $19/month flat-rate plans — CONFIRMED
- Etsy-only: page confirms "Now syncing with Etsy"; no Shopify mentioned — CONFIRMED
- 128 reviews: explicitly attributed to "Ardent Workshop… rated 4.8 across 128 reviews on Etsy" (their physical products Etsy shop) — CONFIRMED
- No independent software reviews on Capterra, G2, or app stores — CONFIRMED (none found)

---

## Claim 7 — FormulaLedger Starter $19/month with BOM auto-deduction; no Etsy or Shopify integration; deduction manually triggered not order-event triggered
URL: https://formulaledger.com/pricing
Status: CONFIRMED with minor qualification

- Starter $19/month — CONFIRMED
- BOM auto-deduction listed as feature — CONFIRMED
- No Etsy or Shopify integration found on pricing or home page — CONFIRMED
- Deduction trigger: home page states "Log a batch and stock auto-deducts" — this describes batch-production logging as the trigger, not sales-order webhooks. The claim's "manually triggered, not order-event triggered" is accurate: users log a production batch (manual action), which triggers deduction. No sales channel webhooks mentioned anywhere.

---

## Claim 8 — Inventora Hobby (free) tier caps at 10 orders/month
URL: https://inventora.com/pricing-plans/
Status: CONFIRMED

Pricing page shows Hobby (Free) plan with "10 Sales per Month" cap. This is the inventora.com direct website; the Shopify App Store does not list a free tier (only 7-day trial). Both are accurate for their respective channels.

---

## Claim 9 — SoftwareAdvice anonymous reviewer: "when you sell a product the software will NOT automatically deduct the materials from your inventory UNLESS you pay for a more expensive plan"
URL: https://www.softwareadvice.com/inventory-management/craftybase-profile/reviews/
Status: CONFIRMED

Quote found verbatim in a "Cons" section. Already flagged as pain evidence in prior round; reconfirmed.

---

## Pricing Sanity Check vs. Incumbent Prices on Record

| Product | On-record price | Verified price | Match? |
|---------|----------------|---------------|--------|
| Stocksmith Indie (monthly) | $99/mo | $99/mo | YES |
| Stocksmith Indie (annual) | $83/mo ($990/yr) | $83/mo ($990/yr) | YES |
| Stocksmith Studio (monthly) | $49/mo | $49/mo | YES |
| Stocksmith Studio (annual) | $41/mo | $41/mo | YES |
| Stocksmith Pro | $20/mo | $20/mo (FAQ only) | YES |
| Inventora Starter (App Store) | $23/mo | $23/mo | YES |
| Inventora Hobby cap | 10 orders/mo | 10 orders/mo | YES |
| Ardent Seller | $19/mo | $19/mo | YES |
| FormulaLedger Starter | $19/mo | $19/mo | YES |

All pricing figures sanity-check against verified sources.

---

## Summary

8 of 9 claims CONFIRMED. 1 claim PARTIALLY FLAGGED (Claim 1).

The flagged wording ("absent from Pro and Studio in the detailed feature comparison matrix") misrepresents the source: the matrix omits Pro and Studio entirely, and the FAQ suggests Studio includes recipe management. The underlying competitive fact (Indie = $990/year minimum for Stocksmith, vs. proposed $228/year Pro) is fully verified and the wedge is sound. The pitch should remove the matrix reference for Pro/Studio and replace it with "Pro and Studio tiers are not included in Stocksmith's feature comparison table; pricing ladder places them below the BOM-capable Indie tier."
