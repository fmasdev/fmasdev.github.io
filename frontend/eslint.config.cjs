const js = require('@eslint/js')
const prettierPlugin = require('eslint-plugin-prettier')
const vuePlugin = require('eslint-plugin-vue')
const tsParser = require('@typescript-eslint/parser')
const tsPlugin = require('@typescript-eslint/eslint-plugin')

module.exports = [
  ...vuePlugin.configs['flat/recommended'],
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    ignores: ['node_modules', 'dist', '.output', '.vscode'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
      globals: {
        browser: true,
        node: true,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      // Prettier
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          tabWidth: 2,
        },
      ],

      // Vue
      'vue/multi-word-component-names': 'off',
      'vue/html-indent': ['error', 2],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 1,
          multiline: 1,
        },
      ],
    },
  },
]
