// ========================================
// Tabs.tsx
// ========================================

import styled from 'styled-components';

export const TabsContainer = styled.div`width: 100%;`;

export const TabList = styled.div<{ $variant: 'line' | 'enclosed' | 'pills' }>`
  display: flex; 
  gap: ${props => props.$variant === 'pills' ? '8px' : '0'}; 
  border-bottom: ${props => props.$variant === 'line' ? '2px solid #e5e7eb' : 'none'}; 
  background: ${props => props.$variant === 'enclosed' ? '#f9fafb' : 'transparent'}; 
  padding: ${props => props.$variant === 'enclosed' ? '4px' : '0'}; 
  border-radius: ${props => props.$variant === 'enclosed' ? '8px' : '0'};
`;

export const Tab = styled.button<{
  $active: boolean;
  $color: string;
  $variant: 'line' | 'enclosed' | 'pills';
}>`
  padding: 12px 20px;
  border: none;
  background: ${props => {
    if (props.$variant === 'pills' && props.$active) return props.$color;
    if (props.$variant === 'enclosed' && props.$active) return 'white';
    return 'transparent';
  }};
  color: ${props => {
    if (props.$variant === 'pills' && props.$active) return 'white';
    if (props.$active) return props.$color;
    return '#6b7280';
  }};
  font-size: 14px;
  font-weight: ${props => props.$active ? 600 : 500};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  border-radius: ${props => props.$variant === 'pills' || props.$variant === 'enclosed' ? '6px' : '0'};
  white-space: nowrap;
  box-shadow: ${props => props.$variant === 'enclosed' && props.$active ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'};

  ${props => props.$variant === 'line' && props.$active && `&::after { 
      content: ''; 
      position: absolute; 
      bottom: -2px; 
      left: 0; 
      right: 0; 
      height: 2px; 
      background: ${props.$color}; 
    }`
  }

  &:hover {
    color: ${props => props.$variant === 'pills' && props.$active ? 'white' : props.$color};
    background: ${props => {
      if (props.$variant === 'pills' && !props.$active) return `${props.$color}10`;
      if (props.$variant === 'enclosed' && !props.$active) return '#f3f4f6';
      return props.$active ? undefined : 'transparent';
    }};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabPanel = styled.div`padding: 20px 0;`;
