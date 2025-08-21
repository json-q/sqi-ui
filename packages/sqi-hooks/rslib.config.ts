import { defineConfig } from '@rslib/core';

export default defineConfig({
  output: {
    target: 'web',
  },
  lib: [
    {
      externalHelpers: true,
      format: 'esm',
      dts: true,
      bundle: false,
      output: {
        distPath: {
          root: './es',
        },
        filename: {
          js: '[name].js',
        },
      },
    },
    {
      externalHelpers: true,
      format: 'cjs',
      bundle: false,
      output: {
        distPath: {
          root: './lib',
        },
        filename: {
          js: '[name].js',
        },
      },
    },
  ],
});
