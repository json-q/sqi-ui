import { isValidElement, version } from 'react';

export function isDOM(node: any): node is HTMLElement | SVGElement {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element
  return node instanceof HTMLElement || node instanceof SVGElement;
}

export function getDOM(node: any): HTMLElement | SVGElement | null {
  // object ==> ref object
  if (node && typeof node === 'object' && isDOM(node.nativeElement)) {
    return node.nativeElement;
  }

  // real dom
  if (isDOM(node)) {
    return node;
  }

  return null;
}

export function getReactNodeRef<T = any>(node: React.ReactNode): React.Ref<T> | null {
  const element = node && isValidElement(node);
  if (!element) return null;

  // `ref` 在 react19 作为 props 传递，而在其之前的版本，则使用 ref 属性传递获取
  if (parseInt(version) >= 19) {
    return (node.props as any)?.ref || null;
  }
  // @ts-expect-error `element.ref` is not included in the ReactElement type
  // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
  return node.ref;
}
