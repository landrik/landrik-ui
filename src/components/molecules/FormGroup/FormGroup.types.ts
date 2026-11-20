// import { HTMLAttributes, ReactNode } from 'react';
// export type FormGroupVariant = 'primary' | 'secondary' | 'danger';

// // export interface FormGroupProps extends HTMLAttributes<HTMLElement>{
// //   children: ReactNode;
// // }


// export interface FormValues {
//   name: string;
//   email: string;
//   role: string;
//   message: string;
//   subscribe: boolean;
// }

// export type FormErrors = Partial<Record<keyof FormValues, string>>;

// export interface SelectOption {
//   value: string;
//   label: string;
// }

// export interface FormGroupProps {
//   title?: string;
//   description?: string;
//   initialValues?: Partial<FormValues>;
//   roleOptions?: SelectOption[];
//   isSubmitting?: boolean;
//   disabled?: boolean;
//   onSubmit: (values: FormValues) => void;
//   onCancel?: () => void;
// }


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
  label?: string;
  htmlFor?: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  children: React.ReactNode;
}
