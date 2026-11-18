# Nuppi website: design read

What the page is for: show a Windows user, in under a minute, what lives in the notch and get them to the installer. The product is the visual; the page frames it.

## Identity

- **The object:** a black notch hanging from the top edge of the screen, and Kopi, a 24×24 pixel black cat with amber eyes. Every product image on the page is the app's own render (`scripts/shots`), never a mock-up.
- **Motif:** things hang from a top edge. The hero notch hangs from the browser's edge, and each product image hangs from the top of its frame the way it does on a desktop.
- **Voice:** plain and warm, like the app's Indonesian and English strings. No hype words.

## Theme: light, warm paper

The notch is black. On a light page it is the darkest and most important thing in view, as it is on a bright screen; on a dark page it disappears into the background. So the page is light by choice, not by default. The trailer band is the one dark area, because video reads best on black.

## Palette (3 + 1)

| Role | Value | Use |
| --- | --- | --- |
| Paper | `#F4EFE7` | page background |
| Ink | `#1A1612` | text, frames, the trailer band |
| Muted | `#6E655A` | secondary text, captions |
| Accent | `#F5B841` (Kopi's eyes, the app's default accent) | the Download button only |

Lines are ink at 12% opacity. The app's own page tints (green, coral, teal…) appear only inside the renders.

## Type

- **Display:** Bricolage Grotesque, for its slightly irregular grotesque shapes: friendly next to a pixel cat without turning childish.
- **Text:** Plus Jakarta Sans, designed in Jakarta; Nuppi is made in Indonesia.
- Numbers in the benchmark use tabular figures.

## Dials

- **Rhythm 3:** sections change shape: a split hero, a dark full-bleed video band, a timeline, a flagship row of three images for Ask, a row of Kopi's moods, a measured table, a plain two-column list.
- **Motion 2:** the hero notch opens once on load (closed → open, like the real one when the pointer arrives) and hover states. No loops; `prefers-reduced-motion` turns the opening off.
- **Density 2:** one idea per section, short paragraphs.

## Rules for later edits

- New product images come from `scripts/shots`, copied into `site/media/`.
- Benchmark numbers come from a real `scripts/perf/run.ps1` run and say where and when they were measured. Never round them into claims they do not support.
- No feature cards with icons, no stat tiles, no glow, no gradients behind content.
