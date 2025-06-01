import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  npmClient: 'pnpm',
  hash: true,
  exportStatic: {},
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: '../sqi-web/src' }],
  },
});
