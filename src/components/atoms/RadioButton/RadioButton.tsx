import clsx from 'clsx';
import React, { FC } from 'react'

import { RadioWrapper, RadioLabel, HiddenRadio, StyledRadio, LabelText, RadioDot } from './Radiobutton.styles'



export interface RadioOptionProps {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioButtonProps {
  name: string;
  options: RadioOptionProps[];
  value: string;
  onChange: (value: string) => void;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  options,
  value,
  onChange,
  color = '#3b82f6',
  size = 'md'
}) => {
return (
  <RadioWrapper role="radiogroup">
    {options.map((option) => (
      <RadioLabel key={option.value} $disabled={option.disabled}>
        <HiddenRadio
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={(e) => onChange(e.target.value)}
          disabled={option.disabled}
        />
        <StyledRadio
          $checked={value === option.value}
          $color={color}
          $size={size}
          data-checked={value === option.value}
        >
          <RadioDot $color={color} $size={size} />
        </StyledRadio>
        <LabelText $size={size}>{option.label}</LabelText>
      </RadioLabel>
    ))}
  </RadioWrapper>
);
};



