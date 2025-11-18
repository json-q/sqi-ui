import * as React from 'react';

const Box = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { style, ...restProps } = props;

  return (
    <div
      ref={ref}
      {...restProps}
      style={{
        display: 'flex',
        width: 100,
        height: 80,
        background: 'var(--sqi-brand-color-5)',
        color: 'var(--sqi-text-color-anti)',
        boxSizing: 'border-box',
        ...style,
      }}
    ></div>
  );
});

export default Box;
