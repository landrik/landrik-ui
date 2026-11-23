import styled, { DefaultTheme } from 'styled-components';

const getAccentColor = (props: { $color?: string; theme: DefaultTheme }) =>
  props.$color || props.theme.color.accent.bgDefault;

export const CarouselContainer = styled.div<{ $height?: string }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.$height || '400px'};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: #000000;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

export const Image = styled.img<{ $objectFit: 'cover' | 'contain' }>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.$objectFit};
  flex-shrink: 0;
`;

export const NavButton = styled.button<{ $position: 'left' | 'right'; $color?: string }>`
  position: absolute;
  top: 50%;
  ${(props) => props.$position}: 16px;
  transform: translateY(-50%);
  background-color: ${(props) => getAccentColor(props)};
  color: ${({ theme }) => theme.color.accent.onFill};
  border: none;
  border-radius: ${({ theme }) => theme.radius.full};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.preset.base};
  z-index: 2;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.$color || props.theme.color.accent.bgHover};
    transform: translateY(-50%) scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.border.focus};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]}px;
  z-index: 2;
`;

export const Indicator = styled.button<{ $active: boolean; $color?: string }>`
  width: 8px;
  height: 8px;
  border-radius: ${({ theme }) => theme.radius.full};
  border: none;
  background: ${(props) =>
    props.$active ? getAccentColor(props) : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.preset.base};
  padding: 0;

  &:hover {
    background: ${(props) =>
      props.$active ? getAccentColor(props) : 'rgba(255, 255, 255, 0.85)'};
    transform: scale(1.2);
  }
`;

export const Counter = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: ${({ theme }) => theme.color.surface.overlay};
  color: #ffffff;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radius.full};
  font-family: ${({ theme }) => theme.typography.family.sans};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  z-index: 2;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]}px;
  margin-top: ${({ theme }) => theme.spacing[3]}px;
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing[1]}px 0;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.neutral.bgSubtle};
    border-radius: ${({ theme }) => theme.radius.full};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.border.strong};
    border-radius: ${({ theme }) => theme.radius.full};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.text.muted};
  }
`;

export const Thumbnail = styled.img<{ $active: boolean; $color?: string }>`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  border: 2px solid ${(props) => (props.$active ? getAccentColor(props) : 'transparent')};
  opacity: ${(props) => (props.$active ? 1 : 0.6)};
  transition: ${({ theme }) => theme.transitions.preset.base};
  flex-shrink: 0;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

export const FullscreenOverlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: ${({ theme }) => theme.zIndices.modal + 100};
  display: ${(props) => (props.$visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

export const FullscreenImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${({ theme }) => theme.color.surface.overlay};
  color: #ffffff;
  border: none;
  border-radius: ${({ theme }) => theme.radius.full};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.preset.base};

  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`;
