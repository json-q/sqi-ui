import { defineConfig } from '@rslib/core';

export default defineConfig({
  output: {
    cleanDistPath: true,
    target: 'web',
  },
  lib: [
    {
      format: 'esm',
      syntax: 'es2016',
      dts: true,
      bundle: false,
      externalHelpers: true,
      output: {
        distPath: {
          root: './es',
        },
      },
    },
    {
      format: 'cjs',
      syntax: 'es2016',
      bundle: false,
      externalHelpers: true,
      output: {
        distPath: {
          root: './lib',
        },
      },
    },
    {
      format: 'umd',
      syntax: 'es2016',
      umdName: 'SqiUtils',
      output: {
        minify: true,
        polyfill: 'usage',
        distPath: {
          root: './dist',
        },
        externals: {
          react: 'React',
        },
      },
    },
  ],
});
