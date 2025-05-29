import type { Options } from 'tsdown';
import fs from 'fs-extra';
import path from 'node:path';
import { globSync } from 'tinyglobby';

export const StyleToJsPlugin: NonNullable<Options['plugins']> = {
  name: 'style-entry-plugin',
  async buildEnd() {
    try {
      const styleEntries = globSync(['src/**/style/index.ts', '!src/style/index.ts']);

      for (const entry of styleEntries) {
        // 获取组件相对路径 (src/button/style/index.ts → button)
        const componentName = path.basename(path.dirname(entry));
        console.log(componentName);

        // 读取原始 index.ts 内容
        const originalContent = await fs.readFile(entry, 'utf8');

        // 生成 index.js (保持原始内容)
        const indexPath = path.join(componentName, 'index.js');
        console.log(indexPath);

        this.emitFile({
          type: 'asset',
          fileName: indexPath,
          source: originalContent,
        });

        // 生成 css.js (替换 scss 为 css)
        const cssContent = originalContent
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

      // await Promise.all(
      //   styleEntries .map(async (componentPath) => {
      //     const componentName = path.basename(path.dirname(componentPath));
      //     console.log(componentName);

      //     const styleDir = path.join(outDir, componentName);

      //     if (!fs.pathExistsSync(styleDir)) return;

      //     // 检查样式目录是否存在
      //     // 生成 index.js (引入 SCSS)
      //     const indexPath = path.join(componentName, 'index.js');
      //     this.emitFile({
      //       type: 'asset',
      //       fileName: indexPath,
      //       source: `import './style/index.scss';\n`,
      //     });

      //     // 生成 css.js (引入 CSS)
      //     const cssPath = path.join(componentName, 'css.js');
      //     this.emitFile({
      //       type: 'asset',
      //       fileName: cssPath,
      //       source: `import './style/index.css';\n`,
      //     });
      //   }),
      // );
    } catch (error) {
      this.error(`StylejsPlugin 错误: ${error instanceof Error ? error.message : error}`);
    }
  },
};
