export type SliderSize = 'sm' | 'md' | 'lg';

export interface SliderProps {
  /** Current value */
  value: number;
  /** Callback when value changes */
  onChange: (value: number) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Size variant */
  size?: SliderSize;
  /** Disabled state */
  disabled?: boolean;
  /** Show value label */
  showValue?: boolean;
  /** Show min/max labels */
  showMinMax?: boolean;
  /** Custom label */
  label?: string;
  /** Value formatter function */
  formatValue?: (value: number) => string;
}