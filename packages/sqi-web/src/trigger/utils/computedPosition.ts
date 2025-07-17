import type { TriggerDirection } from '../type';
import {
  getTranslateValue,
  getElementPosition,
  type ElementPosition,
  getScrollableParent,
  genTransformStyle,
  calcMaxDistance,
} from './dom';
import { formatDirection, formatOffset } from './format';

export interface PositionOptions {
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

const defaultOptions: PositionOptions = {
  direction: 'bottom',
  enableFlip: true,
  enableShift: true,
};

export default function computedPosition(doms: ElementCollection, baseOptions: PositionOptions) {
  const { reference, popup, arrow } = doms;
  if (!reference || !popup) return;

  const options = { ...defaultOptions, ...baseOptions };

  const popupParentContainer = popup.parentNode as HTMLElement;
  const [translateX, translateY] = getTranslateValue(popupParentContainer);

  // Compatible scrollY see: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#notes
  // 😓 Are you sure support IE9 ?
  const scrollTop = window.pageYOffset;
  const scrollLeft = window.pageXOffset;

  // 定位元素及浮动元素的坐标
  const referencePosition = getElementPosition(reference, scrollLeft, scrollTop);
  const popupPosition = getElementPosition(popup, scrollLeft, scrollTop);

  // 两个元素的宽高差，当定位到居中时，popup 的 left 会相对于 reference 的 left - 差值/2，靠左靠右类推
  const widthDifference = referencePosition.width - popupPosition.width;
  const heightDifference = referencePosition.height - popupPosition.height;

  //  ================================================ 计算 x y 的基本偏移 ==================================
  // popup 现有的坐标，需要相对定位父容器偏移的距离（所以需要 + translate 父容器已偏移的值）
  let x = referencePosition.left - popupPosition.left + translateX;
  let y = referencePosition.top - popupPosition.top + translateY;

  const [side, align, vertical, horizontal] = formatDirection(options.direction);
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
  let parentPosition: ElementPosition;

  let distanceX = 0;
  let distanceY = 0;

  const [offsetX, offsetY] = formatOffset(options.offset);

  const { height: arrowHeight = 0, width: arrowWidth = 0 } = arrow
    ? getElementPosition(arrow, scrollLeft, scrollTop)
    : {};

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
    parentPosition = getElementPosition(scrollableParentEl, scrollLeft, scrollTop);
    detectEdge(parentPosition);
    scrollableParentEl = getScrollableParent(scrollableParentEl.parentNode as HTMLElement);
  }

  const { clientHeight, clientWidth } = document.documentElement;

  // 每次渲染需要结合可见的 document 的宽高
  detectEdge({
    top: scrollTop,
    bottom: scrollTop + clientHeight,
    left: scrollLeft,
    right: scrollLeft + clientWidth,
    height: clientHeight,
    width: clientWidth,
  });

  x = x - distanceX;
  y = y - distanceY;

  popupParentContainer.style.transform = genTransformStyle(x, y);

  /** 边缘碰撞检测并调整位置 */
  function detectEdge(position: ElementPosition) {
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
          distanceX = calcMaxDistance(
            referencePosition.right - arrowWidth > left
              ? referencePosition.left + leftCorner - left
              : -referencePosition.width + leftCorner + arrowWidth,
            distanceX,
          );
        }

        if (referencePosition.right - rightCorner > right) {
          distanceX = calcMaxDistance(
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
          distanceY = calcMaxDistance(
            referencePosition.bottom - arrowHeight > top
              ? referencePosition.top + topCorner - top
              : -referencePosition.height + topCorner + arrowHeight,
            distanceY,
          );
        }

        if (referencePosition.bottom - bottomCorner > bottom) {
          distanceY = calcMaxDistance(
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
