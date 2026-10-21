export interface CarouselImage {
    src: string;
    alt: string;
    caption?: string;
}
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
//# sourceMappingURL=Carousel.types.d.ts.map