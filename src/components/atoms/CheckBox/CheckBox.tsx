import React, { FC, useState, useEffect, ChangeEvent, useRef } from 'react'
import {Icon} from '../Icons';
import { icons, IconName  } from '../../../assets/svgs';
//export type IconType = keyof typeof icons;

import { CheckboxProps } from './CheckBox.types';
import {CheckboxWrapper, HiddenCheckbox, StyledCheckbox, CheckIcon, CheckboxLabel } from './CheckBox.styles'


export const CheckBox:FC<CheckboxProps> = ({
  label,
  checked,
  defaultChecked= false,
  onChange,
  disabled = false,
  indeterminate = false,
  color,
  size = 'md'
}) => {

  const inputRef = useRef<HTMLInputElement>(null);

  //const iconSize = size === 'sm' ? 12 : size === 'lg' ? 18 : 14;
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate])
  

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const nextChecked = e.target.checked;
    if(!isControlled) setInternalChecked(nextChecked);
    onChange?.(nextChecked)
  }

  return (
    <CheckboxWrapper $disabled={disabled}>
      <HiddenCheckbox
        ref={inputRef}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
      />
      <StyledCheckbox
        $checked={isChecked}
        $indeterminate={indeterminate}
        $color={color}
        $size={size}
      >
        <CheckIcon $visible={indeterminate || isChecked}>
          {indeterminate ? <Icon name={'minus'} size={size} /> : <Icon name={'check'} size={size} />}
        </CheckIcon>
      </StyledCheckbox>
      {label && <CheckboxLabel $size={size}>{label}</CheckboxLabel>}
    </CheckboxWrapper>
  );
};
