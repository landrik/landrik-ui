import styled, { css } from "styled-components"


export type InputShape= 'rounded' | 'square' | 'pill';

const shapeStyles: Record<InputShape, ReturnType<typeof css>> = {
  square: css`
    border-radius: ${props => props.theme.radii.none}
  `,
  rounded: css`
    border-radius: ${props => props.theme.radii.lg}
  `,
  pill: css`
    border-radius: ${props => props.theme.radii.full}
  `
}

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 8px;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.neutral[700]};
  margin-bottom: ${props => props.theme.spacing[1]}px;
`;

export const InputContainer = styled.div<{
  $shape: InputShape;
  $error: boolean;
}>`
  
  
  position: relative;
  display: flex;
  align-items: center;

  transition: all 0.2s ease;
  border: 2px solid ${props => props.$error ? props.theme.colors.semantic.error : props.theme.colors.neutral[300]};

  color: ${props => props.theme.colors.neutral[900]};
  background-color: ${props => props.theme.colors.neutral[0]};
 

  &:focus-within {
    border-color:${props => props.$error ? props.theme.colors.semantic.error : props.theme.colors.neutral[300]}
    box-shadow: 0 0 0 3px ${props => props.$error ? props.theme.colors.semantic.error : props.theme.colors.neutral[300]}
    
  }

  &:hover:not(:focus-within){
    border-color:${props => props.$error ? props.theme.colors.semantic.error : '#d1d5db'}
  }

  &:disabled{
    background: ${props => props.theme.colors.neutral[50]};
    cursor: not-allowed;
  }

  ${props =>  shapeStyles[props.$shape]}
  
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  
  background: transparent;
  color: ${props => props.theme.colors.neutral[900]};

  padding: ${props => props.theme.spacing[3]}px;
  font-size: ${props => props.theme.typography.fontSize.base};

  outline: none;
  &::placeholder {
    color: #9ca3af;
  }
`;

export const IconWrapper = styled.div<{  $error: boolean; $position: 'left' | 'right' }>`
  display: flex;
  align-items:center;
  justify-content: center;
  color: ${props => props.$error ? props.theme.colors.semantic.error : props.theme.colors.neutral[900]};
  padding-left: ${props => props.$position === 'left' ? '12px' : '0'};
  padding-right: ${props => props.$position === 'right' ? '12px' : '0'};   
`;

export const StatusIcon = styled.div<{ $error: boolean }>`
  display: flex;
  align-items: center;
  padding-right: 12px;
  color: ${props => props.$error ? props.theme.colors.semantic.error : props.theme.colors.neutral[900]};
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 12px;
  border: none;
  background: transparent;
  color: ${props => props.theme.colors.neutral[900]};
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: ${props => props.theme.colors.neutral[900]};
  }
  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  margin-top: ${props => props.theme.spacing[1]}px;
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.semantic.error};
`;