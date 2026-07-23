# BatchCOGS Voice & Tone Rules

**Version:** 1.0 — July 2026  
**Scope:** All written copy — landing page, product UI, email, error messages, social posts, founder video script, support documentation, changelog entries.

---

> **INFERENCE LABEL — READ BEFORE APPLYING**
>
> No user-provided voice rules existed in this environment at the time of authoring. These rules are self-defined by the brand designer based on:
> - The company thesis (`run-1/business/thesis.md`) and its explicit positioning as "reliable, honest, anti-corporate-greed but not bitter"
> - The pitch document's tone (`run-1/evidence/pitch-etsy-cogs.md`), which uses named evidence, direct competitor naming, and labeled inferences
> - The market context: handmade sellers who have been burned by a 5x price increase and have documented the experience in named Capterra reviews
>
> These rules are **self-defined and gate-checked below**. If the founder has an actual voice in community posts, email, or video — read it before using this document and reconcile conflicts. These rules are a starting point for a brand that does not yet have public voice material, not a transcription of an existing voice.

---

## What kind of voice this is

BatchCOGS speaks like a person who built something to solve a specific, documented problem — not a marketer who found a segment. The brand has opinions, states them plainly, and uses numbers and named sources rather than adjectives. It is warm without being friendly. It is direct without being terse.

The closest reference point: the tone of a well-written product changelog or a good technical README — someone who respects the reader's time, names things clearly, and doesn't inflate.

---

## The 12 Rules

### Rule 1 — Numbers over adjectives

**State the fact. Drop the modifier.**

Adjectives like "huge," "massive," "affordable," "simple," and "powerful" are what you say when you don't have data. BatchCOGS has data.

- Do: "Stocksmith's Indie tier is $83–99/month. BatchCOGS Pro is $19/month."
- Don't: "Stocksmith is absurdly expensive. BatchCOGS is the affordable choice."
- Do: "Five reviewers on Capterra described the price increase as 'x5.'"
- Don't: "Craftybase's price increase shocked the community."

**Testable check:** Find every adjective of degree (huge, tiny, affordable, expensive, reliable, powerful, simple) in a piece of copy. Replace each with a number or a sourced claim. If there is no replacement available, remove the adjective.

---

### Rule 2 — No exclamation marks in product copy

The enthusiasm has to come from the content, not the punctuation. An exclamation mark in product UI or landing copy signals that the writer did not trust the words to carry the energy on their own.

- Do: "Your materials updated. All 12 items deducted correctly."
- Don't: "Your inventory is up to date!"
- Do: "Batch recipe saved."
- Don't: "Recipe saved!"

**Exception (narrow):** Community posts (Reddit, Etsy forums) where the founder is speaking in an informal register, and only if the sentence genuinely warrants it. Zero exclamation marks in product UI under any circumstances.

**Testable check:** Global find for "!" in any copy draft. Each instance must be individually justified or removed.

---

### Rule 3 — Name competitors plainly

BatchCOGS's positioning is built on documented competitor shortcomings. The copy does not veil this in "leading alternatives" or "other tools." Naming competitors is honest — it lets the reader verify.

- Do: "Stocksmith (formerly Craftybase) charges $83–99/month for automatic material deduction. BatchCOGS Pro is $19/month for the same feature."
- Don't: "Unlike expensive legacy tools, BatchCOGS keeps pricing fair."
- Do: "Inventora has documented sync failures during flash sales. See Shopify App Store reviews."
- Don't: "Some competitors have reliability issues."

**Limits:** Only name a competitor when making a specific, verifiable claim. Do not speculate about competitors' motives, internal decisions, or future direction. Do not name competitors in error messages, onboarding flows, or any UI context where the reader is mid-task.

**Testable check:** Every competitive claim must include a source or link. If the source cannot be cited, the claim does not belong in copy.

---

### Rule 4 — Label verified claims differently from inferred ones

The thesis document distinguishes "evidence-verified" from "inference (labeled as such)." The same discipline applies to all copy.

- **Verified** = a specific URL, quote, or named reviewer supports it. Use "documented," "verified," or cite directly.
- **Inferred** = derived from verified data, not directly observable. Use "estimated," "we believe," "roughly," or "approximately."

- Do: "Capterra shows 245 reviews of Craftybase/Stocksmith — a real market with documented software buyers."
- Don't: "Hundreds of thousands of sellers need BatchCOGS."
- Do: "At 5% software adoption across 5.6M Etsy sellers, the addressable market is estimated at ~$51M ARR — a ceiling, not a forecast."
- Don't: "The market is worth $51M." (Stated as fact, not estimate.)

**Testable check:** For each factual claim, ask: "Is there a URL or named source?" If yes, say "documented." If no, say "estimated" or restructure.

---

### Rule 5 — No empathy theater

The brand does not perform understanding. "We know how frustrating it is..." and "We hear you..." are marketing conventions that the target audience — people who wrote detailed, frustrated Capterra reviews — will read as hollow. State the fact and the fix.

