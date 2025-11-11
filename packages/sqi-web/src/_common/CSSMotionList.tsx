'use client';

import * as React from 'react';
import clsx from 'clsx';
import { useTransitionMap, type TransitionMapOptions, type TransitionMapResult } from 'react-transition-state';
import { ConfigContext } from '../config-provider/context';

export interface ChildListCallbackResult<K = React.Key> extends TransitionMapResult<K> {
  className: string;
}

export interface CSSMotionListProps<K = React.Key> extends TransitionMapOptions<K> {
  prefixCls?: string;
  name?: string;
  children: React.ReactElement[];
}

export type CSSMotionListInstance<K = React.Key> = TransitionMapResult<K>;

const CSSMotionList = React.forwardRef<CSSMotionListInstance, CSSMotionListProps>((props, ref) => {
  const ctx = React.useContext(ConfigContext);
  const { children, name, prefixCls, ...restProps } = props;

  const transition = useTransitionMap(restProps);

  React.useImperativeHandle(ref, () => ({ ...transition }));

  const mergedPrefixCls = `${prefixCls || ctx.prefixCls}${name ? `-${name}` : ''}`;

  return children.map((item, index) => (
    <CSSMotionItem
      key={item.key}
      itemKey={item.key || `motion-item-${index}`}
      prefixCls={mergedPrefixCls}
      {...transition}
    >
      {item}
    </CSSMotionItem>
  ));
});

CSSMotionList.displayName = 'CSSMotionList';

export default CSSMotionList;

interface CSSMotionItemProps<K = React.Key> extends TransitionMapResult<K> {
  prefixCls?: string;
  itemKey: K;
  children: React.ReactElement;
}

const CSSMotionItem = (props: CSSMotionItemProps) => {
  const { prefixCls, children, itemKey, deleteItem, setItem, stateMap } = props;

  const { status, isMounted } = stateMap.get(itemKey) || {};

  React.useEffect(() => {
    setItem(itemKey, {
      initialEntered: false,
    });
    return () => {
      deleteItem(itemKey);
    };
  }, [setItem, deleteItem, itemKey]);

  const className = clsx([`${prefixCls}-motion`], {
    [`${prefixCls}-motion-${status}`]: status,
  });

  if (!isMounted) return null;

  return React.cloneElement(children as any, { className: clsx((children.props as any).className, className) });
};
