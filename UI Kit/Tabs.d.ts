import * as React from 'react';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  count?: number;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeId?: string;
  defaultActiveId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

/** Page-level sub-nav with 3px brand-blue top border on active tab. */
export declare const FolderTabs: React.FC<TabsProps>;
/** Compact icon-only switcher inside a single rounded container. */
export declare const SegmentedTabs: React.FC<TabsProps>;
/** Multi-select chip row for filtering. */
export declare const PillTabs: React.FC<TabsProps>;
