module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: 'detect' } },
  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js handles the JSX runtime automatically
    'react/prop-types': 'off', // project does not use prop-types
    'react/no-unescaped-entities': 'off',
    'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
  },
};