- Do: "Stocksmith's price increase was documented at 5x by named reviewers. BatchCOGS Pro is $19/month."
- Don't: "We know how overwhelming it can be when software costs spiral out of control. That's why we built BatchCOGS."
- Do: "Webhook failed for order #1234 — no materials were deducted. [Retry] [Override manually]"
- Don't: "We're sorry, something went wrong. We understand this can be frustrating."

**Testable check:** Find any sentence that begins "We know," "We understand," "We hear," "We get it." Remove or replace with a fact.

---

### Rule 6 — Active voice in all UI strings

UI strings describe what the system does or what the user does. Passive voice obscures who is acting and makes the interface feel inert.

- Do: "Save recipe" (not "Recipe has been saved")
- Do: "Connect your Etsy shop" (not "Etsy integration can be connected")
- Do: "Deducted 12 materials from stock" (not "Materials were deducted")
- Don't: "An error was encountered during sync." → Do: "Sync failed — Etsy returned a 401 error. [Reconnect]"

**Testable check:** Find every verb in UI copy. If it's in passive voice ("was saved," "has been updated," "are being processed"), rewrite to active.

---

### Rule 7 — No jargon — banned word list

The following words are banned from all BatchCOGS copy because they are either meaningless, inflated, or belong to a brand register that BatchCOGS is explicitly not:

| Banned | Reason |
|--------|--------|
| seamless | Meaningless (everything claims to be seamless) |
| intuitive | Claim the user cannot verify before trying |
| robust | Business-speak that signals nothing |
| powerful | Same as robust |
| empower | Corporate empathy theater |
| ecosystem | Implies scale not yet earned |
| leverage (non-financial) | Business jargon |
| game-changer | Superlative without evidence |
| disruptive / disrupt | Exhausted; also not what BatchCOGS is doing |
| solution(s) | Abstract; name the actual thing |
| streamline | Vague improvement without specifics |
| synergy | Never |
| next-level | Marketing fill word |
| at scale | Implies scale the product hasn't earned at MVP |

**Testable check:** Run a find on all of these terms before any piece of copy ships. Zero permitted instances.

---

### Rule 8 — Error messages are facts plus a next step — no apologies

Error messages are the brand's highest-stakes writing. A seller who just had a flash sale and sees "something went wrong" is about to lose trust. The message must:
1. State what failed, specifically.
2. Tell the user what happened to their data.
3. Give at least one concrete next action.

Structure: `[What failed] — [What happened to the data]. [Action 1] [Action 2]`

- Do: "Etsy webhook failed for order #8841 — no materials deducted. [Retry deduction] [Apply manually]"
- Don't: "Oops! Something went wrong. Please try again."
- Do: "Shopify connection expired — orders since 14:32 UTC are queued. [Reconnect Shopify] to process them."
- Don't: "There was an error connecting to Shopify."
- Do: "Duplicate order detected — #8841 was already deducted at 14:31 UTC. No changes made. [View audit log]"
- Don't: "We couldn't process that order."

**Testable check:** Find "Oops," "sorry," "went wrong," "unable to," "try again." Each must be rewritten with a specific failure description and a named action.

---

### Rule 9 — Sentence case for UI, title case only for proper nouns

Title case in product UI ("Your Material Library," "Add New Recipe") reads as over-formal and adds visual noise. Sentence case ("Your material library," "Add new recipe") is quieter and lets the content speak.

**Sentence case always:** Navigation links, button labels, form labels, table column headers, section headings within product UI, error messages, empty states, tooltips.

**Title case only for:** Product name ("BatchCOGS"), integration names ("Etsy," "Shopify"), abbreviations ("COGS," "BOM," "SKU," "CSV"), and any proper noun that is capitalized in its original form.

**Testable check:** Find any UI label where each word begins with a capital letter. Lowercase all non-proper-nouns.

---

### Rule 10 — "Reliable" is earned, not claimed

The word "reliable" appears in the brand positioning, the business thesis, and the product's core promise. It must not appear as a claim in product copy or marketing without behavioral evidence immediately adjacent.

- Don't: "BatchCOGS is reliable inventory tracking for handmade sellers."
- Do: "Every Etsy and Shopify webhook is logged with an idempotency key — no double-deductions. Public status page updated in real time."
- Don't: "Trust BatchCOGS to keep your inventory accurate."
- Do: "Every order deduction is logged with a timestamp and an idempotency key. If anything looks wrong, you can audit the full history and correct it manually."

The same applies to "trustworthy," "accurate," and "never breaks." These are conclusions the user reaches after using the product, not claims the copy makes.

**Testable check:** Find the words "reliable," "trustworthy," "accurate," "never breaks" in copy. Each must be followed within two sentences by a specific technical or behavioral fact that supports the claim.

---

### Rule 11 — Address the seller, not the product

Write from the seller's side of the screen. The seller cares what happens to their inventory, not how the system is built.

