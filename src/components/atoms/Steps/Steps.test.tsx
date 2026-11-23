import React from 'react';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Steps } from './Steps';
import { lightTheme } from '../../../theme/theme';

const mockSteps = [
  { title: 'Account', description: 'Create your account' },
  { title: 'Profile', description: 'Add personal details' },
  { title: 'Review', description: 'Confirm and submit' },
];

describe('Steps', () => {
  describe('Rendering & Step States', () => {
    it('renders all step titles and descriptions', () => {
      render(<Steps steps={mockSteps} current={0} />);

      expect(screen.getByText('Account')).toBeInTheDocument();
      expect(screen.getByText('Create your account')).toBeInTheDocument();
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Add personal details')).toBeInTheDocument();
      expect(screen.getByText('Review')).toBeInTheDocument();
      expect(screen.getByText('Confirm and submit')).toBeInTheDocument();
    });

    it('renders check icon for finished steps and step numbers for process and wait steps', () => {
      const { container } = render(<Steps steps={mockSteps} current={1} />);

      // Step 0 ("finish") renders CheckIcon SVG instead of "1"
      expect(screen.queryByText('1')).not.toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument();

      // Step 1 ("process") renders "2" and Step 2 ("wait") renders "3"
      expect(screen.getByText('2')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
    });

    it('renders custom step icon when provided', () => {
      const stepsWithCustomIcon = [
        { title: 'Custom Step', icon: <span data-testid="custom-step-icon">★</span> },
        { title: 'Next Step' },
      ];

      render(<Steps steps={stepsWithCustomIcon} current={0} />);
      expect(screen.getByTestId('custom-step-icon')).toBeInTheDocument();
    });

    it('applies muted text color to waiting steps and default text color to active steps', () => {
      render(<Steps steps={mockSteps} current={1} />);

      expect(screen.getByText('Profile')).toHaveStyle({
        color: lightTheme.color.text.default,
      });
      expect(screen.getByText('Review')).toHaveStyle({
        color: lightTheme.color.text.muted,
      });
    });
  });

  describe('User Interactions', () => {
    it('calls onChange with clicked step index when clickable is true', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      render(
        <Steps
          steps={mockSteps}
          current={0}
          clickable
          onChange={handleChange}
        />
      );

      await user.click(screen.getByText('Profile'));
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(1);
    });

    it('does not call onChange when clickable is false (default)', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      render(
        <Steps
          steps={mockSteps}
          current={0}
          onChange={handleChange}
        />
      );

      await user.click(screen.getByText('Profile'));
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('Directions', () => {
    it.each(['horizontal', 'vertical'] as const)(
      'renders cleanly with direction="%s"',
      (direction) => {
        const { container } = render(
          <Steps steps={mockSteps} current={1} direction={direction} />
        );

        expect(container.firstChild).toHaveStyle({
          flexDirection: direction === 'vertical' ? 'column' : 'row',
        });
      }
    );
  });
});
