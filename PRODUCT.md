# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people who meet the records in person, at a fair or a physical point of sale. They hold the sleeve, scan the QR on it with their phone, and decide on the spot whether to buy. They are standing up, in a noisy, busy place, on mobile data, with one hand on the record.

Secondary: people who find the brand on Instagram or Facebook and buy from another city through national shipping.

Not yet confirmed: whether buyers are mostly experienced collectors or newcomers. Grading and pressing information is shown either way.

## Product Purpose

Nostalgia 12" ("Nostalgia 12 pulgadas") is a vinyl record shop. The website is its static companion:

- a catalog of the records currently available;
- one page per record, opened from the QR on its physical sleeve, with grading, pressing, label, year, price, tracklist, a short description and a 3D view of the disc;
- a printable sheet of QR labels.

Success means a person at the stand scans the QR, trusts what they read about the condition, and buys or messages the shop. A remote buyer should be able to decide from the page alone.

## Positioning

- **Curation:** a selection by genre and era, not a bulk resale bin.
- **Personal service:** advice, recommendations and conversation one-to-one through direct messages.
- **The QR on each sleeve:** it links the physical record to its own honest record page.

## Operating Context

- Sales happen face to face at fairs or a physical point and through social media; national shipping is available.
- Each physical record carries a printed QR label made from `qr.html`, which encodes `vinilo.html?id=<id>`.
- Every purchase intent goes to an Instagram direct message (`ig.me/m/nostalgia12pulgadas`). The site takes no payments.
- The owner maintains the catalog by hand in `vinilos.js`.

## Capabilities and Constraints

**Stack and hosting:** static HTML, CSS and plain JS, with no build step. The site is hosted on GitHub Pages at `rogersx27.github.io/nostalgia12pulgadas`, repo `rogersx27/nostalgia12pulgadas`. Libraries load from CDNs: three.js r128 for the 3D disc and qrcode-generator 1.4.4.

**The `id` field is permanent:** once a label is printed, changing a record's `id` breaks its QR. Sold records stay listed as "Vendido" so their QR keeps working.

**Grading:** condition uses the Goldmine scale (M, NM, VG+, VG, G), given separately for the disc and the sleeve.

**Currency:** prices are in COP. This is inferred, not confirmed by the owner.

**Open decisions:**
- the specific genres and eras the shop specializes in;
- the payment method and how a sale is closed;
- shipping cost and coverage details;
- whether the shop also sells new or sealed records;
- the shop's city and physical or fair locations.

## Brand Commitments

**Name:** Nostalgia 12" / "Nostalgia 12 pulgadas".

**Channels:**
- Instagram: https://www.instagram.com/nostalgia12pulgadas/
- Facebook: https://www.facebook.com/nostalgia12pulgadas/

**Voice:** Spanish, addressing the reader as "tú", warm and close, with real vinyl vocabulary (Lado A/B, 33⅓/45 RPM, surcos, bajar la aguja, prensaje).

**Visual identity:** no official logo or palette has been provided yet.

## Evidence on Hand

- **Catalog:** the four records in `vinilos.js` are placeholder examples, not real inventory. They must be replaced before the site is promoted.
- **Photos:** there are no record photos yet. The `foto` field exists, and sleeves fall back to a generated cover.
- **Not available:** testimonials, reviews, sales numbers or press. None of these may be invented.

## Product Principles

1. **Honest condition first:** grading is the reason to trust a used record, so it is never hidden or softened.
2. **The QR moment is the main moment:** the record page must load fast and read well on a phone held at a busy stand.
3. **Every path ends in a conversation:** the site hands off to a personal message rather than a checkout.
4. **Curated, not exhaustive:** fewer records, each with its story, over a long undifferentiated list.
5. **The catalog stays editable by the owner:** one data file and no tooling.

## Accessibility & Inclusion

No specific standard has been established. Practical needs come from the stand setting:

- legible text in daylight and noisy places;
- large tap targets;
- respect for reduced-motion preferences, already implemented for the spinning disc.
