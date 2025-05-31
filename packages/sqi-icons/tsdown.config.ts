import { defineConfig, type UserConfig } from 'tsdown';

const baseConfig: UserConfig = {
  target: 'es2016',
  globalName: 'SqiIcon',
  entry: ['./src/index.ts'],
  platform: 'neutral',
  unbundle: true,
  hash: false,
  outputOptions: {
    // tsdown 不推荐默认导出和命名导出混用
    //  Consumers of your bundle will have to use `src/index.ts.default` to access the default export
    exports: 'named',
  },
  outExtensions: () => ({ js: '.js' }),
};

export default [
  defineConfig({ ...baseConfig, format: ['esm'], outDir: './es', dts: true }),
  defineConfig({ ...baseConfig, format: ['cjs'], outDir: './lib', dts: false }),
  // defineConfig({
  //   target: 'es2016',
  //   entry: ['./src/index.ts'],
  //   platform: 'browser',
  //   format: ['umd'],
  //   minify: true,
  //   globalName: 'SqiIcon',
  //   outputOptions: {
  //     exports: 'named',
  //     name: 'SqiIcon',
  //     globals: {
  //       react: 'React',
  //     },
  //     file: './dist/sq-icons.min.js',
  //   },
  //   external: ['react', 'react-dom'],
  // }),
];
