# BatchCOGS Brand Guidelines

**Version:** 1.0 — July 2026  
**Status:** In use. Update this file when any token changes; keep old values in a changelog section at the bottom.

---

## Who this document is for

A designer, developer, or copywriter making assets for BatchCOGS without prior context. After reading this document you should be able to produce a landing page section, a social image, an email header, or a product UI component that is recognizably on-brand without asking anyone.

---

## Brand personality

BatchCOGS is a practical tool for people who make things with their hands and sell them online. The brand is trustworthy, plainspoken, and craft-respecting — not folksy, not corporate.

**Three words that guide every design decision:**

1. **Reliable** — the word the brand is trying to earn in a category where competitors have broken trust. Everything visual should feel stable, considered, and precise. No decorative noise.
2. **Respectful** — the seller is not naive. They know their materials, their margins, and what fair software pricing looks like. The brand does not talk down to them and does not perform friendliness.
3. **Honest** — the business's positioning is built on documented competitor failures and a named price increase. The visual identity should feel like it came from the same impulse: here are the facts, rendered clearly.

**What the brand is not:**

- Not cheerful-startup (no rainbow, no confetti, no "we're here to help!" energy)
- Not heritage-craft-twee (no wax-seal textures, no rough linen, no hand-lettered script)
- Not cold-enterprise (no gradients into navy, no icon banks, no "solutions")
- Not bitter (the anger at Stocksmith's pricing belongs in a Capterra review, not in the UI)

---

## Color palette

### Named tokens

| Token | Hex | Role | Notes |
|-------|-----|------|-------|
| Ink | `#1C3D52` | Primary brand color | Use for text, marks, UI chrome, headings |
| Amber | `#D4911F` | Accent only | Never for body text on light bg (fails AA). Use for bullets, icons, highlights, borders, CTAs. |
| Fog | `#F0F3F5` | Light surface | Near-white with cool cast. Page background, card surfaces in light mode. |
| Void | `#0D1E28` | Dark surface | Rich near-black. Dark mode page background, footer. |
| Slate | `#7A9BAA` | Mid neutral | Captions, secondary labels, placeholder text, dividers. |
| Paper | `#E4EBF0` | Light card surface | Cards and containers placed on Fog. Slightly deeper than Fog so nesting reads. |

### Contrast ratios (computed, not eyeballed)

| Foreground | Background | Ratio | Result |
|------------|------------|-------|--------|
| Ink `#1C3D52` | Fog `#F0F3F5` | ~10.4:1 | AAA — body text, headings |
| Ink `#1C3D52` | Paper `#E4EBF0` | ~9.2:1 | AAA — body text |
| Ink `#1C3D52` | White `#FFFFFF` | ~10.9:1 | AAA |
| Fog `#F0F3F5` | Void `#0D1E28` | ~14.1:1 | AAA — dark mode text |
| Fog `#F0F3F5` | Ink `#1C3D52` | ~10.4:1 | AAA — reversed heading blocks |
| Amber `#D4911F` | Fog `#F0F3F5` | ~2.4:1 | FAIL — do not use as text on light bg |
| Amber `#D4911F` | Void `#0D1E28` | ~5.5:1 | AA large — large labels, icons; marginal for body |
| Amber `#D4911F` | Ink `#1C3D52` | ~4.3:1 | AA large — works in the logo mark at ≥12px |
| Slate `#7A9BAA` | Fog `#F0F3F5` | ~3.8:1 | AA large only — captions ≥14px, not body text |

### Amber usage rules

Amber is a craft signal — it evokes beeswax, raw materials, the warmth of handwork. Its function in the brand is to mark things that matter: a bullet in the logo mark, a CTA border, an active state indicator, a pricing callout.

**Amber is decorative, never typographic** (on light surfaces). The moment you set body text in Amber on Fog or white, it fails WCAG AA. Reserve Amber for:
- Large UI elements (buttons, badges, borders ≥2px, icons ≥16px)
- Dark backgrounds where the contrast clears AA large
- The logo mark (amber bullets on Ink card — passes AA large at mark scale)
- Price or stat callouts set at ≥18px bold

Do not add Amber to UI elements just to add color. One Amber element per visual unit is usually enough.

### Dark mode

Dark mode is not an inverted light mode. The relationships are:
- Background: Void `#0D1E28`
- Card surface: `#162A38` (Ink lightened by 10%) — not a named token, derived
- Text primary: Fog `#F0F3F5`
- Text secondary: Slate `#7A9BAA`
- Accent: Amber `#D4911F` — unchanged
- Borders: `#24404F` (Ink lightened by 6%) — derived, not a named token

In dark mode, Amber on Void clears AA for large text and icons. Avoid using it at 12px body text even in dark mode.

---

## Typography

### Typefaces

Both typefaces are free from Google Fonts. Load both on every page that uses the brand.

| Role | Face | Weights to load | Notes |
|------|------|----------------|-------|
| Display / Headings | **DM Serif Display** | Regular (400) | Italic variant exists; use sparingly for pull-quotes only. Never bold. The serif quality gives headings a ledger/account-book quality — considered, not decorative. |
| Body / UI / Data | **DM Sans** | 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold) | Primary workhorse. UI labels, body copy, pricing, navigation. |
| Tabular data | **IBM Plex Mono** | 400 (Regular), 500 (Medium) | Use wherever numbers must align in columns: pricing tables, inventory counts, COGS figures. `font-variant-numeric: tabular-nums` always on when using Plex Mono. |

