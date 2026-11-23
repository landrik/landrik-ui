import { HTMLAttributes } from 'react';
import type { SpacingIndex } from '../../../theme/primitives';

export type StackDirection = 'row' | 'column';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: StackDirection;
  gap?: SpacingIndex;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
}
