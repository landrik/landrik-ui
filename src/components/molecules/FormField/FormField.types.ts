import { HTMLAttributes, ReactNode } from 'react';

export interface FormFieldProps {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  className?: string;
  children: ReactNode;
}
