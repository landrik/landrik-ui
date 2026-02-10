import React, { useState, useMemo } from 'react';
import { CalendarProps } from './Calendar.types';
import {
CalendarContainer,
CalendarHeader,
CalendarHeaderButton,
CalendarTitle,
CalendarGrid,
CalendarWeekday,
CalendarDay,
CalendarDayProps
} from './Calendar.styled';

const ChevronLeft = () => (
<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
</svg>
);

const ChevronRight = () => (
<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
</svg>
);

interface CalendarDayProps {
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  isOtherMonth: boolean;
}

const WEEKDAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
'January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'
];

export const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
  disabledDates = [],
  firstDayOfWeek = 0,
  
}) => {

  const [currentMonth, setCurrentMonth] = useState(
  value ? new Date(value.getFullYear(), value.getMonth(), 1) : new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );

  const weekdays = useMemo(() => {
  if (firstDayOfWeek === 0) return WEEKDAYS_SHORT;
  return [...WEEKDAYS_SHORT.slice(1), WEEKDAYS_SHORT[0]];
  }, [firstDayOfWeek]);

  const getDaysInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
  const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return firstDayOfWeek === 1 ? (day === 0 ? 6 : day - 1) : day;
  };

  const isSameDay = (date1: Date, date2: Date) => {
  return (
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear()
  );
  };

  const isDateDisabled = (date: Date) => {
  if (minDate && date < minDate) return true;
  if (maxDate && date > maxDate) return true;
  return disabledDates.some(d => isSameDay(d, date));
  };

  const calendarDays = useMemo(() => {
  const days = [];
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const prevMonthDays = getDaysInMonth(
  new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
  );


  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = prevMonthDays - i;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, day);
    days.push({
      date,
      day,
      isOtherMonth: true,
      isToday: false,
      isSelected: false,
      isDisabled: isDateDisabled(date),
    });
  }

  // Current month days
  const today = new Date();
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    days.push({
      date,
      day,
      isOtherMonth: false,
      isToday: isSameDay(date, today),
      isSelected: value ? isSameDay(date, value) : false,
      isDisabled: isDateDisabled(date),
    });
  }

  // Next month days
  const remainingDays = 42 - days.length; // 6 weeks * 7 days
  for (let day = 1; day <= remainingDays; day++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, day);
    days.push({
      date,
      day,
      isOtherMonth: true,
      isToday: false,
      isSelected: false,
      isDisabled: isDateDisabled(date),
    });
  }

  return days;


  }, [currentMonth, value, minDate, maxDate, disabledDates, firstDayOfWeek]);

  const handlePrevMonth = () => {
  setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
  setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (date: Date, isDisabled: boolean) => {
  if (isDisabled || !onChange) return;
  onChange(date);
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarHeaderButton onClick={handlePrevMonth} aria-label="Previous month">
          <ChevronLeft />
        </CalendarHeaderButton>


        <CalendarTitle>
          {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </CalendarTitle>

        <CalendarHeaderButton onClick={handleNextMonth} aria-label="Next month">
          <ChevronRight />
        </CalendarHeaderButton>
      </CalendarHeader>
      <CalendarGrid>
        {weekdays.map((day) => (
          <CalendarWeekday key={day}>{day}</CalendarWeekday>
        ))}

        {calendarDays.map((day, index) => (
          <CalendarDay
            key={index}
            $isToday={day.isToday}
            $isSelected={day.isSelected}
            $isDisabled={day.isDisabled}
            $isOtherMonth={day.isOtherMonth}
            onClick={() => handleDateClick(day.date, day.isDisabled)}
            disabled={day.isDisabled}
            aria-label={day.date.toDateString()}
            aria-selected={day.isSelected}
          >
            {day.day}
          </CalendarDay>
        ))}
      </CalendarGrid>
    </CalendarContainer>
  );
};