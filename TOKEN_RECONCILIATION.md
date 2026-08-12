# Token Reconciliation

Diff between this project's `tokens.css` (v1.2.0) and the canonical token source at **`NotTheVeal/PS-Design-Library@main`** (Token Studio JSON).

Generated 2026-05-13.

## TL;DR

The two systems are **broadly aligned** — same architecture, same brand intent, same scales. There are **three categories of divergence**:

1. **Hex-digit typos** in the Token Studio source that this implementation silently corrected (or vice versa). Cosmetic but worth flagging.
2. **Strategic divergence** the user intentionally made — Inter font dropped, danger red tuned from `#FF0000` to `#D14343`, selection accent in orange.
3. **Token-source-vs-implementation drift** — places where the canonical JSON disagrees with the actual `preview/*.html` implementations. These are real bugs in either the JSON or the page CSS.

---

## 1 · Primitive color diffs

| Token | Canonical (Token Studio) | This system | Notes |
|---|---|---|---|
| **PS Blue (brand)** | `#005BA7` | `#005BA6` | 1-digit drift — both sources use it inconsistently. ⚠ |
| **Blue 2 / hover** | `#004884` | `#004A84` | 1-digit drift, both appear in PS materials |
| **Light Blue 50** | `#D0EEFC` | `#D0EDFC` (as `--ps-prim-blue-100`) | 1-digit drift |
| **Airway** | `#DCEAED` (`blue.100`) | **missing** | Token Studio names this a brand color; not present here as a primitive |
| **Cyan (info)** | `#009CF4` (`blue.200`) | `#009CF4` (`--ps-prim-blue-400`) | Same value, different ramp slot |
| **Midnight** | `#002F48` (`blue.900`) | `#002F48` (`--ps-prim-blue-800`) | Same value, different ramp slot |
| **Jetstream / Teal** | `#03D0BF`, `#87AFB8` | **missing** | Token Studio has teal accents; not used here |
| **Alert Red** | `#FF0000` | `#D14343` (`red-400`) | **Intentional divergence** — pure red felt too harsh for inline UI; downstream pages use the muted #D14343 family. |
| **Light Red** | `#FCC8C8` | `#FFEBEB` (`red-50`) | Same intent, different tint |
| **Green 100** | `#DCFAEF` | `#E5F9F2` (`green-50`) | Same intent, different tint |
| **Orange (Amber 500)** | `#FF9505` | `#FF9505` (`orange-400`) | ✅ matches |
| **Source Sans Pro** | `fontFamily.sans` | ✅ matches | |
| **Inter** | `fontFamily.ui` | **dropped** | Per user direction in `README.md` — Inter removed. |

### Recommendation
- Align on **`#005BA6` PS Blue** (more frequently used in the live code) **and update the Token Studio JSON to match**, or — if the Token Studio source is authoritative — flip every implementation to `#005BA7`. The mismatch creates ambiguity for every new design.
- Add `Airway #DCEAED` and `Jetstream #87AFB8` as primitives. They're brand colors the README cites; just missing.

---

## 2 · Architecture differences

| Concern | Canonical | This system |
|---|---|---|
| Brand alias name | `color.brand.primary` | `--ps-sem-action-default` |
| Surface name | `color.surface.page` | `--ps-sem-bg-surface` |
| Naming case | dot path with camelCase | hyphen kebab |
| Reference syntax | `{color.blue.500}` | `var(--ps-prim-blue-500)` |
| Tier prefixes | flat per category | `prim / sem / cmp` |
| Dark theme | not present | `[data-theme="dark"]` scaffold |
| Z-index scale | not present | full primitive + semantic |
| Breakpoints | not present | full primitive + semantic |
| Container widths | not present | full primitive + semantic |
| Icon sizes | declared in `icons.json` only | primitive + semantic |

The canonical only has 9 token files (primitives + ps-styles + 7 components); this system covers ~30 component areas and 4 layout-foundation categories the canonical doesn't.

**This system is a superset.** Anything in the canonical can be expressed here.

---

## 3 · Component-level discrepancies — JSON vs. live implementation

These are real bugs. The canonical JSON contradicts what's actually rendered on `partssource.com`-style pages in `preview/`.

### Button · Primary
| | Canonical JSON | `preview/buttons.html` | This `tokens.css` |
|---|---|---|---|
| Default bg | **SOLID** PS Blue | **OUTLINE** (white bg) | OUTLINE *(matches live)* |
| Default text | white | PS Blue | PS Blue *(matches live)* |
| On hover | darker blue | fills PS Blue | fills PS Blue *(matches live)* |

The canonical token JSON says primary is SOLID; the rendered button in the live preview is OUTLINE. This system follows the live preview, with the solid variant exposed as `--ps-cmp-button-primary-future-*`. ⚠ **Token Studio source needs a decision.**

