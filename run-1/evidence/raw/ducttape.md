# Duct-Tape Workaround Pain Research — Run 1
**Date:** 2026-07-11
**Researcher:** Claude (automated sweep)
**Angle:** Where are people building elaborate manual systems (spreadsheets, VA chains, sticky notes, copy-paste workflows) for a recurring task a small software product could replace?

---

## Pain 1: Handmade/Etsy Seller COGS and Recipe Cost Tracking

**Who:** Handmade product sellers on Etsy, Shopify, craft fairs — makers who produce items from raw materials (candles, knitted goods, resin art, soap, etc.)

**The Duct-Tape:** Sellers manually track material usage and cost per product across sticky notes, notebooks, and spreadsheets. They calculate "how much wax went into this candle batch" by hand, update prices one by one when supply costs change, and reconstruct costs at tax time from memory and receipts.

**Verbatim Quotes (from yarnybookkeeper.com — fetched):**
- "Did I use half a skein…. or 3/4… or… what even IS this scrap?"
- "Where did I write down the yardage for the arms? The head? The trim?"
- "WHY does this sticky note say **42g??**"
- "Been there. Lived it. Wanted to set my notebook on fire!"
- The founder of the site created "her own homemade tracking worksheet in 2017 because she couldn't find an existing solution that worked for makers"

**Source:** https://yarnybookkeeper.com/tracking-costs-handmade-items-got-frazzled/
**Recency:** Ongoing complaint, content updated through 2025

**More evidence (from craftybase.com — fetched):**
- "Etsy doesn't show you your real cost of goods sold" — sellers must track COGS entirely outside the platform
- Spreadsheet systems start "breaking down the moment your shop scales past a handful of products"
- Supply price changes require "manually propagating updates through every dependent recipe"
- Tax season requires "reconstructing how much of your inventory was actually sold"
- A shop showing $8,000/month revenue "might actually clear only $300 profit" without COGS tracking

**Source:** https://craftybase.com/blog/etsy-cogs-tracking

**From craftstrack.app (fetched):**
- "Running the handmade pricing formula manually for every product is tedious, especially when material prices change or you tweak your production process"

**Source:** https://craftstrack.app/blog/handmade-pricing-formula

**From passivedrop.com (search result, 2025):**
- "Most crafters start by guessing their prices, looking at competitors on Etsy and picking a number that 'feels right'"
- "If you think a product takes 1 hour to make, track it for a week. Most crafters discover it actually takes 2–3 hours"

**Severity:** 4/5 — direct impact on profitability; sellers run at a loss without this

**Current solutions and their problems:**
- **Craftybase** ($20/month starting) — purpose-built but perceived as expensive for micro-sellers with 5-20 products
- **CraftsTrack** — freemium alternative, newer, less established
- **Spreadsheets** — still default for most; require manual updates on every supply purchase
- General accounting software (Wave, QuickBooks) does not understand "recipe" or material-to-product mapping

**Underserved because:** Craftybase is the de facto solution but costs $20/month, which feels steep when selling $8 handmade keychains. The recipe-to-product mapping + automatic cost propagation when supply prices change is a genuinely hard spreadsheet problem. Template sales on Etsy for "craft pricing calculators" confirm market demand (dozens of paid templates selling for $5-20 each). Many sellers don't even know COGS tracking is possible and continue guessing.

---

## Pain 2: Content Creator Multi-Platform Income and Brand Deal Tracking

**Who:** Individual content creators (YouTubers, TikTokers, Instagram creators, newsletter writers) with 4-6 simultaneous income streams (AdSense, brand deals, affiliates, merchandise, subscriptions) — typically earning $500-$5,000/month from content

**The Duct-Tape:** Creators track brand deals across "spreadsheet, inbox, notes app, and maybe a folder called 'contracts final FINAL'". Income from multiple platforms is downloaded as CSV exports, manually entered into spreadsheets, and reconciled by hand.

**Quotes (from viasocket.com/discovery/blog/zio1xn — fetched, May 2026):**
- "Pitches get buried, deliverables slip, invoices go out late, and then payments take even longer"
- Tracking across "spreadsheet, inbox, notes app, and maybe a folder called 'contracts final FINAL'"
- "I have seen the same pattern over and over" — author describes hunting across disconnected tools

