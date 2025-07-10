import React, { cloneElement, forwardRef, isValidElement, useEffect, useImperativeHandle, useRef } from 'react';
import ResizeObserverPolyfill from 'resize-observer-polyfill';
import { throttle } from '@sqi-ui/utils';
import { toArray } from '../_util/toArray';
import { getDOM, getReactNodeRef } from '../_util/dom';
import { useComposeRef } from '../_util/ref';

export interface ResizeObserverProps {
  onResize?: (entry: ResizeObserverEntry) => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const ResizeObserverComponent = forwardRef<HTMLElement, ResizeObserverProps>((props, ref) => {
  const { children, onResize } = props;

  const isElement = isValidElement(children);

  const childNodes = toArray(children);

  const originRef = isElement ? getReactNodeRef<Element>(children!) : null;
  const elementRef = useRef<Element>(null);
  const mergedRef = useComposeRef(originRef, elementRef);

  if (process.env.NODE_ENV !== 'production') {
    if (!isElement) {
      console.error('[@sqi-ui/web]: The `children` of ResizeObserverComponent is invalid.');
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
    return getDOM(elementRef.current) as HTMLElement;
  };

  useImperativeHandle(ref, () => getDomElement());

  const throttleResize = onResize ? throttle(onResize, 100) : () => {};
  useEffect(() => {
    const observeElement = getDomElement();
    const observer = new ResizeObserverPolyfill((entries) => {
      entries.forEach((el) => {
        console.log(el);
        throttleResize(el);
      });
    });
    observer.observe(observeElement);
    return () => {
      observer.disconnect();
    };
  }, []);

  return isElement ? cloneElement(children as any, { ref: mergedRef }) : null;
});

ResizeObserverComponent.displayName = 'ResizeObserverComponent';

export default ResizeObserverComponent;
