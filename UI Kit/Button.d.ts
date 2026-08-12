import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'pill' | 'arrow';
export type ButtonSize = 'sm' | 'lg';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: 'default' | 'hover' | 'focus' | 'pressed';
  loading?: boolean;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  fullWidth?: boolean;
}

export type InlineKind = 'link' | 'link-blue' | 'tall' | 'dir';

export interface ButtonInlineProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  kind?: InlineKind;
}

export declare const Button: React.FC<ButtonProps>;
export declare const ButtonInline: React.FC<ButtonInlineProps>;
export declare const BackArrowIcon: React.FC;
