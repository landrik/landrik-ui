import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
title: 'Components/Calendar',
component: Calendar,
parameters: {
    layout: 'centered',
  },
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
render: () => {
const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());


return (
  <div>
    <Calendar value={selectedDate} onChange={setSelectedDate} />
    {selectedDate && (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.5rem' }}>
        <strong>Selected Date:</strong> {selectedDate.toDateString()}
      </div>
    )}
  </div>
);


},
};

export const NoInitialValue: Story = {
render: () => {
const [selectedDate, setSelectedDate] = useState<Date | undefined>();


return (
  <div>
    <Calendar value={selectedDate} onChange={setSelectedDate} />
    {selectedDate ? (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.5rem' }}>
        <strong>Selected Date:</strong> {selectedDate.toDateString()}
      </div>
    ) : (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.5rem' }}>
        No date selected
      </div>
    )}
  </div>
);


},
};

export const WithMinMaxDates: Story = {
render: () => {
const [selectedDate, setSelectedDate] = useState<Date | undefined>();
const today = new Date();
const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);


return (
  <div>
    <div style={{ marginBottom: '1rem', padding: '1rem', background: '#dbeafe', borderRadius: '0.5rem' }}>
      <strong>Constraint:</strong> Can only select dates within the next 30 days
    </div>
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      minDate={minDate}
      maxDate={maxDate}
    />
    {selectedDate && (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.5rem' }}>
        <strong>Selected Date:</strong> {selectedDate.toDateString()}
      </div>
    )}
  </div>
);


},
};

export const WithDisabledDates: Story = {
render: () => {
const [selectedDate, setSelectedDate] = useState<Date | undefined>();
const today = new Date();


// Disable all weekends
const disabledDates: Date[] = [];
for (let i = -10; i <= 30; i++) {
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
  const day = date.getDay();
  if (day === 0 || day === 6) {
    disabledDates.push(date);
  }
}

return (
  <div>
    <div style={{ marginBottom: '1rem', padding: '1rem', background: '#dbeafe', borderRadius: '0.5rem' }}>
      <strong>Constraint:</strong> Weekends are disabled
    </div>
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      disabledDates={disabledDates}
    />
    {selectedDate && (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.5rem' }}>
        <strong>Selected Date:</strong> {selectedDate.toDateString()}
      </div>
    )}
  </div>
);


},
};

export const MondayFirstDay: Story = {
render: () => {
const [selectedDate, setSelectedDate] = useState<Date | undefined>();


return (
  <div>
    <div style={{ marginBottom: '1rem', padding: '1rem', background: '#dbeafe', borderRadius: '0.5rem' }}>
      <strong>Week starts on:</strong> Monday
    </div>
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      firstDayOfWeek={1}
    />
  </div>
);


},
};

export const DateRangePicker: Story = {
render: () => {
const [startDate, setStartDate] = useState<Date | undefined>();
const [endDate, setEndDate] = useState<Date | undefined>();


const handleStartDateChange = (date: Date) => {
  setStartDate(date);
  if (endDate && date > endDate) {
    setEndDate(undefined);
  }
};

return (
  <div>
    <div style={{ marginBottom: '1rem', padding: '1rem', background: '#dbeafe', borderRadius: '0.5rem' }}>
      <strong>Select a date range</strong>
    </div>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div>
        <h4 style={{ marginTop: 0, marginBottom: '1rem' }}>Start Date</h4>
        <Calendar
          value={startDate}
          onChange={handleStartDateChange}
          maxDate={endDate}
        />
      </div>
      <div>
        <h4 style={{ marginTop: 0, marginBottom: '1rem' }}>End Date</h4>
        <Calendar
          value={endDate}
          onChange={setEndDate}
          minDate={startDate}
        />
      </div>
    </div>
    {startDate && endDate && (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.5rem' }}>
        <strong>Selected Range:</strong><br />
        From: {startDate.toDateString()}<br />
        To: {endDate.toDateString()}<br />
        Duration: {Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))} days
      </div>
    )}
  </div>
);


},
};

