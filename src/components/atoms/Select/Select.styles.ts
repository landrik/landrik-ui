import styled, { DefaultTheme } from 'styled-components';

const getActiveColor = (props: { $color?: string; theme: DefaultTheme }) =>
  props.$color || props.theme?.color?.accent?.bgDefault || '#3b82f6';

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectButton = styled.button<{
  $isOpen: boolean;
  $color?: string;
  $error?: boolean;
  $shape: 'rounded' | 'square' | 'pill';
}>`
  width: 100%;
  padding: 10px 16px;
  background: ${({ theme }) => theme?.color?.surface?.raised || '#ffffff'};
  border: 2px solid
    ${(props) =>
      props.$error
        ? props.theme?.color?.danger?.border || '#c03a3a'
        : props.$isOpen
          ? getActiveColor(props)
          : props.theme?.color?.border?.default || '#e5e7eb'};

  border-radius: ${(props) => {
    switch (props.$shape) {
      case 'pill':
        return props.theme?.radius?.full || '9999px';
      case 'rounded':
        return props.theme?.radius?.lg || '0.5rem';
      case 'square':
        return props.theme?.radius?.none || '0rem';
    }
  }};

  font-size: ${({ theme }) => theme?.typography?.size?.sm || '0.875rem'};
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
  color: ${({ theme }) => theme?.color?.text?.default || '#111827'};

  &:hover:not(:disabled) {
    border-color: ${(props) =>
      props.$error
        ? props.theme?.color?.danger?.border || '#c03a3a'
        : getActiveColor(props)};
  }

  &:focus-visible {
    outline: none;
    border-color: ${(props) =>
      props.$error
        ? props.theme?.color?.danger?.border || '#c03a3a'
        : getActiveColor(props)};
    box-shadow: 0 0 0 3px
      ${(props) =>
        props.$error
          ? `${props.theme?.color?.danger?.bgDefault || '#c03a3a'}33`
          : `${getActiveColor(props)}33`};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: ${({ theme }) => theme?.color?.surface?.sunken || '#f3f4f6'};
  }
`;

export const ChevronIcon = styled.div<{ $isOpen: boolean }>`
  display: flex;
  color: ${({ theme }) => theme?.color?.text?.icon || '#6b7280'};
  transition: transform 0.2s ease;
  transform: rotate(${(props) => (props.$isOpen ? '180deg' : '0deg')});
`;

export const Dropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: ${({ theme }) => theme?.color?.surface?.raised || '#ffffff'};
  border: 1px solid ${({ theme }) => theme?.color?.border?.default || '#e5e7eb'};
  border-radius: ${({ theme }) => theme?.radius?.lg || '0.5rem'};
  box-shadow: ${({ theme }) => theme?.shadows?.md || '0 4px 6px rgba(0, 0, 0, 0.1)'};
  max-height: 240px;
  overflow-y: auto;
  z-index: ${({ theme }) => theme?.zIndices?.dropdown || 1000};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  transform: translateY(${(props) => (props.$isOpen ? '0' : '-8px')});
  transition: all 0.2s ease;
`;

export const Option = styled.div<{
  $selected: boolean;
  $highlighted?: boolean;
  $color?: string;
}>`
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme?.typography?.size?.sm || '0.875rem'};
  transition: background 0.15s ease;

  color: ${(props) =>
    props.$selected
      ? props.$color || props.theme?.color?.accent?.text || '#1a0596'
      : props.theme?.color?.text?.default || '#111827'};

  background: ${(props) =>
    props.$selected
      ? `${getActiveColor(props)}18`
      : props.$highlighted
        ? props.theme?.color?.neutral?.bgSubtle || '#f3f4f6'
        : 'transparent'};

  &:hover {
    background: ${(props) =>
      props.$selected
        ? `${getActiveColor(props)}18`
        : props.theme?.color?.neutral?.bgSubtle || '#f3f4f6'};
  }

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme?.typography?.size?.xs || '0.75rem'};
  color: ${({ theme }) => theme?.color?.danger?.text || '#c03a3a'};
  margin-top: 4px;
  display: block;
`;
