'use client';
import React, { forwardRef, useContext, type CSSProperties } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import { isNumber, isObject, pick } from '@sqi-ui/utils';
import { ConfigContext } from '../config-provider/context';
import RowContext from './context';
import type { ColProps, ColSize, FlexType } from './type';
import type { Breakpoint } from '../_util/responsiveObserve';

const defaultProps: ColProps = {
  offset: 0,
};

function formatFlexStyle(flex: FlexType): string {
  if (isNumber(flex)) return `${flex} ${flex} auto`;

  const isFlexBasis = /^\d+(\.\d+)?(px|em|rem|%)$/.test(flex);
  if (isFlexBasis) return `0 0 ${flex}`;

  return flex;
}

const sizes: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
type PickBreakpointProps = Pick<ColProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>;

const genScreenClassName = (breakpointProps: PickBreakpointProps, prefixCls: string) => {
  let className = {};
  sizes.forEach((size) => {
    const matchSizeProps = breakpointProps[size];
    if (!matchSizeProps) return;

    let sizeProps: ColSize = {};
    if (isNumber(matchSizeProps)) {
      sizeProps.span = matchSizeProps;
    } else if (isObject(matchSizeProps)) {
      sizeProps = matchSizeProps;
    }

    className = clsx({
      ...className,
      [`${prefixCls}-col-${size}-${sizeProps.span}`]: sizeProps.span,
      [`${prefixCls}-col-${size}-order-${sizeProps.order}`]: sizeProps.order,
      [`${prefixCls}-col-${size}-offset-${sizeProps.offset}`]: sizeProps.offset,
    });
  });

  return className;
};

const Col = forwardRef<HTMLDivElement, ColProps>((baseProps, ref) => {
  const { componentConfig, prefixCls } = useContext(ConfigContext);
  const { gutter } = useContext(RowContext);
  const { span, offset, children, className, style, flex, order, ...restProps } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Col,
  );

  const screenClassName = genScreenClassName(pick(restProps, sizes), prefixCls!);

  const classes = clsx(
    `${prefixCls}-col`,
    {
      [`${prefixCls}-col-${span}`]: span,
      [`${prefixCls}-col-offset-${offset}`]: offset,
      [`${prefixCls}-col-order-${order}`]: order, // css 中只提供了 1-24, 因此 0 无意义，不做额外处理
    },
    screenClassName,
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