export const BookingCalendar: Story = {
render: () => {
const [selectedDate, setSelectedDate] = useState<Date | undefined>();
const today = new Date();
const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());


// Some random blocked dates (already booked)
const bookedDates = [
  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14),
  new Date(today.getFullYear(), today.getMonth(), today.getDate() + 21),
];

return (
  <div>
    <div style={{ marginBottom: '1rem', padding: '1rem', background: '#dbeafe', borderRadius: '0.5rem' }}>
      <strong>Hotel Booking Calendar</strong><br />
      <small>Select a check-in date (grayed out dates are already booked)</small>
    </div>
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      minDate={minDate}
      maxDate={maxDate}
      disabledDates={bookedDates}
    />
    {selectedDate && (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#d1fae5', borderRadius: '0.5rem', border: '1px solid #10b981' }}>
        <strong>✓ Check-in Date:</strong> {selectedDate.toDateString()}
      </div>
    )}
  </div>
);


},
};

export const BirthdayPicker: Story = {
render: () => {
const [selectedDate, setSelectedDate] = useState<Date | undefined>();
const today = new Date();
const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
const minDate = new Date(today.getFullYear() - 100, 0, 1);


return (
  <div>
    <div style={{ marginBottom: '1rem', padding: '1rem', background: '#dbeafe', borderRadius: '0.5rem' }}>
      <strong>Select Your Birthday</strong><br />
      <small>Must be at least 18 years old</small>
    </div>
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      minDate={minDate}
      maxDate={maxDate}
    />
    {selectedDate && (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.5rem' }}>
        <strong>Birthday:</strong> {selectedDate.toDateString()}<br />
        <strong>Age:</strong> {Math.floor((today.getTime() - selectedDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25))} years old
      </div>
    )}
  </div>
);


},
};

export const MultipleCalendars: Story = {
render: () => {
const [selectedDate, setSelectedDate] = useState<Date | undefined>();
const today = new Date();


return (
  <div>
    <div style={{ marginBottom: '1rem', padding: '1rem', background: '#dbeafe', borderRadius: '0.5rem' }}>
      <strong>Two Month View</strong>
    </div>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
      />
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </div>
    {selectedDate && (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.5rem' }}>
        <strong>Selected Date:</strong> {selectedDate.toDateString()}
      </div>
    )}
  </div>
);


},
};


export const InlineUsage: Story = {
render: () => {
const [selectedDate, setSelectedDate] = useState<Date | undefined>();


return (
  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
    <div>
      <h3 style={{ marginTop: 0 }}>Standalone Calendar</h3>
      <Calendar value={selectedDate} onChange={setSelectedDate} />
    </div>

    <div style={{ flex: 1, minWidth: '300px' }}>
      <h3 style={{ marginTop: 0 }}>Event Details</h3>
      {selectedDate ? (
        <div style={{ padding: '1.5rem', background: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <h4 style={{ marginTop: 0 }}>Selected Date</h4>
          <p style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0284c7', margin: '0.5rem 0' }}>
            {selectedDate.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <p style={{ margin: '1rem 0 0', color: '#6b7280' }}>
            You can add event details here...
          </p>
        </div>
      ) : (
        <div style={{ padding: '1.5rem', background: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
          <p style={{ margin: 0, color: '#6b7280' }}>Select a date to view details</p>
        </div>
      )}
    </div>
  </div>
);


},
};

export const CustomDateDisplay: Story = {
render: () => {
const [selectedDate, setSelectedDate] = useState<Date | undefined>();


const getDateInfo = (date: Date) => {
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
  const weekNumber = Math.ceil(dayOfYear / 7);

  return { dayOfWeek, dayOfYear, weekNumber };
};

return (
  <div>
    <Calendar value={selectedDate} onChange={setSelectedDate} />

    {selectedDate && (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.5rem' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <strong>Selected:</strong> {selectedDate.toDateString()}
        </div>
        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          <div>Day: {getDateInfo(selectedDate).dayOfWeek}</div>
          <div>Day of Year: {getDateInfo(selectedDate).dayOfYear}</div>
          <div>Week: {getDateInfo(selectedDate).weekNumber}</div>
        </div>
      </div>
    )}
  </div>
);


},
};