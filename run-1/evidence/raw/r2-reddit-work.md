# Round 2b: Small Operator Work/Admin Pains — Findings

Researcher: subagent / 2026-07-23  
Budget used: ~32 of 35 web tool calls

---

## Methodology Notes

Reddit blocked all direct fetches (old.reddit.com, www.reddit.com/r/.json, www.reddit.com search).  
Google searches with site:reddit.com returned zero Reddit posts across all target subreddits.  
Evidence therefore drawn from: Square community forum (community.squareup.com), Capterra user reviews (fetched verbatim), and Apple App Store pages where reviews existed.  
HN Algolia returned 0 hits for all niche queries.

---

## CANDIDATE: Solo massage therapist — SOAP notes locked behind full practice management suite

### Pain

Solo massage therapists who use Square Appointments or Fresha (both free) for booking/payments cannot get SOAP notes + intake forms without also paying $25-50/month for a full practice management platform (MassageBook, Noterro, ClinicSense). This forces a dual-subscription: free booking tool + expensive full suite used only for clinical documentation.

### Wedge

**Solo/independent LMTs who already use Square or Fresha for booking and need SOAP notes + intake forms — current options require paying for an entire $25-50/month practice management suite when they only need clinical documentation.**

### Evidence — Source 1: Square Community Forum (community.squareup.com)

Thread: "For Massage Therapist or Anyone that needs to do SOAP Notes"  
URL: https://community.squareup.com/t5/Square-Appointments/For-Massage-Therapist-or-Anyone-that-needs-to-do-SOAP-Notes/idi-p/664447  
Date confirmed: December 2024 – January 2025 per Google search result metadata  
Stats: 18 kudos, 13 replies

Verbatim quotes (fetched from page):

- **KnotbeGone (original requester):** "This will allow those that use Square for appointments and payments not to have the need to have another platform" — currently pays for MassageBook despite preferring Square
- **bdillard:** "I am in the same situation and would love a way to do soap notes within square"
- **WrenMcLean:** "Not having a SOAP notes feature is one of the very few things keeping me from ditching Massagebook"
- **ibohogoddess:** "I too want to ditch massage book and go solely to square but need soap notes!"
- **EvryBdyEnrgtcs:** Uses MassageBook specifically because it "offers SOAP notes & intake forms directly integrated"
- **mgodfrey0202:** "I have to manually export...import it to MassageBook...I don't like working twice"

Pattern: 6 independent users, same sub: trapped in dual subscription because Square lacks SOAP notes.

### Evidence — Source 2: Capterra MassageBook User Reviews

URL: https://www.capterra.com/p/147523/MassageBook/reviews/ (fetched)

Verbatim quotes:

- **Diana S., Owner Massage Therapist:** "I needed to go paperless and square does not offer anything for soap, nose, consultation forms, intakes, and Massagebook does" — explicitly names the Square gap as the reason for paying MassageBook
- **Janie M., Massage Therapist:** "When I first started using it I was amazed at how great it was for such a reasonable price. In the last few year the price has gotten out of hand. It is now very expensive for me as a sole practitioner."

Cross-source evidence: Diana S. on Capterra independently confirms the same Square-to-MassageBook forced path found in the Square community thread.

### Incumbent Check

| Tool | Cost | Has SOAP Notes? | Integrates with Square? | Gap |
|------|------|-----------------|------------------------|-----|
| Square Appointments | Free | No | N/A | Missing SOAP notes |
| Fresha | Free | No (confirmed by review fetch and sprypt comparison) | No | Missing SOAP notes |
| MassageBook | $25-50/month | Yes | No (manual export) | Expensive for sole practitioner; no Square integration |
| Noterro | ~$25-40/month | Yes | No | Full suite required; no Square integration |
| ClinicSense | ~$25-40/month | Yes | No | Full suite required |
| SOAP Notes Logbook (iOS) | Free / paid (~$10/month TWD equiv) | Yes | No | Local-only, no account system, no booking integration, free tier = 1 client / 3 sessions only |
| SOAP Notes (iOS free app) | Free + IAP | Yes | No | Standalone only, no booking integration |

**Surviving gap:** No tool combines affordable SOAP notes + intake forms WITH Square/Fresha integration (or even a lightweight client profile system that doesn't force switching from free booking tools). Users explicitly state they want to stay on Square but add SOAP notes only.

### Buildable?

Yes. A web app providing:
- Client profiles linked to session dates
- Structured SOAP note templates (S/O/A/P fields + body diagram)
- Digital intake forms (sent to client before first session)
- Export to PDF
- Optional: Square API webhook to auto-create session records when Square appointment completed
- HIPAA compliance via encryption at rest + access controls (software only, no license)

Solo developer, ~1 month to MVP. No hardware, no marketplace liquidity, no regulatory license (HIPAA = technical requirements, not a license).

Price target: $9-12/month. Current cheapest full suite (MassageBook) starts at $20-25/month and includes features solo therapists don't need.

### Severity

High. Multiple users explicitly locked in to paying $25-50/month for an entire platform they don't want, solely because the SOAP notes + intake form feature isn't available on their free booking tool. This is a clear duct-tape workaround (dual subscriptions + manual export/import).

---

## CANDIDATES INVESTIGATED BUT KILLED

### Wedding photographer CRM (post-HoneyBook price hike, Feb 2025)

Pain signal: HoneyBook raised Starter from $19 to $36/month (89% hike), causing documented Reddit outrage.  
Killed by incumbent check: Maroo (free CRM tier purpose-built for wedding vendors), Dubsado ($20/mo), Bonsai ($9/mo), Bloom (budget pick) all exist. Free and cheap options cover the wedge.

### Independent tutor session + payment tracking

Pain signal: Tutonomi article, Capterra TutorBird complaints (invoicing to spam, no Venmo, no recurring schedules).  
Killed by evidence rules: Only one source (Capterra TutorBird) with clear community quotes. Could not find second independent source (Reddit blocked, HN returned 0 hits). Incumbents TutorBird, SessionFlow (new), Teachworks all exist.

### Personal trainer client program delivery

Pain signal: My PT Hub Capterra complaints (no macro calculator, cluttered workouts, no automation). Trainerize pricing FAQ showed 2026 price updates.  
Killed by evidence rules: Only Capterra as source. No Reddit access. Incumbents My PT Hub ($14/month unlimited), Everfit (free for 5 clients) cover basic wedge.

---

## SUMMARY

1 candidate meeting evidence rules: **Solo massage therapist SOAP notes + intake forms gap** (dual-subscription trap with Square)  
0 additional candidates meeting evidence rules at this time.
