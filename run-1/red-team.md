# BatchLedger / BatchCOGS — Red Team Report

**Date:** 2026-07-24
**Format:** Verbatim objection (title + attack + attribution), followed by an honest response. Where the objection is unresolved or only partially mitigable, that is stated plainly. Open risks that survive are collected in a final section and the summary table.

---

## Objection 1 (attack-business): Stocksmith Studio May Already Close the Gap at $49/Month

**Attack:** The entire BatchLedger wedge rests on the claim that auto-deduction is gated at Indie ($83–99/month). But winner-claims.md explicitly flags this as a PARTIAL FLAG: the feature comparison matrix omits Pro and Studio tiers entirely, and the Studio FAQ entry states it includes "multi-user inventory and recipe management." If Studio's recipe management includes auto-manufacture triggers on order events — which the thesis cannot rule out because it is "undocumented" — then the addressable pain point is solvable at $49/month, not $990/year. The Capterra "$1,000/year" quote corroborates Indie pricing but does not prove Studio lacks the feature; Liza K. may have been unaware of Studio or tested a different capability. A potential BatchLedger customer who discovers Studio works at $49/month has no reason to switch to a zero-review indie tool at $19/month.

**Kill condition:** Stocksmith Studio ($41–49/month) includes automated production assemblies / auto-manufacture on order receipt. If one live user confirms this or a WebFetch of the Studio FAQ confirms it, the wedge collapses from a 5.5x price gap to a 2.5x price gap against a trusted, established product with 245 reviews.

**Honest response:**

This objection is correct that the evidence is incomplete. What is verified: the Stocksmith pricing page feature comparison matrix covers only Indie, Business, and Growth — Pro and Studio are absent from it. The Studio FAQ entry says "multi-user inventory and recipe management." The external-pushback-audit.md (2026-07-24) confirmed that "Automated production assemblies" is listed as Indie+ only in the feature comparison. Liza K.'s verbatim Capterra quote — "block the 'auto-manufacture' feature to force you to upgrade to a much more expensive plan" — and her "$1,000/year" figure (which matches Indie annual at $83×12 = $996) constitute the strongest evidence that auto-manufacture is gated above cheaper tiers. That is corroborated by the anonymous SoftwareAdvice reviewer.

However, "recipe management" in the Studio FAQ is not the same as "automated production assemblies triggered by order events." Recipe management could mean the ability to define a recipe (BOM) without triggering deduction on sale — which would be a data-entry feature, not the integration. The thesis has drawn this inference but cannot confirm it without a live Studio account test or a direct Stocksmith support confirmation.

The thesis and site have already been corrected to say "Pro and Studio tiers are not shown in the feature comparison; auto-deduction capability at those tiers is undocumented in the matrix" — the switch.html decision table marks Pro and Studio as "Evaluate first" rather than "Switch," which is the honest position. The broader wedge (Indie = $990/year, the only documented auto-deduction tier) is confirmed by named reviewer evidence. The 2.5x-gap-if-Studio-has-it scenario remains a genuine gap in the verification.

**Status: OPEN — this is the single largest unresolved factual question in the thesis.** A one-hour live test of Stocksmith Studio would resolve it. Until resolved, the 5.5x framing should be used only with the Indie-tier qualifier, not as a blanket claim, which the corrected thesis and site already do. The wedge survives in its Indie-tier form; it narrows materially if Studio covers the job.

Evidence: `run-1/evidence/verification/winner-claims.md` (Claim 1), `run-1/evidence/verification/external-pushback-audit.md` (row 1), `run-1/business/thesis.md` (Pro/Studio undocumented caveat).

---

## Objection 2 (attack-business): Etsy Commercial Access Denial Kills the Core Differentiator

**Attack:** The product's entire value proposition is "auto-deducts materials the moment an Etsy order lands." That requires the Etsy webhook (`receipt` create event) which requires Commercial Access approval — a manual, opaque, two-step gate that can be denied. Etsy's Commercial Access review evaluates the business model, user data handling, and policy compliance; there is no published SLA, no appeal path, and no guaranteed timeline. During the approval window — which could be weeks or months — the CSV import fallback is the product. A CSV-import COGS tracker is not differentiated from a spreadsheet and is not the product the GTM plan is built around. If denied outright, the product cannot do the job it advertises without Etsy manually re-reviewing it.

**Kill condition:** Etsy denies Commercial Access, or approval takes longer than 60 days. Either outcome means the product launches without its defining feature and must compete as a CSV-import tool — a category with no competitive moat and no urgency.

**Honest response:**

This is confirmed accurate and accepted as a pre-launch dependency. The external-pushback-audit.md explicitly states: "Commercial Access two-step manual approval CONFIRMED." The thesis MVP section has been updated to note this as a launch dependency. Webhooks are listed in Etsy's current API Essentials (so the capability exists post-approval), but approval timeline is opaque.

The mitigation is operational, not product-level: apply for Personal App review and Commercial Access before any public launch or marketing, not after. The 90-day GTM plan should front-load this — day one of the build, not day 60 of GTM. If approval arrives during the build period, the Etsy integration is ready at launch. If it is delayed, Shopify-only launch is a real and weaker product but still differentiated from Ardent Seller (Etsy-only) and usable against Inventora.

The harder version of this objection — outright denial — has no mitigation within the product. Denial means the Etsy story does not exist. A Shopify-only product at $19/month competes only against Inventora, which has a weaker position but still exists. The "only affordable tool that auto-deducts the moment an Etsy order lands" tagline would be false at launch.

**Status: MITIGATED operationally (apply early), but unresolvable until approval arrives.** This is the most operationally urgent risk before launch. The CSV fallback being a separate build item (GTM Days 31–60) means the fallback itself has no ready implementation at launch if approval is delayed, which compounds the risk. This is also addressed in Objection 14 (product attack).

Evidence: `run-1/evidence/verification/external-pushback-audit.md` (row 3), `run-1/business/thesis.md` (MVP section, launch dependency note).

---

## Objection 3 (attack-business): The WTP Ceiling Is Below $19 for Price-Refugees

**Attack:** The target persona is defined partly as users who left Craftybase because they refused to pay $49–83/month. This self-selection means the segment is unusually price-sensitive: they chose to leave rather than pay. The segment's revealed WTP ceiling is somewhere between the price they paid at Craftybase (approximately $19–24/month legacy) and the price they refused (Studio at $41–49/month). BatchLedger at $19/month is at the top of that inferred range, not safely inside it. Ardent Seller's free tier (50 transactions/month, all features) and Inventora's free tier (10 orders/month) already exist below $19. A price-sensitive seller will trial those free tiers first. The thesis assumes $19/month is safe because it matches competitors, but if the actual conversion ceiling for this segment is $9–15/month — plausible given a cohort that self-identifies as having been shocked by any price increase — then the Pro tier is priced out of its own market. The annual plan at $15/month is structurally better positioned but requires a $180 upfront commitment from a person who was already burned by a subscription.

