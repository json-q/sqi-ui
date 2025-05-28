import { defineConfig } from 'dumi';
import { join } from 'node:path';

export default defineConfig({
  outputPath: 'docs-dist',
  npmClient: 'pnpm',
  hash: true,
  exportStatic: {},
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: '../sqi-ui/src' }],
  },
  alias: {
    '@sqi-ui/web': join(__dirname, '../sqi-ui/src'),
  },
});
