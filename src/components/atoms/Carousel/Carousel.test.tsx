import React from 'react';
import { render, screen, act } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Carousel } from './Carousel';

const mockImages = [
  { src: 'https://example.com', alt: 'Mountain View' },
  { src: 'https://example.com', alt: 'Ocean Sunset' },
  { src: 'https://example.com', alt: 'Forest Trail' },
];

describe('Carousel', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Rendering & Optional Controls', () => {
    it('renders all images with alt text and shows nav buttons and indicators by default', () => {
      render(<Carousel images={mockImages} />);

      expect(screen.getByAltText('Mountain View')).toBeInTheDocument();
      expect(screen.getByAltText('Ocean Sunset')).toBeInTheDocument();
      expect(screen.getByAltText('Forest Trail')).toBeInTheDocument();

      expect(screen.getByRole('button', { name: 'Previous image' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Next image' })).toBeInTheDocument();
      expect(screen.getAllByRole('button', { name: /Go to slide/i })).toHaveLength(3);
    });

    it('hides nav buttons and indicators when showNavButtons={false} and showIndicators={false}', () => {
      render(
        <Carousel
          images={mockImages}
          showNavButtons={false}
          showIndicators={false}
        />
      );

      expect(screen.queryByRole('button', { name: 'Previous image' })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: 'Next image' })).not.toBeInTheDocument();
      expect(screen.queryAllByRole('button', { name: /Go to slide/i })).toHaveLength(0);
    });

    it('displays slide counter when showCounter is true', () => {
      render(<Carousel images={mockImages} showCounter />);
      expect(screen.getByText('1 / 3')).toBeInTheDocument();
    });

    it('renders thumbnail images when showThumbnails is true', () => {
      render(<Carousel images={mockImages} showThumbnails />);
      expect(screen.getAllByAltText('Mountain View')).toHaveLength(2);
      expect(screen.getAllByAltText('Ocean Sunset')).toHaveLength(2);
      expect(screen.getAllByAltText('Forest Trail')).toHaveLength(2);
    });
  });

  describe('Navigation, Indicators & Thumbnails', () => {
    it('advances and reverses slides using Next and Previous buttons', async () => {
      const user = userEvent.setup();
      render(<Carousel images={mockImages} showCounter />);

      expect(screen.getByText('1 / 3')).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Next image' }));
      expect(screen.getByText('2 / 3')).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Next image' }));
      expect(screen.getByText('3 / 3')).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Previous image' }));
      expect(screen.getByText('2 / 3')).toBeInTheDocument();
    });

    it('jumps to a specific slide when an indicator button is clicked', async () => {
      const user = userEvent.setup();
      render(<Carousel images={mockImages} showCounter />);

      await user.click(screen.getByRole('button', { name: 'Go to slide 3' }));
      expect(screen.getByText('3 / 3')).toBeInTheDocument();
    });

    it('jumps to a specific slide when a thumbnail is clicked', async () => {
      const user = userEvent.setup();
      render(<Carousel images={mockImages} showThumbnails showCounter />);

      const thumbnails = screen.getAllByAltText('Forest Trail');
      await user.click(thumbnails[1]);

      expect(screen.getByText('3 / 3')).toBeInTheDocument();
    });

    it('wraps around at boundaries when loop is true (default)', async () => {
      const user = userEvent.setup();
      render(<Carousel images={mockImages} showCounter loop />);

      await user.click(screen.getByRole('button', { name: 'Previous image' }));
      expect(screen.getByText('3 / 3')).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Next image' }));
      expect(screen.getByText('1 / 3')).toBeInTheDocument();
    });

    it('disables Previous on first slide and Next on last slide when loop is false', async () => {
      const user = userEvent.setup();
      render(<Carousel images={mockImages} loop={false} />);

      const prevBtn = screen.getByRole('button', { name: 'Previous image' });
      const nextBtn = screen.getByRole('button', { name: 'Next image' });

      expect(prevBtn).toBeDisabled();
      expect(nextBtn).not.toBeDisabled();

      await user.click(nextBtn);
      await user.click(nextBtn);

      expect(nextBtn).toBeDisabled();
    });
  });

  describe('Fullscreen Mode & Autoplay', () => {
    it('opens fullscreen overlay when image is clicked with enableFullscreen={true} and closes on Close button or Escape', async () => {
      const user = userEvent.setup();
      render(<Carousel images={mockImages} enableFullscreen />);

      expect(screen.queryByRole('button', { name: 'Close fullscreen' })).not.toBeInTheDocument();

      await user.click(screen.getByAltText('Mountain View'));
      expect(screen.getByRole('button', { name: 'Close fullscreen' })).toBeInTheDocument();

      await user.keyboard('{Escape}');
      expect(screen.queryByRole('button', { name: 'Close fullscreen' })).not.toBeInTheDocument();
    });

    it('automatically advances slides when autoPlay is enabled', () => {
      jest.useFakeTimers();
      render(<Carousel images={mockImages} autoPlay autoPlayInterval={3000} showCounter />);

      expect(screen.getByText('1 / 3')).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(3000);
      });
      expect(screen.getByText('2 / 3')).toBeInTheDocument();

      act(() => {
        jest.advanceTimersByTime(3000);
      });
      expect(screen.getByText('3 / 3')).toBeInTheDocument();
    });
  });
});
