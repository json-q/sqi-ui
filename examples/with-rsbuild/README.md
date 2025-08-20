# React Rsbuild Template

In Rsbuild, you can replace `babel-plugin-import` with the `source.transformImport` configuration:

```ts
export default defineConfig({
  source: {
    transformImport: [
      {
        libraryName: '@sqi-ui/web',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  },
});
```

import style in `index.tsx`

```ts
import '@sqi-ui/web/es/style/index.css';
```

You can build this template and check dist folder
