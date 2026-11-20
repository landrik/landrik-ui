import styled, { DefaultTheme } from 'styled-components';
import { CheckBoxSize } from './CheckBox.types';

const CHECKBOX_SIZES: Record<CheckBoxSize, { box: string; font: string }> = {
  sm: { box: '16px', font: '13px' },
  md: { box: '20px', font: '14px' },
  lg: { box: '24px', font: '16px' },
};

const getActiveColor = (props: { $color?: string; theme: DefaultTheme }) =>
  props.$color || props.theme?.color?.accent?.bgDefault || '#3b82f6';

export const CheckboxWrapper = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  user-select: none;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledCheckbox = styled.div<{
  $checked: boolean;
  $indeterminate: boolean;
  $color?: string;
  $size: CheckBoxSize;
}>`
  width: ${(props) => CHECKBOX_SIZES[props.$size].box};
  height: ${(props) => CHECKBOX_SIZES[props.$size].box};
  border: 2px solid
    ${(props) =>
      props.$checked || props.$indeterminate
        ? getActiveColor(props)
        : props.theme?.color?.border?.default || '#d1d5db'};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
  background: ${(props) =>
    props.$checked || props.$indeterminate
      ? getActiveColor(props)
      : props.theme?.color?.surface?.raised || 'white'};

  ${HiddenCheckbox}:not(:disabled) + &:hover,
  ${CheckboxWrapper}:hover ${HiddenCheckbox}:not(:disabled) + & {
    border-color: ${(props) => getActiveColor(props)};
  }

  ${HiddenCheckbox}:focus-visible + & {
    box-shadow: 0 0 0 3px ${(props) => `${getActiveColor(props)}33`};
  }
`;

export const CheckIcon = styled.div<{ $visible: boolean }>`
  color: ${(props) => props.theme?.color?.accent?.onFill || 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: scale(${(props) => (props.$visible ? 1 : 0.5)});
  transition: all 0.2s ease;
`;

export const CheckboxLabel = styled.span<{ $size: CheckBoxSize }>`
  font-size: ${(props) => CHECKBOX_SIZES[props.$size].font};
  color: ${(props) => props.theme?.color?.text?.default || '#1a1a1a'};
`;
