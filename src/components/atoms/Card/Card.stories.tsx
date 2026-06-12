// import React from "react";
// import { Card } from "./Card";
// import type { Meta, StoryObj } from '@storybook/react';

// const meta :Meta<typeof Card> = {
//   title: 'Components/Card',
//   component: Card,
//   parameters: {layout: 'centered'},
//   tags: ['autodocs']

// };

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {}
// }


import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardMedia,
  CardBadge,
  CardTitle,
  CardDescription,
  CardDivider,
} from "./Card";

import { Button } from '../Button'
import { Avatar } from '../Avatar'

//import { tokens } from "./Card.styled";

// ─── Story Helpers ────────────────────────────────────────────────────────────

const Row = styled.div`display: flex; align-items: center; gap: 10px;`;

const Grid = styled.div<{ cols?: number }>`display: grid; grid-template-columns: repeat(${({ cols = 3 }) => cols}, 1fr); gap: 20px; padding: 24px; background: #f0ede7; border-radius: 12px;`;

const GlassBackground = styled.div`background: linear-gradient(135deg, #c9622f 0%, #7c3c1e 50%, #1a0f08 100%); padding: 32px; border-radius: 12px;`;

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A flexible compound Card component with sub-components for Header, Body, Footer, Media, Badge, Title, and Description. Supports multiple visual variants and interactive states.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outlined", "filled", "glass"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Controls internal padding",
    },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "full"],
      description: "Border radius",
    },
    interactive: {
      control: "boolean",
      description: "Enables hover/focus interactions",
    },
    disabled: {
      control: "boolean",
      description: "Disables the card visually and functionally",
    },
    fullWidth: {
      control: "boolean",
      description: "Stretches card to 100% width",
    },
  },

};

export default meta;
type Story = StoryObj<typeof Card>;

// ─── Default ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    variant: "elevated",
    size: "md",
    radius: "lg",
  },
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <Card {...args}>
        <CardHeader>
          <CardTitle>Design System Card</CardTitle>
          <CardDescription>A versatile card component for every layout need.</CardDescription>
        </CardHeader>
        <CardBody>
          <p>Cards group related content and actions about a single subject. They're flexible and can contain almost any kind of content.
          </p>
        </CardBody>
        <CardFooter align="space-between">
          <Button size='sm'>Confirm</Button>
          <Button size='sm' variant='outline'>Cancel</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

// ─── All Variants ────────────────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 24, background: "#f0ede7", borderRadius: 12 }}>
    {(["elevated", "outlined", "filled"] as const).map((variant) => (
      <Card key={variant} variant={variant} style={{ maxWidth: 400 }}>
        <CardBody>
        <CardBadge color="default">{variant}</CardBadge>
        <CardTitle>
        {variant.charAt(0).toUpperCase() + variant.slice(1)} Card
        </CardTitle>
        <CardDescription>
        This is the <strong>{variant}</strong> variant. Each variant
        carries a distinct visual weight suited to different contexts.
        </CardDescription>
        </CardBody>
      </Card>
    ))}
    <GlassBackground>
      <Card variant="glass" style={{ maxWidth: 400 }}>
        <CardBody>
          <CardBadge color="default">glass</CardBadge>
          <CardTitle>Glass Card</CardTitle>
          <CardDescription>
          The glass variant uses backdrop-filter blur for a frosted effect —
          looks best on rich backgrounds.
          </CardDescription>
        </CardBody>
      </Card>
    </GlassBackground>
    </div>
  ),
  parameters: { controls: { disable: true } },
};

// ─── With Media ──────────────────────────────────────────────────────────────

