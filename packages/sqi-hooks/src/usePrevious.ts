import { useEffect, useRef } from 'react';

export function usePrevious<T>(state: T): React.RefObject<T | undefined> {
  const ref = useRef<T>(undefined);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref;
}
