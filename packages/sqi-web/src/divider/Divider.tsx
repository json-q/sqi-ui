import React, { forwardRef, useContext } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import { ConfigContext } from '../config-provider/context';
import type { DividerProps } from './type';

const defaultProps: DividerProps = {
  direction: 'horizontal',
  align: 'center',
};

const Divider = forwardRef<HTMLDivElement, DividerProps>((baseProps: DividerProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Divider);
  const { direction, align, dashed, className, children, text, style } = props;

  const mergeChildren = children || text;
  const hasText = direction !== 'vertical' && !!mergeChildren;

  const classes = clsx(`${prefixCls}-divider`, {
    [`${prefixCls}-divider-${direction}`]: direction,
    [`${prefixCls}-divider-with-text`]: hasText,
    [`${prefixCls}-divider-with-text-${align}`]: hasText,
    [`${prefixCls}-divider-dashed`]: !!dashed,
    className,
  });

  return (
    <div className={classes} style={style} ref={ref}>
      {hasText && <span className={`${prefixCls}-divider-inner-text`}>{mergeChildren}</span>}
    </div>
  );
});

Divider.displayName = 'Divider';

export default Divider;