**Kill condition:** Conversion rate from free to $19/month Pro is below 3–5%. If the segment parks on the free tier indefinitely (30 orders/month covers many casual sellers), the business cannot reach 500 paying users without a much larger free user base than the niche supports.

**Honest response:**

The WTP concern is real and un-modeled in the thesis. The evidence only shows that named reviewers objected to $83–99/month, not that they would pay $19/month without friction. The revealed preference observation is valid: these are people who left a product over pricing. However, the alternative inference is that they left because the increase was large and arbitrary, not because $19/month itself is unacceptable — they were paying approximately $19–24/month before the increase and did not leave at that price.

The free-tier concern overlaps with Objection 8 (which addresses it more specifically). The WTP ceiling question specifically is not answerable without running the product. The annual plan at $15/month is structurally the right offer for this cohort but the objection is correct that upfront commitment from burned subscribers is a harder ask.

There is no WTP validation in the current evidence stack. The $19/month price matches the competition (Ardent Seller, FormulaLedger), which sets a floor but does not validate that the displaced-Craftybase segment will pay it. The Ardent Seller free tier is noted at 50 transactions/month in the competitor map — more generous than BatchLedger's 30-order free tier — which weakens the free-to-paid conversion argument for any user who happens to try Ardent Seller first.

**Status: OPEN — no WTP validation exists.** The price is set by competitive matching, not by evidence of willingness to pay for this specific cohort. This narrows the confidence in the conversion assumption. It does not kill the opportunity, but it means the 500-user forecast is more uncertain than the thesis implies.

Evidence: `run-1/evidence/pitch-etsy-cogs.md` (Raven T. quote), `run-1/business/competitor-map.md` (Ardent Seller free tier at 50 transactions/month).

---

## Objection 4 (attack-business): Competition Density — Multiple AI-Assisted Entrants in the Same Lane, Including One Missing from the Competitor Map

**Attack:** The external audit named Batchforja alongside FormulaLedger and Ardent Seller as active entrants SEO-attacking this exact wedge. Batchforja does not appear anywhere in the verified competitor map. If multiple solo builders used the same AI-assisted research-and-build playbook simultaneously — which is plausible given that the Craftybase-to-Stocksmith rebrand is a publicly visible catalyst — then BatchLedger is not entering an underserved niche but a crowded one where every entrant is racing to the same "reliable, $19/month, Etsy+Shopify" positioning. The "trust brand" moat requires being the first reliable option that accumulates reviews. In a field with five simultaneous entrants, that race has no designated winner; it goes to whoever gets the first 10 Shopify App Store reviews, which is a coin flip, not a strategy.

**Kill condition:** Batchforja or another unnamed entrant already has Etsy Commercial Access approved, a working Shopify integration, and is actively acquiring users in the same communities (r/Etsy, Facebook candle-making groups) before BatchLedger ships. In that scenario, the trust race is already lost before it starts.

**Honest response:**

Batchforja is not in the verified competitor map. The external-pushback-audit.md explicitly states: "Cannot verify entrant traction (no public data; session WebSearch exhausted)" and accepted competition density as a risk. The thesis already acknowledges this under the competition-density risk and the 12–24 month window caveat.

This objection is correct in its framing: if Batchforja (or any unnamed entrant) has already secured Etsy Commercial Access and is building a review base, BatchLedger enters behind. The trust race does go to whoever ships first and gets reviewed first. The thesis cannot claim to know the competitive state of unnamed entrants.

The mitigation is speed, not research: build and apply for Commercial Access before any unverified competitor has a chance to establish a review base. But this is a race condition, not a defensible position. The objection is correct that the trust race is a coin flip among simultaneous entrants — what matters is who ships, who gets users, and who gets those users to leave reviews. That is operational execution, not strategic differentiation.

**Status: ACCEPTED AS RISK, not answerable.** Batchforja's traction is unverified. If it has traction, the trust race is already partially run. Speed to Shopify App Store listing is the only response.

Evidence: `run-1/evidence/verification/external-pushback-audit.md` (row 2b).

---

## Objection 5 (attack-business): Seasonal Churn Destroys the LTV Math

**Attack:** Etsy handmade sellers are acutely seasonal: Q4 (October–December) is the primary revenue period; January–March is dead for most crafters. A seller who signs up in October, runs through their 30-order free tier in November, converts to Pro in December, and then sees zero orders in January has no rational incentive to stay subscribed. Monthly subscribers will cancel in January and resubscribe in September. At $19/month, one Q4 conversion followed by a January cancellation yields $38–57 in revenue, not $228 annual. The business model in the pitch assumes stable monthly ARR from a cohort that has no stable monthly revenue. FormulaLedger and Ardent Seller face the same headwind, but the thesis does not model it. The annual plan ($180/year, billed upfront) partially hedges this, but a price-sensitive, churn-prone segment is the least likely cohort to commit to annual billing.

**Kill condition:** Monthly churn exceeds 15% in Q1 (January–March). At that rate, the business loses a third of its subscriber base every winter, and the acquisition cost to refill in Q3–Q4 makes the unit economics negative unless the annual plan conversion rate is above 40% — a high bar for a zero-review tool.

**Honest response:**

The thesis does not model seasonality. This is a real structural risk for a product whose primary persona is an Etsy handmade seller. The seasonal pattern in the handmade craft market is well-documented in creator communities, even if not cited in the evidence files. A seller generating $500/month in January (off-peak) versus $3,000/month in November (peak) has a fundamentally different urgency for inventory software in each period.

The annual plan at $15/month ($180/year) is the structural hedge — a seller who commits in October before Q4 stays subscribed through January regardless of order volume. But the objection is correct that a price-sensitive segment is the least likely to commit to annual billing from a zero-review tool.

There is also a mitigating factor the objection underweights: COGS reporting and tax preparation are January–April tasks in the US market. A seller who tracked orders through Q4 needs their COGS data in Q1 for tax purposes. That creates a reason to stay subscribed through at least March. The "no reason to stay in January" claim is partially offset by the tax-season COGS report use case. But this is a partial offset, not a full answer.

**Status: OPEN — seasonality is a real risk that is not modeled.** The LTV math in the thesis assumes stable monthly subscribers, which does not reflect the reality of a seasonal market. This does not kill the business, but it means the path to $114k–$228k ARR takes longer than 18 months if Q1 churn is high, and it favors the annual plan as the primary acquisition target.

