import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 320px; 
  background-color: ${({ theme }) => theme.color.neutral.bgSubtle}; 
  border: 1px solid ${({ theme }) => theme.color.neutral.bgDefault}; 
  border-radius: ${({ theme }) => theme.radius.lg}; 
  padding: ${({ theme }) => theme.spacing[4]}px; 
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const CalendarHeader = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  margin-bottom: ${({ theme }) => theme.spacing[4]}px;
`;

export const CalendarHeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.neutral.bgActive};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.duration.base};

  &:hover {
    background-color: ${({ theme }) => theme.color.neutral.bgSubtle};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const CalendarTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.size.base}; 
  font-weight: ${({ theme }) => theme.typography.weight.semibold}; 
  color: ${({ theme }) => theme.color.neutral.bgActive};
`;

export const CalendarGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(7, 1fr); 
  gap: ${({ theme }) => theme.spacing[4]}px;
`;

export const CalendarWeekday = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: 32px; 
  font-size: ${({ theme }) => theme.typography.size.xs}; 
  font-weight: ${({ theme }) => theme.typography.weight.semibold}; 
  color: ${({ theme }) => theme.color.neutral.bgDefault}; 
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

  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${p => p.$isSelected ? p.theme.typography.weight.semibold : p.theme.typography.weight.normal};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: ${p => p.$isDisabled ? 'not-allowed' : 'pointer'};
  transition: all ${({ theme }) => theme.transitions.duration.base};

  &:hover:not(:disabled) {
    background-color: ${p => p.$isSelected ? p.theme.color.accent.bgActive : p.theme.color.neutral.bgSubtle};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.accent.bgDefault};
    outline-offset: -2px;
  }


  background-color: ${p => {
    if (p.$isSelected) return p.theme.color.accent.bgDefault;
    if (p.$isToday) return p.theme.color.accent.bgSubtle;
    return 'transparent';
  }};

  color: ${p => {
    if (p.$isSelected) return p.theme.color.neutral.bgSubtle;
    if (p.$isDisabled) return p.theme.color.neutral.bgSubtle;
    if (p.$isOtherMonth) return p.theme.color.neutral.bgDefault;
    return p.theme.color.neutral.bgActive;
  }};

`;

