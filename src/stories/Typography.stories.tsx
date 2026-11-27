import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useTheme } from "styled-components";
import { typography } from "../theme"; // adjust path if typography is in ../theme/tokens

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj;

const TokenPill = ({
  token,
  value,
}: {
  token: string;
  value: string | number;
}) => {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Click to copy token path"
      style={{
        all: "unset",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: typography.family.mono,
        fontSize: typography.size.xs,
        color: theme.color.text.muted,
      }}
    >
      <strong style={{ color: theme.color.accent.text }}>
        {copied ? "Copied!" : token}
      </strong>
      <span>({value})</span>
    </button>
  );
};

const TypographyShowcase = () => {
  const theme = useTheme();
  const typo = theme.typography ?? typography;

  const cardStyle: React.CSSProperties = {
    padding: "16px 20px",
    borderRadius: "8px",
    border: `1px solid ${theme.color.border.default}`,
    backgroundColor: theme.color.surface.default,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        fontFamily: typo.family.sans,
        color: theme.color.text.default,
      }}
    >
      <div>
        <h2 style={{ margin: 0, fontSize: typo.size["2xl"] }}>
          Typography Tokens (<code>typography</code>)
        </h2>
        <p
          style={{
            margin: "4px 0 0",
            color: theme.color.text.muted,
            fontSize: typo.size.sm,
          }}
        >
          Click any token label to copy its path. Toggle <strong>Light</strong>{" "}
          and <strong>Dark</strong> in the Storybook toolbar to preview contrast.
        </p>
      </div>

      {/* 1. Font Families */}
      <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3 style={{ margin: 0, fontSize: typo.size.lg }}>Font Families</h3>
        {(Object.entries(typo.family) as [string, string][]).map(
          ([key, fontStack]) => (
            <div key={key} style={cardStyle}>
              <div style={{ marginBottom: "8px" }}>
                <TokenPill token={`typography.family.${key}`} value={fontStack} />
              </div>
              <div
                style={{
                  fontFamily: fontStack,
                  fontSize: typo.size.xl,
                  lineHeight: typo.lineHeight.snug,
                }}
              >
                Sphinx of black quartz, judge my vow — 0123456789
              </div>
            </div>
          )
        )}
      </section>

      {/* 2. Font Sizes */}
      <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3 style={{ margin: 0, fontSize: typo.size.lg }}>Type Scale (Size)</h3>
        {(Object.entries(typo.size) as [string, string][]).map(
          ([key, remValue]) => {
            const pxApprox = `${parseFloat(remValue) * 16}px`;
            return (
              <div
                key={key}
                style={{
                  ...cardStyle,
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <TokenPill
                  token={`typography.size.${key}`}
                  value={`${remValue} / ${pxApprox}`}
                />
                <div
                  style={{
                    fontSize: remValue,
                    lineHeight: typo.lineHeight.tight,
                    fontWeight: typo.weight.medium,
                    overflowWrap: "anywhere",
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            );
          }
        )}
      </section>

      {/* 3. Font Weights */}
      <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3 style={{ margin: 0, fontSize: typo.size.lg }}>Font Weights</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "12px",
          }}
        >
          {(Object.entries(typo.weight) as [string, number][]).map(
            ([key, weightValue]) => (
              <div key={key} style={cardStyle}>
                <div style={{ marginBottom: "6px" }}>
                  <TokenPill
                    token={`typography.weight.${key}`}
                    value={weightValue}
                  />
                </div>
                <div
                  style={{
                    fontWeight: weightValue,
                    fontSize: typo.size.xl,
                  }}
                >
                  Design System
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* 4. Line Heights */}
      <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3 style={{ margin: 0, fontSize: typo.size.lg }}>Line Heights</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "12px",
          }}
        >
          {(Object.entries(typo.lineHeight) as [string, number][]).map(
            ([key, lhValue]) => (
              <div key={key} style={cardStyle}>
                <div style={{ marginBottom: "8px" }}>
                  <TokenPill
                    token={`typography.lineHeight.${key}`}
                    value={lhValue}
                  />
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: typo.size.sm,
                    lineHeight: lhValue,
                    color: theme.color.text.muted,
                  }}
                >
                  Consistent vertical rhythm improves readability across
                  multi-line paragraphs, forms, and dense dashboard cards.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* 5. Letter Spacing */}
      <section style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h3 style={{ margin: 0, fontSize: typo.size.lg }}>Letter Spacing</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "12px",
          }}
        >
          {(Object.entries(typo.letterSpacing) as [string, string][]).map(
            ([key, lsValue]) => (
              <div key={key} style={cardStyle}>
                <div style={{ marginBottom: "6px" }}>
                  <TokenPill
                    token={`typography.letterSpacing.${key}`}
                    value={lsValue}
                  />
                </div>
                <div
                  style={{
                    fontSize: typo.size.base,
                    fontWeight: typo.weight.semibold,
                    letterSpacing: lsValue,
                    textTransform:
                      key === "wider" || key === "widest" ? "uppercase" : "none",
                  }}
                >
                  Tracking Specimen
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export const Scale: Story = {
  render: () => <TypographyShowcase />,
};
