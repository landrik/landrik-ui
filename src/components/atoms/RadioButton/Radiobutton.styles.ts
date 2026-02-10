// ========================================
// RadioButton.tsx
// ========================================

import React from 'react';
import styled from 'styled-components';

export const RadioWrapper = styled.div`
  display: flex; 
  flex-direction: 
  column; gap: 8px;
`;

export const RadioLabel = styled.label<{ $disabled?: boolean }>`
  display: flex; 
  align-items: center; 
  gap: 8px; 
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'}; 
  opacity: ${props => props.$disabled ? 0.5 : 1}; 
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
  $color: string;
  $size: 'sm' | 'md' | 'lg';
}>`
  width: ${props => props.$size === 'sm' ? '16px' : props.$size === 'lg' ? '24px' : '20px'};
  height: ${props => props.$size === 'sm' ? '16px' : props.$size === 'lg' ? '24px' : '20px'};
  border: 2px solid ${props => props.$checked ? props.$color : '#d1d5db'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: white;

  &:hover {
    border-color: ${props => props.$color};
  }

  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 3px ${props => `${props.$color}20`};
  }
`;

export const RadioDot = styled.div<{ 
  $color: string; 
  $size: 'sm' | 'md' | 'lg' 
}>`
  width: ${props => props.$size === 'sm' ? '8px' : props.$size === 'lg' ? '12px' : '10px'};
  height: ${props => props.$size === 'sm' ? '8px' : props.$size === 'lg' ? '12px' : '10px'};
  border-radius: 50%;
  background: ${props => props.$color};
  transform: scale(0);
  transition: transform 0.2s ease;

  ${StyledRadio}[data-checked=“true”] & {
    transform: scale(1);
  }
`;

export const LabelText = styled.span<{ $size: 'sm' | 'md' | 'lg' }>`
  font-size: ${props => props.$size === 'sm' ? '13px' : props.$size === 'lg' ? '16px' : '14px'}; 
  color: #1a1a1a;
`;
