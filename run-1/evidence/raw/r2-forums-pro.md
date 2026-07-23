# Round 2b: Non-Tech Professional Forums — Pain Research
**Date:** 2026-07-23
**Budget used:** ~35 web calls (at limit)

---

## Access Obstacles Encountered

Most target forums were inaccessible:
- **lawnsite.com** → redirects to tollbit.lawnsite.com (paywall), all threads blocked
- **contractortalk.com** → redirects to tollbit.contractortalk.com (paywall), all threads blocked
- **fredmiranda.com** → HTTP 403 on all topic URLs (login required)
- **trustpilot.com** → HTTP 403 on review pages
- **old.reddit.com / www.reddit.com** → Claude Code blocked from fetching
- **hn.algolia.com with dateRange params** → HTTP 400

Accessible sources: Adobe Community, Capterra (as aggregated user-review platform), FamilySearch Community, HN Algolia (without date filters), Fstoppers (article comments only).

---

## Candidate A: Handmade Seller COGS / Recipe Tracking

**Status: VERIFIED (carried from rescue sweep r2, see rescue-etsy-cogs.md)**

Full evidence already documented at:
`run-1/evidence/raw/rescue-etsy-cogs.md`

### Summary of Evidence

**Source 1 — Capterra reviews of Craftybase/Stocksmith** (fetched in prior session):
- Raven T. (Aug 8, 2024): "my price went up x5 (literally my price went up that much)"
- Liza K. (Sep 19, 2025): "Having materials automatically deduct when I sell a product is very basic functionality that I should not have to pay $1,000 / year to have"
- Heather H. (May 11, 2026): "It's a bit expensive for my low-volume knitting hobby sales"
- Maria Luisa C. (Aug 1, 2025): "their basic subscription had less and less basic features with the time"
- Summer R. (Aug 1, 2025): "The monthly subscription is a bit pricey especially with the exchange rate to CAD"
- Sarah C. (Aug 3, 2025): "Cost per month, even on lowest tier plan"

**Source 2 — SoftwareAdvice reviews** (fetched in prior session):
- Anon: "when you sell a product the software will NOT automatically deduct the materials from your inventory UNLESS you pay for a more expensive plan"

**Source 3 — Shopify App Store reviews of Inventora** (fetched in prior session):
- Lost Villages Candle Co. (Oct 2024): "The site duplicates everything and doesn't sync with shopify correctly"
- m.a.b.e.l. (Aug 2024): "no clear-cut way to sync between Inventora and Shopify without TONS of duplicating work"

**Incumbent check:**
- Stocksmith (Craftybase): $99/month min after 5x price hike — unaffordable for micro-sellers
- Inventora ($19/mo): documented sync bugs, overselling incidents, no effective support
- Ardent Seller ($19/mo): full-featured but zero independent review coverage; unknown to market
- Spreadsheets: still dominant duct-tape workaround

**Wedge:** Etsy handmade sellers priced out of Stocksmith's 5x hike need reliable recipe-based COGS under $25/month, but the only $19/month alternatives (Inventora, Ardent Seller) are either too buggy or too unknown to trust.

**Evidence rules:** PASS — 6+ named users, 3 independent sources, verbatim quotes from fetched pages, incumbent check run.

---

## Candidate B: Wedding Photographer CRM / Booking Workflow

**Status: EVIDENCE INSUFFICIENT — not reporting in structured output**

### What Was Found

**Source 1 — Capterra reviews of Dubsado** (fetched this session):
URL: https://www.capterra.com/p/206389/Dubsado/reviews/

- Paola S. (Nov 6, 2025): "Some of the features are clunky like scheduling, form design, and adding multiple links or buttons."
- Amanda H. (Jun 28, 2024): "I think it's very clunky, I struggle understanding what sections or categories to find things"
- Chloe H. (Nov 11, 2024): "Overall it just feels a bit clunky and perhaps too expensive and heavy for my business"
- Sarah J. (Oct 15, 2025): "I wish the calendar function was better, that you could jump to a specific date"
- Tracy H. (Jul 8, 2022): "The only thing I don't use it for is actual booking because the calendar is glitchy"
- Brookelyn P. (Dec 21, 2023): "I wish Dubsado would incorporate if/then options into their workflow"
- Stephanie B. (Aug 7, 2023): "Sometimes there is a lag between my actual email inbox versus the Dubsado inbox"

Context: HoneyBook raised prices 89% in Feb 2025 (Starter: $19→$36/mo), prompting photographer migration. Search results surfaced a Reddit quote "Holy shit that's quite the price hike" attributed to r/weddingphotography but ONLY found via a vendor marketing page (Prospeo) — not directly fetched from Reddit. This quote is NOT valid primary evidence under the rules.

### Why This Fails Evidence Rules

- Only 1 verified primary source (Capterra Dubsado reviews)
- Trustpilot: 403 blocked; Reddit: blocked; fredmiranda.com: 403 blocked
- The 7 Capterra users complain of "clunkiness" and "expensive" — but multiple alternatives exist: Bloom.io, Studio Ninja, 17hats, Sprout Studio, Bonsai, Pixieset (which bundles gallery + simple contracts)
- The specific workflow gap (combined scheduler+contract in one flow) is documented by Dubsado users ("inability to combine a scheduler booking with a contract in one flow — a gap users have requested for years") but this came from a vendor comparison page, not community content

**Verdict:** DROPPED — only 1 valid source; incumbents not verified as failing the specific wedge; need Reddit or Trustpilot quotes.

---

## Candidate C: Client Photo Selection Workflow (Photographers)

**Status: EVIDENCE INSUFFICIENT — not reporting in structured output**

### What Was Found

**Source 1 — Adobe Community thread** (fetched this session):
URL: https://community.adobe.com/t5/lightroom-ecosystem-cloud-based-discussions/need-to-create-a-gallery-that-clients-can-use-to-choose-photos-for-editing/

- cgtway (OG poster): "I'd like to upload 3-5 unedited photos per person into an online gallery (password-protected), and allow them to tick a box on their favourite" — "It's a little faffy, plus this workflow will be impractical for 160 people"
- jonathanb33923262 (May 2026): expressed "the same frustration" and built a custom Lightroom Classic plugin as workaround
- martinl68902366: pointed to Evlaa as third-party solution

### Why This Fails Evidence Rules

- Only 1 source (Adobe Community)
- Incumbents SOLVE this: Pixieset, ShootProof, Pic-Time, SmugMug, Sprout Studio, and even native Lightroom collaborative proofing all offer client photo selection/favourites features
- The "pain" is solved by multiple well-known tools; the poster was unaware of existing solutions
- Not a surviving gap

**Verdict:** DROPPED — incumbent solutions cover this need; only 1 source anyway.

---

## Candidate D: Genealogy Sync Pain

**Status: EVIDENCE INSUFFICIENT — not reporting**

FamilySearch community: 2 users (Christopher51, Graham Buckell) with RootsMagic import failure. Too few users, software bug rather than structural pain, likely to be patched.

---

## Summary

This round found 0 new candidates meeting all evidence rules. The primary target forums (lawnsite, contractortalk, fredmiranda) were all paywalled or auth-gated. The one verified candidate remains the Etsy COGS pain documented in rescue-etsy-cogs.md.

The photographer CRM candidate (Candidate B) is the most promising unverified lead for a future round if Reddit or Trustpilot access becomes available.
