import React, { Children, CSSProperties, Fragment, ReactNode, useCallback } from 'react';
import clsx from 'clsx';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import type { SpaceProps } from './type';

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
};

export default function Space(props: SpaceProps) {
  const {
    className,
    children,
    size = 'small',
    direction = 'horizontal',
    align,
    split,
    wrap = false,
    ...restProps
  } = props;

  // 防止 children 是多维数组，toArray 将其扁平化
  const flatChildren = Children.toArray(children);
  // 默认为水平方向，且垂直居中对齐
  const mergeAlign = direction === 'horizontal' && align === undefined ? 'center' : align;

  const classes = clsx(
    'sq-space',
    `sq-space-direction-${direction}`,
    {
      [`sq-space-align-${mergeAlign}`]: mergeAlign,
      'sq-space-wrap': wrap,
    },
    className,
  );

  const renderItemStyle = useCallback(
    (isLastChildren: boolean): CSSProperties => {
      // 若传入数组，以传入为主，若为字符串或数字，则分别设置水平和垂直方向的间距
      const mergeSize = isArray(size) ? size : [size, size];
      const [horizontalGap, verticalGap] = mergeSize.map((_size) => (isString(_size) ? spaceSize[_size] : _size || 0));

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
