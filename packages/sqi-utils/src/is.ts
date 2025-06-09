export function isFunction(val: unknown): val is (...args: any[]) => any {
  return typeof val === 'function';
}

export function isUndefined(val: unknown): val is undefined {
  return val === undefined;
}

export function isArray(val: unknown): val is any[] {
  return Array.isArray(val);
}

export function isString(val: unknown): val is string {
  return typeof val === 'string';
}

export const isObject = (val: unknown): val is Record<any, any> => {
  return val !== null && typeof val === 'object';
};

export const isNumber = (val: unknown): val is number => {
  return typeof val === 'number';
};
