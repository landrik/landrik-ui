import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Collapse } from './Collapse';

describe('Collapse', () => {
  describe('Rendering & Default State', () => {
    it('renders title and defaults to collapsed (aria-expanded="false")', () => {
      render(
        <Collapse title="Shipping Details">
          <p>Free standard delivery on orders over £50.</p>
        </Collapse>
      );

      const headerButton = screen.getByRole('button', { name: /Shipping Details/i });
      expect(headerButton).toBeInTheDocument();
      expect(headerButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('renders initially expanded when defaultOpen={true}', () => {
      render(
        <Collapse title="Return Policy" defaultOpen>
          <p>30-day hassle-free returns.</p>
        </Collapse>
      );

      const headerButton = screen.getByRole('button', { name: /Return Policy/i });
      expect(headerButton).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText('30-day hassle-free returns.')).toBeVisible();
    });

    it('renders default chevron icon when showIcon is true and hides it when showIcon={false}', () => {
      const { container, rerender } = render(
        <Collapse title="With Icon">
          <p>Content</p>
        </Collapse>
      );

      expect(container.querySelector('svg')).toBeInTheDocument();

      rerender(
        <Collapse title="Without Icon" showIcon={false}>
          <p>Content</p>
        </Collapse>
      );

      expect(container.querySelector('svg')).not.toBeInTheDocument();
    });

    it('renders custom icon when provided', () => {
      render(
        <Collapse title="Custom Icon" icon={<span data-testid="custom-chevron">+</span>}>
          <p>Content</p>
        </Collapse>
      );

      expect(screen.getByTestId('custom-chevron')).toBeInTheDocument();
    });
  });

  describe('Uncontrolled & Controlled Toggle Behavior', () => {
    it('toggles open and closed on header click in uncontrolled mode and calls onToggle', async () => {
      const user = userEvent.setup();
      const handleToggle = jest.fn();

      render(
        <Collapse title="FAQ Item" onToggle={handleToggle}>
          <p>Answer text</p>
        </Collapse>
      );

      const headerButton = screen.getByRole('button', { name: /FAQ Item/i });
      expect(headerButton).toHaveAttribute('aria-expanded', 'false');

      await user.click(headerButton);
      expect(headerButton).toHaveAttribute('aria-expanded', 'true');
      expect(handleToggle).toHaveBeenLastCalledWith(true);

      await user.click(headerButton);
      expect(headerButton).toHaveAttribute('aria-expanded', 'false');
      expect(handleToggle).toHaveBeenLastCalledWith(false);
    });

    it('respects controlled isOpen prop without changing internal state on its own', async () => {
      const user = userEvent.setup();
      const handleToggle = jest.fn();

      const { rerender } = render(
        <Collapse title="Controlled Section" isOpen={false} onToggle={handleToggle}>
          <p>Controlled body</p>
        </Collapse>
      );

      const headerButton = screen.getByRole('button', { name: /Controlled Section/i });
      expect(headerButton).toHaveAttribute('aria-expanded', 'false');

      await user.click(headerButton);
      expect(handleToggle).toHaveBeenCalledWith(true);
      expect(headerButton).toHaveAttribute('aria-expanded', 'false');

      rerender(
        <Collapse title="Controlled Section" isOpen={true} onToggle={handleToggle}>
          <p>Controlled body</p>
        </Collapse>
      );
      expect(headerButton).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Disabled State', () => {
    it('disables header button and prevents toggling when disabled={true}', async () => {
      const user = userEvent.setup();
      const handleToggle = jest.fn();

      render(
        <Collapse title="Locked Section" disabled onToggle={handleToggle}>
          <p>Locked content</p>
        </Collapse>
      );

      const headerButton = screen.getByRole('button', { name: /Locked Section/i });
      expect(headerButton).toBeDisabled();
      expect(headerButton).toHaveAttribute('aria-expanded', 'false');

      await user.click(headerButton);
      expect(handleToggle).not.toHaveBeenCalled();
      expect(headerButton).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
