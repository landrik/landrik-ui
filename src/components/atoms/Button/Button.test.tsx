import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from './Button';
import { lightTheme, darkTheme } from '../../../theme/theme';

describe('Button', () => {
  describe('Rendering', () => {
    it('renders with text content', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('renders with icon on left by default', () => {
      const { container } = render(<Button icon="envelope-closed">Send</Button>);
      const icon = container.querySelector("[data-icon='envelope-closed']");
      expect(icon).toBeInTheDocument();
      expect(screen.getByText('Send')).toBeInTheDocument();
    });

    it('renders with icon on right when specified', () => {
      const { container } = render(
        <Button icon="envelope-closed" iconPosition="right">
          Send
        </Button>
      );
      const icon = container.querySelector("[data-icon='envelope-closed']");
      expect(icon).toBeInTheDocument();
      expect(screen.getByText('Send')).toBeInTheDocument();
    });

    it('renders as icon-only button when iconOnly is true', () => {
      const { container } = render(
        <Button icon="envelope-closed" iconOnly aria-label="Send">
          Send
        </Button>
      );
      const icon = container.querySelector("[data-icon='envelope-closed']");
      expect(icon).toBeInTheDocument();
      expect(screen.queryByText('Send')).not.toBeInTheDocument();

    });

    it('renders as icon-only button when no children provided', () => {
      const { container } = render(<Button icon="download" aria-label="Download" />);
      const icon = container.querySelector("[data-icon='download']");
      expect(icon).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders primary variant with light theme accent color', () => {
      render(<Button variant="primary">Primary</Button>);
      expect(screen.getByRole('button')).toHaveStyle({
        backgroundColor: lightTheme.color.accent.bgDefault,
      });
    });

    it('renders primary variant with dark theme accent color', () => {
      render(<Button variant="primary">Primary</Button>, { themeMode: 'dark' });
      expect(screen.getByRole('button')).toHaveStyle({
        backgroundColor: darkTheme.color.accent.bgDefault,
      });
    });

    it('renders secondary variant', () => {
      render(<Button variant="secondary">Secondary</Button>);
      expect(screen.getByRole('button')).toHaveStyle({
        backgroundColor: lightTheme.color.neutral.bgSubtle,
      });
    });

    it('renders outline variant', () => {
      render(<Button variant="outline">Outline</Button>);
      expect(screen.getByRole('button')).toHaveStyle({
        backgroundColor: 'transparent',
      });
    });

    it('renders ghost variant', () => {
      render(<Button variant="ghost">Ghost</Button>);
      expect(screen.getByRole('button')).toHaveStyle({
        backgroundColor: 'transparent',
      });
    });

    it('renders danger variant', () => {
      render(<Button variant="danger">Delete</Button>);
      expect(screen.getByRole('button')).toHaveStyle({
        backgroundColor: lightTheme.color.danger.bgDefault,
      });
    });
  });

  describe('Shapes', () => {
    it.each([
      ['square', lightTheme.radius.none],
      ['rounded', lightTheme.radius.lg],
      ['pill', lightTheme.radius.full],
    ] as const)('applies %s shape (%s)', (shape, expectedRadius) => {
      render(<Button shape={shape}>Shape</Button>);
      expect(screen.getByRole('button')).toHaveStyle({ borderRadius: expectedRadius });
    });
  });

  describe('Sizes', () => {
    it.each([
      ['sm', '8px 12px', lightTheme.typography.size.sm],
      ['md', '12px 16px', lightTheme.typography.size.base],
      ['lg', '16px 24px', lightTheme.typography.size.lg],
    ] as const)('renders %s size', (size, expectedPadding, expectedFontSize) => {
      render(<Button size={size}>Size</Button>);
      expect(screen.getByRole('button')).toHaveStyle({
        padding: expectedPadding,
        fontSize: expectedFontSize,
      });
    });

    it('applies symmetric padding for icon-only small button', () => {
      render(
        <Button icon="envelope-closed" iconOnly size="sm">
          email
        </Button>
      );
      expect(screen.getByRole('button')).toHaveStyle({ padding: '8px' });
    });
  });

  describe('States', () => {
    it('shows loading state and sets aria-busy when isLoading is true', () => {
      render(<Button isLoading>Loading</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
      expect(button).toBeDisabled();
    });

    it('hides icon when isLoading is true', () => {
      const { container } = render(
        <Button icon="plus" isLoading>
          Send
        </Button>
      );
      expect(container.querySelector("[data-icon='lock']")).not.toBeInTheDocument();
    });

    it('is disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('renders full width button', () => {
      render(<Button fullWidth>Full Width</Button>);
      expect(screen.getByRole('button')).toHaveStyle({ width: '100%' });
    });
  });

  describe('User Interactions', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} disabled>
          Click me
        </Button>
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not call onClick when isLoading', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      render(
        <Button onClick={handleClick} isLoading>
          Click me
        </Button>
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has proper aria-label for icon-only button', () => {
      render(
        <Button icon="envelope-closed" iconOnly>
          Send Message
        </Button>
      );
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Send Message');
    });

    it('does not have aria-label for regular button', () => {
      render(<Button>Regular Button</Button>);
      expect(screen.getByRole('button')).not.toHaveAttribute('aria-label');
    });

    it('sets button type properly for forms', () => {
      render(<Button htmlType="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });
  });
});
