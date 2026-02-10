import { ReactNode } from 'react';

export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
export type DrawerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface DrawerProps {
  /** Whether drawer is visible */
open: boolean;
/** Callback when drawer should close */
onClose: () => void;
/** Drawer content */
children: ReactNode;
/** Side from which drawer appears */
placement?: DrawerPlacement;
/** Drawer size */
size?: DrawerSize;
/** Drawer title */
title?: ReactNode;
/** Footer content */
footer?: ReactNode;
/** Close on overlay click */
closeOnOverlayClick?: boolean;
/** Close on Escape key */
closeOnEscape?: boolean;
/** Show close button */
showCloseButton?: boolean;
}
