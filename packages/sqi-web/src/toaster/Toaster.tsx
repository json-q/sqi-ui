'use client';

import * as React from 'react';
import clsx from 'clsx';
import { useMergeProps } from '@sqi-ui/hooks';
import { isObject } from '@sqi-ui/utils';
import CSSMotionList, { CSSMotionListItem, type CSSMotionListInstance } from '../_common/CSSMotionList';
import { ConfigContext } from '../config-provider/context';
import { ToastState, type CoreToaster, type ExternalToast } from './state';
import SingleToast from './SingleToast';
import type { ToasterProps } from './type';

const defaultProps: ToasterProps = {
  placement: 'top-center',
  gap: 12,
  offset: 16,
  duration: 3000,
};

const MOTION_DURATION = 160;

function genOffsetStyle(offset: Required<ToasterProps>['offset']) {
  const offsetObject = isObject(offset) ? offset : { top: offset, right: offset, bottom: offset, left: offset };
  const styles: Record<string, string> = {};

  ['top', 'right', 'bottom', 'left'].forEach((key) => {
    const value = offsetObject[key as keyof typeof offsetObject];
    if (value !== undefined) {
      styles[`--offset-${key}`] = typeof value === 'number' ? `${value}px` : value;
    }
  });

  return styles as React.CSSProperties;
}

const Toaster = React.forwardRef<HTMLElement, ToasterProps>((baseProps, ref) => {
  const { prefixCls, componentConfig } = React.useContext(ConfigContext);
  const { id, placement, duration, gap, offset, style, className } = useMergeProps(
    baseProps,
    defaultProps,
    componentConfig?.Toaster,
  );

  const [toasts, setToasts] = React.useState<CoreToaster[]>([]);
  const listRef = React.useRef<HTMLOListElement>(null);
  const motionRef = React.useRef<CSSMotionListInstance>(null);

  /**
   * @param toast 当前订阅者
   * @param prevStateToasts state数据，这里不直接访问 toasts 是为了减少 toasts 的副作用依赖
   */
  const handleSubscribe = React.useCallback((toast: CoreToaster, prevStateToasts: CoreToaster[]) => {
    if (toast.close) {
      return prevStateToasts.filter((item) => item.id !== toast.id);
    }

    const findI = prevStateToasts.findIndex((t) => t.id === toast.id);

    // 若通知的该 id 已在活跃列表中，则更新，反之则添加
    if (findI !== -1) {
      return prevStateToasts.map((item, index) => (index === findI ? { ...item, ...toast } : item));
    }

    // 推迟到下一帧执行进入动画，否则执行顺序会变成 toggle -> setState 导致 key 此时并不存在
    requestAnimationFrame(() => {
      motionRef.current?.toggle(toast.id, true);
    });

    return [...prevStateToasts, toast];
  }, []);

  React.useEffect(() => {
    const unsubscribe = ToastState.subscribe((toast) => {
      setToasts((prevStateToasts) => handleSubscribe(toast, prevStateToasts));
    });

    return () => {
      unsubscribe();
    };
  }, [handleSubscribe]);

  const removeToast = React.useCallback((toastToRemove: ExternalToast) => {
    motionRef.current?.toggle(toastToRemove.id!, false);
    setTimeout(() => {
      setToasts((toasts) => {
        const currentToast = toasts.find((toast) => toast.id === toastToRemove.id);
        if (!currentToast?._isDelete) {
          ToastState.remove(toastToRemove.id);
        }
        // return latest toasts
        return toasts.filter(({ id }) => id !== toastToRemove.id);
      });
    }, MOTION_DURATION);
  }, []);

  const filteredToasts = React.useMemo(() => {
    if (id) return toasts.filter((toast) => toast.toasterId === id);
    return toasts.filter((toast) => !toast.toasterId);
  }, [toasts, id]);

  const possiblePlacements = React.useMemo(() => {
    // 过滤 placement 是因为 toast 调用时，不一定传入 placement，此时使用默认的 placement 位置
    return Array.from(
      new Set([placement].concat(filteredToasts.filter((item) => item.placement).map((item) => item.placement!))),
    );
  }, [filteredToasts, placement]);

  // ====================== Merge Style ======================
  const classes = clsx(`${prefixCls}-toaster`, className);
  const styles = {
    '--gap': `${gap}px`,
    ...genOffsetStyle(offset!),
    ...style,
  } as React.CSSProperties;

  return (
    <section ref={ref} tabIndex={-1}>
      {possiblePlacements.map((p, i) => {
        if (!filteredToasts.length) return null;

        return (
          <ol key={p} ref={listRef} data-toaster-placement={p} className={classes} style={styles}>
            <CSSMotionList ref={motionRef} name="toaster" mountOnEnter preEnter unmountOnExit timeout={MOTION_DURATION}>
              {({ ...options }) => {
                return filteredToasts
                  .filter((item) => (!item.placement && i === 0) || item.placement === p)
                  .map((item) => {
                    return (
                      <CSSMotionListItem itemKey={item.id} key={item.id} {...options}>
                        {({ className }) => (
                          <SingleToast
                            className={className}
                            removeToast={removeToast}
                            duration={duration}
                            placement={p}
                            {...item}
                          />
                        )}
                      </CSSMotionListItem>
                    );
                  });
              }}
            </CSSMotionList>
          </ol>
        );
      })}
    </section>
  );
});

Toaster.displayName = 'Toaster';

export default Toaster;