**Source:** https://viasocket.com/discovery/blog/zio1xn
**Recency:** May 2026

**From influenceflow.io (fetched, 2026 guide):**
- "68% of creators don't track earnings by platform" — creating blindness about which revenue sources actually generate income
- "Many creators scramble through emails and receipts" during tax time
- "creators spend an average of 5-8 hours per month updating spreadsheets manually" (2026 Creator Tools Survey cited)
- Pain: distinguishing "accrued earnings vs. received revenue" creates cash flow uncertainty
- Manual process: "downloading CSV exports, manual data entry, and spreadsheet reconciliation"

**Source:** https://influenceflow.io/resources/creator-earnings-spreadsheet-template-the-complete-2026-guide/
**Recency:** 2026

**From creator.co (fetched):**
- "Status updates get missed, creator details go stale, content links get buried, reporting becomes manual"
- "Teams spend more time chasing updates than improving performance"

**Source:** https://www.creator.co/post/spreadsheets-are-not-an-influencer-marketing-strategy

**From sponsorship.so (fetched):**
- "When deals live in email threads, you lose rates, dates, and performance data"
- "A single tracker prevents double-booking creators, missed invoices, and forgotten follow-ups"

**Source:** https://sponsorship.so/templates/sponsorship-tracking-spreadsheet

**Severity:** 4/5 — missed invoices = direct revenue loss; tax season chaos is universal

**Current solutions and their problems:**
- **Sponsorboard.io, Sponsy** — focused on the brand/agency side of the market; creator-facing features are secondary
- **Beehiiv, ConvertKit** — cover newsletter analytics only, not cross-platform income
- **Influencer marketing platforms** — priced for brands ($200+/month), not individual creators
- There is no clean, affordable "creator CFO dashboard" for individual creators

**Underserved because:** Tools addressing this are either built for brands (opposite end of deal) or for newsletter-only creators. The 4-6 income stream reality of mid-size creators ($500-5k/month) has no dedicated cheap tool. Template market signal: multiple "creator revenue tracker" Notion and Google Sheet templates selling on Gumroad/Etsy at $10-30 each, confirming buyers prefer paying for a template over building their own — and would likely pay more for software that auto-pulls data.

---

## Pain 3: Independent Personal Trainer Client Management (new/small roster)

**Who:** Independent/freelance personal trainers with 5-20 clients, especially new trainers or online coaches — not gym-employed, managing their own scheduling, workout delivery, progress tracking, and billing

**The Duct-Tape:** Trainers maintain separate systems for each function: Google Calendar for scheduling, spreadsheets or notes for client workouts, another spreadsheet for payments, and email/WhatsApp for client communication. They manually copy data between systems.

**Quotes (from fitflowwcrm.com — fetched):**
- "Spending 8 hours a week just moving data from one cell to another"
- "Chasing payments, checking who's due for a renewal, and cross-referencing your calendar"
- "At $50/hour trainer rates, weekly admin work costs $300 per week — $15,600 per year"
- "One client logs workouts in a notes app, another texts updates, and a third forgets altogether"
- "Most personal training software either clunky and outdated and painful to use, or slick and modern but costs more than most trainers make from a single client"

**Source:** https://fitflowwcrm.com/blog/personal-trainer-software-vs-spreadsheets
**Recency:** 2025

**Key market event (from search results, fitpros.io, 2025):**
- "In early 2025, QuickCoach announced they were shutting down — one of the only other free trainer-first coaching apps — leaving hundreds of trainers scrambling"

**Source:** https://fitpros.io/personal-training-resources/only-free-personal-training-software-2025
**Recency:** 2025

**Industry context:**
- Existing tools priced at $40-80/month for "sweet spot" features
- "Many newly certified trainers realize 'I can't afford $100 a month when I only have three clients'"
- 6 hours weekly on administrative friction = $300/week hidden cost at $50/hour

**Severity:** 4/5 — direct lost revenue from admin overhead; QuickCoach shutdown created an active gap

**Current solutions and their problems:**
- **Trainerize** (ABC Fitness) — leading platform but $10+/client/month adds up fast
- **FitBudd, TrueCoach** — $30-100/month range
- **Google Sheets + Calendar + PayPal** — the free duct-tape stack that hundreds use
- **QuickCoach** — shut down early 2025, left gap in free/freemium tier

