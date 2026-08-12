import * as React from 'react';

// ── Banner ───────────────────────────────────────────────────────

export interface BannerProps {
  title: React.ReactNode;
  body?: React.ReactNode;
  ctaLabel?: string;
  onCta?: () => void;
  /** Background image URL. Falls back to brand gradient. */
  imageUrl?: string;
  /** Dark overlay opacity (0–1). Default 0.45. */
  overlay?: number;
  className?: string;
}

export declare const Banner: React.FC<BannerProps>;

// ── ImageBlock ───────────────────────────────────────────────────

export interface ImageBlockProps {
  title: React.ReactNode;
  body?: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
}

export declare const ImageBlock: React.FC<ImageBlockProps>;

// ── TextBlock ────────────────────────────────────────────────────

export interface TextBlockProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export declare const TextBlock: React.FC<TextBlockProps>;

// ── CardGrid ─────────────────────────────────────────────────────

export interface CardGridItem {
  id?: string;
  title: React.ReactNode;
  text: React.ReactNode;
  imageUrl?: string;
}

export interface CardGridProps {
  cards: CardGridItem[];
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  cardStyle?: 'outlined' | 'elevated';
  className?: string;
}

export declare const CardGrid: React.FC<CardGridProps>;
