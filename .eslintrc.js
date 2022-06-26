module.exports = {
 env: {
  browser: true,
  es2021: true,
 },
 extends: [
  'airbnb',
  'airbnb/hooks',
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:prettier/recommended',
  'plugin:storybook/recommended',
 ],
 parser: '@typescript-eslint/parser',
 parserOptions: {
  ecmaFeatures: {
   jsx: true,
  },
  ecmaVersion: 'latest',
  sourceType: 'module',
 },
 plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'react-hooks'],
 rules: {
  'linebreak-style': 0,
  'import/no-dynamic-require': 0,
  'import/no-unresolved': 0,
  'import/prefer-default-export': 0,
  'global-require': 0,
  'import/no-extraneous-dependencies': 0,
  'react/jsx-props-no-spreading': 0,
  'react/forbid-prop-types': 0,
  'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  'import/extensions': 0,
  'no-use-before-define': 0,
  '@typescript-eslint/no-empty-interface': 0,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/no-var-requires': 0,
  'no-shadow': 'off',
  'react/prop-types': 0,
  'no-empty-pattern': 0,
  'no-alert': 0,
  'react/require-default-props': 0,
  'react/function-component-definition': 0,
  'react/no-unescaped-entities': 0,
  'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
  'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
 },
 overrides: [
  // override "simple-import-sort" config
  {
   files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
   rules: {
    'simple-import-sort/imports': [
     'error',
     {
      groups: [
       // Packages `react` related packages come first.
       ['^react', '^@?\\w'],
       // Internal packages.
       ['^(@|components)(/.*|$)'],
       ['^(@|hooks)(/.*|$)'],
       ['^(@|utils)(/.*|$)'],
       // Side effect imports.
       ['^\\u0000'],
       // Parent imports. Put `..` last.
       ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
       // Other relative imports. Put same-folder imports and `.` last.
       ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
       // Style imports.
       ['^.+\\.?(css)$'],
      ],
     },
    ],
   },
  },
 ],
 settings: {
  'import/parsers': {
   '@typescript-eslint/parser': ['.ts', '.tsx'],
  },
  'import/resolver': {
   typescript: './tsconfig.json',
  },
 },
}
