import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useTheme } from "styled-components";
import { palette } from "../theme"; // adjust path if palette is in ../theme/palette

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj;

const SwatchCard = ({
  tokenPath,
  value,
  copied,
  onCopy,
}: {
  tokenPath: string;
  value: string;
  copied: string | null;
  onCopy: (text: string) => void;
}) => {
  const theme = useTheme();
  const isCopied = copied === tokenPath || copied === value;

  return (
    <div
      style={{
        border: `1px solid ${theme.color.border.default}`,
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: theme.color.surface.default,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Color Preview with checkerboard behind alpha overlays */}
      <div
        style={{
          height: "68px",
          backgroundImage:
            "linear-gradient(45deg, #e5e7eb 25%, transparent 25%), linear-gradient(-45deg, #e5e7eb 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e7eb 75%), linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)",
          backgroundSize: "12px 12px",
          backgroundPosition: "0 0, 0 6px, 6px -6px, -6px 0",
          position: "relative",
          borderBottom: `1px solid ${theme.color.border.subtle}`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: value,
          }}
        />
      </div>

      <div style={{ padding: "10px 12px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <button
          type="button"
          onClick={() => onCopy(tokenPath)}
          title="Copy token path"
          style={{
            all: "unset",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "13px",
            color: theme.color.text.default,
          }}
        >
          {copied === tokenPath ? "Copied token!" : tokenPath}
        </button>

        <button
          type="button"
          onClick={() => onCopy(value)}
          title="Copy color value"
          style={{
            all: "unset",
            cursor: "pointer",
            fontFamily: "monospace",
            fontSize: "12px",
            color: theme.color.text.muted,
          }}
        >
          {isCopied && copied === value ? "Copied value!" : value}
        </button>
      </div>
    </div>
  );
};

const SemanticColorView = () => {
  const theme = useTheme();
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1400);
  };

  const groups = Object.entries(theme.color) as [
    string,
    Record<string, string>,
  ][];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h2 style={{ margin: 0, color: theme.color.text.default }}>
          Semantic Color Tokens (<code>theme.color</code>)
        </h2>
        <p style={{ margin: "4px 0 0", color: theme.color.text.muted, fontSize: "14px" }}>
          Toggle <strong>Light</strong> and <strong>Dark</strong> in the
          Storybook toolbar to inspect adaptive semantic tokens. Click a token
          name or hex value to copy.
        </p>
      </div>

      {groups.map(([groupName, tokens]) => (
        <section key={groupName}>
          <h3
            style={{
              margin: "0 0 12px",
              textTransform: "capitalize",
              fontSize: "16px",
              color: theme.color.text.default,
            }}
          >
            {groupName}
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {Object.entries(tokens).map(([tokenKey, value]) => (
              <SwatchCard
                key={`${groupName}.${tokenKey}`}
                tokenPath={`color.${groupName}.${tokenKey}`}
                value={value}
                copied={copied}
                onCopy={handleCopy}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

const RawPaletteView = () => {
  const theme = useTheme();
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1400);
  };

  const sections: { title: string; prefix: string; scale: Record<string, string> }[] = [
    { title: "Primary · Neutral", prefix: "palette.primary.neutral", scale: palette.primary.neutral },
    { title: "Primary · Accent", prefix: "palette.primary.accent", scale: palette.primary.accent },
    { title: "Primary · Overlay", prefix: "palette.primary.overlay", scale: palette.primary.overlay },
    { title: "Semantic · Success", prefix: "palette.semantic.success", scale: palette.semantic.success },
    { title: "Semantic · Warning", prefix: "palette.semantic.warning", scale: palette.semantic.warning },
    { title: "Semantic · Danger", prefix: "palette.semantic.danger", scale: palette.semantic.danger },
    { title: "Semantic · Info", prefix: "palette.semantic.info", scale: palette.semantic.info },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h2 style={{ margin: 0, color: theme.color.text.default }}>
          Raw Color Palette (<code>palette</code>)
        </h2>
        <p style={{ margin: "4px 0 0", color: theme.color.text.muted, fontSize: "14px" }}>
          Underlying color ramps referenced by <code>lightTheme</code> and{" "}
          <code>darkTheme</code>.
        </p>
      </div>

      {sections.map(({ title, prefix, scale }) => (
        <section key={title}>
          <h3 style={{ margin: "0 0 12px", fontSize: "16px", color: theme.color.text.default }}>
            {title}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "16px",
            }}
          >
            {Object.entries(scale).map(([step, hex]) => (
              <SwatchCard
                key={`${prefix}.${step}`}
                tokenPath={`${prefix}[${step}]`}
                value={hex}
                copied={copied}
                onCopy={handleCopy}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export const SemanticTokens: Story = {
  render: () => <SemanticColorView />,
};

export const RawPalette: Story = {
  render: () => <RawPaletteView />,
};
