import { HTMLAttributes, ReactNode } from 'react';

// Grid.types.ts
import type { BoxProps } from "../Box/Box.types";
import type { ResponsiveValue } from "../../utils/responsive";
import type { SpacingIndex } from "../../../theme";

export type GridColumnsValue = number | "auto-fit" | "auto-fill" | (string & {});

export interface GridProps extends BoxProps {
  children: ReactNode;
  columns?: ResponsiveValue<GridColumnsValue>;
  minColumnWidth?: string;
  rows?: number | string;
  gap?: ResponsiveValue<SpacingIndex>;
  columnGap?: ResponsiveValue<SpacingIndex>;
  rowGap?: ResponsiveValue<SpacingIndex>;
  areas?: ResponsiveValue<string[]>;
  gridArea?: string;
  colSpan?: ResponsiveValue<number>;
  rowSpan?: ResponsiveValue<number>;
}