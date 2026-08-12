import * as React from 'react';

export interface DrawerProps {
  open: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  onClose: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number | string;
  className?: string;
}

export declare const Drawer: React.FC<DrawerProps>;
