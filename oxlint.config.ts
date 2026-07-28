import { defineConfig } from "oxlint";
import type { OxlintConfig } from "oxlint";
import oxlintSharedConfig from "vis-dev-utils/oxlint-shared-config";

import { ignorePatterns } from "./linting-and-formatting-ignore-patterns.ts";

export default defineConfig<OxlintConfig>({
  extends: [oxlintSharedConfig],
  rules: {
    // Enabled by the categories but disabled for now, PRs welcome (even if only partial)
    "eslint/no-shadow": "off",
    "eslint/no-underscore-dangle": "off", // We'll eventually migrate to # (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
    "unicorn/consistent-function-scoping": "off",
    "unicorn/prefer-add-event-listener": "off",
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
