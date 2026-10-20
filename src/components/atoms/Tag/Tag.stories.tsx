import React, { useState } from "react";
import type { Meta, StoryObj, Decorator } from "@storybook/react";
import { Tag, TagGroup } from "./Tag";
// import { TokenThemeProvider, useThemeMode } from "@/tokens";
// import type { ThemeMode } from "@/tokens";

// ─── Theme decorator ──────────────────────────────────────────────────────────
// Wraps every story in TokenThemeProvider.
// Reads ?theme= from the Storybook globals if you have a theme switcher addon,
// otherwise defaults to "light".

// const withTheme: Decorator = (Story, context) => {
//   const mode: ThemeMode =
//     (context.globals?.theme as ThemeMode) ?? "light";

//   return (
//     <TokenThemeProvider defaultMode={mode}>
//       <div
//         style={{
//           padding: 24,
//           background: mode === "dark" ? "#111827" : "#ffffff",
//           minHeight: "100%",
//         }}
//       >
//         <Story />
//       </div>
//     </TokenThemeProvider>
//   );
// };

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Tag> = {
  title:      "Components/Tag",
  component:  Tag,
  //decorators: [withTheme],
  parameters: { layout: "centered" },
  tags:       ["autodocs"],
  argTypes: {
    variant: {
      control:     "select",
      options:     ["filled", "soft", "outlined", "ghost"],
      description: "Visual style variant",
    },
    size: {
      control:     "select",
      options:     ["sm", "md", "lg"],
      description: "Tag size",
    },
    color: {
      control:     "select",
      options:     ["accent", "neutral", "success", "warning", "danger", "info"],
      description: "Color mapped to design tokens",
    },
    selected:  { control: "boolean" },
    disabled:  { control: "boolean" },
    removable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

// ─── Inline icon helpers (no external dep) ────────────────────────────────────

const StarIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M8 1l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 10.9l-3.8 2-.7-4.3L.5 5.5l4.3-.6z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path
      d="M3 8l3.5 3.5L13 4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Stories ──────────────────────────────────────────────────────────────────

/** Default playground — all controls wired */
export const Playground: Story = {
  args: {
    children:  "Design System",
    variant:   "soft",
    size:      "md",
    color:     "accent",
    selected:  false,
    disabled:  false,
    removable: false,
  },
};

// ── Dark mode ─────────────────────────────────────────────────────────────────

/** Renders both light and dark side-by-side using TokenThemeProvider directly */
// export const DarkMode: Story = {
//   name:   "Dark Mode",
//   render: () => (
//     <div style={{ display: "flex", gap: 32 }}>
//       {(["light", "dark"] as ThemeMode[]).map((mode) => (
//         <TokenThemeProvider key={mode} defaultMode={mode}>
//           <div
//             style={{
//               padding:      16,
//               borderRadius: 8,
//               background:   mode === "dark" ? "#111827" : "#f9fafb",
//               border:       "1px solid " + (mode === "dark" ? "#374151" : "#e5e7eb"),
//             }}
//           >
//             <p
//               style={{
//                 marginBottom: 12,
//                 fontSize:     11,
//                 fontWeight:   600,
//                 letterSpacing: "0.06em",
//                 textTransform: "uppercase",
//                 color:        mode === "dark" ? "#6b7280" : "#9ca3af",
//               }}
//             >
//               {mode}
//             </p>
//             <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
//               <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
//                 {(["filled", "soft", "outlined", "ghost"] as const).map((v) => (
//                   <Tag key={v} variant={v} color="accent">{v}</Tag>
//                 ))}
//               </div>
//               <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
//                 {(["success", "warning", "danger", "info", "neutral"] as const).map((c) => (
//                   <Tag key={c} variant="soft" color={c}>{c}</Tag>
//                 ))}
//               </div>
//               <div style={{ display: "flex", gap: 6 }}>
//                 <Tag variant="soft" color="accent" removable>Removable</Tag>
//                 <Tag variant="soft" color="accent" disabled>Disabled</Tag>
//               </div>
//             </div>
//           </div>
//         </TokenThemeProvider>
//       ))}
//     </div>
//   ),
// };

// ── Variants ──────────────────────────────────────────────────────────────────

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Tag variant="filled"   color="accent">Filled</Tag>
      <Tag variant="soft"     color="accent">Soft</Tag>
      <Tag variant="outlined" color="accent">Outlined</Tag>
      <Tag variant="ghost"    color="accent">Ghost</Tag>
    </div>
  ),
};

// ── Sizes ─────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Tag size="sm" color="accent">Small</Tag>
      <Tag size="md" color="accent">Medium</Tag>
      <Tag size="lg" color="accent">Large</Tag>
    </div>
  ),
};

// ── Colors ────────────────────────────────────────────────────────────────────

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["accent", "neutral", "success", "warning", "danger", "info"] as const).map((c) => (
        <Tag key={c} variant="soft" color={c}>
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </Tag>
      ))}
    </div>
  ),
};

export const ColorsFilled: Story = {
  name:   "Colors / Filled",
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["accent", "neutral", "success", "warning", "danger", "info"] as const).map((c) => (
        <Tag key={c} variant="filled" color={c}>
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </Tag>
      ))}
    </div>
  ),
};

