import React from 'react';
import { render, screen, fireEvent } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Rating } from './Rating';

describe('Rating', () => {
  describe('Rendering & Numeric Display', () => {
    it('renders 5 star buttons with accessible labels by default', () => {
      render(<Rating value={3} />);

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(5);
      expect(screen.getByRole('button', { name: 'Rate 1 out of 5' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Rate 5 out of 5' })).toBeInTheDocument();
    });

    it('renders custom max number of stars', () => {
      render(<Rating value={7} max={10} />);

      expect(screen.getAllByRole('button')).toHaveLength(10);
      expect(screen.getByRole('button', { name: 'Rate 10 out of 10' })).toBeInTheDocument();
    });

    it('displays formatted rating score when showValue is true', () => {
      render(<Rating value={3.5} max={5} showValue />);
      expect(screen.getByText('3.5 / 5')).toBeInTheDocument();
    });

    it('hides numeric rating score when showValue is false (default)', () => {
      render(<Rating value={4} max={5} />);
      expect(screen.queryByText('4.0 / 5')).not.toBeInTheDocument();
    });
  });

  describe('User Interactions & Half-Star Selection', () => {
    it('calls onChange with selected star value when clicked', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      render(<Rating value={0} onChange={handleChange} />);

      await user.click(screen.getByRole('button', { name: 'Rate 4 out of 5' }));
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(4);
    });

    it('selects half-star value when clicking left half with allowHalf={true}', () => {
      const handleChange = jest.fn();
      render(<Rating value={0} allowHalf onChange={handleChange} />);

      const thirdStar = screen.getByRole('button', { name: 'Rate 3 out of 5' });
      jest.spyOn(thirdStar, 'getBoundingClientRect').mockReturnValue({
        left: 0,
        width: 24,
        top: 0,
        height: 24,
        right: 24,
        bottom: 24,
        x: 0,
        y: 0,
        toJSON: () => {},
      });

      // Click at clientX = 6 (left half of 24px wide star -> 2.5)
      fireEvent.click(thirdStar, { clientX: 6 });
      expect(handleChange).toHaveBeenCalledWith(2.5);

      // Click at clientX = 18 (right half of 24px wide star -> 3.0)
      fireEvent.click(thirdStar, { clientX: 18 });
      expect(handleChange).toHaveBeenCalledWith(3);
    });
  });

  describe('ReadOnly Mode & Sizes', () => {
    it('disables star buttons and blocks onChange when readOnly is true', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();

      render(<Rating value={4} readOnly onChange={handleChange} />);

      const starButtons = screen.getAllByRole('button');
      starButtons.forEach((btn) => expect(btn).toBeDisabled());

      //await user.click(starButtons);
      await user.click(screen.getByRole('button', { name: 'Rate 3 out of 5' }));
      expect(handleChange).not.toHaveBeenCalled();
    });

    it.each(['sm', 'md', 'lg'] as const)('renders cleanly with size="%s"', (size) => {
      render(<Rating value={3} size={size} />);
      expect(screen.getAllByRole('button')).toHaveLength(5);
    });
  });
});
