import * as React from 'react';

export interface PaginationProps {
  page: number;
  totalPages: number;
  total?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  compact?: boolean;
  className?: string;
}

export interface DatePickerProps {
  title?: React.ReactNode;
  startDate?: Date;
  endDate?: Date;
  onChange?: (range: { start?: Date; end?: Date }) => void;
  disabled?: boolean;
  error?: string;
  range?: boolean;
  className?: string;
}

export declare const Pagination: React.FC<PaginationProps>;
export declare const DatePicker: React.FC<DatePickerProps>;
