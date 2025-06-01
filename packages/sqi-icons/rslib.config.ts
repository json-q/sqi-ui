import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [
    pluginReact({
      swcReactOptions: { runtime: 'classic' },
    }),
  ],
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
      externalHelpers: true,
      output: {
        distPath: {
          root: './es',
        },
      },
    },
    {
      format: 'cjs',
      syntax: 'es6',
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
      umdName: 'SqiIcons',
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
