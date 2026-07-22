import { defineConfig } from "oxlint";
import type { OxlintConfig } from "oxlint";

import { ignorePatterns } from "./linting-and-formatting-ignore-patterns.ts";

export default defineConfig<OxlintConfig>({
  plugins: ["eslint", "import", "oxc", "oxc", "typescript", "unicorn"],
  categories: {
    correctness: "error",
    suspicious: "error",
  },
  rules: {
    // Enabled by the categories but we don't want to enforce
    "import/no-unassigned-import": "off",

    // Enabled by the categories but disabled for now, PRs welcome (even if only partial)
    "eslint/no-shadow": "off",
    "eslint/no-underscore-dangle": "off", // We'll eventually migrate to # (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
    "unicorn/consistent-function-scoping": "off",
    "unicorn/prefer-add-event-listener": "off",

    // Enabled beyond the categories
    "eslint/guard-for-in": "error",
    "eslint/no-array-constructor": "error",
    "eslint/no-console": [
      "error",
      {
        allow: [
          "assert",
          "count",
          "countReset",
          "dir",
          "dirxml",
          "error",
          "group",
          "groupCollapsed",
          "groupEnd",
          "info",
          "table",
          "time",
          "timeEnd",
          "timeLog",
          "timeStamp",
          "trace",
          "warn",
        ],
      },
    ],
    "eslint/no-empty": "error",
    "eslint/no-regex-spaces": "error",
    "eslint/no-useless-return": "error",
    "eslint/no-var": "error",
    "eslint/sort-imports": ["error", { ignoreDeclarationSort: true }],
    "eslint/unicode-bom": "error",
    "import/consistent-type-specifier-style": "error",
    "import/no-cycle": "error",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-default": "error",
    "typescript/array-type": "error",
    "typescript/explicit-member-accessibility": "error",
    "typescript/no-import-type-side-effects": "error",
    "typescript/no-non-null-asserted-nullish-coalescing": "error",
    "typescript/non-nullable-type-assertion-style": "error",
    "typescript/only-throw-error": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-length-as-slice-end": "error",
    "unicorn/prefer-node-protocol": "error",
    "vitest/consistent-test-it": "error",
    "vitest/no-test-prefixes": "error",
  },
  overrides: [
    {
      files: ["lib/**"],
      rules: {
        "import/no-nodejs-modules": "error",
      },
    },
    {
      files: ["docs/**"],
      globals: {
        jQuery: "readonly",
      },
      rules: {
        "eslint/block-scoped-var": "off",
        "eslint/no-console": "off",
        "eslint/no-control-regex": "off",
        "eslint/no-self-assign": "off",
        "eslint/no-sparse-arrays": "off",
        "eslint/no-unexpected-multiline": "off",
        "eslint/no-unused-expressions": "off",
        "eslint/no-unused-vars": "off",
        "eslint/no-useless-concat": "off",
        "eslint/no-useless-escape": "off",
        "eslint/no-var": "off",
        "unicorn/no-array-sort": "off",
        "unicorn/prefer-string-starts-ends-with": "off",
      },
    },
    {
      files: ["cypress/**", "**/*.test.js", "**/*.test.ts"],
      rules: {
        "eslint/no-unused-expressions": "off",
      },
    },
  ],
  ignorePatterns,
});
