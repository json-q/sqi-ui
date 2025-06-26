const opt = Object.prototype.toString;

export function isFunction(val: unknown): val is (...args: any[]) => any {
  return opt.call(val) === '[object Function]';
}

export function isUndefined(val: unknown): val is undefined {
  return val === undefined;
}

export function isArray(val: unknown): val is any[] {
  return opt.call(val) === '[object Array]';
}

export function isString(val: unknown): val is string {
  return opt.call(val) === '[object String]';
}

export const isObject = (val: unknown): val is Record<any, any> => {
  return opt.call(val) === '[object Object]';
};

export const isEmptyObject = (val: unknown): val is boolean => {
  if (!isObject(val)) return true;

  // polyfill for Object.keys
  for (const key in val) {
    if (Object.prototype.hasOwnProperty.call(val, key)) {
      return false;
    }
  }
  return true;
};

export const isNumber = (val: unknown): val is number => {
  // val === val 目的是排除 NaN , NaN 也是 [object Number]
  return opt.call(val) === '[object Number]' && val === val;
};
