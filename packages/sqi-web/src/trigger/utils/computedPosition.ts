import type { TriggerDirection } from '../type';
import {
  getTranslateValue,
  getElementPosition,
  type ElementPosition,
  getScrollableParent,
  genTransformStyle,
  calcMaxDistance,
  getElementPositionWithScrollbar,
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

  const [offsetX, offsetY] = formatOffset(options.offset);

  const { height: arrowHeight = 0, width: arrowWidth = 0 } = arrow
    ? getElementPosition(arrow, scrollLeft, scrollTop)
    : {};

  let distanceX = 0;
  let distanceY = 0;
  // const scrollableParents: HTMLElement[] = [];
  while (scrollableParentEl) {
    const parentPosition = getElementPositionWithScrollbar(scrollableParentEl, scrollLeft, scrollTop);
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

  // 设置 attribute 必须在箭头计算前边，因为箭头的样式依赖此方向
  const normalAlign = options.direction.split('-')[1];
  popperParentContainer.setAttribute('data-direction', `${currentSide}${normalAlign ? `-${normalAlign}` : ''}`);

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

  /** 边缘碰撞检测并调整位置 */
  function detectEdge(position: ElementPosition) {
    const { top, bottom, left, right, height, width } = position;

    if (vertical) {
      const referenceCenterY = Math.round(referencePosition.top - top + referencePosition.height / 2);
      const parentCenterY = Math.round(height / 2);

      if (options.enableFlip) {
        handleVerticalFlip(referenceCenterY, parentCenterY);
      }

      if (options.enableShift) {
        handleVerticalShift();
      }
    }

    if (horizontal) {
      const elementCenterX = Math.round(referencePosition.left - left + referencePosition.width / 2);
      const parentCenterX = Math.round(width / 2);

      if (options.enableFlip) {
        handleHorizontalFlip(elementCenterX, parentCenterX);
      }

      if (options.enableShift) {
        handleHorizontalShift();
      }
    }

    function handleVerticalFlip(refCenterY: number, parentCenterY: number) {
      const isTopEdge = referencePosition.top - (popperPosition.height + offsetY + arrowHeight) < top;
      const isBottomEdge = referencePosition.bottom + popperPosition.height + offsetY + arrowHeight > height + top;

      if (isTopEdge && refCenterY <= parentCenterY && currentSide === 'top') {
        y += popperPosition.height + referencePosition.height;
        currentSide = 'bottom';
      } else if (isBottomEdge && refCenterY >= parentCenterY && currentSide === 'bottom') {
        y -= popperPosition.height + referencePosition.height;
        currentSide = 'top';
      }
    }

    function handleVerticalShift() {
      // 左边界检测
      if (referencePosition.left + leftCorner < left) {
        const overflowLeft = referencePosition.left + leftCorner - left;
        const safeOverflow =
          referencePosition.right - arrowWidth > left
            ? overflowLeft
            : -referencePosition.width + leftCorner + arrowWidth;

        distanceX = calcMaxDistance(safeOverflow, distanceX);
      }

      // 右边界检测
      if (referencePosition.right - rightCorner > right) {
        const overflowRight = referencePosition.right - rightCorner - right;
        const safeOverflow =
          referencePosition.left + arrowWidth < right
            ? overflowRight
            : referencePosition.width - rightCorner - arrowWidth;

        distanceX = calcMaxDistance(safeOverflow, distanceX);
      }
    }

    function handleHorizontalFlip(refCenterX: number, parentCenterX: number) {
      const isLeftEdge = referencePosition.left - (popperPosition.width + offsetX + arrowWidth) < left;
      const isRightEdge = referencePosition.right + popperPosition.width + offsetX + arrowWidth > right;

      if (isLeftEdge && refCenterX < parentCenterX && currentSide === 'left') {
        x += referencePosition.width + popperPosition.width;
        currentSide = 'right';
      } else if (isRightEdge && refCenterX > parentCenterX && currentSide === 'right') {
        x -= referencePosition.width + popperPosition.width;
        currentSide = 'left';
      }
    }

    function handleHorizontalShift() {
      // 上边界检测
      if (referencePosition.top + topCorner < top) {
        const overflowTop = referencePosition.top + topCorner - top;
        const safeOverflow =
          referencePosition.bottom - arrowHeight > top
            ? overflowTop
            : -referencePosition.height + topCorner + arrowHeight;

        distanceY = calcMaxDistance(safeOverflow, distanceY);
      }

      // 下边界检测
      if (referencePosition.bottom - bottomCorner > bottom) {
        const overflowBottom = referencePosition.bottom - bottomCorner - bottom;
        const safeOverflow =
          referencePosition.top + arrowHeight < bottom
            ? overflowBottom
            : referencePosition.height - bottomCorner - arrowHeight;

        distanceY = calcMaxDistance(safeOverflow, distanceY);
      }
    }
  }

  function compatibleArrow() {
    if (!arrow) return;

    // 获取最新的箭头宽高（在匹配到对应方向的 css 后重新得到最新宽高）
    const { height: arrowHeight, width: arrowWidth } = getElementPosition(arrow, scrollLeft, scrollTop);

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

    if (vertical) {
      transformCoords.y = currentSide === 'top' ? popperPosition.height : -arrowHeight;

      const maxX = popperPosition.width - arrowWidth;
      const minX = 0;

      if (mainAlignment === 'start') {
        transformCoords.x = Math.max(minX, Math.min(maxX, distanceX));
      } else if (mainAlignment === 'center') {
        const centerX = (popperPosition.width - arrowWidth) / 2;
        transformCoords.x = Math.max(minX, Math.min(maxX, centerX + distanceX));
      } else if (mainAlignment === 'end') {
        const endX = popperPosition.width - arrowWidth;
        transformCoords.x = Math.max(minX, Math.min(maxX, endX + distanceX));
      }
    } else if (horizontal) {
      transformCoords.x = currentSide === 'left' ? popperPosition.width : -arrowWidth;

      const maxY = popperPosition.height - arrowHeight;
      const minY = 0;

      if (mainAlignment === 'start') {
        transformCoords.y = Math.max(minY, Math.min(maxY, distanceY));
      } else if (mainAlignment === 'center') {
        const centerY = (popperPosition.height - arrowHeight) / 2;
        transformCoords.y = Math.max(minY, Math.min(maxY, centerY + distanceY));
      } else if (mainAlignment === 'end') {
        const endY = popperPosition.height - arrowHeight;
        transformCoords.y = Math.max(minY, Math.min(maxY, endY + distanceY));
      }
    }

    arrow.style.transform = genTransformStyle(transformCoords.x, transformCoords.y);
  }
}
