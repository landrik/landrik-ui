import styled from 'styled-components';

export const CalendarContainer = styled.div`
  width: 320px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.surface.raised};
  border: 1px solid ${({ theme }) => theme.color.border.default};
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
  color: ${({ theme }) => theme.color.text.default};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.preset.base};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.neutral.bgSubtle};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.focus};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const CalendarTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  color: ${({ theme }) => theme.color.text.default};
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
  color: ${({ theme }) => theme.color.text.muted};
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
  font-family: ${({ theme }) => theme.typography.family.sans};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${(p) =>
    p.$isSelected ? p.theme.typography.weight.semibold : p.theme.typography.weight.normal};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: ${(p) => (p.$isDisabled ? 'not-allowed' : 'pointer')};
  transition: ${({ theme }) => theme.transitions.preset.base};

  background-color: ${(p) => {
    if (p.$isSelected) return p.theme.color.accent.bgDefault;
    if (p.$isToday) return p.theme.color.accent.bgSubtle;
    return 'transparent';
  }};

  color: ${(p) => {
    if (p.$isSelected) return p.theme.color.accent.onFill;
    if (p.$isDisabled) return p.theme.color.text.disabled;
    if (p.$isToday) return p.theme.color.accent.text;
    if (p.$isOtherMonth) return p.theme.color.text.muted;
    return p.theme.color.text.default;
  }};

  &:hover:not(:disabled) {
    background-color: ${(p) =>
      p.$isSelected ? p.theme.color.accent.bgHover : p.theme.color.neutral.bgSubtle};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.focus};
    outline-offset: -2px;
  }
`;
