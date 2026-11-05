---
name: Nostalgia 12"
description: One record at a time, displayed in a tokonoma on an earthen plaster wall; the collection waits in paulownia boxes.
colors:
  muro: "#d6d1c7"
  nicho: "#c8c1b3"
  tinta: "#182f48"
  tinta-suave: "#3c4f63"
  washi: "#f0efe8"
  montaje: "#22374f"
  madera: "#2b211b"
  madera-luz: "#4a3a2d"
  madera-honda: "#17110d"
  kiri: "#dacbb0"
  kiri-tinta: "#574632"
  bermellon: "#c0482f"
  piedra: "#9a9090"
  muro-noche: "#2b2723"
  nicho-noche: "#221f1b"
  tinta-noche: "#ece6da"
  tinta-suave-noche: "#b5ab9d"
typography:
  display:
    fontFamily: "Michroma, Zen Kaku Gothic New, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.3em"
  headline:
    fontFamily: "Shippori Mincho, Yu Mincho, Hiragino Mincho ProN, serif"
    fontSize: "clamp(14px, min(calc(64cqh / (var(--largo) * .56)), 48cqw), 76px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.04em"
  statement:
    fontFamily: "Shippori Mincho, Yu Mincho, Hiragino Mincho ProN, serif"
    fontSize: "clamp(26px, 3.5vw, 50px)"
    fontWeight: 400
    lineHeight: 1.28
  title:
    fontFamily: "Shippori Mincho, Yu Mincho, Hiragino Mincho ProN, serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Shippori Mincho, Yu Mincho, Hiragino Mincho ProN, serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
  body-story:
    fontFamily: "Shippori Mincho, Yu Mincho, Hiragino Mincho ProN, serif"
    fontSize: "clamp(19px, 1.6vw, 22px)"
    fontWeight: 400
    lineHeight: 1.8
  data:
    fontFamily: "Zen Kaku Gothic New, Yu Gothic, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  label:
    fontFamily: "Zen Kaku Gothic New, Yu Gothic, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    letterSpacing: "0.06em"
    fontFeature: "tnum"
  caption:
    fontFamily: "Zen Kaku Gothic New, Yu Gothic, system-ui, sans-serif"
    fontSize: "11.5px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  hairline: "2px"
  lid: "3px"
  roller: "7px"
spacing:
  orilla: "clamp(16px, 5vw, 80px)"
  shelf-gap: "20px"
  reading-top: "clamp(96px, 14vh, 160px)"
  silence: "clamp(120px, 18vh, 200px)"
  footer-silence: "clamp(140px, 20vh, 220px)"
components:
  speed-button:
    textColor: "{colors.washi}"
    typography: "{typography.label}"
    padding: "0 10px"
    height: "40px"
  speed-button-active:
    textColor: "{colors.washi}"
  box-lid:
    backgroundColor: "{colors.kiri}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.lid}"
    width: "214px"
    height: "132px"
  box-slip:
    backgroundColor: "{colors.washi}"
    textColor: "{colors.tinta}"
    padding: "7px 10px 8px"
  scroll-paper:
    backgroundColor: "{colors.washi}"
    textColor: "{colors.tinta}"
    typography: "{typography.headline}"
  footer:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.washi}"
    padding: "64px clamp(16px, 5vw, 80px) 56px"
  input-owner:
    backgroundColor: "{colors.washi}"
    textColor: "{colors.tinta}"
    rounded: "4px"
    padding: "12px 14px"
---

# Design System: Nostalgia 12"

## Overview

**Creative North Star: "The Tokonoma"**

The site is a quiet room, not a shop. A grey earthen plaster wall fills the screen; a dark wood post and lintel frame an alcove; on its polished dais one record stands upright beside its sleeve, and a washi hanging scroll names it in large vertical ink. Beneath, the collection rests on a shelf as paulownia boxes with paper slips. Everything visible is a material from that room, rendered flat and lit softly from the upper left.

Density is low and unhurried. One piece is shown at a time; the reading below it is ordered by scale alone, separated by deep silences rather than cards, rules or borders. Indigo ink carries all text. Vermilion appears once, as the seal on the scroll. Japanese material culture is the brand's identity, not a claim about the records, so nothing imitates Japanese pressing artefacts such as obi strips.

**Key Characteristics:**
- Earthen plaster ground with a fine paper/plaster grain; wood is flat tone, never imitation grain.
- Indigo ink for all text; vermilion only as the seal.
- Three faces with fixed jobs: Michroma for the wordmark, Shippori Mincho for titles, body and the scroll, Zen Kaku Gothic New for data and labels.
- Hierarchy by scale and silence, with no cards or borders in the reading.
- Changing pieces is a ritual: sink, roll up, rise, unroll, stamp.

## Colors

A low-chroma palette of plaster, wood, paper and indigo ink, with one vermilion stamp.

