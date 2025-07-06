export const PRE_ENTER = 0;
export const ENTERING = 1;
export const ENTERED = 2;
export const PRE_EXIT = 3;
export const EXITING = 4;
export const EXITED = 5;
export const UNMOUNTED = 6;

export type MotionStatus = 'preEnter' | 'entering' | 'entered' | 'preExit' | 'exiting' | 'exited' | 'unmounted';

export const STATUS: MotionStatus[] = ['preEnter', 'entering', 'entered', 'preExit', 'exiting', 'exited', 'unmounted'];

export interface FormatState {
  _s: number;
  status: MotionStatus;
  isEnter: boolean;
  isMounted: boolean;
  isResolved: boolean;
}

export const getState = (status: number): FormatState => ({
  _s: status,
  status: STATUS[status],
  isEnter: status < PRE_EXIT,
  isMounted: status !== UNMOUNTED,
  isResolved: status === ENTERED || status > EXITING,
});

export const startOrEnd = (unmounted?: boolean) => (unmounted ? UNMOUNTED : EXITED);

export const getEndStatus = (status: number, unmountOnExit?: boolean) => {
  switch (status) {
    case ENTERING:
    case PRE_ENTER:
      return ENTERED;

    case EXITING:
    case PRE_EXIT:
      return startOrEnd(unmountOnExit);
  }
};

export const getTimeout = (timeout?: number | { enter?: number; exit?: number }) => {
  return typeof timeout === 'object' ? [timeout.enter, timeout.exit] : [timeout, timeout];
};

export const nextTick = (transitState: (status: number) => void, status: number) => {
  return setTimeout(() => {
    // 读取 document.body.offsetTop 可以强制浏览器在过渡到下一个状态之前重新绘制
    const read = isNaN(document.body.offsetTop); // 强制重绘
    if (!read) {
      transitState(status + 1);
    }
  }, 0);
};
