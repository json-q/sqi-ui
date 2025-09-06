'use client';
import React, { cloneElement, forwardRef, isValidElement, useContext, useState } from 'react';
import type { TagProps } from './type';
import { ConfigContext } from '../config-provider/context';
import { useMergeProps } from '@sqi-ui/hooks';
import clsx from 'clsx';
import { CloseIcon } from '@sqi-ui/icons';

const defaultProps: TagProps = {};

const Tag = forwardRef<HTMLDivElement, TagProps>((baseProps, ref) => {
  const { prefixCls, size: ctxSize = 'md', componentConfig } = useContext(ConfigContext);
  const {
    children,
    className,
    size = ctxSize,
    title,
    bordered,
    icon,
    closable,
    onClose,
    color,
    style,
    onClick,
    ...restProps
  } = useMergeProps(baseProps, defaultProps, componentConfig?.Tag);

  const [innerVisible, setInnerVisible] = useState(true);

  const classes = clsx(
    `${prefixCls}-tag`,
    {
      [`${prefixCls}-tag-size-${size}`]: size,
      [`${prefixCls}-tag-has-color`]: color,
      [`${prefixCls}-tag-bordered`]: bordered,
    },
    className,
  );

  // ======================== Close Icon =============================

  const onInnerClose: React.MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();
    onClose?.(e);

    if (e.defaultPrevented) return;

    setInnerVisible(false);
  };

  const renderCloseIcon = () => {
    if (!closable) return null;

    const closeCls = `${prefixCls}-tag-close-icon`;

    if (isValidElement(closable)) {
      return cloneElement(closable as any, {
        className: closeCls,
        onClick: onInnerClose,
      });
    }
    return <CloseIcon onClick={onInnerClose} className={closeCls} />;
  };

  if (innerVisible === false) return null;

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: <explanation> ignore
    <span
      {...restProps}
      ref={ref}
      title={title}
      className={classes}
      style={{ ...style, backgroundColor: color }}
      onClick={onClick}
    >
      {icon}
      {children}
      {renderCloseIcon()}
    </span>
  );
});

Tag.displayName = 'Tag';

export default Tag;
