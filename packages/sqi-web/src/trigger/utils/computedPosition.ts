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
  popper?: HTMLElement | null;
  arrow?: HTMLElement | null;
}

const defaultOptions: PositionOptions = {
  direction: 'bottom',
  enableFlip: true,
  enableShift: true,
};

export default function computedPosition(doms: ElementCollection, baseOptions: PositionOptions) {
  const { reference, popper, arrow } = doms;
  if (!reference || !popper) return;

  const options = { ...defaultOptions, ...baseOptions };

  const popperParentContainer = popper.parentNode as HTMLElement;
  const [translateX, translateY] = getTranslateValue(popperParentContainer);

  // Compatible scrollY see: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#notes
  // 😓 Are you sure support IE9 ?
  const scrollTop = window.pageYOffset;
  const scrollLeft = window.pageXOffset;

  // 定位元素及浮动元素的坐标
  const referencePosition = getElementPosition(reference, scrollLeft, scrollTop);
  const popperPosition = getElementPosition(popper, scrollLeft, scrollTop);

  // 两个元素的宽高差，当定位到居中时，popper 的 left 会相对于 reference 的 left - 差值/2，靠左靠右类推
  const widthDifference = referencePosition.width - popperPosition.width;
  const heightDifference = referencePosition.height - popperPosition.height;

  //  ================================================ 计算 x y 的基本偏移 ==================================
  // popper 现有的坐标，需要相对定位父容器偏移的距离（所以需要 + translate 父容器已偏移的值）
  let x = referencePosition.left - popperPosition.left + translateX;
  let y = referencePosition.top - popperPosition.top + translateY;

  const [side, align, vertical, horizontal] = formatDirection(options.direction);
  let currentSide = side;
  // 当定位到居中时，popper 的 left 会相对于 reference 的 left - 差值/2，靠左靠右类推
  const leftCorner = align === 'left' ? 0 : align === 'right' ? widthDifference : widthDifference / 2;
  // popper 的 right 与 reference 的 right 之间的距离
  const rightCorner = widthDifference - leftCorner;

  const topCorner = align === 'top' ? 0 : align === 'bottom' ? heightDifference : heightDifference / 2;
  const bottomCorner = heightDifference - topCorner;

  if (vertical) {
    x += leftCorner;
    // 垂直且 top 情况下，popper 元素在 reference 元素上方，所以 top 值需要 - reference 元素高度，bottom 类推
    y += side === 'top' ? -popperPosition.height : referencePosition.height;
  }

  if (horizontal) {
    x += side === 'left' ? -popperPosition.width : referencePosition.width;
    y += topCorner;
  }

  let scrollableParentEl = getScrollableParent(reference);
  // const scrollableParents: HTMLElement[] = [];
  let parentPosition: ElementPosition;

  const [offsetX, offsetY] = formatOffset(options.offset);

  const { height: arrowHeight = 0, width: arrowWidth = 0 } = arrow
    ? getElementPosition(arrow, scrollLeft, scrollTop)
    : {};

  let distanceX = 0;
  let distanceY = 0;
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

  // 箭头的位置一定要在算完 flip 之后
  compatibleArrow();

  // 外部传入的固定偏移必须在 detect 边缘碰撞之后再偏移，不然无法适应各个方向的正确偏移位置
  if (vertical) {
    y += currentSide === 'bottom' ? offsetY : -offsetY;
    // 同时 x y轴偏移的支持有待商酌，因为视觉上看起来很奇怪
    // x += offsetX;
  }
  if (horizontal) {
    x += currentSide === 'right' ? offsetX : -offsetX;
    // y += offsetY;
  }

  popperParentContainer.style.transform = genTransformStyle(x, y);
  popperParentContainer.setAttribute('data-direction', currentSide);

  /** 边缘碰撞检测并调整位置 */
  function detectEdge(position: ElementPosition) {
    const { top, bottom, left, right, height, width } = position;

    if (vertical) {
      // 目标元素相对最近的父元素的垂直中心点
      const referenceCenterY = Math.round(referencePosition.top - top + referencePosition.height / 2);
      const parentCenterY = Math.round(height / 2);

      if (options.enableFlip) {
        if (
          referencePosition.top - (popperPosition.height + offsetY + arrowHeight) < top &&
          referenceCenterY <= parentCenterY &&
          currentSide === 'top'
        ) {
          y += popperPosition.height + referencePosition.height;
          currentSide = 'bottom';
        } else if (
          referencePosition.bottom + popperPosition.height + offsetY + arrowHeight > height + top &&
          referenceCenterY >= parentCenterY &&
          currentSide === 'bottom'
        ) {
          y -= popperPosition.height + referencePosition.height;
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
          referencePosition.left - (popperPosition.width + offsetX + arrowWidth) < left &&
          elementCenterX < parentCenterX &&
          currentSide === 'left'
        ) {
          x += referencePosition.width + popperPosition.width;
          currentSide = 'right';
        } else if (
          referencePosition.right + popperPosition.width + offsetX + arrowWidth > right &&
          elementCenterX > parentCenterX &&
          currentSide === 'right'
        ) {
          x -= referencePosition.width + popperPosition.width;
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

  function compatibleArrow() {
    if (!arrow) return;

    // 箭头存在的情况下，popper 元素需再额外偏移箭头的宽/高
    if (vertical) {
      // 垂直方向：添加箭头高度偏移
      y += currentSide === 'bottom' ? arrowHeight : -arrowHeight;
    } else if (horizontal) {
      // 水平方向：添加箭头宽度偏移
      x += currentSide === 'right' ? arrowWidth : -arrowWidth;
    }

    const mainAlignment = options.direction.split('-')[1] || 'center';
    const transformCoords = { x: 0, y: 0 };
    // 根据翻转后的方向进行箭头的位置偏移
    if (vertical) {
      transformCoords.y = currentSide === 'top' ? popperPosition.height : -arrowHeight;

      if (mainAlignment === 'start') {
        transformCoords.x = 0;
      } else if (mainAlignment === 'center') {
        transformCoords.x = (popperPosition.width - arrowWidth) / 2;
      } else if (mainAlignment === 'end') {
        transformCoords.x = popperPosition.width - arrowWidth;
      }
    } else if (horizontal) {
      transformCoords.x = currentSide === 'left' ? popperPosition.width : -arrowWidth;

      if (mainAlignment === 'start') {
        transformCoords.y = 0;
      } else if (mainAlignment === 'center') {
        transformCoords.y = (popperPosition.height - arrowHeight) / 2;
      } else if (mainAlignment === 'end') {
        transformCoords.y = popperPosition.height - arrowHeight;
      }
    }

    arrow.style.transform = genTransformStyle(transformCoords.x, transformCoords.y);
  }
}
