"use strict";

var valueToString = require("@sinonjs/commons").valueToString;
var indexOf = require("@sinonjs/commons").prototypes.string.indexOf;
var forEach = require("@sinonjs/commons").prototypes.array.forEach;

var deepEqual = require("./deep-equal").use(match); // eslint-disable-line no-use-before-define
var getClass = require("./get-class");
var isDate = require("./is-date");
var isSet = require("./is-set");
var isSubset = require("./is-subset");
var createMatcher = require("./create-matcher");

/**
 * Returns true when `array` contains all of `subset` as defined by the `compare`
 * argument
 *
 * @param  {Array} array   An array to search for a subset
 * @param  {Array} subset  The subset to find in the array
 * @param  {Function} compare A comparison function
 * @returns {boolean}         [description]
 * @private
 */
function arrayContains(array, subset, compare) {
    if (subset.length === 0) {
        return true;
    }
    var i, l, j, k;
    for (i = 0, l = array.length; i < l; ++i) {
        if (compare(array[i], subset[0])) {
            for (j = 0, k = subset.length; j < k; ++j) {
                if (i + j >= l) {
                    return false;
                }
                if (!compare(array[i + j], subset[j])) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}

/* eslint-disable complexity */
/**
 * Matches an object with a matcher (or value)
 *
 * @alias module:samsam.match
 * @param {object} object The object candidate to match
 * @param {object} matcherOrValue A matcher or value to match against
 * @returns {boolean} true when `object` matches `matcherOrValue`
 */
function match(object, matcherOrValue) {
    if (matcherOrValue && typeof matcherOrValue.test === "function") {
        return matcherOrValue.test(object);
    }

    if (typeof matcherOrValue === "function") {
        return matcherOrValue(object) === true;
    }

    if (typeof matcherOrValue === "string") {
        var notNull = typeof object === "string" || Boolean(object);
        return (
            notNull &&
            indexOf(
                valueToString(object).toLowerCase(),
                matcherOrValue.toLowerCase()
            ) >= 0
        );
    }

    if (typeof matcherOrValue === "number") {
        return matcherOrValue === object;
    }

    if (typeof matcherOrValue === "boolean") {
        return matcherOrValue === object;
    }

    if (typeof matcherOrValue === "bigint") {
        return matcherOrValue === object;
    }

    if (typeof matcherOrValue === "undefined") {
        return typeof object === "undefined";
    }

    if (typeof matcherOrValue === "symbol") {
        return matcherOrValue === object;
    }

    if (matcherOrValue === null) {
        return object === null;
    }

    if (object === null) {
        return false;
    }

    if (isSet(object)) {
        return isSubset(matcherOrValue, object, match);
    }

    if (getClass(object) === "Array" && getClass(matcherOrValue) === "Array") {
        return arrayContains(object, matcherOrValue, match);
    }

    if (isDate(matcherOrValue)) {
        return isDate(object) && object.getTime() === matcherOrValue.getTime();
    }

    if (matcherOrValue && typeof matcherOrValue === "object") {
        if (matcherOrValue === object) {
            return true;
        }
        if (typeof object !== "object") {
            return false;
        }
        var prop;
        // eslint-disable-next-line guard-for-in
        for (prop in matcherOrValue) {
            var value = object[prop];
            if (
                typeof value === "undefined" &&
                typeof object.getAttribute === "function"
            ) {
                value = object.getAttribute(prop);
            }
            if (
                matcherOrValue[prop] === null ||
                typeof matcherOrValue[prop] === "undefined"
            ) {
                if (value !== matcherOrValue[prop]) {
                    return false;
                }
            } else if (
                typeof value === "undefined" ||
                !deepEqual(value, matcherOrValue[prop])
            ) {
                return false;
            }
        }
        return true;
    }

    /* istanbul ignore next */
    throw new Error("Matcher was an unknown or unsupported type");
}
/* eslint-enable complexity */

forEach(Object.keys(createMatcher), function(key) {
    match[key] = createMatcher[key];
});

module.exports = match;
