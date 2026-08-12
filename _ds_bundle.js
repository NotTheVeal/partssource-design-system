/* @ds-bundle: {"format":4,"namespace":"PartsSourceDesignSystem_e42fb5","components":[{"name":"AccordionCount","sourcePath":"UI Kit/Accordion.tsx"},{"name":"Accordion","sourcePath":"UI Kit/Accordion.tsx"},{"name":"Alert","sourcePath":"UI Kit/Alert.tsx"},{"name":"Toast","sourcePath":"UI Kit/Alert.tsx"},{"name":"StatusBadge","sourcePath":"UI Kit/Badge.tsx"},{"name":"ListTypeBadge","sourcePath":"UI Kit/Badge.tsx"},{"name":"Badge","sourcePath":"UI Kit/Badge.tsx"},{"name":"Button","sourcePath":"UI Kit/Button.tsx"},{"name":"ButtonInline","sourcePath":"UI Kit/Button.tsx"},{"name":"BackArrowIcon","sourcePath":"UI Kit/Button.tsx"},{"name":"Banner","sourcePath":"UI Kit/CMS.tsx"},{"name":"ImageBlock","sourcePath":"UI Kit/CMS.tsx"},{"name":"TextBlock","sourcePath":"UI Kit/CMS.tsx"},{"name":"CardGrid","sourcePath":"UI Kit/CMS.tsx"},{"name":"CMS","sourcePath":"UI Kit/CMS.tsx"},{"name":"EventCard","sourcePath":"UI Kit/Card.tsx"},{"name":"StatusCard","sourcePath":"UI Kit/Card.tsx"},{"name":"AlertCard","sourcePath":"UI Kit/Card.tsx"},{"name":"Card","sourcePath":"UI Kit/Card.tsx"},{"name":"AiDataCard","sourcePath":"UI Kit/CardExtras.tsx"},{"name":"ProductCard","sourcePath":"UI Kit/CardExtras.tsx"},{"name":"AnalyticsCard","sourcePath":"UI Kit/CardExtras.tsx"},{"name":"ListCard","sourcePath":"UI Kit/CardExtras.tsx"},{"name":"CardExtras","sourcePath":"UI Kit/CardExtras.tsx"},{"name":"Pagination","sourcePath":"UI Kit/Controls.tsx"},{"name":"DatePicker","sourcePath":"UI Kit/Controls.tsx"},{"name":"Controls","sourcePath":"UI Kit/Controls.tsx"},{"name":"Drawer","sourcePath":"UI Kit/Drawer.tsx"},{"name":"Avatar","sourcePath":"UI Kit/Feedback.tsx"},{"name":"AvatarGroup","sourcePath":"UI Kit/Feedback.tsx"},{"name":"Tooltip","sourcePath":"UI Kit/Feedback.tsx"},{"name":"TooltipRich","sourcePath":"UI Kit/Feedback.tsx"},{"name":"Skeleton","sourcePath":"UI Kit/Feedback.tsx"},{"name":"SkeletonKeyframes","sourcePath":"UI Kit/Feedback.tsx"},{"name":"LoadingSpinner","sourcePath":"UI Kit/Feedback.tsx"},{"name":"EmptyState","sourcePath":"UI Kit/Feedback.tsx"},{"name":"ErrorPage","sourcePath":"UI Kit/Feedback.tsx"},{"name":"Spinner","sourcePath":"UI Kit/Feedback.tsx"},{"name":"Feedback","sourcePath":"UI Kit/Feedback.tsx"},{"name":"FilterChip","sourcePath":"UI Kit/Filter.tsx"},{"name":"FilterShell","sourcePath":"UI Kit/Filter.tsx"},{"name":"Filter","sourcePath":"UI Kit/Filter.tsx"},{"name":"Input","sourcePath":"UI Kit/Input.tsx"},{"name":"Dropdown","sourcePath":"UI Kit/Input.tsx"},{"name":"Breadcrumb","sourcePath":"UI Kit/Layout.tsx"},{"name":"BreadcrumbBack","sourcePath":"UI Kit/Layout.tsx"},{"name":"Stepper","sourcePath":"UI Kit/Layout.tsx"},{"name":"Layout","sourcePath":"UI Kit/Layout.tsx"},{"name":"Modal","sourcePath":"UI Kit/Modal.tsx"},{"name":"ConfirmDialog","sourcePath":"UI Kit/Modal.tsx"},{"name":"TopNav","sourcePath":"UI Kit/Navigation.tsx"},{"name":"LeftNav","sourcePath":"UI Kit/Navigation.tsx"},{"name":"Navigation","sourcePath":"UI Kit/Navigation.tsx"},{"name":"Checkbox","sourcePath":"UI Kit/Selections.tsx"},{"name":"Radio","sourcePath":"UI Kit/Selections.tsx"},{"name":"Toggle","sourcePath":"UI Kit/Selections.tsx"},{"name":"Selections","sourcePath":"UI Kit/Selections.tsx"},{"name":"Table","sourcePath":"UI Kit/Table.tsx"},{"name":"FolderTabs","sourcePath":"UI Kit/Tabs.tsx"},{"name":"SegmentedTabs","sourcePath":"UI Kit/Tabs.tsx"},{"name":"PillTabs","sourcePath":"UI Kit/Tabs.tsx"},{"name":"Tabs","sourcePath":"UI Kit/Tabs.tsx"}],"sourceHashes":{"UI Kit/.eslintrc.cjs":"11705a817e91","UI Kit/.storybook/main.ts":"592f700e7950","UI Kit/.storybook/preview.ts":"28c60597637d","UI Kit/Accordion.tsx":"3ec31ef8cc37","UI Kit/Alert.tsx":"d836aa48d856","UI Kit/Badge.tsx":"b88505330c84","UI Kit/Button.tsx":"bf7789ddc33b","UI Kit/CMS.tsx":"eebdddfd9112","UI Kit/Card.tsx":"f66877a84006","UI Kit/CardExtras.tsx":"ae6a156cb521","UI Kit/Controls.tsx":"3760ef182786","UI Kit/Drawer.tsx":"68beb5a6b39c","UI Kit/Feedback.tsx":"6b54f8ce1963","UI Kit/Filter.tsx":"d97ff4882476","UI Kit/Input.tsx":"fe18b71a48f8","UI Kit/Layout.tsx":"861aab44bff7","UI Kit/Modal.tsx":"0edf70689f48","UI Kit/Navigation.tsx":"4478cd0b62c7","UI Kit/Selections.tsx":"e6906c7759a3","UI Kit/Showcase.tsx":"4f7c8de1545b","UI Kit/Table.tsx":"6ce8e0deb499","UI Kit/Tabs.tsx":"bd1d7446159b","UI Kit/eslint-config/index.cjs":"f836562d7cc2","UI Kit/tailwind.config.js":"a79f7332527e","UI Kit/tokens.ts":"f1cef427ff40","preview/drawer-builder.jsx":"9fe1cda6c782","preview/tweaks-panel.jsx":"22c052960f83","style-dictionary.config.js":"1ab6ebb017fb","ui_kits/ps-marketplace/Cart.jsx":"2c0ec4763732","ui_kits/ps-marketplace/Footer.jsx":"a99d62dc814f","ui_kits/ps-marketplace/Header.jsx":"fa2b19acf157","ui_kits/ps-marketplace/Hero.jsx":"a9771c1025a6","ui_kits/ps-marketplace/Homepage.jsx":"de477357cc97","ui_kits/ps-marketplace/PDP.jsx":"45dac7dc585b","ui_kits/ps-marketplace/ProductCard.jsx":"1f48c7491679","ui_kits/ps-marketplace/ProductGrid.jsx":"46b483e01387"},"inlinedExternals":[],"unexposedExports":[{"name":"config","sourcePath":"UI Kit/.storybook/main.ts"},{"name":"preview","sourcePath":"UI Kit/.storybook/preview.ts"}]} */

(() => {

const __ds_ns = (window.PartsSourceDesignSystem_e42fb5 = window.PartsSourceDesignSystem_e42fb5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// UI Kit/.eslintrc.cjs
try { (() => {
/* eslint-env node */
/**
 * PartsSource UI Kit — ESLint configuration
 *
 * Primary purpose: prevent raw color drift. Every color in src/*.tsx must
 * come through a token (`var(--ps-prim-...)`, `var(--ps-sem-...)`,
 * `var(--ps-cmp-...)`, or a Tailwind keyword like `white` / `black` /
 * `transparent`). The lint rule below blocks any new raw hex code from
 * landing in a string literal or template element.
 *
 * To intentionally allow a raw hex (e.g. a one-off marketing asset),
 * use:
 *   // eslint-disable-next-line no-restricted-syntax
 *   className="bg-[#abc123]"
 *
 * Run: npm run lint
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
  settings: {
    react: {
      version: '18.3'
    }
  },
  ignorePatterns: ['dist/', 'storybook-static/', 'node_modules/', 'tailwind.css',
  // Auto-generated browser copies — they mirror src/*.tsx and need not
  // be linted independently.
  '/*.tsx', '!/src/**/*.tsx'],
  rules: {
    // ──────────────────────────────────────────────────────────────
    // THE design-system guardrail
    // ──────────────────────────────────────────────────────────────
    'no-restricted-syntax': ['error', {
      selector: "Literal[value=/^#?[0-9a-fA-F]{3,8}$/], Literal[value=/[^a-zA-Z0-9_]#[0-9a-fA-F]{3,8}\\b/]",
      message: 'Raw hex color codes are not allowed in src/*.tsx. Use a token: var(--ps-prim-*), var(--ps-sem-*), or var(--ps-cmp-*). If you need a new color, add a primitive to tokens.css first.'
    }, {
      selector: "JSXAttribute[name.name=/^(fill|stroke|color)$/] > Literal[value=/#[0-9a-fA-F]{3,8}/]",
      message: 'Raw hex color codes in JSX attributes are not allowed. Use a token (var(--ps-prim-*)) or a Tailwind className.'
    }, {
      selector: "TemplateElement[value.raw=/#[0-9a-fA-F]{3,8}\\b/]",
      message: 'Raw hex color codes in template literals are not allowed. Reference a token instead.'
    }],
    // React 18 / TS niceties
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {
      argsIgnorePattern: '^_'
    }],
    '@typescript-eslint/no-explicit-any': 'off'
  },
  overrides: [{
    // Stories and tests can reference raw colors for illustration.
    files: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'],
    rules: {
      'no-restricted-syntax': 'off'
    }
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/.eslintrc.cjs", error: String((e && e.message) || e) }); }

// UI Kit/.storybook/main.ts
try { (() => {
/**
 * PartsSource React Kit — Storybook config.
 *
 * One `.stories.tsx` per component family lives next to the source
 * under `src/`. Storybook auto-discovers them via the glob below.
 *
 * Run with:
 *   npm run storybook        # dev server (port 6006)
 *   npm run build-storybook  # static export to storybook-static/
 */
const config = {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-interactions', '@storybook/addon-links'],
  docs: {
    autodocs: 'tag'
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  }
};
Object.assign(__ds_scope, { config, __ds_default_UI_Kit__storybook_main_7ftbt4: config });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/.storybook/main.ts", error: String((e && e.message) || e) }); }

// UI Kit/.storybook/preview.ts
try { (() => {
// Pre-built Tailwind output — run `npm run build:css`

const preview = {
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'surface',
      values: [{
        name: 'surface',
        value: '#FFFFFF'
      }, {
        name: 'canvas',
        value: '#FAFAFA'
      }, {
        name: 'muted',
        value: '#F1F1F1'
      }, {
        name: 'midnight',
        value: '#002F48'
      }]
    },
    layout: 'centered'
  },
  tags: ['autodocs']
};
Object.assign(__ds_scope, { preview, __ds_default_UI_Kit__storybook_preview_1onz3tx: preview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/.storybook/preview.ts", error: String((e && e.message) || e) }); }

// UI Kit/Accordion.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// Accordion.tsx — PartsSource Design System
//
// Components: Accordion · AccordionCount
// Variants:   default | row | filled
// States:     closed | open | hover | focus | disabled
//
// Pulled from preview/accordion.html + Figma node 4390:39583.
// ════════════════════════════════════════════════════════════════

// ── AccordionCount ────────────────────────────────────────────────
// Small badge that sits in the header meta slot.
// tone="info"     → blue-tinted  (default)
// tone="critical" → red-tinted

const AccordionCount = ({
  tone = "info",
  children
}) => {
  const styles = {
    info: {
      background: "#EFF9FE",
      color: "#005BA7",
      border: "1px solid #B0D7F4"
    },
    critical: {
      background: "#FEF0F0",
      color: "#9E2020",
      border: "1px solid #FFCFCF"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: "'Source Sans Pro', 'Source Sans 3', sans-serif",
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1,
      padding: "4px 10px",
      borderRadius: 30,
      ...styles[tone]
    }
  }, children);
};

// ── Chevron icon ──────────────────────────────────────────────────
const ChevronIcon = ({
  open
}) => /*#__PURE__*/React.createElement("svg", {
  width: 14,
  height: 14,
  viewBox: "0 0 14 14",
  fill: "none",
  "aria-hidden": "true",
  style: {
    flexShrink: 0,
    color: "#777777",
    transition: "transform 200ms ease",
    transform: open ? "rotate(180deg)" : "rotate(0deg)"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 5l4 4 4-4",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

// ── Drag-handle icon ─────────────────────────────────────────────
const DragHandleIcon = () => /*#__PURE__*/React.createElement("span", {
  "aria-hidden": "true",
  style: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
    flexShrink: 0,
    color: "#4A4A4A",
    cursor: "grab",
    marginRight: 4
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6.66675 4.99909L6.67175 4.99909M6.66675 9.99909L6.67175 9.99909M6.66675 14.9991L6.67175 14.9991M13.3284 4.99909L13.3334 4.99909M13.3284 9.99908L13.3334 9.99908M13.3284 14.9991L13.3334 14.9991",
  stroke: "currentColor",
  strokeWidth: "1.88",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})));

// ── Accordion ────────────────────────────────────────────────────

const Accordion = ({
  title,
  subtitle,
  meta,
  defaultOpen = false,
  dragHandle = false,
  variant = "default",
  disabled = false,
  children,
  className = ""
}) => {
  const [open, setOpen] = React.useState(defaultOpen);
  const panelId = React.useId ? React.useId() : `acc-${Math.random().toString(36).slice(2)}`;

  // ── Container styles by variant ──────────────────────────────
  const containerBase = {
    overflow: "hidden",
    transition: "border-color 120ms ease",
    fontFamily: "'Source Sans Pro', 'Source Sans 3', sans-serif"
  };
  const variantContainer = {
    default: {
      background: "#ffffff",
      border: "2px solid #F1F1F1",
      borderRadius: 4
    },
    row: {
      background: "transparent",
      border: "none",
      borderBottom: "1px solid #F1F1F1",
      borderRadius: 0
    },
    filled: {
      background: "#EFF9FE",
      border: "2px solid #B0D7F4",
      borderRadius: 4
    }
  };

  // ── Header styles by variant ─────────────────────────────────
  const headerBase = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    width: "100%",
    minHeight: 60,
    background: "transparent",
    border: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: "inherit",
    textAlign: "left",
    transition: "background 120ms ease",
    opacity: disabled ? 0.45 : 1
  };
  const variantHeaderPadding = {
    default: {
      padding: "16px 26px"
    },
    row: {
      padding: "14px 0"
    },
    filled: {
      padding: "16px 26px"
    }
  };
  const variantHeaderBg = {
    default: {
      background: "#ffffff"
    },
    row: {
      background: "transparent"
    },
    filled: {
      background: "#EFF9FE"
    }
  };

  // ── Panel body padding by variant ────────────────────────────
  const variantBodyPadding = {
    default: {
      padding: "20px 24px 24px"
    },
    row: {
      padding: "4px 0 16px"
    },
    filled: {
      padding: "20px 24px 24px"
    }
  };
  const [hovered, setHovered] = React.useState(false);
  const hoverBg = {
    default: "#FAFBFC",
    row: "#FAFBFC",
    filled: "#D0EDFC"
  };
  const headerStyle = {
    ...headerBase,
    ...variantHeaderPadding[variant],
    ...(hovered && !disabled ? {
      background: hoverBg[variant]
    } : variantHeaderBg[variant])
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...containerBase,
      ...variantContainer[variant]
    },
    className: className
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: headerStyle,
    "aria-expanded": open,
    "aria-controls": panelId,
    disabled: disabled,
    onClick: () => !disabled && setOpen(o => !o),
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, dragHandle && /*#__PURE__*/React.createElement(DragHandleIcon, null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "300 25px/1 'Source Sans Pro','Source Sans 3',sans-serif",
      color: "#000000",
      letterSpacing: "-0.028em"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 14px/1.4 'Source Sans Pro','Source Sans 3',sans-serif",
      color: "#777777",
      marginTop: 6
    }
  }, subtitle)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      flexShrink: 0
    }
  }, meta, /*#__PURE__*/React.createElement(ChevronIcon, {
    open: open
  }))), /*#__PURE__*/React.createElement("div", {
    id: panelId,
    style: {
      overflow: "hidden",
      maxHeight: open ? 2000 : 0,
      transition: "max-height 240ms ease"
    }
  }, children && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#2B2B2B",
      fontSize: 14,
      lineHeight: 1.6,
      ...variantBodyPadding[variant]
    }
  }, children)));
};

// ── Window export ─────────────────────────────────────────────────

if (typeof window !== "undefined") {
  Object.assign(window, {
    Accordion,
    AccordionCount
  });
}
Object.assign(__ds_scope, { AccordionCount, Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Accordion.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Alert.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Alert.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Alert.tsx — PartsSource Design System
//
// Alert: inline notification banner (success / info / warning / fail).
// Toast: transient bottom-right popup with the same severity scheme.
//
// Pulled from preview/alerts.html.
// ──────────────────────────────────────────────────────────────────

const cxAlert = (...parts) => parts.filter(Boolean).join(" ");

// Figma node 456:210 — Core Alerts.
// Success / Fail bg var(--ps-prim-red-100) (we previously had var(--ps-prim-red-150)). Body text is **700 bold**
// in Figma — except Info which is regular weight.
const severityStyles = {
  success: {
    bg: "bg-[var(--ps-prim-green-150)]",
    fg: "text-[var(--ps-prim-green-700)]",
    bold: true
  },
  info: {
    bg: "bg-[var(--ps-prim-blue-50)]",
    fg: "text-[var(--ps-prim-blue-500)]",
    bold: false
  },
  warning: {
    bg: "bg-[var(--ps-prim-orange-50)]",
    fg: "text-[var(--ps-prim-amber-700)]",
    bold: true
  },
  fail: {
    bg: "bg-[var(--ps-prim-red-100)]",
    fg: "text-[var(--ps-prim-red-700)]",
    bold: true
  }
};
const SeverityIcon = ({
  severity
}) => {
  switch (severity) {
    case "success":
      return /*#__PURE__*/React.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M21.801 10A10 10 0 1 1 17 3.335"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 11 3 3L22 4"
      }));
    case "fail":
      return /*#__PURE__*/React.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m15 9-6 6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 9 6 6"
      }));
    case "warning":
      return /*#__PURE__*/React.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("path", {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 9v4M12 17h.01"
      }));
    default:
      return /*#__PURE__*/React.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 16v-4M12 8h.01"
      }));
  }
};
const Alert = ({
  severity = "info",
  children,
  onDismiss,
  actions,
  className = ""
}) => {
  const s = severityStyles[severity];
  return /*#__PURE__*/React.createElement("div", {
    role: severity === "fail" || severity === "warning" ? "alert" : "status",
    className: cxAlert("flex items-center gap-[18px] min-h-10 px-[18px] py-3 rounded-[5px] text-[14px] leading-[18px]", "font-['Source_Sans_Pro',sans-serif]", s.bg, s.fg, className)
  }, /*#__PURE__*/React.createElement(SeverityIcon, {
    severity: severity
  }), /*#__PURE__*/React.createElement("span", {
    className: cxAlert("flex-1", s.bold && "font-bold")
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, actions), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    className: "flex-shrink-0 w-6 h-6 bg-transparent border-0 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
};
const Toast = ({
  severity = "info",
  children,
  onDismiss,
  className = ""
}) => {
  const s = severityStyles[severity];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    className: cxAlert("flex items-center gap-[18px] min-h-14 px-[18px] py-4 rounded-lg text-[14px] leading-[18px]", "shadow-[0_4px_12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05)]", "font-['Source_Sans_Pro',sans-serif]", s.bg, s.fg, className)
  }, /*#__PURE__*/React.createElement(SeverityIcon, {
    severity: severity
  }), /*#__PURE__*/React.createElement("span", {
    className: cxAlert("flex-1", s.bold && "font-bold")
  }, children), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    className: "flex-shrink-0 w-6 h-6 bg-transparent border-0 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
};

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    Alert,
    Toast
  });
}
Object.assign(__ds_scope, { Alert, Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Alert.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Badge.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Badge.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Badge.tsx — PartsSource Design System
//
// StatusBadge: small rectangular badge for order/asset status
//              (e.g. "In Stock", "Urgent", "Pending"). 4px radius,
//              12px Source Sans Pro Bold, 4×8 padding.
//
// ListTypeBadge: rounded pill badge for catalog categories
//              (Shopping List, PM List, Restocking). 40px radius, uppercase.
//
// Pulled from preview/badges.html.
// ──────────────────────────────────────────────────────────────────

const cxBadge = (...parts) => parts.filter(Boolean).join(" ");

// Status badge — 4px top/bottom, 8px left/right padding
const statusTones = {
  neutral: "bg-[var(--ps-prim-gray-200)] text-[var(--ps-prim-gray-700)]",
  info: "bg-[var(--ps-prim-blue-25)] text-[var(--ps-prim-blue-500)]",
  success: "bg-[var(--ps-prim-green-50)] text-[var(--ps-prim-green-600)]",
  warning: "bg-[var(--ps-prim-orange-50)] text-[var(--ps-prim-amber-700)]",
  critical: "bg-[var(--ps-prim-red-50)] text-[var(--ps-prim-red-600)]",
  items: "bg-[var(--ps-prim-blue-25)] text-[var(--ps-prim-blue-500)]"
};
const StatusBadge = ({
  children,
  tone = "neutral",
  className = ""
}) => /*#__PURE__*/React.createElement("span", {
  className: cxBadge("inline-flex items-center justify-center px-2 py-1 rounded-[4px] text-[12px] leading-none font-bold gap-2", "font-['Source_Sans_Pro',sans-serif]", statusTones[tone], className)
}, children);

// Figma node 4391:44856 — `Property 1=Purple` (and siblings).
// Authoritative palette pulled straight from the .fig:
//   Purple:  bg var(--ps-prim-blue-100) / text var(--ps-prim-blue-600)
//   Blue:    bg var(--ps-prim-blue-50) / text var(--ps-prim-blue-500) (preventative)
//   Pink:    bg var(--ps-prim-red-50) / text var(--ps-prim-red-600) (restocking)
// Font is **Inter** (not Source Sans Pro), 12px / 700, +0.5px letter-spacing.
const listTones = {
  shopping: "bg-[var(--ps-prim-purple-100)] text-[var(--ps-prim-purple-600)]",
  preventative: "bg-[var(--ps-prim-sky-50)] text-[var(--ps-prim-sky-600)]",
  restocking: "bg-[var(--ps-prim-pink-50)] text-[var(--ps-prim-pink-700)]"
};
const ListTypeBadge = ({
  children,
  tone = "shopping",
  className = ""
}) => /*#__PURE__*/React.createElement("span", {
  className: cxBadge("inline-flex items-center px-4 py-1.5 rounded-[40px] text-[12px] font-bold uppercase tracking-[0.5px]", "font-['Inter',sans-serif]", listTones[tone], className)
}, children);
const Badge = {
  StatusBadge,
  ListTypeBadge
};

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    StatusBadge,
    ListTypeBadge
  });
}
Object.assign(__ds_scope, { StatusBadge, ListTypeBadge, Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Badge.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Button.tsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Button.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Button.tsx — PartsSource Design System
//
// Variants:  primary | secondary | tertiary | pill | inline | arrow
// Sizes:     lg (50px) · sm (32px) · pill (48px) · arrow (28px) · tert-lg (40px)
// States:    default | hover | focus | pressed | disabled | loading
//
// Pulled from preview/buttons.html + Figma Buttons page.
// ──────────────────────────────────────────────────────────────────

// 28px square icon-only back button

// ── Base shell shared by every variant ───────────────────────────
const base = "inline-flex items-center justify-center font-['Source_Sans_Pro',sans-serif] " + "transition-colors duration-150 ease-in-out outline-none select-none " + "disabled:cursor-not-allowed";

// ── Size shells ──────────────────────────────────────────────────
// Canonical PartsSource button radius is 4px (per HTML preview + brand
// checklist). Figma node 115:631 shows 3px on this specific symbol but
// we treat that as Figma drift — 4px is the source of truth.
const sizeShells = {
  sm: "h-8 min-w-[87px] px-2 text-[10px] font-medium rounded border",
  lg: "h-[50px] min-w-[325px] px-[15px] text-[15px] font-normal rounded border-2"
};

// ── Variant × state matrices ─────────────────────────────────────
// Hover / pressed / focus are also exposed as `state` overrides so docs
// can render every state without faking interactions.
const variants = {
  primary: {
    default: "bg-white text-[var(--ps-prim-blue-500)] border-[var(--ps-prim-blue-500)]",
    hover: "bg-[var(--ps-prim-blue-500)] text-white border-[var(--ps-prim-blue-400)]",
    pressed: "bg-[var(--ps-prim-blue-600)] text-white border-[var(--ps-prim-blue-600)] shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
    focus: "bg-white text-[var(--ps-prim-blue-500)] border-[var(--ps-prim-blue-500)] shadow-[0_0_0_3px_rgba(176,198,211,0.91)]",
    disabled: "bg-[var(--ps-prim-gray-300)] text-[var(--ps-prim-gray-600)] border-[var(--ps-prim-gray-600)]",
    hoverInteractive: "hover:bg-[var(--ps-prim-blue-500)] hover:text-white hover:border-[var(--ps-prim-blue-400)] " + "active:bg-[var(--ps-prim-blue-600)] active:shadow-[0_4px_4px_rgba(0,0,0,0.25)] " + "focus-visible:shadow-[0_0_0_3px_rgba(176,198,211,0.91)] " + "disabled:bg-[var(--ps-prim-gray-300)] disabled:text-[var(--ps-prim-gray-600)] disabled:border-[var(--ps-prim-gray-600)]"
  },
  secondary: {
    default: "bg-white text-[var(--ps-prim-gray-700)] border-[var(--ps-prim-gray-300)]",
    hover: "bg-[var(--ps-prim-blue-500)] text-white border-[var(--ps-prim-blue-500)]",
    pressed: "bg-[var(--ps-prim-blue-600)] text-white border-[var(--ps-prim-blue-600)]",
    focus: "bg-white text-[var(--ps-prim-gray-700)] border-[var(--ps-prim-blue-500)] shadow-[0_0_0_3px_var(--ps-prim-blue-50)]",
    disabled: "bg-[var(--ps-prim-gray-300)] text-[var(--ps-prim-gray-500)] border-[var(--ps-prim-gray-500)]",
    hoverInteractive: "hover:bg-[var(--ps-prim-blue-500)] hover:text-white hover:border-[var(--ps-prim-blue-500)] " + "active:bg-[var(--ps-prim-blue-600)] active:border-[var(--ps-prim-blue-600)] " + "focus-visible:border-[var(--ps-prim-blue-500)] focus-visible:shadow-[0_0_0_3px_var(--ps-prim-blue-50)] " + "disabled:bg-[var(--ps-prim-gray-300)] disabled:text-[var(--ps-prim-gray-500)] disabled:border-[var(--ps-prim-gray-500)]"
  },
  tertiary: {
    // 40px pill — never sm. Override sizes below.
    default: "bg-[var(--ps-prim-gray-150)] text-[var(--ps-prim-gray-800)] border-transparent",
    hover: "bg-[var(--ps-prim-gray-300)] text-[var(--ps-prim-gray-800)] border-transparent",
    pressed: "bg-[var(--ps-prim-gray-400)] text-[var(--ps-prim-gray-800)] border-transparent shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
    focus: "bg-[var(--ps-prim-gray-150)] text-[var(--ps-prim-gray-800)] border-[var(--ps-prim-blue-500)] shadow-[0_0_0_3px_var(--ps-prim-blue-50)]",
    disabled: "bg-[var(--ps-prim-gray-150)] text-[var(--ps-prim-gray-500)] border-transparent",
    hoverInteractive: "hover:bg-[var(--ps-prim-gray-300)] " + "active:bg-[var(--ps-prim-gray-400)] active:shadow-[0_4px_4px_rgba(0,0,0,0.25)] " + "focus-visible:border-[var(--ps-prim-blue-500)] focus-visible:shadow-[0_0_0_3px_var(--ps-prim-blue-50)] " + "disabled:text-[var(--ps-prim-gray-500)]"
  },
  pill: {
    // Orange — 48px, legacy. Marked deprecated in docs.
    default: "bg-[var(--ps-prim-orange-400)] text-white border-transparent",
    hover: "bg-[var(--ps-prim-orange-500)] text-white border-transparent",
    pressed: "bg-[var(--ps-prim-orange-600)] text-white border-transparent",
    focus: "bg-[var(--ps-prim-orange-400)] text-white border-transparent shadow-[0_0_0_3px_rgba(255,149,5,0.3)]",
    disabled: "bg-[var(--ps-prim-orange-100)] text-white border-transparent",
    hoverInteractive: "hover:bg-[var(--ps-prim-orange-500)] active:bg-[var(--ps-prim-orange-600)] " + "focus-visible:shadow-[0_0_0_3px_rgba(255,149,5,0.3)] " + "disabled:bg-[var(--ps-prim-orange-100)]"
  },
  arrow: {
    default: "bg-transparent text-[var(--ps-prim-gray-700)] border-transparent",
    hover: "bg-[var(--ps-prim-gray-150)] text-[var(--ps-prim-gray-700)] border-transparent",
    pressed: "bg-[var(--ps-prim-gray-300)] text-[var(--ps-prim-gray-700)] border-transparent",
    focus: "bg-transparent text-[var(--ps-prim-gray-700)] border-[var(--ps-prim-blue-500)] shadow-[0_0_0_3px_var(--ps-prim-blue-50)]",
    disabled: "bg-transparent text-[var(--ps-prim-gray-700)] border-transparent opacity-50",
    hoverInteractive: "hover:bg-[var(--ps-prim-gray-150)] active:bg-[var(--ps-prim-gray-300)] " + "focus-visible:border-[var(--ps-prim-blue-500)] focus-visible:shadow-[0_0_0_3px_var(--ps-prim-blue-50)] " + "disabled:opacity-50"
  }
};

// ── Per-variant size overrides ───────────────────────────────────
const overrideSize = (variant, size) => {
  if (variant === "pill") {
    return "h-12 px-8 text-[14px] font-bold uppercase tracking-[0.5px] rounded-[100px] border-2";
  }
  if (variant === "tertiary") {
    return "h-10 min-w-[175px] px-6 text-[14px] font-normal rounded-full border";
  }
  if (variant === "arrow") {
    return "h-7 w-7 min-w-0 p-0 rounded border";
  }
  // primary / secondary use shared size shells
  return sizeShells[size];
};
const cx = (...parts) => parts.filter(Boolean).join(" ");

// ── Loading spinner ──────────────────────────────────────────────
const ButtonSpinner = ({
  className = ""
}) => /*#__PURE__*/React.createElement("svg", {
  className: `animate-spin ${className}`,
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  strokeWidth: "2.5",
  opacity: "0.25"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2 A10 10 0 0 1 22 12",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round"
}));

// ── Button ───────────────────────────────────────────────────────
const Button = ({
  variant = "primary",
  size = "lg",
  state,
  loading = false,
  iconStart,
  iconEnd,
  fullWidth,
  className = "",
  disabled,
  children,
  ...rest
}) => {
  const v = variants[variant];
  const sizeClasses = overrideSize(variant, size);

  // Static state overrides win over hover/focus interactives.
  let stateClasses;
  if (disabled || loading) {
    stateClasses = v.disabled;
  } else if (state) {
    stateClasses = v[state];
  } else {
    stateClasses = `${v.default} ${v.hoverInteractive}`;
  }
  const widthClass = fullWidth ? "w-full" : "";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled || loading,
    "aria-busy": loading || undefined,
    className: cx(base, sizeClasses, stateClasses, widthClass, className)
  }, rest), loading ? /*#__PURE__*/React.createElement(ButtonSpinner, null) : /*#__PURE__*/React.createElement(React.Fragment, null, iconStart && /*#__PURE__*/React.createElement("span", {
    className: "mr-1.5 inline-flex items-center"
  }, iconStart), /*#__PURE__*/React.createElement("span", null, children), iconEnd && /*#__PURE__*/React.createElement("span", {
    className: "ml-1.5 inline-flex items-center"
  }, iconEnd)));
};

// ── Inline button variants (text-styled, not boxed) ──────────────

