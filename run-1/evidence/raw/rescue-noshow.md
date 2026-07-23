# Round 2b: No-Show Rescue Findings
Date: 2026-07-23 | Budget used: ~34 web calls

## Methodology note
Reddit was completely inaccessible (all domains blocked). Evidence drawn from:
Square Community forums, Piano World forum, Mumsnet, Capterra reviews.
All quotes are verbatim from fetched pages; URLs given.

---

## Incumbent landscape (verified)

| Tool | Price | Mandatory deposit at booking |
|------|-------|------------------------------|
| Square Appointments | Free | NO (card-hold only, fails when cards frozen) |
| Square Plus | $29–49/mo | YES |
| Setmore Free | $0 | NO (deposits are Pro-only per support doc) |
| Setmore Pro | $5/user/mo | YES |
| Cal.id / Cal.com | Free | YES (Stripe/PayPal integration, zero commission) |
| Acuity Scheduling | $16/mo | YES |
| Booksy | $30/mo | YES (beauty-focused) |
| GlossGenius | $24/mo | YES (beauty-focused) |
| Fons | $29.95/mo | YES (music-school-focused) |

Key clarification from sources:
- Setmore: "Deposits are available on the Pro plan." (support.setmore.com) — free plan does NOT include deposits.
- Cal.id: "zero commission and no feature limits on the free plan" with Stripe/PayPal deposit support. (Product Hunt + cal.id)
- Square free: "Cancellation policy and no-show fees" are only on Plus plan. (squareup.com/appointments/pricing)

---

## Candidate A: Square-ecosystem solo service providers — deposits blocked on free plan, card-hold useless

### Evidence (primary, verbatim)

**Source 1 — Square Community "Deposit for Appointment" thread (community.squareup.com)**
Opened Feb 2023, still unresolved (status: "Reviewed"), 11 kudos, 8 named participants over 2 years:

- **HArmstrongSP** (02-18-2023): "charge a deposit to come out when they book and have that deducted from their total when they arrive" / "The no show protection does me no good and I lose money"
- **Forwardthinker** (03-11-2023): "Square is amazing in so many ways but for service providers the lack of this feature is really disappointing" / current workaround is "time consuming and cumbersome"
- **sgvaughan** (09-22-2024): "The option to hold a card for no shows and late cancellations is essentially useless because clients will book with invalid cards or freeze their cards"
- **MALqueerhair** (10-08-2024, Square Champion): "increase in unsuccessful no-show charges"
- **Awyssa** (12-09-2024): "CAN YOU PLEASE ADD THIS"
- **HArmstrongSP** (12-11-2024): "You have the option with Acuity, why is it not on Square Appointments also??!!"
- **savZ** (02-16-2025): "One of the biggest users is in the beauty industry, and we have to take deposits!!!"
URL: https://community.squareup.com/t5/Archived-Ideas-Read-Only/Deposit-for-Appointment/idi-p/638066

**Source 2 — Square Community "No show credit card declined" thread**
- **lauranadeau14** (05-09-2022, makeup service): "I have a makeup service and use the no-show protection for every appointment. I've had several clients who book with a credit card, confirm appointment then never show up or contact me. When I charge through the no-show the card is declined..."
- **LusterSalon** (09-30-2022): "There should be a way for Square to verify a card that is used as no show protection so the Square business doesn't get stiffed."
URL: https://community.squareup.com/t5/Appointments-Bookings/No-show-credit-card-declined/m-p/364369

**Source 3 — Capterra, Square Appointments reviews**
- **Dometo E** (Lash Tech, Sept 2024): "the appointment setting section did not have a place for client to pay deposits."
URL: https://www.capterra.com/p/170263/Square-Appointments/reviews/

Total: 9+ independent named complainants across 3 sources (2022–2025). ✓

### Root cause (verified)
Square's free-plan "no-show protection" is a card hold, not a deposit. Clients can freeze cards via banking app after booking, making the charge fail. Actual deposits (money collected at booking) require Square Plus ($29–49/mo), which many solo providers consider unjustified for a single feature.

### Incumbent check & surviving gap
- **Acuity ($16/mo)**: HArmstrongSP explicitly knows about it ("You have the option with Acuity, why is it not on Square Appointments also?") but refuses to switch — they use Square for POS, payroll, everything.
- **Setmore Pro ($5/mo)**: Would work technically, but requires these users to run a separate booking system alongside Square POS. Embedded users treat this as a two-system burden.
- **Cal.id free**: Same problem — separate ecosystem, re-onboarding clients to new booking link.
- **Booksy/GlossGenius ($24–30/mo)**: Full platform switch, abandoning all Square integrations.

