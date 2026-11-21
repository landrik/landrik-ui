import styled, { css } from 'styled-components';
import { TextAreaShape, TextAreaSize, TextAreaResize } from './TextArea.types';

const shapeStyles: Record<TextAreaShape, ReturnType<typeof css>> = {
  square: css`
    border-radius: ${({ theme }) => theme?.radius?.none || '0rem'};
  `,
  rounded: css`
    border-radius: ${({ theme }) => theme?.radius?.lg || '0.5rem'};
  `,
  pill: css`
    border-radius: ${({ theme }) => theme?.radius?.['2xl'] || '1rem'};
  `,
};

const sizeStyles: Record<TextAreaSize, { padding: string; fontSize: string }> = {
  sm: { padding: '8px 12px', fontSize: '0.875rem' },
  md: { padding: '12px', fontSize: '1rem' },
  lg: { padding: '14px 16px', fontSize: '1.125rem' },
};

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => `${theme?.spacing?.[4]}px`};
  width: 100%;
`;

export const TextAreaLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme?.typography?.size?.sm || '0.875rem'};
  font-weight: ${({ theme }) => theme?.typography?.weight?.medium || 500};
  color: ${({ theme }) => theme?.color?.text?.default || '#111827'};

  span {
    color: ${({ theme }) => theme?.color?.danger?.text || '#c03a3a'};
  }
`;

export const StyledTextArea = styled.textarea<{
  $shape: TextAreaShape;
  $size: TextAreaSize;
  $resize: TextAreaResize;
  $error: boolean;
  $success: boolean;
}>`
  width: 100%;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme?.typography?.family?.sans || 'inherit'};
  padding: ${({ $size }) => sizeStyles[$size].padding};
  font-size: ${({ $size }) => sizeStyles[$size].fontSize};
  line-height: ${({ theme }) => theme?.typography?.lineHeight?.normal || 1.5};
  resize: ${({ $resize }) => $resize};
  transition: all 0.2s ease;
  outline: none;

  border: 2px solid
    ${({ theme, $error, $success }) =>
      $error
        ? theme?.color?.danger?.border || '#c03a3a'
        : $success
          ? theme?.color?.success?.border || '#3a9e70'
          : theme?.color?.border?.default || '#d1d5db'};

  color: ${({ theme }) => theme?.color?.text?.default || '#111827'};
  background-color: ${({ theme }) => theme?.color?.surface?.raised || '#ffffff'};

  &::placeholder {
    color: ${({ theme }) => theme?.color?.text?.muted || '#9ca3af'};
  }

  &:hover:not(:focus):not(:disabled) {
    border-color: ${({ theme, $error }) =>
      $error
        ? theme?.color?.danger?.border || '#c03a3a'
        : theme?.color?.border?.strong || '#9ca3af'};
  }

  &:focus {
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
    background-color: ${({ theme }) => theme?.color?.surface?.sunken || '#f3f4f6'};
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ $shape }) => shapeStyles[$shape]}
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  min-height: 16px;
`;

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme?.typography?.size?.xs || '0.75rem'};
  color: ${({ theme }) => theme?.color?.danger?.text || '#c03a3a'};
`;

export const HelperText = styled.span`
  font-size: ${({ theme }) => theme?.typography?.size?.xs || '0.75rem'};
  color: ${({ theme }) => theme?.color?.text?.muted || '#6b7280'};
`;

export const CharCount = styled.span<{ $isNearLimit?: boolean }>`
  font-size: ${({ theme }) => theme?.typography?.size?.xs || '0.75rem'};
  color: ${({ theme, $isNearLimit }) =>
    $isNearLimit
      ? theme?.color?.warning?.text || '#b07d0a'
      : theme?.color?.text?.muted || '#6b7280'};
  margin-left: auto;
  flex-shrink: 0;
`;
