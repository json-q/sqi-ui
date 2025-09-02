import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.tsx'],
      exclude: ['src/**/*.test.tsx', 'src/**/demos/*'],
    },
  },
});