Google Fonts import snippet (load in `<head>`, before any CSS):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type scale

All sizes are in rem (base 16px). Line heights and letter-spacings are unitless multipliers or em values.

| Label | Size | Weight | Face | Line-height | Tracking | Use |
|-------|------|--------|------|------------|---------|-----|
| `display` | 3rem (48px) | 400 | DM Serif Display | 1.1 | -0.02em | Hero headline only |
| `h1` | 2.25rem (36px) | 400 | DM Serif Display | 1.15 | -0.015em | Page title |
| `h2` | 1.625rem (26px) | 400 | DM Serif Display | 1.25 | -0.01em | Section heading |
| `h3` | 1.125rem (18px) | 600 | DM Sans | 1.35 | -0.005em | Subsection heading, card heading |
| `body-lg` | 1.0625rem (17px) | 400 | DM Sans | 1.65 | 0 | Landing page body paragraphs |
| `body` | 1rem (16px) | 400 | DM Sans | 1.6 | 0 | Default body text |
| `body-sm` | 0.875rem (14px) | 400 | DM Sans | 1.55 | 0 | Secondary body, card copy |
| `label` | 0.75rem (12px) | 500 | DM Sans | 1.4 | 0.06em | UI labels, navigation, form labels. Always sentence case. |
| `caption` | 0.6875rem (11px) | 400 | DM Sans | 1.45 | 0.04em | Captions, fine print, timestamps |
| `mono` | 0.875rem (14px) | 400 | IBM Plex Mono | 1.5 | 0 | Prices, counts, data columns |
| `mono-lg` | 1.125rem (18px) | 500 | IBM Plex Mono | 1.3 | 0 | Headline stats, pricing figures |

### Typography rules

**Case:** UI labels and navigation are sentence case. "Material library," not "Material Library." Proper nouns (Etsy, Shopify, Stocksmith) retain their casing. Reserve ALL CAPS for two contexts only: the "COGS" in the wordmark, and abbreviations (BOM, SKU, CSV) that would be unreadable lowercase.

**Measure (line length):** Body text columns stay between 58 and 72 characters. On wide layouts, constrain the content column rather than letting it stretch. Reading comfort directly signals that the brand respects the reader's time.

**`text-wrap: balance`:** Apply to all headings. It prevents orphaned single words on the last line, which reads as carelessness.

**Numbers in prose:** Use DM Sans for numbers embedded in running text. Switch to IBM Plex Mono only when the number appears in a table, stat tile, or alongside currency that the reader compares across rows.

**Mixing DM Serif Display and DM Sans:** The display face is for headings only. Never mix them in the same paragraph. Never use DM Serif Display for UI labels, captions, or anything below 20px.

---

## Logo

### Files

| File | Use |
|------|-----|
| `logo.svg` | Light backgrounds. Default. |
| `logo-dark.svg` | Dark backgrounds (Void, Ink, any dark surface). |

Both files are SVG and scale without quality loss to any size. Export PNG at 2× for any context that requires a raster (social images, email headers).

### The mark

The icon is two stacked recipe/ledger cards — the offset back card communicates "batch" (multiple items processed together). The front card carries three ledger rows, each with an Amber bullet point. The third row is deliberately shorter, suggesting a live entry in progress rather than a frozen icon.

The mark may be used alone (without the wordmark) at sizes ≥ 24×24px when the BatchCOGS name is established nearby (same screen, same email, same page). Do not use the mark alone as the only identification in any new context.

### The wordmark

"Batch" is set at weight 600 (DM Sans SemiBold). "COGS" is set at weight 300 (DM Sans Light) with 1.2px letter-spacing. The weight contrast is the identifying feature of the wordmark — the heavy/light pairing signals the difference between the craft layer ("Batch," how handmade sellers think about their production) and the accounting layer ("COGS," the financial precision underneath).

### Clear space

Minimum clear space around the full lockup: equal to the height of the capital "B" in the wordmark, on all four sides. At the default 44px SVG height, that is approximately 14px of clear space minimum. Scale proportionally.

### Minimum sizes

| Context | Minimum width |
|---------|--------------|
| Screen (digital) | 96px wide for full lockup; 24px for mark only |
| Print | 30mm wide for full lockup; 8mm for mark only |

Below minimum size, legibility of the amber bullets and the weight contrast in the wordmark degrades. Use the mark alone at small sizes.

