module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json']
  },
  plugins: ['@typescript-eslint'],

  // prettier-ignore
  extends: [
        'plugin:@typescript-eslint/strict',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
  rules: {
    'getter-return': 'error'
  }
};
