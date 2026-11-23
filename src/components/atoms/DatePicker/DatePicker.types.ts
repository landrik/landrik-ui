export type DatePickerShape = 'rounded' | 'square' | 'pill';

export interface DatePickerProps {
  id?: string;
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  firstDayOfWeek?: 0 | 1;
  disabled?: boolean;
  error?: boolean;
  clearable?: boolean;
  shape?: DatePickerShape;
  formatDate?: (date: Date) => string;
  'aria-invalid'?: boolean;
  'aria-describedby'?: string;
}


