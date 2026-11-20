import styled, { css } from 'styled-components';

interface CollapseContainerProps {
  $bordered: boolean;
}

export const CollapseContainer = styled.div<CollapseContainerProps>`
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;

  ${(p) =>
    p.$bordered &&
    css`
      border: 1px solid ${p.theme.color.border.default};
    `}
`;

interface CollapseHeaderProps {
  $disabled: boolean;
  $bordered: boolean;
}

export const CollapseHeader = styled.button<CollapseHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[4]}px;
  background-color: ${({ theme }) => theme.color.surface.raised};
  border: none;
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  font-family: ${({ theme }) => theme.typography.family.sans};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.color.text.default};
  text-align: left;
  transition: background-color ${({ theme }) => theme.transitions.preset.base};
  opacity: ${(p) => (p.$disabled ? 0.5 : 1)};

  ${(p) =>
    !p.$bordered &&
    css`
      border-bottom: 1px solid ${p.theme.color.border.default};
    `}

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.neutral.bgSubtle};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.focus};
    outline-offset: -2px;
  }
`;

export const CollapseTitle = styled.span`
  flex: 1;
`;

interface CollapseIconProps {
  $isOpen: boolean;
}

export const CollapseIcon = styled.span<CollapseIconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing[12]}px;
  color: ${({ theme }) => theme.color.text.icon};
  transform: rotate(${(p) => (p.$isOpen ? '180deg' : '0deg')});
  transition: transform ${({ theme }) => theme.transitions.preset.base};
`;

interface CollapseContentProps {
  $isOpen: boolean;
  $maxHeight: number;
}

export const CollapseContent = styled.div<CollapseContentProps>`
  max-height: ${(p) => (p.$isOpen ? `${p.$maxHeight}px` : '0')};
  overflow: hidden;
  transition: max-height ${({ theme }) => theme.transitions.preset.base};
`;

export const CollapseInner = styled.div`
  padding: ${({ theme }) => theme.spacing[4]}px;
  background-color: ${({ theme }) => theme.color.surface.default};
  color: ${({ theme }) => theme.color.text.default};
`;
