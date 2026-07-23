# Business Pitch: BatchLedger
## Reliable Recipe-Based COGS Tracking for Etsy & Shopify Handmade Sellers

**Date:** 2026-07-23
**Pain evidence status:** VERIFIED (r2-rank-3-narrowed.md, rescue-etsy-cogs.md)

---

## The One-Sentence Pitch

BatchLedger is a $19/mo web app that auto-deducts raw material inventory when a handmade seller gets an Etsy or Shopify order — the one job Stocksmith (Craftybase) just priced out of reach and Inventora keeps breaking.

---

## The Verified Pain

Seven named independent reviewers on Capterra and SoftwareAdvice documented cost and feature-gating pain from Craftybase's rebranding to Stocksmith:

- Raven T. (Capterra, Aug 2024): "legacy clients had quite a shock when the price went up x5 (literally my price went up that much without exaggeration)"
- Liza K. (Capterra, Sep 2025): "Having materials automatically deduct when I sell a product is very basic functionality that I should not have to pay $1,000/year to have"
- Anonymous (SoftwareAdvice): "when you sell a product the software will NOT automatically deduct the materials from your inventory UNLESS you pay for a more expensive plan"

The market leader's effective price for the core feature (recipe auto-deduction / "auto-manufacture") is now $83–99/month at Stocksmith's Indie tier — confirmed by the pricing page structure (BOM and automated production assemblies absent from the cheaper Pro/Studio tiers) and corroborated by the Capterra "$1,000/year" quote. Legacy pricing was approximately $19–20/month; the increase is verified at roughly 5x.

The two affordable alternatives:
- **Inventora ($23/mo on Shopify):** Documented sync bugs. Independent Shopify App Store reviews (3.9/5, 8 reviews) confirm: overselling during flash sales, inventory duplication, support non-response for days. Core business data at risk.
- **Ardent Seller ($19/mo):** Etsy-only. Zero independent software reviews. The "128 reviews" on their site are from the creator's personal Etsy craft shop, not the software.

FormulaLedger ($19/mo) does BOM auto-deduction for candle/soap makers but has no Etsy or Shopify sales channel integration — deduction is manual-batch triggered, not order-event triggered. Zero independent reviews.

**Gap:** Reliability + trust + awareness. Not a product vacuum.

---

## The Company

**BatchLedger** — recipe-based COGS and inventory tracking for Etsy and Shopify handmade sellers, reliably under $25/month.

**Positioning:** The only affordable tool that auto-deducts your materials the moment an Etsy or Shopify order lands — and doesn't break when you have a flash sale.

---

## MVP Scope — Buildable Solo in ~4 Weeks

### Core data model
- **Materials library:** name, cost per unit, unit type (oz, ml, g, each), supplier, current stock quantity
- **Recipe/BOM builder:** link N materials at specified quantities to each product SKU
- **Production log:** optional manual batch logging (produce 20 candles → deduct materials × 20)

### Channel integrations (the differentiator)
- **Etsy OAuth + webhook** (`receipt` create event): on sale → look up product recipe → deduct materials
- **Shopify OAuth + webhook** (`orders/paid`): same logic
- Sync status dashboard: last sync timestamp, any errors surfaced plainly

### Reporting
- COGS per unit (materials cost only at MVP; labor/overhead as optional manual add)
- Margin view: COGS vs. sale price per SKU
- Inventory status: stock level + estimated units producible given current materials
- Low-stock alerts (email notification when material drops below threshold)

### Reliability-first design choices (the moat seed)
- Every webhook receipt logged with idempotency key; zero double-deductions
- Manual override with full audit trail: seller can correct any auto-deduction
- Export: CSV of all transactions and current inventory state (no lock-in signal)
- Status page (public uptime) from day one

