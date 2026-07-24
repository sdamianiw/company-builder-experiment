# BatchLedger — Company Thesis

**Date:** 2026-07-23
**Status:** Evidence-verified; all claims carry source URLs inline.

---

## Problem

Handmade product sellers on Etsy and Shopify — candle makers, soap makers, jewelry makers, resin artists — need to track raw material inventory and compute real COGS per unit. The core job: when a sale arrives, deduct the correct materials from stock automatically, so the seller knows their actual cost-per-item for pricing and tax reporting without maintaining spreadsheets by hand.

The market leader for this job, Craftybase, rebranded to Stocksmith in July 2026. Its entry price for the plan that includes recipe-based auto-deduction (the Indie tier) is now $83–99/month ([https://stocksmith.io/pricing](https://stocksmith.io/pricing)). Stocksmith's Pro ($20/mo) and Studio ($41–49/mo) tiers are not included in the product's feature comparison table; auto-deduction capability at those tiers is undocumented in the matrix ([https://stocksmith.io/pricing](https://stocksmith.io/pricing)).

### Verified Quotes from Named Users

All quotes are verbatim from live, independently-reviewed pages.

**Raven T. (Capterra, August 8, 2024):**
> "I felt like legacy clients had quite a shock when the price went up x5 (literally my price went up that much without exaggeration)"
Source: [https://www.capterra.com/p/144117/Craftybase/reviews/](https://www.capterra.com/p/144117/Craftybase/reviews/)

**Liza K. (Capterra, September 19, 2025):**
> "Having materials automatically deduct when I sell a product is very basic functionality that I should not have to pay $1,000 / year to have"
Source: [https://www.capterra.com/p/144117/Craftybase/reviews/](https://www.capterra.com/p/144117/Craftybase/reviews/)

**Liza K. (Capterra, September 19, 2025):**
> "It is an obvious 'money grab' for them to block the 'auto-manufacture' feature to force you to upgrade to a much more expensive plan"
Source: [https://www.capterra.com/p/144117/Craftybase/reviews/](https://www.capterra.com/p/144117/Craftybase/reviews/)

**Anonymous (SoftwareAdvice):**
> "when you sell a product the software will NOT automatically deduct the materials from your inventory UNLESS you pay for a more expensive plan"
Source: [https://www.softwareadvice.com/inventory-management/craftybase-profile/reviews/](https://www.softwareadvice.com/inventory-management/craftybase-profile/reviews/)

Precision matters here (re-verified live 2026-07-24 after an external challenge): Stocksmith still sells cheap entry tiers — a Pro plan at $20/month appears in the pricing FAQ, and Studio is $41–49/month. **But the core job — automated production assemblies (auto-deducting materials when orders come in) — is gated at Indie, $83–99/month**, per the feature comparison matrix ([https://stocksmith.io/pricing](https://stocksmith.io/pricing)). That is what named reviewers describe: Liza K.'s "$1,000/year" for auto-deduction matches Indie annual ($83×12 = $996), and her "money grab… block the 'auto-manufacture' feature to force you to upgrade" quote describes exactly this gating ([Capterra](https://www.capterra.com/p/144117/Craftybase/reviews/)). The "5x" figure is Raven T.'s own reported experience ("literally my price went up that much"), quoted as testimony — the structural claim we rely on is narrower: **the cheapest tier that does the auto-deduction job costs $83+/month.** The old domain, craftybase.com, redirects to stocksmith.io/pricing.

### Why Alternatives Fail

Three sub-$25/month alternatives exist (Inventora at $23, Ardent Seller and FormulaLedger at $19), but each carries a documented fatal flaw:

**Inventora ($23/mo on Shopify App Store):** Documented sync failures. The Shopify App Store listing shows 8 reviews at 3.9/5 ([https://apps.shopify.com/inventora/reviews](https://apps.shopify.com/inventora/reviews)), with independent reviewers confirming: overselling during flash sales, inventory duplication on sync, and multi-day support non-response. For sellers whose inventory accuracy determines whether they oversell or lose stock, these bugs are disqualifying.

**Ardent Seller ($19/mo):** Etsy-only — no Shopify integration ([https://www.ardentseller.app/](https://www.ardentseller.app/)). The "128 reviews" cited on their site are from the creator's personal Etsy craft shop (Ardent Workshop), not from software users. Zero independent software reviews on any third-party platform.

**FormulaLedger ($19/mo Starter):** Has BOM auto-deduction for candle/soap makers, but no Etsy or Shopify sales channel integration ([https://formulaledger.com/pricing](https://formulaledger.com/pricing)). Deduction is triggered by manually logging a production batch, not by an incoming order event. Zero independent reviews.

**Gap statement:** The gap is reliability + trust + awareness, not a price-point vacuum. The $19/month slot exists but is occupied by tools that are either too buggy, channel-limited, or unproven to trust with core business data.

---

## Persona

**Primary:** Handmade product seller on Etsy and/or Shopify generating $500–$10,000/month revenue, with 10–100 SKUs made from raw materials. Most likely product category: candles, soap, jewelry, resin, knitwear. Current workflow: spreadsheets, visual stock tracking, or a broken Inventora integration. Prior tool: Craftybase at $19/month (now gone). Primary frustration: data accuracy and cost.

**Secondary (acquisition):** Former Craftybase users displaced by the July 2026 rebrand and price jump — a named, self-identified population with documented pain, reachable via Capterra review profiles and community posts about the transition.

---

## Wedge

The one sentence: BatchLedger is the only tool under $25/month that auto-deducts raw materials the moment an Etsy or Shopify order lands — and does not break when you have a flash sale.

The wedge is not the $19 price (Inventora and Ardent Seller are already there). It is not the recipe/BOM feature (FormulaLedger already has it). The wedge is the combination of: correct price + both sales channels + verified reliability.

---

## Product — MVP Scope

Buildable solo in approximately four weeks with a standard web stack (Next.js or SvelteKit + Postgres + Etsy API + Shopify Partner API). No novel technology.

### Core data model
- Materials library: name, cost per unit, unit type, supplier, current stock quantity
- Recipe/BOM builder: link N materials at specified quantities to each product SKU
- Production log: optional manual batch logging

### Channel integrations (the differentiator)
- Etsy OAuth + webhook (`receipt` create event): on sale, look up product recipe, deduct materials. **Launch dependency (verified 2026-07-24):** Etsy's Open API requires a two-step approval for multi-tenant use — Personal App review first, then a manual "Commercial Access" review ([https://developers.etsy.com/documentation/](https://developers.etsy.com/documentation/)). This must be applied for before launch; until approved, CSV order import is the fallback ingestion path. (Webhooks are listed in Etsy's current API Essentials, so push-based sync is available once access is granted.)
- Shopify OAuth + webhook (`orders/paid`): same logic
- Sync status dashboard: last sync timestamp, errors surfaced plainly

### Reporting
- COGS per unit (materials cost only at MVP; labor/overhead as optional manual add)
- Margin view: COGS vs. sale price per SKU
- Inventory status: stock level + estimated units producible from current materials
- Low-stock email alerts

### Reliability design (the trust seed)
- Every webhook receipt logged with idempotency key — zero double-deductions
- Manual override with full audit trail
- CSV export of all transactions and current inventory state
- Public status page from day one

### Explicitly out of MVP
Mobile app, payment processing, multi-user accounts, FDA compliance, equipment depreciation, tax filing integration.

---

## Pricing Rationale

| Tier | Price | Notes |
|------|-------|-------|
| Free | $0 | 20 materials, 20 products, 1 channel, 30 orders/month |
| Pro | $19/month | Unlimited everything, both channels, COGS reports, CSV export |
| Pro Annual | $180/year ($15/month) | Frames as "less than $200/year vs. $990/year for Stocksmith Indie" |

The $19/month price matches Ardent Seller and undercuts Inventora's $23/month Shopify App Store price ([https://apps.shopify.com/inventora/reviews](https://apps.shopify.com/inventora/reviews)). The annual anchor ("$180/year") is the sharpest verified comparison available: Stocksmith Indie annual is $990/year ([https://stocksmith.io/pricing](https://stocksmith.io/pricing)). The free tier is generous enough to demonstrate reliability before asking for payment, but limited enough (30 orders/month cap) that a real active seller will hit it within weeks. Full rationale in pricing.md.

---

## Market Context

Numbers that are URL-traced from verified sources:

- Etsy marketplace active sellers: 5.6 million as of December 31, 2024 — "our 5.6 million active sellers - defined as sellers who have had a charge or sale in the last 12 months." Source: Etsy, Inc. 2024 Annual Report (Form 10-K), filed with the SEC February 2025 ([https://www.sec.gov/Archives/edgar/data/1370637/000137063725000017/etsy-20241231.htm](https://www.sec.gov/Archives/edgar/data/1370637/000137063725000017/etsy-20241231.htm)). (An earlier draft cited a grabon.com statistics page that does not resolve; replaced with the primary SEC filing, which confirms the same figure.)
- A previously drafted claim that "~80% of Etsy sellers do not use production partners" could not be traced to any primary source (it is not in the 10-K) and has been removed. The share of active sellers who make goods from raw materials is **unverified**.
- Inventora Shopify App Store: 8 reviews, 3.9/5 rating ([https://apps.shopify.com/inventora/reviews](https://apps.shopify.com/inventora/reviews)) — confirms thin competitive field with low review volume.
- Capterra: 245 reviews of Craftybase/Stocksmith at 4.6/5 ([https://www.capterra.com/p/144117/Craftybase/reviews/](https://www.capterra.com/p/144117/Craftybase/reviews/)) — confirms the segment has real software buyers.
- "Craft pricing calculator" and "handmade COGS spreadsheet" templates sell for $5–$20 on Etsy — confirmed evidence that buyers in this segment pay for this work. Source: rescue-etsy-cogs.md (observed during research sweep).

**Inference (labeled as such):** the share of the 5.6M active sellers who make goods from raw materials is unverified, so any TAM figure is inference stacked on inference. Illustratively: if even 2% of active sellers both self-make and would pay for COGS software, that is ~112,000 potential users (~$25M ARR ceiling at $19/month) — a ceiling estimate, not a forecast, resting on an unverified adoption assumption. The defensible claim is narrower and verified: the segment demonstrably pays for this job today (Craftybase/Stocksmith's 245 Capterra reviews; $5–$20 COGS templates selling on Etsy), and the market leader just repriced out of it. A realistic 18-month outcome is 500–1,000 paying users ($114k–$228k ARR) — inference.

---

## Why Now — The Displacement Window

The Craftybase-to-Stocksmith rebrand completed in July 2026. The domain redirect is live. Cheap Stocksmith tiers still exist (Pro $20, Studio $41–49), but none documented to include auto-deduction below Indie $83–99/month. This creates a specific, time-bounded window:

1. Former Craftybase users who relied on auto-deduction at legacy ~$19–24/month pricing must now pay ~$990/year for that feature, drop to a tier without it, or leave. Many are actively searching. *Inference (unmeasured):* the search term "craftybase alternative" appears underserved by authoritative content as of July 2026 — this is an impression from the research sweeps, not a measured SEO statistic.
2. The named complainants on Capterra (Raven T., Liza K., and others) are self-identified, reachable users with documented pain. Direct outreach is viable.
3. FormulaLedger's current gap (no sales channel integration) is closable. Once they add Etsy/Shopify webhooks, the differentiation narrows sharply.

The window is estimated at 12–24 months before either FormulaLedger closes their integration gap or the low end consolidates under one player. This is the honest assessment from the pitch evidence.

---

## Risks (Stated Honestly)

| Risk | Severity | Notes |
|------|----------|-------|
| FormulaLedger adds Etsy/Shopify sync | High | Their $19 price and working BOM engine make them the fastest credible threat. If they ship channel integration before BatchLedger establishes a trust brand, the wedge narrows to marketing only. |
| Thin moat | High | BatchLedger is a CRUD application with webhook handlers. The core technology is entirely replicable by any competent solo developer. There is no IP, no network effect, and no data advantage at launch. The moat must be earned through reliability reputation, not assumed. |
| 12–24 month window | Medium | Low-end consolidation is likely within two years. The company needs a trust brand and switching costs (recipe data, audit history) established before that closes. |
| Ardent Seller adds Shopify + earns reviews | Medium | Ardent Seller already has the right price and a working Etsy integration. Adding Shopify and getting three Shopify App Store reviews would materially reduce BatchLedger's differentiation. |
| Inventora fixes sync bugs | Medium | Their support reputation is badly damaged by named reviews; rebuilding takes years. But a technical bug fix is faster than a trust rebuild. |
| Stocksmith launches a cheap tier with auto-deduction | Low | Stocksmith is clearly moving upmarket (Business at $199/mo, Growth at $349/mo). A downmarket move would undercut their own revenue. Unlikely but not impossible. |

---

## Summary

The pain is real, documented, and current. The market leader repriced the core auto-deduction job out of the sub-$25 segment (gated at $83+/month since the 2024 increase). The affordable alternatives each have a documented fatal flaw: Inventora breaks inventory data; Ardent Seller is Etsy-only with zero independent reviews; FormulaLedger — the sharpest emerging threat — currently lacks sales channel integration. The category's low end is contested by multiple young entrants, which is why the defensible position is reliability + integration, not price alone.

The strongest honest business here is a focused, reliable tool that wins the trust race — not the feature race. The moat is thin and time-bounded. The window is real. The mandate is: ship, establish reliability proof (idempotency guarantees, public status page, responsive support), and earn the "reliable" brand in a category where that word is not yet owned.
