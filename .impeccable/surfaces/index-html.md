---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["vinilo.html"]
---

# Surface: catálogo y página de cada disco (index.html, vinilo.html)

## Scope and mode

- **Mode:** Experience. The site is a stand people walk through, not a shop.
- **Content:** each record has its own page, reached by its QR or by choosing it from the collection.
- **Not shown:** prices, buy buttons and marketing.
- **Audience and job:** someone at a fair in Medellín scans the QR on a sleeve, or a follower browses from home. Both look at the piece, read its condition and its story, and wander through the collection.
- **Constraints:**
  - Static site on GitHub Pages.
  - `vinilo.html?id=` must keep working for printed QR codes.
  - The catalog lives in `vinilos.js`.

## Direction contract

**THESIS:** One record at a time, shown in a tokonoma like a piece you contemplate without hurry. It refuses the category's grid of square covers with filters.

**OWN-WORLD:**
- Grey earthen plaster wall as the ground.
- A dark wood post and lintel.
- A raised dais of polished wood.
- A washi kakejiku with seigaiha mounting bands in indigo.
- Indigo ink for all text.
- A vermilion seal as the only red on the page.
- Paulownia boxes with paper slips as the collection.
- Wordmark: a wide squared display face. Titles and body: mincho. Data: kaku gothic.

**STORY:** The visitor sees the piece on display, turns the disc, and reads its honest condition, tracklist and story. They then open another box and the piece changes.

**FIRST VIEWPORT:**
- Wall at full width.
- The alcove takes about 70% of the width, framed by the post on the left and the lintel on top.
- On the dais: the sleeve standing upright, with the 3D disc beside it turning upright.
- On the right inside the alcove: the kakejiku with the title in large vertical type, the artist, and the seal.
- Across the bottom: the shelf of boxes, one per record. The box on display is shown open.

**FORM:** Tokonoma with kura (storehouse). Position 5 on the ordered list. Seed reference: seed:017b78a081f382fc.

**Raises:**
- *Vermilion (from the VU meter challenger):* reserved for the seal.
- *Flaws (from the ice press challenger):* set at the same scale as the title.
- *Hierarchy (from the specimen challenger):* by scale only, with no cards or borders.
- *Box lids (from the brine challenger):* each lid gives the year and the years spent waiting.
- *Sections (from the quarry challenger):* separated by deep silences.

**Signature interaction:** opening a box changes the piece. The sleeve sinks into the dais, the scroll rolls up, the new piece rises, the scroll unrolls, and the seal is stamped last. It uses the View Transitions API and is instant under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Real record photos are missing; the generated covers are synthetic placeholders.
- The logo is a 150 px avatar; a high-resolution original is pending.
