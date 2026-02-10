import React, { useState, FC } from "react";
import { Pagination } from "./Pagination";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {layout: 'centered'},
  tags: ['autodocs']

};

export default meta;
type Story = StoryObj<typeof meta>;


const PaginationWrapper:FC<{ totalPages: number; variant?: any; size?: any }> = ({
  totalPages,
  variant,
  size
}) => {
  const [page, setPage] = useState(1);
  return (
  <div>
    <Pagination
      currentPage={page}
      totalPages={totalPages}
      onPageChange={setPage}
      variant={variant}
      size={size}
    />
    <p style={{ marginTop: '1rem', color: '#6b7280' }}>Current page: {page}</p>
  </div>
  );
};

export const Default: Story = {
  render: () => <PaginationWrapper totalPages={10} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Default</h4>
        <PaginationWrapper totalPages={10} variant="default" />
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Outlined</h4>
        <PaginationWrapper totalPages={10} variant="outlined" />
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Minimal</h4>
        <PaginationWrapper totalPages={10} variant="minimal" />
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Small</h4>
        <PaginationWrapper totalPages={10} size="sm" />
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Medium</h4>
        <PaginationWrapper totalPages={10} size="md" />
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Large</h4>
        <PaginationWrapper totalPages={10} size="lg" />
      </div>
    </div>
  ),
};

export const ManyPages: Story = {
  render: () => <PaginationWrapper totalPages={100} />,
};