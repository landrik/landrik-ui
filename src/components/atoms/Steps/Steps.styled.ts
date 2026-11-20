import styled, { css } from 'styled-components';
import { StepsDirection, StepStatus } from './Steps.types';

interface StepsContainerProps {
$direction: StepsDirection;
}

export const StepsContainer = styled.div<StepsContainerProps>`display: flex; flex-direction: ${p => p.$direction === 'horizontal' ? 'row' : 'column'}; gap: ${p => p.$direction === 'horizontal' ? p.theme.spacing[0] : p.theme.spacing[4]}px;`;

interface StepItemProps {
$direction: StepsDirection;
$isLast: boolean;
$clickable: boolean;
}

export const StepItem = styled.div<StepItemProps>`display: flex; flex-direction: ${p => p.$direction === 'horizontal' ? 'column' : 'row'}; flex: ${p => p.$direction === 'horizontal' && !p.$isLast ? 1 : 'none'}; align-items: ${p => p.$direction === 'horizontal' ? 'center' : 'flex-start'}; cursor: ${p => p.$clickable ? 'pointer' : 'default'}; position: relative;`;

interface StepIconWrapperProps {
$direction: StepsDirection;
}

export const StepIconWrapper = styled.div<StepIconWrapperProps>`display: flex; align-items: center; width: 100%; margin-bottom: ${p => p.$direction === 'horizontal' ? p.theme.spacing[2] : 0}px; margin-right: ${p => p.$direction === 'vertical' ? p.theme.spacing[3] : 0}px;`;

interface StepIconProps {
$status: StepStatus;
}

const iconStatusStyles: Record<StepStatus, ReturnType<typeof css>> = {
wait: css`background-color: ${({ theme }) => theme.color.surface.raised}; border: 2px solid ${({ theme }) => theme.color.border.strong}; color: ${({ theme }) => theme.color.text.muted};`,
process: css`background-color: ${({ theme }) => theme.color.accent.bgActive}; border: 2px solid ${({ theme }) => theme.color.accent.bgActive}; color: ${({ theme }) => theme.color.accent.onFill};`,
finish: css`background-color: ${({ theme }) => theme.color.accent.bgActive}; border: 2px solid ${({ theme }) => theme.color.accent.bgActive}; color: ${({ theme }) => theme.color.accent.onFill};`,
error: css`background-color: ${({ theme }) =>theme.color.danger.bgDefault}; border: 2px solid ${({ theme }) =>theme.color.danger.bgDefault}; color: ${({ theme }) => theme.color.accent.onFill};`,
};

export const StepIcon = styled.div<StepIconProps>`
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
border-radius: ${({ theme }) => theme.radius.full};
font-weight: ${({ theme }) => theme.typography.weight.semibold};
font-size: ${({ theme }) => theme.typography.size.sm};
transition: all ${({ theme }) => theme.transitions.duration.base};
flex-shrink: 0;

${p => iconStatusStyles[p.$status]}
`;

interface StepLineProps {
$status: StepStatus;
$direction: StepsDirection;
}

export const StepLine = styled.div<StepLineProps>`
flex: 1;
height: ${p => p.$direction === 'horizontal' ? '2px' : 'auto'};
width: ${p => p.$direction === 'vertical' ? '2px' : 'auto'};
background-color: ${p =>
p.$status === 'finish'
? p.theme.color.accent[600]
: p.theme.color.neutral[300]
};
margin: 0 ${({ theme }) => theme.spacing[12]}px;
transition: background-color ${({ theme }) => theme.transitions.duration.base};

${p => p.$direction === 'vertical' && css`position: absolute; left: 15px; top: 40px; bottom: -${p.theme.spacing[4]}px;`}
`;

export const StepContent = styled.div`flex: 1;`;

interface StepTitleProps {
$status: StepStatus;
}

export const StepTitle = styled.div<StepTitleProps>`font-size: ${({ theme }) => theme.typography.size.base}; font-weight: ${({ theme }) => theme.typography.weight.medium}; color: ${(p) => p.$status === 'wait' ? p.theme.color.text.muted : p.theme.color.text.default}; margin-bottom: ${({ theme }) => theme.spacing[4]}px;`;

export const StepDescription = styled.div`font-size: ${({ theme }) => theme.typography.size.sm}; color: ${({ theme }) => theme.color.neutral.text};`;