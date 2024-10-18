import { configs as jsConfigs } from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] }, // Ignore the 'dist' directory
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    extends: [
      "plugin:prettier/recommended", // Ensure Prettier is integrated with ESLint
    ],
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "unused-imports": require("eslint-plugin-unused-imports"),
    },
    rules: {
      ...jsConfigs.recommended.rules, // Reference the jsConfigs object
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      // Disable no target blank rule
      "react/jsx-no-target-blank": "off",

      // Enable react-refresh plugin
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Using the 'unused-imports' plugin to handle unused variables including destructuring
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
          destructuredArrayIgnorePattern: "^_", // Ignore destructured variables with underscore prefix
        },
      ],

      // Turn off @typescript-eslint/no-unused-vars to avoid conflicts
      "@typescript-eslint/no-unused-vars": "off",

      // Additional no-unused-vars rule for plain JS handling
      "no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];
