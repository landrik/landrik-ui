import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Box } from '../Box';
import { Placeholder } from '@/stories/LayoutPlaceholder';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {layout: 'fullscreen'},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

const GridItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box 
    padding={4} 
    background="#e0f2fe" 
    radius="md" 
    style={{ 
      border: '1px solid #212121', 
      textAlign: 'center',
      width: '100%' }}>
  {children}
  </Box>
);

export const TwoColumns: Story = {
  render: () => (
    <Grid columns={2} gap={4}>
      <Placeholder>1</Placeholder>
      <Placeholder>2</Placeholder>
      <Placeholder>3</Placeholder>
      <Placeholder>4</Placeholder>
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  render: () => (
    <Grid columns={3} gap={4}>
      <Placeholder>Item 1</Placeholder>
      <Placeholder>Item 2</Placeholder>
      <Placeholder>Item 3</Placeholder>
      <Placeholder>Item 4</Placeholder>
      <Placeholder>Item 5</Placeholder>
      <Placeholder>Item 6</Placeholder>
    </Grid>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <Grid columns={4} gap={4}>
      <Placeholder>1</Placeholder>
      <Placeholder>2</Placeholder>
      <Placeholder>3</Placeholder>
      <Placeholder>4</Placeholder>
      <Placeholder>5</Placeholder>
    </Grid>
  )
}

export const UILayout: Story = {
  render: () => (
    <Grid 
      columns="390px 1fr"
      rows="auto 1fr auto"
      areas={["Header Header", "Sidebar Main", "Footer Footer"]}
      gap={5}
      style={{ minHeight: "320px" }}
    >
      <Grid gridArea="Header" background="surface" padding={1}>
        <Placeholder>Header</Placeholder>
      </Grid>

      <Grid gridArea="Sidebar" background="surface" padding={1} columns={1}>
        <Placeholder>Nav Link 1</Placeholder>
        <Placeholder>Nav Link 2</Placeholder>
      </Grid>
      <Grid gridArea="Main" background="surface" padding={1}>
       <Placeholder> Main Content</Placeholder>
      </Grid>
      
      <Grid gridArea="Footer" background="surface" padding={1}>
        <Placeholder>Footer</Placeholder>
      </Grid>

    </Grid>
  ),
};