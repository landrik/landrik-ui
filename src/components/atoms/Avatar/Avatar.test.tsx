import React from 'react';
import { render, screen, fireEvent } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { Avatar } from './Avatar';
import { lightTheme } from '../../../theme/theme';

describe('Avatar', () => {
  describe('Rendering & Fallback Priority', () => {
    it('renders image when src is provided', () => {
      render(<Avatar src="https://example.com" alt="Jane Doe" />);
      const img = screen.getByRole('img', { name: 'Jane Doe' });
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', 'https://example.com');
    });

    it('falls back to initials/fallback when image fails to load', () => {
      render(<Avatar src="https://example.com" alt="Jane Doe" initials="JD" />);
      const img = screen.getByRole('img', { name: 'Jane Doe' });

      fireEvent.error(img);

      expect(screen.queryByRole('img')).not.toBeInTheDocument();
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('prioritizes fallback node over initials and alt text', () => {
      render(
        <Avatar
          alt="Jane Doe"
          initials="JD"
          fallback={<span data-testid="custom-fallback">Icon</span>}
        />
      );
      expect(screen.getByTestId('custom-fallback')).toBeInTheDocument();
      expect(screen.queryByText('JD')).not.toBeInTheDocument();
    });

    it('renders initials when no src or fallback is provided', () => {
      render(<Avatar alt="Jane Doe" initials="JD" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('derives uppercase first letter from alt when src, fallback, and initials are omitted', () => {
      render(<Avatar alt="alice" />);
      expect(screen.getByText('A')).toBeInTheDocument();
    });
  });

  describe('Sizes & Shapes', () => {
    it.each([
      ['xs', '24px'],
      ['sm', '32px'],
      ['md', '40px'],
      ['lg', '48px'],
      ['xl', '64px'],
      ['2xl', '96px'],
    ] as const)('renders %s size (%s)', (size, expectedSize) => {
      const { container } = render(<Avatar initials="AB" size={size} />);
      expect(container.firstChild).toHaveStyle({
        width: expectedSize,
        height: expectedSize,
      });
    });

    it.each([
      ['circle', lightTheme.radius.full],
      ['rounded', lightTheme.radius.lg],
      ['square', lightTheme.radius.none],
    ] as const)('applies %s shape (%s)', (shape, expectedRadius) => {
      const { container } = render(<Avatar initials="AB" shape={shape} />);
      const innerContainer = container.firstChild?.firstChild;
      expect(innerContainer).toHaveStyle({ borderRadius: expectedRadius });
    });
  });

  describe('Status Indicator', () => {
    it('does not render status indicator when status is omitted', () => {
      const { container } = render(<Avatar initials="AB" />);
      expect(container.firstChild?.childNodes).toHaveLength(1);
    });

    it.each([
      ['online', lightTheme.color.success.bgDefault],
      ['offline', lightTheme.color.neutral.bgActive],
      ['away', lightTheme.color.warning.bgDefault],
      ['busy', lightTheme.color.danger.bgDefault],
    ] as const)('renders %s status indicator with matching theme color', (status, expectedColor) => {
      const { container } = render(<Avatar initials="AB" status={status} />);
      const indicator = container.firstChild?.lastChild;
      expect(indicator).toHaveStyle({ backgroundColor: expectedColor });
    });
  });
});
