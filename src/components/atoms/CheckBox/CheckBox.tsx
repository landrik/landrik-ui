import clsx from 'clsx';
import React, { FC } from 'react'
import {Icon} from '../Icons';
import { icons } from '../../../assets/svgs/icons';
export type IconType = keyof typeof icons;

import {CheckboxWrapper, HiddenCheckbox, StyledCheckbox, CheckIcon, CheckboxLabel } from './CheckBox.styles'

export interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CheckBox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  indeterminate = false,
  color = '#3b82f6',
  size = 'md'
}) => {
  //const iconSize = size === 'sm' ? 12 : size === 'lg' ? 18 : 14;

  return (
    <CheckboxWrapper $disabled={disabled}>
      <HiddenCheckbox
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <StyledCheckbox
        $checked={checked}
        $indeterminate={indeterminate}
        $color={color}
        $size={size}
      >
        <CheckIcon $visible={indeterminate || checked} $size={size}>
          {indeterminate ? <Icon name={'subtract'} /> : <Icon name={'check'} />}
        </CheckIcon>
      </StyledCheckbox>
      {label && <CheckboxLabel $size={size}>{label}</CheckboxLabel>}
    </CheckboxWrapper>
  );
};
