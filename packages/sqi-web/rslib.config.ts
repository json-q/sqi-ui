import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  source: {
    tsconfigPath: './tsconfig.build.json',
  },
  plugins: [
    pluginSass({}),
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
          index: ['./src/**/*.{ts,tsx,scss}', './src/**/index.scss', '!src/**/demos/**'],
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
        filename: {
          js: '[name].js',
        },
      },
    },
    {
      source: {
        entry: {
          index: ['./src/**/*.{ts,tsx}', './src/**/index.scss', '!src/**/demos/**'],
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
        filename: {
          js: '[name].js',
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
