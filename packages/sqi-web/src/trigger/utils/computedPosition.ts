import { isObject } from '@sqi-ui/utils';
import type { Prettify } from '../../_util/type';
import type { Alignment, Side, TriggerDirection } from '../type';

interface PositionOptions {
  direction: TriggerDirection;
  /**
   * @description 开启自动翻转
   * @default true
   */
  enableFlip?: boolean;
  /**
   * @description 开启自动位移
   * @default true
   */
  enableShift?: boolean;
  offset?:
    | number
    | {
        x?: number;
        y?: number;
      };
}

interface ElementCollection {
  reference?: HTMLElement | null;
  floating?: HTMLElement | null;
  arrow?: HTMLElement;
}

const getTransform = (x: number, y: number) => `translate(${x}px, ${y}px)`;

const defaultOptions: PositionOptions = {
  direction: 'bottom',
  enableFlip: true,
  enableShift: true,
};

export function computedPosition(doms: ElementCollection, baseOptions: PositionOptions) {
  const { reference, floating, arrow } = doms;
  if (!reference || !floating) return;

  const options = { ...defaultOptions, ...baseOptions };

  const { clientHeight, clientWidth } = document.documentElement;
  const floatingParentContainer = floating.parentNode;
  const [translateX, translateY] = getTranslate(floatingParentContainer as HTMLElement);

  // Compatible scrollY see: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#notes
  // 😓 Are you sure support IE9 ?
  const scrollTop = window.pageYOffset;
  const scrollLeft = window.pageXOffset;

  // 定位元素及浮动元素的坐标
  const referencePosition = getNodePosition(reference, scrollLeft, scrollTop);
  const floatingPosition = getNodePosition(floating, scrollLeft, scrollTop);

  // 两个元素的宽高差，当定位到居中时，floating 的 left 会相对于 reference 的 left - 差值/2，靠左靠右类推
  const widthDifference = referencePosition.width - floatingPosition.width;
  const heightDifference = referencePosition.height - floatingPosition.height;

  //  ================================================ 计算 x y 的基本偏移 ==================================
  // floating 现有的坐标，需要相对定位父容器偏移的距离
  let x = referencePosition.left - floatingPosition.left + translateX;
  let y = referencePosition.top - floatingPosition.top + translateY;

  const [side, align, vertical, horizontal] = splitPlacement(options.direction);
  let currentSide = side;
  // 当定位到居中时，floating 的 left 会相对于 reference 的 left - 差值/2，靠左靠右类推
  const leftCorner = align === 'left' ? 0 : align === 'right' ? widthDifference : widthDifference / 2;
  // 浮floating 的 right 与 reference 的 right 之间的距离
  const rightCorner = widthDifference - leftCorner;

  const topCorner = align === 'top' ? 0 : align === 'bottom' ? heightDifference : heightDifference / 2;
  const bottomCorner = heightDifference - topCorner;

  if (vertical) {
    x += leftCorner;
    // 垂直且 top 情况下，floating 元素在 reference 元素上方，所以 top 值需要 - reference 元素高度，bottom 类推
    y += side === 'top' ? -floatingPosition.height : referencePosition.height;
  }

  if (horizontal) {
    x += side === 'left' ? -floatingPosition.width : referencePosition.width;
    y += topCorner;
  }

  let scrollableParentEl = getScrollableParent(reference);
  const scrollableParents: HTMLElement[] = [];
  let parentPosition: NodePosition;

  let distanceX = 0;
  let distanceY = 0;

  const [offsetX, offsetY] = options.offset
    ? isObject(options.offset)
      ? [options.offset.x || 0, options.offset.y || 0]
      : [options.offset || 0, options.offset || 0]
    : [0, 0];

  const { height: arrowHeight = 0, width: arrowWidth = 0 } = arrow ? getNodePosition(arrow, scrollLeft, scrollTop) : {};

  if (vertical) y += currentSide === 'bottom' ? offsetY : -offsetY;
  if (horizontal) x += currentSide === 'right' ? offsetX : -offsetX;

  x = x - distanceX;
  y = y - distanceY;

  while (scrollableParentEl) {
    scrollableParents.push(scrollableParentEl);
    parentPosition = getNodePosition(scrollableParentEl, scrollLeft, scrollTop);
    checkPopper(parentPosition);
    scrollableParentEl = getScrollableParent(scrollableParentEl.parentNode as HTMLElement);
  }

  checkPopper({
    top: scrollTop,
    bottom: scrollTop + clientHeight,
    left: scrollLeft,
    right: scrollLeft + clientWidth,
    height: clientHeight,
    width: clientWidth,
  });

  // console.log(
  //   referencePosition,
  //   floatingPosition,
  //   clientHeight,
  //   clientWidth,
  //   floatingParentContainer,
  //   translateX,
  //   translateY,
  // );

  console.log(x, y);

  (floatingParentContainer as HTMLElement).style.transform = getTransform(x, y);

  function checkPopper(position: NodePosition) {
    const { top, bottom, left, right, height, width } = position;

    if (vertical) {
      // 目标元素相对最近的父元素的垂直中心点
      const referenceCenterY = Math.round(referencePosition.top - top + referencePosition.height / 2);
      const parentCenterY = Math.round(height / 2);

      if (options.enableFlip) {
        if (
          referencePosition.top - (floatingPosition.height + offsetY + arrowHeight) < top &&
          referenceCenterY <= parentCenterY &&
          currentSide === 'top'
        ) {
          y += floatingPosition.height + referencePosition.height;
          currentSide = 'bottom';
        } else if (
          referencePosition.bottom + floatingPosition.height + offsetY + arrowHeight > height + top &&
          referenceCenterY >= parentCenterY &&
          currentSide === 'bottom'
        ) {
          y -= floatingPosition.height + referencePosition.height;
          currentSide = 'top';
        }
      }

      if (options.enableShift) {
        if (referencePosition.left + leftCorner < left) {
          distanceX = getMaxDistance(
            referencePosition.right - arrowWidth > left
              ? referencePosition.left + leftCorner - left
              : -referencePosition.width + leftCorner + arrowWidth,
            distanceX,
          );
        }

        if (referencePosition.right - rightCorner > right) {
          distanceX = getMaxDistance(
            referencePosition.left + arrowWidth < right
              ? referencePosition.right - rightCorner - right
              : referencePosition.width - rightCorner - arrowWidth,
            distanceX,
          );
        }
      }
    }

    if (horizontal) {
      const elementCenterX = Math.round(referencePosition.left - left + referencePosition.width / 2);
      const parentCenterX = Math.round(width / 2);

      if (options.enableFlip) {
        if (
          referencePosition.left - (floatingPosition.width + offsetX + arrowWidth) < left &&
          elementCenterX < parentCenterX &&
          currentSide === 'left'
        ) {
          x += referencePosition.width + floatingPosition.width;

          currentSide = 'right';
        } else if (
          referencePosition.right + floatingPosition.width + offsetX + arrowWidth > right &&
          elementCenterX > parentCenterX &&
          currentSide === 'right'
        ) {
          x -= referencePosition.width + floatingPosition.width;

          currentSide = 'left';
        }
      }

      if (options.enableShift) {
        if (referencePosition.top + topCorner < top) {
          distanceY = getMaxDistance(
            referencePosition.bottom - arrowHeight > top
              ? referencePosition.top + topCorner - top
              : -referencePosition.height + topCorner + arrowHeight,
            distanceY,
          );
        }

        if (referencePosition.bottom - bottomCorner > bottom) {
          distanceY = getMaxDistance(
            referencePosition.top + arrowHeight < bottom
              ? referencePosition.bottom - bottomCorner - bottom
              : referencePosition.height - bottomCorner - arrowHeight,
            distanceY,
          );
        }
      }
    }
  }
}