- Do: "Your materials update the moment an order lands on Etsy or Shopify."
- Don't: "BatchCOGS automatically updates material inventory upon receipt of an order event via webhook."
- Do: "You'll see exactly how many units you can still make from your current stock."
- Don't: "The system calculates producible units from current inventory quantities."
- Do: "If we ever make a mistake, you can correct it — and every correction is logged."
- Don't: "The audit trail records all manual overrides."

**Testable check:** Find every sentence in the third person ("The system...", "BatchCOGS automatically..."). Rewrite with "you" or "your" as subject.

---

### Rule 12 — Founder video: factual opening within 30 seconds

The founder video script opens on a documented fact, not a personal anecdote. The anecdote may come later, but the viewer needs a reason to keep watching before they hear the founder's story.

Structure for founder video opening:
1. **Documented fact** (within first 30 seconds): A specific, verifiable claim — a date, a price, a named event.
2. **Who this affects**: Name the specific person, not the segment.
3. **The product's claim**: One sentence, no jargon, no exclamation.
4. **Proof that the claim is true**: One feature or behavior, described specifically.

Example opening (not final copy — illustrative only):
> "In July 2026, Craftybase became Stocksmith. The entry price for automatic material deduction went from $19/month to $83/month — a change documented by named users on Capterra. If you were one of those users, BatchCOGS does the same thing for $19/month. Every order on Etsy or Shopify automatically deducts your materials. Every deduction is logged. If something ever goes wrong, you can fix it manually and see the full audit trail."

**Testable check for video script:**
- First verifiable fact appears at or before the 30-second mark: Y/N
- No word from the banned list (Rule 7): Y/N
- Competitor named if referenced (not veiled): Y/N
- No exclamation marks in script: Y/N
- Claim ("reliable," "accurate," etc.) followed by specific evidence within two sentences: Y/N

---

## Gate checklist — use before any piece of copy ships

Run this list on every landing page section, email, product string set, or video script. Every item must pass.

```
BATCHCOGS COPY GATE — v1.0

[ ] Numbers over adjectives (Rule 1)
    → Found and replaced: ___ adjectives of degree

[ ] No exclamation marks (Rule 2)
    → Count of "!" in copy: ___ (target: 0 in product/landing; justified individually elsewhere)

[ ] Competitors named when referenced (Rule 3)
    → Every competitive claim has a source URL or named reviewer: Y/N

[ ] Claims labeled: verified vs. inferred (Rule 4)
    → Every factual claim: verified (cited) or inferred (labeled): Y/N

[ ] No empathy theater (Rule 5)
    → "We know / We understand / We hear" count: ___ (target: 0)

[ ] Active voice in UI strings (Rule 6)
    → Passive voice instances found and rewritten: ___

[ ] No banned jargon (Rule 7)
    → Scanned for banned word list: Y
    → Instances found: ___ (target: 0)

[ ] Error messages: fact + next step, no apologies (Rule 8)
    → "Oops / sorry / went wrong" count: ___ (target: 0)
    → All error messages include specific failure and action: Y/N

[ ] Sentence case in UI (Rule 9)
    → Title case used only for proper nouns: Y/N

[ ] "Reliable" only with adjacent behavioral evidence (Rule 10)
    → "Reliable / trustworthy / accurate / never breaks" each followed by evidence: Y/N

[ ] Seller as subject, not product (Rule 11)
    → "The system / BatchCOGS automatically" rewritten to "you / your": Y/N

[ ] Video script: factual opening by 30s (Rule 12, if applicable)
    → First verifiable fact at or before 30s: Y/N

GATE RESULT: PASS / FAIL (all items must be Y or 0 to pass)
Reviewer: _______________  Date: _______________
```

---

## How tone shifts by context

The rules above are constant. What shifts is register — how formal or conversational the delivery is.

| Context | Register | Notes |
|---------|----------|-------|
| Landing page headline | Direct, confident | No hedging. State the claim. |
| Landing page body | Factual, slightly warmer | Can include brief context for the reader's situation |
| Product UI strings | Spare, precise | As few words as possible. Name the thing. |
| Error messages | Clinical + action-oriented | Zero warmth; the user is in a problem, not a relationship |
| Onboarding copy | Instructional | Step by step. Specific. Assumes the user is competent. |
| Email (transactional) | Factual, no marketing | "Your inventory synced at 14:32 UTC. 3 materials were deducted." |
| Email (product updates) | Slightly warmer | One-paragraph lead, then a list of what changed and why |
| Community posts (Reddit, forums) | Conversational, honest | Can be looser. Founder's voice. Still no banned jargon. |
| Support responses | Patient, specific | Never "I understand your frustration." Name the problem, describe the fix. |
| Founder video | Personal but evidence-first | Facts lead; story follows |

---

*This document is part of the BatchCOGS brand system. See also: `guidelines.md` (visual identity), `logo.svg`, `logo-dark.svg`.*
