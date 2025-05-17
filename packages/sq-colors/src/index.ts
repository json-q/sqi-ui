import { generate } from './generate';
import { getRgbStr } from './utils';

export { generate, getRgbStr };

// t-design color
// const colorList = {
//   blue: { color: '#0052d9', index: 7 }, // #0052d9 7
//   orange: { color: '#e37318', index: 5 }, // #e37318 5
//   red: { color: '#d54941', index: 6 }, // #d54941 6
//   green: { color: '#2ba471', index: 5 }, // #2ba471 5
// };

// arco-design-color
const colorList = {
  red: '#F53F3F', // #F53F3F
  orange: '#FF7D00', // #FF7D00
  green: '#00B42A', // #00B42A
  blue: '#165DFF', // #165DFF
} as const;

type ColorKey = keyof typeof colorList;

type PresetColorItem = {
  light: string[];
  dark: string[];
  primary: string;
};

type GrayPresetColor = {
  light: string[];
  dark: string[];
  primary: string;
};

type PresetColorType = {
  [K in ColorKey]: PresetColorItem;
} & {
  gray: Partial<GrayPresetColor>;
};

export function getPresetColors() {
  const presetColors: Partial<PresetColorType> = {};

  Object.keys(colorList).forEach((key) => {
    type Key = keyof typeof colorList;
    const item = colorList[key as Key];

    presetColors[key as Key] = {
      light: generate(item, { list: true }),
      dark: generate(item, { list: true, dark: true }),
      primary: item,
    };
  });

  presetColors.gray = {
    light: [
      '#f7f8fa',
      '#f2f3f5',
      '#e5e6eb',
      '#c9cdd4',
      '#a9aeb8',
      '#86909c',
      '#6b7785',
      '#4e5969',
      '#272e3b',
      '#1d2129',
    ],
    dark: [
      '#17171a',
      '#2e2e30',
      '#484849',
      '#5f5f60',
      '#78787a',
      '#929293',
      '#ababac',
      '#c5c5c5',
      '#dfdfdf',
      '#f6f6f6',
    ],
  };

  presetColors.gray.primary = presetColors.gray.light![5];

  return presetColors;
}
