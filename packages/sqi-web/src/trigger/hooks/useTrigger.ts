// import type { TriggerProps } from '../type';

import { useEffect, useRef, type ReactElement } from 'react';
import type { TriggerType } from '../type';

interface Options {
  triggerEl?: HTMLElement | null;
  trigger?: TriggerType | TriggerType[];
  delay?: number;
  clickOutsideClose?: boolean;
  visible?: boolean;
  onVisibleChange?: (visible: boolean, events?: { e: Event; trigger: string }) => void;
  disabled?: boolean;
}

const ESC_KEY = 'Escape';

const useTrigger = (props: Options) => {
  const { trigger, delay, disabled, visible, clickOutsideClose, triggerEl, onVisibleChange } = props;

  const hasPopupMouseDown = useRef(false);
  const leaveFlag = useRef(false); // 防止多次触发显隐

  const visibleTimer = useRef<NodeJS.Timeout>(null);
  const mouseDownTimer = useRef(0);

  useEffect(() => {
    if (disabled) return;

    // 区域外点击关闭
    const handleDocumentClick = (e: Event) => {
      if (triggerEl?.contains?.(e.target as Node) || hasPopupMouseDown.current) {
        return;
      }

      if (visible && clickOutsideClose) {
        onVisibleChange?.(false, { e, trigger: 'document' });
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('touchend', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('touchend', handleDocumentClick);
    };
  }, [disabled, visible, triggerEl, clickOutsideClose, onVisibleChange]);

  function delayFn(cb: () => void) {
    if (delay) {
      clearTimeout(visibleTimer.current!);
      visibleTimer.current = setTimeout(cb, delay);
    } else {
      cb();
    }
  }

  function genPopupProps(): any {
    if (disabled) return {};

    return {
      onMouseEnter: (e: MouseEvent) => {
        if (trigger === 'hover' && !leaveFlag.current) {
          clearTimeout(visibleTimer.current!);
          onVisibleChange?.(true, { e, trigger: 'hover' });
        }
      },
      onMouseLeave: (e: MouseEvent) => {
        if (trigger === 'hover') {
          leaveFlag.current = true;
          clearTimeout(visibleTimer.current!);
          onVisibleChange?.(false, { e, trigger: 'hover' });
        }
      },
      onMouseDown: () => {
        clearTimeout(mouseDownTimer.current);
        hasPopupMouseDown.current = true;
        mouseDownTimer.current = window.setTimeout(() => {
          hasPopupMouseDown.current = false;
        });
      },
      onTouchEnd: () => {
        clearTimeout(mouseDownTimer.current);
        hasPopupMouseDown.current = true;
        mouseDownTimer.current = window.setTimeout(() => {
          hasPopupMouseDown.current = false;
        });
      },
    };
  }

  function genTriggerProps(triggerNode: ReactElement) {
    if (disabled) return {};

    const triggerProps = {
      onMouseDown: (e: MouseEvent) => {
        if (trigger === 'mousedown') {
          delayFn(() => onVisibleChange?.(!visible, { e, trigger: 'mousedown' }));
        }
        (triggerNode.props as any).onMouseDown?.(e);
      },
      onClick: (e: MouseEvent) => {
        if (trigger === 'click') {
          e.preventDefault();
          e.stopPropagation();
          delayFn(() => onVisibleChange?.(!visible, { e, trigger: 'click' }));
        }
        (triggerNode.props as any).onClick?.(e);
      },
      onTouchStart: (e: TouchEvent) => {
        if (trigger === 'hover' || trigger === 'mousedown') {
          leaveFlag.current = false;
          delayFn(() => onVisibleChange?.(true, { e, trigger: 'hover' }));
        }
        (triggerNode.props as any).onTouchStart?.(e);
      },
      onMouseEnter: (e: MouseEvent) => {
        if (trigger === 'hover') {
          leaveFlag.current = false;
          delayFn(() => onVisibleChange?.(true, { e, trigger: 'hover' }));
        }
        (triggerNode.props as any).onMouseEnter?.(e);
      },
      onMouseLeave: (e: MouseEvent) => {
        if (trigger === 'hover') {
          leaveFlag.current = false;
          delayFn(() => onVisibleChange?.(false, { e, trigger: 'hover' }));
        }
        (triggerNode.props as any).onMouseLeave?.(e);
      },
      onFocus: (e: FocusEvent) => {
        if (trigger === 'focus') {
          delayFn(() => onVisibleChange?.(true, { e, trigger: 'focus' }));
        }
        (triggerNode.props as any).onFocus?.(e);
      },
      onBlur: (e: FocusEvent) => {
        if (trigger === 'focus') {
          delayFn(() => onVisibleChange?.(false, { e, trigger: 'blur' }));
        }
        (triggerNode.props as any).onBlur?.(e);
      },
      onContextMenu: (e: MouseEvent) => {
        if (trigger === 'context-menu') {
          e.preventDefault();
          delayFn(() => onVisibleChange?.(true, { e, trigger: 'context-menu' }));
        }
        (triggerNode.props as any).onContextMenu?.(e);
      },
      onKeyDown: (e: KeyboardEvent) => {
        if (e?.key === ESC_KEY) {
          delayFn(() => onVisibleChange?.(false, { e, trigger: 'keydown-esc' }));
        }
        (triggerNode.props as any).onKeyDown?.(e);
      },
    };

    return triggerProps;
  }

  return {
    genPopupProps,
    genTriggerProps,
  };
};

export default useTrigger;
