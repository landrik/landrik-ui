import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
render: () => {
const [open, setOpen] = useState(false);


return (
  <>
    <button onClick={() => setOpen(true)}>Open Drawer</button>

    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      title="Drawer Title"
    >
      <p>This is the drawer content. You can put any React elements here.</p>
      <p>Click the overlay or press Escape to close.</p>
    </Drawer>
  </>
);


},
};

export const AllPlacements: Story = {
render: () => {
const [leftOpen, setLeftOpen] = useState(false);
const [rightOpen, setRightOpen] = useState(false);
const [topOpen, setTopOpen] = useState(false);
const [bottomOpen, setBottomOpen] = useState(false);


return (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <button onClick={() => setLeftOpen(true)}>Open Left</button>
    <button onClick={() => setRightOpen(true)}>Open Right</button>
    <button onClick={() => setTopOpen(true)}>Open Top</button>
    <button onClick={() => setBottomOpen(true)}>Open Bottom</button>

    <Drawer
      open={leftOpen}
      onClose={() => setLeftOpen(false)}
      placement="left"
      title="Left Drawer"
    >
      <p>This drawer slides in from the left.</p>
    </Drawer>

    <Drawer
      open={rightOpen}
      onClose={() => setRightOpen(false)}
      placement="right"
      title="Right Drawer"
    >
      <p>This drawer slides in from the right.</p>
    </Drawer>

    <Drawer
      open={topOpen}
      onClose={() => setTopOpen(false)}
      placement="top"
      title="Top Drawer"
    >
      <p>This drawer slides in from the top.</p>
    </Drawer>

    <Drawer
      open={bottomOpen}
      onClose={() => setBottomOpen(false)}
      placement="bottom"
      title="Bottom Drawer"
    >
      <p>This drawer slides in from the bottom.</p>
    </Drawer>
  </div>
);


},
};

export const AllSizes: Story = {
  render: () => {
  const [smOpen, setSmOpen] = useState(false);
  const [mdOpen, setMdOpen] = useState(false);
  const [lgOpen, setLgOpen] = useState(false);
  const [fullOpen, setFullOpen] = useState(false);


  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <button onClick={() => setSmOpen(true)}>Small (320px)</button>
      <button onClick={() => setMdOpen(true)}>Medium (448px)</button>
      <button onClick={() => setLgOpen(true)}>Large (640px)</button>
      <button onClick={() => setFullOpen(true)}>Full Width</button>

      <Drawer
        open={smOpen}
        onClose={() => setSmOpen(false)}
        size="sm"
        title="Small Drawer"
      >
        <p>This is a small drawer (320px wide).</p>
      </Drawer>

      <Drawer
        open={mdOpen}
        onClose={() => setMdOpen(false)}
        size="md"
        title="Medium Drawer"
      >
        <p>This is a medium drawer (448px wide).</p>
      </Drawer>

      <Drawer
        open={lgOpen}
        onClose={() => setLgOpen(false)}
        size="lg"
        title="Large Drawer"
      >
        <p>This is a large drawer (640px wide).</p>
      </Drawer>

      <Drawer
        open={fullOpen}
        onClose={() => setFullOpen(false)}
        size="full"
        title="Full Width Drawer"
      >
        <p>This drawer takes up the full width of the screen.</p>
      </Drawer>
    </div>
  );


  },
};

export const WithFooter: Story = {
  render: () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <button onClick={() => setOpen(true)}>Open Drawer with Footer</button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm Action"
        footer={
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setOpen(false)}
              style={{ padding: '0.5rem 1rem' }}
            >
              Cancel
            </button>
            <button
              onClick={() => setOpen(false)}
              style={{ padding: '0.5rem 1rem', background: '#0284c7', color: 'white', border: 'none', borderRadius: '0.5rem' }}
            >
              Confirm
            </button>
          </div>
        }
      >
        <p>Are you sure you want to proceed with this action?</p>
        <p>This cannot be undone.</p>
      </Drawer>
    </>
  );


  },
};

export const WithForm: Story = {
  render: () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <button onClick={() => setOpen(true)}>Open Form Drawer</button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Create New User"
        footer={
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button
              style={{
                background: '#0284c7',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem'
              }}
            >
              Save
            </button>
          </div>
        }
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Full Name
            </label>
            <input
              type="text"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Email
            </label>
            <input
              type="email"
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Role
            </label>
            <select
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}
            >
              <option>Admin</option>
              <option>User</option>
              <option>Guest</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Bio
            </label>
            <textarea
              rows={4}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '0.375rem', border: '1px solid #d1d5db' }}
              placeholder="Tell us about yourself..."
            />
          </div>
        </form>
      </Drawer>
    </>
  );


  },
};

export const WithLongContent: Story = {
  render: () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <button onClick={() => setOpen(true)}>Open Drawer with Long Content</button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Terms and Conditions"
      >
        <div>
          <h3>1. Introduction</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <h3>2. User Agreement</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <h3>3. Privacy Policy</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <h3>4. Terms of Service</h3>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <h3>5. Data Collection</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <h3>6. User Rights</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <h3>7. Limitation of Liability</h3>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

          <h3>8. Governing Law</h3>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </Drawer>
    </>
  );


  },
};

export const NoCloseButton: Story = {
  render: () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <button onClick={() => setOpen(true)}>Open Drawer</button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="No Close Button"
        showCloseButton={false}
      >
        <p>This drawer has no close button. Click the overlay or press Escape to close.</p>
      </Drawer>
    </>
  );


  },
};

export const NoTitle: Story = {
  render: () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <button onClick={() => setOpen(true)}>Open Drawer</button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      >
        <h2 style={{ marginTop: 0 }}>Custom Header</h2>
        <p>This drawer has no built-in title, but you can add your own header in the content.</p>
      </Drawer>
    </>
  );

  },

};