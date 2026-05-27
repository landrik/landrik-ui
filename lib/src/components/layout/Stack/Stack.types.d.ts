import { SpacingIndex } from '@/theme';
import { HTMLAttributes, ReactNode } from 'react';
export type StackDirection = 'row' | 'column';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export interface StackProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    direction?: StackDirection;
    spacing?: number;
    gap?: SpacingIndex;
    align?: StackAlign;
    justify?: StackJustify;
    wrap?: boolean;
}
//# sourceMappingURL=Stack.types.d.ts.map