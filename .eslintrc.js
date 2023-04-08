module.exports = {
  extends: ["eslint:recommended"],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2023,
  },
  rules: {
    "no-unused-vars": "warn",
  },
};