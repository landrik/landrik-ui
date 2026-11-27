import { css, DefaultTheme } from "styled-components";
import type { SpacingIndex } from "../../theme/"; // adjust path to your SpacingIndex

export type BreakpointKey = keyof DefaultTheme["breakpoints"];

export type ResponsiveValue<T> =
  | T

  | Partial<Record<"base" | BreakpointKey, T>>;

export const resolveSpace = (
  val: SpacingIndex,
  spacing: readonly number[]
): string => {
  const index = Number(val);
  const px = spacing[index] ?? index;
  return `${px}px`;
};

export const resolveResponsive = <T,>(
  value: ResponsiveValue<T> | undefined,
  theme: DefaultTheme,
  toCss: (val: T) => string
) => {
  if (value === undefined) return "";

  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return toCss(value as T);
  }

  const map = value as Partial<Record<"base" | BreakpointKey, T>>;
  const styles: ReturnType<typeof css>[] = [];

  if (map.base !== undefined) {
    styles.push(css`${toCss(map.base)}`);
  }

  const orderedKeys: BreakpointKey[] = ["sm", "md", "lg", "xl", "2xl"];
  for (const key of orderedKeys) {
    const bpVal = map[key];
    if (bpVal !== undefined && theme.breakpoints?.[key]) {
      styles.push(css`
        @media (min-width: ${theme.breakpoints[key]}) {
          ${toCss(bpVal)}
        }
      `);
    }
  }

  return styles;
};
