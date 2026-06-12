import { CardProps, CardFooterProps, CardMediaProps, CardBadgeProps, CardSize } from './Card.types';
export declare const tokens: {
    color: {
        surface: string;
        surfaceFilled: string;
        border: string;
        borderHover: string;
        shadow: string;
        shadowHover: string;
        shadowElevated: string;
        text: string;
        textMuted: string;
        glass: string;
        glassBorder: string;
        primary: string;
        primaryLight: string;
        success: string;
        successLight: string;
        warning: string;
        warningLight: string;
        danger: string;
        dangerLight: string;
        badgeDefault: string;
        badgeDefaultText: string;
    };
    radius: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    padding: {
        sm: string;
        md: string;
        lg: string;
    };
    font: {
        heading: string;
        body: string;
    };
};
export declare const StyledCard: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CardProps>> & string;
export declare const StyledCardHeader: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $size: CardSize;
}>> & string;
export declare const StyledCardBody: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $size: CardSize;
}>> & string;
export declare const StyledCardFooter: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CardFooterProps & {
    $size: CardSize;
}>> & string;
export declare const StyledCardFooterInner: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Pick<CardFooterProps, "align"> & {
    $size: CardSize;
}>> & string;
export declare const StyledCardMedia: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CardMediaProps>> & string;
export declare const StyledCardDivider: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLHRElement>, HTMLHRElement>, never>> & string;
export declare const StyledCardBadge: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Substitute<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, CardBadgeProps>> & string;
export declare const StyledCardTitle: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>> & string;
export declare const StyledCardDescription: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>> & string;
//# sourceMappingURL=Card.styled.d.ts.map