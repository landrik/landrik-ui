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
wait: css`background-color: ${p => p.theme.colors.neutral[0]}; border: 2px solid ${p => p.theme.colors.neutral[300]}; color: ${p => p.theme.colors.neutral[500]};`,
process: css`background-color: ${p => p.theme.colors.primary[600]}; border: 2px solid ${p => p.theme.colors.primary[600]}; color: ${p => p.theme.colors.neutral[0]};`,
finish: css`background-color: ${p => p.theme.colors.primary[600]}; border: 2px solid ${p => p.theme.colors.primary[600]}; color: ${p => p.theme.colors.neutral[0]};`,
error: css`background-color: ${p => p.theme.colors.semantic.error}; border: 2px solid ${p => p.theme.colors.semantic.error}; color: ${p => p.theme.colors.neutral[0]};`,
};

export const StepIcon = styled.div<StepIconProps>`
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
border-radius: ${p => p.theme.radii.full};
font-weight: ${p => p.theme.typography.fontWeight.semibold};
font-size: ${p => p.theme.typography.fontSize.sm};
transition: all ${p => p.theme.transitions.duration.base};
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
? p.theme.colors.primary[600]
: p.theme.colors.neutral[300]
};
margin: 0 ${p => p.theme.spacing[2]}px;
transition: background-color ${p => p.theme.transitions.duration.base};

${p => p.$direction === 'vertical' && css`position: absolute; left: 15px; top: 40px; bottom: -${p.theme.spacing[4]}px;`}
`;

export const StepContent = styled.div`flex: 1;`;

interface StepTitleProps {
$status: StepStatus;
}

export const StepTitle = styled.div<StepTitleProps>`font-size: ${p => p.theme.typography.fontSize.base}; font-weight: ${p => p.theme.typography.fontWeight.medium}; color: ${p =>  p.$status === 'wait'  ? p.theme.colors.neutral[500] : p.theme.colors.neutral[900] }; margin-bottom: ${p => p.theme.spacing[1]}px;`;

export const StepDescription = styled.div`font-size: ${p => p.theme.typography.fontSize.sm}; color: ${p => p.theme.colors.neutral[600]};`;