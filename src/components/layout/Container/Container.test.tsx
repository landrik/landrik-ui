import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { Container } from './Container';
import { lightTheme } from '../../../theme/theme';

describe('Container', () => {
  describe('Rendering & Default Layout', () => {
    it('renders children inside a div by default', () => {
      render(
        <Container data-testid="container">
          <p>Page content</p>
        </Container>
      );

      const container = screen.getByTestId('container');
      expect(container.tagName).toBe('DIV');
      expect(screen.getByText('Page content')).toBeInTheDocument();
    });

    it('applies default props (size="lg", center=true, px=4) when omitted', () => {
      render(
        <Container data-testid="default-container">
          Default layout
        </Container>
      );

      expect(screen.getByTestId('default-container')).toHaveStyle({
        maxWidth: lightTheme.breakpoints.lg,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: `${lightTheme.spacing[4]}px`,
        paddingRight: `${lightTheme.spacing[4]}px`,
      });
    });

    it('forwards standard HTML attributes like className and id', () => {
      render(
        <Container id="main-wrapper" className="page-container" data-testid="container">
          Content
        </Container>
      );

      const container = screen.getByTestId('container');
      expect(container).toHaveAttribute('id', 'main-wrapper');
      expect(container).toHaveClass('page-container');
    });
  });

  describe('Container Sizes (sm, md, lg, xl, full)', () => {
    it.each([
      ['sm', lightTheme.breakpoints.sm],
      ['md', lightTheme.breakpoints.md],
      ['lg', lightTheme.breakpoints.lg],
      ['xl', lightTheme.breakpoints.xl],
    ] as const)('applies size="%s" max-width (%s)', (size, expectedWidth) => {
      render(
        <Container size={size} data-testid="sized-container">
          Content
        </Container>
      );

      expect(screen.getByTestId('sized-container')).toHaveStyle({
        maxWidth: expectedWidth,
      });
    });

    it('sets max-width to 100% when size="full"', () => {
      render(
        <Container size="full" data-testid="full-container">
          Full width content
        </Container>
      );

      expect(screen.getByTestId('full-container')).toHaveStyle({
        maxWidth: '100%',
      });
    });
  });

  describe('Centering & Horizontal Padding (px)', () => {
    it('centers horizontally with auto margins when center is true', () => {
      render(
        <Container center data-testid="centered-container">
          Centered
        </Container>
      );

      expect(screen.getByTestId('centered-container')).toHaveStyle({
        marginLeft: 'auto',
        marginRight: 'auto',
      });
    });

    it('applies custom horizontal padding via px spacing token', () => {
      render(
        <Container px={6} data-testid="padded-container">
          Padded content
        </Container>
      );

      expect(screen.getByTestId('padded-container')).toHaveStyle({
        paddingLeft: `${lightTheme.spacing[6]}px`,
        paddingRight: `${lightTheme.spacing[6]}px`,
      });
    });

    it('removes horizontal padding when px={0}', () => {
      render(
        <Container px={0} data-testid="zero-pad-container">
          Edge-to-edge
        </Container>
      );

      expect(screen.getByTestId('zero-pad-container')).toHaveStyle({
        paddingLeft: '0px',
        paddingRight: '0px',
      });
    });
  });
});