export const ColorsOutlined: Story = {
  name:   "Colors / Outlined",
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["accent", "neutral", "success", "warning", "danger", "info"] as const).map((c) => (
        <Tag key={c} variant="outlined" color={c}>
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </Tag>
      ))}
    </div>
  ),
};

// ── Icon slots ────────────────────────────────────────────────────────────────

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Tag iconLeft={<StarIcon />}  color="warning" variant="soft">Featured</Tag>
      <Tag iconLeft={<CheckIcon />} color="success" variant="soft">Verified</Tag>
      <Tag iconRight={<StarIcon />} color="info"    variant="outlined">Premium</Tag>
      <Tag
        iconLeft={<StarIcon />}
        iconRight={<CheckIcon />}
        color="accent"
        variant="filled"
      >
        Both Slots
      </Tag>
    </div>
  ),
};

// ── Removable ─────────────────────────────────────────────────────────────────

export const Removable: Story = {
  render: () => {
    const [tags, setTags] = useState([
      "React", "TypeScript", "styled-components", "Storybook", "Accessibility",
    ]);

    return (
      <TagGroup aria-label="Tech stack" gap="sm">
        {tags.map((t) => (
          <Tag
            key={t}
            removable
            color="accent"
            variant="soft"
            onRemove={() => setTags((prev) => prev.filter((x) => x !== t))}
          >
            {t}
          </Tag>
        ))}
      </TagGroup>
    );
  },
};

// ── Selectable ────────────────────────────────────────────────────────────────

export const Selectable: Story = {
  render: () => {
    const options = ["Design", "Engineering", "Product", "Marketing", "Data"];
    const [selected, setSelected] = useState<Set<string>>(
      new Set(["Design", "Engineering"])
    );

    const toggle = (label: string) =>
      setSelected((prev) => {
        const next = new Set(prev);
        next.has(label) ? next.delete(label) : next.add(label);
        return next;
      });

    return (
      <TagGroup aria-label="Filter by department" gap="sm">
        {options.map((o) => (
          <Tag
            key={o}
            variant="outlined"
            color="accent"
            selected={selected.has(o)}
            onClick={() => toggle(o)}
          >
            {selected.has(o) && <CheckIcon />}
            {o}
          </Tag>
        ))}
      </TagGroup>
    );
  },
};

// ── Overflow ──────────────────────────────────────────────────────────────────

export const Overflow: Story = {
  render: () => (
    <TagGroup
      aria-label="Technologies"
      maxVisible={4}
      overflowLabel={(n) => `+${n} more`}
      gap="sm"
    >
      {["React", "Vue", "Angular", "Svelte", "Solid", "Qwik", "Astro", "Remix"].map((t) => (
        <Tag key={t} color="neutral" variant="soft">{t}</Tag>
      ))}
    </TagGroup>
  ),
};

// ── Disabled ──────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag disabled color="accent"  variant="soft">Disabled soft</Tag>
      <Tag disabled color="accent"  variant="filled">Disabled filled</Tag>
      <Tag disabled color="danger"  variant="outlined" removable>Can't remove</Tag>
    </div>
  ),
};

// ── Kitchen Sink ──────────────────────────────────────────────────────────────

export const KitchenSink: Story = {
  name:   "Kitchen Sink",
  render: () => {
    const [labels, setLabels] = useState([
      { id: 1, label: "Bug",         color: "danger"  as const },
      { id: 2, label: "Feature",     color: "success" as const },
      { id: 3, label: "Enhancement", color: "info"    as const },
      { id: 4, label: "Question",    color: "warning" as const },
    ]);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <section>
          <p style={{ marginBottom: 8, fontSize: 12, opacity: 0.6 }}>
            Issue labels (removable)
          </p>
          <TagGroup gap="sm">
            {labels.map(({ id, label, color }) => (
              <Tag
                key={id}
                variant="soft"
                color={color}
                removable
                iconLeft={<StarIcon />}
                onRemove={() =>
                  setLabels((prev) => prev.filter((x) => x.id !== id))
                }
              >
                {label}
              </Tag>
            ))}
          </TagGroup>
        </section>

        <section>
          <p style={{ marginBottom: 8, fontSize: 12, opacity: 0.6 }}>
            Status badges (filled, no interaction)
          </p>
          <TagGroup gap="sm">
            <Tag variant="filled" color="success" size="sm" iconLeft={<CheckIcon />}>Active</Tag>
            <Tag variant="filled" color="warning" size="sm">Pending</Tag>
            <Tag variant="filled" color="danger"  size="sm">Blocked</Tag>
            <Tag variant="filled" color="neutral" size="sm">Archived</Tag>
          </TagGroup>
        </section>

        <section>
          <p style={{ marginBottom: 8, fontSize: 12, opacity: 0.6 }}>
            Large outlined tags
          </p>
          <TagGroup gap="md">
            <Tag variant="outlined" color="accent"  size="lg">React</Tag>
            <Tag variant="outlined" color="info"    size="lg">TypeScript</Tag>
            <Tag variant="outlined" color="neutral" size="lg">Node.js</Tag>
          </TagGroup>
        </section>
      </div>
    );
  },
};