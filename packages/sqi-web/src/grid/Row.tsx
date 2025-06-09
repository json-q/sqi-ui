'use client';
import React, { useContext, useMemo, forwardRef, type CSSProperties } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import { isNumber, isObject } from '@sqi-ui/utils';
import { ConfigContext } from '../config-provider/context';
import type { RowProps } from './type';
import RowContext from './context';

type Gap = number | undefined;

const defaultProps: RowProps = {
  gutter: 0,
  align: 'start',
  justify: 'start',
  wrap: true,
};

const Row = forwardRef<HTMLDivElement, RowProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const { align, justify, gutter, className, wrap, children, style, ...restProps } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Row,
  );

  const gutterArray = getGutter();
  function getGutter() {
    const gutterResult: [Gap, Gap] = [undefined, undefined];
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, undefined];

    normalizedGutter.forEach((item, index) => {
      if (isObject(item)) {
        // TODO
      } else {
        gutterResult[index] = item;
      }
    });
    return gutterResult;
  }

  const classes = clsx(
    `${prefixCls}-row`,
    {
      [`${prefixCls}-row-align-${align}`]: align,
      [`${prefixCls}-row-justify-${justify}`]: justify,
    },
    className,
  );

  // gutterArray 在 rerender 时总是一个新数组，将值拆分成基本类型确保正确的 memo
  const [horizontalGutter, verticalGutter] = gutterArray;
  const rowContext = useMemo(
    () => ({
      gutter: [horizontalGutter, verticalGutter] as [number, number],
      wrap: wrap,
    }),
    [horizontalGutter, verticalGutter, wrap],
  );

  const marginStyle: CSSProperties = {};
  // 有效的 gutter 值
  const hasValidHorizontal = isNumber(horizontalGutter) && horizontalGutter !== 0;
  const hasValidVertical = isNumber(verticalGutter) && verticalGutter !== 0;

  // 在 gutter 存在时，col 的 padding 最终在 row 上会多出左右 1/2 的间距，因此要设置 margin 来抵消
  if (hasValidHorizontal || hasValidVertical) {
    const marginHorizontal = -horizontalGutter! / 2;
    const marginVertical = -verticalGutter! / 2;

    if (marginHorizontal) {
      marginStyle.marginLeft = marginHorizontal;
      marginStyle.marginRight = marginHorizontal;
    }
    if (marginVertical) {
      marginStyle.marginTop = marginVertical;
      marginStyle.marginBottom = marginVertical;
    }
  }

  return (
    <RowContext.Provider value={rowContext}>
      <div {...restProps} ref={ref} className={classes} style={{ ...style, ...marginStyle }}>
        {children}
      </div>
    </RowContext.Provider>
  );
});

Row.displayName = 'Row';

export default Row;
