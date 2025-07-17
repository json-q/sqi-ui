import React, { forwardRef, useState, useEffect, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from '@sqi-ui/hooks';
import { canUseDom, isFunction, isString } from '@sqi-ui/utils';

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

  const [isMounted, setIsMounted] = useState(false);
  const [containerWrapper, setContainerWrapper] = useState<HTMLDivElement | null>(null);
  const [customizeParent, setCustomizeParent] = useState<HTMLElement | null>(() => getAttachNode(getContainer));
  const mergedParentNode = customizeParent || document.body;

  const shouldRender = open || isMounted;

  useEffect(() => {
    const newParentNode = getAttachNode(getContainer);
    setCustomizeParent(newParentNode || null);
  }, [getContainer]);

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
    if (!isBrowser) return;
    if (open) {
      if (!containerWrapper) setContainerWrapper(() => createContainerNode());
    } else {
      setContainerWrapper(null);
    }
  }, [open]);

  useImperativeHandle(ref, () => containerWrapper as HTMLDivElement, [containerWrapper]);

  useIsomorphicLayoutEffect(() => {
    // 兼容显示隐藏时（非销毁）的滚动条状态
    // Portal 暂时没做 cache 节点，因此使用此方式来兼容和 CSSMotion 的隐藏交互
    if (autoLockScroll === false) {
      document.body.style.overflow = '';
    } else if (autoLockScroll && containerWrapper) {
      document.body.style.overflow = 'hidden';
    }
  }, [autoLockScroll, containerWrapper]);

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser || !containerWrapper) return;

    const attachToParent = () => {
      if (!containerWrapper.parentNode) {
        mergedParentNode.appendChild(containerWrapper);
        // if (autoLockScroll) document.body.style.overflow = 'hidden';
        setIsMounted(true);
      }
    };

    const detachFromParent = () => {
      if (containerWrapper.parentNode) {
        containerWrapper.parentNode.removeChild(containerWrapper);
        if (autoLockScroll) document.body.style.overflow = '';
        setIsMounted(false);
      }
    };

    if (open) attachToParent();
    else detachFromParent();

    return () => {
      if (containerWrapper.parentNode) {
        detachFromParent();
      }
    };
  }, [open, containerWrapper]);

  if (!(shouldRender && children)) return null;

  return containerWrapper ? createPortal(children, containerWrapper) : null;
});

Portal.displayName = 'Portal';

export default Portal;
