# PartsSource Alert System — SVG Components for Figma Import

This folder contains production-ready SVG files for all alert variants. Import these into Figma and convert to components.

## Files Included

### Inline Alerts (40px height, 5px radius)
- `alert-success-inline.svg` — Success variant
- `alert-info-inline.svg` — Info variant
- `alert-warning-inline.svg` — Warning variant (NEW)
- `alert-fail-inline.svg` — Fail variant

### Dismissible Alerts (with close button)
- `alert-success-dismissible.svg` — Success with × close
- `alert-info-dismissible.svg` — Info with × close

### Alerts with Actions
- `alert-fail-with-action.svg` — Error with 1 button
- `alert-warning-two-actions.svg` — Warning with 2 buttons

### Toast Notifications (56px height, 8px radius, elevated shadow)
- `toast-success.svg` — Success toast
- `toast-info.svg` — Info toast
- `toast-fail.svg` — Fail toast

## How to Import into Figma

1. **Drag and drop** all SVG files into your Figma page
2. **Select each alert** → Right-click → **Create Component**
3. **Name components** following this pattern:
   - `Alert / Inline / Success`
   - `Alert / Inline / Info`
   - `Alert / Dismissible / Success`
   - `Toast / Success`
   - etc.

4. **Create variants** by combining similar components:
   - Select all "Inline" alerts → Right-click → **Combine as variants**
   - Add property: `Type` = Success | Info | Warning | Fail
   - Repeat for Dismissible and Toast groups

5. **Detach text layers** to make them editable:
   - Double-click into component
   - Select text → Right-click → **Detach instance** (if needed)
   - Convert to Figma text so you can edit content

6. **Fix fonts** (SVGs reference Source Sans Pro & Inter):
   - Select all text in Success alerts
   - Set font to **Source Sans Pro Bold 14px**
   - Repeat for all variants
   - Button text: **Inter Medium 10px**

7. **Optional: Extract icons as separate components**
   - Icons are embedded in the SVGs
   - You can replace them with Lucide plugin icons for easier maintenance

## Color Reference

All colors match the PartsSource design system:

| Variant | Background | Text/Icon |
|---------|-----------|-----------|
| Success | #E2F5EE | #0E7C55 |
| Info | #EFF9FE | #005BA6 |
| Warning | #FFF4E5 | #B45309 |
| Fail | #FEF0F0 | #E00000 |

## Next Steps

After importing:
1. Create **Multi-line** variants by duplicating and enabling text wrapping
2. Add **hover states** for buttons and close icons (change opacity 60% → 100%)
3. Set up **auto-layout** properties for dynamic width/height
4. Add **component documentation** with usage guidelines

Refer to `FIGMA_ALERT_SPECS.md` for complete build specifications.
