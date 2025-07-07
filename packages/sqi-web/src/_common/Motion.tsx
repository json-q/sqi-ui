import React, { useContext } from 'react';
import clsx from 'clsx';
import { useTransitionState, type TransitionOptions, type TransitionState } from 'react-transition-state';
import { useMergeProps } from '@sqi-ui/hooks';
import { ConfigContext } from '../config-provider/context';
import { isFunction } from '@sqi-ui/utils';

export interface ChildCallbackResult extends TransitionState {
  className?: string;
  toggle?: (toEnter?: boolean) => void;
}

export interface MotionProps extends TransitionOptions {
  prefixCls?: string;
  children: (result: ChildCallbackResult) => React.ReactNode;
}

const defaultProps: TransitionOptions = {
  timeout: 250,
};
const Motion = (baseProps: MotionProps) => {
  const { prefixCls } = useContext(ConfigContext);
  const { children, ...restProps } = useMergeProps(baseProps, defaultProps);
  const [state, toggle] = useTransitionState(restProps);

  const mergedPrefixCls = restProps.prefixCls || prefixCls;

  const className = clsx([`${mergedPrefixCls}-motion`], {
    [`${mergedPrefixCls}-motion-${state.status}`]: state.status,
  });

  if (isFunction(children)) {
    return children({
      ...state,
      className,
      toggle,
    });
  } else {
    return children;
  }
};

export default Motion;
