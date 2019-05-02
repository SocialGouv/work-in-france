module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "plugin:flowtype/recommended"],
  plugins: ["flowtype", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-sort-props": [
      1,
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
