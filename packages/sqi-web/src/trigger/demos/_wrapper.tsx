import React, { forwardRef } from 'react';

interface ComponentProps {
  children: React.ReactNode;
  size?: number;
  backgroundColor?: string;
}
export const Component = forwardRef<HTMLDivElement, ComponentProps>(({ size, backgroundColor, children }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: size + 'px',
        height: size + 'px',
        backgroundColor,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: '16px',
      }}
    >
      {children}
    </div>
  );
});

Component.displayName = 'Component';
