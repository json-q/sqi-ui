import React, { forwardRef, useImperativeHandle, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from '@sqi-ui/hooks';
import { canUseDom, isFunction, isString } from '@sqi-ui/utils';

export type PortalContainer = string | (() => HTMLElement);

export interface PortalProps {
  prefixCls?: string;
  /**
   * @description 指定挂载的节点, 默认为 document.body
   * @default document.body
   */
  getContainer?: PortalContainer;
  children: React.ReactNode;
}

const isBrowser = canUseDom();

function getAttachNode(getContainer: PortalProps['getContainer']) {
  if (!isBrowser) return null;

  if (isString(getContainer)) {
    return document.querySelector(getContainer);
  }

  if (isFunction(getContainer)) {
    return getContainer();
  }

  return document.body;
}

const Portal = forwardRef<HTMLDivElement, PortalProps>((props, ref) => {
  const { getContainer, prefixCls, children } = props;

  const container = useMemo(() => {
    if (!isBrowser) return null;
    const appendNode = document.createElement('div');
    appendNode.className = prefixCls ? `${prefixCls}-portal-wrapper` : '';
    return appendNode;
  }, [prefixCls]);

  useIsomorphicLayoutEffect(() => {
    const parentElement = getAttachNode(getContainer);
    if (container) parentElement?.appendChild?.(container);

    return () => {
      if (container) parentElement?.removeChild?.(container);
    };
  }, [container, getContainer]);

  useImperativeHandle(ref, () => container as HTMLDivElement, [container]);

  return container ? createPortal(children, container!) : null;
});

Portal.displayName = 'Portal';

export default Portal;
