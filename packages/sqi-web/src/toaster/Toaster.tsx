'use client';
import * as React from 'react';
import { useMergeProps } from '@sqi-ui/hooks';
import { ToastState, type CoreToaster, type ExternalToast } from './state';
import { ConfigContext } from '../config-provider/context';
import clsx from 'clsx';
import type { ToasterProps } from './type';
import { isObject } from '@sqi-ui/utils';
import SingleToast from './SingleToast';

const defaultProps: ToasterProps = {
  placement: 'top-center',
  gap: 12,
  offset: 16,
  duration: 3000,
};

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

  /**
   * @param toast 当前订阅者
   * @param prevStateToasts state数据，这里不直接访问 toasts 是为了减少 toasts 的副作用依赖
   */
  const handleSubscribe = React.useCallback((toast: CoreToaster, prevStateToasts: CoreToaster[]) => {
    if (toast.close) {
      return prevStateToasts.filter((item) => item.id !== toast.id);
    }

    const findI = prevStateToasts.findIndex((t) => t.id === toast.id);

    // 若通知的该 id 已在活跃列表中，则更新，反之，则添加到首项
    if (findI !== -1) {
      return prevStateToasts.map((item, index) => (index === findI ? { ...item, ...toast } : item));
    }

    return [toast, ...prevStateToasts];
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
    setToasts((toasts) => {
      const currentToast = toasts.find((toast) => toast.id === toastToRemove.id);
      if (!currentToast?._isDelete) {
        ToastState.remove(toastToRemove.id);
      }
      // return latest toasts
      return toasts.filter(({ id }) => id !== toastToRemove.id);
    });
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
            {filteredToasts
              .filter((item) => (!item.placement && i === 0) || item.placement === p)
              .map((item) => {
                return (
                  <SingleToast key={item.id} removeToast={removeToast} duration={duration} placement={p} {...item} />
                );
              })}
          </ol>
        );
      })}
    </section>
  );
});

Toaster.displayName = 'Toaster';

export default Toaster;
