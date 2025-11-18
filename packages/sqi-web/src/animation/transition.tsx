import * as React from 'react';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import type { EndHandler } from 'react-transition-group/Transition';
import type { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

import { omit } from '@sqi-ui/utils';

import { ConfigContext } from '../config-provider/context';
import { useComposeRef } from '../_util/ref';
import { getReactNodeRef } from '../_util/dom';

export interface TransitionProps {
  name?: string;
  in?: boolean;
  appear?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  classNames?: string | CSSTransitionClassNames;
  timeout?: number | { appear?: number; enter?: number; exit?: number };
  children?: React.ReactElement;
  onEnter?: (node: HTMLElement, isAppearing?: boolean) => void;
  onEntering?: (node: HTMLElement, isAppearing?: boolean) => void;
  onEntered?: (node: HTMLElement, isAppearing?: boolean) => void;
  onExit?: (node: HTMLElement) => void;
  onExiting?: (node: HTMLElement) => void;
  onExited?: (node: HTMLElement) => void;
  addEndListener?: EndHandler<HTMLElement>;
}

const Transition = React.forwardRef<HTMLElement, TransitionProps>((props, ref) => {
  const { prefixCls } = React.useContext(ConfigContext);
  const {
    in: inProp,
    name,
    children,
    timeout = 300,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    ...restProps
  } = props;

  const nodeRef = React.useRef<HTMLElement>(null);
  const mergedRef = useComposeRef(nodeRef, getReactNodeRef(children), ref);

  const normalizedTransitionCallback =
    (callback?: (el: HTMLElement, isAppearing?: boolean) => void) => (maybeIsAppearing?: boolean) => {
      if (callback) {
        const node = nodeRef.current!;
        if (maybeIsAppearing === undefined) {
          callback(node);
        } else {
          callback(node, maybeIsAppearing);
        }
      }
    };

  const handleEnter = normalizedTransitionCallback(onEnter);
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExit = normalizedTransitionCallback(onExit);
  const handleExited = normalizedTransitionCallback(onExited);
  const handleExiting = normalizedTransitionCallback(onExiting);

  if (!children) return null;

  return (
    <CSSTransition
      {...restProps}
      in={inProp}
      timeout={timeout}
      nodeRef={mergedRef}
      classNames={`${prefixCls}-anim-${name}`}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      onExited={handleExited}
    >
      {(state, childrenProps: Record<string, any> = {}) => {
        const shouldHidden = state === 'exited' && !inProp;

        return React.cloneElement(children as any, {
          ref: mergedRef,
          className: clsx(
            (children.props as any).className,
            shouldHidden && `${prefixCls}-anim-base-hidden`,
            `${prefixCls}-anim-${name}`,
          ),
          // https://github.com/mui/material-ui/blob/57bd89297bd4b41bca3967c0df68cc2a9d848dd4/packages/mui-material/src/Fade/Fade.js#L131
          ...omit(childrenProps, ['ownerState']),
        });
      }}
    </CSSTransition>
  );
});

Transition.displayName = 'Transition';

export default Transition;
