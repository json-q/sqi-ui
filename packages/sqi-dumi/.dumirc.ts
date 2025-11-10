import { defineConfig } from 'dumi';
import path from 'node:path';

export default defineConfig({
  outputPath: 'docs-dist',
  npmClient: 'pnpm',
  hash: true,
  exportStatic: {},
  // see https://d.umijs.org/guide/faq#%E9%9D%9E%E6%A0%B9%E7%9B%AE%E5%BD%95%E9%83%A8%E7%BD%B2
  base: '/sqi-ui/',
  publicPath: '/sqi-ui/',
  // see https://github.com/umijs/dumi/issues/2209
  mako: {},
  alias: {
    'dumi/theme/slots': path.join(__dirname, './.dumi/tmp/dumi/theme/slots'),
    'dumi/theme/builtins': path.join(__dirname, './.dumi/tmp/dumi/theme/builtins'),
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: '../sqi-web/src' }],
  },
});
