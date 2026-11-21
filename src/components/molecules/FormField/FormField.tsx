import React, { useId } from 'react';
import {
  FieldWrapper,
  Label,
  Required,
  HelperText,
  ErrorText,
} from './FormField.styled';
import { FormFieldProps } from './FormField.types';

export const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  required = false,
  helperText,
  error,
  className,
  children,
}) => {
  const generatedId = useId();
  const fieldId = htmlFor || generatedId;
  const messageId = error
    ? `${fieldId}-error`
    : helperText
      ? `${fieldId}-helper`
      : undefined;

  const enhancedChild = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
        id: fieldId,
        'aria-invalid': Boolean(error) || undefined,
        'aria-describedby': messageId,
      })
    : children;

  return (
    <FieldWrapper className={className}>
      {label && (
        <Label htmlFor={fieldId}>
          {label}
          {required && <Required aria-hidden="true">*</Required>}
        </Label>
      )}

      {enhancedChild}

      {error ? (
        <ErrorText id={`${fieldId}-error`} role="alert">
          {error}
        </ErrorText>
      ) : helperText ? (
        <HelperText id={`${fieldId}-helper`}>{helperText}</HelperText>
      ) : null}
    </FieldWrapper>
  );
};
