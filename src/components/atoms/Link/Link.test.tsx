import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Link } from './Link';
import { lightTheme } from '../../../theme/theme';

describe('Link', () => {
  describe('Rendering & External Link Security', () => {
    it('renders an anchor tag with href and children by default', () => {
      render(<Link href="/about">About Us</Link>);

      const link = screen.getByRole('link', { name: 'About Us' });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/about');
      expect(link).not.toHaveAttribute('target');
      expect(link).not.toHaveAttribute('rel');
    });

    it('adds target="_blank" and rel="noopener noreferrer" when isExternal is true', () => {
      render(
        <Link href="https://example.com" isExternal>
          External Docs
        </Link>
      );

      const link = screen.getByRole('link', { name: 'External Docs' });
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Icons & Button Mode', () => {
    it('renders left and right icons when icon prop is passed', () => {
      const { rerender } = render(
        <Link href="/next" icon="arrow-right" iconPosition="right">
          Next
        </Link>
      );

      expect(screen.getByTestId('svg-mock')).toBeInTheDocument();

      rerender(
        <Link href="/prev" icon="arrow-left" iconPosition="left">
          Previous
        </Link>
      );

      expect(screen.getByTestId('svg-mock')).toBeInTheDocument();
    });

    it('renders as a Button component when isButton={true}', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(
        <Link isButton variant="primary" size="md" onClick={handleClick}>
          Get Started
        </Link>
      );

      const button = screen.getByRole('button', { name: 'Get Started' });
      expect(button).toBeInTheDocument();

      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Styling & Disabled State', () => {
    it('applies underline text-decoration when underline={true}', () => {
      render(
        <Link href="/terms" underline>
          Terms & Conditions
        </Link>
      );

      expect(screen.getByRole('link', { name: 'Terms & Conditions' })).toHaveStyle({
        textDecoration: 'underline',
      });
    });

    it('renders disabled button when isButton={true} and disabled={true}', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(
        <Link isButton disabled onClick={handleClick}>
          Disabled Action
        </Link>
      );

      const button = screen.getByRole('button', { name: 'Disabled Action' });
      expect(button).toBeDisabled();

      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
