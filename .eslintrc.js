module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["plugin:react/recommended"],
  rules: {
    "react/prop-types": 0,
    "comma-dangle": 0,
    "no-unused-vars": "warn",
    "no-console": 1,
    "no-unexpected-multiline": "warn",
    "arrow-body-style": ["error", "as-needed"],
    "no-console": ["error", { allow: ["log"] }]
  }
};
