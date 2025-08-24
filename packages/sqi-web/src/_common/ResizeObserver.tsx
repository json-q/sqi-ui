import React, { cloneElement, forwardRef, isValidElement, useImperativeHandle, useRef, useState } from 'react';
import { throttle } from '@sqi-ui/utils';
import { useResizeObserver, type ObserverSizeInfo } from '@sqi-ui/hooks';
import { toArray } from '../_util/toArray';
import { getDOM, getReactNodeRef, getRefDom } from '../_util/dom';
import { useComposeRef } from '../_util/ref';

export interface ResizeObserverProps {
  onResize?: (sizeInfo: ObserverSizeInfo, target: ResizeObserverEntry) => void;
  children?: React.ReactElement;
  /**
   * @description 是否禁用 observer
   */
  disabled?: boolean;
  /**
   * @description 节流时间
   * @default 100
   */
  throttleMs?: number;
}

const ResizeObserverComponent = forwardRef<HTMLElement, ResizeObserverProps>((props, ref) => {
  const { children, disabled, throttleMs = 100, onResize } = props;

  const isElement = isValidElement(children);
  const childNodes = isElement ? toArray(children) : [];
  const originRef = isElement ? getReactNodeRef<HTMLElement>(children!) : null;
  const elementRef = useRef<HTMLElement>(null);

  const [elementState, setElementState] = useState<HTMLElement | null>(null);

  const mergedRef = useComposeRef<HTMLElement>(originRef, elementRef, (node) => {
    // elementRef 在初次挂载时 useResizeObserver 无法获取到值，使用 state
    setElementState(getDOM(node) as HTMLElement);
  });

  if (process.env.NODE_ENV !== 'production') {
    if (!isElement) {
      console.error('[@sqi-ui/web]: The `children` of ResizeObserverComponent is invalid. Nothing is in observe.');
    }
    if (childNodes.length > 1) {
      console.error(
        '[@sqi-ui/web]: Find more than one child node with `children` in ResizeObserverComponent. Please ensure only one child node',
      );
    } else if (childNodes.length === 0) {
      console.error('[@sqi-ui/web]: `children` of ResizeObserverComponent is empty. Nothing is in observe.');
    }
  }

  useImperativeHandle(ref, () => getRefDom(elementRef) as HTMLElement);

  const throttleResize = onResize ? throttle(onResize, throttleMs) : undefined;

  useResizeObserver(elementState, throttleResize, !disabled);

  return isElement ? cloneElement(children as any, { ref: mergedRef }) : children;
});

ResizeObserverComponent.displayName = 'ResizeObserverComponent';

export default ResizeObserverComponent;
