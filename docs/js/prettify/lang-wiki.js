PR.registerLangHandler(
  PR.createSimpleLexer(
    [
      [
        "pln",
        /^[\t \xA0a-gi-z0-9]+/,
        null,
        "\t \u00a0abcdefgijklmnopqrstuvwxyz0123456789",
      ],
      ["pun", /^[=*~\^\[\]]+/, null, "=*~^[]"],
    ],
    [
      ["lang-wiki.meta", /(?:^^|\r\n?|\n)(#[a-z]+)\b/],
      ["lit", /^(?:[A-Z][a-z][a-z0-9]+[A-Z][a-z][a-zA-Z0-9]+)\b/],
      ["lang-", /^\{\{\{([\s\S]+?)\}\}\}/],
      ["lang-", /^`([^\r\n`]+)`/],
      ["str", /^https?:\/\/[^\/?#\s]*(?:\/[^?#\s]*)?(?:\?[^#\s]*)?(?:#\S*)?/i],
      ["pln", /^(?:\r\n|[\s\S])[^#=*~^A-Zh\{`\[\r\n]*/],
    ],
  ),
  ["wiki"],
);
PR.registerLangHandler(
  PR.createSimpleLexer([["kwd", /^#[a-z]+/i, null, "#"]], []),
  ["wiki.meta"],
);
