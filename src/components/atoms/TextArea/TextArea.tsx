import React, { FC, useId, useState } from 'react';
import {
  TextAreaWrapper,
  TextAreaLabel,
  StyledTextArea,
  BottomRow,
  ErrorMessage,
  HelperText,
  CharCount,
} from './TextArea.styled';
import { TextAreaProps } from './TextArea.types';

export const TextArea: FC<TextAreaProps> = ({
  id,
  labelText,
  placeholder = '',
  shape = 'rounded',
  size = 'md',
  resize = 'vertical',
  rows = 4,
  maxLength,
  showCharCount = false,
  helperText,
  errorText,
  error = false,
  success = false,
  isDisabled = false,
  isRequired = false,
  value,
  defaultValue = '',
  onChangeInput,
  className,
  ...rest
}) => {
  const generatedId = useId();
  const fieldId = id || generatedId;

  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nextValue = e.target.value;
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onChangeInput?.(nextValue);
  };

  const charLength = currentValue.length;
  const isNearLimit = Boolean(maxLength && charLength >= maxLength * 0.9);

  return (
    <TextAreaWrapper className={className}>
      {labelText && (
        <TextAreaLabel htmlFor={fieldId}>
          {labelText} {isRequired && <span aria-hidden="true">*</span>}
        </TextAreaLabel>
      )}

      <StyledTextArea
        {...rest}
        id={fieldId}
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={isDisabled}
        required={isRequired}
        value={currentValue}
        onChange={handleChange}
        $shape={shape}
        $size={size}
        $resize={resize}
        $error={Boolean(error)}
        $success={Boolean(success)}
        aria-invalid={Boolean(error) || undefined}
      />

      {(error || helperText || (showCharCount && maxLength)) && (
        <BottomRow>
          {error && errorText ? (
            <ErrorMessage role="alert">{errorText}</ErrorMessage>
          ) : helperText ? (
            <HelperText>{helperText}</HelperText>
          ) : (
            <span />
          )}

          {showCharCount && maxLength && (
            <CharCount $isNearLimit={isNearLimit}>
              {charLength}/{maxLength}
            </CharCount>
          )}
        </BottomRow>
      )}
    </TextAreaWrapper>
  );
};
