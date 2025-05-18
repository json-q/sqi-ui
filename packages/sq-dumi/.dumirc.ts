import { defineConfig } from 'dumi';
import { join } from 'node:path';

export default defineConfig({
  outputPath: 'docs-dist',
  npmClient: 'pnpm',
  // themeConfig: {
  //   name: 'sq-ui',
  // },
  hash: true,
  exportStatic: {},
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: '../sq-ui/src' }],
  },
  alias: {
    '@sq-ui/web': join(__dirname, '../sq-ui/src'),
  },
});