### What is explicitly NOT in MVP
- Mobile app
- Payment processing
- Multi-user / team accounts
- FDA compliance (FormulaLedger's lane)
- Equipment depreciation
- Tax filing integration

### Tech stack (1 developer, 4 weeks)
Standard web stack: Next.js or SvelteKit + Postgres + Etsy API (public) + Shopify Partner API (public). No novel technology. Auth via OAuth for both platforms. Hosting on Railway or Render.

---

## Pricing

| Tier | Price | Limits | Notes |
|------|-------|--------|-------|
| Starter (free) | $0 | 20 materials, 20 products, 1 channel (Etsy OR Shopify), 30 orders/month | Better than Inventora's hobby tier (10 orders/month cap); enough for genuine new sellers to experience reliability |
| Pro | $19/month | Unlimited materials, unlimited products, both channels (Etsy + Shopify), unlimited orders, COGS reports, CSV export, email support <24hr SLA | Below Inventora's $23/mo; matches Ardent Seller's $19/mo but adds Shopify + reliability |
| Pro Annual | $15/month ($180/year) | Same as Pro | Anchors at "less than $200/year" vs. Stocksmith's $990/year for the same feature |

**Pricing rationale:**
- The wedge explicitly targets sub-$25/month. $19/month matches Ardent Seller and undercuts Inventora.
- The annual framing ("$180/year vs. $990/year for Stocksmith") is the sharpest comparison available from verified evidence.
- Free tier is deliberately generous enough to demonstrate reliability before asking for payment; it is not so generous it replaces Pro.
- No freemium indefinite Pro — the channel + order limit ensures a real seller will hit it within weeks.

---

## 90-Day GTM Plan (Planning Only — Nothing Published During Planning)

### Days 1–30: Build + Seed Testers

**Goal:** Working MVP with 10 beta sellers actively using it.

**Actions:**
1. Build MVP (weeks 1–4).
2. Draft direct outreach list targeting users who left reviews on Capterra and SoftwareAdvice complaining about Stocksmith pricing. These are self-identified, named users with verified pain. Personal email or LinkedIn message: "I built something that does what you needed for $19/month."
3. Identify 3–5 handmade seller communities to approach post-build: r/Etsy (1.2M members), r/crafts, Etsy Teams forums, Facebook groups (e.g., "Candle Making Business" groups which have documented overlap with the Craftybase user base). No posting during planning.
4. Offer first 20 beta testers: free Pro for 12 months in exchange for honest feedback and permission to use a testimonial if positive.
5. Set up Shopify Partner dashboard and Etsy Developer account — both required before any App Store submission.

### Days 31–60: First Trust Signals

**Goal:** 3+ independent published reviews; listed on Shopify App Store.

**Actions:**
1. Submit to Shopify App Store (review process takes approximately 5–7 business days; submit at day 35).
2. Ask beta testers with Shopify who had positive experiences to leave App Store reviews. Even 3–5 honest reviews changes the competitive picture versus Inventora's 3.9/5.
3. Create a comparison landing page on the product site: "BatchLedger vs. Stocksmith vs. Inventora" — factual, evidence-sourced (all claims citable from Capterra and App Store). This page targets the highest-intent search query in this segment: "craftybase alternative."
4. Direct Craftybase-to-Stocksmith migration outreach: the rebrand in July 2026 is still fresh. Sellers searching for the old product are in the highest-intent window. No paid ads at this stage — identify and contact through community posts about the transition.
5. Build Craftybase/Inventora CSV import — the single highest-friction switching barrier. Remove it.

### Days 61–90: Content and Awareness

**Goal:** Organic discovery pipeline running; 30+ paying Pro users.

**Actions:**
1. Publish one honest Reddit post in r/Etsy documenting the Craftybase→Stocksmith pricing change and what options exist — including BatchLedger as one option. Not promotional; factual. The post serves the community first.
2. Reach out to 5 handmade business YouTube/TikTok creators (subscriber counts 5k–100k) who cover Etsy seller finance topics. Offer free Pro access for an honest review video. Do not script them.
3. Publish SEO-targeted blog content: "Craftybase alternative 2026," "Stocksmith too expensive," "Inventora alternatives for Shopify sellers." These are zero-competition long-tail searches where a single high-quality page can rank.
4. Email list: capture from free tier sign-ups. Send a monthly "what we fixed this month" email — the explicit signal of reliability that differentiates from Inventora's silence-then-overselling pattern.
5. Evaluate Etsy App Store listing (if the Etsy developer program supports it) as a second discovery channel for the Etsy-only persona.

**What NOT to do in 90 days:**
- No paid advertising before product-market fit signal (30+ paying users)
- No press outreach — too early; journalists ignore sub-100-user tools
- No affiliate program — premature complexity
- No enterprise/team features — abandons the micro-seller focus

---

## Moat — Honest Assessment

**This is a thin moat. That is the honest answer.**

BatchLedger is a CRUD application with Etsy and Shopify webhook handlers. The core technology is entirely replicable. Any competent solo developer can build the same thing. The competitive moat does NOT come from technology.

**What is real:**

1. **Trust brand built through reliability.** Inventora's core failure is not bugs per se — it's that bugs destroy inventory data, and sellers lose money on overselling. A tool that ships with idempotency guarantees, a public status page, and a transparent audit trail earns the word "reliable" in a category where that word is not yet owned. This is achievable in 6–12 months and is the only genuine differentiation available at this price point.

2. **Data switching cost.** A seller who has entered 50 recipes and 200 material transactions over 6 months will not migrate without a strong reason. The switching cost is real, even if low by SaaS standards. It compounds with time.

3. **Migration tooling as an acquisition wedge.** The best-in-class Craftybase/Inventora CSV import is not a moat, but it is a one-time acquisition tool that no competitor has bothered to build well. It removes the single largest barrier for the highest-intent users (those leaving Inventora or forced off Stocksmith).

4. **Founder speed and focus.** The segment is narrow enough that a single founder can know every active community, respond to every support ticket personally, and ship feature requests within days. Large or VC-funded tools cannot do this. Stocksmith's $99/month minimum exists partly because they are trying to build for enterprise-scale customers. That creates permanent white space below $25/month for a focused operator.

5. **SEO timing window.** The Craftybase→Stocksmith rebrand in July 2026 is recent. "Craftybase alternative" searches are currently underserved by authoritative content. This window is 6–12 months before existing SEO players fill it.

**What is NOT a moat:**
- The $19 price point — Ardent Seller and FormulaLedger are already there
- The recipe/BOM feature set — FormulaLedger already has it; Inventora already has it
- Etsy integration — Ardent Seller has it; Inventora has it
- Shopify integration — Inventora has it

**Real risk:** FormulaLedger adds Etsy/Shopify sync (their current gap). Ardent Seller adds Shopify and gets independent reviews. Inventora fixes its sync bugs. Any of these materially reduces the wedge. The opportunity window is 12–24 months before the low end consolidates.

---

## Market Size Context (From Verified Evidence)

- Etsy: approximately 5.6 million active sellers as of 2024 (sourced from rescue-etsy-cogs.md, citing grabon.com)
- Approximately 80% do not use production partners (suggesting self-made items requiring BOM tracking)
- Conservative 5% software adoption at $19/month → 224,000 potential users → approximately $51M ARR at scale (derived estimate; not a verified number)
- Template market signal: "craft pricing calculator" and "handmade COGS spreadsheet" templates sell for $5–$20 on Etsy — confirmed evidence of buyers who pay for this work

**Reality check:** Getting to 1,000 paying users ($228k ARR at $19/month) is a realistic 18-month outcome if the reliability brand is established. 224,000 users is a ceiling, not a forecast.

---

## Known Risks

| Risk | Severity | Mitigation |
|------|----------|------------|
| FormulaLedger adds Etsy/Shopify sync | High | Ship and build trust brand before they do; price parity means trust wins |
| Ardent Seller adds Shopify + gets reviews | Medium | Same mitigation; awareness race is winnable first-mover if Ardent Seller stays quiet |
| Inventora fixes sync bugs + cuts price | Medium | Their support reputation is deep in the hole; rebuilding trust takes years |
| Stocksmith launches a cheap tier with auto-deduction | Low | Unlikely; they are clearly moving upmarket (Business/Growth tiers) |
| Low end is too crowded at $19/mo to acquire any users | Medium | The category is under-marketed; acquisition cost is near-zero via community + SEO |

---

## Summary

The pain is real, documented, and current. The market leader abandoned the segment 12 months ago with a 5x price hike. The two affordable alternatives each have a documented fatal flaw: Inventora breaks inventory data; Ardent Seller has no Shopify integration and no proof of reliability. FormulaLedger is the sharpest emerging threat but does not yet bridge to actual sales channels.

The strongest honest business here is a focused, reliable, fast-to-market tool that wins the trust race — not the feature race. BatchLedger at $19/month with verified reliability, a public status page, responsive support, and a well-executed "craftybase alternative" SEO page has a credible path to 500–1,000 paying users within 18 months without venture funding.

The moat is thin and time-bounded. The window is real. Enter now or wait for FormulaLedger to close their integration gap.

---

*Sources: All pain evidence from r2-rank-3-narrowed.md and rescue-etsy-cogs.md. Pricing figures from verified URLs: stocksmith.io/pricing, apps.shopify.com/inventora/reviews, ardentseller.app, formulaledger.com/pricing, inventora.com/pricing-plans. All quotes verbatim from fetched pages.*
