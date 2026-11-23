import styled from 'styled-components';
import { DatePickerShape } from './DatePicker.types';

export const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const TriggerButton = styled.button<{
  $isOpen: boolean;
  $error: boolean;
  $hasValue: boolean;
  $shape: DatePickerShape;
}>`
  width: 100%;
  padding: 10px 14px;
  background: ${({ theme }) => theme?.color?.surface?.raised || '#ffffff'};
  border: 2px solid
    ${({ theme, $error, $isOpen }) =>
      $error
        ? theme?.color?.danger?.border || '#c03a3a'
        : $isOpen
          ? theme?.color?.border?.focus || '#1a0596'
          : theme?.color?.border?.default || '#d1d5db'};

  border-radius: ${({ theme, $shape }) => {
    switch ($shape) {
      case 'pill':
        return theme?.radius?.full || '9999px';
      case 'square':
        return theme?.radius?.none || '0rem';
      case 'rounded':
      default:
        return theme?.radius?.lg || '0.5rem';
    }
  }};

  font-family: ${({ theme }) => theme?.typography?.family?.sans || 'inherit'};
  font-size: ${({ theme }) => theme?.typography?.size?.sm || '0.875rem'};
  color: ${({ theme, $hasValue }) =>
    $hasValue
      ? theme?.color?.text?.default || '#111827'
      : theme?.color?.text?.muted || '#9ca3af'};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
  transition: ${({ theme }) => theme?.transitions?.preset?.base || 'all 0.2s ease'};

  &:hover:not(:disabled) {
    border-color: ${({ theme, $error }) =>
      $error
        ? theme?.color?.danger?.border || '#c03a3a'
        : theme?.color?.border?.strong || '#9ca3af'};
  }

  &:focus-visible {
    outline: none;
    border-color: ${({ theme, $error }) =>
      $error
        ? theme?.color?.danger?.border || '#c03a3a'
        : theme?.color?.border?.focus || '#1a0596'};
    box-shadow: 0 0 0 3px
      ${({ theme, $error }) =>
        $error
          ? `${theme?.color?.danger?.bgDefault || '#c03a3a'}33`
          : `${theme?.color?.border?.focus || '#1a0596'}33`};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: ${({ theme }) => theme?.color?.surface?.sunken || '#f3f4f6'};
  }
`;

export const TriggerLeft = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TriggerActions = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme?.color?.text?.icon || '#6b7280'};
  flex-shrink: 0;
`;

export const ClearButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: ${({ theme }) => theme?.radius?.full || '9999px'};
  color: ${({ theme }) => theme?.color?.text?.muted || '#9ca3af'};
  transition: ${({ theme }) => theme?.transitions?.preset?.fast || 'all 0.15s ease'};

  &:hover {
    color: ${({ theme }) => theme?.color?.text?.default || '#111827'};
    background: ${({ theme }) => theme?.color?.neutral?.bgSubtle || '#f3f4f6'};
  }
`;

export const Popover = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: ${({ theme }) => theme?.zIndices?.popover || 1400};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '-6px')});
  transition: ${({ theme }) => theme?.transitions?.preset?.base || 'all 0.2s ease'};
`;
