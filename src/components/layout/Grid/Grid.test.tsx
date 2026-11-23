import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { Grid } from './Grid';
import { lightTheme } from '../../../theme/theme';

describe('Grid', () => {
  describe('Rendering & Default Layout', () => {
    it('renders children inside a CSS grid container with default props (3 columns, gap 4)', () => {
      render(
        <Grid data-testid="grid">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Grid>
      );

      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();

      expect(screen.getByTestId('grid')).toHaveStyle({
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: `${lightTheme.spacing[4]}px`,
      });
    });

    it('forwards extra HTML attributes such as className and id', () => {
      render(
        <Grid id="product-grid" className="custom-grid" data-testid="grid">
          <div>Product</div>
        </Grid>
      );

      const grid = screen.getByTestId('grid');
      expect(grid).toHaveAttribute('id', 'product-grid');
      expect(grid).toHaveClass('custom-grid');
    });
  });

  describe('Numeric & Responsive Auto-Fit / Auto-Fill Columns', () => {
    it.each([1, 2, 4, 6])('renders %i equal columns when columns=%i', (cols) => {
      render(
        <Grid columns={cols} data-testid="grid">
          <div>Cell</div>
        </Grid>
      );

      expect(screen.getByTestId('grid')).toHaveStyle({
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      });
    });

    it('uses default 250px minColumnWidth when columns="auto-fit" without minColumnWidth', () => {
      render(
        <Grid columns="auto-fit" data-testid="grid">
          <div>Card A</div>
          <div>Card B</div>
        </Grid>
      );

      expect(screen.getByTestId('grid')).toHaveStyle({
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      });
    });

    it('uses custom minColumnWidth when columns="auto-fill" is passed', () => {
      render(
        <Grid columns="auto-fill" minColumnWidth="300px" data-testid="grid">
          <div>Card A</div>
          <div>Card B</div>
        </Grid>
      );

      expect(screen.getByTestId('grid')).toHaveStyle({
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      });
    });
  });

  describe('Spacing (gap, rowGap, columnGap)', () => {
    it('applies theme spacing token for gap', () => {
      render(
        <Grid gap={6} data-testid="grid">
          <div>A</div>
          <div>B</div>
        </Grid>
      );

      expect(screen.getByTestId('grid')).toHaveStyle({
        gap: `${lightTheme.spacing[6]}px`,
      });
    });

    it('applies separate rowGap and columnGap when provided', () => {
      render(
        <Grid rowGap={8} columnGap={2} data-testid="grid">
          <div>A</div>
          <div>B</div>
        </Grid>
      );

      expect(screen.getByTestId('grid')).toHaveStyle({
        rowGap: `${lightTheme.spacing[8]}px`,
        columnGap: `${lightTheme.spacing[2]}px`,
      });
    });
  });
});
