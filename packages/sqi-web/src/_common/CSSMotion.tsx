import React, { forwardRef, useContext, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { useTransitionState, type TransitionOptions, type TransitionState } from 'react-transition-state';
import { useMergeProps } from '@sqi-ui/hooks';
import { isFunction } from '@sqi-ui/utils';
import { ConfigContext } from '../config-provider/context';

export interface ChildCallbackResult extends TransitionState {
  className: string;
  toggle: (toEnter?: boolean) => void;
}

export interface MotionProps extends TransitionOptions {
  prefixCls?: string;
  name?: string;
  children: (result: ChildCallbackResult) => React.ReactNode;
}

export interface CSSMotionInstance {
  toggle: (toEnter?: boolean) => void;
}

const defaultProps: TransitionOptions = {
  timeout: 0,
};

const CSSMotion = forwardRef<CSSMotionInstance, MotionProps>((baseProps: MotionProps, ref) => {
  const ctx = useContext(ConfigContext);
  const { children, name, prefixCls, ...restProps } = useMergeProps(baseProps, defaultProps);
  const [state, toggle] = useTransitionState(restProps);

  useImperativeHandle(ref, () => ({
    toggle,
  }));

  const mergedPrefixCls = `${prefixCls || ctx.prefixCls}${name ? `-${name}` : ''}`;

  const className = clsx([`${mergedPrefixCls}-motion`], {
    [`${mergedPrefixCls}-motion-${state.status}`]: state.status,
  });

  if (isFunction(children)) {
    return state.isMounted
      ? children({
          ...state,
          className,
          toggle,
        })
      : null;
  } else {
    return children;
  }
});

CSSMotion.displayName = 'CSSMotion';

export default CSSMotion;
