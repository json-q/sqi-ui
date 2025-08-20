# React Rsbuild Template

`babel-plugin-import` can be replaced with the `source.transformImport` configuration in Rsbuild

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
