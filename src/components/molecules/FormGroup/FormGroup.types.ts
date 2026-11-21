import React from 'react';

export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  title?: string;
  description?: string;
  submitLabel?: string;
  cancelLabel?: string;
  isSubmitting?: boolean;
  disabled?: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel?: () => void;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

export interface FormGroupProps {
  legend?: string;
  description?: string;
  direction?: 'column' | 'row';
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}
