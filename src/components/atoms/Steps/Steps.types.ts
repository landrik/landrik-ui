import { ReactNode } from 'react';

export type StepsDirection = 'horizontal' | 'vertical';
export type StepStatus = 'wait' | 'process' | 'finish' | 'error';

export interface Step {
  /** Step title */
  title: string;
  /** Step description */
  description?: string;
  /** Custom icon */
  icon?: ReactNode;
}

export interface StepsProps {
  /** Current active step (0-indexed) */
  current: number;
  /** Array of steps */
  steps: Step[];
  /** Direction of steps */
  direction?: StepsDirection;
  /** Callback when step is clicked */
  onChange?: (step: number) => void;
  /** Allow clicking on steps */
  clickable?: boolean;
}