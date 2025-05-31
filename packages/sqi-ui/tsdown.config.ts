import { dirname, join, relative } from 'node:path';
import { ensureDir, outputFile } from 'fs-extra';
import { defineConfig, type UserConfig } from 'tsdown';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import sass from 'rollup-plugin-sass';
import copy from 'rollup-plugin-copy';
import cssnano from 'cssnano';
import { StyleToJsPlugin } from './plugins/style-js-plugin';

const baseConfig: UserConfig = {
  target: 'es2016',
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
  plugins: [
    sass({ processor: compileSassOutput, include: ['**/*.scss'] }),
    // copy hook 执行默认在构建完毕
    copy({
      targets: [
        { src: 'src/**/*.scss', dest: ['es', 'lib'] },
        { src: 'es/**/*.css', dest: 'lib' },
      ],
      flatten: false, //保持文件结构
    }),
    StyleToJsPlugin,
  ],
};

export default [
  defineConfig({ ...baseConfig, format: ['esm'], outDir: './es', dts: true }),
  defineConfig({ ...baseConfig, format: ['cjs'], outDir: './lib', dts: false }),
  defineConfig({
    globalName: 'SqiUI',
    target: 'es2016',
    entry: ['./src/index.ts'],
    platform: 'browser',
    format: ['umd'],
    minify: true,
    plugins: [
      sass({
        output: './dist/sqi-ui.css',
        processor: (css) =>
          postcss([autoprefixer({ overrideBrowserslist: ['Chrome>=49'] }), cssnano()])
            .process(css)
            .then((result) => result.css),
      }),
    ],
    outputOptions: {
      name: 'SqiUI',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
      file: './dist/sqi-ui.min.js',
    },
    external: ['react', 'react-dom'],
  }),
];

async function compileSassOutput(styles: string, id: string) {
  const result = await postcss([autoprefixer({ overrideBrowserslist: ['Chrome>=49'] })]).process(styles, {
    from: id,
  });

  // 获取相对路径
  const relPath = relative(join(process.cwd(), 'src'), id.replace('.scss', '.css'));

  const esPath = join('es', relPath);

  // 按原目录输出 css
  ensureDir(dirname(esPath)).then(() => outputFile(esPath, result.css));

  return '';
}
