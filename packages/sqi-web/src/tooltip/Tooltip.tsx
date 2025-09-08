'use client';
import React, { forwardRef, useContext } from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import { ConfigContext } from '../config-provider/context';
import Popup from '../popup';
import type { TooltipProps } from './type';

const defaultProps: TooltipProps = {
  theme: 'default',
  trigger: 'hover',
  placement: 'top',
  showArrow: true,
  destroyOnClose: true,
  offset: 6,
};

const Tooltip = forwardRef<HTMLElement, TooltipProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = useContext(ConfigContext);

  const { classNames, rootClassName, theme, ...restProps } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Tooltip,
  );

  return (
    <Popup
      rootClassName={clsx(
        `${prefixCls}-tooltip`,
        {
          [`${prefixCls}-tooltip-${theme}`]: theme,
        },
        rootClassName,
      )}
      classNames={{
        arrow: clsx(classNames?.arrow, `${prefixCls}-tooltip-arrow`),
        content: clsx(classNames?.content, `${prefixCls}-tooltip-content`),
      }}
      {...restProps}
      ref={ref}
    />
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
