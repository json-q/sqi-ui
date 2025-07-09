import { defineConfig, type RslibConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginBabel } from '@rsbuild/plugin-babel';

const commonPlugins: RslibConfig['plugins'] = [
  // compat umd in browser
  pluginReact({ swcReactOptions: { runtime: 'classic' } }),

  pluginBabel({
    include: /\.(?:jsx|tsx)$/,
    babelLoaderOptions(opts) {
      // compat react18
      opts.plugins?.unshift(['babel-plugin-react-compiler', { target: '18' }]);
    },
  }),
];

export default defineConfig({
  source: {
    tsconfigPath: './tsconfig.build.json',
  },
  output: {
    target: 'web',
  },
  lib: [
    {
      source: {
        entry: {
          index: ['./src/**/*.{ts,tsx}', '!src/**/demos/**'],
        },
      },
      format: 'esm',
      syntax: 'es2016',
      dts: true,
      bundle: false,
      externalHelpers: true,
      plugins: commonPlugins,
      output: {
        distPath: { root: './es' },
        filename: { js: '[name].js' },
      },
    },
    {
      source: {
        entry: {
          index: ['./src/**/*.{ts,tsx}', '!src/**/demos/**'],
        },
      },
      format: 'cjs',
      syntax: 'es2016',
      bundle: false,
      externalHelpers: true,
      plugins: commonPlugins,
      output: {
        distPath: { root: './lib' },
        filename: { js: '[name].js' },
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
      plugins: commonPlugins,
      output: {
        minify: true,
        polyfill: 'usage',
        distPath: { root: './dist' },
        externals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  ],
});