const inlineStyles = {
  link: "inline-flex items-center gap-1.5 text-[14px] leading-5 text-[var(--ps-prim-gray-600)] " + "underline decoration-1 underline-offset-[4px] decoration-[var(--ps-prim-gray-600)] " + "hover:text-[var(--ps-prim-blue-500)] hover:decoration-[var(--ps-prim-blue-500)] " + "font-['Source_Sans_Pro',sans-serif]",
  "link-blue": "inline-flex items-center gap-1.5 text-[16px] font-bold leading-[1.3] " + "text-[var(--ps-prim-blue-500)] no-underline hover:underline " + "font-['Source_Sans_Pro',sans-serif]",
  tall: "inline-flex items-center gap-1.5 h-12 px-1 text-[14px] font-semibold " + "uppercase tracking-[0.3px] text-[var(--ps-prim-gray-600)] no-underline " + "hover:text-[var(--ps-prim-blue-500)] font-['Source_Sans_Pro',sans-serif]",
  dir: "inline-flex items-center gap-1.5 text-[14px] leading-5 text-[var(--ps-prim-gray-600)] " + "no-underline group hover:text-[var(--ps-prim-blue-500)] " + "font-['Source_Sans_Pro',sans-serif]"
};
const ButtonInline = ({
  kind = "link",
  className = "",
  children,
  ...rest
}) => /*#__PURE__*/React.createElement("a", _extends({
  className: cx(inlineStyles[kind], className)
}, rest), children, kind === "dir" && /*#__PURE__*/React.createElement("svg", {
  width: 8,
  height: 11,
  viewBox: "0 0 8 11",
  fill: "none",
  "aria-hidden": "true",
  className: "transition-transform group-hover:translate-x-0.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1.2 1 6 5.5 1.2 10",
  stroke: "var(--ps-prim-gray-500)",
  strokeWidth: "1.2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})));

// ── Back-arrow glyph for the `arrow` variant ─────────────────────
const BackArrowIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: 18,
  height: 18,
  viewBox: "0 0 27 28",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13.314 5.24818C13.69 4.87245 14.2993 4.87245 14.6753 5.24818C15.0517 5.62429 15.0517 6.23436 14.6753 6.61046L7.28059 14L14.6753 21.3895C15.0517 21.7657 15.0517 22.3757 14.6753 22.7518C14.2993 23.1276 13.69 23.1276 13.314 22.7518L4.55603 14L13.314 5.24818Z",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22.4441 14.0015C22.4441 14.5385 22.0087 14.9739 21.4717 14.9739L5.90217 14.9739L5.90217 13.0291L21.4717 13.0291C22.0087 13.0291 22.4441 13.4645 22.4441 14.0015Z",
  fill: "currentColor"
}));

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    Button,
    ButtonInline,
    BackArrowIcon
  });
}
Object.assign(__ds_scope, { Button, ButtonInline, BackArrowIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Button.tsx", error: String((e && e.message) || e) }); }

// UI Kit/CMS.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/CMS.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// CMS.tsx — PartsSource Design System (Bloomreach blocks)
//
// Banner:    Full-bleed hero with title, body, CTA on a background image.
// ImageBlock: Two-column hero — image on left or right, content on the other.
// TextBlock: Long-form text container with title + rich content.
// CardGrid:  Responsive grid of feature/benefit cards.
//
// Pulled from preview/cms-components.html.
// ──────────────────────────────────────────────────────────────────

const cxCms = (...parts) => parts.filter(Boolean).join(" ");
const Banner = ({
  title,
  body,
  ctaLabel,
  onCta,
  imageUrl,
  overlay = 0.45,
  className = ""
}) => /*#__PURE__*/React.createElement("section", {
  className: cxCms("relative overflow-hidden rounded-lg w-full min-h-[320px] flex items-center", "font-['Source_Sans_Pro',sans-serif]", className),
  style: {
    backgroundImage: imageUrl ? `url(${imageUrl})` : "linear-gradient(135deg, var(--ps-prim-blue-700) 0%, var(--ps-prim-blue-500) 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
}, imageUrl && /*#__PURE__*/React.createElement("div", {
  "aria-hidden": "true",
  className: "absolute inset-0",
  style: {
    background: `rgba(0,47,72,${overlay})`
  }
}), /*#__PURE__*/React.createElement("div", {
  className: "relative z-10 max-w-[640px] px-10 py-12 text-white"
}, /*#__PURE__*/React.createElement("h2", {
  className: "m-0 text-[40px] font-light leading-[1.15] tracking-[-0.01em]"
}, title), body && /*#__PURE__*/React.createElement("p", {
  className: "m-0 mt-4 text-[18px] leading-[1.55] text-white/90"
}, body), ctaLabel && /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: onCta,
  className: "mt-6 h-12 px-7 rounded-[100px] bg-[var(--ps-prim-orange-400)] text-white text-[14px] font-bold uppercase tracking-[0.5px] border-0 cursor-pointer hover:bg-[var(--ps-prim-orange-500)]"
}, ctaLabel)));
const ImageBlock = ({
  title,
  body,
  imageUrl,
  imageAlt = "",
  imagePosition = "right",
  ctaLabel,
  onCta,
  className = ""
}) => /*#__PURE__*/React.createElement("section", {
  className: cxCms("grid grid-cols-1 md:grid-cols-2 gap-10 items-center font-['Source_Sans_Pro',sans-serif]", className)
}, /*#__PURE__*/React.createElement("div", {
  className: cxCms(imagePosition === "right" ? "md:order-1" : "md:order-2")
}, /*#__PURE__*/React.createElement("h2", {
  className: "m-0 text-[32px] font-light leading-[1.2] text-[var(--ps-prim-blue-800)] tracking-[-0.01em]"
}, title), body && /*#__PURE__*/React.createElement("p", {
  className: "m-0 mt-4 text-[16px] leading-[1.6] text-[var(--ps-prim-gray-700)]"
}, body), ctaLabel && /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: onCta,
  className: "mt-6 h-12 px-7 rounded border-2 border-[var(--ps-prim-blue-500)] bg-white text-[var(--ps-prim-blue-500)] text-[15px] font-normal cursor-pointer hover:bg-[var(--ps-prim-blue-500)] hover:text-white"
}, ctaLabel)), /*#__PURE__*/React.createElement("div", {
  className: cxCms("rounded-lg overflow-hidden bg-[var(--ps-prim-gray-150)] aspect-[4/3]", imagePosition === "right" ? "md:order-2" : "md:order-1")
}, imageUrl ? /*#__PURE__*/React.createElement("img", {
  src: imageUrl,
  alt: imageAlt,
  className: "w-full h-full object-cover block"
}) : /*#__PURE__*/React.createElement("div", {
  className: "w-full h-full flex items-center justify-center text-[var(--ps-prim-gray-500)]"
}, /*#__PURE__*/React.createElement("svg", {
  width: 48,
  height: 48,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "9",
  r: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
})))));
const TextBlock = ({
  title,
  children,
  className = ""
}) => /*#__PURE__*/React.createElement("section", {
  className: cxCms("max-w-[760px] font-['Source_Sans_Pro',sans-serif]", className)
}, title && /*#__PURE__*/React.createElement("h2", {
  className: "m-0 mb-4 text-[28px] font-light leading-[1.2] text-[var(--ps-prim-blue-800)]"
}, title), /*#__PURE__*/React.createElement("div", {
  className: "text-[16px] leading-[1.7] text-[var(--ps-prim-gray-700)]"
}, children));
const gapMap = {
  sm: "gap-3",
  md: "gap-6",
  lg: "gap-10"
};
const colsMap = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4"
};
const CardGrid = ({
  cards,
  columns = 3,
  gap = "md",
  cardStyle = "outlined",
  className = ""
}) => /*#__PURE__*/React.createElement("div", {
  className: cxCms("grid grid-cols-1", colsMap[columns], gapMap[gap], "font-['Source_Sans_Pro',sans-serif]", className)
}, cards.map((card, i) => /*#__PURE__*/React.createElement("article", {
  key: card.id ?? i,
  className: cxCms("rounded-lg overflow-hidden bg-white", cardStyle === "outlined" ? "border border-[var(--ps-prim-gray-200)]" : "shadow-[0_4px_12px_rgba(0,0,0,0.06)]")
}, /*#__PURE__*/React.createElement("div", {
  className: "aspect-[16/9] bg-[var(--ps-prim-gray-150)]"
}, card.imageUrl ? /*#__PURE__*/React.createElement("img", {
  src: card.imageUrl,
  alt: "",
  className: "w-full h-full object-cover"
}) : null), /*#__PURE__*/React.createElement("div", {
  className: "p-5"
}, /*#__PURE__*/React.createElement("h3", {
  className: "m-0 text-[18px] font-bold text-[var(--ps-prim-blue-800)] leading-[1.3]"
}, card.title), /*#__PURE__*/React.createElement("p", {
  className: "m-0 mt-2 text-[14px] leading-[1.6] text-[var(--ps-prim-gray-700)]"
}, card.text)))));
const CMS = {
  Banner,
  ImageBlock,
  TextBlock,
  CardGrid
};

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    Banner,
    ImageBlock,
    TextBlock,
    CardGrid
  });
}
Object.assign(__ds_scope, { Banner, ImageBlock, TextBlock, CardGrid, CMS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/CMS.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Card.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Card.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Card.tsx — PartsSource Design System
//
// Variants:  event | status | alert | product
//
// EventCard   — 317px wide, icon header + metadata rows + footer link
// StatusCard  — 220×73, compact horizontal image+title+meta
// AlertCard   — 220 medium, image/icon + status badge + meta block
//
// Pulled from preview/cards.html + Figma Cards page.
// ──────────────────────────────────────────────────────────────────

const cxCard = (...parts) => parts.filter(Boolean).join(" ");

// ── EventCard ────────────────────────────────────────────────────

const EventCard = ({
  title,
  subtitle,
  icon,
  iconBg = "var(--ps-prim-blue-100)",
  iconFg = "var(--ps-prim-blue-500)",
  meta,
  ctaLabel = "View Details",
  onCtaClick,
  className = ""
}) => /*#__PURE__*/React.createElement("article", {
  className: cxCard("group w-[317px] bg-white border border-[var(--ps-prim-gray-300)] rounded overflow-hidden", "flex flex-col cursor-pointer transition-shadow duration-200", "hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)]", "font-['Source_Sans_Pro',sans-serif]", className)
}, /*#__PURE__*/React.createElement("div", {
  className: "flex-1 flex flex-col px-[21px] pt-[23px] pb-[13px]"
}, /*#__PURE__*/React.createElement("header", {
  className: "flex items-center gap-2.5 h-[46px] mb-[18px]"
}, /*#__PURE__*/React.createElement("div", {
  className: "w-[46px] h-[46px] rounded-full flex-shrink-0 flex items-center justify-center",
  style: {
    background: iconBg,
    color: iconFg
  }
}, icon), /*#__PURE__*/React.createElement("div", {
  className: "flex-1 flex flex-col gap-1 pt-[3px]"
}, /*#__PURE__*/React.createElement("h3", {
  className: "m-0 text-[19px] font-bold leading-[18px] text-[var(--ps-prim-gray-700)] tracking-[-0.01em]"
}, title), subtitle && /*#__PURE__*/React.createElement("p", {
  className: "m-0 text-[16px] leading-[18px] text-[var(--ps-prim-gray-600)]"
}, subtitle))), /*#__PURE__*/React.createElement("dl", {
  className: "m-0 flex flex-col text-[16px] leading-[18px] text-[var(--ps-prim-gray-600)]"
}, meta.map((row, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "flex gap-1.5"
}, /*#__PURE__*/React.createElement("dt", {
  className: "font-normal text-[var(--ps-prim-gray-600)]"
}, row.label, ":"), /*#__PURE__*/React.createElement("dd", {
  className: "m-0"
}, row.value))))), /*#__PURE__*/React.createElement("footer", {
  className: "bg-[var(--ps-prim-gray-50)] border-t border-[var(--ps-prim-gray-150)] py-[18px] flex items-center justify-center min-h-[56px]"
}, /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: onCtaClick,
  className: "inline-flex items-center gap-1.5 bg-transparent border-0 cursor-pointer text-[var(--ps-prim-blue-400)] text-[16px] font-semibold no-underline hover:underline"
}, ctaLabel, /*#__PURE__*/React.createElement("svg", {
  width: 14,
  height: 14,
  viewBox: "0 0 14 12",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 1L13 6M13 6L8 11M13 6H1",
  stroke: "currentColor",
  strokeWidth: "1.125",
  strokeLinecap: "round",
  strokeLinejoin: "round"
})))));

// ── StatusCard ───────────────────────────────────────────────────

const StatusCard = ({
  title,
  meta,
  thumbnail,
  thumbnailBg = "var(--ps-prim-gray-400)",
  onClick,
  className = ""
}) => /*#__PURE__*/React.createElement("article", {
  onClick: onClick,
  className: cxCard("w-[220px] h-[73px] bg-white border border-[var(--ps-prim-gray-300)] rounded p-3.5", "flex items-center gap-3 cursor-pointer transition-shadow duration-200", "hover:shadow-[0_4px_12px_rgba(0,0,0,0.10)]", "font-['Source_Sans_Pro',sans-serif]", className)
}, /*#__PURE__*/React.createElement("div", {
  className: "w-11 h-11 rounded-[2px] flex-shrink-0 flex items-center justify-center",
  style: {
    background: thumbnailBg
  }
}, thumbnail), /*#__PURE__*/React.createElement("div", {
  className: "flex-1 min-w-0"
}, /*#__PURE__*/React.createElement("p", {
  className: "m-0 text-[12px] leading-none text-[var(--ps-prim-gray-900)]"
}, title), /*#__PURE__*/React.createElement("p", {
  className: "m-0 mt-1 text-[10px] leading-[1.48] text-[var(--ps-prim-gray-650)] truncate"
}, meta)));

// ── AlertCard ────────────────────────────────────────────────────

const severityRing = {
  info: "bg-[var(--ps-prim-blue-500)]",
  warning: "bg-[var(--ps-prim-orange-400)]",
  error: "bg-[var(--ps-prim-red-700)]",
  success: "bg-[var(--ps-prim-green-700)]"
};
const AlertCard = ({
  title,
  subtitle,
  severity = "info",
  thumbnail,
  thumbnailBg = "var(--ps-prim-gray-400)",
  location,
  datetime,
  onClick,
  className = ""
}) => /*#__PURE__*/React.createElement("article", {
  onClick: onClick,
  className: cxCard("w-[220px] bg-white border border-[var(--ps-prim-gray-300)] rounded p-3.5", "flex flex-col gap-2.5 cursor-pointer transition-shadow duration-200", "hover:shadow-[0_5px_8px_rgba(21,21,21,0.12)]", "font-['Source_Sans_Pro',sans-serif]", className)
}, /*#__PURE__*/React.createElement("div", {
  className: "flex gap-2.5 items-start"
}, /*#__PURE__*/React.createElement("div", {
  className: "w-[44.45px] h-[44.45px] rounded-[2px] flex-shrink-0",
  style: {
    background: thumbnailBg
  }
}, thumbnail), /*#__PURE__*/React.createElement("div", {
  className: "flex-1 min-w-0 flex flex-col justify-center gap-1"
}, /*#__PURE__*/React.createElement("p", {
  className: cxCard("m-0 text-[12px] leading-none break-words", severity === "error" ? "text-[var(--ps-prim-red-700)]" : "text-[var(--ps-prim-gray-900)]")
}, title), subtitle && /*#__PURE__*/React.createElement("p", {
  className: "m-0 text-[10px] font-normal leading-[1.48] text-[var(--ps-prim-gray-650)]"
}, subtitle)), /*#__PURE__*/React.createElement("div", {
  className: cxCard("w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0", severityRing[severity])
}, /*#__PURE__*/React.createElement("svg", {
  width: 12,
  height: 12,
  viewBox: "0 0 12 12",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 3v3M6 8.5v.01",
  stroke: "white",
  strokeWidth: "1.5",
  strokeLinecap: "round"
})))), (location || datetime) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  className: "h-[0.823px] bg-black/15 -mx-3.5"
}), /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col text-[10px] leading-[1.48]"
}, location && /*#__PURE__*/React.createElement("p", {
  className: "m-0 text-[var(--ps-prim-gray-900)]"
}, location), datetime && /*#__PURE__*/React.createElement("p", {
  className: "m-0 flex items-center gap-1 text-[var(--ps-prim-gray-650)]"
}, /*#__PURE__*/React.createElement("span", {
  className: "w-[3.29px] h-[3.29px] rounded-full bg-black/15 inline-block"
}), datetime))));
const Card = {
  EventCard,
  StatusCard,
  AlertCard
};

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    EventCard,
    StatusCard,
    AlertCard
  });
}
Object.assign(__ds_scope, { EventCard, StatusCard, AlertCard, Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Card.tsx", error: String((e && e.message) || e) }); }

// UI Kit/CardExtras.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/CardExtras.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// CardExtras.tsx — PartsSource Design System
//
// Four additional card families from preview/cards.html that weren't
// covered by Card.tsx:
//
//   AiDataCard      — 348px AI-generated product+delivery card
//   ProductCard     — 500–620px full product detail card
//   AnalyticsCard   — KPI tile (wide / square / highlighted)
//   ListCard        — 294px list/product/create/standing variants
//
// All four are direct ports of the markup + tokens in
// preview/cards.html — copy is editable, structure is fixed.
// ──────────────────────────────────────────────────────────────────

const cxX = (...parts) => parts.filter(Boolean).join(" ");

// ══════════════════════════════════════════════════════════════════
// AiDataCard — Figma "AI Data Cards · 348px"
// ══════════════════════════════════════════════════════════════════

const aiBadgeTones = {
  notShipped: "bg-[var(--ps-prim-gray-200)] text-[var(--ps-prim-gray-450)]",
  urgent: "bg-[var(--ps-prim-orange-200)] text-[var(--ps-prim-orange-700)]",
  pending: "bg-[var(--ps-prim-sky-100)] text-[var(--ps-prim-sky-700)]"
};
const AiDataCard = ({
  title,
  manufacturer,
  meta,
  badges,
  cost,
  costLabel = "Cost:",
  className = ""
}) => /*#__PURE__*/React.createElement("article", {
  className: cxX("w-[348px] rounded-lg p-4 flex flex-col gap-4 cursor-pointer", "bg-[var(--ps-prim-gray-100)] border border-[var(--ps-prim-gray-200)] shadow-[0_4px_12px_rgba(0,0,0,0.04)]", "hover:bg-[var(--ps-prim-blue-25)] transition-colors", "font-['Source_Sans_Pro',sans-serif]", className)
}, /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col gap-1"
}, /*#__PURE__*/React.createElement("h3", {
  className: "m-0 text-[16px] font-bold leading-none text-[var(--ps-prim-gray-700)]"
}, title), manufacturer && /*#__PURE__*/React.createElement("p", {
  className: "m-0 text-[14px] leading-none text-[var(--ps-prim-gray-600)]"
}, manufacturer)), meta && /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col gap-1 text-[14px] leading-none text-[var(--ps-prim-gray-600)]"
}, meta), /*#__PURE__*/React.createElement("div", {
  className: "w-full h-px bg-[var(--ps-prim-gray-200)]"
}), /*#__PURE__*/React.createElement("div", {
  className: "flex items-end justify-between gap-4"
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-2 flex-wrap"
}, badges?.map((b, i) => /*#__PURE__*/React.createElement("span", {
  key: i,
  className: cxX("px-1 py-1 rounded text-[12px] font-bold leading-3 whitespace-nowrap", aiBadgeTones[b.tone])
}, b.label))), cost && /*#__PURE__*/React.createElement("div", {
  className: "flex items-end gap-2"
}, /*#__PURE__*/React.createElement("span", {
  className: "text-[14px] leading-none text-[var(--ps-prim-gray-500)]"
}, costLabel), /*#__PURE__*/React.createElement("span", {
  className: "text-[16px] font-bold leading-none text-[var(--ps-prim-gray-700)]"
}, cost))));

// ══════════════════════════════════════════════════════════════════
// ProductCard — Figma "Product Cards — Dynamic 500PX"
// Header (View Details + date) → title → image + info → status footer → actions
// ══════════════════════════════════════════════════════════════════

const ProductCard = ({
  title,
  href = "#",
  detailsLabel = "View Details",
  date,
  imageUrl,
  info,
  statusTitle,
  statusBody,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
  width = 500,
  className = ""
}) => /*#__PURE__*/React.createElement("article", {
  className: cxX("bg-white border border-[var(--ps-prim-gray-300)] rounded flex flex-col font-['Source_Sans_Pro',sans-serif]", className),
  style: {
    width,
    padding: "25px 29px 0"
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-between"
}, /*#__PURE__*/React.createElement("a", {
  href: href,
  className: "text-[14px] text-[var(--ps-prim-gray-600)] hover:underline no-underline"
}, detailsLabel), date && /*#__PURE__*/React.createElement("span", {
  className: "text-[13px] font-bold text-[var(--ps-prim-gray-900)] uppercase"
}, date)), /*#__PURE__*/React.createElement("h3", {
  className: "m-0 mt-[15px] mb-8 text-[16px] font-bold leading-[1.3]"
}, /*#__PURE__*/React.createElement("a", {
  href: href,
  className: "text-[var(--ps-prim-blue-500)] no-underline hover:underline"
}, title)), /*#__PURE__*/React.createElement("div", {
  className: "flex gap-8 mb-0"
}, /*#__PURE__*/React.createElement("div", {
  className: "w-[100px] h-[100px] flex-shrink-0"
}, imageUrl ? /*#__PURE__*/React.createElement("img", {
  src: imageUrl,
  alt: "",
  className: "w-full h-full object-contain"
}) : /*#__PURE__*/React.createElement("div", {
  className: "w-full h-full bg-[var(--ps-prim-gray-100)] border border-[var(--ps-prim-gray-200)] rounded"
})), /*#__PURE__*/React.createElement("div", {
  className: "flex-1 text-[16px] leading-[1.5] text-[var(--ps-prim-gray-900)]"
}, info.map((row, i) => /*#__PURE__*/React.createElement("div", {
  key: i
}, /*#__PURE__*/React.createElement("span", {
  className: "font-normal"
}, row.label, ":"), " ", /*#__PURE__*/React.createElement("span", {
  className: "font-semibold"
}, row.value))))), (statusTitle || statusBody) && /*#__PURE__*/React.createElement("div", {
  className: "bg-[var(--ps-prim-gray-150)] py-4 mt-8 mb-5",
  style: {
    marginLeft: -29,
    marginRight: -29
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "px-[29px] text-[16px] leading-[1.5]"
}, statusTitle && /*#__PURE__*/React.createElement("div", {
  className: "font-bold text-[var(--ps-prim-gray-900)] mb-1"
}, statusTitle), statusBody && /*#__PURE__*/React.createElement("div", {
  className: "text-[var(--ps-prim-gray-900)]"
}, statusBody))), (primaryLabel || secondaryLabel) && /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-end gap-3 bg-white",
  style: {
    padding: "16px 20px 20px",
    marginLeft: -29,
    marginRight: -29
  }
}, secondaryLabel && /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: onSecondary,
  className: cxX("h-[44.5px] px-6 rounded border border-[var(--ps-prim-gray-300)] bg-white text-[var(--ps-prim-gray-700)]", "text-[12px] font-bold cursor-pointer transition-colors", "hover:bg-[var(--ps-prim-blue-500)] hover:text-white hover:border-[var(--ps-prim-blue-500)]", "font-['Source_Sans_Pro',sans-serif]")
}, secondaryLabel), primaryLabel && /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: onPrimary,
  className: cxX("h-[44.5px] px-6 rounded bg-[var(--ps-prim-orange-400)] text-white border-0 cursor-pointer", "text-[13px] font-bold uppercase tracking-[0.5px] hover:bg-[var(--ps-prim-orange-500)]", "font-['Source_Sans_Pro',sans-serif]")
}, primaryLabel)));

// ══════════════════════════════════════════════════════════════════
// AnalyticsCard — Figma node 4100:12161
// Wide variant: centered metric + divider + delta + benchmark
// Square variant: left-aligned metric + label + sub
// ══════════════════════════════════════════════════════════════════

const TrendArrow = ({
  direction
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  style: {
    width: 12,
    height: 12
  }
}, direction === "up" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 19V5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 12l7-7 7 7"
})) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 12l7 7 7-7"
})));
const AnalyticsCard = ({
  layout = "square",
  icon,
  title,
  value,
  label,
  delta,
  deltaSuffix = "vs last year",
  benchmark,
  sub,
  highlight = false,
  linkLabel,
  onLink,
  showMenu = false,
  className = ""
}) => {
  const wide = layout === "wide";
  return /*#__PURE__*/React.createElement("article", {
    className: cxX(
    // Figma node 4100:12161 — width auto/337, radius 5, **2px** var(--ps-prim-gray-150) border,
    // padding 16. Soft shadow is hover-only.
    "rounded-[5px] p-4 flex flex-col gap-1 cursor-pointer", "font-['Source_Sans_Pro',sans-serif] transition-all", "hover:-translate-y-0.5", highlight ? "bg-[var(--ps-prim-blue-50)] border-2 border-[var(--ps-prim-blue-400)] hover:shadow-[0_4px_14px_rgba(0,91,166,0.18)]" : "bg-white border-2 border-[var(--ps-prim-gray-150)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]", wide ? "max-w-[480px]" : "max-w-[300px]", className)
  }, /*#__PURE__*/React.createElement("header", {
    className: "flex items-center justify-between gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 text-[14px] leading-none text-[var(--ps-prim-gray-700)]"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "w-4 h-4 text-[var(--ps-prim-gray-700)] inline-flex items-center"
  }, icon), title), linkLabel ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onLink?.();
    }
    // Figma: 12px / var(--ps-prim-gray-700) / underlined
    ,
    className: "text-[12px] text-[var(--ps-prim-gray-700)] underline decoration-1 underline-offset-[3px] hover:text-[var(--ps-prim-blue-500)] hover:decoration-[var(--ps-prim-blue-500)]"
  }, linkLabel) : showMenu ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Card options",
    className: "w-7 h-7 inline-flex items-center justify-center bg-transparent border-0 rounded cursor-pointer text-[var(--ps-prim-gray-800)] hover:bg-[var(--ps-prim-gray-150)]"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1"
  }))) : null), wide ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline justify-center gap-3 pt-2 pb-3.5 border-b border-[var(--ps-prim-gray-150)]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[34px] font-normal text-[var(--ps-prim-gray-700)] leading-none"
  }, value), label && /*#__PURE__*/React.createElement("span", {
    className: "text-[14px] text-[var(--ps-prim-gray-600)]"
  }, label)), delta && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-2 pt-1.5 text-[14px] text-[var(--ps-prim-gray-700)]"
  }, /*#__PURE__*/React.createElement("span", {
    className: cxX("inline-flex items-center gap-1 px-2.5 py-1 rounded-[30px] text-[14px] font-semibold", delta.direction === "up" ? "bg-[var(--ps-prim-green-150)] text-[var(--ps-prim-green-700)]" : "bg-[var(--ps-prim-red-150)] text-[var(--ps-prim-red-700)]")
  }, delta.value, /*#__PURE__*/React.createElement(TrendArrow, {
    direction: delta.direction
  })), deltaSuffix), benchmark && /*#__PURE__*/React.createElement("div", {
    className: "text-center text-[14px] text-[var(--ps-prim-gray-600)]"
  }, benchmark)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-2 pt-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[34px] font-normal text-[var(--ps-prim-gray-700)] leading-none"
  }, value), label && /*#__PURE__*/React.createElement("span", {
    className: "text-[16px] text-[var(--ps-prim-gray-700)]"
  }, label)), sub && /*#__PURE__*/React.createElement("div", {
    className: "text-[14px] text-[var(--ps-prim-gray-700)]"
  }, sub)));
};

// ══════════════════════════════════════════════════════════════════
// ListCard — Figma node 4100:12056
// Variants: list | product | create | standing
// ══════════════════════════════════════════════════════════════════

const listPillTones = {
  shopping: "bg-[var(--ps-prim-purple-50)] text-[var(--ps-prim-purple-700)]",
  preventative: "bg-[var(--ps-prim-sky-50)] text-[var(--ps-prim-sky-500)]",
  restocking: "bg-[var(--ps-prim-pink-100)] text-[var(--ps-prim-pink-600)]"
};

// ─── ListCard (default — list variant) ─────────────────────────────

// ─── ListCard (product variant) ────────────────────────────────────

// ─── ListCard (create-new variant) ─────────────────────────────────

// ─── ListCard (standing-order variant) ─────────────────────────────

const ShareIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "16 6 12 2 8 6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "2",
  x2: "12",
  y2: "15"
}));
const ListCard = props => {
  const base = "w-[294px] bg-white border border-[var(--ps-prim-gray-200)] rounded-md shadow-[0_0_4px_rgba(0,0,0,0.10)] " + "flex flex-col overflow-hidden font-['Source_Sans_Pro',sans-serif]";

  // ── list variant ──
  if (!props.variant || props.variant === "list") {
    const p = props;
    return /*#__PURE__*/React.createElement("article", {
      className: cxX(base, p.className)
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-5 flex flex-col gap-2 flex-1"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between gap-2"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "m-0 text-[22px] font-light text-[var(--ps-prim-gray-900)] leading-[1.2] tracking-[-0.005em]"
    }, p.title), p.showSort !== false && /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Sort",
      onClick: p.onSort,
      className: "w-4 h-4 text-[var(--ps-prim-gray-600)] bg-transparent border-0 cursor-pointer p-0"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m21 16-4 4-4-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 20V4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m3 8 4-4 4 4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 4v16"
    })))), p.pill && /*#__PURE__*/React.createElement("span", {
      className: cxX("inline-flex items-center self-start px-3.5 py-1 rounded-[40px]", "text-[12px] font-bold uppercase leading-[1.2]", listPillTones[p.pill.tone])
    }, p.pill.label), p.count && /*#__PURE__*/React.createElement("div", {
      className: "text-[14px] font-bold text-[var(--ps-prim-gray-900)]"
    }, p.count)), /*#__PURE__*/React.createElement("div", {
      className: "border-t border-[var(--ps-prim-gray-300)] px-5 py-2.5 flex items-center gap-2 text-[14px] text-[var(--ps-prim-gray-600)]"
    }, /*#__PURE__*/React.createElement(ShareIcon, null), /*#__PURE__*/React.createElement("span", null, p.shareCount ?? 0)));
  }

  // ── product variant ──
  if (props.variant === "product") {
    const p = props;
    return /*#__PURE__*/React.createElement("article", {
      className: cxX(base, p.className)
    }, /*#__PURE__*/React.createElement("div", {
      className: "aspect-square bg-[var(--ps-prim-gray-150)] flex items-center justify-center border-b border-[var(--ps-prim-gray-150)] p-[18px]"
    }, p.imageUrl ? /*#__PURE__*/React.createElement("img", {
      src: p.imageUrl,
      alt: "",
      className: "max-w-full max-h-full object-contain"
    }) : /*#__PURE__*/React.createElement("svg", {
      width: 48,
      height: 48,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--ps-prim-gray-500)",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2",
      ry: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "p-5 flex flex-col gap-2 flex-1"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "m-0 text-[16px] font-bold text-[var(--ps-prim-blue-500)] uppercase leading-[1.3]"
    }, p.title), p.price && /*#__PURE__*/React.createElement("div", {
      className: "text-[16px] font-bold text-[var(--ps-prim-gray-900)] mt-1.5"
    }, p.price), p.condition && /*#__PURE__*/React.createElement("div", {
      className: "text-[14px] text-[var(--ps-prim-gray-900)] leading-[1.4]"
    }, p.condition), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mt-[18px]"
    }, /*#__PURE__*/React.createElement("label", {
      className: "text-[14px] text-[var(--ps-prim-gray-900)]",
      htmlFor: "lc-qty"
    }, "Qty:"), /*#__PURE__*/React.createElement("select", {
      id: "lc-qty",
      value: p.qty ?? 1,
      onChange: e => p.onQtyChange?.(Number(e.target.value)),
      className: "w-[60px] h-8 border border-[var(--ps-prim-gray-400)] rounded bg-white px-2.5 text-[14px] text-[var(--ps-prim-gray-900)] cursor-pointer"
    }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement("option", {
      key: n,
      value: n
    }, n))), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: p.onAddToCart,
      className: "flex-1 h-10 px-4 bg-[var(--ps-prim-orange-400)] text-white border-0 rounded text-[14px] font-bold uppercase tracking-[0.6px] cursor-pointer hover:bg-[var(--ps-prim-orange-500)]"
    }, "Add to Cart")), p.onRemove && /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: p.onRemove,
      className: "mt-4 self-start text-[12px] font-bold text-[var(--ps-prim-gray-600)] uppercase tracking-[0.6px] bg-transparent border-0 p-0 cursor-pointer hover:text-[var(--ps-prim-blue-500)]"
    }, "Remove Item")));
  }

  // ── create variant ──
  if (props.variant === "create") {
    const p = props;
    return /*#__PURE__*/React.createElement("article", {
      onClick: p.onCreate,
      className: cxX(base, "items-center text-center cursor-pointer hover:bg-[var(--ps-prim-gray-50)]", p.className)
    }, /*#__PURE__*/React.createElement("div", {
      className: "px-5 py-7 flex flex-col items-center gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-10 h-10 rounded-full bg-[var(--ps-prim-green-100)] text-[var(--ps-prim-green-600)] inline-flex items-center justify-center mb-3"
    }, /*#__PURE__*/React.createElement("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    }))), /*#__PURE__*/React.createElement("h3", {
      className: "m-0 text-[18px] font-normal text-[var(--ps-prim-gray-900)]"
    }, p.title ?? "Create New List"), /*#__PURE__*/React.createElement("p", {
      className: "m-0 text-[14px] text-[var(--ps-prim-gray-900)] leading-[1.45] max-w-[220px]"
    }, p.description ?? "Create shopping lists, repair lists, preventative maintenance lists, or restocking lists")));
  }

  // ── standing-order variant ──
  const p = props;
  return /*#__PURE__*/React.createElement("article", {
    className: cxX(base, p.className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-5 flex flex-col gap-2 flex-1"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "m-0 text-[22px] font-light text-[var(--ps-prim-gray-900)] leading-[1.2] tracking-[-0.005em]"
  }, p.title), p.meta && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-1.5 mt-3.5 text-[14px] text-[var(--ps-prim-gray-900)] leading-[1.5]"
  }, p.meta.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("b", null, row.label, ":"), " ", row.value)))), /*#__PURE__*/React.createElement("div", {
    className: "bg-[var(--ps-prim-blue-50)] px-5 py-3 flex items-center gap-2 text-[14px] font-bold text-[var(--ps-prim-blue-500)]"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  })), /*#__PURE__*/React.createElement("span", null, p.statusLabel ?? "Upcoming Order"), p.statusDate && /*#__PURE__*/React.createElement("span", {
    className: "ml-auto font-bold"
  }, p.statusDate)), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-[var(--ps-prim-gray-300)] px-5 py-2.5 flex items-center gap-2 text-[14px] text-[var(--ps-prim-gray-600)]"
  }, /*#__PURE__*/React.createElement(ShareIcon, null), /*#__PURE__*/React.createElement("span", null, p.shareCount ?? 0)));
};
const CardExtras = {
  AiDataCard,
  ProductCard,
  AnalyticsCard,
  ListCard
};

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    AiDataCard,
    ProductCard,
    AnalyticsCard,
    ListCard
  });
}
Object.assign(__ds_scope, { AiDataCard, ProductCard, AnalyticsCard, ListCard, CardExtras });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/CardExtras.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Controls.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Controls.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Controls.tsx — PartsSource Design System
//
// Pagination — page picker with prev/next/ellipsis + page-size
// DatePicker — Start/End range field with single-month calendar popover
//
// Sourced from preview/pagination.html + preview/date-picker.html.
// ──────────────────────────────────────────────────────────────────

const cxC = (...parts) => parts.filter(Boolean).join(" ");

// ══════════════════════════════════════════════════════════════════
// Pagination — emits a windowed page list with ellipses
// ══════════════════════════════════════════════════════════════════

/**
 * Build a windowed page list: [1, …, 12, 13, 14, …, 24].
 * Always shows first + last; otherwise siblings of the active page.
 */
