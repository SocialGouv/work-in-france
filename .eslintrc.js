module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "plugin:flowtype/recommended"],
  plugins: ["flowtype", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/no-unescaped-entities": 0,
    "react/jsx-fragments": "warn",
    "react/jsx-props-no-spreading": "warn",
    "jsx-a11y/control-has-associated-label": "warn",
    "react/prop-types": "warn",
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