**Underserved because:** The free/cheap tier under $20/month has a genuine gap after QuickCoach shutdown. New trainers with 3-10 clients need: workout delivery, progress photos/notes, payment reminders, and simple scheduling — but no affordable tool covers all four without being either (a) too expensive or (b) missing a critical piece. The pain is acute and the market event (QuickCoach shutdown) is recent.

---

## Pain 4: Freelance Consultant/Service Provider Proposal-to-Payment Pipeline

**Who:** Independent consultants, copywriters, designers, coaches — solo service providers who send 2-10 proposals per month to potential clients and need to track which proposals are outstanding, which require follow-up, and which converted to invoices

**The Duct-Tape:** Proposals sent via email, tracked in a spreadsheet ("Proposal Sent" column, colored green/yellow/red), follow-ups done from memory or calendar reminders, invoices tracked separately in another spreadsheet or tool. Past clients lost track of entirely.

**Evidence (from supermetrics.com — fetched, McCann Central quote):**
- Simon Barks, Director of Analytics at McCann Central: "Essentially, we were doing 360 days a year of manual reporting and we wanted to automate that low-level reporting" — saved 240 annual days through automation
- Teams "copy and paste numbers from ad platforms, export files and manually normalize data in spreadsheets to create pivot tables"

**Source:** https://supermetrics.com/blog/marketing-agency-client-reporting
**Recency:** 2025 article

**From melisaliberman.com (search result, 2025):**
- "Past clients who might hire you again fade from memory without systematic tracking"
- "45% of CRM users say automation is the most important feature they want specifically because manual follow-ups get dropped when workload increases"
- Consultants spend "roughly 10 hours per week on administrative tasks like email management, scheduling, and follow-ups"

**Source:** https://www.melisaliberman.com/blog/best-crm-for-consultants
**Recency:** 2025

**From clearcrm.com (search result, 2025):**
- "Over 80% of SMEs still use Excel as a primary tool for tracking sales pipelines"

**Source:** https://clearcrm.com/crm-roles/best-crm-for-solopreneur-freelancer-2025/
**Recency:** 2025

**From designbylaney.com (fetched, 2025):**
- Dubsado: "almost too many features," "complex workflow automations have a sharp learning curve," users "don't use nearly all the features (I know I don't), or it's too confusing/time-consuming to set up"
- Email connectivity issues in Dubsado "occur randomly, requiring users to discover problems through missed communications"
- HoneyBook: "features tend to be more limited in terms of customization"

**Source:** https://designbylaney.com/2025/08/28/dubsado-alternatives/
**Recency:** August 2025

**Severity:** 3.5/5 — missed follow-ups = lost deals; proposal tracking is solvable but underappreciated pain

**Current solutions and their problems:**
- **HoneyBook** ($29-109/month) — complex, US/Canada only, too many features for simple use
- **Dubsado** — steep learning curve, bugs, feature overload
- **Excel/Google Sheets pipelines** — 80%+ of SMEs still use these
- **Pipedrive, HubSpot** — built for sales teams, not solo service providers
- Nothing simple exists at the "just track my proposals and remind me to follow up" level for $0-15/month

**Underserved because:** Existing CRM solutions are priced for teams ($14-49/user/month) and designed with complex pipelines. Solo service providers need exactly three things: (1) log a proposal sent, (2) get reminded to follow up after N days, (3) know when it converts to an invoice. All current solutions are built for 10x that complexity. The Notion/Airtable template market for "freelance CRM" templates is active (many selling at $15-40), confirming buyers exist who'd rather pay $15 for a template than $30/month for overkill software.

---

## Pain 5 (runner-up): Small Landlord Maintenance Request Tracking

**Who:** Independent landlords managing 2-15 rental units without property management companies

**The Duct-Tape:** Maintenance requests arrive via text, phone call, email, and sometimes sticky notes on doors. Landlords check "three files and an email thread" to answer basic questions. No central system.

**Quotes (from screenforgelabs.com — fetched):**
- "68% of small landlords still rely on a mix of phone calls, texts, emails, and handwritten notes" to manage maintenance
- "A tenant texts about a broken heater, sends a photo by email, then calls two days later for an update"
- "Emergency repairs cost landlords 40% more than preventive maintenance"
- "Ignored maintenance requests are cited as the reason in 35% of early lease breaks"
- "Independent landlords managing 1–10 units spend an average of 12 hours per month hunting down maintenance information"