const buildPageWindow = (page, totalPages) => {
  const siblings = 1;
  if (totalPages <= 7) return Array.from({
    length: totalPages
  }, (_, i) => i + 1);
  const leftSibling = Math.max(2, page - siblings);
  const rightSibling = Math.min(totalPages - 1, page + siblings);
  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < totalPages - 1;
  const out = [1];
  if (!showLeftDots) {
    for (let i = 2; i <= Math.min(5, totalPages - 1); i++) out.push(i);
  } else {
    out.push("…");
    for (let i = leftSibling; i <= rightSibling; i++) out.push(i);
  }
  if (showRightDots) {
    if (!out.includes("…")) out.push("…");else if (out[out.length - 1] !== "…") out.push("…");
  } else if (!showLeftDots) {
    // window starts from beginning — already pushed up to 5
  }
  if (out[out.length - 1] !== totalPages) out.push(totalPages);
  return out;
};
const ChevronIcon = ({
  direction
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 11 11",
  fill: "none",
  "aria-hidden": "true",
  className: "w-[11px] h-[11px]"
}, /*#__PURE__*/React.createElement("path", {
  d: direction === "left" ? "M7 1L2.5 5.5 7 10" : "M4 1l4.5 4.5L4 10",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round"
}));
const Pagination = ({
  page,
  totalPages,
  total,
  pageSize,
  pageSizeOptions = [10, 25, 50, 100],
  onPageChange,
  onPageSizeChange,
  compact = false,
  className = ""
}) => {
  const pages = buildPageWindow(page, totalPages);
  const start = pageSize ? (page - 1) * pageSize + 1 : undefined;
  const end = pageSize && total !== undefined ? Math.min(total, page * pageSize) : undefined;
  const btnBase = "min-w-8 h-8 px-2 inline-flex items-center justify-center bg-transparent text-[var(--ps-prim-gray-800)] border-0 rounded-[5px] " + "text-[14px] font-normal cursor-pointer transition-colors font-['Source_Sans_Pro',sans-serif]";
  return /*#__PURE__*/React.createElement("div", {
    className: cxC("flex items-center justify-between gap-4 flex-wrap", "bg-white border border-[var(--ps-prim-gray-150)] rounded-md font-['Source_Sans_Pro',sans-serif] text-[14px] text-[var(--ps-prim-gray-800)]", compact ? "px-3 py-2" : "px-[18px] py-4", className)
  }, !compact && total !== undefined && pageSize !== undefined && /*#__PURE__*/React.createElement("span", {
    className: compact ? "text-[13px] text-[var(--ps-prim-gray-600)]" : ""
  }, /*#__PURE__*/React.createElement("b", {
    className: "font-bold"
  }, start, "\u2013", end), " of ", /*#__PURE__*/React.createElement("b", {
    className: "font-bold"
  }, total), " results"), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Pagination",
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous page",
    disabled: page <= 1,
    onClick: () => onPageChange(page - 1),
    className: cxC(btnBase, "border border-[var(--ps-prim-gray-200)] bg-white hover:enabled:bg-[var(--ps-prim-gray-150)] disabled:opacity-40 disabled:cursor-not-allowed")
  }, /*#__PURE__*/React.createElement(ChevronIcon, {
    direction: "left"
  })), pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `dots-${i}`,
    className: "px-1 text-[var(--ps-prim-gray-500)]"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    "aria-current": p === page ? "page" : undefined,
    onClick: () => onPageChange(p),
    className: cxC(btnBase, p === page ? "bg-[var(--ps-prim-blue-500)] text-white font-bold hover:bg-[var(--ps-prim-blue-500)]" : "hover:bg-[var(--ps-prim-gray-150)]")
  }, p)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next page",
    disabled: page >= totalPages,
    onClick: () => onPageChange(page + 1),
    className: cxC(btnBase, "border border-[var(--ps-prim-gray-200)] bg-white hover:enabled:bg-[var(--ps-prim-gray-150)] disabled:opacity-40 disabled:cursor-not-allowed")
  }, /*#__PURE__*/React.createElement(ChevronIcon, {
    direction: "right"
  }))), !compact && onPageSizeChange && pageSize !== undefined && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "Show:"), /*#__PURE__*/React.createElement("select", {
    "aria-label": "Items per page",
    value: pageSize,
    onChange: e => onPageSizeChange(Number(e.target.value)),
    className: "h-8 border border-[var(--ps-prim-gray-400)] rounded px-2.5 text-[14px] text-[var(--ps-prim-gray-800)] bg-white cursor-pointer outline-none focus:border-[var(--ps-prim-blue-500)] focus:shadow-[0_0_0_3px_rgba(0,91,166,0.15)] font-['Source_Sans_Pro',sans-serif]"
  }, pageSizeOptions.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt,
    value: opt
  }, opt)))));
};

// ══════════════════════════════════════════════════════════════════
// DatePicker — Start/End range fields + month calendar
// ══════════════════════════════════════════════════════════════════

const fmt = d => d ? d.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric"
}) : "";
const CalendarIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 2v4M8 2v4M3 10h18"
}));
const sameDay = (a, b) => !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const isBetween = (d, a, b) => {
  if (!a || !b) return false;
  const t = d.getTime();
  const ta = a.getTime();
  const tb = b.getTime();
  return t >= Math.min(ta, tb) && t <= Math.max(ta, tb);
};
const CalendarPopover = ({
  month,
  onMonthChange,
  start,
  end,
  onSelect,
  onCancel,
  onApply
}) => {
  const year = month.getFullYear();
  const m = month.getMonth();
  const firstOfMonth = new Date(year, m, 1);
  const startWeekday = firstOfMonth.getDay(); // 0 = Sun
  const daysInMonth = new Date(year, m + 1, 0).getDate();
  const today = new Date();
  const cells = [];
  // Previous month tail
  const prevMonthDays = new Date(year, m, 0).getDate();
  for (let i = startWeekday - 1; i >= 0; i--) {
    cells.push({
      d: new Date(year, m - 1, prevMonthDays - i),
      other: true
    });
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push({
      d: new Date(year, m, day),
      other: false
    });
  }
  // Pad to 6 rows
  while (cells.length < 42) {
    const last = cells[cells.length - 1].d;
    const next = new Date(last);
    next.setDate(next.getDate() + 1);
    cells.push({
      d: next,
      other: true
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "w-[300px] bg-white border border-[var(--ps-prim-gray-200)] rounded-md shadow-[0_6px_20px_rgba(0,47,72,0.12)] p-4 font-['Source_Sans_Pro',sans-serif] text-[14px] leading-[1.4]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[16px] font-bold text-[var(--ps-prim-blue-800)]"
  }, month.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous month",
    onClick: () => onMonthChange(new Date(year, m - 1, 1)),
    className: "w-7 h-7 inline-flex items-center justify-center border-0 bg-transparent cursor-pointer text-[var(--ps-prim-gray-700)] rounded hover:bg-[var(--ps-prim-gray-150)] hover:text-[var(--ps-prim-blue-500)]"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 11 11",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1L2.5 5.5 7 10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next month",
    onClick: () => onMonthChange(new Date(year, m + 1, 1)),
    className: "w-7 h-7 inline-flex items-center justify-center border-0 bg-transparent cursor-pointer text-[var(--ps-prim-gray-700)] rounded hover:bg-[var(--ps-prim-gray-150)] hover:text-[var(--ps-prim-blue-500)]"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 11 11",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 1l4.5 4.5L4 10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-7 gap-0.5"
  }, ["S", "M", "T", "W", "T", "F", "S"].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "h-7 text-[11px] font-bold uppercase tracking-[0.5px] text-[var(--ps-prim-gray-500)] inline-flex items-center justify-center"
  }, d)), cells.map(({
    d,
    other
  }, i) => {
    const selected = sameDay(d, start) || sameDay(d, end);
    const inRange = !selected && isBetween(d, start, end);
    const isToday = sameDay(d, today);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => onSelect(d),
      className: cxC("w-9 h-9 inline-flex items-center justify-center border-0 cursor-pointer text-[14px]", "rounded-md", selected ? "bg-[var(--ps-prim-blue-500)] text-white font-bold" : inRange ? "bg-[var(--ps-prim-blue-50)] text-[var(--ps-prim-blue-500)] rounded-none" : other ? "bg-transparent text-[var(--ps-prim-gray-400)]" : isToday ? "bg-transparent text-[var(--ps-prim-blue-500)] font-bold" : "bg-transparent text-[var(--ps-prim-gray-800)] hover:bg-[var(--ps-prim-blue-50)] hover:text-[var(--ps-prim-blue-500)]", sameDay(d, start) && "rounded-l-md rounded-r-none", sameDay(d, end) && start && !sameDay(d, start) && "rounded-r-md rounded-l-none")
    }, d.getDate());
  })), (onCancel || onApply) && /*#__PURE__*/React.createElement("div", {
    className: "mt-3.5 pt-3 border-t border-[var(--ps-prim-gray-150)] flex justify-between gap-2"
  }, onCancel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCancel,
    className: "h-8 px-3 border border-[var(--ps-prim-gray-300)] bg-white rounded text-[13px] font-semibold text-[var(--ps-prim-gray-700)] cursor-pointer hover:border-[var(--ps-prim-blue-500)] hover:text-[var(--ps-prim-blue-500)]"
  }, "Cancel"), onApply && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onApply,
    className: "h-8 px-3 border border-[var(--ps-prim-blue-500)] bg-[var(--ps-prim-blue-500)] text-white rounded text-[13px] font-semibold cursor-pointer hover:bg-[var(--ps-prim-blue-600)] hover:border-[var(--ps-prim-blue-600)]"
  }, "Apply")));
};
const DateField = ({
  label,
  value,
  disabled,
  error,
  onTrigger
}) => /*#__PURE__*/React.createElement("div", {
  className: cxC("relative w-[230px] h-12 bg-white border rounded-[3px] overflow-hidden transition-all duration-100", disabled ? "border-[var(--ps-prim-gray-300)] cursor-not-allowed bg-[var(--ps-prim-gray-50)]" : error ? "border-[var(--ps-prim-red-600)]" : "border-[var(--ps-prim-gray-500)] hover:border-black focus-within:border-[var(--ps-prim-blue-500)] focus-within:shadow-[0_0_10px_0_rgba(0,91,166,0.5)]"),
  onClick: !disabled ? onTrigger : undefined
}, /*#__PURE__*/React.createElement("input", {
  type: "text",
  readOnly: true,
  "aria-label": label,
  placeholder: label,
  value: value ? fmt(value) : "",
  disabled: disabled,
  className: cxC("w-full h-full border-0 outline-none px-3 pr-14 bg-transparent text-[16px]", "font-['Source_Sans_Pro',sans-serif] leading-none cursor-pointer", disabled ? "text-[var(--ps-prim-gray-500)] cursor-not-allowed" : error ? "text-[var(--ps-prim-red-600)]" : value ? "text-black" : "text-[var(--ps-prim-gray-700)]")
}), /*#__PURE__*/React.createElement("button", {
  type: "button",
  "aria-label": "Open calendar",
  disabled: disabled,
  className: cxC("absolute top-0 right-0 h-full w-12 inline-flex items-center justify-center border-0 cursor-pointer text-white transition-colors", disabled ? "bg-[var(--ps-prim-orange-100)] cursor-not-allowed" : "bg-[var(--ps-prim-orange-400)] hover:bg-[var(--ps-prim-orange-500)] focus-visible:outline-2 focus-visible:outline-[var(--ps-prim-blue-800)] focus-visible:-outline-offset-[3px]")
}, /*#__PURE__*/React.createElement(CalendarIcon, null)));
const DatePicker = ({
  title,
  startDate,
  endDate,
  onChange,
  disabled = false,
  error,
  range = true,
  className = ""
}) => {
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState(startDate ?? new Date());
  const [draftStart, setDraftStart] = React.useState(startDate);
  const [draftEnd, setDraftEnd] = React.useState(endDate);
  const wrap = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (!wrap.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  const selectDay = d => {
    if (!range) {
      setDraftStart(d);
      setDraftEnd(undefined);
      return;
    }
    // Range selection — first click sets start; second click closes range
    if (!draftStart || draftStart && draftEnd) {
      setDraftStart(d);
      setDraftEnd(undefined);
    } else if (d.getTime() < draftStart.getTime()) {
      setDraftStart(d);
    } else {
      setDraftEnd(d);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    className: cxC("relative inline-flex flex-col gap-4 font-['Source_Sans_Pro','Source_Sans_3',sans-serif]", className)
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "m-0 text-[20px] leading-none text-black font-normal"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-[30px]"
  }, /*#__PURE__*/React.createElement(DateField, {
    label: range ? "Start Date" : "Select Date",
    value: draftStart,
    disabled: disabled,
    error: Boolean(error),
    onTrigger: () => setOpen(o => !o)
  }), range && /*#__PURE__*/React.createElement(DateField, {
    label: "End Date",
    value: draftEnd,
    disabled: disabled,
    error: Boolean(error),
    onTrigger: () => setOpen(o => !o)
  })), error && /*#__PURE__*/React.createElement("div", {
    className: "text-[12px] text-[var(--ps-prim-red-600)]"
  }, error), open && !disabled && /*#__PURE__*/React.createElement("div", {
    className: "absolute top-[calc(100%+8px)] left-0 z-10"
  }, /*#__PURE__*/React.createElement(CalendarPopover, {
    month: month,
    onMonthChange: setMonth,
    start: draftStart,
    end: draftEnd,
    onSelect: selectDay,
    onCancel: () => {
      setDraftStart(startDate);
      setDraftEnd(endDate);
      setOpen(false);
    },
    onApply: () => {
      onChange?.({
        start: draftStart,
        end: draftEnd
      });
      setOpen(false);
    }
  })));
};
const Controls = {
  Pagination,
  DatePicker
};

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    Pagination,
    DatePicker
  });
}
Object.assign(__ds_scope, { Pagination, DatePicker, Controls });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Controls.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Drawer.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Drawer.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Drawer.tsx — PartsSource Design System
//
// Right-side overlay panel. Max width 500px, full viewport height,
// slides in from the right via translate-x. Scrim is a sibling
// fixed element with rgba(0,0,0,0.5) and click-to-dismiss.
//
// Pulled from preview/drawer.html.
// ──────────────────────────────────────────────────────────────────

const cxDrawer = (...parts) => parts.filter(Boolean).join(" ");
const Drawer = ({
  open,
  title,
  subtitle,
  onClose,
  children,
  footer,
  width = 480,
  className = ""
}) => {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": !open,
    onClick: onClose,
    className: cxDrawer(
    // Figma node 4445:1443 — scrim is 32% black, not 50%.
    "fixed inset-0 z-[90] bg-black/30 transition-opacity duration-200", open ? "opacity-100" : "opacity-0 pointer-events-none")
  }), /*#__PURE__*/React.createElement("aside", {
    role: "dialog",
    "aria-modal": "true",
    "aria-hidden": !open,
    style: {
      width: typeof width === "number" ? `${width}px` : width
    },
    className: cxDrawer("fixed top-0 right-0 z-[100] h-screen max-w-[100vw] bg-white", "shadow-[-12px_0_24px_rgba(0,0,0,0.08)] transition-transform duration-250", "flex flex-col font-['Source_Sans_Pro',sans-serif]", open ? "translate-x-0" : "translate-x-full", className)
  }, (title || subtitle) && /*#__PURE__*/React.createElement("header", {
    className: "flex items-start justify-between px-6 pt-6 pb-4 mb-2 border-b border-[var(--ps-prim-gray-150)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, title &&
  /*#__PURE__*/
  // Figma node 4445:1443 — 17px / 700 / var(--ps-prim-gray-700), Source Sans 3.
  React.createElement("h2", {
    className: "m-0 text-[17px] font-bold text-[var(--ps-prim-gray-700)] leading-none font-['Source_Sans_3',sans-serif]"
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    className: "m-0 mt-1 text-[15px] text-[var(--ps-prim-gray-700)] leading-[1.4]"
  }, subtitle)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    className: "bg-transparent border-0 cursor-pointer text-[var(--ps-prim-gray-600)] hover:text-[var(--ps-prim-gray-900)] p-1 -mr-1 -mt-1"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto px-6 py-4"
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    className: "flex items-center justify-end gap-3 px-6 py-4 border-t border-[var(--ps-prim-gray-150)]"
  }, footer)));
};

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    Drawer
  });
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Drawer.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Feedback.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Feedback.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Feedback.tsx — PartsSource Design System
//
// Avatar      — circular identity marker (initials / image / brand)
// Tooltip     — soft-dark hover/focus bubble (4 placements + rich)
// Skeleton    — loading shimmer primitive
// EmptyState  — "nothing here yet" panel with icon + CTA
// ErrorPage   — full-page error layout (404 / 500 / 403 / offline)
//
// Sourced 1-for-1 from the preview/*.html pages.
// ──────────────────────────────────────────────────────────────────

const cxF = (...parts) => parts.filter(Boolean).join(" ");

// ══════════════════════════════════════════════════════════════════
// Avatar
// ══════════════════════════════════════════════════════════════════

const avatarSize = {
  xs: {
    box: "w-6 h-6",
    font: "text-[10px]",
    px: 24
  },
  sm: {
    box: "w-8 h-8",
    font: "text-[12px]",
    px: 32
  },
  md: {
    box: "w-10 h-10",
    font: "text-[14px]",
    px: 40
  },
  lg: {
    box: "w-14 h-14",
    font: "text-[18px]",
    px: 56
  },
  xl: {
    box: "w-20 h-20",
    font: "text-[26px]",
    px: 80
  }
};
const avatarTone = {
  blue: "bg-[var(--ps-prim-blue-50)] text-[var(--ps-prim-blue-500)]",
  green: "bg-[var(--ps-prim-green-50)] text-[var(--ps-prim-green-600)]",
  orange: "bg-[var(--ps-prim-orange-50)] text-[var(--ps-prim-amber-700)]",
  purple: "bg-[var(--ps-prim-blue-100)] text-[var(--ps-prim-blue-600)]",
  red: "bg-[var(--ps-prim-red-150)] text-[var(--ps-prim-red-600)]",
  neutral: "bg-[var(--ps-prim-gray-150)] text-[var(--ps-prim-gray-800)]",
  brand: "bg-[var(--ps-prim-blue-500)] text-white",
  inverse: "bg-white text-[var(--ps-prim-blue-500)] border border-[var(--ps-prim-blue-500)]"
};
const avatarStatusColor = {
  online: "bg-[var(--ps-prim-green-600)]",
  busy: "bg-[var(--ps-prim-amber-700)]",
  away: "bg-[var(--ps-prim-gray-500)]",
  offline: "bg-[var(--ps-prim-gray-300)]"
};
const deriveInitials = name => {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};
const Avatar = ({
  name,
  initials,
  src,
  alt,
  size = "md",
  tone = "blue",
  status,
  className = ""
}) => {
  const sz = avatarSize[size];
  const label = initials ?? deriveInitials(name);
  const shouldShowImage = Boolean(src);
  return /*#__PURE__*/React.createElement("span", {
    className: cxF("relative inline-flex", className)
  }, /*#__PURE__*/React.createElement("span", {
    className: cxF("inline-flex items-center justify-center rounded-full overflow-hidden font-bold uppercase select-none align-middle", "font-['Source_Sans_Pro',sans-serif]", sz.box, sz.font, shouldShowImage ? "bg-white" : avatarTone[tone])
  }, shouldShowImage ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt ?? name ?? "",
    className: "w-full h-full object-cover block"
  }) : label), status && /*#__PURE__*/React.createElement("span", {
    "aria-label": status,
    className: cxF("absolute bottom-0 right-0 rounded-full border-2 border-white", avatarStatusColor[status]),
    style: {
      width: `${Math.max(8, sz.px * 0.25)}px`,
      height: `${Math.max(8, sz.px * 0.25)}px`
    }
  }));
};

// ── AvatarGroup ─────────────────────────────────────────────────

const AvatarGroup = ({
  children,
  overflow,
  size = "md"
}) => {
  const sz = avatarSize[size];
  return /*#__PURE__*/React.createElement("span", {
    className: "inline-flex"
  }, React.Children.map(children, (child, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ring-2 ring-white rounded-full",
    style: {
      marginLeft: i === 0 ? 0 : -10
    }
  }, child)), overflow !== undefined && overflow > 0 && /*#__PURE__*/React.createElement("span", {
    className: "ring-2 ring-white rounded-full",
    style: {
      marginLeft: -10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: cxF("inline-flex items-center justify-center rounded-full bg-[var(--ps-prim-gray-150)] text-[var(--ps-prim-gray-700)] font-bold", "font-['Source_Sans_Pro',sans-serif]", sz.box, sz.font)
  }, "+", overflow)));
};

// ══════════════════════════════════════════════════════════════════
// Tooltip — soft-dark bubble with caret. Hover/focus to show.
// ══════════════════════════════════════════════════════════════════

const caretPos = p => {
  switch (p) {
    case "top":
      return "top-full left-6 border-t-[var(--ps-prim-gray-750)]";
    case "bottom":
      return "bottom-full left-6 border-b-[var(--ps-prim-gray-750)]";
    case "left":
      return "left-full top-1/2 -translate-y-1/2 border-l-[var(--ps-prim-gray-750)]";
    case "right":
      return "right-full top-1/2 -translate-y-1/2 border-r-[var(--ps-prim-gray-750)]";
  }
};
const bubblePos = p => {
  switch (p) {
    case "top":
      return "bottom-[calc(100%+10px)] left-0";
    case "bottom":
      return "top-[calc(100%+10px)] left-0";
    case "left":
      return "right-[calc(100%+10px)] top-1/2 -translate-y-1/2";
    case "right":
      return "left-[calc(100%+10px)] top-1/2 -translate-y-1/2";
  }
};
const Tooltip = ({
  label,
  placement = "top",
  maxWidth = 280,
  children
}) => {
  const id = React.useId();
  return /*#__PURE__*/React.createElement("span", {
    tabIndex: 0,
    className: "relative inline-flex group focus-within:outline-none"
  }, React.isValidElement(children) ? React.cloneElement(children, {
    "aria-describedby": id
  }) : children, /*#__PURE__*/React.createElement("span", {
    id: id,
    role: "tooltip",
    style: {
      maxWidth: `${maxWidth}px`
    },
    className: cxF("absolute z-10 bg-[var(--ps-prim-gray-750)] text-white text-[14px] leading-[1.5] font-normal w-max", "px-4 py-2.5 rounded-lg shadow-[0_4px_14px_rgba(0,0,0,0.18)]", "font-['Source_Sans_Pro',sans-serif] pointer-events-none", "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-150", bubblePos(placement))
  }, label, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: cxF("absolute border-[7px] border-transparent", caretPos(placement))
  })));
};

// ── Rich tooltip — info icon + title + body + optional CTA ──────

const TooltipRich = ({
  title,
  body,
  cta,
  className = ""
}) => /*#__PURE__*/React.createElement("div", {
  role: "tooltip",
  className: cxF("relative bg-[var(--ps-prim-gray-750)] text-white rounded-[10px] shadow-[0_6px_20px_rgba(0,0,0,0.22)]", "font-['Source_Sans_Pro',sans-serif] max-w-[380px]", "pl-14 pr-6 py-5", className)
}, /*#__PURE__*/React.createElement("span", {
  className: "absolute left-[18px] top-[18px] w-6 h-6 rounded-full bg-white text-[var(--ps-prim-gray-800)] inline-flex items-center justify-center"
}, /*#__PURE__*/React.createElement("svg", {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 16v-4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 8h.01"
}))), /*#__PURE__*/React.createElement("h3", {
  className: "m-0 mb-2 text-[16px] font-bold leading-[1.25]"
}, title), /*#__PURE__*/React.createElement("p", {
  className: "m-0 mb-3.5 text-[14px] leading-[1.55] text-white/90"
}, body), cta && /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: cta.onClick,
  className: "text-[13px] font-bold uppercase tracking-[0.5px] text-white bg-transparent border-0 cursor-pointer hover:text-[var(--ps-prim-blue-300)]"
}, cta.label));

// ══════════════════════════════════════════════════════════════════
// Skeleton — shimmering placeholder
// ══════════════════════════════════════════════════════════════════

const skeletonShape = {
  text: "h-3.5 w-full rounded-[3px]",
  title: "h-[22px] w-3/5 rounded",
  bar: "h-[18px]",
  circle: "rounded-full",
  block: "h-[120px] w-full rounded-md",
  button: "h-10 w-[140px] rounded",
  input: "h-12 w-full rounded-[3px]"
};
const Skeleton = ({
  shape = "text",
  width,
  height,
  className = ""
}) => /*#__PURE__*/React.createElement("span", {
  "aria-hidden": "true",
  style: {
    width: width !== undefined ? typeof width === "number" ? `${width}px` : width : undefined,
    height: height !== undefined ? typeof height === "number" ? `${height}px` : height : undefined
  },
  className: cxF("inline-block align-middle", "bg-[linear-gradient(90deg,var(--ps-prim-gray-150)_0%,var(--ps-prim-gray-200)_50%,var(--ps-prim-gray-150)_100%)]", "bg-[length:200%_100%]", "animate-[sk_1.4s_ease-in-out_infinite]", "motion-reduce:animate-none motion-reduce:bg-[var(--ps-prim-gray-150)]", skeletonShape[shape], className)
});

// Keyframes injected once on first mount (Tailwind Play CDN doesn't ship `sk`)
const SkeletonKeyframes = () => {
  React.useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("__sk-keyframes")) return;
    const s = document.createElement("style");
    s.id = "__sk-keyframes";
    s.textContent = `@keyframes sk{0%{background-position:0% 0}100%{background-position:-200% 0}}`;
    document.head.appendChild(s);
  }, []);
  return null;
};

// ── Spinner ────────────────────────────────────────────────────
const LoadingSpinner = ({
  size = 24,
  className = ""
}) => /*#__PURE__*/React.createElement("span", {
  role: "status",
  "aria-label": "Loading",
  style: {
    width: size,
    height: size,
    borderWidth: size >= 40 ? 3 : 2.5
  },
  className: cxF("inline-block rounded-full border-[var(--ps-prim-gray-200)] border-t-[var(--ps-prim-blue-500)] animate-spin motion-reduce:[animation-duration:2.5s]", className)
});

// ══════════════════════════════════════════════════════════════════
// EmptyState
// ══════════════════════════════════════════════════════════════════

const emptyToneClasses = {
  info: "bg-[var(--ps-prim-blue-50)] text-[var(--ps-prim-blue-500)]",
  neutral: "bg-[var(--ps-prim-gray-150)] text-[var(--ps-prim-gray-600)]",
  success: "bg-[var(--ps-prim-green-50)] text-[var(--ps-prim-green-600)]",
  warning: "bg-[var(--ps-prim-orange-50)] text-[var(--ps-prim-amber-700)]",
  error: "bg-[var(--ps-prim-red-150)] text-[var(--ps-prim-red-600)]"
};
const EmptyState = ({
  title,
  body,
  icon,
  tone = "info",
  primaryAction,
  secondaryAction,
  inline = false,
  className = ""
}) => /*#__PURE__*/React.createElement("div", {
  className: cxF("bg-white border border-[var(--ps-prim-gray-200)] rounded-lg", "flex flex-col items-center justify-center text-center gap-3", "font-['Source_Sans_Pro',sans-serif]", inline ? "px-5 py-8 min-h-[200px]" : "px-8 py-12 min-h-[280px]", className)
}, icon && /*#__PURE__*/React.createElement("div", {
  className: cxF("rounded-full inline-flex items-center justify-center mb-1", inline ? "w-12 h-12" : "w-16 h-16", emptyToneClasses[tone])
}, /*#__PURE__*/React.createElement("span", {
  className: inline ? "w-[22px] h-[22px] inline-flex" : "w-7 h-7 inline-flex"
}, icon)), /*#__PURE__*/React.createElement("h3", {
  className: cxF("m-0 font-bold text-[var(--ps-prim-blue-800)] leading-[1.25]", inline ? "text-[16px]" : "text-[20px]")
}, title), body && /*#__PURE__*/React.createElement("p", {
  className: cxF("m-0 leading-[1.55] text-[var(--ps-prim-gray-700)] max-w-[380px]", inline ? "text-[13px]" : "text-[14px]")
}, body), (primaryAction || secondaryAction) && /*#__PURE__*/React.createElement("div", {
  className: "mt-2 flex gap-2.5 flex-wrap justify-center"
}, primaryAction && /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: primaryAction.onClick,
  className: "h-10 px-[18px] rounded border-2 border-[var(--ps-prim-blue-500)] bg-[var(--ps-prim-blue-500)] text-white text-[14px] font-semibold cursor-pointer hover:bg-[var(--ps-prim-blue-600)] hover:border-[var(--ps-prim-blue-600)]"
}, primaryAction.label), secondaryAction && /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: secondaryAction.onClick,
  className: "h-10 px-[18px] rounded border-2 border-[var(--ps-prim-blue-500)] bg-white text-[var(--ps-prim-blue-500)] text-[14px] font-semibold cursor-pointer hover:bg-[var(--ps-prim-blue-50)] hover:border-[var(--ps-prim-blue-600)] hover:text-[var(--ps-prim-blue-600)]"
}, secondaryAction.label)));

// ══════════════════════════════════════════════════════════════════
// ErrorPage — full-page 404 / 500 / 403 / offline scaffold
// ══════════════════════════════════════════════════════════════════

const errorIconTone = {
  info: "bg-[var(--ps-prim-blue-50)] text-[var(--ps-prim-blue-500)]",
  warn: "bg-[var(--ps-prim-orange-50)] text-[var(--ps-prim-amber-700)]",
  error: "bg-[var(--ps-prim-red-150)] text-[var(--ps-prim-red-600)]"
};
const ErrorPage = ({
  code,
  icon,
  iconTone = "error",
  title,
  body,
  primaryAction,
  secondaryAction,
  className = ""
}) => /*#__PURE__*/React.createElement("div", {
  className: cxF("bg-white border border-[var(--ps-prim-gray-200)] rounded-lg", "flex flex-col items-center text-center gap-3.5 min-h-[360px]", "px-12 py-16 font-['Source_Sans_Pro',sans-serif]", className)
}, code && /*#__PURE__*/React.createElement("div", {
  className: "text-[128px] font-light leading-none text-[var(--ps-prim-blue-500)] tracking-[-0.04em] mb-1.5"
}, code), !code && icon && /*#__PURE__*/React.createElement("div", {
  className: cxF("w-16 h-16 rounded-full inline-flex items-center justify-center mb-1.5", errorIconTone[iconTone])
}, /*#__PURE__*/React.createElement("span", {
  className: "w-7 h-7 inline-flex"
}, icon)), /*#__PURE__*/React.createElement("h2", {
  className: "m-0 text-[22px] font-bold text-[var(--ps-prim-blue-800)] leading-[1.25]"
}, title), body && /*#__PURE__*/React.createElement("p", {
  className: "m-0 text-[15px] leading-[1.55] text-[var(--ps-prim-gray-700)] max-w-[420px]"
}, body), (primaryAction || secondaryAction) && /*#__PURE__*/React.createElement("div", {
  className: "mt-2.5 flex gap-2.5 flex-wrap justify-center"
}, primaryAction && /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: primaryAction.onClick,
  className: "inline-flex items-center gap-1.5 h-10 px-[18px] rounded bg-[var(--ps-prim-blue-500)] text-white text-[14px] font-semibold cursor-pointer border-0 hover:bg-[var(--ps-prim-blue-600)]"
}, primaryAction.icon, primaryAction.label), secondaryAction && /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: secondaryAction.onClick,
  className: "h-10 px-[18px] rounded border border-[var(--ps-prim-gray-300)] bg-white text-[var(--ps-prim-gray-700)] text-[14px] font-semibold cursor-pointer hover:bg-[var(--ps-prim-blue-500)] hover:text-white hover:border-[var(--ps-prim-blue-500)]"
}, secondaryAction.label)));

// ── Window export so other Babel-loaded scripts can read these ───
const Spinner = LoadingSpinner;
const Feedback = {
  Avatar,
  AvatarGroup,
  Tooltip,
  TooltipRich,
  Skeleton,
  SkeletonKeyframes,
  Spinner: LoadingSpinner,
  EmptyState,
  ErrorPage
};
if (typeof window !== "undefined") {
  Object.assign(window, {
    Avatar,
    AvatarGroup,
    Tooltip,
    TooltipRich,
    Skeleton,
    SkeletonKeyframes,
    Spinner: LoadingSpinner,
    EmptyState,
    ErrorPage
  });
}
Object.assign(__ds_scope, { Avatar, AvatarGroup, Tooltip, TooltipRich, Skeleton, SkeletonKeyframes, LoadingSpinner, EmptyState, ErrorPage, Spinner, Feedback });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Feedback.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Filter.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Filter.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Filter.tsx — PartsSource Design System
//
// FilterChip: removable chip with an X — used in filter strips and
//             active-filter rows. Brand-blue with rounded corners.
// FilterShell: light-grey container (FAFAFA, 8px radius, 68px tall)
//             that holds a filter icon, chip row and an "Add filter"
//             trigger. Matches the Figma /Filter spec.
//
// Pulled from preview/filter.html.
// ──────────────────────────────────────────────────────────────────

const cxFilter = (...parts) => parts.filter(Boolean).join(" ");
const FilterChip = ({
  label,
  onRemove,
  removable = true,
  className = ""
}) => /*#__PURE__*/React.createElement("span", {
  className: cxFilter("inline-flex items-center gap-1.5 h-7 pl-3 pr-2 rounded-md text-[13px] font-semibold", "bg-[var(--ps-prim-blue-25)] text-[var(--ps-prim-blue-500)] border border-[var(--ps-prim-blue-200)]", "font-['Source_Sans_Pro',sans-serif]", className)
}, label, removable && /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: onRemove,
  "aria-label": "Remove filter",
  className: "w-5 h-5 inline-flex items-center justify-center rounded-sm hover:bg-[var(--ps-prim-blue-100)] text-[var(--ps-prim-blue-500)] cursor-pointer bg-transparent border-0"
}, /*#__PURE__*/React.createElement("svg", {
  width: 10,
  height: 10,
  viewBox: "0 0 10 10",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M2 2l6 6M8 2l-6 6",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round"
}))));
const FilterShell = ({
  chips,
  onAddClick,
  addLabel = "Add filter",
  children,
  className = ""
}) => /*#__PURE__*/React.createElement("div", {
  className: cxFilter("w-full max-w-[960px] bg-[var(--ps-prim-gray-50)] rounded-lg p-4 flex flex-col gap-3", "font-['Source_Sans_Pro',sans-serif]", className)
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-3 flex-wrap"
}, /*#__PURE__*/React.createElement("span", {
  className: "inline-flex items-center justify-center w-6 h-6 text-[var(--ps-prim-blue-500)] flex-shrink-0",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("svg", {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 5h14M5 10h10M8 15h4"
}))), /*#__PURE__*/React.createElement("div", {
  className: "flex items-center gap-2 flex-wrap flex-1"
}, chips), onAddClick && /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: onAddClick,
  className: "inline-flex items-center gap-1.5 h-8 px-3 rounded border border-dashed border-[var(--ps-prim-blue-500)] text-[var(--ps-prim-blue-500)] text-[13px] font-semibold bg-transparent cursor-pointer hover:bg-[var(--ps-prim-blue-50)]"
}, /*#__PURE__*/React.createElement("svg", {
  width: 12,
  height: 12,
  viewBox: "0 0 12 12",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 1v10M1 6h10"
})), addLabel)), children);
const Filter = {
  FilterChip,
  FilterShell
};

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    FilterChip,
    FilterShell
  });
}
Object.assign(__ds_scope, { FilterChip, FilterShell, Filter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Filter.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Input.tsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Input.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Input.tsx — PartsSource Design System
//
// Variants:  text | dropdown | password | search
// Sizes:     md (48px) · lg (80px)
// States:    idle | hover | focus | with-value | disabled | error
//
// Implements the floating-label pattern from preview/inputs.html
// (matches the Figma "Input Fields" + "Large Input Fields" frames).
// ──────────────────────────────────────────────────────────────────

const cxIn = (...parts) => parts.filter(Boolean).join(" ");

// Per-size geometry — height, label offsets, padding when label floats.
const sizeMap = {
  md: {
    wrap: "h-12",
    input: "h-12",
    inputFloating: "pt-[22px] pb-1",
    label: "h-12 text-[16px]",
    labelFloating: "top-[5px] h-[22px] items-start text-[12px] font-bold"
  },
  lg: {
    wrap: "h-20",
    input: "h-20",
    inputFloating: "pt-8 pb-2",
    label: "h-20 text-[16px]",
    labelFloating: "top-2 h-8 items-start text-[12px] font-bold"
  }
};

// Border color per state. Box-shadow is applied separately for focus glow.
const borderClass = (state, hasError) => {
  if (hasError) return "border-[var(--ps-prim-red-spec)]";
  switch (state) {
    case "hover":
      return "border-[var(--ps-prim-gray-900)]";
    case "focus":
      return "border-[var(--ps-prim-blue-500)]";
    case "disabled":
      return "border-[var(--ps-prim-gray-300)]";
    default:
      return "border-[var(--ps-prim-gray-500)]";
  }
};
const Input = ({
  label,
  size = "md",
  state,
  error,
  helperText,
  value,
  defaultValue,
  disabled,
  className = "",
  id,
  ...rest
}) => {
  const reactId = React.useId();
  const inputId = id ?? `ps-input-${reactId}`;
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
  const isControlled = value !== undefined;
  const currentValue = isControlled ? String(value ?? "") : String(internalValue);
  const [isFocused, setIsFocused] = React.useState(false);

  // Force-state overrides interactive state.
  const forced = state;
  const hasError = Boolean(error) || forced === "error";
  const isFocusVisible = forced === "focus" || forced === undefined && isFocused;
  const isFloating = forced === "focus" || forced === "withValue" || isFocusVisible || currentValue.length > 0;
  const isDisabled = disabled || forced === "disabled";
  const cfg = sizeMap[size];
  const baseBorder = borderClass(forced ?? (isFocusVisible ? "focus" : undefined), hasError);

  // Focus glow — uses inline style for the exact preview-doc shadow.
  const focusShadow = isFocusVisible && !hasError ? "shadow-[0_0_10px_0_rgba(0,91,166,0.5)]" : isFocusVisible && hasError ? "shadow-[0_0_10px_0_rgba(211,47,47,0.5)]" : "";

  // Hover ring (only when not forced and not focused).
  const hoverBorder = forced || isFocusVisible || isDisabled || hasError ? "" : "hover:border-[var(--ps-prim-gray-900)]";
  const labelColor = hasError ? "text-[var(--ps-prim-red-spec)]" : isDisabled ? "text-[var(--ps-prim-gray-300)]" : isFloating ? "text-[var(--ps-prim-blue-500)]" : "text-[var(--ps-prim-gray-700)]";
  const inputTextColor = hasError ? "text-[var(--ps-prim-red-spec)]" : isDisabled ? "text-[var(--ps-prim-gray-300)]" : "text-[var(--ps-prim-gray-900)]";
  return /*#__PURE__*/React.createElement("div", {
    className: cxIn("flex flex-col gap-1", className)
  }, /*#__PURE__*/React.createElement("div", {
    className: cxIn("relative w-[335px]", cfg.wrap)
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: isDisabled,
    value: isControlled ? currentValue : undefined,
    defaultValue: !isControlled ? defaultValue : undefined,
    onChange: e => {
      if (!isControlled) setInternalValue(e.target.value);
      rest.onChange?.(e);
    },
    onFocus: e => {
      setIsFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setIsFocused(false);
      rest.onBlur?.(e);
    },
    placeholder: ""
  }, rest, {
    className: cxIn("peer w-full px-2.5 bg-white border rounded-[3px] outline-none transition-all duration-150", "font-['Source_Sans_Pro',sans-serif] text-[16px] leading-none", cfg.input, isFloating && cfg.inputFloating, baseBorder, hoverBorder, focusShadow, inputTextColor, isDisabled && "cursor-not-allowed bg-white")
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    className: cxIn("absolute left-2.5 top-0 flex items-center pointer-events-none transition-all duration-150", "font-['Source_Sans_Pro',sans-serif] leading-none", cfg.label, isFloating && cfg.labelFloating, labelColor)
  }, label)), error ? /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-[var(--ps-prim-red-spec)] mt-1"
  }, error) : helperText ? /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] text-[var(--ps-prim-gray-600)] mt-1"
  }, helperText) : null);
};

