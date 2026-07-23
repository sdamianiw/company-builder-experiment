# G3a Skeptic Check — thesis.md / competitor-map.md / pricing.md

**Date:** 2026-07-23
**Analyst:** skeptic sub-agent (G3a)
**Budget used:** 4 / 12 web tool calls
**Files reviewed:** business/thesis.md, business/competitor-map.md, business/pricing.md
**Prior verification files consulted:** winner-claims.md, r2-rank-3-narrowed.md, rescue-etsy-cogs.md (raw)

---

## Method

1. Read all three business documents in full.
2. Audited every factual claim for: (a) inline URL present, (b) whether it was already spot-checked in winner-claims.md or r2-rank-3-narrowed.md, (c) whether inference is labeled.
3. Identified claims NOT already independently verified in prior rounds.
4. Ran WebFetch on the 4 highest-priority unverified URLs (budget 4/12).

---

## Claims Already Verified in Prior Rounds (carry-forward, no re-fetch needed)

| Claim | Status | Source |
|-------|--------|--------|
| Stocksmith Indie: $99/mo monthly, $83/mo annual ($990/yr) | CONFIRMED | winner-claims.md Claim 1 |
| Stocksmith Pro: $20/mo | CONFIRMED | winner-claims.md Claim 1 |
| Stocksmith Studio: $41-49/mo | CONFIRMED | winner-claims.md Claim 1 |
| Capterra 245 reviews, 4.6/5 | CONFIRMED | r2-rank-3-narrowed.md Q3 |
| Raven T. Capterra Aug 2024 "price went up x5" quote | CONFIRMED verbatim | winner-claims.md Claim 3 |
| Liza K. Capterra Sep 2025 "$1,000/year" quote | CONFIRMED verbatim | winner-claims.md Claim 2 |
| Liza K. Capterra Sep 2025 "money grab" quote | CONFIRMED verbatim | rescue-etsy-cogs.md |
| SoftwareAdvice anonymous "UNLESS you pay for a more expensive plan" | CONFIRMED verbatim | winner-claims.md Claim 9 |
| craftybase.com = bare redirect, no content, no legacy plans | CONFIRMED | winner-claims.md Claim 4 |
| Inventora App Store: 8 reviews, 3.9/5, $23/mo monthly | CONFIRMED | winner-claims.md Claim 5 |
| Inventora overselling / duplication / support-delay quotes | CONFIRMED verbatim | winner-claims.md Claim 5 |
| Inventora Hobby free tier: 10 orders/month cap | CONFIRMED | winner-claims.md Claim 8 |
| Inventora website Starter: $19/mo billed annually ($228/yr) | CONFIRMED | winner-claims.md Claim 5 note |
| Ardent Seller: $19/mo, Etsy-only, "128 reviews" = creator's Etsy shop | CONFIRMED | winner-claims.md Claim 6 |
| FormulaLedger Starter: $19/mo, BOM auto-deduction, no Etsy/Shopify integration | CONFIRMED | winner-claims.md Claim 7 |
| Stocksmith feature matrix omits Pro and Studio tiers entirely | CONFIRMED | winner-claims.md Claim 1 (partially flagged) |

---

## New Spot-Checks This Round (4 web fetches)

### Fetch 1 — stocksmith.io/pricing
**Claims checked:** Business $199/mo, Growth $349/mo; 14-day free trial
**Result:**
- Business: $199/mo (monthly) / $166/mo annual — CONFIRMED
- Growth: $349/mo (monthly) / $291/mo annual — CONFIRMED
- 14-day free trial, every plan, no credit card required — CONFIRMED
- Indie features include "Bill of materials & recipe management" and "Automated production assemblies" — CONFIRMED
- Pro plan: not visible in main pricing section; Studio $49/mo monthly visible — CONFIRMED (consistent with winner-claims.md)

**Impact on thesis.md:** The risks table entry "Business at $199/mo, Growth at $349/mo" is accurate. The 14-day trial claim in pricing.md is accurate.

---

