'use client';
import React, { forwardRef, useContext, type CSSProperties } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import { isNumber } from '@sqi-ui/utils';
import { ConfigContext } from '../config-provider/context';
import RowContext from './context';
import type { ColProps, FlexType } from './type';

const defaultProps: ColProps = {
  offset: 0,
};

function formatFlexStyle(flex: FlexType): string {
  if (isNumber(flex)) return `${flex} ${flex} auto`;

  const isFlexBasis = /^\d+(\.\d+)?(px|em|rem|%)$/.test(flex);
  if (isFlexBasis) return `0 0 ${flex}`;

  return flex;
}

const Col = forwardRef<HTMLDivElement, ColProps>((baseProps, ref) => {
  const { componentConfig, prefixCls } = useContext(ConfigContext);
  const { gutter } = useContext(RowContext);
  const { span, offset, children, className, style, flex, ...restProps } = useMergeProps(
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

  const flexStyle: CSSProperties = {};
  if (flex) {
    flexStyle.flex = formatFlexStyle(flex);
  }

  return (
    <div ref={ref} {...restProps} className={classes} style={{ ...style, ...flexStyle, ...paddingStyle }}>
      {children}
    </div>
  );
});

Col.displayName = 'Col';

export default Col;
