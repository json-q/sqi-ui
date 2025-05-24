import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  source: {
    entry: {
      index: './src/**',
    },
  },
  plugins: [pluginReact(), pluginSass()],
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
