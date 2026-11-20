import React, { useId } from 'react';
import { Button } from '../../atoms/Button/Button';
import {
  StyledForm,
  Header,
  Title,
  Description,
  FieldsContainer,
  FieldWrapper,
  Label,
  Required,
  HelperText,
  ErrorText,
  Actions,
  FooterWrapper,
} from './FormGroup.styled';
import { FormProps, FormGroupProps } from './FormGroup.types';

/* ---------- FormGroup: Label + Control + Helper/Error ---------- */
export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  htmlFor,
  required = false,
  helperText,
  error,
  children,
}) => {
  const generatedId = useId();
  const fieldId = htmlFor || generatedId;
  const messageId = error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined;

  // Clone single child element to automatically connect id and ARIA attributes
  const enhancedChild = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
        id: fieldId,
        'aria-invalid': Boolean(error) || undefined,
        'aria-describedby': messageId,
      })
    : children;

  return (
    <FieldWrapper>
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

/* ---------- Form: Header + Fields + Actions ---------- */
export const Form: React.FC<FormProps> = ({
  title,
  description,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  isSubmitting = false,
  disabled = false,
  onSubmit,
  onCancel,
  footer,
  children,
  ...rest
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <StyledForm onSubmit={handleSubmit} noValidate {...rest}>
      {(title || description) && (
        <Header>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
        </Header>
      )}

      <FieldsContainer>{children}</FieldsContainer>

      <Actions>
        {onCancel && (
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            disabled={disabled || isSubmitting}
          >
            {cancelLabel}
          </Button>
        )}
        <Button
          type="submit"
          variant="primary"
          isLoading={isSubmitting}
          disabled={disabled || isSubmitting}
          shape="rounded"
          size="md"
        >
          {submitLabel}
        </Button>
      </Actions>

      {footer && <FooterWrapper>{footer}</FooterWrapper>}
    </StyledForm>
  );
};
