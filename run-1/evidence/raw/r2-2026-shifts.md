# Round 2b: 2025-2026 Shift-Pains — Research Log
**Date:** 2026-07-23
**Researcher:** Claude (round 2b)
**Budget used:** ~34 of 35 web tool calls
**Mandate:** Find pains born from 2025-2026 shifts. Primary evidence only. Max 3 candidates meeting evidence rules.

---

## Evidence Rules Compliance Tracker

| Rule | Checked Against Each Candidate |
|------|-------------------------------|
| Primary community content (Reddit/HN/forum/app-store) | Required |
| 3+ independent complainants across 2+ sources | Required |
| Every quote verbatim from a page fetched via WebFetch | Required |
| Surviving gap after full incumbent check | Required |
| Buildable: 1 person, ~1 month, pure web | Required |

---

## Candidate A: Slack Price Shock for Nonprofits / Community Orgs — MEETS EVIDENCE RULES (THIN WEDGE)

### The 2025-2026 Shift
September 2025: Slack demanded Hack Club (nonprofit coding community, 80,000+ members) pay $50,000 immediately and $200,000/year — a 40x increase from their $5,000/year plan — with a 5-day deadline and threat to delete all workspace data. Gigazine reported similar surprise notices sent to other nonprofits.

### Primary Evidence — Source 1: HN thread #45283887 (fetched via Algolia API)
URL: https://hn.algolia.com/api/v1/items/45283887

**Hack Club (original poster):**
> "I got this message literally today, out of the blue, that after eleven years, we had to migrate within days"

**HN commenter A:**
> "We replaced Slack with Mattermost for one of the teams — and guess what we don't miss Slack there"
> "you get more features at least compared to the free version"

**HN commenter B:**
> "Self hosted is, effectively, just `docker up`. Saved us $1000s"

**HN commenter C:**
> "We need better regulations for data portability"

**HN commenter D:**
> "a sudden $250k bill is fatal" for most organizations of their scale

**HN commenter E:**
> "they were getting money, then they jacked up the price to a degree that all but guarantees they will lose them"

Independent voices in Source 1: 5+ distinct commenters

### Primary Evidence — Source 2: The Register Forums (fetched directly)
URL: https://forums.theregister.com/forum/all/2025/09/19/slack_nonprofit_license_hike_threat/

**Forum user 1:**
> "seems closer to a ransomware group than a legal corporation"

**Forum user 2:**
> "stories like this justify my stance" against cloud services

**Forum user 3:**
> "a 50x increase" (characterizing the $5k→$200k jump)

Independent voices in Source 2: 3+ distinct commenters

### Evidence Rules Check
- 3+ independent complainants across 2+ sources: PASS (8+ across HN + Register Forum)
- Verbatim from fetched pages: PASS (all quotes from API fetch + direct page fetch)
- Primary community content: PASS (HN is a tech community, Register Forums is a community forum)
- NOT vendor marketing: PASS

### Incumbent Check

| Alternative | Verdict |
|------------|---------|
| Mattermost (self-host) | Free but requires Docker/Linux sysadmin skills. Duct-tape workaround confirmed ("just `docker up`") |
| Mattermost Cloud | $10/user/month minimum — same cost neighborhood as Slack |
| Zulip (open source, self-host) | Free, praised by HN commenters, but same self-hosting barrier |
| Zulip Cloud (nonprofit tier) | Free for qualifying nonprofits — BUT requires application and approval process (weeks) |
| Discord | Free but consumer-UX, lacks professional threads/channels for org coordination |
| Microsoft Teams | Free with Microsoft 365 nonprofit license — requires separate Microsoft nonprofit application |
| IRC / Matrix | Too technical for volunteer-run orgs |

**CRITICAL GAP CONFIRMED:** Slack's free and Pro plans do NOT allow export of private channels or DMs. Business+ plan ($12.50/user/month) required for full export. An org suddenly cut off with a 5-day notice cannot export its private message history without PAYING the very company that's extorting them. Slackdump is a CLI workaround (technical barrier).

### Surviving Wedge Statement
**Nonprofit and community orgs priced out of Slack face a double bind: they cannot export their private channel history without buying the expensive plan Slack is pushing them to, and the free alternatives (Mattermost self-hosted, Zulip) require sysadmin skills their volunteer teams lack. No instant-setup managed migration service exists.**

**WEAKNESS:** This pain is primarily a ONE-TIME event per organization, not a recurring subscription need. Market size limited to orgs experiencing active Slack shock. Buildable as a service but recurring revenue model is hard to design.

