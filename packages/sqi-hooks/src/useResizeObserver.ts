import { useRef } from 'react';
import ResizeObserverPolyfill from 'resize-observer-polyfill';
import { canUseDom } from '@sqi-ui/utils';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export interface ObserverSizeInfo {
  width: number;
  height: number;
  offsetWidth: number;
  offsetHeight: number;
}

const SafeResizeObserver = window.ResizeObserver || ResizeObserverPolyfill;

export function useResizeObserver(
  container: HTMLElement,
  callback?: (sizeInfo: ObserverSizeInfo, target: ResizeObserverEntry) => void,
  enabled = true,
) {
  const callbackRef = useRef<typeof callback>(null);
  callbackRef.current = callback;
  const sizes = useRef<ObserverSizeInfo>({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1,
  });

  useIsomorphicLayoutEffect(() => {
    let observer: ResizeObserver | null = null;

    if (!enabled || !canUseDom() || !container) return;

    const resizeCallback: ResizeObserverCallback = (entries) => {
      const target = entries[0];

      const { width, height } = target.contentRect;
      const offsetWidth = container.offsetWidth;
      const offsetHeight = container.offsetHeight;
      /**
       * see: https://github.com/react-component/resize-observer/blob/f2b327fad147a72006d1babcb3f3ff57a85e0c03/src/SingleObserver/index.tsx#L50-L68
       * Resize observer trigger when content size changed.
       * In most case we just care about element size,
       * let's use `boundary` instead of `contentRect` here to avoid shaking.
       */
      if (
        sizes.current.width !== width ||
        sizes.current.height !== height ||
        sizes.current.offsetWidth !== offsetWidth ||
        sizes.current.offsetHeight !== offsetHeight
      ) {
        sizes.current = { width, height, offsetWidth, offsetHeight };
        callbackRef.current?.(sizes.current, target);
      }
    };

    observer = new SafeResizeObserver(resizeCallback);
    observer.observe(container);

    return () => {
      if (observer && container) {
        observer.unobserve(container);
        observer.disconnect();
        observer = null;
      }
    };
  }, [container, enabled]);
}
