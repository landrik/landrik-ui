import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { Text } from './Text';
import { lightTheme } from '../../../theme/theme';

describe('Text', () => {
  describe('Rendering & Semantic Tags', () => {
    it('renders children inside a <p> tag by default', () => {
      render(<Text>Body paragraph</Text>);
      const el = screen.getByText('Body paragraph');
      expect(el.tagName).toBe('P');
    });

    it.each(['p', 'span', 'div', 'label'] as const)(
      'renders as <%s> when as="%s" is passed',
      (tag) => {
        render(<Text as={tag}>Semantic text</Text>);
        expect(screen.getByText('Semantic text').tagName).toBe(tag.toUpperCase());
      }
    );

    it('forwards extra HTML attributes such as className, id, and data-testid', () => {
      render(
        <Text id="intro-copy" className="lead" data-testid="text-el">
          Intro copy
        </Text>
      );

      const el = screen.getByTestId('text-el');
      expect(el).toHaveAttribute('id', 'intro-copy');
      expect(el).toHaveClass('lead');
    });
  });

  describe('Typography Sizes, Weights & Alignment', () => {
    it.each([
      ['xs', lightTheme.typography.size.xs],
      ['sm', lightTheme.typography.size.sm],
      ['base', lightTheme.typography.size.base],
      ['lg', lightTheme.typography.size.lg],
      ['xl', lightTheme.typography.size.xl],
    ] as const)('applies %s font size', (size, expectedSize) => {
      render(<Text size={size}>Sized text</Text>);
      expect(screen.getByText('Sized text')).toHaveStyle({ fontSize: expectedSize });
    });

    it.each([
      ['normal', String(lightTheme.typography.weight.normal)],
      ['medium', String(lightTheme.typography.weight.medium)],
      ['semibold', String(lightTheme.typography.weight.semibold)],
      ['bold', String(lightTheme.typography.weight.bold)],
    ] as const)('applies %s font weight', (weight, expectedWeight) => {
      render(<Text weight={weight}>Weighted text</Text>);
      expect(screen.getByText('Weighted text')).toHaveStyle({ fontWeight: expectedWeight });
    });

    it.each(['left', 'center', 'right', 'justify'] as const)(
      'aligns text to %s',
      (align) => {
        render(<Text align={align}>Aligned text</Text>);
        expect(screen.getByText('Aligned text')).toHaveStyle({ textAlign: align });
      }
    );
  });

  describe('Color Variants & Truncation', () => {
    it('applies default and muted text colors', () => {
      const { rerender } = render(<Text variant="default">Default copy</Text>);
      expect(screen.getByText('Default copy')).toHaveStyle({
        color: lightTheme.color.text.default,
      });

      rerender(<Text variant="muted">Muted copy</Text>);
      expect(screen.getByText('Muted copy')).toHaveStyle({
        color: lightTheme.color.text.muted,
      });
    });

    it('applies single-line truncation styles when truncate={true}', () => {
      render(<Text truncate>Very long text that should truncate cleanly</Text>);
      expect(screen.getByText('Very long text that should truncate cleanly')).toHaveStyle({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      });
    });

    it('applies multi-line clamp when lineClamp is provided', () => {
      render(<Text lineClamp={2}>Clamped multi-line paragraph</Text>);
      expect(screen.getByText('Clamped multi-line paragraph')).toHaveStyle({
        overflow: 'hidden',
        display: '-webkit-box',
      });
    });
  });
});
