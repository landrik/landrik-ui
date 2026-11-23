import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { Stack } from './Stack';
import { lightTheme } from '../../../theme/theme';

describe('Stack', () => {
  describe('Rendering & Default Layout', () => {
    it('renders children inside a flex container with default props', () => {
      render(
        <Stack data-testid="stack">
          <span>Item 1</span>
          <span>Item 2</span>
        </Stack>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();

      expect(screen.getByTestId('stack')).toHaveStyle({
        display: 'flex',
        flexDirection: 'column',
        gap: `${lightTheme.spacing[4]}px`,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
      });
    });

    it('forwards extra HTML attributes such as className and id', () => {
      render(
        <Stack id="main-stack" className="custom-stack" data-testid="stack">
          <span>Child</span>
        </Stack>
      );

      const stack = screen.getByTestId('stack');
      expect(stack).toHaveAttribute('id', 'main-stack');
      expect(stack).toHaveClass('custom-stack');
    });
  });

  describe('Direction & Wrapping', () => {
    it.each(['row', 'column'] as const)('applies flex-direction="%s"', (direction) => {
      render(
        <Stack direction={direction} data-testid="stack">
          <span>Child</span>
        </Stack>
      );

      expect(screen.getByTestId('stack')).toHaveStyle({
        flexDirection: direction,
      });
    });

    it('applies flex-wrap="wrap" when wrap is true', () => {
      render(
        <Stack wrap data-testid="stack">
          <span>Item A</span>
          <span>Item B</span>
        </Stack>
      );

      expect(screen.getByTestId('stack')).toHaveStyle({ flexWrap: 'wrap' });
    });
  });

  describe('Spacing, Alignment & Justification', () => {
    it.each(['0', '2', '4', '6', '8'] as const)('applies numeric gap=%i using theme.spacing', (gap) => {
      render(
        <Stack gap={gap} data-testid="stack">
          <span>One</span>
          <span>Two</span>
        </Stack>
      );

      expect(screen.getByTestId('stack')).toHaveStyle({
        gap: `${lightTheme.spacing[gap]}px`,
      });
    });

    it.each([
      ['start', 'flex-start'],
      ['center', 'center'],
      ['end', 'flex-end'],
      ['stretch', 'stretch'],
    ] as const)('maps align="%s" to align-items: %s', (align, expectedCss) => {
      render(
        <Stack align={align} data-testid="stack">
          <span>Aligned</span>
        </Stack>
      );

      expect(screen.getByTestId('stack')).toHaveStyle({
        alignItems: expectedCss,
      });
    });

    it.each([
      ['start', 'flex-start'],
      ['center', 'center'],
      ['end', 'flex-end'],
      ['between', 'space-between'],
      ['around', 'space-around'],
      ['evenly', 'space-evenly'],
    ] as const)('maps justify="%s" to justify-content: %s', (justify, expectedCss) => {
      render(
        <Stack justify={justify} data-testid="stack">
          <span>Justified</span>
        </Stack>
      );

      expect(screen.getByTestId('stack')).toHaveStyle({
        justifyContent: expectedCss,
      });
    });
  });
});
