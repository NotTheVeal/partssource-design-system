import * as React from 'react';

export interface Column<T> {
  key: keyof T & string;
  header: React.ReactNode;
  width?: string | number;
  align?: 'left' | 'right' | 'center';
  render?: (row: T) => React.ReactNode;
  sortable?: boolean;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  getRowId?: (row: T) => string | number;
  onRowClick?: (row: T) => void;
  selectedIds?: Array<string | number>;
  onSelectionChange?: (ids: Array<string | number>) => void;
  striped?: boolean;
  emptyState?: React.ReactNode;
  className?: string;
}

export declare function Table<T extends Record<string, any>>(props: TableProps<T>): JSX.Element;
