module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["node_modules/*", ".out/*", "!.prettierrc.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "jsx-a11y"],
  rules: {
    "react/require-default-props": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../../*"],
      },
    ],
    "prefer-arrow-callback": "warn",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/boolean-prop-naming": ["error", { validateNested: true }],
    "import/extensions": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-explicit-any": ["error"],
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/jsx-key": "error",
    "no-shadow": "off",
  },
};
