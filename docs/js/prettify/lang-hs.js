PR.registerLangHandler(
  PR.createSimpleLexer(
    [
      ["pln", /^[\t\n\x0B\x0C\r ]+/, null, "\t\n\u000b\u000c\r "],
      ["str", /^\"(?:[^\"\\\n\x0C\r]|\\[\s\S])*(?:\"|$)/, null, '"'],
      ["str", /^\'(?:[^\'\\\n\x0C\r]|\\[^&])\'?/, null, "'"],
      [
        "lit",
        /^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i,
        null,
        "0123456789",
      ],
    ],
    [
      ["com", /^(?:(?:--+(?:[^\r\n\x0C]*)?)|(?:\{-(?:[^-]|-+[^-\}])*-\}))/],
      [
        "kwd",
        /^(?:case|class|data|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|then|type|where|_)(?=[^a-zA-Z0-9\']|$)/,
        null,
      ],
      ["pln", /^(?:[A-Z][\w\']*\.)*[a-zA-Z][\w\']*/],
      ["pun", /^[^\t\n\x0B\x0C\r a-zA-Z0-9\'\"]+/],
    ],
  ),
  ["hs"],
);
