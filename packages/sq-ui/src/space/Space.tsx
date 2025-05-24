import React, { Fragment, Children, useCallback, isValidElement, useContext } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { isFragment } from 'react-is';
import clsx from 'clsx';
import { isArray, isString } from 'lodash-es';
import { useMergeProps } from '@sq-ui/hooks';

import type { SpaceProps } from './type';
import { ConfigContext } from '../config-provider';

const spaceSize = {
  sm: 8,
  md: 16,
  lg: 24,
};

const defaultProps: SpaceProps = {
  size: 'md',
  direction: 'horizontal',
  align: 'center',
  wrap: false,
};

function toArray(children: ReactNode): ReactNode[] {
  let realNode: ReactNode[] = [];

  Children.toArray(children).forEach((child: any) => {
    if (child === null || child === undefined) {
      return;
    }

    // Fragment 不应占用 space-item，对其进行过滤（context 不能过滤）
    if (Array.isArray(child)) {
      realNode = realNode.concat(toArray(child));
    } else if (isValidElement(child) && isFragment(child) && child.props) {
      realNode = realNode.concat(toArray((child.props as any).children));
    } else {
      realNode.push(child);
    }
  });
  return realNode;
}

export default function Space(baseProps: SpaceProps) {
  const { prefixCls, size: ctxSize, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Space);

  const {
    className,
    children,
    size = ctxSize,
    direction = 'horizontal',
    align,
    split,
    wrap = false,
    ...restProps
  } = props;

  const flatChildren = toArray(children);
  // 默认为水平方向，且垂直居中对齐
  const mergeAlign = direction === 'horizontal' && align === undefined ? 'center' : align;

  const classes = clsx(
    `${prefixCls}-space`,
    `${prefixCls}-space-direction-${direction}`,
    {
      [`${prefixCls}-space-align-${mergeAlign}`]: mergeAlign,
      [`${prefixCls}-space-wrap`]: wrap,
    },
    className,
  );

  const renderItemStyle = useCallback(
    (isLastChildren: boolean): CSSProperties => {
      // 若传入数组，以传入为主，若为字符串或数字，则分别设置水平和垂直方向的间距
      const mergeSize = isArray(size) ? size : [size, size];
      const [horizontalGap, verticalGap] = mergeSize.map((_size) =>
        isString(_size) ? spaceSize[_size as keyof typeof spaceSize] : _size || 0,
      );

      if (wrap) {
        return {
          marginRight: horizontalGap,
          marginBottom: verticalGap,
        };
      }
      if (direction === 'vertical') {
        return {
          marginBottom: verticalGap,
        };
      }
      return {
        marginRight: isLastChildren ? undefined : horizontalGap,
      };
    },
    [size],
  );

  const nodes = flatChildren.map<ReactNode>((item, index) => {
    const isLastChildren = index === flatChildren.length - 1;

    return (
      <Fragment key={`space-item-${index}`}>
        <div className="space-item" style={renderItemStyle(isLastChildren)}>
          {item}
        </div>
        {!isLastChildren && split && <span className="sq-space-item-split">{split}</span>}
      </Fragment>
    );
  });

  return (
    <div className={classes} {...restProps}>
      {nodes}
    </div>
  );
}

Space.displayName = 'Space';
