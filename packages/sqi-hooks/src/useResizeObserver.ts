import { useRef } from 'react';
import ResizeObserverPolyfill from 'resize-observer-polyfill';
import { canUseDom } from '@sqi-ui/utils';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useResizeObserver(
  container: React.RefObject<Element | null>,
  callback?: (data: ResizeObserverEntry[]) => void,
  enabled = true,
) {
  const callbackRef = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    const element = container.current;
    let observer: ResizeObserverPolyfill | null = null;

    if (!enabled || !canUseDom() || !element) return;

    const resizeCallback: ResizeObserverCallback = (entries) => {
      callbackRef.current?.(entries);
    };
    observer = new ResizeObserverPolyfill(resizeCallback);
    observer.observe(element);

    return () => {
      if (observer && element) {
        observer.unobserve(element);
        observer.disconnect?.();
        observer = null;
      }
    };
  }, [container, enabled]);
}