**Severity: 3/5** — Real pain with strong evidence, but wedge is time-limited and per-org-not-recurring.

---

## Candidate B: Loom/Atlassian Billing Migration — FAILS EVIDENCE RULES (insufficient primary quotes)

### The 2025-2026 Shift
Atlassian acquired Loom (Oct 2023, $975M). Billing migration hit customers starting November 2025. Creator Lite viewer role eliminated February 2026 — all dormant workspace members auto-converted to paid seats. Loom's Trustpilot rating dropped to 1.4/5 (204 reviews).

### Primary Evidence Attempt
- Trustpilot page: **403 Forbidden** (could not fetch)
- G2 reviews page: **403 Forbidden** (could not fetch)
- Reddit threads: **could not access** (Reddit blocks WebFetch)
- Only obtained one quote (from supademo.com, a VENDOR page — BANNED as primary): "Everything was great until Loom switched to Atlassian's login system..."

### Evidence Rules Check
- 3+ independent complainants: FAIL — could not access Trustpilot, G2, or Reddit directly
- Verbatim from fetched primary pages: FAIL — only vendor blogs accessible

**VERDICT: Does not meet evidence rules. Dropping as a candidate.**

### Note on Incumbent Check (informational)
Even if evidence passed: Tella ($13/user, viewers free) directly solves the per-viewer billing problem. Cap (open source, $8/month) and ScreenPal ($4/month) cover basic async video. The surviving gap is very thin because alternatives already addressed the exact billing structure complaint.

---

## Candidate C: Notion AI Forced Bundling — FAILS EVIDENCE RULES (no verbatim primary quotes)

### The 2025-2026 Shift
May 2025: Notion moved AI from a $10/user/month add-on to exclusively available on the Business plan ($20/user/month). Teams that wanted AI were forced to 2x their plan cost. Teams that don't want AI are still paying for it in the Business plan.

### Evidence Attempt
- Reddit r/Notion: could not fetch (blocked)
- No verbatim Reddit quotes obtained
- Summary from aggregator sites (aitooldiscovery.com): "Reddit reaction was mostly negative" — PARAPHRASE, not primary
- danian.co article: "Teams pay for AI features 'nobody opted into'" — author's paraphrase, not user quote

### Evidence Rules Check
- 3+ independent complainants from primary community sources: FAIL
- Verbatim from fetched primary pages: FAIL

**VERDICT: Does not meet evidence rules. Dropping as a candidate.**

---

## Candidate D: QuickBooks Price Increases + Desktop Sunsetting — INSUFFICIENT ACCESS

### The 2025-2026 Shift
QuickBooks Simple Start: $25/month (2020) → $38/month (2025). Desktop renewal prices jumped 38% in 2026. QuickBooks is forcing Desktop users to migrate to cloud (QBO). Community forum thread "Price increase 2025" exists with complaints about "$810 annual fee."

### Evidence Attempt
- QuickBooks Community URL timed out (120s timeout)
- Quote from DualEntry article (a vendor/accounting service — BANNED as primary): "Time to look at other options"
- No primary community content successfully fetched

**VERDICT: Could not verify primary evidence. Dropping.**

---

## Summary Table

| Candidate | Evidence Rules | Incumbent Check | Buildable | Include? |
|-----------|---------------|-----------------|-----------|---------|
| Slack nonprofit shock | PASS | Partial gap survives | Yes (migration service) | YES (thin) |
| Loom/Atlassian | FAIL (no primary access) | Fails (Tella solves it) | Yes | NO |
| Notion AI bundling | FAIL (no primary access) | Partial gap | Yes | NO |
| QuickBooks sunsetting | FAIL (no primary access) | Many alternatives | Yes | NO |

---

## Why Round 2 Produced Only 1 Viable Candidate

1. Reddit is inaccessible via WebFetch — the primary community platform is blocked
2. Trustpilot and G2 return 403 errors
3. HN rate-limits aggressively (429 errors on main site)
4. HN Algolia API returned useful content only for the Slack thread
5. Most pain evidence flows through aggregator/vendor blogs that are BANNED as primary

**Recommendation for Round 3:** Use a different access method for Reddit (pushshift mirror, Reddit JSON API with different user agent, or pre-fetched snapshots). The evidence is almost certainly there — it's an access problem, not a pain existence problem.

---

*All verbatim quotes confirmed from pages fetched in this session via WebFetch. No vendor marketing pages used as primary evidence. URLs given for every source.*
