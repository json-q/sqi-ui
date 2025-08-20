# React Nextjs Template

The `transpilePackages` need to be configured in `next.config.ts`

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@sqi-ui/web'],
};

export default nextConfig;
```

import style in `global.css`

```css
@import '@sqi-ui/web/dist/index.css';
```
