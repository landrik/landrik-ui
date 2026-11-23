import React, { FC, useEffect, useRef, useState } from 'react';
import { Calendar } from '../../atoms/Calendar/Calendar';
import { Icon } from '../../atoms/Icons/Icon';
import {
  DatePickerWrapper,
  TriggerButton,
  TriggerLeft,
  TriggerActions,
  ClearButton,
  Popover,
} from './DatePicker.styled';
import { DatePickerProps } from './DatePicker.types';

const defaultFormatDate = (date: Date): string =>
  date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

export const DatePicker: FC<DatePickerProps> = ({
  id,
  value,
  defaultValue = null,
  onChange,
  placeholder = 'Select a date',
  minDate,
  maxDate,
  disabledDates,
  firstDayOfWeek = 1,
  disabled = false,
  error = false,
  clearable = true,
  shape = 'rounded',
  formatDate = defaultFormatDate,
  'aria-invalid': ariaInvalid,
  'aria-describedby': ariaDescribedBy,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<Date | null>(defaultValue);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isControlled = value !== undefined;
  const selectedDate = isControlled ? value : internalValue;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      e.stopPropagation();
      setIsOpen(false);
    }
  };

  const handleSelectDate = (date: Date) => {
    if (!isControlled) {
      setInternalValue(date);
    }
    onChange?.(date);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;
    if (!isControlled) {
      setInternalValue(null);
    }
    onChange?.(null);
  };

  return (
    <DatePickerWrapper ref={wrapperRef} onKeyDown={handleKeyDown}>
      <TriggerButton
        id={id}
        type="button"
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-invalid={ariaInvalid ?? Boolean(error)}
        aria-describedby={ariaDescribedBy}
        $isOpen={isOpen}
        $error={Boolean(error)}
        $hasValue={Boolean(selectedDate)}
        $shape={shape}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
      >
        <TriggerLeft>
          <Icon name="calendar" size="sm" />
          <span>{selectedDate ? formatDate(selectedDate) : placeholder}</span>
        </TriggerLeft>

        <TriggerActions>
          {clearable && selectedDate && !disabled && (
            <ClearButton
              role="button"
              tabIndex={0}
              aria-label="Clear date"
              onClick={handleClear}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClear(e as unknown as React.MouseEvent);
                }
              }}
            >
              <Icon name="cross" size="xs" />
            </ClearButton>
          )}
          <Icon name="arrow-down" size="sm" />
        </TriggerActions>
      </TriggerButton>

      <Popover role="dialog" aria-label="Choose date" $isOpen={isOpen}>
        <Calendar
          value={selectedDate || undefined}
          onChange={handleSelectDate}
          minDate={minDate}
          maxDate={maxDate}
          disabledDates={disabledDates}
          firstDayOfWeek={firstDayOfWeek}
        />
      </Popover>
    </DatePickerWrapper>
  );
};
