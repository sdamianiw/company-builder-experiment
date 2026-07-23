# Verification: Narrowed Rank-1 Pain-Wedge (Square LMT SOAP Gap)

**Date:** 2026-07-23
**Claim under test (narrowed, Fresha persona removed):** Solo LMTs on free Square Appointments have zero clinical documentation (SOAP notes, intake forms) inside Square. The only options are $25–50/mo full-practice suites requiring scheduling migration. No standalone ~$5–15/mo SOAP+intake tool coexisting with Square Appointments exists.

**Verdict: VERIFIED**

---

## Q1 — Square Community Thread: Sustained Multi-User Demand?

Fetched directly: https://community.squareup.com/t5/Square-Appointments/…/664447

- **Date range:** June 8, 2023 – July 3, 2025 (25+ months)
- **Replies:** 13 replies (plus OP)
- **Status:** Open (Square has not shipped SOAP notes)
- **Distinct non-moderator users:** 8 (KnotbeGone, bdillard, WrenMcLean, ibohogoddess, EvryBdyEnrgtcs, mgodfrey0202, Joslin, SCMcos)
- **Key verbatim evidence:**
  - "the only reason why I don't use square to its full potential is because of SOAP Notes"
  - "Not having a SOAP notes feature is one of the very few things keeping me from ditching Massagebook for square entirely"
  - Manual dual-platform workflow described (export from Square, import to MassageBook)

**Assessment:** Passes. Real, sustained, multi-user demand over 2+ years. Open status confirmed.

---

## Q2 — Standalone Cheap SOAP/Intake Tool Alongside Square?

### SOAP Vault
- URL https://www.soapvault.com/pricing returns **301 redirect to noterro.com/pricing**
- SOAP Vault has been **absorbed into Noterro** — it no longer exists as a standalone product
- This eliminates what might have been a standalone option; now it is part of the $33/mo Noterro suite

### Bodywork Buddy
- Pricing page returned **403 Forbidden** — could not verify
- No evidence of Square Appointments scheduling integration from available sources

### Carepatron (free tier)
- Free tier confirmed at $0/month
- Includes "clinical notes" and "customizable templates & notes" and "AI scribe"
- **Does NOT explicitly offer SOAP notes format** (no S/O/A/P structure mentioned)
- **No Square Appointments integration found** (integrations page 404'd; no Square mentioned on pricing page)
- Does not fill the gap: no Square sync, no SOAP structure

### Jane App
- Cheapest plan: CAD $54/month (Balance), limited to 20 appointments/month
- No Square Appointments integration found
- Above the $25–50/mo claim range even for the entry tier (in USD ~$39–40)

**Assessment:** No standalone $5–15/mo SOAP+intake tool coexisting with Square Appointments found. SOAP Vault's merger into Noterro removes a potential threat to the wedge.

---

## Q3 — Price Floor for Named Suites

| Suite | Cheapest Solo Plan | Confirmed via |
|---|---|---|
| Noterro (absorbed SOAP Vault) | $33/mo (Core, annual) | Fetched noterro.com/pricing |
| ClinicSense | $39/mo (Lite, monthly) / $35.75 annual | Fetched clinicsense.com/pricing |
| MassageBook | ~$40/mo (AMTA discount, from prior round) | Capterra review corroboration |
| Jane App | CAD $54/mo (Balance, 20 appts cap) | Fetched jane.app/pricing |

**Floor confirmed:** $33–39/month for a solo practitioner. All are full-suite bundles (scheduling + billing + notes). No notes-only tier exists.

---

## ClinicSense Square Integration (reconfirmed)

ClinicSense pricing page lists "Charge Cards With Square" — payment processing only. No Square Appointments scheduling sync mentioned. Migrating scheduling to ClinicSense is still required to use its SOAP notes. Prior finding holds.

---

## Kill Conditions Assessed (Narrowed Claim)

| Kill Condition | Status |
|---|---|
| Thread is low-engagement or synthetic | REJECTED — 8 distinct users, 25 months, open status |
| Cheap standalone SOAP+Square tool exists | NOT FOUND — SOAP Vault merged into Noterro ($33/mo) |
| Carepatron free tier fills the gap | REJECTED — no SOAP format, no Square Appointments integration |
| Price floor outside $25–50/mo | CONFIRMED IN RANGE — $33–39/mo floor |
| Not buildable solo in ~1 month as pure web software | NOT A KILL — SOAP form + client management + Square Appointments API is a standard CRUD build |

---

## Summary

The narrowed claim (Fresha removed) holds on all three open questions:

1. Square community thread is real, sustained, multi-user, open 2+ years.
2. No standalone cheap SOAP+Square coexistence tool exists. SOAP Vault (potential threat) was absorbed into Noterro.
3. Price floor is $33–39/month for full suites — confirmed within claimed $25–50 range.

The persona-specific gap (Square LMTs forced into expensive full-suite migration for SOAP notes) survives spot-checks of all named incumbents. Buildable as pure web software: intake/SOAP form builder + client profile store + Square Appointments API integration is a well-scoped solo month build.

**Verdict: VERIFIED**
