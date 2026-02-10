import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {layout:'centered'},
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
render: () => {
const [value, setValue] = useState(50);


return (
  <div style={{ padding: '2rem', maxWidth: '800px', minWidth:'600px' }}>
    <Slider value={value} onChange={setValue} />
  </div>
);


},
};

export const WithLabel: Story = {
render: () => {
const [value, setValue] = useState(50);


return (
  <div style={{ padding: '2rem', maxWidth: '800px', minWidth:'600px' }}>
    <Slider
      value={value}
      onChange={setValue}
      label="Volume"
    />
  </div>
);


},
};

export const WithValue: Story = {
render: () => {
const [value, setValue] = useState(50);


return (
  <div style={{ padding: '2rem', maxWidth: '800px', minWidth:'600px' }}>
    <Slider
      value={value}
      onChange={setValue}
      label="Volume"
      showValue
    />
  </div>
);


},
};

export const WithMinMax: Story = {
render: () => {
const [value, setValue] = useState(50);


return (
  <div style={{ padding: '2rem', maxWidth: '800px', minWidth: '600px'}}>
    <Slider
      value={value}
      onChange={setValue}
      label="Volume"
      showMinMax
    />
  </div>
);


},
};

export const AllSizes: Story = {
render: () => {
const [value1, setValue1] = useState(30);
const [value2, setValue2] = useState(50);
const [value3, setValue3] = useState(70);


return (
  <div style={{ padding: '2rem', maxWidth: '800px', minWidth: '600px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <Slider
      value={value1}
      onChange={setValue1}
      label="Small"
      size="sm"
      showValue
    />
    <Slider
      value={value2}
      onChange={setValue2}
      label="Medium"
      size="md"
      showValue
    />
    <Slider
      value={value3}
      onChange={setValue3}
      label="Large"
      size="lg"
      showValue
    />
  </div>
);


},
};

export const CustomRange: Story = {
render: () => {
const [value, setValue] = useState(25);


return (
  <div style={{ padding: '2rem', maxWidth: '800px', minWidth: '600px'}}>
    <Slider
      value={value}
      onChange={setValue}
      min={0}
      max={50}
      label="Temperature (°C)"
      showValue
      showMinMax
    />
  </div>
);


},
};

export const WithSteps: Story = {
render: () => {
const [value, setValue] = useState(50);


return (
  <div style={{ padding: '2rem', maxWidth: '800px', minWidth: '600px'}}>
    <Slider
      value={value}
      onChange={setValue}
      min={0}
      max={100}
      step={25}
      label="Brightness (step: 25)"
      showValue
      showMinMax
    />
    <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
      Steps: 0, 25, 50, 75, 100
    </div>
  </div>
);


},
};

export const Disabled: Story = {
render: () => {
const [value] = useState(50);


return (
  <div style={{ padding: '2rem', maxWidth: '800px', minWidth: '600px'}}>
    <Slider
      value={value}
      onChange={() => {}}
      label="Disabled Slider"
      showValue
      disabled
    />
  </div>
);


},
};

export const CustomFormatter: Story = {
  render: () => {
    const [value, setValue] = useState(50);

    return (
      <div style={{ padding: '2rem', maxWidth: '800px', minWidth: '600px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Slider
          value={value}
          onChange={setValue}
          label="Price"
          showValue
          formatValue={(v) => `$${v}`}
        />

        <Slider
          value={value}
          onChange={setValue}
          label="Percentage"
          showValue
          formatValue={(v) => `${v}%`}
        />

        <Slider
          value={value}
          onChange={setValue}
          min={0}
          max={24}
          label="Time"
          showValue
          formatValue={(v) => `${v}:00`}
        />
      </div>
    );
  },
  
};

export const VolumeControl: Story = {
render: () => {
const [value, setValue] = useState(75);


const getVolumeIcon = () => {
  if (value === 0) return '🔇';
  if (value < 33) return '🔈';
  if (value < 66) return '🔉';
  return '🔊';
};

return (
  <div style={{ padding: '2rem', maxWidth: '800px', minWidth: '600px'}}>
    <div style={{
      padding: '2rem',
      background: '#f9fafb',
      borderRadius: '0.75rem',
      border: '1px solid #e5e7eb'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <span style={{ fontSize: '2rem' }}>{getVolumeIcon()}</span>
        <h3 style={{ margin: 0 }}>Volume Control</h3>
      </div>

      <Slider
        value={value}
        onChange={setValue}
        showValue
        formatValue={(v) => `${v}%`}
        size="lg"
      />
    </div>
  </div>
);


},
};

export const PriceRange: Story = {
render: () => {
const [minPrice, setMinPrice] = useState(200);
const [maxPrice, setMaxPrice] = useState(800);


return (
  <div style={{ padding: '2rem', maxWidth: '800px', minWidth: '600px'}}>
    <div style={{
      padding: '2rem',
      background: '#f9fafb',
      borderRadius: '0.75rem',
      border: '1px solid #e5e7eb'
    }}>
      <h3 style={{ marginTop: 0 }}>Filter by Price</h3>

      <Slider
        value={minPrice}
        onChange={setMinPrice}
        min={0}
        max={1000}
        step={50}
        label="Minimum Price"
        showValue
        formatValue={(v) => `$${v}`}
      />

      <div style={{ height: '1.5rem' }} />

      <Slider
        value={maxPrice}
        onChange={setMaxPrice}
        min={minPrice}
        max={1000}
        step={50}
        label="Maximum Price"
        showValue
        formatValue={(v) => `$${v}`}
      />

      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        background: '#dbeafe',
        borderRadius: '0.5rem',
        textAlign: 'center',
        fontWeight: 600,
      }}>
        Price Range: ${minPrice} - ${maxPrice}
      </div>
    </div>
  </div>
);


},
};

export const InteractiveDemo: Story = {
render: () => {
const [brightness, setBrightness] = useState(100);
const [contrast, setContrast] = useState(100);
const [saturation, setSaturation] = useState(100);


return (
  <div style={{ padding: '2rem', maxWidth: '800px', minWidth: '600px' }}>
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{
        flex: 1,
        minWidth: '300px',
        padding: '2rem',
        background: '#f9fafb',
        borderRadius: '0.75rem',
        border: '1px solid #e5e7eb'
      }}>
        <h3 style={{ marginTop: 0 }}>Image Adjustments</h3>

        <Slider
          value={brightness}
          onChange={setBrightness}
          min={0}
          max={200}
          label="Brightness"
          showValue
          formatValue={(v) => `${v}%`}
        />

        <div style={{ height: '1.5rem' }} />

        <Slider
          value={contrast}
          onChange={setContrast}
          min={0}
          max={200}
          label="Contrast"
          showValue
          formatValue={(v) => `${v}%`}
        />

        <div style={{ height: '1.5rem' }} />

        <Slider
          value={saturation}
          onChange={setSaturation}
          min={0}
          max={200}
          label="Saturation"
          showValue
          formatValue={(v) => `${v}%`}
        />

        <button
          onClick={() => {
            setBrightness(100);
            setContrast(100);
            setSaturation(100);
          }}
          style={{
            marginTop: '1.5rem',
            width: '100%',
            padding: '0.75rem',
            background: '#0284c7',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Reset to Default
        </button>
      </div>

      <div style={{
        flex: 1,
        minWidth: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div
          style={{
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '1rem',
            filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
            transition: 'filter 0.1s',
          }}
        />
      </div>
    </div>
  </div>
);


},
};