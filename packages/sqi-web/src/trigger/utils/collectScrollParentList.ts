export type DefaultElementCollection = Array<Element | Window>;
export type ElementCollection = Array<Element | Window | VisualViewport>;

export function collectScrollParentList(
  element: Element | null,
  list: DefaultElementCollection = [],
): ElementCollection {
  if (!element) return [];

  const scrollParent = getScrollParent(element);
  const isBody = scrollParent === element.ownerDocument.body;

  if (isBody) {
    const viewport = window.visualViewport ? [window.visualViewport] : [];
    const scrollBody = isScrollParent(scrollParent) ? [scrollParent] : [];

    return [...list, window, ...viewport, ...scrollBody];
  }

  // 一直获取父级元素，直到 body 中止
  const nextScrollParent = collectScrollParentList(getParentNode(scrollParent));
  return [...list, scrollParent, ...nextScrollParent];
}

function getParentNode(element: Element): Element {
  if (element.nodeName.toLowerCase() === 'html') {
    return element;
  }

  return element.parentNode as HTMLElement;
}

function isScrollParent(element: Element): boolean {
  const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
  // hidden clip 虽然隐藏了滚动条，但仍是滚动容器，其中 hidden 可以使用 js 去操控滚动
  // display: contents 会使元素自身不生成任何盒子，即该元素本身在布局中不存在，因此 contents 的元素无法视为滚动容器
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['contents'].includes(display);
}

const lastTraversableNodeNames = new Set(['html', 'body', '#document']);

function getScrollParent(node: Element): Element {
  // 若元素本身是根节点，则统一以 body 为滚动容器
  if (lastTraversableNodeNames.has(node.nodeName.toLowerCase())) {
    return node.ownerDocument.body;
  }

  if (isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
