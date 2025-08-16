import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { throttle } from '@sqi-ui/utils';
import { useResizeObserver } from '@sqi-ui/hooks';
import { toArray } from '../_util/toArray';
import { getReactNodeRef, getRefDom } from '../_util/dom';
import { useComposeRef } from '../_util/ref';

export interface ResizeObserverProps {
  onResize?: (entry: ResizeObserverEntry[]) => void;
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
  const originRef = isElement ? getReactNodeRef<Element>(children!) : null;
  const elementRef = useRef<Element>(null);

  const [element, setElement] = useState<HTMLElement | null>(null);

  const refCallback = useCallback((node: HTMLElement | null) => {
    elementRef.current = node;
    setElement(node);
  }, []);

  // 合并ref
  const mergedRef = useComposeRef(originRef, refCallback);

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

  const getDomElement = () => {
    return getRefDom(elementRef) as HTMLElement;
  };

  useImperativeHandle(ref, () => element as HTMLElement);

  const throttleResize = onResize ? throttle(onResize, throttleMs) : undefined;

  useResizeObserver(getDomElement(), throttleResize, !disabled);

  console.log(getRefDom(elementRef));

  return isElement ? cloneElement(children as any, { ref: mergedRef }) : children;
});

ResizeObserverComponent.displayName = 'ResizeObserverComponent';

export default ResizeObserverComponent;