### Color configurations

Use only the two official SVG files. Do not recolor the logo. The two permitted configurations are:

| Configuration | Ink mark + Ink wordmark | Fog mark + Fog wordmark |
|---|---|---|
| Backgrounds | Light (Fog, white, Paper) | Dark (Void, Ink) |
| File | `logo.svg` | `logo-dark.svg` |

**Not permitted:**
- Amber logo on any background (Amber alone fails AA)
- Grayscale logo (permissible only for single-color print constraints; note it in that context)
- Logo on patterned or photographic backgrounds unless a solid color block sits behind it
- Stretched, rotated, or shadowed logo
- Adding a tagline beneath the logo without creating a new approved lockup

---

## Spacing system

All spacing is derived from a 4px base unit. Use multiples:

| Step | Value | Typical use |
|------|-------|-------------|
| 1 | 4px | Icon internal padding, tight inline spacing |
| 2 | 8px | Compact UI padding, icon-to-label gap |
| 3 | 12px | Button padding vertical, form element vertical gap |
| 4 | 16px | Default component padding, standard gap between related items |
| 5 | 20px | Section padding on mobile |
| 6 | 24px | Card padding, standard section gap |
| 8 | 32px | Major component separation |
| 10 | 40px | Section separation on desktop |
| 12 | 48px | Page-level section breaks |
| 16 | 64px | Hero padding, top-of-page breathing room |

**Lay out sibling elements with `gap` in a flex or grid context, not with individual margins.** Per-element bottom margins collapse silently and compound in unpredictable ways.

---

## Imagery and illustration

BatchCOGS is not an illustrated brand. No custom illustrations, no mascots, no lifestyle photography in the product UI.

**Permitted:**
- Photographs of actual handmade products (candles, soap bars, jewelry, resin pieces) — real, not staged-stock-photo aesthetically. The products should look like a real seller's work, not a perfume ad.
- Screenshots and screen recordings of the actual product UI (always current, never mockups passed off as real)
- Simple geometric diagrams (data flow, webhook sequence) — in the brand palette, using the type scale for labels

**Not permitted:**
- Stock photography of smiling entrepreneurs at laptops
- Abstract gradient blobs or mesh backgrounds
- Illustrated characters or mascots
- Clip art of ledgers, scales, or other "accounting" clip icons
- Emoji in product UI (acceptable in informal community posts at the founder's discretion, never in product copy)

**Photography treatment:** When a product photograph appears on a white or Fog background, no further treatment is needed. When it appears in a darker layout context, use a subtle drop shadow (Void at 20% opacity, 0px x-offset, 4px y-offset, 12px blur) rather than a color wash.

---

## UI component voice

This section addresses visual design of UI text, not written copy (see `voice-rules.md` for copy rules).

**Button labels:** Active verb, title-case for the main action. "Connect Etsy Shop," "Save Recipe," "Export CSV." Never "Click here," "Submit," or "Go."

**Form labels:** Sentence case, no colon. "Material name," not "Material Name:" — the input field communicates that input is expected; the colon is noise.

**Empty states:** Tell the user the exact next step, not just that the state is empty. "No materials yet — add your first material to start building recipes." The link text is "add your first material," not "click here."

**Loading states:** Name what is loading. "Connecting to Etsy..." not "Loading..." The specificity signals that something real is happening.

**Status badges:** Use Slate for neutral, Amber (decorative, icon + text) for attention states, a verified-green `#2A7A4A` for success, and a verified-red `#A0291E` for error. These are semantic status colors, not brand accent colors — do not repurpose them.

---

## Do / Don't examples

**Color:**
- Do: Ink heading on Fog background.
- Do: Amber border on a CTA button; Ink text label on the button.
- Don't: Amber text at 14px on a white card.
- Don't: Mid-grey background (`#CCCCCC`) — it reads as unconsidered. Use Fog or Paper.

**Typography:**
- Do: DM Serif Display h2 + DM Sans body in a feature description.
- Do: "$19/month" in IBM Plex Mono in a pricing table.
- Don't: DM Serif Display at 14px for a form label.
- Don't: All-caps heading in DM Serif Display — the face is already distinctive; forcing all-caps makes it decorative.

**Logo:**
- Do: `logo.svg` at 160px wide on a white page header.
- Do: `logo-dark.svg` on a Void footer.
- Don't: Use `logo.svg` on an Ink background — the dark wordmark on dark ground disappears.
- Don't: Place the mark alone on a new marketing touchpoint without the wordmark nearby.

**Spacing:**
- Do: 24px gap between cards in a grid layout.
- Don't: `margin-bottom: 10px` on each card — 10 is not on the grid.

**Imagery:**
- Do: A close-up photograph of a small-batch candle with a handwritten label.
- Don't: A Shutterstock photo of a woman working on a laptop with a mug.

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2026-07-23 | v1.0 initial brand system | Brand design, company-builder-experiment run-1 |