// ── Dropdown — text input + chevron + menu ───────────────────────
// Omit "onSelect" — React's native onSelect signature conflicts with our
// (value: string) => void shape.

const Dropdown = ({
  options,
  onSelect,
  value: controlledValue,
  defaultValue,
  ...rest
}) => {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(String(defaultValue ?? ""));
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? String(controlledValue) : internalValue;
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    const onDocClick = e => {
      if (!containerRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);
  const selectedLabel = options.find(o => o.value === currentValue)?.label ?? currentValue;
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: "relative inline-block"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(o => !o),
    className: "cursor-pointer"
  }, /*#__PURE__*/React.createElement(Input, _extends({}, rest, {
    value: selectedLabel,
    readOnly: true,
    className: "pointer-events-none"
  }))), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    className: "absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9L12 15L18 9",
    stroke: "var(--ps-prim-gray-500)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), open && /*#__PURE__*/React.createElement("ul", {
    className: "absolute top-[calc(100%+1px)] left-0 w-[335px] max-h-[297px] " + "overflow-y-auto bg-white border border-[var(--ps-prim-gray-150)] rounded-[2px] " + "shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-50 m-0 p-0 list-none"
  }, options.map(opt => /*#__PURE__*/React.createElement("li", {
    key: opt.value,
    onClick: () => {
      if (!isControlled) setInternalValue(opt.value);
      onSelect?.(opt.value);
      setOpen(false);
    },
    className: cxIn("px-2.5 py-3.5 text-[14px] border-b border-[var(--ps-prim-gray-150)] last:border-b-0", "cursor-pointer transition-colors hover:bg-[var(--ps-prim-blue-100)]", "font-['Source_Sans_Pro',sans-serif] text-[var(--ps-prim-gray-900)]", currentValue === opt.value && "bg-[var(--ps-prim-blue-100)]")
  }, opt.label))));
};

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    Input,
    Dropdown
  });
}
Object.assign(__ds_scope, { Input, Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Input.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Layout.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Layout.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Layout.tsx — PartsSource Design System
//
// Breadcrumb — page-chrome trail (Figma node 3457:8633)
// Accordion  — collapsible card group (Figma node 4390:39583)
// Stepper    — multi-step progress indicator (Figma node 396:1813)
//
// All three are ports of the preview/*.html source pages, themselves
// audited against the .fig source of truth.
// ──────────────────────────────────────────────────────────────────

const cxL = (...parts) => parts.filter(Boolean).join(" ");

// ══════════════════════════════════════════════════════════════════
// Breadcrumb — trail-style + back-style
// ══════════════════════════════════════════════════════════════════

const Chevron = ({
  direction = "right"
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 7 10",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: direction === "right" ? "M1 1l4 4-4 4" : "M6 1L2 5l4 4",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const Breadcrumb = ({
  items,
  className = ""
}) => {
  if (items.length === 0) return null;
  const parents = items.slice(0, -1);
  const current = items[items.length - 1];
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    className: cxL("inline-flex items-center gap-[9px] flex-wrap", "font-['Source_Sans_Pro','Source_Sans_3',sans-serif]", "text-[14px] leading-[18px] tracking-[-0.01em]", className)
  }, parents.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: it.href ?? "#",
    className: "text-[var(--ps-prim-blue-500)] no-underline rounded-[2px] hover:text-[var(--ps-prim-blue-600)] hover:underline hover:underline-offset-[3px] hover:decoration-1 focus-visible:outline-2 focus-visible:outline-[var(--ps-prim-blue-500)] focus-visible:outline-offset-2"
  }, it.label), /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center text-[var(--ps-prim-gray-500)] w-[7px] h-[10px] flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Chevron, null)))), /*#__PURE__*/React.createElement("span", {
    className: "text-[var(--ps-prim-gray-500)]"
  }, current.label));
};
const BreadcrumbBack = ({
  label,
  href = "#",
  className = ""
}) => /*#__PURE__*/React.createElement("nav", {
  "aria-label": "Breadcrumb",
  className: cxL("inline-flex", className)
}, /*#__PURE__*/React.createElement("a", {
  href: href,
  className: cxL("inline-flex items-center gap-2 text-[var(--ps-prim-blue-500)] no-underline", "font-['Source_Sans_Pro','Source_Sans_3',sans-serif] text-[14px] leading-[18px] tracking-[-0.01em]", "hover:text-[var(--ps-prim-blue-600)] hover:underline hover:underline-offset-[3px] hover:decoration-1")
}, /*#__PURE__*/React.createElement("span", {
  className: "inline-flex items-center justify-center w-[7px] h-[10px] flex-shrink-0"
}, /*#__PURE__*/React.createElement(Chevron, {
  direction: "left"
})), label));

// ══════════════════════════════════════════════════════════════════
// Accordion — single collapsible card
// ══════════════════════════════════════════════════════════════════

const DragDots = () => /*#__PURE__*/React.createElement("svg", {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6.66675 4.99909L6.67175 4.99909M6.66675 9.99909L6.67175 9.99909M6.66675 14.9991L6.67175 14.9991M13.3284 4.99909L13.3334 4.99909M13.3284 9.99908L13.3334 9.99908M13.3284 14.9991L13.3334 14.9991",
  stroke: "currentColor",
  strokeWidth: "1.88",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const Accordion = ({
  title,
  subtitle,
  meta,
  showDragHandle = false,
  open,
  defaultOpen = false,
  onToggle,
  variant = "default",
  children,
  className = ""
}) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const panelId = React.useId();
  const toggle = () => {
    const next = !isOpen;
    if (!isControlled) setInternalOpen(next);
    onToggle?.(next);
  };
  const shell = variant === "row" ? "border-0 border-b border-[var(--ps-prim-gray-150)] rounded-none bg-transparent" : variant === "filled" ? "border-2 border-[var(--ps-prim-blue-200)] rounded bg-[var(--ps-prim-blue-50)]" : "border-2 border-[var(--ps-prim-gray-150)] rounded bg-white";
  const headerBg = variant === "filled" ? "bg-[var(--ps-prim-blue-50)] hover:bg-[var(--ps-prim-blue-100)]" : "bg-transparent hover:bg-[var(--ps-prim-gray-50)]";
  const headerPad = variant === "row" ? "py-3.5 px-0" : "px-[26px] py-4 min-h-[60px]";
  return /*#__PURE__*/React.createElement("div", {
    "data-open": isOpen,
    className: cxL("overflow-hidden font-['Source_Sans_Pro',sans-serif] transition-colors", shell, className)
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": isOpen,
    "aria-controls": panelId,
    onClick: toggle,
    className: cxL("flex items-center justify-between gap-4 w-full border-0 cursor-pointer text-left transition-colors", "focus-visible:outline-2 focus-visible:outline-[var(--ps-prim-blue-500)] focus-visible:-outline-offset-2", headerPad, headerBg)
  }, showDragHandle && /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center justify-center w-5 h-5 flex-shrink-0 text-[var(--ps-prim-gray-700)] cursor-grab"
  }, /*#__PURE__*/React.createElement(DragDots, null)), /*#__PURE__*/React.createElement("span", {
    className: "flex flex-col gap-1 min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-light text-[25px] leading-none text-black tracking-[-0.028em]"
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    className: "text-[14px] leading-[1.4] text-[var(--ps-prim-gray-600)] mt-1.5"
  }, subtitle)), /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-3.5 flex-shrink-0"
  }, meta, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true",
    className: cxL("w-3.5 h-3.5 flex-shrink-0 text-[var(--ps-prim-gray-600)] transition-transform duration-200", isOpen && "rotate-180")
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 5l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    id: panelId,
    className: cxL("overflow-hidden transition-[max-height] duration-200 ease-out", isOpen ? "max-h-[1200px]" : "max-h-0"),
    style: {
      borderTop: isOpen && variant !== "row" ? "1px solid var(--ps-prim-gray-150)" : "1px solid transparent"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 pt-5 pb-6 text-[14px] leading-[1.6] text-[var(--ps-prim-gray-800)]"
  }, children)));
};
const AccordionCount = ({
  children,
  tone = "info"
}) => /*#__PURE__*/React.createElement("span", {
  className: cxL("inline-flex items-center px-2.5 py-1 rounded-[30px] text-[13px] font-semibold leading-none", tone === "critical" ? "bg-[var(--ps-prim-red-150)] text-[var(--ps-prim-red-600)] border border-[var(--ps-prim-red-100)]" : "bg-[var(--ps-prim-blue-50)] text-[var(--ps-prim-blue-500)]")
}, children);

// ══════════════════════════════════════════════════════════════════
// Stepper — horizontal & vertical
// ══════════════════════════════════════════════════════════════════

const stepCircleClasses = status => {
  switch (status) {
    case "complete":
      return "bg-[var(--ps-prim-blue-500)] border-[var(--ps-prim-blue-500)] text-white";
    case "current":
      return "bg-white border-[var(--ps-prim-blue-500)] text-[var(--ps-prim-blue-500)] shadow-[0_0_0_4px_var(--ps-prim-blue-50)]";
    case "error":
      return "bg-[var(--ps-prim-red-150)] border-[var(--ps-prim-red-700)] text-[var(--ps-prim-red-700)]";
    case "disabled":
      return "bg-[var(--ps-prim-gray-50)] border-[var(--ps-prim-gray-200)] text-[var(--ps-prim-gray-400)]";
    default:
      return "bg-white border-[var(--ps-prim-gray-300)] text-[var(--ps-prim-gray-600)]";
  }
};
const stepLabelClasses = status => {
  switch (status) {
    case "complete":
      return "text-[var(--ps-prim-blue-500)] font-semibold";
    case "current":
      return "text-[var(--ps-prim-blue-800)] font-bold";
    case "error":
      return "text-[var(--ps-prim-red-700)] font-semibold";
    case "disabled":
      return "text-[var(--ps-prim-gray-400)]";
    default:
      return "text-[var(--ps-prim-gray-700)]";
  }
};
const CheckGlyph = () => /*#__PURE__*/React.createElement("svg", {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}));
const Stepper = ({
  steps,
  orientation = "horizontal",
  compact = false,
  ariaLabel = "Progress",
  className = ""
}) => {
  const isVertical = orientation === "vertical";
  return /*#__PURE__*/React.createElement("ol", {
    "aria-label": ariaLabel,
    className: cxL("list-none m-0 p-0 font-['Source_Sans_Pro','Source_Sans_3',sans-serif]", isVertical ? "flex flex-col items-start max-w-[280px]" : "flex items-start w-full max-w-[560px]", className)
  }, steps.map((step, i) => {
    const status = step.status ?? "pending";
    const isLast = i === steps.length - 1;
    const number = i + 1;
    const connectorPos = isVertical ? `absolute left-[15px] top-[32px] w-0.5 ${isLast ? "hidden" : "block"} h-[calc(100%-32px)]` : `absolute top-[15px] left-[calc(50%+22px)] right-[calc(-50%+22px)] h-0.5 ${isLast ? "hidden" : "block"}`;
    const connectorColor = status === "complete" ? "bg-[var(--ps-prim-blue-500)]" : "bg-[var(--ps-prim-gray-300)]";
    const circleDim = compact ? "w-3.5 h-3.5 border-0" : "w-8 h-8 border-2";
    const circleBg = compact ? status === "complete" || status === "current" ? "bg-[var(--ps-prim-blue-500)]" : "bg-[var(--ps-prim-gray-300)]" : "";
    const circleClasses = compact ? `${circleDim} ${circleBg}` : `${circleDim} ${stepCircleClasses(status)}`;
    return /*#__PURE__*/React.createElement("li", {
      key: step.id ?? i,
      "aria-current": status === "current" ? "step" : undefined,
      onClick: step.onClick,
      className: cxL("relative text-center", isVertical ? "flex flex-row items-start text-left gap-3.5 pb-6 w-full flex-none last:pb-0" : "flex flex-col items-center flex-1", step.onClick && "cursor-pointer")
    }, /*#__PURE__*/React.createElement("span", {
      className: connectorPos + " " + connectorColor + (compact ? " " + (isVertical ? "h-[calc(100%-14px)] top-[14px]" : "top-[6px] left-[calc(50%+9px)] right-[calc(-50%+9px)]") : "")
    }), /*#__PURE__*/React.createElement("span", {
      className: cxL("relative z-[1] inline-flex items-center justify-center rounded-full font-bold text-[14px] leading-none transition-all duration-150", circleClasses)
    }, compact ? null : status === "complete" ? /*#__PURE__*/React.createElement(CheckGlyph, null) : status === "error" ? "!" : number), !compact && step.label && /*#__PURE__*/React.createElement("span", {
      className: cxL("text-[14px] leading-[1.3]", isVertical ? "mt-1.5" : "mt-2.5 max-w-[140px]", stepLabelClasses(status))
    }, step.label, step.sub && /*#__PURE__*/React.createElement("span", {
      className: "block text-[12px] text-[var(--ps-prim-gray-500)] leading-[1.4] mt-0.5 font-normal"
    }, step.sub)));
  }));
};

// ── Window export so other Babel-loaded scripts can read these ───
const Layout = {
  Breadcrumb,
  BreadcrumbBack,
  Stepper
};
if (typeof window !== "undefined") {
  Object.assign(window, {
    Breadcrumb,
    BreadcrumbBack,
    Accordion,
    AccordionCount,
    Stepper
  });
}
Object.assign(__ds_scope, { Breadcrumb, BreadcrumbBack, Stepper, Layout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Layout.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Modal.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Modal.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Modal.tsx — PartsSource Design System
//
// Modal: centered overlay with white card (5px radius, 24×32 padding,
//        light 30px title). Supports body content and an action footer.
// ConfirmDialog: thin wrapper that pre-fills the body + footer with a
//        title, message, and Cancel/Confirm buttons.
//
// Pulled from preview/modals.html.
// ──────────────────────────────────────────────────────────────────

const cxModal = (...parts) => parts.filter(Boolean).join(" ");
const Modal = ({
  open,
  title,
  onClose,
  children,
  footer,
  width = 540,
  className = ""
}) => {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    className: "fixed inset-0 z-[100] flex items-center justify-center font-['Source_Sans_Pro',sans-serif]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black/45",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: cxModal("relative bg-white rounded-[5px] shadow-[0_18px_50px_rgba(0,0,0,0.25)] flex flex-col max-h-[90vh]", className),
    style: {
      width: typeof width === "number" ? `${width}px` : width
    }
  }, title && /*#__PURE__*/React.createElement("header", {
    className: "flex items-start justify-between px-8 pt-6 pb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "m-0 text-[30px] font-light text-[var(--ps-prim-gray-770)] leading-[34px] tracking-[0]"
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    className: "bg-transparent border-0 cursor-pointer text-[var(--ps-prim-gray-600)] hover:text-[var(--ps-prim-gray-900)] p-1 -mr-1"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto px-8 py-2"
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    className: "flex items-center justify-end gap-3 px-8 pt-4 pb-6"
  }, footer)));
};
const ConfirmDialog = ({
  open,
  title,
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  destructive,
  onConfirm,
  onCancel
}) => /*#__PURE__*/React.createElement(Modal, {
  open: open,
  onClose: onCancel,
  title: title,
  width: 460,
  footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCancel,
    className: "h-10 min-w-[88px] px-4 rounded border border-[var(--ps-prim-gray-300)] bg-white text-[var(--ps-prim-gray-800)] text-[14px] font-semibold hover:bg-[var(--ps-prim-gray-100)]"
  }, cancelLabel), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onConfirm,
    className: cxModal("h-10 min-w-[88px] px-4 rounded text-white text-[14px] font-semibold", destructive ? "bg-[var(--ps-prim-red-700)] hover:bg-[var(--ps-prim-red-500)]" : "bg-[var(--ps-prim-blue-500)] hover:bg-[var(--ps-prim-blue-600)]")
  }, confirmLabel))
}, /*#__PURE__*/React.createElement("p", {
  className: "m-0 text-[14px] leading-[1.6] text-[var(--ps-prim-gray-700)]"
}, message));

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    Modal,
    ConfirmDialog
  });
}
Object.assign(__ds_scope, { Modal, ConfirmDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Modal.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Navigation.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Navigation.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Navigation.tsx — PartsSource Design System
//
// TopNav: utility row + main row (logo, search, categories, cart,
//         facility selector) + brand-blue page hero with PRO Account.
// LeftNav: 210px (collapsed 67px) dark-blue rail with avatar header,
//         nav items, dividers and log-out.
//
// Pulled from preview/top-navigation.html and preview/left-hand-navigation.html.
// ──────────────────────────────────────────────────────────────────

const cxNav = (...parts) => parts.filter(Boolean).join(" ");

// ── TopNav ───────────────────────────────────────────────────────
const TopNav = ({
  logoSrc,
  searchPlaceholder = "Search Keyword or Item Number",
  cartCount = 0,
  facilityLabel = "Selected Facility",
  facilityName = "Chatham Memorial Hospital",
  heroTitle,
  proAccountLogo,
  onSearch,
  onCartClick,
  onHomeClick,
  className = ""
}) => {
  const inputRef = React.useRef(null);
  return /*#__PURE__*/React.createElement("div", {
    className: cxNav("w-full flex flex-col bg-white text-[var(--ps-prim-gray-800)] font-['Source_Sans_Pro',sans-serif]", className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-7 border-b border-[var(--ps-prim-gray-225)] px-10 flex justify-end items-center gap-5 text-[14px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1.5 text-[var(--ps-prim-blue-400)]"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 12,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ps-prim-gray-900)",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:8774976412",
    className: "text-[var(--ps-prim-blue-400)] no-underline"
  }, "877-497-6412")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "text-black no-underline hover:text-[var(--ps-prim-blue-500)] hover:underline"
  }, "Help"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "text-black no-underline hover:text-[var(--ps-prim-blue-500)] hover:underline"
  }, "About Us")), /*#__PURE__*/React.createElement("div", {
    className: "h-[60px] border-b border-[var(--ps-prim-gray-225)] px-10 flex items-center gap-[18px]"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onHomeClick?.();
    },
    className: "w-[200px] flex items-center flex-shrink-0"
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "PartsSource",
    className: "w-[200px] h-auto block"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "text-[var(--ps-prim-blue-500)] font-bold text-[20px] tracking-tight"
  }, "PartsSource")), /*#__PURE__*/React.createElement("form", {
    role: "search",
    onSubmit: e => {
      e.preventDefault();
      onSearch?.(inputRef.current?.value ?? "");
    },
    className: "flex-1 max-w-[800px] h-8 flex items-stretch border border-[var(--ps-prim-gray-400)] rounded-[5px] bg-white overflow-hidden hover:border-[var(--ps-prim-gray-500)] focus-within:border-[var(--ps-prim-blue-500)] focus-within:shadow-[0_0_0_3px_rgba(0,91,166,0.15)]"
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "text",
    placeholder: searchPlaceholder,
    className: "flex-1 border-0 outline-none px-4 text-[14px] text-[var(--ps-prim-gray-800)] bg-transparent placeholder:text-[var(--ps-prim-gray-600)]"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Search",
    className: "w-[34px] flex-shrink-0 border-0 bg-[var(--ps-prim-orange-400)] text-white cursor-pointer flex items-center justify-center hover:bg-[var(--ps-prim-orange-450)]"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "10.5",
    cy: "10.5",
    r: "6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 20l-4.8-4.8"
  })))), /*#__PURE__*/React.createElement("span", {
    className: "text-[16px] font-semibold text-[var(--ps-prim-gray-900)022] cursor-pointer flex-shrink-0 whitespace-nowrap hover:text-[var(--ps-prim-blue-500)]"
  }, "Categories +"), /*#__PURE__*/React.createElement("span", {
    role: "button",
    onClick: onCartClick,
    className: "relative w-[34px] h-8 flex-shrink-0 cursor-pointer flex items-center justify-center",
    "aria-label": "Cart"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 30,
    height: 24,
    viewBox: "0 0 30 28",
    fill: "none",
    stroke: "var(--ps-prim-blue-500)",
    strokeWidth: 2.2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 3h4l2.4 13.2a2 2 0 0 0 2 1.6h11.4a2 2 0 0 0 2-1.6L26 7H7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "24",
    r: "1.6",
    fill: "var(--ps-prim-blue-500)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "24",
    r: "1.6",
    fill: "var(--ps-prim-blue-500)"
  })), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "absolute -top-1 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-[9px] bg-[var(--ps-prim-orange-400)] text-white text-[11px] font-bold inline-flex items-center justify-center border-2 border-white"
  }, cartCount)), /*#__PURE__*/React.createElement("span", {
    className: "w-px h-[31px] bg-[var(--ps-prim-gray-400)] flex-shrink-0",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    role: "button",
    className: "flex items-center gap-2.5 cursor-pointer flex-shrink-0 px-1 py-0.5 rounded"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 20,
    viewBox: "0 0 14 20",
    fill: "var(--ps-prim-gray-800)",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 0a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 7 4.5a2.5 2.5 0 0 1 0 5z"
  })), /*#__PURE__*/React.createElement("span", {
    className: "flex flex-col leading-[1.1] gap-0.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] text-[var(--ps-prim-gray-800)]"
  }, facilityLabel), /*#__PURE__*/React.createElement("span", {
    className: "text-[16px] font-bold text-[var(--ps-prim-gray-800)]"
  }, facilityName)))), /*#__PURE__*/React.createElement("div", {
    className: "h-[52px] bg-[var(--ps-prim-blue-700)] relative overflow-hidden flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white text-[24px] tracking-[-0.01em] leading-9 px-6 flex-shrink-0"
  }, heroTitle), proAccountLogo && /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 top-0 w-[504px] h-[52px] bg-[var(--ps-prim-blue-100)] flex items-center gap-3.5 text-[var(--ps-prim-gray-720)]",
    style: {
      clipPath: "polygon(54px 0, 100% 0, 100% 100%, 0 100%)",
      paddingLeft: "120px",
      boxShadow: "inset -4px 4px 10px 0 rgba(0,0,0,.19)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: proAccountLogo,
    alt: "",
    className: "block h-9 w-auto"
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-px h-6 bg-[var(--ps-prim-gray-600)]",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[16px] font-bold text-[var(--ps-prim-cyan-400)] tracking-[0.04em]"
  }, "PRO\xA0\xA0ACCOUNT"))));
};

// ── LeftNav ──────────────────────────────────────────────────────
const LeftNav = ({
  userInitials = "EG",
  userName = "Earl G.",
  items,
  collapsed = false,
  onToggleCollapse,
  onLogout,
  className = ""
}) => /*#__PURE__*/React.createElement("nav", {
  "aria-label": "Primary navigation",
  style: {
    width: collapsed ? 67 : 210
  },
  className: cxNav("relative h-full flex flex-col flex-shrink-0 bg-[var(--ps-prim-blue-700)] text-white overflow-hidden", "transition-[width] duration-300 ease-in-out", "font-['Source_Sans_3','Source_Sans_Pro',sans-serif] text-[14px] leading-[1.4]", className)
}, /*#__PURE__*/React.createElement("div", {
  className: cxNav("flex items-center gap-4 h-[60px] bg-[var(--ps-prim-blue-600)] shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex-shrink-0 transition-[padding] duration-300", collapsed ? "px-[21.5px]" : "px-4")
}, /*#__PURE__*/React.createElement("div", {
  className: "flex items-center justify-center w-6 h-6 rounded-full pt-0.5 bg-white text-[var(--ps-prim-blue-500)] text-[12px] font-bold uppercase flex-shrink-0"
}, userInitials), !collapsed && /*#__PURE__*/React.createElement("span", {
  className: "text-[18px] font-normal text-white whitespace-nowrap overflow-hidden text-ellipsis"
}, userName)), /*#__PURE__*/React.createElement("div", {
  className: "relative flex-1 overflow-hidden"
}, /*#__PURE__*/React.createElement("ul", {
  className: "h-full overflow-y-auto overflow-x-hidden px-2 py-6 list-none m-0 flex flex-col gap-3"
}, items.map(item => /*#__PURE__*/React.createElement("li", {
  key: item.id,
  className: "flex"
}, /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: item.onClick,
  "aria-current": item.active ? "page" : undefined,
  className: cxNav("flex items-center gap-2 w-full h-8 px-2 rounded-[5px] bg-transparent text-white text-left cursor-pointer border-0", "transition-[padding,background-color] duration-150", "hover:bg-[var(--ps-prim-blue-600)]", item.active && "bg-[var(--ps-prim-blue-500)]", collapsed && "px-[16.5px]")
}, /*#__PURE__*/React.createElement("span", {
  className: "w-[18px] h-[18px] flex-shrink-0"
}, item.icon), !collapsed && /*#__PURE__*/React.createElement("span", {
  className: "mt-[3px] whitespace-nowrap overflow-hidden"
}, item.label), !collapsed && item.hasChevron && /*#__PURE__*/React.createElement("span", {
  className: "ml-auto w-3.5 h-3.5 flex-shrink-0 opacity-70 overflow-hidden"
}, /*#__PURE__*/React.createElement("span", {
  className: "block w-[7px] h-[7px] mt-[3px] ml-0.5 border-r-2 border-t-2 border-white rotate-45"
}))))), onLogout && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
  className: "h-px bg-[var(--ps-prim-blue-600)] my-1 list-none"
}), /*#__PURE__*/React.createElement("li", {
  className: "flex list-none"
}, /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: onLogout,
  className: cxNav("flex items-center gap-2 w-full h-8 px-2 rounded-[5px] bg-transparent text-white text-left cursor-pointer border-0 hover:bg-[var(--ps-prim-blue-600)] hover:text-[var(--ps-prim-red-100)]", collapsed && "px-[16.5px]")
}, /*#__PURE__*/React.createElement("svg", {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
})), !collapsed && /*#__PURE__*/React.createElement("span", {
  className: "mt-[3px] whitespace-nowrap overflow-hidden"
}, "Log Out")))))), onToggleCollapse && /*#__PURE__*/React.createElement("button", {
  type: "button",
  "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
  onClick: onToggleCollapse,
  className: cxNav("absolute bottom-[30px] z-10 flex items-center justify-center w-[30px] h-[30px] rounded-full border-0", "bg-[var(--ps-prim-blue-500)] text-white cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.25)]", "transition-[left] duration-300 hover:bg-[var(--ps-prim-blue-600)]"),
  style: {
    left: collapsed ? 18 : 190
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("polyline", {
  points: collapsed ? "9 18 15 12 9 6" : "15 18 9 12 15 6"
}))));
const Navigation = {
  TopNav,
  LeftNav
};

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    TopNav,
    LeftNav
  });
}
Object.assign(__ds_scope, { TopNav, LeftNav, Navigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Navigation.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Selections.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Selections.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Selections.tsx — PartsSource Design System
//
// Checkbox: 24×24 with 2px corner radius. Orange fill when checked.
// Radio:    24×24 circle with orange dot when selected.
// Toggle:   pill switch with sliding thumb.
//
// All three use a 1.5px stroke, hover/focus/pressed treatments with
// orange + blue-glow per preview/selections.html.
// ──────────────────────────────────────────────────────────────────

const cxSel = (...parts) => parts.filter(Boolean).join(" ");

// Border + halo classes per state (matches selections preview)
const stateBorder = (state, checked, disabled) => {
  if (disabled) return "border-[var(--ps-prim-gray-400)]";
  if (state === "hover") return "border-[var(--ps-prim-orange-500)]";
  if (state === "focus") return "border-[var(--ps-prim-orange-500)] shadow-[0_0_10px_5px_rgba(0,91,166,0.5)]";
  if (state === "pressed") return "border-[var(--ps-prim-orange-600)] shadow-[0_0_0_4px_var(--ps-prim-orange-100)]";
  return checked ? "border-[var(--ps-prim-orange-400)]" : "border-[var(--ps-prim-gray-700)]";
};
const Checkbox = ({
  label,
  checked,
  defaultChecked,
  onChange,
  state = "default",
  disabled,
  className = ""
}) => {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? false);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;
  const isDisabled = disabled || state === "disabled";
  const toggle = () => {
    if (isDisabled) return;
    const next = !isChecked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: cxSel("inline-flex items-center gap-3 select-none", isDisabled ? "cursor-not-allowed" : "cursor-pointer", className)
  }, /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    role: "checkbox",
    "aria-checked": isChecked,
    "aria-disabled": isDisabled,
    tabIndex: isDisabled ? -1 : 0,
    onKeyDown: e => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggle();
      }
    },
    className: cxSel("inline-flex items-center justify-center w-6 h-6 rounded-[2px] border-[1.5px] transition-all", "font-['Source_Sans_Pro',sans-serif]", isChecked && !isDisabled ? "bg-[var(--ps-prim-orange-400)]" : "bg-white", stateBorder(state, isChecked, isDisabled))
  }, isChecked && /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7l3 3 5-6",
    stroke: isDisabled ? "var(--ps-prim-gray-500)" : "white",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    className: cxSel("text-[13px] font-['Source_Sans_Pro',sans-serif]", isDisabled ? "text-[var(--ps-prim-gray-500)]" : "text-[var(--ps-prim-gray-900)]")
  }, label));
};
const Radio = ({
  label,
  name,
  value,
  checked,
  defaultChecked,
  onChange,
  state = "default",
  disabled,
  className = ""
}) => {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? false);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;
  const isDisabled = disabled || state === "disabled";
  const select = () => {
    if (isDisabled || isChecked) return;
    if (!isControlled) setInternalChecked(true);
    if (value !== undefined) onChange?.(value);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: cxSel("inline-flex items-center gap-3 select-none", isDisabled ? "cursor-not-allowed" : "cursor-pointer", className)
  }, /*#__PURE__*/React.createElement("span", {
    onClick: select,
    role: "radio",
    "aria-checked": isChecked,
    "aria-disabled": isDisabled,
    tabIndex: isDisabled ? -1 : 0,
    onKeyDown: e => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        select();
      }
    },
    className: cxSel(
    // Figma node 4393:45192 — 20×20 (not 24×24).
    "inline-flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] transition-all bg-white", stateBorder(state, isChecked, isDisabled))
  }, isChecked && /*#__PURE__*/React.createElement("span", {
    className: cxSel(
    // 8px inner dot (proportional to 20px ring)
    "w-2 h-2 rounded-full", isDisabled ? "bg-[var(--ps-prim-gray-500)]" : "bg-[var(--ps-prim-orange-400)]")
  })), label && /*#__PURE__*/React.createElement("span", {
    className: cxSel("text-[13px] font-['Source_Sans_Pro',sans-serif]", isDisabled ? "text-[var(--ps-prim-gray-500)]" : "text-[var(--ps-prim-gray-900)]")
  }, label));
};
const Toggle = ({
  checked,
  defaultChecked,
  onChange,
  disabled,
  label,
  className = ""
}) => {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? false);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;
  const toggle = () => {
    if (disabled) return;
    const next = !isChecked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    className: cxSel("inline-flex items-center gap-3 select-none cursor-pointer", className)
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": isChecked,
    disabled: disabled,
    onClick: toggle,
    className: cxSel(
    // Figma node 4393:45399 — 44×24 pill, orange ON, grey OFF.
    "relative w-11 h-6 rounded-full transition-colors duration-150 cursor-pointer", "disabled:opacity-60 disabled:cursor-not-allowed", isChecked ? "bg-[var(--ps-prim-orange-400)]" : "bg-[var(--ps-prim-gray-300)]")
  }, /*#__PURE__*/React.createElement("span", {
    className: cxSel(
    // 20×20 white thumb with subtle shadow, 2px inset from track edge.
    "absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-[0_0.833px_1.667px_rgba(0,0,0,0.2)] transition-all duration-150", isChecked ? "left-[22px]" : "left-0.5")
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "text-[13px] font-['Source_Sans_Pro',sans-serif] text-[var(--ps-prim-gray-900)]"
  }, label));
};
const Selections = {
  Checkbox,
  Radio,
  Toggle
};

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    Checkbox,
    Radio,
    Toggle
  });
}
Object.assign(__ds_scope, { Checkbox, Radio, Toggle, Selections });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Selections.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Showcase.tsx
try { (() => {
// ──────────────────────────────────────────────────────────────────
// Showcase.tsx — Renders every component with its variants/states.
// Sections: Button, Input, Card, Badge, Alert, Selections, Tabs,
//           Modal, Drawer, Table, Filter, Navigation, CMS.
// ──────────────────────────────────────────────────────────────────

// ── Layout primitives ────────────────────────────────────────────
const Section = ({
  id,
  title,
  desc,
  children
}) => /*#__PURE__*/React.createElement("section", {
  id: id,
  className: "mb-12 border border-[#E6E6E6] rounded-xl overflow-hidden bg-white"
}, /*#__PURE__*/React.createElement("header", {
  className: "px-6 py-[18px] border-b border-[#E6E6E6] bg-[#FAFAFA]"
}, /*#__PURE__*/React.createElement("h2", {
  className: "m-0 text-[13px] tracking-[1.5px] uppercase text-[#005BA6] font-bold"
}, title), /*#__PURE__*/React.createElement("p", {
  className: "m-0 mt-1 text-[13px] text-[#777] leading-[1.5]"
}, desc)), /*#__PURE__*/React.createElement("div", {
  className: "p-6"
}, children));
const StateRow = ({
  label,
  note,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-[140px_minmax(0,360px)_minmax(220px,1fr)] gap-8 items-center py-4 border-b border-[#F1F1F1] last:border-b-0"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-[10px] tracking-[1.5px] uppercase text-[#777] font-bold"
}, label), /*#__PURE__*/React.createElement("div", {
  className: "flex items-center"
}, children), /*#__PURE__*/React.createElement("div", {
  className: "text-[13px] text-[#777] leading-[1.5]"
}, note));
const SubHeading = ({
  children
}) => /*#__PURE__*/React.createElement("h3", {
  className: "m-0 mb-2 mt-6 first:mt-0 text-[12px] tracking-[1px] uppercase text-[#4A4A4A] font-semibold"
}, children);
const Sw = ({
  children,
  className = ""
}) => /*#__PURE__*/React.createElement("div", {
  className: `flex flex-wrap items-center gap-6 py-4 ${className}`
}, children);

// ── Demo helpers ─────────────────────────────────────────────────
const ServiceEventIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: 23,
  height: 23,
  viewBox: "0 0 23 23",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0.420898 19.8526V8.95789C0.420898 8.35867 0.634398 7.84548 1.06141 7.41848C1.48781 6.99209 2.00057 6.77887 2.59979 6.77887H5.86816V4.6C5.86816 4.00078 6.08167 3.48799 6.50868 3.06164C6.93506 2.63461 7.44784 2.4211 8.04705 2.4211H14.584C15.1832 2.4211 15.6964 2.63461 16.1234 3.06164C16.5498 3.48799 16.7629 4.00078 16.7629 4.6V6.77887H20.0313C20.6306 6.77887 21.1437 6.99209 21.5708 7.41848C21.9971 7.84548 22.2103 8.35867 22.2103 8.95789V19.8526H0.420898ZM2.59979 17.6737H20.0313V14.4053H17.8524V15.4947H15.6735V14.4053H6.95769V15.4947H4.77876V14.4053H2.59979V17.6737ZM2.59979 8.95789V12.2263H4.77876V11.1368H6.95769V12.2263H15.6735V11.1368H17.8524V12.2263H20.0313V8.95789H2.59979ZM8.04705 6.77887H14.584V4.6H8.04705V6.77887Z"
}));
const PinIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2C8 2 5 5 5 9c0 7 7 13 7 13s7-6 7-13c0-4-3-7-7-7z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "9",
  r: "2.5"
}));

