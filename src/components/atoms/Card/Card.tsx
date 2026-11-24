import React, { forwardRef } from "react";
import {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardMediaProps,
  CardBadgeProps,
  CardTitleProps,
  CardDescriptionProps,
  CardDividerProps,
  CardSizeProp,
} from "./Card.types";

import {
  StyledCard,
  StyledCardHeader,
  StyledCardBody,
  StyledCardFooter,
  StyledCardMedia,
  StyledCardDivider,
  StyledCardBadge,
  StyledCardTitle,
  StyledCardDescription,
} from "./Card.styled";

// ─── Card Root ───────────────────────────────────────────────────────────────

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "elevated",
      size = "md",
      radius = "lg",
      interactive = false,
      disabled = false,
      fullWidth = false,
      onClick,
      onKeyDown,
      children,
      ...rest
    },
    ref
  ) => {
    const childrenWithSize = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;
      const knownSubComponents = [
        CardHeader,
        CardBody,
        CardFooter,
        CardMedia,
        CardDivider,
        CardBadge,
        CardTitle,
        CardDescription,
      ];
      const isSubComponent = knownSubComponents.some(
        (comp) => child.type === comp
      );
      if (isSubComponent) {
        return React.cloneElement(child as React.ReactElement<CardSizeProp>, {
          size,
        });
      }
      return child;
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e);
      if (interactive && !disabled && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>);
      }
    };

    return (
      <StyledCard
        ref={ref}
        variant={variant}
        size={size}
        radius={radius}
        interactive={interactive}
        disabled={disabled}
        fullWidth={fullWidth}
        role={interactive ? "button" : undefined}
        tabIndex={interactive && !disabled ? 0 : undefined}
        aria-disabled={disabled || undefined}
        onClick={!disabled ? onClick : undefined}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {childrenWithSize}
      </StyledCard>
    );
  }
);

Card.displayName = "Card";

// ─── Card Header ─────────────────────────────────────────────────────────────

const CardHeader = forwardRef<
  HTMLDivElement,
  CardHeaderProps & CardSizeProp
>(({ children, size = "md", ...rest }, ref) => (
  <StyledCardHeader ref={ref} $size={size} {...rest}>
    {children}
  </StyledCardHeader>
));

CardHeader.displayName = "CardHeader";

// ─── Card Body ───────────────────────────────────────────────────────────────

const CardBody = forwardRef<
  HTMLDivElement,
  CardBodyProps & CardSizeProp
>(({ children, size = "md", ...rest }, ref) => (
  <StyledCardBody ref={ref} $size={size} {...rest}>
    {children}
  </StyledCardBody>
));
CardBody.displayName = "CardBody";

// ─── Card Footer ─────────────────────────────────────────────────────────────

const CardFooter = forwardRef<
  HTMLDivElement,
  CardFooterProps & CardSizeProp
>(({ align = "left", children, size = "md", ...rest }, ref) => (
  <StyledCardFooter ref={ref} align={align} $size={size} {...rest}>
    {children}
  </StyledCardFooter>
));
CardFooter.displayName = "CardFooter";

// ─── Card Media ──────────────────────────────────────────────────────────────

const CardMedia = forwardRef<
  HTMLDivElement,
  CardMediaProps & CardSizeProp
>(({ src, alt, height, objectFit, size: _size, ...rest }, ref) => (
  <StyledCardMedia
    ref={ref}
    height={height}
    objectFit={objectFit}
    {...rest}
  >
    <img src={src} alt={alt} loading="lazy" />
  </StyledCardMedia>
));
CardMedia.displayName = "CardMedia";

// ─── Card Divider ────────────────────────────────────────────────────────────

const CardDivider = forwardRef<HTMLHRElement, CardDividerProps>(
  (props, ref) => <StyledCardDivider ref={ref} {...props} />
);
CardDivider.displayName = "CardDivider";

// ─── Card Badge ──────────────────────────────────────────────────────────────

const CardBadge = forwardRef<HTMLSpanElement, CardBadgeProps>(
  ({ color = "default", children, ...rest }, ref) => (
    <StyledCardBadge ref={ref} color={color} {...rest}>
      {children}
    </StyledCardBadge>
  )
);
CardBadge.displayName = "CardBadge";

// ─── Card Title ──────────────────────────────────────────────────────────────

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, ...rest }, ref) => (
    <StyledCardTitle ref={ref} {...rest}>
      {children}
    </StyledCardTitle>
  )
);
CardTitle.displayName = "CardTitle";

// ─── Card Description ────────────────────────────────────────────────────────

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, ...rest }, ref) => (
    <StyledCardDescription ref={ref} {...rest}>
      {children}
    </StyledCardDescription>
  )
);
CardDescription.displayName = "CardDescription";

// ─── Exports ─────────────────────────────────────────────────────────────────

export {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardMedia,
  CardDivider,
  CardBadge,
  CardTitle,
  CardDescription,
};
