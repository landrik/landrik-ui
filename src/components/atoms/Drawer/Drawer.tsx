import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DrawerProps } from './Drawer.types';
import {
DrawerOverlay,
DrawerContainer,
DrawerHeader,
DrawerTitle,
DrawerCloseButton,
DrawerBody,
DrawerFooter,
} from './Drawer.styled';

const CloseIcon = () => (
<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
);

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  children,
  placement = 'right',
  size = 'md',
  title,
  footer,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (!open) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape') {
        onClose();
      }
    };

    // Prevent body scroll when drawer is open
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };


  }, [open, closeOnEscape, onClose]);

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
    onClose();
    }
  };

if (typeof window === 'undefined') return null;

return createPortal(
<>
  <DrawerOverlay
    $open={open}
    onClick={handleOverlayClick}
    aria-hidden="true"
  />
  <DrawerContainer
    $open={open}
    $placement={placement}
    $size={size}
    role="dialog"
    aria-modal="true"
    aria-labelledby={title ? 'drawer-title' : undefined}
  >
    {(title || showCloseButton) && (
    <DrawerHeader>
      {title && <DrawerTitle id="drawer-title">{title}</DrawerTitle>}
      {showCloseButton && (
      <DrawerCloseButton onClick={onClose} aria-label="Close drawer">
      <CloseIcon />
      </DrawerCloseButton>
      )}
    </DrawerHeader>
    )}
    <DrawerBody>{children}</DrawerBody>
    {footer && <DrawerFooter>{footer}</DrawerFooter>}                                     
  </DrawerContainer>
</>,
document.body
);
};