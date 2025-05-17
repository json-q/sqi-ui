// import { createGlobalVar } from "@vanilla-extract/css";
import { brand } from '../base/brand';
import { warning } from '../base/warning';
import { error } from '../base/error';
import { success } from '../base/success';
import { gray } from '../base/gray';
import { font } from '../base/font';

export const semanticColors = {
  light: {
    brand: {
      default: brand.light[7],
      hover: brand.light[7],
      focus: brand.light[2],
      active: brand.light[8],
      disabled: brand.light[3],
      light: brand.light[1],
      'light-hover': brand.light[2],
    },
    warning: {
      default: warning.light[5],
      hover: warning.light[4],
      focus: warning.light[2],
      active: warning.light[6],
      disabled: warning.light[3],
      light: warning.light[1],
      'light-hover': warning.light[2],
    },
    error: {
      default: error.light[6],
      hover: error.light[5],
      focus: error.light[2],
      active: error.light[7],
      disabled: error.light[3],
      light: error.light[1],
      'light-hover': error.light[2],
    },
    success: {
      default: success.light[5],
      hover: success.light[4],
      focus: success.light[2],
      active: success.light[6],
      disabled: success.light[3],
      light: success.light[1],
      'light-hover': success.light[2],
    },
    mask: {
      active: 'rgba(0, 0, 0, 60%)',
      disabled: 'rgba(255, 255, 255, 60%)',
    },
    bg: {
      page: {
        default: gray.light[2],
      },
      container: {
        default: '#ffffff',
        hover: gray.light[1],
        active: gray.light[3],
      },
      secondaryContainer: {
        default: gray.light[1],
        hover: gray.light[2],
        active: gray.light[4],
      },
      component: {
        default: gray.light[3],
        hover: gray.light[4],
        active: gray.light[6],
        disabled: gray.light[2],
      },
      secondaryComponent: {
        default: gray.light[4],
        hover: gray.light[5],
        active: gray.light[6],
      },
    },
    text: {
      primary: font.light.gray[1],
      secondary: font.light.gray[2],
      placeholder: font.light.gray[3],
      disabled: font.light.gray[4],
      anti: '#ffffff',
      brand: brand.light[7],
      link: brand.light[8],
    },
    border: {
      'level-1': gray.light[3],
      'level-2': gray.light[4],
    },
  },
  dark: {
    brand: {
      default: brand.dark[8],
      hover: brand.dark[7],
      focus: brand.dark[2],
      active: brand.dark[9],
      disabled: brand.dark[3],
      light: brand.dark[1],
      'light-hover': brand.dark[2],
    },
    warning: {
      default: warning.dark[5],
      hover: warning.dark[4],
      focus: warning.dark[2],
      active: warning.dark[6],
      disabled: warning.dark[3],
      light: warning.dark[1],
      'light-hover': warning.dark[2],
    },
    error: {
      default: error.dark[6],
      hover: error.dark[5],
      focus: error.dark[2],
      active: error.dark[7],
      disabled: error.dark[3],
      light: error.dark[1],
      'light-hover': error.dark[2],
    },
    success: {
      default: success.dark[5],
      hover: success.dark[4],
      focus: success.dark[2],
      active: success.dark[6],
      disabled: success.dark[3],
      light: success.dark[1],
      'light-hover': success.dark[2],
    },
    mask: {
      active: 'rgba(0, 0, 0, 40%)',
      disabled: 'rgba(0, 0, 0, 60%)',
    },
    bg: {
      page: {
        default: gray.dark[14],
      },
      container: {
        default: gray.dark[13],
        hover: gray.dark[12],
        active: gray.dark[10],
      },
      secondaryContainer: {
        default: gray.dark[12],
        hover: gray.dark[11],
        active: gray.dark[9],
      },
      component: {
        default: gray.dark[11],
        hover: gray.dark[10],
        active: gray.dark[9],
        disabled: gray.dark[12],
      },
      secondaryComponent: {
        default: gray.dark[10],
        hover: gray.dark[8],
        active: gray.dark[6],
      },
    },
    text: {
      primary: font.dark.white[1],
      secondary: font.dark.white[2],
      placeholder: font.dark.white[3],
      disabled: font.dark.white[4],
      anti: '#ffffff',
      brand: brand.dark[8],
      link: brand.dark[8],
    },
    border: {
      'level-1': gray.dark[3],
      'level-2': gray.dark[4],
    },
  },
};
