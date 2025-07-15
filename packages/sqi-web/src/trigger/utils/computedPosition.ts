import type { TriggerDirection } from '../type';

interface PositionOptions {
  direction: TriggerDirection;
  /**
   * @description 是否自动翻转
   * @default true
   */
  flip?: boolean;
  arrow?: boolean;
}

interface ElementCollection {
  reference?: HTMLElement;
  floating?: HTMLElement;
  arrow?: HTMLElement;
}
export function computedPosition(doms: ElementCollection, options: PositionOptions) {
  const { reference, floating } = doms;
  if (!reference || !floating) return;
  // Compatible scrollY: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#notes
  // 😓 Are you Sure support IE9 ?
  const scrollTop = window.pageYOffset;
  const scrollLeft = window.pageXOffset;
  console.log(scrollTop, scrollLeft, options);
}
