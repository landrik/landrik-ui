import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { Indicator } from './Indicator';
import { lightTheme } from '../../../theme/theme';

describe('Indicator', () => {
  describe('Rendering & Content', () => {
    it('renders wrapped children and badge content by default', () => {
      render(
        <Indicator content={5}>
          <button type="button">Notifications</button>
        </Indicator>
      );

      expect(screen.getByRole('button', { name: 'Notifications' })).toBeInTheDocument();
      expect(screen.getByText('5')).toBeVisible();
    });

    it('hides text content when dot={true}', () => {
      const { container } = render(
        <Indicator content={99} dot>
          <span>Inbox</span>
        </Indicator>
      );

      expect(screen.getByText('Inbox')).toBeInTheDocument();
      expect(screen.queryByText('99')).not.toBeInTheDocument();
      expect(container.firstChild?.lastChild).toBeVisible();
    });

    it('hides indicator badge when show={false}', () => {
      render(
        <Indicator content={3} show={false}>
          <span>Messages</span>
        </Indicator>
      );

      expect(screen.getByText('Messages')).toBeInTheDocument();
      expect(screen.getByText('3')).not.toBeVisible();
    });
  });

  describe('Variants, Sizes & Positions', () => {
    it.each([
      ['error', lightTheme.color.danger.bgDefault],
      ['success', lightTheme.color.success.bgDefault],
      ['warning', lightTheme.color.warning.bgDefault],
      ['info', lightTheme.color.info.bgDefault],
    ] as const)('applies %s variant background color', (variant, expectedBg) => {
      render(
        <Indicator content="1" variant={variant}>
          <span>Icon</span>
        </Indicator>
      );

      expect(screen.getByText('1')).toHaveStyle({ backgroundColor: expectedBg });
    });


    it.each(['sm', 'md', 'lg'] as const)('renders cleanly with size="%s"', (size) => {
      render(
        <Indicator content="7" size={size}>
          <span>Target</span>
        </Indicator>
      );

      expect(screen.getByText('7')).toBeInTheDocument();
    });

    it.each(['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const)(
      'renders cleanly with position="%s"',
      (position) => {
        render(
          <Indicator content="2" position={position}>
            <span>Corner</span>
          </Indicator>
        );

        expect(screen.getByText('2')).toBeInTheDocument();
      }
    );
  });
});
