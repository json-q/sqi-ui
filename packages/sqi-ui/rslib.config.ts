import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  source: {
    tsconfigPath: './tsconfig.build.json',
  },
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
      source: {
        entry: {
          index: ['./src/**/*.{ts,tsx}', '!src/**/demos/**', '!src/**/style/**'],
        },
      },
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
      source: {
        entry: {
          index: ['./src/**/*.{ts,tsx}', '!src/**/demos/**', '!src/**/style/**'],
        },
      },
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
      umdName: 'SqiWeb',
      source: {
        entry: {
          index: './src/index.ts',
        },
      },
      output: {
        minify: true,
        polyfill: 'usage',
        distPath: {
          root: './dist',
        },
        externals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  ],
});
