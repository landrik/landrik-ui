import styled, { css, DefaultTheme } from "styled-components";
import { BoxProps, BackgroundVariant } from "./Box.types";
import { resolveResponsive, resolveSpace } from "@/components/utils/responsive";

const getBgVariant = (
  variant: BackgroundVariant,
  theme: DefaultTheme
): ReturnType<typeof css> => {
  switch (variant) {
    case "transparent":
      return css`
        background-color: transparent;
      `;
    case "subtle":
      return css`
        background-color: ${theme.color.surface.sunken};
      `;
    case "surface":
      return css`
        background-color: ${theme.color.surface.raised};
      `;
  }
};

const isBackgroundVariant = (value: string): value is BackgroundVariant =>
  value === "transparent" || value === "subtle" || value === "surface";

const blockedBoxProps = new Set([
  "padding",
  "paddingX",
  "paddingY",
  "margin",
  "marginX",
  "marginY",
  "background",
  "radius",
  "gridArea",
]);

export const StyledBox = styled.div.withConfig({
  shouldForwardProp: (prop) => !blockedBoxProps.has(prop),
})<BoxProps>`
  box-sizing: border-box;

  ${(p) =>
    resolveResponsive(
      p.padding,
      p.theme,
      (val) => `padding: ${resolveSpace(val, p.theme.spacing)};`
    )}
  ${(p) =>
    resolveResponsive(
      p.paddingX,
      p.theme,
      (val) =>
        `padding-left: ${resolveSpace(val, p.theme.spacing)}; padding-right: ${resolveSpace(val, p.theme.spacing)};`
    )}
  ${(p) =>
    resolveResponsive(
      p.paddingY,
      p.theme,
      (val) =>
        `padding-top: ${resolveSpace(val, p.theme.spacing)}; padding-bottom: ${resolveSpace(val, p.theme.spacing)};`
    )}

  ${(p) =>
    resolveResponsive(
      p.margin,
      p.theme,
      (val) => `margin: ${resolveSpace(val, p.theme.spacing)};`
    )}
  ${(p) =>
    resolveResponsive(
      p.marginX,
      p.theme,
      (val) =>
        `margin-left: ${resolveSpace(val, p.theme.spacing)}; margin-right: ${resolveSpace(val, p.theme.spacing)};`
    )}
  ${(p) =>
    resolveResponsive(
      p.marginY,
      p.theme,
      (val) =>
        `margin-top: ${resolveSpace(val, p.theme.spacing)}; margin-bottom: ${resolveSpace(val, p.theme.spacing)};`
    )}

  ${(p) => {
    const bg = p.background ?? "transparent";
    return isBackgroundVariant(bg)
      ? getBgVariant(bg, p.theme)
      : css`
          background-color: ${bg};
        `;
  }}

  ${(p) => p.radius && `border-radius: ${p.theme.radius[p.radius!]};`}
  ${(p) => p.gridArea && `grid-area: ${p.gridArea};`}
`;
