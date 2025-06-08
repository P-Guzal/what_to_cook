import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "tailwind.config.js",
      "vite.config.ts",
      "postcss.config.js",
      ".vite/**",
    ],
  },
  {
    files: ["**/*.{jsx, js}"],
    rules: {
      "react/prop-types": "off",
    },
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
