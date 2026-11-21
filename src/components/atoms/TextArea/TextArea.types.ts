import React from 'react';

export type TextAreaShape = 'rounded' | 'square' | 'pill';
export type TextAreaSize = 'sm' | 'md' | 'lg';
export type TextAreaResize = 'none' | 'vertical' | 'horizontal' | 'both';

export type TextAreaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'onChange' | 'disabled' | 'required'
> & {
  labelText?: string;
  placeholder?: string;
  shape?: TextAreaShape;
  size?: TextAreaSize;
  resize?: TextAreaResize;
  rows?: number;
  maxLength?: number;
  showCharCount?: boolean;
  helperText?: string;
  errorText?: string;
  error?: boolean;
  success?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  value?: string;
  defaultValue?: string;
  onChangeInput?: (value: string) => void;
};
