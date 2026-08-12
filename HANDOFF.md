# PartsSource Design System — Full Handoff Brief
**Date:** July 6, 2026  
**Project:** PartsSource Design System  
**Status:** Production-ready, fully wired, zero compiler issues

---

## What This Project Is

A fully compiled HTML/CSS/JS design system for PartsSource. It serves two audiences:

1. **Designers** — browse the card grid, preview components, copy tokens
2. **Developers** — consume `partssource.css` + `_ds_bundle.js` in any consuming project

The system is **not** a React app or build pipeline — it is a browser-native design system with a live compiler that regenerates `_ds_bundle.js`, `_ds_manifest.json`, and `_adherence.oxlintrc.json` on every save. **Never write those three files manually.**

---

## Project Root Map

```
/
├── partssource.css          ← CANONICAL STYLESHEET — only CSS file any page needs
│                               @imports tokens.css + colors_and_type.css automatically
├── tokens.css               ← 943 CSS custom properties (Primitive → Semantic → Component)
├── colors_and_type.css      ← @font-face declarations + color aliases + type tokens
├── tokens.json              ← Style Dictionary JSON (for any platform/framework)
├── tokens.scss              ← SCSS variable mirror
├── tokens-lookup.json       ← Flat lookup map for tooling
├── ps-tokens.compiled.css   ← Auto-compiled from ps-tokens/ (do not hand-edit)
│
├── PartsSource Design System.html  ← ROOT INDEX — the "Pages" entry point
│                                      all links resolve to preview/*.html
├── audit-report.html        ← Token drift audit tracker
│
├── preview/                 ← All card/doc pages (50+ files)
│   ├── colors.html          Foundation
│   ├── tokens.html          Foundation
│   ├── type-display.html    Foundation
│   ├── type-body.html       Foundation
│   ├── spacing-scale.html   Foundation
│   ├── Radius.html          Foundation
│   ├── shadows.html         Foundation
│   ├── icons.html           Foundation
│   ├── motion.html          Foundation
│   ├── colors-semantic.html Foundation
│   ├── colors-blue-scale.html Foundation
│   ├── colors-neutrals.html Foundation
│   ├── buttons.html         Components
│   ├── inputs.html          Components
│   ├── search.html          Components
│   ├── date-picker.html     Components
│   ├── stepper.html         Components
│   ├── selections.html      Components
│   ├── badges.html          Components
│   ├── cards.html           Components
│   ├── modals.html          Components
│   ├── drawer.html          Components
│   ├── tables.html          Components
│   ├── tabs.html            Components
│   ├── alerts.html          Components
│   ├── accordion.html       Components
│   ├── filter.html          Components
│   ├── tooltip.html         Components
│   ├── avatar.html          Components
│   ├── breadcrumb.html      Components
│   ├── pagination.html      Components
│   ├── empty-states.html    Components
│   ├── skeletons.html       Components
│   ├── cms-components.html  Components
│   ├── asset-detail-card.html Components
│   ├── cart.html            Components
│   ├── Visal Data.html      Components (data visualization)
│   ├── top-navigation.html  Components (Navigation)
│   ├── left-hand-navigation.html Components (Navigation)
│   ├── hover-states.html    Components (Interaction)
│   ├── interaction-states.html Components (Interaction)
│   ├── logo.html            Brand
│   ├── accessibility.html   Guide
│   ├── layout-grid.html     Guide
│   ├── voice-tone.html      Guide
│   ├── form-patterns.html   Guide
│   ├── getting-started.html Guide
│   ├── contribution.html    Guide
│   ├── error-pages.html     Guide
│   └── lhn-icons/           SVG icon set for left nav (18×18, white)
│
├── assets/
│   └── logos/               ps-wordmark-blue.svg, ps-wordmark-white.svg,
│                            ps-wordmark-black.svg, ps-wordmark-inverse.svg,
│                            ps-mark.svg, ps-wordmark.svg
│
├── fonts/                   Local font files (Source Sans Pro TTF variants)
│
├── templates/
│   └── ps-page/
│       ├── PsPage.dc.html   ← THE MAIN TEMPLATE (Design Component)
│       └── ds-base.js       ← Auto-generated loader (loads partssource.css + _ds_bundle.js)
│
├── UI Kit/                  React + TypeScript + Tailwind components
│   ├── Button.tsx / .d.ts
│   ├── Badge.tsx / .d.ts
│   ├── Alert.tsx / .d.ts
│   ├── Accordion.tsx / .d.ts
│   └── … (all components with .d.ts sidecars = compiled into _ds_bundle.js)
│
├── ui_kits/
│   ├── ps-shell/index.html  ← Full app shell (top nav + left rail) — SOURCE OF TRUTH
│   └── ps-marketplace/      Marketplace recreation (mega-nav, PDP, mini cart)
│
├── uploads/
│   └── PartsSource-Deck.html  On-brand presentation deck (30+ slides)
│
├── ps-tokens/               Raw Style Dictionary token JSON files
│   └── component/           button.json, card.json, input.json, etc.
│
├── CLAUDE.md                AI instructions (mandatory rules for every artifact)
├── README.md                Full system documentation
├── TOKEN_AUDIT.md           Token drift log
├── TOKEN_RECONCILIATION.md  Token reconciliation notes
├── FONT_AUDIT.md            Font stack audit
└── HANDOFF.md               ← This file
```

