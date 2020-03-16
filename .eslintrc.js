module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    indent: ['error', 2],
    'no-console': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'never',
      },
    ],
    camelcase: 'off',
    // セミコロンを省略する
    // @see https://qiita.com/mysticatea/items/9da94240f29ea516ae87
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    'semi-spacing': ['error', { after: true, before: false }],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
  },
}
