/**
 * primitives.ts
 *
 * Raw design values — the bottom layer of the token system.
 * These are NEVER used directly in components.
 * Always reference semantic tokens from theme.ts instead.
 *
 * Color scale convention:
 *   0    = white / lightest
 *   50–900 = incremental steps (lighter → darker)
 *   1000 = black / darkest
 */
export declare const palette: {
    readonly primary: {
        readonly neutral: {
            readonly 0: "#ffffff";
            readonly 50: "#f9fafb";
            readonly 100: "#f3f4f6";
            readonly 200: "#e5e7eb";
            readonly 300: "#d1d5db";
            readonly 400: "#9ca3af";
            readonly 500: "#6b7280";
            readonly 600: "#4b5563";
            readonly 700: "#374151";
            readonly 800: "#1f2937";
            readonly 900: "#111827";
        };
        readonly accent: {
            readonly 50: "#6c53ff";
            readonly 100: "#4b2bff";
            readonly 200: "#2903ff";
            readonly 300: "#2100da";
            readonly 400: "#1b00b0";
            readonly 500: "#1a0596";
            readonly 600: "#19087c";
            readonly 700: "#170a62";
            readonly 800: "#140a4a";
            readonly 900: "#100934";
        };
        readonly overlay: {
            readonly blackA10: "rgba(0,0,0,0.10)";
            readonly blackA30: "rgba(0,0,0,0.30)";
            readonly blackA60: "rgba(0,0,0,0.60)";
            readonly whiteA10: "rgba(255,255,255,0.10)";
            readonly whiteA20: "rgba(255,255,255,0.20)";
        };
    };
    readonly semantic: {
        readonly success: {
            readonly 50: "#EDFAF3";
            readonly 200: "#A8DFC4";
            readonly 400: "#7EC8A4";
            readonly 600: "#3A9E70";
            readonly 800: "#1A5C3E";
            readonly 950: "#0C1F17";
        };
        readonly warning: {
            readonly 50: "#FFF8E6";
            readonly 200: "#F5D47A";
            readonly 400: "#E6A817";
            readonly 600: "#B07D0A";
            readonly 800: "#6B4A00";
            readonly 950: "#1A1200";
        };
        readonly danger: {
            readonly 50: "#FDEFEF";
            readonly 200: "#F0AAAA";
            readonly 400: "#E07070";
            readonly 600: "#C03A3A";
            readonly 800: "#7A1A1A";
            readonly 950: "#200A0A";
        };
        readonly info: {
            readonly 50: "#EDF5FA";
            readonly 200: "#AACDE0";
            readonly 400: "#7AABCF";
            readonly 600: "#3A7EA8";
            readonly 800: "#1A4E6E";
            readonly 950: "#0A1820";
        };
    };
};
export declare const spacing: readonly [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96];
export declare const radius: {
    readonly none: "0rem";
    readonly sm: "0.25rem";
    readonly md: "0.375rem";
    readonly base: "0.375rem";
    readonly lg: "0.5rem";
    readonly xl: "0.75rem";
    readonly "2xl": "1rem";
    readonly full: "9999px";
};
export declare const typography: {
    readonly family: {
        readonly sans: "\"Averta\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif";
        readonly mono: "ui-monospace, Menlo, Monaco, monospace";
    };
    readonly size: {
        readonly xs: "0.75rem";
        readonly sm: "0.875rem";
        readonly base: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly "2xl": "1.5rem";
        readonly "3xl": "1.875rem";
        readonly "4xl": "2.25rem";
        readonly "5xl": "3rem";
    };
    readonly weight: {
        readonly normal: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
    };
    readonly lineHeight: {
        readonly none: 1;
        readonly tight: 1.25;
        readonly snug: 1.375;
        readonly normal: 1.5;
        readonly relaxed: 1.625;
        readonly loose: 2;
    };
    readonly letterSpacing: {
        readonly tighter: "-0.05em";
        readonly tight: "-0.025em";
        readonly normal: "0";
        readonly wide: "0.025em";
        readonly wider: "0.05em";
        readonly widest: "0.1em";
    };
};
export declare const shadows: {
    readonly sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    readonly base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
    readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
};
export declare const transitions: {
    readonly duration: {
        readonly shortest: 150;
        readonly shorter: 200;
        readonly short: 250;
        readonly base: 300;
        readonly complex: 375;
        readonly enteringScreen: 225;
        readonly leavingScreen: 195;
    };
    readonly easing: {
        readonly easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)";
        readonly easeOut: "cubic-bezier(0.0, 0, 0.2, 1)";
        readonly easeIn: "cubic-bezier(0.4, 0, 1, 1)";
        readonly sharp: "cubic-bezier(0.4, 0, 0.6, 1)";
    };
    readonly preset: {
        readonly fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)";
        readonly base: "200ms cubic-bezier(0.4, 0, 0.2, 1)";
        readonly slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)";
    };
};
export declare const breakpoints: {
    readonly sm: "640px";
    readonly md: "768px";
    readonly lg: "1024px";
    readonly xl: "1280px";
    readonly "2xl": "1536px";
};
export declare const zIndices: {
    readonly base: 0;
    readonly dropdown: 1000;
    readonly sticky: 1100;
    readonly fixed: 1200;
    readonly modal: 1300;
    readonly popover: 1400;
    readonly tooltip: 1500;
};
export type Palette = typeof palette;
export interface Typography {
    family: {
        sans: string;
        mono: string;
    };
    size: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
    };
    weight: {
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
    };
    lineHeight: {
        none: number;
        tight: number;
        snug: number;
        normal: number;
        relaxed: number;
        loose: number;
    };
    letterSpacing: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
}
export interface Radius {
    none: string;
    sm: string;
    md: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    full: string;
}
export interface Shadows {
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
}
export type SpacingIndex = Exclude<keyof Spacing, keyof readonly unknown[]>;
export type Spacing = typeof spacing;
export interface Transitions {
    duration: {
        shortest: number;
        shorter: number;
        short: number;
        base: number;
        complex: number;
        enteringScreen: number;
        leavingScreen: number;
    };
    easing: {
        easeInOut: string;
        easeOut: string;
        easeIn: string;
        sharp: string;
    };
    preset: {
        fast: string;
        base: string;
        slow: string;
    };
}
export interface Breakpoints {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
}
export interface ZIndices {
    base: number;
    dropdown: number;
    sticky: number;
    fixed: number;
    modal: number;
    popover: number;
    tooltip: number;
}
//# sourceMappingURL=primitives.d.ts.map