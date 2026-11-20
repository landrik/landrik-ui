import styled, { DefaultTheme } from 'styled-components';
import { RadioButtonSize } from './RadioButton.types';

const RADIO_SIZES: Record<RadioButtonSize, { outer: string; dot: string; font: string }> = {
  sm: { outer: '16px', dot: '8px', font: '13px' },
  md: { outer: '20px', dot: '10px', font: '14px' },
  lg: { outer: '24px', dot: '12px', font: '16px' },
};

const getActiveColor = (props: { $color?: string; theme: DefaultTheme }) =>
  props.$color || props.theme?.color?.accent?.bgDefault || '#3b82f6';

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RadioLabel = styled.label<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  user-select: none;
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledRadio = styled.div<{
  $checked: boolean;
  $color?: string;
  $size: RadioButtonSize;
}>`
  width: ${(props) => RADIO_SIZES[props.$size].outer};
  height: ${(props) => RADIO_SIZES[props.$size].outer};
  border: 2px solid
    ${(props) =>
      props.$checked
        ? getActiveColor(props)
        : props.theme?.color?.border?.default || '#d1d5db'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
  background: ${(props) => props.theme?.color?.surface?.raised || 'white'};

  ${HiddenRadio}:not(:disabled) + &:hover,
  ${RadioLabel}:hover ${HiddenRadio}:not(:disabled) + & {
    border-color: ${(props) => getActiveColor(props)};
  }

  ${HiddenRadio}:focus-visible + & {
    box-shadow: 0 0 0 3px ${(props) => `${getActiveColor(props)}33`};
  }
`;

export const RadioDot = styled.div<{
  $color?: string;
  $size: RadioButtonSize;
}>`
  width: ${(props) => RADIO_SIZES[props.$size].dot};
  height: ${(props) => RADIO_SIZES[props.$size].dot};
  border-radius: 50%;
  background: ${(props) => getActiveColor(props)};
  transform: scale(0);
  transition: transform 0.2s ease;

  ${StyledRadio}[data-checked="true"] & {
    transform: scale(1);
  }
`;

export const LabelText = styled.span<{ $size: RadioButtonSize }>`
  font-size: ${(props) => RADIO_SIZES[props.$size].font};
  color: ${(props) => props.theme?.color?.text?.default || '#1a1a1a'};
`;
