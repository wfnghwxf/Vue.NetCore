/*
 * @Author: your name
 * @Date: 2019-12-30 11:33:42
 * @LastEditTime : 2020-01-03 09:25:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vol.Vue\.eslintrc.js
 */
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    "node": true,
    "browser": true,
    "es6": true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    "indent": 0,
    "no-mixed-spaces-and-tabs": [
      1,
      "smart-tabs"
    ],
    "eqeqeq": ["off"],
    "no-useless-escape":"off",
    "no-unused-vars":"off",
    "no-irregular-whitespace":"off",
    "semi": 0,
    "quotes": 0,
    "no-tabs": 0,
    "space-before-function-paren": [
      0,
      "always"
    ],
    "spaced-comment": 0,
    "comma-dangle": [
      1,
      "never"
    ],
    "no-unused-vars": [
      2,
      {
        "vars": "local",
        "args": "none"
      }
    ],
    "no-console": "off",
    "arrow-parens": 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
