import type { Formats } from './utils';

import colorPalette from './palette';
import colorPaletteDark from './palette-dark';

interface Options {
  /** 1 - 10 (default: 6) */
  index?: number;
  dark?: boolean;
  list?: boolean;
  format?: Formats;
}

export function generate(color: string, options: Options & { list: true }): string[];
export function generate(color: string, options?: Options): string;
export function generate(color: string, options: Options = {}) {
  const { dark, list, index = 6, format = 'hex' } = options || {};

  if (list) {
    const list = [];
    const func = dark ? colorPaletteDark : colorPalette;
    for (let i = 1; i <= 10; i++) {
      list.push(func(color, i, format));
    }
    return list;
  }
  return dark ? colorPaletteDark(color, index, format) : colorPalette(color, index, format);
}
