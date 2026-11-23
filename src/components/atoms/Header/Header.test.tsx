import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { Header } from './Header';
import { lightTheme } from '../../../theme/theme';

describe('Header', () => {
  describe('Rendering & Semantic Heading Levels', () => {
    it('renders children inside an h2 heading by default', () => {
      render(<Header>Section Title</Header>);
      const heading = screen.getByRole('heading', { level: 2, name: 'Section Title' });
      expect(heading).toBeInTheDocument();
    });

    it.each([
      ['h1', 1],
      ['h2', 2],
      ['h3', 3],
      ['h4', 4],
      ['h5', 5],
      ['h6', 6],
    ] as const)('renders as %s tag when as="%s" is passed', (tag, level) => {
      render(<Header as={tag}>Heading {level}</Header>);
      expect(screen.getByRole('heading', { level, name: `Heading ${level}` })).toBeInTheDocument();
    });
  });

  describe('Typography Sizes & Weights', () => {
    it.each([
      ['xs', lightTheme.typography.size.xs],
      ['sm', lightTheme.typography.size.sm],
      ['md', lightTheme.typography.size.base],
      ['lg', lightTheme.typography.size.lg],
      ['xl', lightTheme.typography.size.xl],
      ['2xl', lightTheme.typography.size['2xl']],
      ['3xl', lightTheme.typography.size['3xl']],
      ['4xl', lightTheme.typography.size['4xl']],
      ['5xl', lightTheme.typography.size['5xl']],
    ] as const)('applies %s font size', (size, expectedSize) => {
      render(<Header size={size}>Sized Header</Header>);
      expect(screen.getByRole('heading')).toHaveStyle({ fontSize: expectedSize });
    });

    it.each([
      ['normal', String(lightTheme.typography.weight.normal)],
      ['medium', String(lightTheme.typography.weight.medium)],
      ['semibold', String(lightTheme.typography.weight.semibold)],
      ['bold', String(lightTheme.typography.weight.bold)],
    ] as const)('applies %s font weight', (weight, expectedWeight) => {
      render(<Header weight={weight}>Weighted Header</Header>);
      expect(screen.getByRole('heading')).toHaveStyle({ fontWeight: expectedWeight });
    });
  });

  describe('Alignment & Color Variants', () => {
    it.each(['left', 'center', 'right'] as const)('aligns text to %s', (align) => {
      render(<Header align={align}>Aligned Header</Header>);
      expect(screen.getByRole('heading')).toHaveStyle({ textAlign: align });
    });

    it.each([
      ['default', lightTheme.color.text.default],
      ['primary', lightTheme.color.accent.text],
      ['secondary', lightTheme.color.accent.border],
      ['muted', lightTheme.color.text.muted],
    ] as const)('applies %s variant color', (variant, expectedColor) => {
      render(<Header variant={variant}>Variant Header</Header>);
      expect(screen.getByRole('heading')).toHaveStyle({ color: expectedColor });
    });
  });
});
