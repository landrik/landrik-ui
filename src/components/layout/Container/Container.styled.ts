import styled, { css } from "styled-components";
import { ContainerSize } from "./Container.types";

interface StyledContainerProps {
  $size: ContainerSize;
  $center: boolean;
  $px?: number;
}

const sizeStyles: Record<ContainerSize, ReturnType<typeof css>> = {
  sm: css`max-width: 640px;`,
  md: css`max-width: 768px;`,
  lg: css`max-width: 1024px;`,
  xl: css`max-width: 1280px;`,
  full: css`max-width: 100%;`,
};

export const StyledContainer = styled.div<StyledContainerProps>`

  width: 100%; 
  ${p => p.$px !== undefined &&`
    padding-left: ${p.theme.spacing[p.$px]}px;
    padding-right: ${p.theme.spacing[p.$px]}px;
  `} 

  ${p => p.$center && `
    margin-left: auto;
    margin-right: auto;
  `
  }
  ${p => sizeStyles[p.$size]}

`;