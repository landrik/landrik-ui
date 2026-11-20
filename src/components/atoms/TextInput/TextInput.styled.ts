import styled, { css } from 'styled-components';

export type InputShape = 'rounded' | 'square' | 'pill';
export type InputSize = 'sm' | 'md' | 'lg';

const shapeStyles: Record<InputShape, ReturnType<typeof css>> = {
  square: css`
    border-radius: ${({ theme }) => theme?.radius?.none || '0rem'};
  `,
  rounded: css`
    border-radius: ${({ theme }) => theme?.radius?.lg || '0.5rem'};
  `,
  pill: css`
    border-radius: ${({ theme }) => theme?.radius?.full || '9999px'};
  `,
};

const sizeStyles: Record<InputSize, { padding: string; fontSize: string }> = {
  sm: { padding: '8px 12px', fontSize: '0.875rem' },
  md: { padding: '12px', fontSize: '1rem' },
  lg: { padding: '14px 16px', fontSize: '1.125rem' },
};

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: ${({ theme }) => `${theme?.spacing?.[1] ?? 4}px`};
`;

export const InputLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme?.typography?.size?.sm || '0.875rem'};
  font-weight: ${({ theme }) => theme?.typography?.weight?.medium || 500};
  color: ${({ theme }) => theme?.color?.text?.default || '#111827'};

  span {
    color: ${({ theme }) => theme?.color?.danger?.text || '#c03a3a'};
  }
`;

export const InputContainer = styled.div<{
  $shape: InputShape;
  $error: boolean;
  $success?: boolean;
  $disabled?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;

  border: 2px solid
    ${({ theme, $error, $success }) =>
      $error
        ? theme?.color?.danger?.border || '#c03a3a'
        : $success
          ? theme?.color?.success?.border || '#3a9e70'
          : theme?.color?.border?.default || '#d1d5db'};

  color: ${({ theme }) => theme?.color?.text?.default || '#111827'};
  background-color: ${({ theme, $disabled }) =>
    $disabled
      ? theme?.color?.surface?.sunken || '#f3f4f6'
      : theme?.color?.surface?.raised || '#ffffff'};

  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'text')};

  &:hover:not(:focus-within) {
    border-color: ${({ theme, $error, $disabled }) =>
      $disabled
        ? theme?.color?.border?.default || '#d1d5db'
        : $error
          ? theme?.color?.danger?.border || '#c03a3a'
          : theme?.color?.border?.strong || '#9ca3af'};
  }

  &:focus-within {
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

  ${({ $shape }) => shapeStyles[$shape]}
`;

export const StyledInput = styled.input<{ $size?: InputSize }>`
  flex: 1;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme?.color?.text?.default || '#111827'};
  padding: ${({ $size = 'md' }) => sizeStyles[$size].padding};
  font-size: ${({ $size = 'md' }) => sizeStyles[$size].fontSize};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme?.color?.text?.muted || '#9ca3af'};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const IconWrapper = styled.div<{ $error: boolean; $position: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $error }) =>
    $error
      ? theme?.color?.danger?.icon || '#c03a3a'
      : theme?.color?.text?.icon || '#6b7280'};
  padding-left: ${({ $position }) => ($position === 'left' ? '12px' : '0')};
  padding-right: ${({ $position }) => ($position === 'right' ? '12px' : '0')};
`;

export const StatusIcon = styled.div<{ $error: boolean }>`
  display: flex;
  align-items: center;
  padding-right: 12px;
  color: ${({ theme, $error }) =>
    $error
      ? theme?.color?.danger?.icon || '#c03a3a'
      : theme?.color?.success?.icon || '#3a9e70'};
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 12px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme?.color?.text?.icon || '#6b7280'};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme?.color?.text?.default || '#111827'};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme?.color?.border?.focus || '#1a0596'};
    border-radius: 4px;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: ${({ theme }) => theme?.typography?.size?.xs || '0.75rem'};
  color: ${({ theme }) => theme?.color?.danger?.text || '#c03a3a'};
`;

export const HelperText = styled.span`
  display: block;
  font-size: ${({ theme }) => theme?.typography?.size?.xs || '0.75rem'};
  color: ${({ theme }) => theme?.color?.text?.muted || '#6b7280'};
`;
