import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import * as reactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactCompiler from 'eslint-plugin-react-compiler';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactCompiler.configs.recommended,

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
      'react-compiler/react-compiler': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
      'jsx-a11y/label-has-associated-control': [
        2,
        {
          controlComponents: ['BaseCheckbox'],
          depth: 3,
        },
      ],
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
