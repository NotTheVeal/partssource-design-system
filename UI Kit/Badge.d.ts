import * as React from 'react';

export type StatusTone = 'neutral' | 'info' | 'success' | 'warning' | 'critical' | 'items';
export type ListTone = 'shopping' | 'preventative' | 'restocking';

export interface StatusBadgeProps {
  children: React.ReactNode;
  tone?: StatusTone;
  className?: string;
}

export interface ListTypeBadgeProps {
  children: React.ReactNode;
  tone?: ListTone;
  className?: string;
}

export declare const StatusBadge: React.FC<StatusBadgeProps>;
export declare const ListTypeBadge: React.FC<ListTypeBadgeProps>;
