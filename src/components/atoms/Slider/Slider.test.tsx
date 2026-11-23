import React from 'react';
import { render, screen, fireEvent } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { Slider } from './Slider';

describe('Slider', () => {
  describe('Rendering', () => {
    it('renders label and current value display', () => {
      render(<Slider label="Volume" value={40} min={0} max={100} showValue onChange={jest.fn()} />);
      expect(screen.getByText('Volume')).toBeInTheDocument();
      expect(screen.getByText('40')).toBeInTheDocument();
    });

    // it('renders min and max boundary labels', () => {
    //   render(<Slider label="Brightness" value={50} min={0} max={100} onChange={jest.fn()} />);
    //   expect(screen.getByText('0')).toBeInTheDocument();
    //   expect(screen.getByText('100')).toBeInTheDocument();
    // });

    it('hides value display when showValue is false', () => {
      render(
        <Slider
          label="Brightness"
          value={50}
          min={0}
          max={100}
          showValue={false}
          onChange={jest.fn()}
        />
      );
      expect(screen.queryByText('50')).not.toBeInTheDocument();
    });

    it('renders slider role with proper ARIA attributes', () => {
      render(<Slider label="Opacity" value={25} min={0} max={100} onChange={jest.fn()} />);
      const slider = screen.getByRole('slider');
      expect(slider).toHaveAttribute('aria-valuemin', '0');
      expect(slider).toHaveAttribute('aria-valuemax', '100');
      expect(slider).toHaveAttribute('aria-valuenow', '25');
    });
  });

  describe('User Interactions', () => {
    it('updates value when track is clicked', () => {
      const handleChange = jest.fn();
      render(<Slider label="Progress" value={0} min={0} max={100} onChange={handleChange} />);

      const slider = screen.getByRole('slider');
      jest.spyOn(slider, 'getBoundingClientRect').mockReturnValue({
        left: 0,
        width: 200,
        top: 0,
        height: 6,
        right: 200,
        bottom: 6,
        x: 0,
        y: 0,
        toJSON: () => {},
      });

      fireEvent.mouseDown(slider, { clientX: 100 });
      fireEvent.mouseUp(document);

      expect(handleChange).toHaveBeenCalledWith(50);
    });

    it('supports keyboard ArrowRight and ArrowLeft adjustments', () => {
      const handleChange = jest.fn();
      render(
        <Slider label="Step Slider" value={50} min={0} max={100} step={5} onChange={handleChange} />
      );

      const slider = screen.getByRole('slider');
      fireEvent.keyDown(slider, { key: 'ArrowRight' });
      expect(handleChange).toHaveBeenCalledWith(55);

      fireEvent.keyDown(slider, { key: 'ArrowLeft' });
      expect(handleChange).toHaveBeenCalledWith(45);
    });
  });

  describe('Disabled State', () => {
    it('does not trigger onChange when disabled', () => {
      const handleChange = jest.fn();
      render(<Slider label="Locked" value={30} disabled onChange={handleChange} />);

      const slider = screen.getByRole('slider');
      expect(slider).toHaveAttribute('aria-disabled', 'true');

      fireEvent.mouseDown(slider, { clientX: 100 });
      fireEvent.keyDown(slider, { key: 'ArrowRight' });

      expect(handleChange).not.toHaveBeenCalled();
    });
  });
});
