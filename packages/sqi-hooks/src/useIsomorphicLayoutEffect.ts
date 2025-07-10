import { useEffect, useLayoutEffect } from 'react';
import { canUseDom } from '@sqi-ui/utils';

const isBrowser = canUseDom();

export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
