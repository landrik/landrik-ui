import React, { FC, useState } from 'react';
import { RadioButtonProps } from './RadioButton.types';
import {
  RadioWrapper,
  RadioLabel,
  HiddenRadio,
  StyledRadio,
  LabelText,
  RadioDot,
} from './RadioButton.styles';

export const RadioButton: FC<RadioButtonProps> = ({
  name,
  options,
  value,
  defaultValue,
  onChange,
  disabled = false,
  color,
  size = 'md',
  ariaLabel,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = value !== undefined;
  const selectedValue = isControlled ? value : internalValue;

  const handleSelect = (optionValue: string) => {
    if (!isControlled) {
      setInternalValue(optionValue);
    }
    onChange?.(optionValue);
  };

  return (
    <RadioWrapper role="radiogroup" aria-label={ariaLabel || name}>
      {options.map((option) => {
        const isChecked = selectedValue === option.value;
        const isOptionDisabled = disabled || Boolean(option.disabled);

        return (
          <RadioLabel key={String(option.value)} $disabled={isOptionDisabled}>
            <HiddenRadio
              type="radio"
              name={name}
              value={option.value}
              checked={isChecked}
              onChange={() => handleSelect(option.value)}
              disabled={isOptionDisabled}
            />
            <StyledRadio
              $checked={isChecked}
              $color={color}
              $size={size}
              data-checked={isChecked}
            >
              <RadioDot $color={color} $size={size} />
            </StyledRadio>
            <LabelText $size={size}>{option.label}</LabelText>
          </RadioLabel>
        );
      })}
    </RadioWrapper>
  );
};
