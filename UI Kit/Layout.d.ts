import * as React from 'react';

// ── Breadcrumb ───────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
}

export interface BreadcrumbProps {
  /** Parent links; last item is rendered as the current page (no link). */
  items: BreadcrumbItem[];
  className?: string;
}

export interface BreadcrumbBackProps {
  /** Label shown next to the left-pointing chevron. */
  label: React.ReactNode;
  href?: string;
  className?: string;
}

export declare const Breadcrumb: React.FC<BreadcrumbProps>;
export declare const BreadcrumbBack: React.FC<BreadcrumbBackProps>;

// ── Stepper ──────────────────────────────────────────────────────

export type StepStatus = 'complete' | 'current' | 'pending' | 'error' | 'disabled';

export interface Step {
  id?: string;
  /** Primary label rendered below (or beside) the circle. */
  label?: React.ReactNode;
  /** Secondary sub-label (shown in non-compact mode). */
  sub?: React.ReactNode;
  status?: StepStatus;
  onClick?: () => void;
}

export interface StepperProps {
  steps: Step[];
  orientation?: 'horizontal' | 'vertical';
  /** Compact dot-only variant — hides labels and number glyphs. */
  compact?: boolean;
  ariaLabel?: string;
  className?: string;
}

export declare const Stepper: React.FC<StepperProps>;
