"use strict";

var every = require("@sinonjs/commons").prototypes.array.every;
var typeOf = require("@sinonjs/commons").typeOf;

var deepEqual = require("../deep-equal");

var isMatcher = require("./is-matcher");
/**
 * Matches `actual` with `expectation`
 *
 * @private
 * @param {*} actual A value to examine
 * @param {object} expectation An object with properties to match on
 * @returns {boolean} Returns true when `actual` matches all properties in `expectation`
 */
function matchObject(actual, expectation) {
    if (actual === null || actual === undefined) {
        return false;
    }

    return every(Object.keys(expectation), function(key) {
        var exp = expectation[key];
        var act = actual[key];

        if (isMatcher(exp)) {
            if (!exp.test(act)) {
                return false;
            }
        } else if (typeOf(exp) === "object") {
            if (!matchObject(act, exp)) {
                return false;
            }
        } else if (!deepEqual(act, exp)) {
            return false;
        }

        return true;
    });
}

module.exports = matchObject;
