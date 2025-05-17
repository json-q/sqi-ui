import { brand } from './brand';
import { error } from './error';
import { font } from './font';
import { gray } from './gray';
import { success } from './success';
import { warning } from './warning';

export const seedColorsToken = {
  light: {
    brand: brand.light,
    error: error.light,
    font: font.light,
    gray: gray.light,
    success: success.light,
    warning: warning.light,
  },
  dark: {
    brand: brand.dark,
    error: error.dark,
    font: font.dark,
    gray: gray.dark,
    success: success.dark,
    warning: warning.dark,
  },
};
