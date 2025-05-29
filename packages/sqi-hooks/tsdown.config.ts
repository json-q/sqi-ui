import { defineConfig, UserConfig } from 'tsdown';

const baseConfig: UserConfig = {
  target: 'es2016',
  entry: ['./src/index.ts'],
  platform: 'browser',
  unbundle: true,
  outExtensions: () => ({ js: '.js' }),
};

export default [
  defineConfig({
    ...baseConfig,
    format: ['esm'],
    outDir: './es',
    dts: true,
  }),
  defineConfig({
    ...baseConfig,
    format: ['cjs'],
    outDir: './lib',
    dts: false,
  }),
];
