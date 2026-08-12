import * as React from 'react';

export interface MetaRow {
  label: string;
  value: React.ReactNode;
}

export interface EventCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  iconBg?: string;
  iconFg?: string;
  meta: MetaRow[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
}

export interface StatusCardProps {
  title: string;
  meta: string;
  thumbnail?: React.ReactNode;
  thumbnailBg?: string;
  onClick?: () => void;
  className?: string;
}

export type AlertSeverity = 'info' | 'warning' | 'error' | 'success';

export interface AlertCardProps {
  title: string;
  subtitle?: string;
  severity?: AlertSeverity;
  thumbnail?: React.ReactNode;
  thumbnailBg?: string;
  location?: string;
  datetime?: string;
  onClick?: () => void;
  className?: string;
}

export declare const EventCard: React.FC<EventCardProps>;
export declare const StatusCard: React.FC<StatusCardProps>;
export declare const AlertCard: React.FC<AlertCardProps>;
