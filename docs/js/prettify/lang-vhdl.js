PR.registerLangHandler(
  PR.createSimpleLexer(
    [["pln", /^[\t\n\r \xA0]+/, null, "\t\n\r \u00a0"]],
    [
      ["str", /^(?:[BOX]?"(?:[^\"]|"")*"|'.')/i],
      ["com", /^--[^\r\n]*/],
      [
        "kwd",
        /^(?:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with|xnor|xor)(?=[^\w-]|$)/i,
        null,
      ],
      [
        "typ",
        /^(?:bit|bit_vector|character|boolean|integer|real|time|string|severity_level|positive|natural|signed|unsigned|line|text|std_u?logic(?:_vector)?)(?=[^\w-]|$)/i,
        null,
      ],
      [
        "typ",
        /^\'(?:ACTIVE|ASCENDING|BASE|DELAYED|DRIVING|DRIVING_VALUE|EVENT|HIGH|IMAGE|INSTANCE_NAME|LAST_ACTIVE|LAST_EVENT|LAST_VALUE|LEFT|LEFTOF|LENGTH|LOW|PATH_NAME|POS|PRED|QUIET|RANGE|REVERSE_RANGE|RIGHT|RIGHTOF|SIMPLE_NAME|STABLE|SUCC|TRANSACTION|VAL|VALUE)(?=[^\w-]|$)/i,
        null,
      ],
      [
        "lit",
        /^\d+(?:_\d+)*(?:#[\w\\.]+#(?:[+\-]?\d+(?:_\d+)*)?|(?:\.\d+(?:_\d+)*)?(?:E[+\-]?\d+(?:_\d+)*)?)/i,
      ],
      ["pln", /^(?:[a-z]\w*|\\[^\\]*\\)/i],
      ["pun", /^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0\-\"\']*/],
    ],
  ),
  ["vhdl", "vhd"],
);
