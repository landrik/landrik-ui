import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
title: 'Components/DatePicker',
component: DatePicker,
parameters: {
    layout: 'centered',
  },
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
render: () => {
const [date, setDate] = useState<Date | undefined>();


return (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <DatePicker
      value={date}
      onChange={setDate}
      label="Select Date"
      placeholder="Choose a date"
    />
    {date && (
      <div style={{ marginTop: '1rem', padding: '1rem', background: '#f3f4f6', borderRadius: '0.5rem' }}>
        Selected: {date.toDateString()}
      </div>
    )}
  </div>
);


},
};

export const WithValidation: Story = {
render: () => {
const [date, setDate] = useState<Date | undefined>();
const [error, setError] = useState('');


const handleChange = (newDate: Date | undefined) => {
  setDate(newDate);
  if (!newDate) {
    setError('Date is required');
  } else {
    setError('');
  }
};

return (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <DatePicker
      value={date}
      onChange={handleChange}
      label="Birth Date *"
      placeholder="Select your birth date"
      error={error}
    />
  </div>
);


},
};

export const DateFormats: Story = {
render: () => {
const [date1, setDate1] = useState<Date | undefined>(new Date());
const [date2, setDate2] = useState<Date | undefined>(new Date());
const [date3, setDate3] = useState<Date | undefined>(new Date());


return (
  <div style={{ padding: '2rem', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <DatePicker
      value={date1}
      onChange={setDate1}
      label="Short Format"
      dateFormat="short"
    />
    <DatePicker
      value={date2}
      onChange={setDate2}
      label="Medium Format (Default)"
      dateFormat="medium"
    />
    <DatePicker
      value={date3}
      onChange={setDate3}
      label="Long Format"
      dateFormat="long"
    />
  </div>
);


},
};

export const DisabledState: Story = {
render: () => (
<div style={{ padding: '2rem', maxWidth: '400px' }}>
<DatePicker
value={new Date()}
label="Disabled Date Picker"
disabled
/>
</div>
),
};

export const WithConstraints: Story = {
render: () => {
const [date, setDate] = useState<Date | undefined>();
const today = new Date();
const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);


return (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <DatePicker
      value={date}
      onChange={setDate}
      label="Select Appointment Date"
      placeholder="Next 30 days only"
      minDate={minDate}
      maxDate={maxDate}
    />
    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
      Only dates within the next 30 days are available
    </p>
  </div>
);


},
};

export const FormExample: Story = {
render: () => {
const [startDate, setStartDate] = useState<Date | undefined>();
const [endDate, setEndDate] = useState<Date | undefined>();
const [errors, setErrors] = useState<{ start?: string; end?: string }>({});


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const newErrors: { start?: string; end?: string } = {};

  if (!startDate) newErrors.start = 'Start date is required';
  if (!endDate) newErrors.end = 'End date is required';
  if (startDate && endDate && startDate > endDate) {
    newErrors.end = 'End date must be after start date';
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    alert(`Booking confirmed!\nFrom: ${startDate?.toDateString()}\nTo: ${endDate?.toDateString()}`);
  }
};

return (
  <form onSubmit={handleSubmit} style={{ padding: '2rem', maxWidth: '400px' }}>
    <h3 style={{ marginTop: 0 }}>Book Your Stay</h3>

    <div style={{ marginBottom: '1.5rem' }}>
      <DatePicker
        value={startDate}
        onChange={(date) => {
          setStartDate(date);
          setErrors({ ...errors, start: undefined });
        }}
        label="Check-in Date *"
        placeholder="Select check-in"
        error={errors.start}
        minDate={new Date()}
      />
    </div>

    <div style={{ marginBottom: '1.5rem' }}>
      <DatePicker
        value={endDate}
        onChange={(date) => {
          setEndDate(date);
          setErrors({ ...errors, end: undefined });
        }}
        label="Check-out Date *"
        placeholder="Select check-out"
        error={errors.end}
        minDate={startDate || new Date()}
      />
    </div>

    <button
      type="submit"
      style={{
        width: '100%',
        padding: '0.75rem',
        background: '#0284c7',
        color: 'white',
        border: 'none',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        fontWeight: 600,
        cursor: 'pointer',
      }}
    >
      Book Now
    </button>
  </form>
);


},
};

export const NotClearable: Story = {
render: () => {
const [date, setDate] = useState<Date | undefined>(new Date());


return (
  <div style={{ padding: '2rem', maxWidth: '400px' }}>
    <DatePicker
      value={date}
      onChange={setDate}
      label="Date (Not Clearable)"
      clearable={false}
    />
  </div>
);


},
};