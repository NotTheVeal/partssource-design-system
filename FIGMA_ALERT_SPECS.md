# PartsSource Alert System — Figma Component Specs

Complete specification for building the PartsSource alert system in Figma. Includes all variants, states, and patterns.

---

## 1. Core Alert Variants

**Frame name:** `Alert / Inline`  
**Variants:** `Type` = Success | Info | Warning | Fail

### Base Specs (all variants):
- **Size:** Auto-width × 40px height
- **Corner radius:** 5px
- **Padding:** 12px top/bottom, 18px left, 25px right
- **Auto-layout:** Horizontal, 18px gap between icon and text

### Layout structure:
1. **Icon** (24×24, Lucide, 2px stroke):
   - Success: `circle-check-big` 
   - Info: `info`
   - Warning: `alert-triangle`
   - Fail: `circle-x`

2. **Text** (Fill container):
   - Font: Source Sans Pro, 14px, Bold (700)
   - Line height: 18px
   - Wraps to multiple lines if needed

### Variant-specific colors:

| Variant | Background | Text + Icon Color | Lucide Icon |
|---------|-----------|-------------------|-------------|
| Success | `#E2F5EE` | `#0E7C55` (Green 3) | circle-check-big |
| Info | `#EFF9FE` | `#005BA6` (PS Blue) | info |
| Warning | `#FFF4E5` | `#B45309` (Amber) | alert-triangle |
| Fail | `#FEF0F0` | `#E00000` (Red 1) | circle-x |

### Example text:
- Success: "Requester Has been Nudged for Part Order #: 64434335"
- Info: "You have a new PM for Asset 343433."
- Warning: "Your session will expire in 5 minutes. Save your work."
- Fail: "Part Order #: 64434335 has been Rejected."

---

## 2. Dismissible Alerts

**Frame name:** `Alert / Dismissible`  
**Variants:** `Type` = Success | Info | Warning | Fail

### Same as Core Alerts, plus:

**Close button** (added to right side):
- **Size:** 24×24 hit area
- **Icon:** Lucide `x`, 18×18, 2.5px stroke
- **Color:** Matches variant color
- **Opacity:** 60% default, 100% on hover
- **Position:** 12px margin-left from text

### Updated padding:
- 12px top/bottom, 18px left, 18px right (symmetric now that close button is present)

---

## 3. Alerts with Actions

**Frame name:** `Alert / With Actions`  
**Variants:** `Type` = Success | Info | Warning | Fail, `Actions` = 1 Button | 2 Buttons

### Same as Core Alerts, plus:

**Action buttons** (Secondary SM style):
- **Size:** 32px height × 87px min-width
- **Corner radius:** 4px
- **Border:** 1px solid `#DCDCDC` (Grey 4)
- **Padding:** 0px 8px
- **Font:** Inter, 10px, Medium (500)
- **Text color:** `#4A4A4A` (Grey 1)
- **Background:** White
- **Hover state:** Fill `#005BA6` (PS Blue), white text, blue border

**Layout:**
- Buttons appear after text (use Auto-layout, 8px gap between buttons)
- 18px padding-left before first button
- Buttons are right-aligned within the alert container

### Examples:
**1 Button:**
- Fail alert: "Payment failed. Please update your billing information." → [Update]

**2 Buttons:**
- Warning: "This action cannot be undone. Are you sure?" → [Cancel] [Continue]
- Info: "Software update available. Restart now?" → [Later] [Restart]

---

## 4. Multi-line Support

**Frame name:** `Alert / Multi-line`  
**Variant:** `Type` = Success | Info | Warning | Fail

### Specs:
- Same as Dismissible Alert
- **Height:** Auto (min 40px, grows with content)
- **Max-width:** ~800px (practical limit for readability)
- **Text wrapping:** Enabled, 2-line maximum recommended
- **Icon alignment:** Top (not center) when text wraps
- **Close button alignment:** Top (not center)

### Example:
"Scheduled maintenance will occur on Saturday, May 3rd from 2:00 AM to 6:00 AM EST. Some features may be temporarily unavailable during this time."

---

## 5. Toast Notifications

**Frame name:** `Toast`  
**Variants:** `Type` = Success | Info | Fail

### Base specs:
- **Size:** Auto-width (max 420px) × 56px min-height
- **Corner radius:** 8px
- **Padding:** 16px top/bottom, 18px left/right
- **Auto-layout:** Horizontal, 18px gap
- **Shadow:** 
  - Effect 1: Drop shadow, X: 0, Y: 4, Blur: 12, Color: `#000000` @ 15%
  - Effect 2: Drop shadow, X: 0, Y: 0, Blur: 0, Spread: 1, Color: `#000000` @ 5%

