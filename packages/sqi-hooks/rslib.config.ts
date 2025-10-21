import { defineConfig, type LibConfig } from '@rslib/core';

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

export default defineConfig({
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
    },
    {
      ...commonLibConfig,
      format: 'cjs',
      output: {
        ...commonLibConfig.output,
        distPath: { root: './lib' },
      },
    },
  ],
});
