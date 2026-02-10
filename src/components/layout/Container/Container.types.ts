import { HTMLAttributes, ReactNode } from 'react';
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';


export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: ContainerSize;
  center?: boolean;
  px?: number;
}