---

## Design System Card Groups (what appears in the DS tab)

| Group | Count | What's in it |
|---|---|---|
| **Foundation** | 12 | Colors, Blue Scale, Neutrals, Semantic Colors, Display Type, Body Type, Spacing Scale, Border Radius, Elevation, Iconography, Tokens, Motion |
| **Components** | 35 | All React kit components + Buttons, Badges, Tabs, Accordion, Filter, Drawer, Search, Tables, Modals, Top Navigation, Alerts, Hover States, Interaction States |
| **Brand** | 5 | Logo, Starter Template, brand identity items |
| **Templates** | 1 | PartsSource Page (full Shell) |

**Total compiled:** 52 components, 943 tokens, 3 font families

---

## The Component Namespace

```js
const { Button, Badge, Alert, Accordion, /* … all 52 */ } = window.PartsSourceDesignSystem_e42fb5;
```

Namespace: `PartsSourceDesignSystem_e42fb5`

Load in any HTML page via:
```html
<script src="path/to/_ds_bundle.js"></script>
```

---

## Token System

Three levels:

```
Primitive   → --ps-prim-blue-500, --ps-prim-gray-100 …
Semantic    → --ps-brand-primary, --ps-sem-fg-primary, --ps-border-default …
Component   → --ps-button-primary-bg, --ps-badge-status-radius …
```

**Key brand primitives:**
- Brand Blue: `#005BA6` (`--ps-prim-blue-500`)
- Midnight: `#002F48` (`--ps-prim-blue-900`)
- Orange (pill buttons only): `#FF9505`
- Background canvas: `#F5F5F5`
- Surface (card/panel): `#FFFFFF`
- Border default: `#E0E0E0`

**Never use raw hex values. Always use `var(--ps-…)` tokens.**

---

## The PartsSource Page Template

File: `templates/ps-page/PsPage.dc.html`

This is a Design Component (`.dc.html`) that renders the exact PartsSource Shell:

- **Top nav utility row** (28px) — phone, Help, About Us
- **Top nav main row** (60px) — PS wordmark, search bar with orange button, Categories, cart icon, facility switcher
- **Hero row** (52px) — dark blue `#003763`, page title (updates dynamically), PRO ACCOUNT diagonal panel
- **Left rail** (210px expanded / 67px collapsed) — ps-nav with sliding drill-down, back navigation, collapse toggle button and `L` keyboard shortcut

To use: pick "PartsSource Page" from the template picker, drop content into `<main class="content">`.

---

## Brand Rules (from CLAUDE.md — enforced on all artifacts)

1. Body type: **Source Sans 3**, headings H1–H3 are **Light 300** in Midnight `#002F48`
2. **No gradients** anywhere (one was found and fixed in `top-navigation.html`)
3. **No emoji** — use Lucide icons
4. Large buttons **UPPERCASE**, small buttons sentence case
5. **Orange `#FF9505` only on `.ps-btn-pill`** — never as a general accent
6. Default radius **4px** / pill **9999px** — no 10/12/16px radii
7. Shadows must be **Midnight-tinted** `rgba(0,47,72,…)` — never black `rgba(0,0,0,…)` ✅ fixed
8. Focus rings always visible
9. Copy: evidence-based, terse — no "revolutionary / seamless / magical"
10. Section labels use `.ps-eyebrow` (uppercase, 1.5px tracking)

