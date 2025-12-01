import * as React from 'react';
import { omit } from '@sqi-ui/utils';
import type { ExternalToast } from './state';
import { composeRef } from '../_util/ref';

interface SingleToastProps extends ExternalToast {
  removeToast: (toast: ExternalToast) => void;
  onAutoClose?: (toast: ExternalToast) => void;
  closeButton?: React.ReactElement;
  className?: string;
}
const SingleToast = React.forwardRef<HTMLLIElement, SingleToastProps>((props, ref) => {
  const originToast = React.useMemo(() => omit(props, ['removeToast', 'closeButton', 'className']), [props]);
  const {
    jsx,
    _isDelete,
    removeToast,
    onAutoClose,
    onClose,
    disableClose,
    closeButton,
    duration = 0,
    placement,
  } = props;

  const toastRef = React.useRef<HTMLLIElement>(null);

  const originToastRef = React.useRef(originToast);
  const remainingTimeRef = React.useRef(duration);

  const deleteToast = React.useCallback(() => {
    removeToast(originToast);
  }, [removeToast, originToast]);

  React.useEffect(() => {
    originToastRef.current = originToast;
  }, [originToast]);

  React.useEffect(() => {
    remainingTimeRef.current = duration;
  }, [duration]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation> function always rerender in effect
  React.useEffect(() => {
    // See: https://github.com/denysdovhan/wtfjs?tab=readme-ov-file#an-infinite-timeout
    if (!remainingTimeRef.current || remainingTimeRef.current === Infinity) return;

    let timeoutId: NodeJS.Timeout;
    let startTime = Date.now();

    const startTimer = () => {
      startTime = Date.now();
      timeoutId = setTimeout(() => {
        onAutoClose?.(originToastRef.current);
        deleteToast();
      }, remainingTimeRef.current);
    };

    const pauseTimer = () => {
      clearTimeout(timeoutId);
      remainingTimeRef.current -= Date.now() - startTime;
    };

    const handleMouseEnter = () => {
      pauseTimer();
    };

    const handleMouseLeave = () => {
      startTimer();
    };

    startTimer();

    const currentToastRef = toastRef.current;
    if (currentToastRef) {
      currentToastRef.addEventListener('mouseenter', handleMouseEnter);
      currentToastRef.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearTimeout(timeoutId);
      if (currentToastRef) {
        currentToastRef.removeEventListener('mouseenter', handleMouseEnter);
        currentToastRef.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  React.useEffect(() => {
    if (_isDelete) {
      deleteToast();
      onClose?.(originToast);
    }
  }, [originToast, deleteToast, onClose, _isDelete]);

  const [y, x] = placement!.split('-');

  return (
    <li
      className={props.className}
      ref={composeRef(ref, toastRef)}
      data-single-toast
      data-y-position={y}
      data-x-position={x}
      data-disable-close={Boolean(disableClose)}
    >
      {jsx}
      {disableClose ? null : closeButton}
    </li>
  );
});

SingleToast.displayName = 'SingleToast';

export default SingleToast;