---

## Objection 6 (attack-business): Founder Jurisdiction — Germany-Based Solo Builder Serving a US-Centric Compliance and Support Use Case

**Attack:** The target persona uses BatchLedger for COGS tracking that feeds directly into US tax reporting (Schedule C, IRS self-employment deductions, state sales tax nexus). A Germany-based founder is 6–9 hours ahead, has no legal exposure to US tax law, and cannot advise on Schedule C edge cases. The pitch's 90-day GTM plan targets r/Etsy (1.2M members, predominantly US) and US communities; the support SLA ('<24hr email') does not account for a 9-hour timezone gap. Beyond support, EU incorporation creates payment rail friction (Stripe EU vs. US entities), potential VAT complications, and no recourse if a US-based seller sues over data errors in COGS reporting.

**Kill condition:** The segment's trust criteria include "the builder understands my tax situation." A US competitor who can say "built in the US, for US sellers, Schedule C-ready" captures this trust signal without effort.

**Honest response:**

The thesis and site do not mention founder location. This was flagged in the external-pushback-audit.md as a forwarded red-team input. The COGS tracking product is indeed used by US sellers for Schedule C purposes, and the site does not make tax-filing claims or mention Schedule C by name — it positions as a COGS and inventory tool, not a tax advisor. That is the correct positioning and reduces (but does not eliminate) the jurisdiction friction.

The timezone gap for support is real. A 9-hour gap against Eastern Time means a morning support email from a US seller arrives during the founder's evening. The <24hr SLA is achievable (24 hours is one full business day plus overnight) but any SLA miss falls in the opposite window. The support SLA risk is addressed more fully in Objection 11.

The legal exposure concern (US seller suing over COGS data errors) is mitigated by standard terms of service (data accuracy not warranted, user responsible for tax filing), which is standard for all SaaS tools in this space. No competing tool in the segment carries legal liability for tax reporting errors.

The jurisdiction concern is real but manageable in isolation. It compounds with the trust-at-launch problem (Objection 16) and the SLA risk (Objection 11). A US-based competitor could exploit it, but only if they are actively positioning against BatchLedger — unlikely for any of the current alternatives given their current state.

**Status: MITIGATED partially. The product positioning avoids tax-advice claims. The support timezone gap is real but within a workable 24hr window. This narrows the opportunity slightly — the jurisdictional trust signal is not available to this founder without a US co-founder or contractor.** It is not a kill condition but it is a credibility gap that compounds with zero reviews at launch.

---

## Objection 7 (attack-business): The Displacement Window Is Narrower Than 12–24 Months — FormulaLedger Can Ship Channel Integration in One Sprint

**Attack:** FormulaLedger already has the BOM engine, the target persona (candle/soap makers), working pricing, and a vendor testimonial directly citing Craftybase displacement. Adding Etsy and Shopify webhooks is a standard OAuth integration — the same 4-week build estimate the thesis gives for BatchLedger's entire MVP. FormulaLedger only needs to ship that one integration, not the entire product. If FormulaLedger ships Etsy+Shopify sync before BatchLedger reaches 100 users, BatchLedger loses its only genuine differentiator to a product that already has BOM auto-deduction, a positioned persona overlap, and working pricing.

**Kill condition:** FormulaLedger ships Etsy webhook integration before BatchLedger's beta reaches 50 active users.

**Honest response:**

This is correctly identified in the thesis risk table as the highest-threat competitor. The objection is accurate: FormulaLedger's gap is a single integration sprint, not a full product rebuild. The thesis's 12–24 month window estimate is not based on verified insight into FormulaLedger's roadmap — it is an inference from their current state (no integrations visible). FormulaLedger may already be building it.

The only real response is speed: ship BatchLedger before FormulaLedger closes the gap, establish users, and build the review base first. This is a race condition, not a structural advantage. The thesis acknowledges this honestly but does not fully grapple with how thin the window may be.

There is no version of this objection that makes the opportunity worse than the thesis already states. The thesis already says FormulaLedger is the highest-threat competitor and the window may be as short as 12 months. The 12–24 month estimate may be generous if FormulaLedger is already building.

**Status: ACCEPTED AS RISK, not answerable.** The only mitigation is shipping fast and securing the Shopify App Store listing (with reviews) before FormulaLedger does. There is no strategic answer to this beyond execution speed.

Evidence: `run-1/business/thesis.md` (risks table), `run-1/evidence/verification/r2-rank-3-narrowed.md` (Sarah K. testimonial on FormulaLedger), `run-1/business/competitor-map.md`.

---

## Objection 8 (attack-business): The Free Tier Creates a Permanent Parking Lot for the Most Accessible Customers

**Attack:** The free tier (30 orders/month, 1 channel) may cover many Etsy sellers indefinitely. At the low end of the persona ($500/month revenue, average order value $25–30), sellers generate 17–20 orders/month — below the 30-order cap permanently. Only the upper end of the persona ($5,000–$10,000/month) hits the cap quickly. Ardent Seller offers 50 transactions/month free — a more generous free tier than BatchLedger's.

**Kill condition:** Free tier conversion rate below 5% at 6 months post-launch.

**Honest response:**

The pitch-etsy-cogs.md states: "No freemium indefinite Pro — the channel + order limit ensures a real seller will hit it within weeks." This is accurate for a product launch spike or a seller near $1,000–1,500/month in revenue, but the objection is correct that the $500/month end of the stated persona range may not hit 30 orders at $25 average order value.

The Ardent Seller comparison is accurate per the competitor-map.md: Ardent Seller's free tier is 50 transactions/month, which is more generous than BatchLedger's 30-order cap. A price-sensitive seller who finds Ardent Seller first gets a more generous free tier from a competitor with the same $19/month Pro price.

This narrows the opportunity at the low end of the persona. The product converts better for higher-volume sellers ($2,000+/month, 50+ orders/month) who hit the cap quickly. The $500/month micro-seller segment may park on free indefinitely. The thesis should not rely on converting the low end of the $500–$10,000/month range in large numbers.

**Status: MANAGEABLE but the free tier design has a conversion gap at the low persona end.** Raising the free tier further would worsen the problem. Lowering it would make the value demonstration shorter. The current 30-order cap is a reasonable design choice but the thesis's claim that "a real seller will hit it within weeks" overstates the conversion certainty for the bottom third of the persona range.

Evidence: `run-1/business/competitor-map.md` (Ardent Seller free tier), `run-1/evidence/pitch-etsy-cogs.md` (pricing rationale), `run-1/business/pricing.md`.

---

## Objection 9 (attack-business): The TAM Is a Recycled Cohort, Not a Growing Market

