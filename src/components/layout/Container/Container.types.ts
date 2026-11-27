import { HTMLAttributes, ReactNode } from 'react';
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'| 'full';


export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  maxWidth?: ContainerSize;
  center?: boolean;
  paddingX?: number;
}