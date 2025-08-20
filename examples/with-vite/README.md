# React Vite Template

use [vite-plugin-imp](https://github.com/onebay/vite-plugin-imp) import ui library component style automatic

```js
import vitePluginImp from 'vite-plugin-imp';

export default defineConfig({
  plugins: [
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
```

import style in `main.tsx`

```js
import '@sqi-ui/web/es/style/index.css';
```

You can build this template and check dist folder
