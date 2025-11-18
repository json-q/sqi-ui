/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * source from: https://github.com/react-bootstrap/react-bootstrap/blob/master/src/createChainedFunction.tsx
 */

export function createChainFn<T = any>(...funcs: (T | null)[]): T {
  return funcs
    .filter((f) => f !== null && typeof f !== 'undefined')
    .reduce((acc: any, f: any) => {
      if (typeof f !== 'function') {
        throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
      }

      if (acc === undefined) {
        return f;
      }

      return function chainedFunction(this: any, ...args: any[]) {
        acc.apply(this, args);
        f.apply(this, args);
      };
    }, undefined);
}
