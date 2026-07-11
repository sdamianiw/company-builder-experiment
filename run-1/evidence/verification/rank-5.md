# Skeptic Verification: AI Subscription Spend Governance for Small Teams (Rank 5)

**Verdict: WEAK**  
Date verified: 2026-07-11  
Verifier: Skeptic subagent

---

## 1. URL Verification

### URL 1: https://bluewave.net/blog/why-ai-spend-is-harder-to-track-than-cloud-spend/

**Status: LIVE** (page dated June 5, 2026)

**Supporting quote found verbatim:** YES  
The exact phrase "What are we actually spending on AI? is incredibly hard to answer with confidence." appears on this page.

**Statistics (4x growth, 78% unexpected charges) found:** NO  
Neither the 4x growth figure nor the 78% IT leader figure appear on this page. The page contains qualitative pain descriptions but no quantitative statistics matching the claim.

**Relevant verbatim quotes found:**
- "What are we actually spending on AI? is incredibly hard to answer with confidence."
- "Fragmented AI costs buried in SaaS add-ons, per-user subscriptions, token-based usage, and shadow deployments make it hard to govern risk."
- "There is no single 'AI' invoice to reconcile, and no easy way to connect those costs back to specific use cases."

**Assessment:** The source is live and supports the qualitative pain point. The specific statistics attributed to this source in the claim are NOT present. The quote is real but the other statistics are sourced elsewhere or fabricated.

---

### URL 2: https://www.cledara.com/blog/shadow-ai-finance-guide

**Status: LIVE** (page dated June 22, 2026)

**Exact supporting quote found:** NO  
The phrase "What are we actually spending on AI? is incredibly hard to answer with confidence" does not appear on this page.

**78% statistic found:** YES  
"78% of IT leaders reported unexpected SaaS charges due to consumption-based or AI pricing models in 2025." - this appears on the Cledara page.

**Small team pain specifically addressed:** NO  
The page focuses on shadow AI generally, not specifically on small teams. It defines shadow AI and provides finance guidance, but does not specifically call out the 5-100 employee segment as underserved.

**Assessment:** URL is live and the 78% figure is real (from 2025 data). However the quote is misattributed - it appears on bluewave.net, not this URL. The page does NOT make the small-team-specific case.

---

## 2. Statistics Validation

| Claim | Source | Verified? |
|---|---|---|
| Monthly AI spend grew 4x, Feb 2025 to Feb 2026 | Ramp AI Index | YES - confirmed by multiple sources including Ramp's own published data |
| 78% of IT leaders hit unexpected charges | Cledara blog (citing 2025 study) | YES - found verbatim on cledara.com |
| Only purpose-built dashboards target 200+ employees | Competitive sweep | PARTIALLY ACCURATE - see below |
| These tools cost $10K+/year | Competitive sweep | OVERSTATED - see below |

---

## 3. Competitive Landscape Analysis

The claim that "the only purpose-built dashboards target 200+ employees at $10K+/year" is materially overstated. Here is the actual competitive landscape:

### Tools that partially or fully serve 5-100 employee teams:

**Ramp (Free tier + AI Token Spend Management)**
- Cost: Free for the core platform; Plus at $15/user/month
- AI spend tracking: Ramp has a dedicated "AI Token Spend Management" product that tracks spend across Anthropic, OpenAI, and other providers, breaking down by model and team
- Critical caveat: Requires companies to adopt Ramp corporate cards. Not a standalone tool.
- Accessibility: Ramp explicitly markets to small businesses and has an unlimited free tier
- Verdict: This is the single biggest hole in the claim. A small team willing to switch to Ramp cards gets AI spend visibility for FREE. The claim does not acknowledge this.

**Cledara (~£100-1,500+/month)**
- Entry cost: £100/month (~$1,500/yr) - NOT $10K+/year as claimed
- AI-specific tracking: No explicit AI-specific dashboard. General SaaS management with virtual cards.
- Target: 25-150 staff (Basic/Premium tiers), so it does serve the 5-100 segment
- Requires: Use of Cledara virtual cards
- Verdict: Weaker than claimed. It's not AI-specific and doesn't meet the $10K+ threshold cited.

**CostLoop ($9/month)**
- Cost: Free up to 5 subscriptions; $9/month Pro
- Target: Explicitly serves freelancers, startups, teams up to 200 people
- AI-specific tracking: NO - generic SaaS subscription tracker with no AI-specific categorization
- Verdict: A low-cost workaround exists. It doesn't distinguish AI from non-AI SaaS, but the core "what am I spending on subscriptions" problem is partially addressed.

**Helicone (Free to $79/month)**
- Cost: Free tier (10K requests/month, 2 seats); $79/month Pro
- What it does: API token spend tracking for LLM calls - breaks down by model, user, team
- Limitation: Only tracks API token usage, not SaaS subscription spend (ChatGPT Pro, Notion AI, etc.)
- Verdict: Solves half the problem (API tokens) at low cost, but misses the SaaS subscription side.

