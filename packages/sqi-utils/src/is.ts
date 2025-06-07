export function isFunction(val: any): val is (...args: any[]) => any {
  return typeof val === 'function';
}

export function isUndefined(val: any): val is undefined {
  return val === undefined;
}

export function isArray(val: any): val is any[] {
  return Array.isArray(val);
}

export function isString(val: any): val is string {
  return typeof val === 'string';
}

export const isObject = (val: unknown): val is Record<any, any> => {
  return val !== null && typeof val === 'object';
};
