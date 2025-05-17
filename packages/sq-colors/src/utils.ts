import Color, { type ColorInstance } from 'color';

export function getRgbStr(color: string) {
  return Color(color).rgb().round().array().join(',');
}

const formats = ['hex', 'rgb', 'hsl'];

export type Formats = 'hex' | 'rgb' | 'hsl';

function getFormat(format?: Formats): Formats {
  if (!format || formats.indexOf(format) < 0) {
    return 'hex';
  }

  return format;
}

export function getColorString(color: ColorInstance, format?: Formats) {
  const innerFormat = getFormat(format);

  if (innerFormat === 'hex') {
    return color[innerFormat]();
  }
  return color[innerFormat]().round().string();
}
