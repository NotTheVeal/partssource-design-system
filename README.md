# PartsSource Design System

A design system derived from the PartsSource Token Studio + Tailwind source of truth. Covers the tokens, visual foundations, content style, and UI kits needed to design or build for PartsSource digital products.

## What is PartsSource

PartsSource is a healthcare B2B marketplace and platform. Based in Cleveland/Aurora, Ohio, owned by Bain Capital. They connect hospitals, outpatient clinics and physician offices with medical-equipment replacement parts, repair services, service agreements, and talent programs. Their flagship product is **PartsSource PRO** — a clinical resource management platform spanning on-demand parts, on-demand service, and repair & service agreements. Their mission line: *"ensuring healthcare is always on."*

### Products in scope
The token library is designed to cover every PartsSource digital surface:

- **ps.com / partssource.com** — the public marketplace and product catalog (the recognizable surface: product search, PDPs, carts, RFQs)
- **Asset Uptime** — service-management + repair workflow app for biomedical / HTM teams
- **Training** — HTM training product (RSTI / NVRT Labs content)
- **Future PS products** — the system is explicitly forward-compatible

## How to use this design system

**To make any HTML artifact on-brand, include one file:**

```html
<link rel="stylesheet" href="partssource.css">
```

That's it. `partssource.css` loads Source Sans 3, all design tokens (primitive → semantic → component), and applies element-level defaults so bare HTML — `<h1>`, `<button>`, `<input>`, `<table>` — renders in PartsSource style without any classes.

For elements bare HTML can't express, the file ships these brand classes:
`.ps-eyebrow` · `.ps-btn-pill` · `.ps-btn-secondary` · `.ps-btn-tertiary` · `.ps-card` · `.ps-badge[--success|--warning|--danger|--info]` · `.ps-alert[--success|--warning|--danger]` · `.ps-container` · `.ps-bg-*` / `.ps-text-*`

See `partssource-test.html` for a kitchen-sink reference of every default and class.

### Scaffold a new artifact

```bash
npm run new -- "Asset Detail Page"        # → asset-detail-page.html at root
npm run new -- "explore/order-confirmation"  # → explore/order-confirmation.html
```

The script copies `templates/starter.html`, slugifies the name, fixes the relative `partssource.css` href for the output depth, and fills in the title/headline. Edit the result.

### Brand checklist — run through before shipping

A stylesheet enforces fonts, colors, spacing, and components. It can't enforce composition or copy. Before shipping any artifact, verify:

1. Body type is Source Sans 3. Headings (h1–h3) are Light 300 in Midnight `#002F48`.
2. **No gradients.** Anywhere.
3. **No emoji.** Use Lucide icons instead.
4. Large buttons (`.ps-btn-pill`, default `<button>`) are uppercase. Small buttons are sentence case.
5. Orange `#FF9505` only on `.ps-btn-pill` promo CTAs — never as a general accent.
6. Default radius is 4 px; pills are 9999 px. No 10/12/16 px radii.
7. Shadows are Midnight-tinted (`rgba(0,47,72,…)`), never black.
8. Focus rings are visible — never `outline: none` without a replacement.
9. Copy is evidence-based and terse. No "revolutionary / seamless / magical".

---