interface NodePosition {
  width: number;
  height: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}

function getNodePosition(el: HTMLElement, scrollLeft: number, scrollTop: number): Prettify<NodePosition> {
  const { top, left, width, height } = el.getBoundingClientRect();
  const elementTop = top + scrollTop;
  const elementLeft = left + scrollLeft;

  return {
    width,
    height,
    top: elementTop,
    bottom: elementTop + height,
    left: elementLeft,
    right: elementLeft + width,
  };
}

function getTranslate(element: Element) {
  if (!element) return [0, 0];

  const style = window.getComputedStyle(element);
  const transform = style.transform || style.webkitTransform || 'none';

  if (transform === 'none') return [0, 0];

  // 提取 transform:translate() 的偏移值
  const [, x = 0, y = 0] = (transform.match(/translate\((.*?)px,\s(.*?)px\)/) || []).map((string) => Number(string));

  return [x, y];
}

type AlignRelative = 'left' | 'right' | 'top' | 'bottom'; // 在主侧边为垂直方向时为 left right，在主侧边为水平方向时为 top bottom
function splitPlacement(placement: TriggerDirection): [Side, AlignRelative, boolean, boolean] {
  const splitPlacement = placement.split('-');
  const side = (splitPlacement[0] || 'bottom') as Side;
  const align = (splitPlacement[1] || 'center') as Alignment;

  let relativeAlign: AlignRelative | undefined = undefined;

  const isVertical = side === 'top' || side === 'bottom';
  const isHorizontal = side === 'left' || side === 'right';

  if (isVertical) {
    if (align === 'start') relativeAlign = 'left';
    if (align === 'end') relativeAlign = 'right';
  }

  if (isHorizontal) {
    if (align === 'start') relativeAlign = 'top';
    if (align === 'end') relativeAlign = 'bottom';
  }

  return [side, relativeAlign!, isVertical, isHorizontal];
}

function getScrollableParent(element: HTMLElement) {
  if (!element || element.tagName === 'HTML') return;

  const style = window.getComputedStyle(element);
  const isScrollable = (string: string) => ['auto', 'scroll'].includes(string);

  if (
    (element.clientHeight < element.scrollHeight && isScrollable(style.overflowX)) ||
    (element.clientWidth < element.scrollWidth && isScrollable(style.overflowY))
  ) {
    return element;
  }

  return getScrollableParent(element.parentNode as HTMLElement);
}

function getMaxDistance(currentDistance: number, previousDistance: number) {
  if (Math.round(Math.abs(currentDistance)) > Math.round(Math.abs(previousDistance))) {
    return currentDistance;
  }

  return previousDistance;
}
