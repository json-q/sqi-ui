import { basename, resolve } from 'node:path';
import fs from 'fs-extra';

import { Config, transform } from '@svgr/core';
import { optimize, type PluginConfig } from 'svgo';
import camelCase from 'camelcase';
import prettier from 'prettier';
import prettierConfig from '../../../.prettierrc.cjs';

const prettierRules: prettier.Options = {
  ...prettierConfig,
  parser: 'typescript',
  endOfLine: 'lf',
};

type BuildOption = {
  /** Svg 源文件目录 */
  entryDir: string;
  /** Icon 输出文件目录 */
  outDir: string;
  /** Icon 组件名前缀 */
  prefix?: string;
  /** Icon 组件名后缀 */
  suffix?: string;
  svgoPlugins?: PluginConfig[];
  svgrConfig?: Config;
};

const transSvgToComponent = async (options: BuildOption) => {
  const { entryDir, outDir, prefix = '', suffix = '', svgoPlugins = [], svgrConfig = {} } = options;

  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true });
  }
  fs.mkdirSync(outDir);

  // 所有 icons 的入口文件
  const indexFileName = 'index.ts';
  const svgFiles = fs.readdirSync(entryDir, 'utf-8');
  console.log(svgFiles);

  const batches = svgFiles
    .filter((f) => f.endsWith('.svg'))
    .map(async (file) => {
      try {
        const svgFileName = basename(file, '.svg'); // 只取文件名
        const componentName = `${prefix}${camelCase(svgFileName, { pascalCase: true })}${suffix}`;
        const reactFileName = `${componentName}.tsx`;
        const svgContent = fs.readFileSync(resolve(entryDir, file), 'utf-8');

        const svgProps: Record<string, string> = {
          focusable: 'false', // react focusable={false}
          'aria-hidden': 'true',
        };
        const result = optimize(svgContent, { plugins: svgoPlugins });

        const jsxCode = await transform(
          result.data,
          {
            plugins: ['@svgr/plugin-jsx'],
            icon: true,
            svgProps,
            ...svgrConfig,
          },
          { componentName },
        );

        // 代码按照项目的 prettier 进行格式化 xxxIcon 的 jsx
        const formattedCode = await prettier.format(jsxCode, prettierRules);

        fs.writeFileSync(resolve(outDir, reactFileName), formattedCode);

        return {
          fileName: reactFileName,
          componentName,
        };
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

  const arr = await Promise.all(batches);

  // 写入 index.ts
  const indexFileContent = arr
    .map((a) => `export { default as ${a.componentName} } from './${a.componentName}';`)
    .join('\n');

  // format icons index.ts
  const formattedIconsIndex = await prettier.format(indexFileContent, prettierRules);

  fs.writeFileSync(resolve(outDir, indexFileName), formattedIconsIndex, 'utf-8');
};

export default transSvgToComponent;
