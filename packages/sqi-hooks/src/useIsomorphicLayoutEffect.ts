import { canUseDom } from '@sqi-ui/utils';
import { useEffect, useLayoutEffect } from 'react';

const isBrowser = canUseDom();

export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