// ── Sidebar ──────────────────────────────────────────────────────
const SIDEBAR_ITEMS = [{
  id: "buttons",
  label: "Button"
}, {
  id: "inputs",
  label: "Input"
}, {
  id: "cards",
  label: "Card"
}, {
  id: "badges",
  label: "Badge"
}, {
  id: "alerts",
  label: "Alert · Toast"
}, {
  id: "selections",
  label: "Selections"
}, {
  id: "tabs",
  label: "Tabs"
}, {
  id: "modal",
  label: "Modal"
}, {
  id: "drawer",
  label: "Drawer"
}, {
  id: "table",
  label: "Table"
}, {
  id: "filter",
  label: "Filter"
}, {
  id: "navigation",
  label: "Navigation"
}, {
  id: "cms",
  label: "CMS Blocks"
}, {
  id: "breadcrumb",
  label: "Breadcrumb"
}, {
  id: "pagination",
  label: "Pagination"
}, {
  id: "accordion",
  label: "Accordion"
}, {
  id: "tooltip",
  label: "Tooltip"
}, {
  id: "stepper",
  label: "Stepper"
}, {
  id: "avatar",
  label: "Avatar"
}, {
  id: "datepicker",
  label: "Date Picker"
}, {
  id: "skeleton",
  label: "Skeleton"
}, {
  id: "empty",
  label: "Empty / Error"
}];
const Sidebar = ({
  active,
  onClick
}) => /*#__PURE__*/React.createElement("aside", {
  className: "sticky top-8 self-start w-[200px] flex-shrink-0 hidden lg:block"
}, /*#__PURE__*/React.createElement("div", {
  className: "text-[11px] tracking-[1.8px] uppercase text-[#777] font-bold mb-3"
}, "Components"), /*#__PURE__*/React.createElement("nav", {
  className: "flex flex-col gap-0.5"
}, SIDEBAR_ITEMS.map(it => /*#__PURE__*/React.createElement("a", {
  key: it.id,
  href: `#${it.id}`,
  onClick: e => {
    e.preventDefault();
    onClick(it.id);
  },
  className: "px-3 py-2 rounded text-[14px] no-underline transition-colors " + (active === it.id ? "bg-[#EFF9FE] text-[#005BA6] font-semibold" : "text-[#4A4A4A] hover:bg-[#F5F5F5]")
}, it.label))));

// ══════════════════════ SECTION COMPONENTS ══════════════════════

const ButtonSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "buttons",
  title: "Button",
  desc: "All button variants and interaction states."
}, /*#__PURE__*/React.createElement(SubHeading, null, "Primary \xB7 Large (50px)"), /*#__PURE__*/React.createElement(StateRow, {
  label: "Default",
  note: "White fill with PS Blue border and text."
}, /*#__PURE__*/React.createElement(Button, null, "Buy Now")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Hover",
  note: "Fill shifts to #005BA6, border to #009CF4."
}, /*#__PURE__*/React.createElement(Button, {
  state: "hover"
}, "Buy Now")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Pressed",
  note: "Midnight fill #004A84 with a 4px drop shadow."
}, /*#__PURE__*/React.createElement(Button, {
  state: "pressed"
}, "Buy Now")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Focus",
  note: "Default state plus a 3px Blue-Gray focus ring."
}, /*#__PURE__*/React.createElement(Button, {
  state: "focus"
}, "Buy Now")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Disabled",
  note: "Grey 4 fill, Grey 2 border and label."
}, /*#__PURE__*/React.createElement(Button, {
  disabled: true
}, "Buy Now")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Loading",
  note: "Spinner replaces label; button locked while busy."
}, /*#__PURE__*/React.createElement(Button, {
  loading: true
}, "Buy Now")), /*#__PURE__*/React.createElement(SubHeading, null, "Secondary \xB7 Small (32px)"), /*#__PURE__*/React.createElement(StateRow, {
  label: "Default",
  note: "White, 1px Grey 4 border, Grey 1 label."
}, /*#__PURE__*/React.createElement(Button, {
  variant: "secondary",
  size: "sm"
}, "Apply Filter")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Hover",
  note: "Fills with PS Blue."
}, /*#__PURE__*/React.createElement(Button, {
  variant: "secondary",
  size: "sm",
  state: "hover"
}, "Apply Filter")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Pressed",
  note: "Darkens to #004A84."
}, /*#__PURE__*/React.createElement(Button, {
  variant: "secondary",
  size: "sm",
  state: "pressed"
}, "Apply Filter")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Disabled",
  note: "Grey 4 fill, Grey 3 label."
}, /*#__PURE__*/React.createElement(Button, {
  variant: "secondary",
  size: "sm",
  disabled: true
}, "Apply Filter")), /*#__PURE__*/React.createElement(SubHeading, null, "Tertiary \xB7 Large (40px pill)"), /*#__PURE__*/React.createElement(StateRow, {
  label: "Default",
  note: "Grey 5 fill, fully-rounded pill."
}, /*#__PURE__*/React.createElement(Button, {
  variant: "tertiary"
}, "Save for later")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Hover",
  note: "Background deepens to Grey 4."
}, /*#__PURE__*/React.createElement(Button, {
  variant: "tertiary",
  state: "hover"
}, "Save for later")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Pressed",
  note: "Darkens to #CCCCCC."
}, /*#__PURE__*/React.createElement(Button, {
  variant: "tertiary",
  state: "pressed"
}, "Save for later")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Disabled",
  note: "Same grey fill, Grey 3 label."
}, /*#__PURE__*/React.createElement(Button, {
  variant: "tertiary",
  disabled: true
}, "Save for later")), /*#__PURE__*/React.createElement(SubHeading, null, "Arrow \xB7 Back (28px)"), /*#__PURE__*/React.createElement(StateRow, {
  label: "Default",
  note: "Transparent at rest."
}, /*#__PURE__*/React.createElement(Button, {
  variant: "arrow",
  "aria-label": "Back",
  iconStart: /*#__PURE__*/React.createElement(BackArrowIcon, null)
}, null)), /*#__PURE__*/React.createElement(StateRow, {
  label: "Hover",
  note: "Picks up a Grey 5 background."
}, /*#__PURE__*/React.createElement(Button, {
  variant: "arrow",
  state: "hover",
  "aria-label": "Back",
  iconStart: /*#__PURE__*/React.createElement(BackArrowIcon, null)
}, null)), /*#__PURE__*/React.createElement(SubHeading, null, "Pill \xB7 Large (48px) \u2014 \u26A0 Deprecated"), /*#__PURE__*/React.createElement("div", {
  className: "bg-[#FFEAEA] border border-[#FFCDCD] rounded p-3 mb-3 flex gap-2 text-[13px] text-[#FF4242]"
}, /*#__PURE__*/React.createElement("strong", null, "Deprecated"), /*#__PURE__*/React.createElement("span", null, "Orange CTAs fail WCAG AA. Use Primary for new work.")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Default",
  note: "Orange 1 fill."
}, /*#__PURE__*/React.createElement(Button, {
  variant: "pill"
}, "Propose Quote")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Hover",
  note: "Darkens to Orange 2."
}, /*#__PURE__*/React.createElement(Button, {
  variant: "pill",
  state: "hover"
}, "Propose Quote")), /*#__PURE__*/React.createElement(SubHeading, null, "Inline buttons"), /*#__PURE__*/React.createElement(StateRow, {
  label: "Link",
  note: "14px Grey 2 with a 1px underline."
}, /*#__PURE__*/React.createElement(ButtonInline, {
  kind: "link",
  href: "#"
}, "Understand my needs")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Link (Blue)",
  note: "16px bold PS Blue product-title style."
}, /*#__PURE__*/React.createElement(ButtonInline, {
  kind: "link-blue",
  href: "#"
}, "ADULT REUSABLE SPO2 SENSOR")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Tall",
  note: "48px ghost action."
}, /*#__PURE__*/React.createElement(ButtonInline, {
  kind: "tall",
  href: "#"
}, "ALL CATEGORIES")), /*#__PURE__*/React.createElement(StateRow, {
  label: "Directory",
  note: "Drill-down row with right chevron."
}, /*#__PURE__*/React.createElement(ButtonInline, {
  kind: "dir",
  href: "#"
}, "Diagnostic Imaging")));
const InputSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "inputs",
  title: "Input",
  desc: "Floating-label inputs and dropdowns. 48px default, 80px large."
}, /*#__PURE__*/React.createElement(SubHeading, null, "Text Field \xB7 48px (md)"), /*#__PURE__*/React.createElement(StateRow, {
  label: "Idle & Empty",
  note: "Interactive \u2014 type to see the label float."
}, /*#__PURE__*/React.createElement(Input, {
  label: "Label"
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Hover",
  note: "Border darkens to black."
}, /*#__PURE__*/React.createElement(Input, {
  label: "Label",
  state: "hover"
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Focused",
  note: "PS Blue border with a 10px blue glow."
}, /*#__PURE__*/React.createElement(Input, {
  label: "Label",
  state: "focus"
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "With value",
  note: "Label floats up \u2014 12px bold PS Blue."
}, /*#__PURE__*/React.createElement(Input, {
  label: "Label",
  defaultValue: "Input Text",
  state: "withValue"
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Disabled",
  note: ""
}, /*#__PURE__*/React.createElement(Input, {
  label: "Label",
  disabled: true
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Error",
  note: "Red border + glow with an error message."
}, /*#__PURE__*/React.createElement(Input, {
  label: "Label",
  defaultValue: "Wrong",
  error: "This field is required."
})), /*#__PURE__*/React.createElement(SubHeading, null, "Large Input \xB7 80px (lg)"), /*#__PURE__*/React.createElement(StateRow, {
  label: "Idle",
  note: ""
}, /*#__PURE__*/React.createElement(Input, {
  label: "Label",
  size: "lg"
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "With value",
  note: ""
}, /*#__PURE__*/React.createElement(Input, {
  label: "Label",
  size: "lg",
  defaultValue: "Text Input",
  state: "withValue"
})), /*#__PURE__*/React.createElement(SubHeading, null, "Dropdown"), /*#__PURE__*/React.createElement(StateRow, {
  label: "Default",
  note: "Click to expand the menu."
}, /*#__PURE__*/React.createElement(Dropdown, {
  label: "Choose facility",
  options: [{
    label: "Chatham Memorial Hospital",
    value: "chatham"
  }, {
    label: "St. Luke's Medical Center",
    value: "stlukes"
  }, {
    label: "Mercy General Hospital",
    value: "mercy"
  }]
})));
const CardSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "cards",
  title: "Card",
  desc: "Service-event, status and alert cards. Fixed widths, flexing height."
}, /*#__PURE__*/React.createElement(SubHeading, null, "EventCard \xB7 317px"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(EventCard, {
  title: "Service Event",
  subtitle: "Reference #: 6668550",
  icon: /*#__PURE__*/React.createElement(ServiceEventIcon, null),
  meta: [{
    label: "Service Needed",
    value: "PS000011"
  }, {
    label: "Service Type",
    value: "Install"
  }, {
    label: "Date Created",
    value: "03/11/2025"
  }]
}), /*#__PURE__*/React.createElement(EventCard, {
  title: "Service Event",
  subtitle: "Reference #: 6668551",
  icon: /*#__PURE__*/React.createElement(ServiceEventIcon, null),
  iconBg: "#FFE9D5",
  iconFg: "#D27200",
  meta: [{
    label: "Service Needed",
    value: "PS000012"
  }, {
    label: "Service Type",
    value: "Repair"
  }, {
    label: "Date Created",
    value: "03/12/2025"
  }],
  ctaLabel: "Open Event"
})), /*#__PURE__*/React.createElement(SubHeading, null, "StatusCard \xB7 220\xD773"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(StatusCard, {
  title: "GE Healthcare CARESCAPE",
  meta: "Serial 4521-89A \xB7 Operational"
}), /*#__PURE__*/React.createElement(StatusCard, {
  title: "Philips IntelliVue MX450",
  meta: "Serial 7782-CC1 \xB7 Operational"
}), /*#__PURE__*/React.createElement(StatusCard, {
  title: "Mindray BeneVision N17",
  meta: "Serial 1209-LK \xB7 Maintenance due"
})), /*#__PURE__*/React.createElement(SubHeading, null, "AlertCard \xB7 220px"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(AlertCard, {
  title: "Calibration overdue",
  subtitle: "Asset out of tolerance",
  severity: "error",
  location: "Imaging \u2014 Room 314",
  datetime: "2 hours ago"
}), /*#__PURE__*/React.createElement(AlertCard, {
  title: "PM scheduled",
  subtitle: "Scheduled service window",
  severity: "warning",
  location: "OR \u2014 Suite 2",
  datetime: "Tomorrow \xB7 8:00 AM"
}), /*#__PURE__*/React.createElement(AlertCard, {
  title: "Inspection passed",
  subtitle: "All checks green",
  severity: "success",
  location: "Cath Lab \u2014 Room 207",
  datetime: "Yesterday"
})), /*#__PURE__*/React.createElement(SubHeading, null, "AiDataCard \xB7 348px"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(AiDataCard, {
  title: "BATTERY RECHARGEABLE, LITHIUM ION, 7.2V, 1.35 AH",
  manufacturer: "by Welch Allyn Inc.",
  meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, "FedEx \xA0\xB7\xA0 ", /*#__PURE__*/React.createElement("span", {
    className: "text-[#005BA6] font-semibold"
  }, "#032523123242")), /*#__PURE__*/React.createElement("div", null, "Est. Delivery: Today by 1:00 PM")),
  badges: [{
    tone: "notShipped",
    label: "Not Shipped"
  }],
  cost: "$2,400"
}), /*#__PURE__*/React.createElement(AiDataCard, {
  title: "PUMP, INFUSION, PCA EPIDURAL, CADD SOLIS",
  manufacturer: "by Smiths Medical",
  meta: /*#__PURE__*/React.createElement("div", null, "ICU \xA0\xB7\xA0 Tech Mike R. \xA0\xB7\xA0 Yesterday at 3:47pm"),
  badges: [{
    tone: "urgent",
    label: "Urgent"
  }, {
    tone: "pending",
    label: "Waiting for approval"
  }],
  cost: "$2,400"
})), /*#__PURE__*/React.createElement(SubHeading, null, "AnalyticsCard \xB7 KPI tiles"), /*#__PURE__*/React.createElement(Sw, {
  className: "items-start"
}, /*#__PURE__*/React.createElement(AnalyticsCard, {
  layout: "wide",
  title: "Parts Spend",
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2 16 6 6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "9",
    r: "2.9"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "5",
    r: "3"
  })),
  value: "$1.2M",
  label: "Parts Spend",
  delta: {
    value: "5.3%",
    direction: "up"
  },
  benchmark: "15% below peer benchmark",
  linkLabel: "View Details"
}), /*#__PURE__*/React.createElement(AnalyticsCard, {
  layout: "square",
  title: "Avg Resolution Time",
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 14v2.2l1.6 1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 2v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 21.7H4.6a1 1 0 0 1-1-1V5.7a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1V10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 2h8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "6"
  })),
  value: "2.3",
  label: "Days",
  sub: "Average in selected period",
  showMenu: true
}), /*#__PURE__*/React.createElement(AnalyticsCard, {
  layout: "square",
  title: "Critical Rate",
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  })),
  value: "74.2%",
  sub: "Resolved in less than 2 days",
  highlight: true,
  showMenu: true
})), /*#__PURE__*/React.createElement(SubHeading, null, "ListCard \xB7 294px (4 variants)"), /*#__PURE__*/React.createElement(Sw, {
  className: "items-start"
}, /*#__PURE__*/React.createElement(ListCard, {
  variant: "product",
  title: "Power Adapter Kit Infusion Pumps by Baxter",
  price: "$91.69",
  condition: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "New OEM Original"), " Outright"),
  qty: 1,
  onRemove: () => {}
}), /*#__PURE__*/React.createElement(ListCard, {
  title: "My Favorites",
  pill: {
    tone: "shopping",
    label: "Shopping"
  },
  count: "7 items",
  shareCount: 0
}), /*#__PURE__*/React.createElement(ListCard, {
  variant: "create"
}), /*#__PURE__*/React.createElement(ListCard, {
  variant: "standing",
  title: "Maintenance Parts Bundle",
  meta: [{
    label: "Frequency",
    value: "Every 3 Months"
  }, {
    label: "Creator",
    value: "Robert Chen"
  }, {
    label: "Next Order",
    value: "MM/DD/YY"
  }],
  statusDate: "MM/DD/YY",
  shareCount: 0
})), /*#__PURE__*/React.createElement(SubHeading, null, "ProductCard \xB7 500px detail view"), /*#__PURE__*/React.createElement(Sw, {
  className: "items-start"
}, /*#__PURE__*/React.createElement(ProductCard, {
  title: "PATIENT CABLE, SPO2 SPOT CHECK, RED LNC-01 SERIES, 1FT CABLE LENGTH, 20 NUMBER ORDER",
  date: "CREATED 04/21/2026",
  info: [{
    label: "Facility",
    value: "Chatham Memorial Clinic"
  }, {
    label: "Ref #",
    value: "9535566"
  }, {
    label: "Requester",
    value: "PETE ZILKO"
  }, {
    label: "Qty",
    value: "1"
  }],
  statusTitle: "Quote Available",
  statusBody: "Item is ready for purchase.",
  primaryLabel: "SEE BUYING OPTIONS (2)"
}), /*#__PURE__*/React.createElement(ProductCard, {
  title: "ITEM NAME By Original Equipment Manufacturer",
  date: "CREATED MM/DD/YYYY",
  info: [{
    label: "Qty",
    value: "X"
  }, {
    label: "Item #",
    value: "XXXXXX-XX"
  }, {
    label: "Condition",
    value: "Original Outright"
  }, {
    label: "Facility",
    value: "Erie Medical Hospital"
  }, {
    label: "Requestor",
    value: "First Last Name"
  }, {
    label: "Reference #",
    value: "XXXXXXX"
  }],
  statusTitle: "Tracker Status",
  statusBody: "Description. Lorem ipsum dolor",
  primaryLabel: "PRIMARY",
  secondaryLabel: "SECONDARY"
})));
const BadgeSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "badges",
  title: "Badge",
  desc: "Status tags for order/asset state and pill tags for list categories."
}, /*#__PURE__*/React.createElement(SubHeading, null, "StatusBadge \xB7 order & asset state"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(StatusBadge, {
  tone: "neutral"
}, "Not Shipped"), /*#__PURE__*/React.createElement(StatusBadge, {
  tone: "info"
}, "In Transit"), /*#__PURE__*/React.createElement(StatusBadge, {
  tone: "success"
}, "Delivered"), /*#__PURE__*/React.createElement(StatusBadge, {
  tone: "warning"
}, "Urgent"), /*#__PURE__*/React.createElement(StatusBadge, {
  tone: "critical"
}, "Critical"), /*#__PURE__*/React.createElement(StatusBadge, {
  tone: "success"
}, "Approved"), /*#__PURE__*/React.createElement(StatusBadge, {
  tone: "info"
}, "Pending"), /*#__PURE__*/React.createElement(StatusBadge, {
  tone: "info"
}, "3 Items")), /*#__PURE__*/React.createElement(SubHeading, null, "ListTypeBadge \xB7 catalog categories"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(ListTypeBadge, {
  tone: "shopping"
}, "Shopping"), /*#__PURE__*/React.createElement(ListTypeBadge, {
  tone: "preventative"
}, "Preventative"), /*#__PURE__*/React.createElement(ListTypeBadge, {
  tone: "restocking"
}, "Restocking")));
const AlertSection = () => {
  const [toasts, setToasts] = React.useState([]);
  const fire = severity => {
    const id = Date.now();
    setToasts(t => [...t, {
      id,
      severity
    }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 4000);
  };
  return /*#__PURE__*/React.createElement(Section, {
    id: "alerts",
    title: "Alert \xB7 Toast",
    desc: "Inline banners and transient toasts in four severities."
  }, /*#__PURE__*/React.createElement(SubHeading, null, "Inline alerts"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3"
  }, /*#__PURE__*/React.createElement(Alert, {
    severity: "success",
    onDismiss: () => {}
  }, "Requester has been nudged for Part Order #: ", /*#__PURE__*/React.createElement("strong", null, "64434335")), /*#__PURE__*/React.createElement(Alert, {
    severity: "info"
  }, "Quote ready for review \u2014 ", /*#__PURE__*/React.createElement("strong", null, "3 items"), "."), /*#__PURE__*/React.createElement(Alert, {
    severity: "warning"
  }, "Calibration window expires in ", /*#__PURE__*/React.createElement("strong", null, "72 hours"), "."), /*#__PURE__*/React.createElement(Alert, {
    severity: "fail"
  }, "Part Order #: ", /*#__PURE__*/React.createElement("strong", null, "64434335"), " has been rejected.")), /*#__PURE__*/React.createElement(SubHeading, null, "Toasts"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => fire("success"),
    className: "h-9 px-3 rounded border border-[#DCDCDC] bg-white text-[13px] cursor-pointer hover:bg-[#F5F5F5]"
  }, "Show success"), /*#__PURE__*/React.createElement("button", {
    onClick: () => fire("info"),
    className: "h-9 px-3 rounded border border-[#DCDCDC] bg-white text-[13px] cursor-pointer hover:bg-[#F5F5F5]"
  }, "Show info"), /*#__PURE__*/React.createElement("button", {
    onClick: () => fire("warning"),
    className: "h-9 px-3 rounded border border-[#DCDCDC] bg-white text-[13px] cursor-pointer hover:bg-[#F5F5F5]"
  }, "Show warning"), /*#__PURE__*/React.createElement("button", {
    onClick: () => fire("fail"),
    className: "h-9 px-3 rounded border border-[#DCDCDC] bg-white text-[13px] cursor-pointer hover:bg-[#F5F5F5]"
  }, "Show fail")), /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-6 right-6 flex flex-col gap-3 max-w-[420px] z-[9999]"
  }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, {
    key: t.id,
    severity: t.severity,
    onDismiss: () => setToasts(cur => cur.filter(x => x.id !== t.id))
  }, t.severity === "success" && "Saved successfully.", t.severity === "info" && "FYI: dataset refreshed.", t.severity === "warning" && "Heads up — calibration due soon.", t.severity === "fail" && "Failed to save. Please try again."))));
};
const SelectionsSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "selections",
  title: "Selections",
  desc: "Checkbox, Radio and Toggle. 24\xD724 inputs with 1.5px stroke; orange selected state."
}, /*#__PURE__*/React.createElement(SubHeading, null, "Checkbox"), /*#__PURE__*/React.createElement(StateRow, {
  label: "Idle",
  note: ""
}, /*#__PURE__*/React.createElement(Checkbox, {
  label: "Include compatible parts"
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Hover",
  note: "Orange 2 stroke."
}, /*#__PURE__*/React.createElement(Checkbox, {
  label: "Include compatible parts",
  state: "hover"
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Focused",
  note: "Orange 2 stroke with blue glow."
}, /*#__PURE__*/React.createElement(Checkbox, {
  label: "Include compatible parts",
  state: "focus"
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Pressed",
  note: ""
}, /*#__PURE__*/React.createElement(Checkbox, {
  label: "Include compatible parts",
  state: "pressed"
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Disabled",
  note: ""
}, /*#__PURE__*/React.createElement(Checkbox, {
  label: "Include compatible parts",
  disabled: true
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Selected",
  note: ""
}, /*#__PURE__*/React.createElement(Checkbox, {
  label: "Include compatible parts",
  defaultChecked: true
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Selected \xB7 Disabled",
  note: ""
}, /*#__PURE__*/React.createElement(Checkbox, {
  label: "Include compatible parts",
  defaultChecked: true,
  disabled: true
})), /*#__PURE__*/React.createElement(SubHeading, null, "Radio"), /*#__PURE__*/React.createElement(StateRow, {
  label: "Idle",
  note: ""
}, /*#__PURE__*/React.createElement(Radio, {
  label: "Standard shipping"
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Selected",
  note: ""
}, /*#__PURE__*/React.createElement(Radio, {
  label: "Standard shipping",
  defaultChecked: true
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Focused",
  note: ""
}, /*#__PURE__*/React.createElement(Radio, {
  label: "Standard shipping",
  state: "focus"
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Disabled",
  note: ""
}, /*#__PURE__*/React.createElement(Radio, {
  label: "Standard shipping",
  disabled: true
})), /*#__PURE__*/React.createElement(SubHeading, null, "Toggle"), /*#__PURE__*/React.createElement(StateRow, {
  label: "Off",
  note: ""
}, /*#__PURE__*/React.createElement(Toggle, {
  label: "Auto-approve quotes"
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "On",
  note: ""
}, /*#__PURE__*/React.createElement(Toggle, {
  label: "Auto-approve quotes",
  defaultChecked: true
})), /*#__PURE__*/React.createElement(StateRow, {
  label: "Disabled",
  note: ""
}, /*#__PURE__*/React.createElement(Toggle, {
  label: "Auto-approve quotes",
  disabled: true
})));
const TabsSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "tabs",
  title: "Tabs",
  desc: "Folder (page-level), Segmented (compact toggle), and Pill (filter-style)."
}, /*#__PURE__*/React.createElement(SubHeading, null, "Folder tabs"), /*#__PURE__*/React.createElement(FolderTabs, {
  defaultActiveId: "initiated",
  items: [{
    id: "initiated",
    label: "Initiated",
    count: 0
  }, {
    id: "quoted",
    label: "Quoted",
    count: 0
  }, {
    id: "open",
    label: "Open Service Event",
    count: 0
  }, {
    id: "done",
    label: "Work Completed",
    count: 1
  }, {
    id: "archived",
    label: "Archived",
    disabled: true
  }]
}), /*#__PURE__*/React.createElement("div", {
  className: "px-6 py-5 text-[14px] text-[#4A4A4A] bg-white",
  style: {
    borderLeft: "1px solid #E0E0E0",
    borderRight: "1px solid #E0E0E0",
    borderBottom: "1px solid #E0E0E0",
    borderRadius: "0 0 6px 6px"
  }
}, "Active panel content sits flush under the active tab."), /*#__PURE__*/React.createElement(SubHeading, null, "Segmented \xB7 view toggle"), /*#__PURE__*/React.createElement(SegmentedTabs, {
  defaultActiveId: "grid",
  items: [{
    id: "grid",
    label: "",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.6
    }, /*#__PURE__*/React.createElement("rect", {
      x: "1.5",
      y: "1.5",
      width: "5",
      height: "5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9.5",
      y: "1.5",
      width: "5",
      height: "5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "1.5",
      y: "9.5",
      width: "5",
      height: "5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "9.5",
      y: "9.5",
      width: "5",
      height: "5"
    }))
  }, {
    id: "list",
    label: "",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.6
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 4h12M2 8h12M2 12h12"
    }))
  }, {
    id: "map",
    label: "",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.6
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 4l4-2 4 2 4-2v10l-4 2-4-2-4 2V4z"
    }))
  }]
}), /*#__PURE__*/React.createElement(SubHeading, null, "Pill tabs \xB7 filter"), /*#__PURE__*/React.createElement(PillTabs, {
  defaultActiveId: "all",
  items: [{
    id: "all",
    label: "All",
    count: 124
  }, {
    id: "imaging",
    label: "Imaging",
    count: 32
  }, {
    id: "monitoring",
    label: "Monitoring",
    count: 18
  }, {
    id: "ventilation",
    label: "Ventilation",
    count: 9
  }]
}));
const ModalSection = () => {
  const [mOpen, setMOpen] = React.useState(false);
  const [cOpen, setCOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, {
    id: "modal",
    title: "Modal",
    desc: "Centered overlay dialog. 5px radius, 24\xD732 padding, 30px light title."
  }, /*#__PURE__*/React.createElement(SubHeading, null, "Standard modal"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => setMOpen(true)
  }, "Open Modal"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => setCOpen(true)
  }, "Open Confirm Dialog")), /*#__PURE__*/React.createElement(Modal, {
    open: mOpen,
    title: "Nudge requester",
    onClose: () => setMOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => setMOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setMOpen(false)
    }, "Send nudge"))
  }, /*#__PURE__*/React.createElement("p", {
    className: "m-0 text-[14px] leading-[1.6] text-[#4A4A4A]"
  }, "Your requester will receive an email and a Slack ping asking them to review this part order."), /*#__PURE__*/React.createElement("div", {
    className: "mt-4"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Optional message",
    defaultValue: ""
  }))), /*#__PURE__*/React.createElement(ConfirmDialog, {
    open: cOpen,
    title: "Delete this list?",
    message: "This action can't be undone. All saved parts in this list will be removed.",
    confirmLabel: "Delete",
    destructive: true,
    onConfirm: () => setCOpen(false),
    onCancel: () => setCOpen(false)
  }));
};
const DrawerSection = () => {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, {
    id: "drawer",
    title: "Drawer",
    desc: "Right-side overlay panel, 500px wide. Click scrim or press Esc to dismiss."
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => setOpen(true)
  }, "Open Drawer"), /*#__PURE__*/React.createElement(Drawer, {
    open: open,
    title: "Add learners",
    subtitle: "Choose teammates to assign this course to.",
    onClose: () => setOpen(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => setOpen(false)
    }, "Add 3 learners"))
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Search by name or email"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 mt-2"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Alex Morgan \u2014 Imaging",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Casey Tran \u2014 Biomed",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Jordan Lee \u2014 OR",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Sam Patel \u2014 ICU"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Riley Chen \u2014 Cath Lab"
  })))));
};
const TableSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "table",
  title: "Table",
  desc: "Pulled from preview/tables.html \u2014 the production Parts Quotes table with 38\xA0px folder tabs, fixed column grid, and pagination footer. Embedded here so the Showcase always matches what's documented."
}, /*#__PURE__*/React.createElement("iframe", {
  src: "../preview/tables.html",
  title: "Tables \u2014 preview",
  className: "w-full h-[760px] border-0 rounded-md bg-white",
  style: {
    display: "block"
  }
}));
const FilterSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "filter",
  title: "Filter",
  desc: "Pulled from preview/filter.html \u2014 the FAFAFA shell, 68\xA0px tall bar, filter chips, and empty / many-chip / no-match patterns. Embedded so this never drifts from production."
}, /*#__PURE__*/React.createElement("iframe", {
  src: "../preview/filter.html",
  title: "Filter \u2014 preview",
  className: "w-full h-[760px] border-0 rounded-md bg-white",
  style: {
    display: "block"
  }
}));
const NavigationSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "navigation",
  title: "Navigation",
  desc: "Pulled from the production navigation pages \u2014 TopNav (utility row, search, facility selector, PRO Account hero) and LeftNav (210\xA0px expanded / 67\xA0px collapsed dark-blue rail). Embedded so the Showcase always matches the documented spec."
}, /*#__PURE__*/React.createElement(SubHeading, null, "TopNav"), /*#__PURE__*/React.createElement("iframe", {
  src: "../preview/top-navigation.html",
  title: "TopNav \u2014 preview",
  className: "w-full h-[680px] border-0 rounded-md bg-white",
  style: {
    display: "block"
  }
}), /*#__PURE__*/React.createElement(SubHeading, null, "LeftNav"), /*#__PURE__*/React.createElement("iframe", {
  src: "../preview/left-hand-navigation.html",
  title: "LeftNav \u2014 preview",
  className: "w-full h-[720px] border-0 rounded-md bg-white",
  style: {
    display: "block"
  }
}));
const CmsSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "cms",
  title: "CMS Blocks",
  desc: "Bloomreach content blocks: Banner, ImageBlock, TextBlock, CardGrid."
}, /*#__PURE__*/React.createElement(SubHeading, null, "Banner"), /*#__PURE__*/React.createElement(Banner, {
  title: "Mission-critical uptime, on-demand",
  body: "Access real-time inventory, transparent pricing, and a guaranteed 4-hour response on every order.",
  ctaLabel: "Request a Quote",
  onCta: () => {}
}), /*#__PURE__*/React.createElement(SubHeading, null, "ImageBlock \u2014 image right"), /*#__PURE__*/React.createElement(ImageBlock, {
  title: "Connect equipment to outcomes",
  body: "Track asset-level performance across your network and identify the most common service drivers in any quarter.",
  ctaLabel: "Learn more"
}), /*#__PURE__*/React.createElement(SubHeading, null, "TextBlock"), /*#__PURE__*/React.createElement(TextBlock, {
  title: "How we measure impact"
}, /*#__PURE__*/React.createElement("p", null, "PartsSource Pro combines a managed-services delivery model with the largest equipment-uptime dataset in the country. We surface preventable downtime before it becomes a clinical risk and translate every service event into a measurable cost-avoidance line.")), /*#__PURE__*/React.createElement(SubHeading, null, "CardGrid \xB7 3 columns"), /*#__PURE__*/React.createElement(CardGrid, {
  columns: 3,
  gap: "md",
  cards: [{
    title: "Vendor Management",
    text: "Single procurement workflow across 5,000+ vendors."
  }, {
    title: "Compliance Tracking",
    text: "Audit-ready logs for every PM, repair and inspection."
  }, {
    title: "Technical Specs",
    text: "Complete service manuals and OEM documentation."
  }]
}));

