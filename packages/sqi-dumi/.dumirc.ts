import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  npmClient: 'pnpm',
  hash: true,
  exportStatic: {},
  // see https://d.umijs.org/guide/faq#%E9%9D%9E%E6%A0%B9%E7%9B%AE%E5%BD%95%E9%83%A8%E7%BD%B2
  base: '/sqi-ui/',
  publicPath: '/sqi-ui/',
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: '../sqi-web/src' }],
  },
});
