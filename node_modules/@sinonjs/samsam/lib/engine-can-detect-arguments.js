"use strict";

var getClass = require("./get-class");

// This is for IE11, which can't reliably detect arguments
// However, it allows use of callee in strict mode without blowing up
module.exports = (function test() {
    return getClass(arguments) === "Arguments";
})();
