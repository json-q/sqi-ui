import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: 'src/**',
    },
  },
  output: {
    cleanDistPath: true,
    target: 'web',
  },
  lib: [
    {
      format: 'esm',
      syntax: 'es6',
      dts: true,
      bundle: false,
      output: {
        distPath: {
          root: './dist/es',
        },
      },
    },
    {
      format: 'cjs',
      syntax: 'es6',
      bundle: false,
      output: {
        distPath: {
          root: './dist/lib',
        },
      },
    },
  ],
});