**Attack:** The thesis's entire "why now" argument rests on a one-time displacement event: Craftybase's rebrand in July 2026. Once that cohort is captured or moves on (within 6–12 months), the acquisition funnel returns to baseline: converting spreadsheet users with lower urgency, lower awareness, and lower WTP. The "craftybase alternative 2026" SEO play has an expiry date. After 12 months, BatchLedger is competing for a steady-state market that requires paid acquisition or deep community presence to sustain growth.

**Kill condition:** Monthly new signups fall below 10 per month after month 9 (post-displacement window) and there is no established Shopify App Store ranking or SEO position.

**Honest response:**

This is accurately stated. The thesis explicitly acknowledges the displacement window as time-bounded. The 90-day GTM plan's primary channels (Capterra reviewer outreach, "craftybase alternative" SEO) are displacement-window channels. There is no sustained acquisition model described for after month 12.

The thesis's SEO caveat acknowledges this: "craftybase alternative" search volume decays as the rebrand fades and competitors fill the content gap. The Shopify App Store listing is the only sustainable channel — it generates ongoing discovery as new Shopify sellers search for inventory tools, independent of the displacement event.

The honest position: this is a displacement-window opportunity. The business is viable in that window; the post-window economics are unclear and unmodeled. Building a durable business requires establishing the Shopify App Store presence, community reputation, and switching costs (recipe data, audit history) within the displacement window so that post-window churn is offset by organic word-of-mouth and App Store discovery.

**Status: MANAGEABLE — this is a known constraint, not a new insight.** The thesis already frames this honestly. The risk is real: if the Shopify App Store listing does not establish by month 9, the business stalls. That is a buildable milestone, not an unsolvable problem.

Evidence: `run-1/business/thesis.md` ("Why Now" section and risks table).

---

## Objection 10 (attack-product): switch.html Promises a CSV Import That Does Not Exist in MVP Scope

**Attack:** The switching kit (switch.html) presents two download-and-fill CSV templates with language that unambiguously implies server-side import: "BatchCOGS will flag it rather than create a silent mismatch," "Import templates," and "Fill from your existing records." A seller who follows this flow — exports from Stocksmith, fills the template, then looks for an upload button — finds nothing. The GTM plan lists Craftybase/Inventora CSV import as a Days 31–60 feature, not MVP.

**Kill condition:** Any beta user who follows the switching kit end-to-end and finds no import function writes a review saying "the instructions on the site don't work."

**Honest response:**

This objection is correct. The switch.html page has a section labeled "Import templates" (section id="csv-templates") with download buttons for materials and recipe CSV templates. The section-label text reads "Import templates." The note callout text reads: "BatchCOGS will flag it rather than create a silent mismatch." All of this implies an upload flow that does not exist in MVP. The pitch-etsy-cogs.md GTM plan (Days 31–60) lists "Build Craftybase/Inventora CSV import" as a post-launch deliverable.

The discrepancy is real and the kill condition is accurate. For a product whose core brand promise is reliability, a broken user flow documented on the marketing site is disproportionately damaging in the first week. This is a product-launch defect, not a strategic ambiguity.

**Status: FATAL-IF-UNRESOLVED.** This must be fixed before any beta user is directed to the switch.html page. The fix options are: (a) remove the "Import templates" section and replace it with "Export your data now; we will add CSV import in the next 30 days," with an honest timeline, or (b) build the CSV import before directing any user to the switching kit. Option (b) is the correct one for a brand built on reliability, but option (a) is acceptable if the launch is staged and beta users are screened.

