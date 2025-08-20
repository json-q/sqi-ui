import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import { fileURLToPath } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
    // 由于组件库为 workspace，rollup 找不到路径会打包错误，需使用 alias 指向正确路径
    // 以 npm 安装的不需要此配置
    alias: {
      '@sqi-ui/web': fileURLToPath(new URL('../../packages/sqi-web', import.meta.url)),
    },
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: '@sqi-ui/web',
          style: (name) => `@sqi-ui/web/es/${name}/style/index.css`,
        },
      ],
    }),
  ],
});
