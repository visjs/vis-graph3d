PR.registerLangHandler(
  PR.createSimpleLexer(
    [
      ["pln", /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"],
      [
        "com",
        /^#(?:if[\t\n\r \xA0]+(?:[a-z_$][\w\']*|``[^\r\n\t`]*(?:``|$))|else|endif|light)/i,
        null,
        "#",
      ],
      [
        "str",
        /^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])*(?:\'|$))/,
        null,
        "\"'",
      ],
    ],
    [
      ["com", /^(?:\/\/[^\r\n]*|\(\*[\s\S]*?\*\))/],
      [
        "kwd",
        /^(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\b/,
      ],
      [
        "lit",
        /^[+\-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i,
      ],
      ["pln", /^(?:[a-z_]\w*[!?#]?|``[^\r\n\t`]*(?:``|$))/i],
      ["pun", /^[^\t\n\r \xA0\"\'\w]+/],
    ],
  ),
  ["fs", "ml"],
);
