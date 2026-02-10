// ========================================
// Select.tsx
// ========================================

import styled from 'styled-components';


export const SelectWrapper = styled.div`position: relative; width: 100%;`;

export const SelectButton = styled.button<{
  $isOpen: boolean;
  $color: string;
  $error?: boolean;
  $shape: 'rounded' | 'square' | 'pill';
}>`
  width: 100%;
  padding: 10px 16px;
  background: white;
  border: 2px solid ${props => props.$error ? '#ef4444' : props.$isOpen ? props.$color : '#e5e7eb'};
  border-radius: ${props => {
    switch(props.$shape) {
      case 'pill': return '999px';
      case 'rounded': return '8px';
      case 'square': return '4px';
    }
}};
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
  color: ${props => props.color || '#1a1a1a'};

&:hover {
  border-color: ${props => props.$error ? '#ef4444' : props.$color};
}

&:focus {
  outline: none;
  border-color: ${props => props.$error ? '#ef4444' : props.$color};
  box-shadow: 0 0 0 3px ${props => props.$error ? '#fee2e2' : `${props.$color}20`};
}

&:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
`;

export const ChevronIcon = styled.div<{ $isOpen: boolean }>`
  display: flex; 
  color: #6b7280; 
  transition: transform 0.2s ease; 
  transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
`;

export const Dropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute; 
  top: calc(100% + 4px); 
  left: 0; 
  right: 0; 
  background: white; 
  border: 1px solid #e5e7eb; 
  border-radius: 8px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  max-height: 240px; 
  overflow-y: auto; 
  z-index: 1000; 
  opacity: ${props => props.$isOpen ? 1 : 0}; 
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'}; 
  transform: translateY(${props => props.$isOpen ? '0' : '-8px'}); 
  transition: all 0.2s ease;
`;

export const Option = styled.div<{ $selected: boolean; $color: string }>`
  padding: 10px 16px; 
  cursor: pointer; 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  transition: background 0.15s ease; 
  color: ${props => props.$selected ? props.$color : '#1a1a1a'}; 
  background: ${props => props.$selected ?`${props.$color}10` : 'transparent'};

  &:hover {
    background: ${props => props.$selected ? `${props.$color}10` : '#f9fafb'};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px; 
  color: #ef4444; 
  margin-top: 4px; 
  display: block;
`;
