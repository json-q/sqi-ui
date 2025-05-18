import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import * as reactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  jsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
  prettierRecommended,
  {
    name: 'internal-plugins',
    files: ['**/*.{jsx,tsx}'],
    plugins: { 'react-hooks': reactHooks },
  },
  {
    name: 'internal-rules',
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ignores: [
      '**/dist/*',
      '**/es/*',
      '**/lib/*',
      'node_modules',
      '*.woff',
      '.ttf',
      '.vscode',
      '.idea',
      '.husky',
      '.local',
      '/bin',
      '.eslintcache',
    ],
  },
]);
