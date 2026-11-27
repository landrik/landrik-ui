import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "../components/layout/Container";
import { Grid } from "../components/layout/Grid";
import { Stack } from "../components/layout/Stack";
import { Box } from "../components/layout/Box";
const meta: Meta = {
  title: "Layout/Layout Showcase",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

const CardOutline = ({
  children,
  background = "surface",
  padding = 4,
}: {
  children: React.ReactNode;
  background?: "transparent" | "subtle" | "surface";
  padding?: number;
}) => (
  <Box
    background={background}
    padding={padding}
    radius="md"
    style={{ border: "1px solid rgba(148, 163, 184, 0.35)" }}
  >
    {children}
  </Box>
);

export const DashboardPage: Story = {
  render: (_args, context) => {

    const selectedWidth = ( context.globals.gridMaxWidth || 'lg') as | "sm" | "md" | "lg" | "xl" | "2xl" | "full"

    return (
      <Box background="subtle" paddingY={6} style={{ minHeight: "100vh" }}>
        <Container maxWidth={selectedWidth} paddingX={4}>
          <Stack gap={6}>
            {/* 1. Top Navigation Bar using Grid Areas */}
            <CardOutline background="surface" padding={4}>
              <Grid
                columns={{ base: 1, sm: "1fr auto" }}
                areas={{ base: ["Brand", "Actions"], sm: ["Brand Actions"] }}
                gap={4}
                style={{ alignItems: "center" }}
              >
                <Grid gridArea="Brand">
                  <Stack direction={{ base: "vertical", md:"horizontal"}} gap={3} align="center">
                    <strong>Landrik Design System</strong>
                    <span style={{ opacity: 0.6, fontSize: "13px" }}>
                      Container · Grid · Stack · Box
                    </span>
                  </Stack>
                </Grid>

                <Grid gridArea="Actions">
                  <Stack direction={{ base: "vertical", md:"horizontal" }} gap={{ base:2, md:4 }}>
                    <Box background="subtle" paddingX={3} paddingY={1} radius="sm">
                      Docs
                    </Box>
                    <Box background="subtle" paddingX={3} paddingY={1} radius="sm">
                      Tokens
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </CardOutline>

            {/* 2. KPI Metrics Row aligned to the 6-Column Theme Grid */}
            <Grid gap={4} columns={{base: 1, md: 6}}>
              {[
                { label: "Active Components", value: "24", delta: "+3 this sprint" },
                { label: "Token Coverage", value: "98%", delta: "Light & Dark" },
                { label: "Bundle Size", value: "14.2 kB", delta: "Gzipped" },
              ].map((stat) => (
                <Grid key={stat.label} colSpan={{ base:1, md:2 }}>
                  <CardOutline background="surface" padding={4}>
                    <Stack gap={1}>
                      <span style={{ fontSize: "12px", opacity: 0.7 }}>
                        {stat.label}
                      </span>
                      <strong style={{ fontSize: "22px" }}>{stat.value}</strong>
                      <span style={{ fontSize: "12px", opacity: 0.6 }}>
                        {stat.delta}
                      </span>
                    </Stack>
                  </CardOutline>
                </Grid>
              ))}
            </Grid>

            {/* 3. Main Content + Sidebar using 6-Column Grid (4 cols + 2 cols) */}
            <Grid columns={{ base:1, lg:6}} gap={4}>
              {/* Left 4 Columns: Primary Feed */}
              <Grid colSpan={{ base:1, lg:4 }}>
                <CardOutline background="surface" padding={6}>
                  <Stack gap={4}>
                    <div>
                      <h3 style={{ margin: 0 }}>Layout Composition</h3>
                      <p style={{ margin: "4px 0 0", opacity: 0.75, fontSize: "14px" }}>
                        Toggle <strong>Show 6-Col Grid</strong> and{" "}
                        <strong>Container Width: lg (1024px)</strong> in the
                        Storybook toolbar to verify how each primitive aligns to
                        the 6-column tracks and outer padding gutters.
                      </p>
                    </div>

                    {/* Nested Horizontal Stack inside the 4-column Grid span */}
                    <Stack direction={{ base: "vertical", md:"horizontal" }} gap={4}>
                      <Box
                        background="subtle"
                        padding={4}
                        radius="sm"
                        style={{ flex: 1 }}
                      >
                        <Stack gap={1}>
                          <strong>Panel A</strong>
                          <span style={{ fontSize: "13px", opacity: 0.75 }}>
                            Horizontal Stack item inside a 4-column Grid span.
                          </span>
                        </Stack>
                      </Box>

                      <Box
                        background="subtle"
                        padding={4}
                        radius="sm"
                        style={{ flex: 1 }}
                      >
                        <Stack gap={1}>
                          <strong>Panel B</strong>
                          <span style={{ fontSize: "13px", opacity: 0.75 }}>
                            Shares equal width alongside Panel A via flex: 1.
                          </span>
                        </Stack>
                      </Box>
                    </Stack>
                  </Stack>
                </CardOutline>
              </Grid>

              {/* Right 2 Columns: Sidebar */}
              <Grid colSpan={{ base:1, lg:2 }}>
                <CardOutline background="surface" padding={4}>
                  <Stack gap={3}>
                    <strong>Quick Links</strong>
                    <Stack gap={2}>
                      <Box background="subtle" padding={3} radius="sm">
                        Box &amp; Surface Tokens
                      </Box>
                      <Box background="subtle" padding={3} radius="sm">
                        6-Column Grid Rules
                      </Box>
                      <Box background="subtle" padding={3} radius="sm">
                        Stack Spacing &amp; Direction
                      </Box>
                    </Stack>
                  </Stack>
                </CardOutline>
              </Grid>
            </Grid>
            
          </Stack>
        </Container>
      </Box>
    )
  },
};
