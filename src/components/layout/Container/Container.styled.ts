import styled, { css } from "styled-components";
import type { ContainerProps, ContainerSize } from "./Container.types";



// const sizeStyles: Record<ContainerSize, ReturnType<typeof css>> = {
//   sm: css`max-width: 640px;`,
//   md: css`max-width: 768px;`,
//   lg: css`max-width: 1024px;`,
//   xl: css`max-width: 1280px;`,
//   full: css`max-width: 100%;`,
// };

export const StyledContainer = styled.div<ContainerProps>`

  width: 100%; 
  ${p => p.paddingX !== undefined &&`
    padding-left: ${p.theme.spacing[p.paddingX]}px;
    padding-right: ${p.theme.spacing[p.paddingX]}px;
  `} 

  ${p => p.center && `
    margin-left: auto;
    margin-right: auto;
  `
  }

 ${(p) => {
    const size = p.maxWidth ?? "lg";
    if (size === "full") return "max-width: 100%;";
    return `max-width: ${p.theme.breakpoints[size]};`;
  }}

`;