## Source materials
- **GitHub (primary source of truth):** `NotTheVeal/PS-Design-Library` — tokens/primitives.json, tokens/ps-styles.json, tokens/components/*.json, tailwind.config.js
- **Figma (referenced by user):** https://www.figma.com/design/pyZ5wKN9KGBUfgi47UwQ0q/Design-System---Component-library — no direct access in this environment; captured via token files + the PNG assets checked into the repo under `assets/data-display/`
- **Brand site:** https://brand.partssource.com — official brand guidelines
- **Corporate:** https://corporate.partssource.com, https://www.partssource.com

## Index — what's in this folder

| Path | Purpose |
|---|---|
| `README.md` | You are here. Context, content rules, visual foundations, iconography. |
| `CLAUDE.md` | Claude instructions — always-on rules for generating artifacts and components in this project. |
| `partssource.css` | **Canonical stylesheet.** Loads tokens + element defaults + brand classes. Every HTML artifact starts here. |
| `tokens.css` | Raw CSS custom properties (primitive → semantic → component). Imported by `partssource.css`. |
| `templates/starter.html` | Starting point for every new HTML artifact. Copy this first. |
| `preview/` | HTML cards that populate the Design System review tab (25 Brand cards + growing Components group). |
| `UI Kit/` | React + TypeScript component source. Compiled into `_ds_bundle.js` at project root. |
| `_ds_bundle.js` | **Auto-generated.** Compiled component bundle — do not hand-edit. Load via `<script src="_ds_bundle.js">`. |
| `assets/` | Logos, product imagery, UI reference PNGs. |
| `fonts/` | Webfont references (Source Sans 3 via Google Fonts — see FONT NOTE below). |
| `ps-tokens/` | Raw Token Studio JSON (primitive, semantic, component layers). |
| `figma-import/` | Figma export assets. |
| `archive/` | Older standalone HTML files kept for reference. |

## React component library

The `UI Kit/` directory contains production-ready React + TypeScript components compiled into `_ds_bundle.js`. Load it and access components via the `window.PartsSourceDesignSystem_e42fb5` namespace:

```html
<script src="_ds_bundle.js"></script>
<script>
  const { Accordion, Button, Alert } = window.PartsSourceDesignSystem_e42fb5;
</script>
```

### Registered components (62 total)

| File | Exports |
|---|---|
| `Accordion.tsx` | `Accordion`, `AccordionCount` |
| `Alert.tsx` | `Alert`, `Toast` |
| `Badge.tsx` | `Badge`, `StatusBadge`, `ListTypeBadge` |
| `Button.tsx` | `Button`, `ButtonInline`, `BackArrowIcon` |
| `Card.tsx` | `Card`, `EventCard`, `StatusCard`, `AlertCard` |
| `CardExtras.tsx` | `AiDataCard`, `ProductCard`, `AnalyticsCard`, `ListCard` |
| `CMS.tsx` | `Banner`, `ImageBlock`, `TextBlock`, `CardGrid` |
| `Controls.tsx` | `Controls`, `Pagination`, `DatePicker` |
| `Drawer.tsx` | `Drawer` |
| `Feedback.tsx` | `Avatar`, `AvatarGroup`, `Tooltip`, `TooltipRich`, `Skeleton`, `SkeletonKeyframes`, `Spinner`, `EmptyState`, `ErrorPage` |
| `Filter.tsx` | `Filter`, `FilterChip`, `FilterShell` |
| `Input.tsx` | `Input`, `Dropdown` |
| `Layout.tsx` | `Breadcrumb`, `BreadcrumbBack`, `Stepper` |
| `Modal.tsx` | `Modal`, `ConfirmDialog` |
| `Navigation.tsx` | `Navigation`, `TopNav`, `LeftNav` |
| `Selections.tsx` | `Selections`, `Checkbox`, `Radio`, `Toggle` |
| `Table.tsx` | `Table` |
| `Tabs.tsx` | `Tabs`, `FolderTabs`, `SegmentedTabs`, `PillTabs` |

## Font note — substitution

The token files specify **Source Sans Pro** (primary) and **Inter** (UI/meta). Per user direction, **Inter has been dropped** — everything uses Source Sans Pro. Because Source Sans Pro is EOL'd by Adobe and maintained as **Source Sans 3** on Google Fonts, that's what's loaded. Metrics are effectively identical; no layout impact.

**If you have the licensed Source Sans Pro webfonts**, drop them into `fonts/` and override the `--ps-font-sans` variable.

## CONTENT FUNDAMENTALS

PartsSource writes like a **trusted industrial supplier to hospitals**: precise, useful, zero fluff, no wink. The audience is biomed technicians, supply-chain managers, HTM directors, and procurement leaders — people who buy on spec and trust.

### Voice
- **Evidence-based.** Claims are quantified: "improve supply chain quality by 6x", "save over an hour per day, per buying event", "boost productivity by up to 95%". Avoid vague adjectives.
- **Outcomes-first.** Lead with the result for the customer — "reduce downtime", "lower total cost of care" — then the mechanism.
- **Clinical gravity.** Patient outcomes are the ultimate stakes; language respects that. No exclamation marks on marketing copy; no cutesy product names.
- **Third-person institutional.** "PartsSource helps…", "Our platform delivers…". When speaking directly to buyers, "you" is fine for CTAs ("Track your order", "Request a quote").
- **American English.** No Oxford comma in marketing copy; sentence-case in UI; Title Case in section headers and navigation.

### Tone by surface
| Surface | Tone |
|---|---|
| Marketing / corporate | Confident, proof-heavy, consultative |
| Product UI | Terse, clear, task-focused. Labels not sentences. |
| Error / empty states | Plain and actionable. "No results for this HCPCS code. Try a broader search." |
| Legal / compliance banners | Matter-of-fact. No apology theater. |

### Casing & mechanics
- **Product titles on ps.com are ALL CAPS** (carried over from the legacy catalog): `REUSABLE FINGER SENSOR BY MASIMO`, `HOSE, BLOOD PRESSURE, FAST, 5 FT.` — this is a verified pattern from the product-carousel asset.
- **Manufacturer name** renders as a secondary line, Title Case with Inc./Corp. preserved: *"Welch Allyn Inc."*, *"3M Healthcare (formerly Arizant Healthcare, Inc.)"*.
- **Large button labels** are **UPPERCASE** (per `typography.button-lg` token: `"textCase": "UPPER"`). Small buttons are sentence case.
- **Section labels** (the "overline" style) are **UPPERCASE** with `+1.5px` tracking (`typography.label`).
- **Headings** are sentence-case Light weight 300 — never bold display type. This is the most distinctive typographic fingerprint: headings feel airy, not shouty.
- **Branded names** keep capitalization: *PartsSource*, *PartsSource PRO®*, *PRECISION Procurement®*. The ® matters in marketing copy.

### Sample copy vocabulary
> **DO say:** mission-critical, uptime, evidence-based, clinical resource management, OEM parts, HTM, procurement, quality outcomes, asset availability, repair and service agreements
>
> **DON'T say:** revolutionary, game-changer, magical, delightful, cutting-edge, seamless (unless you actually mean it), 🚀, emoji of any kind

### Emoji
**Never.** PartsSource does not use emoji in product, marketing, or transactional surfaces. Use iconography (stroked vector icons, 1.5px weight) instead.

### Microcopy patterns observed
- "Track your order"
- "View All Products"
- "Back to Results"
- "Request a Quote"
- Service interruption banners (from homepage): *"Stryker is now accepting orders; however, customers may continue to experience delays in tracking information… PartsSource will provide updates as more information becomes available."* — note the even, informative register.

## VISUAL FOUNDATIONS

### The brand in one sentence
Calm, confident, *institutional*. A B2B marketplace dressed like a trusted hospital supplier — clean Source Sans type, a tight blue palette anchored by `#005BA7` **PS Blue** and `#002F48` **Midnight**, generous white space, and subtle elevation.

### Color
- **Two-blue system.** The whole brand runs on **PS Blue `#005BA7`** (primary action, links, brand anchor) and **Midnight `#002F48`** (headings, dark surfaces, dark banners). Tints — **Airway `#DCEAED`** and **Cyan `#009CF4`** — handle accents and highlights.
- **Neutrals are slightly warm-cool neutral grays** (not blue-gray): `#FAFAFA → #4A4A4A → #000`.
- **Semantic colors are standard and saturated:** `#17AB78` Signal Green, `#FF0000` Alert Red (yes, pure red — matches their urgency stance on medical equipment downtime), `#E3A92D` Amber, `#B6D5F0` / `#009CF4` Info Cyan. Every semantic color ships with a `-subtle` background pairing.
- **Orange `#FF9505`** is reserved for "pill" buttons — an explicit, rare accent call-to-action used for promo / upgrade moments (e.g. "Become a Pro Member"). **Do not use orange as a general accent.**
- Imagery on product pages trends **clinical neutral**: white or light-gray product-on-white photography, no heavy color grading, no warm grain, no lifestyle staging.

### Type
- **Source Sans 3** for everything. See FONT NOTE above — Inter has been dropped.
- **Headings are Light (300) weight** in Midnight `#002F48` — a signature of the brand. Only H4 jumps to Semibold (600) to tighten up sub-section headings. This light-weight display pairing against semibold body emphasis is the system's typographic fingerprint.
- **Body is Regular 400 / 16px / 1.5 line-height.** Emphasized body is Bold 700. No italics for emphasis.
- **Type scale**: 12 / 14 / 16 / 18 / 24 / 30 / 34. Generous jumps; no in-between sizes.
- **Buttons cue typographic hierarchy**: `BUTTON-LG` is 16 px Semibold UPPERCASE; `button-sm` is 14 px Regular sentence case. The uppercase large-button label is a load-bearing brand detail.

### Spacing & layout
- **4 px base unit**, scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96.
- **Marketing/site layout** is a **12-column grid** with generous outer margins. Hero sections use a single max-width content column; catalog rows are evenly divided with ~16 px gutters.
- **Dense data surfaces** (grids, carousels from the reference assets) sit edge-to-edge with a single 1 px `#DCDCDC` rule separating header from rows. No zebra striping.
- **Section rhythm** on marketing pages uses big paragraphSpacing between H1-level sections (48–96 px), tighter inside a section (16–24 px).

### Elevation & borders
- **Three shadow levels**, all Midnight-tinted (`rgba(0,47,72,α)`):
  - `sm`: `0 1px 4px rgba(0,47,72,0.08)` — resting card
  - `md`: `0 2px 10px rgba(0,47,72,0.10)` — default card
  - `lg`: `0 6px 20px rgba(0,47,72,0.18)` — hover, dropdown menu
- **Borders default to `#DCDCDC`** (neutral-200) 1 px. Inputs on focus switch to `#005BA7` 1 px with a `#D0EEFC` ring. Brand emphasis uses 2 px `#005BA7`.
- **Radius scale**: 0 / 2 / 4 / 6 / 8 / 12 / 20 (pill) / 9999 (full). Default radius is **4 px** — this is the dominant corner shape on cards, buttons, inputs, badges. Pill badges use 20 px. Full-round is for dots, avatars, monogram logos.

### Cards
- White bg, 1 px `#DCDCDC` border, 6 px corner radius, `md` shadow, 20 px padding.
- On hover: border thickens to **2 px PS Blue**, shadow lifts to `lg`. No transform/scale animation — just border + shadow.
- Titles are 16 px Semibold Midnight; body is 14 px neutral-500.
- Product image background is **Airway `#DCEAED`** (clean medical tint) with 4 px radius.

### Banners
- Five variants observed: **Promo** (PS Blue bg, white text, white CTA), **Midnight** (dark blue bg, cyan CTA), **Warning** (amber bg, midnight text), **Neutral** (muted-gray bg), **Airway** (pale-blue bg).
- Banners are **square-cornered** (`border-radius: 0`), full-bleed. They carry a 3 px left accent bar in a contrasting color.

### Animation & interaction
- **Quiet, functional.** The only keyframes defined are `shimmer` (skeleton loaders, 2 s linear), `fade-in` (150 ms ease-out), and `slide-down` (150 ms ease-out). No bounces, no spring physics, no parallax.
- **Hover states** flip background / border to a darker step of the same hue. Buttons go `500 → 700 → 800` through hover → pressed.
- **Press states** darken rather than shrink. No scale transforms.
- **Focus ring**: 2 px `#B6D5F0` (or `#D0EEFC`) around the element, offset 2 px, never removed. Accessibility is load-bearing for a B2B medical product.
- **Transitions default to 150 ms** with the standard cubic-bezier `(0.4, 0, 0.2, 1)`.

### Backgrounds, imagery & texture
- **No gradients** — neither hero gradients nor button gradients. A Midnight block or an Airway tint instead.
- **No background images in UI chrome.** Product imagery only appears as photography *within* cards and hero modules.
- **No patterns, no textures, no noise, no grain.** The brand signal is clinical clarity; any decorative texture breaks it.
- **No full-bleed hero photography with overlaid white text** — hero imagery sits in a right column while text sits in a left column against white.
- **No dark mode** in the current token set (only one theme).

### Transparency & blur
- **Rare.** Overlays (modal backdrops, image gallery scrims) use `rgba(0, 47, 72, 0.5–0.7)`. No backdrop-blur glass effects.
- Opacity tokens exist at 0, 0.4, 0.5, 0.75, 1 — used for disabled states and scrims only.

### Layout rules
- **Sticky header** on marketing + marketplace; not in product app shells.
- **Footer is Midnight `#002F48`** with white text and cyan `#009CF4` links.
- **Max content width** for marketing pages: ~1280 px; full-width for dashboards.

## ICONOGRAPHY

### System
PartsSource uses **stroked vector icons at 1.5 px stroke weight**. The tokens file declares three stroke weights — thin (1px), regular (1.5px), bold (2px) — with **regular as the default**. Icons come in 6 sizes: 12 / 16 / 20 / 24 / 32 / 48 px.

### Substitution — flag this to the user
The repo ships reference PNGs but **no icon font or SVG sprite**. I've CDN-linked **[Lucide](https://lucide.dev)** (1.5 px stroke, rounded caps, open style) as the closest match — it aligns with the token weight spec exactly. **Action requested: confirm Lucide is acceptable, or provide PS's own icon set.** Alternative drop-in matches: Phosphor (regular weight), Heroicons (outline 24).

Usage:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<i data-lucide="shopping-cart" style="width: 20px; height: 20px; color: var(--ps-blue-500);"></i>
<script>lucide.createIcons();</script>
```

### Icon color tokens
From `tokens/components/icons.json`:
- `icon.color.default` → `--ps-fg-primary`
- `icon.color.muted` → `--ps-fg-secondary`
- `icon.color.brand` → `--ps-brand-primary`
- `icon.color.accent` → `--ps-brand-accent`
- `icon.color.{success|danger|warning|info}` — paired with semantic colors

### Logo
The PartsSource monogram is the **"PS" mark inside a filled circle** — confirmed by the product-image reference asset. Wordmark has the wordmark "PartsSource" with the ® registered mark in marketing copy. Logos live in `assets/logos/`.

### Emoji & unicode
**Never used.** Not in product UI, not in marketing, not in admin dashboards. Unicode arrows (`›`, `›`) appear only in breadcrumbs and back-links, rendered in the heading typeface.

### Illustrations
The repo ships **no branded illustrations** — this is a photography-first brand. Use real product photography or grayscale placeholders; do not generate decorative SVG illustrations on your own.