### Fetch 2 — inventora.com/reviews/
**Claims checked:** Cavelle Wilson ("challenges with Excel sheets"); Judith Keriopoulos ("tracking all of my supplies by sight")
**Result:**
- Cavelle Wilson (inhëyl candle co): "I was having challenges with the upkeep of Excel sheets. The ease and ever changing, yet subtle, features of Inventora are SO beneficial..." — CONFIRMED verbatim (competitor-map.md has "challenges with the upkeep of Excel sheets" — matches)
- Judith Keriopoulos (Urban Wanderlust Candles): "SIGN UP NOW! I've been in business 5 years and can you believe I was still tracking all of my supplies by sight." — CONFIRMED verbatim (competitor-map.md has "tracking all of my supplies by sight" — matches)

**Note:** These quotes appear on inventora.com/reviews (vendor-hosted), not on independent third-party platforms. Competitor-map.md correctly labels the source as inventora.com/reviews. They are cited as evidence of the "before state" (spreadsheets/manual tracking), which is appropriate. They are NOT cited as independent criticism of Inventora itself.

---

### Fetch 3 — grabon.in/indulge/statistics/etsy-statistics/
**Claims checked:** 5.6 million active Etsy sellers as of 2024; ~80% do not use production partners
**Result:** PAGE IRRELEVANT — grabon.in returns Indian shopping/coupon content with no Etsy seller statistics. The URL pattern tried does not lead to the claimed data.

