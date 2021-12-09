module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  plugins: ["jest", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
};
