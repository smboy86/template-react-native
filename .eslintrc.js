module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'import/extensions': ['off'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', 'tsx', 'ts'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
        endOfLine: 'auto',
      },
    ],
  },
};
