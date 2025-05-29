import { defineConfig, UserConfig } from 'tsdown';

const baseConfig: UserConfig = {
  target: 'es2016',
  entry: ['./src/index.ts'],
  platform: 'browser',
  unbundle: true,
};

export default [
  defineConfig({
    ...baseConfig,
    format: ['esm'],
    outDir: './dist/es',
    dts: true,
  }),
  defineConfig({
    ...baseConfig,
    format: ['cjs'],
    outDir: './dist/lib',
    dts: false,
  }),
];
