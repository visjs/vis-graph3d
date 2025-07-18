PR.registerLangHandler(
  PR.createSimpleLexer(
    [["pln", /^[ \t\r\n\f]+/, null, " \t\r\n\u000c"]],
    [
      ["str", /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/, null],
      ["str", /^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/, null],
      ["lang-css-str", /^url\(([^\)\"\']*)\)/i],
      [
        "kwd",
        /^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,
        null,
      ],
      [
        "lang-css-kw",
        /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i,
      ],
      ["com", /^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],
      ["com", /^(?:<!--|--\>)/],
      ["lit", /^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],
      ["lit", /^#(?:[0-9a-f]{3}){1,2}/i],
      [
        "pln",
        /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i,
      ],
      ["pun", /^[^\s\w\'\"]+/],
    ],
  ),
  ["css"],
);
PR.registerLangHandler(
  PR.createSimpleLexer(
    [],
    [
      [
        "kwd",
        /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i,
      ],
    ],
  ),
  ["css-kw"],
);
PR.registerLangHandler(PR.createSimpleLexer([], [["str", /^[^\)\"\']+/]]), [
  "css-str",
]);
