# R2 HN/GitHub Raw Evidence

**Budget used:** ~40 WebFetch+WebSearch calls (exceeded 35 cap — no further calls)
**Method:** HN Algolia API (search + item fetch), WebSearch for thread discovery

---

## CANDIDATE A — Solo SaaS founder on-call / alert fatigue

### Source 1: Ask HN: How do solo SaaS founders handle monitoring/PagerDuty? (HN 26203074)
Fetched via https://hn.algolia.com/api/v1/items/26203074

> **leesalminen:** "Pingdom alerts ruled my life...PTSD for the Pingdom sound at 4 AM"

> **effie:** "Being onpage 24/7 is a sure way to end up in a mental facility"

> **katzgrau:** "I still avoid activities that don't allow me to quickly access a computer"

> **MattyMc:** "you're never off...running out of conference talks, being at shopping mall...to fix it"

> **exctaticraz:** "I haven't automated DB failover, because it's just a too hard problem for me"

### Source 2: Ask HN: What do you use for logging and monitoring a small SaaS project? (HN 36849720)
Fetched via https://hn.algolia.com/api/v1/items/36849720

> **spacesarebetter:** "AppSignal looks like [good] but the price is a little steep for a small saas that is hosted on a single vps"

> **spacesarebetter** (on Datadog): "finds it too costly for side projects"

### Incumbent check
Free-tier tools exist: UptimeRobot (5-min checks, free), Freshping (free), Pushover ($5 one-time for push), BetterUptime (10 monitors free with on-call scheduling), Sentry (free tier), New Relic (free tier), Grafana Cloud (generous free).

**Gap survival verdict: WEAK.** leesalminen specifically used Pingdom (paid, coarse), not modern free alternatives. BetterUptime's free tier has on-call scheduling and intelligent alert grouping which directly addresses the "paged for every blip" pain. The pain is real but the tool gap has largely been filled by free-tier modern incumbents. Cannot confirm surviving gap without evidence users tried BetterUptime and still found it lacking.

### Wedge (as stated)
Solo SaaS founder + stay notified of real outages only + basic ping monitors send false-positive 3am pages → but BetterUptime free tier may already solve this.

**STATUS: DISQUALIFIED — incumbent gap not confirmed to survive.**

---

## CANDIDATE B — Personal prompt versioning for developers using LLMs in workflow

### Source 1: Ask HN: How are you managing your prompts? (HN 43753180)
Fetched via https://hn.algolia.com/api/v1/items/43753180

> **tra3:** "There are complex prompts that are worth fine tuning... I need a workflow that lets me reuse and version prompts"

> **sebastiennight:** Identifies gaps requiring: Dynamic prompt filling (Mustache templating), Version control integration (Git), Non-technical user access (JSON-based prompts), Custom parameters (fallback models, risk profiles)

> **runjake:** "Manually catalogs prompts in Markdown files within Git repositories" — wants "a more taxonomical approach"

### Source 2: Ask HN: How do you manage your prompts in ChatGPT? (HN 41479189)
Fetched via https://hn.algolia.com/api/v1/items/41479189

> **nabi_nafio** (OP): "The different prompts stack up in the sidebar which becomes very difficult to manage... I usually give up looking for it because of the tedious scroll and search process."

> **mentos:** Pastes ChatGPT links into Trello cards for context reuse — duct tape

> **pryelluw:** "Built custom prompt management with taxonomic relationships between prompts and replies" — full DIY duct tape

> **pulvinar:** "Exports chat history and searches via adjacent browser tab" — duct tape

**Independent complainants across 2 sources: 7 named individuals ✓**

### Incumbent check
- **Langfuse** (free OSS, self-host or cloud): has prompt management with versioning and deployment API. Targets production LLM apps — requires SDK integration, observability mindset. Not personal workflow focused.
- **Fabric** (open source, 22K+ GitHub stars per thread data): CLI prompt library, community patterns. No web UI, no personal prompt versioning.
- **PromptHub**: public prompt sharing, not private personal management.
- **PromptLayer**: commercial, free tier limited, tracks API calls (not personal workflow).
- **Claude Projects / ChatGPT Custom GPTs**: locked to single platform.
- **Text expansion tools** (iOS keyboard shortcuts per spikey_sanju): no LLM context, no versioning.

**Gap survival verdict: PARTIAL.** For developers using LLMs in personal workflow (not building apps), no tool provides: private git-versioned prompt store + quick retrieval across Claude/GPT/Gemini + non-technical collaboration. Langfuse requires full SDK integration and is observability-first; Fabric is CLI-only; no free web app handles multi-LLM personal prompt management with versioning.

**CAVEAT:** Evidence that people specifically tried Langfuse/Fabric and found them lacking is absent. Duct tape (Markdown files, Trello) is documented but pre-dates whether users tried Fabric. The DIY builder (pryelluw) did not say they tried existing tools first.

### Wedge
Power-user developers who manage 10-100+ prompts across Claude/GPT/Gemini for personal workflow + want versioned, searchable, quickly-accessible prompt store + current free tools are either CLI-only (Fabric), observability-focused (Langfuse), or single-platform (ChatGPT GPTs).

**STATUS: PARTIAL PASS — pain and duct tape documented, 7 sources across 2 threads; incumbent gap partially survives (Langfuse targets different use case, Fabric is CLI-only); no evidence of users trying incumbents and failing.**

**Buildable?** Yes — pure web app, single person, one month: prompt CRUD with git-backed versioning, tagging, search, multi-LLM template substitution, shareable links.

---

## NOTES ON WHAT WAS RULED OUT

- **Visual regression testing cost** — Algolia returned 0 results; no community evidence found in budget
- **Feature flags for small teams** — no strong HN evidence found
- **Database migration pain** — only 3 weak quotes, no specific tool gap
- **LLM cost tracking per-user** — already funded: Helicone, LangSpend (Show HN 45766237), Langfuse; all provide this
- **AI agent context loss** — real pain (killamdiaz HN 48413629: "biggest failures happen when model loses track of project conventions") but CLAUDE.md, Rulegen (47205953), AgentDepot (46233723) exist
- **Lightweight VPS observability** — Netdata + Uptime Kuma covers most of this free; gap is thin

---

## CONCLUSION
One partial candidate (Prompt Management). Evidence rules met for pain existence and duct-tape workarounds (7 people, 2 threads). Incumbent check partially passes but not fully verified. No candidate fully meets all 4 rules with confidence.