// ── Extras (Layout / Feedback / Controls) sections ───────────────

const BreadcrumbSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "breadcrumb",
  title: "Breadcrumb",
  desc: "Trail-style and back-style. Source Sans Pro 14, PS Blue parents, Grey 3 current."
}, /*#__PURE__*/React.createElement(SubHeading, null, "Back-style \u2014 single parent return"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(BreadcrumbBack, {
  label: "Back to My Dashboard"
})), /*#__PURE__*/React.createElement(SubHeading, null, "Trail-style"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(Breadcrumb, {
  items: [{
    label: "My Dashboard",
    href: "#"
  }, {
    label: "Asset Details"
  }]
})), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(Breadcrumb, {
  items: [{
    label: "Pro",
    href: "#"
  }, {
    label: "Asset Uptime",
    href: "#"
  }, {
    label: "Imaging — Room 314"
  }]
})));
const PaginationSection = () => {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  return /*#__PURE__*/React.createElement(Section, {
    id: "pagination",
    title: "Pagination",
    desc: "Result count, page controls, page-size picker. 32 \xD7 32 buttons, PS Blue active."
  }, /*#__PURE__*/React.createElement(SubHeading, null, "Default"), /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    totalPages: 24,
    total: 234,
    pageSize: pageSize,
    onPageChange: setPage,
    onPageSizeChange: setPageSize
  }), /*#__PURE__*/React.createElement(SubHeading, null, "Compact (no result count)"), /*#__PURE__*/React.createElement(Pagination, {
    page: 1,
    totalPages: 3,
    onPageChange: () => {},
    compact: true
  }));
};
const AccordionSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "accordion",
  title: "Accordion",
  desc: "4 px radius card, 2 px #F1F1F1 border, 25 px light title, chevron rotates on open."
}, /*#__PURE__*/React.createElement(Accordion, {
  title: "Accordion Header Collapsed"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 16
  }
}, /*#__PURE__*/React.createElement(Accordion, {
  title: "Accordion Header Expanded",
  defaultOpen: true
}, /*#__PURE__*/React.createElement("p", null, "The expanded panel sits below a 1 px divider. Use this for scan-then-drill content like dashboards and service-event lists."))), /*#__PURE__*/React.createElement(SubHeading, null, "Group with counts"), /*#__PURE__*/React.createElement("div", {
  className: "flex flex-col gap-4"
}, /*#__PURE__*/React.createElement(Accordion, {
  title: "In-progress activity",
  meta: /*#__PURE__*/React.createElement(AccordionCount, null, "3")
}), /*#__PURE__*/React.createElement(Accordion, {
  title: "Critical events",
  subtitle: "Requires immediate attention",
  meta: /*#__PURE__*/React.createElement(AccordionCount, {
    tone: "critical"
  }, "2 critical")
}), /*#__PURE__*/React.createElement(Accordion, {
  title: "Your assets",
  meta: /*#__PURE__*/React.createElement(AccordionCount, null, "42")
})));
const TooltipSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "tooltip",
  title: "Tooltip",
  desc: "Soft dark bubble (#3A3A3A) with caret. Hover or focus to show. Plus a rich variant with title + CTA."
}, /*#__PURE__*/React.createElement(SubHeading, null, "Placements"), /*#__PURE__*/React.createElement("div", {
  className: "flex flex-wrap gap-12 py-12"
}, ["top", "bottom", "left", "right"].map(p => /*#__PURE__*/React.createElement(Tooltip, {
  key: p,
  label: `Placement: ${p}`,
  placement: p
}, /*#__PURE__*/React.createElement("button", {
  className: "h-9 px-3.5 rounded border border-[#DCDCDC] bg-white text-[13px] font-semibold cursor-pointer hover:border-[#005BA6] hover:text-[#005BA6]"
}, p)))), /*#__PURE__*/React.createElement(SubHeading, null, "Rich tooltip"), /*#__PURE__*/React.createElement("div", {
  className: "bg-[#1F1F1F] p-8 rounded-md inline-flex"
}, /*#__PURE__*/React.createElement(TooltipRich, {
  title: "Detailed Context",
  body: "Rich tooltips can provide much more data without cluttering the UI. Click \u2018Learn More\u2019 to see details.",
  cta: {
    label: "Learn More"
  }
})));
const StepperSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "stepper",
  title: "Stepper",
  desc: "Multi-step progress. 32 \xD7 32 circles, 2 px PS Blue connector when complete."
}, /*#__PURE__*/React.createElement(SubHeading, null, "Horizontal"), /*#__PURE__*/React.createElement(Stepper, {
  steps: [{
    label: "Part selection",
    status: "complete"
  }, {
    label: "Vendor & shipping",
    status: "complete"
  }, {
    label: "Review",
    status: "current"
  }, {
    label: "Submit",
    status: "pending"
  }]
}), /*#__PURE__*/React.createElement(SubHeading, null, "Vertical"), /*#__PURE__*/React.createElement(Stepper, {
  orientation: "vertical",
  steps: [{
    label: "Verify account",
    sub: "Email confirmed · 03/12/25",
    status: "complete"
  }, {
    label: "Add facility",
    sub: "Tell us where the equipment lives.",
    status: "current"
  }, {
    label: "Invite teammates",
    sub: "Optional · skip for now"
  }, {
    label: "First order",
    sub: "Place your first part order."
  }]
}), /*#__PURE__*/React.createElement(SubHeading, null, "Compact \xB7 dots only"), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 260
  }
}, /*#__PURE__*/React.createElement(Stepper, {
  compact: true,
  steps: [{
    status: "complete"
  }, {
    status: "complete"
  }, {
    status: "current"
  }, {
    status: "pending"
  }, {
    status: "pending"
  }]
})));
const AvatarSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "avatar",
  title: "Avatar",
  desc: "Circular identity marker. Initials, image, or brand mark. 5 sizes, status dot, group stacking."
}, /*#__PURE__*/React.createElement(SubHeading, null, "Sizes"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(Avatar, {
  size: "xs",
  name: "Earl Grey"
}), /*#__PURE__*/React.createElement(Avatar, {
  size: "sm",
  name: "Earl Grey"
}), /*#__PURE__*/React.createElement(Avatar, {
  size: "md",
  name: "Earl Grey"
}), /*#__PURE__*/React.createElement(Avatar, {
  size: "lg",
  name: "Earl Grey"
}), /*#__PURE__*/React.createElement(Avatar, {
  size: "xl",
  name: "Earl Grey"
})), /*#__PURE__*/React.createElement(SubHeading, null, "Tones"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(Avatar, {
  size: "lg",
  name: "Earl Grey",
  tone: "blue"
}), /*#__PURE__*/React.createElement(Avatar, {
  size: "lg",
  name: "Casey Tran",
  tone: "green"
}), /*#__PURE__*/React.createElement(Avatar, {
  size: "lg",
  name: "Jordan Lee",
  tone: "orange"
}), /*#__PURE__*/React.createElement(Avatar, {
  size: "lg",
  name: "Sam Patel",
  tone: "purple"
}), /*#__PURE__*/React.createElement(Avatar, {
  size: "lg",
  name: "Mae Kim",
  tone: "red"
}), /*#__PURE__*/React.createElement(Avatar, {
  size: "lg",
  name: "Riley Chen",
  tone: "neutral"
}), /*#__PURE__*/React.createElement(Avatar, {
  size: "lg",
  initials: "PS",
  tone: "brand"
}), /*#__PURE__*/React.createElement(Avatar, {
  size: "lg",
  initials: "PS",
  tone: "inverse"
})), /*#__PURE__*/React.createElement(SubHeading, null, "Status"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(Avatar, {
  name: "Earl Grey",
  tone: "blue",
  status: "online"
}), /*#__PURE__*/React.createElement(Avatar, {
  name: "Casey Tran",
  tone: "green",
  status: "busy"
}), /*#__PURE__*/React.createElement(Avatar, {
  name: "Jordan Lee",
  tone: "orange",
  status: "away"
}), /*#__PURE__*/React.createElement(Avatar, {
  name: "Riley Chen",
  tone: "neutral",
  status: "offline"
})), /*#__PURE__*/React.createElement(SubHeading, null, "Group"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(AvatarGroup, {
  overflow: 5
}, /*#__PURE__*/React.createElement(Avatar, {
  name: "Earl Grey",
  tone: "blue"
}), /*#__PURE__*/React.createElement(Avatar, {
  name: "Casey Tran",
  tone: "green"
}), /*#__PURE__*/React.createElement(Avatar, {
  name: "Jordan Lee",
  tone: "orange"
}), /*#__PURE__*/React.createElement(Avatar, {
  name: "Sam Patel",
  tone: "purple"
}))));
const DatePickerSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "datepicker",
  title: "Date Picker",
  desc: "Range field with orange calendar trigger and single-month popover. 230 \xD7 48 fields."
}, /*#__PURE__*/React.createElement(DatePicker, {
  title: "Preferred Window"
}));
const SkeletonSection = () => /*#__PURE__*/React.createElement(Section, {
  id: "skeleton",
  title: "Skeleton \xB7 Spinner",
  desc: "Shimmering placeholder primitives + a centered spinner. Both honor prefers-reduced-motion."
}, /*#__PURE__*/React.createElement(SkeletonKeyframes, null), /*#__PURE__*/React.createElement(SubHeading, null, "Primitives"), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-2 gap-6 max-w-[640px]"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Skeleton, {
  shape: "text"
}), /*#__PURE__*/React.createElement("div", {
  className: "text-[11px] text-[#777] mt-2 font-mono"
}, "text")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Skeleton, {
  shape: "title"
}), /*#__PURE__*/React.createElement("div", {
  className: "text-[11px] text-[#777] mt-2 font-mono"
}, "title")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Skeleton, {
  shape: "button"
}), /*#__PURE__*/React.createElement("div", {
  className: "text-[11px] text-[#777] mt-2 font-mono"
}, "button")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Skeleton, {
  shape: "input"
}), /*#__PURE__*/React.createElement("div", {
  className: "text-[11px] text-[#777] mt-2 font-mono"
}, "input")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Skeleton, {
  shape: "circle",
  width: 48,
  height: 48
}), /*#__PURE__*/React.createElement("div", {
  className: "text-[11px] text-[#777] mt-2 font-mono"
}, "circle")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Skeleton, {
  shape: "block"
}), /*#__PURE__*/React.createElement("div", {
  className: "text-[11px] text-[#777] mt-2 font-mono"
}, "block"))), /*#__PURE__*/React.createElement(SubHeading, null, "Spinner"), /*#__PURE__*/React.createElement(Sw, null, /*#__PURE__*/React.createElement(Spinner, null), /*#__PURE__*/React.createElement(Spinner, {
  size: 40
})));
const EmptySection = () => /*#__PURE__*/React.createElement(Section, {
  id: "empty",
  title: "Empty / Error states",
  desc: "Title \u2192 body \u2192 CTA. Empty for first-run and no-results. ErrorPage for 404/500/403/offline."
}, /*#__PURE__*/React.createElement(SubHeading, null, "EmptyState \u2014 First-run"), /*#__PURE__*/React.createElement(EmptyState, {
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 13h6M9 17h6M9 9h2"
  })),
  title: "No quotes yet",
  body: "When you request a quote from a vendor, it'll show up here. Compare line items, add notes, convert any quote into an order.",
  primaryAction: {
    label: "Request a quote"
  },
  secondaryAction: {
    label: "Learn how"
  }
}), /*#__PURE__*/React.createElement(SubHeading, null, "EmptyState \u2014 No results"), /*#__PURE__*/React.createElement(EmptyState, {
  tone: "neutral",
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  })),
  title: "No parts match \"DS-100A\"",
  body: "Try removing a filter, checking the spelling, or searching by manufacturer or item number.",
  primaryAction: {
    label: "Clear filters"
  },
  secondaryAction: {
    label: "Search all categories"
  }
}), /*#__PURE__*/React.createElement(SubHeading, null, "ErrorPage \u2014 404"), /*#__PURE__*/React.createElement(ErrorPage, {
  code: "404",
  title: "We couldn't find that page",
  body: "It may have moved or been deleted. Try going back to your dashboard, or search for the part or order you were looking for.",
  primaryAction: {
    label: "Go to Dashboard"
  },
  secondaryAction: {
    label: "Search Parts"
  }
}), /*#__PURE__*/React.createElement(SubHeading, null, "ErrorPage \u2014 500"), /*#__PURE__*/React.createElement(ErrorPage, {
  icon: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4M12 17h.01"
  })),
  title: "Something broke on our end",
  body: "Your data is safe. Our team has been notified. Try refreshing in a few seconds, or contact support if it keeps happening.",
  primaryAction: {
    label: "Try Again"
  },
  secondaryAction: {
    label: "Contact Support"
  }
}));

// ══════════════════════ APP ══════════════════════

const App = () => {
  const [active, setActive] = React.useState("buttons");
  const scrollTo = id => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
  };
  React.useEffect(() => {
    const onScroll = () => {
      const offsets = SIDEBAR_ITEMS.map(it => {
        const el = document.getElementById(it.id);
        return el ? {
          id: it.id,
          top: el.getBoundingClientRect().top
        } : null;
      }).filter(Boolean);
      const current = offsets.reduce((acc, cur) => cur.top < 120 ? cur : acc, offsets[0]);
      if (current && current.id !== active) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1280px] mx-auto px-10 py-10 font-['Source_Sans_Pro',sans-serif]"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "flex items-center gap-2.5 mb-6 text-[14px] text-[#777]"
  }, /*#__PURE__*/React.createElement("a", {
    href: "../preview/index.html",
    className: "inline-flex items-center gap-1.5 text-[#005BA6] font-semibold no-underline px-2.5 py-1.5 rounded hover:bg-[#EFF9FE] hover:text-[#004A84] transition-colors"
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m12 19-7-7 7-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5"
  })), "Design System"), /*#__PURE__*/React.createElement("span", {
    className: "text-[#CCC] font-light"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: "text-[#2B2B2B] font-semibold"
  }, "Components (React + TS)")), /*#__PURE__*/React.createElement("header", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "m-0 mb-2 text-[32px] font-light text-[#002F48] tracking-[-0.01em]"
  }, "Components"), /*#__PURE__*/React.createElement("p", {
    className: "m-0 max-w-[760px] text-[16px] text-[#4A4A4A] leading-[1.6]"
  }, "Production-ready React + TypeScript + Tailwind components, rebuilt from the Figma design system. Force any state via the ", /*#__PURE__*/React.createElement("code", {
    className: "font-mono text-[12px] bg-[#F1F1F1] px-1.5 py-0.5 rounded text-[#2B2B2B]"
  }, "state"), " prop for screenshots.")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-10"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onClick: scrollTo
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement(ButtonSection, null), /*#__PURE__*/React.createElement(InputSection, null), /*#__PURE__*/React.createElement(CardSection, null), /*#__PURE__*/React.createElement(BadgeSection, null), /*#__PURE__*/React.createElement(AlertSection, null), /*#__PURE__*/React.createElement(SelectionsSection, null), /*#__PURE__*/React.createElement(TabsSection, null), /*#__PURE__*/React.createElement(ModalSection, null), /*#__PURE__*/React.createElement(DrawerSection, null), /*#__PURE__*/React.createElement(TableSection, null), /*#__PURE__*/React.createElement(FilterSection, null), /*#__PURE__*/React.createElement(NavigationSection, null), /*#__PURE__*/React.createElement(CmsSection, null), /*#__PURE__*/React.createElement(BreadcrumbSection, null), /*#__PURE__*/React.createElement(PaginationSection, null), /*#__PURE__*/React.createElement(AccordionSection, null), /*#__PURE__*/React.createElement(TooltipSection, null), /*#__PURE__*/React.createElement(StepperSection, null), /*#__PURE__*/React.createElement(AvatarSection, null), /*#__PURE__*/React.createElement(DatePickerSection, null), /*#__PURE__*/React.createElement(SkeletonSection, null), /*#__PURE__*/React.createElement(EmptySection, null), /*#__PURE__*/React.createElement("footer", {
    className: "text-[12px] text-[#949494] text-center mt-12"
  }, "PartsSource UI Kit \xB7 22 component families \xB7 React + TypeScript + Tailwind"))));
};
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Showcase.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Table.tsx
try { (() => {
// ──────────────────────────────────────────────────────────────────
// Table.tsx — PartsSource Design System
//
// Data table with sort, row selection, row click, and an empty state.
// 13px Source Sans Pro, 12px uppercase column headers. Striped rows
// optional via the `striped` prop.
//
// Pulled from preview/tables.html.
// ──────────────────────────────────────────────────────────────────

const cxTable = (...parts) => parts.filter(Boolean).join(" ");
function Table({
  columns,
  data,
  getRowId = row => row.id,
  onRowClick,
  selectedIds,
  onSelectionChange,
  striped = false,
  emptyState,
  className = ""
}) {
  const [sort, setSort] = React.useState(null);
  const sorted = React.useMemo(() => {
    if (!sort) return data;
    return [...data].sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      if (av === bv) return 0;
      const cmp = av > bv ? 1 : -1;
      return sort.dir === "asc" ? cmp : -cmp;
    });
  }, [data, sort]);
  const isControlledSelection = selectedIds !== undefined;
  const [internalSelected, setInternalSelected] = React.useState([]);
  const selected = isControlledSelection ? selectedIds : internalSelected;
  const setSelected = next => {
    if (!isControlledSelection) setInternalSelected(next);
    onSelectionChange?.(next);
  };
  const toggleRow = id => {
    setSelected(selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id]);
  };
  const allSelected = data.length > 0 && data.every(r => selected.includes(getRowId(r)));
  const someSelected = !allSelected && data.some(r => selected.includes(getRowId(r)));
  const toggleAll = () => {
    setSelected(allSelected ? [] : data.map(getRowId));
  };
  const onSortClick = key => {
    setSort(cur => {
      if (!cur || cur.key !== key) return {
        key,
        dir: "asc"
      };
      if (cur.dir === "asc") return {
        key,
        dir: "desc"
      };
      return null;
    });
  };
  if (data.length === 0 && emptyState) {
    return /*#__PURE__*/React.createElement("div", {
      className: cxTable("border border-[#E5E7EB] rounded-md overflow-hidden bg-white", className)
    }, emptyState);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: cxTable("border border-[#E5E7EB] rounded-md overflow-hidden bg-white font-['Source_Sans_Pro',sans-serif]", className)
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full border-collapse text-[13px] text-[#1F2937]"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "bg-[#F4F6F8] text-left"
  }, onSelectionChange && /*#__PURE__*/React.createElement("th", {
    className: "w-10 p-3 border-b border-[#E5E7EB]"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allSelected,
    ref: el => {
      if (el) el.indeterminate = someSelected;
    },
    onChange: toggleAll,
    className: "accent-[#005BA6] w-4 h-4 cursor-pointer"
  })), columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col.key,
    onClick: col.sortable ? () => onSortClick(col.key) : undefined,
    className: cxTable("p-3 text-[11px] font-bold tracking-[0.5px] uppercase text-[#5C5C5C] border-b border-[#E5E7EB]", col.sortable && "cursor-pointer hover:text-[#005BA6] select-none", col.align === "right" && "text-right", col.align === "center" && "text-center"),
    style: {
      width: col.width
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center gap-1"
  }, col.header, col.sortable && /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 4L5 1.5 7.5 4",
    stroke: "currentColor",
    strokeWidth: "1.2",
    opacity: sort?.key === col.key && sort.dir === "asc" ? 1 : 0.35
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6L5 8.5 7.5 6",
    stroke: "currentColor",
    strokeWidth: "1.2",
    opacity: sort?.key === col.key && sort.dir === "desc" ? 1 : 0.35
  }))))))), /*#__PURE__*/React.createElement("tbody", null, sorted.map((row, i) => {
    const id = getRowId(row);
    const isSelected = selected.includes(id);
    return /*#__PURE__*/React.createElement("tr", {
      key: id,
      onClick: onRowClick ? () => onRowClick(row) : undefined,
      className: cxTable("border-b border-[#F1F1F1] last:border-b-0", onRowClick && "cursor-pointer", striped && i % 2 === 1 && "bg-[#FAFBFC]", isSelected ? "bg-[#E5F4FF]" : "hover:bg-[#F4F8FB]")
    }, onSelectionChange && /*#__PURE__*/React.createElement("td", {
      className: "p-3",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: isSelected,
      onChange: () => toggleRow(id),
      className: "accent-[#005BA6] w-4 h-4 cursor-pointer"
    })), columns.map(col => /*#__PURE__*/React.createElement("td", {
      key: col.key,
      className: cxTable("p-3 text-[#1F2937]", col.align === "right" && "text-right", col.align === "center" && "text-center")
    }, col.render ? col.render(row) : row[col.key])));
  }))));
}
if (typeof window !== "undefined") {
  Object.assign(window, {
    Table
  });
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Table.tsx", error: String((e && e.message) || e) }); }

// UI Kit/Tabs.tsx
try { (() => {
// ════════════════════════════════════════════════════════════════
// AUTO-GENERATED FROM src/ — do NOT hand-edit.
// Source: UI Kit/src/Tabs.tsx · run `npm run sync:browser`.
// ════════════════════════════════════════════════════════════════
// ──────────────────────────────────────────────────────────────────
// Tabs.tsx — PartsSource Design System
//
// FolderTabs:    Page-level sub-nav. Active tab lifts above a divider
//                with a 3px brand-blue top border and 1px gray side
//                borders. Inactive tabs sit borderless on the divider.
// SegmentedTabs: Compact icon-only switcher inside a single rounded
//                container; the active half is white.
// PillTabs:      Multi-select chip row for filtering, fully rounded.
//
// Pulled from preview/tabs.html.
// ──────────────────────────────────────────────────────────────────

const cxTab = (...parts) => parts.filter(Boolean).join(" ");
const useActive = (defaultId, controlled) => {
  const [internal, setInternal] = React.useState(defaultId ?? "");
  const isControlled = controlled !== undefined;
  const value = isControlled ? controlled : internal;
  const set = id => {
    if (!isControlled) setInternal(id);
  };
  return [value, set];
};

// ── FolderTabs ───────────────────────────────────────────────────
const FolderTabs = ({
  items,
  activeId,
  defaultActiveId,
  onChange,
  className = ""
}) => {
  const [active, setActive] = useActive(defaultActiveId ?? items[0]?.id, activeId);
  return /*#__PURE__*/React.createElement("div", {
    className: cxTab("flex items-end font-['Source_Sans_Pro','Source_Sans_3',sans-serif]", className),
    style: {
      paddingTop: 6,
      borderBottom: "1px solid var(--ps-prim-gray-225)"
    }
  }, items.map(item => {
    const isActive = active === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      type: "button",
      role: "tab",
      "aria-selected": isActive,
      disabled: item.disabled,
      onClick: () => {
        if (item.disabled) return;
        setActive(item.id);
        onChange?.(item.id);
      },
      className: cxTab("relative inline-flex items-center gap-2 px-6 text-[16px] cursor-pointer", "rounded-t-[2px]", isActive ? "text-[var(--ps-prim-gray-900)] font-bold" : "text-[var(--ps-prim-gray-900)] hover:text-[var(--ps-prim-blue-500)] font-normal", item.disabled && "text-[var(--ps-prim-gray-400)] cursor-not-allowed hover:text-[var(--ps-prim-gray-400)]"),
      style: isActive ? {
        height: 46,
        background: "white",
        borderTop: "3px solid var(--ps-prim-blue-500)",
        borderLeft: "1px solid var(--ps-prim-gray-225)",
        borderRight: "1px solid var(--ps-prim-gray-225)",
        borderBottom: 0,
        marginBottom: -1
      } : {
        height: 40,
        background: "transparent",
        border: "1px solid transparent",
        borderBottom: 0,
        marginBottom: 0
      }
    }, item.label, item.count !== undefined && /*#__PURE__*/React.createElement("span", {
      className: cxTab("inline-flex items-center justify-center text-[12px] font-bold", "bg-[var(--ps-prim-gray-300)] text-[var(--ps-prim-gray-900)]"),
      style: {
        minWidth: 22,
        height: 20,
        padding: "0 7px",
        borderRadius: 30
      }
    }, item.count));
  }));
};

// ── SegmentedTabs ────────────────────────────────────────────────
const SegmentedTabs = ({
  items,
  activeId,
  defaultActiveId,
  onChange,
  className = ""
}) => {
  const [active, setActive] = useActive(defaultActiveId ?? items[0]?.id, activeId);
  return /*#__PURE__*/React.createElement("div", {
    className: cxTab("inline-flex h-9 border border-[var(--ps-prim-gray-225)] rounded-md overflow-hidden bg-white", "font-['Source_Sans_Pro',sans-serif]", className)
  }, items.map((item, i) => {
    const isActive = active === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      type: "button",
      disabled: item.disabled,
      onClick: () => {
        if (item.disabled) return;
        setActive(item.id);
        onChange?.(item.id);
      },
      className: cxTab("inline-flex items-center justify-center min-w-[42px] h-full px-2.5 cursor-pointer text-[13px] font-semibold", "border-0", i > 0 && "border-l border-[var(--ps-prim-gray-225)]", isActive ? "bg-white text-[var(--ps-prim-gray-900)]" : "bg-[var(--ps-prim-gray-150)] text-[var(--ps-prim-gray-800)] hover:bg-[var(--ps-prim-gray-200)]", item.disabled && "opacity-40 cursor-not-allowed")
    }, item.icon, item.label && /*#__PURE__*/React.createElement("span", {
      className: "ml-1.5"
    }, item.label));
  }));
};

// ── PillTabs ─────────────────────────────────────────────────────
const PillTabs = ({
  items,
  activeId,
  defaultActiveId,
  onChange,
  className = ""
}) => {
  const [active, setActive] = useActive(defaultActiveId ?? items[0]?.id, activeId);
  return /*#__PURE__*/React.createElement("div", {
    className: cxTab("flex gap-2 flex-wrap font-['Source_Sans_Pro',sans-serif]", className)
  }, items.map(item => {
    const isActive = active === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      type: "button",
      disabled: item.disabled,
      onClick: () => {
        if (item.disabled) return;
        setActive(item.id);
        onChange?.(item.id);
      },
      className: cxTab("inline-flex items-center gap-1.5 h-[30px] px-3.5 rounded-[30px] border text-[14px] cursor-pointer", isActive ? "bg-[var(--ps-prim-blue-500)] border-[var(--ps-prim-blue-500)] text-white" : "bg-white border-[var(--ps-prim-gray-400)] text-[var(--ps-prim-gray-800)] hover:border-[var(--ps-prim-blue-500)] hover:text-[var(--ps-prim-blue-500)]", item.disabled && "opacity-40 cursor-not-allowed")
    }, item.label, item.count !== undefined && /*#__PURE__*/React.createElement("span", {
      className: cxTab("min-w-[22px] h-5 px-1.5 rounded-[30px] text-[12px] font-bold inline-flex items-center justify-center", isActive ? "bg-white/25 text-inherit" : "bg-[var(--ps-prim-gray-300)] text-[var(--ps-prim-gray-900)]")
    }, item.count));
  }));
};
const Tabs = {
  FolderTabs,
  SegmentedTabs,
  PillTabs
};

// ── Window export so other Babel-loaded scripts can read these ───

if (typeof window !== "undefined") {
  Object.assign(window, {
    FolderTabs,
    SegmentedTabs,
    PillTabs
  });
}
Object.assign(__ds_scope, { FolderTabs, SegmentedTabs, PillTabs, Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/Tabs.tsx", error: String((e && e.message) || e) }); }

// UI Kit/eslint-config/index.cjs
try { (() => {
/* eslint-env node */
/**
 * @partssource/eslint-config
 *
 * Drop-in ESLint config for any app that consumes the PartsSource React Kit.
 * Its job: make design-system drift fail the build in the CONSUMING app, the
 * same way it does inside the kit itself.
 *
 * The core rule bans raw hex color codes — app developers must use token
 * variables (`var(--ps-prim-*)`, `var(--ps-sem-*)`) instead of inventing
 * colors. If a needed color doesn't exist, the fix is a PR to the kit's
 * tokens.css, not a one-off hex in an app.
 *
 * Usage in a consuming app's .eslintrc.cjs:
 *
 *   module.exports = {
 *     extends: ['@partssource'],
 *   };
 */
module.exports = {
  rules: {
    'no-restricted-syntax': ['error', {
      selector: "Literal[value=/#[0-9a-fA-F]{3,8}\\b/]",
      message: 'Raw hex color codes are not allowed. Use a PartsSource token: var(--ps-prim-*), var(--ps-sem-*), or var(--ps-cmp-*). Need a new color? Add it to the kit\u2019s tokens.css and release a new version \u2014 don\u2019t inline a hex.'
    }, {
      selector: "JSXAttribute[name.name=/^(fill|stroke|color)$/] > Literal[value=/#[0-9a-fA-F]{3,8}/]",
      message: 'Raw hex in a JSX color attribute is not allowed. Reference a PartsSource token instead.'
    }, {
      selector: "TemplateElement[value.raw=/#[0-9a-fA-F]{3,8}\\b/]",
      message: 'Raw hex in a template literal is not allowed. Reference a PartsSource token instead.'
    }]
  },
  overrides: [{
    files: ['**/*.stories.*', '**/*.test.*'],
    rules: {
      'no-restricted-syntax': 'off'
    }
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/eslint-config/index.cjs", error: String((e && e.message) || e) }); }

// UI Kit/tailwind.config.js
try { (() => {
/**
 * Tailwind config for the PartsSource React + TS Kit.
 * Mirrors the inline config currently in `index.html`.
 *
 * Build the static CSS with:
 *   npx tailwindcss -c tailwind.config.js -i tailwind-input.css -o tailwind.css --minify
 *
 * Then drop `tailwind.css` into this folder and the standalone HTML
 * will pick it up via <link rel="stylesheet" href="tailwind.css">.
 */
module.exports = {
  // Scan every .tsx in this folder AND src/ so JIT picks up arbitrary values
  // like bg-[#005BA6], h-[760px], shadow-[0_0_10px_5px_rgba(0,91,166,0.5)], etc.
  content: ['./*.tsx', './*.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ps-blue': {
          50: '#EFF9FE',
          100: '#D0EDFC',
          200: '#B0C6D3',
          400: '#009CF4',
          500: '#005BA6',
          600: '#004A84',
          700: '#003763',
          800: '#002F48'
        },
        'ps-gray': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          150: '#F1F1F1',
          200: '#E6E6E6',
          300: '#DCDCDC',
          400: '#CCCCCC',
          500: '#949494',
          600: '#777777',
          700: '#4A4A4A',
          800: '#2B2B2B'
        },
        'ps-orange': {
          400: '#FF9505',
          500: '#EC8000',
          600: '#D27200'
        }
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'Source Sans 3', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/tailwind.config.js", error: String((e && e.message) || e) }); }

// UI Kit/tokens.ts
try { (() => {
/* ================================================================
   PartsSource Design System — TypeScript design tokens
   Mirror of tokens.css for component consumption.
   ================================================================ */

// ── Brand Blue ramp ──────────────────────────────────────────────
const psBlue = {
  50: "#EFF9FE",
  100: "#D0EDFC",
  150: "#DCEAED",
  200: "#B0C6D3",
  300: "#6AC7FC",
  400: "#009CF4",
  500: "#005BA6",
  // PS Blue — brand anchor
  600: "#004A84",
  700: "#003763",
  800: "#002F48",
  // Midnight
  900: "#001D2E"
};

// ── Neutral / Gray ramp ──────────────────────────────────────────
const psGray = {
  0: "#FFFFFF",
  50: "#FAFAFA",
  100: "#F5F5F5",
  150: "#F1F1F1",
  200: "#E6E6E6",
  300: "#DCDCDC",
  400: "#CCCCCC",
  500: "#949494",
  600: "#777777",
  650: "#5C5C5C",
  700: "#4A4A4A",
  800: "#2B2B2B",
  900: "#000000"
};

// ── Orange (deprecated CTAs only) ────────────────────────────────
const psOrange = {
  50: "#FFF4E5",
  100: "#FFCA82",
  400: "#FF9505",
  500: "#EC8000",
  600: "#D27200"
};

// ── Status colors ────────────────────────────────────────────────
const psStatus = {
  successFg: "#0E7C55",
  successBg: "#E2F5EE",
  errorFg: "#E00000",
  errorBg: "#FEF0F0",
  warningFg: "#B45309",
  warningBg: "#FEF4E5",
  infoFg: "#005BA6",
  infoBg: "#EFF9FE"
};
// Force-load Tailwind classes used dynamically (safelist hints — referenced for grep).
const _safelist = "";

// Re-export for window scope so Babel-loaded scripts can share.

if (typeof window !== "undefined") {
  window.psTokens = {
    psBlue,
    psGray,
    psOrange,
    psStatus
  };
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "UI Kit/tokens.ts", error: String((e && e.message) || e) }); }

// preview/drawer-builder.jsx
try { (() => {
/* Drawer Builder — section-based composer
   ============================================================
   Lets the user assemble a drawer body from real PartsSource
   drawer patterns: copy blocks, form fields, search, lists,
   tables, step pills, etc. Each section is editable, reorderable,
   removable. Live preview + generated JSX update in real time.
   ============================================================ */

const {
  useState,
  useEffect,
  useRef
} = React;

// ---------- icons ----------
const Icon = {
  X: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "16",
    height: "16"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })),
  Xclose: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "18",
    height: "18"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })),
  Plus: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "16",
    height: "16"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  })),
  Up: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "13",
    height: "13"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "18 15 12 9 6 15"
  })),
  Down: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "13",
    height: "13"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })),
  Trash: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "13",
    height: "13"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
  })),
  Search: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "14",
    height: "14"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.5",
    y2: "16.5"
  })),
  Chevron: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "16",
    height: "16"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))
};

