import { HTMLAttributes } from 'react';
import type { SpacingIndex } from '../../../theme';
import { BoxProps } from '../Box';
import { ResponsiveValue } from '@/components/utils/responsive';

export type StackDirection = 'vertical' | 'horizontal'| "column" | "row";
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type StackJustify = 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';

export interface StackProps extends BoxProps {
  direction?: ResponsiveValue<StackDirection>;
  gap?: ResponsiveValue<SpacingIndex>;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
}
