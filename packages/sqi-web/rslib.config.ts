import { defineConfig, type LibConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

const browserslist = ['Chrome >= 84', 'Firefox >= 83', 'Safari >= 14.1'];

const commonLibConfig: LibConfig = {
  syntax: browserslist,
  bundle: false,
  externalHelpers: true,
  source: {
    entry: {
      index: ['./src/**/*.{ts,tsx}', '!src/**/demos/**', '!src/**/__tests__/**'],
    },
  },
};

const umdConfig: LibConfig = {
  syntax: browserslist,
  format: 'umd',
  umdName: 'SqiWeb',
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
  output: {
    distPath: { root: './dist' },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
};

export default defineConfig({
  source: {
    tsconfigPath: './tsconfig.build.json',
  },
  output: {
    target: 'web',
  },
  plugins: [
    // compat umd in browser
    pluginReact({ swcReactOptions: { runtime: 'classic' } }),

    // pluginBabel({
    //   include: /\.(?:jsx|tsx)$/,
    //   babelLoaderOptions(opts) {
    //     // compat react18
    //     opts.plugins?.unshift(['babel-plugin-react-compiler', { target: '18' }]);
    //   },
    // }),
  ],
  lib: [
    {
      ...commonLibConfig,
      format: 'esm',
      dts: true,
      output: {
        distPath: { root: './es' },
        filename: { js: '[name].js' },
      },
    },
    {
      ...commonLibConfig,
      format: 'cjs',
      output: {
        distPath: { root: './lib' },
        filename: { js: '[name].js' },
      },
    },

    {
      ...umdConfig,
      output: {
        ...umdConfig.output,
        filename: { js: '[name].js' },
      },
    },
    {
      ...umdConfig,
      output: {
        ...umdConfig.output,
        minify: true,
        filename: { js: '[name].min.js' },
      },
    },
  ],
});
