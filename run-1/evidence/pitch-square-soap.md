# Pitch: SoapFlow — SOAP Notes for Square Appointments

**Date:** 2026-07-23
**Status:** First-draft pitch from verified wedge

---

## The Wedge (Verified)

Solo licensed massage therapists (LMTs) running independent practices on Square Appointments have zero clinical documentation inside Square. Square Appointments is free and handles scheduling and payments, but it has no SOAP note editor, no intake form builder, and no client health history storage.

The only existing options are full practice-management suites — Noterro ($33/mo Core, annual), ClinicSense ($39/mo Lite, monthly), MassageBook (~$40/mo with AMTA discount) — none of which have a SOAP-notes-only tier. All require migrating scheduling away from Square Appointments, which these therapists explicitly refuse to do.

Evidence is sustained and independent: an Open Square Community feature-request thread running from June 2023 to July 2025 accumulated 8 distinct users over 25 months, still unshipped by Square. Direct verbatim quotes:

- "the only reason why I don't use square to its full potential is because of SOAP Notes"
- "Not having a SOAP notes feature is one of the very few things keeping me from ditching Massagebook for square entirely"
- "I have to manually export...import it to MassageBook...I don't like working twice"

SOAP Vault, the one standalone SOAP tool that existed, was absorbed into Noterro in 2025 (soapvault.com/pricing now 301-redirects to noterro.com/pricing). No cheap standalone option remains.

---

## The Business

**Name:** SoapFlow (domain research required; soapflow.io / soapnotes.app as alternatives)

**One-liner:** Clinical documentation — SOAP notes and intake forms — built for solo massage therapists on Square Appointments, for $9/month, no scheduling migration required.

---

## Product — MVP (One Solo Developer, ~4 Weeks)

**What it does:** Sits alongside Square Appointments. Therapist stays on Square for booking and payments. SoapFlow adds the clinical layer Square will never build.

**Week 1 — Square sync + client roster**
- OAuth connection to Square Appointments API
- Pull upcoming appointments and client names/contact info into SoapFlow
- Create client profile: contact info, health history fields, note timeline

**Week 2 — SOAP note editor**
- Per-appointment SOAP note: Subjective / Objective / Assessment / Plan text fields
- Timestamps, draft/finalized states, plain-text save to Supabase
- Client timeline view: all notes for a given client in chronological order

**Week 3 — Digital intake form**
- Default template: health history, contraindications, areas of concern/focus, pressure preference, consent checkbox (not legally binding e-sign at MVP — a checkbox with timestamp is sufficient for most solo LMTs)
- Shareable intake link sent by email; client fills on phone before appointment
- Submitted intake attached to client profile automatically

**Week 4 — Export + billing + launch prep**
- PDF export of individual SOAP notes and client intake history (for insurance audit, personal records, client handoff)
- Stripe subscription billing (Solo plan $9/mo or $79/year)
- Account settings, Square OAuth revoke/reconnect flow
- Dark-launch landing page; first 8 beta outreach emails drafted

**Stack:** Next.js + Supabase (Postgres + Auth) + Square API (OAuth) + Stripe + Vercel. All standard web stack. No mobile app, no AI, no payment rails beyond Stripe subscription billing.

**Not in MVP:** legally binding e-sign, insurance billing (CMS-1500), two-way write-back to Square, body chart diagrams, team accounts, telehealth, scheduling features of any kind.

---

## Pricing

The gap is between $0 (Square free plan) and $33 (Noterro, cheapest full suite). SoapFlow owns $9.

| Tier | Price | Limits | Goal |
|------|-------|--------|------|
| Free | $0/mo | 3 clients, 10 SOAP notes total, 1 intake template | Remove friction to try; not enough to run a practice |
| Solo | $9/mo or $79/year (~$6.58/mo) | Unlimited clients, unlimited SOAP notes, 5 intake templates, PDF export, Square sync | The only tier that matters at launch |

**Rationale for $9:** A therapist paying $40/mo for MassageBook solely for SOAP notes will switch at $9 — it is less than a quarter of their current spend. $79/year annual creates commitment and reduces churn. No team tier at launch; focus is solo practitioners exclusively. Team pricing can follow after 200 paying solo users.

**Rationale against free-only:** Clinical documentation software with zero revenue has no incentive for security, uptime, or longevity — the exact things LMTs need most (notes can be subpoenaed; they own them for years). Charging $9 signals permanence and professionalism. It is also the reason SOAP Vault eventually consolidated: free clinical tools do not survive.

---

## 90-Day GTM Plan (Planning Only — Nothing Published)

### Days 1–14: Build and Identify

- Build the product (4-week MVP timeline running in parallel)
- Enroll in Square Developer program; get OAuth app reviewed (required for production Square API access — allow 1–2 weeks for review)
- Do not publish anything; dark-launch landing page only
- Map the 8 named Square Community users by username and research their public social/web presence: KnotbeGone, bdillard, WrenMcLean, ibohogoddess, EvryBdyEnrgtcs, mgodfrey0202, Joslin, SCMcos — these are the first beta cohort
- Identify 3–5 active LMT Facebook groups (Massage Business Owners, LMT Entrepreneurs, AMTA member group) and observe tone and norms before posting anything

### Days 15–28: Private Beta Prep

- Draft DM/email for the 8 Square Community users: personal, specific ("I read your post from [date], I built a thing, would you try it?"), offer free Solo plan for life in exchange for 20-minute feedback call
- Draft 3 Facebook group posts (value-first, problem-oriented, not promotional: "built this after seeing X" framing)
- Draft Product Hunt launch post (do not submit yet)
- Write Square Community reply to the original SOAP notes thread — factual, not spammy, link to product — post only when product is live and Square OAuth is approved

