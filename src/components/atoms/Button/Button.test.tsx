// import '@testing-library/jest-dom';

// import { cleanup, fireEvent, render, screen } from '@testing-library/react';
// import Button from './Button';

// /**
//  * @jest-environment jsdom
//  */

// describe('Button', () => {
//   afterEach(() => cleanup());

//   it('renders', () => {
//     render(<Button loading={false} children={undefined} />);
//     const button = screen.getByTestId('btn');

//     expect(button).toBeInTheDocument();
//   });

//   it('fires an event on onClick', () => {
//     const fn = jest.fn();
//     render(<Button onClick={fn} loading={false} children={undefined} />);

//     const button = screen.getByTestId('btn');
//     fireEvent.click(button);
//     expect(fn).toHaveBeenCalled();
//   });

//   it('renders the correct classes', () => {
//     const fn = jest.fn();
//     render(<Button variant="primary" onClick={fn} data-testid="p-btn" loading={false} children={undefined} />);

//     const pBtn = screen.getByTestId('p-btn');
//     screen.debug();
//     expect(pBtn).toHaveClass('lk-button', {exact:true});
//   });
// });


// ========================================
// Button.test.tsx
// ========================================

import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  afterEach(() => cleanup());

  describe('Rendering', () => {
    it('renders with text content', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('renders with icon on left by default', () => {
      const { container } = render(
        <Button icon='email'>
          Send
        </Button>
      );
      const icon = container.querySelector("[data-icon='email']") as HTMLImageElement;
      expect(icon.classList.toString()).toContain('icon-svg') ;
      expect(screen.getByText('Send')).toBeInTheDocument();
    });

    it('renders with icon on right when specified', () => {
      const { container } = render(
        <Button icon='email' iconPosition="right">
          Send
        </Button>
      );
      const icon = container.querySelector("[data-icon='email']") as HTMLImageElement;
      expect(icon.classList.toString()).toContain('icon-svg');
      expect(screen.getByText('Send')).toBeInTheDocument();
    });

    it('renders as icon-only button when iconOnly is true', () => {
      const { container } = render(<Button icon='email' iconOnly />);
      const icon = container.querySelector("[data-icon='email']") as HTMLImageElement;
      expect(icon.classList.toString()).toContain('icon-svg');
      expect(screen.queryByText('Send')).not.toBeInTheDocument();
    });

    it('renders as icon-only button when no children provided', () => {
      const { container } = render(<Button icon='download' />);
      const icon = container.querySelector("[data-icon='download']") as HTMLImageElement;
      expect(icon.classList.toString()).toContain('icon-svg');
    });
  });

  describe('Variants', () => {
    it('renders primary variant', () => {
      const { container } = render(<Button variant="primary">Primary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ background: '#3b82f6' });
    });

    it('renders secondary variant', () => {
      const { container } = render(<Button variant="secondary">Secondary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ background: '#6b7280' });
    });

    it('renders outline variant', () => {
      const { container } = render(<Button variant="outline">Outline</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ background: 'transparent' });
    });

    it('renders ghost variant', () => {
      render(<Button variant="ghost">Ghost</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ background: 'transparent' });
    });

    it('renders danger variant', () => {
      render(<Button variant="danger">Delete</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ background: '#ef4444' });
    });

  });

  describe('Shapes', () => {
    it('applies rounded shape', () => {
      render(<Button shape="rounded">Rounded</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ borderRadius: '8px' });
    });

    it('applies pill shape', () => {
      render(<Button shape="pill">Pill</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ borderRadius: '999px' });
    });

    it('applies square shape', () => {
      render(<Button shape="square">Square</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ borderRadius: '4px' });
    });

  });

  describe('Sizes', () => {
    it('renders small size', () => {
      render(<Button size="sm">Small</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ padding: '6px 12px', fontSize: '13px' });
    });

    it('renders medium size', () => {
      render(<Button size="md">Medium</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ padding: '10px 18px', fontSize: '14px' });
    });

    it('renders large size', () => {
      render(<Button size="lg">Large</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ padding: '14px 24px', fontSize: '16px' });
    });

    it('applies correct padding for icon-only small button', () => {
      render(<Button icon='email' iconOnly size="sm">email</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ padding: '6px' });
    });

  });

  describe('States', () => {
    it('shows loading spinner when loading is true', () => {
    const { container } = render(<Button loading>Loading</Button>);
    // Loader2 icon should be spinning
    const spinningIcon = container.querySelector("span") as HTMLImageElement;
    expect(spinningIcon).toHaveStyle({ animation: 'spin 1s linear infinite' });

    });

    it('hides icon when loading', () => {
      render(
        <Button icon='lock' loading>
          Send
        </Button>
      );
      expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
    });

    it('is disabled when disabled prop is true', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('is disabled when loading is true', () => {
      render(<Button loading>Loading</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('renders full width button', () => {
      render(<Button fullWidth>Full Width</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ width: '100%' });
    });

  });

  describe('User Interactions', () => {
    it('calls onClick when clicked', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click me</Button>);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick} disabled>Click me</Button>);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not call onClick when loading', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick} loading>Click me</Button>);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });

  });

  describe('Accessibility', () => {
    it('has proper aria-label for icon-only button', () => {
      render(<Button icon='email' iconOnly>Send Message</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Send Message');
    });

    it('does not have aria-label for regular button', () => {
      render(<Button>Regular Button</Button>);
      const button = screen.getByRole('button');
      expect(button).not.toHaveAttribute('aria-label');
    });

  });
});
