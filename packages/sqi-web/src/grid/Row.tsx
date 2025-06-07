'use client';
import React, { useContext, useMemo, forwardRef } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import { isObject } from '@sqi-ui/utils';
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
  const { align, justify, gutter, className, wrap, ...restProps } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Row,
  );

  const classes = clsx(
    `${prefixCls}-row`,
    {
      [`${prefixCls}-row-align-${align}`]: align,
      [`${prefixCls}-row-justify-${justify}`]: justify,
    },
    className,
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

  // gutterArray 在 rerender 时总是一个新数组，将值拆分成基本类型确保正确的 memo
  const [horizontalGutter, verticalGutter] = gutterArray;
  const rowContext = useMemo(
    () => ({
      gutter: [horizontalGutter, verticalGutter],
      wrap: wrap,
    }),
    [horizontalGutter, verticalGutter, wrap],
  );

  return (
    <RowContext.Provider value={rowContext}>
      <div {...restProps} ref={ref} className={classes} />
    </RowContext.Provider>
  );
});

Row.displayName = 'Row';

export default Row;
