interface StyledGridProps {
    $columns: number | 'auto-fit' | 'auto-fill';
    $minColumnWidth?: string;
    $gap?: number;
    $rowGap?: number;
    $columnGap?: number;
}
export declare const StyledGrid: import("node_modules/styled-components/dist/types").IStyledComponentBase<"web", import("node_modules/styled-components/dist/types").Merged<Omit<import("node_modules/@types/react").DetailedHTMLProps<import("node_modules/@types/react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "style"> & {
    style?: import("node_modules/@types/react").CSSProperties | import("node_modules/styled-components/dist/types").CSSPropertiesWithVars | undefined;
}, StyledGridProps>> & string;
export {};
//# sourceMappingURL=Grid.styled.d.ts.map