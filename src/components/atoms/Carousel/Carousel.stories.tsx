import React from "react";
import { Carousel } from "./Carousel";
import type { Meta, StoryObj } from '@storybook/react';

const meta :Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {layout: 'centered'},
  tags: ['autodocs']

};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImages = [
{
src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
alt: 'Mountain landscape',
},
{
src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
alt: 'Forest path',
},
{
src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800',
alt: 'Flower field',
},
{
src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
alt: 'Beach sunset',
},
];

export const Default: Story = {
args: {
images: sampleImages,
},
};

export const WithThumbnails: Story = {
args: {
images: sampleImages,
showThumbnails: true,
},
};

export const WithCounter: Story = {
args: {
images: sampleImages,
showCounter: true,
},
};

export const AutoPlay: Story = {
args: {
images: sampleImages,
autoPlay: true,
autoPlayInterval: 2000,
},
};

export const WithoutIndicators: Story = {
args: {
images: sampleImages,
showIndicators: false,
},
};

export const Fullscreen: Story = {
args: {
images: sampleImages,
enableFullscreen: true,
showCounter: true,
},
};

export const ContainMode: Story = {
args: {
images: sampleImages,
objectFit: 'contain',
},
};

export const NoLoop: Story = {
args: {
images: sampleImages,
loop: false,
},
};

export const CustomHeight: Story = {
args: {
images: sampleImages,
height: '600px',
showThumbnails: true,
},
};