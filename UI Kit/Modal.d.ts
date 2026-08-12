import * as React from 'react';

export interface ModalProps {
  open: boolean;
  title?: React.ReactNode;
  onClose: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number | string;
  className?: string;
}

export interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export declare const Modal: React.FC<ModalProps>;
export declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
