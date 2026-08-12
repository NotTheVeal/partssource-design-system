# PartsSource Design System — Font Audit

Cross-reference of all font sizes and families between Figma and implementation.

## Buttons (Figma node /Buttons)

### Primary/Secondary Large (50px height)
- **Figma**: Source Sans Pro, 15px, Regular (400)
- **Current**: 15px ✓
- **Action**: Verify weight is 400 not 600

### Primary/Secondary Small (36px height)  
- **Figma**: Source Sans Pro, 12px, Regular (400)
- **Current**: 12px ✓
- **Action**: Verify weight is 400

### Tertiary
- **Figma**: Source Sans Pro, 16px
- **Current**: Need to check
- **Action**: Update if different

### Pill (48px height)
- **Figma**: Source Sans Pro, 14px, Bold (700)
- **Current**: 14px bold ✓
- **Action**: None

---

## Cards (Figma node /Cards)

### Event Card — Large
- **Title**: 19px Bold #4A4A4A ✓
- **Subtitle**: 13px Regular #777 ✓
- **Meta labels**: 13px SemiBold #777 ✓
- **Meta values**: 13px Regular #777 ✓
- **Footer link**: 14px SemiBold #009CF4 ✓

### Status Card — Small (Figma node 3334:8457)
- **Title**: 12px Regular #000 (NOT bold!)
- **Meta**: 10px Regular #5C5C5C
- **Current**: 15px bold / 13px
- **Action**: FIX — reduce to 12px regular / 10px

### Alert Card — Medium (Figma node 3334:8457)
- **Title**: 12px Regular #000
- **Subtitle**: 10px Regular #5C5C5C
- **Location**: 10px Regular #000
- **DateTime**: 10px Regular #5C5C5C
- **Current**: Matches ✓

---

## Badges (Figma node /Aaron/Aaron-to-Define)

### Assignment Status Badges
- **Text**: 10px Source Sans Pro Bold
- **Current**: 10px bold ✓

---

## Inputs (need Figma check)
- **Label**: TBD
- **Placeholder**: TBD
- **Value text**: TBD

---

## Alerts
- **Text**: 13px Source Sans Pro
- **Current**: 13px ✓

---

## Actions Required

1. ✅ Buttons — font sizes correct, verify weights
2. ❌ Status Cards Small — reduce from 15px/13px to 12px/10px
3. ✅ Alert Cards Medium — correct
4. ✅ Badges — correct
5. ⏳ Inputs — need Figma audit
6. ⏳ Type scales — need audit
7. ⏳ Import Lucide icon library globally
