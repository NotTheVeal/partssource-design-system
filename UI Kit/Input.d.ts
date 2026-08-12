import * as React from 'react';

export type InputSize = 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  size?: InputSize;
  state?: 'default' | 'hover' | 'focus' | 'withValue' | 'disabled' | 'error';
  error?: string;
  helperText?: string;
}

export interface DropdownProps extends Omit<InputProps, 'type' | 'onSelect'> {
  options: Array<{ label: string; value: string }>;
  onSelect?: (value: string) => void;
}

export declare const Input: React.FC<InputProps>;
export declare const Dropdown: React.FC<DropdownProps>;
