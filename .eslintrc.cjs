module.exports = {
  extends: [require.resolve("vis-dev-utils/eslint-shareable-config")],
  env: {
    commonjs: true,
  },
  rules: {},
  overrides: [
    {
      files: ["docs/**"],
      globals: {
        jQuery: "readonly",
      },
      rules: {
        "no-console": "off",
        "no-control-regex": "off",
        "no-prototype-builtins": "off",
        "no-redeclare": "off",
        "no-self-assign": "off",
        "no-sparse-arrays": "off",
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-useless-escape": "off",
        "no-var": "off",
        "prefer-const": "off",
      },
    },
    {
      files: ["docs/js/prettify/**"],
      globals: {
        PR: "readonly",
      },
    },
  ],
};
