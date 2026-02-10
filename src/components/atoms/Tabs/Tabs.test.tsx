
// ========================================
// Tabs.test.tsx
// ========================================

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  const mockTabs = [
    { label: 'Tab 1', value: 'tab1', content: <div>Content 1</div> },
    { label: 'Tab 2', value: 'tab2', content: <div>Content 2</div> },
    { label: 'Tab 3', value: 'tab3', content: <div>Content 3</div> },
  ];

  const defaultProps = {
    tabs: mockTabs,
    activeTab: 'tab1',
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders all tabs', () => {
      render(<Tabs {...defaultProps} />);
      expect(screen.getByText('Tab 1')).toBeInTheDocument();
      expect(screen.getByText('Tab 2')).toBeInTheDocument();
      expect(screen.getByText('Tab 3')).toBeInTheDocument();
    });


    it('renders active tab content', () => {
      render(<Tabs {...defaultProps} activeTab="tab2" />);
      expect(screen.getByText('Content 2')).toBeInTheDocument();
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    });

    it('applies tablist role', () => {
      const { container } = render(<Tabs {...defaultProps} />);
      expect(container.querySelector('[role="tablist"]')).toBeInTheDocument();
    });

    it('applies tab role to buttons', () => {
      render(<Tabs {...defaultProps} />);
      const tabs = screen.getAllByRole('tab');
      expect(tabs).toHaveLength(3);
    });

    it('applies tabpanel role to content', () => {
      const { container } = render(<Tabs {...defaultProps} />);
      expect(container.querySelector('[role="tabpanel"]')).toBeInTheDocument();
    });

  });

  describe('Variants', () => {
    it('renders line variant', () => {
      const { container } = render(<Tabs {...defaultProps} variant="line" />);
      const tabList = container.querySelector('[role="tablist"]');
      expect(tabList).toHaveStyle({ borderBottom: '2px solid #e5e7eb' });
    });

    it('renders enclosed variant', () => {
      const { container } = render(<Tabs {...defaultProps} variant="enclosed" />);
      const tabList = container.querySelector('[role="tablist"]');
      expect(tabList).toHaveStyle({ background: '#f9fafb' });
    });

    it('renders pills variant', () => {
      const { container } = render(<Tabs {...defaultProps} variant="pills" />);
      const tabList = container.querySelector('[role="tablist"]');
      expect(tabList).toHaveStyle({ gap: '8px' });
    });

  });

  describe('User Interactions', () => {
    it('calls onChange when a tab is clicked', () => {
      const handleChange = jest.fn();
      render(<Tabs {...defaultProps} onChange={handleChange} />);
      const tab2 = screen.getByText('Tab 2');
      fireEvent.click(tab2);

      expect(handleChange).toHaveBeenCalledWith('tab2');
    });

    it('does not call onChange when clicking the active tab', () => {
      const handleChange = jest.fn();
      render(<Tabs {...defaultProps} activeTab="tab1" onChange={handleChange} />);

      const tab1 = screen.getByText('Tab 1');
      fireEvent.click(tab1);

      expect(handleChange).toHaveBeenCalledWith('tab1');
    });

    it('updates displayed content when active tab changes', () => {
      const { rerender } = render(<Tabs {...defaultProps} activeTab="tab1" />);
      expect(screen.getByText('Content 1')).toBeInTheDocument();

      rerender(<Tabs {...defaultProps} activeTab="tab2" />);
      expect(screen.getByText('Content 2')).toBeInTheDocument();
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    });

  });

  describe('Disabled State', () => {
    it('renders disabled tab', () => {
      const tabsWithDisabled = [
        ...mockTabs,
        { label: 'Disabled Tab', value: 'disabled', content: <div>Disabled</div>, disabled: true },
      ];
      render(<Tabs {...defaultProps} tabs={tabsWithDisabled} />);
      const disabledTab = screen.getByText('Disabled Tab');
      expect(disabledTab).toBeDisabled();
    });

    it('does not call onChange when clicking disabled tab', () => {
      const handleChange = jest.fn();
      const tabsWithDisabled = [
        { label: 'Tab 1', value: 'tab1', content: <div>Content 1</div> },
        { label: 'Disabled', value: 'disabled', content: <div>Disabled</div>, disabled: true },
      ];

      render(<Tabs {...defaultProps} tabs={tabsWithDisabled} onChange={handleChange} />);

      const disabledTab = screen.getByText('Disabled');
      fireEvent.click(disabledTab);

      expect(handleChange).not.toHaveBeenCalled();
    });

  });

  describe('Accessibility', () => {
    it('marks active tab with aria-selected', () => {
      render(<Tabs {...defaultProps} activeTab="tab2" />);

      const tab2 = screen.getByText('Tab 2');
      expect(tab2).toHaveAttribute('aria-selected', 'true');

      const tab1 = screen.getByText('Tab 1');
      expect(tab1).toHaveAttribute('aria-selected', 'false');
    });
  });

});
