export interface CalendarProps {
  /** Currently selected date */
  value?: Date;
  /** Callback when date is selected */
  onChange?: (date: Date) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Disabled dates */
  disabledDates?: Date[];
  /** Show week numbers */
  showWeekNumbers?: boolean;
  /** First day of week (0 = Sunday, 1 = Monday) */
  firstDayOfWeek?: 0 | 1;
}