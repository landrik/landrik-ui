import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 320px; 
  background-color: ${p => p.theme.colors.neutral[0]}; 
  border: 1px solid ${p => p.theme.colors.neutral[300]}; 
  border-radius: ${p => p.theme.radii.lg}; 
  padding: ${p => p.theme.spacing[4]}px; 
  box-shadow: ${p => p.theme.shadows.lg};
`;

export const CalendarHeader = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  margin-bottom: ${p => p.theme.spacing[4]}px;
`;

export const CalendarHeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.neutral[700]};
  border-radius: ${p => p.theme.radii.md};
  cursor: pointer;
  transition: all ${p => p.theme.transitions.duration.base};

  &:hover {
    background-color: ${p => p.theme.colors.neutral[100]};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const CalendarTitle = styled.div`
  font-size: ${p => p.theme.typography.fontSize.base}; 
  font-weight: ${p => p.theme.typography.fontWeight.semibold}; 
  color: ${p => p.theme.colors.neutral[900]};
`;

export const CalendarGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(7, 1fr); 
  gap: ${p => p.theme.spacing[1]}px;
`;

export const CalendarWeekday = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: 32px; 
  font-size: ${p => p.theme.typography.fontSize.xs}; 
  font-weight: ${p => p.theme.typography.fontWeight.semibold}; 
  color: ${p => p.theme.colors.neutral[600]}; 
  text-transform: uppercase;
`;

export interface CalendarDayProps {
  $isToday: boolean;
  $isSelected: boolean;
  $isDisabled: boolean;
  $isOtherMonth: boolean;
}

export const CalendarDay = styled.button<CalendarDayProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  border: none;

  font-size: ${p => p.theme.typography.fontSize.sm};
  font-weight: ${p => p.$isSelected ? p.theme.typography.fontWeight.semibold : p.theme.typography.fontWeight.normal};
  border-radius: ${p => p.theme.radii.md};
  cursor: ${p => p.$isDisabled ? 'not-allowed' : 'pointer'};
  transition: all ${p => p.theme.transitions.duration.base};

  &:hover:not(:disabled) {
    background-color: ${p => p.$isSelected ? p.theme.colors.primary[700] : p.theme.colors.neutral[100]};
  }

  &:focus-visible {
    outline: 2px solid ${p => p.theme.colors.primary[500]};
    outline-offset: -2px;
  }


  background-color: ${p => {
    if (p.$isSelected) return p.theme.colors.primary[600];
    if (p.$isToday) return p.theme.colors.primary[50];
    return 'transparent';
  }};

  color: ${p => {
    if (p.$isSelected) return p.theme.colors.neutral[0];
    if (p.$isDisabled) return p.theme.colors.neutral[400];
    if (p.$isOtherMonth) return p.theme.colors.neutral[500];
    return p.theme.colors.neutral[900];
  }};

`;

