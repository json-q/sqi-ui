// from by: https://github.com/szhsin/react-transition-state
import React, { useRef, useState, useCallback } from 'react';
import { isNumber } from '@sqi-ui/utils';
import {
  PRE_ENTER,
  ENTERING,
  ENTERED,
  PRE_EXIT,
  EXITING,
  startOrEnd,
  getState,
  getEndStatus,
  getTimeout,
  nextTick,
} from './utils/motion';
import type { MotionStatus, FormatState } from './utils/motion';

interface UpdateStateOptions<S = FormatState> {
  status: number;
  setState: React.Dispatch<React.SetStateAction<S>>;
  latestState: React.RefObject<S>;
  timeoutId: React.RefObject<NodeJS.Timeout | null>;
  onChange: MotionOptions['onStateChange'];
}

function updateState(options: UpdateStateOptions) {
  const { status, setState, latestState, timeoutId, onChange } = options;

  if (timeoutId.current) clearTimeout(timeoutId.current);

  const state = getState(status);
  setState(state);
  latestState.current = state;
  onChange?.({ current: state });
}

export type MotionState = {
  status: MotionStatus;
  isMounted: boolean;
  isEnter: boolean;
  isResolved: boolean;
};

export interface MotionOptions {
  initialEntered?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  preEnter?: boolean;
  preExit?: boolean;
  enter?: boolean;
  exit?: boolean;
  timeout?: number | { enter?: number; exit?: number };
  onStateChange?: (event: { current: MotionState }) => void;
}

export type MotionResult = [MotionState, (toEnter?: boolean) => void, () => void];

export const useMotionState = (options: MotionOptions = {}): MotionResult => {
  const {
    enter = true,
    exit = true,
    preEnter,
    preExit,
    timeout,
    initialEntered,
    mountOnEnter,
    unmountOnExit,
    onStateChange: onChange,
  } = options;

  const [state, setState] = useState(() => getState(initialEntered ? ENTERED : startOrEnd(mountOnEnter)));
  const latestState = useRef(state);
  const timeoutId = useRef<NodeJS.Timeout>(null);
  const [enterTimeout, exitTimeout] = getTimeout(timeout);

  const endMotion = useCallback(() => {
    const status = getEndStatus(latestState.current._s, unmountOnExit);
    if (status) updateState({ status, setState, latestState, timeoutId, onChange });
  }, [onChange, unmountOnExit]);

  const toggle = useCallback(
    (toEnter?: boolean) => {
      const transitState = (status: number) => {
        updateState({ status, setState, latestState, timeoutId, onChange });

        switch (status) {
          case ENTERING:
            if (enterTimeout! >= 0) timeoutId.current = setTimeout(endMotion, enterTimeout);
            break;

          case EXITING:
            if (exitTimeout! >= 0) timeoutId.current = setTimeout(endMotion, exitTimeout);
            break;

          case PRE_ENTER:
          case PRE_EXIT:
            timeoutId.current = nextTick(transitState, status);
            break;
        }
      };

      const enterStage = latestState.current.isEnter;
      if (!isNumber(toEnter)) toEnter = !enterStage;

      if (toEnter) {
        if (!enterStage) transitState(enter ? (preEnter ? PRE_ENTER : ENTERING) : ENTERED);
      } else {
        if (enterStage) transitState(exit ? (preExit ? PRE_EXIT : EXITING) : startOrEnd(unmountOnExit));
      }
    },
    [endMotion, onChange, enter, exit, preEnter, preExit, enterTimeout, exitTimeout, unmountOnExit],
  );

  return [state, toggle, endMotion];
};
