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
  offset?: number | { x?: number; y?: number };
}

interface ElementCollection {
  reference?: HTMLElement | null;
  popup?: HTMLElement | null;
  arrow?: HTMLElement;
}

const getTransform = (x: number, y: number) => `translate(${x}px, ${y}px)`;

const defaultOptions: PositionOptions = {
  direction: 'bottom',
  enableFlip: true,
  enableShift: true,
};

export function computedPosition(doms: ElementCollection, baseOptions: PositionOptions) {
  const { reference, popup, arrow } = doms;

  if (!reference || !popup) return;

  const options = { ...defaultOptions, ...baseOptions };

  const popupParentContainer = popup.parentNode;
  const [translateX, translateY] = getTranslate(popupParentContainer as HTMLElement);

  // Compatible scrollY see: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#notes
  // 😓 Are you sure support IE9 ?
  const scrollTop = window.pageYOffset;
  const scrollLeft = window.pageXOffset;

  // 定位元素及浮动元素的坐标
  const referencePosition = getNodePosition(reference, scrollLeft, scrollTop);
  const popupPosition = getNodePosition(popup, scrollLeft, scrollTop);

  // 两个元素的宽高差，当定位到居中时，popup 的 left 会相对于 reference 的 left - 差值/2，靠左靠右类推
  const widthDifference = referencePosition.width - popupPosition.width;
  const heightDifference = referencePosition.height - popupPosition.height;

  //  ================================================ 计算 x y 的基本偏移 ==================================
  // popup 现有的坐标，需要相对定位父容器偏移的距离（所以需要 + translate 父容器已偏移的值）
  let x = referencePosition.left - popupPosition.left + translateX;
  let y = referencePosition.top - popupPosition.top + translateY;

  const [side, align, vertical, horizontal] = splitPlacement(options.direction);
  let currentSide = side;
  // 当定位到居中时，popup 的 left 会相对于 reference 的 left - 差值/2，靠左靠右类推
  const leftCorner = align === 'left' ? 0 : align === 'right' ? widthDifference : widthDifference / 2;
  // 浮popup 的 right 与 reference 的 right 之间的距离
  const rightCorner = widthDifference - leftCorner;

  const topCorner = align === 'top' ? 0 : align === 'bottom' ? heightDifference : heightDifference / 2;
  const bottomCorner = heightDifference - topCorner;

  if (vertical) {
    x += leftCorner;
    // 垂直且 top 情况下，popup 元素在 reference 元素上方，所以 top 值需要 - reference 元素高度，bottom 类推
    y += side === 'top' ? -popupPosition.height : referencePosition.height;
  }

  if (horizontal) {
    x += side === 'left' ? -popupPosition.width : referencePosition.width;
    y += topCorner;
  }

  let scrollableParentEl = getScrollableParent(reference);
  // const scrollableParents: HTMLElement[] = [];
  let parentPosition: NodePosition;

  let distanceX = 0;
  let distanceY = 0;

  const [offsetX, offsetY] = options.offset
    ? isObject(options.offset)
      ? [options.offset.x || 0, options.offset.y || 0]
      : [options.offset || 0, options.offset || 0]
    : [0, 0];

  const { height: arrowHeight = 0, width: arrowWidth = 0 } = arrow ? getNodePosition(arrow, scrollLeft, scrollTop) : {};

  if (vertical) {
    y += currentSide === 'bottom' ? offsetY : -offsetY;
    // 当处于 vertical 时，x 轴偏移的支持有待商酌（暂不支持）
    // 这种会造成一种问题：当 popup 开始平移时，实际上距离两侧还有 offsetX 的距离，会造成偏移误差
    // x += offsetX;
  }
  if (horizontal) {
    x += currentSide === 'right' ? offsetX : -offsetX;
    // y += offsetY;
  }

  while (scrollableParentEl) {
    // scrollableParents.push(scrollableParentEl);
    parentPosition = getNodePosition(scrollableParentEl, scrollLeft, scrollTop);
    checkPopper(parentPosition);
    scrollableParentEl = getScrollableParent(scrollableParentEl.parentNode as HTMLElement);
  }

  const { clientHeight, clientWidth } = document.documentElement;

  // 每次渲染需要结合可见的 document 的宽高
  checkPopper({
    top: scrollTop,
    bottom: scrollTop + clientHeight,
    left: scrollLeft,
    right: scrollLeft + clientWidth,
    height: clientHeight,
    width: clientWidth,
  });

  x = x - distanceX;
  y = y - distanceY;

  (popupParentContainer as HTMLElement).style.transform = getTransform(x, y);

  function checkPopper(position: NodePosition) {
    const { top, bottom, left, right, height, width } = position;

    if (vertical) {
      // 目标元素相对最近的父元素的垂直中心点
      const referenceCenterY = Math.round(referencePosition.top - top + referencePosition.height / 2);
      const parentCenterY = Math.round(height / 2);

      if (options.enableFlip) {
        if (
          referencePosition.top - (popupPosition.height + offsetY + arrowHeight) < top &&
          referenceCenterY <= parentCenterY &&
          currentSide === 'top'
        ) {
          y += popupPosition.height + referencePosition.height;
          currentSide = 'bottom';
        } else if (
          referencePosition.bottom + popupPosition.height + offsetY + arrowHeight > height + top &&
          referenceCenterY >= parentCenterY &&
          currentSide === 'bottom'
        ) {
          y -= popupPosition.height + referencePosition.height;
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
          referencePosition.left - (popupPosition.width + offsetX + arrowWidth) < left &&
          elementCenterX < parentCenterX &&
          currentSide === 'left'
        ) {
          x += referencePosition.width + popupPosition.width;

          currentSide = 'right';
        } else if (
          referencePosition.right + popupPosition.width + offsetX + arrowWidth > right &&
          elementCenterX > parentCenterX &&
          currentSide === 'right'
        ) {
          x -= referencePosition.width + popupPosition.width;

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
  // translate(701px, 346px) 会被转换成 matrix(1, 0, 0, 1, 701, 346)
  const transform = style.transform || style.webkitTransform || 'none';

  if (transform === 'none') return [0, 0];

  if (transform.match(/matrix\(([^)]+)\)/)) {
    const values = transform
      .match(/matrix\((.+)\)/)?.[1]
      ?.split(',')
      .map(Number) || [0, 0];
    if (values.length === 6) {
      // 提出其中的 x y 轴偏移，这里不考虑 3D 矩阵
      return [values[4], values[5]];
    }
  }

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