**Torii (minimum ~$3,000/yr; enterprise $15K-35K/yr)**
- Launched AI Management Platform May 2026
- AI Dashboard tracking by employee, model, time window
- Minimum contract: $250/month = $3,000/yr (but real-world enterprise contracts much higher)
- Verdict: Out of range for a 5-person team but not as extreme as Zylo

**Zylo ($20K-100K/yr)**
- Clearly enterprise-only. Claim is accurate here.
- Designed for companies 500-2,000+ employees

### Summary Assessment of Competition:
The claim is directionally correct that enterprise tools dominate, but significantly overstates the gap by ignoring:
1. Ramp's free tier with AI spend tracking (biggest counter-argument)
2. Cledara's actual entry pricing (~$1,500/yr, not $10K+)
3. CostLoop's existence at $9/month for generic SaaS tracking

The actual unmet need is more precise: an AI-specific SaaS subscription dashboard that:
- Does NOT require switching corporate card providers (unlike Ramp, Cledara)
- Distinguishes AI subscriptions from general SaaS spend
- Costs under $100/month
- Requires no enterprise procurement workflow

That gap is real but narrower than stated.

---

## 4. Recency Assessment

**Is this a current 2025-2026 pain?** YES, emphatically.

- Ramp data: Monthly AI spend grew 4x from February 2025 to February 2026
- Zylo's 2026 index shows AI-native spend up 393% inside enterprises over 10,000 employees
- Shadow AI usage up 156% since 2023
- Median AI spend for SMBs: $18K/year (up sharply from prior years)
- Torii only launched its AI Management Platform in May 2026
- Multiple new tools entered in 2025-2026

The pain is undeniably current and growing. The 4x growth figure is real and sourced from Ramp's own platform data (not a survey). This is not stale.

---

## 5. Buildability Assessment

**Could one person build meaningful software for this in a month?**

**Weakly yes, with serious caveats.**

What's buildable in a month:
- A web app that ingests credit card CSVs or connects via Plaid
- LLM-based categorization of charges into AI vs. non-AI SaaS buckets
- Dashboard showing AI subscription spend by vendor, trend, and per-seat cost
- Email digest and renewal alerts

What makes this hard:
- **Bank/card integration**: Plaid approval takes time; Finicity, MX similar. Without live bank feeds, it's CSV-only, which reduces stickiness.
- **Vendor database maintenance**: Identifying "what counts as AI spend" requires maintaining a list of AI vendors and distinguishing AI from non-AI charges for mixed vendors (e.g., Google Workspace with Gemini add-on vs. pure Google Workspace).
- **Distribution**: Ramp is free and already used by many small businesses. "Why not just switch to Ramp?" is a strong objection that requires a compelling answer.
- **Token spend tracking**: API spend (OpenAI API, Anthropic API) requires either connecting to provider APIs directly or catching it via credit card charges, neither of which is trivial to automate cleanly.

**Defensibility concern**: If Ramp, Cledara, or CostLoop adds "AI spend" as a filter/category label, the differentiation evaporates. This is a feature, not a product.

---

## 6. Key Weaknesses in the Claim

1. **Quote attribution error**: The supporting quote ("What are we actually spending on AI?") is on bluewave.net, not the cledara.com URL also listed. Minor but sloppy.

2. **Ramp is free and already serves this market**: The biggest factual error in the claim. Ramp has a free tier and an AI Token Spend Management feature. For any company willing to use Ramp corporate cards, this pain is already solved at zero cost. The claim ignores this entirely.

3. **"$10K+/year" pricing is overstated**: Cledara starts at ~$1,500/yr (£100/month). This is below the $10K threshold claimed. The claim is only accurate for Zylo and Torii.

4. **CostLoop ($9/month) already exists for generic SaaS tracking**: While not AI-specific, it directly competes with the value proposition at essentially no cost.

5. **The problem is bifurcated**: API token spend (Anthropic, OpenAI API) and SaaS subscription spend (ChatGPT Pro seats, Cursor, GitHub Copilot) are different problems requiring different solutions. Helicone already solves the API token side at low cost. The claim treats these as one problem.

6. **Small teams may not WANT more tools**: The market segment (5-100 employees) often avoids adding new SaaS tools. Adoption friction is high. The workaround (credit card keyword search) is low friction.

---

## 7. Verdict Summary

**WEAK** - not REFUTED, but the claim significantly oversimplifies the competitive landscape and overstates the gap.

The pain is REAL: AI spend tracking for small teams is genuinely hard. The statistics (4x growth, 78% surprise charges) are real. The quote is real.

However the claim is weakened by:
- Ignoring Ramp's free tier as a real solution (conditional on card adoption)
- Overstating pricing barriers (Cledara is ~$1,500/yr not $10K+)
- Ignoring CostLoop and Helicone as partial solutions
- The gap is a feature (AI spend categorization) rather than a standalone product category
- Multiple well-funded players (Ramp, Torii) are actively moving to serve this space in 2026

A product could be built here but would face strong "just use Ramp for free" objections and faces rapid competitive commoditization.
