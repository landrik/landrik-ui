import styled, { css } from 'styled-components';
import { SliderSize } from './Slider.types';

export const SliderContainer = styled.div`width: 100%;`;

export const SliderLabel = styled.label`display: block; font-size: ${p => p.theme.typography.fontSize.sm}; font-weight: ${p => p.theme.typography.fontWeight.medium}; color: ${p => p.theme.colors.neutral[700]}; margin-bottom: ${p => p.theme.spacing[2]}px;`;

export const SliderWrapper = styled.div`position: relative; width: 100%; display: flex; align-items: center; gap: ${p => p.theme.spacing[3]}px;`;

interface SliderTrackProps {
$size: SliderSize;
$disabled: boolean;
}

const trackHeights: Record<SliderSize, string> = {
sm: '4px',
md: '6px',
lg: '8px',
};

export const SliderTrack = styled.div<SliderTrackProps>`position: relative; flex: 1; height: ${p => trackHeights[p.$size]}; background-color: ${p => p.theme.colors.neutral[200]}; border-radius: ${p => p.theme.radii.full}; cursor: ${p => p.$disabled ? 'not-allowed' : 'pointer'}; opacity: ${p => p.$disabled ? 0.5 : 1};`;

interface SliderFillProps {
$percentage: number;
}

export const SliderFill = styled.div<SliderFillProps>`position: absolute; top: 0; left: 0; height: 100%; width: ${p => p.$percentage}%; background-color: ${p => p.theme.colors.primary[600]}; border-radius: ${p => p.theme.radii.full}; transition: width ${p => p.theme.transitions.fast}; pointer-events: none;`;

interface SliderThumbProps {
$percentage: number;
$size: SliderSize;
$disabled: boolean;
$isDragging: boolean;
}

const thumbSizes: Record<SliderSize, string> = {
sm: '16px',
md: '20px',
lg: '24px',
};

export const SliderThumb = styled.div<SliderThumbProps>`position: absolute; top: 50%; left: ${p => p.$percentage}%; transform: translate(-50%, -50%); width: ${p => thumbSizes[p.$size]}; height: ${p => thumbSizes[p.$size]}; background-color: ${p => p.theme.colors.neutral[0]}; border: 2px solid ${p => p.theme.colors.primary[600]}; border-radius: ${p => p.theme.radii.full}; cursor: ${p => p.$disabled ? 'not-allowed' : p.$isDragging ? 'grabbing' : 'grab'}; transition: ${p => p.$isDragging ? 'none' :`box-shadow ${p.theme.transitions.fast}`};
box-shadow: ${p => p.theme.shadows.sm};
pointer-events: none;

&:hover {
box-shadow: ${p => p.$disabled ? p.theme.shadows.sm : p.theme.shadows.md};
}

${p => p.$isDragging && css`box-shadow: 0 0 0 8px rgba(14, 165, 233, 0.2); transform: translate(-50%, -50%) scale(1.1);`}
`;

export const SliderLabels = styled.div`display: flex; justify-content: space-between; margin-top: ${p => p.theme.spacing[2]}px;`;

export const SliderLabelText = styled.span`font-size: ${p => p.theme.typography.fontSize.sm}; color: ${p => p.theme.colors.neutral[600]};`;

export const SliderValue = styled.span`font-size: ${p => p.theme.typography.fontSize.sm}; font-weight: ${p => p.theme.typography.fontWeight.semibold}; color: ${p => p.theme.colors.neutral[900]}; min-width: 48px; text-align: center; padding: ${p => p.theme.spacing[1]}px ${p => p.theme.spacing[2]}px; background-color: ${p => p.theme.colors.neutral[100]}; border-radius: ${p => p.theme.radii.md};`;