### Layout structure:
1. **Icon** (24×24, Lucide, 2px stroke)
2. **Text** (Fill container, Source Sans Pro 14px Semibold)
3. **Close button** (24×24, Lucide `x` 18×18, 2.5px stroke, 60% opacity)

### Variant colors:

| Variant | Background | Text + Icon | Close Icon |
|---------|-----------|-------------|------------|
| Success | `#E2F5EE` | `#0E7C55` | `#0E7C55` @ 60% |
| Info | `#EFF9FE` | `#005BA6` | `#005BA6` @ 60% |
| Fail | `#FEF0F0` | `#E00000` | `#E00000` @ 60% |

### Example text:
- Success: "Item added to cart"
- Info: "Your changes have been saved"
- Fail: "Upload failed. Please try again."

### Usage notes (for documentation):
- Appears fixed bottom-right (24px margin from edges)
- Stacks vertically with 12px gap if multiple toasts
- Auto-dismisses after 3–5 seconds
- Slide-in animation from right
- z-index: 9999 (above most UI)

---

## Component Structure in Figma

Recommended component hierarchy:

```
🔵 Alert System/
├─ 📦 Alert / Inline
│  ├─ ✅ Type=Success
│  ├─ ℹ️ Type=Info
│  ├─ ⚠️ Type=Warning
│  └─ ❌ Type=Fail
│
├─ 📦 Alert / Dismissible
│  ├─ ✅ Type=Success
│  ├─ ℹ️ Type=Info
│  ├─ ⚠️ Type=Warning
│  └─ ❌ Type=Fail
│
├─ 📦 Alert / With Actions
│  ├─ Type=Success, Actions=1 Button
│  ├─ Type=Success, Actions=2 Buttons
│  ├─ Type=Info, Actions=1 Button
│  ├─ Type=Info, Actions=2 Buttons
│  ├─ Type=Warning, Actions=1 Button
│  ├─ Type=Warning, Actions=2 Buttons
│  ├─ Type=Fail, Actions=1 Button
│  └─ Type=Fail, Actions=2 Buttons
│
├─ 📦 Alert / Multi-line
│  └─ (Same variants as Dismissible)
│
└─ 📦 Toast
   ├─ ✅ Type=Success
   ├─ ℹ️ Type=Info
   └─ ❌ Type=Fail
```

---

## Lucide Icons Required

Import these from lucide.dev or include as SVG assets:

- `circle-check-big` (Success)
- `circle-x` (Fail)
- `info` (Info)
- `alert-triangle` (Warning)
- `x` (Close button)

All icons: 24×24 frame, 2px stroke width, stroke-linecap: round, stroke-linejoin: round

---

## Design Tokens to Define

Create these as Figma variables for consistency:

### Alert Colors
- `alert/success/bg` → #E2F5EE
- `alert/success/fg` → #0E7C55
- `alert/info/bg` → #EFF9FE
- `alert/info/fg` → #005BA6
- `alert/warning/bg` → #FFF4E5
- `alert/warning/fg` → #B45309
- `alert/fail/bg` → #FEF0F0
- `alert/fail/fg` → #E00000

### Typography
- `alert/text/font` → Source Sans Pro
- `alert/text/size` → 14px
- `alert/text/weight` → Bold (700)
- `alert/text/lineHeight` → 18px

### Spacing
- `alert/padding/vertical` → 12px
- `alert/padding/horizontal` → 18px
- `alert/gap/icon-text` → 18px
- `alert/gap/text-actions` → 18px
- `alert/gap/button` → 8px

### Effects
- `alert/radius/inline` → 5px
- `alert/radius/toast` → 8px
- `toast/shadow/elevation` → 0px 4px 12px rgba(0,0,0,0.15)
- `toast/shadow/border` → 0px 0px 0px 1px rgba(0,0,0,0.05)

---

## Notes

- **Warning variant** is an extension beyond the original Figma frames (Success/Info/Fail only) — follows brand palette with amber treatment
- **Action buttons** use the existing Secondary SM button component
- **Multi-line alerts** use same base component with text wrapping enabled and icon/close alignment set to top
- **Toasts** are visually similar to alerts but larger (56px vs 40px), more rounded (8px vs 5px), and elevated with shadow
