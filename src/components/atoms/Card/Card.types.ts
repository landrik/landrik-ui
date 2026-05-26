import { HTMLAttributes, ReactNode } from "react";

// ─── Primitive Types ─────────────────────────────────────────────────────────

export type CardVariant = "elevated" | "outlined" | "filled" | "glass";
export type CardSize = "sm" | "md" | "lg";
export type CardRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";
export type CardFooterAlign = "left" | "center" | "right" | "space-between";
export type CardBadgeColor = "default" | "primary" | "success" | "warning" | "danger";
import type { SpacingIndex } from "@/theme";

// ─── Internal prop passed from Card root to sub-components via cloneElement ──

/** @internal — injected automatically by <Card>; do not pass manually */

export interface CardSizeProp {
  size?: CardSize;
}

// ─── Component Prop Interfaces ───────────────────────────────────────────────

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant
   * @default "elevated"
   */
  variant?: CardVariant;
  /** Controls internal padding of all sub-components
   * @default "md"
   */
  size?: CardSize;
  /** Border radius preset
   * @default "lg"
   */
  radius?: CardRadius;
  /** Enables hover/focus lift interaction */
  interactive?: boolean;
  /** Disables the card visually and blocks pointer events */
  disabled?: boolean;
  /** Stretches the card to 100% of its container width */
  fullWidth?: boolean;
  children?: ReactNode;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Horizontal alignment of footer children
   * @default "left"
   */
  $align?: CardFooterAlign;
  children?: ReactNode;
}

export interface CardMediaProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /** Image source URL — forwarded to the inner <img> only */
  src: string;
  /** Accessible alt text for the inner <img> */
  alt: string;
  /** Height of the media area in px (number) or any CSS unit (string)
   * @default 200
   */
  $height?: SpacingIndex;
  /** CSS object-fit for the image
   * @default "cover"
   */
  $objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export interface CardBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color scheme
   * @default "default"
   */
  color?: CardBadgeColor;
  children?: ReactNode;
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}

export interface CardDividerProps extends HTMLAttributes<HTMLHRElement> {}