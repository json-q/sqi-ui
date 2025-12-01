'use client';

import * as React from 'react';
import clsx from 'clsx';
import { useTransitionMap, type TransitionMapOptions, type TransitionMapResult } from 'react-transition-state';
import { ConfigContext } from '../config-provider/context';
import { isFunction } from '@sqi-ui/utils';

export interface ChildListCallbackResult<K = React.Key> extends TransitionMapResult<K> {
  className: string;
}

export interface CSSMotionListProps<K = React.Key> extends TransitionMapOptions<K> {
  prefixCls?: string;
  name?: string;
  children: (status: CSSMotionListInstance) => React.ReactElement[];
}

export type CSSMotionListInstance<K = React.Key> = TransitionMapResult<K> & {
  prefixCls: string;
};

const CSSMotionList = React.forwardRef<CSSMotionListInstance, CSSMotionListProps>((props, ref) => {
  const ctx = React.useContext(ConfigContext);
  const { children, name, prefixCls, ...restProps } = props;

  const mergedPrefixCls = `${prefixCls || ctx.prefixCls}${name ? `-${name}` : ''}`;

  const transition = useTransitionMap({ ...restProps, allowMultiple: true });
  const forwardData = {
    ...transition,
    prefixCls: mergedPrefixCls,
  };

  React.useImperativeHandle(ref, () => ({ ...forwardData }));

  return children({ ...forwardData });

  // return children.map((item, index) => (
  //   <CSSMotionListItem
  //     key={item.key}
  //     itemKey={item.key || `motion-item-${index}`}
  //     prefixCls={mergedPrefixCls}
  //     {...transition}
  //   >
  //     {item}
  //   </CSSMotionListItem>
  // ));
});

CSSMotionList.displayName = 'CSSMotionList';

export default CSSMotionList;

interface CSSMotionItemProps<K = React.Key> extends TransitionMapResult<K> {
  /**
   * @description 样式前缀，会根据 CSSMotionList 传入的 name 生成，仅需传入即可
   */
  prefixCls?: string;
  /**
   * @description toggle 切换时需要的 key 值
   */
  itemKey: K;
  children: React.ReactElement | (({ className }: { className: string }) => React.ReactNode);
}

export const CSSMotionListItem = (props: CSSMotionItemProps) => {
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

  if (isFunction(children)) {
    return children({ className });
  }

  return React.cloneElement(children as any, { className: clsx((children.props as any).className, className) });
};
