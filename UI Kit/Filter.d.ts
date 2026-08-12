import * as React from 'react';

export interface FilterChipProps {
  label: React.ReactNode;
  onRemove?: () => void;
  removable?: boolean;
  className?: string;
}

export interface FilterShellProps {
  chips?: React.ReactNode;
  onAddClick?: () => void;
  addLabel?: string;
  className?: string;
  children?: React.ReactNode;
}

export declare const FilterChip: React.FC<FilterChipProps>;
export declare const FilterShell: React.FC<FilterShellProps>;
