import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { Box } from './Box';
import { lightTheme } from '../../../theme/theme';

describe('Box', () => {
  describe('Rendering & Semantic Tags', () => {
    it('renders children inside a div by default', () => {
      render(<Box data-testid="box">Box content</Box>);
      const box = screen.getByTestId('box');
      expect(box.tagName).toBe('DIV');
      expect(screen.getByText('Box content')).toBeInTheDocument();
    });

    it.each(['div', 'section', 'article', 'aside', 'header', 'footer', 'main'] as const)(
      'renders as <%s> when as="%s" is passed',
      (tag) => {
        render(
          <Box as={tag} data-testid="semantic-box">
            Content
          </Box>
        );
        expect(screen.getByTestId('semantic-box').tagName).toBe(tag.toUpperCase());
      }
    );
  });

  describe('Spacing (p, px, py, m, mx, my)', () => {
    it('applies theme spacing tokens for p and m', () => {
      render(
        <Box p={4} m={2} data-testid="spaced-box">
          Spaced
        </Box>
      );

      expect(screen.getByTestId('spaced-box')).toHaveStyle({
        padding: `${lightTheme.spacing[4]}px`,
        margin: `${lightTheme.spacing[2]}px`,
      });
    });

    it('applies directional padding (px, py) and margin (mx, my)', () => {
      render(
        <Box px={6} py={2} mx={4} my={1} data-testid="axis-box">
          Axis Spaced
        </Box>
      );

      const box = screen.getByTestId('axis-box');
      expect(box).toHaveStyle({
        paddingLeft: `${lightTheme.spacing[6]}px`,
        paddingRight: `${lightTheme.spacing[6]}px`,
        paddingTop: `${lightTheme.spacing[2]}px`,
        paddingBottom: `${lightTheme.spacing[2]}px`,
        marginLeft: `${lightTheme.spacing[4]}px`,
        marginRight: `${lightTheme.spacing[4]}px`,
        marginTop: `${lightTheme.spacing[1]}px`,
        marginBottom: `${lightTheme.spacing[1]}px`,
      });
    });
  });

  describe('Background & Border Radius', () => {
    it('applies custom background color via bg prop', () => {
      render(
        <Box bg="#f3f4f6" data-testid="bg-box">
          Tinted
        </Box>
      );

      expect(screen.getByTestId('bg-box')).toHaveStyle({
        backgroundColor: '#f3f4f6',
      });
    });

    it.each(['none', 'sm', 'md', 'lg', 'xl', 'full'] as const)(
      'applies radius="%s" token',
      (radius) => {
        render(
          <Box radius={radius} data-testid="radius-box">
            Rounded
          </Box>
        );

        expect(screen.getByTestId('radius-box')).toHaveStyle({
          borderRadius: lightTheme.radius[radius],
        });
      }
    );
  });
});
