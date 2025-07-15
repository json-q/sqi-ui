import React, { cloneElement, forwardRef, useRef, useState, isValidElement } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from '@sqi-ui/hooks';
import { canUseDom, isFunction, isString } from '@sqi-ui/utils';
import { getReactNodeRef } from '../_util/dom';
import { useComposeRef } from '../_util/ref';

export type PortalContainer = string | (() => HTMLElement | null) | HTMLElement | null;

export interface PortalProps {
  prefixCls?: string;
  /**
   * @description 指定挂载的节点，默认为 document.body
   * @default document.body
   */
  getContainer?: PortalContainer;
  children: React.ReactNode;
  open?: boolean;
  autoLockScroll?: boolean;
  rootStyle?: React.CSSProperties;
}

const isBrowser = canUseDom();

function getAttachNode(getContainer: PortalProps['getContainer']): HTMLElement | null {
  if (!isBrowser) return null;

  if (isString(getContainer)) return document.querySelector(getContainer);
  if (isFunction(getContainer)) return getContainer();
  if (getContainer instanceof HTMLElement) return getContainer;

  return document.body;
}

const Portal = forwardRef<HTMLDivElement, PortalProps>((props, ref) => {
  const { getContainer, prefixCls, children, open = true, rootStyle, autoLockScroll = true } = props;

  const childRef = isValidElement(children) ? getReactNodeRef(children) : null;
  const mergedRef = useComposeRef(childRef, ref);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const shouldRender = open || isMounted;

  const createContainerNode = () => {
    if (!isBrowser) return null;

    const node = document.createElement('div');
    if (prefixCls) {
      node.className = `${prefixCls}-portal-wrapper`;
    }

    if (rootStyle) {
      Object.assign(node.style, rootStyle);
    }

    node.setAttribute('data-portal', 'true');
    return node;
  };

  useIsomorphicLayoutEffect(() => {
    if (isBrowser && open && !containerRef.current) {
      containerRef.current = createContainerNode();
    }
  }, [open]);

  useIsomorphicLayoutEffect(() => {
    // 兼容显示隐藏时（非销毁）的滚动条状态
    // Portal 暂时没做 cache 节点，因此使用此方式来兼容和 CSSMotion 的隐藏交互
    if (autoLockScroll === false) {
      document.body.style.overflow = '';
    } else if (autoLockScroll && containerRef.current) {
      document.body.style.overflow = 'hidden';
    }
  }, [autoLockScroll]);

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser || !containerRef.current) return;

    const node = containerRef.current;
    const parent = getAttachNode(getContainer) || document.body;

    const attachToParent = () => {
      if (!node.parentNode) {
        parent.appendChild(node);
        // if (autoLockScroll) document.body.style.overflow = 'hidden';
        setIsMounted(true);
      }
    };

    const detachFromParent = () => {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
        if (autoLockScroll) document.body.style.overflow = '';
        setIsMounted(false);
      }
    };

    if (open) attachToParent();
    else detachFromParent();

    return () => {
      if (node.parentNode) {
        detachFromParent();
      }
    };
  }, [open, getContainer]);

  let content: React.ReactNode = null;
  if (shouldRender && children) {
    if (isValidElement(children)) {
      content = cloneElement(children as any, { ref: mergedRef });
    } else {
      content = children;
      if (process.env.NODE_ENV !== 'production' && ref) {
        console.error('[@sqi-web/ui] Portal: a `string` children is not support ref');
      }
    }
  }

  return containerRef.current ? createPortal(content, containerRef.current) : null;
});

Portal.displayName = 'Portal';

export default Portal;
