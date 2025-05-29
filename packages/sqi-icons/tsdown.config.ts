import { defineConfig, type UserConfig } from 'tsdown';

const baseConfig: UserConfig = {
  target: 'es2016',
  entry: ['./src/index.ts'],
  platform: 'neutral',
  unbundle: true,
  outputOptions: {
    // tsdown 不推荐默认导出和命名导出混用
    //  Consumers of your bundle will have to use `src/index.ts.default` to access the default export
    exports: 'named',
  },
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
