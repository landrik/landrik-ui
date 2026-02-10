import { ReactNode } from 'react';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  /** Content to show in tooltip */
  content: ReactNode;
  /** Element that triggers tooltip */
  children: ReactNode;
  /** Placement of tooltip */
  placement?: TooltipPlacement;
  /** Delay before showing (ms) */
  delay?: number;
}