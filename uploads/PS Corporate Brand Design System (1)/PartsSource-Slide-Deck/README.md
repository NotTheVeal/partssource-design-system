# PartsSource Slide Deck — Package

Two deliverables for the PartsSource Corporate Brand Design System.

## 1. PartsSource-Deck.html
A self-contained, on-brand presentation template (all fonts, icons, and imagery
inlined — opens anywhere, offline, with no errors). Opens to the **How-to** and
**Cover** slides; every other layout is in the **+ Add slide** library (30+ layouts).

Built-in toolbar (left rail):
- **＋ New deck** — reset to the blank template (How-to + Cover)
- **+ Add slide** — pick any layout from the library
- **▶ Present** — fullscreen presentation (hides all editing chrome)
- **💾 Save** — download your working deck as standalone HTML
- **⤓ Export** — PDF (offline) or PowerPoint .pptx (needs internet)

Editing: click any text to edit; focus shows a size + Source Sans Pro weight control.
Click an icon to swap it (Color / White / Grey brand icons + searchable Lucide, with
color / thickness / size). Drop photos into any **Add Photo** slot. On content slides,
**+ Image / + Icon / + Text** place items freely (move, resize, delete). Cover, About,
both Wheels, and the How-to slide are locked to protect the brand.

## 2. SKILL.md
A skill so Claude can build a deck on request: the user provides copy, Claude maps each
section to the right layout, assembles the deck from this template, fills the editable
text, and delivers it. Includes the brand rules, the layout-picker table, and the
fill/packaging guidance.

## In the design system
- Registered as a selectable **Template**: `templates/partssource-slide-deck/`
  (entry `PartssourceSlideDeck.dc.html`, bundle `deck.html`).
- Source files live under `preview/` (`ppt-template.html` + `ppt-template.css` +
  sibling `.js`), `assets/ppt-template/`, `assets/icons/custom/`, and `fonts/`.
- Skill: `skills/build-partssource-deck/SKILL.md`.