---

## What Was Done This Session

### Fixes applied
| # | File | Issue | Status |
|---|---|---|---|
| 1 | `PartsSource Design System.html` | All nav links broken (missing `preview/` prefix) | ✅ Fixed |
| 2 | `preview/tokens.html` | Duplicate `tokens.css` link tag | ✅ Fixed |
| 3 | `preview/tokens.standalone-src.html` | Same duplicate | ✅ Fixed |
| 4 | `preview/selections.standalone-src.html` | Broken CSS paths (missing `../`) | ✅ Fixed |
| 5 | `ui_kits/ps-marketplace/index.html` | Missing `tokens.css` | ✅ Fixed |
| 6 | `preview/Visal Data.html` | Missing `tokens.css` + `colors_and_type.css` | ✅ Fixed |
| 7 | `preview/voice-tone.html` | Wrong blue `#005BA7` → `#005BA6` (4 places) | ✅ Fixed |
| 8 | `preview/accordion.html` | Wrong blue `#005BA7` → `#005BA6` (4 places) | ✅ Fixed |
| 9 | `colors_and_type.css` | Shadow tokens used black `rgba(0,0,0,…)` | ✅ Fixed |
| 10 | `colors_and_type.css` | `h3` was `font-weight:400` → corrected to `300` | ✅ Fixed |
| 11 | `preview/top-navigation.html` | Gradient `linear-gradient(135deg,#E20074,#0093D6)` removed | ✅ Fixed |
| 12 | `audit-report.html` | Dead link in Tokens page — file created | ✅ Fixed |
| 13 | `partssource.css` | Did not import `colors_and_type.css` — added | ✅ Fixed |

### @dsCard reorganization
- Moved Foundation items out of "Brand" group into new **Foundation** group (12 cards)
- Moved component specs out of "Brand" into **Components** group (35 cards)
- Added `@dsCard` to 4 previously invisible files: `colors.html`, `tokens.html`, `motion.html`, `Radius.html`

### Template created
- `templates/ps-page/PsPage.dc.html` — exact Shell (top nav + ps-nav) as a Design Component

---

## Known Remaining Items (not blocking, require decision)

1. **Raw hex in section chrome** — preview pages hard-code `#DCDCDC`, `border-radius:12px` etc. in section wrapper styles instead of using tokens. ~45 files. Cosmetic only, doesn't break anything.

2. **`Visal Data.html` internal aliases** — uses `--b500`, `--fg2`, `--n50` etc. in a local `:root` block. Values match brand palette but are siloed from the official `--ps-*` token cascade. Could be mapped.

3. **Dark mode showcase** — `[data-theme="dark"]` scope exists in `tokens.css` but no cards demonstrate it.

4. **Additional templates** — PDP page, Dashboard, Search Results page not yet templated.

---

## How to Resume on Another Account

1. Open the project in the new account
2. The compiler auto-runs — `_ds_bundle.js` and `_ds_manifest.json` regenerate
3. Open `PartsSource Design System.html` to see the full index
4. All nav links resolve — click any card to view component/foundation docs
5. The template is at `templates/ps-page/PsPage.dc.html` — pick it from the template picker

**First thing to check:** run `check_design_system` to confirm zero issues after any edits.

---

## Key Files to Know

| File | Purpose |
|---|---|
| `partssource.css` | The one stylesheet to rule them all |
| `tokens.css` | All 943 `--ps-*` CSS custom properties |
| `CLAUDE.md` | AI instruction file — brand rules, component rules, tech stack |
| `PartsSource Design System.html` | Root index page |
| `ui_kits/ps-shell/index.html` | Live interactive Shell (source of truth for nav) |
| `templates/ps-page/PsPage.dc.html` | Canonical page template |
| `UI Kit/` | React + TypeScript component source files |
| `preview/lhn-icons/` | Left nav icon SVGs (18×18 white) |
| `assets/logos/` | All wordmark and monogram variants |
