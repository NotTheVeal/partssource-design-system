import * as React from 'react';

// ── AiDataCard ───────────────────────────────────────────────────

export type AiBadgeTone = 'notShipped' | 'urgent' | 'pending';

export interface AiBadge {
  tone: AiBadgeTone;
  label: string;
}

export interface AiDataCardProps {
  title: string;
  manufacturer?: string;
  meta?: React.ReactNode;
  badges?: AiBadge[];
  cost?: string;
  costLabel?: string;
  className?: string;
}

export declare const AiDataCard: React.FC<AiDataCardProps>;

// ── ProductCard ──────────────────────────────────────────────────

export interface ProductCardProps {
  title: string;
  href?: string;
  detailsLabel?: string;
  date?: string;
  imageUrl?: string;
  info: Array<{ label: string; value: React.ReactNode }>;
  statusTitle?: string;
  statusBody?: React.ReactNode;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  /** Card width in px. Default 500. */
  width?: number;
  className?: string;
}

export declare const ProductCard: React.FC<ProductCardProps>;

// ── AnalyticsCard ────────────────────────────────────────────────

export type AnalyticsLayout = 'wide' | 'square';

export interface AnalyticsCardProps {
  layout?: AnalyticsLayout;
  icon?: React.ReactNode;
  title: string;
  value: string;
  label?: string;
  delta?: { value: string; direction: 'up' | 'down' };
  deltaSuffix?: string;
  benchmark?: string;
  sub?: string;
  /** Blue highlighted variant. */
  highlight?: boolean;
  linkLabel?: string;
  onLink?: () => void;
  showMenu?: boolean;
  className?: string;
}

export declare const AnalyticsCard: React.FC<AnalyticsCardProps>;

// ── ListCard ─────────────────────────────────────────────────────

export type ListPillTone = 'shopping' | 'preventative' | 'restocking';

export interface ListPill {
  tone: ListPillTone;
  label: string;
}

export interface ListCardBaseProps {
  variant?: 'list';
  title: string;
  pill?: ListPill;
  count?: string;
  shareCount?: number;
  showSort?: boolean;
  onSort?: () => void;
  className?: string;
}

export interface ListCardProductProps {
  variant: 'product';
  title: string;
  imageUrl?: string;
  price?: string;
  condition?: React.ReactNode;
  qty?: number;
  onQtyChange?: (qty: number) => void;
  onAddToCart?: () => void;
  onRemove?: () => void;
  className?: string;
}

export interface ListCardCreateProps {
  variant: 'create';
  title?: string;
  description?: string;
  onCreate?: () => void;
  className?: string;
}

export interface ListCardStandingProps {
  variant: 'standing';
  title: string;
  meta?: Array<{ label: string; value: React.ReactNode }>;
  statusLabel?: string;
  statusDate?: string;
  shareCount?: number;
  className?: string;
}

export type ListCardProps =
  | ListCardBaseProps
  | ListCardProductProps
  | ListCardCreateProps
  | ListCardStandingProps;

export declare const ListCard: React.FC<ListCardProps>;
