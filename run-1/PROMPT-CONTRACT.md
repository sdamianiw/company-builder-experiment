# Prompt Contract — run-1

Source of truth: 5 screenshots of `master-prompt.md` in the project root (read 2026-07-11). Memory is not a source; this file restates the mission in my own words and records the adaptations forced by ground truth.

## Mission
Starting from nothing but the open internet: find a real, painful, underserved problem people are complaining about right now → design a business around it → build the brand, the product website, and launch + founder videos → red-team it → package it so a stranger could take it to market this month, with evidence for why it would work. This is a test of autonomy: every call is mine, every call is logged with its why, and momentum never stops.

## Guardrails (hard)
1. **No new spending.** No paid services, no purchase signups, no domain registration (availability check only). The master prompt allowed Kie.ai / ElevenLabs / HeyGen *if keys exist in `.env`* — verified 2026-07-11: no `.env`, no keys anywhere on this machine → those APIs are OUT; free local alternatives are IN (Windows TTS, headless-browser rendering, ffmpeg-static, hand-built SVG).
2. **Publish nothing.** Everything stays local/in-repo. No deploys, posts, emails, or messages to any real person.
3. **Invent nothing.** Every quote, stat, complaint, competitor fact, and market claim traces to a real URL actually fetched (see `evidence/ledger.md`). Inference is labeled as inference. Unverifiable → said so. Smaller-and-real beats grand-and-plausible.
4. **All artifacts live in `run-1/`.**
5. **Never ask the user.** Questions get answered by research + reasoning and logged (Q / answer / why) in `BUILD-LOG.md`. Blocked is not an option: if a phase stalls, ship the strong 80% version, note what got cut, keep moving. Stop only when the definition of done is met.

## Orchestration doctrine
Multi-agent, aggressively: parallel researchers across sources and angles; tournaments where independent agents pitch competing businesses and judge panels score them; skeptic agents whose only job is to refute; a completeness critic before any phase closes. Patterns are a floor, not a ceiling. Main loop stays thin (orchestrate + verify); heavy work runs in Opus/Sonnet subagents; artifacts live on disk.

## The arc
1. Hunt for pain → 2. Pick the winner → 3. Design the business → 4. Build the brand → 5. Build the thing → 6. Launch video → 7. Founder video → 8. Try to kill it → 9. Package it.

## Deliverables
The arc's outputs are the floor. Extras chosen for maximum "this company feels real" (2–3 from: ad creatives, investor one-pager, social assets, walkthrough video, onboarding emails, pitch deck) **plus at least one deliverable nobody would expect**. Quality beats quantity: one polished, verified artifact beats three rushed ones. Every extra is linked in recap's deliverables map.

## Definition of done (the stranger test + self-grade)
A stranger opens `recap.html`, understands the business in 5 minutes, runs the site locally, watches the launch video, and leaves either convinced or precisely informed why not. Before finishing, grade against:
- [ ] Every guardrail held (audit with evidence)
- [ ] Every claim in the thesis has a live URL that was actually fetched
- [ ] Site screenshot-verified on mobile (390px) and desktop (1440px)
- [ ] Both videos render and were actually watched (frame verification)
- [ ] Founder script passes the voice rules (see `brand/voice-rules.md` — self-defined, labeled inference, since no voice-rules file exists in this environment)
- [ ] recap.html links to every deliverable and every link works (automated check)
- [ ] Brand guidelines complete enough that a stranger could make a new on-brand asset from them alone
- [ ] Red team ran; its objections are visible in the final docs
- [ ] Nothing in the package is a placeholder pretending to be finished work

## Environment adaptations (vs. the video's environment)
| Assumed | Actual | Adaptation |
|---|---|---|
| `.env` with KIE_AI / ELEVENLABS / HEYGEN keys | Absent (verified) | Windows `System.Speech` TTS; HTML scenes → headless-Chrome frames → `ffmpeg-static` mp4; SVG art. Cut: premium AV quality. |
| Owner's personal voice rules | No such file | Voice rules written explicitly in `brand/voice-rules.md`, labeled inference; founder script gated on them. |
| Existing repo | Fresh dir | `git init` local only (publishes nothing). |
