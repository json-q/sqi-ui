import { defineConfig, type LibConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

const browserslist = ['Chrome >= 84', 'Firefox >= 83', 'Safari >= 14.1'];

const commonLibConfig: LibConfig = {
  syntax: browserslist,
  bundle: false,
  externalHelpers: true,
  output: {
    filename: {
      js: '[name].js',
    },
  },
};

const umdConfig: LibConfig = {
  syntax: browserslist,
  format: 'umd',
  umdName: 'SqiIcons',
  output: {
    distPath: {
      root: './dist',
    },
    externals: {
      react: 'React',
    },
  },
};

export default defineConfig({
  plugins: [pluginReact({ swcReactOptions: { runtime: 'classic' } })],
  output: {
    target: 'web',
  },
  lib: [
    {
      ...commonLibConfig,
      format: 'esm',
      dts: true,
      output: {
        ...commonLibConfig.output,
        distPath: { root: './es' },
      },
      experiments: {
        advancedEsm: true,
      },
    },
    {
      ...commonLibConfig,
      format: 'cjs',
      output: {
        ...commonLibConfig.output,
        distPath: { root: './lib' },
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