Evidence: `run-1/site/switch.html` (#csv-templates section, note callout text), `run-1/evidence/pitch-etsy-cogs.md` (GTM Days 31–60 item 5).

---

## Objection 11 (attack-product): Email Support <24hr SLA Is Operationally Unprovable for a Solo Founder

**Attack:** The Pro tier includes "email support, <24hr response" as a named deliverable. A solo founder cannot guarantee sub-24-hour response over a 12-month operating period — illness, travel, a personal emergency, or a simultaneous production incident will break this promise. Inventora's brand damage came from "multi-day support non-response." If BatchCOGS misses its own stated SLA during a seller's flash sale, the product's core differentiation inverts into its primary failure mode.

**Kill condition:** One documented support miss during a seller's flash sale posted in r/Etsy or a Facebook candle group.

**Honest response:**

The pricing.html feature table lists "<24hr response" for the Pro tier and Pro Annual tier. This is a hard promise on the face of the marketing site. The objection is accurate: a solo founder cannot operationally guarantee this across all scenarios.

The mitigation options are narrowing the promise or building backup. Narrowing: "best-effort same-business-day response during weekdays" is more honest than a hard SLA. The 24-hour window can be met most of the time but the word "SLA" should not appear unless there is a defined consequence for missing it (there is none listed). Backup: a queued-email setup with auto-replies that acknowledges receipt within minutes and promises response within 24 hours buys enough grace that "acknowledged within minutes" partially offsets a slow response.

The deeper problem is that the "reliable" brand is built on exactly the contrast with Inventora's silent failures. A support miss during a flash sale is the worst possible version of this failure and would be used against the product in the exact communities the GTM plan targets.

**Status: MITIGATED partially by narrowing the SLA language from "<24hr" to "same business day, weekdays" and adding receipt acknowledgment automation.** This does not fully resolve the risk — a solo founder gets sick eventually — but it reduces the promise's surface area. The underlying risk (solo founder, no backup) is not fully solvable without a support contractor, which is not economic at early subscriber counts.

Evidence: `run-1/site/pricing.html` (email support row), `run-1/evidence/pitch-etsy-cogs.md` (Inventora multi-day non-response as documented fatal flaw).

---

## Objection 12 (attack-product): Field Map Instructs Title-Matching, Not Listing-ID Matching — Causes Silent Non-Deductions at Real Scale

**Attack:** switch.html's field mapping table says: "Match exactly to your Etsy or Shopify listing title so the webhook deduction auto-links." Etsy and Shopify webhooks deliver a stable numeric listing_id, not a title string. If the real product matches by title, any seller who renames a listing gets silent non-deductions.

**Kill condition:** If the product actually implements title matching, any user who renames a listing gets permanently broken deduction with no error surfaced.

**Honest response:**

The switch.html field-map-table (line 686) contains: "Match exactly to your Etsy or Shopify listing title so the webhook deduction auto-links." The Etsy API receipt object includes `listing_id` as the stable identifier; the Shopify webhook includes `product_id` and `variant_id`. Title strings are mutable.

This is a critical product documentation error regardless of how the backend is implemented. If the backend correctly matches by `listing_id`/`product_id` (which it should), the switching kit gives users wrong instructions: they are told to match titles exactly, which implies the system uses titles as the matching key. Users who rename a listing will incorrectly believe they need to rename it in BatchCOGS as well (unnecessary if ID-matching is used) or will not know they need to do anything (wrong if title-matching is used and they renamed it).

Either way, the field map instruction is misleading. The correct instruction depends on the actual implementation: "BatchCOGS links your products to your Etsy/Shopify listings by listing ID (assigned automatically when you connect your shop). The product name in BatchCOGS is a display label only — renaming your Etsy listing does not break the connection."

**Status: FATAL-IF-UNRESOLVED (product implementation question) / MISLEADING (documentation question).** The field map text must be updated to reflect how matching actually works. If title-matching is the implementation, the product must be changed to ID-matching before launch — this is not optional for a product promising reliability. If ID-matching is the implementation (correct), the documentation should say so explicitly.

Evidence: `run-1/site/switch.html` (field-map-table, Product/Listing title row).

---

## Objection 13 (attack-product): localStorage Idempotency Demo Does Not Validate Server-Side Webhook Idempotency Under Concurrent Load

**Attack:** The demo's idempotency proof stores order IDs in a localStorage array and checks for duplicates synchronously. This demonstrates the UI concept. It does not demonstrate server-side idempotency under concurrent webhook delivery, where two HTTP requests arrive within milliseconds and both pass a database read-before-write check before either completes the write. "Zero double-deductions" is marketed as a verified reliability design choice. Proper server-side idempotency requires a database-level unique constraint plus careful transaction scoping.

**Kill condition:** If the real product implements read-then-write idempotency without a database unique constraint, Etsy's documented webhook retry behavior could trigger double-deductions during any period of server slowness.

**Honest response:**

The demo is correctly scoped as a demonstration tool, not a proof of server-side behavior. The concern in the objection is accurate: localStorage-based idempotency in the demo does not guarantee anything about the production implementation. A demo that shows "blocked — already processed order #ABC-456" is a user experience prototype, not an architectural proof.

The marketing claim ("zero double-deductions") is a design promise that must be backed by a database-level unique constraint on the order receipt ID. Without that constraint, concurrent delivery (Etsy retries on 5xx errors, a documented behavior) can cause double-deductions during any period of high load or slow response. A race condition between two concurrent requests reading "not processed yet" before either writes "processed" is the exact failure scenario.

The thesis says idempotency keys are a design choice; the demo shows the concept. Whether the real implementation has a database-level unique constraint is a build-time decision, not a demo decision. But the marketing cannot promise "zero double-deductions" as a verified fact until the server-side implementation is correct and tested.

**Status: SERIOUS — the demo does not validate the production claim.** The production implementation must use a database-level unique constraint on the idempotency key (webhook event ID), not application-level deduplication. This is a standard implementation pattern and is achievable, but it must be built correctly. The "zero double-deductions" claim should be qualified on the site as "by design" until it has been proven in production under load.

Evidence: `run-1/site/demo.html` (recordSale() function, localStorage scan), `run-1/site/index.html` (FAQ: "Every webhook receipt is logged").

---

## Objection 14 (attack-product): No Reversal Path for Cancellations or Returns — Stock Diverges With Real Seller Operations

**Attack:** The demo and MVP scope handle exactly one direction: sale recorded → materials deducted. Real Etsy and Shopify operations include order cancellations, buyer-initiated returns, partial refunds, and order edits. A handmade seller with a 5–10% cancellation rate will have permanently understated physical stock within weeks.

**Kill condition:** A seller who processes 50 orders/month with 5 cancellations has a 10% stock overcount by month one, compounding indefinitely. After six months their "units producible" figure is meaningless.

**Honest response:**

This is a real product gap. The demo has a single "Record a sale" path with no cancel or undo. The thesis MVP spec does not mention order cancellation webhooks. Shopify has an `orders/cancelled` webhook event; Etsy does not have an equivalent push event (cancellations would require polling or the user manually adjusting stock).

For Shopify, not handling `orders/cancelled` means stock is permanently understated for every cancelled order. For Etsy, the absence of a cancellation webhook makes automatic reversal architecturally harder (requires polling or user action).

This is a scope gap that needs to be named explicitly to users. "Units producible" figures become inaccurate in proportion to cancellation rate. A seller with custom/craft goods commonly has 5–15% cancellation rates. The "current stock level" metric becomes systematically wrong without a reversal path.

The minimum viable fix is: (a) surface a manual "undo deduction" option in the audit trail (the thesis mentions "manual override with full audit trail" but does not specify it handles cancellations), and (b) subscribe to `orders/cancelled` on Shopify and reverse the corresponding deduction automatically.

**Status: SERIOUS — this is a missing feature that causes compounding data inaccuracy for a meaningful share of sellers.** It is buildable (Shopify cancellation webhook is standard; manual override for Etsy is an acceptable near-term answer) but it must be disclosed or addressed before the product is used at real scale. Not disclosing it while claiming "accurate inventory status" is a reliability brand risk.

Evidence: `run-1/site/demo.html` (single-direction sale flow), `run-1/business/thesis.md` (MVP spec, no cancellation webhooks mentioned).

---

## Objection 15 (attack-product): Multi-SKU Line Items Per Order Are Unaddressed — a Common Etsy Purchase Pattern

**Attack:** The demo's "Record a sale" form takes one product and one quantity. An Etsy receipt can contain multiple line items — a buyer ordering three different candles in one transaction generates one receipt with three line items. The site never claims to handle multi-line receipts and never discloses that it does not.

**Kill condition:** If the webhook handler processes only the first line item of a multi-line receipt, sellers who receive bundle orders have systematic under-deduction and under-reported COGS on all non-first items.

**Honest response:**

The demo is single-SKU by design as a demonstration. The real implementation must handle multi-line Etsy receipts — each receipt contains a `transactions` array, each with its own `listing_id` and `quantity`. A webhook handler that processes only the first transaction is silently wrong for any multi-item order.

The switch.html "place a test order" guidance (after-import step 02) does not specify single-SKU, which means a user who places a multi-SKU test order may be validating a broken flow without knowing it.

Whether the real product handles multi-line receipts is a build-time decision. The demo does not test this. The marketing does not disclose the limitation or confirm handling. If the MVP handles only single-line receipts, this must be disclosed explicitly ("BatchCOGS currently processes the first item per Etsy order; multi-item order support is planned for [date]") or built correctly before launch.

**Status: SERIOUS — multi-line receipts are a real Etsy operating condition, not an edge case.** Any seller who receives bundle orders (common in handmade crafts — buyers often order multiple scents, sizes, or varieties together) will have systematic under-deduction. This must be handled correctly or disclosed clearly before launch.

Evidence: `run-1/site/demo.html` (single product select in Record a sale), `run-1/site/switch.html` (after-import step 02, no single-SKU caveat).

---

## Objection 16 (attack-product): Etsy Commercial Access Gate Blocks the Core Value Proposition at Launch, and the CSV Fallback Is Also Unbuilt

**Attack:** Etsy requires two-step manual Commercial Access approval before webhooks are available for multi-tenant use. The stated fallback is "CSV order import." But CSV order import is not in the MVP spec — it is listed as a Days 31–60 post-launch GTM deliverable. At launch, the product may connect to Shopify but not Etsy. The site's positioning — "the only affordable tool that auto-deducts your materials the moment an Etsy order lands" — is technically false at launch if Etsy approval is not pre-secured. The target persona is heavily Etsy-first.

**Kill condition:** Etsy Commercial Access is denied or delayed past launch, and the CSV fallback is not built, meaning the product launches with no Etsy story at all.

**Honest response:**

This compounds Objection 2. The thesis adds the CSV fallback as an acknowledgment of the Commercial Access risk. But the CSV import itself is not in MVP scope — it is a Days 31–60 build item. If Commercial Access is delayed and the CSV fallback is not yet built, the product launches with Shopify-only real-time integration and no Etsy path at all, not even CSV.

The positioning claim "the only affordable tool that auto-deducts your materials the moment an Etsy order lands" would be false at launch in this scenario. The index.html hero ("Auto-deduct your materials on every sale") would also be misleading for the Etsy-first persona.

The resolution requires: (a) Commercial Access application submitted on day one of the build period, and (b) CSV import built as part of the MVP, not deferred to GTM Days 31–60. Without (b), there is no Etsy story at launch even if approval is in progress. Alternatively, the site could be honest: "Etsy integration pending approval; available via CSV import during the approval period" — but only if the CSV import is actually built.

**Status: SERIOUS.** This is the compounded version of Objection 2 plus the CSV build gap identified in Objection 10. Both must be resolved before launch.

Evidence: `run-1/business/thesis.md` (MVP section, Commercial Access note), `run-1/evidence/pitch-etsy-cogs.md` (GTM Days 31–60 item 5).

---

## Objection 17 (attack-product): Hero Text Frames "5x" as a Documented Product-Level Fact Rather Than Attributed User Testimony

**Attack:** index.html reads: "documented as a 5× increase by named users on Capterra." The word "documented" applied to "5×" implies it is a verified structural fact. The thesis audit corrected this: the structural claim is "the cheapest tier that does the core job costs $83+/month"; "5x" is retained only as Raven T.'s attributed testimony about her own personal price change. The site was not updated to reflect this narrowing. A journalist or competitor can accurately say BatchCOGS is citing an unverified ratio as "documented."

**Kill condition:** A comparison article or competitor quotes the "5x documented" claim and shows from the Capterra review that it is one reviewer's self-reported personal experience.

**Honest response:**

The index.html text (line 101–102) reads: "documented as a 5× increase by named users on Capterra." This is a documentation gap: the thesis was corrected by the external-pushback-audit to retain "5x" only as Raven T.'s attributed testimony, not as a verified structural price change ratio, but the site was not updated to match.

The honest fix is: "reported as a 5× increase by named users on Capterra" or, better, putting the claim directly in Raven T.'s mouth by quoting it in the hero section (the villain section below already does this correctly — it quotes the reviews verbatim with attribution). The hero subhead should not use the word "documented" for a user-reported ratio that Raven T. did not quantify with explicit prior/new price points.

This is a fixable documentation issue, not a strategic problem. It does not change the underlying wedge. The villain section (section--dark) already handles this correctly by quoting Raven T. verbatim with attribution and source link.

**Status: MANAGEABLE — fixable with one sentence change in the hero subhead.** The underlying evidence (named Capterra reviewer, live URL, verbatim quote) remains valid. The framing in the hero needs to match the corrected thesis framing.

Evidence: `run-1/site/index.html` (hero subhead, line 101–102), `run-1/evidence/verification/external-pushback-audit.md` (row 1 verdict), `run-1/business/thesis.md` (corrected "5x retained only as Raven T.'s attributed testimony").

---

## Objection 18 (attack-econ): Stocksmith Studio Already Has Recipe Management — One Toggle Erases the Entire Wedge

**Attack:** The thesis classifies "Stocksmith launches cheap tier with auto-deduction" as LOW probability. But the Studio FAQ states it includes "multi-user inventory and recipe management." If the recipe data model is already in Studio and auto-manufacture is gated only by a feature flag, Stocksmith can unlock it with a single product decision — no engineering sprint required — and immediately undercut the wedge while retaining an established brand, 245 Capterra reviews, and existing integrations.

**Kill condition:** Stocksmith enables auto-manufacture trigger at Studio tier ($41–49/mo). At that point BatchLedger's wedge is a 2.3x price gap against a competitor with 245 reviews, trusted brand, and no reliability baggage.

**Honest response:**

This is the economic corollary to Objection 1 and the same underlying uncertainty: whether Stocksmith Studio's "recipe management" includes event-triggered auto-deduction or only recipe-definition. If the data model exists and only a feature flag separates Studio from Indie for auto-manufacture, the competitive response from Stocksmith is fast and cheap.

The thesis risk table rates "Stocksmith launches cheap tier with auto-deduction" as LOW, citing Stocksmith's clear upmarket trajectory (Business at $199, Growth at $349). That reasoning is sound — Stocksmith's product direction is toward larger manufacturing operations, not micro-sellers. A downmarket move to unlock Studio at $49/month would undercut their own Indie tier revenue and conflict with their evident positioning.

However, "clear upmarket trajectory" does not mean "cannot respond to a new entrant." If BatchLedger reaches 1,000 users and starts showing up in "craftybase alternative" searches, Stocksmith has both incentive and (possibly) the technical ability to respond quickly by unlocking Studio. At that point, a 2.3x price gap against 245 reviews is a weak competitive position for BatchLedger.

**Status: OPEN (same as Objection 1).** The probability of Stocksmith responding is low early (they are moving upmarket and a downmarket move costs them Indie revenue), but rises as BatchLedger gains traction. The risk is not "fatal immediately" but "fatal if BatchLedger succeeds without building switching costs first." The window for building data switching costs (recipe history, audit trail, COGS reports integrated into seller workflow) is the same 12–24 month displacement window. If those switching costs are real by the time Stocksmith responds, the 2.3x price gap is less lethal.

Evidence: `run-1/evidence/verification/winner-claims.md` (Claim 1 partial flag), `run-1/business/competitor-map.md` (Studio at $41–49/mo), `run-1/business/thesis.md` (risk table, Stocksmith rated LOW).

---

## Objection 19 (attack-econ): Free Tier Covers the Micro-Seller Permanently — Conversion Funnel Broken by Design

**Attack:** At the low end of the persona ($500/month selling a $25 candle = 20 orders/month), sellers live on the free tier indefinitely. Ardent Seller offers 50 transactions/month free — a more generous free tier than BatchLedger's 30-order cap. If the median paying prospect can get the core job done for free forever, paid conversion rate asymptotes toward zero among the buyers who most need the price argument.

**Kill condition:** If more than 40% of the target segment generates fewer than 30 orders per month consistently, the free-to-paid conversion rate will be structurally low regardless of product quality.

**Honest response:**

This is essentially Objection 8 restated in economic terms. See Objection 8 response. The additional point here is the Ardent Seller comparison: Ardent Seller's 50-transaction/month free tier is more generous than BatchLedger's 30-order cap. A micro-seller at $500/month in revenue who discovers Ardent Seller before BatchLedger has a better free tier at a competitor, with the same $19/month Pro price.

The only differentiation BatchLedger offers the free Ardent Seller user is Shopify integration. If that seller is Etsy-only, there is no upgrade reason at any price point until they exceed 50 orders/month (Ardent Seller's cap) or need multi-channel.

**Status: OPEN (converges with Objection 8).** The conversion funnel has a structural gap at the low persona end. The business relies on the upper half of the $500–$10,000/month persona range for its paying subscriber base.

Evidence: `run-1/business/competitor-map.md` (Ardent Seller free tier 50 transactions/month), `run-1/business/pricing.md` (free tier 30 orders/month).

---

## Objection 20 (attack-econ): <24hr Email SLA at $19/Month Is an Economically Insolvent Promise

**Attack:** At $19/month, reaching $10,000 MRR requires 526 paying users. At 5% monthly support contact rate, that is 26 emails/month that must be answered within 24 hours. At 1,000 users, that is 50+ support contacts/month. Hiring support requires margin that does not exist at this price point. A viral flash-sale incident could generate 50 concurrent support tickets in 48 hours. The <24hr SLA is a brand-destroying promise: either it gets broken in the first crisis (killing "reliable") or it consumes the founder entirely (killing product velocity).

**Kill condition:** The promise must be broken or dramatically narrowed before 200 users.

**Honest response:**

The economic math is correct. At $19/month and high support contact rates, a hard SLA is economically insolvent at scale. The product-attack version of this (Objection 11) covers the operational risk. The economic version adds: the $19/month price point does not generate enough margin to hire support infrastructure at the volume where the SLA becomes burdensome.

The structural solution is: (a) narrow the SLA to something achievable by a solo founder without consuming all available time, and (b) build a knowledge base and self-serve documentation that deflects the most common questions. A knowledge base covering the top 10 support scenarios (Etsy webhook setup, recipe entry, cancellation handling, CSV export, opening stock entry) deflects a meaningful share of contacts.

A crisis scenario (50 tickets in 48 hours during a flash sale affecting multiple accounts) is the hardest case and has no solo-founder solution. The founder must either break the SLA or stop building the product for 48 hours. At early subscriber counts (sub-50 users), this is low probability. At 500 users, it becomes plausible.

**Status: SERIOUS.** The SLA language must be narrowed before the product grows beyond 50 users. The path: update the pricing page to "best-effort same business day, weekdays" and build a public knowledge base that reduces inbound contact volume. This does not fully resolve the risk — it reduces the surface area of the promise — but the underlying solo-founder constraint is not solvable at $19/month economics without volume first.

Evidence: `run-1/site/pricing.html` (<24hr response in feature table).

---

## Objection 21 (attack-econ): "Reliable" Brand Is Unearnable at Launch — the Wedge Requires Proof That Cannot Exist on Day One

**Attack:** At launch, BatchLedger has zero users, zero webhook events processed, zero public status page history, and zero independent reviews. A buyer deciding between Inventora (known-broken, 8 reviews) and BatchLedger (zero track record, zero reviews) faces identical uncertainty. Idempotency keys and an audit trail are design promises, not demonstrated performance. The brand's most important claim is also its least defensible on the day it needs to convert.

**Kill condition:** BatchLedger does not need to actually fail to be killed by this — it needs only for early users to have no reason to trust it more than a spreadsheet. If the first 20 users do not become vocal advocates within 60 days, the "reliable" brand never ignites.

**Honest response:**

The thesis states this honestly: "The moat must be earned through reliability reputation, not assumed." The pitch's present-tense reliability claims ("doesn't break when you have a flash sale") are design promises, not proven track records.

The launch-day trust gap is real. The honest answer is that the product is unproven at launch and should be positioned as "designed for reliability, built with idempotency keys and an audit trail, and you can test it in the demo before connecting your shop" rather than claiming a reliability track record it has not yet established. The demo is the proof point available at launch — users can see the idempotency blocking work in the UI and form their own inference about the real implementation.

The first-20-users-as-advocates dynamic is the only viable trust seed at launch. The beta tester recruitment (free Pro for 12 months in exchange for testimonials) is designed for this. If those 20 users have positive experiences and are willing to write Shopify App Store reviews, the trust race starts. If they do not, the brand has no ignition mechanism.

**Status: ACCEPTED AS STRUCTURAL REALITY.** This is the honest cost of being a zero-review entrant. The mitigation is the demo (as a proof of concept), the public status page (transparency), the beta-tester-to-reviewer pipeline, and the audit trail (which lets users see exactly what happened for every deduction). None of these replace a track record; they are the best available substitutes at launch day zero.

Evidence: `run-1/business/thesis.md` (moat section, "thin and time-bounded"), `run-1/evidence/pitch-etsy-cogs.md` (moat section).

---

## Objection 22 (attack-econ): Named Reviewer Outreach as GTM Converts Near Zero — the Acquisition Funnel Is Inference on Inference

**Attack:** Capterra review profiles are pseudonymous or first-name/last-initial. Finding contact information is non-trivial. Cold-emailing strangers who left reviews 12–24 months ago for a zero-user product has near-zero conversion. The "craftybase alternative" SEO claim is explicitly labeled in the thesis as "an impression from the research sweeps, not a measured SEO statistic." The entire acquisition argument reduces to: outreach that will not convert + SEO that has not been measured.

**Kill condition:** If both named GTM channels (reviewer outreach and "craftybase alternative" SEO) fail to produce the first 50 users, the business has no validated acquisition path.

**Honest response:**

The thesis explicitly acknowledges the SEO claim is an unmeasured impression. Capterra reviewer outreach is a low-conversion channel by any standard: pseudonymous users, no opt-in context, cold contact from a zero-review product. The conversion rate assumption is implicit (the thesis says "direct outreach is viable" without stating a conversion rate).

The more realistic primary channels at days 1–30 are: (a) founder-led community posts in r/Etsy and Facebook candle-making groups, written as genuinely helpful content about the Craftybase→Stocksmith transition with BatchLedger mentioned as one option, and (b) Shopify App Store submission (which generates passive organic discovery from Shopify's own search, independent of SEO or cold outreach). The reviewer outreach is a supplemental channel, not the primary one.

The SEO channel ("craftybase alternative 2026") is measurable before committing resources: keyword research tools (Ahrefs, SEMrush, or free alternatives like Google Search Console after indexing) would show search volume and competition. The thesis should not treat this as a confirmed acquisition channel until it is measured.

**Status: MANAGEABLE — the GTM plan should reorder its channel priorities.** Community presence (r/Etsy, Facebook groups) and Shopify App Store are higher-probability first-user channels than named-reviewer outreach. The SEO channel is real but seasonal (search volume for "craftybase alternative" is highest in the 3–6 months post-rebrand) and should be validated before committing significant content resources.

Evidence: `run-1/business/thesis.md` (GTM section, SEO caveat as "impression"), `run-1/evidence/pitch-etsy-cogs.md` (90-day GTM plan Days 1–30).

---

## Open Risks Accepted

These risks are identified, honest responses have been given, but they remain unresolved or only partially mitigable:

1. **Stocksmith Studio auto-deduction capability** (Objections 1 and 18): The most important unresolved factual question. If Studio includes auto-manufacture triggers on order events, the core price wedge narrows from 5.5x to 2.3x against a 245-review incumbent. Unresolvable without a live Studio account test. Accepted as unresolved.

2. **Etsy Commercial Access approval** (Objections 2 and 16): A two-step manual gate with no published SLA. If denied or delayed past launch, the Etsy story disappears and the CSV fallback (which must also be built, not deferred) becomes the only Etsy path. Mitigated operationally by applying on day one; unresolvable until Etsy responds.

3. **WTP ceiling for price-refugee segment** (Objection 3): No evidence that the displaced-Craftybase cohort will pay $19/month. The price matches the competition but is not validated for this specific, price-sensitive cohort. Unresolvable without running the product and measuring conversion.

4. **Seasonal churn** (Objection 5): The thesis does not model Q1 churn for a seasonal seller base. The LTV math assumes stable monthly subscribers. The annual plan partially hedges this, but a price-sensitive segment is the least likely to commit annually. Accepted as unmodeled.

5. **FormulaLedger integration sprint** (Objection 7): FormulaLedger can close its integration gap in the same 4-week estimate as BatchLedger's entire build. The 12–24 month window may be shorter. Unresolvable; mitigated only by shipping faster.

6. **CSV import not built for launch** (Objection 10): The switch.html page implies a CSV import that does not exist in MVP. Must be resolved before any beta user reaches that page. Flagged as fatal-if-unresolved and actionable.

7. **Field map title-matching documentation** (Objection 12): The switch.html field map instructs title-matching; webhooks use stable IDs. Must be corrected to reflect actual implementation. Flagged as fatal-if-unresolved and actionable.

8. **Cancellations / reversal path** (Objection 14): No reversal mechanism for cancelled orders means stock counts diverge systematically for sellers with any cancellation rate. Must be disclosed or built before launch. Serious and ongoing.

9. **Multi-SKU line items** (Objection 15): Multi-item Etsy orders are common; the product must handle all line items in a receipt, not only the first. Must be confirmed in implementation before launch. Serious.

10. **"Reliable" brand unearnable at launch** (Objection 21): Zero reviews, zero track record. The trust brand is the wedge but cannot exist on day one. Accepted as a structural constraint; mitigated by demo, status page, beta-tester pipeline, and audit trail — none of which replace a real track record.

---

## Summary Table

| # | Objection | Lethality | Status |
|---|-----------|-----------|--------|
| 1 | Stocksmith Studio may cover auto-deduction at $49/mo | fatal-if-true | OPEN |
| 2 | Etsy Commercial Access denial kills core differentiator | fatal-if-true | MITIGATED (apply early) / open if denied |
| 3 | WTP ceiling is below $19 for price-refugees | fatal-if-true | OPEN (no WTP validation) |
| 4 | Competition density — Batchforja and other unnamed entrants | serious | ACCEPTED AS RISK |
| 5 | Seasonal churn destroys LTV math | serious | OPEN (unmodeled) |
| 6 | Germany-based founder serving US-centric support use case | serious | MITIGATED partially (positioning avoids tax claims; timezone workable) |
| 7 | FormulaLedger can close integration gap in one sprint | serious | ACCEPTED AS RISK |
| 8 | Free tier creates permanent parking lot for micro-sellers | manageable | MANAGEABLE (conversion gap at low persona end) |
| 9 | TAM is a recycled cohort, not a growing market | manageable | MANAGEABLE (acknowledged in thesis) |
| 10 | switch.html promises CSV import that does not exist in MVP | fatal-if-true | OPEN — must be fixed before beta |
| 11 | <24hr SLA operationally unprovable for solo founder | fatal-if-true | MITIGATED partially (narrow SLA language) |
| 12 | Field map instructs title-matching, not ID-matching | fatal-if-true | OPEN — must be fixed before beta |
| 13 | localStorage demo does not validate server-side idempotency | serious | ANSWERED (demo is a prototype; production must use DB unique constraint) |
| 14 | No reversal path for cancellations / returns | serious | OPEN — missing feature causing compounding data error |
| 15 | Multi-SKU line items per order unaddressed | serious | OPEN — must confirm multi-line handling before launch |
| 16 | Etsy Commercial Access blocks value prop; CSV fallback also unbuilt | serious | OPEN (compounds Objections 2 and 10) |
| 17 | Hero text frames "5x" as documented fact, not testimony | manageable | ANSWERED — one-sentence fix in hero subhead |
| 18 | Stocksmith Studio recipe management may need only a feature flag | fatal-if-true | OPEN (same as Objection 1) |
| 19 | Free tier covers micro-seller permanently | fatal-if-true | OPEN (converges with Objection 8) |
| 20 | <24hr SLA at $19/mo is economically insolvent at scale | serious | MITIGATED partially (narrow SLA, build knowledge base) |
| 21 | "Reliable" brand unearnable at launch | serious | ACCEPTED AS STRUCTURAL REALITY |
| 22 | Named reviewer outreach converts near zero | manageable | MANAGEABLE (reorder channel priorities) |

**Counts:** Answered: 2 | Mitigated: 4 | Open: 16
