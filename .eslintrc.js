module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['prettier', 'react-app', 'plugin:prettier/recommended'],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'prettier', 'react-hooks'],
  ignorePatterns: ['node_modules/'],

  rules: {},
  settings: {
    react: {
      version: 'latest',
    },
  },
};
