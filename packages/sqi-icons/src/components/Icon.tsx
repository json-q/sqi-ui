'use client';

import React, { forwardRef, useContext } from 'react';
import type { DetailedHTMLProps, ReactNode } from 'react';
import clsx from 'clsx';
import IconContext from './Context';

export interface IconProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  svg: ReactNode;
  spin?: boolean;
  rotate?: number;
  type?: string;
}

const Icon = forwardRef<HTMLSpanElement, IconProps>((props, ref) => {
  const { svg, type, spin, rotate, className, style, ...restProps } = props;
  const { prefixCls = 'sqi' } = useContext(IconContext);

  const classes = clsx(
    `${prefixCls}-icon`,
    {
      [`${prefixCls}-icon-spin`]: !!spin && !!svg,
    },
    className,
  );

  const outerStyle: React.CSSProperties = style || {};
  if (Number.isSafeInteger(rotate)) {
    outerStyle.transform = `rotate(${rotate}deg)`;
  }

  return (
    <span role="img" ref={ref} aria-label={type} className={classes} style={outerStyle} {...restProps}>
      {svg}
    </span>
  );
});

Icon.displayName = 'Icon';

export default Icon;
