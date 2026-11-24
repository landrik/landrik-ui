import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { Form, FormGroup } from '../../molecules/FormGroup/FormGroup';
import { FormField } from '../../molecules/FormField';
import { TextInput } from '../../atoms/TextInput/TextInput';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: 'inline-radio',
      options: ['square', 'rounded', 'pill'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    clearable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    placeholder: 'Pick a date',
    clearable: true,
    shape: 'rounded',
  },
  render: (args) => (
    <div style={{ width: '280px', minHeight: '380px' }}>
      <DatePicker {...args} />
    </div>
  ),
};

export const WithMinAndMaxDate: Story = {
  render: () => {
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 5);
    const maxDate = new Date(today.getFullYear(), today.getMonth(), 25);

    return (
      <div style={{ width: '280px', minHeight: '380px' }}>
        <DatePicker
          placeholder="Select date (5th – 25th)"
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
    );
  },
};

export const InsideBookingForm: Story = {
  render: () => {
    const [guestName, setGuestName] = useState('');
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [errors, setErrors] = useState<{ guestName?: string; checkIn?: string }>({});

    const handleBook = () => {
      const nextErrors: { guestName?: string; checkIn?: string } = {};
      if (!guestName.trim()) nextErrors.guestName = 'Guest name is required';
      if (!checkIn) nextErrors.checkIn = 'Please select a check-in date';

      setErrors(nextErrors);
      if (Object.keys(nextErrors).length === 0 && checkIn) {
        alert(`Booked for ${guestName} on ${checkIn.toDateString()}`);
      }
    };

    return (
      <div style={{ minHeight: '460px' }}>
        <Form
          title="Book an Appointment"
          description="Choose your preferred date below."
          submitLabel="Confirm Booking"
          onSubmit={handleBook}
        >
          <FormGroup>
            <FormField>
              <TextInput
                labelText="Full name"
                placeholder="Jane Doe"
                isRequired
                value={guestName}
                onChangeInput={setGuestName}
                error={Boolean(errors.guestName)}
                errorText={errors.guestName}
              />
            </FormField>

            <FormField label="Preferred date" required error={errors.checkIn}>
              <DatePicker
                value={checkIn}
                onChange={setCheckIn}
                error={Boolean(errors.checkIn)}
                placeholder="Select appointment date"
              />
            </FormField>
          </FormGroup>
        </Form>
      </div>
    );
  },
};
