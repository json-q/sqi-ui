import { useCompareMemo } from '@sqi-ui/hooks';
import { isFunction, isObject } from '@sqi-ui/utils';
import { isValidElement, version } from 'react';
import { ForwardRef, isFragment, isMemo } from 'react-is';

export const composeRef = <T>(...refs: React.Ref<T>[]): React.Ref<T> => {
  const refList = refs.filter(Boolean);
  if (refList.length <= 1) {
    return refList[0];
  }
  return (node: T) => {
    refs.forEach((ref) => {
      fillRef(ref, node);
    });
  };
};

export const fillRef = <T>(ref: React.Ref<T>, node: T) => {
  if (isFunction(ref)) {
    ref(node);
  } else if (isObject(ref) && 'current' in ref) {
    ref.current = node;
  }
};

export const useComposeRef = <T>(...refs: React.Ref<T>[]): React.Ref<T> => {
  return useCompareMemo(
    () => composeRef(...refs),
    refs,
    (prev, next) => prev.length !== next.length || prev.every((ref, i) => ref !== next[i]),
  )!;
};

export const supportRef = (nodeOrComponent: any): boolean => {
  if (!nodeOrComponent) {
    return false;
  }

  const ReactMajorVersion = parseInt(version);

  // React 19 no need `forwardRef` anymore. So just pass if is a React element.
  if (isReactElement(nodeOrComponent) && ReactMajorVersion >= 19) {
    return true;
  }

  const type = isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;

  // Function component node
  if (typeof type === 'function' && !type.prototype?.render && type.$$typeof !== ForwardRef) {
    return false;
  }

  // Class component
  if (
    typeof nodeOrComponent === 'function' &&
    !nodeOrComponent.prototype?.render &&
    nodeOrComponent.$$typeof !== ForwardRef
  ) {
    return false;
  }
  return true;
};

interface RefAttributes<T> extends React.Attributes {
  ref: React.Ref<T>;
}

function isReactElement(node: React.ReactNode) {
  return isValidElement(node) && !isFragment(node);
}

export const supportNodeRef = <T = any>(node: React.ReactNode): node is React.ReactElement & RefAttributes<T> => {
  return isReactElement(node) && supportRef(node);
};
