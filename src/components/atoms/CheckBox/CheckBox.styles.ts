// ========================================
// Checkbox.tsx
// ========================================

import React from 'react';
import styled from 'styled-components';

export const CheckboxWrapper = styled.label<{ $disabled?: boolean }>`
  display: inline-flex; 
  align-items: center; 
  gap: 8px; 
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'}; 
  opacity: ${props => props.$disabled ? 0.5 : 1}; 
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
  $color: string;
  $size: 'sm' | 'md' | 'lg';
}>`
  width: ${props => props.$size === 'sm' ? '16px' : props.$size === 'lg' ? '24px' : '20px'};
  height: ${props => props.$size === 'sm' ? '16px' : props.$size === 'lg' ? '24px' : '20px'};
  border: 2px solid ${props => (props.$checked || props.$indeterminate) ? props.$color : '#d1d5db'};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: ${props => (props.$checked || props.$indeterminate) ? props.$color : 'white'};

  &:hover {
    border-color: ${props => props.$color};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${props => `${props.$color}20`};
  }
`;

export const CheckIcon = styled.div<{ $visible: boolean; $size: 'sm' | 'md' | 'lg' }>`
  color: white; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  opacity: ${props => props.$visible ? 1 : 0}; 
  transform: scale(${props => props.$visible ? 1 : 0.5}); 
  transition: all 0.2s ease;
`;

export const CheckboxLabel = styled.span<{ $size: 'sm' | 'md' | 'lg' }>`
  font-size: ${props => props.$size === 'sm' ? '13px' : props.$size === 'lg' ? '16px' : '14px'}; 
  color: #1a1a1a;
`;




