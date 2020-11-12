module.exports = {
  root: true,
  // "parser": "esprima",
  env: {
    browser: true,
    node: true,
  },
  // parserOptions: {
  //   ecmaVersion: 6,
  //   sourceType: "module",
  // },
  extends: ['za/react'],
  rules: {
    // eqeqeq: "warn",
    'no-multi-spaces': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    // 'no-use-before-define': 'off',
    'react/destructuring-assignment': 'off',
    // 'import/prefer-default-export': 'off',
    // 'quote-props': 'off',
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
};
