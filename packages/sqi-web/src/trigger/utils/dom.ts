export interface ElementPosition {
  width: number;
  height: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export function getElementPosition(el: HTMLElement, scrollLeft: number, scrollTop: number): ElementPosition {
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

export function getElementPositionWithScrollbar(
  el: HTMLElement,
  scrollLeft: number,
  scrollTop: number,
): ElementPosition {
  // 获取元素的整体位置（包括边框）
  const rect = getElementPosition(el, scrollLeft, scrollTop);

  // 计算滚动容器的内容区域（减去滚动条）
  const contentWidth = el.clientWidth;
  const contentHeight = el.clientHeight;

  // 计算内容区域的位置（考虑滚动条）
  return {
    ...rect,
    width: contentWidth,
    height: contentHeight,
    // 右边界 = 左边界 + 内容宽度
    right: rect.left + contentWidth,
    // 下边界 = 上边界 + 内容高度
    bottom: rect.top + contentHeight,
  };
}

export function getScrollableParent(element: HTMLElement) {
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

export function calcMaxDistance(currentDistance: number, previousDistance: number) {
  if (Math.round(Math.abs(currentDistance)) > Math.round(Math.abs(previousDistance))) {
    return currentDistance;
  }

  return previousDistance;
}

export const genTransformStyle = (x: number, y: number) => `translate3d(${x}px, ${y}px, 0)`;

export function getTranslateValue(element: Element): [number, number] {
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