// ---------- helpers ----------
let uid = 0;
const gen = () => 's_' + (++uid).toString(36);
const escAttr = s => String(s ?? '').replace(/"/g, '\\"');
const indent = (s, n) => s.split('\n').map(l => ' '.repeat(n) + l).join('\n');

// ---------- atoms ----------
const Seg = ({
  value,
  onChange,
  options
}) => /*#__PURE__*/React.createElement("div", {
  className: "db-seg",
  role: "tablist"
}, options.map(o => /*#__PURE__*/React.createElement("button", {
  key: o.value,
  role: "tab",
  "aria-selected": value === o.value,
  className: value === o.value ? 'on' : '',
  onClick: () => onChange(o.value)
}, o.label)));
const Field = ({
  label,
  children
}) => /*#__PURE__*/React.createElement("div", {
  className: "db-tweak"
}, /*#__PURE__*/React.createElement("label", {
  className: "k"
}, label), children);
const Check = ({
  label,
  value,
  onChange
}) => /*#__PURE__*/React.createElement("label", {
  className: "db-check"
}, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("button", {
  type: "button",
  role: "switch",
  "aria-checked": value,
  className: 'toggle' + (value ? ' is-on' : ''),
  onClick: () => onChange(!value)
}));

// ---------- section registry ----------
// Each section has: id, type, props
//   render(props)            → preview JSX
//   edit(props, onChange)    → tweaks-panel editor JSX
//   code(props)              → JSX string for codebox
//   make()                   → default props

const REGISTRY = {
  heading: {
    label: 'Heading',
    icon: 'H',
    make: () => ({
      text: 'Section heading'
    }),
    render: p => /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: '8px 0 0',
        font: '600 16px/1.3 var(--ps-font-sans)',
        color: '#2B2B2B'
      }
    }, p.text),
    edit: (p, on) => /*#__PURE__*/React.createElement(Field, {
      label: "Text"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: p.text,
      onChange: e => on({
        ...p,
        text: e.target.value
      })
    })),
    code: p => `<h4 className="text-lg font-semibold text-grey-1">${escapeText(p.text)}</h4>`
  },
  paragraph: {
    label: 'Paragraph',
    icon: '¶',
    make: () => ({
      text: 'Body copy explaining what this drawer does. Keep it short — one or two sentences.'
    }),
    render: p => /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: '15px/1.5 var(--ps-font-sans)',
        color: '#4A4A4A'
      }
    }, p.text),
    edit: (p, on) => /*#__PURE__*/React.createElement(Field, {
      label: "Body"
    }, /*#__PURE__*/React.createElement("textarea", {
      value: p.text,
      onChange: e => on({
        ...p,
        text: e.target.value
      })
    })),
    code: p => `<p className="text-md text-grey-2">${escapeText(p.text)}</p>`
  },
  input: {
    label: 'Text input',
    icon: 'I',
    make: () => ({
      label: 'Field label',
      value: ''
    }),
    render: p => /*#__PURE__*/React.createElement("div", {
      className: 'input-wrap' + (p.value ? ' has-value' : '')
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      defaultValue: p.value,
      key: p.value
    }), /*#__PURE__*/React.createElement("label", {
      className: p.value ? 'has-value' : ''
    }, p.label)),
    edit: (p, on) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
      label: "Label"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: p.label,
      onChange: e => on({
        ...p,
        label: e.target.value
      })
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Value"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: p.value,
      onChange: e => on({
        ...p,
        value: e.target.value
      })
    }))),
    code: p => `<TextInput label="${escAttr(p.label)}" value={${jsonish(p.value)}} onChange={setX} />`
  },
  textarea: {
    label: 'Textarea',
    icon: 'T',
    make: () => ({
      label: 'Description',
      value: ''
    }),
    render: p => /*#__PURE__*/React.createElement("div", {
      className: 'input-wrap input-wrap--textarea' + (p.value ? ' has-value' : '')
    }, /*#__PURE__*/React.createElement("textarea", {
      defaultValue: p.value,
      key: p.value
    }), /*#__PURE__*/React.createElement("label", {
      className: p.value ? 'has-value' : ''
    }, p.label)),
    edit: (p, on) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
      label: "Label"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: p.label,
      onChange: e => on({
        ...p,
        label: e.target.value
      })
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Value"
    }, /*#__PURE__*/React.createElement("textarea", {
      value: p.value,
      onChange: e => on({
        ...p,
        value: e.target.value
      })
    }))),
    code: p => `<Textarea label="${escAttr(p.label)}" value={${jsonish(p.value)}} onChange={setX} />`
  },
  'form-fields': {
    label: 'Form fields (Name + Desc + Status)',
    icon: 'F',
    make: () => ({}),
    render: () => /*#__PURE__*/React.createElement("div", {
      className: "form-stack"
    }, /*#__PURE__*/React.createElement("div", {
      className: "input-wrap"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text"
    }), /*#__PURE__*/React.createElement("label", null, "Name")), /*#__PURE__*/React.createElement("div", {
      className: "input-wrap input-wrap--textarea"
    }, /*#__PURE__*/React.createElement("textarea", null), /*#__PURE__*/React.createElement("label", null, "Description")), /*#__PURE__*/React.createElement("div", {
      className: "field field--row",
      style: {
        marginBottom: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "field__label"
    }, "Status"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "toggle is-on",
      "aria-pressed": "true"
    }))),
    edit: () => /*#__PURE__*/React.createElement("p", {
      className: "db-empty"
    }, "Pulls in ", /*#__PURE__*/React.createElement("code", null, "name"), ", ", /*#__PURE__*/React.createElement("code", null, "description"), ", and ", /*#__PURE__*/React.createElement("code", null, "is_active"), " per ", /*#__PURE__*/React.createElement("code", null, "CreateBundleDrawer"), "."),
    code: () => `<NameDescStatusFields {...state} />`
  },
  search: {
    label: 'Search input',
    icon: '⌕',
    make: () => ({
      placeholder: 'Search by title or procedure'
    }),
    render: p => /*#__PURE__*/React.createElement("div", {
      className: "input-wrap"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text"
    }), /*#__PURE__*/React.createElement("label", null, p.placeholder)),
    edit: (p, on) => /*#__PURE__*/React.createElement(Field, {
      label: "Placeholder"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: p.placeholder,
      onChange: e => on({
        ...p,
        placeholder: e.target.value
      })
    })),
    code: p => `<SearchInput value={query} onChange={setQuery} placeholder="${escAttr(p.placeholder)}" />`
  },
  pills: {
    label: 'Step pills',
    icon: '○',
    make: () => ({
      steps: ['Modules', 'Profiles', 'Confirm'],
      current: 0
    }),
    render: p => /*#__PURE__*/React.createElement("div", {
      className: "db-pills"
    }, p.steps.map((s, i) => {
      const isCurrent = i === p.current;
      const isVisited = i < p.current;
      return /*#__PURE__*/React.createElement("span", {
        key: i,
        className: 'pill' + (isCurrent ? ' is-current' : isVisited ? ' is-visited' : '')
      }, /*#__PURE__*/React.createElement("span", null, i + 1), /*#__PURE__*/React.createElement("span", null, s));
    })),
    edit: (p, on) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
      label: "Steps (one per line)"
    }, /*#__PURE__*/React.createElement("textarea", {
      value: p.steps.join('\n'),
      onChange: e => on({
        ...p,
        steps: e.target.value.split('\n').filter(Boolean)
      })
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Current"
    }, /*#__PURE__*/React.createElement("select", {
      value: p.current,
      onChange: e => on({
        ...p,
        current: Number(e.target.value)
      })
    }, p.steps.map((s, i) => /*#__PURE__*/React.createElement("option", {
      key: i,
      value: i
    }, i + 1, " \xB7 ", s))))),
    code: p => `<StepPills
  steps={[${p.steps.map(s => `{ id: '${slug(s)}', label: '${escAttr(s)}' }`).join(', ')}]}
  currentIndex={${p.current}}
  onJumpBack={goToStep}
  lockedIndices={new Set()}
/>`
  },
  list: {
    label: 'Pickable list',
    icon: '☰',
    make: () => ({
      items: [{
        title: 'Infusion Pump Preventive Maintenance',
        meta: 'Interactive · 12 sections'
      }, {
        title: 'Ventilator Safety Checks',
        meta: 'Interactive · 9 sections'
      }, {
        title: 'Defibrillator OEM Service',
        meta: 'Interactive · 14 sections'
      }]
    }),
    render: p => /*#__PURE__*/React.createElement("div", null, p.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      className: "db-list-row",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "db-list-row__main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "db-list-row__title"
    }, it.title), /*#__PURE__*/React.createElement("div", {
      className: "db-list-row__meta"
    }, it.meta)), /*#__PURE__*/React.createElement("button", {
      className: "db-icon-btn",
      "aria-label": "Add"
    }, Icon.Plus)))),
    edit: (p, on) => /*#__PURE__*/React.createElement(ItemEditor, {
      items: p.items,
      onChange: items => on({
        ...p,
        items
      })
    }),
    code: p => `{items.map((m) => (
  <AddEntityCard key={m.id} onClick={() => add(m)}>
    <ModuleInfoBlock module={m} />
  </AddEntityCard>
))}`
  },
  selected: {
    label: 'Selected items (recap)',
    icon: '✓',
    make: () => ({
      label: '2 selected',
      items: [{
        title: 'Earl Grey',
        meta: 'earl@partssource.com'
      }, {
        title: 'Logan Cole',
        meta: 'logan@partssource.com'
      }],
      withAvatars: true,
      withRemove: true
    }),
    render: p => /*#__PURE__*/React.createElement("div", null, p.label && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 8px',
        font: '600 15px/1.3 var(--ps-font-sans)',
        color: '#2B2B2B'
      }
    }, p.label), p.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      className: "db-list-row",
      key: i
    }, p.withAvatars && /*#__PURE__*/React.createElement("div", {
      className: "db-avatar"
    }, (it.title || '').split(' ').map(s => s[0]).join('').slice(0, 2)), /*#__PURE__*/React.createElement("div", {
      className: "db-list-row__main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "db-list-row__title"
    }, it.title), /*#__PURE__*/React.createElement("div", {
      className: "db-list-row__meta"
    }, it.meta)), p.withRemove && /*#__PURE__*/React.createElement("button", {
      className: "db-icon-btn db-icon-btn--danger",
      "aria-label": "Remove"
    }, Icon.X)))),
    edit: (p, on) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
      label: "Label (optional)"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: p.label,
      onChange: e => on({
        ...p,
        label: e.target.value
      })
    })), /*#__PURE__*/React.createElement(Check, {
      label: "Show avatars",
      value: p.withAvatars,
      onChange: v => on({
        ...p,
        withAvatars: v
      })
    }), /*#__PURE__*/React.createElement(Check, {
      label: "Show remove (\xD7) button",
      value: p.withRemove,
      onChange: v => on({
        ...p,
        withRemove: v
      })
    }), /*#__PURE__*/React.createElement(ItemEditor, {
      items: p.items,
      onChange: items => on({
        ...p,
        items
      })
    })),
    code: p => {
      const label = p.label ? `<p className="text-md font-semibold text-grey-1">${escapeText(p.label)}</p>\n` : '';
      if (p.withRemove) {
        return `${label}{selected.map((it) => (
  <RemoveEntityCard key={it.id} onClick={() => remove(it)}>
    <ProfileInfoBlock profile={it} />
  </RemoveEntityCard>
))}`;
      }
      return `${label}{items.map((it) => (
  <div key={it.id} className="list-card flex items-center gap-4 max-w-full">
    <div className="flex-1 min-w-0 overflow-hidden">
      <ProfileInfoBlock profile={it} />
    </div>
  </div>
))}`;
    }
  },
  table: {
    label: 'Table',
    icon: '▦',
    make: () => ({
      columns: ['Order #', 'Item', 'Qty'],
      rows: [['64434335', 'Service Kit, Accessory', '1'], ['64434336', 'Mindray DPM 7 Monitor', '2'], ['64434337', 'GE MAC 5500 ECG', '1']]
    }),
    render: p => /*#__PURE__*/React.createElement("table", {
      className: "db-mini-table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, p.columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
      key: i
    }, c)))), /*#__PURE__*/React.createElement("tbody", null, p.rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, p.columns.map((_, j) => /*#__PURE__*/React.createElement("td", {
      key: j
    }, row[j] ?? '')))))),
    edit: (p, on) => /*#__PURE__*/React.createElement(TableEditor, {
      columns: p.columns,
      rows: p.rows,
      onChange: (columns, rows) => on({
        ...p,
        columns,
        rows
      })
    }),
    code: p => `<table className="w-full text-sm">
  <thead><tr>${p.columns.map(c => `<th>${escapeText(c)}</th>`).join('')}</tr></thead>
  <tbody>
${p.rows.map(r => `    <tr>${p.columns.map((_, j) => `<td>${escapeText(r[j] ?? '')}</td>`).join('')}</tr>`).join('\n')}
  </tbody>
</table>`
  },
  divider: {
    label: 'Divider',
    icon: '─',
    make: () => ({}),
    render: () => /*#__PURE__*/React.createElement("hr", {
      style: {
        border: 0,
        borderTop: '1px solid #DCDCDC',
        margin: '8px 0'
      }
    }),
    edit: () => /*#__PURE__*/React.createElement("p", {
      className: "db-empty"
    }, "Horizontal rule."),
    code: () => `<hr className="border-t border-grey-5 my-2" />`
  }
};
const SECTION_ORDER = ['heading', 'paragraph', 'input', 'textarea', 'form-fields', 'search', 'pills', 'list', 'selected', 'table', 'divider'];
function jsonish(v) {
  if (typeof v === 'string') return `"${escAttr(v)}"`;
  return String(v);
}
function escapeText(s) {
  return String(s ?? '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function slug(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ---------- inline editors ----------
function ItemEditor({
  items,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "db-itemed"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "db-itemed__row",
    key: i
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Title",
    value: it.title,
    onChange: e => onChange(items.map((x, j) => j === i ? {
      ...x,
      title: e.target.value
    } : x))
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Meta",
    value: it.meta,
    onChange: e => onChange(items.map((x, j) => j === i ? {
      ...x,
      meta: e.target.value
    } : x))
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-itemed__del",
    onClick: () => onChange(items.filter((_, j) => j !== i)),
    "aria-label": "Delete"
  }, Icon.X))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-itemed__add",
    onClick: () => onChange([...items, {
      title: 'New item',
      meta: ''
    }])
  }, Icon.Plus, /*#__PURE__*/React.createElement("span", null, "Add item")));
}
function TableEditor({
  columns,
  rows,
  onChange
}) {
  const setCol = (idx, val) => onChange(columns.map((c, i) => i === idx ? val : c), rows);
  const setCell = (r, c, val) => onChange(columns, rows.map((row, ri) => ri === r ? row.map((cell, ci) => ci === c ? val : cell) : row));
  const addCol = () => onChange([...columns, 'Column'], rows.map(r => [...r, '']));
  const delCol = idx => onChange(columns.filter((_, i) => i !== idx), rows.map(r => r.filter((_, i) => i !== idx)));
  const addRow = () => onChange(columns, [...rows, columns.map(() => '')]);
  const delRow = idx => onChange(columns, rows.filter((_, i) => i !== idx));
  return /*#__PURE__*/React.createElement("div", {
    className: "db-tabled"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-tabled__row db-tabled__row--head",
    style: {
      '--cols': columns.length
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "db-tabled__col",
    key: i
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: c,
    onChange: e => setCol(i, e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-tabled__del",
    onClick: () => delCol(i),
    "aria-label": "Delete column"
  }, Icon.X))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-tabled__add db-tabled__add--col",
    onClick: addCol,
    title: "Add column"
  }, Icon.Plus)), rows.map((row, ri) => /*#__PURE__*/React.createElement("div", {
    className: "db-tabled__row",
    key: ri,
    style: {
      '--cols': columns.length
    }
  }, columns.map((_, ci) => /*#__PURE__*/React.createElement("input", {
    key: ci,
    type: "text",
    value: row[ci] ?? '',
    onChange: e => setCell(ri, ci, e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-tabled__del db-tabled__del--row",
    onClick: () => delRow(ri),
    "aria-label": "Delete row"
  }, Icon.X))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-tabled__add",
    onClick: addRow
  }, Icon.Plus, /*#__PURE__*/React.createElement("span", null, "Add row")));
}

// ---------- section card in tweaks panel ----------
function SectionEditor({
  section,
  idx,
  total,
  onChange,
  onMove,
  onDelete
}) {
  const [open, setOpen] = useState(idx === total - 1 ? true : false);
  const def = REGISTRY[section.type];
  if (!def) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "db-secedit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-secedit__head"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-secedit__toggle",
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    className: "db-secedit__icon"
  }, def.icon), /*#__PURE__*/React.createElement("span", {
    className: "db-secedit__title"
  }, def.label)), /*#__PURE__*/React.createElement("span", {
    className: "db-secedit__actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-secedit__btn",
    disabled: idx === 0,
    onClick: () => onMove(-1),
    "aria-label": "Move up"
  }, Icon.Up), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-secedit__btn",
    disabled: idx === total - 1,
    onClick: () => onMove(+1),
    "aria-label": "Move down"
  }, Icon.Down), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-secedit__btn db-secedit__btn--del",
    onClick: onDelete,
    "aria-label": "Delete"
  }, Icon.Trash))), open && /*#__PURE__*/React.createElement("div", {
    className: "db-secedit__body"
  }, def.edit(section.props, props => onChange({
    ...section,
    props
  }))));
}

// ---------- add-section dropdown ----------
function AddSection({
  onAdd
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "db-add",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "db-add__btn",
    onClick: () => setOpen(o => !o)
  }, Icon.Plus, /*#__PURE__*/React.createElement("span", null, "Add section")), open && /*#__PURE__*/React.createElement("div", {
    className: "db-add__menu",
    role: "menu"
  }, SECTION_ORDER.map(type => {
    const def = REGISTRY[type];
    return /*#__PURE__*/React.createElement("button", {
      key: type,
      type: "button",
      role: "menuitem",
      className: "db-add__item",
      onClick: () => {
        onAdd(type);
        setOpen(false);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "db-add__icon"
    }, def.icon), /*#__PURE__*/React.createElement("span", null, def.label));
  })));
}

// ---------- preview pieces ----------
const X_ICON = Icon.Xclose;

// ---------- preset starting points ----------
const PRESETS = {
  form: {
    title: 'Create Bundle',
    subtitle: 'Create a content bundle to grant access to modules.',
    showSubtitle: true,
    footer: 'cta',
    primaryLabel: 'Create Bundle',
    sections: [{
      id: gen(),
      type: 'form-fields',
      props: REGISTRY['form-fields'].make()
    }]
  },
  list: {
    title: 'Create Assessment',
    subtitle: 'Select a module to create an assessment.',
    showSubtitle: true,
    footer: 'none',
    primaryLabel: 'Create',
    sections: [{
      id: gen(),
      type: 'list',
      props: REGISTRY.list.make()
    }]
  },
  wizard: (() => {
    const selected = [{
      title: 'Infusion Pump Preventive Maintenance',
      meta: 'Interactive · 12 sections'
    }, {
      title: 'Ventilator Safety Checks',
      meta: 'Interactive · 9 sections'
    }];
    const available = [{
      title: 'Defibrillator OEM Service',
      meta: 'Interactive · 14 sections'
    }, {
      title: 'Patient Monitor Calibration',
      meta: 'Interactive · 7 sections'
    }, {
      title: 'X-Ray Tube Replacement',
      meta: 'Interactive · 8 sections'
    }];
    return {
      title: 'Modules',
      subtitle: 'Select the modules you want to assign and click next.',
      showSubtitle: true,
      footer: 'selection',
      primaryLabel: 'Next',
      selectedItems: selected,
      sections: [{
        id: gen(),
        type: 'pills',
        props: REGISTRY.pills.make()
      }, {
        id: gen(),
        type: 'search',
        props: REGISTRY.search.make()
      }, {
        id: gen(),
        type: 'list',
        props: {
          items: available
        }
      }]
    };
  })(),
  confirm: {
    title: 'Finalize Assignment',
    subtitle: 'Click finalize assignment to create the assignment.',
    showSubtitle: true,
    footer: 'cta',
    primaryLabel: 'Finalize Assignment',
    sections: [{
      id: gen(),
      type: 'pills',
      props: {
        steps: ['Modules', 'Profiles', 'Confirm'],
        current: 2
      }
    }, {
      id: gen(),
      type: 'selected',
      props: {
        label: '2 modules',
        items: REGISTRY.list.make().items.slice(0, 2),
        withAvatars: false,
        withRemove: false
      }
    }, {
      id: gen(),
      type: 'selected',
      props: {
        label: '3 team members',
        items: [{
          title: 'Earl Grey',
          meta: 'earl@partssource.com'
        }, {
          title: 'Logan Cole',
          meta: 'logan@partssource.com'
        }, {
          title: 'Anna Schmidt',
          meta: 'anna@partssource.com'
        }],
        withAvatars: true,
        withRemove: false
      }
    }]
  }
};

// ---------- main ----------
function DrawerBuilder() {
  const [state, setState] = useState({
    isOpen: true,
    showScrim: true,
    drawerState: 'default',
    errorText: 'Something went wrong. Please try again.',
    title: PRESETS.form.title,
    subtitle: PRESETS.form.subtitle,
    showSubtitle: true,
    footer: 'cta',
    primaryLabel: 'Create Bundle',
    primaryStyle: 'primary',
    selectionCount: 2,
    selectedItems: [],
    selectionExpanded: true
  });
  const [sections, setSections] = useState(PRESETS.form.sections);
  const set = (k, v) => setState(s => ({
    ...s,
    [k]: v
  }));
  const loadPreset = key => {
    const p = PRESETS[key];
    if (!p) return;
    setState(s => ({
      ...s,
      title: p.title,
      subtitle: p.subtitle,
      showSubtitle: p.showSubtitle,
      footer: p.footer,
      primaryLabel: p.primaryLabel,
      selectedItems: p.selectedItems || [],
      selectionCount: (p.selectedItems || []).length || s.selectionCount
    }));
    setSections(p.sections.map(s => ({
      ...s,
      id: gen()
    })));
  };
  const addSection = type => {
    const def = REGISTRY[type];
    setSections(s => [...s, {
      id: gen(),
      type,
      props: def.make()
    }]);
  };
  const updateSection = (id, next) => setSections(s => s.map(x => x.id === id ? next : x));
  const moveSection = (id, delta) => setSections(s => {
    const i = s.findIndex(x => x.id === id);
    if (i < 0) return s;
    const j = i + delta;
    if (j < 0 || j >= s.length) return s;
    const next = s.slice();
    [next[i], next[j]] = [next[j], next[i]];
    return next;
  });
  const deleteSection = id => setSections(s => s.filter(x => x.id !== id));
  const code = buildCode(state, sections);
  return /*#__PURE__*/React.createElement("div", {
    className: "db-grid"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "db-tweaks"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-section"
  }, /*#__PURE__*/React.createElement("span", null, "Start from")), /*#__PURE__*/React.createElement("div", {
    className: "db-presets"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => loadPreset('form')
  }, "Form"), /*#__PURE__*/React.createElement("button", {
    onClick: () => loadPreset('list')
  }, "List pick"), /*#__PURE__*/React.createElement("button", {
    onClick: () => loadPreset('wizard')
  }, "Wizard"), /*#__PURE__*/React.createElement("button", {
    onClick: () => loadPreset('confirm')
  }, "Confirm")), /*#__PURE__*/React.createElement("div", {
    className: "db-section"
  }, /*#__PURE__*/React.createElement("span", null, "State")), /*#__PURE__*/React.createElement(Check, {
    label: "Open",
    value: state.isOpen,
    onChange: v => set('isOpen', v)
  }), /*#__PURE__*/React.createElement(Check, {
    label: "Show scrim",
    value: state.showScrim,
    onChange: v => set('showScrim', v)
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Drawer state"
  }, /*#__PURE__*/React.createElement("select", {
    value: state.drawerState,
    onChange: e => set('drawerState', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "default"
  }, "Default"), /*#__PURE__*/React.createElement("option", {
    value: "loading"
  }, "Loading (fetching data)"), /*#__PURE__*/React.createElement("option", {
    value: "empty"
  }, "Empty (no items)"), /*#__PURE__*/React.createElement("option", {
    value: "submitting"
  }, "Submitting (mutation pending)"), /*#__PURE__*/React.createElement("option", {
    value: "error"
  }, "Error (mutation failed)"))), state.drawerState === 'error' && /*#__PURE__*/React.createElement(Field, {
    label: "Error message"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: state.errorText,
    onChange: e => set('errorText', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "db-section"
  }, /*#__PURE__*/React.createElement("span", null, "Header")), /*#__PURE__*/React.createElement(Field, {
    label: "Title"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: state.title,
    onChange: e => set('title', e.target.value)
  })), /*#__PURE__*/React.createElement(Check, {
    label: "Show subtitle",
    value: state.showSubtitle,
    onChange: v => set('showSubtitle', v)
  }), state.showSubtitle && /*#__PURE__*/React.createElement(Field, {
    label: "Subtitle"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: state.subtitle,
    onChange: e => set('subtitle', e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "db-section"
  }, /*#__PURE__*/React.createElement("span", null, "Body \xB7 ", sections.length, " section", sections.length === 1 ? '' : 's')), /*#__PURE__*/React.createElement("div", {
    className: "db-secedit-list"
  }, sections.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "db-empty"
  }, "No sections yet. Add one below."), sections.map((sec, i) => /*#__PURE__*/React.createElement(SectionEditor, {
    key: sec.id,
    section: sec,
    idx: i,
    total: sections.length,
    onChange: next => updateSection(sec.id, next),
    onMove: delta => moveSection(sec.id, delta),
    onDelete: () => deleteSection(sec.id)
  }))), /*#__PURE__*/React.createElement(AddSection, {
    onAdd: addSection
  }), /*#__PURE__*/React.createElement("div", {
    className: "db-section"
  }, /*#__PURE__*/React.createElement("span", null, "Footer")), /*#__PURE__*/React.createElement(Field, {
    label: "Style"
  }, /*#__PURE__*/React.createElement(Seg, {
    value: state.footer,
    onChange: v => set('footer', v),
    options: [{
      value: 'none',
      label: 'None'
    }, {
      value: 'cta',
      label: 'CTA'
    }, {
      value: 'selection',
      label: 'Selection'
    }]
  })), state.footer !== 'none' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Primary label"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: state.primaryLabel,
    onChange: e => set('primaryLabel', e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Primary CTA style"
  }, /*#__PURE__*/React.createElement("select", {
    value: state.primaryStyle,
    onChange: e => set('primaryStyle', e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "primary"
  }, "Primary blue"), /*#__PURE__*/React.createElement("option", {
    value: "pill"
  }, "Orange pill"), /*#__PURE__*/React.createElement("option", {
    value: "pill-amber"
  }, "Amber pill"), /*#__PURE__*/React.createElement("option", {
    value: "danger"
  }, "Danger (red)"), /*#__PURE__*/React.createElement("option", {
    value: "outline"
  }, "Outline")))), state.footer === 'selection' && /*#__PURE__*/React.createElement(Field, {
    label: "Selected count (display)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: state.selectionCount,
    onChange: e => set('selectionCount', Number(e.target.value) || 0)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "db-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc__nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc__logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pc__search"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pc__avatar"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pc__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc__bar w60"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pc__bar w40"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pc__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc__bar w80"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pc__bar w50"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pc__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pc__bar w50"
  }), /*#__PURE__*/React.createElement("div", {
    className: "pc__bar w90"
  }))))), state.showScrim && /*#__PURE__*/React.createElement("div", {
    className: 'scrim' + (state.isOpen ? ' is-open' : ''),
    onClick: () => set('isOpen', false)
  }), /*#__PURE__*/React.createElement("div", {
    className: 'drawer' + (state.isOpen ? ' is-open' : ''),
    role: "dialog",
    "aria-modal": "true",
    "aria-hidden": !state.isOpen
  }, state.footer === 'selection' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "drawer-container drawer-container--flex"
  }, /*#__PURE__*/React.createElement(DrawerHeaderView, {
    state: state,
    onClose: () => set('isOpen', false)
  }), /*#__PURE__*/React.createElement(SectionsView, {
    sections: sections,
    state: state
  })), /*#__PURE__*/React.createElement("div", {
    className: "drawer-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "drawer-footer__head",
    onClick: () => set('selectionExpanded', !state.selectionExpanded)
  }, /*#__PURE__*/React.createElement("span", null, state.selectedItems && state.selectedItems.length || state.selectionCount, " selected"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      transform: state.selectionExpanded ? 'rotate(180deg)' : 'none',
      transition: 'transform 200ms ease'
    }
  }, Icon.Chevron)), state.selectionExpanded && state.selectedItems && state.selectedItems.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      maxHeight: 200,
      overflowY: 'auto'
    }
  }, state.selectedItems.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "db-list-row",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-list-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-list-row__title"
  }, it.title), /*#__PURE__*/React.createElement("div", {
    className: "db-list-row__meta"
  }, it.meta)), /*#__PURE__*/React.createElement("button", {
    className: "db-icon-btn db-icon-btn--danger",
    "aria-label": "Remove"
  }, Icon.X)))), /*#__PURE__*/React.createElement("button", {
    className: 'btn btn--' + state.primaryStyle + (state.primaryStyle === 'pill' || state.primaryStyle === 'pill-amber' ? '' : ' btn--block'),
    disabled: state.drawerState === 'submitting',
    style: state.primaryStyle === 'pill' || state.primaryStyle === 'pill-amber' ? {
      alignSelf: 'stretch',
      width: '100%',
      borderRadius: 9999
    } : {}
  }, state.drawerState === 'submitting' ? /*#__PURE__*/React.createElement("span", {
    className: "db-spinner"
  }) : null, state.primaryLabel))) : /*#__PURE__*/React.createElement("div", {
    className: "drawer-container drawer-container--scroll"
  }, /*#__PURE__*/React.createElement(DrawerHeaderView, {
    state: state,
    onClose: () => set('isOpen', false)
  }), /*#__PURE__*/React.createElement(SectionsView, {
    sections: sections,
    state: state
  }), state.footer === 'cta' && /*#__PURE__*/React.createElement("button", {
    className: 'btn btn--' + state.primaryStyle + (state.primaryStyle === 'pill' || state.primaryStyle === 'pill-amber' ? '' : ' btn--block'),
    style: {
      marginTop: 24,
      ...(state.primaryStyle === 'pill' || state.primaryStyle === 'pill-amber' ? {
        alignSelf: 'center'
      } : {})
    },
    disabled: state.drawerState === 'submitting'
  }, state.drawerState === 'submitting' ? /*#__PURE__*/React.createElement("span", {
    className: "db-spinner"
  }) : null, state.primaryLabel)))), /*#__PURE__*/React.createElement(CodeBox, {
    code: code
  })));
}
function DrawerHeaderView({
  state,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "drawer-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "drawer-header__text"
  }, /*#__PURE__*/React.createElement("h3", null, state.title), state.showSubtitle && state.subtitle && /*#__PURE__*/React.createElement("p", null, state.subtitle)), /*#__PURE__*/React.createElement("button", {
    className: "drawer-header__close",
    "aria-label": "Close",
    onClick: onClose
  }, X_ICON));
}
function ErrorBanner({
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "db-banner db-banner--err",
    role: "alert"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "18",
    height: "18"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  })), /*#__PURE__*/React.createElement("span", null, text));
}
function LoadingBody() {
  return /*#__PURE__*/React.createElement("div", {
    className: "db-skel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-skel__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-skel__bar",
    style: {
      width: '70%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "db-skel__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-skel__bar",
    style: {
      width: '90%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "db-skel__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-skel__bar",
    style: {
      width: '55%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "db-skel__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "db-skel__bar",
    style: {
      width: '80%'
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "db-skel__cap"
  }, "Loading\u2026"));
}
function EmptyBody({
  message
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "db-empty-state"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "32",
    height: "32"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "10",
    width: "18",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "16",
    width: "18",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "3",
    x2: "21",
    y2: "21",
    stroke: "#D14343"
  })), /*#__PURE__*/React.createElement("p", null, message));
}
function SectionsView({
  sections,
  state
}) {
  // State overrides
  if (state && state.drawerState === 'loading') return /*#__PURE__*/React.createElement(LoadingBody, null);
  if (state && state.drawerState === 'empty') {
    return /*#__PURE__*/React.createElement(EmptyBody, {
      message: "No items available."
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, state && state.drawerState === 'error' && /*#__PURE__*/React.createElement(ErrorBanner, {
    text: state.errorText
  }), sections.map(sec => {
    const def = REGISTRY[sec.type];
    if (!def) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: sec.id
    }, def.render(sec.props));
  }));
}
function CodeBox({
  code
}) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {}
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "db-codebox"
  }, /*#__PURE__*/React.createElement("button", {
    className: 'db-copy' + (copied ? ' copied' : ''),
    onClick: onCopy
  }, copied ? 'Copied' : 'Copy'), code);
}
function ctaJsx(state) {
  const label = escAttr(state.primaryLabel);
  switch (state.primaryStyle) {
    case 'pill':
      return `        <Button variant="pill" onClick={onSubmit}>${label}</Button>`;
    case 'pill-amber':
      return `        <Button variant="pillAmber" onClick={onSubmit}>${label}</Button>`;
    case 'danger':
      return `        <Button variant="destructive" onClick={onSubmit} className="w-full sm:w-full mt-2">${label}</Button>`;
    case 'outline':
      return `        <Button variant="outline" onClick={onSubmit} className="w-full sm:w-full mt-2">${label}</Button>`;
    case 'primary':
    default:
      return `        <SubmitButton onClick={onSubmit} className="w-full sm:w-full mt-2">${label}</SubmitButton>`;
  }
}

// ---------- code generator ----------
function buildCode(state, sections) {
  const subtitleAttr = state.showSubtitle && state.subtitle ? `\n          subtitle="${escAttr(state.subtitle)}"` : '';
  const containerCls = state.footer === 'selection' ? 'flex-1 overflow-y-auto' : 'h-full overflow-y-auto';
  const sectionLines = sections.map(s => {
    const def = REGISTRY[s.type];
    return def ? def.code(s.props) : '';
  }).filter(Boolean).map(c => indent(c, 8)).join('\n\n');
  const ctaLine = state.footer === 'cta' ? `\n\n${ctaJsx(state)}` : '';
  if (state.footer === 'selection') {
    return `import { Drawer, DrawerContainer, DrawerHeader } from './drawer';

export function MyDrawer({ isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerContainer className="${containerCls}">
        <DrawerHeader
          title="${escAttr(state.title)}"${subtitleAttr}
          onClose={onClose}
        />

${sectionLines}
      </DrawerContainer>
      <SelectionFooter
        items={selected}
        getId={(i) => i.id}
        onRemove={(i) => remove(i)}
        isLocked={() => false}
        onNext={next}
        nextLabel="${escAttr(state.primaryLabel)}"
        nextDisabled={selected.length === 0}
        renderItem={(i) => <InfoBlock item={i} />}
      />
    </Drawer>
  );
}`;
  }
  return `import { Drawer, DrawerContainer, DrawerHeader } from './drawer';

export function MyDrawer({ isOpen, onClose }) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerContainer className="${containerCls}">
        <DrawerHeader
          title="${escAttr(state.title)}"${subtitleAttr}
          onClose={onClose}
        />

${sectionLines}${ctaLine}
      </DrawerContainer>
    </Drawer>
  );
}`;
}

// ---------- mount ----------
const root = ReactDOM.createRoot(document.getElementById('db-root'));
root.render(/*#__PURE__*/React.createElement(DrawerBuilder, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "preview/drawer-builder.jsx", error: String((e && e.message) || e) }); }

// preview/tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  noDeckControls = false,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(() => typeof document !== 'undefined' && !!document.querySelector('deck-stage'), []);
  // deck-stage enables its rail in connectedCallback, but this panel can
  // mount before that element has upgraded. The initial read catches the
  // common case; the listener covers mounting first. (Older deck-stage.js
  // copies still wait for the host's __omelette_rail_enabled postMessage —
  // same listener handles those.)
  const [railEnabled, setRailEnabled] = React.useState(() => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled);
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = e => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem('deck-stage.railVisible') !== '0';
    } catch (e) {
      return true;
    }
  });
  const toggleRail = on => {
    setRailVisible(on);
    window.postMessage({
      type: '__deck_rail_visible',
      on
    }, '*');
  };
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children, hasDeckStage && railEnabled && !noDeckControls && /*#__PURE__*/React.createElement(TweakSection, {
    label: "Deck"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Thumbnail rail",
    value: railVisible,
    onChange: toggleRail
  })))));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "preview/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// style-dictionary.config.js
