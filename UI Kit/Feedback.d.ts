import * as React from 'react';

// ── Avatar ───────────────────────────────────────────────────────

export type AvatarSize   = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarTone   = 'blue' | 'green' | 'orange' | 'purple' | 'red' | 'neutral' | 'brand' | 'inverse';
export type AvatarStatus = 'online' | 'busy' | 'away' | 'offline';

export interface AvatarProps {
  /** Display name — initials derived from first + last word. */
  name?: string;
  /** Override initials directly (1–2 chars). */
  initials?: string;
  src?: string;
  alt?: string;
  size?: AvatarSize;
  tone?: AvatarTone;
  /** Presence dot shown bottom-right. */
  status?: AvatarStatus;
  className?: string;
}

export interface AvatarGroupProps {
  children: React.ReactNode;
  /** Number shown in overflow bubble (e.g. 3 more → +3). */
  overflow?: number;
  size?: AvatarSize;
}

export declare const Avatar: React.FC<AvatarProps>;
export declare const AvatarGroup: React.FC<AvatarGroupProps>;

// ── Tooltip ──────────────────────────────────────────────────────

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** Bubble content — plain text or ReactNode. */
  label: React.ReactNode;
  placement?: TooltipPlacement;
  /** Max-width of the bubble in px. Default 280. */
  maxWidth?: number;
  children: React.ReactNode;
}

export interface TooltipRichProps {
  title: React.ReactNode;
  body: React.ReactNode;
  cta?: { label: string; onClick?: () => void };
  className?: string;
}

export declare const Tooltip: React.FC<TooltipProps>;
export declare const TooltipRich: React.FC<TooltipRichProps>;

// ── Skeleton ─────────────────────────────────────────────────────

export type SkeletonShape = 'text' | 'title' | 'bar' | 'circle' | 'block' | 'button' | 'input';

export interface SkeletonProps {
  shape?: SkeletonShape;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export interface SpinnerProps {
  size?: number;
  className?: string;
}

export declare const Skeleton: React.FC<SkeletonProps>;
export declare const Spinner: React.FC<SpinnerProps>;

// ── EmptyState ───────────────────────────────────────────────────

export type EmptyTone = 'info' | 'neutral' | 'success' | 'warning' | 'error';

export interface EmptyStateProps {
  title: React.ReactNode;
  body?: React.ReactNode;
  /** Icon node rendered inside a tinted halo. */
  icon?: React.ReactNode;
  tone?: EmptyTone;
  primaryAction?: { label: string; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
  /** Compact inline variant — smaller padding and icon. */
  inline?: boolean;
  className?: string;
}

export declare const EmptyState: React.FC<EmptyStateProps>;

// ── ErrorPage ─────────────────────────────────────────────────────

export interface ErrorPageProps {
  /** Large numeric code, e.g. "404". Mutually exclusive with icon. */
  code?: React.ReactNode;
  icon?: React.ReactNode;
  iconTone?: 'info' | 'warn' | 'error';
  title: React.ReactNode;
  body?: React.ReactNode;
  primaryAction?: { label: string; icon?: React.ReactNode; onClick?: () => void };
  secondaryAction?: { label: string; onClick?: () => void };
  className?: string;
}

export declare const ErrorPage: React.FC<ErrorPageProps>;
