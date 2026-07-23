# Naming Research — BatchLedger Project

**Date:** 2026-07-23  
**Analyst:** Claude (automated)  
**Incumbents excluded from collision:** Stocksmith (Craftybase), Inventora, Ardent Seller, FormulaLedger

---

## Criteria

| Criterion | Description |
|-----------|-------------|
| Descriptive | Name communicates recipe-based COGS tracking for handmade sellers |
| Spellable | No ambiguous spelling; no homophones that split SEO |
| No incumbent collision | Does not share a word root with the four named competitors |
| .com available | RDAP HTTP 404 at rdap.verisign.com (404 = available, 200 = taken) |

---

## Candidate Table

| # | Name | .com RDAP Status | HTTP Code | Timestamp (UTC) | Collision Scan | Notes |
|---|------|-----------------|-----------|-----------------|----------------|-------|
| 1 | **BatchLedger** | TAKEN | 200 | 2026-07-23T RDAP record: registered 2025-11-08, expires 2026-11-08, registrar NameSilo LLC | N/A — taken | Working name; domain already registered by a third party |
| 2 | **RecipeLedger** | TAKEN | 200 | 2026-07-23T RDAP record: expires 2026-11-30, status client-delete-prohibited | N/A — taken | Strong descriptor; not available |
| 3 | **CraftLedger** | TAKEN | 200 | 2026-07-23T RDAP record: expires 2026-08-07 | N/A — taken | Generic; also taken |
| 4 | **RecipeCOGS** | **AVAILABLE** | **404** | 2026-07-23T — no RDAP record found at verisign | No known software product with this name (WebSearch budget exhausted; based on training knowledge through Aug 2025 — no product named RecipeCOGS identified) | Finalist |
| 5 | **BatchCOGS** | **AVAILABLE** | **404** | 2026-07-23T — no RDAP record found at verisign | No known software product with this name (same caveat) | Finalist |

> **RDAP receipts:** All checks performed against `https://rdap.verisign.com/com/v1/domain/<name>.com` on 2026-07-23. HTTP 404 = no registration record = available. HTTP 200 = active registration record = taken. WebSearch collision scans were blocked by session budget exhaustion; collision verdicts for RecipeCOGS and BatchCOGS are based on model training knowledge (cutoff Aug 2025) and should be independently verified via a trademark search (USPTO TESS) before registering.

---

## RDAP Raw Evidence

```
batchledger.com    → HTTP 200  (registered 2025-11-08, expires 2026-11-08, NameSilo)
recipeledger.com   → HTTP 200  (expires 2026-11-30, client-delete-prohibited)
craftledger.com    → HTTP 200  (expires 2026-08-07)
recipecogs.com     → HTTP 404  (no record — AVAILABLE)
batchcogs.com      → HTTP 404  (no record — AVAILABLE)
```

---

## Recommendation: **BatchCOGS**

**Domain:** batchcogs.com — AVAILABLE (RDAP 404, verified 2026-07-23)

### Rationale

**Why BatchCOGS over RecipeCOGS:**

1. **Seller vocabulary match.** Handmade sellers describe their production in batch terms: "I made a batch of 50 candles," "a batch of lip balm." The word "batch" maps to how sellers think about their work, not just the internal data model (recipes/BOMs). It signals that the product is built for their workflow, not for accountants.

2. **Differentiates from FormulaLedger.** FormulaLedger uses "formula" (their lane is FDA-adjacent cosmetics). RecipeCOGS would put the product in the same semantic territory. BatchCOGS is distinct.

3. **COGS is the search term.** Sellers who have outgrown spreadsheets search "COGS calculator," "COGS tracker for Etsy." Embedding COGS in the name targets the highest-intent query directly, and "BatchCOGS" reads as a named product in that search context.

4. **Short and spellable.** 9 characters, two common English words, no ambiguous vowels or consonants.

5. **No incumbent overlap.** None of the four incumbents (Stocksmith, Inventora, Ardent Seller, FormulaLedger) contain "batch" or "COGS."

**Caveat before registering:** Run a USPTO TESS search for "BatchCOGS" and "Batch COGS" in IC 42 (software as a service). The collision scan via WebSearch could not be completed in this session.

---

## Dropped Candidates

| Name | Reason dropped |
|------|----------------|
| BatchLedger | .com taken by third party (registered Nov 2025) |
| RecipeLedger | .com taken |
| CraftLedger | .com taken; "Craft" is generic and SEO-weak |
| RecipeCOGS | Available but "recipe" is closer to FormulaLedger's positioning; second choice if BatchCOGS fails trademark |
| YieldLedger | .com taken (checked, expires Jan 2027); "yield" is ambiguous outside farming/finance |
| BatchBooks | .com taken (expires Feb 2027); "Books" implies full accounting, overclaims MVP scope |