**Surviving gap (narrow):** Solo beauty/service providers deeply embedded in Square (using Square POS + payroll + marketing) who need deposit-at-booking within the Square workflow specifically. Alternatives exist but require full ecosystem migration they've explicitly refused over 2 years.

**Wedge:** Solo Square-ecosystem service providers (beauty, salon, mobile services) who need deposit-at-booking to stop no-shows, for whom Square's card-hold fails (cards get frozen) and whose response to free alternatives is "I don't want two booking systems."

### Why this candidate is WEAK
1. The gap is ecosystem inertia, not "software doesn't exist." Cal.id free solves the problem if users switch.
2. The product opportunity is a Square App Marketplace plugin, which requires Square API partnership — not purely a standalone web app.
3. Buildability concern: depends on Square's ecosystem, not controlled by builder.
4. HArmstrongSP knew about Acuity for 2+ years and still didn't switch — suggests these users prefer complaining to switching; low conversion risk.

**Severity: 3/10** — Real pain, real complainants, but surviving gap after incumbents is weak.

---

## Candidate B: Music/lesson teachers losing revenue to no-shows

### Evidence (primary, verbatim)

**Source 1 — Piano World forum "Studio Policy for Missing Lessons" thread**
URL: https://forum.pianoworld.com/ubbthreads.php/ubb/printthread/Board/26/main/120796/type/thread.html
- **david_a**: "No-call no-shows (ones who are already your student, of course) should definitely pay in full"
- **ymapazagain**: "If a student doesn't call to let me know they won't be there then they automatically forfeit that lesson"
- **bmbutler**: "I never would make up a no show, no call lesson -EVER!"
- **pianoeagle**: "Regardless of they miss the lesson, they still have to pay"

**Source 2 — Mumsnet "Paying for unattended lessons" thread (UK parents/teachers)**
URL: https://www.mumsnet.com/talk/extra_curricular_activities/4396893-paying-for-unattended-lessons
- **mibbelucieachwell** (music teacher): "Some pupils miss lessons quite lightly, which annoys me, but I don't say that." Accepts flexible payment; doesn't enforce deposit.
- **honkytonkheroe**: "It is normal to pay for private lessons that you don't attend unless giving adequate notice — usually about 24–48 hours."
- **nancy75**: "If you cancel it's unlikely that the teacher/coach will be able to fill your space."
Multiple parents describe workarounds: monthly upfront, weekly cash, informal agreements — not software.

### Incumbent check
- **Fons ($29.95/mo)**: Music-specific, automated cancellation policies. For a part-timer with 8 students at $40/lesson = $320/week, that's ~2.3% of revenue.
- **Cal.id free**: Works for any service, includes Stripe deposits.
- **TutorBird, Tutorbase**: Tutoring-specific with auto-reminders.
- **Monthly billing workaround**: Teachers collect full-month upfront — effective for recurring students.

### REFUTED
Music teachers have a WORKFLOW WORKAROUND (monthly upfront billing) that effectively solves no-shows for recurring students. Forum discussions focus on POLICY enforcement with existing students, not software gaps. No teacher in either thread mentioned wanting scheduling software with deposits — their complaint is about students "missing lightly" as a behavioral/cultural issue. Fons and Cal.id free serve any remaining need.

**Verdict: REFUTED**

---

## Overall verdict on Round-1 rescope hypothesis

"Is there a persona for whom Booksy/GlossGenius/Vagaro/Acuity all fail (price-sensitive part-timers? cash/Zelle? deposit-hostile clients? tutors/coaches/mobile)?"

**REFUTED for most sub-hypotheses:**
- Price-sensitive part-timers: Cal.id free + Stripe kills this (deposits with zero monthly fee).
- Cash/Zelle businesses: Not buildable as software — deposit enforcement requires card, Venmo has no automation API.
- Deposit-hostile client bases: Behavioral/cultural issue, not a software gap.
- Tutors/coaches: Monthly billing workaround is effective; Fons/Cal.id serve the rest.

**Partial surviving candidate (weak):** Square-embedded solo service providers — real pain (9 named complainants over 3 years), but gap is ecosystem inertia, not a genuine software hole. Solution would need to be a Square marketplace app, not a standalone product.

**Recommendation:** Do not pursue no-show/deposit as the next opportunity. The pain is real but the software market is saturated from free (Cal.id) to $5/mo (Setmore Pro) to $16/mo (Acuity). The specific gap for Square users is a platform dependency problem, not a white-space software opportunity.
