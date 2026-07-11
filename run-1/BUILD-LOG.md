# Build Log — run-1

Running log of decisions, self-answered questions, gate results, and cuts. Newest at the bottom. Format: **[phase] Decision/Q** — answer — why.

## 2026-07-11

- **[P0] Q: The master prompt names API keys in `.env` — do they exist here?** No. Verified: no `.env` in this project; global filename+content sweep found the key names only in this session's own transcript. **Why it matters:** videos/images must use free local tooling (guardrail 1 allows only already-keyed APIs). Cut logged: premium avatar/voice/image quality.
- **[P0] Q: "Founder script passes my voice rules" — whose rules?** The video author's; no voice-rules file exists in this environment. **Decision:** write explicit voice rules in `brand/voice-rules.md` (labeled inference) and gate the script on them. Better a stated, checkable standard than an invisible one.
- **[P0] Decision: `git init` (local).** The dir wasn't a repo; checkpointing protects a long autonomous run. Publishes nothing → guardrail 2 intact.
- **[P0] Decision: model budget.** Sonnet for fan-out research/mechanical builds, Opus for judgment (judging, thesis, red team). Main loop orchestrates + verifies only. Reason: context survival + effort matched to task complexity.
- **[P0] GATE G0 (RED): PASS.** Pipeline proven end-to-end: HTML → Edge headless (`--headless=new` + isolated profile; plain `--headless` fails silently — noted) → PNG (visually verified) → ffmpeg-static + System.Speech wav → smoke.mp4 (3.65s, h264+aac) → frame re-extracted and viewed. Voices available: Zira (en-US, female) only for English → the founder voice is Zira; Sabina/Helena are Spanish. WebFetch verified working.
- **[P0] Decision: renderer = Microsoft Edge headless** (Chrome not installed; Edge supports identical flags). Screenshot tool for site verification will use the same path.
- **[P0-revision] Decision: renderer = Playwright bundled Chromium, NOT Edge.** Edge auto-updated mid-session (149→150; BITS updater artifacts in %TEMP%) and began exiting silently without writing screenshots — non-deterministic system state. Pivoted per premortem F3 fallback chain. Playwright Chromium is isolated from system browsers and also captures console errors (feeds gate G4). Verified: mobile (390x844) + desktop (1440x900) shots OK; linkcheck.mjs proven to detect broken links (2/4 test case).
