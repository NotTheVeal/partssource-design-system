# Skill: Build a PartsSource Deck

Use this skill when a user asks you to **build, draft, or assemble a PartsSource
presentation/slide deck** and provides (or describes) the copy/content. You turn
their copy into a finished, on-brand deck by starting from the PartsSource
PowerPoint template and filling in the right slide layouts.

## What you start from
The template lives at **`preview/ppt-template.html`** (PartsSource Corporate Brand
Design System) and is also registered as a selectable **Template** in the design
system at **`templates/partssource-slide-deck/`** (entry `PartssourceSlideDeck.dc.html`,
self-contained bundle `deck.html`). It is a self-scaling 1920×1080 deck with:
- a fixed **Cover** and **How to use** intro slide (the only two slides loaded on open),
- a **library of ~30 reusable layouts** reachable via the in-deck "+ Add slide"
  picker (the layouts also exist as `<section class="ps-slide …">` blocks in the
  HTML source — that is where you add/fill them when building programmatically),
- live editing chrome: tabbed **icon picker** (Color/White/Grey brand icons — all 41
  inlined as data URIs — plus searchable Lucide, with color/thickness/size controls),
  **image slots**, **+ Image / + Icon / + Text** free placement (move/resize/delete),
  add/remove dynamic blocks, per-element **font-size + weight** control, and a
  **▶ Present** button (fullscreen, hides all editing chrome).

**To build a deck:** copy `preview/ppt-template.html` (plus `ppt-template.css`
and the sibling `.js` files + `assets/ppt-template/` + `fonts/`) to a new file,
then keep/duplicate/fill the `<section>` layouts the user's content needs and
delete the rest. Each layout is a `<section class="ps-slide …" data-screen-label="…">`.

## Brand rules (do not break)
- **Body copy:** Source Sans Pro, ~28px (= 14pt at 2× scale), color `#013763`.
  Weight adjustable; default Regular.
- **Headings:** Metronic Pro **Light (300)** — never bold. Navy `#002F48`.
- **Palette:** Navy `#002F48`, Blue `#005BA6`, Cyan `#009CF4`, Teal `#03D0BF`,
  Sky `#A0DBFF`, Slate `#62676B`. Accents are **teal/blue — never orange.**
- **Do not edit** the Cover (`.cover2`), About (`.s2`), both Wheels (`.s3`), or the
  How-to slide (`.howto`) — they are locked, fixed-brand slides.
- Tagline: **"Ensuring Healthcare is Always On®"**.

## Layout library — pick by content type
| User content | Use layout (`data-screen-label`) |
|---|---|
| Title / opening | **Cover** (edit the cover headline only) |
| Company intro | **About** (locked stats slide) |
| Solution overview wheel | **Wheel** (4 or 8 segment) |
| One / few presenters or people | **Introduction · 1–4 Photos** |
| Open canvas / freeform | **Blank Canvas** |
| Agenda / schedule | **Agenda** (add/remove time slots) |
| Stats, KPIs | **Stats · 5 Columns** / **Stats · 3 Columns** |
| Takeaways + supporting photos | **Key Takeaways** |
| Big statement w/ blue band | **Title · Blue Band** |
| Four equal points | **Quadrant · Color Blocks** |
| Two ideas side by side | **Two Panels · Dots** |
| One large photo / visual | **Photo Panel** |
| Empty filler w/ dots | **Blank · Dot Background** |
| Section break | **Section Divider · Statement / Numeral / Minimal / Gradient Dots / Corner Dots** |
| Mission statement | **Mission** |
| Metrics narrative | **By the Numbers** |
| Capabilities (icon+header+copy, 1–6) | **Solutions · 6 Up** (dynamic add/remove blocks) |
| Process / steps (1–6) | **Customer Journey** (dynamic, auto-numbered) |
| Technology story | **Technology** |
| Outcomes + quote | **Impact** |
| Close | **Thank You** |

## How to fill copy
- Every headline / body / list line is a `[contenteditable]` element — replace its
  text with the user's copy. Keep length reasonable for the layout.
- **Subheaders** (`.tpl-sub`, `.mc-sub`) auto-hide when emptied — leave blank to drop.
- **Icons:** the `<svg>`/brand-icon spots are swappable; choose icons that match the
  point. Keep them in brand blue/navy (or White/Grey on dark backgrounds).
- **Photos:** `<image-slot placeholder="Add Photo">` — leave as placeholders for the
  user to drop their own images, unless they supplied specific images.
- **Dynamic blocks** (Solutions, Customer Journey, Agenda): add or remove
  `.mc-svc` / `.mc-jstep` / `.s10-row` blocks to match the number of items in the
  user's copy (max 6 for Solutions/Journey).

## Workflow
1. Ask for: deck title, audience/purpose, and the section-by-section copy (or accept
   a doc/outline).
2. Map each section of their copy to a layout from the table above.
3. Copy the template, assemble the chosen sections in order (Cover → … → Thank You),
   fill in the editable text, size dynamic blocks to the content, leave photo slots
   as placeholders.
4. Delete the **How to use** slide from the final deck.
5. Deliver the HTML; the user can edit in-browser, click **▶ Present** for fullscreen,
   **💾 Save** their working deck, or **⤓ Export** to PDF or PowerPoint (.pptx) — all
   from inside the deck.

## Packaging / portability
When delivering a standalone file, bundle it self-contained so it opens with no
errors offline: brand icons referenced by the picker live in `icon-data.js`
(inlined data URIs) — keep that loaded **before** `icon-picker.js`. All dot/gradient
imagery is in `assets/ppt-template/` and inlined via CSS at bundle time.

## In-deck Save & Export (export-tools.js)
The deck ships a **＋ New deck** button (confirm → reset to the blank template:
How-to + Cover, clearing added slides), **💾 Save** (download the working `.html`
with edits), **Export as PDF** (browser print, one slide/page), and **Export as
PowerPoint** (snapshots each slide to a full-bleed image and builds a `.pptx` via
PptxGenJS + html-to-image from CDN — the PPTX option needs internet; New, Save and
PDF work offline). Keep `export-tools.js` loaded for the Save/Export buttons.

## Output
A single on-brand HTML deck the user can present, keep editing in-browser, or export
to PowerPoint. Never invent statistics or filler — use only the copy the user gives,
and leave a clearly-labelled placeholder where content is missing.
