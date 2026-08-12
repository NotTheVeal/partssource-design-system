import * as React from 'react';

export type SelectionState = 'default' | 'hover' | 'focus' | 'pressed' | 'disabled';

export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  state?: SelectionState;
  disabled?: boolean;
  className?: string;
}

export interface RadioProps {
  label?: React.ReactNode;
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
  state?: SelectionState;
  disabled?: boolean;
  className?: string;
}

export interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: React.ReactNode;
  className?: string;
}

export declare const Checkbox: React.FC<CheckboxProps>;
export declare const Radio: React.FC<RadioProps>;
export declare const Toggle: React.FC<ToggleProps>;
