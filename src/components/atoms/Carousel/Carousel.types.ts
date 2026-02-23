import { ReactNode } from 'react';

export interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

// export interface CarouselProps {
//   /** Array of images */
//   images: CarouselImage[];
//   /** Auto-play interval in milliseconds (0 = disabled) */
//   autoPlay?: number;
//   /** Show navigation arrows */
//   showArrows?: boolean;
//   /** Show dots/indicators */
//   showDots?: boolean;
//   /** Show thumbnails */
//   showThumbnails?: boolean;
//   /** Enable infinite loop */
//   loop?: boolean;
//   /** Initial slide index */
//   initialSlide?: number;
//   /** Callback when slide changes */
//   onSlideChange?: (index: number) => void;
//   /** Aspect ratio (e.g., '16:9', '4:3', '1:1') */
//   aspectRatio?: string;
// }


export interface CarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showThumbnails?: boolean;
  showIndicators?: boolean;
  showCounter?: boolean;
  showNavButtons?: boolean;
  enableFullscreen?: boolean;
  objectFit?: 'cover' | 'contain';
  height?: string;
  color?: string;
  loop?: boolean;
}