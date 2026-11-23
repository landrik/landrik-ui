import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardDescription,
  CardBadge,
  CardMedia,
  CardDivider,
} from './Card';
import { lightTheme } from '../../../theme/theme';

describe('Card', () => {
  describe('Rendering & Composition', () => {
    it('renders header, body, footer, title, description, and badge subcomponents', () => {
      render(
        <Card data-testid="card">
          <CardHeader>
            <CardBadge color="primary">Featured</CardBadge>
            <CardTitle>Design System</CardTitle>
            <CardDescription>Reusable React UI components</CardDescription>
          </CardHeader>
          <CardDivider />
          <CardBody>Main card content</CardBody>
          <CardFooter>
            <button type="button">Learn More</button>
          </CardFooter>
        </Card>
      );

      expect(screen.getByTestId('card')).toBeInTheDocument();
      expect(screen.getByText('Featured')).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'Design System' })).toBeInTheDocument();
      expect(screen.getByText('Reusable React UI components')).toBeInTheDocument();
      expect(screen.getByText('Main card content')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Learn More' })).toBeInTheDocument();
    });

    it('renders CardMedia with image', () => {
      render(
        <Card>
          <CardMedia src="https://example.com" alt="Card Banner" />
        </Card>
      );

      const img = screen.getByRole('img', { name: 'Card Banner' });
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', 'https://example.com');
    });
  });

  describe('Variants & Layout Props', () => {
    it.each([
      ['elevated', lightTheme.color.surface.raised],
      ['outlined', lightTheme.color.surface.raised],
      ['filled', lightTheme.color.surface.sunken],
    ] as const)('applies %s variant background', ($variant, expectedBg) => {
      render(
        <Card $variant={$variant} data-testid="variant-card">
          Card content
        </Card>
      );

      expect(screen.getByTestId('variant-card')).toHaveStyle({
        background: expectedBg,
      });
    });

    it('renders full width when $fullWidth is true', () => {
      render(
        <Card $fullWidth data-testid="full-card">
          Full width card
        </Card>
      );

      expect(screen.getByTestId('full-card')).toHaveStyle({ width: '100%' });
    });

    it.each([
      ['default', lightTheme.color.neutral.bgSubtle, lightTheme.color.neutral.text],
      ['primary', lightTheme.color.accent.bgSubtle, lightTheme.color.accent.text],
      ['success', lightTheme.color.success.bgSubtle, lightTheme.color.success.text],
      ['warning', lightTheme.color.warning.bgSubtle, lightTheme.color.warning.text],
      ['danger', lightTheme.color.danger.bgSubtle, lightTheme.color.danger.text],
    ] as const)('renders CardBadge with %s color tokens', (color, expectedBg, expectedColor) => {
      render(<CardBadge color={color}>{color}</CardBadge>);
      const badge = screen.getByText(color);
      expect(badge).toHaveStyle({
        background: expectedBg,
        color: expectedColor,
      });
    });
  });

  describe('Interactive & Disabled States', () => {
    it('calls onClick when interactive card is clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(
        <Card interactive onClick={handleClick} data-testid="interactive-card">
          Click me
        </Card>
      );

      const card = screen.getByTestId('interactive-card');
      expect(card).toHaveStyle({ cursor: 'pointer' });

      await user.click(card);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies disabled styles and blocks pointer events when disabled is true', () => {
      render(
        <Card disabled data-testid="disabled-card">
          Disabled card
        </Card>
      );

      expect(screen.getByTestId('disabled-card')).toHaveStyle({
        opacity: '0.48',
        pointerEvents: 'none',
      });
    });
  });
});
