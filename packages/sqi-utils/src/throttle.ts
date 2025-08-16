import { debounce } from './debounce';

export interface ThrottledFunction<F extends (...args: any[]) => void> {
  (...args: Parameters<F>): void;
  cancel: () => void;
}

export function throttle<F extends (...args: any[]) => void>(fn: F, throttleMs: number): ThrottledFunction<F> {
  let pendingAt: number | null = null;

  const debounced = debounce(fn, throttleMs);

  const throttled = (...args: Parameters<F>) => {
    if (pendingAt === null) {
      pendingAt = Date.now();
    } else {
      if (Date.now() - pendingAt >= throttleMs) {
        pendingAt = Date.now();
        debounced.cancel();
      }
    }

    debounced(...args);
  };

  throttled.cancel = debounced.cancel;

  return throttled;
}
