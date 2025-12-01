import * as React from 'react';
import type { TransitionProps } from './transition';
import Transition from './transition';
import { createChainFn } from '../_util/createChainFn';

export interface CollapseProps extends TransitionProps {
  dimension?: DIMENSION;
  getDimensionValue?: (dimension: DIMENSION, el: Element) => number;
}

export type DIMENSION = 'height' | 'width';

const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight'],
};

function getStyle(element: HTMLElement, prop: string) {
  return window.getComputedStyle(element).getPropertyValue(prop);
}

function addStyle(element: HTMLElement, prop: string, value: string | number) {
  element.style[prop as any] = typeof value === 'number' ? `${value}px` : value;
}

function get(el: HTMLElement, property: string) {
  return el[property as keyof HTMLElement] as string | number;
}

function triggerBrowserReflow(element: HTMLElement) {
  void element.offsetHeight;
}

function capitalizeDimension(dimension: DIMENSION): string {
  return dimension.charAt(0).toUpperCase() + dimension.slice(1);
}

function defaultGetDimensionValue(dimension: DIMENSION, el: HTMLElement): number {
  const value = get(el, `offset${capitalizeDimension(dimension)}`) ?? 0;
  const margins = MARGINS[dimension];
  return (
    Number(value) +
    (parseInt(getStyle(el, margins[0]), 10) || 0) +
    (parseInt(getStyle(el, margins[1]) as string, 10) || 0)
  );
}

function getScrollDimensionValue(el: HTMLElement, dimension: DIMENSION) {
  const value = get(el, `scroll${capitalizeDimension(dimension)}`);
  return `${value}px`;
}

const Collapse = React.forwardRef<HTMLElement, CollapseProps>((props, ref) => {
  const {
    timeout = 200,
    dimension = 'height',
    getDimensionValue = defaultGetDimensionValue,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    ...restProps
  } = props;

  const cacheDimensionSize = React.useRef<string>('');

  const handleEnter = React.useCallback(
    (el: HTMLElement) => {
      // 记录 el 原本的样式，当结束时恢复，防止 js 操控后覆盖原有样式
      cacheDimensionSize.current = el.style[dimension];
      addStyle(el, dimension, 0);
    },
    [dimension],
  );

  const handleEntering = React.useCallback(
    (el: HTMLElement) => {
      // 如果是不定尺寸 auto 则手动设置具体尺寸
      addStyle(el, dimension, cacheDimensionSize.current || getScrollDimensionValue(el, dimension));
    },
    [dimension],
  );

  const handleEntered = React.useCallback(
    (el: HTMLElement) => {
      addStyle(el, dimension, cacheDimensionSize.current);
    },
    [dimension],
  );

  const handleExit = React.useCallback(
    (el: HTMLElement) => {
      const value = getDimensionValue(dimension, el);
      addStyle(el, dimension, `${value}px`);
      triggerBrowserReflow(el);
    },
    [dimension, getDimensionValue],
  );

  const handleExiting = React.useCallback(
    (el: HTMLElement) => {
      addStyle(el, dimension, 0);
    },
    [dimension],
  );

  const handleExited = React.useCallback(
    (el: HTMLElement) => {
      addStyle(el, dimension, cacheDimensionSize.current);
    },
    [dimension],
  );

  return (
    <Transition
      ref={ref}
      {...restProps}
      timeout={timeout}
      name="collapse"
      onEnter={createChainFn(handleEnter, onEnter)}
      onEntering={createChainFn(handleEntering, onEntering)}
      onEntered={createChainFn(handleEntered, onEntered)}
      onExit={createChainFn(handleExit, onExit)}
      onExiting={createChainFn(handleExiting, onExiting)}
      onExited={createChainFn(handleExited, onExited)}
    />
  );
});

Collapse.displayName = 'Collapse';

export default Collapse;
