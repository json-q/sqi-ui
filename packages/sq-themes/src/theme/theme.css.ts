import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import merge from 'lodash/merge';
import { createFlattenVars, createMapThemeValues } from '../utils';
import { seedColorsToken, seedSizeToken, semanticToken } from '../colors';

const colorsLight = merge(seedColorsToken.light, semanticToken.color.light);
const colorsDark = merge(seedColorsToken.dark, semanticToken.color.dark);

const mergeSize = merge(seedSizeToken, semanticToken.size);

const seedTokenColorContract = createFlattenVars<typeof colorsLight>()(colorsLight);
const seedTokenSizeContract = createFlattenVars<typeof mergeSize>()(mergeSize);

type SeedTokenContract = {
  color: {
    [K in keyof typeof seedTokenColorContract]: `var(--${string})`;
  };
  size: {
    [K in keyof typeof seedTokenSizeContract]: `var(--${string})`;
  };
};

// 创建带完整类型提示的主题契约
export const cssVars: SeedTokenContract = createGlobalThemeContract(
  {
    color: seedTokenColorContract,
    size: seedTokenSizeContract,
  },
  (value) => `sq-${value}`,
);

createGlobalTheme(':root,.light,[data-theme=light]', cssVars, {
  color: createMapThemeValues<typeof colorsLight>()(colorsLight),
  size: createMapThemeValues<typeof mergeSize>()(mergeSize),
});

createGlobalTheme('.dark,[data-theme=dark]', cssVars, {
  color: createMapThemeValues<typeof colorsDark>()(colorsDark),
  size: createMapThemeValues<typeof mergeSize>()(mergeSize),
});
