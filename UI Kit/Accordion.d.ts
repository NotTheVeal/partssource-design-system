import * as React from 'react';

export type AccordionVariant = 'default' | 'row' | 'filled';
export type AccordionCountTone = 'info' | 'critical';

export interface AccordionCountProps {
  /** Color tone of the badge. Default: "info" (blue). */
  tone?: AccordionCountTone;
  children: React.ReactNode;
}

export interface AccordionProps {
  /** Primary header label. */
  title: string;
  /** Optional secondary line rendered below the title. */
  subtitle?: string;
  /** Slot for AccordionCount or any badge node — sits left of the chevron. */
  meta?: React.ReactNode;
  /** Start in the expanded state. Default: false. */
  defaultOpen?: boolean;
  /** Show the six-dot drag handle on the leading edge. Default: false. */
  dragHandle?: boolean;
  /**
   * Visual variant:
   * - "default" — white card, 2 px #F1F1F1 border, 4 px radius
   * - "row"     — borderless, bottom divider; for use inside cards/drawers
   * - "filled"  — blue-tinted (#EFF9FE) background with #B0D7F4 border
   */
  variant?: AccordionVariant;
  /** Disables toggle interaction and dims the header. */
  disabled?: boolean;
  /** Content rendered inside the animated panel when open. */
  children?: React.ReactNode;
  /** Additional className forwarded to the root element. */
  className?: string;
}

export declare const Accordion: React.FC<AccordionProps>;
export declare const AccordionCount: React.FC<AccordionCountProps>;
