import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Drawer } from './Drawer';

describe('Drawer', () => {
  describe('Visibility & Content Rendering', () => {
    it('renders title, body content, and footer when open is true', () => {
      render(
        <Drawer
          open
          title="Navigation Menu"
          footer={<button type="button">Save Changes</button>}
          onClose={jest.fn()}
        >
          <p>Drawer body content</p>
        </Drawer>
      );

      expect(screen.getByRole('dialog')).toBeVisible();
      expect(screen.getByText('Navigation Menu')).toBeInTheDocument();
      expect(screen.getByText('Drawer body content')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Save Changes' })).toBeInTheDocument();
    });

    it('hides drawer content when open is false', () => {
      render(
        <Drawer open={false} title="Hidden Drawer" onClose={jest.fn()}>
          <p>Hidden content</p>
        </Drawer>
      );

      const dialog = screen.queryByRole('dialog', { hidden: true });
      if (dialog) {
        expect(dialog).not.toBeVisible();
      } else {
        expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
      }
    });
  });

  describe('Closing Interactions', () => {
    it('calls onClose when the close button is clicked', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();

      render(
        <Drawer open title="Settings" onClose={handleClose}>
          <p>Settings panel</p>
        </Drawer>
      );

      const closeButton = screen.getByRole('button', { name: /close/i });
      await user.click(closeButton);

      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when Escape key is pressed', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();

      render(
        <Drawer open title="Keyboard Drawer" onClose={handleClose}>
          <p>Press Escape to close</p>
        </Drawer>
      );

      await user.keyboard('{Escape}');
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when clicking the backdrop overlay', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();

      const { container } = render(
        <Drawer open title="Overlay Drawer" onClose={handleClose}>
          <p>Click outside to close</p>
        </Drawer>
      );

      // Click the backdrop overlay (first child of portal/container)
      const backdrop =
        screen.queryByTestId('drawer-overlay') ||
        (container.firstChild as HTMLElement);

      if (backdrop) {
        await user.click(backdrop);
        expect(handleClose).toHaveBeenCalled();
      }
    });
  });

  describe('Placements & Sizes', () => {
    it.each(['left', 'right', 'top', 'bottom'] as const)(
      'renders cleanly with placement="%s"',
      (placement) => {
        render(
          <Drawer open placement={placement} title={`${placement} drawer`} onClose={jest.fn()}>
            <p>Content</p>
          </Drawer>
        );
        expect(screen.getByText(`${placement} drawer`)).toBeInTheDocument();
      }
    );

    it.each(['sm', 'md', 'lg'] as const)('renders cleanly with size="%s"', (size) => {
      render(
        <Drawer open size={size} title={`${size} drawer`} onClose={jest.fn()}>
          <p>Content</p>
        </Drawer>
      );
      expect(screen.getByText(`${size} drawer`)).toBeInTheDocument();
    });
  });
});
