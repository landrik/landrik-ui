import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import {Box} from '../Box';

const meta: Meta<typeof Grid> = {
title: 'Layout/Grid',
component: Grid,
parameters: {layout: 'centered'},
tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

const GridItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box p={4} bg="#e0f2fe" radius="md" style={{ border: '1px solid #212121', textAlign: 'center' }}>
  {children}
  </Box>
);

export const TwoColumns: Story = {
  render: () => (
    <Grid columns={2} gap={4}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  render: () => (
    <Grid columns={3} gap={4}>
      <GridItem>Item 1</GridItem>
      <GridItem>Item 2</GridItem>
      <GridItem>Item 3</GridItem>
      <GridItem>Item 4</GridItem>
      <GridItem>Item 5</GridItem>
      <GridItem>Item 6</GridItem>
    </Grid>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <Grid columns={4} gap={4}>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
    </Grid>
  )
}