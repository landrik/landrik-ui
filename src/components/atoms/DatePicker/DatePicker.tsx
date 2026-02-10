import React, { useState, useRef, useEffect } from 'react';
import { DatePickerProps } from './DatePicker.types';
import { Calendar } from '../Calendar';
import {
DatePickerWrapper,
DatePickerLabel,
DatePickerInput,
DatePickerPlaceholder,
DatePickerValue,
DatePickerIcons,
ClearButton,
DatePickerDropdown,
DatePickerError,
} from './DatePicker.styled';

const CalendarIcon = () => (
<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
</svg>
);

const CloseIcon = () => (
<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
);

export const DatePicker: React.FC<DatePickerProps> = ({
value,
onChange,
placeholder = 'Select date',
minDate,
maxDate,
disabledDates,
disabled = false,
error,
label,
clearable = true,
dateFormat = 'medium',
}) => {
const [isOpen, setIsOpen] = useState(false);
const wrapperRef = useRef<HTMLDivElement>(null);

const formatDate = (date: Date) => {
const options: Intl.DateTimeFormatOptions =
dateFormat === 'short' ? { month: 'numeric', day: 'numeric', year: 'numeric' } :
dateFormat === 'long' ? { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } :
{ year: 'numeric', month: 'short', day: 'numeric' };


return date.toLocaleDateString('en-US', options);


};

const handleDateChange = (date: Date) => {
onChange?.(date);
setIsOpen(false);
};

const handleClear = (e: React.MouseEvent) => {
e.stopPropagation();
onChange?.(undefined);
};

const handleClickOutside = (event: MouseEvent) => {
if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
setIsOpen(false);
}
};

useEffect(() => {
document.addEventListener('mousedown', handleClickOutside);
return () => {
document.removeEventListener('mousedown', handleClickOutside);
};
}, []);

return (
<DatePickerWrapper ref={wrapperRef}>
{label && <DatePickerLabel>{label}</DatePickerLabel>}


  <DatePickerInput
    onClick={() => !disabled && setIsOpen(!isOpen)}
    disabled={disabled}
    $hasError={!!error}
    $disabled={disabled}
    type="button"
  >
    {value ? (
      <DatePickerValue>{formatDate(value)}</DatePickerValue>
    ) : (
      <DatePickerPlaceholder>{placeholder}</DatePickerPlaceholder>
    )}

    <DatePickerIcons>
      {clearable && value && !disabled && (
        <ClearButton onClick={handleClear} type="button">
          <CloseIcon />
        </ClearButton>
      )}
      <CalendarIcon />
    </DatePickerIcons>
  </DatePickerInput>

  {error && <DatePickerError>{error}</DatePickerError>}

  <DatePickerDropdown $isOpen={isOpen}>
    <Calendar
      value={value}
      onChange={handleDateChange}
      minDate={minDate}
      maxDate={maxDate}
      disabledDates={disabledDates}
    />
  </DatePickerDropdown>
</DatePickerWrapper>


);
};