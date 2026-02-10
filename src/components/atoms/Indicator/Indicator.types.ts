import { ReactNode } from 'react';

export type IndicatorVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
export type IndicatorSize = 'sm' | 'md' | 'lg';
export type IndicatorPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface IndicatorProps {
  /** Content to show in indicator */
  content?: ReactNode;
  /** Element to attach indicator to */
  children: ReactNode;
  /** Visual variant */
  variant?: IndicatorVariant;
  /** Size */
  size?: IndicatorSize;
  /** Position relative to child */
  position?: IndicatorPosition;
  /** Show as dot (no content) */
  dot?: boolean;
  /** Show indicator */
  show?: boolean;
}