### Days 29–60: Private Beta

- Email/DM the 8 Square Community users; target 3–5 active beta users from this cohort
- Post in 2–3 Facebook groups, one post each, spaced 1 week apart
- Goal: 10 free signups + 3 paying customers by end of Day 60
- Run feedback calls; fix the top 3 reported friction points before any public launch

### Days 61–90: Paid Acquisition Test

- Run $200 Google Ads test on keywords: "SOAP notes massage therapists," "Square appointments SOAP notes," "clinical notes massage therapist software" — measure CPC and trial-to-paid conversion before scaling
- Reply to the Square Community thread with a factual post: product exists, here is the link, relevant to the original request — organic, on-topic, not spam
- Reach out to AMTA and ABMP community managers with a brief pitch for potential newsletter mention or review
- Target metric for Day 90: 20 paying Solo customers at $9/mo = $180 MRR. This is proof of concept, not scale — enough to validate willingness to pay and continue building.

**What not to do in 90 days:** paid social ads (LMT Facebook audience is small and ad costs will be high relative to $9 ARPU); partnerships with schools or chains (wrong customer segment); any team/enterprise pitch.

---

## Moat — Honest Assessment

**Short answer: thin at launch, real if executed with discipline.**

This is not a technical moat. It is an early-mover-in-a-narrow-niche moat. The honest claims:

**1. Focus and speed (real, temporary)**
Square-first clinical documentation for LMTs. Not a generic note tool, not a Noterro competitor. A full-suite incumbent expanding down-market would need 3–6 months to build a Square OAuth integration, price it reasonably, and market it to solo LMTs. That window is the execution moat.

**2. Trust as a switching cost (real, durable)**
Clinical notes are legally sensitive. They can be subpoenaed. LMTs are personally liable for them. A product that stores them securely, exports them cleanly, and makes it obvious the therapist owns and can retrieve their data forever earns durable stickiness. Trust is not a technical moat but it is a customer-behavior moat: people do not move their clinical records lightly.

**3. Square API depth (real, accrues over time)**
MVP: read appointments, display in SoapFlow. Month 3+: write intake form completion status back to Square appointment notes field. Month 6+: trigger intake form link automatically when Square books an appointment. Each API integration layer is a feature a generic tool cannot replicate without investing in Square-specific development. The deeper the integration, the harder to displace.

**4. Community reputation in a small profession (real, fragile)**
The 8 users in the Square Community thread are word-of-mouth nodes in a tight professional community. AMTA and ABMP both run active member communities. One genuinely satisfied solo LMT who posts "I finally left MassageBook for SoapFlow and saved $30/month" in a Facebook group of 5,000 LMTs is worth more than $500 in Google Ads.

**What this moat is not:** network effects, data moat, patent protection, regulatory moat, enterprise lock-in.

**Kill conditions to monitor actively:**
- Square ships SOAP notes natively (watch Square Developer blog and Square Community for announcements — this is the only true kill condition)
- Noterro releases a free Square Appointments sync tier explicitly targeting this gap
- A well-funded entrant builds a Square-native clinical documentation app

---

## Market Size — Honest Assessment

The AMTA publishes annual industry data on the US massage therapy profession. Solo practitioners (sole proprietors) represent the majority of the ~340,000+ practitioners in the US by the most recent AMTA industry fact sheet. The specific sub-segment — solo LMTs on Square Appointments who refuse to switch to a full suite — is a fraction of that.

At $9/month:
- 500 paying users = $4,500 MRR = $54K ARR
- 1,000 paying users = $9,000 MRR = $108K ARR
- 3,000 paying users = $27,000 MRR = $324K ARR

This is a viable micro-SaaS / lifestyle business at 1,000 users. It is not a venture-scale business without a significant expansion beyond solo LMTs — into personal trainers, estheticians, physical therapists, and chiropractors who share the same Square-but-need-clinical-notes pain. That expansion is a Year 2 question; do not pitch it in Year 1.

---

## What Could Kill This Business

1. **Square ships natively** — no mitigation beyond speed. If Square announces this in the next 6 months, pivot to "the SOAP notes tool that works even if you're not on Square" and compete on UX.
2. **Target segment is too small** — 20 paying users at 90 days confirms willingness to pay; if conversion stalls below 10 users at Day 90, reassess whether Square's LMT user base is large enough to find customers without heavy paid acquisition.
3. **Square OAuth approval is blocked or delayed** — Square's developer review can take weeks; apply on Day 1, not Day 14. Without OAuth approval, the Square sync is broken and the product is just a generic SOAP note app.
4. **LMTs churn because notes are good enough in spreadsheets** — the Square Community quotes suggest this is not true (users are actively paying $40/mo for full suites just for SOAP notes), but it is worth watching whether free-tier users convert to paid.

---

## Evidence Sources

All claims above derived from verified evidence files in this repository:

- `run-1/evidence/verification/r2-rank-1-narrowed.md` — primary verification, VERIFIED verdict
- `run-1/evidence/verification/r2-rank-1.md` — initial verification with Fresha nuance
- `run-1/evidence/pain-candidates.md` — ranking rationale, verbatim quotes
- Square Community thread: https://community.squareup.com/t5/Square-Appointments/For-Massage-Therapist-or-Anyone-that-needs-to-do-SOAP-Notes/idi-p/664447
- Noterro pricing: https://noterro.com/pricing
- ClinicSense pricing: https://clinicsense.com/pricing
- MassageBook Capterra reviews: https://www.capterra.com/p/147523/MassageBook/reviews/
- SOAP Vault redirect: https://www.soapvault.com/pricing → 301 to noterro.com/pricing
