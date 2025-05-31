import type { Options } from 'tsdown';
import fs from 'fs-extra';
import path from 'node:path';
import { globSync } from 'tinyglobby';

export const StyleToJsPlugin: NonNullable<Options['plugins']> = {
  name: 'style-entry-plugin',
  async buildEnd() {
    try {
      const styleEntries = globSync(['src/**/style/index.ts' /*  '!src/style/index.ts' */]);

      for (const entry of styleEntries) {
        // 获取组件相对路径 (src/button/style/index.ts → button)
        const componentName = path.basename(path.dirname(entry));

        const content = await fs.readFile(entry, 'utf8');

        // index.js
        const indexPath = path.join(componentName, 'index.js');
        console.log(indexPath);

        this.emitFile({
          type: 'asset',
          fileName: indexPath,
          source: content,
        });

        // css.js
        const cssContent = content
          .replace(/\/style\/?'/g, "/style/css'")
          .replace(/\/style\/?"/g, '/style/css"')
          .replace(/\.scss/g, '.css');

        const cssPath = path.join(componentName, 'css.js');
        this.emitFile({
          type: 'asset',
          fileName: cssPath,
          source: cssContent,
        });
      }
    } catch (error) {
      this.error(`StylejsPlugin Error: ${error}`);
    }
  },
};
