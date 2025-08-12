import { useRef } from 'react';
import ResizeObserverPolyfill from 'resize-observer-polyfill';
import { canUseDom } from '@sqi-ui/utils';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useResizeObserver(
  container: Element,
  callback?: (data: ResizeObserverEntry[]) => void,
  enabled = true,
) {
  const callbackRef = useRef<typeof callback>(null);
  callbackRef.current = callback;

  useIsomorphicLayoutEffect(() => {
    let observer: ResizeObserverPolyfill | null = null;

    if (!enabled || !canUseDom() || !container) return;

    const resizeCallback: ResizeObserverCallback = (entries) => {
      callbackRef.current?.(entries);
    };
    observer = new ResizeObserverPolyfill(resizeCallback);
    observer.observe(container);

    return () => {
      if (observer && container) {
        observer.unobserve(container);
        observer.disconnect?.();
        observer = null;
      }
    };
  }, [container, enabled]);
}
