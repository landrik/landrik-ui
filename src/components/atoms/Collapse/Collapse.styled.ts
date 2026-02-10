import styled, { css } from 'styled-components';

interface CollapseContainerProps {
$bordered: boolean;
}

export const CollapseContainer = styled.div<CollapseContainerProps>`
border-radius: ${p => p.theme.radii.lg};
overflow: hidden;

${p => p.$bordered && css`border: 1px solid ${p.theme.colors.neutral[200]};`}
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
  padding: ${p => p.theme.spacing[4]}px;
  background-color: ${p => p.theme.colors.neutral[0]};
  border: none;
  cursor: ${p => p.$disabled ? 'not-allowed' : 'pointer'};
  font-family: ${p => p.theme.typography.fontFamily.sans};
  font-size: ${p => p.theme.typography.fontSize.base};
  font-weight: ${p => p.theme.typography.fontWeight.medium};
  color: ${p => p.theme.colors.neutral[900]};
  text-align: left;
  transition: background-color ${p => p.theme.transitions.duration.base};
  opacity: ${p => p.$disabled ? 0.5 : 1};

  ${p => !p.$bordered && css`border-bottom: 1px solid ${p.theme.colors.neutral[200]};`}

  &:hover:not(:disabled) {
    background-color: ${p => p.theme.colors.neutral[50]};
  }

  &:focus-visible {
    outline: 2px solid ${p => p.theme.colors.primary[500]};
    outline-offset: -2px;
  }
`;

export const CollapseTitle = styled.span`flex: 1;`;

interface CollapseIconProps {
  $isOpen: boolean;
}

export const CollapseIcon = styled.span<CollapseIconProps>`
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  margin-left: ${p => p.theme.spacing[2]}px; 
  color: ${p => p.theme.colors.neutral[500]}; 
  transform: rotate(${p => p.$isOpen ? '180deg' : '0deg'}); 
  transition: transform ${p => p.theme.transitions.duration.base};
`;

interface CollapseContentProps {
  $isOpen: boolean;
  $maxHeight: number;
}

export const CollapseContent = styled.div<CollapseContentProps>`
  max-height: ${p => p.$isOpen ?`${p.$maxHeight}px`: '0'}; 
  overflow: hidden; 
  transition: max-height ${p => p.theme.transitions.duration.shorter} ${p => p.theme.transitions.timing.easeInOut};
`;

export const CollapseInner = styled.div`
  padding: ${p => p.theme.spacing[4]}px; 
  background-color: ${p => p.theme.colors.neutral[0]};
`;