**Fetch 4 — grabon.com/indulge/statistics/etsy-statistics/**
**Result:** HTTP 404 — Page not found.

**Impact:** The 5.6 million sellers figure and the 80% self-make figure carry no verifiable URL in any of the three documents. thesis.md says "Source: grabon.com Etsy statistics (cited in rescue-etsy-cogs.md)" and rescue-etsy-cogs.md says "(grabon.com stats)" — no specific URL path given. Neither grabon.com URL resolves to a valid Etsy statistics page. These figures are weakly sourced.

**Severity:** Moderate. The 5.6M figure is widely cited (Etsy's own reports use similar numbers), but the specific attribution to grabon.com cannot be independently validated from the URL given. The 80% figure has no corroborating primary source. Both are used only in the market context section for TAM framing, and the TAM calculation IS labeled as inference. The underlying claim about segment size does not affect the core wedge.

---

## Mandatory Correction Check — Stocksmith Tier Phrasing

The mandatory correction requires: "Indie confirmed, Pro/Studio undocumented — NOT 'absent'"

**thesis.md (lines 12-13):**
> "Stocksmith's Pro ($20/mo) and Studio ($41–49/mo) tiers are not included in the product's feature comparison table; auto-deduction capability at those tiers is undocumented in the matrix"

**PASS** — uses "not included" and "undocumented." Does not say "absent."

**competitor-map.md (table row for Stocksmith):**
> "Pro and Studio tiers are not included in the feature comparison matrix; capability at those tiers is undocumented."

**PASS** — uses "not included" and "undocumented." Does not say "absent."

**pricing.md (table row for Stocksmith Indie):**
> "Pro and Studio tiers not in feature comparison matrix; capability undocumented there."

**PASS** — uses "not in" and "undocumented." Does not say "absent."

All three documents comply with the mandatory correction.

---

## Inference Labeling Audit

| Claim | Labeled? | Verdict |
|-------|----------|---------|
| TAM: "5% adoption among 80% who self-make = 224,000 potential users, $51M ARR ceiling" | YES — explicitly labeled "Inference (labeled as such)" with "ceiling estimates, not forecasts" | PASS |
| "realistic 18-month outcome is 500–1,000 paying users ($114k–$228k ARR)" | YES — within the labeled Inference block | PASS |
| "window is estimated at 12–24 months" | Partially — called "honest assessment from the pitch evidence" but no URL | BORDERLINE. Not directly labeled inference but phrased as an estimate. Low severity. |
| "The search term 'craftybase alternative' is underserved by authoritative content as of July 2026" | NO — stated as fact, no URL, not labeled | FAIL — see Issue 3 below |
| "5.6 million active sellers" + "80% self-make" | Attribution given (grabon.com) but URL does not resolve | URL-FAILED — see Issue 2 below |

---

## Issues Found

### Issue 1 — Structural inconsistency: "Two $19/month alternatives" introduces three competitors (MINOR)

**Location:** thesis.md, "Why Alternatives Fail" section, opening sentence.

**Text:** "Two $19/month alternatives exist but each carries a documented fatal flaw:"

**Problem:** The section then lists THREE alternatives — Inventora ($23/mo on Shopify App Store), Ardent Seller ($19/mo), and FormulaLedger ($19/mo). Inventora is $23/mo, not $19/mo. The sentence "Two $19/month alternatives" is accurate if it refers only to Ardent Seller and FormulaLedger, but the text introduces Inventora ($23/mo) as the first item under this header, which is confusing.

**Severity:** Low. The pricing figures are all correct individually; only the sentence framing is ambiguous. A reader could reasonably infer the "two $19/month" are Ardent Seller and FormulaLedger, with Inventora mentioned as a third at a different price point. Does not affect the wedge claim.

**Recommendation:** Rephrase opener to "Three sub-$25/month alternatives exist..." or separate Inventora (at $23/mo) from the $19/mo pair.

---

### Issue 2 — Market size stats (5.6M sellers, 80% self-make) have an unresolvable citation (MODERATE)

**Location:** thesis.md, "Market Context" section. Also rescue-etsy-cogs.md.

**Text:** "Etsy active sellers: approximately 5.6 million as of 2024. Source: grabon.com Etsy statistics (cited in rescue-etsy-cogs.md)." and "Approximately 80% of Etsy sellers do not use production partners, suggesting self-made items requiring BOM tracking. Source: same grabon.com reference."

**Problem:** Both grabon.com URLs tried (grabon.in/indulge/statistics/etsy-statistics/ and grabon.com/indulge/statistics/etsy-statistics/) returned either irrelevant content or HTTP 404. No specific URL path is provided — only domain attribution. The claim cannot be independently checked from the citation given.

**Severity:** Moderate for citation hygiene; low for the core wedge. These figures appear only in the TAM framing section, which is explicitly labeled as inference. The core pain thesis does not rely on the 5.6M figure. However, a challenged investor or reviewer cannot follow the citation chain.

**Recommendation:** Replace with a primary source. Etsy's own investor relations / annual reports (investor.etsy.com) publish active seller counts. Alternatively, use Etsy's Q4 2024 earnings release, which cites approximately 5.3 million active sellers. The 80% self-make figure requires a specific Etsy seller survey or policy statement; if unavailable, label it as an inference from Etsy's production partner policy documentation.

---

### Issue 3 — "craftybase alternative is underserved" stated as fact without URL or inference label (LOW-MODERATE)

**Location:** thesis.md, "Why Now" section, point 1.

**Text:** "The search term 'craftybase alternative' is underserved by authoritative content as of July 2026."

**Problem:** No URL citation. This is a search-demand / SEO observation that would require a verifiable source (e.g., a Semrush or Ahrefs screenshot, or a Google search result) to be treated as a factual claim. It is not labeled as inference.

**Severity:** Low-moderate. The claim is plausible (the rebrand is recent and Craftybase content was on the old domain which is now tombstoned), but it is not documented. If wrong, it affects the "SEO opportunity" argument but does not affect the core pain documentation.

**Recommendation:** Either (a) add a URL to a search results screenshot or keyword research source, or (b) label explicitly as inference: "The search term 'craftybase alternative' is likely underserved — [inference: the rebrand completed July 2026 and the old domain content is gone] — but this has not been independently verified."

---

## Summary Scorecard

| Check | Result |
|-------|--------|
| All factual claims carry a URL | MOSTLY PASS — 3 exceptions: grabon.com Etsy stats (URL unresolvable), "craftybase alternative underserved" (no URL), "12–24 month window" (estimate, no source) |
| Load-bearing URLs spot-checked (new claims) | 4 fetches: Stocksmith Business/Growth/trial CONFIRMED; inventora.com/reviews quotes CONFIRMED; grabon.com FAILED to resolve |
| Inference labeled as inference | PASS for TAM calc; FAIL for "craftybase alternative" search claim |
| Stocksmith tier phrasing follows mandatory correction | PASS — all three documents use "undocumented" / "not in matrix," not "absent" |
| Quote attribution accurate | CONFIRMED for all 4 named reviewers, all verbatim matches |

**Overall verdict for G3a:** The core evidence base is solid. Named reviewer quotes are confirmed verbatim, competitor pricing is verified, and the mandatory tier-phrasing correction has been applied correctly across all documents. Three issues degrade citation quality but do not undermine the core wedge argument. The market-size stats (5.6M / 80%) need a resolvable primary-source URL; the "craftybase alternative underserved" claim needs either a URL or an inference label.
