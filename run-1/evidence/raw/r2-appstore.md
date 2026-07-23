# Round 2b: App Store & Marketplace Pain Research
**Date:** 2026-07-23
**Researcher:** Claude (round-2b)
**Budget used:** ~32 WebSearch+WebFetch calls
**Mandate:** App store reviews + marketplace templates as primary evidence. Evidence rules: 3+ independent complainants, 2+ sources, verbatim quotes from fetched pages, surviving incumbent check.

---

## CANDIDATE 1 — Etsy/Handmade Seller COGS Tracking

**Status: FULLY CONFIRMED (carried from rescue-etsy-cogs.md)**

See `rescue-etsy-cogs.md` for full evidence. Summary:

- **Source 1:** Capterra reviews of Craftybase/Stocksmith — 7 named reviewers with verbatim complaints about 5x price increase (fetched: https://www.capterra.com/p/144117/Craftybase/reviews/)
- **Source 2:** Shopify App Store reviews of Inventora — 5 named reviewers citing sync bugs, overselling, no customer service (fetched: https://apps.shopify.com/inventora/reviews)

**Wedge:** Etsy handmade sellers (candle/soap/jewelry/resin) priced out of Stocksmith's 5x hike need recipe-based COGS auto-deduction under $25/month, but the only $19/month alternatives (Inventora, Ardent Seller) are either too buggy or too unknown to trust.

**Severity:** 3.5/5

---

## CANDIDATE 2 — Music Teacher Studio Management App

**Status: PARTIAL EVIDENCE — fails 2-source rule, do not include in output**

### Source 1 (fetched): Capterra — My Music Staff reviews
URL: https://www.capterra.com/p/148451/My-Music-Staff/reviews/

**James R.** (Founder, December 29, 2025 — 2.0 stars):
> "Beyond the bare bones, anything I try to achieve with MMS is not possible"
Missing: Open APIs, limited Zapier integration, poor data export, limited booking customization, cannot scale.

**Wyatt H.** (Owner Teacher, June 25, 2026 — 4.0 stars):
> "NO I do not want to have to input that data manually after the fact"
Missing: Physical POS integration, booking widget customization for consultations vs lessons.

**Jill F.** (Billing Manager, January 24, 2023 — 4.0 stars):
> "The site has gotten much slower to work with"
Missing: Mobile app, activity feed/notifications, admin accountability tracking.

**Sonja N.** (Owner, January 31, 2026):
> "It was clunky at best, and I had to spend a bunch of time helping parents navigate how to do a make up lesson"

**Kaitlyn T.** (Music School Owner, September 15, 2023 — 4.0 stars):
Cannot edit invoice display settings; timezone issues unresolvable.

**Recurring missing features:** Mobile app (multiple reviewers), two-way messaging, student progress tracking, accounting integration (Xero/MYOB), payroll integration.

### Source 2: FAILED
- Trustpilot (mymusicstaff.com): HTTP 403 blocked
- SoftwareAdvice: Retrieved page but no review text visible (co-owned with Capterra — same pool anyway)
- G2.com: HTTP 403 blocked
- Slashdot: Zero reviews
- Reddit: Cannot fetch

### Incumbent check (partial):
- My Music Staff: $16.95/month, 755 reviews, most complaints are about missing mobile app and scaling limits
- Studio Helper: cheaper, even more basic
- Jackrabbit Music: $49–$199/month, aimed at larger schools
- Pike13: enterprise-oriented, expensive

**Gap:** Affordable ($15–$20/month) options exist but MY Music Staff dominates the market at this price point despite documented UX and mobile gaps. The mobile-app gap is the most repeated specific complaint. But without a second independent source, this cannot be confirmed under evidence rules.

---

## CANDIDATE 3 — Short-Term Rental (Airbnb/VRBO) Expense Tracking

**Status: INSUFFICIENT EVIDENCE — WTP signal strong, community complaints not independently verified**

### WTP Signal (strong):
Etsy search returned 8+ active listings for "Airbnb income and expense tracker" templates including:
- https://www.etsy.com/listing/1211593878/airbnb-vrbo-income-and-expense-tracker
- https://www.etsy.com/listing/1520886024/airbnb-rental-income-expense-budget
- Multiple sellers offering Google Sheets and Excel templates at $5–$30

### App Gaps Identified:
From Innago Capterra (fetched: https://www.capterra.com/p/166893/Innago/reviews/):

**Mena N.** (Owner, March 26, 2026):
> "I wish they have better system to bookkeep, making it easy for real estate landlords to manage between multi properties"

One other reviewer noted they "don't utilize the expense tracking feature" (suggesting it's inadequate).

**Why incumbents fail for STR specifically:**
- Innago, TurboTenant, TenantCloud are built for long-term landlords (Schedule E, lease management)
- Airbnb/VRBO hosts need Schedule C business tracking + multi-platform revenue consolidation
- Hospitable, Hostaway: operations-focused (messaging, calendar sync), no expense tracking
- Stessa: targets long-term investors, STR expense categorization is weak
- QuickBooks: Generic, $30+/month, requires bookkeeping knowledge

**Gap that might survive:** STR hosts have no purpose-built app to aggregate Airbnb + VRBO revenue, categorize lodging-specific expenses (cleaning, supplies, platform fees), and produce a Schedule C-ready P&L. They use Etsy/Gumroad spreadsheets. But only 2 non-verbatim complaints found — does not meet 3+ independent complainant rule.

---

## Round-1 Errors Corrected This Round

| Error | Correction |
|-------|-----------|
| Vendor marketing pages as evidence | Banned; only fetched review platforms used |
| No incumbent check | Checked Stocksmith, Inventora, Ardent Seller, Innago, TurboTenant, My Music Staff |
| "No alternative exists" framing | Corrected: alternatives exist but have specific, documented gaps |
| Quotes not verified on fetched page | All verbatim quotes above traced to confirmed fetched URLs |

---

## Territories Searched and Ruled Out

| Territory | Verdict | Reason |
|-----------|---------|--------|
| Baby tracking apps (Glow Baby, Huckleberry) | Ruled out | 4.7/5 rating; complaints are billing/UI, not unmet need |
| Small landlord management (Innago) | Ruled out | 4.8-4.9/5 rating; free and well-loved; only minor complaints |
| Personal trainer client apps | Ruled out | Market saturated (10+ apps); scattered complaints, no single clear wedge |
| Tattoo artist booking | Ruled out | Multiple new apps (LVL2, Venue Ink, InkDesk, Flashbook) already solving this |
| Homeschool tracking | Ruled out | Multiple apps exist; complaints are old (2010-2018); My School Year wins awards |
| Meal planning apps | Ruled out | Mealime 4.8/5 with 54K reviews; high satisfaction |
| ADHD planner apps | Ruled out | Market saturated with templates; evidence is about physical planners, not apps |

---

## Final Count: 1 Confirmed, 2 Partial

Only Pain 1 (Etsy COGS) fully meets all evidence rules. Pain 2 (Music teacher) and Pain 3 (STR expense tracking) each fail the 2-source requirement.
