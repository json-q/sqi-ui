'use client';
import React, { forwardRef, useContext, type CSSProperties } from 'react';
import { useMergeProps } from '@sqi-ui/hooks';
import { ConfigContext } from '../config-provider/context';
import type { ColProps } from './type';
import RowContext from './context';
import clsx from 'clsx';

const defaultProps: ColProps = {
  offset: 0,
};

const Col = forwardRef<HTMLDivElement, ColProps>((baseProps, ref) => {
  const { componentConfig, prefixCls } = useContext(ConfigContext);
  const { gutter } = useContext(RowContext);
  const { span, offset, children, className, style, ...restProps } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Col,
  );

  const classes = clsx(
    `${prefixCls}-col`,
    {
      [`${prefixCls}-col-${span}`]: span,
      [`${prefixCls}-col-offset-${offset}`]: offset,
    },
    className,
  );

  const paddingStyle: CSSProperties = {};

  if (gutter) {
    const paddingHorizontal = gutter[0] ? gutter[0] / 2 : 0;
    const paddingVertical = gutter[1] ? gutter[1] / 2 : 0;
    if (paddingHorizontal) {
      paddingStyle.paddingLeft = paddingHorizontal;
      paddingStyle.paddingRight = paddingHorizontal;
    }
    if (paddingVertical) {
      paddingStyle.paddingTop = paddingVertical;
      paddingStyle.paddingBottom = paddingVertical;
    }
  }

  return (
    <div ref={ref} {...restProps} className={classes} style={{ ...style, ...paddingStyle }}>
      {children}
    </div>
  );
});

Col.displayName = 'Col';

export default Col;
