import { HTMLAttributes, ReactNode } from "react";

// ─── Primitive Types ─────────────────────────────────────────────────────────

export type CardVariant = "elevated" | "outlined" | "filled" | "glass";
export type CardSize = "sm" | "md" | "lg";
export type CardRadius = "none" | "sm" | "md" | "lg" | "xl" | "full";
export type CardFooterAlign = "left" | "center" | "right" | "space-between";
export type CardBadgeColor = "default" | "primary" | "success" | "warning" | "danger";
import type { SpacingIndex } from "@/theme";
import type { DefaultTheme } from 'styled-components';

// ─── Internal prop passed from Card root to sub-components via cloneElement ──

/** @internal — injected automatically by <Card>; do not pass manually */

export interface CardSizeProp {
  size?: CardSize;
}

// ─── Component Prop Interfaces ───────────────────────────────────────────────

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  $variant?: CardVariant;
  size?: CardSize;
  radius?: CardRadius;
  interactive?: boolean;
  disabled?: boolean;
  $fullWidth?: boolean;
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
  //$align?: CardFooterAlign;
  align?: CardFooterAlign;
  children?: ReactNode;
}

export interface CardMediaProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  src: string;
  alt: string;
  $height?:  keyof DefaultTheme['spacing'];
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
