# Quality Gate Tracker — run-1

Single source of truth for gate status. Updated at every phase close; a RED gate must show PASS (with evidence) before the next phase starts. Newest state wins.

| Gate | Rank | What it checks | Command / evidence | Status |
|------|------|----------------|--------------------|--------|
| G0 | RED | Media pipeline proven end-to-end (HTML→frames→TTS→mp4→frame re-extract) | `run-1/tools/*` smoke, BUILD-LOG 2026-07-11 | **PASS** (d1ad632) |
| G-R1 | RED | Session recovery reconciled + checkpointed | `git status --short` → empty | **PASS** (44b1ce0) |
| G1 | RED | ≥4 VERIFIED buildable pain-wedges, primary evidence, live URLs | round-2b workflow `verifiedCount` + `evidence/verification/r2-*.md` | **FAIL r1 (0/8) → round 2b IN PROGRESS** |
| G2 | RED | Winner chosen via scored tournament; every pitch claim URL-verified | tournament workflow return + BUILD-LOG entry | pending |
| G3a | RED | Business thesis claims 100% URL-traced | skeptic pass on thesis | pending |
| G3b | AMBER | Brand guidelines complete (stranger test) + voice-rules.md exists | checklist in brand/ | pending |
| G3c | AMBER | Domain availability checked via RDAP, receipt saved | evidence file | pending |
| G4 | RED | Site opens locally, 390px+1440px screenshots reviewed, 0 console errors | `node tools/screenshot.mjs` (exit 3 on console errors) | pending |
| G5 | RED | Both videos render, play, frames watched | `tools/encode-video.mjs` VERIFY + frame review | pending |
| G5b | AMBER | Founder script passes voice-rules checklist | brand/voice-rules.md checklist | pending |
| G6 | RED | recap.html + docs: 0 broken links | `node tools/linkcheck.mjs` → `broken=0` | pending |
| G7 | RED | 0 placeholders in deliverables | grep TODO/lorem/FIXME/placeholder → 0 hits | pending |
| G8 | RED | Red-team objections visible verbatim in final docs | red-team doc linked from recap | pending |
| G9 | RED | Guardrail audit: each of 5 guardrails → evidence it held | audit section in recap | pending |

## G1 decision rule (pre-committed 2026-07-23)
≥4 VERIFIED → pass, P2. · 2–3 → proceed with narrower tournament, log cut. · <2 → ONE targeted mini-sweep (≤3 agents), then proceed with best available, honestly labeled. Never a full round 3.

## Standing constraints
- Token-lean workflows: per-agent tool-call budgets, effort matched to task, skip what's on disk, null-hardened stages, graceful partial returns (lesson: wf_a9d971b6-cc6 burned 641k tokens, died on rate limits at 11% completion).
- Guardrails 1–5 of PROMPT-CONTRACT.md apply to every gate.
