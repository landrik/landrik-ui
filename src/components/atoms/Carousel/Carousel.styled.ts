import styled, { css } from "styled-components";


// export const CarouselContainer = styled.div`position: relative; width: 100%; overflow: hidden; border-radius: ${({ theme }) => theme.radius.xl}; background-color: ${({ theme }) => theme.color.neutral[900]};`;

// interface CarouselViewportProps {
//   $aspectRatio: string;
// }

// export const CarouselViewport = styled.div<CarouselViewportProps>`position: relative; width: 100%; aspect-ratio: ${p => p.$aspectRatio}; overflow: hidden;`;

// interface CarouselTrackProps {
// $transform: number;
// }

// export const CarouselTrack = styled.div<CarouselTrackProps>`display: flex; height: 100%; transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); transform: translateX(${p => p.$transform}%);`;

// export const CarouselSlide = styled.div`flex-shrink: 0; width: 100%; height: 100%; position: relative;`;

// export const CarouselImage = styled.img`width: 100%; height: 100%; object-fit: cover; user-select: none; pointer-events: none;`;

// export const CarouselCaption = styled.div`position: absolute; bottom: 0; left: 0; right: 0; padding: ${({ theme }) => theme.spacing[4]}px; background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent); color: ${({ theme }) => theme.color.neutral[0]}; font-size: ${({ theme }) => theme.typography.size.sm};`;

// interface CarouselButtonProps {
//   $position: 'left' | 'right';
// }

// export const CarouselButton = styled.button<CarouselButtonProps>`
//   position: absolute;
//   top: 50%;
//   ${p => p.$position === 'left' ? 'left: 1rem;' : 'right: 1rem;'}
//   transform: translateY(-50%);
//   width: 48px;
//   height: 48px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(255, 255, 255, 0.9);
//   border: none;
//   border-radius: ${({ theme }) => theme.radius.full};
//   cursor: pointer;
//   z-index: 2;
//   transition: all ${({ theme }) => theme.transitions.duration.base};
//   box-shadow: ${({ theme }) => theme.shadows.lg};

//   &:hover:not(:disabled) {
//     background-color: ${({ theme }) => theme.color.neutral[0]};
//     transform: translateY(-50%) scale(1.1);
//   }

//   &:disabled {
//     opacity: 0.3;
//     cursor: not-allowed;
//   }

//   svg {
//     color: ${({ theme }) => theme.color.neutral[900]};
//   }
// `;

// export const CarouselDots = styled.div`position: absolute; bottom: 1rem; left: 50%; transform: translateX(-50%); display: flex; gap: ${({ theme }) => theme.spacing[12]}px; z-index: 2;`;

// interface CarouselDotProps {
//   $active: boolean;
// }

// export const CarouselDot = styled.button<CarouselDotProps>`
//   width: ${p => p.$active ? '32px' : '8px'};
//   height: 8px;
//   padding: 0;
//   border: none;
//   border-radius: ${({ theme }) => theme.radius.full};
//   background-color: ${p => p.$active ? p.theme.color.neutral[0] : 'rgba(255, 255, 255, 0.5)'};
//   cursor: pointer;
//   transition: all ${({ theme }) => theme.transitions.duration.base};

//   &:hover {
//     background-color: ${({ theme }) => theme.color.neutral[0]};
//   }
// `;

// export const CarouselThumbnails = styled.div`
//   display: flex;
//   gap: ${({ theme }) => theme.spacing[12]}px;
//   margin-top: ${({ theme }) => theme.spacing[3]}px;
//   overflow-x: auto;
//   padding: ${({ theme }) => theme.spacing[4]}px;

//   &::-webkit-scrollbar {
//   height: 4px;
//   }

//   &::-webkit-scrollbar-track {
//   background: ${({ theme }) => theme.color.neutral[200]};
//   border-radius: ${({ theme }) => theme.radius.full};
//   }

//   &::-webkit-scrollbar-thumb {
//   background: ${({ theme }) => theme.color.neutral[400]};
//   border-radius: ${({ theme }) => theme.radius.full};
// }
// `;

// interface ThumbnailProps {
//   $active: boolean;
// }

// export const Thumbnail = styled.button<ThumbnailProps>`
//   flex-shrink: 0;
//   width: 80px;
//   height: 60px;
//   padding: 0;
//   border: 3px solid ${p => p.$active ? p.theme.color.accent[600] : 'transparent'};
//   border-radius: ${({ theme }) => theme.radius.md};
//   overflow: hidden;
//   cursor: pointer;
//   transition: all ${({ theme }) => theme.transitions.duration.base};
//   background: ${({ theme }) => theme.color.neutral[200]};

//   &:hover {
//     border-color: ${p => p.$active ? p.theme.color.accent[700] : p.theme.color.neutral[400]};
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;


export const CarouselContainer = styled.div<{ $height?: string }>`position: relative; width: 100%; height: ${props => props.$height || '400px'}; overflow: hidden; border-radius: 12px; background: #000;`;

export const ImageContainer = styled.div`position: relative; width: 100%; height: 100%; display: flex; transition: transform 0.3s ease-in-out;`;

export const Image = styled.img<{ $objectFit: 'cover' | 'contain' }>`width: 100%; height: 100%; object-fit: ${props => props.$objectFit}; flex-shrink: 0;`;

export const NavButton = styled.button<{ $position: 'left' | 'right'; $color: string }>`
position: absolute; 
top: 50%; 
${props => props.$position}: 16px; 
transform: translateY(-50%); 
background: ${props =>`${props.$color}cc`};
color: white;
border: none;
border-radius: 50%;
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.2s ease;
z-index: 2;

&:hover:not(:disabled) {
background: ${props => props.$color};
transform: translateY(-50%) scale(1.1);
}

&:disabled {
opacity: 0.3;
cursor: not-allowed;
}
`;

export const IndicatorContainer = styled.div`position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 2;`;

export const Indicator = styled.button<{ $active: boolean; $color: string }>`
width: 8px;
height: 8px;
border-radius: 50%;
border: none;
background: ${props => props.$active ? props.$color : 'rgba(255, 255, 255, 0.5)'};
cursor: pointer;
transition: all 0.2s ease;
padding: 0;

&:hover {
background: ${props => props.$active ? props.$color : 'rgba(255, 255, 255, 0.8)'};
transform: scale(1.2);
}
`;

export const Counter = styled.div`position: absolute; top: 16px; right: 16px; background: rgba(0, 0, 0, 0.7); color: white; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 500; z-index: 2;`;

export const ThumbnailContainer = styled.div`
display: flex;
gap: 8px;
margin-top: 12px;
overflow-x: auto;
padding: 4px 0;

&::-webkit-scrollbar {
height: 6px;
}

&::-webkit-scrollbar-track {
background: #f1f1f1;
border-radius: 3px;
}

&::-webkit-scrollbar-thumb {
background: #888;
border-radius: 3px;
}

&::-webkit-scrollbar-thumb:hover {
background: #555;
}
`;

export const Thumbnail = styled.img<{ $active: boolean; $color: string }>`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid ${props => props.$active ? props.$color : 'transparent'};
  opacity: ${props => props.$active ? 1 : 0.6};
  transition: all 0.2s ease;

  &:hover {
  opacity: 1;
  transform: scale(1.05);
  }
`;

export const FullscreenOverlay = styled.div<{ $visible: boolean }>`position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.95); z-index: 9999; display: ${props => props.$visible ? 'flex' : 'none'}; align-items: center; justify-content: center;`;

export const FullscreenImage = styled.img`max-width: 90vw; max-height: 90vh; object-fit: contain;`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;