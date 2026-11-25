import { HTMLAttributes, ReactNode } from 'react';
import type { BoxProps } from '../Box';

export interface GridProps extends BoxProps {
  children: ReactNode;
  minColumnWidth?: string;
 columns?: number | "auto-fit" | "auto-fill" | (string & {});
  rows?: number | string;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  /** e.g. ['Header Header', 'SideBar Main'] */
  areas?: string[];
  
  /** Grid placement properties (when used as a child inside another Grid) */
  gridArea?: string;
  colSpan?: number;
  rowSpan?: number;
}