### Checkbox accent
| | Canonical JSON | `preview/selections.html` | This `tokens.css` |
|---|---|---|---|
| Selected bg | **`{color.brand.primary}`** (PS Blue) | **`#FF9505`** (orange) | Orange *(matches live)* |

Live code uses ORANGE for selection accents. Canonical JSON says BLUE. ⚠ **One is wrong.** I followed the live implementation.

### Input
| Property | Canonical | Live | This system |
|---|---|---|---|
| padding-x | `spacing.4` = 16 px | **10 px** | 10 px *(matches live)* |
| border-radius | `borderRadius.md` = 4 px | **3 px** | 3 px *(matches live)* |
| focus ring | `color.blue.50` (#D0EEFC) | **0 0 10px rgba(0,91,166,.5) glow** | glow *(matches live)* |

Token JSON describes a clean focus ring; live code uses a soft glow. ⚠

### Tertiary button
| | Canonical JSON | `preview/buttons.html` | This `tokens.css` |
|---|---|---|---|
| Default bg | transparent | **`#F1F1F1` (filled grey pill)** | grey pill *(matches live)* |
| Default text | neutral primary | neutral 800 | neutral 800 |
| Hover text | brand | white-on-blue fill | grey-on-dark-grey *(matches live)* |
| Radius | `borderRadius.md` = 4 px | **`9999px` (pill)** | pill *(matches live)* |

Canonical says tertiary is a transparent ghost; live code is a fully-rounded grey pill. ⚠

---

## 4 · What canonical has that this system lacks

| File | Tokens of note |
|---|---|
| `components/alert.json` | Alert-specific semantic tokens; this system already covers them but worth cross-referencing |
| `components/banner.json` | Banner-specific (Promo / Midnight / Warning / Neutral / Airway variants). This system rolls them into Alert; consider splitting. |
| `components/icons.json` | `icon.color.{default,muted,brand,accent,success,danger,warning,info}` semantic. Worth importing into `--ps-cmp-icon-*`. |
| `tailwind.config.js` | Tailwind preset wiring. If a downstream project uses Tailwind, the canonical config is the canonical Tailwind shape. |

---

## 5 · Recommended next steps

1. **Pick a canonical hex for PS Blue.** Update both this system and the GitHub Token Studio source to agree (recommend `#005BA6`).
2. **Resolve the Button Primary contradiction** — either the Token Studio JSON is wrong (the brand redline note in `preview/buttons.html` says "moving away from orange for CTAs", implying primary is being redesigned) or the live preview is wrong.
3. **Resolve the Checkbox accent contradiction** — orange (live) vs blue (canonical). The live behavior is what users currently see.
4. **Backfill `Airway #DCEAED` and `Jetstream` as primitives** — they're brand colors per the README but missing from `tokens.css`.
5. **Import `icons.json` semantic colors** to formalize icon coloring per status.
6. **Add Banner as a separate component** from Alert (canonical splits them).
7. **Decide** whether to push this system's superset back to GitHub as `tokens.css` / dark-mode / new components, or keep it project-local.

---

## 6 · Resolutions applied (2026-05-13)

| Item | Decision | Status |
|---|---|---|
| **PS Blue hex** | Adopted `#005BA6` (the more frequently used variant in live preview pages). Canonical JSON should be updated upstream. | ✅ Set as `--ps-prim-blue-500`. |
| **Button Primary** | Adopted canonical **solid PS Blue fill** as the forward-looking spec. Outline-fills-on-hover variant retired from this token system. Tile tagged `● Future` to signal it's the new direction. | ✅ `--ps-cmp-button-primary-bg-default = --ps-sem-action-default`. |
| **Checkbox accent** | Kept live **orange** (`#FF9505`) — that's what users see today. Canonical JSON would need a fix to match. | ✅ `--ps-cmp-checkbox-bg-selected = --ps-prim-orange-400`. |
| **Input spec** | Kept live values (10 px pad-x, 3 px radius, 10 px glow ring). Canonical JSON describes a different aesthetic; live is authoritative. | ✅ All `--ps-cmp-input-*` mirror live. |
| **Tertiary button** | Kept live **grey pill** (`#F1F1F1`, fully rounded). Canonical's transparent-ghost spec retired. | ✅ `--ps-cmp-button-tertiary-bg-default = --ps-prim-gray-150`. |
| **Airway `#DCEAED`** | Added as `--ps-prim-blue-150` + `--ps-sem-bg-airway`. | ✅ |
| **Jetstream `#87AFB8`** + **Teal `#03D0BF`** | Added as `--ps-prim-teal-500` and `--ps-prim-teal-400`. | ✅ |
| **Inter font** | Confirmed dropped. Canonical retains it; this system uses Source Sans Pro everywhere. | ✅ |
| **Gray-650 `#5C5C5C`** | Added as a primitive — was the most common bypass in cards and metadata text. | ✅ |
