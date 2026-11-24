// stories/LayoutPlaceholder.tsx
import React from 'react';

export const Placeholder = ({
  children = 'Item',
  height = 'auto',
  minWidth = '60px',
}: {
  children?: React.ReactNode;
  height?: string;
  minWidth?: string;
}) => (
  <div
    style={{
      padding: '12px 16px',
      backgroundColor: '#e0e7ff',
      border: '1px dashed #4f46e5',
      borderRadius: '6px',
      color: '#3730a3',
      fontFamily: 'monospace',
      fontSize: '13px',
      textAlign: 'center',
      height,
      minWidth,
    }}
  >
    {children}
  </div>
);
