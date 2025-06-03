import { defineConfig } from '@rslib/core';

export default defineConfig({
  output: {
    target: 'web',
  },
  lib: [
    {
      externalHelpers: true,
      format: 'esm',
      syntax: 'es2016',
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
      syntax: 'es2016',
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
    {
      format: 'umd',
      syntax: 'es2016',
      umdName: 'SqiHooks',
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
