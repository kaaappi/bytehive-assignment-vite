import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react/display-name": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-unused-vars": "error",
      semi: ["error", "always"],
      "eol-last": ["error", "always"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
    },
    ignores: ["dist", "src/components/ui/*", "src/client-static/zod-schemas/*.ts", "src/client/**/*.ts"],
  },
);
