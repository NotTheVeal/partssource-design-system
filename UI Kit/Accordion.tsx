// ════════════════════════════════════════════════════════════════
// Accordion.tsx — PartsSource Design System
//
// Components: Accordion · AccordionCount
// Variants:   default | row | filled
// States:     closed | open | hover | focus | disabled
//
// Pulled from preview/accordion.html + Figma node 4390:39583.
// ════════════════════════════════════════════════════════════════

type AccordionVariant = "default" | "row" | "filled";
type AccordionCountTone = "info" | "critical";

// ── AccordionCount ────────────────────────────────────────────────
// Small badge that sits in the header meta slot.
// tone="info"     → blue-tinted  (default)
// tone="critical" → red-tinted
interface AccordionCountProps {
  tone?: AccordionCountTone;
  children: React.ReactNode;
}

export const AccordionCount: React.FC<AccordionCountProps> = ({
  tone = "info",
  children,
}) => {
  const styles: Record<AccordionCountTone, React.CSSProperties> = {
    info: {
      background: "#EFF9FE",
      color: "#005BA7",
      border: "1px solid #B0D7F4",
    },
    critical: {
      background: "#FEF0F0",
      color: "#9E2020",
      border: "1px solid #FFCFCF",
    },
  };

  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "'Source Sans Pro', 'Source Sans 3', sans-serif",
        fontSize: 13,
        fontWeight: 600,
        lineHeight: 1,
        padding: "4px 10px",
        borderRadius: 30,
        ...styles[tone],
      }}
    >
      {children}
    </span>
  );
};

// ── Chevron icon ──────────────────────────────────────────────────
const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    style={{
      flexShrink: 0,
      color: "#777777",
      transition: "transform 200ms ease",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
    }}
  >
    <path
      d="M3 5l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ── Drag-handle icon ─────────────────────────────────────────────
const DragHandleIcon: React.FC = () => (
  <span
    aria-hidden="true"
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      flexShrink: 0,
      color: "#4A4A4A",
      cursor: "grab",
      marginRight: 4,
    }}
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M6.66675 4.99909L6.67175 4.99909M6.66675 9.99909L6.67175 9.99909M6.66675 14.9991L6.67175 14.9991M13.3284 4.99909L13.3334 4.99909M13.3284 9.99908L13.3334 9.99908M13.3284 14.9991L13.3334 14.9991"
        stroke="currentColor"
        strokeWidth="1.88"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

// ── Accordion ────────────────────────────────────────────────────
interface AccordionProps {
  title: string;
  /** Optional secondary line below the title. */
  subtitle?: string;
  /** Slot for AccordionCount or any badge-like node. */
  meta?: React.ReactNode;
  /** Start in the open state. */
  defaultOpen?: boolean;
  /** Show the six-dot drag handle on the left. */
  dragHandle?: boolean;
  /** Visual variant of the container. */
  variant?: AccordionVariant;
  /** Disable interaction entirely. */
  disabled?: boolean;
  /** Panel content when open. */
  children?: React.ReactNode;
  /** Extra className forwarded to the root element. */
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  subtitle,
  meta,
  defaultOpen = false,
  dragHandle = false,
  variant = "default",
  disabled = false,
  children,
  className = "",
}) => {
  const [open, setOpen] = React.useState(defaultOpen);
  const panelId = React.useId ? React.useId() : `acc-${Math.random().toString(36).slice(2)}`;

  // ── Container styles by variant ──────────────────────────────
  const containerBase: React.CSSProperties = {
    overflow: "hidden",
    transition: "border-color 120ms ease",
    fontFamily: "'Source Sans Pro', 'Source Sans 3', sans-serif",
  };

  const variantContainer: Record<AccordionVariant, React.CSSProperties> = {
    default: {
      background: "#ffffff",
      border: "2px solid #F1F1F1",
      borderRadius: 4,
    },
    row: {
      background: "transparent",
      border: "none",
      borderBottom: "1px solid #F1F1F1",
      borderRadius: 0,
    },
    filled: {
      background: "#EFF9FE",
      border: "2px solid #B0D7F4",
      borderRadius: 4,
    },
  };

  // ── Header styles by variant ─────────────────────────────────
  const headerBase: React.CSSProperties = {
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
    opacity: disabled ? 0.45 : 1,
  };

  const variantHeaderPadding: Record<AccordionVariant, React.CSSProperties> = {
    default: { padding: "16px 26px" },
    row:     { padding: "14px 0" },
    filled:  { padding: "16px 26px" },
  };

  const variantHeaderBg: Record<AccordionVariant, React.CSSProperties> = {
    default: { background: "#ffffff" },
    row:     { background: "transparent" },
    filled:  { background: "#EFF9FE" },
  };

  // ── Panel body padding by variant ────────────────────────────
  const variantBodyPadding: Record<AccordionVariant, React.CSSProperties> = {
    default: { padding: "20px 24px 24px" },
    row:     { padding: "4px 0 16px" },
    filled:  { padding: "20px 24px 24px" },
  };

  const [hovered, setHovered] = React.useState(false);

  const hoverBg: Record<AccordionVariant, string> = {
    default: "#FAFBFC",
    row:     "#FAFBFC",
    filled:  "#D0EDFC",
  };

  const headerStyle: React.CSSProperties = {
    ...headerBase,
    ...variantHeaderPadding[variant],
    ...(hovered && !disabled
      ? { background: hoverBg[variant] }
      : variantHeaderBg[variant]),
  };

  return (
    <div
      style={{ ...containerBase, ...variantContainer[variant] }}
      className={className}
    >
      <button
        type="button"
        style={headerStyle}
        aria-expanded={open}
        aria-controls={panelId}
        disabled={disabled}
        onClick={() => !disabled && setOpen((o) => !o)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Drag handle (optional) */}
        {dragHandle && <DragHandleIcon />}

        {/* Title + subtitle */}
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: 0,
            flex: 1,
          }}
        >
          <span
            style={{
              font: "300 25px/1 'Source Sans Pro','Source Sans 3',sans-serif",
              color: "#000000",
              letterSpacing: "-0.028em",
            }}
          >
            {title}
          </span>
          {subtitle && (
            <span
              style={{
                font: "400 14px/1.4 'Source Sans Pro','Source Sans 3',sans-serif",
                color: "#777777",
                marginTop: 6,
              }}
            >
              {subtitle}
            </span>
          )}
        </span>

        {/* Meta slot + chevron */}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            flexShrink: 0,
          }}
        >
          {meta}
          <ChevronIcon open={open} />
        </span>
      </button>

      {/* Animated panel */}
      <div
        id={panelId}
        style={{
          overflow: "hidden",
          maxHeight: open ? 2000 : 0,
          transition: "max-height 240ms ease",
        }}
      >
        {children && (
          <div
            style={{
              color: "#2B2B2B",
              fontSize: 14,
              lineHeight: 1.6,
              ...variantBodyPadding[variant],
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

// ── Window export ─────────────────────────────────────────────────
declare const window: Window & {
  Accordion?: typeof Accordion;
  AccordionCount?: typeof AccordionCount;
};
if (typeof window !== "undefined") {
  Object.assign(window, { Accordion, AccordionCount });
}
