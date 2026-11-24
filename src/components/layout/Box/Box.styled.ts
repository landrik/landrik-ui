import styled, { css } from "styled-components";
import { BoxProps, BackgroundVariant } from "./Box.types";



const BgVariant: Record<BackgroundVariant, ReturnType<typeof css>> = {
  transparent: css`background-color: transparent;`,
  subtle: css`background-color: var(--bg-subtle, #f8fafc);`,
  surface: css`background-color: var(--bg-surface, #ffffff);`,
};

const isBackgroundVariant = (value: string): value is BackgroundVariant =>
  value in BgVariant;

export const StyledBox = styled.div<BoxProps>`

  ${p => p.padding !== undefined &&`padding: ${p.theme.spacing[p.padding]}px;`} 
  ${p => p.paddingX !== undefined && `padding-left: ${p.theme.spacing[p.paddingX]}px; padding-right: ${p.theme.spacing[p.paddingX]}px;`} 
  ${p => p.paddingY !== undefined && `padding-top: ${p.theme.spacing[p.paddingY]}px; padding-bottom: ${p.theme.spacing[p.paddingY]}px;`} 

  ${p => p.margin !== undefined && `margin: ${p.theme.spacing[p.margin]}px;`} 
  ${p => p.marginX !== undefined && `margin-left: ${p.theme.spacing[p.marginX]}px; margin-right: ${p.theme.spacing[p.marginX]}px;`} 
  ${p => p.marginY !== undefined && `margin-top: ${p.theme.spacing[p.marginY]}px; margin-bottom: ${p.theme.spacing[p.marginY]}px;`} 

  ${(p) => {
    const bg = p.background ?? "transparent";
    return isBackgroundVariant(bg)
      ? BgVariant[bg]
      : css`
          background-color: ${bg};
        `;
  }}

  ${p => p.radius && `border-radius: ${p.theme.radius[p.radius as keyof typeof p.theme.radius]};`} 

`;