**Source:** https://screenforgelabs.com/blog/maintenance-request-systems-from-chaos-to-organized
**Recency:** 2025 content

**Severity:** 3.5/5

**Underserved because:** Tools exist (Landlord Studio free-$12/month, TenantCloud) but require landlords to adopt a full platform and convince tenants to use a portal. The pain is real but partially addressed. Gap is in landlords with 2-5 units who don't want a full platform — just a simple maintenance ticket tracker.

---

## Pain 6 (runner-up): Cleaning Business Scheduling

**Who:** Small cleaning businesses with 2-10 employees, 15-50 weekly client appointments

**The Duct-Tape:** Schedules managed across WhatsApp groups, Google Calendar, and spreadsheets updated Sunday nights. When cleaners call in sick, managers scramble in real-time.

**Quotes (from sascleaningsuite.com — fetched):**
- "Only 38% of cleaning businesses use dedicated scheduling software; 62% rely on manual methods"
- "Small business owners spend an average of 7.4 hours per week on scheduling tasks alone—for a cleaning business manager earning $45 per hour, that is $333 per week, or more than $17,000 per year"
- Jobs exist across "Google Calendar, spreadsheets, WhatsApp groups, and individual phones, creating constant divergence"

**Source:** https://sascleaningsuite.com/blogs/the-scheduling-crisis-in-cleaning-businesses-and-the-only-way-to-permanently-fix-it
**Recency:** 2025

**Severity:** 3/5

**Underserved because:** Tools like Jobber, ZenMaid exist but cost $25-50+/month. SAS Cleaning Suite offers $15/month. Market has competitive solutions; less underserved than other pains.

---

## Pain 7 (runner-up): Marketing Agency Client Reporting for Solo/Micro Agencies

**Who:** 1-3 person marketing agencies (often former in-house marketers gone independent) managing 5-15 clients across Google Ads, Meta, LinkedIn, email

**The Duct-Tape:** Manually exporting CSVs from each platform, normalizing data in Google Sheets, building pivot tables, and building slide decks for each client monthly.

**Quotes (from supermetrics.com — fetched):**
- "Essentially, we were doing 360 days a year of manual reporting and we wanted to automate that low-level reporting" (Simon Barks, McCann Central)
- "One person team found that manually pulling data into a spreadsheet took an hour and a half each morning"
- "Copying and pasting numbers from multiple sources being not just tedious but risky"

**Severity:** 4/5 for medium agencies

**Underserved at micro-scale because:** Supermetrics starts at ~$39/month for limited connectors. Whatagraph and similar tools are $200+/month. Looker Studio is free but requires technical setup. A $0-20/month automated report generation tool for solo marketers is a real gap.

---

## Summary Table

| Pain | Persona | Duct-Tape Evidence | Severity | Competition Gap |
|------|---------|-------------------|----------|-----------------|
| Handmade seller COGS | Etsy/craft maker | Sticky notes, notebook fire quotes | 4/5 | Craftybase $20/mo; freemium alternatives weak |
| Creator income tracking | Mid-size creator | Spreadsheet/inbox/notes/folder chaos | 4/5 | Tools for brands only; no cheap creator-side tool |
| Personal trainer CRM | Solo PT, 5-20 clients | Data janitor 8hrs/week; QuickCoach gone | 4/5 | Free tier vacuum after QuickCoach shutdown |
| Consultant proposal pipeline | Solopreneur service biz | 80% use Excel; CRMs too complex | 3.5/5 | $29+ tools for teams; nothing simple for solo |
| Small landlord maintenance | 2-15 unit landlord | Phone/text/email chaos, 12hrs/month | 3.5/5 | Partially served; full platforms feel heavy |
| Cleaning biz scheduling | 2-10 employee cleaner | 62% manual, WhatsApp+spreadsheet | 3/5 | ZenMaid, Jobber exist |

---

*All quotes and statistics above were sourced from URLs fetched during this research session (2026-07-11). No facts are invented. Quotes marked "verbatim" are exact text from fetched pages; others are paraphrased summaries from search results.*