try { (() => {
/**
 * PartsSource Design System — Style Dictionary Config
 * Style Dictionary v3 + Token Studio DTCG format ($value/$type)
 */

const StyleDictionary = require('style-dictionary');

// ——— DTCG Parser ————————————————————————————————————————————————
// Converts Token Studio $value/$type to SD value/type recursively

function transformDTCG(node, parentType) {
  if (typeof node !== 'object' || node === null) return node;
  if ('$value' in node) {
    var token = {
      value: node.$value
    };
    if (node.$type || parentType) token.type = node.$type || parentType;
    if (node.$description) token.comment = node.$description;
    return token;
  }
  var result = {};
  var groupType = node.$type || parentType;
  var keys = Object.keys(node);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key.charAt(0) === '$') continue;
    if (typeof node[key] === 'object' && node[key] !== null) {
      result[key] = transformDTCG(node[key], groupType);
    }
  }
  return result;
}
StyleDictionary.registerParser({
  pattern: /\.json$/,
  parse: function (args) {
    try {
      return transformDTCG(JSON.parse(args.contents));
    } catch (e) {
      console.error('Parse error:', e.message);
      return {};
    }
  }
});

// ——— Custom transforms ————————————————————————————————————————————

StyleDictionary.registerTransform({
  name: 'ps/font-size-rem',
  type: 'value',
  matcher: function (token) {
    return token.type === 'fontSizes' && typeof token.value === 'string' && token.value.endsWith('px');
  },
  transformer: function (token) {
    return parseFloat(token.value) / 16 + 'rem';
  }
});

// ——— Transform groups ————————————————————————————————————————————

StyleDictionary.registerTransformGroup({
  name: 'ps/css',
  transforms: ['attribute/cti', 'name/cti/kebab', 'color/css', 'ps/font-size-rem']
});
StyleDictionary.registerTransformGroup({
  name: 'ps/typescript',
  transforms: ['attribute/cti', 'name/cti/camel', 'color/css']
});

// ——— Formats ——————————————————————————————————————————————————————

StyleDictionary.registerFormat({
  name: 'ps/css-variables',
  formatter: function (args) {
    var vars = args.dictionary.allTokens.map(function (token) {
      return '  --' + token.name + ': ' + token.value + ';';
    }).join('\n');
    return ':root {\n' + vars + '\n}\n';
  }
});
StyleDictionary.registerFormat({
  name: 'ps/typescript-tokens',
  formatter: function (args) {
    var entries = args.dictionary.allTokens.map(function (token) {
      return "  '" + token.name + "': " + JSON.stringify(token.value) + ',';
    }).join('\n');
    return '/** Auto-generated by Style Dictionary — DO NOT EDIT */\nexport const tokens = {\n' + entries + '\n} as const;\n\nexport type TokenName = keyof typeof tokens;\n';
  }
});

// ——— Build ————————————————————————————————————————————————————————

var sd = StyleDictionary.extend({
  source: ['tokens/ps-tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'ps/css',
      buildPath: 'src/tokens/',
      files: [{
        destination: 'tokens.css',
        format: 'ps/css-variables',
        filter: function (token) {
          return ['primitive', 'semantic'].includes(token.path[0]);
        }
      }]
    },
    typescript: {
      transformGroup: 'ps/typescript',
      buildPath: 'src/tokens/',
      files: [{
        destination: 'tokens.ts',
        format: 'ps/typescript-tokens',
        filter: function (token) {
          return ['primitive', 'semantic'].includes(token.path[0]);
        }
      }]
    }
  }
});
sd.buildAllPlatforms();
})(); } catch (e) { __ds_ns.__errors.push({ path: "style-dictionary.config.js", error: String((e && e.message) || e) }); }

// ui_kits/ps-marketplace/Cart.jsx
try { (() => {
function Cart({
  items,
  onClose,
  onRemove,
  onCheckout
}) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 400,
      background: '#fff',
      boxShadow: '-6px 0 20px rgba(0,47,72,.18)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      borderBottom: '1px solid #DCDCDC',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 300,
      color: '#002F48',
      margin: 0
    }
  }, "Your cart"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#777'
    }
  }, items.length, " item", items.length !== 1 ? 's' : '')), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 0,
      fontSize: 22,
      color: '#777',
      cursor: 'pointer'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '12px 24px'
    }
  }, items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      color: '#777',
      fontSize: 14
    }
  }, "Your cart is empty."), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 0',
      borderBottom: '1px solid #F1F1F1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      background: '#DCEAED',
      borderRadius: 4,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#87AFB8',
      fontSize: 11,
      fontWeight: 300,
      letterSpacing: 1
    }
  }, "PS"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#005BA7',
      textTransform: 'uppercase',
      lineHeight: 1.3
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#777',
      marginTop: 4
    }
  }, it.manufacturer, " \xB7 Qty ", it.qty), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: '#002F48'
    }
  }, "$", (it.price * it.qty).toFixed(2)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove && onRemove(it),
    style: {
      background: 'transparent',
      border: 0,
      fontSize: 12,
      color: '#005BA7',
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  }, "Remove")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #DCDCDC',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6,
      fontSize: 14,
      color: '#4A4A4A'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "$", subtotal.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 16,
      fontSize: 14,
      color: '#4A4A4A'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Estimated shipping"), /*#__PURE__*/React.createElement("span", null, "Calculated at checkout")), /*#__PURE__*/React.createElement("button", {
    onClick: onCheckout,
    disabled: items.length === 0,
    style: {
      width: '100%',
      background: items.length ? '#005BA7' : '#DCDCDC',
      color: items.length ? '#fff' : '#949494',
      border: 0,
      borderRadius: 4,
      height: 48,
      fontSize: 16,
      fontWeight: 600,
      textTransform: 'uppercase',
      cursor: items.length ? 'pointer' : 'not-allowed',
      fontFamily: 'inherit'
    }
  }, "Checkout")));
}
window.Cart = Cart;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ps-marketplace/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ps-marketplace/Footer.jsx
try { (() => {
/* PartsSource marketplace footer — 1:1 with reference
   Layout (top → bottom):
     1. Grey separator strip (~80px)
     2. Royal-blue body:
        - 5-column link grid
        - "Also of Interest" row aligned under col 1
     3. Dark navy thin strip: © left, Legal Terms + shield right
*/

function Footer() {
  const BLUE = '#1A4882';
  const STRIP = '#143A6B';
  const GREY = '#EFEFEF';
  const SEAL = '#B8C9DC';
  const linkStyle = {
    color: '#fff',
    fontSize: 15,
    fontWeight: 400,
    textDecoration: 'none',
    fontFamily: 'inherit',
    lineHeight: 1.2,
    whiteSpace: 'nowrap'
  };
  const hover = e => {
    e.currentTarget.style.textDecoration = 'underline';
  };
  const leave = e => {
    e.currentTarget.style.textDecoration = 'none';
  };
  const A = ({
    children,
    href = '#'
  }) => /*#__PURE__*/React.createElement("a", {
    href: href,
    style: linkStyle,
    onMouseOver: hover,
    onMouseOut: leave
  }, children);
  const Col = ({
    items
  }) => /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement(A, null, i))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 78,
      background: GREY,
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: BLUE,
      color: '#fff',
      fontFamily: "'Source Sans Pro', 'Source Sans 3', system-ui, sans-serif"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(260px, 1.25fr) repeat(4, 1fr)',
      columnGap: 28,
      padding: '44px 40px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      marginBottom: 16,
      whiteSpace: 'nowrap'
    }
  }, "Can't Find What You're Looking For?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.5,
      marginBottom: 16,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Call us at ", /*#__PURE__*/React.createElement(A, {
    href: "tel:8774976412"
  }, "877-497-6412")), /*#__PURE__*/React.createElement("div", null, "or email us at ", /*#__PURE__*/React.createElement(A, {
    href: "mailto:help@partssource.com"
  }, "help@partssource.com"))), /*#__PURE__*/React.createElement(A, null, "Send us Feedback and Suggestions")), /*#__PURE__*/React.createElement(Col, {
    items: ['OEMs', 'Models', 'Departments', 'Marketplace Blog']
  }), /*#__PURE__*/React.createElement(Col, {
    items: ['Orders', 'Order History', 'Quotes', 'Approve Orders', 'Favorites']
  }), /*#__PURE__*/React.createElement(Col, {
    items: ['Repairs', 'Exchanges and Returns', 'MyPartsSource', 'PartsFinder', 'MyServices®']
  }), /*#__PURE__*/React.createElement(Col, {
    items: ['Company Profile', 'Contact Us', 'Advertise with Us', 'Customer Support']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 40px 40px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      columnGap: 44,
      rowGap: 12,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Also of Interest"), /*#__PURE__*/React.createElement(A, null, "Defibrillators and Parts"), /*#__PURE__*/React.createElement(A, null, "48INCH AIR TUBE SET by Hillrom"), /*#__PURE__*/React.createElement(A, null, "ECG Cables and Leadwires"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: STRIP,
      padding: '12px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#fff',
      fontSize: 14,
      minHeight: 56,
      fontFamily: "'Source Sans Pro', 'Source Sans 3', system-ui, sans-serif"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2001-2022 PartsSource, Inc."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#fff',
      fontSize: 14,
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, "Legal Terms & Policies"), /*#__PURE__*/React.createElement("span", {
    "aria-label": "Verified",
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: STRIP,
      border: `2px solid ${SEAL}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      position: 'relative',
      top: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "24",
    viewBox: "0 0 20 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 1.2 1.6 3.8v6.4c0 5.4 3.5 10.2 8.4 11.8 4.9-1.6 8.4-6.4 8.4-11.8V3.8L10 1.2z",
    fill: "none",
    stroke: SEAL,
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12l2.6 2.6L14.2 9",
    fill: "none",
    stroke: SEAL,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ps-marketplace/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ps-marketplace/Header.jsx
try { (() => {
const {
  useState
} = React;
function Header({
  onSearch,
  onNav,
  cartCount = 0
}) {
  const [q, setQ] = useState('');
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: '1px solid #DCDCDC',
      background: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#002F48',
      color: '#fff',
      fontSize: 13,
      padding: '6px 32px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .8
    }
  }, "Ship to: Cleveland, OH 44114"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .8
    }
  }, "Customer Support 1-877-497-6412")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: '#009CF4',
      textDecoration: 'none'
    },
    href: "#"
  }, "Help"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: '#009CF4',
      textDecoration: 'none'
    },
    href: "#"
  }, "PartsSource PRO"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: '#009CF4',
      textDecoration: 'none'
    },
    href: "#"
  }, "Sign In"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '14px 32px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: '#005BA7',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      fontWeight: 300,
      letterSpacing: -0.5
    }
  }, "PS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: '#002F48',
      letterSpacing: -0.5
    }
  }, "PartsSource")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSearch && onSearch(q);
    },
    style: {
      flex: 1,
      display: 'flex',
      border: '1px solid #DCDCDC',
      borderRadius: 4,
      overflow: 'hidden',
      height: 44
    }
  }, /*#__PURE__*/React.createElement("select", {
    style: {
      border: 0,
      borderRight: '1px solid #DCDCDC',
      padding: '0 12px',
      background: '#F1F1F1',
      color: '#4A4A4A',
      fontSize: 14,
      fontFamily: 'inherit',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("option", null, "All Categories"), /*#__PURE__*/React.createElement("option", null, "Parts"), /*#__PURE__*/React.createElement("option", null, "Repair Services")), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search by part number, HCPCS, manufacturer, or description",
    style: {
      flex: 1,
      border: 0,
      padding: '0 16px',
      fontSize: 15,
      color: '#4A4A4A',
      outline: 'none',
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      border: 0,
      background: '#005BA7',
      color: '#fff',
      padding: '0 24px',
      fontSize: 14,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: .5,
      cursor: 'pointer'
    }
  }, "Search")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav && onNav('cart'),
    style: {
      position: 'relative',
      background: 'transparent',
      border: '1px solid #005BA7',
      color: '#005BA7',
      height: 44,
      padding: '0 18px',
      borderRadius: 4,
      fontSize: 14,
      fontWeight: 600,
      textTransform: 'uppercase',
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "Cart", cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      background: '#FF9505',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      width: 20,
      height: 20,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      padding: '0 32px 0',
      borderTop: '1px solid #F1F1F1'
    }
  }, ['Parts', 'Repairs & Services', 'Service Agreements', 'Training', 'PartsSource PRO', 'Resources'].map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    style: {
      padding: '12px 0',
      fontSize: 14,
      fontWeight: 600,
      color: '#4A4A4A',
      textDecoration: 'none',
      borderBottom: '2px solid transparent'
    },
    onMouseOver: e => {
      e.currentTarget.style.color = '#005BA7';
      e.currentTarget.style.borderBottomColor = '#005BA7';
    },
    onMouseOut: e => {
      e.currentTarget.style.color = '#4A4A4A';
      e.currentTarget.style.borderBottomColor = 'transparent';
    }
  }, item))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ps-marketplace/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ps-marketplace/Hero.jsx
try { (() => {
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '56px 32px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 48,
      alignItems: 'center',
      borderBottom: '1px solid #F1F1F1'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
      color: '#005BA7',
      marginBottom: 16
    }
  }, "PartsSource PRO\xAE"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 48,
      fontWeight: 300,
      lineHeight: 1.1,
      color: '#002F48',
      margin: '0 0 20px',
      letterSpacing: -0.5
    }
  }, "Ensuring healthcare is always on."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.55,
      color: '#4A4A4A',
      margin: '0 0 28px',
      maxWidth: 520
    }
  }, "The leading B2B marketplace for medtech replacement parts and mission-critical service. Evidence-based procurement, trusted by the top health systems."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
      background: '#005BA7',
      color: '#fff',
      border: 0,
      borderRadius: 4,
      height: 48,
      padding: '0 28px',
      fontSize: 16,
      fontWeight: 600,
      textTransform: 'uppercase',
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "Shop Parts"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      color: '#005BA7',
      border: '1px solid #005BA7',
      borderRadius: 4,
      height: 48,
      padding: '0 28px',
      fontSize: 16,
      fontWeight: 600,
      textTransform: 'uppercase',
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "Request a Quote")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      marginTop: 40,
      paddingTop: 24,
      borderTop: '1px solid #F1F1F1'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 300,
      color: '#002F48'
    }
  }, "6x"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#777'
    }
  }, "Supply chain quality")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 300,
      color: '#002F48'
    }
  }, "40 days"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#777'
    }
  }, "Improved availability / 1k orders")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 300,
      color: '#002F48'
    }
  }, "95%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#777'
    }
  }, "Productivity boost")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#DCEAED',
      borderRadius: 8,
      aspectRatio: '4/3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 140,
      borderRadius: '50%',
      background: '#fff',
      border: '2px solid #CCCCCC',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#87AFB8',
      fontSize: 32,
      fontWeight: 300,
      letterSpacing: 2
    }
  }, "PS")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ps-marketplace/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ps-marketplace/Homepage.jsx
try { (() => {
/* PartsSource homepage (ps.com)
   Renders the rich landing experience inside the shell's content area.
   Image placeholders use subtle striped fills + monospace explainers so
   real assets can drop in later.
*/

// ─────────────────────────────────────────────────────────────
// Dropdown component — matches Form-Components/Property1DropDown
//   height 48 · border 1px #949494 · radius 3 · label #4A4A4A 16px
// ─────────────────────────────────────────────────────────────
function PsDropdown({
  label,
  value,
  options = [],
  onChange
}) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(value || '');
  const wrapRef = React.useRef(null);
  const display = value !== undefined ? value : internal;
  const showLabel = !display;
  React.useEffect(() => {
    const onDoc = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  const pick = opt => {
    setInternal(opt);
    setOpen(false);
    onChange && onChange(opt);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    style: {
      width: '100%',
      height: 48,
      padding: '0 40px 0 14px',
      background: '#fff',
      border: '1px solid #949494',
      borderRadius: 3,
      fontFamily: "'Source Sans Pro', sans-serif",
      fontSize: 16,
      color: '#4A4A4A',
      textAlign: 'left',
      cursor: 'pointer',
      outline: 'none',
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = '#005BA6';
      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,91,166,0.15)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = '#949494';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: showLabel ? '#949494' : '#4A4A4A'
    }
  }, display || label), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "9",
    viewBox: "0 0 14 9",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: `translateY(-50%) rotate(${open ? 180 : 0}deg)`,
      transition: 'transform 150ms ease'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1.5L7 7l6-5.5",
    fill: "none",
    stroke: "#949494",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      left: 0,
      right: 0,
      background: '#fff',
      border: '1px solid #CCC',
      borderRadius: 3,
      boxShadow: '0 6px 18px rgba(0,0,0,0.10)',
      maxHeight: 240,
      overflowY: 'auto',
      zIndex: 10
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("div", {
    key: opt,
    onClick: () => pick(opt),
    style: {
      padding: '12px 14px',
      fontSize: 15,
      color: '#4A4A4A',
      cursor: 'pointer',
      fontFamily: "'Source Sans Pro', sans-serif"
    },
    onMouseOver: e => {
      e.currentTarget.style.background = '#F1F6FB';
      e.currentTarget.style.color = '#005BA6';
    },
    onMouseOut: e => {
      e.currentTarget.style.background = '#fff';
      e.currentTarget.style.color = '#4A4A4A';
    }
  }, opt)), options.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      fontSize: 14,
      color: '#949494',
      fontStyle: 'italic'
    }
  }, "No options")));
}
function Homepage({
  onShopParts
}) {
  // Subtle stripe placeholder used for all imagery slots
  const stripe = (color = '#E8EEF3') => ({
    background: `repeating-linear-gradient(45deg, ${color}, ${color} 10px, rgba(255,255,255,0.55) 10px, rgba(255,255,255,0.55) 20px)`
  });
  const Placeholder = ({
    label,
    h = 'auto',
    radius = 6,
    tone = '#E8EEF3',
    dark = false,
    style = {}
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      ...stripe(tone),
      borderRadius: radius,
      minHeight: h,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: dark ? 'rgba(255,255,255,0.85)' : '#6F8694',
      fontFamily: 'ui-monospace, Menlo, monospace',
      fontSize: 11,
      letterSpacing: 0.5,
      ...style
    }
  }, label);
  const CATEGORIES = ['Ultrasound', 'Patient Monitoring', 'Beds & Tables', 'Facilities & Workspace', 'Respiratory', 'Infusion Pumps', 'Sterilization', 'Ultrasonic'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 32,
      padding: '40px 40px 24px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 280
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      fontWeight: 600,
      color: '#1FA9B3',
      lineHeight: 1.05,
      letterSpacing: -0.3,
      maxWidth: 600,
      margin: 0
    }
  }, "Discover 7 Data-Driven Strategies to Reduce Costs and Improve Clinical Uptime"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 0,
      top: 40,
      width: 220,
      height: 180,
      opacity: 0.4,
      background: 'radial-gradient(circle, #B6D9E6 1.5px, transparent 1.5px) 0 0/14px 14px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#003763',
      borderRadius: 6,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      minHeight: 260,
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 28px 24px',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: 1.6,
      color: '#7FB7CC',
      marginBottom: 8
    }
  }, "THE SECOND ANNUAL"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 400,
      color: '#fff',
      margin: 0,
      lineHeight: 1.18,
      letterSpacing: -0.2
    }
  }, "State of Healthcare", /*#__PURE__*/React.createElement("br", null), "Technology", /*#__PURE__*/React.createElement("br", null), "Management", /*#__PURE__*/React.createElement("br", null), "Insights Report"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,0.78)',
      marginTop: 20,
      lineHeight: 1.5,
      maxWidth: 280
    }
  }, "7 Data-Driven Opportunities to Reduce", /*#__PURE__*/React.createElement("br", null), "Operating Costs and Improve Clinical Availability")), /*#__PURE__*/React.createElement(Placeholder, {
    label: "report cover \xB7 technicians photo",
    tone: "#1A4D7E",
    dark: true,
    style: {
      borderRadius: 0,
      minHeight: '100%'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '4px 40px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "ui_kits/ps-shell/chatham-memorial.png",
    alt: "Chatham Memorial Hospital",
    style: {
      height: 36,
      width: 'auto',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#005BA6'
    }
  }, "Earl Grey"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: '#005BA6',
      letterSpacing: 1.6
    }
  }, "PRO\xA0\xA0ACCOUNT"))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      border: '1px solid #CCC',
      borderRadius: 4,
      padding: '8px 18px',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 2,
      textDecoration: 'none',
      lineHeight: 1.2,
      minWidth: 130
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#4A4A4A'
    }
  }, "Quotes for Review"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: '#005BA6'
    }
  }, "2 Quotes"))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      padding: '0 40px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid #E0E6EC',
      borderRadius: 6,
      padding: '24px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      minHeight: 160,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      width: 240,
      height: 40,
      opacity: 0.5,
      background: 'radial-gradient(circle, #B6D9E6 1.2px, transparent 1.2px) 0 0/8px 8px',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 300,
      color: '#6F8694',
      lineHeight: 1.15
    }
  }, "PartsSource Has Over"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 300,
      color: '#6F8694',
      lineHeight: 1.15,
      marginBottom: 18
    }
  }, "1.5 Million Facilities SKUs"), /*#__PURE__*/React.createElement("button", {
    onClick: onShopParts,
    style: {
      background: '#1FA9B3',
      color: '#fff',
      border: 0,
      borderRadius: 999,
      padding: '10px 28px',
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer',
      fontFamily: 'inherit',
      letterSpacing: 0.3
    }
  }, "Learn More")), /*#__PURE__*/React.createElement(Placeholder, {
    label: "product imagery",
    tone: "#E8EEF3",
    style: {
      width: 200,
      height: 110,
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#EFF2F5',
      borderRadius: 6,
      padding: '24px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      minHeight: 160,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      background: '#0F3D6E',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      padding: '4px 12px',
      borderRadius: 2,
      letterSpacing: 0.8
    }
  }, "Now Available!"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingRight: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      color: '#2B2B2B',
      lineHeight: 1.3,
      marginBottom: 14,
      maxWidth: 320
    }
  }, "Help keep your staff safe with new McKesson disposable gowns"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#005BA6',
      fontSize: 14,
      textDecoration: 'underline',
      fontWeight: 500
    }
  }, "Shop Now")), /*#__PURE__*/React.createElement(Placeholder, {
    label: "staff in PPE \xB7 McKesson logo",
    tone: "#D6E1EA",
    style: {
      width: 240,
      height: 120,
      flexShrink: 0
    }
  }))), /*#__PURE__*/React.createElement(ShopByDevice, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '8px 40px 48px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 400,
      color: '#2B2B2B',
      margin: '0 0 18px',
      letterSpacing: -0.2
    }
  }, "Exclusively at PartsSource"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "Arjo \xB7 device imagery",
    h: 240,
    radius: 4
  }), /*#__PURE__*/React.createElement(Placeholder, {
    label: "Repair Services \xB7 soldering",
    h: 240,
    radius: 4,
    tone: "#EAEDEF"
  }), /*#__PURE__*/React.createElement(Placeholder, {
    label: "Tripp-Lite \xB7 enclosure",
    h: 240,
    radius: 4
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '32px 40px 56px',
      borderTop: '1px solid #E8E8E8',
      background: '#FAFAFA'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 400,
      color: '#2B2B2B',
      margin: '0 0 24px',
      letterSpacing: -0.2
    }
  }, "Medical Parts \u2013 Featured Categories"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      gap: 18
    }
  }, CATEGORIES.map(cat => /*#__PURE__*/React.createElement("a", {
    key: cat,
    href: "#",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...stripe('#E8EEF3'),
      background: '#fff',
      border: '1px solid #E0E6EC',
      aspectRatio: '1 / 1',
      width: '100%',
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6F8694',
      fontSize: 10,
      fontFamily: 'ui-monospace, Menlo, monospace'
    }
  }, cat.toLowerCase().split(' ')[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#005BA6',
      fontWeight: 600
    }
  }, cat))))));
}
window.Homepage = Homepage;

// ─────────────────────────────────────────────────────────────
// Shop by Device — uses the PartsSource Dropdown component
// ─────────────────────────────────────────────────────────────
function ShopByDevice() {
  const MANUFACTURERS = ['GE Healthcare', 'Philips', 'Masimo', 'Welch Allyn', '3M Healthcare', 'Olympus America', 'Nellcor – Covidien'];
  const MODELS_BY_MFG = {
    'GE Healthcare': ['Carescape B650', 'Dash 4000', 'MAC 5500 HD', 'Logiq E10'],
    'Philips': ['IntelliVue MX700', 'HeartStart MRx', 'Avalon FM30'],
    'Masimo': ['Radical-7', 'Rad-8', 'Rad-57'],
    'Welch Allyn': ['Connex Spot Monitor', 'CP 150', 'PanOptic Ophthalmoscope'],
    '3M Healthcare': ['Bair Hugger 700', 'Bair Hugger 775'],
    'Olympus America': ['CLV-190', 'CV-190', 'BF-1TH190'],
    'Nellcor – Covidien': ['PM1000N', 'OxiMax N-595']
  };
  const [mfg, setMfg] = React.useState('');
  const [model, setModel] = React.useState('');
  const models = mfg ? MODELS_BY_MFG[mfg] || [] : [];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid #E0E6EC',
      borderRadius: 6,
      padding: '20px 24px',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr 1fr auto',
      alignItems: 'center',
      gap: 16,
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#005BA6',
      whiteSpace: 'nowrap'
    }
  }, "Shop by Device"), /*#__PURE__*/React.createElement(PsDropdown, {
    label: "Manufacturer",
    value: mfg,
    options: MANUFACTURERS,
    onChange: v => {
      setMfg(v);
      setModel('');
    }
  }), /*#__PURE__*/React.createElement(PsDropdown, {
    label: "Model",
    value: model,
    options: models,
    onChange: v => setModel(v)
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      background: '#FFB870',
      color: '#fff',
      border: 0,
      height: 48,
      padding: '0 36px',
      borderRadius: 3,
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: 1.5,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "FIND")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ps-marketplace/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ps-marketplace/PDP.jsx
try { (() => {
function Breadcrumb({
  items,
  onNav
}) {
  // Find the previous (parent) crumb for the "Back" affordance
  const backCrumb = items.length > 1 ? items[items.length - 2] : null;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: '12px 40px',
      background: '#fff',
      borderBottom: '1px solid #E8E8E8',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: "'Source Sans Pro', sans-serif"
    }
  }, backCrumb && /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav(backCrumb);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: '#005BA6',
      fontSize: 13,
      fontWeight: 600,
      textDecoration: 'none',
      padding: '4px 10px',
      border: '1px solid #CCC',
      borderRadius: 4,
      background: '#fff',
      whiteSpace: 'nowrap'
    },
    onMouseOver: e => {
      e.currentTarget.style.background = '#F1F6FB';
    },
    onMouseOut: e => {
      e.currentTarget.style.background = '#fff';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 1.5L3 5l3.5 3.5",
    stroke: "#005BA6",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), "Back to ", backCrumb.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#777',
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#CCCCCC'
    }
  }, "\u203A"), i < items.length - 1 ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav(it);
    },
    style: {
      color: '#005BA6',
      textDecoration: 'none',
      fontWeight: 500
    },
    onMouseOver: e => {
      e.currentTarget.style.textDecoration = 'underline';
    },
    onMouseOut: e => {
      e.currentTarget.style.textDecoration = 'none';
    }
  }, it.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#2B2B2B',
      fontWeight: 500
    }
  }, it.label)))));
}
function PDP({
  product,
  onBack,
  onAdd,
  hideBreadcrumb
}) {
  const [qty, setQty] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", null, !hideBreadcrumb && /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home'
    }, {
      label: 'Patient Monitoring'
    }, {
      label: 'Sensors'
    }, {
      label: product.name
    }],
    onNav: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 48px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onBack && onBack();
    },
    style: {
      fontSize: 13,
      color: '#005BA7',
      textDecoration: 'none',
      display: 'inline-block',
      marginBottom: 20
    }
  }, "\u2039 Back to Results"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#DCEAED',
      borderRadius: 8,
      aspectRatio: '1/1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      height: 160,
      borderRadius: '50%',
      background: '#fff',
      border: '2px solid #CCCCCC',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#87AFB8',
      fontSize: 36,
      fontWeight: 300,
      letterSpacing: 2
    }
  }, "PS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 8
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#F1F1F1',
      aspectRatio: '1/1',
      borderRadius: 4,
      border: i === 0 ? '2px solid #005BA7' : '1px solid #DCDCDC'
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
      color: '#777',
      marginBottom: 8
    }
  }, product.manufacturer), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30,
      fontWeight: 300,
      color: '#002F48',
      margin: '0 0 12px',
      lineHeight: 1.2
    }
  }, product.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontSize: 13,
      color: '#777',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "Part #: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#4A4A4A'
    }
  }, product.sku || 'DS100A')), /*#__PURE__*/React.createElement("span", null, "HCPCS: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#4A4A4A'
    }
  }, "E0445"))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: '#DCFAEF',
      color: '#17AB78',
      fontSize: 12,
      fontWeight: 600,
      padding: '4px 12px',
      borderRadius: 20,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#17AB78'
    }
  }), "In Stock \xB7 Ships in 24 hrs"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 300,
      color: '#002F48'
    }
  }, "$", product.price, ".00"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#777'
    }
  }, "each \xB7 volume pricing available")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid #DCDCDC',
      borderRadius: 4,
      height: 48,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(Math.max(1, qty - 1)),
    style: {
      width: 40,
      border: 0,
      background: '#F1F1F1',
      fontSize: 18,
      cursor: 'pointer'
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("input", {
    value: qty,
    onChange: e => setQty(Math.max(1, parseInt(e.target.value) || 1)),
    style: {
      width: 60,
      border: 0,
      textAlign: 'center',
      fontSize: 16,
      outline: 'none',
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(qty + 1),
    style: {
      width: 40,
      border: 0,
      background: '#F1F1F1',
      fontSize: 18,
      cursor: 'pointer'
    }
  }, "+")), /*#__PURE__*/React.createElement("button", {
    onClick: () => onAdd && onAdd(product, qty),
    style: {
      background: '#005BA7',
      color: '#fff',
      border: 0,
      borderRadius: 4,
      height: 48,
      padding: '0 32px',
      fontSize: 16,
      fontWeight: 600,
      textTransform: 'uppercase',
      cursor: 'pointer',
      fontFamily: 'inherit',
      flex: 1
    }
  }, "Add to Cart")), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      color: '#005BA7',
      border: '1px solid #005BA7',
      borderRadius: 4,
      height: 48,
      width: '100%',
      fontSize: 16,
      fontWeight: 600,
      textTransform: 'uppercase',
      cursor: 'pointer',
      fontFamily: 'inherit',
      marginBottom: 24
    }
  }, "Request a Quote"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #F1F1F1',
      paddingTop: 20,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      fontSize: 13,
      color: '#4A4A4A'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#002F48'
    }
  }, "OEM compatible:"), " Masimo Radical-7, Rad-8, Rad-57"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#002F48'
    }
  }, "Warranty:"), " 1 year"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#002F48'
    }
  }, "Weight:"), " 2.4 oz"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#002F48'
    }
  }, "Condition:"), " New"))))));
}
window.Breadcrumb = Breadcrumb;
window.PDP = PDP;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ps-marketplace/PDP.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ps-marketplace/ProductCard.jsx
try { (() => {
function ProductCard({
  product,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onClick && onClick(product),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: '#fff',
      border: hover ? '2px solid #005BA7' : '1px solid #DCDCDC',
      padding: hover ? 15 : 16,
      borderRadius: 6,
      boxShadow: hover ? '0 6px 20px rgba(0,47,72,.18)' : '0 2px 10px rgba(0,47,72,.10)',
      cursor: 'pointer',
      transition: 'box-shadow 150ms, border-color 150ms',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#DCEAED',
      borderRadius: 4,
      aspectRatio: '1/1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: '#fff',
      border: '2px solid #CCCCCC',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#87AFB8',
      fontSize: 18,
      fontWeight: 300,
      letterSpacing: 1
    }
  }, "PS"), product.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8,
      background: '#DCEAED',
      color: '#002F48',
      fontSize: 11,
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 20,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#009CF4'
    }
  }), product.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#005BA7',
      textTransform: 'uppercase',
      lineHeight: 1.3,
      letterSpacing: .3
    }
  }, product.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#777'
    }
  }, product.manufacturer), product.price && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#002F48'
    }
  }, "$", product.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#777'
    }
  }, "each")));
}
window.ProductCard = ProductCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ps-marketplace/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ps-marketplace/ProductGrid.jsx
try { (() => {
function ProductGrid({
  products,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    onClick: onSelect
  })));
}
function ProductCarousel({
  title,
  subtitle,
  products,
  onSelect
}) {
  const [offset, setOffset] = React.useState(0);
  const ref = React.useRef(null);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '32px 32px 40px',
      borderTop: '1px solid #F1F1F1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 300,
      color: '#002F48',
      margin: 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#005BA7',
      fontSize: 14,
      textDecoration: 'none'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'flex',
      gap: 16,
      overflowX: 'auto',
      scrollBehavior: 'smooth',
      paddingBottom: 8
    }
  }, products.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement(ProductCard, {
    product: p,
    onClick: onSelect
  }))))));
}
window.ProductGrid = ProductGrid;
window.ProductCarousel = ProductCarousel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ps-marketplace/ProductGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AccordionCount = __ds_scope.AccordionCount;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.ListTypeBadge = __ds_scope.ListTypeBadge;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ButtonInline = __ds_scope.ButtonInline;

__ds_ns.BackArrowIcon = __ds_scope.BackArrowIcon;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.ImageBlock = __ds_scope.ImageBlock;

__ds_ns.TextBlock = __ds_scope.TextBlock;

__ds_ns.CardGrid = __ds_scope.CardGrid;

__ds_ns.CMS = __ds_scope.CMS;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.StatusCard = __ds_scope.StatusCard;

__ds_ns.AlertCard = __ds_scope.AlertCard;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.AiDataCard = __ds_scope.AiDataCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.AnalyticsCard = __ds_scope.AnalyticsCard;

__ds_ns.ListCard = __ds_scope.ListCard;

__ds_ns.CardExtras = __ds_scope.CardExtras;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.Controls = __ds_scope.Controls;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.TooltipRich = __ds_scope.TooltipRich;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.SkeletonKeyframes = __ds_scope.SkeletonKeyframes;

__ds_ns.LoadingSpinner = __ds_scope.LoadingSpinner;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ErrorPage = __ds_scope.ErrorPage;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Feedback = __ds_scope.Feedback;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.FilterShell = __ds_scope.FilterShell;

__ds_ns.Filter = __ds_scope.Filter;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.BreadcrumbBack = __ds_scope.BreadcrumbBack;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Layout = __ds_scope.Layout;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.ConfirmDialog = __ds_scope.ConfirmDialog;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.LeftNav = __ds_scope.LeftNav;

__ds_ns.Navigation = __ds_scope.Navigation;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Selections = __ds_scope.Selections;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.FolderTabs = __ds_scope.FolderTabs;

__ds_ns.SegmentedTabs = __ds_scope.SegmentedTabs;

__ds_ns.PillTabs = __ds_scope.PillTabs;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