### Primary
- **Indigo Ink** (tinta): all text in light mode, the footer ground, the seigaiha bands and the focus ring. On washi surfaces it never flips (the scroll and box slips keep it in dark mode).
- **Scroll Mounting Indigo** (montaje): the silk mounting around the scroll paper, a shade lighter than the ink, with a faint 45-degree weave.

### Secondary
- **Seal Vermilion** (bermellon): only the seal. On the scroll it is an inline SVG square with the 懐 glyph knocked out, run through an ink filter (displaced edges, pores where the stamp missed the paper) and set at -3 degrees. On the printed QR labels the same seal appears as a small flat square.

### Neutral
- **Earthen Plaster** (muro): the page ground, under a soft top-left highlight and the grain texture. Also the browser theme-color in light mode.
- **Alcove Plaster** (nicho): the recessed wall inside the tokonoma, one step darker, with inset shadow from the lintel and post.
- **Muted Ink** (tinta-suave): secondary text such as data terms, track numbers and the kanji under the wordmark.
- **Washi** (washi): scroll paper, box slips, footer text and all text on wood.
- **Dark Wood, Lit Wood, Deep Wood** (madera, madera-luz, madera-honda): post, lintel, dais, shelf and scroll rollers, always as flat tonal gradients between these three stops.
- **Paulownia** (kiri): box lids. **Paulownia Ink** (kiri-tinta): the year written on a lid.
- **Stone Grey** (piedra): brand colour; in the build only the dashed cut line of printed QR labels.
- **Night Plaster, Night Alcove, Night Ink, Night Muted Ink** (muro-noche, nicho-noche, tinta-noche, tinta-suave-noche): the dark scheme, a warm dark earthen grey. In dark mode the wood deepens (#120e0b / #2b2119 / #070605), paulownia dims to #c2b294 and the shadow colour becomes black; washi, mounting indigo, paulownia ink and vermilion do not change.

### Named Rules
**The One Seal Rule.** Vermilion is the seal and nothing else: no vermilion links, buttons, highlights or rules.

**The Paper Keeps Its Ink Rule.** Anything printed on washi or paulownia keeps indigo ink and muted ink at their light values in both schemes; only the wall, the alcove and free text flip.

**The Warm Shadow Rule.** Shadows are tinted with warm umber (rgb 34 24 16) in light mode and pure black at night, never neutral grey.

## Typography

**Display Font:** Michroma (with Zen Kaku Gothic New)
**Body Font:** Shippori Mincho (with Yu Mincho, Hiragino Mincho ProN, serif)
**Label/Mono Font:** Zen Kaku Gothic New (with Yu Gothic, system-ui)

**Character:** A wide, squared wordmark face set against a high-contrast mincho that reads like brushed ink, with a calm kaku gothic for facts. Mincho speaks; gothic informs.

### Hierarchy
- **Display** (400, 15px, 0.3em tracking): the wordmark NOSTALGIA 12" only, with 懐かしい under it in mincho at 12px and 0.5em tracking. 12px with 0.24em tracking on phones.
- **Headline** (800, fitted up to 76px, 1.1): the record title, set vertically on the scroll. Its size is computed from the title's length so a short title fills the paper and a long one still fits.
- **Statement** (400, clamp 26px to 50px, 1.28, max 21em): the condition of disc and sleeve, with the grade in 800. Flaws are told at title scale, never in small print.
- **Title** (600, 22px, 1.3): section names in the reading and on the shelf.
- **Body** (400, 18px, 1.7): default running text. The story uses Body Story (clamp 19px to 22px, 1.8, max 34em); track names are 19px at 1.45.
- **Data** (400, 16px, 1.5, tabular figures): the record's fact sheet; values in 500.
- **Label** (500, 14px, 0.06em, tabular figures): controls and navigation. Artist name on the scroll uses gothic 500 at up to 15px with 0.24em tracking, set vertically.
- **Caption** (500, 11.5px, 0.06em): artist and year on box slips and lids.

### Named Rules
**The Three Voices Rule.** Michroma is the wordmark and nothing else. Every title, sentence and the scroll are mincho. Every number, grade term, control and label is gothic.

**The Vertical Scroll Rule.** Text on the scroll is set with vertical writing mode, title on the right, artist to its left.

## Layout

The first viewport is a fixed composition: header (76px, 64px on phones), the room filling the remaining height, and the shelf of boxes across the bottom (clamp 166px to 200px tall). The tokonoma is centred and capped at 72vw on desktop, framed by a post (clamp 14px to 38px) on the left and a lintel (clamp 14px to 30px) on top, with the dais (clamp 54px to 66px) underneath. The piece stands at lower left of the alcove; the scroll hangs at the right.

The reading below is a single column capped at 1180px with side gutters of clamp(16px, 5vw, 80px). Blocks are separated by deep silences (clamp 120px to 200px) and the footer by a deeper one. Story and fact sheet sit side by side (1.5fr / 1fr); Side A and Side B sit in two columns.

Below 760px the alcove goes full width, the piece moves forward in front of the scroll, the scroll shortens to 56% of the alcove height, the drag hint is hidden, the shelf heading goes inline and the reading collapses to one column. The shelf scrolls horizontally with proximity snap.

## Elevation & Depth

Depth comes from a single soft light at upper left: a radial highlight on the wall, gradient-lit wood, inset shadow where the lintel and post overhang the alcove, and long, low, warm drop shadows under objects that stand or hang. Nothing floats; every shadow is cast onto a surface the object rests on or hangs against.

### Shadow Vocabulary
- **Post cast** (`box-shadow: 6px 0 14px -6px rgb(var(--sombra) / .5)`): the post onto the alcove.
- **Alcove recess** (`box-shadow: inset 0 46px 50px -34px rgb(var(--sombra) / .55), inset 34px 0 40px -34px rgb(var(--sombra) / .4)`): the niche under its frame.
- **Standing object** (`box-shadow: 0 26px 30px -20px rgb(var(--sombra) / .7), 0 2px 5px rgb(var(--sombra) / .25)`): the upright sleeve.
- **Hanging object** (`box-shadow: 0 20px 26px -16px rgb(var(--sombra) / .6)`): the scroll.
- **Box lid** (`box-shadow: 0 10px 16px -8px rgb(0 0 0 / .6)`): paulownia lids on the dark shelf.

### Named Rules
**The Cast Shadow Rule.** Shadows are long, soft and offset downward with negative spread; no hard offset shadows and no ambient glows.

## Shapes

Near-square. Lids have a 3px corner, slips and the seal are effectively square (2 to 2.5px), scroll rollers are capsules (7px). The logo is the only circle. Edges are made by material change (wood against plaster, paper against silk), not by strokes; the seigaiha band is the only ornament, used at the scroll's mounting bands and across the top of the footer.

## Components

### Speed Controls
Plain text on the edge of the dais, like markings on the wood.
- **Shape:** no background, no border; 40px tall hit area, 10px side padding.
- **Default:** washi at 62% opacity, label type.
- **Hover:** full washi. **Active (aria-pressed):** full washi plus a 1px underline at 0.45em offset.
- **Focus:** 2px washi outline.

### Collection Boxes
Paulownia boxes on a dark wooden shelf, one per record.
- **Lid:** paulownia with a soft top highlight, 3px corners, 214 by 132px (178 by 120px on phones).
- **Slip:** a washi paper slip with the title in mincho 600 15px (two lines max) and the artist as a caption.
- **Lid foot:** year and years waiting, caption type in paulownia ink.
- **Hover:** lid lifts 5px. **Current piece:** lid slides off (6px, -30px, rotated -3.5deg), revealing the dark interior and the words "En la alcoba". Ease cubic-bezier(.2, .8, .2, 1), 0.45s.
- **Sold:** a small washi note tilted 3 degrees on the lid's corner.

### Hanging Scroll
Washi paper in an indigo silk mounting, seigaiha bands top and bottom, wooden rod and roller. Carries the vertical title, the artist, and the seal at lower left.

### Navigation
Header links in label type at 14px, no underline until hover. Phones keep only the first link.

### Footer
Indigo ground with a seigaiha band along the top edge, a mincho line at clamp 24px to 38px, and gothic links in washi.

### Owner Tool Fields
The QR label sheet reuses the tokens: washi fields with a 1px muted ink border and 4px corners, and a solid indigo print button.

### Piece Change (signature interaction)
View Transitions: the sleeve and disc sink into the dais (0.5s), the scroll rolls up (0.45s), the new piece rises (0.8 to 0.9s, delayed 0.45 to 0.6s), the scroll unrolls, and the seal is stamped last (0.45s at 1.25s, from scale 1.7 and -14 degrees). Under reduced motion the change is instant and the disc does not spin.

### Disc Label
The 3D disc's label is drawn in the record's own colour with ink chosen for contrast, set in gothic capitals and a mincho title, like a printed record label. Grooves leave smooth gaps between tracks.

## Do's and Don'ts

### Do:
- **Do** set all text in indigo ink, and text on wood or the footer in washi.
- **Do** keep wood as flat tonal gradients between the three wood stops.
- **Do** give flaws and grades the same scale as the title (statement type, up to 50px).
- **Do** separate reading sections with silence (clamp 120px to 200px), not with lines or cards.
- **Do** carry the warm umber shadow tint and the upper-left light.
- **Do** make piece changes instant under prefers-reduced-motion.

### Don't:
- **Don't** use vermilion for anything but the seal.
- **Don't** imitate wood grain on wood surfaces.
- **Don't** use Michroma outside the wordmark.
- **Don't** put the reading in cards, bordered panels or grids of square covers.
- **Don't** add obi strips or other devices that imply Japanese pressings.
