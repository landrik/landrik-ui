import { HTMLAttributes, ReactNode } from 'react';
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main';
    p?: number;
    px?: number;
    py?: number;
    m?: number;
    mx?: number;
    my?: number;
    bg?: string;
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}
//# sourceMappingURL=Box.types.d.ts.map