export const WithMedia: Story = {
render: () => (
<div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
<Card style={{ width: 320 }}>
<CardMedia
src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&auto=format"
alt="Mountain landscape"
height={200}
/>
<CardHeader>
<Row>
<CardBadge color="success">Travel</CardBadge>
<CardBadge color="default">Photography</CardBadge>
</Row>
<CardTitle>Alpine Solitude</CardTitle>
</CardHeader>
<CardBody>
<CardDescription>
Discover the serene beauty of high-altitude landscapes, where silence
speaks louder than words.
</CardDescription>
</CardBody>
<CardFooter align="space-between">
<span
style={{
fontSize: "0.8rem",
color: tokens.color.textMuted,
fontFamily: tokens.font.body,
}}
>
5 min read
</span>
<Button size='sm'>Read More</Button>
</CardFooter>
</Card>


  <Card style={{ width: 320 }}>
    <CardMedia
      src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=640&auto=format"
      alt="Colorful food bowl"
      height={200}
    />
    <CardHeader>
      <CardBadge color="warning">Recipe</CardBadge>
      <CardTitle>Summer Grain Bowl</CardTitle>
    </CardHeader>
    <CardBody>
      <CardDescription>
        A vibrant, nourishing bowl packed with roasted vegetables, ancient
        grains, and a tahini drizzle.
      </CardDescription>
    </CardBody>
    <CardFooter align="right">
      <Button size='sm'>View Recipe</Button>
    </CardFooter>
  </Card>
</div>


),
parameters: { controls: { disable: true } },
};

// ─── Interactive Cards ────────────────────────────────────────────────────────

export const Interactive: Story = {
render: () => (
<Grid cols={3}>
{[
{ icon: "⚡", title: "Fast Delivery", desc: "Ships within 24 hours, anywhere in the world.", badge: "popular", badgeColor: "primary" as const },
{ icon: "🔒", title: "Secure Payments", desc: "256-bit encryption on every transaction.", badge: "new", badgeColor: "success" as const },
{ icon: "♻️", title: "Eco Packaging", desc: "100% recyclable materials, carbon neutral.", badge: "beta", badgeColor: "warning" as const },
].map((item) => (
<Card
key={item.title}
interactive
variant="elevated"
onClick={() => alert(`Clicked: ${item.title}`)}
>
<CardBody>
<div style={{ fontSize: 28 }}>{item.icon}</div>
<div>
<CardBadge color={item.badgeColor}>{item.badge}</CardBadge>
</div>
<CardTitle>{item.title}</CardTitle>
<CardDescription>{item.desc}</CardDescription>
</CardBody>
</Card>
))}
</Grid>
),
parameters: { controls: { disable: true } },
};

// ─── Profile Card ─────────────────────────────────────────────────────────────

