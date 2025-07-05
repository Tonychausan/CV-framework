import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import { globalIgnores } from "eslint/config"
import pluginReact from "eslint-plugin-react"
import pluginImport from "eslint-plugin-import"

export default tseslint.config([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  globalIgnores(["dist", "node_modules", "build"]),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    plugins: {
      react: pluginReact,
      import: pluginImport,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      quotes: ["error", "double", { avoidEscape: true }],
      "import/order": ["warn", { "newlines-between": "always" }],
      "react/react-in-jsx-scope": "off",
    },
  },
])
