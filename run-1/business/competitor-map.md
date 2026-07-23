# BatchLedger — Competitor Map

**Date:** 2026-07-23
**Method:** All cells sourced from URLs verified during the evidence rounds (rescue-etsy-cogs.md, r2-rank-3-narrowed.md, winner-claims.md). Every claim carries its source URL.

---

## Comparison Table

| Competitor | Price | Auto-deduction on sale? | Etsy | Shopify | Independent Reviews | Key Documented Problem | Source |
|-----------|-------|------------------------|------|---------|---------------------|------------------------|--------|
| **Stocksmith (Craftybase)** | Indie: $83/mo annual / $99/mo monthly ($990/yr). Studio: $41–49/mo. Pro: $20/mo. | Confirmed gated at Indie tier ($83–99/mo). Pro and Studio tiers are not included in the feature comparison matrix; capability at those tiers is undocumented. | Yes | Yes | 245 reviews, 4.6/5 on Capterra | 5x price increase from legacy ~$19/mo. Named reviewer: "I felt like legacy clients had quite a shock when the price went up x5" (Raven T., Aug 2024). "$1,000/year" minimum for auto-manufacture confirmed by named reviewer (Liza K., Sep 2025). | [https://stocksmith.io/pricing](https://stocksmith.io/pricing) / [https://www.capterra.com/p/144117/Craftybase/reviews/](https://www.capterra.com/p/144117/Craftybase/reviews/) |
| **Inventora** | $23/mo on Shopify App Store (monthly). $19/mo on inventora.com (annual). Free Hobby tier: 10 orders/month cap. | Yes — on both Etsy and Shopify | Yes | Yes | 8 reviews, 3.9/5 on Shopify App Store | Overselling during flash sales. Inventory duplication on sync. Multi-day support non-response. Quotes: "Attaching it to Shopify meant that I oversell my products during flash sales drops"; "no clear-cut way to sync between Inventora and Shopify without TONS of duplicating work"; "it's days before I get a response." | [https://apps.shopify.com/inventora/reviews](https://apps.shopify.com/inventora/reviews) / [https://inventora.com/pricing-plans/](https://inventora.com/pricing-plans/) |
| **Ardent Seller** | $19/mo flat. Free tier: 50 transactions/month, all features. | Yes — on Etsy | Yes | No | Zero independent software reviews on any third-party platform | Etsy-only (no Shopify). "128 reviews" cited on site are from the creator's personal Etsy craft shop (Ardent Workshop), not software reviews. Zero presence on Capterra, G2, or any app store. Near-zero market awareness. | [https://www.ardentseller.app/](https://www.ardentseller.app/) |
| **FormulaLedger** | Starter: $19/mo. Compliance (FDA MoCRA): $39/mo. | Yes — but manually triggered (user logs a production batch; stock auto-deducts). NOT triggered by incoming Etsy/Shopify order events. | No | No | Zero independent reviews. All testimonials are vendor-hosted. | No Etsy or Shopify sales channel integration. Cannot auto-deduct on order receipt without manual batch-log step. Home page states: "Log a batch and stock auto-deducts" — batch log is a manual user action. | [https://formulaledger.com/pricing](https://formulaledger.com/pricing) |
| **Katana** | Starts at $199/mo | Yes | Partial (via integrations) | Yes | Established — not the target segment | Priced for larger manufacturers. Not competitive in the micro-seller segment. | Cited in rescue-etsy-cogs.md as out-of-range for the persona. |
| **Spreadsheets (Google Sheets / Excel)** | Free | No — manual deduction required per batch | No | No | N/A (not software) | Named users confirm this as the dominant "before state": "challenges with the upkeep of Excel sheets" (Cavelle Wilson, inventora.com/reviews); "tracking all of my supplies by sight" (Judith Keriopoulos, inventora.com/reviews). Auto-deduction on sale event is impossible without integration. | [https://inventora.com/reviews/](https://inventora.com/reviews/) |

---

## BatchLedger Positioning vs. Each Competitor

### vs. Stocksmith
Stocksmith's Indie tier — the only confirmed auto-deduction plan — costs $990/year ($83/mo annual). BatchLedger Pro Annual is $180/year. The wedge is 5.5x price difference on the same core feature. Stocksmith's Pro and Studio tiers ($20 and $41–49/mo respectively) are absent from the feature comparison matrix; their auto-deduction capability is undocumented there. The displacement window: the rebrand from Craftybase to Stocksmith completed July 2026; the old domain craftybase.com now returns only a redirect with no content and no legacy plans.

### vs. Inventora
Inventora is priced at $23/mo on the Shopify App Store (the primary discovery channel for this persona). BatchLedger Pro at $19/mo undercuts by $4/mo. The real differentiation is reliability: Inventora's 3.9/5 rating with documented overselling, duplication, and non-responsive support makes it unsafe for inventory-critical use. BatchLedger's MVP design (idempotency keys on every webhook, manual override with audit trail, public status page) directly targets the failure modes Inventora's own reviewers named.

### vs. Ardent Seller
Ardent Seller matches BatchLedger at $19/mo. Its core limitation is Etsy-only scope — no Shopify integration. Any seller on both platforms cannot use Ardent Seller. Additionally, zero independent reviews means there is no evidence of reliability; the "128 reviews" figure misleadingly refers to the creator's physical craft shop on Etsy, not software users.

### vs. FormulaLedger
FormulaLedger's BOM auto-deduction fires on a user-initiated production batch log, not on an incoming order event. A seller receiving 50 Etsy orders in a flash sale would need to manually log a batch of 50 to trigger deduction — the exact friction the persona is trying to eliminate. FormulaLedger's compliance features (FDA MoCRA, INCI) are valuable for a cosmetics seller but irrelevant to the core inventory pain. FormulaLedger is the highest-threat future competitor: if they add Etsy/Shopify webhooks, the differentiation gap narrows sharply.

### vs. Spreadsheets
Spreadsheets are free and the dominant incumbent workaround. The switching argument is not price — it is time and accuracy. Named users confirm hours spent on manual upkeep and errors from visual tracking. The free tier of BatchLedger is designed to replace a spreadsheet directly, with no cost barrier to switching.

---

## Threat Ranking (honest)

1. **FormulaLedger** — right price, right persona, working BOM engine. One engineering sprint from closing the channel-integration gap. Highest threat if they move in the next 6–12 months.
2. **Inventora** — deep in the hole on trust, but technically capable. A sync-bug fix combined with better support responsiveness would materially close the reliability gap.
3. **Ardent Seller** — if they add Shopify and earn 5 independent reviews, they become the default "cheap and works" option. Their current obscurity is our distribution advantage.
4. **Stocksmith** — moving upmarket. Downmarket re-entry would require a product restructure that contradicts their current direction. Low near-term threat.
