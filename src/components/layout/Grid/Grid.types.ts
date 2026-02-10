import { HTMLAttributes, ReactNode } from 'react';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  columns?: number | 'auto-fit' | 'auto-fill';
  minColumnWidth?: string;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
}