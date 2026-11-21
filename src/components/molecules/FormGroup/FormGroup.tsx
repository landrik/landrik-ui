import React from 'react';
import { Button } from '../../atoms/Button/Button';
import {
  StyledForm,
  Header,
  Title,
  Description,
  FieldsContainer,
  StyledFieldset,
  Legend,
  GroupDescription,
  GroupItems,
  Actions,
  FooterWrapper,
} from './FormGroup.styled';
import { FormProps, FormGroupProps } from './FormGroup.types';

/* ---------- FormGroup: Semantic Section / Row of FormFields ---------- */
export const FormGroup: React.FC<FormGroupProps> = ({
  legend,
  description,
  direction = 'column',
  disabled = false,
  className,
  children,
}) => {
  return (
    <StyledFieldset disabled={disabled} className={className}>
      {legend && <Legend>{legend}</Legend>}
      {description && <GroupDescription>{description}</GroupDescription>}
      <GroupItems $direction={direction}>{children}</GroupItems>
    </StyledFieldset>
  );
};

/* ---------- Form: Root Form Container with Header & Actions ---------- */
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
