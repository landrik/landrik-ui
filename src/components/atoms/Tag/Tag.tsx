import React, { forwardRef, useContext, createContext, useMemo } from "react";
import type {
  TagProps,
  TagGroupProps,
  TagVariant,
  TagSize,
  TagColor,
} from "./Tag.types";
import {
  TagRoot,
  TagGroupRoot,
  TagIconLeft,
  TagIconRight,
  TagLabel,
  TagRemoveButton,
  OverflowBadge,
} from "./Tag.styled"; // Fix: was ./Tag.styled

// ─── Close icon (inline SVG, zero deps) ───────────────────────────────────────

const XIcon = () => (
  <svg
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M9.5 2.5L2.5 9.5M2.5 2.5L9.5 9.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

// ─── TagGroup context (passes shared defaults to child Tags) ──────────────────

interface TagGroupContextValue {
  variant?: TagVariant;
  size?: TagSize;
  color?: TagColor;
}

const TagGroupContext = createContext<TagGroupContextValue>({});

// ─── Tag ──────────────────────────────────────────────────────────────────────

const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      variant,
      size,
      color,
      iconLeft,
      iconRight,
      removable = false,
      onRemove,
      selected = false,
      disabled = false,
      removeLabel = "Remove",
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
    const ctx = useContext(TagGroupContext);

    const resolvedVariant: TagVariant = variant ?? ctx.variant ?? "soft";
    const resolvedSize: TagSize       = size    ?? ctx.size    ?? "md";
    const resolvedColor: TagColor     = color   ?? ctx.color   ?? "accent";
    const isInteractive               = Boolean(onClick);

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onRemove?.(e);
    };

    return (
      <TagRoot
        ref={ref}
        $variant={resolvedVariant}
        $size={resolvedSize}
        $color={resolvedColor}
        $selected={selected}
        $disabled={disabled}
        $removable={removable}
        aria-disabled={disabled || undefined}
        aria-pressed={isInteractive ? selected : undefined}
        role={isInteractive ? "button" : undefined}
        tabIndex={isInteractive && !disabled ? 0 : undefined}
        onClick={!disabled ? onClick : undefined}
        onKeyDown={
          isInteractive && !disabled
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClick?.(e as unknown as React.MouseEvent<HTMLSpanElement>);
                }
              }
            : undefined
        }
        {...rest}
      >
        {iconLeft && <TagIconLeft aria-hidden="true">{iconLeft}</TagIconLeft>}

        <TagLabel>{children}</TagLabel>

        {!removable && iconRight && (
          <TagIconRight aria-hidden="true">{iconRight}</TagIconRight>
        )}

        {removable && (
          <TagRemoveButton
            type="button"
            aria-label={`${removeLabel}${
              typeof children === "string" ? ` ${children}` : ""
            }`}
            disabled={disabled}
            onClick={handleRemove}
            tabIndex={-1}
          >
            <XIcon />
          </TagRemoveButton>
        )}
      </TagRoot>
    );
  }
);

Tag.displayName = "Tag";

// ─── TagGroup ─────────────────────────────────────────────────────────────────

const TagGroup = forwardRef<HTMLDivElement, TagGroupProps>(
  (
    {
      variant,
      size,
      color,
      maxVisible,
      overflowLabel,
      gap = "sm",
      wrap = true,
      children,
      "aria-label": ariaLabel,
      ...rest
    },
    ref
  ) => {
    const ctxValue = useMemo(
      () => ({ variant, size, color }),
      [variant, size, color]
    );

    const childArray  = React.Children.toArray(children);
    const hasOverflow = maxVisible !== undefined && childArray.length > maxVisible;
    const visible     = hasOverflow ? childArray.slice(0, maxVisible) : childArray;
    const hiddenCount = hasOverflow ? childArray.length - maxVisible! : 0;

    return (
      <TagGroupContext.Provider value={ctxValue}>
        <TagGroupRoot
          ref={ref}
          $gap={gap}
          $wrap={wrap}
          role="list"
          aria-label={ariaLabel}
          {...rest}
        >
          {visible.map((child, i) => (
            <span role="listitem" key={i} style={{ display: "contents" }}>
              {child}
            </span>
          ))}

          {hasOverflow && hiddenCount > 0 && (
            <OverflowBadge aria-label={`${hiddenCount} more items`}>
              {overflowLabel ? overflowLabel(hiddenCount) : `+${hiddenCount}`}
            </OverflowBadge>
          )}
        </TagGroupRoot>
      </TagGroupContext.Provider>
    );
  }
);

TagGroup.displayName = "TagGroup";

// ─── Exports ──────────────────────────────────────────────────────────────────

export { Tag, TagGroup };
export type { TagProps, TagGroupProps };