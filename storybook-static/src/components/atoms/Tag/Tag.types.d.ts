import React from "react";
export type TagVariant = "filled" | "outlined" | "soft" | "ghost";
export type TagSize = "sm" | "md" | "lg";
/**
 * Brand + neutral — resolved from theme.color.accent / theme.color.neutral.
 * Renamed "primary" → "accent" to match the theme token key directly.
 */
export type AccentColor = "accent" | "neutral";
/** Communicates meaning — resolved from theme.color.success/warning/danger/info */
export type SemanticColor = "success" | "warning" | "danger" | "info";
/** Full color union accepted by Tag and TagGroup */
export type TagColor = AccentColor | SemanticColor;
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Visual variant */
    variant?: TagVariant;
    /** Size */
    size?: TagSize;
    /** Color — maps to theme.color.accent | theme.color.neutral | theme.color.[status] */
    color?: TagColor;
    /** Left-side icon slot */
    iconLeft?: React.ReactNode;
    /** Right-side icon slot (overridden by removable) */
    iconRight?: React.ReactNode;
    /** Render a dismiss button */
    removable?: boolean;
    /** Called when the dismiss button is clicked */
    onRemove?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /** Mark tag as selected (togglable) */
    selected?: boolean;
    /** Disable interaction */
    disabled?: boolean;
    /** Accessible label for the remove button */
    removeLabel?: string;
    /** Forward ref */
    ref?: React.Ref<HTMLSpanElement>;
}
export interface TagGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Shared variant applied to all child Tags (overridable per-tag) */
    variant?: TagVariant;
    /** Shared size */
    size?: TagSize;
    /** Shared color */
    color?: TagColor;
    /** Maximum visible tags before overflow label */
    maxVisible?: number;
    /** Label renderer for overflow badge — receives hidden count */
    overflowLabel?: (count: number) => React.ReactNode;
    /** Gap between tags */
    gap?: "xs" | "sm" | "md";
    /** Wrap tags to multiple lines */
    wrap?: boolean;
    /** ARIA label for the group */
    "aria-label"?: string;
}
export interface $TagStyleProps {
    $variant: TagVariant;
    $size: TagSize;
    $color: TagColor;
    $selected: boolean;
    $disabled: boolean;
    $removable: boolean;
}
export interface $TagGroupStyleProps {
    $gap: "xs" | "sm" | "md";
    $wrap: boolean;
}
//# sourceMappingURL=Tag.types.d.ts.map