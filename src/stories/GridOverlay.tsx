// stories/GridOverlay.tsx
import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";

interface GridOverlayProps {
  columns?: number;
  gap?: number | string;
  /** Horizontal outer padding (in theme spacing keys or px) to visualize Container gutters */
  paddingX?: number | string;
  /** Max width of the inner grid guide to match Container maxWidth */
  maxWidth?: string;
  show?: boolean;
  children: React.ReactNode;
}

const DEFAULT_BREAKPOINTS: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const OuterFrame = styled.div<{ $maxWidth?: string; $paddingX: number }>`
  position: absolute;
  inset: 0;
  margin: 0 auto;
  max-width: ${(p) => p.$maxWidth || "100%"};
  padding-left: ${(p) => p.$paddingX}px;
  padding-right: ${(p) => p.$paddingX}px;
  pointer-events: none;
  z-index: 9999;
  box-sizing: border-box;

  /* Green tint highlights the outer Container padding gutters */
  background: ${(p) =>
    p.$paddingX > 0
      ? `linear-gradient(
          to right,
          rgba(16, 185, 129, 0.14) 0px,
          rgba(16, 185, 129, 0.14) ${p.$paddingX}px,
          transparent ${p.$paddingX}px,
          transparent calc(100% - ${p.$paddingX}px),
          rgba(16, 185, 129, 0.14) calc(100% - ${p.$paddingX}px),
          rgba(16, 185, 129, 0.14) 100%
        )`
      : "transparent"};
  border-left: 1px solid rgba(16, 185, 129, 0.5);
  border-right: 1px solid rgba(16, 185, 129, 0.5);
`;

const ColumnTracks = styled.div<{ $columns: number; $gap: number }>`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(p) => p.$columns}, minmax(0, 1fr));
  gap: ${(p) => p.$gap}px;
`;

const ColumnGuide = styled.div`
  height: 100%;
  background-color: rgba(239, 68, 68, 0.08);
  border-left: 1px dashed rgba(239, 68, 68, 0.35);
  border-right: 1px dashed rgba(239, 68, 68, 0.35);
  display: flex;
  justify-content: center;
  padding-top: 6px;
  font-family: monospace;
  font-size: 11px;
  font-weight: 600;
  color: rgba(220, 38, 38, 0.75);
`;

const BreakpointBadge = styled.div`
  position: fixed;
  bottom: 12px;
  right: 12px;
  z-index: 10000;
  pointer-events: none;
  background: rgba(15, 23, 42, 0.88);
  color: #f8fafc;
  font-family: monospace;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

function resolveSpacing(
  value: number | string | undefined,
  spacing?: Record<string | number, number>,
  fallback = 0
): number {
  if (value === undefined) return fallback;
  if (spacing && spacing[value] !== undefined) return spacing[value];
  const parsed = Number(value);
  return Number.isNaN(parsed) ? fallback : parsed;
}

export const GridOverlay: React.FC<GridOverlayProps> = ({
  columns,
  gap = 4,
  paddingX = 4,
  maxWidth,
  show = true,
  children,
}) => {
  const theme = useTheme() as any;
  const [viewportWidth, setViewportWidth] = useState<number>(() =>
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const colCount = columns ?? theme?.grid?.columns ?? 6;
  const gapPx = resolveSpacing(gap, theme?.spacing, 16);
  const paddingPx = resolveSpacing(paddingX, theme?.spacing, 16);

  // Determine active breakpoint label
  const rawBreakpoints: Record<string, number | string> =
    theme?.breakpoints ?? DEFAULT_BREAKPOINTS;

  const sortedBreakpoints = Object.entries(rawBreakpoints)
    .map(([key, val]) => [key, parseInt(String(val), 10)] as const)
    .filter(([, px]) => !Number.isNaN(px))
    .sort((a, b) => a[1] - b[1]);

  let activeBp = "base";
  for (const [key, minPx] of sortedBreakpoints) {
    if (viewportWidth >= minPx) {
      activeBp = key;
    }
  }

  return (
    <Wrapper>
      {children}
      {show && (
        <>
          <OuterFrame
            $maxWidth={maxWidth}
            $paddingX={paddingPx}
            aria-hidden="true"
          >
            <ColumnTracks $columns={colCount} $gap={gapPx}>
              {Array.from({ length: colCount }).map((_, index) => (
                <ColumnGuide key={index}>{index + 1}</ColumnGuide>
              ))}
            </ColumnTracks>
          </OuterFrame>
          
          <BreakpointBadge aria-hidden="true">
            {activeBp} ({viewportWidth}px) · max: {maxWidth || "100%"} · {colCount} cols · gutter {paddingPx}px
          </BreakpointBadge>
        </>
      )}
    </Wrapper>
  );
};
