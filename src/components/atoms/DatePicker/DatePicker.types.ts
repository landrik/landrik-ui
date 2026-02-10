export interface DatePickerProps {
  /** Currently selected date */
  value?: Date;
  /** Callback when date is selected */
  onChange?: (date: Date | undefined) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Disabled dates */
  disabledDates?: Date[];
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: string;
  /** Label */
  label?: string;
  /** Show clear button */
  clearable?: boolean;
  /** Date format for display */
  dateFormat?: 'short' | 'medium' | 'long';
}

