import React, { useState, useEffect, useRef } from 'react';
import { CarouselProps, CarouselImage } from './Carousel.types';
import {
  CarouselContainer,
  Thumbnail,
  FullscreenOverlay,
  NavButton,
  ImageContainer,
  Image,
  IndicatorContainer,
  Indicator,
  Counter,
  ThumbnailContainer,
  CloseButton,
  FullscreenImage,
} from './Carousel.styled';

const ChevronLeft = () => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
<polyline points="15 18 9 12 15 6"></polyline>
</svg>
);

const ChevronRight = () => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);


export const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = false,
  autoPlayInterval = 3000,
  showThumbnails = false,
  showIndicators = true,
  showCounter = false,
  showNavButtons = true,
  enableFullscreen = false,
  objectFit = 'cover',
  height,
  color,
  loop = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, autoPlayInterval]);

  useEffect(() => {
    if(!isFullscreen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreen(false)
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown)
  
  }, [isFullscreen])


  const goToNext = () => {
  if (currentIndex === images.length - 1) {
  if (loop) setCurrentIndex(0);
  } else {
  setCurrentIndex(prev => prev + 1);
  }
  };

  const goToPrev = () => {
  if (currentIndex === 0) {
  if (loop) setCurrentIndex(images.length - 1);
  } else {
  setCurrentIndex(prev => prev - 1);
  }
  };

  const goToSlide = (index: number) => {
  setCurrentIndex(index);
  };

  const handleImageClick = () => {
  if (enableFullscreen) {
  setIsFullscreen(true);
  }
  };

  const canGoPrev = loop || currentIndex > 0;
  const canGoNext = loop || currentIndex < images.length - 1;

return (
<>
<div>
<CarouselContainer $height={height}>
<ImageContainer style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
{images.map((image, index) => (
<Image
key={index}
src={image.src}
alt={image.alt}
$objectFit={objectFit}
onClick={handleImageClick}
style={{ cursor: enableFullscreen ? 'pointer' : 'default' }}
/>
))}
</ImageContainer>


      {showNavButtons && (
        <>
          <NavButton
            $position="left"
            $color={color}
            onClick={goToPrev}
            disabled={!canGoPrev}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </NavButton>
          <NavButton
            $position="right"
            $color={color}
            onClick={goToNext}
            disabled={!canGoNext}
            aria-label="Next image"
          >
            <ChevronRight />
          </NavButton>
        </>
      )}

      {showIndicators && (
        <IndicatorContainer>
          {images.map((_, index) => (
            <Indicator
              key={index}
              $active={index === currentIndex}
              $color={color}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </IndicatorContainer>
      )}

      {showCounter && (
        <Counter>
          {currentIndex + 1} / {images.length}
        </Counter>
      )}
    </CarouselContainer>

    {showThumbnails && (
      <ThumbnailContainer>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image.src}
            alt={image.alt}
            $active={index === currentIndex}
            $color={color}
            onClick={() => goToSlide(index)}
          />
        ))}
      </ThumbnailContainer>
    )}
  </div>

  {isFullscreen && (
    <FullscreenOverlay $visible={isFullscreen} onClick={() => setIsFullscreen(false)}>
      <CloseButton onClick={() => setIsFullscreen(false)} aria-label="Close fullscreen">
        <CloseIcon />
      </CloseButton>
      <FullscreenImage
        src={images[currentIndex]?.src}
        alt={images[currentIndex]?.alt}
        onClick={(e) => e.stopPropagation()}
      />
      {showNavButtons && (
        <>
          <NavButton
            $position="left"
            $color={color}
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            disabled={!canGoPrev}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </NavButton>
          <NavButton
            $position="right"
            $color={color}
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            disabled={!canGoNext}
            aria-label="Next image"
          >
            <ChevronRight />
          </NavButton>
        </>
      )}
    </FullscreenOverlay>
  )}


</>


);
};
