import * as React from 'react';

export type Severity = 'success' | 'info' | 'warning' | 'fail';

export interface AlertProps {
  severity?: Severity;
  children: React.ReactNode;
  onDismiss?: () => void;
  actions?: React.ReactNode;
  className?: string;
}

export interface ToastProps {
  severity?: Severity;
  children: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
}

export declare const Alert: React.FC<AlertProps>;
export declare const Toast: React.FC<ToastProps>;