export const ProfileCard: Story = {
render: () => (
<div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
  <Card style={{ width: 300 }}>
    <CardBody>
      <Row>
        <Avatar size='md' initials="JA" />
        <div>
          <CardTitle style={{ fontSize: "1rem" }}>Jordan Alvarez</CardTitle>
          <CardDescription style={{ fontSize: "0.8rem" }}>
          Senior Product Designer
          </CardDescription>
        </div>
      </Row>
      <CardDescription>
      Crafting delightful digital experiences at the intersection of
      strategy and aesthetics. Open to collaborations.
      </CardDescription>
      <Row>
        <CardBadge color="primary">Figma</CardBadge>
        <CardBadge>React</CardBadge>
        <CardBadge>Motion</CardBadge>
      </Row>
    </CardBody>
    <CardFooter align="space-between">
      <Button size='sm'>Message</Button>
      <Button size='sm' variant='outline'>Follow</Button>
    </CardFooter>
  </Card>
  <Card variant="filled" style={{ width: 300 }}>
    <CardBody>
      <Row>
        <Avatar size='md' initials="ML" />
        <div>
          <CardTitle style={{ fontSize: "1rem" }}>Morgan Lee</CardTitle>
          <CardDescription style={{ fontSize: "0.8rem" }}>
            Full Stack Engineer
          </CardDescription>
        </div>
      </Row>
      <CardDescription>
        Building scalable systems and elegant APIs. Passionate about
        open source and developer tooling.
      </CardDescription>
      <Row>
        <CardBadge color="success">TypeScript</CardBadge>
        <CardBadge>Go</CardBadge>
        <CardBadge>K8s</CardBadge>
      </Row>
    </CardBody>
    <CardFooter align="space-between">
      <Button size='sm'>Message</Button>
      <Button size='sm'variant='outline'>Follow</Button>
    </CardFooter>
  </Card>
</div>


),
parameters: { controls: { disable: true } },
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 400 }}>
      {(["sm", "md", "lg"] as const).map((size) => (
        <Card key={size} size={size}>
          <CardHeader>
            <CardBadge>{size.toUpperCase()}</CardBadge>
            <CardTitle>{size === "sm" ? "Compact" : size === "md" ? "Default" : "Spacious"} Card </CardTitle>
          </CardHeader>
          <CardBody>
            <CardDescription> This is the <strong>{size}</strong> size. Padding adjusts proportionally across header, body, and footer.</CardDescription>
          </CardBody>
          <CardFooter align="right">
            <Button size='sm'>Action</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

// ─── Disabled ────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  render: () => (
  <div style={{ display: "flex", gap: 20, maxWidth: 720 }}>
    <Card interactive disabled style={{ width: 300 }}>
      <CardHeader>
        <CardBadge color="danger">Unavailable</CardBadge>
        <CardTitle>Disabled Card</CardTitle>
      </CardHeader>
      <CardBody>
        <CardDescription>
        This card is currently disabled. Interactions and hover effects are
        suppressed.
        </CardDescription>
      </CardBody>
      <CardFooter align="right">
        <Button  size='sm' disabled>Locked</Button>
      </CardFooter>
    </Card>
    <Card interactive style={{ width: 300 }}>
      <CardHeader>
        <CardBadge color="success">Available</CardBadge>
        <CardTitle>Active Card</CardTitle>
      </CardHeader>
      <CardBody>
        <CardDescription>
          This card is enabled for comparison. Hover over it to see
          interactive effects.
        </CardDescription>
      </CardBody>
      <CardFooter align="right">
        <Button  size='sm'>Go</Button>
      </CardFooter>
    </Card>
  </div>
  ),
  parameters: { controls: { disable: true } },
};

// ─── Pricing Card ─────────────────────────────────────────────────────────────

export const PricingCard: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {[{
      plan: "Starter",
      price: "$9",
      period: "/mo",
      desc: "Perfect for individuals and small projects.",
      features: ["5 Projects", "10GB Storage", "Community Support"],
      variant: "outlined" as const,
      badge: undefined,
      },
      {
      plan: "Pro",
      price: "$29",
      period: "/mo",
      desc: "For growing teams who need more power.",
      features: ["Unlimited Projects", "100GB Storage", "Priority Support", "Analytics"],
      variant: "elevated" as const,
      badge: "Most Popular",
      },
      {
      plan: "Enterprise",
      price: "$99",
      period: "/mo",
      desc: "Advanced tools for large organizations.",
      features: ["Everything in Pro", "1TB Storage", "24/7 Support", "SLA"],
      variant: "filled" as const,
      badge: undefined,
      },
      ].map((item) => (
      <Card key={item.plan} variant={item.variant} style={{ width: 240 }}>
        <CardHeader>
        {item.badge && <CardBadge color="primary">{item.badge}</CardBadge>}
        <CardTitle>{item.plan}</CardTitle>
        <div
        style={{
        display: "flex",
        alignItems: "baseline",
        gap: 2,
        fontFamily: tokens.font.heading,
        }}
        >
        <span style={{ fontSize: "2rem", fontWeight: 700 }}>{item.price}</span>
        <span style={{ fontSize: "0.875rem", color: tokens.color.textMuted }}>
        {item.period}
        </span>
        </div>
        </CardHeader>
        <CardBody>
          <CardDescription>{item.desc}</CardDescription>
          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            {item.features.map((f) => (
              <li
                key={f}
                style={{
                  fontSize: "0.8125rem",
                  color: tokens.color.textMuted,
                  fontFamily: tokens.font.body,
              }}
              >
              {f}
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter>
          <Button  size='sm' style={{ width: "100%", justifyContent: "center" }}>Choose {item.plan} </Button>
        </CardFooter>
      </Card>
      ))}
    </div>
  ),
  parameters: { controls: { disable: true } },
};

// ─── Radius Variants ─────────────────────────────────────────────────────────

export const RadiusVariants: Story = {
  render: () => (
    <Grid cols={3}>
      {(["none", "sm", "md", "lg", "xl"] as const).map((r) => (
      <Card key={r} radius={r} variant="elevated">
        <CardBody>
          <CardBadge>radius: {r}</CardBadge>
          <CardDescription> Border radius set to <strong>{r}</strong>.</CardDescription>
        </CardBody>
      </Card>
      ))}
    </Grid>
  ),
  parameters: { controls: { disable: true } },
};