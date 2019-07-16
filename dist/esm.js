/** 
 * vis-graph3d - data
 * http://visjs.org/
 * 
 * Create interactive, animated 3d graphs. Surfaces, lines, dots and block styling out of the box.
 * 
 * @version 5.0.0
 * @date    2019-07-16T14:14:19Z
 * 
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2018-2019 visjs contributors, https://github.com/visjs
 * 
 * @license 
 * vis.js is dual licensed under both
 * 
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *   and
 * 
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 * 
 * vis.js may be distributed under either license.
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire() {
  throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var moment = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function () {
    var hookCallback;

    function hooks() {
      return hookCallback.apply(null, arguments);
    } // This is done to register the method called with moment()
    // without creating circular dependencies.


    function setHookCallback(callback) {
      hookCallback = callback;
    }

    function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
      // IE8 will treat undefined and null as object if it wasn't for
      // input != null
      return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
      } else {
        var k;

        for (k in obj) {
          if (obj.hasOwnProperty(k)) {
            return false;
          }
        }

        return true;
      }
    }

    function isUndefined(input) {
      return input === void 0;
    }

    function isNumber(input) {
      return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
      var res = [],
          i;

      for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
      }

      return res;
    }

    function hasOwnProp(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
      for (var i in b) {
        if (hasOwnProp(b, i)) {
          a[i] = b[i];
        }
      }

      if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
      }

      if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
      }

      return a;
    }

    function createUTC(input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
      // We need to deep clone this object.
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
      };
    }

    function getParsingFlags(m) {
      if (m._pf == null) {
        m._pf = defaultParsingFlags();
      }

      return m._pf;
    }

    var some;

    if (Array.prototype.some) {
      some = Array.prototype.some;
    } else {
      some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
          if (i in t && fun.call(this, t[i], i, t)) {
            return true;
          }
        }

        return false;
      };
    }

    function isValid(m) {
      if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
          return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

        if (m._strict) {
          isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
          m._isValid = isNowValid;
        } else {
          return isNowValid;
        }
      }

      return m._isValid;
    }

    function createInvalid(flags) {
      var m = createUTC(NaN);

      if (flags != null) {
        extend(getParsingFlags(m), flags);
      } else {
        getParsingFlags(m).userInvalidated = true;
      }

      return m;
    } // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.


    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
      var i, prop, val;

      if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
      }

      if (!isUndefined(from._i)) {
        to._i = from._i;
      }

      if (!isUndefined(from._f)) {
        to._f = from._f;
      }

      if (!isUndefined(from._l)) {
        to._l = from._l;
      }

      if (!isUndefined(from._strict)) {
        to._strict = from._strict;
      }

      if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
      }

      if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
      }

      if (!isUndefined(from._offset)) {
        to._offset = from._offset;
      }

      if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
      }

      if (!isUndefined(from._locale)) {
        to._locale = from._locale;
      }

      if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
          prop = momentProperties[i];
          val = from[prop];

          if (!isUndefined(val)) {
            to[prop] = val;
          }
        }
      }

      return to;
    }

    var updateInProgress = false; // Moment prototype object

    function Moment(config) {
      copyConfig(this, config);
      this._d = new Date(config._d != null ? config._d.getTime() : NaN);

      if (!this.isValid()) {
        this._d = new Date(NaN);
      } // Prevent infinite loop in case updateOffset creates new moment
      // objects.


      if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
      }
    }

    function isMoment(obj) {
      return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }

    function absFloor(number) {
      if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
      } else {
        return Math.floor(number);
      }
    }

    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion,
          value = 0;

      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
      }

      return value;
    } // compare two arrays, return the number of differences


    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length),
          lengthDiff = Math.abs(array1.length - array2.length),
          diffs = 0,
          i;

      for (i = 0; i < len; i++) {
        if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
          diffs++;
        }
      }

      return diffs + lengthDiff;
    }

    function warn(msg) {
      if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
        console.warn('Deprecation warning: ' + msg);
      }
    }

    function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function () {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(null, msg);
        }

        if (firstTime) {
          var args = [];
          var arg;

          for (var i = 0; i < arguments.length; i++) {
            arg = '';

            if (typeof arguments[i] === 'object') {
              arg += '\n[' + i + '] ';

              for (var key in arguments[0]) {
                arg += key + ': ' + arguments[0][key] + ', ';
              }

              arg = arg.slice(0, -2); // Remove trailing comma and space
            } else {
              arg = arguments[i];
            }

            args.push(arg);
          }

          warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
          firstTime = false;
        }

        return fn.apply(this, arguments);
      }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
      }

      if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
      }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
      return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set(config) {
      var prop, i;

      for (i in config) {
        prop = config[i];

        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this['_' + i] = prop;
        }
      }

      this._config = config; // Lenient ordinal parsing accepts just a number in addition to
      // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
      // TODO: Remove "ordinalParse" fallback in next major release.

      this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }

    function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig),
          prop;

      for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
          if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
            res[prop] = {};
            extend(res[prop], parentConfig[prop]);
            extend(res[prop], childConfig[prop]);
          } else if (childConfig[prop] != null) {
            res[prop] = childConfig[prop];
          } else {
            delete res[prop];
          }
        }
      }

      for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
          // make sure changes to properties don't modify parent config
          res[prop] = extend({}, res[prop]);
        }
      }

      return res;
    }

    function Locale(config) {
      if (config != null) {
        this.set(config);
      }
    }

    var keys;

    if (Object.keys) {
      keys = Object.keys;
    } else {
      keys = function (obj) {
        var i,
            res = [];

        for (i in obj) {
          if (hasOwnProp(obj, i)) {
            res.push(i);
          }
        }

        return res;
      };
    }

    var defaultCalendar = {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    };

    function calendar(key, mom, now) {
      var output = this._calendar[key] || this._calendar['sameElse'];
      return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
      LTS: 'h:mm:ss A',
      LT: 'h:mm A',
      L: 'MM/DD/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat(key) {
      var format = this._longDateFormat[key],
          formatUpper = this._longDateFormat[key.toUpperCase()];

      if (format || !formatUpper) {
        return format;
      }

      this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
      });
      return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
      return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
      return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
      var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
      return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
      var lowerCase = unit.toLowerCase();
      aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
      return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {},
          normalizedProp,
          prop;

      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);

          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }

      return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
      priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
      var units = [];

      for (var u in unitsObj) {
        units.push({
          unit: u,
          priority: priorities[u]
        });
      }

      units.sort(function (a, b) {
        return a.priority - b.priority;
      });
      return units;
    }

    function zeroFill(number, targetLength, forceSign) {
      var absNumber = '' + Math.abs(number),
          zerosToFill = targetLength - absNumber.length,
          sign = number >= 0;
      return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var formatFunctions = {};
    var formatTokenFunctions = {}; // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }

    function addFormatToken(token, padded, ordinal, callback) {
      var func = callback;

      if (typeof callback === 'string') {
        func = function () {
          return this[callback]();
        };
      }

      if (token) {
        formatTokenFunctions[token] = func;
      }

      if (padded) {
        formatTokenFunctions[padded[0]] = function () {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
      }

      if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
          return this.localeData().ordinal(func.apply(this, arguments), token);
        };
      }
    }

    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
      }

      return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
      var array = format.match(formattingTokens),
          i,
          length;

      for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }

      return function (mom) {
        var output = '',
            i;

        for (i = 0; i < length; i++) {
          output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }

        return output;
      };
    } // format date using native date object


    function formatMoment(m, format) {
      if (!m.isValid()) {
        return m.localeData().invalidDate();
      }

      format = expandFormat(format, m.localeData());
      formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
      return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
      var i = 5;

      function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
      }

      localFormattingTokens.lastIndex = 0;

      while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
      }

      return format;
    }

    var match1 = /\d/; //       0 - 9

    var match2 = /\d\d/; //      00 - 99

    var match3 = /\d{3}/; //     000 - 999

    var match4 = /\d{4}/; //    0000 - 9999

    var match6 = /[+-]?\d{6}/; // -999999 - 999999

    var match1to2 = /\d\d?/; //       0 - 99

    var match3to4 = /\d\d\d\d?/; //     999 - 9999

    var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

    var match1to3 = /\d{1,3}/; //       0 - 999

    var match1to4 = /\d{1,4}/; //       0 - 9999

    var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

    var matchUnsigned = /\d+/; //       0 - inf

    var matchSigned = /[+-]?\d+/; //    -inf - inf

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months

    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    var regexes = {};

    function addRegexToken(token, regex, strictRegex) {
      regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return isStrict && strictRegex ? strictRegex : regex;
      };
    }

    function getParseRegexForToken(token, config) {
      if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
      }

      return regexes[token](config._strict, config._locale);
    } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


    function unescapeFormat(s) {
      return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
      }));
    }

    function regexEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
      var i,
          func = callback;

      if (typeof token === 'string') {
        token = [token];
      }

      if (isNumber(callback)) {
        func = function (input, array) {
          array[callback] = toInt(input);
        };
      }

      for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
      }
    }

    function addWeekParseToken(token, callback) {
      addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
      });
    }

    function addTimeToArrayFromToken(token, input, config) {
      if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
      }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8; // FORMATTING

    addFormatToken('Y', 0, 0, function () {
      var y = this.year();
      return y <= 9999 ? '' + y : '+' + y;
    });
    addFormatToken(0, ['YY', 2], 0, function () {
      return this.year() % 100;
    });
    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

    addUnitAlias('year', 'y'); // PRIORITIES

    addUnitPriority('year', 1); // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
      array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
      array[YEAR] = parseInt(input, 10);
    }); // HELPERS

    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    } // HOOKS


    hooks.parseTwoDigitYear = function (input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    }; // MOMENTS


    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
      return isLeapYear(this.year());
    }

    function makeGetSet(unit, keepTime) {
      return function (value) {
        if (value != null) {
          set$1(this, unit, value);
          hooks.updateOffset(this, keepTime);
          return this;
        } else {
          return get(this, unit);
        }
      };
    }

    function get(mom, unit) {
      return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1(mom, unit, value) {
      if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        } else {
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
      }
    } // MOMENTS


    function stringGet(units) {
      units = normalizeUnits(units);

      if (isFunction(this[units])) {
        return this[units]();
      }

      return this;
    }

    function stringSet(units, value) {
      if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);

        for (var i = 0; i < prioritized.length; i++) {
          this[prioritized[i].unit](units[prioritized[i].unit]);
        }
      } else {
        units = normalizeUnits(units);

        if (isFunction(this[units])) {
          return this[units](value);
        }
      }

      return this;
    }

    function mod(n, x) {
      return (n % x + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function (o) {
        // I know
        var i;

        for (i = 0; i < this.length; ++i) {
          if (this[i] === o) {
            return i;
          }
        }

        return -1;
      };
    }

    function daysInMonth(year, month) {
      if (isNaN(year) || isNaN(month)) {
        return NaN;
      }

      var modMonth = mod(month, 12);
      year += (month - modMonth) / 12;
      return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    } // FORMATTING


    addFormatToken('M', ['MM', 2], 'Mo', function () {
      return this.month() + 1;
    });
    addFormatToken('MMM', 0, 0, function (format) {
      return this.localeData().monthsShort(this, format);
    });
    addFormatToken('MMMM', 0, 0, function (format) {
      return this.localeData().months(this, format);
    }); // ALIASES

    addUnitAlias('month', 'M'); // PRIORITY

    addUnitPriority('month', 8); // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
      return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
      return locale.monthsRegex(isStrict);
    });
    addParseToken(['M', 'MM'], function (input, array) {
      array[MONTH] = toInt(input) - 1;
    });
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
      var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


      if (month != null) {
        array[MONTH] = month;
      } else {
        getParsingFlags(config).invalidMonth = input;
      }
    }); // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');

    function localeMonths(m, format) {
      if (!m) {
        return isArray(this._months) ? this._months : this._months['standalone'];
      }

      return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');

    function localeMonthsShort(m, format) {
      if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
      }

      return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
      var i,
          ii,
          mom,
          llc = monthName.toLocaleLowerCase();

      if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];

        for (i = 0; i < 12; ++i) {
          mom = createUTC([2000, i]);
          this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
          this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
      }

      if (strict) {
        if (format === 'MMM') {
          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format === 'MMM') {
          ii = indexOf.call(this._shortMonthsParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }

    function localeMonthsParse(monthName, format, strict) {
      var i, mom, regex;

      if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
      }

      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      } // TODO: add sorting
      // Sorting makes sure if one month (or abbr) is a prefix of another
      // see sorting in computeMonthsParse


      for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);

        if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
          this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }

        if (!strict && !this._monthsParse[i]) {
          regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
          this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        } // test the regex


        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
          return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
          return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    } // MOMENTS


    function setMonth(mom, value) {
      var dayOfMonth;

      if (!mom.isValid()) {
        // No op
        return mom;
      }

      if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
          value = toInt(value);
        } else {
          value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

          if (!isNumber(value)) {
            return mom;
          }
        }
      }

      dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

      mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

      return mom;
    }

    function getSetMonth(value) {
      if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
      } else {
        return get(this, 'Month');
      }
    }

    function getDaysInMonth() {
      return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;

    function monthsShortRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
        }

        if (isStrict) {
          return this._monthsShortStrictRegex;
        } else {
          return this._monthsShortRegex;
        }
      } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
          this._monthsShortRegex = defaultMonthsShortRegex;
        }

        return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
      }
    }

    var defaultMonthsRegex = matchWord;

    function monthsRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
        }

        if (isStrict) {
          return this._monthsStrictRegex;
        } else {
          return this._monthsRegex;
        }
      } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
          this._monthsRegex = defaultMonthsRegex;
        }

        return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
      }
    }

    function computeMonthsParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }

      var shortPieces = [],
          longPieces = [],
          mixedPieces = [],
          i,
          mom;

      for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
      } // Sorting makes sure if one month (or abbr) is a prefix of another it
      // will match the longer piece.


      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);

      for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
      }

      for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
      this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate(y, m, d, h, M, s, ms) {
      // can't just apply() to create a date:
      // https://stackoverflow.com/q/181348
      var date; // the date constructor remaps years 0-99 to 1900-1999

      if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        date = new Date(y + 400, m, d, h, M, s, ms);

        if (isFinite(date.getFullYear())) {
          date.setFullYear(y);
        }
      } else {
        date = new Date(y, m, d, h, M, s, ms);
      }

      return date;
    }

    function createUTCDate(y) {
      var date; // the Date.UTC function remaps years 0-99 to 1900-1999

      if (y < 100 && y >= 0) {
        var args = Array.prototype.slice.call(arguments); // preserve leap years using a full 400 year cycle, then reset

        args[0] = y + 400;
        date = new Date(Date.UTC.apply(null, args));

        if (isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(y);
        }
      } else {
        date = new Date(Date.UTC.apply(null, arguments));
      }

      return date;
    } // start-of-first-week - start-of-year


    function firstWeekOffset(year, dow, doy) {
      var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
      fwd = 7 + dow - doy,
          // first-week day local weekday -- which local weekday is fwd
      fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7,
          weekOffset = firstWeekOffset(year, dow, doy),
          dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
          resYear,
          resDayOfYear;

      if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
      } else {
        resYear = year;
        resDayOfYear = dayOfYear;
      }

      return {
        year: resYear,
        dayOfYear: resDayOfYear
      };
    }

    function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy),
          week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
          resWeek,
          resYear;

      if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
      } else {
        resYear = mom.year();
        resWeek = week;
      }

      return {
        week: resWeek,
        year: resYear
      };
    }

    function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy),
          weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    } // FORMATTING


    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W'); // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5); // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
      week[token.substr(0, 1)] = toInt(input);
    }); // HELPERS
    // LOCALES

    function localeWeek(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.

    };

    function localeFirstDayOfWeek() {
      return this._week.dow;
    }

    function localeFirstDayOfYear() {
      return this._week.doy;
    } // MOMENTS


    function getSetWeek(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, 'd');
    } // FORMATTING


    addFormatToken('d', 0, 'do', 'day');
    addFormatToken('dd', 0, 0, function (format) {
      return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken('ddd', 0, 0, function (format) {
      return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken('dddd', 0, 0, function (format) {
      return this.localeData().weekdays(this, format);
    });
    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E'); // PRIORITY

    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11); // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
      return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
      return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
      return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
      var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


      if (weekday != null) {
        week.d = weekday;
      } else {
        getParsingFlags(config).invalidWeekday = input;
      }
    });
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
      week[token] = toInt(input);
    }); // HELPERS

    function parseWeekday(input, locale) {
      if (typeof input !== 'string') {
        return input;
      }

      if (!isNaN(input)) {
        return parseInt(input, 10);
      }

      input = locale.weekdaysParse(input);

      if (typeof input === 'number') {
        return input;
      }

      return null;
    }

    function parseIsoWeekday(input, locale) {
      if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
      }

      return isNaN(input) ? null : input;
    } // LOCALES


    function shiftWeekdays(ws, n) {
      return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');

    function localeWeekdays(m, format) {
      var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
      return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

    function localeWeekdaysShort(m) {
      return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');

    function localeWeekdaysMin(m) {
      return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
      var i,
          ii,
          mom,
          llc = weekdayName.toLocaleLowerCase();

      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
          mom = createUTC([2000, 1]).day(i);
          this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
          this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
          this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
      }

      if (strict) {
        if (format === 'dddd') {
          ii = indexOf.call(this._weekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format === 'dddd') {
          ii = indexOf.call(this._weekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._shortWeekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
          ii = indexOf.call(this._shortWeekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._weekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._weekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
      var i, mom, regex;

      if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
      }

      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
      }

      for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);

        if (strict && !this._fullWeekdaysParse[i]) {
          this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
          this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
          this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
        }

        if (!this._weekdaysParse[i]) {
          regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
          this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        } // test the regex


        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
          return i;
        }
      }
    } // MOMENTS


    function getSetDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
      } else {
        return day;
      }
    }

    function getSetLocaleDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      } // behaves the same as moment#day except
      // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
      // as a setter, sunday should belong to the previous week.


      if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
        return this.day() || 7;
      }
    }

    var defaultWeekdaysRegex = matchWord;

    function weekdaysRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }

        if (isStrict) {
          return this._weekdaysStrictRegex;
        } else {
          return this._weekdaysRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          this._weekdaysRegex = defaultWeekdaysRegex;
        }

        return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
      }
    }

    var defaultWeekdaysShortRegex = matchWord;

    function weekdaysShortRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }

        if (isStrict) {
          return this._weekdaysShortStrictRegex;
        } else {
          return this._weekdaysShortRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }

        return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
      }
    }

    var defaultWeekdaysMinRegex = matchWord;

    function weekdaysMinRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }

        if (isStrict) {
          return this._weekdaysMinStrictRegex;
        } else {
          return this._weekdaysMinRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }

        return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
      }
    }

    function computeWeekdaysParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }

      var minPieces = [],
          shortPieces = [],
          longPieces = [],
          mixedPieces = [],
          i,
          mom,
          minp,
          shortp,
          longp;

      for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
      } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
      // will match the longer piece.


      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);

      for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;
      this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
      this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
      this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    } // FORMATTING


    function hFormat() {
      return this.hours() % 12 || 12;
    }

    function kFormat() {
      return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);
    addFormatToken('hmm', 0, 0, function () {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken('hmmss', 0, 0, function () {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken('Hmm', 0, 0, function () {
      return '' + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken('Hmmss', 0, 0, function () {
      return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });

    function meridiem(token, lowercase) {
      addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
      });
    }

    meridiem('a', true);
    meridiem('A', false); // ALIASES

    addUnitAlias('hour', 'h'); // PRIORITY

    addUnitPriority('hour', 13); // PARSING

    function matchMeridiem(isStrict, locale) {
      return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
      config._isPm = config._locale.isPM(input);
      config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
      array[HOUR] = toInt(input);
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
    }); // LOCALES

    function localeIsPM(input) {
      // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
      // Using charAt should be more compatible.
      return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

    function localeMeridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'pm' : 'PM';
      } else {
        return isLower ? 'am' : 'AM';
      }
    } // MOMENTS
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.


    var getSetHour = makeGetSet('Hours', true);
    var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,
      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,
      week: defaultLocaleWeek,
      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,
      meridiemParse: defaultLocaleMeridiemParse
    }; // internal storage for locale config files

    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace('_', '-') : key;
    } // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


    function chooseLocale(names) {
      var i = 0,
          j,
          next,
          locale,
          split;

      while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;

        while (j > 0) {
          locale = loadLocale(split.slice(0, j).join('-'));

          if (locale) {
            return locale;
          }

          if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
            //the next array item is better than a shallower substring of this one
            break;
          }

          j--;
        }

        i++;
      }

      return globalLocale;
    }

    function loadLocale(name) {
      var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

      if (!locales[name] && 'object' !== 'undefined' && module && module.exports) {
        try {
          oldLocale = globalLocale._abbr;
          var aliasedRequire = commonjsRequire;
          aliasedRequire('./locale/' + name);
          getSetGlobalLocale(oldLocale);
        } catch (e) {}
      }

      return locales[name];
    } // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.


    function getSetGlobalLocale(key, values) {
      var data;

      if (key) {
        if (isUndefined(values)) {
          data = getLocale(key);
        } else {
          data = defineLocale(key, values);
        }

        if (data) {
          // moment.duration._locale = moment._locale = data;
          globalLocale = data;
        } else {
          if (typeof console !== 'undefined' && console.warn) {
            //warn user if arguments are passed but the locale could not be set
            console.warn('Locale ' + key + ' not found. Did you forget to load it?');
          }
        }
      }

      return globalLocale._abbr;
    }

    function defineLocale(name, config) {
      if (config !== null) {
        var locale,
            parentConfig = baseConfig;
        config.abbr = name;

        if (locales[name] != null) {
          deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
          parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
          if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
          } else {
            locale = loadLocale(config.parentLocale);

            if (locale != null) {
              parentConfig = locale._config;
            } else {
              if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
              }

              localeFamilies[config.parentLocale].push({
                name: name,
                config: config
              });
              return null;
            }
          }
        }

        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
          localeFamilies[name].forEach(function (x) {
            defineLocale(x.name, x.config);
          });
        } // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.


        getSetGlobalLocale(name);
        return locales[name];
      } else {
        // useful for testing
        delete locales[name];
        return null;
      }
    }

    function updateLocale(name, config) {
      if (config != null) {
        var locale,
            tmpLocale,
            parentConfig = baseConfig; // MERGE

        tmpLocale = loadLocale(name);

        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }

        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale; // backwards compat for now: also set the locale

        getSetGlobalLocale(name);
      } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
            locales[name] = locales[name].parentLocale;
          } else if (locales[name] != null) {
            delete locales[name];
          }
        }
      }

      return locales[name];
    } // returns locale data


    function getLocale(key) {
      var locale;

      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }

      if (!key) {
        return globalLocale;
      }

      if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);

        if (locale) {
          return locale;
        }

        key = [key];
      }

      return chooseLocale(key);
    }

    function listLocales() {
      return keys(locales);
    }

    function checkOverflow(m) {
      var overflow;
      var a = m._a;

      if (a && getParsingFlags(m).overflow === -2) {
        overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
        }

        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
        }

        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
      }

      return m;
    } // Pick the first defined of two or three arguments.


    function defaults(a, b, c) {
      if (a != null) {
        return a;
      }

      if (b != null) {
        return b;
      }

      return c;
    }

    function currentDateArray(config) {
      // hooks is actually the exported moment object
      var nowValue = new Date(hooks.now());

      if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
      }

      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    } // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]


    function configFromArray(config) {
      var i,
          date,
          input = [],
          currentDate,
          expectedWeekday,
          yearToUse;

      if (config._d) {
        return;
      }

      currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
      } //if the day of the year is set, figure out what it is


      if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
          getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
      } // Default to current date.
      // * if no year, month, day of month are given, default to today
      // * if day of month is given, default month and year
      // * if month is given, default only year
      // * if year is given, don't default anything


      for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
      } // Zero out whatever was not defaulted, including time


      for (; i < 7; i++) {
        config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
      } // Check for 24:00:00.000


      if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
      }

      config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
      expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
      // with parseZone.

      if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }

      if (config._nextDay) {
        config._a[HOUR] = 24;
      } // check for mismatching day of week


      if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
      }
    }

    function dayOfYearFromWeekInfo(config) {
      var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
      w = config._w;

      if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).

        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);

        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        var curWeek = weekOfYear(createLocal(), dow, doy);
        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
          // weekday -- low day numbers are considered next week
          weekday = w.d;

          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w.e != null) {
          // local weekday -- counting starts from beginning of week
          weekday = w.e + dow;

          if (w.e < 0 || w.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          // default to beginning of week
          weekday = dow;
        }
      }

      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
      } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
      }
    } // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
    var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]]; // iso time formats and regexes

    var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i; // date from iso format

    function configFromISO(config) {
      var i,
          l,
          string = config._i,
          match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
          allowTime,
          dateFormat,
          timeFormat,
          tzFormat;

      if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
          if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
          }
        }

        if (dateFormat == null) {
          config._isValid = false;
          return;
        }

        if (match[3]) {
          for (i = 0, l = isoTimes.length; i < l; i++) {
            if (isoTimes[i][1].exec(match[3])) {
              // match[2] should be 'T' or space
              timeFormat = (match[2] || ' ') + isoTimes[i][0];
              break;
            }
          }

          if (timeFormat == null) {
            config._isValid = false;
            return;
          }
        }

        if (!allowTime && timeFormat != null) {
          config._isValid = false;
          return;
        }

        if (match[4]) {
          if (tzRegex.exec(match[4])) {
            tzFormat = 'Z';
          } else {
            config._isValid = false;
            return;
          }
        }

        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
      } else {
        config._isValid = false;
      }
    } // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3


    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

      if (secondStr) {
        result.push(parseInt(secondStr, 10));
      }

      return result;
    }

    function untruncateYear(yearStr) {
      var year = parseInt(yearStr, 10);

      if (year <= 49) {
        return 2000 + year;
      } else if (year <= 999) {
        return 1900 + year;
      }

      return year;
    }

    function preprocessRFC2822(s) {
      // Remove comments and folding whitespace and replace multiple-spaces with a single space
      return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
      if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

        if (weekdayProvided !== weekdayActual) {
          getParsingFlags(config).weekdayMismatch = true;
          config._isValid = false;
          return false;
        }
      }

      return true;
    }

    var obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
        return obsOffsets[obsOffset];
      } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
      } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100,
            h = (hm - m) / 100;
        return h * 60 + m;
      }
    } // date and time from ref 2822 format


    function configFromRFC2822(config) {
      var match = rfc2822.exec(preprocessRFC2822(config._i));

      if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

        if (!checkWeekday(match[1], parsedArray, config)) {
          return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);
        config._d = createUTCDate.apply(null, config._a);

        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
      } else {
        config._isValid = false;
      }
    } // date from iso format or fallback


    function configFromString(config) {
      var matched = aspNetJsonRegex.exec(config._i);

      if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
      }

      configFromISO(config);

      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }

      configFromRFC2822(config);

      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      } // Final attempt, use Input Fallback


      hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
      config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }); // constant that refers to the ISO standard

    hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


    hooks.RFC_2822 = function () {}; // date from string and format string


    function configFromStringAndFormat(config) {
      // TODO: Move this to another part of the creation flow to prevent circular deps
      if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
      }

      if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
      }

      config._a = [];
      getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

      var string = '' + config._i,
          i,
          parsedInput,
          tokens,
          token,
          skipped,
          stringLength = string.length,
          totalParsedInputLength = 0;
      tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));

        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));

          if (skipped.length > 0) {
            getParsingFlags(config).unusedInput.push(skipped);
          }

          string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
          totalParsedInputLength += parsedInput.length;
        } // don't parse if it's not a known token


        if (formatTokenFunctions[token]) {
          if (parsedInput) {
            getParsingFlags(config).empty = false;
          } else {
            getParsingFlags(config).unusedTokens.push(token);
          }

          addTimeToArrayFromToken(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
          getParsingFlags(config).unusedTokens.push(token);
        }
      } // add remaining unparsed input length to the string


      getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

      if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
      } // clear _12h flag if hour is <= 12


      if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
      }

      getParsingFlags(config).parsedDateParts = config._a.slice(0);
      getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

      config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
      configFromArray(config);
      checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
      var isPm;

      if (meridiem == null) {
        // nothing to do
        return hour;
      }

      if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
      } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);

        if (isPm && hour < 12) {
          hour += 12;
        }

        if (!isPm && hour === 12) {
          hour = 0;
        }

        return hour;
      } else {
        // this is not supposed to happen
        return hour;
      }
    } // date from string and array of format strings


    function configFromStringAndArray(config) {
      var tempConfig, bestMoment, scoreToBeat, i, currentScore;

      if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
      }

      for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);

        if (config._useUTC != null) {
          tempConfig._useUTC = config._useUTC;
        }

        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
          continue;
        } // if there is any input that was not parsed add a penalty for that format


        currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }

      extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
      if (config._d) {
        return;
      }

      var i = normalizeObjectUnits(config._i);
      config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
      });
      configFromArray(config);
    }

    function createFromConfig(config) {
      var res = new Moment(checkOverflow(prepareConfig(config)));

      if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
      }

      return res;
    }

    function prepareConfig(config) {
      var input = config._i,
          format = config._f;
      config._locale = config._locale || getLocale(config._l);

      if (input === null || format === undefined && input === '') {
        return createInvalid({
          nullInput: true
        });
      }

      if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
      }

      if (isMoment(input)) {
        return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
        config._d = input;
      } else if (isArray(format)) {
        configFromStringAndArray(config);
      } else if (format) {
        configFromStringAndFormat(config);
      } else {
        configFromInput(config);
      }

      if (!isValid(config)) {
        config._d = null;
      }

      return config;
    }

    function configFromInput(config) {
      var input = config._i;

      if (isUndefined(input)) {
        config._d = new Date(hooks.now());
      } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
      } else if (typeof input === 'string') {
        configFromString(config);
      } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
          return parseInt(obj, 10);
        });
        configFromArray(config);
      } else if (isObject(input)) {
        configFromObject(config);
      } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
      } else {
        hooks.createFromInputFallback(config);
      }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
      var c = {};

      if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
      }

      if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
        input = undefined;
      } // object construction must be done this way.
      // https://github.com/moment/moment/issues/1423


      c._isAMomentObject = true;
      c._useUTC = c._isUTC = isUTC;
      c._l = locale;
      c._i = input;
      c._f = format;
      c._strict = strict;
      return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
      var other = createLocal.apply(null, arguments);

      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return createInvalid();
      }
    });
    var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
      var other = createLocal.apply(null, arguments);

      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return createInvalid();
      }
    }); // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.

    function pickBy(fn, moments) {
      var res, i;

      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }

      if (!moments.length) {
        return createLocal();
      }

      res = moments[0];

      for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
          res = moments[i];
        }
      }

      return res;
    } // TODO: Use [].sort instead?


    function min() {
      var args = [].slice.call(arguments, 0);
      return pickBy('isBefore', args);
    }

    function max() {
      var args = [].slice.call(arguments, 0);
      return pickBy('isAfter', args);
    }

    var now = function () {
      return Date.now ? Date.now() : +new Date();
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
      for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
          return false;
        }
      }

      var unitHasDecimal = false;

      for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
          if (unitHasDecimal) {
            return false; // only allow non-integers for smallest unit
          }

          if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
            unitHasDecimal = true;
          }
        }
      }

      return true;
    }

    function isValid$1() {
      return this._isValid;
    }

    function createInvalid$1() {
      return createDuration(NaN);
    }

    function Duration(duration) {
      var normalizedInput = normalizeObjectUnits(duration),
          years = normalizedInput.year || 0,
          quarters = normalizedInput.quarter || 0,
          months = normalizedInput.month || 0,
          weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
          days = normalizedInput.day || 0,
          hours = normalizedInput.hour || 0,
          minutes = normalizedInput.minute || 0,
          seconds = normalizedInput.second || 0,
          milliseconds = normalizedInput.millisecond || 0;
      this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

      this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
      minutes * 6e4 + // 1000 * 60
      hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
      // Because of dateAddRemove treats 24 hours as different from a
      // day when working around DST, we need to store them separately

      this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
      // which months you are are talking about, so we have to store
      // it separately.

      this._months = +months + quarters * 3 + years * 12;
      this._data = {};
      this._locale = getLocale();

      this._bubble();
    }

    function isDuration(obj) {
      return obj instanceof Duration;
    }

    function absRound(number) {
      if (number < 0) {
        return Math.round(-1 * number) * -1;
      } else {
        return Math.round(number);
      }
    } // FORMATTING


    function offset(token, separator) {
      addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';

        if (offset < 0) {
          offset = -offset;
          sign = '-';
        }

        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
      });
    }

    offset('Z', ':');
    offset('ZZ', ''); // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
      config._useUTC = true;
      config._tzm = offsetFromString(matchShortOffset, input);
    }); // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']

    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
      var matches = (string || '').match(matcher);

      if (matches === null) {
        return null;
      }

      var chunk = matches[matches.length - 1] || [];
      var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
      var minutes = +(parts[1] * 60) + toInt(parts[2]);
      return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    } // Return a moment from input, that is local/utc/zone equivalent to model.


    function cloneWithOffset(input, model) {
      var res, diff;

      if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

        res._d.setTime(res._d.valueOf() + diff);

        hooks.updateOffset(res, false);
        return res;
      } else {
        return createLocal(input).local();
      }
    }

    function getDateOffset(m) {
      // On Firefox.24 Date#getTimezoneOffset returns a floating point.
      // https://github.com/moment/moment/pull/1871
      return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    } // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.


    hooks.updateOffset = function () {}; // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.


    function getSetOffset(input, keepLocalTime, keepMinutes) {
      var offset = this._offset || 0,
          localAdjust;

      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      if (input != null) {
        if (typeof input === 'string') {
          input = offsetFromString(matchShortOffset, input);

          if (input === null) {
            return this;
          }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
          input = input * 60;
        }

        if (!this._isUTC && keepLocalTime) {
          localAdjust = getDateOffset(this);
        }

        this._offset = input;
        this._isUTC = true;

        if (localAdjust != null) {
          this.add(localAdjust, 'm');
        }

        if (offset !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addSubtract(this, createDuration(input - offset, 'm'), 1, false);
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            hooks.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }

        return this;
      } else {
        return this._isUTC ? offset : getDateOffset(this);
      }
    }

    function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== 'string') {
          input = -input;
        }

        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }

    function setOffsetToUTC(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
          this.subtract(getDateOffset(this), 'm');
        }
      }

      return this;
    }

    function setOffsetToParsedOffset() {
      if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);

        if (tZone != null) {
          this.utcOffset(tZone);
        } else {
          this.utcOffset(0, true);
        }
      }

      return this;
    }

    function hasAlignedHourOffset(input) {
      if (!this.isValid()) {
        return false;
      }

      input = input ? createLocal(input).utcOffset() : 0;
      return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }

    function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }

      var c = {};
      copyConfig(c, this);
      c = prepareConfig(c);

      if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }

      return this._isDSTShifted;
    }

    function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    } // ASP.NET json date format regex


    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day

    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
      var duration = input,
          // matching against regexp is expensive, do it on demand
      match = null,
          sign,
          ret,
          diffRes;

      if (isDuration(input)) {
        duration = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months
        };
      } else if (isNumber(input)) {
        duration = {};

        if (key) {
          duration[key] = input;
        } else {
          duration.milliseconds = input;
        }
      } else if (!!(match = aspNetRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
          y: 0,
          d: toInt(match[DATE]) * sign,
          h: toInt(match[HOUR]) * sign,
          m: toInt(match[MINUTE]) * sign,
          s: toInt(match[SECOND]) * sign,
          ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

        };
      } else if (!!(match = isoRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
          y: parseIso(match[2], sign),
          M: parseIso(match[3], sign),
          w: parseIso(match[4], sign),
          d: parseIso(match[5], sign),
          h: parseIso(match[6], sign),
          m: parseIso(match[7], sign),
          s: parseIso(match[8], sign)
        };
      } else if (duration == null) {
        // checks for null or undefined
        duration = {};
      } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
      }

      ret = new Duration(duration);

      if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
      }

      return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
      // We'd normally use ~~inp for this, but unfortunately it also
      // converts floats to ints.
      // inp may be undefined, so careful calling replace on it.
      var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

      return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
      var res = {};
      res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

      if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
      }

      res.milliseconds = +other - +base.clone().add(res.months, 'M');
      return res;
    }

    function momentsDifference(base, other) {
      var res;

      if (!(base.isValid() && other.isValid())) {
        return {
          milliseconds: 0,
          months: 0
        };
      }

      other = cloneWithOffset(other, base);

      if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
      } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }

      return res;
    } // TODO: remove 'name' arg after deprecation is removed


    function createAdder(direction, name) {
      return function (val, period) {
        var dur, tmp; //invert the arguments, but complain about it

        if (period !== null && !isNaN(+period)) {
          deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
          tmp = val;
          val = period;
          period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
      };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
      var milliseconds = duration._milliseconds,
          days = absRound(duration._days),
          months = absRound(duration._months);

      if (!mom.isValid()) {
        // No op
        return;
      }

      updateOffset = updateOffset == null ? true : updateOffset;

      if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
      }

      if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
      }

      if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
      }

      if (updateOffset) {
        hooks.updateOffset(mom, days || months);
      }
    }

    var add = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
      var diff = myMoment.diff(now, 'days', true);
      return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1(time, formats) {
      // We want to compare the start of today, vs this.
      // Getting start-of-today depends on whether we're local/utc/offset or not.
      var now = time || createLocal(),
          sod = cloneWithOffset(now, this).startOf('day'),
          format = hooks.calendarFormat(this, sod) || 'sameElse';
      var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
      return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone() {
      return new Moment(this);
    }

    function isAfter(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);

      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }

      units = normalizeUnits(units) || 'millisecond';

      if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
      } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
      }
    }

    function isBefore(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);

      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }

      units = normalizeUnits(units) || 'millisecond';

      if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
      } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
      }
    }

    function isBetween(from, to, units, inclusivity) {
      var localFrom = isMoment(from) ? from : createLocal(from),
          localTo = isMoment(to) ? to : createLocal(to);

      if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
      }

      inclusivity = inclusivity || '()';
      return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input),
          inputMs;

      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }

      units = normalizeUnits(units) || 'millisecond';

      if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
      } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
      }
    }

    function isSameOrAfter(input, units) {
      return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
      return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
      var that, zoneDelta, output;

      if (!this.isValid()) {
        return NaN;
      }

      that = cloneWithOffset(input, this);

      if (!that.isValid()) {
        return NaN;
      }

      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
      units = normalizeUnits(units);

      switch (units) {
        case 'year':
          output = monthDiff(this, that) / 12;
          break;

        case 'month':
          output = monthDiff(this, that);
          break;

        case 'quarter':
          output = monthDiff(this, that) / 3;
          break;

        case 'second':
          output = (this - that) / 1e3;
          break;
        // 1000

        case 'minute':
          output = (this - that) / 6e4;
          break;
        // 1000 * 60

        case 'hour':
          output = (this - that) / 36e5;
          break;
        // 1000 * 60 * 60

        case 'day':
          output = (this - that - zoneDelta) / 864e5;
          break;
        // 1000 * 60 * 60 * 24, negate dst

        case 'week':
          output = (this - that - zoneDelta) / 6048e5;
          break;
        // 1000 * 60 * 60 * 24 * 7, negate dst

        default:
          output = this - that;
      }

      return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
      // difference in months
      var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
          // b is in (anchor - 1 month, anchor + 1 month)
      anchor = a.clone().add(wholeMonthDiff, 'months'),
          anchor2,
          adjust;

      if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

        adjust = (b - anchor) / (anchor - anchor2);
      } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

        adjust = (b - anchor) / (anchor2 - anchor);
      } //check for negative zero, return zero if negative zero


      return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
      return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
      if (!this.isValid()) {
        return null;
      }

      var utc = keepOffset !== true;
      var m = utc ? this.clone().utc() : this;

      if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
      }

      if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
          return this.toDate().toISOString();
        } else {
          return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
      }

      return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */


    function inspect() {
      if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
      }

      var func = 'moment';
      var zone = '';

      if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
      }

      var prefix = '[' + func + '("]';
      var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
      var datetime = '-MM-DD[T]HH:mm:ss.SSS';
      var suffix = zone + '[")]';
      return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
      if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
      }

      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({
          to: this,
          from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }

    function fromNow(withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({
          from: this,
          to: time
        }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }

    function toNow(withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
    } // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.


    function locale(key) {
      var newLocaleData;

      if (key === undefined) {
        return this._locale._abbr;
      } else {
        newLocaleData = getLocale(key);

        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }

        return this;
      }
    }

    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
      if (key === undefined) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    });

    function localeData() {
      return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR; // actual modulo - handles negative numbers (for dates before 1970):

    function mod$1(dividend, divisor) {
      return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
      // the date constructor remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
      } else {
        return new Date(y, m, d).valueOf();
      }
    }

    function utcStartOfDate(y, m, d) {
      // Date.UTC remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
      } else {
        return Date.UTC(y, m, d);
      }
    }

    function startOf(units) {
      var time;
      units = normalizeUnits(units);

      if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
      }

      var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

      switch (units) {
        case 'year':
          time = startOfDate(this.year(), 0, 1);
          break;

        case 'quarter':
          time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
          break;

        case 'month':
          time = startOfDate(this.year(), this.month(), 1);
          break;

        case 'week':
          time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
          break;

        case 'isoWeek':
          time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
          break;

        case 'day':
        case 'date':
          time = startOfDate(this.year(), this.month(), this.date());
          break;

        case 'hour':
          time = this._d.valueOf();
          time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
          break;

        case 'minute':
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_MINUTE);
          break;

        case 'second':
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_SECOND);
          break;
      }

      this._d.setTime(time);

      hooks.updateOffset(this, true);
      return this;
    }

    function endOf(units) {
      var time;
      units = normalizeUnits(units);

      if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
      }

      var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

      switch (units) {
        case 'year':
          time = startOfDate(this.year() + 1, 0, 1) - 1;
          break;

        case 'quarter':
          time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
          break;

        case 'month':
          time = startOfDate(this.year(), this.month() + 1, 1) - 1;
          break;

        case 'week':
          time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;

        case 'isoWeek':
          time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
          break;

        case 'day':
        case 'date':
          time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
          break;

        case 'hour':
          time = this._d.valueOf();
          time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
          break;

        case 'minute':
          time = this._d.valueOf();
          time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
          break;

        case 'second':
          time = this._d.valueOf();
          time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
          break;
      }

      this._d.setTime(time);

      hooks.updateOffset(this, true);
      return this;
    }

    function valueOf() {
      return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
      return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
      return new Date(this.valueOf());
    }

    function toArray() {
      var m = this;
      return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject() {
      var m = this;
      return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
      };
    }

    function toJSON() {
      // new Date(NaN).toJSON() === null
      return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
      return isValid(this);
    }

    function parsingFlags() {
      return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
      return getParsingFlags(this).overflow;
    }

    function creationData() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    } // FORMATTING


    addFormatToken(0, ['gg', 2], 0, function () {
      return this.weekYear() % 100;
    });
    addFormatToken(0, ['GG', 2], 0, function () {
      return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
      addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1); // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
      week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
      week[token] = hooks.parseTwoDigitYear(input);
    }); // MOMENTS

    function getSetWeekYear(input) {
      return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }

    function getSetISOWeekYear(input) {
      return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear() {
      return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear() {
      var weekInfo = this.localeData()._week;

      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;

      if (input == null) {
        return weekOfYear(this, dow, doy).year;
      } else {
        weeksTarget = weeksInYear(input, dow, doy);

        if (week > weeksTarget) {
          week = weeksTarget;
        }

        return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
          date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
    } // FORMATTING


    addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

    addUnitAlias('quarter', 'Q'); // PRIORITY

    addUnitPriority('quarter', 7); // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
    }); // MOMENTS

    function getSetQuarter(input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    } // FORMATTING


    addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

    addUnitAlias('date', 'D'); // PRIORITY

    addUnitPriority('date', 9); // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
      // TODO: Remove "ordinalParse" fallback in next major release.
      return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
    });
    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
    }); // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

    addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

    addUnitPriority('dayOfYear', 4); // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
      config._dayOfYear = toInt(input);
    }); // HELPERS
    // MOMENTS

    function getSetDayOfYear(input) {
      var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    } // FORMATTING


    addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

    addUnitAlias('minute', 'm'); // PRIORITY

    addUnitPriority('minute', 14); // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE); // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

    addUnitAlias('second', 's'); // PRIORITY

    addUnitPriority('second', 15); // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND); // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

    addFormatToken('S', 0, 0, function () {
      return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, ['SS', 2], 0, function () {
      return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
      return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
      return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
      return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
      return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
      return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
      return this.millisecond() * 1000000;
    }); // ALIASES

    addUnitAlias('millisecond', 'ms'); // PRIORITY

    addUnitPriority('millisecond', 16); // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var token;

    for (token = 'SSSS'; token.length <= 9; token += 'S') {
      addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
      array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
      addParseToken(token, parseMs);
    } // MOMENTS


    var getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

    function getZoneAbbr() {
      return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
      return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix(input) {
      return createLocal(input * 1000);
    }

    function createInZone() {
      return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
      return string;
    }

    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
      var locale = getLocale();
      var utc = createUTC().set(setter, index);
      return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';

      if (index != null) {
        return get$1(format, index, field, 'month');
      }

      var i;
      var out = [];

      for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
      }

      return out;
    } // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)


    function listWeekdaysImpl(localeSorted, format, index, field) {
      if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';
      } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';
      }

      var locale = getLocale(),
          shift = localeSorted ? locale._week.dow : 0;

      if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
      }

      var i;
      var out = [];

      for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
      }

      return out;
    }

    function listMonths(format, index) {
      return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
      return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (number) {
        var b = number % 10,
            output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        return number + output;
      }
    }); // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
    var mathAbs = Math.abs;

    function abs() {
      var data = this._data;
      this._milliseconds = mathAbs(this._milliseconds);
      this._days = mathAbs(this._days);
      this._months = mathAbs(this._months);
      data.milliseconds = mathAbs(data.milliseconds);
      data.seconds = mathAbs(data.seconds);
      data.minutes = mathAbs(data.minutes);
      data.hours = mathAbs(data.hours);
      data.months = mathAbs(data.months);
      data.years = mathAbs(data.years);
      return this;
    }

    function addSubtract$1(duration, input, value, direction) {
      var other = createDuration(input, value);
      duration._milliseconds += direction * other._milliseconds;
      duration._days += direction * other._days;
      duration._months += direction * other._months;
      return duration._bubble();
    } // supports only 2.0-style add(1, 's') or add(duration)


    function add$1(input, value) {
      return addSubtract$1(this, input, value, 1);
    } // supports only 2.0-style subtract(1, 's') or subtract(duration)


    function subtract$1(input, value) {
      return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
      if (number < 0) {
        return Math.floor(number);
      } else {
        return Math.ceil(number);
      }
    }

    function bubble() {
      var milliseconds = this._milliseconds;
      var days = this._days;
      var months = this._months;
      var data = this._data;
      var seconds, minutes, hours, years, monthsFromDays; // if we have a mix of positive and negative values, bubble down first
      // check: https://github.com/moment/moment/issues/2166

      if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
      } // The following code bubbles up values, see the tests for
      // examples of what that means.


      data.milliseconds = milliseconds % 1000;
      seconds = absFloor(milliseconds / 1000);
      data.seconds = seconds % 60;
      minutes = absFloor(seconds / 60);
      data.minutes = minutes % 60;
      hours = absFloor(minutes / 60);
      data.hours = hours % 24;
      days += absFloor(hours / 24); // convert days to months

      monthsFromDays = absFloor(daysToMonths(days));
      months += monthsFromDays;
      days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

      years = absFloor(months / 12);
      months %= 12;
      data.days = days;
      data.months = months;
      data.years = years;
      return this;
    }

    function daysToMonths(days) {
      // 400 years have 146097 days (taking into account leap year rules)
      // 400 years have 12 months === 4800
      return days * 4800 / 146097;
    }

    function monthsToDays(months) {
      // the reverse of daysToMonths
      return months * 146097 / 4800;
    }

    function as(units) {
      if (!this.isValid()) {
        return NaN;
      }

      var days;
      var months;
      var milliseconds = this._milliseconds;
      units = normalizeUnits(units);

      if (units === 'month' || units === 'quarter' || units === 'year') {
        days = this._days + milliseconds / 864e5;
        months = this._months + daysToMonths(days);

        switch (units) {
          case 'month':
            return months;

          case 'quarter':
            return months / 3;

          case 'year':
            return months / 12;
        }
      } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));

        switch (units) {
          case 'week':
            return days / 7 + milliseconds / 6048e5;

          case 'day':
            return days + milliseconds / 864e5;

          case 'hour':
            return days * 24 + milliseconds / 36e5;

          case 'minute':
            return days * 1440 + milliseconds / 6e4;

          case 'second':
            return days * 86400 + milliseconds / 1000;
          // Math.floor prevents floating point math errors here

          case 'millisecond':
            return Math.floor(days * 864e5) + milliseconds;

          default:
            throw new Error('Unknown unit ' + units);
        }
      }
    } // TODO: Use this.as('ms')?


    function valueOf$1() {
      if (!this.isValid()) {
        return NaN;
      }

      return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
    }

    function makeAs(alias) {
      return function () {
        return this.as(alias);
      };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asQuarters = makeAs('Q');
    var asYears = makeAs('y');

    function clone$1() {
      return createDuration(this);
    }

    function get$2(units) {
      units = normalizeUnits(units);
      return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
      return function () {
        return this.isValid() ? this._data[name] : NaN;
      };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');

    function weeks() {
      return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month
      M: 11 // months to year

    }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
      return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, locale) {
      var duration = createDuration(posNegDuration).abs();
      var seconds = round(duration.as('s'));
      var minutes = round(duration.as('m'));
      var hours = round(duration.as('h'));
      var days = round(duration.as('d'));
      var months = round(duration.as('M'));
      var years = round(duration.as('y'));
      var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
      a[2] = withoutSuffix;
      a[3] = +posNegDuration > 0;
      a[4] = locale;
      return substituteTimeAgo.apply(null, a);
    } // This function allows you to set the rounding function for relative time strings


    function getSetRelativeTimeRounding(roundingFunction) {
      if (roundingFunction === undefined) {
        return round;
      }

      if (typeof roundingFunction === 'function') {
        round = roundingFunction;
        return true;
      }

      return false;
    } // This function allows you to set a threshold for relative time strings


    function getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === undefined) {
        return false;
      }

      if (limit === undefined) {
        return thresholds[threshold];
      }

      thresholds[threshold] = limit;

      if (threshold === 's') {
        thresholds.ss = limit - 1;
      }

      return true;
    }

    function humanize(withSuffix) {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }

      var locale = this.localeData();
      var output = relativeTime$1(this, !withSuffix, locale);

      if (withSuffix) {
        output = locale.pastFuture(+this, output);
      }

      return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
      return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
      // for ISO strings we do not use the normal bubbling rules:
      //  * milliseconds bubble up until they become hours
      //  * days do not bubble at all
      //  * months bubble up until they become years
      // This is because there is no context-free conversion between hours and days
      // (think of clock changes)
      // and also not between days and months (28-31 days per month)
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }

      var seconds = abs$1(this._milliseconds) / 1000;
      var days = abs$1(this._days);
      var months = abs$1(this._months);
      var minutes, hours, years; // 3600 seconds -> 60 minutes -> 1 hour

      minutes = absFloor(seconds / 60);
      hours = absFloor(minutes / 60);
      seconds %= 60;
      minutes %= 60; // 12 months -> 1 year

      years = absFloor(months / 12);
      months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

      var Y = years;
      var M = months;
      var D = days;
      var h = hours;
      var m = minutes;
      var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
      var total = this.asSeconds();

      if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
      }

      var totalSign = total < 0 ? '-' : '';
      var ymSign = sign(this._months) !== sign(total) ? '-' : '';
      var daysSign = sign(this._days) !== sign(total) ? '-' : '';
      var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
      return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang; // Side effect imports
    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf'); // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
      config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
      config._d = new Date(toInt(input));
    }); // Side effect imports

    hooks.version = '2.24.0';
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

    hooks.HTML5_FMT = {
      DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
      // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
      // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
      // <input type="datetime-local" step="0.001" />
      DATE: 'YYYY-MM-DD',
      // <input type="date" />
      TIME: 'HH:mm',
      // <input type="time" />
      TIME_SECONDS: 'HH:mm:ss',
      // <input type="time" step="1" />
      TIME_MS: 'HH:mm:ss.SSS',
      // <input type="time" step="0.001" />
      WEEK: 'GGGG-[W]WW',
      // <input type="week" />
      MONTH: 'YYYY-MM' // <input type="month" />

    };
    return hooks;
  });
}); // Maps for number <-> hex string conversion

var byteToHex = [];

for (var i = 0; i < 256; i++) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}
/**
 * Represent binary UUID into it's string representation.
 *
 * @param buf - Buffer containing UUID bytes.
 * @param offset - Offset from the start of the buffer where the UUID is saved (not needed if the buffer starts with the UUID).
 *
 * @returns String representation of the UUID.
 */


function stringifyUUID(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
}
/**
 * Generate 16 random bytes to be used as a base for UUID.
 *
 * @ignore
 */


var random = function () {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
    // Moderately fast, high quality
    var _rnds8 = new Uint8Array(16);

    return function whatwgRNG() {
      crypto.getRandomValues(_rnds8);
      return _rnds8;
    };
  } // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().
  // It's fast, but is of unspecified quality.


  var _rnds = new Array(16);

  return function () {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) {
        r = Math.random() * 0x100000000;
      }

      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return _rnds;
  }; //     uuid.js
  //
  //     Copyright (c) 2010-2012 Robert Kieffer
  //     MIT License - http://opensource.org/licenses/mit-license.php
  // Unique ID creation requires a high quality random # generator.  We feature
  // detect to determine the best RNG source, normalizing to a function that
  // returns 128-bits of randomness, since that's what's usually required
  // return require('./rng');
}();

var byteToHex$1 = [];

for (var i$1 = 0; i$1 < 256; i$1++) {
  byteToHex$1[i$1] = (i$1 + 0x100).toString(16).substr(1);
} // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
// random #'s we need to init node and clockseq


var seedBytes = random(); // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)

var defaultNodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]]; // Per 4.2.2, randomize (14 bit) clockseq

var defaultClockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff; // Previous uuid creation time

/**
 * UUIDv4 options.
 */

/**
 * Generate UUIDv4
 *
 * @param options - Options to be used instead of default generated values.
 * String 'binary' is a shorthand for uuid4({}, new Array(16)).
 * @param buf - If present the buffer will be filled with the generated UUID.
 * @param offset - Offset of the UUID from the start of the buffer.
 *
 * @returns UUIDv4
 */

function uuid4() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var buf = arguments.length > 1 ? arguments[1] : undefined;
  var offset = arguments.length > 2 ? arguments[2] : undefined; // Deprecated - 'format' argument, as supported in v1.2

  var i = buf && offset || 0;

  if (typeof options === 'string') {
    buf = options === 'binary' ? new Array(16) : undefined;
    options = {};
  }

  var rnds = options.random || (options.rng || random)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || stringifyUUID(rnds);
} // Rollup will complain about mixing default and named exports in UMD build,
// for example '/Date(1198908717056)/' or '/Date(1198908717056-0700)/'
// code from http://momentjs.com/


var ASPDateRegex = /^\/?Date\((-?\d+)/i; // Hex color

var fullHexRE = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
var shortHexRE = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
/**
 * Hue, Saturation, Value.
 */

/**
 * Test whether given object is a number
 *
 * @param value - Input value of unknown type.
 *
 * @returns True if number, false otherwise.
 */

function isNumber(value) {
  return value instanceof Number || typeof value === 'number';
}
/**
 * Remove everything in the DOM object
 *
 * @param DOMobject - Node whose child nodes will be recursively deleted.
 */


function recursiveDOMDelete(DOMobject) {
  if (DOMobject) {
    while (DOMobject.hasChildNodes() === true) {
      var child = DOMobject.firstChild;

      if (child) {
        recursiveDOMDelete(child);
        DOMobject.removeChild(child);
      }
    }
  }
}
/**
 * Test whether given object is a string
 *
 * @param value - Input value of unknown type.
 *
 * @returns True if string, false otherwise.
 */


function isString(value) {
  return value instanceof String || typeof value === 'string';
}
/**
 * Test whether given object is a object (not primitive or null).
 *
 * @param value - Input value of unknown type.
 *
 * @returns True if not null object, false otherwise.
 */


function isObject(value) {
  return _typeof(value) === 'object' && value !== null;
}
/**
 * Test whether given object is a Date, or a String containing a Date
 *
 * @param value - Input value of unknown type.
 *
 * @returns True if Date instance or string date representation, false otherwise.
 */


function isDate(value) {
  if (value instanceof Date) {
    return true;
  } else if (isString(value)) {
    // test whether this string contains a date
    var match = ASPDateRegex.exec(value);

    if (match) {
      return true;
    } else if (!isNaN(Date.parse(value))) {
      return true;
    }
  }

  return false;
}
/**
 * Test whether given object is a Moment date.
 * @TODO: This is basically a workaround, if Moment was imported property it wouldn't necessary as moment.isMoment is a TS type guard.
 *
 * @param value - Input value of unknown type.
 *
 * @returns True if Moment instance, false otherwise.
 */


function isMoment(value) {
  return moment.isMoment(value);
}
/**
 * Copy property from b to a if property present in a.
 * If property in b explicitly set to null, delete it if `allowDeletion` set.
 *
 * Internal helper routine, should not be exported. Not added to `exports` for that reason.
 *
 * @param a - Target object.
 * @param b - Source object.
 * @param prop - Name of property to copy from b to a.
 * @param allowDeletion  if true, delete property in a if explicitly set to null in b
 */


function copyOrDelete(a, b, prop, allowDeletion) {
  var doDeletion = false;

  if (allowDeletion === true) {
    doDeletion = b[prop] === null && a[prop] !== undefined;
  }

  if (doDeletion) {
    delete a[prop];
  } else {
    a[prop] = b[prop]; // Remember, this is a reference copy!
  }
}
/**
 * Fill an object with a possibly partially defined other object.
 *
 * Only copies values for the properties already present in a.
 * That means an object is not created on a property if only the b object has it.
 *
 * @param a - The object that will have it's properties updated.
 * @param b - The object with property updates.
 * @param allowDeletion - if true, delete properties in a that are explicitly set to null in b
 */


function fillIfDefined(a, b) {
  var allowDeletion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false; // NOTE: iteration of properties of a
  // NOTE: prototype properties iterated over as well

  for (var prop in a) {
    if (b[prop] !== undefined) {
      if (b[prop] === null || _typeof(b[prop]) !== 'object') {
        // Note: typeof null === 'object'
        copyOrDelete(a, b, prop, allowDeletion);
      } else {
        var aProp = a[prop];
        var bProp = b[prop];

        if (isObject(aProp) && isObject(bProp)) {
          fillIfDefined(aProp, bProp, allowDeletion);
        }
      }
    }
  }
}
/**
 * Copy the values of all of the enumerable own properties from one or more source objects to a
 * target object. Returns the target object.
 *
 * @param target - The target object to copy to.
 * @param source - The source object from which to copy properties.
 *
 * @return The target object.
 */


var extend = Object.assign;
/**
 * Extend object a with selected properties of object b or a series of objects
 * Only properties with defined values are copied
 *
 * @param props - Properties to be copied to a.
 * @param a - The target.
 * @param others - The sources.
 *
 * @returns Argument a.
 */

function selectiveExtend(props, a) {
  // @TODO: better solution?
  if (!Array.isArray(props)) {
    throw new Error('Array with property names expected as first argument');
  }

  for (var i = 2; i < (arguments.length <= 2 ? 0 : arguments.length - 2); i++) {
    var other = i + 2 < 2 || arguments.length <= i + 2 ? undefined : arguments[i + 2];

    for (var p = 0; p < props.length; p++) {
      var prop = props[p];

      if (other && Object.prototype.hasOwnProperty.call(other, prop)) {
        a[prop] = other[prop];
      }
    }
  }

  return a;
}
/**
 * Extend object a with selected properties of object b.
 * Only properties with defined values are copied.
 *
 * **Note:** Previous version of this routine implied that multiple source objects
 *           could be used; however, the implementation was **wrong**.
 *           Since multiple (>1) sources weren't used anywhere in the `vis.js` code,
 *           this has been removed
 *
 * @param props - Names of first-level properties to copy over.
 * @param a - Target object.
 * @param b - Source object.
 * @param allowDeletion - If true, delete property in a if explicitly set to null in b.
 *
 * @returns Argument a.
 */


function selectiveDeepExtend(props, a, b) {
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false; // TODO: add support for Arrays to deepExtend

  if (Array.isArray(b)) {
    throw new TypeError('Arrays are not supported by deepExtend');
  }

  for (var p = 0; p < props.length; p++) {
    var prop = props[p];

    if (Object.prototype.hasOwnProperty.call(b, prop)) {
      if (b[prop] && b[prop].constructor === Object) {
        if (a[prop] === undefined) {
          a[prop] = {};
        }

        if (a[prop].constructor === Object) {
          deepExtend(a[prop], b[prop], false, allowDeletion);
        } else {
          copyOrDelete(a, b, prop, allowDeletion);
        }
      } else if (Array.isArray(b[prop])) {
        throw new TypeError('Arrays are not supported by deepExtend');
      } else {
        copyOrDelete(a, b, prop, allowDeletion);
      }
    }
  }

  return a;
}
/**
 * Extend object `a` with properties of object `b`, ignoring properties which are explicitly
 * specified to be excluded.
 *
 * The properties of `b` are considered for copying.
 * Properties which are themselves objects are are also extended.
 * Only properties with defined values are copied
 *
 * @param propsToExclude - Names of properties which should *not* be copied.
 * @param a - Object to extend.
 * @param b - Object to take properties from for extension.
 * @param allowDeletion - If true, delete properties in a that are explicitly set to null in b.
 *
 * @returns Argument a.
 */


function selectiveNotDeepExtend(propsToExclude, a, b) {
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false; // TODO: add support for Arrays to deepExtend
  // NOTE: array properties have an else-below; apparently, there is a problem here.

  if (Array.isArray(b)) {
    throw new TypeError('Arrays are not supported by deepExtend');
  }

  for (var prop in b) {
    if (!Object.prototype.hasOwnProperty.call(b, prop)) {
      continue;
    } // Handle local properties only


    if (propsToExclude.indexOf(prop) !== -1) {
      continue;
    } // In exclusion list, skip


    if (b[prop] && b[prop].constructor === Object) {
      if (a[prop] === undefined) {
        a[prop] = {};
      }

      if (a[prop].constructor === Object) {
        deepExtend(a[prop], b[prop]); // NOTE: allowDeletion not propagated!
      } else {
        copyOrDelete(a, b, prop, allowDeletion);
      }
    } else if (Array.isArray(b[prop])) {
      a[prop] = [];

      for (var i = 0; i < b[prop].length; i++) {
        a[prop].push(b[prop][i]);
      }
    } else {
      copyOrDelete(a, b, prop, allowDeletion);
    }
  }

  return a;
}
/**
 * Deep extend an object a with the properties of object b
 *
 * @param a - Target object.
 * @param b - Source object.
 * @param protoExtend - If true, the prototype values will also be extended
 * (ie. the options objects that inherit from others will also get the inherited options).
 * @param allowDeletion - If true, the values of fields that are null will be deleted.
 *
 * @returns Argument a.
 */


function deepExtend(a, b) {
  var protoExtend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  for (var prop in b) {
    if (Object.prototype.hasOwnProperty.call(b, prop) || protoExtend === true) {
      if (b[prop] && b[prop].constructor === Object) {
        if (a[prop] === undefined) {
          a[prop] = {};
        }

        if (a[prop].constructor === Object) {
          deepExtend(a[prop], b[prop], protoExtend); // NOTE: allowDeletion not propagated!
        } else {
          copyOrDelete(a, b, prop, allowDeletion);
        }
      } else if (Array.isArray(b[prop])) {
        a[prop] = [];

        for (var i = 0; i < b[prop].length; i++) {
          a[prop].push(b[prop][i]);
        }
      } else {
        copyOrDelete(a, b, prop, allowDeletion);
      }
    }
  }

  return a;
}
/**
 * Test whether all elements in two arrays are equal.
 *
 * @param a - First array.
 * @param b - Second array.
 *
 * @returns True if both arrays have the same length and same elements (1 = '1').
 */


function equalArray(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] != b[i]) {
      return false;
    }
  }

  return true;
}
/**
 * Convert an object into another type
 *
 * @param object - Value of unknown type.
 * @param type - Name of the desired type.
 *
 * @returns Object in the desired type.
 * @throws Error
 */


function convert(object, type) {
  var match;

  if (object === undefined) {
    return undefined;
  }

  if (object === null) {
    return null;
  }

  if (!type) {
    return object;
  }

  if (!(typeof type === 'string') && !(type instanceof String)) {
    throw new Error('Type must be a string');
  } //noinspection FallthroughInSwitchStatementJS


  switch (type) {
    case 'boolean':
    case 'Boolean':
      return Boolean(object);

    case 'number':
    case 'Number':
      if (isString(object) && !isNaN(Date.parse(object))) {
        return moment(object).valueOf();
      } else {
        // @TODO: I don't think that Number and String constructors are a good idea.
        // This could also fail if the object doesn't have valueOf method or if it's redefined.
        // For example: Object.create(null) or { valueOf: 7 }.
        return Number(object.valueOf());
      }

    case 'string':
    case 'String':
      return String(object);

    case 'Date':
      if (isNumber(object)) {
        return new Date(object);
      }

      if (object instanceof Date) {
        return new Date(object.valueOf());
      } else if (isMoment(object)) {
        return new Date(object.valueOf());
      }

      if (isString(object)) {
        match = ASPDateRegex.exec(object);

        if (match) {
          // object is an ASP date
          return new Date(Number(match[1])); // parse number
        } else {
          return moment(new Date(object)).toDate(); // parse string
        }
      } else {
        throw new Error('Cannot convert object of type ' + getType(object) + ' to type Date');
      }

    case 'Moment':
      if (isNumber(object)) {
        return moment(object);
      }

      if (object instanceof Date) {
        return moment(object.valueOf());
      } else if (isMoment(object)) {
        return moment(object);
      }

      if (isString(object)) {
        match = ASPDateRegex.exec(object);

        if (match) {
          // object is an ASP date
          return moment(Number(match[1])); // parse number
        } else {
          return moment(object); // parse string
        }
      } else {
        throw new Error('Cannot convert object of type ' + getType(object) + ' to type Date');
      }

    case 'ISODate':
      if (isNumber(object)) {
        return new Date(object);
      } else if (object instanceof Date) {
        return object.toISOString();
      } else if (isMoment(object)) {
        return object.toDate().toISOString();
      } else if (isString(object)) {
        match = ASPDateRegex.exec(object);

        if (match) {
          // object is an ASP date
          return new Date(Number(match[1])).toISOString(); // parse number
        } else {
          return moment(object).format(); // ISO 8601
        }
      } else {
        throw new Error('Cannot convert object of type ' + getType(object) + ' to type ISODate');
      }

    case 'ASPDate':
      if (isNumber(object)) {
        return '/Date(' + object + ')/';
      } else if (object instanceof Date) {
        return '/Date(' + object.valueOf() + ')/';
      } else if (isString(object)) {
        match = ASPDateRegex.exec(object);

        var _value;

        if (match) {
          // object is an ASP date
          _value = new Date(Number(match[1])).valueOf(); // parse number
        } else {
          _value = new Date(object).valueOf(); // parse string
        }

        return '/Date(' + _value + ')/';
      } else {
        throw new Error('Cannot convert object of type ' + getType(object) + ' to type ASPDate');
      }

    default:
      var never = type;
      throw new Error("Unknown type ".concat(never));
  }
}
/**
 * Get the type of an object, for example exports.getType([]) returns 'Array'
 *
 * @param object - Input value of unknown type.
 *
 * @returns Detected type.
 */


function getType(object) {
  var type = _typeof(object);

  if (type === 'object') {
    if (object === null) {
      return 'null';
    }

    if (object instanceof Boolean) {
      return 'Boolean';
    }

    if (object instanceof Number) {
      return 'Number';
    }

    if (object instanceof String) {
      return 'String';
    }

    if (Array.isArray(object)) {
      return 'Array';
    }

    if (object instanceof Date) {
      return 'Date';
    }

    return 'Object';
  }

  if (type === 'number') {
    return 'Number';
  }

  if (type === 'boolean') {
    return 'Boolean';
  }

  if (type === 'string') {
    return 'String';
  }

  if (type === undefined) {
    return 'undefined';
  }

  return type;
}
/**
 * Used to extend an array and copy it. This is used to propagate paths recursively.
 *
 * @param arr - First part.
 * @param newValue - The value to be aadded into the array.
 *
 * @returns A new array with all items from arr and newValue (which is last).
 */


function copyAndExtendArray(arr, newValue) {
  return [].concat(_toConsumableArray(arr), [newValue]);
}
/**
 * Used to extend an array and copy it. This is used to propagate paths recursively.
 *
 * @param arr - The array to be copied.
 *
 * @returns Shallow copy of arr.
 */


function copyArray(arr) {
  return arr.slice();
}
/**
 * Retrieve the absolute left value of a DOM element
 *
 * @param elem - A dom element, for example a div.
 *
 * @returns The absolute left position of this element in the browser page.
 */


function getAbsoluteLeft(elem) {
  return elem.getBoundingClientRect().left;
}
/**
 * Retrieve the absolute right value of a DOM element
 *
 * @param elem - A dom element, for example a div.
 *
 * @returns The absolute right position of this element in the browser page.
 */


function getAbsoluteRight(elem) {
  return elem.getBoundingClientRect().right;
}
/**
 * Retrieve the absolute top value of a DOM element
 *
 * @param elem - A dom element, for example a div.
 *
 * @returns The absolute top position of this element in the browser page.
 */


function getAbsoluteTop(elem) {
  return elem.getBoundingClientRect().top;
}
/**
 * Add a className to the given elements style.
 *
 * @param elem - The element to which the classes will be added.
 * @param classNames - Space separated list of classes.
 */


function addClassName(elem, classNames) {
  var classes = elem.className.split(' ');
  var newClasses = classNames.split(' ');
  classes = classes.concat(newClasses.filter(function (className) {
    return classes.indexOf(className) < 0;
  }));
  elem.className = classes.join(' ');
}
/**
 * Remove a className from the given elements style.
 *
 * @param elem - The element from which the classes will be removed.
 * @param classNames - Space separated list of classes.
 */


function removeClassName(elem, classNames) {
  var classes = elem.className.split(' ');
  var oldClasses = classNames.split(' ');
  classes = classes.filter(function (className) {
    return oldClasses.indexOf(className) < 0;
  });
  elem.className = classes.join(' ');
}
/**
 * For each method for both arrays and objects.
 * In case of an array, the built-in Array.forEach() is applied (**No, it's not!**).
 * In case of an Object, the method loops over all properties of the object.
 *
 * @param object - An Object or Array to be iterated over.
 * @param callback - Array.forEach-like callback.
 */


function forEach(object, callback) {
  if (Array.isArray(object)) {
    // array
    var len = object.length;

    for (var i = 0; i < len; i++) {
      callback(object[i], i, object);
    }
  } else {
    // object
    for (var _key in object) {
      if (Object.prototype.hasOwnProperty.call(object, _key)) {
        callback(object[_key], _key, object);
      }
    }
  }
}
/**
 * Convert an object into an array: all objects properties are put into the array. The resulting array is unordered.
 *
 * @param o - Object that contains the properties and methods.
 *
 * @returns An array of unordered values.
 */


var toArray = Object.values;
/**
 * Update a property in an object
 *
 * @param object - The object whose property will be updated.
 * @param key - Name of the property to be updated.
 * @param value - The new value to be assigned.
 *
 * @returns Whether the value was updated (true) or already strictly the same in the original object (false).
 */

function updateProperty(object, key, value) {
  if (object[key] !== value) {
    object[key] = value;
    return true;
  } else {
    return false;
  }
}
/**
 * Throttle the given function to be only executed once per animation frame.
 *
 * @param fn - The original function.
 *
 * @returns The throttled function.
 */


function throttle(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(function () {
        scheduled = false;
        fn();
      });
    }
  };
}
/**
 * Add and event listener. Works for all browsers.
 *
 * @param element - The element to bind the event listener to.
 * @param action - Same as Element.addEventListener(action, —, —).
 * @param listener - Same as Element.addEventListener(—, listener, —).
 * @param useCapture - Same as Element.addEventListener(—, —, useCapture).
 */


function addEventListener(element, action, listener, useCapture) {
  if (element.addEventListener) {
    if (useCapture === undefined) {
      useCapture = false;
    }

    if (action === 'mousewheel' && navigator.userAgent.indexOf('Firefox') >= 0) {
      action = 'DOMMouseScroll'; // For Firefox
    }

    element.addEventListener(action, listener, useCapture);
  } else {
    element.attachEvent('on' + action, listener); // IE browsers
  }
}
/**
 * Remove an event listener from an element
 *
 * @param element - The element to bind the event listener to.
 * @param action - Same as Element.removeEventListener(action, —, —).
 * @param listener - Same as Element.removeEventListener(—, listener, —).
 * @param useCapture - Same as Element.removeEventListener(—, —, useCapture).
 */


function removeEventListener(element, action, listener, useCapture) {
  if (element.removeEventListener) {
    // non-IE browsers
    if (useCapture === undefined) {
      useCapture = false;
    }

    if (action === 'mousewheel' && navigator.userAgent.indexOf('Firefox') >= 0) {
      action = 'DOMMouseScroll'; // For Firefox
    }

    element.removeEventListener(action, listener, useCapture);
  } else {
    element.detachEvent('on' + action, listener); // IE browsers
  }
}
/**
 * Cancels the event's default action if it is cancelable, without stopping further propagation of the event.
 *
 * @param event - The event whose default action should be prevented.
 */


function preventDefault(event) {
  if (!event) {
    event = window.event;
  }

  if (!event) ;else if (event.preventDefault) {
    event.preventDefault(); // non-IE browsers
  } else {
    event.returnValue = false; // IE browsers
  }
}
/**
 * Get HTML element which is the target of the event.
 *
 * @param event - The event.
 *
 * @returns The element or null if not obtainable.
 */


function getTarget() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event; // code from http://www.quirksmode.org/js/events_properties.html
  // @TODO: EventTarget can be almost anything, is it okay to return only Elements?

  var target = null;
  if (!event) ;else if (event.target) {
    target = event.target;
  } else if (event.srcElement) {
    target = event.srcElement;
  }

  if (!(target instanceof Element)) {
    return null;
  }

  if (target.nodeType != null && target.nodeType == 3) {
    // defeat Safari bug
    target = target.parentNode;

    if (!(target instanceof Element)) {
      return null;
    }
  }

  return target;
}
/**
 * Check if given element contains given parent somewhere in the DOM tree
 *
 * @param element - The element to be tested.
 * @param parent - The ancestor (not necessarily parent) of the element.
 *
 * @returns True if parent is an ancestor of the element, false otherwise.
 */


function hasParent(element, parent) {
  var elem = element;

  while (elem) {
    if (elem === parent) {
      return true;
    } else if (elem.parentNode) {
      elem = elem.parentNode;
    } else {
      return false;
    }
  }

  return false;
}

var option = {
  /**
   * Convert a value into a boolean.
   *
   * @param value - Value to be converted intoboolean, a function will be executed as (() => unknown).
   * @param defaultValue - If the value or the return value of the function == null then this will be returned.
   *
   * @returns Corresponding boolean value, if none then the default value, if none then null.
   */
  asBoolean: function asBoolean(value, defaultValue) {
    if (typeof value == 'function') {
      value = value();
    }

    if (value != null) {
      return value != false;
    }

    return defaultValue || null;
  },

  /**
   * Convert a value into a number.
   *
   * @param value - Value to be converted intonumber, a function will be executed as (() => unknown).
   * @param defaultValue - If the value or the return value of the function == null then this will be returned.
   *
   * @returns Corresponding **boxed** number value, if none then the default value, if none then null.
   */
  asNumber: function asNumber(value, defaultValue) {
    if (typeof value == 'function') {
      value = value();
    }

    if (value != null) {
      return Number(value) || defaultValue || null;
    }

    return defaultValue || null;
  },

  /**
   * Convert a value into a string.
   *
   * @param value - Value to be converted intostring, a function will be executed as (() => unknown).
   * @param defaultValue - If the value or the return value of the function == null then this will be returned.
   *
   * @returns Corresponding **boxed** string value, if none then the default value, if none then null.
   */
  asString: function asString(value, defaultValue) {
    if (typeof value == 'function') {
      value = value();
    }

    if (value != null) {
      return String(value);
    }

    return defaultValue || null;
  },

  /**
   * Convert a value into a size.
   *
   * @param value - Value to be converted intosize, a function will be executed as (() => unknown).
   * @param defaultValue - If the value or the return value of the function == null then this will be returned.
   *
   * @returns Corresponding string value (number + 'px'), if none then the default value, if none then null.
   */
  asSize: function asSize(value, defaultValue) {
    if (typeof value == 'function') {
      value = value();
    }

    if (isString(value)) {
      return value;
    } else if (isNumber(value)) {
      return value + 'px';
    } else {
      return defaultValue || null;
    }
  },

  /**
   * Convert a value into a DOM Element.
   *
   * @param value - Value to be converted into DOM Element, a function will be executed as (() => unknown).
   * @param defaultValue - If the value or the return value of the function == null then this will be returned.
   *
   * @returns The DOM Element, if none then the default value, if none then null.
   */
  asElement: function asElement(value, defaultValue) {
    if (typeof value == 'function') {
      value = value();
    }

    return value || defaultValue || null;
  }
};
/**
 * Convert hex color string into RGB color object.
 * http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
 *
 * @param hex - Hex color string (3 or 6 digits, with or without #).
 *
 * @returns RGB color object.
 */

function hexToRGB(hex) {
  var result;

  switch (hex.length) {
    case 3:
    case 4:
      result = shortHexRE.exec(hex);
      return result ? {
        r: parseInt(result[1] + result[1], 16),
        g: parseInt(result[2] + result[2], 16),
        b: parseInt(result[3] + result[3], 16)
      } : null;

    case 6:
    case 7:
      result = fullHexRE.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;

    default:
      return null;
  }
}
/**
 * This function takes string color in hex or RGB format and adds the opacity, RGBA is passed through unchanged.
 *
 * @param color - The color string (hex, RGB, RGBA).
 * @param opacity - The new opacity.
 *
 * @returns RGBA string, for example 'rgba(255, 0, 127, 0.3)'.
 */


function overrideOpacity(color, opacity) {
  if (color.indexOf('rgba') !== -1) {
    return color;
  } else if (color.indexOf('rgb') !== -1) {
    var rgb = color.substr(color.indexOf('(') + 1).replace(')', '').split(',');
    return 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + opacity + ')';
  } else {
    var _rgb = hexToRGB(color);

    if (_rgb == null) {
      return color;
    } else {
      return 'rgba(' + _rgb.r + ',' + _rgb.g + ',' + _rgb.b + ',' + opacity + ')';
    }
  }
}
/**
 * Convert RGB <0, 255> into hex color string.
 *
 * @param red - Red channel.
 * @param green - Green channel.
 * @param blue - Blue channel.
 *
 * @returns Hex color string (for example: '#0acdc0').
 */


function RGBToHex(red, green, blue) {
  return '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
}
/**
 * Parse a color property into an object with border, background, and highlight colors
 *
 * @param inputColor - Shorthand color string or input color object.
 * @param defaultColor - Full color object to fill in missing values in inputColor.
 *
 * @returns Color object.
 */


function parseColor(inputColor, defaultColor) {
  if (isString(inputColor)) {
    var colorStr = inputColor;

    if (isValidRGB(colorStr)) {
      var rgb = colorStr.substr(4).substr(0, colorStr.length - 5).split(',').map(function (value) {
        return parseInt(value);
      });
      colorStr = RGBToHex(rgb[0], rgb[1], rgb[2]);
    }

    if (isValidHex(colorStr) === true) {
      var hsv = hexToHSV(colorStr);
      var lighterColorHSV = {
        h: hsv.h,
        s: hsv.s * 0.8,
        v: Math.min(1, hsv.v * 1.02)
      };
      var darkerColorHSV = {
        h: hsv.h,
        s: Math.min(1, hsv.s * 1.25),
        v: hsv.v * 0.8
      };
      var darkerColorHex = HSVToHex(darkerColorHSV.h, darkerColorHSV.s, darkerColorHSV.v);
      var lighterColorHex = HSVToHex(lighterColorHSV.h, lighterColorHSV.s, lighterColorHSV.v);
      return {
        background: colorStr,
        border: darkerColorHex,
        highlight: {
          background: lighterColorHex,
          border: darkerColorHex
        },
        hover: {
          background: lighterColorHex,
          border: darkerColorHex
        }
      };
    } else {
      return {
        background: colorStr,
        border: colorStr,
        highlight: {
          background: colorStr,
          border: colorStr
        },
        hover: {
          background: colorStr,
          border: colorStr
        }
      };
    }
  } else {
    if (defaultColor) {
      var color = {
        background: inputColor.background || defaultColor.background,
        border: inputColor.border || defaultColor.border,
        highlight: isString(inputColor.highlight) ? {
          border: inputColor.highlight,
          background: inputColor.highlight
        } : {
          background: inputColor.highlight && inputColor.highlight.background || defaultColor.highlight.background,
          border: inputColor.highlight && inputColor.highlight.border || defaultColor.highlight.border
        },
        hover: isString(inputColor.hover) ? {
          border: inputColor.hover,
          background: inputColor.hover
        } : {
          border: inputColor.hover && inputColor.hover.border || defaultColor.hover.border,
          background: inputColor.hover && inputColor.hover.background || defaultColor.hover.background
        }
      };
      return color;
    } else {
      var _color = {
        background: inputColor.background || undefined,
        border: inputColor.border || undefined,
        highlight: isString(inputColor.highlight) ? {
          border: inputColor.highlight,
          background: inputColor.highlight
        } : {
          background: inputColor.highlight && inputColor.highlight.background || undefined,
          border: inputColor.highlight && inputColor.highlight.border || undefined
        },
        hover: isString(inputColor.hover) ? {
          border: inputColor.hover,
          background: inputColor.hover
        } : {
          border: inputColor.hover && inputColor.hover.border || undefined,
          background: inputColor.hover && inputColor.hover.background || undefined
        }
      };
      return _color;
    }
  }
}
/**
 * Convert RGB <0, 255> into HSV object.
 * http://www.javascripter.net/faq/rgb2hsv.htm
 *
 * @param red - Red channel.
 * @param green - Green channel.
 * @param blue - Blue channel.
 *
 * @returns HSV color object.
 */


function RGBToHSV(red, green, blue) {
  red = red / 255;
  green = green / 255;
  blue = blue / 255;
  var minRGB = Math.min(red, Math.min(green, blue));
  var maxRGB = Math.max(red, Math.max(green, blue)); // Black-gray-white

  if (minRGB === maxRGB) {
    return {
      h: 0,
      s: 0,
      v: minRGB
    };
  } // Colors other than black-gray-white:


  var d = red === minRGB ? green - blue : blue === minRGB ? red - green : blue - red;
  var h = red === minRGB ? 3 : blue === minRGB ? 1 : 5;
  var hue = 60 * (h - d / (maxRGB - minRGB)) / 360;
  var saturation = (maxRGB - minRGB) / maxRGB;
  var value = maxRGB;
  return {
    h: hue,
    s: saturation,
    v: value
  };
}

var cssUtil = {
  // split a string with css styles into an object with key/values
  split: function split(cssText) {
    var styles = {};
    cssText.split(';').forEach(function (style) {
      if (style.trim() != '') {
        var parts = style.split(':');

        var _key2 = parts[0].trim();

        var _value2 = parts[1].trim();

        styles[_key2] = _value2;
      }
    });
    return styles;
  },
  // build a css text string from an object with key/values
  join: function join(styles) {
    return Object.keys(styles).map(function (key) {
      return key + ': ' + styles[key];
    }).join('; ');
  }
};
/**
 * Append a string with css styles to an element
 *
 * @param element - The element that will receive new styles.
 * @param cssText - The styles to be appended.
 */

function addCssText(element, cssText) {
  var currentStyles = cssUtil.split(element.style.cssText);
  var newStyles = cssUtil.split(cssText);

  var styles = _objectSpread2({}, currentStyles, {}, newStyles);

  element.style.cssText = cssUtil.join(styles);
}
/**
 * Remove a string with css styles from an element
 *
 * @param element - The element from which styles should be removed.
 * @param cssText - The styles to be removed.
 */


function removeCssText(element, cssText) {
  var styles = cssUtil.split(element.style.cssText);
  var removeStyles = cssUtil.split(cssText);

  for (var _key3 in removeStyles) {
    if (Object.prototype.hasOwnProperty.call(removeStyles, _key3)) {
      delete styles[_key3];
    }
  }

  element.style.cssText = cssUtil.join(styles);
}
/**
 * Convert HSV <0, 1> into RGB color object.
 * https://gist.github.com/mjijackson/5311256
 *
 * @param h - Hue
 * @param s - Saturation
 * @param v - Value
 *
 * @returns RGB color object.
 */


function HSVToRGB(h, s, v) {
  var r;
  var g;
  var b;
  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      r = v, g = t, b = p;
      break;

    case 1:
      r = q, g = v, b = p;
      break;

    case 2:
      r = p, g = v, b = t;
      break;

    case 3:
      r = p, g = q, b = v;
      break;

    case 4:
      r = t, g = p, b = v;
      break;

    case 5:
      r = v, g = p, b = q;
      break;
  }

  return {
    r: Math.floor(r * 255),
    g: Math.floor(g * 255),
    b: Math.floor(b * 255)
  };
}
/**
 * Convert HSV <0, 1> into hex color string.
 *
 * @param h - Hue
 * @param s - Saturation
 * @param v - Value
 *
 * @returns Hex color string.
 */


function HSVToHex(h, s, v) {
  var rgb = HSVToRGB(h, s, v);
  return RGBToHex(rgb.r, rgb.g, rgb.b);
}
/**
 * Convert hex color string into HSV <0, 1>.
 *
 * @param hex - Hex color string.
 *
 * @returns HSV color object.
 */


function hexToHSV(hex) {
  var rgb = hexToRGB(hex);

  if (!rgb) {
    throw new TypeError("'".concat(hex, "' is not a valid color."));
  }

  return RGBToHSV(rgb.r, rgb.g, rgb.b);
}
/**
 * Validate hex color string.
 *
 * @param hex - Unknown string that may contain a color.
 *
 * @returns True if the string is valid, false otherwise.
 */


function isValidHex(hex) {
  var isOk = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
  return isOk;
}
/**
 * Validate RGB color string.
 *
 * @param rgb - Unknown string that may contain a color.
 *
 * @returns True if the string is valid, false otherwise.
 */


function isValidRGB(rgb) {
  rgb = rgb.replace(' ', '');
  var isOk = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/i.test(rgb);
  return isOk;
}
/**
 * Validate RGBA color string.
 *
 * @param rgba - Unknown string that may contain a color.
 *
 * @returns True if the string is valid, false otherwise.
 */


function isValidRGBA(rgba) {
  rgba = rgba.replace(' ', '');
  var isOk = /rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(0?.{1,3})\)/i.test(rgba);
  return isOk;
}
/**
 * This recursively redirects the prototype of JSON objects to the referenceObject.
 * This is used for default options.
 *
 * @param fields - Names of properties to be bridged.
 * @param referenceObject - The original object.
 *
 * @returns A new object inheriting from the referenceObject.
 */


function selectiveBridgeObject(fields, referenceObject) {
  if (referenceObject !== null && _typeof(referenceObject) === 'object') {
    // !!! typeof null === 'object'
    var objectTo = Object.create(referenceObject);

    for (var i = 0; i < fields.length; i++) {
      if (Object.prototype.hasOwnProperty.call(referenceObject, fields[i])) {
        if (_typeof(referenceObject[fields[i]]) == 'object') {
          objectTo[fields[i]] = bridgeObject(referenceObject[fields[i]]);
        }
      }
    }

    return objectTo;
  } else {
    return null;
  }
}
/**
 * This recursively redirects the prototype of JSON objects to the referenceObject.
 * This is used for default options.
 *
 * @param referenceObject - The original object.
 *
 * @returns The Element if the referenceObject is an Element, or a new object inheriting from the referenceObject.
 */


function bridgeObject(referenceObject) {
  if (referenceObject === null || _typeof(referenceObject) !== 'object') {
    return null;
  }

  if (referenceObject instanceof Element) {
    // Avoid bridging DOM objects
    return referenceObject;
  }

  var objectTo = Object.create(referenceObject);

  for (var i in referenceObject) {
    if (Object.prototype.hasOwnProperty.call(referenceObject, i)) {
      if (_typeof(referenceObject[i]) == 'object') {
        objectTo[i] = bridgeObject(referenceObject[i]);
      }
    }
  }

  return objectTo;
}
/**
 * This method provides a stable sort implementation, very fast for presorted data.
 *
 * @param a - The array to be sorted (in-place).
 * @param compare - An order comparator.
 *
 * @returns The argument a.
 */


function insertSort(a, compare) {
  for (var i = 0; i < a.length; i++) {
    var k = a[i];
    var j = void 0;

    for (j = i; j > 0 && compare(k, a[j - 1]) < 0; j--) {
      a[j] = a[j - 1];
    }

    a[j] = k;
  }

  return a;
}
/**
 * This is used to set the options of subobjects in the options object.
 *
 * A requirement of these subobjects is that they have an 'enabled' element
 * which is optional for the user but mandatory for the program.
 *
 * The added value here of the merge is that option 'enabled' is set as required.
 *
 * @param mergeTarget - Either this.options or the options used for the groups.
 * @param options - Options.
 * @param option - Option key in the options argument.
 * @param globalOptions - Global options, passed in to determine value of option 'enabled'.
 */


function mergeOptions(mergeTarget, options, option) {
  var globalOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}; // Local helpers

  var isPresent = function isPresent(obj) {
    return obj !== null && obj !== undefined;
  };

  var isObject = function isObject(obj) {
    return obj !== null && _typeof(obj) === 'object';
  }; // https://stackoverflow.com/a/34491287/1223531


  var isEmpty = function isEmpty(obj) {
    for (var x in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, x)) {
        return false;
      }
    }

    return true;
  }; // Guards


  if (!isObject(mergeTarget)) {
    throw new Error('Parameter mergeTarget must be an object');
  }

  if (!isObject(options)) {
    throw new Error('Parameter options must be an object');
  }

  if (!isPresent(option)) {
    throw new Error('Parameter option must have a value');
  }

  if (!isObject(globalOptions)) {
    throw new Error('Parameter globalOptions must be an object');
  } //
  // Actual merge routine, separated from main logic
  // Only a single level of options is merged. Deeper levels are ref'd. This may actually be an issue.
  //


  var doMerge = function doMerge(target, options, option) {
    if (!isObject(target[option])) {
      target[option] = {};
    }

    var src = options[option];
    var dst = target[option];

    for (var prop in src) {
      if (Object.prototype.hasOwnProperty.call(src, prop)) {
        dst[prop] = src[prop];
      }
    }
  }; // Local initialization


  var srcOption = options[option];
  var globalPassed = isObject(globalOptions) && !isEmpty(globalOptions);
  var globalOption = globalPassed ? globalOptions[option] : undefined;
  var globalEnabled = globalOption ? globalOption.enabled : undefined; /////////////////////////////////////////
  // Main routine
  /////////////////////////////////////////

  if (srcOption === undefined) {
    return; // Nothing to do
  }

  if (typeof srcOption === 'boolean') {
    if (!isObject(mergeTarget[option])) {
      mergeTarget[option] = {};
    }

    mergeTarget[option].enabled = srcOption;
    return;
  }

  if (srcOption === null && !isObject(mergeTarget[option])) {
    // If possible, explicit copy from globals
    if (isPresent(globalOption)) {
      mergeTarget[option] = Object.create(globalOption);
    } else {
      return; // Nothing to do
    }
  }

  if (!isObject(srcOption)) {
    return;
  } //
  // Ensure that 'enabled' is properly set. It is required internally
  // Note that the value from options will always overwrite the existing value
  //


  var enabled = true; // default value

  if (srcOption.enabled !== undefined) {
    enabled = srcOption.enabled;
  } else {
    // Take from globals, if present
    if (globalEnabled !== undefined) {
      enabled = globalOption.enabled;
    }
  }

  doMerge(mergeTarget, options, option);
  mergeTarget[option].enabled = enabled;
}
/**
 * This function does a binary search for a visible item in a sorted list. If we find a visible item, the code that uses
 * this function will then iterate in both directions over this sorted list to find all visible items.
 *
 * @param orderedItems - Items ordered by start
 * @param comparator - -1 is lower, 0 is equal, 1 is higher
 * @param field - Property name on an item (i.e. item[field]).
 * @param field2 - Second property name on an item (i.e. item[field][field2]).
 *
 * @returns Index of the found item or -1 if nothing was found.
 */


function binarySearchCustom(orderedItems, comparator, field, field2) {
  var maxIterations = 10000;
  var iteration = 0;
  var low = 0;
  var high = orderedItems.length - 1;

  while (low <= high && iteration < maxIterations) {
    var middle = Math.floor((low + high) / 2);
    var item = orderedItems[middle];

    var _value3 = field2 === undefined ? item[field] : item[field][field2];

    var searchResult = comparator(_value3);

    if (searchResult == 0) {
      // jihaa, found a visible item!
      return middle;
    } else if (searchResult == -1) {
      // it is too small --> increase low
      low = middle + 1;
    } else {
      // it is too big --> decrease high
      high = middle - 1;
    }

    iteration++;
  }

  return -1;
}
/**
 * This function does a binary search for a specific value in a sorted array. If it does not exist but is in between of
 * two values, we return either the one before or the one after, depending on user input
 * If it is found, we return the index, else -1.
 *
 * @param orderedItems - Sorted array.
 * @param target - The searched value.
 * @param field - Name of the property in items to be searched.
 * @param sidePreference - If the target is between two values, should the index of the before or the after be returned?
 * @param comparator - An optional comparator, returning -1, 0, 1 for <, ===, >.
 *
 * @returns The index of found value or -1 if nothing was found.
 */


function binarySearchValue(orderedItems, target, field, sidePreference, comparator) {
  var maxIterations = 10000;
  var iteration = 0;
  var low = 0;
  var high = orderedItems.length - 1;
  var prevValue;
  var value;
  var nextValue;
  var middle;
  comparator = comparator != undefined ? comparator : function (a, b) {
    return a == b ? 0 : a < b ? -1 : 1;
  };

  while (low <= high && iteration < maxIterations) {
    // get a new guess
    middle = Math.floor(0.5 * (high + low));
    prevValue = orderedItems[Math.max(0, middle - 1)][field];
    value = orderedItems[middle][field];
    nextValue = orderedItems[Math.min(orderedItems.length - 1, middle + 1)][field];

    if (comparator(value, target) == 0) {
      // we found the target
      return middle;
    } else if (comparator(prevValue, target) < 0 && comparator(value, target) > 0) {
      // target is in between of the previous and the current
      return sidePreference == 'before' ? Math.max(0, middle - 1) : middle;
    } else if (comparator(value, target) < 0 && comparator(nextValue, target) > 0) {
      // target is in between of the current and the next
      return sidePreference == 'before' ? middle : Math.min(orderedItems.length - 1, middle + 1);
    } else {
      // didnt find the target, we need to change our boundaries.
      if (comparator(value, target) < 0) {
        // it is too small --> increase low
        low = middle + 1;
      } else {
        // it is too big --> decrease high
        high = middle - 1;
      }
    }

    iteration++;
  } // didnt find anything. Return -1.


  return -1;
}
/*
 * Easing Functions.
 * Only considering the t value for the range [0, 1] => [0, 1].
 *
 * Inspiration: from http://gizma.com/easing/
 * https://gist.github.com/gre/1650294
 */


var easingFunctions = {
  /**
   * no easing, no acceleration
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  linear: function linear(t) {
    return t;
  },

  /**
   * accelerating from zero velocity
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },

  /**
   * decelerating to zero velocity
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },

  /**
   * acceleration until halfway, then deceleration
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  easeInOutQuad: function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },

  /**
   * accelerating from zero velocity
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },

  /**
   * decelerating to zero velocity
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },

  /**
   * acceleration until halfway, then deceleration
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  easeInOutCubic: function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },

  /**
   * accelerating from zero velocity
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },

  /**
   * decelerating to zero velocity
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },

  /**
   * acceleration until halfway, then deceleration
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  easeInOutQuart: function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },

  /**
   * accelerating from zero velocity
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },

  /**
   * decelerating to zero velocity
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },

  /**
   * acceleration until halfway, then deceleration
   *
   * @param t - Time.
   *
   * @returns Value at time t.
   */
  easeInOutQuint: function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};
/**
 * Experimentaly compute the width of the scrollbar for this browser.
 *
 * @returns The width in pixels.
 */

function getScrollBarWidth() {
  var inner = document.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '200px';
  var outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '200px';
  outer.style.height = '150px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);
  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;

  if (w1 == w2) {
    w2 = outer.clientWidth;
  }

  document.body.removeChild(outer);
  return w1 - w2;
} // @TODO: This doesn't work properly.
// It works only for single property objects,
// otherwise it combines all of the types in a union.
// export function topMost<K1 extends string, V1> (
//   pile: Record<K1, undefined | V1>[],
//   accessors: K1 | [K1]
// ): undefined | V1
// export function topMost<K1 extends string, K2 extends string, V1, V2> (
//   pile: Record<K1, undefined | V1 | Record<K2, undefined | V2>>[],
//   accessors: [K1, K2]
// ): undefined | V1 | V2
// export function topMost<K1 extends string, K2 extends string, K3 extends string, V1, V2, V3> (
//   pile: Record<K1, undefined | V1 | Record<K2, undefined | V2 | Record<K3, undefined | V3>>>[],
//   accessors: [K1, K2, K3]
// ): undefined | V1 | V2 | V3

/**
 * Get the top most property value from a pile of objects.
 *
 * @param pile - Array of objects, no required format.
 * @param accessors - Array of property names (e.g. object['foo']['bar'] → ['foo', 'bar']).
 *
 * @returns Value of the property with given accessors path from the first pile item where it's not undefined.
 */


function topMost(pile, accessors) {
  var candidate;

  if (!Array.isArray(accessors)) {
    accessors = [accessors];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pile[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var member = _step.value;

      if (member) {
        candidate = member[accessors[0]];

        for (var i = 1; i < accessors.length; i++) {
          if (candidate) {
            candidate = candidate[accessors[i]];
          }
        }

        if (typeof candidate !== 'undefined') {
          break;
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return candidate;
}

var util =
/*#__PURE__*/
Object.freeze({
  isNumber: isNumber,
  recursiveDOMDelete: recursiveDOMDelete,
  isString: isString,
  isObject: isObject,
  isDate: isDate,
  isMoment: isMoment,
  fillIfDefined: fillIfDefined,
  extend: extend,
  selectiveExtend: selectiveExtend,
  selectiveDeepExtend: selectiveDeepExtend,
  selectiveNotDeepExtend: selectiveNotDeepExtend,
  deepExtend: deepExtend,
  equalArray: equalArray,
  convert: convert,
  getType: getType,
  copyAndExtendArray: copyAndExtendArray,
  copyArray: copyArray,
  getAbsoluteLeft: getAbsoluteLeft,
  getAbsoluteRight: getAbsoluteRight,
  getAbsoluteTop: getAbsoluteTop,
  addClassName: addClassName,
  removeClassName: removeClassName,
  forEach: forEach,
  toArray: toArray,
  updateProperty: updateProperty,
  throttle: throttle,
  addEventListener: addEventListener,
  removeEventListener: removeEventListener,
  preventDefault: preventDefault,
  getTarget: getTarget,
  hasParent: hasParent,
  option: option,
  hexToRGB: hexToRGB,
  overrideOpacity: overrideOpacity,
  RGBToHex: RGBToHex,
  parseColor: parseColor,
  RGBToHSV: RGBToHSV,
  addCssText: addCssText,
  removeCssText: removeCssText,
  HSVToRGB: HSVToRGB,
  HSVToHex: HSVToHex,
  hexToHSV: hexToHSV,
  isValidHex: isValidHex,
  isValidRGB: isValidRGB,
  isValidRGBA: isValidRGBA,
  selectiveBridgeObject: selectiveBridgeObject,
  bridgeObject: bridgeObject,
  insertSort: insertSort,
  mergeOptions: mergeOptions,
  binarySearchCustom: binarySearchCustom,
  binarySearchValue: binarySearchValue,
  easingFunctions: easingFunctions,
  getScrollBarWidth: getScrollBarWidth,
  topMost: topMost,
  randomUUID: uuid4
}); // New API (tree shakeable).

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire$1 () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var DOMutil = createCommonjsModule$1(function (module, exports) {
  // DOM utility methods

  /**
   * this prepares the JSON container for allocating SVG elements
   * @param {Object} JSONcontainer
   * @private
   */
  exports.prepareElements = function (JSONcontainer) {
    // cleanup the redundant svgElements;
    for (var elementType in JSONcontainer) {
      if (JSONcontainer.hasOwnProperty(elementType)) {
        JSONcontainer[elementType].redundant = JSONcontainer[elementType].used;
        JSONcontainer[elementType].used = [];
      }
    }
  };
  /**
   * this cleans up all the unused SVG elements. By asking for the parentNode, we only need to supply the JSON container from
   * which to remove the redundant elements.
   *
   * @param {Object} JSONcontainer
   * @private
   */


  exports.cleanupElements = function (JSONcontainer) {
    // cleanup the redundant svgElements;
    for (var elementType in JSONcontainer) {
      if (JSONcontainer.hasOwnProperty(elementType)) {
        if (JSONcontainer[elementType].redundant) {
          for (var i = 0; i < JSONcontainer[elementType].redundant.length; i++) {
            JSONcontainer[elementType].redundant[i].parentNode.removeChild(JSONcontainer[elementType].redundant[i]);
          }

          JSONcontainer[elementType].redundant = [];
        }
      }
    }
  };
  /**
   * Ensures that all elements are removed first up so they can be recreated cleanly
   * @param {Object} JSONcontainer
   */


  exports.resetElements = function (JSONcontainer) {
    exports.prepareElements(JSONcontainer);
    exports.cleanupElements(JSONcontainer);
    exports.prepareElements(JSONcontainer);
  };
  /**
   * Allocate or generate an SVG element if needed. Store a reference to it in the JSON container and draw it in the svgContainer
   * the JSON container and the SVG container have to be supplied so other svg containers (like the legend) can use this.
   *
   * @param {string} elementType
   * @param {Object} JSONcontainer
   * @param {Object} svgContainer
   * @returns {Element}
   * @private
   */


  exports.getSVGElement = function (elementType, JSONcontainer, svgContainer) {
    var element; // allocate SVG element, if it doesnt yet exist, create one.

    if (JSONcontainer.hasOwnProperty(elementType)) {
      // this element has been created before
      // check if there is an redundant element
      if (JSONcontainer[elementType].redundant.length > 0) {
        element = JSONcontainer[elementType].redundant[0];
        JSONcontainer[elementType].redundant.shift();
      } else {
        // create a new element and add it to the SVG
        element = document.createElementNS('http://www.w3.org/2000/svg', elementType);
        svgContainer.appendChild(element);
      }
    } else {
      // create a new element and add it to the SVG, also create a new object in the svgElements to keep track of it.
      element = document.createElementNS('http://www.w3.org/2000/svg', elementType);
      JSONcontainer[elementType] = {
        used: [],
        redundant: []
      };
      svgContainer.appendChild(element);
    }

    JSONcontainer[elementType].used.push(element);
    return element;
  };
  /**
   * Allocate or generate an SVG element if needed. Store a reference to it in the JSON container and draw it in the svgContainer
   * the JSON container and the SVG container have to be supplied so other svg containers (like the legend) can use this.
   *
   * @param {string} elementType
   * @param {Object} JSONcontainer
   * @param {Element} DOMContainer
   * @param {Element} insertBefore
   * @returns {*}
   */


  exports.getDOMElement = function (elementType, JSONcontainer, DOMContainer, insertBefore) {
    var element; // allocate DOM element, if it doesnt yet exist, create one.

    if (JSONcontainer.hasOwnProperty(elementType)) {
      // this element has been created before
      // check if there is an redundant element
      if (JSONcontainer[elementType].redundant.length > 0) {
        element = JSONcontainer[elementType].redundant[0];
        JSONcontainer[elementType].redundant.shift();
      } else {
        // create a new element and add it to the SVG
        element = document.createElement(elementType);

        if (insertBefore !== undefined) {
          DOMContainer.insertBefore(element, insertBefore);
        } else {
          DOMContainer.appendChild(element);
        }
      }
    } else {
      // create a new element and add it to the SVG, also create a new object in the svgElements to keep track of it.
      element = document.createElement(elementType);
      JSONcontainer[elementType] = {
        used: [],
        redundant: []
      };

      if (insertBefore !== undefined) {
        DOMContainer.insertBefore(element, insertBefore);
      } else {
        DOMContainer.appendChild(element);
      }
    }

    JSONcontainer[elementType].used.push(element);
    return element;
  };
  /**
   * Draw a point object. This is a separate function because it can also be called by the legend.
   * The reason the JSONcontainer and the target SVG svgContainer have to be supplied is so the legend can use these functions
   * as well.
   *
   * @param {number} x
   * @param {number} y
   * @param {Object} groupTemplate: A template containing the necessary information to draw the datapoint e.g., {style: 'circle', size: 5, className: 'className' }
   * @param {Object} JSONcontainer
   * @param {Object} svgContainer
   * @param {Object} labelObj
   * @returns {vis.PointItem}
   */


  exports.drawPoint = function (x, y, groupTemplate, JSONcontainer, svgContainer, labelObj) {
    var point;

    if (groupTemplate.style == 'circle') {
      point = exports.getSVGElement('circle', JSONcontainer, svgContainer);
      point.setAttributeNS(null, "cx", x);
      point.setAttributeNS(null, "cy", y);
      point.setAttributeNS(null, "r", 0.5 * groupTemplate.size);
    } else {
      point = exports.getSVGElement('rect', JSONcontainer, svgContainer);
      point.setAttributeNS(null, "x", x - 0.5 * groupTemplate.size);
      point.setAttributeNS(null, "y", y - 0.5 * groupTemplate.size);
      point.setAttributeNS(null, "width", groupTemplate.size);
      point.setAttributeNS(null, "height", groupTemplate.size);
    }

    if (groupTemplate.styles !== undefined) {
      point.setAttributeNS(null, "style", groupTemplate.styles);
    }

    point.setAttributeNS(null, "class", groupTemplate.className + " vis-point"); //handle label

    if (labelObj) {
      var label = exports.getSVGElement('text', JSONcontainer, svgContainer);

      if (labelObj.xOffset) {
        x = x + labelObj.xOffset;
      }

      if (labelObj.yOffset) {
        y = y + labelObj.yOffset;
      }

      if (labelObj.content) {
        label.textContent = labelObj.content;
      }

      if (labelObj.className) {
        label.setAttributeNS(null, "class", labelObj.className + " vis-label");
      }

      label.setAttributeNS(null, "x", x);
      label.setAttributeNS(null, "y", y);
    }

    return point;
  };
  /**
   * draw a bar SVG element centered on the X coordinate
   *
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {string} className
   * @param {Object} JSONcontainer
   * @param {Object} svgContainer
   * @param {string} style
   */


  exports.drawBar = function (x, y, width, height, className, JSONcontainer, svgContainer, style) {
    if (height != 0) {
      if (height < 0) {
        height *= -1;
        y -= height;
      }

      var rect = exports.getSVGElement('rect', JSONcontainer, svgContainer);
      rect.setAttributeNS(null, "x", x - 0.5 * width);
      rect.setAttributeNS(null, "y", y);
      rect.setAttributeNS(null, "width", width);
      rect.setAttributeNS(null, "height", height);
      rect.setAttributeNS(null, "class", className);

      if (style) {
        rect.setAttributeNS(null, "style", style);
      }
    }
  };
});
var DOMutil_1 = DOMutil.prepareElements;
var DOMutil_2 = DOMutil.cleanupElements;
var DOMutil_3 = DOMutil.resetElements;
var DOMutil_4 = DOMutil.getSVGElement;
var DOMutil_5 = DOMutil.getDOMElement;
var DOMutil_6 = DOMutil.drawPoint;
var DOMutil_7 = DOMutil.drawBar;

/** 
 * vis-data - data
 * http://visjs.org/
 * 
 * Manage unstructured data using DataSet. Add, update, and remove data, and listen for changes in the data.
 * 
 * @version 6.0.0
 * @date    2019-07-12T21:27:54Z
 * 
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2018-2019 visjs contributors, https://github.com/visjs
 * 
 * @license 
 * vis.js is dual licensed under both
 * 
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *   and
 * 
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 * 
 * vis.js may be distributed under either license.
 */
function _typeof$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

var commonjsGlobal$2 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire$2() {
  throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function createCommonjsModule$2(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var moment$1 = createCommonjsModule$2(function (module, exports) {
  (function (global, factory) {
    module.exports = factory();
  })(commonjsGlobal$2, function () {
    var hookCallback;

    function hooks() {
      return hookCallback.apply(null, arguments);
    } // This is done to register the method called with moment()
    // without creating circular dependencies.


    function setHookCallback(callback) {
      hookCallback = callback;
    }

    function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
      // IE8 will treat undefined and null as object if it wasn't for
      // input != null
      return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
      } else {
        var k;

        for (k in obj) {
          if (obj.hasOwnProperty(k)) {
            return false;
          }
        }

        return true;
      }
    }

    function isUndefined(input) {
      return input === void 0;
    }

    function isNumber(input) {
      return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
      var res = [],
          i;

      for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
      }

      return res;
    }

    function hasOwnProp(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
      for (var i in b) {
        if (hasOwnProp(b, i)) {
          a[i] = b[i];
        }
      }

      if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
      }

      if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
      }

      return a;
    }

    function createUTC(input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
      // We need to deep clone this object.
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
      };
    }

    function getParsingFlags(m) {
      if (m._pf == null) {
        m._pf = defaultParsingFlags();
      }

      return m._pf;
    }

    var some;

    if (Array.prototype.some) {
      some = Array.prototype.some;
    } else {
      some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
          if (i in t && fun.call(this, t[i], i, t)) {
            return true;
          }
        }

        return false;
      };
    }

    function isValid(m) {
      if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
          return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

        if (m._strict) {
          isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
          m._isValid = isNowValid;
        } else {
          return isNowValid;
        }
      }

      return m._isValid;
    }

    function createInvalid(flags) {
      var m = createUTC(NaN);

      if (flags != null) {
        extend(getParsingFlags(m), flags);
      } else {
        getParsingFlags(m).userInvalidated = true;
      }

      return m;
    } // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.


    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
      var i, prop, val;

      if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
      }

      if (!isUndefined(from._i)) {
        to._i = from._i;
      }

      if (!isUndefined(from._f)) {
        to._f = from._f;
      }

      if (!isUndefined(from._l)) {
        to._l = from._l;
      }

      if (!isUndefined(from._strict)) {
        to._strict = from._strict;
      }

      if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
      }

      if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
      }

      if (!isUndefined(from._offset)) {
        to._offset = from._offset;
      }

      if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
      }

      if (!isUndefined(from._locale)) {
        to._locale = from._locale;
      }

      if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
          prop = momentProperties[i];
          val = from[prop];

          if (!isUndefined(val)) {
            to[prop] = val;
          }
        }
      }

      return to;
    }

    var updateInProgress = false; // Moment prototype object

    function Moment(config) {
      copyConfig(this, config);
      this._d = new Date(config._d != null ? config._d.getTime() : NaN);

      if (!this.isValid()) {
        this._d = new Date(NaN);
      } // Prevent infinite loop in case updateOffset creates new moment
      // objects.


      if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
      }
    }

    function isMoment(obj) {
      return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }

    function absFloor(number) {
      if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
      } else {
        return Math.floor(number);
      }
    }

    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion,
          value = 0;

      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
      }

      return value;
    } // compare two arrays, return the number of differences


    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length),
          lengthDiff = Math.abs(array1.length - array2.length),
          diffs = 0,
          i;

      for (i = 0; i < len; i++) {
        if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
          diffs++;
        }
      }

      return diffs + lengthDiff;
    }

    function warn(msg) {
      if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
        console.warn('Deprecation warning: ' + msg);
      }
    }

    function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function () {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(null, msg);
        }

        if (firstTime) {
          var args = [];
          var arg;

          for (var i = 0; i < arguments.length; i++) {
            arg = '';

            if (typeof arguments[i] === 'object') {
              arg += '\n[' + i + '] ';

              for (var key in arguments[0]) {
                arg += key + ': ' + arguments[0][key] + ', ';
              }

              arg = arg.slice(0, -2); // Remove trailing comma and space
            } else {
              arg = arguments[i];
            }

            args.push(arg);
          }

          warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
          firstTime = false;
        }

        return fn.apply(this, arguments);
      }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
      }

      if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
      }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
      return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set(config) {
      var prop, i;

      for (i in config) {
        prop = config[i];

        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this['_' + i] = prop;
        }
      }

      this._config = config; // Lenient ordinal parsing accepts just a number in addition to
      // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
      // TODO: Remove "ordinalParse" fallback in next major release.

      this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }

    function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig),
          prop;

      for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
          if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
            res[prop] = {};
            extend(res[prop], parentConfig[prop]);
            extend(res[prop], childConfig[prop]);
          } else if (childConfig[prop] != null) {
            res[prop] = childConfig[prop];
          } else {
            delete res[prop];
          }
        }
      }

      for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
          // make sure changes to properties don't modify parent config
          res[prop] = extend({}, res[prop]);
        }
      }

      return res;
    }

    function Locale(config) {
      if (config != null) {
        this.set(config);
      }
    }

    var keys;

    if (Object.keys) {
      keys = Object.keys;
    } else {
      keys = function (obj) {
        var i,
            res = [];

        for (i in obj) {
          if (hasOwnProp(obj, i)) {
            res.push(i);
          }
        }

        return res;
      };
    }

    var defaultCalendar = {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    };

    function calendar(key, mom, now) {
      var output = this._calendar[key] || this._calendar['sameElse'];
      return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
      LTS: 'h:mm:ss A',
      LT: 'h:mm A',
      L: 'MM/DD/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat(key) {
      var format = this._longDateFormat[key],
          formatUpper = this._longDateFormat[key.toUpperCase()];

      if (format || !formatUpper) {
        return format;
      }

      this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
      });
      return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
      return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
      return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
      var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
      return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
      var lowerCase = unit.toLowerCase();
      aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
      return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {},
          normalizedProp,
          prop;

      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);

          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }

      return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
      priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
      var units = [];

      for (var u in unitsObj) {
        units.push({
          unit: u,
          priority: priorities[u]
        });
      }

      units.sort(function (a, b) {
        return a.priority - b.priority;
      });
      return units;
    }

    function zeroFill(number, targetLength, forceSign) {
      var absNumber = '' + Math.abs(number),
          zerosToFill = targetLength - absNumber.length,
          sign = number >= 0;
      return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var formatFunctions = {};
    var formatTokenFunctions = {}; // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }

    function addFormatToken(token, padded, ordinal, callback) {
      var func = callback;

      if (typeof callback === 'string') {
        func = function () {
          return this[callback]();
        };
      }

      if (token) {
        formatTokenFunctions[token] = func;
      }

      if (padded) {
        formatTokenFunctions[padded[0]] = function () {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
      }

      if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
          return this.localeData().ordinal(func.apply(this, arguments), token);
        };
      }
    }

    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
      }

      return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
      var array = format.match(formattingTokens),
          i,
          length;

      for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }

      return function (mom) {
        var output = '',
            i;

        for (i = 0; i < length; i++) {
          output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }

        return output;
      };
    } // format date using native date object


    function formatMoment(m, format) {
      if (!m.isValid()) {
        return m.localeData().invalidDate();
      }

      format = expandFormat(format, m.localeData());
      formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
      return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
      var i = 5;

      function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
      }

      localFormattingTokens.lastIndex = 0;

      while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
      }

      return format;
    }

    var match1 = /\d/; //       0 - 9

    var match2 = /\d\d/; //      00 - 99

    var match3 = /\d{3}/; //     000 - 999

    var match4 = /\d{4}/; //    0000 - 9999

    var match6 = /[+-]?\d{6}/; // -999999 - 999999

    var match1to2 = /\d\d?/; //       0 - 99

    var match3to4 = /\d\d\d\d?/; //     999 - 9999

    var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

    var match1to3 = /\d{1,3}/; //       0 - 999

    var match1to4 = /\d{1,4}/; //       0 - 9999

    var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

    var matchUnsigned = /\d+/; //       0 - inf

    var matchSigned = /[+-]?\d+/; //    -inf - inf

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months

    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    var regexes = {};

    function addRegexToken(token, regex, strictRegex) {
      regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return isStrict && strictRegex ? strictRegex : regex;
      };
    }

    function getParseRegexForToken(token, config) {
      if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
      }

      return regexes[token](config._strict, config._locale);
    } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


    function unescapeFormat(s) {
      return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
      }));
    }

    function regexEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
      var i,
          func = callback;

      if (typeof token === 'string') {
        token = [token];
      }

      if (isNumber(callback)) {
        func = function (input, array) {
          array[callback] = toInt(input);
        };
      }

      for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
      }
    }

    function addWeekParseToken(token, callback) {
      addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
      });
    }

    function addTimeToArrayFromToken(token, input, config) {
      if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
      }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8; // FORMATTING

    addFormatToken('Y', 0, 0, function () {
      var y = this.year();
      return y <= 9999 ? '' + y : '+' + y;
    });
    addFormatToken(0, ['YY', 2], 0, function () {
      return this.year() % 100;
    });
    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

    addUnitAlias('year', 'y'); // PRIORITIES

    addUnitPriority('year', 1); // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
      array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
      array[YEAR] = parseInt(input, 10);
    }); // HELPERS

    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    } // HOOKS


    hooks.parseTwoDigitYear = function (input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    }; // MOMENTS


    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
      return isLeapYear(this.year());
    }

    function makeGetSet(unit, keepTime) {
      return function (value) {
        if (value != null) {
          set$1(this, unit, value);
          hooks.updateOffset(this, keepTime);
          return this;
        } else {
          return get(this, unit);
        }
      };
    }

    function get(mom, unit) {
      return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1(mom, unit, value) {
      if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        } else {
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
      }
    } // MOMENTS


    function stringGet(units) {
      units = normalizeUnits(units);

      if (isFunction(this[units])) {
        return this[units]();
      }

      return this;
    }

    function stringSet(units, value) {
      if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);

        for (var i = 0; i < prioritized.length; i++) {
          this[prioritized[i].unit](units[prioritized[i].unit]);
        }
      } else {
        units = normalizeUnits(units);

        if (isFunction(this[units])) {
          return this[units](value);
        }
      }

      return this;
    }

    function mod(n, x) {
      return (n % x + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function (o) {
        // I know
        var i;

        for (i = 0; i < this.length; ++i) {
          if (this[i] === o) {
            return i;
          }
        }

        return -1;
      };
    }

    function daysInMonth(year, month) {
      if (isNaN(year) || isNaN(month)) {
        return NaN;
      }

      var modMonth = mod(month, 12);
      year += (month - modMonth) / 12;
      return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    } // FORMATTING


    addFormatToken('M', ['MM', 2], 'Mo', function () {
      return this.month() + 1;
    });
    addFormatToken('MMM', 0, 0, function (format) {
      return this.localeData().monthsShort(this, format);
    });
    addFormatToken('MMMM', 0, 0, function (format) {
      return this.localeData().months(this, format);
    }); // ALIASES

    addUnitAlias('month', 'M'); // PRIORITY

    addUnitPriority('month', 8); // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
      return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
      return locale.monthsRegex(isStrict);
    });
    addParseToken(['M', 'MM'], function (input, array) {
      array[MONTH] = toInt(input) - 1;
    });
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
      var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


      if (month != null) {
        array[MONTH] = month;
      } else {
        getParsingFlags(config).invalidMonth = input;
      }
    }); // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');

    function localeMonths(m, format) {
      if (!m) {
        return isArray(this._months) ? this._months : this._months['standalone'];
      }

      return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');

    function localeMonthsShort(m, format) {
      if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
      }

      return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
      var i,
          ii,
          mom,
          llc = monthName.toLocaleLowerCase();

      if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];

        for (i = 0; i < 12; ++i) {
          mom = createUTC([2000, i]);
          this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
          this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
      }

      if (strict) {
        if (format === 'MMM') {
          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format === 'MMM') {
          ii = indexOf.call(this._shortMonthsParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }

    function localeMonthsParse(monthName, format, strict) {
      var i, mom, regex;

      if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
      }

      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      } // TODO: add sorting
      // Sorting makes sure if one month (or abbr) is a prefix of another
      // see sorting in computeMonthsParse


      for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);

        if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
          this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }

        if (!strict && !this._monthsParse[i]) {
          regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
          this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        } // test the regex


        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
          return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
          return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    } // MOMENTS


    function setMonth(mom, value) {
      var dayOfMonth;

      if (!mom.isValid()) {
        // No op
        return mom;
      }

      if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
          value = toInt(value);
        } else {
          value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

          if (!isNumber(value)) {
            return mom;
          }
        }
      }

      dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

      mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

      return mom;
    }

    function getSetMonth(value) {
      if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
      } else {
        return get(this, 'Month');
      }
    }

    function getDaysInMonth() {
      return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;

    function monthsShortRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
        }

        if (isStrict) {
          return this._monthsShortStrictRegex;
        } else {
          return this._monthsShortRegex;
        }
      } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
          this._monthsShortRegex = defaultMonthsShortRegex;
        }

        return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
      }
    }

    var defaultMonthsRegex = matchWord;

    function monthsRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
        }

        if (isStrict) {
          return this._monthsStrictRegex;
        } else {
          return this._monthsRegex;
        }
      } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
          this._monthsRegex = defaultMonthsRegex;
        }

        return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
      }
    }

    function computeMonthsParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }

      var shortPieces = [],
          longPieces = [],
          mixedPieces = [],
          i,
          mom;

      for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
      } // Sorting makes sure if one month (or abbr) is a prefix of another it
      // will match the longer piece.


      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);

      for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
      }

      for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
      this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate(y, m, d, h, M, s, ms) {
      // can't just apply() to create a date:
      // https://stackoverflow.com/q/181348
      var date; // the date constructor remaps years 0-99 to 1900-1999

      if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        date = new Date(y + 400, m, d, h, M, s, ms);

        if (isFinite(date.getFullYear())) {
          date.setFullYear(y);
        }
      } else {
        date = new Date(y, m, d, h, M, s, ms);
      }

      return date;
    }

    function createUTCDate(y) {
      var date; // the Date.UTC function remaps years 0-99 to 1900-1999

      if (y < 100 && y >= 0) {
        var args = Array.prototype.slice.call(arguments); // preserve leap years using a full 400 year cycle, then reset

        args[0] = y + 400;
        date = new Date(Date.UTC.apply(null, args));

        if (isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(y);
        }
      } else {
        date = new Date(Date.UTC.apply(null, arguments));
      }

      return date;
    } // start-of-first-week - start-of-year


    function firstWeekOffset(year, dow, doy) {
      var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
      fwd = 7 + dow - doy,
          // first-week day local weekday -- which local weekday is fwd
      fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7,
          weekOffset = firstWeekOffset(year, dow, doy),
          dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
          resYear,
          resDayOfYear;

      if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
      } else {
        resYear = year;
        resDayOfYear = dayOfYear;
      }

      return {
        year: resYear,
        dayOfYear: resDayOfYear
      };
    }

    function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy),
          week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
          resWeek,
          resYear;

      if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
      } else {
        resYear = mom.year();
        resWeek = week;
      }

      return {
        week: resWeek,
        year: resYear
      };
    }

    function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy),
          weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    } // FORMATTING


    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W'); // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5); // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
      week[token.substr(0, 1)] = toInt(input);
    }); // HELPERS
    // LOCALES

    function localeWeek(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.

    };

    function localeFirstDayOfWeek() {
      return this._week.dow;
    }

    function localeFirstDayOfYear() {
      return this._week.doy;
    } // MOMENTS


    function getSetWeek(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, 'd');
    } // FORMATTING


    addFormatToken('d', 0, 'do', 'day');
    addFormatToken('dd', 0, 0, function (format) {
      return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken('ddd', 0, 0, function (format) {
      return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken('dddd', 0, 0, function (format) {
      return this.localeData().weekdays(this, format);
    });
    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E'); // PRIORITY

    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11); // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
      return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
      return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
      return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
      var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


      if (weekday != null) {
        week.d = weekday;
      } else {
        getParsingFlags(config).invalidWeekday = input;
      }
    });
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
      week[token] = toInt(input);
    }); // HELPERS

    function parseWeekday(input, locale) {
      if (typeof input !== 'string') {
        return input;
      }

      if (!isNaN(input)) {
        return parseInt(input, 10);
      }

      input = locale.weekdaysParse(input);

      if (typeof input === 'number') {
        return input;
      }

      return null;
    }

    function parseIsoWeekday(input, locale) {
      if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
      }

      return isNaN(input) ? null : input;
    } // LOCALES


    function shiftWeekdays(ws, n) {
      return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');

    function localeWeekdays(m, format) {
      var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
      return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

    function localeWeekdaysShort(m) {
      return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');

    function localeWeekdaysMin(m) {
      return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
      var i,
          ii,
          mom,
          llc = weekdayName.toLocaleLowerCase();

      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
          mom = createUTC([2000, 1]).day(i);
          this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
          this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
          this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
      }

      if (strict) {
        if (format === 'dddd') {
          ii = indexOf.call(this._weekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format === 'dddd') {
          ii = indexOf.call(this._weekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._shortWeekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
          ii = indexOf.call(this._shortWeekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._weekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._weekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
      var i, mom, regex;

      if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
      }

      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
      }

      for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);

        if (strict && !this._fullWeekdaysParse[i]) {
          this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
          this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
          this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
        }

        if (!this._weekdaysParse[i]) {
          regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
          this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        } // test the regex


        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
          return i;
        }
      }
    } // MOMENTS


    function getSetDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
      } else {
        return day;
      }
    }

    function getSetLocaleDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      } // behaves the same as moment#day except
      // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
      // as a setter, sunday should belong to the previous week.


      if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
        return this.day() || 7;
      }
    }

    var defaultWeekdaysRegex = matchWord;

    function weekdaysRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }

        if (isStrict) {
          return this._weekdaysStrictRegex;
        } else {
          return this._weekdaysRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          this._weekdaysRegex = defaultWeekdaysRegex;
        }

        return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
      }
    }

    var defaultWeekdaysShortRegex = matchWord;

    function weekdaysShortRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }

        if (isStrict) {
          return this._weekdaysShortStrictRegex;
        } else {
          return this._weekdaysShortRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }

        return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
      }
    }

    var defaultWeekdaysMinRegex = matchWord;

    function weekdaysMinRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }

        if (isStrict) {
          return this._weekdaysMinStrictRegex;
        } else {
          return this._weekdaysMinRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }

        return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
      }
    }

    function computeWeekdaysParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }

      var minPieces = [],
          shortPieces = [],
          longPieces = [],
          mixedPieces = [],
          i,
          mom,
          minp,
          shortp,
          longp;

      for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
      } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
      // will match the longer piece.


      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);

      for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;
      this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
      this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
      this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    } // FORMATTING


    function hFormat() {
      return this.hours() % 12 || 12;
    }

    function kFormat() {
      return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);
    addFormatToken('hmm', 0, 0, function () {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken('hmmss', 0, 0, function () {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken('Hmm', 0, 0, function () {
      return '' + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken('Hmmss', 0, 0, function () {
      return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });

    function meridiem(token, lowercase) {
      addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
      });
    }

    meridiem('a', true);
    meridiem('A', false); // ALIASES

    addUnitAlias('hour', 'h'); // PRIORITY

    addUnitPriority('hour', 13); // PARSING

    function matchMeridiem(isStrict, locale) {
      return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
      config._isPm = config._locale.isPM(input);
      config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
      array[HOUR] = toInt(input);
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
    }); // LOCALES

    function localeIsPM(input) {
      // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
      // Using charAt should be more compatible.
      return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

    function localeMeridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'pm' : 'PM';
      } else {
        return isLower ? 'am' : 'AM';
      }
    } // MOMENTS
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.


    var getSetHour = makeGetSet('Hours', true);
    var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,
      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,
      week: defaultLocaleWeek,
      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,
      meridiemParse: defaultLocaleMeridiemParse
    }; // internal storage for locale config files

    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace('_', '-') : key;
    } // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


    function chooseLocale(names) {
      var i = 0,
          j,
          next,
          locale,
          split;

      while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;

        while (j > 0) {
          locale = loadLocale(split.slice(0, j).join('-'));

          if (locale) {
            return locale;
          }

          if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
            //the next array item is better than a shallower substring of this one
            break;
          }

          j--;
        }

        i++;
      }

      return globalLocale;
    }

    function loadLocale(name) {
      var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

      if (!locales[name] && 'object' !== 'undefined' && module && module.exports) {
        try {
          oldLocale = globalLocale._abbr;
          var aliasedRequire = commonjsRequire$2;
          aliasedRequire('./locale/' + name);
          getSetGlobalLocale(oldLocale);
        } catch (e) {}
      }

      return locales[name];
    } // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.


    function getSetGlobalLocale(key, values) {
      var data;

      if (key) {
        if (isUndefined(values)) {
          data = getLocale(key);
        } else {
          data = defineLocale(key, values);
        }

        if (data) {
          // moment.duration._locale = moment._locale = data;
          globalLocale = data;
        } else {
          if (typeof console !== 'undefined' && console.warn) {
            //warn user if arguments are passed but the locale could not be set
            console.warn('Locale ' + key + ' not found. Did you forget to load it?');
          }
        }
      }

      return globalLocale._abbr;
    }

    function defineLocale(name, config) {
      if (config !== null) {
        var locale,
            parentConfig = baseConfig;
        config.abbr = name;

        if (locales[name] != null) {
          deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
          parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
          if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
          } else {
            locale = loadLocale(config.parentLocale);

            if (locale != null) {
              parentConfig = locale._config;
            } else {
              if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
              }

              localeFamilies[config.parentLocale].push({
                name: name,
                config: config
              });
              return null;
            }
          }
        }

        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
          localeFamilies[name].forEach(function (x) {
            defineLocale(x.name, x.config);
          });
        } // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.


        getSetGlobalLocale(name);
        return locales[name];
      } else {
        // useful for testing
        delete locales[name];
        return null;
      }
    }

    function updateLocale(name, config) {
      if (config != null) {
        var locale,
            tmpLocale,
            parentConfig = baseConfig; // MERGE

        tmpLocale = loadLocale(name);

        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }

        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale; // backwards compat for now: also set the locale

        getSetGlobalLocale(name);
      } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
            locales[name] = locales[name].parentLocale;
          } else if (locales[name] != null) {
            delete locales[name];
          }
        }
      }

      return locales[name];
    } // returns locale data


    function getLocale(key) {
      var locale;

      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }

      if (!key) {
        return globalLocale;
      }

      if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);

        if (locale) {
          return locale;
        }

        key = [key];
      }

      return chooseLocale(key);
    }

    function listLocales() {
      return keys(locales);
    }

    function checkOverflow(m) {
      var overflow;
      var a = m._a;

      if (a && getParsingFlags(m).overflow === -2) {
        overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
        }

        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
        }

        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
      }

      return m;
    } // Pick the first defined of two or three arguments.


    function defaults(a, b, c) {
      if (a != null) {
        return a;
      }

      if (b != null) {
        return b;
      }

      return c;
    }

    function currentDateArray(config) {
      // hooks is actually the exported moment object
      var nowValue = new Date(hooks.now());

      if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
      }

      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    } // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]


    function configFromArray(config) {
      var i,
          date,
          input = [],
          currentDate,
          expectedWeekday,
          yearToUse;

      if (config._d) {
        return;
      }

      currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
      } //if the day of the year is set, figure out what it is


      if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
          getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
      } // Default to current date.
      // * if no year, month, day of month are given, default to today
      // * if day of month is given, default month and year
      // * if month is given, default only year
      // * if year is given, don't default anything


      for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
      } // Zero out whatever was not defaulted, including time


      for (; i < 7; i++) {
        config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
      } // Check for 24:00:00.000


      if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
      }

      config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
      expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
      // with parseZone.

      if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }

      if (config._nextDay) {
        config._a[HOUR] = 24;
      } // check for mismatching day of week


      if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
      }
    }

    function dayOfYearFromWeekInfo(config) {
      var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
      w = config._w;

      if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).

        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);

        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        var curWeek = weekOfYear(createLocal(), dow, doy);
        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
          // weekday -- low day numbers are considered next week
          weekday = w.d;

          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w.e != null) {
          // local weekday -- counting starts from beginning of week
          weekday = w.e + dow;

          if (w.e < 0 || w.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          // default to beginning of week
          weekday = dow;
        }
      }

      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
      } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
      }
    } // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
    var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]]; // iso time formats and regexes

    var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i; // date from iso format

    function configFromISO(config) {
      var i,
          l,
          string = config._i,
          match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
          allowTime,
          dateFormat,
          timeFormat,
          tzFormat;

      if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
          if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
          }
        }

        if (dateFormat == null) {
          config._isValid = false;
          return;
        }

        if (match[3]) {
          for (i = 0, l = isoTimes.length; i < l; i++) {
            if (isoTimes[i][1].exec(match[3])) {
              // match[2] should be 'T' or space
              timeFormat = (match[2] || ' ') + isoTimes[i][0];
              break;
            }
          }

          if (timeFormat == null) {
            config._isValid = false;
            return;
          }
        }

        if (!allowTime && timeFormat != null) {
          config._isValid = false;
          return;
        }

        if (match[4]) {
          if (tzRegex.exec(match[4])) {
            tzFormat = 'Z';
          } else {
            config._isValid = false;
            return;
          }
        }

        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
      } else {
        config._isValid = false;
      }
    } // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3


    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

      if (secondStr) {
        result.push(parseInt(secondStr, 10));
      }

      return result;
    }

    function untruncateYear(yearStr) {
      var year = parseInt(yearStr, 10);

      if (year <= 49) {
        return 2000 + year;
      } else if (year <= 999) {
        return 1900 + year;
      }

      return year;
    }

    function preprocessRFC2822(s) {
      // Remove comments and folding whitespace and replace multiple-spaces with a single space
      return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
      if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

        if (weekdayProvided !== weekdayActual) {
          getParsingFlags(config).weekdayMismatch = true;
          config._isValid = false;
          return false;
        }
      }

      return true;
    }

    var obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
        return obsOffsets[obsOffset];
      } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
      } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100,
            h = (hm - m) / 100;
        return h * 60 + m;
      }
    } // date and time from ref 2822 format


    function configFromRFC2822(config) {
      var match = rfc2822.exec(preprocessRFC2822(config._i));

      if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

        if (!checkWeekday(match[1], parsedArray, config)) {
          return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);
        config._d = createUTCDate.apply(null, config._a);

        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
      } else {
        config._isValid = false;
      }
    } // date from iso format or fallback


    function configFromString(config) {
      var matched = aspNetJsonRegex.exec(config._i);

      if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
      }

      configFromISO(config);

      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }

      configFromRFC2822(config);

      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      } // Final attempt, use Input Fallback


      hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
      config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }); // constant that refers to the ISO standard

    hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


    hooks.RFC_2822 = function () {}; // date from string and format string


    function configFromStringAndFormat(config) {
      // TODO: Move this to another part of the creation flow to prevent circular deps
      if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
      }

      if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
      }

      config._a = [];
      getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

      var string = '' + config._i,
          i,
          parsedInput,
          tokens,
          token,
          skipped,
          stringLength = string.length,
          totalParsedInputLength = 0;
      tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));

        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));

          if (skipped.length > 0) {
            getParsingFlags(config).unusedInput.push(skipped);
          }

          string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
          totalParsedInputLength += parsedInput.length;
        } // don't parse if it's not a known token


        if (formatTokenFunctions[token]) {
          if (parsedInput) {
            getParsingFlags(config).empty = false;
          } else {
            getParsingFlags(config).unusedTokens.push(token);
          }

          addTimeToArrayFromToken(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
          getParsingFlags(config).unusedTokens.push(token);
        }
      } // add remaining unparsed input length to the string


      getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

      if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
      } // clear _12h flag if hour is <= 12


      if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
      }

      getParsingFlags(config).parsedDateParts = config._a.slice(0);
      getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

      config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
      configFromArray(config);
      checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
      var isPm;

      if (meridiem == null) {
        // nothing to do
        return hour;
      }

      if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
      } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);

        if (isPm && hour < 12) {
          hour += 12;
        }

        if (!isPm && hour === 12) {
          hour = 0;
        }

        return hour;
      } else {
        // this is not supposed to happen
        return hour;
      }
    } // date from string and array of format strings


    function configFromStringAndArray(config) {
      var tempConfig, bestMoment, scoreToBeat, i, currentScore;

      if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
      }

      for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);

        if (config._useUTC != null) {
          tempConfig._useUTC = config._useUTC;
        }

        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
          continue;
        } // if there is any input that was not parsed add a penalty for that format


        currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }

      extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
      if (config._d) {
        return;
      }

      var i = normalizeObjectUnits(config._i);
      config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
      });
      configFromArray(config);
    }

    function createFromConfig(config) {
      var res = new Moment(checkOverflow(prepareConfig(config)));

      if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
      }

      return res;
    }

    function prepareConfig(config) {
      var input = config._i,
          format = config._f;
      config._locale = config._locale || getLocale(config._l);

      if (input === null || format === undefined && input === '') {
        return createInvalid({
          nullInput: true
        });
      }

      if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
      }

      if (isMoment(input)) {
        return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
        config._d = input;
      } else if (isArray(format)) {
        configFromStringAndArray(config);
      } else if (format) {
        configFromStringAndFormat(config);
      } else {
        configFromInput(config);
      }

      if (!isValid(config)) {
        config._d = null;
      }

      return config;
    }

    function configFromInput(config) {
      var input = config._i;

      if (isUndefined(input)) {
        config._d = new Date(hooks.now());
      } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
      } else if (typeof input === 'string') {
        configFromString(config);
      } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
          return parseInt(obj, 10);
        });
        configFromArray(config);
      } else if (isObject(input)) {
        configFromObject(config);
      } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
      } else {
        hooks.createFromInputFallback(config);
      }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
      var c = {};

      if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
      }

      if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
        input = undefined;
      } // object construction must be done this way.
      // https://github.com/moment/moment/issues/1423


      c._isAMomentObject = true;
      c._useUTC = c._isUTC = isUTC;
      c._l = locale;
      c._i = input;
      c._f = format;
      c._strict = strict;
      return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
      var other = createLocal.apply(null, arguments);

      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return createInvalid();
      }
    });
    var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
      var other = createLocal.apply(null, arguments);

      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return createInvalid();
      }
    }); // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.

    function pickBy(fn, moments) {
      var res, i;

      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }

      if (!moments.length) {
        return createLocal();
      }

      res = moments[0];

      for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
          res = moments[i];
        }
      }

      return res;
    } // TODO: Use [].sort instead?


    function min() {
      var args = [].slice.call(arguments, 0);
      return pickBy('isBefore', args);
    }

    function max() {
      var args = [].slice.call(arguments, 0);
      return pickBy('isAfter', args);
    }

    var now = function () {
      return Date.now ? Date.now() : +new Date();
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
      for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
          return false;
        }
      }

      var unitHasDecimal = false;

      for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
          if (unitHasDecimal) {
            return false; // only allow non-integers for smallest unit
          }

          if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
            unitHasDecimal = true;
          }
        }
      }

      return true;
    }

    function isValid$1() {
      return this._isValid;
    }

    function createInvalid$1() {
      return createDuration(NaN);
    }

    function Duration(duration) {
      var normalizedInput = normalizeObjectUnits(duration),
          years = normalizedInput.year || 0,
          quarters = normalizedInput.quarter || 0,
          months = normalizedInput.month || 0,
          weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
          days = normalizedInput.day || 0,
          hours = normalizedInput.hour || 0,
          minutes = normalizedInput.minute || 0,
          seconds = normalizedInput.second || 0,
          milliseconds = normalizedInput.millisecond || 0;
      this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

      this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
      minutes * 6e4 + // 1000 * 60
      hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
      // Because of dateAddRemove treats 24 hours as different from a
      // day when working around DST, we need to store them separately

      this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
      // which months you are are talking about, so we have to store
      // it separately.

      this._months = +months + quarters * 3 + years * 12;
      this._data = {};
      this._locale = getLocale();

      this._bubble();
    }

    function isDuration(obj) {
      return obj instanceof Duration;
    }

    function absRound(number) {
      if (number < 0) {
        return Math.round(-1 * number) * -1;
      } else {
        return Math.round(number);
      }
    } // FORMATTING


    function offset(token, separator) {
      addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';

        if (offset < 0) {
          offset = -offset;
          sign = '-';
        }

        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
      });
    }

    offset('Z', ':');
    offset('ZZ', ''); // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
      config._useUTC = true;
      config._tzm = offsetFromString(matchShortOffset, input);
    }); // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']

    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
      var matches = (string || '').match(matcher);

      if (matches === null) {
        return null;
      }

      var chunk = matches[matches.length - 1] || [];
      var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
      var minutes = +(parts[1] * 60) + toInt(parts[2]);
      return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    } // Return a moment from input, that is local/utc/zone equivalent to model.


    function cloneWithOffset(input, model) {
      var res, diff;

      if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

        res._d.setTime(res._d.valueOf() + diff);

        hooks.updateOffset(res, false);
        return res;
      } else {
        return createLocal(input).local();
      }
    }

    function getDateOffset(m) {
      // On Firefox.24 Date#getTimezoneOffset returns a floating point.
      // https://github.com/moment/moment/pull/1871
      return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    } // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.


    hooks.updateOffset = function () {}; // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.


    function getSetOffset(input, keepLocalTime, keepMinutes) {
      var offset = this._offset || 0,
          localAdjust;

      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      if (input != null) {
        if (typeof input === 'string') {
          input = offsetFromString(matchShortOffset, input);

          if (input === null) {
            return this;
          }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
          input = input * 60;
        }

        if (!this._isUTC && keepLocalTime) {
          localAdjust = getDateOffset(this);
        }

        this._offset = input;
        this._isUTC = true;

        if (localAdjust != null) {
          this.add(localAdjust, 'm');
        }

        if (offset !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addSubtract(this, createDuration(input - offset, 'm'), 1, false);
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            hooks.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }

        return this;
      } else {
        return this._isUTC ? offset : getDateOffset(this);
      }
    }

    function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== 'string') {
          input = -input;
        }

        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }

    function setOffsetToUTC(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
          this.subtract(getDateOffset(this), 'm');
        }
      }

      return this;
    }

    function setOffsetToParsedOffset() {
      if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);

        if (tZone != null) {
          this.utcOffset(tZone);
        } else {
          this.utcOffset(0, true);
        }
      }

      return this;
    }

    function hasAlignedHourOffset(input) {
      if (!this.isValid()) {
        return false;
      }

      input = input ? createLocal(input).utcOffset() : 0;
      return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }

    function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }

      var c = {};
      copyConfig(c, this);
      c = prepareConfig(c);

      if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }

      return this._isDSTShifted;
    }

    function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    } // ASP.NET json date format regex


    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day

    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
      var duration = input,
          // matching against regexp is expensive, do it on demand
      match = null,
          sign,
          ret,
          diffRes;

      if (isDuration(input)) {
        duration = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months
        };
      } else if (isNumber(input)) {
        duration = {};

        if (key) {
          duration[key] = input;
        } else {
          duration.milliseconds = input;
        }
      } else if (!!(match = aspNetRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
          y: 0,
          d: toInt(match[DATE]) * sign,
          h: toInt(match[HOUR]) * sign,
          m: toInt(match[MINUTE]) * sign,
          s: toInt(match[SECOND]) * sign,
          ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

        };
      } else if (!!(match = isoRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
          y: parseIso(match[2], sign),
          M: parseIso(match[3], sign),
          w: parseIso(match[4], sign),
          d: parseIso(match[5], sign),
          h: parseIso(match[6], sign),
          m: parseIso(match[7], sign),
          s: parseIso(match[8], sign)
        };
      } else if (duration == null) {
        // checks for null or undefined
        duration = {};
      } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
      }

      ret = new Duration(duration);

      if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
      }

      return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
      // We'd normally use ~~inp for this, but unfortunately it also
      // converts floats to ints.
      // inp may be undefined, so careful calling replace on it.
      var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

      return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
      var res = {};
      res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

      if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
      }

      res.milliseconds = +other - +base.clone().add(res.months, 'M');
      return res;
    }

    function momentsDifference(base, other) {
      var res;

      if (!(base.isValid() && other.isValid())) {
        return {
          milliseconds: 0,
          months: 0
        };
      }

      other = cloneWithOffset(other, base);

      if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
      } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }

      return res;
    } // TODO: remove 'name' arg after deprecation is removed


    function createAdder(direction, name) {
      return function (val, period) {
        var dur, tmp; //invert the arguments, but complain about it

        if (period !== null && !isNaN(+period)) {
          deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
          tmp = val;
          val = period;
          period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
      };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
      var milliseconds = duration._milliseconds,
          days = absRound(duration._days),
          months = absRound(duration._months);

      if (!mom.isValid()) {
        // No op
        return;
      }

      updateOffset = updateOffset == null ? true : updateOffset;

      if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
      }

      if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
      }

      if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
      }

      if (updateOffset) {
        hooks.updateOffset(mom, days || months);
      }
    }

    var add = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
      var diff = myMoment.diff(now, 'days', true);
      return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1(time, formats) {
      // We want to compare the start of today, vs this.
      // Getting start-of-today depends on whether we're local/utc/offset or not.
      var now = time || createLocal(),
          sod = cloneWithOffset(now, this).startOf('day'),
          format = hooks.calendarFormat(this, sod) || 'sameElse';
      var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
      return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone() {
      return new Moment(this);
    }

    function isAfter(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);

      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }

      units = normalizeUnits(units) || 'millisecond';

      if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
      } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
      }
    }

    function isBefore(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);

      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }

      units = normalizeUnits(units) || 'millisecond';

      if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
      } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
      }
    }

    function isBetween(from, to, units, inclusivity) {
      var localFrom = isMoment(from) ? from : createLocal(from),
          localTo = isMoment(to) ? to : createLocal(to);

      if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
      }

      inclusivity = inclusivity || '()';
      return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input),
          inputMs;

      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }

      units = normalizeUnits(units) || 'millisecond';

      if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
      } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
      }
    }

    function isSameOrAfter(input, units) {
      return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
      return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
      var that, zoneDelta, output;

      if (!this.isValid()) {
        return NaN;
      }

      that = cloneWithOffset(input, this);

      if (!that.isValid()) {
        return NaN;
      }

      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
      units = normalizeUnits(units);

      switch (units) {
        case 'year':
          output = monthDiff(this, that) / 12;
          break;

        case 'month':
          output = monthDiff(this, that);
          break;

        case 'quarter':
          output = monthDiff(this, that) / 3;
          break;

        case 'second':
          output = (this - that) / 1e3;
          break;
        // 1000

        case 'minute':
          output = (this - that) / 6e4;
          break;
        // 1000 * 60

        case 'hour':
          output = (this - that) / 36e5;
          break;
        // 1000 * 60 * 60

        case 'day':
          output = (this - that - zoneDelta) / 864e5;
          break;
        // 1000 * 60 * 60 * 24, negate dst

        case 'week':
          output = (this - that - zoneDelta) / 6048e5;
          break;
        // 1000 * 60 * 60 * 24 * 7, negate dst

        default:
          output = this - that;
      }

      return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
      // difference in months
      var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
          // b is in (anchor - 1 month, anchor + 1 month)
      anchor = a.clone().add(wholeMonthDiff, 'months'),
          anchor2,
          adjust;

      if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

        adjust = (b - anchor) / (anchor - anchor2);
      } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

        adjust = (b - anchor) / (anchor2 - anchor);
      } //check for negative zero, return zero if negative zero


      return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
      return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
      if (!this.isValid()) {
        return null;
      }

      var utc = keepOffset !== true;
      var m = utc ? this.clone().utc() : this;

      if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
      }

      if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
          return this.toDate().toISOString();
        } else {
          return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
      }

      return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */


    function inspect() {
      if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
      }

      var func = 'moment';
      var zone = '';

      if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
      }

      var prefix = '[' + func + '("]';
      var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
      var datetime = '-MM-DD[T]HH:mm:ss.SSS';
      var suffix = zone + '[")]';
      return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
      if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
      }

      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({
          to: this,
          from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }

    function fromNow(withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({
          from: this,
          to: time
        }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }

    function toNow(withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
    } // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.


    function locale(key) {
      var newLocaleData;

      if (key === undefined) {
        return this._locale._abbr;
      } else {
        newLocaleData = getLocale(key);

        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }

        return this;
      }
    }

    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
      if (key === undefined) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    });

    function localeData() {
      return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR; // actual modulo - handles negative numbers (for dates before 1970):

    function mod$1(dividend, divisor) {
      return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
      // the date constructor remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
      } else {
        return new Date(y, m, d).valueOf();
      }
    }

    function utcStartOfDate(y, m, d) {
      // Date.UTC remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
      } else {
        return Date.UTC(y, m, d);
      }
    }

    function startOf(units) {
      var time;
      units = normalizeUnits(units);

      if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
      }

      var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

      switch (units) {
        case 'year':
          time = startOfDate(this.year(), 0, 1);
          break;

        case 'quarter':
          time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
          break;

        case 'month':
          time = startOfDate(this.year(), this.month(), 1);
          break;

        case 'week':
          time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
          break;

        case 'isoWeek':
          time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
          break;

        case 'day':
        case 'date':
          time = startOfDate(this.year(), this.month(), this.date());
          break;

        case 'hour':
          time = this._d.valueOf();
          time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
          break;

        case 'minute':
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_MINUTE);
          break;

        case 'second':
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_SECOND);
          break;
      }

      this._d.setTime(time);

      hooks.updateOffset(this, true);
      return this;
    }

    function endOf(units) {
      var time;
      units = normalizeUnits(units);

      if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
      }

      var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

      switch (units) {
        case 'year':
          time = startOfDate(this.year() + 1, 0, 1) - 1;
          break;

        case 'quarter':
          time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
          break;

        case 'month':
          time = startOfDate(this.year(), this.month() + 1, 1) - 1;
          break;

        case 'week':
          time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;

        case 'isoWeek':
          time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
          break;

        case 'day':
        case 'date':
          time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
          break;

        case 'hour':
          time = this._d.valueOf();
          time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
          break;

        case 'minute':
          time = this._d.valueOf();
          time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
          break;

        case 'second':
          time = this._d.valueOf();
          time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
          break;
      }

      this._d.setTime(time);

      hooks.updateOffset(this, true);
      return this;
    }

    function valueOf() {
      return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
      return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
      return new Date(this.valueOf());
    }

    function toArray() {
      var m = this;
      return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject() {
      var m = this;
      return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
      };
    }

    function toJSON() {
      // new Date(NaN).toJSON() === null
      return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
      return isValid(this);
    }

    function parsingFlags() {
      return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
      return getParsingFlags(this).overflow;
    }

    function creationData() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    } // FORMATTING


    addFormatToken(0, ['gg', 2], 0, function () {
      return this.weekYear() % 100;
    });
    addFormatToken(0, ['GG', 2], 0, function () {
      return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
      addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1); // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
      week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
      week[token] = hooks.parseTwoDigitYear(input);
    }); // MOMENTS

    function getSetWeekYear(input) {
      return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }

    function getSetISOWeekYear(input) {
      return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear() {
      return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear() {
      var weekInfo = this.localeData()._week;

      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;

      if (input == null) {
        return weekOfYear(this, dow, doy).year;
      } else {
        weeksTarget = weeksInYear(input, dow, doy);

        if (week > weeksTarget) {
          week = weeksTarget;
        }

        return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
          date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
    } // FORMATTING


    addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

    addUnitAlias('quarter', 'Q'); // PRIORITY

    addUnitPriority('quarter', 7); // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
    }); // MOMENTS

    function getSetQuarter(input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    } // FORMATTING


    addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

    addUnitAlias('date', 'D'); // PRIORITY

    addUnitPriority('date', 9); // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
      // TODO: Remove "ordinalParse" fallback in next major release.
      return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
    });
    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
    }); // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

    addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

    addUnitPriority('dayOfYear', 4); // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
      config._dayOfYear = toInt(input);
    }); // HELPERS
    // MOMENTS

    function getSetDayOfYear(input) {
      var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    } // FORMATTING


    addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

    addUnitAlias('minute', 'm'); // PRIORITY

    addUnitPriority('minute', 14); // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE); // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

    addUnitAlias('second', 's'); // PRIORITY

    addUnitPriority('second', 15); // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND); // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

    addFormatToken('S', 0, 0, function () {
      return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, ['SS', 2], 0, function () {
      return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
      return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
      return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
      return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
      return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
      return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
      return this.millisecond() * 1000000;
    }); // ALIASES

    addUnitAlias('millisecond', 'ms'); // PRIORITY

    addUnitPriority('millisecond', 16); // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var token;

    for (token = 'SSSS'; token.length <= 9; token += 'S') {
      addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
      array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
      addParseToken(token, parseMs);
    } // MOMENTS


    var getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

    function getZoneAbbr() {
      return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
      return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix(input) {
      return createLocal(input * 1000);
    }

    function createInZone() {
      return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
      return string;
    }

    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
      var locale = getLocale();
      var utc = createUTC().set(setter, index);
      return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';

      if (index != null) {
        return get$1(format, index, field, 'month');
      }

      var i;
      var out = [];

      for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
      }

      return out;
    } // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)


    function listWeekdaysImpl(localeSorted, format, index, field) {
      if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';
      } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';
      }

      var locale = getLocale(),
          shift = localeSorted ? locale._week.dow : 0;

      if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
      }

      var i;
      var out = [];

      for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
      }

      return out;
    }

    function listMonths(format, index) {
      return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
      return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (number) {
        var b = number % 10,
            output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        return number + output;
      }
    }); // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
    var mathAbs = Math.abs;

    function abs() {
      var data = this._data;
      this._milliseconds = mathAbs(this._milliseconds);
      this._days = mathAbs(this._days);
      this._months = mathAbs(this._months);
      data.milliseconds = mathAbs(data.milliseconds);
      data.seconds = mathAbs(data.seconds);
      data.minutes = mathAbs(data.minutes);
      data.hours = mathAbs(data.hours);
      data.months = mathAbs(data.months);
      data.years = mathAbs(data.years);
      return this;
    }

    function addSubtract$1(duration, input, value, direction) {
      var other = createDuration(input, value);
      duration._milliseconds += direction * other._milliseconds;
      duration._days += direction * other._days;
      duration._months += direction * other._months;
      return duration._bubble();
    } // supports only 2.0-style add(1, 's') or add(duration)


    function add$1(input, value) {
      return addSubtract$1(this, input, value, 1);
    } // supports only 2.0-style subtract(1, 's') or subtract(duration)


    function subtract$1(input, value) {
      return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
      if (number < 0) {
        return Math.floor(number);
      } else {
        return Math.ceil(number);
      }
    }

    function bubble() {
      var milliseconds = this._milliseconds;
      var days = this._days;
      var months = this._months;
      var data = this._data;
      var seconds, minutes, hours, years, monthsFromDays; // if we have a mix of positive and negative values, bubble down first
      // check: https://github.com/moment/moment/issues/2166

      if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
      } // The following code bubbles up values, see the tests for
      // examples of what that means.


      data.milliseconds = milliseconds % 1000;
      seconds = absFloor(milliseconds / 1000);
      data.seconds = seconds % 60;
      minutes = absFloor(seconds / 60);
      data.minutes = minutes % 60;
      hours = absFloor(minutes / 60);
      data.hours = hours % 24;
      days += absFloor(hours / 24); // convert days to months

      monthsFromDays = absFloor(daysToMonths(days));
      months += monthsFromDays;
      days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

      years = absFloor(months / 12);
      months %= 12;
      data.days = days;
      data.months = months;
      data.years = years;
      return this;
    }

    function daysToMonths(days) {
      // 400 years have 146097 days (taking into account leap year rules)
      // 400 years have 12 months === 4800
      return days * 4800 / 146097;
    }

    function monthsToDays(months) {
      // the reverse of daysToMonths
      return months * 146097 / 4800;
    }

    function as(units) {
      if (!this.isValid()) {
        return NaN;
      }

      var days;
      var months;
      var milliseconds = this._milliseconds;
      units = normalizeUnits(units);

      if (units === 'month' || units === 'quarter' || units === 'year') {
        days = this._days + milliseconds / 864e5;
        months = this._months + daysToMonths(days);

        switch (units) {
          case 'month':
            return months;

          case 'quarter':
            return months / 3;

          case 'year':
            return months / 12;
        }
      } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));

        switch (units) {
          case 'week':
            return days / 7 + milliseconds / 6048e5;

          case 'day':
            return days + milliseconds / 864e5;

          case 'hour':
            return days * 24 + milliseconds / 36e5;

          case 'minute':
            return days * 1440 + milliseconds / 6e4;

          case 'second':
            return days * 86400 + milliseconds / 1000;
          // Math.floor prevents floating point math errors here

          case 'millisecond':
            return Math.floor(days * 864e5) + milliseconds;

          default:
            throw new Error('Unknown unit ' + units);
        }
      }
    } // TODO: Use this.as('ms')?


    function valueOf$1() {
      if (!this.isValid()) {
        return NaN;
      }

      return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
    }

    function makeAs(alias) {
      return function () {
        return this.as(alias);
      };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asQuarters = makeAs('Q');
    var asYears = makeAs('y');

    function clone$1() {
      return createDuration(this);
    }

    function get$2(units) {
      units = normalizeUnits(units);
      return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
      return function () {
        return this.isValid() ? this._data[name] : NaN;
      };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');

    function weeks() {
      return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month
      M: 11 // months to year

    }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
      return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, locale) {
      var duration = createDuration(posNegDuration).abs();
      var seconds = round(duration.as('s'));
      var minutes = round(duration.as('m'));
      var hours = round(duration.as('h'));
      var days = round(duration.as('d'));
      var months = round(duration.as('M'));
      var years = round(duration.as('y'));
      var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
      a[2] = withoutSuffix;
      a[3] = +posNegDuration > 0;
      a[4] = locale;
      return substituteTimeAgo.apply(null, a);
    } // This function allows you to set the rounding function for relative time strings


    function getSetRelativeTimeRounding(roundingFunction) {
      if (roundingFunction === undefined) {
        return round;
      }

      if (typeof roundingFunction === 'function') {
        round = roundingFunction;
        return true;
      }

      return false;
    } // This function allows you to set a threshold for relative time strings


    function getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === undefined) {
        return false;
      }

      if (limit === undefined) {
        return thresholds[threshold];
      }

      thresholds[threshold] = limit;

      if (threshold === 's') {
        thresholds.ss = limit - 1;
      }

      return true;
    }

    function humanize(withSuffix) {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }

      var locale = this.localeData();
      var output = relativeTime$1(this, !withSuffix, locale);

      if (withSuffix) {
        output = locale.pastFuture(+this, output);
      }

      return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
      return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
      // for ISO strings we do not use the normal bubbling rules:
      //  * milliseconds bubble up until they become hours
      //  * days do not bubble at all
      //  * months bubble up until they become years
      // This is because there is no context-free conversion between hours and days
      // (think of clock changes)
      // and also not between days and months (28-31 days per month)
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }

      var seconds = abs$1(this._milliseconds) / 1000;
      var days = abs$1(this._days);
      var months = abs$1(this._months);
      var minutes, hours, years; // 3600 seconds -> 60 minutes -> 1 hour

      minutes = absFloor(seconds / 60);
      hours = absFloor(minutes / 60);
      seconds %= 60;
      minutes %= 60; // 12 months -> 1 year

      years = absFloor(months / 12);
      months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

      var Y = years;
      var M = months;
      var D = days;
      var h = hours;
      var m = minutes;
      var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
      var total = this.asSeconds();

      if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
      }

      var totalSign = total < 0 ? '-' : '';
      var ymSign = sign(this._months) !== sign(total) ? '-' : '';
      var daysSign = sign(this._days) !== sign(total) ? '-' : '';
      var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
      return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang; // Side effect imports
    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf'); // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
      config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
      config._d = new Date(toInt(input));
    }); // Side effect imports

    hooks.version = '2.24.0';
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

    hooks.HTML5_FMT = {
      DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
      // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
      // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
      // <input type="datetime-local" step="0.001" />
      DATE: 'YYYY-MM-DD',
      // <input type="date" />
      TIME: 'HH:mm',
      // <input type="time" />
      TIME_SECONDS: 'HH:mm:ss',
      // <input type="time" step="1" />
      TIME_MS: 'HH:mm:ss.SSS',
      // <input type="time" step="0.001" />
      WEEK: 'GGGG-[W]WW',
      // <input type="week" />
      MONTH: 'YYYY-MM' // <input type="month" />

    };
    return hooks;
  });
}); // Maps for number <-> hex string conversion

var byteToHex$2 = [];
var hexToByte = {};

for (var i$2 = 0; i$2 < 256; i$2++) {
  byteToHex$2[i$2] = (i$2 + 0x100).toString(16).substr(1);
  hexToByte[byteToHex$2[i$2]] = i$2;
}
/**
 * Parse a string UUID representation into it's component bytes.
 *
 * @param str - String UUID.
 * @param buf - Buffer to be filled with the bytes.
 * @param offset - Offset from the start of the buffer where the UUID bytes will be saved.
 *
 * @returns An array (or Uint8Array if supplied) of bytes.
 */


function parseUUID(str) {
  var buf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var offset = arguments.length > 2 ? arguments[2] : undefined;
  var i = buf && offset || 0;
  var ii = 0;
  str.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct) {
    if (ii < 16) {
      // Don't overflow!
      buf[i + ii++] = hexToByte[oct];
    }

    return '';
  }); // Zero out remaining bytes if string was short

  while (ii < 16) {
    buf[i + ii++] = 0;
  }

  return buf;
}
/**
 * Represent binary UUID into it's string representation.
 *
 * @param buf - Buffer containing UUID bytes.
 * @param offset - Offset from the start of the buffer where the UUID is saved (not needed if the buffer starts with the UUID).
 *
 * @returns String representation of the UUID.
 */


function stringifyUUID$1(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex$2;
  return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
}
/**
 * Generate 16 random bytes to be used as a base for UUID.
 *
 * @ignore
 */


var random$1 = function () {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
    // Moderately fast, high quality
    var _rnds8 = new Uint8Array(16);

    return function whatwgRNG() {
      crypto.getRandomValues(_rnds8);
      return _rnds8;
    };
  } // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().
  // It's fast, but is of unspecified quality.


  var _rnds = new Array(16);

  return function () {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) {
        r = Math.random() * 0x100000000;
      }

      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return _rnds;
  }; //     uuid.js
  //
  //     Copyright (c) 2010-2012 Robert Kieffer
  //     MIT License - http://opensource.org/licenses/mit-license.php
  // Unique ID creation requires a high quality random # generator.  We feature
  // detect to determine the best RNG source, normalizing to a function that
  // returns 128-bits of randomness, since that's what's usually required
  // return require('./rng');
}();

var byteToHex$1$1 = [];

for (var i$1$1 = 0; i$1$1 < 256; i$1$1++) {
  byteToHex$1$1[i$1$1] = (i$1$1 + 0x100).toString(16).substr(1);
} // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
// random #'s we need to init node and clockseq


var seedBytes$1 = random$1(); // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)

var defaultNodeId$1 = [seedBytes$1[0] | 0x01, seedBytes$1[1], seedBytes$1[2], seedBytes$1[3], seedBytes$1[4], seedBytes$1[5]]; // Per 4.2.2, randomize (14 bit) clockseq

var defaultClockseq$1 = (seedBytes$1[6] << 8 | seedBytes$1[7]) & 0x3fff; // Previous uuid creation time

var lastMSecs = 0;
var lastNSecs = 0;
/**
 * UUIDv1 options.
 */

/**
 * Generate UUIDv1
 *
 * @param options - Options to be used instead of default values.
 * @param buf - If present the buffer will be filled with the generated UUID.
 * @param offset - Offset of the UUID from the start of the buffer.
 *
 * @returns UUIDv1
 */

function uuid1() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var buf = arguments.length > 1 ? arguments[1] : undefined;
  var offset = arguments.length > 2 ? arguments[2] : undefined;
  var i = buf && offset || 0;
  var b = buf || [];
  var clockseq = options.clockseq !== undefined ? options.clockseq : defaultClockseq$1; // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.

  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - lastMSecs + (nsecs - lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  lastMSecs = msecs;
  lastNSecs = nsecs;
  defaultClockseq$1 = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  var node = options.node || defaultNodeId$1;

  for (var n = 0; n < 6; n++) {
    b[i + n] = node[n];
  }

  return buf ? buf : stringifyUUID$1(b);
}
/**
 * UUIDv4 options.
 */

/**
 * Generate UUIDv4
 *
 * @param options - Options to be used instead of default generated values.
 * String 'binary' is a shorthand for uuid4({}, new Array(16)).
 * @param buf - If present the buffer will be filled with the generated UUID.
 * @param offset - Offset of the UUID from the start of the buffer.
 *
 * @returns UUIDv4
 */


function uuid4$1() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var buf = arguments.length > 1 ? arguments[1] : undefined;
  var offset = arguments.length > 2 ? arguments[2] : undefined; // Deprecated - 'format' argument, as supported in v1.2

  var i = buf && offset || 0;

  if (typeof options === 'string') {
    buf = options === 'binary' ? new Array(16) : undefined;
    options = {};
  }

  var rnds = options.random || (options.rng || random$1)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || stringifyUUID$1(rnds);
} // Rollup will complain about mixing default and named exports in UMD build,
// but since they both implement the same interface, there won't be any problems.

/**
 * API properties as used before ES2015 modules and TypeScript.
 */


var oldAPI = function oldAPI() {
  return uuid4$1.apply(void 0, arguments);
};

oldAPI.v1 = uuid1;
oldAPI.v4 = uuid4$1;
oldAPI.parse = parseUUID;
oldAPI.unparse = stringifyUUID$1;
var esm = createCommonjsModule$2(function (module, exports) {
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  } // utility functions
  // first check if moment.js is already loaded in the browser window, if so,
  // use this instance. Else, load via commonjs.

  /**
   * Test whether given object is a number
   * @param {*} object
   * @return {Boolean} isNumber
   */


  exports.isNumber = function (object) {
    return object instanceof Number || typeof object == 'number';
  };
  /**
   * Remove everything in the DOM object
   * @param {Element} DOMobject
   */


  exports.recursiveDOMDelete = function (DOMobject) {
    if (DOMobject) {
      while (DOMobject.hasChildNodes() === true) {
        exports.recursiveDOMDelete(DOMobject.firstChild);
        DOMobject.removeChild(DOMobject.firstChild);
      }
    }
  };
  /**
   * Test whether given object is a string
   * @param {*} object
   * @return {Boolean} isString
   */


  exports.isString = function (object) {
    return object instanceof String || typeof object == 'string';
  };
  /**
   * Test whether given object is a Date, or a String containing a Date
   * @param {Date | String} object
   * @return {Boolean} isDate
   */


  exports.isDate = function (object) {
    if (object instanceof Date) {
      return true;
    } else if (exports.isString(object)) {
      // test whether this string contains a date
      var match = ASPDateRegex.exec(object);

      if (match) {
        return true;
      } else if (!isNaN(Date.parse(object))) {
        return true;
      }
    }

    return false;
  };
  /**
   * Create a UUID
   * @return {string} uuid
   */


  exports.randomUUID = function () {
    return oldAPI.v4();
  };
  /**
   * Copy property from b to a if property present in a.
   * If property in b explicitly set to null, delete it if `allowDeletion` set.
   *
   * Internal helper routine, should not be exported. Not added to `exports` for that reason.
   *
   * @param {object} a  target object
   * @param {object} b  source object
   * @param {string} prop  name of property to copy to a
   * @param {boolean} allowDeletion  if true, delete property in a if explicitly set to null in b 
   * @private
   */


  function copyOrDelete(a, b, prop, allowDeletion) {
    var doDeletion = false;

    if (allowDeletion === true) {
      doDeletion = b[prop] === null && a[prop] !== undefined;
    }

    if (doDeletion) {
      delete a[prop];
    } else {
      a[prop] = b[prop]; // Remember, this is a reference copy!
    }
  }
  /**
   * Fill an object with a possibly partially defined other object.
   *
   * Only copies values for the properties already present in a.
   * That means an object is not created on a property if only the b object has it.
   *
   * @param {object} a
   * @param {object} b
   * @param {boolean} [allowDeletion=false]  if true, delete properties in a that are explicitly set to null in b 
   */


  exports.fillIfDefined = function (a, b) {
    var allowDeletion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false; // NOTE: iteration of properties of a
    // NOTE: prototype properties iterated over as well

    for (var prop in a) {
      if (b[prop] !== undefined) {
        if (b[prop] === null || _typeof(b[prop]) !== 'object') {
          // Note: typeof null === 'object'
          copyOrDelete(a, b, prop, allowDeletion);
        } else {
          if (_typeof(a[prop]) === 'object') {
            exports.fillIfDefined(a[prop], b[prop], allowDeletion);
          }
        }
      }
    }
  };
  /**
   * Extend object a with the properties of object b or a series of objects
   * Only properties with defined values are copied
   * @param {Object} a
   * @param {...Object} b
   * @return {Object} a
   */


  exports.extend = function (a, b) {
    // eslint-disable-line no-unused-vars
    for (var i = 1; i < arguments.length; i++) {
      var other = arguments[i];

      for (var prop in other) {
        if (other.hasOwnProperty(prop)) {
          a[prop] = other[prop];
        }
      }
    }

    return a;
  };
  /**
   * Extend object a with selected properties of object b or a series of objects
   * Only properties with defined values are copied
   * @param {Array.<string>} props
   * @param {Object} a
   * @param {Object} b
   * @return {Object} a
   */


  exports.selectiveExtend = function (props, a, b) {
    // eslint-disable-line no-unused-vars
    if (!Array.isArray(props)) {
      throw new Error('Array with property names expected as first argument');
    }

    for (var i = 2; i < arguments.length; i++) {
      var other = arguments[i];

      for (var p = 0; p < props.length; p++) {
        var prop = props[p];

        if (other && other.hasOwnProperty(prop)) {
          a[prop] = other[prop];
        }
      }
    }

    return a;
  };
  /**
   * Extend object a with selected properties of object b.
   * Only properties with defined values are copied.
   *
   * **Note:** Previous version of this routine implied that multiple source objects
   *           could be used; however, the implementation was **wrong**.
   *           Since multiple (>1) sources weren't used anywhere in the `vis.js` code,
   *           this has been removed
   *
   * @param {Array.<string>} props names of first-level properties to copy over
   * @param {object} a  target object
   * @param {object} b  source object
   * @param {boolean} [allowDeletion=false]  if true, delete property in a if explicitly set to null in b 
   * @returns {Object} a
   */


  exports.selectiveDeepExtend = function (props, a, b) {
    var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false; // TODO: add support for Arrays to deepExtend

    if (Array.isArray(b)) {
      throw new TypeError('Arrays are not supported by deepExtend');
    }

    for (var p = 0; p < props.length; p++) {
      var prop = props[p];

      if (b.hasOwnProperty(prop)) {
        if (b[prop] && b[prop].constructor === Object) {
          if (a[prop] === undefined) {
            a[prop] = {};
          }

          if (a[prop].constructor === Object) {
            exports.deepExtend(a[prop], b[prop], false, allowDeletion);
          } else {
            copyOrDelete(a, b, prop, allowDeletion);
          }
        } else if (Array.isArray(b[prop])) {
          throw new TypeError('Arrays are not supported by deepExtend');
        } else {
          copyOrDelete(a, b, prop, allowDeletion);
        }
      }
    }

    return a;
  };
  /**
   * Extend object `a` with properties of object `b`, ignoring properties which are explicitly 
   * specified to be excluded.
   * 
   * The properties of `b` are considered for copying.
   * Properties which are themselves objects are are also extended.
   * Only properties with defined values are copied
   *
   * @param {Array.<string>} propsToExclude  names of properties which should *not* be copied
   * @param {Object}                      a  object to extend
   * @param {Object}                      b  object to take properties from for extension
   * @param {boolean} [allowDeletion=false]  if true, delete properties in a that are explicitly set to null in b 
   * @return {Object} a
   */


  exports.selectiveNotDeepExtend = function (propsToExclude, a, b) {
    var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false; // TODO: add support for Arrays to deepExtend
    // NOTE: array properties have an else-below; apparently, there is a problem here. 

    if (Array.isArray(b)) {
      throw new TypeError('Arrays are not supported by deepExtend');
    }

    for (var prop in b) {
      if (!b.hasOwnProperty(prop)) continue; // Handle local properties only 

      if (propsToExclude.indexOf(prop) !== -1) continue; // In exclusion list, skip

      if (b[prop] && b[prop].constructor === Object) {
        if (a[prop] === undefined) {
          a[prop] = {};
        }

        if (a[prop].constructor === Object) {
          exports.deepExtend(a[prop], b[prop]); // NOTE: allowDeletion not propagated!
        } else {
          copyOrDelete(a, b, prop, allowDeletion);
        }
      } else if (Array.isArray(b[prop])) {
        a[prop] = [];

        for (var i = 0; i < b[prop].length; i++) {
          a[prop].push(b[prop][i]);
        }
      } else {
        copyOrDelete(a, b, prop, allowDeletion);
      }
    }

    return a;
  };
  /**
   * Deep extend an object a with the properties of object b
   *
   * @param {Object} a
   * @param {Object} b
   * @param {boolean} [protoExtend=false]  If true, the prototype values will also be extended.
   *                          (ie. the options objects that inherit from others will also get the inherited options)
   * @param {boolean} [allowDeletion=false] If true, the values of fields that are null will be deleted
   * @returns {Object}
   */


  exports.deepExtend = function (a, b) {
    var protoExtend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    for (var prop in b) {
      if (b.hasOwnProperty(prop) || protoExtend === true) {
        if (b[prop] && b[prop].constructor === Object) {
          if (a[prop] === undefined) {
            a[prop] = {};
          }

          if (a[prop].constructor === Object) {
            exports.deepExtend(a[prop], b[prop], protoExtend); // NOTE: allowDeletion not propagated!
          } else {
            copyOrDelete(a, b, prop, allowDeletion);
          }
        } else if (Array.isArray(b[prop])) {
          a[prop] = [];

          for (var i = 0; i < b[prop].length; i++) {
            a[prop].push(b[prop][i]);
          }
        } else {
          copyOrDelete(a, b, prop, allowDeletion);
        }
      }
    }

    return a;
  };
  /**
   * Test whether all elements in two arrays are equal.
   * @param {Array} a
   * @param {Array} b
   * @return {boolean} Returns true if both arrays have the same length and same
   *                   elements.
   */


  exports.equalArray = function (a, b) {
    if (a.length != b.length) return false;

    for (var i = 0, len = a.length; i < len; i++) {
      if (a[i] != b[i]) return false;
    }

    return true;
  };
  /**
   * Convert an object to another type
   * @param {boolean | number | string | Date | Moment | Null | undefined} object
   * @param {string | undefined} type   Name of the type. Available types:
   *                                    'Boolean', 'Number', 'String',
   *                                    'Date', 'Moment', ISODate', 'ASPDate'.
   * @return {*} object
   * @throws Error
   */


  exports.convert = function (object, type) {
    var match;

    if (object === undefined) {
      return undefined;
    }

    if (object === null) {
      return null;
    }

    if (!type) {
      return object;
    }

    if (!(typeof type === 'string') && !(type instanceof String)) {
      throw new Error('Type must be a string');
    } //noinspection FallthroughInSwitchStatementJS


    switch (type) {
      case 'boolean':
      case 'Boolean':
        return Boolean(object);

      case 'number':
      case 'Number':
        if (exports.isString(object) && !isNaN(Date.parse(object))) {
          return moment$1(object).valueOf();
        } else {
          return Number(object.valueOf());
        }

      case 'string':
      case 'String':
        return String(object);

      case 'Date':
        if (exports.isNumber(object)) {
          return new Date(object);
        }

        if (object instanceof Date) {
          return new Date(object.valueOf());
        } else if (moment$1.isMoment(object)) {
          return new Date(object.valueOf());
        }

        if (exports.isString(object)) {
          match = ASPDateRegex.exec(object);

          if (match) {
            // object is an ASP date
            return new Date(Number(match[1])); // parse number
          } else {
            return moment$1(new Date(object)).toDate(); // parse string
          }
        } else {
          throw new Error('Cannot convert object of type ' + exports.getType(object) + ' to type Date');
        }

      case 'Moment':
        if (exports.isNumber(object)) {
          return moment$1(object);
        }

        if (object instanceof Date) {
          return moment$1(object.valueOf());
        } else if (moment$1.isMoment(object)) {
          return moment$1(object);
        }

        if (exports.isString(object)) {
          match = ASPDateRegex.exec(object);

          if (match) {
            // object is an ASP date
            return moment$1(Number(match[1])); // parse number
          } else {
            return moment$1(object); // parse string
          }
        } else {
          throw new Error('Cannot convert object of type ' + exports.getType(object) + ' to type Date');
        }

      case 'ISODate':
        if (exports.isNumber(object)) {
          return new Date(object);
        } else if (object instanceof Date) {
          return object.toISOString();
        } else if (moment$1.isMoment(object)) {
          return object.toDate().toISOString();
        } else if (exports.isString(object)) {
          match = ASPDateRegex.exec(object);

          if (match) {
            // object is an ASP date
            return new Date(Number(match[1])).toISOString(); // parse number
          } else {
            return moment$1(object).format(); // ISO 8601
          }
        } else {
          throw new Error('Cannot convert object of type ' + exports.getType(object) + ' to type ISODate');
        }

      case 'ASPDate':
        if (exports.isNumber(object)) {
          return '/Date(' + object + ')/';
        } else if (object instanceof Date) {
          return '/Date(' + object.valueOf() + ')/';
        } else if (exports.isString(object)) {
          match = ASPDateRegex.exec(object);
          var value;

          if (match) {
            // object is an ASP date
            value = new Date(Number(match[1])).valueOf(); // parse number
          } else {
            value = new Date(object).valueOf(); // parse string
          }

          return '/Date(' + value + ')/';
        } else {
          throw new Error('Cannot convert object of type ' + exports.getType(object) + ' to type ASPDate');
        }

      default:
        throw new Error('Unknown type "' + type + '"');
    }
  }; // parse ASP.Net Date pattern,
  // for example '/Date(1198908717056)/' or '/Date(1198908717056-0700)/'
  // code from http://momentjs.com/


  var ASPDateRegex = /^\/?Date\((\-?\d+)/i;
  /**
   * Get the type of an object, for example exports.getType([]) returns 'Array'
   * @param {*} object
   * @return {string} type
   */

  exports.getType = function (object) {
    var type = _typeof(object);

    if (type == 'object') {
      if (object === null) {
        return 'null';
      }

      if (object instanceof Boolean) {
        return 'Boolean';
      }

      if (object instanceof Number) {
        return 'Number';
      }

      if (object instanceof String) {
        return 'String';
      }

      if (Array.isArray(object)) {
        return 'Array';
      }

      if (object instanceof Date) {
        return 'Date';
      }

      return 'Object';
    } else if (type == 'number') {
      return 'Number';
    } else if (type == 'boolean') {
      return 'Boolean';
    } else if (type == 'string') {
      return 'String';
    } else if (type === undefined) {
      return 'undefined';
    }

    return type;
  };
  /**
   * Used to extend an array and copy it. This is used to propagate paths recursively.
   *
   * @param {Array} arr
   * @param {*} newValue
   * @returns {Array}
   */


  exports.copyAndExtendArray = function (arr, newValue) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }

    newArr.push(newValue);
    return newArr;
  };
  /**
   * Used to extend an array and copy it. This is used to propagate paths recursively.
   *
   * @param {Array} arr
   * @returns {Array}
   */


  exports.copyArray = function (arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }

    return newArr;
  };
  /**
   * Retrieve the absolute left value of a DOM element
   * @param {Element} elem        A dom element, for example a div
   * @return {number} left        The absolute left position of this element
   *                              in the browser page.
   */


  exports.getAbsoluteLeft = function (elem) {
    return elem.getBoundingClientRect().left;
  };

  exports.getAbsoluteRight = function (elem) {
    return elem.getBoundingClientRect().right;
  };
  /**
   * Retrieve the absolute top value of a DOM element
   * @param {Element} elem        A dom element, for example a div
   * @return {number} top        The absolute top position of this element
   *                              in the browser page.
   */


  exports.getAbsoluteTop = function (elem) {
    return elem.getBoundingClientRect().top;
  };
  /**
   * add a className to the given elements style
   * @param {Element} elem
   * @param {string} classNames
   */


  exports.addClassName = function (elem, classNames) {
    var classes = elem.className.split(' ');
    var newClasses = classNames.split(' ');
    classes = classes.concat(newClasses.filter(function (className) {
      return classes.indexOf(className) < 0;
    }));
    elem.className = classes.join(' ');
  };
  /**
   * add a className to the given elements style
   * @param {Element} elem
   * @param {string} classNames
   */


  exports.removeClassName = function (elem, classNames) {
    var classes = elem.className.split(' ');
    var oldClasses = classNames.split(' ');
    classes = classes.filter(function (className) {
      return oldClasses.indexOf(className) < 0;
    });
    elem.className = classes.join(' ');
  };
  /**
   * For each method for both arrays and objects.
   * In case of an array, the built-in Array.forEach() is applied. (**No, it's not!**)
   * In case of an Object, the method loops over all properties of the object.
   * @param {Object | Array} object   An Object or Array
   * @param {function} callback       Callback method, called for each item in
   *                                  the object or array with three parameters:
   *                                  callback(value, index, object)
   */


  exports.forEach = function (object, callback) {
    var i, len;

    if (Array.isArray(object)) {
      // array
      for (i = 0, len = object.length; i < len; i++) {
        callback(object[i], i, object);
      }
    } else {
      // object
      for (i in object) {
        if (object.hasOwnProperty(i)) {
          callback(object[i], i, object);
        }
      }
    }
  };
  /**
   * Convert an object into an array: all objects properties are put into the
   * array. The resulting array is unordered.
   * @param {Object} object
   * @returns {Array} array
   */


  exports.toArray = function (object) {
    var array = [];

    for (var prop in object) {
      if (object.hasOwnProperty(prop)) array.push(object[prop]);
    }

    return array;
  };
  /**
   * Update a property in an object
   * @param {Object} object
   * @param {string} key
   * @param {*} value
   * @return {Boolean} changed
   */


  exports.updateProperty = function (object, key, value) {
    if (object[key] !== value) {
      object[key] = value;
      return true;
    } else {
      return false;
    }
  };
  /**
   * Throttle the given function to be only executed once per animation frame
   * @param {function} fn
   * @returns {function} Returns the throttled function
   */


  exports.throttle = function (fn) {
    var scheduled = false;
    return function throttled() {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(function () {
          scheduled = false;
          fn();
        });
      }
    };
  };
  /**
   * Add and event listener. Works for all browsers
   * @param {Element}     element    An html element
   * @param {string}      action     The action, for example "click",
   *                                 without the prefix "on"
   * @param {function}    listener   The callback function to be executed
   * @param {boolean}     [useCapture]
   */


  exports.addEventListener = function (element, action, listener, useCapture) {
    if (element.addEventListener) {
      if (useCapture === undefined) useCapture = false;

      if (action === "mousewheel" && navigator.userAgent.indexOf("Firefox") >= 0) {
        action = "DOMMouseScroll"; // For Firefox
      }

      element.addEventListener(action, listener, useCapture);
    } else {
      element.attachEvent("on" + action, listener); // IE browsers
    }
  };
  /**
   * Remove an event listener from an element
   * @param {Element}     element         An html dom element
   * @param {string}      action          The name of the event, for example "mousedown"
   * @param {function}    listener        The listener function
   * @param {boolean}     [useCapture]
   */


  exports.removeEventListener = function (element, action, listener, useCapture) {
    if (element.removeEventListener) {
      // non-IE browsers
      if (useCapture === undefined) useCapture = false;

      if (action === "mousewheel" && navigator.userAgent.indexOf("Firefox") >= 0) {
        action = "DOMMouseScroll"; // For Firefox
      }

      element.removeEventListener(action, listener, useCapture);
    } else {
      // IE browsers
      element.detachEvent("on" + action, listener);
    }
  };
  /**
   * Cancels the event if it is cancelable, without stopping further propagation of the event.
   * @param {Event} event
   */


  exports.preventDefault = function (event) {
    if (!event) event = window.event;

    if (event.preventDefault) {
      event.preventDefault(); // non-IE browsers
    } else {
      event.returnValue = false; // IE browsers
    }
  };
  /**
   * Get HTML element which is the target of the event
   * @param {Event} event
   * @return {Element} target element
   */


  exports.getTarget = function (event) {
    // code from http://www.quirksmode.org/js/events_properties.html
    if (!event) {
      event = window.event;
    }

    var target;

    if (event.target) {
      target = event.target;
    } else if (event.srcElement) {
      target = event.srcElement;
    }

    if (target.nodeType != undefined && target.nodeType == 3) {
      // defeat Safari bug
      target = target.parentNode;
    }

    return target;
  };
  /**
   * Check if given element contains given parent somewhere in the DOM tree
   * @param {Element} element
   * @param {Element} parent
   * @returns {boolean}
   */


  exports.hasParent = function (element, parent) {
    var e = element;

    while (e) {
      if (e === parent) {
        return true;
      }

      e = e.parentNode;
    }

    return false;
  };

  exports.option = {};
  /**
   * Convert a value into a boolean
   * @param {Boolean | function | undefined} value
   * @param {boolean} [defaultValue]
   * @returns {Boolean} bool
   */

  exports.option.asBoolean = function (value, defaultValue) {
    if (typeof value == 'function') {
      value = value();
    }

    if (value != null) {
      return value != false;
    }

    return defaultValue || null;
  };
  /**
   * Convert a value into a number
   * @param {Boolean | function | undefined} value
   * @param {number} [defaultValue]
   * @returns {number} number
   */


  exports.option.asNumber = function (value, defaultValue) {
    if (typeof value == 'function') {
      value = value();
    }

    if (value != null) {
      return Number(value) || defaultValue || null;
    }

    return defaultValue || null;
  };
  /**
   * Convert a value into a string
   * @param {string | function | undefined} value
   * @param {string} [defaultValue]
   * @returns {String} str
   */


  exports.option.asString = function (value, defaultValue) {
    if (typeof value == 'function') {
      value = value();
    }

    if (value != null) {
      return String(value);
    }

    return defaultValue || null;
  };
  /**
   * Convert a size or location into a string with pixels or a percentage
   * @param {string | number | function | undefined} value
   * @param {string} [defaultValue]
   * @returns {String} size
   */


  exports.option.asSize = function (value, defaultValue) {
    if (typeof value == 'function') {
      value = value();
    }

    if (exports.isString(value)) {
      return value;
    } else if (exports.isNumber(value)) {
      return value + 'px';
    } else {
      return defaultValue || null;
    }
  };
  /**
   * Convert a value into a DOM element
   * @param {HTMLElement | function | undefined} value
   * @param {HTMLElement} [defaultValue]
   * @returns {HTMLElement | null} dom
   */


  exports.option.asElement = function (value, defaultValue) {
    if (typeof value == 'function') {
      value = value();
    }

    return value || defaultValue || null;
  };
  /**
   * http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
   *
   * @param {string} hex
   * @returns {{r: *, g: *, b: *}} | 255 range
   */


  exports.hexToRGB = function (hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  /**
   * This function takes color in hex format or rgb() or rgba() format and overrides the opacity. Returns rgba() string.
   * @param {string} color
   * @param {number} opacity
   * @returns {String}
   */


  exports.overrideOpacity = function (color, opacity) {
    var rgb;

    if (color.indexOf("rgba") != -1) {
      return color;
    } else if (color.indexOf("rgb") != -1) {
      rgb = color.substr(color.indexOf("(") + 1).replace(")", "").split(",");
      return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + opacity + ")";
    } else {
      rgb = exports.hexToRGB(color);

      if (rgb == null) {
        return color;
      } else {
        return "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + opacity + ")";
      }
    }
  };
  /**
   *
   * @param {number} red     0 -- 255
   * @param {number} green   0 -- 255
   * @param {number} blue    0 -- 255
   * @returns {String}
   * @constructor
   */


  exports.RGBToHex = function (red, green, blue) {
    return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
  };
  /**
   * Parse a color property into an object with border, background, and
   * highlight colors
   * @param {Object | String} color
   * @return {Object} colorObject
   */


  exports.parseColor = function (color) {
    var c;

    if (exports.isString(color) === true) {
      if (exports.isValidRGB(color) === true) {
        var rgb = color.substr(4).substr(0, color.length - 5).split(',').map(function (value) {
          return parseInt(value);
        });
        color = exports.RGBToHex(rgb[0], rgb[1], rgb[2]);
      }

      if (exports.isValidHex(color) === true) {
        var hsv = exports.hexToHSV(color);
        var lighterColorHSV = {
          h: hsv.h,
          s: hsv.s * 0.8,
          v: Math.min(1, hsv.v * 1.02)
        };
        var darkerColorHSV = {
          h: hsv.h,
          s: Math.min(1, hsv.s * 1.25),
          v: hsv.v * 0.8
        };
        var darkerColorHex = exports.HSVToHex(darkerColorHSV.h, darkerColorHSV.s, darkerColorHSV.v);
        var lighterColorHex = exports.HSVToHex(lighterColorHSV.h, lighterColorHSV.s, lighterColorHSV.v);
        c = {
          background: color,
          border: darkerColorHex,
          highlight: {
            background: lighterColorHex,
            border: darkerColorHex
          },
          hover: {
            background: lighterColorHex,
            border: darkerColorHex
          }
        };
      } else {
        c = {
          background: color,
          border: color,
          highlight: {
            background: color,
            border: color
          },
          hover: {
            background: color,
            border: color
          }
        };
      }
    } else {
      c = {};
      c.background = color.background || undefined;
      c.border = color.border || undefined;

      if (exports.isString(color.highlight)) {
        c.highlight = {
          border: color.highlight,
          background: color.highlight
        };
      } else {
        c.highlight = {};
        c.highlight.background = color.highlight && color.highlight.background || undefined;
        c.highlight.border = color.highlight && color.highlight.border || undefined;
      }

      if (exports.isString(color.hover)) {
        c.hover = {
          border: color.hover,
          background: color.hover
        };
      } else {
        c.hover = {};
        c.hover.background = color.hover && color.hover.background || undefined;
        c.hover.border = color.hover && color.hover.border || undefined;
      }
    }

    return c;
  };
  /**
   * http://www.javascripter.net/faq/rgb2hsv.htm
   *
   * @param {number} red
   * @param {number} green
   * @param {number} blue
   * @returns {{h: number, s: number, v: number}}
   * @constructor
   */


  exports.RGBToHSV = function (red, green, blue) {
    red = red / 255;
    green = green / 255;
    blue = blue / 255;
    var minRGB = Math.min(red, Math.min(green, blue));
    var maxRGB = Math.max(red, Math.max(green, blue)); // Black-gray-white

    if (minRGB == maxRGB) {
      return {
        h: 0,
        s: 0,
        v: minRGB
      };
    } // Colors other than black-gray-white:


    var d = red == minRGB ? green - blue : blue == minRGB ? red - green : blue - red;
    var h = red == minRGB ? 3 : blue == minRGB ? 1 : 5;
    var hue = 60 * (h - d / (maxRGB - minRGB)) / 360;
    var saturation = (maxRGB - minRGB) / maxRGB;
    var value = maxRGB;
    return {
      h: hue,
      s: saturation,
      v: value
    };
  };

  var cssUtil = {
    // split a string with css styles into an object with key/values
    split: function split(cssText) {
      var styles = {};
      cssText.split(';').forEach(function (style) {
        if (style.trim() != '') {
          var parts = style.split(':');
          var key = parts[0].trim();
          var value = parts[1].trim();
          styles[key] = value;
        }
      });
      return styles;
    },
    // build a css text string from an object with key/values
    join: function join(styles) {
      return Object.keys(styles).map(function (key) {
        return key + ': ' + styles[key];
      }).join('; ');
    }
  };
  /**
   * Append a string with css styles to an element
   * @param {Element} element
   * @param {string} cssText
   */

  exports.addCssText = function (element, cssText) {
    var currentStyles = cssUtil.split(element.style.cssText);
    var newStyles = cssUtil.split(cssText);
    var styles = exports.extend(currentStyles, newStyles);
    element.style.cssText = cssUtil.join(styles);
  };
  /**
   * Remove a string with css styles from an element
   * @param {Element} element
   * @param {string} cssText
   */


  exports.removeCssText = function (element, cssText) {
    var styles = cssUtil.split(element.style.cssText);
    var removeStyles = cssUtil.split(cssText);

    for (var key in removeStyles) {
      if (removeStyles.hasOwnProperty(key)) {
        delete styles[key];
      }
    }

    element.style.cssText = cssUtil.join(styles);
  };
  /**
   * https://gist.github.com/mjijackson/5311256
   * @param {number} h
   * @param {number} s
   * @param {number} v
   * @returns {{r: number, g: number, b: number}}
   * @constructor
   */


  exports.HSVToRGB = function (h, s, v) {
    var r, g, b;
    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0:
        r = v, g = t, b = p;
        break;

      case 1:
        r = q, g = v, b = p;
        break;

      case 2:
        r = p, g = v, b = t;
        break;

      case 3:
        r = p, g = q, b = v;
        break;

      case 4:
        r = t, g = p, b = v;
        break;

      case 5:
        r = v, g = p, b = q;
        break;
    }

    return {
      r: Math.floor(r * 255),
      g: Math.floor(g * 255),
      b: Math.floor(b * 255)
    };
  };

  exports.HSVToHex = function (h, s, v) {
    var rgb = exports.HSVToRGB(h, s, v);
    return exports.RGBToHex(rgb.r, rgb.g, rgb.b);
  };

  exports.hexToHSV = function (hex) {
    var rgb = exports.hexToRGB(hex);
    return exports.RGBToHSV(rgb.r, rgb.g, rgb.b);
  };

  exports.isValidHex = function (hex) {
    var isOk = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
    return isOk;
  };

  exports.isValidRGB = function (rgb) {
    rgb = rgb.replace(" ", "");
    var isOk = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/i.test(rgb);
    return isOk;
  };

  exports.isValidRGBA = function (rgba) {
    rgba = rgba.replace(" ", "");
    var isOk = /rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(.{1,3})\)/i.test(rgba);
    return isOk;
  };
  /**
   * This recursively redirects the prototype of JSON objects to the referenceObject
   * This is used for default options.
   *
   * @param {Array.<string>} fields
   * @param {Object} referenceObject
   * @returns {*}
   */


  exports.selectiveBridgeObject = function (fields, referenceObject) {
    if (referenceObject !== null && _typeof(referenceObject) === "object") {
      // !!! typeof null === 'object'
      var objectTo = Object.create(referenceObject);

      for (var i = 0; i < fields.length; i++) {
        if (referenceObject.hasOwnProperty(fields[i])) {
          if (_typeof(referenceObject[fields[i]]) == "object") {
            objectTo[fields[i]] = exports.bridgeObject(referenceObject[fields[i]]);
          }
        }
      }

      return objectTo;
    } else {
      return null;
    }
  };
  /**
   * This recursively redirects the prototype of JSON objects to the referenceObject
   * This is used for default options.
   *
   * @param {Object} referenceObject
   * @returns {*}
   */


  exports.bridgeObject = function (referenceObject) {
    if (referenceObject !== null && _typeof(referenceObject) === "object") {
      // !!! typeof null === 'object'
      var objectTo = Object.create(referenceObject);

      if (referenceObject instanceof Element) {
        // Avoid bridging DOM objects
        objectTo = referenceObject;
      } else {
        objectTo = Object.create(referenceObject);

        for (var i in referenceObject) {
          if (referenceObject.hasOwnProperty(i)) {
            if (_typeof(referenceObject[i]) == "object") {
              objectTo[i] = exports.bridgeObject(referenceObject[i]);
            }
          }
        }
      }

      return objectTo;
    } else {
      return null;
    }
  };
  /**
   * This method provides a stable sort implementation, very fast for presorted data
   *
   * @param {Array} a the array
   * @param {function} compare an order comparator
   * @returns {Array}
   */


  exports.insertSort = function (a, compare) {
    for (var i = 0; i < a.length; i++) {
      var k = a[i];

      for (var j = i; j > 0 && compare(k, a[j - 1]) < 0; j--) {
        a[j] = a[j - 1];
      }

      a[j] = k;
    }

    return a;
  };
  /**
   * This is used to set the options of subobjects in the options object.
   *
   * A requirement of these subobjects is that they have an 'enabled' element
   * which is optional for the user but mandatory for the program.
   *
   * The added value here of the merge is that option 'enabled' is set as required.
   *
   *
   * @param {object} mergeTarget   | either this.options or the options used for the groups.
   * @param {object} options       | options
   * @param {string} option        | option key in the options argument
   * @param {object} globalOptions | global options, passed in to determine value of option 'enabled'
   */


  exports.mergeOptions = function (mergeTarget, options, option) {
    var globalOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {}; // Local helpers

    var isPresent = function isPresent(obj) {
      return obj !== null && obj !== undefined;
    };

    var isObject = function isObject(obj) {
      return obj !== null && _typeof(obj) === 'object';
    }; // https://stackoverflow.com/a/34491287/1223531


    var isEmpty = function isEmpty(obj) {
      for (var x in obj) {
        if (obj.hasOwnProperty(x)) return false;
      }

      return true;
    }; // Guards


    if (!isObject(mergeTarget)) {
      throw new Error('Parameter mergeTarget must be an object');
    }

    if (!isObject(options)) {
      throw new Error('Parameter options must be an object');
    }

    if (!isPresent(option)) {
      throw new Error('Parameter option must have a value');
    }

    if (!isObject(globalOptions)) {
      throw new Error('Parameter globalOptions must be an object');
    } //
    // Actual merge routine, separated from main logic
    // Only a single level of options is merged. Deeper levels are ref'd. This may actually be an issue.
    //


    var doMerge = function doMerge(target, options, option) {
      if (!isObject(target[option])) {
        target[option] = {};
      }

      var src = options[option];
      var dst = target[option];

      for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
          dst[prop] = src[prop];
        }
      }
    }; // Local initialization


    var srcOption = options[option];
    var globalPassed = isObject(globalOptions) && !isEmpty(globalOptions);
    var globalOption = globalPassed ? globalOptions[option] : undefined;
    var globalEnabled = globalOption ? globalOption.enabled : undefined; /////////////////////////////////////////
    // Main routine
    /////////////////////////////////////////

    if (srcOption === undefined) {
      return; // Nothing to do
    }

    if (typeof srcOption === 'boolean') {
      if (!isObject(mergeTarget[option])) {
        mergeTarget[option] = {};
      }

      mergeTarget[option].enabled = srcOption;
      return;
    }

    if (srcOption === null && !isObject(mergeTarget[option])) {
      // If possible, explicit copy from globals
      if (isPresent(globalOption)) {
        mergeTarget[option] = Object.create(globalOption);
      } else {
        return; // Nothing to do
      }
    }

    if (!isObject(srcOption)) {
      return;
    } //
    // Ensure that 'enabled' is properly set. It is required internally
    // Note that the value from options will always overwrite the existing value
    //


    var enabled = true; // default value

    if (srcOption.enabled !== undefined) {
      enabled = srcOption.enabled;
    } else {
      // Take from globals, if present
      if (globalEnabled !== undefined) {
        enabled = globalOption.enabled;
      }
    }

    doMerge(mergeTarget, options, option);
    mergeTarget[option].enabled = enabled;
  };
  /**
   * This function does a binary search for a visible item in a sorted list. If we find a visible item, the code that uses
   * this function will then iterate in both directions over this sorted list to find all visible items.
   *
   * @param {Item[]} orderedItems       | Items ordered by start
   * @param {function} comparator       | -1 is lower, 0 is equal, 1 is higher
   * @param {string} field
   * @param {string} field2
   * @returns {number}
   * @private
   */


  exports.binarySearchCustom = function (orderedItems, comparator, field, field2) {
    var maxIterations = 10000;
    var iteration = 0;
    var low = 0;
    var high = orderedItems.length - 1;

    while (low <= high && iteration < maxIterations) {
      var middle = Math.floor((low + high) / 2);
      var item = orderedItems[middle];
      var value = field2 === undefined ? item[field] : item[field][field2];
      var searchResult = comparator(value);

      if (searchResult == 0) {
        // jihaa, found a visible item!
        return middle;
      } else if (searchResult == -1) {
        // it is too small --> increase low
        low = middle + 1;
      } else {
        // it is too big --> decrease high
        high = middle - 1;
      }

      iteration++;
    }

    return -1;
  };
  /**
   * This function does a binary search for a specific value in a sorted array. If it does not exist but is in between of
   * two values, we return either the one before or the one after, depending on user input
   * If it is found, we return the index, else -1.
   *
   * @param {Array} orderedItems
   * @param {{start: number, end: number}} target
   * @param {string} field
   * @param {string} sidePreference   'before' or 'after'
   * @param {function} comparator an optional comparator, returning -1,0,1 for <,==,>.
   * @returns {number}
   * @private
   */


  exports.binarySearchValue = function (orderedItems, target, field, sidePreference, comparator) {
    var maxIterations = 10000;
    var iteration = 0;
    var low = 0;
    var high = orderedItems.length - 1;
    var prevValue, value, nextValue, middle;
    comparator = comparator != undefined ? comparator : function (a, b) {
      return a == b ? 0 : a < b ? -1 : 1;
    };

    while (low <= high && iteration < maxIterations) {
      // get a new guess
      middle = Math.floor(0.5 * (high + low));
      prevValue = orderedItems[Math.max(0, middle - 1)][field];
      value = orderedItems[middle][field];
      nextValue = orderedItems[Math.min(orderedItems.length - 1, middle + 1)][field];

      if (comparator(value, target) == 0) {
        // we found the target
        return middle;
      } else if (comparator(prevValue, target) < 0 && comparator(value, target) > 0) {
        // target is in between of the previous and the current
        return sidePreference == 'before' ? Math.max(0, middle - 1) : middle;
      } else if (comparator(value, target) < 0 && comparator(nextValue, target) > 0) {
        // target is in between of the current and the next
        return sidePreference == 'before' ? middle : Math.min(orderedItems.length - 1, middle + 1);
      } else {
        // didnt find the target, we need to change our boundaries.
        if (comparator(value, target) < 0) {
          // it is too small --> increase low
          low = middle + 1;
        } else {
          // it is too big --> decrease high
          high = middle - 1;
        }
      }

      iteration++;
    } // didnt find anything. Return -1.


    return -1;
  };
  /*
   * Easing Functions - inspired from http://gizma.com/easing/
   * only considering the t value for the range [0, 1] => [0, 1]
   * https://gist.github.com/gre/1650294
   */


  exports.easingFunctions = {
    // no easing, no acceleration
    linear: function linear(t) {
      return t;
    },
    // accelerating from zero velocity
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    // decelerating to zero velocity
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function easeInOutQuad(t) {
      return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    // accelerating from zero velocity
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    // decelerating to zero velocity
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    // acceleration until halfway, then deceleration
    easeInOutCubic: function easeInOutCubic(t) {
      return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    // accelerating from zero velocity
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    // decelerating to zero velocity
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function easeInOutQuart(t) {
      return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    // accelerating from zero velocity
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    // decelerating to zero velocity
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuint: function easeInOutQuint(t) {
      return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };

  exports.getScrollBarWidth = function () {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";
    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;
    document.body.removeChild(outer);
    return w1 - w2;
  };

  exports.topMost = function (pile, accessors) {
    var candidate;

    if (!Array.isArray(accessors)) {
      accessors = [accessors];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = pile[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var member = _step.value;

        if (member) {
          candidate = member[accessors[0]];

          for (var i = 1; i < accessors.length; i++) {
            if (candidate) {
              candidate = candidate[accessors[i]];
            }
          }

          if (typeof candidate != 'undefined') {
            break;
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return candidate;
  };
});
var esm_1 = esm.isNumber;
var esm_2 = esm.recursiveDOMDelete;
var esm_3 = esm.isString;
var esm_4 = esm.isDate;
var esm_5 = esm.randomUUID;
var esm_6 = esm.fillIfDefined;
var esm_7 = esm.extend;
var esm_8 = esm.selectiveExtend;
var esm_9 = esm.selectiveDeepExtend;
var esm_10 = esm.selectiveNotDeepExtend;
var esm_11 = esm.deepExtend;
var esm_12 = esm.equalArray;
var esm_13 = esm.convert;
var esm_14 = esm.getType;
var esm_15 = esm.copyAndExtendArray;
var esm_16 = esm.copyArray;
var esm_17 = esm.getAbsoluteLeft;
var esm_18 = esm.getAbsoluteRight;
var esm_19 = esm.getAbsoluteTop;
var esm_20 = esm.addClassName;
var esm_21 = esm.removeClassName;
var esm_22 = esm.forEach;
var esm_23 = esm.toArray;
var esm_24 = esm.updateProperty;
var esm_25 = esm.throttle;
var esm_26 = esm.addEventListener;
var esm_27 = esm.removeEventListener;
var esm_28 = esm.preventDefault;
var esm_29 = esm.getTarget;
var esm_30 = esm.hasParent;
var esm_31 = esm.option;
var esm_32 = esm.hexToRGB;
var esm_33 = esm.overrideOpacity;
var esm_34 = esm.RGBToHex;
var esm_35 = esm.parseColor;
var esm_36 = esm.RGBToHSV;
var esm_37 = esm.addCssText;
var esm_38 = esm.removeCssText;
var esm_39 = esm.HSVToRGB;
var esm_40 = esm.HSVToHex;
var esm_41 = esm.hexToHSV;
var esm_42 = esm.isValidHex;
var esm_43 = esm.isValidRGB;
var esm_44 = esm.isValidRGBA;
var esm_45 = esm.selectiveBridgeObject;
var esm_46 = esm.bridgeObject;
var esm_47 = esm.insertSort;
var esm_48 = esm.mergeOptions;
var esm_49 = esm.binarySearchCustom;
var esm_50 = esm.binarySearchValue;
var esm_51 = esm.easingFunctions;
var esm_52 = esm.getScrollBarWidth;
var esm_53 = esm.topMost;
/**
 * A queue
 * @param {Object} options
 *            Available options:
 *            - delay: number    When provided, the queue will be flushed
 *                               automatically after an inactivity of this delay
 *                               in milliseconds.
 *                               Default value is null.
 *            - max: number      When the queue exceeds the given maximum number
 *                               of entries, the queue is flushed automatically.
 *                               Default value of max is Infinity.
 * @constructor Queue
 */

function Queue(options) {
  // options
  this.delay = null;
  this.max = Infinity; // properties

  this._queue = [];
  this._timeout = null;
  this._extended = null;
  this.setOptions(options);
}
/**
 * Update the configuration of the queue
 * @param {Object} options
 *            Available options:
 *            - delay: number    When provided, the queue will be flushed
 *                               automatically after an inactivity of this delay
 *                               in milliseconds.
 *                               Default value is null.
 *            - max: number      When the queue exceeds the given maximum number
 *                               of entries, the queue is flushed automatically.
 *                               Default value of max is Infinity.
 */


Queue.prototype.setOptions = function (options) {
  if (options && typeof options.delay !== 'undefined') {
    this.delay = options.delay;
  }

  if (options && typeof options.max !== 'undefined') {
    this.max = options.max;
  }

  this._flushIfNeeded();
};
/**
 * Extend an object with queuing functionality.
 * The object will be extended with a function flush, and the methods provided
 * in options.replace will be replaced with queued ones.
 * @param {Object} object
 * @param {Object} options
 *            Available options:
 *            - replace: Array.<string>
 *                               A list with method names of the methods
 *                               on the object to be replaced with queued ones.
 *            - delay: number    When provided, the queue will be flushed
 *                               automatically after an inactivity of this delay
 *                               in milliseconds.
 *                               Default value is null.
 *            - max: number      When the queue exceeds the given maximum number
 *                               of entries, the queue is flushed automatically.
 *                               Default value of max is Infinity.
 * @return {Queue} Returns the created queue
 */


Queue.extend = function (object, options) {
  var queue = new Queue(options);

  if (object.flush !== undefined) {
    throw new Error('Target object already has a property flush');
  }

  object.flush = function () {
    queue.flush();
  };

  var methods = [{
    name: 'flush',
    original: undefined
  }];

  if (options && options.replace) {
    for (var i = 0; i < options.replace.length; i++) {
      var name = options.replace[i];
      methods.push({
        name: name,
        original: object[name]
      });
      queue.replace(object, name);
    }
  }

  queue._extended = {
    object: object,
    methods: methods
  };
  return queue;
};
/**
 * Destroy the queue. The queue will first flush all queued actions, and in
 * case it has extended an object, will restore the original object.
 */


Queue.prototype.destroy = function () {
  this.flush();

  if (this._extended) {
    var object = this._extended.object;
    var methods = this._extended.methods;

    for (var i = 0; i < methods.length; i++) {
      var method = methods[i];

      if (method.original) {
        object[method.name] = method.original;
      } else {
        delete object[method.name];
      }
    }

    this._extended = null;
  }
};
/**
 * Replace a method on an object with a queued version
 * @param {Object} object   Object having the method
 * @param {string} method   The method name
 */


Queue.prototype.replace = function (object, method) {
  var me = this;
  var original = object[method];

  if (!original) {
    throw new Error('Method ' + method + ' undefined');
  }

  object[method] = function () {
    // create an Array with the arguments
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    } // add this call to the queue


    me.queue({
      args: args,
      fn: original,
      context: this
    });
  };
};
/**
 * Queue a call
 * @param {function | {fn: function, args: Array} | {fn: function, args: Array, context: Object}} entry
 */


Queue.prototype.queue = function (entry) {
  if (typeof entry === 'function') {
    this._queue.push({
      fn: entry
    });
  } else {
    this._queue.push(entry);
  }

  this._flushIfNeeded();
};
/**
 * Check whether the queue needs to be flushed
 * @private
 */


Queue.prototype._flushIfNeeded = function () {
  // flush when the maximum is exceeded.
  if (this._queue.length > this.max) {
    this.flush();
  } // flush after a period of inactivity when a delay is configured


  clearTimeout(this._timeout);

  if (this.queue.length > 0 && typeof this.delay === 'number') {
    var me = this;
    this._timeout = setTimeout(function () {
      me.flush();
    }, this.delay);
  }
};
/**
 * Flush all queued calls
 */


Queue.prototype.flush = function () {
  while (this._queue.length > 0) {
    var entry = this._queue.shift();

    entry.fn.apply(entry.context || entry.fn, entry.args || []);
  }
};

var Queue_1 = Queue;
/**
 * DataSet
 * // TODO: add a DataSet constructor DataSet(data, options)
 *
 * Usage:
 *     var dataSet = new DataSet({
 *         fieldId: '_id',
 *         type: {
 *             // ...
 *         }
 *     });
 *
 *     dataSet.add(item);
 *     dataSet.add(data);
 *     dataSet.update(item);
 *     dataSet.update(data);
 *     dataSet.remove(id);
 *     dataSet.remove(ids);
 *     var data = dataSet.get();
 *     var data = dataSet.get(id);
 *     var data = dataSet.get(ids);
 *     var data = dataSet.get(ids, options, data);
 *     dataSet.clear();
 *
 * A data set can:
 * - add/remove/update data
 * - gives triggers upon changes in the data
 * - can  import/export data in various data formats
 *
 * @param {Array} [data]    Optional array with initial data
 * @param {Object} [options]   Available options:
 *                             {string} fieldId Field name of the id in the
 *                                              items, 'id' by default.
 *                             {Object.<string, string} type
 *                                              A map with field names as key,
 *                                              and the field type as value.
 *                             {Object} queue   Queue changes to the DataSet,
 *                                              flush them all at once.
 *                                              Queue options:
 *                                              - {number} delay  Delay in ms, null by default
 *                                              - {number} max    Maximum number of entries in the queue, Infinity by default
 * @constructor DataSet
 */

function DataSet(data, options) {
  // correctly read optional arguments
  if (data && !Array.isArray(data)) {
    options = data;
    data = null;
  }

  this._options = options || {};
  this._data = {}; // map with data indexed by id

  this.length = 0; // number of items in the DataSet

  this._fieldId = this._options.fieldId || 'id'; // name of the field containing id

  this._type = {}; // internal field types (NOTE: this can differ from this._options.type)
  // all variants of a Date are internally stored as Date, so we can convert
  // from everything to everything (also from ISODate to Number for example)

  if (this._options.type) {
    var fields = Object.keys(this._options.type);

    for (var i = 0, len = fields.length; i < len; i++) {
      var field = fields[i];
      var value = this._options.type[field];

      if (value == 'Date' || value == 'ISODate' || value == 'ASPDate') {
        this._type[field] = 'Date';
      } else {
        this._type[field] = value;
      }
    }
  }

  this._subscribers = {}; // event subscribers
  // add initial data when provided

  if (data) {
    this.add(data);
  }

  this.setOptions(options);
}
/**
 * @param {Object} options   Available options:
 *                             {Object} queue   Queue changes to the DataSet,
 *                                              flush them all at once.
 *                                              Queue options:
 *                                              - {number} delay  Delay in ms, null by default
 *                                              - {number} max    Maximum number of entries in the queue, Infinity by default
 */


DataSet.prototype.setOptions = function (options) {
  if (options && options.queue !== undefined) {
    if (options.queue === false) {
      // delete queue if loaded
      if (this._queue) {
        this._queue.destroy();

        delete this._queue;
      }
    } else {
      // create queue and update its options
      if (!this._queue) {
        this._queue = Queue_1.extend(this, {
          replace: ['add', 'update', 'remove']
        });
      }

      if (_typeof$1(options.queue) === 'object') {
        this._queue.setOptions(options.queue);
      }
    }
  }
};
/**
 * Subscribe to an event, add an event listener
 * @param {string} event        Event name. Available events: 'add', 'update',
 *                              'remove'
 * @param {function} callback   Callback method. Called with three parameters:
 *                                  {string} event
 *                                  {Object | null} params
 *                                  {string | number} senderId
 */


DataSet.prototype.on = function (event, callback) {
  var subscribers = this._subscribers[event];

  if (!subscribers) {
    subscribers = [];
    this._subscribers[event] = subscribers;
  }

  subscribers.push({
    callback: callback
  });
};
/**
 * Unsubscribe from an event, remove an event listener
 * @param {string} event
 * @param {function} callback
 */


DataSet.prototype.off = function (event, callback) {
  var subscribers = this._subscribers[event];

  if (subscribers) {
    this._subscribers[event] = subscribers.filter(function (listener) {
      return listener.callback != callback;
    });
  }
};
/**
 * Trigger an event
 * @param {string} event
 * @param {Object | null} params
 * @param {string} [senderId]       Optional id of the sender.
 * @private
 */


DataSet.prototype._trigger = function (event, params, senderId) {
  if (event == '*') {
    throw new Error('Cannot trigger event *');
  }

  var subscribers = [];

  if (event in this._subscribers) {
    subscribers = subscribers.concat(this._subscribers[event]);
  }

  if ('*' in this._subscribers) {
    subscribers = subscribers.concat(this._subscribers['*']);
  }

  for (var i = 0, len = subscribers.length; i < len; i++) {
    var subscriber = subscribers[i];

    if (subscriber.callback) {
      subscriber.callback(event, params, senderId || null);
    }
  }
};
/**
 * Add data.
 * Adding an item will fail when there already is an item with the same id.
 * @param {Object | Array} data
 * @param {string} [senderId] Optional sender id
 * @return {Array.<string|number>} addedIds      Array with the ids of the added items
 */


DataSet.prototype.add = function (data, senderId) {
  var addedIds = [],
      id,
      me = this;

  if (Array.isArray(data)) {
    // Array
    for (var i = 0, len = data.length; i < len; i++) {
      id = me._addItem(data[i]);
      addedIds.push(id);
    }
  } else if (data && _typeof$1(data) === 'object') {
    // Single item
    id = me._addItem(data);
    addedIds.push(id);
  } else {
    throw new Error('Unknown dataType');
  }

  if (addedIds.length) {
    this._trigger('add', {
      items: addedIds
    }, senderId);
  }

  return addedIds;
};
/**
 * Update existing items. When an item does not exist, it will be created
 * @param {Object | Array} data
 * @param {string} [senderId] Optional sender id
 * @return {Array.<string|number>} updatedIds     The ids of the added or updated items
 * @throws {Error} Unknown Datatype
 */


DataSet.prototype.update = function (data, senderId) {
  var addedIds = [];
  var updatedIds = [];
  var oldData = [];
  var updatedData = [];
  var me = this;
  var fieldId = me._fieldId;

  var addOrUpdate = function addOrUpdate(item) {
    var id = item[fieldId];

    if (me._data[id]) {
      var oldItem = esm.extend({}, me._data[id]); // update item

      id = me._updateItem(item);
      updatedIds.push(id);
      updatedData.push(item);
      oldData.push(oldItem);
    } else {
      // add new item
      id = me._addItem(item);
      addedIds.push(id);
    }
  };

  if (Array.isArray(data)) {
    // Array
    for (var i = 0, len = data.length; i < len; i++) {
      if (data[i] && _typeof$1(data[i]) === 'object') {
        addOrUpdate(data[i]);
      } else {
        console.warn('Ignoring input item, which is not an object at index ' + i);
      }
    }
  } else if (data && _typeof$1(data) === 'object') {
    // Single item
    addOrUpdate(data);
  } else {
    throw new Error('Unknown dataType');
  }

  if (addedIds.length) {
    this._trigger('add', {
      items: addedIds
    }, senderId);
  }

  if (updatedIds.length) {
    var props = {
      items: updatedIds,
      oldData: oldData,
      data: updatedData
    }; // TODO: remove deprecated property 'data' some day
    //Object.defineProperty(props, 'data', {
    //  'get': (function() {
    //    console.warn('Property data is deprecated. Use DataSet.get(ids) to retrieve the new data, use the oldData property on this object to get the old data');
    //    return updatedData;
    //  }).bind(this)
    //});

    this._trigger('update', props, senderId);
  }

  return addedIds.concat(updatedIds);
};
/**
 * Get a data item or multiple items.
 *
 * Usage:
 *
 *     get()
 *     get(options: Object)
 *
 *     get(id: number | string)
 *     get(id: number | string, options: Object)
 *
 *     get(ids: number[] | string[])
 *     get(ids: number[] | string[], options: Object)
 *
 * Where:
 *
 * {number | string} id         The id of an item
 * {number[] | string{}} ids    An array with ids of items
 * {Object} options             An Object with options. Available options:
 * {string} [returnType]        Type of data to be returned.
 *                              Can be 'Array' (default) or 'Object'.
 * {Object.<string, string>} [type]
 * {string[]} [fields]          field names to be returned
 * {function} [filter]          filter items
 * {string | function} [order]  Order the items by a field name or custom sort function.
 * @param {Array} args
 * @returns {DataSet}
 * @throws Error
 */


DataSet.prototype.get = function (args) {
  // eslint-disable-line no-unused-vars
  var me = this; // parse the arguments

  var id, ids, options;
  var firstType = esm.getType(arguments[0]);

  if (firstType == 'String' || firstType == 'Number') {
    // get(id [, options])
    id = arguments[0];
    options = arguments[1];
  } else if (firstType == 'Array') {
    // get(ids [, options])
    ids = arguments[0];
    options = arguments[1];
  } else {
    // get([, options])
    options = arguments[0];
  } // determine the return type


  var returnType;

  if (options && options.returnType) {
    var allowedValues = ['Array', 'Object'];
    returnType = allowedValues.indexOf(options.returnType) == -1 ? 'Array' : options.returnType;
  } else {
    returnType = 'Array';
  } // build options


  var type = options && options.type || this._options.type;
  var filter = options && options.filter;
  var items = [],
      item,
      itemIds,
      itemId,
      i,
      len; // convert items

  if (id != undefined) {
    // return a single item
    item = me._getItem(id, type);

    if (item && filter && !filter(item)) {
      item = null;
    }
  } else if (ids != undefined) {
    // return a subset of items
    for (i = 0, len = ids.length; i < len; i++) {
      item = me._getItem(ids[i], type);

      if (!filter || filter(item)) {
        items.push(item);
      }
    }
  } else {
    // return all items
    itemIds = Object.keys(this._data);

    for (i = 0, len = itemIds.length; i < len; i++) {
      itemId = itemIds[i];
      item = me._getItem(itemId, type);

      if (!filter || filter(item)) {
        items.push(item);
      }
    }
  } // order the results


  if (options && options.order && id == undefined) {
    this._sort(items, options.order);
  } // filter fields of the items


  if (options && options.fields) {
    var fields = options.fields;

    if (id != undefined) {
      item = this._filterFields(item, fields);
    } else {
      for (i = 0, len = items.length; i < len; i++) {
        items[i] = this._filterFields(items[i], fields);
      }
    }
  } // return the results


  if (returnType == 'Object') {
    var result = {},
        resultant;

    for (i = 0, len = items.length; i < len; i++) {
      resultant = items[i];
      result[resultant.id] = resultant;
    }

    return result;
  } else {
    if (id != undefined) {
      // a single item
      return item;
    } else {
      // just return our array
      return items;
    }
  }
};
/**
 * Get ids of all items or from a filtered set of items.
 * @param {Object} [options]    An Object with options. Available options:
 *                              {function} [filter] filter items
 *                              {string | function} [order] Order the items by
 *                                  a field name or custom sort function.
 * @return {Array.<string|number>} ids
 */


DataSet.prototype.getIds = function (options) {
  var data = this._data,
      filter = options && options.filter,
      order = options && options.order,
      type = options && options.type || this._options.type,
      itemIds = Object.keys(data),
      i,
      len,
      id,
      item,
      items,
      ids = [];

  if (filter) {
    // get filtered items
    if (order) {
      // create ordered list
      items = [];

      for (i = 0, len = itemIds.length; i < len; i++) {
        id = itemIds[i];
        item = this._getItem(id, type);

        if (filter(item)) {
          items.push(item);
        }
      }

      this._sort(items, order);

      for (i = 0, len = items.length; i < len; i++) {
        ids.push(items[i][this._fieldId]);
      }
    } else {
      // create unordered list
      for (i = 0, len = itemIds.length; i < len; i++) {
        id = itemIds[i];
        item = this._getItem(id, type);

        if (filter(item)) {
          ids.push(item[this._fieldId]);
        }
      }
    }
  } else {
    // get all items
    if (order) {
      // create an ordered list
      items = [];

      for (i = 0, len = itemIds.length; i < len; i++) {
        id = itemIds[i];
        items.push(data[id]);
      }

      this._sort(items, order);

      for (i = 0, len = items.length; i < len; i++) {
        ids.push(items[i][this._fieldId]);
      }
    } else {
      // create unordered list
      for (i = 0, len = itemIds.length; i < len; i++) {
        id = itemIds[i];
        item = data[id];
        ids.push(item[this._fieldId]);
      }
    }
  }

  return ids;
};
/**
 * Returns the DataSet itself. Is overwritten for example by the DataView,
 * which returns the DataSet it is connected to instead.
 * @returns {DataSet}
 */


DataSet.prototype.getDataSet = function () {
  return this;
};
/**
 * Execute a callback function for every item in the dataset.
 * @param {function} callback
 * @param {Object} [options]    Available options:
 *                              {Object.<string, string>} [type]
 *                              {string[]} [fields] filter fields
 *                              {function} [filter] filter items
 *                              {string | function} [order] Order the items by
 *                                  a field name or custom sort function.
 */


DataSet.prototype.forEach = function (callback, options) {
  var filter = options && options.filter,
      type = options && options.type || this._options.type,
      data = this._data,
      itemIds = Object.keys(data),
      i,
      len,
      item,
      id;

  if (options && options.order) {
    // execute forEach on ordered list
    var items = this.get(options);

    for (i = 0, len = items.length; i < len; i++) {
      item = items[i];
      id = item[this._fieldId];
      callback(item, id);
    }
  } else {
    // unordered
    for (i = 0, len = itemIds.length; i < len; i++) {
      id = itemIds[i];
      item = this._getItem(id, type);

      if (!filter || filter(item)) {
        callback(item, id);
      }
    }
  }
};
/**
 * Map every item in the dataset.
 * @param {function} callback
 * @param {Object} [options]    Available options:
 *                              {Object.<string, string>} [type]
 *                              {string[]} [fields] filter fields
 *                              {function} [filter] filter items
 *                              {string | function} [order] Order the items by
 *                                  a field name or custom sort function.
 * @return {Object[]} mappedItems
 */


DataSet.prototype.map = function (callback, options) {
  var filter = options && options.filter,
      type = options && options.type || this._options.type,
      mappedItems = [],
      data = this._data,
      itemIds = Object.keys(data),
      i,
      len,
      id,
      item; // convert and filter items

  for (i = 0, len = itemIds.length; i < len; i++) {
    id = itemIds[i];
    item = this._getItem(id, type);

    if (!filter || filter(item)) {
      mappedItems.push(callback(item, id));
    }
  } // order items


  if (options && options.order) {
    this._sort(mappedItems, options.order);
  }

  return mappedItems;
};
/**
 * Filter the fields of an item
 * @param {Object | null} item
 * @param {string[]} fields     Field names
 * @return {Object | null} filteredItem or null if no item is provided
 * @private
 */


DataSet.prototype._filterFields = function (item, fields) {
  if (!item) {
    // item is null
    return item;
  }

  var filteredItem = {},
      itemFields = Object.keys(item),
      len = itemFields.length,
      i,
      field;

  if (Array.isArray(fields)) {
    for (i = 0; i < len; i++) {
      field = itemFields[i];

      if (fields.indexOf(field) != -1) {
        filteredItem[field] = item[field];
      }
    }
  } else {
    for (i = 0; i < len; i++) {
      field = itemFields[i];

      if (fields.hasOwnProperty(field)) {
        filteredItem[fields[field]] = item[field];
      }
    }
  }

  return filteredItem;
};
/**
 * Sort the provided array with items
 * @param {Object[]} items
 * @param {string | function} order      A field name or custom sort function.
 * @private
 */


DataSet.prototype._sort = function (items, order) {
  if (esm.isString(order)) {
    // order by provided field name
    var name = order; // field name

    items.sort(function (a, b) {
      var av = a[name];
      var bv = b[name];
      return av > bv ? 1 : av < bv ? -1 : 0;
    });
  } else if (typeof order === 'function') {
    // order by sort function
    items.sort(order);
  } // TODO: extend order by an Object {field:string, direction:string}
  //       where direction can be 'asc' or 'desc'
  else {
      throw new TypeError('Order must be a function or a string');
    }
};
/**
 * Remove an object by pointer or by id
 * @param {string | number | Object | Array.<string|number>} id Object or id, or an array with
 *                                              objects or ids to be removed
 * @param {string} [senderId] Optional sender id
 * @return {Array.<string|number>} removedIds
 */


DataSet.prototype.remove = function (id, senderId) {
  var removedIds = [],
      removedItems = [],
      ids = [],
      i,
      len,
      itemId,
      item; // force everything to be an array for simplicity

  ids = Array.isArray(id) ? id : [id];

  for (i = 0, len = ids.length; i < len; i++) {
    item = this._remove(ids[i]);

    if (item) {
      itemId = item[this._fieldId];

      if (itemId != undefined) {
        removedIds.push(itemId);
        removedItems.push(item);
      }
    }
  }

  if (removedIds.length) {
    this._trigger('remove', {
      items: removedIds,
      oldData: removedItems
    }, senderId);
  }

  return removedIds;
};
/**
 * Remove an item by its id
 * @param {number | string | Object} id   id or item
 * @returns {number | string | null} id
 * @private
 */


DataSet.prototype._remove = function (id) {
  var item, ident; // confirm the id to use based on the args type

  if (esm.isNumber(id) || esm.isString(id)) {
    ident = id;
  } else if (id && _typeof$1(id) === 'object') {
    ident = id[this._fieldId]; // look for the identifier field using _fieldId
  } // do the remove if the item is found


  if (ident !== undefined && this._data[ident]) {
    item = this._data[ident];
    delete this._data[ident];
    this.length--;
    return item;
  }

  return null;
};
/**
 * Clear the data
 * @param {string} [senderId] Optional sender id
 * @return {Array.<string|number>} removedIds    The ids of all removed items
 */


DataSet.prototype.clear = function (senderId) {
  var i, len;
  var ids = Object.keys(this._data);
  var items = [];

  for (i = 0, len = ids.length; i < len; i++) {
    items.push(this._data[ids[i]]);
  }

  this._data = {};
  this.length = 0;

  this._trigger('remove', {
    items: ids,
    oldData: items
  }, senderId);

  return ids;
};
/**
 * Find the item with maximum value of a specified field
 * @param {string} field
 * @return {Object | null} item  Item containing max value, or null if no items
 */


DataSet.prototype.max = function (field) {
  var data = this._data,
      itemIds = Object.keys(data),
      max = null,
      maxField = null,
      i,
      len;

  for (i = 0, len = itemIds.length; i < len; i++) {
    var id = itemIds[i];
    var item = data[id];
    var itemField = item[field];

    if (itemField != null && (!max || itemField > maxField)) {
      max = item;
      maxField = itemField;
    }
  }

  return max;
};
/**
 * Find the item with minimum value of a specified field
 * @param {string} field
 * @return {Object | null} item  Item containing max value, or null if no items
 */


DataSet.prototype.min = function (field) {
  var data = this._data,
      itemIds = Object.keys(data),
      min = null,
      minField = null,
      i,
      len;

  for (i = 0, len = itemIds.length; i < len; i++) {
    var id = itemIds[i];
    var item = data[id];
    var itemField = item[field];

    if (itemField != null && (!min || itemField < minField)) {
      min = item;
      minField = itemField;
    }
  }

  return min;
};
/**
 * Find all distinct values of a specified field
 * @param {string} field
 * @return {Array} values  Array containing all distinct values. If data items
 *                         do not contain the specified field are ignored.
 *                         The returned array is unordered.
 */


DataSet.prototype.distinct = function (field) {
  var data = this._data;
  var itemIds = Object.keys(data);
  var values = [];
  var fieldType = this._options.type && this._options.type[field] || null;
  var count = 0;
  var i, j, len;

  for (i = 0, len = itemIds.length; i < len; i++) {
    var id = itemIds[i];
    var item = data[id];
    var value = item[field];
    var exists = false;

    for (j = 0; j < count; j++) {
      if (values[j] == value) {
        exists = true;
        break;
      }
    }

    if (!exists && value !== undefined) {
      values[count] = value;
      count++;
    }
  }

  if (fieldType) {
    for (i = 0, len = values.length; i < len; i++) {
      values[i] = esm.convert(values[i], fieldType);
    }
  }

  return values;
};
/**
 * Add a single item. Will fail when an item with the same id already exists.
 * @param {Object} item
 * @return {string} id
 * @private
 */


DataSet.prototype._addItem = function (item) {
  var id = item[this._fieldId];

  if (id != undefined) {
    // check whether this id is already taken
    if (this._data[id]) {
      // item already exists
      throw new Error('Cannot add item: item with id ' + id + ' already exists');
    }
  } else {
    // generate an id
    id = esm.randomUUID();
    item[this._fieldId] = id;
  }

  var d = {},
      fields = Object.keys(item),
      i,
      len;

  for (i = 0, len = fields.length; i < len; i++) {
    var field = fields[i];
    var fieldType = this._type[field]; // type may be undefined

    d[field] = esm.convert(item[field], fieldType);
  }

  this._data[id] = d;
  this.length++;
  return id;
};
/**
 * Get an item. Fields can be converted to a specific type
 * @param {string} id
 * @param {Object.<string, string>} [types]  field types to convert
 * @return {Object | null} item
 * @private
 */


DataSet.prototype._getItem = function (id, types) {
  var field, value, i, len; // get the item from the dataset

  var raw = this._data[id];

  if (!raw) {
    return null;
  } // convert the items field types


  var converted = {},
      fields = Object.keys(raw);

  if (types) {
    for (i = 0, len = fields.length; i < len; i++) {
      field = fields[i];
      value = raw[field];
      converted[field] = esm.convert(value, types[field]);
    }
  } else {
    // no field types specified, no converting needed
    for (i = 0, len = fields.length; i < len; i++) {
      field = fields[i];
      value = raw[field];
      converted[field] = value;
    }
  }

  if (!converted[this._fieldId]) {
    converted[this._fieldId] = raw.id;
  }

  return converted;
};
/**
 * Update a single item: merge with existing item.
 * Will fail when the item has no id, or when there does not exist an item
 * with the same id.
 * @param {Object} item
 * @return {string} id
 * @private
 */


DataSet.prototype._updateItem = function (item) {
  var id = item[this._fieldId];

  if (id == undefined) {
    throw new Error('Cannot update item: item has no id (item: ' + JSON.stringify(item) + ')');
  }

  var d = this._data[id];

  if (!d) {
    // item doesn't exist
    throw new Error('Cannot update item: no item with id ' + id + ' found');
  } // merge with current item


  var fields = Object.keys(item);

  for (var i = 0, len = fields.length; i < len; i++) {
    var field = fields[i];
    var fieldType = this._type[field]; // type may be undefined

    d[field] = esm.convert(item[field], fieldType);
  }

  return id;
};

var DataSet_1 = DataSet;
/**
 * DataView
 *
 * a dataview offers a filtered view on a dataset or an other dataview.
 *
 * @param {DataSet | DataView} data
 * @param {Object} [options]   Available options: see method get
 *
 * @constructor DataView
 */

function DataView(data, options) {
  this._data = null;
  this._ids = {}; // ids of the items currently in memory (just contains a boolean true)

  this.length = 0; // number of items in the DataView

  this._options = options || {};
  this._fieldId = 'id'; // name of the field containing id

  this._subscribers = {}; // event subscribers

  var me = this;

  this.listener = function () {
    me._onEvent.apply(me, arguments);
  };

  this.setData(data);
} // TODO: implement a function .config() to dynamically update things like configured filter
// and trigger changes accordingly

/**
 * Set a data source for the view
 * @param {DataSet | DataView} data
 */


DataView.prototype.setData = function (data) {
  var ids, id, i, len, items;

  if (this._data) {
    // unsubscribe from current dataset
    if (this._data.off) {
      this._data.off('*', this.listener);
    } // trigger a remove of all items in memory


    ids = this._data.getIds({
      filter: this._options && this._options.filter
    });
    items = [];

    for (i = 0, len = ids.length; i < len; i++) {
      items.push(this._data._data[ids[i]]);
    }

    this._ids = {};
    this.length = 0;

    this._trigger('remove', {
      items: ids,
      oldData: items
    });
  }

  this._data = data;

  if (this._data) {
    // update fieldId
    this._fieldId = this._options.fieldId || this._data && this._data.options && this._data.options.fieldId || 'id'; // trigger an add of all added items

    ids = this._data.getIds({
      filter: this._options && this._options.filter
    });

    for (i = 0, len = ids.length; i < len; i++) {
      id = ids[i];
      this._ids[id] = true;
    }

    this.length = ids.length;

    this._trigger('add', {
      items: ids
    }); // subscribe to new dataset


    if (this._data.on) {
      this._data.on('*', this.listener);
    }
  }
};
/**
 * Refresh the DataView. Useful when the DataView has a filter function
 * containing a variable parameter.
 */


DataView.prototype.refresh = function () {
  var id, i, len;

  var ids = this._data.getIds({
    filter: this._options && this._options.filter
  }),
      oldIds = Object.keys(this._ids),
      newIds = {},
      addedIds = [],
      removedIds = [],
      removedItems = []; // check for additions


  for (i = 0, len = ids.length; i < len; i++) {
    id = ids[i];
    newIds[id] = true;

    if (!this._ids[id]) {
      addedIds.push(id);
      this._ids[id] = true;
    }
  } // check for removals


  for (i = 0, len = oldIds.length; i < len; i++) {
    id = oldIds[i];

    if (!newIds[id]) {
      removedIds.push(id);
      removedItems.push(this._data._data[id]);
      delete this._ids[id];
    }
  }

  this.length += addedIds.length - removedIds.length; // trigger events

  if (addedIds.length) {
    this._trigger('add', {
      items: addedIds
    });
  }

  if (removedIds.length) {
    this._trigger('remove', {
      items: removedIds,
      oldData: removedItems
    });
  }
};
/**
 * Get data from the data view
 *
 * Usage:
 *
 *     get()
 *     get(options: Object)
 *     get(options: Object, data: Array | DataTable)
 *
 *     get(id: Number)
 *     get(id: Number, options: Object)
 *     get(id: Number, options: Object, data: Array | DataTable)
 *
 *     get(ids: Number[])
 *     get(ids: Number[], options: Object)
 *     get(ids: Number[], options: Object, data: Array | DataTable)
 *
 * Where:
 *
 * {number | string} id         The id of an item
 * {number[] | string{}} ids    An array with ids of items
 * {Object} options             An Object with options. Available options:
 *                              {string} [type] Type of data to be returned. Can
 *                                              be 'DataTable' or 'Array' (default)
 *                              {Object.<string, string>} [convert]
 *                              {string[]} [fields] field names to be returned
 *                              {function} [filter] filter items
 *                              {string | function} [order] Order the items by
 *                                  a field name or custom sort function.
 * {Array | DataTable} [data]   If provided, items will be appended to this
 *                              array or table. Required in case of Google
 *                              DataTable.
 * @param {Array} args
 * @return {DataSet|DataView}
 */


DataView.prototype.get = function (args) {
  // eslint-disable-line no-unused-vars
  var me = this; // parse the arguments

  var ids, options, data;
  var firstType = esm.getType(arguments[0]);

  if (firstType == 'String' || firstType == 'Number' || firstType == 'Array') {
    // get(id(s) [, options] [, data])
    ids = arguments[0]; // can be a single id or an array with ids

    options = arguments[1];
    data = arguments[2];
  } else {
    // get([, options] [, data])
    options = arguments[0];
    data = arguments[1];
  } // extend the options with the default options and provided options


  var viewOptions = esm.extend({}, this._options, options); // create a combined filter method when needed

  if (this._options.filter && options && options.filter) {
    viewOptions.filter = function (item) {
      return me._options.filter(item) && options.filter(item);
    };
  } // build up the call to the linked data set


  var getArguments = [];

  if (ids != undefined) {
    getArguments.push(ids);
  }

  getArguments.push(viewOptions);
  getArguments.push(data);
  return this._data && this._data.get.apply(this._data, getArguments);
};
/**
 * Get ids of all items or from a filtered set of items.
 * @param {Object} [options]    An Object with options. Available options:
 *                              {function} [filter] filter items
 *                              {string | function} [order] Order the items by
 *                                  a field name or custom sort function.
 * @return {Array.<string|number>} ids
 */


DataView.prototype.getIds = function (options) {
  var ids;

  if (this._data) {
    var defaultFilter = this._options.filter;
    var filter;

    if (options && options.filter) {
      if (defaultFilter) {
        filter = function filter(item) {
          return defaultFilter(item) && options.filter(item);
        };
      } else {
        filter = options.filter;
      }
    } else {
      filter = defaultFilter;
    }

    ids = this._data.getIds({
      filter: filter,
      order: options && options.order
    });
  } else {
    ids = [];
  }

  return ids;
};
/**
 * Execute a callback function for every item in the dataview.
 * @param {function} callback
 * @param {Object} [options]    Available options:
 *                              {Object.<string, string>} [type]
 *                              {string[]} [fields] filter fields
 *                              {function} [filter] filter items
 *                              {string | function} [order] Order the items by
 *                                  a field name or custom sort function.
 */


DataView.prototype.forEach = function (callback, options) {
  if (this._data) {
    var defaultFilter = this._options.filter;
    var filter;

    if (options && options.filter) {
      if (defaultFilter) {
        filter = function filter(item) {
          return defaultFilter(item) && options.filter(item);
        };
      } else {
        filter = options.filter;
      }
    } else {
      filter = defaultFilter;
    }

    this._data.forEach(callback, {
      filter: filter,
      order: options && options.order
    });
  }
};
/**
 * Map every item in the dataview.
 * @param {function} callback
 * @param {Object} [options]    Available options:
 *                              {Object.<string, string>} [type]
 *                              {string[]} [fields] filter fields
 *                              {function} [filter] filter items
 *                              {string | function} [order] Order the items by
 *                                  a field name or custom sort function.
 * @return {Object[]} mappedItems
 */


DataView.prototype.map = function (callback, options) {
  var mappedItems = [];

  if (this._data) {
    var defaultFilter = this._options.filter;
    var filter;

    if (options && options.filter) {
      if (defaultFilter) {
        filter = function filter(item) {
          return defaultFilter(item) && options.filter(item);
        };
      } else {
        filter = options.filter;
      }
    } else {
      filter = defaultFilter;
    }

    mappedItems = this._data.map(callback, {
      filter: filter,
      order: options && options.order
    });
  } else {
    mappedItems = [];
  }

  return mappedItems;
};
/**
 * Get the DataSet to which this DataView is connected. In case there is a chain
 * of multiple DataViews, the root DataSet of this chain is returned.
 * @return {DataSet} dataSet
 */


DataView.prototype.getDataSet = function () {
  var dataSet = this;

  while (dataSet instanceof DataView) {
    dataSet = dataSet._data;
  }

  return dataSet || null;
};
/**
 * Event listener. Will propagate all events from the connected data set to
 * the subscribers of the DataView, but will filter the items and only trigger
 * when there are changes in the filtered data set.
 * @param {string} event
 * @param {Object | null} params
 * @param {string} senderId
 * @private
 */


DataView.prototype._onEvent = function (event, params, senderId) {
  var i, len, id, item;
  var ids = params && params.items;
  var addedIds = [],
      updatedIds = [],
      removedIds = [],
      oldItems = [],
      updatedItems = [],
      removedItems = [];

  if (ids && this._data) {
    switch (event) {
      case 'add':
        // filter the ids of the added items
        for (i = 0, len = ids.length; i < len; i++) {
          id = ids[i];
          item = this.get(id);

          if (item) {
            this._ids[id] = true;
            addedIds.push(id);
          }
        }

        break;

      case 'update':
        // determine the event from the views viewpoint: an updated
        // item can be added, updated, or removed from this view.
        for (i = 0, len = ids.length; i < len; i++) {
          id = ids[i];
          item = this.get(id);

          if (item) {
            if (this._ids[id]) {
              updatedIds.push(id);
              updatedItems.push(params.data[i]);
              oldItems.push(params.oldData[i]);
            } else {
              this._ids[id] = true;
              addedIds.push(id);
            }
          } else {
            if (this._ids[id]) {
              delete this._ids[id];
              removedIds.push(id);
              removedItems.push(params.oldData[i]);
            }
          }
        }

        break;

      case 'remove':
        // filter the ids of the removed items
        for (i = 0, len = ids.length; i < len; i++) {
          id = ids[i];

          if (this._ids[id]) {
            delete this._ids[id];
            removedIds.push(id);
            removedItems.push(params.oldData[i]);
          }
        }

        break;
    }

    this.length += addedIds.length - removedIds.length;

    if (addedIds.length) {
      this._trigger('add', {
        items: addedIds
      }, senderId);
    }

    if (updatedIds.length) {
      this._trigger('update', {
        items: updatedIds,
        oldData: oldItems,
        data: updatedItems
      }, senderId);
    }

    if (removedIds.length) {
      this._trigger('remove', {
        items: removedIds,
        oldData: removedItems
      }, senderId);
    }
  }
}; // copy subscription functionality from DataSet


DataView.prototype.on = DataSet_1.prototype.on;
DataView.prototype.off = DataSet_1.prototype.off;
DataView.prototype._trigger = DataSet_1.prototype._trigger; // TODO: make these functions deprecated (replaced with `on` and `off` since version 0.5)

DataView.prototype.subscribe = DataView.prototype.on;
DataView.prototype.unsubscribe = DataView.prototype.off;
var _DataView = DataView;
var DataSet$1 = DataSet_1;
var DataView$1 = _DataView;
var Queue$1 = Queue_1;
var visData = {
  DataSet: DataSet$1,
  DataView: DataView$1,
  Queue: Queue$1
};

/**
 * Expose `Emitter`.
 */
var emitterComponent = Emitter;
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks[event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */


Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/**
 * @prototype Point3d
 * @param {number} [x]
 * @param {number} [y]
 * @param {number} [z]
 */
function Point3d(x, y, z) {
  this.x = x !== undefined ? x : 0;
  this.y = y !== undefined ? y : 0;
  this.z = z !== undefined ? z : 0;
}
/**
 * Subtract the two provided points, returns a-b
 * @param {Point3d} a
 * @param {Point3d} b
 * @return {Point3d} a-b
 */


Point3d.subtract = function (a, b) {
  var sub = new Point3d();
  sub.x = a.x - b.x;
  sub.y = a.y - b.y;
  sub.z = a.z - b.z;
  return sub;
};
/**
 * Add the two provided points, returns a+b
 * @param {Point3d} a
 * @param {Point3d} b
 * @return {Point3d} a+b
 */


Point3d.add = function (a, b) {
  var sum = new Point3d();
  sum.x = a.x + b.x;
  sum.y = a.y + b.y;
  sum.z = a.z + b.z;
  return sum;
};
/**
 * Calculate the average of two 3d points
 * @param {Point3d} a
 * @param {Point3d} b
 * @return {Point3d} The average, (a+b)/2
 */


Point3d.avg = function (a, b) {
  return new Point3d((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
};
/**
 * Calculate the cross product of the two provided points, returns axb
 * Documentation: http://en.wikipedia.org/wiki/Cross_product
 * @param {Point3d} a
 * @param {Point3d} b
 * @return {Point3d} cross product axb
 */


Point3d.crossProduct = function (a, b) {
  var crossproduct = new Point3d();
  crossproduct.x = a.y * b.z - a.z * b.y;
  crossproduct.y = a.z * b.x - a.x * b.z;
  crossproduct.z = a.x * b.y - a.y * b.x;
  return crossproduct;
};
/**
 * Rtrieve the length of the vector (or the distance from this point to the origin
 * @return {number}  length
 */


Point3d.prototype.length = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
};

var Point3d_1 = Point3d;

/**
 * @prototype Point2d
 * @param {number} [x]
 * @param {number} [y]
 */
function Point2d(x, y) {
  this.x = x !== undefined ? x : 0;
  this.y = y !== undefined ? y : 0;
}

var Point2d_1 = Point2d;

/**
 * An html slider control with start/stop/prev/next buttons
 *
 * @constructor Slider
 * @param {Element} container  The element where the slider will be created
 * @param {Object} options   Available options:
 *                 {boolean} visible   If true (default) the
 *                           slider is visible.
 */

function Slider(container, options) {
  if (container === undefined) {
    throw new Error('No container element defined');
  }

  this.container = container;
  this.visible = options && options.visible != undefined ? options.visible : true;

  if (this.visible) {
    this.frame = document.createElement('DIV'); //this.frame.style.backgroundColor = '#E5E5E5';

    this.frame.style.width = '100%';
    this.frame.style.position = 'relative';
    this.container.appendChild(this.frame);
    this.frame.prev = document.createElement('INPUT');
    this.frame.prev.type = 'BUTTON';
    this.frame.prev.value = 'Prev';
    this.frame.appendChild(this.frame.prev);
    this.frame.play = document.createElement('INPUT');
    this.frame.play.type = 'BUTTON';
    this.frame.play.value = 'Play';
    this.frame.appendChild(this.frame.play);
    this.frame.next = document.createElement('INPUT');
    this.frame.next.type = 'BUTTON';
    this.frame.next.value = 'Next';
    this.frame.appendChild(this.frame.next);
    this.frame.bar = document.createElement('INPUT');
    this.frame.bar.type = 'BUTTON';
    this.frame.bar.style.position = 'absolute';
    this.frame.bar.style.border = '1px solid red';
    this.frame.bar.style.width = '100px';
    this.frame.bar.style.height = '6px';
    this.frame.bar.style.borderRadius = '2px';
    this.frame.bar.style.MozBorderRadius = '2px';
    this.frame.bar.style.border = '1px solid #7F7F7F';
    this.frame.bar.style.backgroundColor = '#E5E5E5';
    this.frame.appendChild(this.frame.bar);
    this.frame.slide = document.createElement('INPUT');
    this.frame.slide.type = 'BUTTON';
    this.frame.slide.style.margin = '0px';
    this.frame.slide.value = ' ';
    this.frame.slide.style.position = 'relative';
    this.frame.slide.style.left = '-100px';
    this.frame.appendChild(this.frame.slide); // create events

    var me = this;

    this.frame.slide.onmousedown = function (event) {
      me._onMouseDown(event);
    };

    this.frame.prev.onclick = function (event) {
      me.prev(event);
    };

    this.frame.play.onclick = function (event) {
      me.togglePlay(event);
    };

    this.frame.next.onclick = function (event) {
      me.next(event);
    };
  }

  this.onChangeCallback = undefined;
  this.values = [];
  this.index = undefined;
  this.playTimeout = undefined;
  this.playInterval = 1000; // milliseconds

  this.playLoop = true;
}
/**
 * Select the previous index
 */


Slider.prototype.prev = function () {
  var index = this.getIndex();

  if (index > 0) {
    index--;
    this.setIndex(index);
  }
};
/**
 * Select the next index
 */


Slider.prototype.next = function () {
  var index = this.getIndex();

  if (index < this.values.length - 1) {
    index++;
    this.setIndex(index);
  }
};
/**
 * Select the next index
 */


Slider.prototype.playNext = function () {
  var start = new Date();
  var index = this.getIndex();

  if (index < this.values.length - 1) {
    index++;
    this.setIndex(index);
  } else if (this.playLoop) {
    // jump to the start
    index = 0;
    this.setIndex(index);
  }

  var end = new Date();
  var diff = end - start; // calculate how much time it to to set the index and to execute the callback
  // function.

  var interval = Math.max(this.playInterval - diff, 0); // document.title = diff // TODO: cleanup

  var me = this;
  this.playTimeout = setTimeout(function () {
    me.playNext();
  }, interval);
};
/**
 * Toggle start or stop playing
 */


Slider.prototype.togglePlay = function () {
  if (this.playTimeout === undefined) {
    this.play();
  } else {
    this.stop();
  }
};
/**
 * Start playing
 */


Slider.prototype.play = function () {
  // Test whether already playing
  if (this.playTimeout) return;
  this.playNext();

  if (this.frame) {
    this.frame.play.value = 'Stop';
  }
};
/**
 * Stop playing
 */


Slider.prototype.stop = function () {
  clearInterval(this.playTimeout);
  this.playTimeout = undefined;

  if (this.frame) {
    this.frame.play.value = 'Play';
  }
};
/**
 * Set a callback function which will be triggered when the value of the
 * slider bar has changed.
 *
 * @param {function} callback
 */


Slider.prototype.setOnChangeCallback = function (callback) {
  this.onChangeCallback = callback;
};
/**
 * Set the interval for playing the list
 * @param {number} interval   The interval in milliseconds
 */


Slider.prototype.setPlayInterval = function (interval) {
  this.playInterval = interval;
};
/**
 * Retrieve the current play interval
 * @return {number} interval   The interval in milliseconds
 */


Slider.prototype.getPlayInterval = function () {
  return this.playInterval;
};
/**
 * Set looping on or off
 * @param {boolean} doLoop  If true, the slider will jump to the start when
 *               the end is passed, and will jump to the end
 *               when the start is passed.
 *
 */


Slider.prototype.setPlayLoop = function (doLoop) {
  this.playLoop = doLoop;
};
/**
 * Execute the onchange callback function
 */


Slider.prototype.onChange = function () {
  if (this.onChangeCallback !== undefined) {
    this.onChangeCallback();
  }
};
/**
 * redraw the slider on the correct place
 */


Slider.prototype.redraw = function () {
  if (this.frame) {
    // resize the bar
    this.frame.bar.style.top = this.frame.clientHeight / 2 - this.frame.bar.offsetHeight / 2 + 'px';
    this.frame.bar.style.width = this.frame.clientWidth - this.frame.prev.clientWidth - this.frame.play.clientWidth - this.frame.next.clientWidth - 30 + 'px'; // position the slider button

    var left = this.indexToLeft(this.index);
    this.frame.slide.style.left = left + 'px';
  }
};
/**
 * Set the list with values for the slider
 * @param {Array} values   A javascript array with values (any type)
 */


Slider.prototype.setValues = function (values) {
  this.values = values;
  if (this.values.length > 0) this.setIndex(0);else this.index = undefined;
};
/**
 * Select a value by its index
 * @param {number} index
 */


Slider.prototype.setIndex = function (index) {
  if (index < this.values.length) {
    this.index = index;
    this.redraw();
    this.onChange();
  } else {
    throw new Error('Index out of range');
  }
};
/**
 * retrieve the index of the currently selected vaue
 * @return {number} index
 */


Slider.prototype.getIndex = function () {
  return this.index;
};
/**
 * retrieve the currently selected value
 * @return {*} value
 */


Slider.prototype.get = function () {
  return this.values[this.index];
};

Slider.prototype._onMouseDown = function (event) {
  // only react on left mouse button down
  var leftButtonDown = event.which ? event.which === 1 : event.button === 1;
  if (!leftButtonDown) return;
  this.startClientX = event.clientX;
  this.startSlideX = parseFloat(this.frame.slide.style.left);
  this.frame.style.cursor = 'move'; // add event listeners to handle moving the contents
  // we store the function onmousemove and onmouseup in the graph, so we can
  // remove the eventlisteners lateron in the function mouseUp()

  var me = this;

  this.onmousemove = function (event) {
    me._onMouseMove(event);
  };

  this.onmouseup = function (event) {
    me._onMouseUp(event);
  };

  util.addEventListener(document, 'mousemove', this.onmousemove);
  util.addEventListener(document, 'mouseup', this.onmouseup);
  util.preventDefault(event);
};

Slider.prototype.leftToIndex = function (left) {
  var width = parseFloat(this.frame.bar.style.width) - this.frame.slide.clientWidth - 10;
  var x = left - 3;
  var index = Math.round(x / width * (this.values.length - 1));
  if (index < 0) index = 0;
  if (index > this.values.length - 1) index = this.values.length - 1;
  return index;
};

Slider.prototype.indexToLeft = function (index) {
  var width = parseFloat(this.frame.bar.style.width) - this.frame.slide.clientWidth - 10;
  var x = index / (this.values.length - 1) * width;
  var left = x + 3;
  return left;
};

Slider.prototype._onMouseMove = function (event) {
  var diff = event.clientX - this.startClientX;
  var x = this.startSlideX + diff;
  var index = this.leftToIndex(x);
  this.setIndex(index);
  util.preventDefault();
};

Slider.prototype._onMouseUp = function (event) {
  // eslint-disable-line no-unused-vars
  this.frame.style.cursor = 'auto'; // remove event listeners

  util.removeEventListener(document, 'mousemove', this.onmousemove);
  util.removeEventListener(document, 'mouseup', this.onmouseup);
  util.preventDefault();
};

var Slider_1 = Slider;

/**
 * @prototype StepNumber
 * The class StepNumber is an iterator for Numbers. You provide a start and end
 * value, and a best step size. StepNumber itself rounds to fixed values and
 * a finds the step that best fits the provided step.
 *
 * If prettyStep is true, the step size is chosen as close as possible to the
 * provided step, but being a round value like 1, 2, 5, 10, 20, 50, ....
 *
 * Example usage:
 *   var step = new StepNumber(0, 10, 2.5, true);
 *   step.start();
 *   while (!step.end()) {
 *   alert(step.getCurrent());
 *   step.next();
 *   }
 *
 * Version: 1.0
 *
 * @param {number} start     The start value
 * @param {number} end     The end value
 * @param {number} step    Optional. Step size. Must be a positive value.
 * @param {boolean} prettyStep Optional. If true, the step size is rounded
 *               To a pretty step size (like 1, 2, 5, 10, 20, 50, ...)
 */
function StepNumber(start, end, step, prettyStep) {
  // set default values
  this._start = 0;
  this._end = 0;
  this._step = 1;
  this.prettyStep = true;
  this.precision = 5;
  this._current = 0;
  this.setRange(start, end, step, prettyStep);
}
/**
 * Check for input values, to prevent disasters from happening
 *
 * Source: http://stackoverflow.com/a/1830844
 *
 * @param {string} n
 * @returns {boolean}
 */


StepNumber.prototype.isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
/**
 * Set a new range: start, end and step.
 *
 * @param {number} start     The start value
 * @param {number} end     The end value
 * @param {number} step    Optional. Step size. Must be a positive value.
 * @param {boolean} prettyStep Optional. If true, the step size is rounded
 *               To a pretty step size (like 1, 2, 5, 10, 20, 50, ...)
 */


StepNumber.prototype.setRange = function (start, end, step, prettyStep) {
  if (!this.isNumeric(start)) {
    throw new Error('Parameter \'start\' is not numeric; value: ' + start);
  }

  if (!this.isNumeric(end)) {
    throw new Error('Parameter \'end\' is not numeric; value: ' + start);
  }

  if (!this.isNumeric(step)) {
    throw new Error('Parameter \'step\' is not numeric; value: ' + start);
  }

  this._start = start ? start : 0;
  this._end = end ? end : 0;
  this.setStep(step, prettyStep);
};
/**
 * Set a new step size
 * @param {number} step    New step size. Must be a positive value
 * @param {boolean} prettyStep Optional. If true, the provided step is rounded
 *               to a pretty step size (like 1, 2, 5, 10, 20, 50, ...)
 */


StepNumber.prototype.setStep = function (step, prettyStep) {
  if (step === undefined || step <= 0) return;
  if (prettyStep !== undefined) this.prettyStep = prettyStep;
  if (this.prettyStep === true) this._step = StepNumber.calculatePrettyStep(step);else this._step = step;
};
/**
 * Calculate a nice step size, closest to the desired step size.
 * Returns a value in one of the ranges 1*10^n, 2*10^n, or 5*10^n, where n is an
 * integer Number. For example 1, 2, 5, 10, 20, 50, etc...
 * @param {number}  step  Desired step size
 * @return {number}     Nice step size
 */


StepNumber.calculatePrettyStep = function (step) {
  var log10 = function log10(x) {
    return Math.log(x) / Math.LN10;
  }; // try three steps (multiple of 1, 2, or 5


  var step1 = Math.pow(10, Math.round(log10(step))),
      step2 = 2 * Math.pow(10, Math.round(log10(step / 2))),
      step5 = 5 * Math.pow(10, Math.round(log10(step / 5))); // choose the best step (closest to minimum step)

  var prettyStep = step1;
  if (Math.abs(step2 - step) <= Math.abs(prettyStep - step)) prettyStep = step2;
  if (Math.abs(step5 - step) <= Math.abs(prettyStep - step)) prettyStep = step5; // for safety

  if (prettyStep <= 0) {
    prettyStep = 1;
  }

  return prettyStep;
};
/**
 * returns the current value of the step
 * @return {number} current value
 */


StepNumber.prototype.getCurrent = function () {
  return parseFloat(this._current.toPrecision(this.precision));
};
/**
 * returns the current step size
 * @return {number} current step size
 */


StepNumber.prototype.getStep = function () {
  return this._step;
};
/**
 * Set the current to its starting value.
 *
 * By default, this will be the largest value smaller than start, which
 * is a multiple of the step size.
 *
 * Parameters checkFirst is optional, default false.
 * If set to true, move the current value one step if smaller than start.
 *
 * @param {boolean} [checkFirst=false]
 */


StepNumber.prototype.start = function (checkFirst) {
  if (checkFirst === undefined) {
    checkFirst = false;
  }

  this._current = this._start - this._start % this._step;

  if (checkFirst) {
    if (this.getCurrent() < this._start) {
      this.next();
    }
  }
};
/**
 * Do a step, add the step size to the current value
 */


StepNumber.prototype.next = function () {
  this._current += this._step;
};
/**
 * Returns true whether the end is reached
 * @return {boolean}  True if the current value has passed the end value.
 */


StepNumber.prototype.end = function () {
  return this._current > this._end;
};

var StepNumber_1 = StepNumber;

function _typeof$2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$2 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$2(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * The camera is mounted on a (virtual) camera arm. The camera arm can rotate
 * The camera is always looking in the direction of the origin of the arm.
 * This way, the camera always rotates around one fixed point, the location
 * of the camera arm.
 *
 * Documentation:
 *   http://en.wikipedia.org/wiki/3D_projection
 * @class Camera
 */

function Camera() {
  this.armLocation = new Point3d_1();
  this.armRotation = {};
  this.armRotation.horizontal = 0;
  this.armRotation.vertical = 0;
  this.armLength = 1.7;
  this.cameraOffset = new Point3d_1();
  this.offsetMultiplier = 0.6;
  this.cameraLocation = new Point3d_1();
  this.cameraRotation = new Point3d_1(0.5 * Math.PI, 0, 0);
  this.calculateCameraOrientation();
}
/**
 * Set offset camera in camera coordinates
 * @param {number} x offset by camera horisontal
 * @param {number} y offset by camera vertical
 */


Camera.prototype.setOffset = function (x, y) {
  var abs = Math.abs,
      sign = Math.sign,
      mul = this.offsetMultiplier,
      border = this.armLength * mul;

  if (abs(x) > border) {
    x = sign(x) * border;
  }

  if (abs(y) > border) {
    y = sign(y) * border;
  }

  this.cameraOffset.x = x;
  this.cameraOffset.y = y;
  this.calculateCameraOrientation();
};
/**
 * Get camera offset by horizontal and vertical
 * @returns {number}
 */


Camera.prototype.getOffset = function () {
  return this.cameraOffset;
};
/**
 * Set the location (origin) of the arm
 * @param {number} x  Normalized value of x
 * @param {number} y  Normalized value of y
 * @param {number} z  Normalized value of z
 */


Camera.prototype.setArmLocation = function (x, y, z) {
  this.armLocation.x = x;
  this.armLocation.y = y;
  this.armLocation.z = z;
  this.calculateCameraOrientation();
};
/**
 * Set the rotation of the camera arm
 * @param {number} horizontal   The horizontal rotation, between 0 and 2*PI.
 *                Optional, can be left undefined.
 * @param {number} vertical   The vertical rotation, between 0 and 0.5*PI
 *                if vertical=0.5*PI, the graph is shown from the
 *                top. Optional, can be left undefined.
 */


Camera.prototype.setArmRotation = function (horizontal, vertical) {
  if (horizontal !== undefined) {
    this.armRotation.horizontal = horizontal;
  }

  if (vertical !== undefined) {
    this.armRotation.vertical = vertical;
    if (this.armRotation.vertical < 0) this.armRotation.vertical = 0;
    if (this.armRotation.vertical > 0.5 * Math.PI) this.armRotation.vertical = 0.5 * Math.PI;
  }

  if (horizontal !== undefined || vertical !== undefined) {
    this.calculateCameraOrientation();
  }
};
/**
 * Retrieve the current arm rotation
 * @return {object}   An object with parameters horizontal and vertical
 */


Camera.prototype.getArmRotation = function () {
  var rot = {};
  rot.horizontal = this.armRotation.horizontal;
  rot.vertical = this.armRotation.vertical;
  return rot;
};
/**
 * Set the (normalized) length of the camera arm.
 * @param {number} length A length between 0.71 and 5.0
 */


Camera.prototype.setArmLength = function (length) {
  if (length === undefined) return;
  this.armLength = length; // Radius must be larger than the corner of the graph,
  // which has a distance of sqrt(0.5^2+0.5^2) = 0.71 from the center of the
  // graph

  if (this.armLength < 0.71) this.armLength = 0.71;
  if (this.armLength > 5.0) this.armLength = 5.0;
  this.setOffset(this.cameraOffset.x, this.cameraOffset.y);
  this.calculateCameraOrientation();
};
/**
 * Retrieve the arm length
 * @return {number} length
 */


Camera.prototype.getArmLength = function () {
  return this.armLength;
};
/**
 * Retrieve the camera location
 * @return {Point3d} cameraLocation
 */


Camera.prototype.getCameraLocation = function () {
  return this.cameraLocation;
};
/**
 * Retrieve the camera rotation
 * @return {Point3d} cameraRotation
 */


Camera.prototype.getCameraRotation = function () {
  return this.cameraRotation;
};
/**
 * Calculate the location and rotation of the camera based on the
 * position and orientation of the camera arm
 */


Camera.prototype.calculateCameraOrientation = function () {
  // calculate location of the camera
  this.cameraLocation.x = this.armLocation.x - this.armLength * Math.sin(this.armRotation.horizontal) * Math.cos(this.armRotation.vertical);
  this.cameraLocation.y = this.armLocation.y - this.armLength * Math.cos(this.armRotation.horizontal) * Math.cos(this.armRotation.vertical);
  this.cameraLocation.z = this.armLocation.z + this.armLength * Math.sin(this.armRotation.vertical); // calculate rotation of the camera

  this.cameraRotation.x = Math.PI / 2 - this.armRotation.vertical;
  this.cameraRotation.y = 0;
  this.cameraRotation.z = -this.armRotation.horizontal;
  var xa = this.cameraRotation.x;
  var za = this.cameraRotation.z;
  var dx = this.cameraOffset.x;
  var dy = this.cameraOffset.y;
  var sin = Math.sin,
      cos = Math.cos;
  this.cameraLocation.x = this.cameraLocation.x + dx * cos(za) + dy * -sin(za) * cos(xa);
  this.cameraLocation.y = this.cameraLocation.y + dx * sin(za) + dy * cos(za) * cos(xa);
  this.cameraLocation.z = this.cameraLocation.z + dy * sin(xa);
};

var Camera_1 = Camera;

// This modules handles the options for Graph3d.
//
////////////////////////////////////////////////////////////////////////////////
// enumerate the available styles

var STYLE = {
  BAR: 0,
  BARCOLOR: 1,
  BARSIZE: 2,
  DOT: 3,
  DOTLINE: 4,
  DOTCOLOR: 5,
  DOTSIZE: 6,
  GRID: 7,
  LINE: 8,
  SURFACE: 9
}; // The string representations of the styles

var STYLENAME = {
  'dot': STYLE.DOT,
  'dot-line': STYLE.DOTLINE,
  'dot-color': STYLE.DOTCOLOR,
  'dot-size': STYLE.DOTSIZE,
  'line': STYLE.LINE,
  'grid': STYLE.GRID,
  'surface': STYLE.SURFACE,
  'bar': STYLE.BAR,
  'bar-color': STYLE.BARCOLOR,
  'bar-size': STYLE.BARSIZE
};
/**
 * Field names in the options hash which are of relevance to the user.
 *
 * Specifically, these are the fields which require no special handling,
 * and can be directly copied over.
 */

var OPTIONKEYS = ['width', 'height', 'filterLabel', 'legendLabel', 'xLabel', 'yLabel', 'zLabel', 'xValueLabel', 'yValueLabel', 'zValueLabel', 'showXAxis', 'showYAxis', 'showZAxis', 'showGrid', 'showPerspective', 'showShadow', 'keepAspectRatio', 'verticalRatio', 'dotSizeRatio', 'dotSizeMinFraction', 'dotSizeMaxFraction', 'showAnimationControls', 'animationInterval', 'animationPreload', 'animationAutoStart', 'axisColor', 'gridColor', 'xCenter', 'yCenter', 'zoomable', 'ctrlToZoom'];
/**
 * Field names in the options hash which are of relevance to the user.
 *
 * Same as OPTIONKEYS, but internally these fields are stored with 
 * prefix 'default' in the name.
 */

var PREFIXEDOPTIONKEYS = ['xBarWidth', 'yBarWidth', 'valueMin', 'valueMax', 'xMin', 'xMax', 'xStep', 'yMin', 'yMax', 'yStep', 'zMin', 'zMax', 'zStep']; // Placeholder for DEFAULTS reference

var DEFAULTS = undefined;
/**
 * Check if given hash is empty.
 *
 * Source: http://stackoverflow.com/a/679937
 *
 * @param {object} obj
 * @returns {boolean}
 */

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
}
/**
 * Make first letter of parameter upper case.
 *
 * Source: http://stackoverflow.com/a/1026087
 *
 * @param {string} str
 * @returns {string}
 */


function capitalize(str) {
  if (str === undefined || str === "" || typeof str != "string") {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Add a prefix to a field name, taking style guide into account
 *
 * @param {string} prefix
 * @param {string} fieldName
 * @returns {string}
 */


function prefixFieldName(prefix, fieldName) {
  if (prefix === undefined || prefix === "") {
    return fieldName;
  }

  return prefix + capitalize(fieldName);
}
/**
 * Forcibly copy fields from src to dst in a controlled manner.
 *
 * A given field in dst will always be overwitten. If this field
 * is undefined or not present in src, the field in dst will 
 * be explicitly set to undefined.
 * 
 * The intention here is to be able to reset all option fields.
 * 
 * Only the fields mentioned in array 'fields' will be handled.
 *
 * @param {object} src
 * @param {object} dst
 * @param {array<string>} fields array with names of fields to copy
 * @param {string} [prefix] prefix to use for the target fields.
 */


function forceCopy(src, dst, fields, prefix) {
  var srcKey;
  var dstKey;

  for (var i = 0; i < fields.length; ++i) {
    srcKey = fields[i];
    dstKey = prefixFieldName(prefix, srcKey);
    dst[dstKey] = src[srcKey];
  }
}
/**
 * Copy fields from src to dst in a safe and controlled manner.
 *
 * Only the fields mentioned in array 'fields' will be copied over,
 * and only if these are actually defined.
 *
 * @param {object} src
 * @param {object} dst
 * @param {array<string>} fields array with names of fields to copy
 * @param {string} [prefix] prefix to use for the target fields.
 */


function safeCopy(src, dst, fields, prefix) {
  var srcKey;
  var dstKey;

  for (var i = 0; i < fields.length; ++i) {
    srcKey = fields[i];
    if (src[srcKey] === undefined) continue;
    dstKey = prefixFieldName(prefix, srcKey);
    dst[dstKey] = src[srcKey];
  }
}
/**
 * Initialize dst with the values in src.
 *
 * src is the hash with the default values. 
 * A reference DEFAULTS to this hash is stored locally for 
 * further handling.
 *
 * For now, dst is assumed to be a Graph3d instance.
 * @param {object} src
 * @param {object} dst
 */


function setDefaults(src, dst) {
  if (src === undefined || isEmpty(src)) {
    throw new Error('No DEFAULTS passed');
  }

  if (dst === undefined) {
    throw new Error('No dst passed');
  } // Remember defaults for future reference


  DEFAULTS = src; // Handle the defaults which can be simply copied over

  forceCopy(src, dst, OPTIONKEYS);
  forceCopy(src, dst, PREFIXEDOPTIONKEYS, 'default'); // Handle the more complex ('special') fields

  setSpecialSettings(src, dst); // Following are internal fields, not part of the user settings

  dst.margin = 10; // px

  dst.showGrayBottom = false; // TODO: this does not work correctly

  dst.showTooltip = false;
  dst.onclick_callback = null;
  dst.eye = new Point3d_1(0, 0, -1); // TODO: set eye.z about 3/4 of the width of the window?
}
/**
 *
 * @param {object} options
 * @param {object} dst
 */


function setOptions(options, dst) {
  if (options === undefined) {
    return;
  }

  if (dst === undefined) {
    throw new Error('No dst passed');
  }

  if (DEFAULTS === undefined || isEmpty(DEFAULTS)) {
    throw new Error('DEFAULTS not set for module Settings');
  } // Handle the parameters which can be simply copied over


  safeCopy(options, dst, OPTIONKEYS);
  safeCopy(options, dst, PREFIXEDOPTIONKEYS, 'default'); // Handle the more complex ('special') fields

  setSpecialSettings(options, dst);
}
/**
 * Special handling for certain parameters
 *
 * 'Special' here means: setting requires more than a simple copy
 *
 * @param {object} src
 * @param {object} dst
 */


function setSpecialSettings(src, dst) {
  if (src.backgroundColor !== undefined) {
    setBackgroundColor(src.backgroundColor, dst);
  }

  setDataColor(src.dataColor, dst);
  setStyle(src.style, dst);
  setShowLegend(src.showLegend, dst);
  setCameraPosition(src.cameraPosition, dst); // As special fields go, this is an easy one; just a translation of the name.
  // Can't use this.tooltip directly, because that field exists internally

  if (src.tooltip !== undefined) {
    dst.showTooltip = src.tooltip;
  }

  if (src.onclick != undefined) {
    dst.onclick_callback = src.onclick;
  }

  if (src.tooltipStyle !== undefined) {
    util.selectiveDeepExtend(['tooltipStyle'], dst, src);
  }
}
/**
 * Set the value of setting 'showLegend'
 *
 * This depends on the value of the style fields, so it must be called
 * after the style field has been initialized.
 *
 * @param {boolean} showLegend
 * @param {object} dst
 */


function setShowLegend(showLegend, dst) {
  if (showLegend === undefined) {
    // If the default was auto, make a choice for this field
    var isAutoByDefault = DEFAULTS.showLegend === undefined;

    if (isAutoByDefault) {
      // these styles default to having legends
      var isLegendGraphStyle = dst.style === STYLE.DOTCOLOR || dst.style === STYLE.DOTSIZE;
      dst.showLegend = isLegendGraphStyle;
    }
  } else {
    dst.showLegend = showLegend;
  }
}
/**
 * Retrieve the style index from given styleName
 * @param {string} styleName  Style name such as 'dot', 'grid', 'dot-line'
 * @return {number} styleNumber Enumeration value representing the style, or -1
 *                when not found
 */


function getStyleNumberByName(styleName) {
  var number = STYLENAME[styleName];

  if (number === undefined) {
    return -1;
  }

  return number;
}
/**
 * Check if given number is a valid style number.
 *
 * @param {string | number} style
 * @return {boolean} true if valid, false otherwise
 */


function checkStyleNumber(style) {
  var valid = false;

  for (var n in STYLE) {
    if (STYLE[n] === style) {
      valid = true;
      break;
    }
  }

  return valid;
}
/**
 *
 * @param {string | number} style
 * @param {Object} dst
 */


function setStyle(style, dst) {
  if (style === undefined) {
    return; // Nothing to do
  }

  var styleNumber;

  if (typeof style === 'string') {
    styleNumber = getStyleNumberByName(style);

    if (styleNumber === -1) {
      throw new Error('Style \'' + style + '\' is invalid');
    }
  } else {
    // Do a pedantic check on style number value
    if (!checkStyleNumber(style)) {
      throw new Error('Style \'' + style + '\' is invalid');
    }

    styleNumber = style;
  }

  dst.style = styleNumber;
}
/**
 * Set the background styling for the graph
 * @param {string | {fill: string, stroke: string, strokeWidth: string}} backgroundColor
 * @param {Object} dst
 */


function setBackgroundColor(backgroundColor, dst) {
  var fill = 'white';
  var stroke = 'gray';
  var strokeWidth = 1;

  if (typeof backgroundColor === 'string') {
    fill = backgroundColor;
    stroke = 'none';
    strokeWidth = 0;
  } else if (_typeof$2(backgroundColor) === 'object') {
    if (backgroundColor.fill !== undefined) fill = backgroundColor.fill;
    if (backgroundColor.stroke !== undefined) stroke = backgroundColor.stroke;
    if (backgroundColor.strokeWidth !== undefined) strokeWidth = backgroundColor.strokeWidth;
  } else {
    throw new Error('Unsupported type of backgroundColor');
  }

  dst.frame.style.backgroundColor = fill;
  dst.frame.style.borderColor = stroke;
  dst.frame.style.borderWidth = strokeWidth + 'px';
  dst.frame.style.borderStyle = 'solid';
}
/**
 *
 * @param {string | Object} dataColor
 * @param {Object} dst
 */


function setDataColor(dataColor, dst) {
  if (dataColor === undefined) {
    return; // Nothing to do
  }

  if (dst.dataColor === undefined) {
    dst.dataColor = {};
  }

  if (typeof dataColor === 'string') {
    dst.dataColor.fill = dataColor;
    dst.dataColor.stroke = dataColor;
  } else {
    if (dataColor.fill) {
      dst.dataColor.fill = dataColor.fill;
    }

    if (dataColor.stroke) {
      dst.dataColor.stroke = dataColor.stroke;
    }

    if (dataColor.strokeWidth !== undefined) {
      dst.dataColor.strokeWidth = dataColor.strokeWidth;
    }
  }
}
/**
 *
 * @param {Object} cameraPosition
 * @param {Object} dst
 */


function setCameraPosition(cameraPosition, dst) {
  var camPos = cameraPosition;

  if (camPos === undefined) {
    return;
  }

  if (dst.camera === undefined) {
    dst.camera = new Camera_1();
  }

  dst.camera.setArmRotation(camPos.horizontal, camPos.vertical);
  dst.camera.setArmLength(camPos.distance);
}

var STYLE_1 = STYLE;
var setDefaults_1 = setDefaults;
var setOptions_1 = setOptions;
var setCameraPosition_1 = setCameraPosition;
var Settings = {
  STYLE: STYLE_1,
  setDefaults: setDefaults_1,
  setOptions: setOptions_1,
  setCameraPosition: setCameraPosition_1
};

var errorFound = false;
var allOptions;
var printStyle = 'background: #FFeeee; color: #dd0000';
/**
 *  Used to validate options.
 */

var Validator =
/*#__PURE__*/
function () {
  /**
   * @ignore
   */
  function Validator() {
    _classCallCheck(this, Validator);
  }
  /**
   * Main function to be called
   * @param {Object} options
   * @param {Object} referenceOptions
   * @param {Object} subObject
   * @returns {boolean}
   * @static
   */


  _createClass(Validator, null, [{
    key: "validate",
    value: function validate(options, referenceOptions, subObject) {
      errorFound = false;
      allOptions = referenceOptions;
      var usedOptions = referenceOptions;

      if (subObject !== undefined) {
        usedOptions = referenceOptions[subObject];
      }

      Validator.parse(options, usedOptions, []);
      return errorFound;
    }
    /**
     * Will traverse an object recursively and check every value
     * @param {Object} options
     * @param {Object} referenceOptions
     * @param {array} path    | where to look for the actual option
     * @static
     */

  }, {
    key: "parse",
    value: function parse(options, referenceOptions, path) {
      for (var option in options) {
        if (options.hasOwnProperty(option)) {
          Validator.check(option, options, referenceOptions, path);
        }
      }
    }
    /**
     * Check every value. If the value is an object, call the parse function on that object.
     * @param {string} option
     * @param {Object} options
     * @param {Object} referenceOptions
     * @param {array} path    | where to look for the actual option
     * @static
     */

  }, {
    key: "check",
    value: function check(option, options, referenceOptions, path) {
      if (referenceOptions[option] === undefined && referenceOptions.__any__ === undefined) {
        Validator.getSuggestion(option, referenceOptions, path);
        return;
      }

      var referenceOption = option;
      var is_object = true;

      if (referenceOptions[option] === undefined && referenceOptions.__any__ !== undefined) {
        // NOTE: This only triggers if the __any__ is in the top level of the options object.
        //       THAT'S A REALLY BAD PLACE TO ALLOW IT!!!!
        // TODO: Examine if needed, remove if possible
        // __any__ is a wildcard. Any value is accepted and will be further analysed by reference.
        referenceOption = '__any__'; // if the any-subgroup is not a predefined object in the configurator,
        // we do not look deeper into the object.

        is_object = Validator.getType(options[option]) === 'object';
      }

      var refOptionObj = referenceOptions[referenceOption];

      if (is_object && refOptionObj.__type__ !== undefined) {
        refOptionObj = refOptionObj.__type__;
      }

      Validator.checkFields(option, options, referenceOptions, referenceOption, refOptionObj, path);
    }
    /**
     *
     * @param {string}  option           | the option property
     * @param {Object}  options          | The supplied options object
     * @param {Object}  referenceOptions | The reference options containing all options and their allowed formats
     * @param {string}  referenceOption  | Usually this is the same as option, except when handling an __any__ tag.
     * @param {string}  refOptionObj     | This is the type object from the reference options
     * @param {Array}   path             | where in the object is the option
     * @static
     */

  }, {
    key: "checkFields",
    value: function checkFields(option, options, referenceOptions, referenceOption, refOptionObj, path) {
      var log = function log(message) {
        console.log('%c' + message + Validator.printLocation(path, option), printStyle);
      };

      var optionType = Validator.getType(options[option]);
      var refOptionType = refOptionObj[optionType];

      if (refOptionType !== undefined) {
        // if the type is correct, we check if it is supposed to be one of a few select values
        if (Validator.getType(refOptionType) === 'array' && refOptionType.indexOf(options[option]) === -1) {
          log('Invalid option detected in "' + option + '".' + ' Allowed values are:' + Validator.print(refOptionType) + ' not "' + options[option] + '". ');
          errorFound = true;
        } else if (optionType === 'object' && referenceOption !== "__any__") {
          path = util.copyAndExtendArray(path, option);
          Validator.parse(options[option], referenceOptions[referenceOption], path);
        }
      } else if (refOptionObj['any'] === undefined) {
        // type of the field is incorrect and the field cannot be any
        log('Invalid type received for "' + option + '". Expected: ' + Validator.print(Object.keys(refOptionObj)) + '. Received [' + optionType + '] "' + options[option] + '"');
        errorFound = true;
      }
    }
    /**
     *
     * @param {Object|boolean|number|string|Array.<number>|Date|Node|Moment|undefined|null} object
     * @returns {string}
     * @static
     */

  }, {
    key: "getType",
    value: function getType(object) {
      var type = _typeof$2(object);

      if (type === 'object') {
        if (object === null) {
          return 'null';
        }

        if (object instanceof Boolean) {
          return 'boolean';
        }

        if (object instanceof Number) {
          return 'number';
        }

        if (object instanceof String) {
          return 'string';
        }

        if (Array.isArray(object)) {
          return 'array';
        }

        if (object instanceof Date) {
          return 'date';
        }

        if (object.nodeType !== undefined) {
          return 'dom';
        }

        if (object._isAMomentObject === true) {
          return 'moment';
        }

        return 'object';
      } else if (type === 'number') {
        return 'number';
      } else if (type === 'boolean') {
        return 'boolean';
      } else if (type === 'string') {
        return 'string';
      } else if (type === undefined) {
        return 'undefined';
      }

      return type;
    }
    /**
     * @param {string} option
     * @param {Object} options
     * @param {Array.<string>} path
     * @static
     */

  }, {
    key: "getSuggestion",
    value: function getSuggestion(option, options, path) {
      var localSearch = Validator.findInOptions(option, options, path, false);
      var globalSearch = Validator.findInOptions(option, allOptions, [], true);
      var localSearchThreshold = 8;
      var globalSearchThreshold = 4;
      var msg;

      if (localSearch.indexMatch !== undefined) {
        msg = ' in ' + Validator.printLocation(localSearch.path, option, '') + 'Perhaps it was incomplete? Did you mean: "' + localSearch.indexMatch + '"?\n\n';
      } else if (globalSearch.distance <= globalSearchThreshold && localSearch.distance > globalSearch.distance) {
        msg = ' in ' + Validator.printLocation(localSearch.path, option, '') + 'Perhaps it was misplaced? Matching option found at: ' + Validator.printLocation(globalSearch.path, globalSearch.closestMatch, '');
      } else if (localSearch.distance <= localSearchThreshold) {
        msg = '. Did you mean "' + localSearch.closestMatch + '"?' + Validator.printLocation(localSearch.path, option);
      } else {
        msg = '. Did you mean one of these: ' + Validator.print(Object.keys(options)) + Validator.printLocation(path, option);
      }

      console.log('%cUnknown option detected: "' + option + '"' + msg, printStyle);
      errorFound = true;
    }
    /**
     * traverse the options in search for a match.
     * @param {string} option
     * @param {Object} options
     * @param {Array} path    | where to look for the actual option
     * @param {boolean} [recursive=false]
     * @returns {{closestMatch: string, path: Array, distance: number}}
     * @static
     */

  }, {
    key: "findInOptions",
    value: function findInOptions(option, options, path) {
      var recursive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var min = 1e9;
      var closestMatch = '';
      var closestMatchPath = [];
      var lowerCaseOption = option.toLowerCase();
      var indexMatch = undefined;

      for (var op in options) {
        // eslint-disable-line guard-for-in
        var distance = void 0;

        if (options[op].__type__ !== undefined && recursive === true) {
          var result = Validator.findInOptions(option, options[op], util.copyAndExtendArray(path, op));

          if (min > result.distance) {
            closestMatch = result.closestMatch;
            closestMatchPath = result.path;
            min = result.distance;
            indexMatch = result.indexMatch;
          }
        } else {
          if (op.toLowerCase().indexOf(lowerCaseOption) !== -1) {
            indexMatch = op;
          }

          distance = Validator.levenshteinDistance(option, op);

          if (min > distance) {
            closestMatch = op;
            closestMatchPath = util.copyArray(path);
            min = distance;
          }
        }
      }

      return {
        closestMatch: closestMatch,
        path: closestMatchPath,
        distance: min,
        indexMatch: indexMatch
      };
    }
    /**
     * @param {Array.<string>} path
     * @param {Object} option
     * @param {string} prefix
     * @returns {String}
     * @static
     */

  }, {
    key: "printLocation",
    value: function printLocation(path, option) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Problem value found at: \n';
      var str = '\n\n' + prefix + 'options = {\n';

      for (var i = 0; i < path.length; i++) {
        for (var j = 0; j < i + 1; j++) {
          str += '  ';
        }

        str += path[i] + ': {\n';
      }

      for (var _j = 0; _j < path.length + 1; _j++) {
        str += '  ';
      }

      str += option + '\n';

      for (var _i = 0; _i < path.length + 1; _i++) {
        for (var _j2 = 0; _j2 < path.length - _i; _j2++) {
          str += '  ';
        }

        str += '}\n';
      }

      return str + '\n\n';
    }
    /**
     * @param {Object} options
     * @returns {String}
     * @static
     */

  }, {
    key: "print",
    value: function print(options) {
      return JSON.stringify(options).replace(/(\")|(\[)|(\])|(,"__type__")/g, "").replace(/(\,)/g, ', ');
    }
    /**
     *  Compute the edit distance between the two given strings
     * http://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance#JavaScript
     *
     * Copyright (c) 2011 Andrei Mackenzie
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     *
     * @param {string} a
     * @param {string} b
     * @returns {Array.<Array.<number>>}}
     * @static
     */

  }, {
    key: "levenshteinDistance",
    value: function levenshteinDistance(a, b) {
      if (a.length === 0) return b.length;
      if (b.length === 0) return a.length;
      var matrix = []; // increment along the first column of each row

      var i;

      for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
      } // increment each column in the first row


      var j;

      for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
      } // Fill in the rest of the matrix


      for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) == a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
            Math.min(matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1)); // deletion
          }
        }
      }

      return matrix[b.length][a.length];
    }
  }]);

  return Validator;
}();

var Validator$1 = /*#__PURE__*/Object.freeze({
  Validator: Validator,
  printStyle: printStyle
});

/**
 * This object contains all possible options. It will check if the types are correct, if required if the option is one
 * of the allowed values.
 *
 * __any__ means that the name of the property does not matter.
 * __type__ is a required field for all objects and contains the allowed types of all objects
 */
var string = 'string';
var bool = 'boolean';
var number = 'number';
var object = 'object'; // should only be in a __type__ property
// Following not used here, but useful for reference
//let array    = 'array';
//let dom      = 'dom';
//let any      = 'any';

var colorOptions = {
  fill: {
    string: string
  },
  stroke: {
    string: string
  },
  strokeWidth: {
    number: number
  },
  __type__: {
    string: string,
    object: object,
    'undefined': 'undefined'
  }
};
/**
 * Order attempted to be alphabetical.
 *   - x/y/z-prefixes ignored in sorting
 *   - __type__ always at end
 *   - globals at end
 */

var allOptions$1 = {
  animationAutoStart: {
    boolean: bool,
    'undefined': 'undefined'
  },
  animationInterval: {
    number: number
  },
  animationPreload: {
    boolean: bool
  },
  axisColor: {
    string: string
  },
  backgroundColor: colorOptions,
  xBarWidth: {
    number: number,
    'undefined': 'undefined'
  },
  yBarWidth: {
    number: number,
    'undefined': 'undefined'
  },
  cameraPosition: {
    distance: {
      number: number
    },
    horizontal: {
      number: number
    },
    vertical: {
      number: number
    },
    __type__: {
      object: object
    }
  },
  zoomable: {
    boolean: bool
  },
  ctrlToZoom: {
    boolean: bool
  },
  xCenter: {
    string: string
  },
  yCenter: {
    string: string
  },
  dataColor: colorOptions,
  dotSizeMinFraction: {
    number: number
  },
  dotSizeMaxFraction: {
    number: number
  },
  dotSizeRatio: {
    number: number
  },
  filterLabel: {
    string: string
  },
  gridColor: {
    string: string
  },
  onclick: {
    'function': 'function'
  },
  keepAspectRatio: {
    boolean: bool
  },
  xLabel: {
    string: string
  },
  yLabel: {
    string: string
  },
  zLabel: {
    string: string
  },
  legendLabel: {
    string: string
  },
  xMin: {
    number: number,
    'undefined': 'undefined'
  },
  yMin: {
    number: number,
    'undefined': 'undefined'
  },
  zMin: {
    number: number,
    'undefined': 'undefined'
  },
  xMax: {
    number: number,
    'undefined': 'undefined'
  },
  yMax: {
    number: number,
    'undefined': 'undefined'
  },
  zMax: {
    number: number,
    'undefined': 'undefined'
  },
  showAnimationControls: {
    boolean: bool,
    'undefined': 'undefined'
  },
  showGrid: {
    boolean: bool
  },
  showLegend: {
    boolean: bool,
    'undefined': 'undefined'
  },
  showPerspective: {
    boolean: bool
  },
  showShadow: {
    boolean: bool
  },
  showXAxis: {
    boolean: bool
  },
  showYAxis: {
    boolean: bool
  },
  showZAxis: {
    boolean: bool
  },
  xStep: {
    number: number,
    'undefined': 'undefined'
  },
  yStep: {
    number: number,
    'undefined': 'undefined'
  },
  zStep: {
    number: number,
    'undefined': 'undefined'
  },
  style: {
    number: number,
    // TODO: either Graph3d.DEFAULT has string, or number allowed in documentation
    string: ['bar', 'bar-color', 'bar-size', 'dot', 'dot-line', 'dot-color', 'dot-size', 'line', 'grid', 'surface']
  },
  tooltip: {
    boolean: bool,
    'function': 'function'
  },
  tooltipStyle: {
    content: {
      color: {
        string: string
      },
      background: {
        string: string
      },
      border: {
        string: string
      },
      borderRadius: {
        string: string
      },
      boxShadow: {
        string: string
      },
      padding: {
        string: string
      },
      __type__: {
        object: object
      }
    },
    line: {
      borderLeft: {
        string: string
      },
      height: {
        string: string
      },
      width: {
        string: string
      },
      pointerEvents: {
        string: string
      },
      __type__: {
        object: object
      }
    },
    dot: {
      border: {
        string: string
      },
      borderRadius: {
        string: string
      },
      height: {
        string: string
      },
      width: {
        string: string
      },
      pointerEvents: {
        string: string
      },
      __type__: {
        object: object
      }
    },
    __type__: {
      object: object
    }
  },
  xValueLabel: {
    'function': 'function'
  },
  yValueLabel: {
    'function': 'function'
  },
  zValueLabel: {
    'function': 'function'
  },
  valueMax: {
    number: number,
    'undefined': 'undefined'
  },
  valueMin: {
    number: number,
    'undefined': 'undefined'
  },
  verticalRatio: {
    number: number
  },
  //globals :
  height: {
    string: string
  },
  width: {
    string: string
  },
  __type__: {
    object: object
  }
};

var options = /*#__PURE__*/Object.freeze({
  allOptions: allOptions$1
});

/**
 * @prototype Range
 *
 * Helper class to make working with related min and max values easier.
 *
 * The range is inclusive; a given value is considered part of the range if:
 *
 *    this.min <= value <= this.max
 */
function Range() {
  this.min = undefined;
  this.max = undefined;
}
/**
 * Adjust the range so that the passed value fits in it.
 *
 * If the value is outside of the current extremes, adjust
 * the min or max so that the value is within the range.
 *
 * @param {number} value Numeric value to fit in range
 */


Range.prototype.adjust = function (value) {
  if (value === undefined) return;

  if (this.min === undefined || this.min > value) {
    this.min = value;
  }

  if (this.max === undefined || this.max < value) {
    this.max = value;
  }
};
/**
 * Adjust the current range so that the passed range fits in it.
 *
 * @param {Range} range Range instance to fit in current instance
 */


Range.prototype.combine = function (range) {
  this.add(range.min);
  this.add(range.max);
};
/**
 * Expand the range by the given value
 *
 * min will be lowered by given value;
 * max will be raised by given value
 *
 * Shrinking by passing a negative value is allowed.
 *
 * @param {number} val Amount by which to expand or shrink current range with
 */


Range.prototype.expand = function (val) {
  if (val === undefined) {
    return;
  }

  var newMin = this.min - val;
  var newMax = this.max + val; // Note that following allows newMin === newMax.
  // This should be OK, since method expand() allows this also.

  if (newMin > newMax) {
    throw new Error('Passed expansion value makes range invalid');
  }

  this.min = newMin;
  this.max = newMax;
};
/**
 * Determine the full range width of current instance.
 *
 * @returns {num} The calculated width of this range
 */


Range.prototype.range = function () {
  return this.max - this.min;
};
/**
 * Determine the central point of current instance.
 *
 * @returns {number} the value in the middle of min and max
 */


Range.prototype.center = function () {
  return (this.min + this.max) / 2;
};

var Range_1 = Range;

var DataView$2 = visData.DataView;
/**
 * @class Filter
 *
 * @param {DataGroup} dataGroup the data group 
 * @param {number}  column             The index of the column to be filtered
 * @param {Graph3d} graph              The graph
 */

function Filter(dataGroup, column, graph) {
  this.dataGroup = dataGroup;
  this.column = column;
  this.graph = graph; // the parent graph

  this.index = undefined;
  this.value = undefined; // read all distinct values and select the first one

  this.values = dataGroup.getDistinctValues(this.column);

  if (this.values.length > 0) {
    this.selectValue(0);
  } // create an array with the filtered datapoints. this will be loaded afterwards


  this.dataPoints = [];
  this.loaded = false;
  this.onLoadCallback = undefined;

  if (graph.animationPreload) {
    this.loaded = false;
    this.loadInBackground();
  } else {
    this.loaded = true;
  }
}
/**
 * Return the label
 * @return {string} label
 */


Filter.prototype.isLoaded = function () {
  return this.loaded;
};
/**
 * Return the loaded progress
 * @return {number} percentage between 0 and 100
 */


Filter.prototype.getLoadedProgress = function () {
  var len = this.values.length;
  var i = 0;

  while (this.dataPoints[i]) {
    i++;
  }

  return Math.round(i / len * 100);
};
/**
 * Return the label
 * @return {string} label
 */


Filter.prototype.getLabel = function () {
  return this.graph.filterLabel;
};
/**
 * Return the columnIndex of the filter
 * @return {number} columnIndex
 */


Filter.prototype.getColumn = function () {
  return this.column;
};
/**
 * Return the currently selected value. Returns undefined if there is no selection
 * @return {*} value
 */


Filter.prototype.getSelectedValue = function () {
  if (this.index === undefined) return undefined;
  return this.values[this.index];
};
/**
 * Retrieve all values of the filter
 * @return {Array} values
 */


Filter.prototype.getValues = function () {
  return this.values;
};
/**
 * Retrieve one value of the filter
 * @param {number}  index
 * @return {*} value
 */


Filter.prototype.getValue = function (index) {
  if (index >= this.values.length) throw new Error('Index out of range');
  return this.values[index];
};
/**
 * Retrieve the (filtered) dataPoints for the currently selected filter index
 * @param {number} [index] (optional)
 * @return {Array} dataPoints
 */


Filter.prototype._getDataPoints = function (index) {
  if (index === undefined) index = this.index;
  if (index === undefined) return [];
  var dataPoints;

  if (this.dataPoints[index]) {
    dataPoints = this.dataPoints[index];
  } else {
    var f = {};
    f.column = this.column;
    f.value = this.values[index];
    var dataView = new DataView$2(this.dataGroup.getDataSet(), {
      filter: function filter(item) {
        return item[f.column] == f.value;
      }
    }).get();
    dataPoints = this.dataGroup._getDataPoints(dataView);
    this.dataPoints[index] = dataPoints;
  }

  return dataPoints;
};
/**
 * Set a callback function when the filter is fully loaded.
 *
 * @param {function} callback
 */


Filter.prototype.setOnLoadCallback = function (callback) {
  this.onLoadCallback = callback;
};
/**
 * Add a value to the list with available values for this filter
 * No double entries will be created.
 * @param {number} index
 */


Filter.prototype.selectValue = function (index) {
  if (index >= this.values.length) throw new Error('Index out of range');
  this.index = index;
  this.value = this.values[index];
};
/**
 * Load all filtered rows in the background one by one
 * Start this method without providing an index!
 *
 * @param {number} [index=0]
 */


Filter.prototype.loadInBackground = function (index) {
  if (index === undefined) index = 0;
  var frame = this.graph.frame;

  if (index < this.values.length) {
    // create a progress box
    if (frame.progress === undefined) {
      frame.progress = document.createElement('DIV');
      frame.progress.style.position = 'absolute';
      frame.progress.style.color = 'gray';
      frame.appendChild(frame.progress);
    }

    var progress = this.getLoadedProgress();
    frame.progress.innerHTML = 'Loading animation... ' + progress + '%'; // TODO: this is no nice solution...

    frame.progress.style.bottom = 60 + 'px'; // TODO: use height of slider

    frame.progress.style.left = 10 + 'px';
    var me = this;
    setTimeout(function () {
      me.loadInBackground(index + 1);
    }, 10);
    this.loaded = false;
  } else {
    this.loaded = true; // remove the progress box

    if (frame.progress !== undefined) {
      frame.removeChild(frame.progress);
      frame.progress = undefined;
    }

    if (this.onLoadCallback) this.onLoadCallback();
  }
};

var Filter_1 = Filter;

var DataSet$2 = visData.DataSet;
var DataView$3 = visData.DataView;
/**
 * Creates a container for all data of one specific 3D-graph.
 *
 * On construction, the container is totally empty; the data
 * needs to be initialized with method initializeData().
 * Failure to do so will result in the following exception begin thrown
 * on instantiation of Graph3D:
 *
 *     Error: Array, DataSet, or DataView expected
 *
 * @constructor DataGroup
 */

function DataGroup() {
  this.dataTable = null; // The original data table
}
/**
 * Initializes the instance from the passed data.
 *
 * Calculates minimum and maximum values and column index values.
 *
 * The graph3d instance is used internally to access the settings for
 * the given instance.
 * TODO: Pass settings only instead.
 *
 * @param {vis.Graph3d}  graph3d Reference to the calling Graph3D instance.
 * @param {Array | DataSet | DataView} rawData The data containing the items for
 *                                             the Graph.
 * @param {number}   style   Style Number
 * @returns {Array.<Object>}
 */


DataGroup.prototype.initializeData = function (graph3d, rawData, style) {
  if (rawData === undefined) return;

  if (Array.isArray(rawData)) {
    rawData = new DataSet$2(rawData);
  }

  var data;

  if (rawData instanceof DataSet$2 || rawData instanceof DataView$3) {
    data = rawData.get();
  } else {
    throw new Error('Array, DataSet, or DataView expected');
  }

  if (data.length == 0) return;
  this.style = style; // unsubscribe from the dataTable

  if (this.dataSet) {
    this.dataSet.off('*', this._onChange);
  }

  this.dataSet = rawData;
  this.dataTable = data; // subscribe to changes in the dataset

  var me = this;

  this._onChange = function () {
    graph3d.setData(me.dataSet);
  };

  this.dataSet.on('*', this._onChange); // determine the location of x,y,z,value,filter columns

  this.colX = 'x';
  this.colY = 'y';
  this.colZ = 'z';
  var withBars = graph3d.hasBars(style); // determine barWidth from data

  if (withBars) {
    if (graph3d.defaultXBarWidth !== undefined) {
      this.xBarWidth = graph3d.defaultXBarWidth;
    } else {
      this.xBarWidth = this.getSmallestDifference(data, this.colX) || 1;
    }

    if (graph3d.defaultYBarWidth !== undefined) {
      this.yBarWidth = graph3d.defaultYBarWidth;
    } else {
      this.yBarWidth = this.getSmallestDifference(data, this.colY) || 1;
    }
  } // calculate minima and maxima


  this._initializeRange(data, this.colX, graph3d, withBars);

  this._initializeRange(data, this.colY, graph3d, withBars);

  this._initializeRange(data, this.colZ, graph3d, false);

  if (data[0].hasOwnProperty('style')) {
    this.colValue = 'style';
    var valueRange = this.getColumnRange(data, this.colValue);

    this._setRangeDefaults(valueRange, graph3d.defaultValueMin, graph3d.defaultValueMax);

    this.valueRange = valueRange;
  } // Initialize data filter if a filter column is provided


  var table = this.getDataTable();

  if (table[0].hasOwnProperty('filter')) {
    if (this.dataFilter === undefined) {
      this.dataFilter = new Filter_1(this, 'filter', graph3d);
      this.dataFilter.setOnLoadCallback(function () {
        graph3d.redraw();
      });
    }
  }

  var dataPoints;

  if (this.dataFilter) {
    // apply filtering
    dataPoints = this.dataFilter._getDataPoints();
  } else {
    // no filtering. load all data
    dataPoints = this._getDataPoints(this.getDataTable());
  }

  return dataPoints;
};
/**
 * Collect the range settings for the given data column.
 *
 * This internal method is intended to make the range 
 * initalization more generic.
 *
 * TODO: if/when combined settings per axis defined, get rid of this.
 *
 * @private
 *
 * @param {'x'|'y'|'z'} column  The data column to process
 * @param {vis.Graph3d} graph3d Reference to the calling Graph3D instance;
 *                              required for access to settings
 * @returns {Object}
 */


DataGroup.prototype._collectRangeSettings = function (column, graph3d) {
  var index = ['x', 'y', 'z'].indexOf(column);

  if (index == -1) {
    throw new Error('Column \'' + column + '\' invalid');
  }

  var upper = column.toUpperCase();
  return {
    barWidth: this[column + 'BarWidth'],
    min: graph3d['default' + upper + 'Min'],
    max: graph3d['default' + upper + 'Max'],
    step: graph3d['default' + upper + 'Step'],
    range_label: column + 'Range',
    // Name of instance field to write to
    step_label: column + 'Step' // Name of instance field to write to

  };
};
/**
 * Initializes the settings per given column.
 *
 * TODO: if/when combined settings per axis defined, rewrite this.
 *
 * @private
 *
 * @param {DataSet | DataView} data     The data containing the items for the Graph
 * @param {'x'|'y'|'z'}        column   The data column to process
 * @param {vis.Graph3d}        graph3d  Reference to the calling Graph3D instance;
 *                                      required for access to settings
 * @param {boolean}            withBars True if initializing for bar graph
 */


DataGroup.prototype._initializeRange = function (data, column, graph3d, withBars) {
  var NUMSTEPS = 5;

  var settings = this._collectRangeSettings(column, graph3d);

  var range = this.getColumnRange(data, column);

  if (withBars && column != 'z') {
    // Safeguard for 'z'; it doesn't have a bar width
    range.expand(settings.barWidth / 2);
  }

  this._setRangeDefaults(range, settings.min, settings.max);

  this[settings.range_label] = range;
  this[settings.step_label] = settings.step !== undefined ? settings.step : range.range() / NUMSTEPS;
};
/**
 * Creates a list with all the different values in the data for the given column.
 *
 * If no data passed, use the internal data of this instance.
 *
 * @param {'x'|'y'|'z'}                column The data column to process
 * @param {DataSet|DataView|undefined} data   The data containing the items for the Graph
 *
 * @returns {Array} All distinct values in the given column data, sorted ascending.
 */


DataGroup.prototype.getDistinctValues = function (column, data) {
  if (data === undefined) {
    data = this.dataTable;
  }

  var values = [];

  for (var i = 0; i < data.length; i++) {
    var value = data[i][column] || 0;

    if (values.indexOf(value) === -1) {
      values.push(value);
    }
  }

  return values.sort(function (a, b) {
    return a - b;
  });
};
/**
 * Determine the smallest difference between the values for given
 * column in the passed data set.
 *
 * @param {DataSet|DataView|undefined} data   The data containing the items for the Graph
 * @param {'x'|'y'|'z'}                column The data column to process
 *
 * @returns {number|null} Smallest difference value or
 *                        null, if it can't be determined.
 */


DataGroup.prototype.getSmallestDifference = function (data, column) {
  var values = this.getDistinctValues(data, column); // Get all the distinct diffs
  // Array values is assumed to be sorted here

  var smallest_diff = null;

  for (var i = 1; i < values.length; i++) {
    var diff = values[i] - values[i - 1];

    if (smallest_diff == null || smallest_diff > diff) {
      smallest_diff = diff;
    }
  }

  return smallest_diff;
};
/**
 * Get the absolute min/max values for the passed data column.
 *
 * @param {DataSet|DataView|undefined} data   The data containing the items for the Graph
 * @param {'x'|'y'|'z'}                column The data column to process
 *
 * @returns {Range} A Range instance with min/max members properly set.
 */


DataGroup.prototype.getColumnRange = function (data, column) {
  var range = new Range_1(); // Adjust the range so that it covers all values in the passed data elements.

  for (var i = 0; i < data.length; i++) {
    var item = data[i][column];
    range.adjust(item);
  }

  return range;
};
/**
 * Determines the number of rows in the current data.
 *
 * @returns {number}
 */


DataGroup.prototype.getNumberOfRows = function () {
  return this.dataTable.length;
};
/**
 * Set default values for range
 *
 * The default values override the range values, if defined.
 *
 * Because it's possible that only defaultMin or defaultMax is set, it's better
 * to pass in a range already set with the min/max set from the data. Otherwise,
 * it's quite hard to process the min/max properly.
 *
 * @param {vis.Range} range
 * @param {number} [defaultMin=range.min]
 * @param {number} [defaultMax=range.max]
 * @private
 */


DataGroup.prototype._setRangeDefaults = function (range, defaultMin, defaultMax) {
  if (defaultMin !== undefined) {
    range.min = defaultMin;
  }

  if (defaultMax !== undefined) {
    range.max = defaultMax;
  } // This is the original way that the default min/max values were adjusted.
  // TODO: Perhaps it's better if an error is thrown if the values do not agree.
  //       But this will change the behaviour.


  if (range.max <= range.min) range.max = range.min + 1;
};

DataGroup.prototype.getDataTable = function () {
  return this.dataTable;
};

DataGroup.prototype.getDataSet = function () {
  return this.dataSet;
};
/**
 * Return all data values as a list of Point3d objects
 * @param {Array.<Object>} data
 * @returns {Array.<Object>}
 */


DataGroup.prototype.getDataPoints = function (data) {
  var dataPoints = [];

  for (var i = 0; i < data.length; i++) {
    var point = new Point3d_1();
    point.x = data[i][this.colX] || 0;
    point.y = data[i][this.colY] || 0;
    point.z = data[i][this.colZ] || 0;
    point.data = data[i];

    if (this.colValue !== undefined) {
      point.value = data[i][this.colValue] || 0;
    }

    var obj = {};
    obj.point = point;
    obj.bottom = new Point3d_1(point.x, point.y, this.zRange.min);
    obj.trans = undefined;
    obj.screen = undefined;
    dataPoints.push(obj);
  }

  return dataPoints;
};
/**
 * Copy all values from the data table to a matrix.
 *
 * The provided values are supposed to form a grid of (x,y) positions.
 * @param {Array.<Object>} data
 * @returns {Array.<Object>}
 * @private
 */


DataGroup.prototype.initDataAsMatrix = function (data) {
  // TODO: store the created matrix dataPoints in the filters instead of
  //       reloading each time.
  var x, y, i, obj; // create two lists with all present x and y values

  var dataX = this.getDistinctValues(this.colX, data);
  var dataY = this.getDistinctValues(this.colY, data);
  var dataPoints = this.getDataPoints(data); // create a grid, a 2d matrix, with all values.

  var dataMatrix = []; // temporary data matrix

  for (i = 0; i < dataPoints.length; i++) {
    obj = dataPoints[i]; // TODO: implement Array().indexOf() for Internet Explorer

    var xIndex = dataX.indexOf(obj.point.x);
    var yIndex = dataY.indexOf(obj.point.y);

    if (dataMatrix[xIndex] === undefined) {
      dataMatrix[xIndex] = [];
    }

    dataMatrix[xIndex][yIndex] = obj;
  } // fill in the pointers to the neighbors.


  for (x = 0; x < dataMatrix.length; x++) {
    for (y = 0; y < dataMatrix[x].length; y++) {
      if (dataMatrix[x][y]) {
        dataMatrix[x][y].pointRight = x < dataMatrix.length - 1 ? dataMatrix[x + 1][y] : undefined;
        dataMatrix[x][y].pointTop = y < dataMatrix[x].length - 1 ? dataMatrix[x][y + 1] : undefined;
        dataMatrix[x][y].pointCross = x < dataMatrix.length - 1 && y < dataMatrix[x].length - 1 ? dataMatrix[x + 1][y + 1] : undefined;
      }
    }
  }

  return dataPoints;
};
/**
 * Return common information, if present
 *
 * @returns {string}
 */


DataGroup.prototype.getInfo = function () {
  var dataFilter = this.dataFilter;
  if (!dataFilter) return undefined;
  return dataFilter.getLabel() + ': ' + dataFilter.getSelectedValue();
};
/**
 * Reload the data
 */


DataGroup.prototype.reload = function () {
  if (this.dataTable) {
    this.setData(this.dataTable);
  }
};
/**
 * Filter the data based on the current filter
 *
 * @param   {Array} data
 * @returns {Array} dataPoints Array with point objects which can be drawn on
 *                             screen
 */


DataGroup.prototype._getDataPoints = function (data) {
  var dataPoints = [];

  if (this.style === Settings.STYLE.GRID || this.style === Settings.STYLE.SURFACE) {
    dataPoints = this.initDataAsMatrix(data);
  } else {
    // 'dot', 'dot-line', etc.
    this._checkValueField(data);

    dataPoints = this.getDataPoints(data);

    if (this.style === Settings.STYLE.LINE) {
      // Add next member points for line drawing
      for (var i = 0; i < dataPoints.length; i++) {
        if (i > 0) {
          dataPoints[i - 1].pointNext = dataPoints[i];
        }
      }
    }
  }

  return dataPoints;
};
/**
 * Check if the state is consistent for the use of the value field.
 *
 * Throws if a problem is detected.
 *
 * @param {Array.<Object>} data
 * @private
 */


DataGroup.prototype._checkValueField = function (data) {
  var hasValueField = this.style === Settings.STYLE.BARCOLOR || this.style === Settings.STYLE.BARSIZE || this.style === Settings.STYLE.DOTCOLOR || this.style === Settings.STYLE.DOTSIZE;

  if (!hasValueField) {
    return; // No need to check further
  } // Following field must be present for the current graph style


  if (this.colValue === undefined) {
    throw new Error('Expected data to have ' + ' field \'style\' ' + ' for graph style \'' + this.style + '\'');
  } // The data must also contain this field.
  // Note that only first data element is checked.


  if (data[0][this.colValue] === undefined) {
    throw new Error('Expected data to have ' + ' field \'' + this.colValue + '\' ' + ' for graph style \'' + this.style + '\'');
  }
};

var DataGroup_1 = DataGroup;

var Validator$2 = Validator$1.Validator;
var printStyle$1 = Validator$1.printStyle;
var allOptions$2 = options.allOptions; /// enumerate the available styles

Graph3d.STYLE = Settings.STYLE;
/**
 * Following label is used in the settings to describe values which should be
 * determined by the code while running, from the current data and graph style.
 *
 * Using 'undefined' directly achieves the same thing, but this is more
 * descriptive by describing the intent.
 */

var autoByDefault = undefined;
/**
 * Default values for option settings.
 *
 * These are the values used when a Graph3d instance is initialized without
 * custom settings.
 *
 * If a field is not in this list, a default value of 'autoByDefault' is assumed,
 * which is just an alias for 'undefined'.
 */

Graph3d.DEFAULTS = {
  width: '400px',
  height: '400px',
  filterLabel: 'time',
  legendLabel: 'value',
  xLabel: 'x',
  yLabel: 'y',
  zLabel: 'z',
  xValueLabel: function xValueLabel(v) {
    return v;
  },
  yValueLabel: function yValueLabel(v) {
    return v;
  },
  zValueLabel: function zValueLabel(v) {
    return v;
  },
  showXAxis: true,
  showYAxis: true,
  showZAxis: true,
  showGrid: true,
  showPerspective: true,
  showShadow: false,
  keepAspectRatio: true,
  verticalRatio: 0.5,
  // 0.1 to 1.0, where 1.0 results in a 'cube'
  dotSizeRatio: 0.02,
  // size of the dots as a fraction of the graph width
  dotSizeMinFraction: 0.5,
  // size of min-value dot as a fraction of dotSizeRatio	
  dotSizeMaxFraction: 2.5,
  // size of max-value dot as a fraction of dotSizeRatio	
  showAnimationControls: autoByDefault,
  animationInterval: 1000,
  // milliseconds
  animationPreload: false,
  animationAutoStart: autoByDefault,
  axisColor: '#4D4D4D',
  gridColor: '#D3D3D3',
  xCenter: '55%',
  yCenter: '50%',
  style: Graph3d.STYLE.DOT,
  tooltip: false,
  tooltipStyle: {
    content: {
      padding: '10px',
      border: '1px solid #4d4d4d',
      color: '#1a1a1a',
      background: 'rgba(255,255,255,0.7)',
      borderRadius: '2px',
      boxShadow: '5px 5px 10px rgba(128,128,128,0.5)'
    },
    line: {
      height: '40px',
      width: '0',
      borderLeft: '1px solid #4d4d4d',
      pointerEvents: 'none'
    },
    dot: {
      height: '0',
      width: '0',
      border: '5px solid #4d4d4d',
      borderRadius: '5px',
      pointerEvents: 'none'
    }
  },
  dataColor: {
    fill: '#7DC1FF',
    stroke: '#3267D2',
    strokeWidth: 1 // px

  },
  cameraPosition: {
    horizontal: 1.0,
    vertical: 0.5,
    distance: 1.7
  },
  zoomable: true,
  ctrlToZoom: false,

  /*
    The following fields are 'auto by default', see above.
   */
  showLegend: autoByDefault,
  // determined by graph style
  backgroundColor: autoByDefault,
  xBarWidth: autoByDefault,
  yBarWidth: autoByDefault,
  valueMin: autoByDefault,
  valueMax: autoByDefault,
  xMin: autoByDefault,
  xMax: autoByDefault,
  xStep: autoByDefault,
  yMin: autoByDefault,
  yMax: autoByDefault,
  yStep: autoByDefault,
  zMin: autoByDefault,
  zMax: autoByDefault,
  zStep: autoByDefault
}; // -----------------------------------------------------------------------------
// Class Graph3d
// -----------------------------------------------------------------------------

/**
 * Graph3d displays data in 3d.
 *
 * Graph3d is developed in javascript as a Google Visualization Chart.
 *
 * @constructor Graph3d
 * @param {Element} container   The DOM element in which the Graph3d will
 *                              be created. Normally a div element.
 * @param {DataSet | DataView | Array} [data]
 * @param {Object} [options]
 */

function Graph3d(container, data, options) {
  if (!(this instanceof Graph3d)) {
    throw new SyntaxError('Constructor must be called with the new operator');
  } // create variables and set default values


  this.containerElement = container;
  this.dataGroup = new DataGroup_1();
  this.dataPoints = null; // The table with point objects
  // create a frame and canvas

  this.create();
  Settings.setDefaults(Graph3d.DEFAULTS, this); // the column indexes

  this.colX = undefined;
  this.colY = undefined;
  this.colZ = undefined;
  this.colValue = undefined; // TODO: customize axis range
  // apply options (also when undefined)

  this.setOptions(options); // apply data

  this.setData(data);
} // Extend Graph3d with an Emitter mixin


emitterComponent(Graph3d.prototype);
/**
 * Calculate the scaling values, dependent on the range in x, y, and z direction
 */

Graph3d.prototype._setScale = function () {
  this.scale = new Point3d_1(1 / this.xRange.range(), 1 / this.yRange.range(), 1 / this.zRange.range()); // keep aspect ration between x and y scale if desired

  if (this.keepAspectRatio) {
    if (this.scale.x < this.scale.y) {
      //noinspection JSSuspiciousNameCombination
      this.scale.y = this.scale.x;
    } else {
      //noinspection JSSuspiciousNameCombination
      this.scale.x = this.scale.y;
    }
  } // scale the vertical axis


  this.scale.z *= this.verticalRatio; // TODO: can this be automated? verticalRatio?
  // determine scale for (optional) value

  if (this.valueRange !== undefined) {
    this.scale.value = 1 / this.valueRange.range();
  } // position the camera arm


  var xCenter = this.xRange.center() * this.scale.x;
  var yCenter = this.yRange.center() * this.scale.y;
  var zCenter = this.zRange.center() * this.scale.z;
  this.camera.setArmLocation(xCenter, yCenter, zCenter);
};
/**
 * Convert a 3D location to a 2D location on screen
 * Source: ttp://en.wikipedia.org/wiki/3D_projection
 *
 * @param   {Point3d} point3d  A 3D point with parameters x, y, z
 * @returns {Point2d} point2d  A 2D point with parameters x, y
 */


Graph3d.prototype._convert3Dto2D = function (point3d) {
  var translation = this._convertPointToTranslation(point3d);

  return this._convertTranslationToScreen(translation);
};
/**
 * Convert a 3D location its translation seen from the camera
 * Source: http://en.wikipedia.org/wiki/3D_projection
 *
 * @param   {Point3d} point3d     A 3D point with parameters x, y, z
 * @returns {Point3d} translation A 3D point with parameters x, y, z This is
 *                                the translation of the point, seen from the
 *                                camera.
 */


Graph3d.prototype._convertPointToTranslation = function (point3d) {
  var cameraLocation = this.camera.getCameraLocation(),
      cameraRotation = this.camera.getCameraRotation(),
      ax = point3d.x * this.scale.x,
      ay = point3d.y * this.scale.y,
      az = point3d.z * this.scale.z,
      cx = cameraLocation.x,
      cy = cameraLocation.y,
      cz = cameraLocation.z,
      // calculate angles
  sinTx = Math.sin(cameraRotation.x),
      cosTx = Math.cos(cameraRotation.x),
      sinTy = Math.sin(cameraRotation.y),
      cosTy = Math.cos(cameraRotation.y),
      sinTz = Math.sin(cameraRotation.z),
      cosTz = Math.cos(cameraRotation.z),
      // calculate translation
  dx = cosTy * (sinTz * (ay - cy) + cosTz * (ax - cx)) - sinTy * (az - cz),
      dy = sinTx * (cosTy * (az - cz) + sinTy * (sinTz * (ay - cy) + cosTz * (ax - cx))) + cosTx * (cosTz * (ay - cy) - sinTz * (ax - cx)),
      dz = cosTx * (cosTy * (az - cz) + sinTy * (sinTz * (ay - cy) + cosTz * (ax - cx))) - sinTx * (cosTz * (ay - cy) - sinTz * (ax - cx));
  return new Point3d_1(dx, dy, dz);
};
/**
 * Convert a translation point to a point on the screen
 *
 * @param   {Point3d} translation A 3D point with parameters x, y, z This is
 *                                the translation of the point, seen from the
 *                                camera.
 * @returns {Point2d} point2d     A 2D point with parameters x, y
 */


Graph3d.prototype._convertTranslationToScreen = function (translation) {
  var ex = this.eye.x,
      ey = this.eye.y,
      ez = this.eye.z,
      dx = translation.x,
      dy = translation.y,
      dz = translation.z; // calculate position on screen from translation

  var bx;
  var by;

  if (this.showPerspective) {
    bx = (dx - ex) * (ez / dz);
    by = (dy - ey) * (ez / dz);
  } else {
    bx = dx * -(ez / this.camera.getArmLength());
    by = dy * -(ez / this.camera.getArmLength());
  } // shift and scale the point to the center of the screen
  // use the width of the graph to scale both horizontally and vertically.


  return new Point2d_1(this.currentXCenter + bx * this.frame.canvas.clientWidth, this.currentYCenter - by * this.frame.canvas.clientWidth);
};
/**
 * Calculate the translations and screen positions of all points
 *
 * @param {Array.<Point3d>} points
 * @private
 */


Graph3d.prototype._calcTranslations = function (points) {
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    point.trans = this._convertPointToTranslation(point.point);
    point.screen = this._convertTranslationToScreen(point.trans); // calculate the translation of the point at the bottom (needed for sorting)

    var transBottom = this._convertPointToTranslation(point.bottom);

    point.dist = this.showPerspective ? transBottom.length() : -transBottom.z;
  } // sort the points on depth of their (x,y) position (not on z)


  var sortDepth = function sortDepth(a, b) {
    return b.dist - a.dist;
  };

  points.sort(sortDepth);
};
/**
 * Transfer min/max values to the Graph3d instance.
 */


Graph3d.prototype._initializeRanges = function () {
  // TODO: later on, all min/maxes of all datagroups will be combined here
  var dg = this.dataGroup;
  this.xRange = dg.xRange;
  this.yRange = dg.yRange;
  this.zRange = dg.zRange;
  this.valueRange = dg.valueRange; // Values currently needed but which need to be sorted out for
  // the multiple graph case.

  this.xStep = dg.xStep;
  this.yStep = dg.yStep;
  this.zStep = dg.zStep;
  this.xBarWidth = dg.xBarWidth;
  this.yBarWidth = dg.yBarWidth;
  this.colX = dg.colX;
  this.colY = dg.colY;
  this.colZ = dg.colZ;
  this.colValue = dg.colValue; // set the scale dependent on the ranges.

  this._setScale();
};
/**
 * Return all data values as a list of Point3d objects
 *
 * @param {vis.DataSet} data
 * @returns {Array.<Object>}
 */


Graph3d.prototype.getDataPoints = function (data) {
  var dataPoints = [];

  for (var i = 0; i < data.length; i++) {
    var point = new Point3d_1();
    point.x = data[i][this.colX] || 0;
    point.y = data[i][this.colY] || 0;
    point.z = data[i][this.colZ] || 0;
    point.data = data[i];

    if (this.colValue !== undefined) {
      point.value = data[i][this.colValue] || 0;
    }

    var obj = {};
    obj.point = point;
    obj.bottom = new Point3d_1(point.x, point.y, this.zRange.min);
    obj.trans = undefined;
    obj.screen = undefined;
    dataPoints.push(obj);
  }

  return dataPoints;
};
/**
 * Filter the data based on the current filter
 *
 * @param   {Array} data
 * @returns {Array} dataPoints Array with point objects which can be drawn on
 *                             screen
 */


Graph3d.prototype._getDataPoints = function (data) {
  // TODO: store the created matrix dataPoints in the filters instead of
  //       reloading each time.
  var x, y, i, obj;
  var dataPoints = [];

  if (this.style === Graph3d.STYLE.GRID || this.style === Graph3d.STYLE.SURFACE) {
    // copy all values from the data table to a matrix
    // the provided values are supposed to form a grid of (x,y) positions
    // create two lists with all present x and y values
    var dataX = this.dataGroup.getDistinctValues(this.colX, data);
    var dataY = this.dataGroup.getDistinctValues(this.colY, data);
    dataPoints = this.getDataPoints(data); // create a grid, a 2d matrix, with all values.

    var dataMatrix = []; // temporary data matrix

    for (i = 0; i < dataPoints.length; i++) {
      obj = dataPoints[i]; // TODO: implement Array().indexOf() for Internet Explorer

      var xIndex = dataX.indexOf(obj.point.x);
      var yIndex = dataY.indexOf(obj.point.y);

      if (dataMatrix[xIndex] === undefined) {
        dataMatrix[xIndex] = [];
      }

      dataMatrix[xIndex][yIndex] = obj;
    } // fill in the pointers to the neighbors.


    for (x = 0; x < dataMatrix.length; x++) {
      for (y = 0; y < dataMatrix[x].length; y++) {
        if (dataMatrix[x][y]) {
          dataMatrix[x][y].pointRight = x < dataMatrix.length - 1 ? dataMatrix[x + 1][y] : undefined;
          dataMatrix[x][y].pointTop = y < dataMatrix[x].length - 1 ? dataMatrix[x][y + 1] : undefined;
          dataMatrix[x][y].pointCross = x < dataMatrix.length - 1 && y < dataMatrix[x].length - 1 ? dataMatrix[x + 1][y + 1] : undefined;
        }
      }
    }
  } else {
    // 'dot', 'dot-line', etc.
    this._checkValueField(data);

    dataPoints = this.getDataPoints(data);

    if (this.style === Graph3d.STYLE.LINE) {
      // Add next member points for line drawing
      for (i = 0; i < dataPoints.length; i++) {
        if (i > 0) {
          dataPoints[i - 1].pointNext = dataPoints[i];
        }
      }
    }
  }

  return dataPoints;
};
/**
 * Create the main frame for the Graph3d.
 *
 * This function is executed once when a Graph3d object is created. The frame
 * contains a canvas, and this canvas contains all objects like the axis and
 * nodes.
 */


Graph3d.prototype.create = function () {
  // remove all elements from the container element.
  while (this.containerElement.hasChildNodes()) {
    this.containerElement.removeChild(this.containerElement.firstChild);
  }

  this.frame = document.createElement('div');
  this.frame.style.position = 'relative';
  this.frame.style.overflow = 'hidden'; // create the graph canvas (HTML canvas element)

  this.frame.canvas = document.createElement('canvas');
  this.frame.canvas.style.position = 'relative';
  this.frame.appendChild(this.frame.canvas); //if (!this.frame.canvas.getContext) {

  {
    var noCanvas = document.createElement('DIV');
    noCanvas.style.color = 'red';
    noCanvas.style.fontWeight = 'bold';
    noCanvas.style.padding = '10px';
    noCanvas.innerHTML = 'Error: your browser does not support HTML canvas';
    this.frame.canvas.appendChild(noCanvas);
  }
  this.frame.filter = document.createElement('div');
  this.frame.filter.style.position = 'absolute';
  this.frame.filter.style.bottom = '0px';
  this.frame.filter.style.left = '0px';
  this.frame.filter.style.width = '100%';
  this.frame.appendChild(this.frame.filter); // add event listeners to handle moving and zooming the contents

  var me = this;

  var onmousedown = function onmousedown(event) {
    me._onMouseDown(event);
  };

  var ontouchstart = function ontouchstart(event) {
    me._onTouchStart(event);
  };

  var onmousewheel = function onmousewheel(event) {
    me._onWheel(event);
  };

  var ontooltip = function ontooltip(event) {
    me._onTooltip(event);
  };

  var onclick = function onclick(event) {
    me._onClick(event);
  }; // TODO: these events are never cleaned up... can give a 'memory leakage'


  util.addEventListener(this.frame.canvas, 'mousedown', onmousedown);
  util.addEventListener(this.frame.canvas, 'touchstart', ontouchstart);
  util.addEventListener(this.frame.canvas, 'mousewheel', onmousewheel);
  util.addEventListener(this.frame.canvas, 'mousemove', ontooltip);
  util.addEventListener(this.frame.canvas, 'click', onclick); // add the new graph to the container element

  this.containerElement.appendChild(this.frame);
};
/**
 * Set a new size for the graph
 *
 * @param {number} width
 * @param {number} height
 * @private
 */


Graph3d.prototype._setSize = function (width, height) {
  this.frame.style.width = width;
  this.frame.style.height = height;

  this._resizeCanvas();
};
/**
 * Resize the canvas to the current size of the frame
 */


Graph3d.prototype._resizeCanvas = function () {
  this.frame.canvas.style.width = '100%';
  this.frame.canvas.style.height = '100%';
  this.frame.canvas.width = this.frame.canvas.clientWidth;
  this.frame.canvas.height = this.frame.canvas.clientHeight; // adjust with for margin

  this.frame.filter.style.width = this.frame.canvas.clientWidth - 2 * 10 + 'px';
};
/**
 * Start playing the animation, if requested and filter present. Only applicable
 * when animation data is available.
 */


Graph3d.prototype.animationStart = function () {
  // start animation when option is true
  if (!this.animationAutoStart || !this.dataGroup.dataFilter) return;
  if (!this.frame.filter || !this.frame.filter.slider) throw new Error('No animation available');
  this.frame.filter.slider.play();
};
/**
 * Stop animation
 */


Graph3d.prototype.animationStop = function () {
  if (!this.frame.filter || !this.frame.filter.slider) return;
  this.frame.filter.slider.stop();
};
/**
 * Resize the center position based on the current values in this.xCenter
 * and this.yCenter (which are strings with a percentage or a value
 * in pixels). The center positions are the variables this.currentXCenter
 * and this.currentYCenter
 */


Graph3d.prototype._resizeCenter = function () {
  // calculate the horizontal center position
  if (this.xCenter.charAt(this.xCenter.length - 1) === '%') {
    this.currentXCenter = parseFloat(this.xCenter) / 100 * this.frame.canvas.clientWidth;
  } else {
    this.currentXCenter = parseFloat(this.xCenter); // supposed to be in px
  } // calculate the vertical center position


  if (this.yCenter.charAt(this.yCenter.length - 1) === '%') {
    this.currentYCenter = parseFloat(this.yCenter) / 100 * (this.frame.canvas.clientHeight - this.frame.filter.clientHeight);
  } else {
    this.currentYCenter = parseFloat(this.yCenter); // supposed to be in px
  }
};
/**
 * Retrieve the current camera rotation
 *
 * @returns {object} An object with parameters horizontal, vertical, and
 *                   distance
 */


Graph3d.prototype.getCameraPosition = function () {
  var pos = this.camera.getArmRotation();
  pos.distance = this.camera.getArmLength();
  return pos;
};
/**
 * Load data into the 3D Graph
 *
 * @param {vis.DataSet} data
 * @private
 */


Graph3d.prototype._readData = function (data) {
  // read the data
  this.dataPoints = this.dataGroup.initializeData(this, data, this.style);

  this._initializeRanges();

  this._redrawFilter();
};
/**
 * Replace the dataset of the Graph3d
 *
 * @param {Array | DataSet | DataView} data
 */


Graph3d.prototype.setData = function (data) {
  if (data === undefined || data === null) return;

  this._readData(data);

  this.redraw();
  this.animationStart();
};
/**
 * Update the options. Options will be merged with current options
 *
 * @param {Object} options
 */


Graph3d.prototype.setOptions = function (options) {
  if (options === undefined) return;
  var errorFound = Validator$2.validate(options, allOptions$2);

  if (errorFound === true) {
    console.log('%cErrors have been found in the supplied options object.', printStyle$1);
  }

  this.animationStop();
  Settings.setOptions(options, this);
  this.setPointDrawingMethod();

  this._setSize(this.width, this.height);

  this.setData(this.dataGroup.getDataTable());
  this.animationStart();
};
/**
 * Determine which point drawing method to use for the current graph style.
 */


Graph3d.prototype.setPointDrawingMethod = function () {
  var method = undefined;

  switch (this.style) {
    case Graph3d.STYLE.BAR:
      method = Graph3d.prototype._redrawBarGraphPoint;
      break;

    case Graph3d.STYLE.BARCOLOR:
      method = Graph3d.prototype._redrawBarColorGraphPoint;
      break;

    case Graph3d.STYLE.BARSIZE:
      method = Graph3d.prototype._redrawBarSizeGraphPoint;
      break;

    case Graph3d.STYLE.DOT:
      method = Graph3d.prototype._redrawDotGraphPoint;
      break;

    case Graph3d.STYLE.DOTLINE:
      method = Graph3d.prototype._redrawDotLineGraphPoint;
      break;

    case Graph3d.STYLE.DOTCOLOR:
      method = Graph3d.prototype._redrawDotColorGraphPoint;
      break;

    case Graph3d.STYLE.DOTSIZE:
      method = Graph3d.prototype._redrawDotSizeGraphPoint;
      break;

    case Graph3d.STYLE.SURFACE:
      method = Graph3d.prototype._redrawSurfaceGraphPoint;
      break;

    case Graph3d.STYLE.GRID:
      method = Graph3d.prototype._redrawGridGraphPoint;
      break;

    case Graph3d.STYLE.LINE:
      method = Graph3d.prototype._redrawLineGraphPoint;
      break;

    default:
      throw new Error('Can not determine point drawing method ' + 'for graph style \'' + this.style + '\'');
  }

  this._pointDrawingMethod = method;
};
/**
 * Redraw the Graph.
 */


Graph3d.prototype.redraw = function () {
  if (this.dataPoints === undefined) {
    throw new Error('Graph data not initialized');
  }

  this._resizeCanvas();

  this._resizeCenter();

  this._redrawSlider();

  this._redrawClear();

  this._redrawAxis();

  this._redrawDataGraph();

  this._redrawInfo();

  this._redrawLegend();
};
/**
 * Get drawing context without exposing canvas
 *
 * @returns {CanvasRenderingContext2D}
 * @private
 */


Graph3d.prototype._getContext = function () {
  var canvas = this.frame.canvas;
  var ctx = canvas.getContext('2d');
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  return ctx;
};
/**
 * Clear the canvas before redrawing
 */


Graph3d.prototype._redrawClear = function () {
  var canvas = this.frame.canvas;
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

Graph3d.prototype._dotSize = function () {
  return this.frame.clientWidth * this.dotSizeRatio;
};
/**
 * Get legend width
 *
 * @returns {*}
 * @private
 */


Graph3d.prototype._getLegendWidth = function () {
  var width;

  if (this.style === Graph3d.STYLE.DOTSIZE) {
    var dotSize = this._dotSize(); //width =  dotSize / 2 + dotSize * 2;


    width = dotSize * this.dotSizeMaxFraction;
  } else if (this.style === Graph3d.STYLE.BARSIZE) {
    width = this.xBarWidth;
  } else {
    width = 20;
  }

  return width;
};
/**
 * Redraw the legend based on size, dot color, or surface height
 */


Graph3d.prototype._redrawLegend = function () {
  //Return without drawing anything, if no legend is specified
  if (this.showLegend !== true) {
    return;
  } // Do not draw legend when graph style does not support


  if (this.style === Graph3d.STYLE.LINE || this.style === Graph3d.STYLE.BARSIZE //TODO add legend support for BARSIZE
  ) {
      return;
    } // Legend types - size and color. Determine if size legend.


  var isSizeLegend = this.style === Graph3d.STYLE.BARSIZE || this.style === Graph3d.STYLE.DOTSIZE; // Legend is either tracking z values or style values. This flag if false means use z values.

  var isValueLegend = this.style === Graph3d.STYLE.DOTSIZE || this.style === Graph3d.STYLE.DOTCOLOR || this.style === Graph3d.STYLE.BARCOLOR;
  var height = Math.max(this.frame.clientHeight * 0.25, 100);
  var top = this.margin;

  var width = this._getLegendWidth(); // px - overwritten by size legend


  var right = this.frame.clientWidth - this.margin;
  var left = right - width;
  var bottom = top + height;

  var ctx = this._getContext();

  ctx.lineWidth = 1;
  ctx.font = '14px arial'; // TODO: put in options

  if (isSizeLegend === false) {
    // draw the color bar
    var ymin = 0;
    var ymax = height; // Todo: make height customizable

    var y;

    for (y = ymin; y < ymax; y++) {
      var f = (y - ymin) / (ymax - ymin);
      var hue = f * 240;

      var color = this._hsv2rgb(hue, 1, 1);

      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(left, top + y);
      ctx.lineTo(right, top + y);
      ctx.stroke();
    }

    ctx.strokeStyle = this.axisColor;
    ctx.strokeRect(left, top, width, height);
  } else {
    // draw the size legend box
    var widthMin;

    if (this.style === Graph3d.STYLE.DOTSIZE) {
      // Get the proportion to max and min right
      widthMin = width * (this.dotSizeMinFraction / this.dotSizeMaxFraction);
    } else if (this.style === Graph3d.STYLE.BARSIZE) ;

    ctx.strokeStyle = this.axisColor;
    ctx.fillStyle = this.dataColor.fill;
    ctx.beginPath();
    ctx.moveTo(left, top);
    ctx.lineTo(right, top);
    ctx.lineTo(left + widthMin, bottom);
    ctx.lineTo(left, bottom);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  } // print value text along the legend edge


  var gridLineLen = 5; // px

  var legendMin = isValueLegend ? this.valueRange.min : this.zRange.min;
  var legendMax = isValueLegend ? this.valueRange.max : this.zRange.max;
  var step = new StepNumber_1(legendMin, legendMax, (legendMax - legendMin) / 5, true);
  step.start(true);
  var from;
  var to;

  while (!step.end()) {
    y = bottom - (step.getCurrent() - legendMin) / (legendMax - legendMin) * height;
    from = new Point2d_1(left - gridLineLen, y);
    to = new Point2d_1(left, y);

    this._line(ctx, from, to);

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = this.axisColor;
    ctx.fillText(step.getCurrent(), left - 2 * gridLineLen, y);
    step.next();
  }

  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  var label = this.legendLabel;
  ctx.fillText(label, right, bottom + this.margin);
};
/**
 * Redraw the filter
 */


Graph3d.prototype._redrawFilter = function () {
  var dataFilter = this.dataGroup.dataFilter;
  var filter = this.frame.filter;
  filter.innerHTML = '';

  if (!dataFilter) {
    filter.slider = undefined;
    return;
  }

  var options = {
    'visible': this.showAnimationControls
  };
  var slider = new Slider_1(filter, options);
  filter.slider = slider; // TODO: css here is not nice here...

  filter.style.padding = '10px'; //this.frame.filter.style.backgroundColor = '#EFEFEF';

  slider.setValues(dataFilter.values);
  slider.setPlayInterval(this.animationInterval); // create an event handler

  var me = this;

  var onchange = function onchange() {
    var dataFilter = me.dataGroup.dataFilter;
    var index = slider.getIndex();
    dataFilter.selectValue(index);
    me.dataPoints = dataFilter._getDataPoints();
    me.redraw();
  };

  slider.setOnChangeCallback(onchange);
};
/**
 * Redraw the slider
 */


Graph3d.prototype._redrawSlider = function () {
  if (this.frame.filter.slider !== undefined) {
    this.frame.filter.slider.redraw();
  }
};
/**
 * Redraw common information
 */


Graph3d.prototype._redrawInfo = function () {
  var info = this.dataGroup.getInfo();
  if (info === undefined) return;

  var ctx = this._getContext();

  ctx.font = '14px arial'; // TODO: put in options

  ctx.lineStyle = 'gray';
  ctx.fillStyle = 'gray';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  var x = this.margin;
  var y = this.margin;
  ctx.fillText(info, x, y);
};
/**
 * Draw a line between 2d points 'from' and 'to'.
 *
 * If stroke style specified, set that as well.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {vis.Point2d} from
 * @param {vis.Point2d} to
 * @param {string} [strokeStyle]
 * @private
 */


Graph3d.prototype._line = function (ctx, from, to, strokeStyle) {
  if (strokeStyle !== undefined) {
    ctx.strokeStyle = strokeStyle;
  }

  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();
};
/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {vis.Point3d} point3d
 * @param {string} text
 * @param {number} armAngle
 * @param {number} [yMargin=0]
 */


Graph3d.prototype.drawAxisLabelX = function (ctx, point3d, text, armAngle, yMargin) {
  if (yMargin === undefined) {
    yMargin = 0;
  }

  var point2d = this._convert3Dto2D(point3d);

  if (Math.cos(armAngle * 2) > 0) {
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    point2d.y += yMargin;
  } else if (Math.sin(armAngle * 2) < 0) {
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
  } else {
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
  }

  ctx.fillStyle = this.axisColor;
  ctx.fillText(text, point2d.x, point2d.y);
};
/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {vis.Point3d} point3d
 * @param {string} text
 * @param {number} armAngle
 * @param {number} [yMargin=0]
 */


Graph3d.prototype.drawAxisLabelY = function (ctx, point3d, text, armAngle, yMargin) {
  if (yMargin === undefined) {
    yMargin = 0;
  }

  var point2d = this._convert3Dto2D(point3d);

  if (Math.cos(armAngle * 2) < 0) {
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    point2d.y += yMargin;
  } else if (Math.sin(armAngle * 2) > 0) {
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
  } else {
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
  }

  ctx.fillStyle = this.axisColor;
  ctx.fillText(text, point2d.x, point2d.y);
};
/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {vis.Point3d} point3d
 * @param {string} text
 * @param {number} [offset=0]
 */


Graph3d.prototype.drawAxisLabelZ = function (ctx, point3d, text, offset) {
  if (offset === undefined) {
    offset = 0;
  }

  var point2d = this._convert3Dto2D(point3d);

  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = this.axisColor;
  ctx.fillText(text, point2d.x - offset, point2d.y);
};
/**


/**
 * Draw a line between 2d points 'from' and 'to'.
 *
 * If stroke style specified, set that as well.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {vis.Point2d} from
 * @param {vis.Point2d} to
 * @param {string} [strokeStyle]
 * @private
 */


Graph3d.prototype._line3d = function (ctx, from, to, strokeStyle) {
  var from2d = this._convert3Dto2D(from);

  var to2d = this._convert3Dto2D(to);

  this._line(ctx, from2d, to2d, strokeStyle);
};
/**
 * Redraw the axis
 */


Graph3d.prototype._redrawAxis = function () {
  var ctx = this._getContext(),
      from,
      to,
      step,
      prettyStep,
      text,
      xText,
      yText,
      zText,
      offset,
      xOffset,
      yOffset; // TODO: get the actual rendered style of the containerElement
  //ctx.font = this.containerElement.style.font;


  ctx.font = 24 / this.camera.getArmLength() + 'px arial'; // calculate the length for the short grid lines

  var gridLenX = 0.025 / this.scale.x;
  var gridLenY = 0.025 / this.scale.y;
  var textMargin = 5 / this.camera.getArmLength(); // px

  var armAngle = this.camera.getArmRotation().horizontal;
  var armVector = new Point2d_1(Math.cos(armAngle), Math.sin(armAngle));
  var xRange = this.xRange;
  var yRange = this.yRange;
  var zRange = this.zRange;
  var point3d; // draw x-grid lines

  ctx.lineWidth = 1;
  prettyStep = this.defaultXStep === undefined;
  step = new StepNumber_1(xRange.min, xRange.max, this.xStep, prettyStep);
  step.start(true);

  while (!step.end()) {
    var x = step.getCurrent();

    if (this.showGrid) {
      from = new Point3d_1(x, yRange.min, zRange.min);
      to = new Point3d_1(x, yRange.max, zRange.min);

      this._line3d(ctx, from, to, this.gridColor);
    } else if (this.showXAxis) {
      from = new Point3d_1(x, yRange.min, zRange.min);
      to = new Point3d_1(x, yRange.min + gridLenX, zRange.min);

      this._line3d(ctx, from, to, this.axisColor);

      from = new Point3d_1(x, yRange.max, zRange.min);
      to = new Point3d_1(x, yRange.max - gridLenX, zRange.min);

      this._line3d(ctx, from, to, this.axisColor);
    }

    if (this.showXAxis) {
      yText = armVector.x > 0 ? yRange.min : yRange.max;
      point3d = new Point3d_1(x, yText, zRange.min);
      var msg = '  ' + this.xValueLabel(x) + '  ';
      this.drawAxisLabelX(ctx, point3d, msg, armAngle, textMargin);
    }

    step.next();
  } // draw y-grid lines


  ctx.lineWidth = 1;
  prettyStep = this.defaultYStep === undefined;
  step = new StepNumber_1(yRange.min, yRange.max, this.yStep, prettyStep);
  step.start(true);

  while (!step.end()) {
    var y = step.getCurrent();

    if (this.showGrid) {
      from = new Point3d_1(xRange.min, y, zRange.min);
      to = new Point3d_1(xRange.max, y, zRange.min);

      this._line3d(ctx, from, to, this.gridColor);
    } else if (this.showYAxis) {
      from = new Point3d_1(xRange.min, y, zRange.min);
      to = new Point3d_1(xRange.min + gridLenY, y, zRange.min);

      this._line3d(ctx, from, to, this.axisColor);

      from = new Point3d_1(xRange.max, y, zRange.min);
      to = new Point3d_1(xRange.max - gridLenY, y, zRange.min);

      this._line3d(ctx, from, to, this.axisColor);
    }

    if (this.showYAxis) {
      xText = armVector.y > 0 ? xRange.min : xRange.max;
      point3d = new Point3d_1(xText, y, zRange.min);

      var _msg = '  ' + this.yValueLabel(y) + '  ';

      this.drawAxisLabelY(ctx, point3d, _msg, armAngle, textMargin);
    }

    step.next();
  } // draw z-grid lines and axis


  if (this.showZAxis) {
    ctx.lineWidth = 1;
    prettyStep = this.defaultZStep === undefined;
    step = new StepNumber_1(zRange.min, zRange.max, this.zStep, prettyStep);
    step.start(true);
    xText = armVector.x > 0 ? xRange.min : xRange.max;
    yText = armVector.y < 0 ? yRange.min : yRange.max;

    while (!step.end()) {
      var z = step.getCurrent(); // TODO: make z-grid lines really 3d?

      var from3d = new Point3d_1(xText, yText, z);

      var from2d = this._convert3Dto2D(from3d);

      to = new Point2d_1(from2d.x - textMargin, from2d.y);

      this._line(ctx, from2d, to, this.axisColor);

      var _msg2 = this.zValueLabel(z) + ' ';

      this.drawAxisLabelZ(ctx, from3d, _msg2, 5);
      step.next();
    }

    ctx.lineWidth = 1;
    from = new Point3d_1(xText, yText, zRange.min);
    to = new Point3d_1(xText, yText, zRange.max);

    this._line3d(ctx, from, to, this.axisColor);
  } // draw x-axis


  if (this.showXAxis) {
    var xMin2d;
    var xMax2d;
    ctx.lineWidth = 1; // line at yMin

    xMin2d = new Point3d_1(xRange.min, yRange.min, zRange.min);
    xMax2d = new Point3d_1(xRange.max, yRange.min, zRange.min);

    this._line3d(ctx, xMin2d, xMax2d, this.axisColor); // line at ymax


    xMin2d = new Point3d_1(xRange.min, yRange.max, zRange.min);
    xMax2d = new Point3d_1(xRange.max, yRange.max, zRange.min);

    this._line3d(ctx, xMin2d, xMax2d, this.axisColor);
  } // draw y-axis


  if (this.showYAxis) {
    ctx.lineWidth = 1; // line at xMin

    from = new Point3d_1(xRange.min, yRange.min, zRange.min);
    to = new Point3d_1(xRange.min, yRange.max, zRange.min);

    this._line3d(ctx, from, to, this.axisColor); // line at xMax


    from = new Point3d_1(xRange.max, yRange.min, zRange.min);
    to = new Point3d_1(xRange.max, yRange.max, zRange.min);

    this._line3d(ctx, from, to, this.axisColor);
  } // draw x-label


  var xLabel = this.xLabel;

  if (xLabel.length > 0 && this.showXAxis) {
    yOffset = 0.1 / this.scale.y;
    xText = (xRange.max + 3 * xRange.min) / 4;
    yText = armVector.x > 0 ? yRange.min - yOffset : yRange.max + yOffset;
    text = new Point3d_1(xText, yText, zRange.min);
    this.drawAxisLabelX(ctx, text, xLabel, armAngle);
  } // draw y-label


  var yLabel = this.yLabel;

  if (yLabel.length > 0 && this.showYAxis) {
    xOffset = 0.1 / this.scale.x;
    xText = armVector.y > 0 ? xRange.min - xOffset : xRange.max + xOffset;
    yText = (yRange.max + 3 * yRange.min) / 4;
    text = new Point3d_1(xText, yText, zRange.min);
    this.drawAxisLabelY(ctx, text, yLabel, armAngle);
  } // draw z-label


  var zLabel = this.zLabel;

  if (zLabel.length > 0 && this.showZAxis) {
    offset = 30; // pixels.  // TODO: relate to the max width of the values on the z axis?

    xText = armVector.x > 0 ? xRange.min : xRange.max;
    yText = armVector.y < 0 ? yRange.min : yRange.max;
    zText = (zRange.max + 3 * zRange.min) / 4;
    text = new Point3d_1(xText, yText, zText);
    this.drawAxisLabelZ(ctx, text, zLabel, offset);
  }
};
/**
 * Calculate the color based on the given value.
 * @param {number} H   Hue, a value be between 0 and 360
 * @param {number} S   Saturation, a value between 0 and 1
 * @param {number} V   Value, a value between 0 and 1
 * @returns {string}
 * @private
 */


Graph3d.prototype._hsv2rgb = function (H, S, V) {
  var R, G, B, C, Hi, X;
  C = V * S;
  Hi = Math.floor(H / 60); // hi = 0,1,2,3,4,5

  X = C * (1 - Math.abs(H / 60 % 2 - 1));

  switch (Hi) {
    case 0:
      R = C;
      G = X;
      B = 0;
      break;

    case 1:
      R = X;
      G = C;
      B = 0;
      break;

    case 2:
      R = 0;
      G = C;
      B = X;
      break;

    case 3:
      R = 0;
      G = X;
      B = C;
      break;

    case 4:
      R = X;
      G = 0;
      B = C;
      break;

    case 5:
      R = C;
      G = 0;
      B = X;
      break;

    default:
      R = 0;
      G = 0;
      B = 0;
      break;
  }

  return 'RGB(' + parseInt(R * 255) + ',' + parseInt(G * 255) + ',' + parseInt(B * 255) + ')';
};
/**
 *
 * @param {vis.Point3d} point
 * @returns {*}
 * @private
 */


Graph3d.prototype._getStrokeWidth = function (point) {
  if (point !== undefined) {
    if (this.showPerspective) {
      return 1 / -point.trans.z * this.dataColor.strokeWidth;
    } else {
      return -(this.eye.z / this.camera.getArmLength()) * this.dataColor.strokeWidth;
    }
  }

  return this.dataColor.strokeWidth;
}; // -----------------------------------------------------------------------------
// Drawing primitives for the graphs
// -----------------------------------------------------------------------------

/**
 * Draw a bar element in the view with the given properties.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} point
 * @param {number} xWidth
 * @param {number} yWidth
 * @param {string} color
 * @param {string} borderColor
 * @private
 */


Graph3d.prototype._redrawBar = function (ctx, point, xWidth, yWidth, color, borderColor) {
  var surface; // calculate all corner points

  var me = this;
  var point3d = point.point;
  var zMin = this.zRange.min;
  var top = [{
    point: new Point3d_1(point3d.x - xWidth, point3d.y - yWidth, point3d.z)
  }, {
    point: new Point3d_1(point3d.x + xWidth, point3d.y - yWidth, point3d.z)
  }, {
    point: new Point3d_1(point3d.x + xWidth, point3d.y + yWidth, point3d.z)
  }, {
    point: new Point3d_1(point3d.x - xWidth, point3d.y + yWidth, point3d.z)
  }];
  var bottom = [{
    point: new Point3d_1(point3d.x - xWidth, point3d.y - yWidth, zMin)
  }, {
    point: new Point3d_1(point3d.x + xWidth, point3d.y - yWidth, zMin)
  }, {
    point: new Point3d_1(point3d.x + xWidth, point3d.y + yWidth, zMin)
  }, {
    point: new Point3d_1(point3d.x - xWidth, point3d.y + yWidth, zMin)
  }]; // calculate screen location of the points

  top.forEach(function (obj) {
    obj.screen = me._convert3Dto2D(obj.point);
  });
  bottom.forEach(function (obj) {
    obj.screen = me._convert3Dto2D(obj.point);
  }); // create five sides, calculate both corner points and center points

  var surfaces = [{
    corners: top,
    center: Point3d_1.avg(bottom[0].point, bottom[2].point)
  }, {
    corners: [top[0], top[1], bottom[1], bottom[0]],
    center: Point3d_1.avg(bottom[1].point, bottom[0].point)
  }, {
    corners: [top[1], top[2], bottom[2], bottom[1]],
    center: Point3d_1.avg(bottom[2].point, bottom[1].point)
  }, {
    corners: [top[2], top[3], bottom[3], bottom[2]],
    center: Point3d_1.avg(bottom[3].point, bottom[2].point)
  }, {
    corners: [top[3], top[0], bottom[0], bottom[3]],
    center: Point3d_1.avg(bottom[0].point, bottom[3].point)
  }];
  point.surfaces = surfaces; // calculate the distance of each of the surface centers to the camera

  for (var j = 0; j < surfaces.length; j++) {
    surface = surfaces[j];

    var transCenter = this._convertPointToTranslation(surface.center);

    surface.dist = this.showPerspective ? transCenter.length() : -transCenter.z; // TODO: this dept calculation doesn't work 100% of the cases due to perspective,
    //     but the current solution is fast/simple and works in 99.9% of all cases
    //     the issue is visible in example 14, with graph.setCameraPosition({horizontal: 2.97, vertical: 0.5, distance: 0.9})
  } // order the surfaces by their (translated) depth


  surfaces.sort(function (a, b) {
    var diff = b.dist - a.dist;
    if (diff) return diff; // if equal depth, sort the top surface last

    if (a.corners === top) return 1;
    if (b.corners === top) return -1; // both are equal

    return 0;
  }); // draw the ordered surfaces

  ctx.lineWidth = this._getStrokeWidth(point);
  ctx.strokeStyle = borderColor;
  ctx.fillStyle = color; // NOTE: we start at j=2 instead of j=0 as we don't need to draw the two surfaces at the backside

  for (var _j = 2; _j < surfaces.length; _j++) {
    surface = surfaces[_j];

    this._polygon(ctx, surface.corners);
  }
};
/**
 * Draw a polygon using the passed points and fill it with the passed style and stroke.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Array.<vis.Point3d>} points      an array of points.
 * @param {string} [fillStyle] the fill style to set
 * @param {string} [strokeStyle] the stroke style to set
 */


Graph3d.prototype._polygon = function (ctx, points, fillStyle, strokeStyle) {
  if (points.length < 2) {
    return;
  }

  if (fillStyle !== undefined) {
    ctx.fillStyle = fillStyle;
  }

  if (strokeStyle !== undefined) {
    ctx.strokeStyle = strokeStyle;
  }

  ctx.beginPath();
  ctx.moveTo(points[0].screen.x, points[0].screen.y);

  for (var i = 1; i < points.length; ++i) {
    var point = points[i];
    ctx.lineTo(point.screen.x, point.screen.y);
  }

  ctx.closePath();
  ctx.fill();
  ctx.stroke(); // TODO: only draw stroke when strokeWidth > 0
};
/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @param {string} color
 * @param {string} borderColor
 * @param {number} [size=this._dotSize()]
 * @private
 */


Graph3d.prototype._drawCircle = function (ctx, point, color, borderColor, size) {
  var radius = this._calcRadius(point, size);

  ctx.lineWidth = this._getStrokeWidth(point);
  ctx.strokeStyle = borderColor;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(point.screen.x, point.screen.y, radius, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();
};
/**
 * Determine the colors for the 'regular' graph styles.
 *
 * @param {object} point
 * @returns {{fill, border}}
 * @private
 */


Graph3d.prototype._getColorsRegular = function (point) {
  // calculate Hue from the current value. At zMin the hue is 240, at zMax the hue is 0
  var hue = (1 - (point.point.z - this.zRange.min) * this.scale.z / this.verticalRatio) * 240;

  var color = this._hsv2rgb(hue, 1, 1);

  var borderColor = this._hsv2rgb(hue, 1, 0.8);

  return {
    fill: color,
    border: borderColor
  };
};
/**
 * Get the colors for the 'color' graph styles.
 * These styles are currently: 'bar-color' and 'dot-color'
 * Color may be set as a string representation of HTML color, like #ff00ff,
 * or calculated from a number, for example, distance from this point
 * The first option is useful when we have some pre-given legend, to which we have to adjust ourselves
 * The second option is useful when we are interested in automatically setting the color, from some value,
 * using some color scale
 * @param {object} point
 * @returns {{fill: *, border: *}}
 * @private
 */


Graph3d.prototype._getColorsColor = function (point) {
  // calculate the color based on the value
  var color, borderColor;

  if (typeof point.point.value === "string") {
    color = point.point.value;
    borderColor = point.point.value;
  } else {
    var hue = (1 - (point.point.value - this.valueRange.min) * this.scale.value) * 240;
    color = this._hsv2rgb(hue, 1, 1);
    borderColor = this._hsv2rgb(hue, 1, 0.8);
  }

  return {
    fill: color,
    border: borderColor
  };
};
/**
 * Get the colors for the 'size' graph styles.
 * These styles are currently: 'bar-size' and 'dot-size'
 *
 * @returns {{fill: *, border: (string|colorOptions.stroke|{string, undefined}|string|colorOptions.stroke|{string}|*)}}
 * @private
 */


Graph3d.prototype._getColorsSize = function () {
  return {
    fill: this.dataColor.fill,
    border: this.dataColor.stroke
  };
};
/**
 * Determine the size of a point on-screen, as determined by the
 * distance to the camera.
 *
 * @param {Object} point
 * @param {number} [size=this._dotSize()] the size that needs to be translated to screen coordinates.
 *             optional; if not passed, use the default point size.
 * @returns {number}
 * @private
 */


Graph3d.prototype._calcRadius = function (point, size) {
  if (size === undefined) {
    size = this._dotSize();
  }

  var radius;

  if (this.showPerspective) {
    radius = size / -point.trans.z;
  } else {
    radius = size * -(this.eye.z / this.camera.getArmLength());
  }

  if (radius < 0) {
    radius = 0;
  }

  return radius;
}; // -----------------------------------------------------------------------------
// Methods for drawing points per graph style.
// -----------------------------------------------------------------------------

/**
 * Draw single datapoint for graph style 'bar'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} point
 * @private
 */


Graph3d.prototype._redrawBarGraphPoint = function (ctx, point) {
  var xWidth = this.xBarWidth / 2;
  var yWidth = this.yBarWidth / 2;

  var colors = this._getColorsRegular(point);

  this._redrawBar(ctx, point, xWidth, yWidth, colors.fill, colors.border);
};
/**
 * Draw single datapoint for graph style 'bar-color'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} point
 * @private
 */


Graph3d.prototype._redrawBarColorGraphPoint = function (ctx, point) {
  var xWidth = this.xBarWidth / 2;
  var yWidth = this.yBarWidth / 2;

  var colors = this._getColorsColor(point);

  this._redrawBar(ctx, point, xWidth, yWidth, colors.fill, colors.border);
};
/**
 * Draw single datapoint for graph style 'bar-size'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} point
 * @private
 */


Graph3d.prototype._redrawBarSizeGraphPoint = function (ctx, point) {
  // calculate size for the bar
  var fraction = (point.point.value - this.valueRange.min) / this.valueRange.range();
  var xWidth = this.xBarWidth / 2 * (fraction * 0.8 + 0.2);
  var yWidth = this.yBarWidth / 2 * (fraction * 0.8 + 0.2);

  var colors = this._getColorsSize();

  this._redrawBar(ctx, point, xWidth, yWidth, colors.fill, colors.border);
};
/**
 * Draw single datapoint for graph style 'dot'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} point
 * @private
 */


Graph3d.prototype._redrawDotGraphPoint = function (ctx, point) {
  var colors = this._getColorsRegular(point);

  this._drawCircle(ctx, point, colors.fill, colors.border);
};
/**
 * Draw single datapoint for graph style 'dot-line'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} point
 * @private
 */


Graph3d.prototype._redrawDotLineGraphPoint = function (ctx, point) {
  // draw a vertical line from the XY-plane to the graph value
  var from = this._convert3Dto2D(point.bottom);

  ctx.lineWidth = 1;

  this._line(ctx, from, point.screen, this.gridColor);

  this._redrawDotGraphPoint(ctx, point);
};
/**
 * Draw single datapoint for graph style 'dot-color'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} point
 * @private
 */


Graph3d.prototype._redrawDotColorGraphPoint = function (ctx, point) {
  var colors = this._getColorsColor(point);

  this._drawCircle(ctx, point, colors.fill, colors.border);
};
/**
 * Draw single datapoint for graph style 'dot-size'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} point
 * @private
 */


Graph3d.prototype._redrawDotSizeGraphPoint = function (ctx, point) {
  var dotSize = this._dotSize();

  var fraction = (point.point.value - this.valueRange.min) / this.valueRange.range();
  var sizeMin = dotSize * this.dotSizeMinFraction;
  var sizeRange = dotSize * this.dotSizeMaxFraction - sizeMin;
  var size = sizeMin + sizeRange * fraction;

  var colors = this._getColorsSize();

  this._drawCircle(ctx, point, colors.fill, colors.border, size);
};
/**
 * Draw single datapoint for graph style 'surface'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} point
 * @private
 */


Graph3d.prototype._redrawSurfaceGraphPoint = function (ctx, point) {
  var right = point.pointRight;
  var top = point.pointTop;
  var cross = point.pointCross;

  if (point === undefined || right === undefined || top === undefined || cross === undefined) {
    return;
  }

  var topSideVisible = true;
  var fillStyle;
  var strokeStyle;

  if (this.showGrayBottom || this.showShadow) {
    // calculate the cross product of the two vectors from center
    // to left and right, in order to know whether we are looking at the
    // bottom or at the top side. We can also use the cross product
    // for calculating light intensity
    var aDiff = Point3d_1.subtract(cross.trans, point.trans);
    var bDiff = Point3d_1.subtract(top.trans, right.trans);
    var crossproduct = Point3d_1.crossProduct(aDiff, bDiff);
    var len = crossproduct.length(); // FIXME: there is a bug with determining the surface side (shadow or colored)

    topSideVisible = crossproduct.z > 0;
  }

  if (topSideVisible) {
    // calculate Hue from the current value. At zMin the hue is 240, at zMax the hue is 0
    var zAvg = (point.point.z + right.point.z + top.point.z + cross.point.z) / 4;
    var h = (1 - (zAvg - this.zRange.min) * this.scale.z / this.verticalRatio) * 240;
    var s = 1; // saturation

    var v;

    if (this.showShadow) {
      v = Math.min(1 + crossproduct.x / len / 2, 1); // value. TODO: scale

      fillStyle = this._hsv2rgb(h, s, v);
      strokeStyle = fillStyle;
    } else {
      v = 1;
      fillStyle = this._hsv2rgb(h, s, v);
      strokeStyle = this.axisColor; // TODO: should be customizable
    }
  } else {
    fillStyle = 'gray';
    strokeStyle = this.axisColor;
  }

  ctx.lineWidth = this._getStrokeWidth(point); // TODO: only draw stroke when strokeWidth > 0

  var points = [point, right, cross, top];

  this._polygon(ctx, points, fillStyle, strokeStyle);
};
/**
 * Helper method for _redrawGridGraphPoint()
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} from
 * @param {Object} to
 * @private
 */


Graph3d.prototype._drawGridLine = function (ctx, from, to) {
  if (from === undefined || to === undefined) {
    return;
  } // calculate Hue from the current value. At zMin the hue is 240, at zMax the hue is 0


  var zAvg = (from.point.z + to.point.z) / 2;
  var h = (1 - (zAvg - this.zRange.min) * this.scale.z / this.verticalRatio) * 240;
  ctx.lineWidth = this._getStrokeWidth(from) * 2;
  ctx.strokeStyle = this._hsv2rgb(h, 1, 1);

  this._line(ctx, from.screen, to.screen);
};
/**
 * Draw single datapoint for graph style 'Grid'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} point
 * @private
 */


Graph3d.prototype._redrawGridGraphPoint = function (ctx, point) {
  this._drawGridLine(ctx, point, point.pointRight);

  this._drawGridLine(ctx, point, point.pointTop);
};
/**
 * Draw single datapoint for graph style 'line'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} point
 * @private
 */


Graph3d.prototype._redrawLineGraphPoint = function (ctx, point) {
  if (point.pointNext === undefined) {
    return;
  }

  ctx.lineWidth = this._getStrokeWidth(point);
  ctx.strokeStyle = this.dataColor.stroke;

  this._line(ctx, point.screen, point.pointNext.screen);
};
/**
 * Draw all datapoints for currently selected graph style.
 *
 */


Graph3d.prototype._redrawDataGraph = function () {
  var ctx = this._getContext();

  var i;
  if (this.dataPoints === undefined || this.dataPoints.length <= 0) return; // TODO: throw exception?

  this._calcTranslations(this.dataPoints);

  for (i = 0; i < this.dataPoints.length; i++) {
    var point = this.dataPoints[i]; // Using call() ensures that the correct context is used

    this._pointDrawingMethod.call(this, ctx, point);
  }
}; // -----------------------------------------------------------------------------
// End methods for drawing points per graph style.
// -----------------------------------------------------------------------------

/**
 * Store startX, startY and startOffset for mouse operations
 *
 * @param {Event}     event     The event that occurred
 */


Graph3d.prototype._storeMousePosition = function (event) {
  // get mouse position (different code for IE and all other browsers)
  this.startMouseX = getMouseX(event);
  this.startMouseY = getMouseY(event);
  this._startCameraOffset = this.camera.getOffset();
};
/**
 * Start a moving operation inside the provided parent element
 * @param {Event}     event     The event that occurred (required for
 *                  retrieving the  mouse position)
 */


Graph3d.prototype._onMouseDown = function (event) {
  event = event || window.event; // check if mouse is still down (may be up when focus is lost for example
  // in an iframe)

  if (this.leftButtonDown) {
    this._onMouseUp(event);
  } // only react on left mouse button down


  this.leftButtonDown = event.which ? event.which === 1 : event.button === 1;
  if (!this.leftButtonDown && !this.touchDown) return;

  this._storeMousePosition(event);

  this.startStart = new Date(this.start);
  this.startEnd = new Date(this.end);
  this.startArmRotation = this.camera.getArmRotation();
  this.frame.style.cursor = 'move'; // add event listeners to handle moving the contents
  // we store the function onmousemove and onmouseup in the graph, so we can
  // remove the eventlisteners lateron in the function mouseUp()

  var me = this;

  this.onmousemove = function (event) {
    me._onMouseMove(event);
  };

  this.onmouseup = function (event) {
    me._onMouseUp(event);
  };

  util.addEventListener(document, 'mousemove', me.onmousemove);
  util.addEventListener(document, 'mouseup', me.onmouseup);
  util.preventDefault(event);
};
/**
 * Perform moving operating.
 * This function activated from within the funcion Graph.mouseDown().
 * @param {Event}   event  Well, eehh, the event
 */


Graph3d.prototype._onMouseMove = function (event) {
  this.moving = true;
  event = event || window.event; // calculate change in mouse position

  var diffX = parseFloat(getMouseX(event)) - this.startMouseX;
  var diffY = parseFloat(getMouseY(event)) - this.startMouseY; // move with ctrl or rotate by other

  if (event && event.ctrlKey === true) {
    // calculate change in mouse position
    var scaleX = this.frame.clientWidth * 0.5;
    var scaleY = this.frame.clientHeight * 0.5;
    var offXNew = (this._startCameraOffset.x || 0) - diffX / scaleX * this.camera.armLength * 0.8;
    var offYNew = (this._startCameraOffset.y || 0) + diffY / scaleY * this.camera.armLength * 0.8;
    this.camera.setOffset(offXNew, offYNew);

    this._storeMousePosition(event);
  } else {
    var horizontalNew = this.startArmRotation.horizontal + diffX / 200;
    var verticalNew = this.startArmRotation.vertical + diffY / 200;
    var snapAngle = 4; // degrees

    var snapValue = Math.sin(snapAngle / 360 * 2 * Math.PI); // snap horizontally to nice angles at 0pi, 0.5pi, 1pi, 1.5pi, etc...
    // the -0.001 is to take care that the vertical axis is always drawn at the left front corner

    if (Math.abs(Math.sin(horizontalNew)) < snapValue) {
      horizontalNew = Math.round(horizontalNew / Math.PI) * Math.PI - 0.001;
    }

    if (Math.abs(Math.cos(horizontalNew)) < snapValue) {
      horizontalNew = (Math.round(horizontalNew / Math.PI - 0.5) + 0.5) * Math.PI - 0.001;
    } // snap vertically to nice angles


    if (Math.abs(Math.sin(verticalNew)) < snapValue) {
      verticalNew = Math.round(verticalNew / Math.PI) * Math.PI;
    }

    if (Math.abs(Math.cos(verticalNew)) < snapValue) {
      verticalNew = (Math.round(verticalNew / Math.PI - 0.5) + 0.5) * Math.PI;
    }

    this.camera.setArmRotation(horizontalNew, verticalNew);
  }

  this.redraw(); // fire a cameraPositionChange event

  var parameters = this.getCameraPosition();
  this.emit('cameraPositionChange', parameters);
  util.preventDefault(event);
};
/**
 * Stop moving operating.
 * This function activated from within the funcion Graph.mouseDown().
 * @param {Event}  event   The event
 */


Graph3d.prototype._onMouseUp = function (event) {
  this.frame.style.cursor = 'auto';
  this.leftButtonDown = false; // remove event listeners here

  util.removeEventListener(document, 'mousemove', this.onmousemove);
  util.removeEventListener(document, 'mouseup', this.onmouseup);
  util.preventDefault(event);
};
/**
 * @param {Event}  event   The event
 */


Graph3d.prototype._onClick = function (event) {
  if (!this.onclick_callback) return;

  if (!this.moving) {
    var boundingRect = this.frame.getBoundingClientRect();
    var mouseX = getMouseX(event) - boundingRect.left;
    var mouseY = getMouseY(event) - boundingRect.top;

    var dataPoint = this._dataPointFromXY(mouseX, mouseY);

    if (dataPoint) this.onclick_callback(dataPoint.point.data);
  } else {
    // disable onclick callback, if it came immediately after rotate/pan
    this.moving = false;
  }

  util.preventDefault(event);
};
/**
 * After having moved the mouse, a tooltip should pop up when the mouse is resting on a data point
 * @param {Event}  event   A mouse move event
 */


Graph3d.prototype._onTooltip = function (event) {
  var delay = 300; // ms

  var boundingRect = this.frame.getBoundingClientRect();
  var mouseX = getMouseX(event) - boundingRect.left;
  var mouseY = getMouseY(event) - boundingRect.top;

  if (!this.showTooltip) {
    return;
  }

  if (this.tooltipTimeout) {
    clearTimeout(this.tooltipTimeout);
  } // (delayed) display of a tooltip only if no mouse button is down


  if (this.leftButtonDown) {
    this._hideTooltip();

    return;
  }

  if (this.tooltip && this.tooltip.dataPoint) {
    // tooltip is currently visible
    var dataPoint = this._dataPointFromXY(mouseX, mouseY);

    if (dataPoint !== this.tooltip.dataPoint) {
      // datapoint changed
      if (dataPoint) {
        this._showTooltip(dataPoint);
      } else {
        this._hideTooltip();
      }
    }
  } else {
    // tooltip is currently not visible
    var me = this;
    this.tooltipTimeout = setTimeout(function () {
      me.tooltipTimeout = null; // show a tooltip if we have a data point

      var dataPoint = me._dataPointFromXY(mouseX, mouseY);

      if (dataPoint) {
        me._showTooltip(dataPoint);
      }
    }, delay);
  }
};
/**
 * Event handler for touchstart event on mobile devices
 * @param {Event}  event   The event
 */


Graph3d.prototype._onTouchStart = function (event) {
  this.touchDown = true;
  var me = this;

  this.ontouchmove = function (event) {
    me._onTouchMove(event);
  };

  this.ontouchend = function (event) {
    me._onTouchEnd(event);
  };

  util.addEventListener(document, 'touchmove', me.ontouchmove);
  util.addEventListener(document, 'touchend', me.ontouchend);

  this._onMouseDown(event);
};
/**
 * Event handler for touchmove event on mobile devices
 * @param {Event}  event   The event
 */


Graph3d.prototype._onTouchMove = function (event) {
  this._onMouseMove(event);
};
/**
 * Event handler for touchend event on mobile devices
 * @param {Event}  event   The event
 */


Graph3d.prototype._onTouchEnd = function (event) {
  this.touchDown = false;
  util.removeEventListener(document, 'touchmove', this.ontouchmove);
  util.removeEventListener(document, 'touchend', this.ontouchend);

  this._onMouseUp(event);
};
/**
 * Event handler for mouse wheel event, used to zoom the graph
 * Code from http://adomas.org/javascript-mouse-wheel/
 * @param {Event}  event   The event
 */


Graph3d.prototype._onWheel = function (event) {
  if (!event)
    /* For IE. */
    event = window.event;

  if (this.zoomable && (!this.ctrlToZoom || event.ctrlKey)) {
    // retrieve delta
    var delta = 0;

    if (event.wheelDelta) {
      /* IE/Opera. */
      delta = event.wheelDelta / 120;
    } else if (event.detail) {
      /* Mozilla case. */
      // In Mozilla, sign of delta is different than in IE.
      // Also, delta is multiple of 3.
      delta = -event.detail / 3;
    } // If delta is nonzero, handle it.
    // Basically, delta is now positive if wheel was scrolled up,
    // and negative, if wheel was scrolled down.


    if (delta) {
      var oldLength = this.camera.getArmLength();
      var newLength = oldLength * (1 - delta / 10);
      this.camera.setArmLength(newLength);
      this.redraw();

      this._hideTooltip();
    } // fire a cameraPositionChange event


    var parameters = this.getCameraPosition();
    this.emit('cameraPositionChange', parameters); // Prevent default actions caused by mouse wheel.
    // That might be ugly, but we handle scrolls somehow
    // anyway, so don't bother here..

    util.preventDefault(event);
  }
};
/**
 * Test whether a point lies inside given 2D triangle
 *
 * @param   {vis.Point2d}   point
 * @param   {vis.Point2d[]} triangle
 * @returns {boolean}   true if given point lies inside or on the edge of the
 *                      triangle, false otherwise
 * @private
 */


Graph3d.prototype._insideTriangle = function (point, triangle) {
  var a = triangle[0],
      b = triangle[1],
      c = triangle[2];
  /**
   *
   * @param {number} x
   * @returns {number}
   */

  function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }

  var as = sign((b.x - a.x) * (point.y - a.y) - (b.y - a.y) * (point.x - a.x));
  var bs = sign((c.x - b.x) * (point.y - b.y) - (c.y - b.y) * (point.x - b.x));
  var cs = sign((a.x - c.x) * (point.y - c.y) - (a.y - c.y) * (point.x - c.x)); // each of the three signs must be either equal to each other or zero

  return (as == 0 || bs == 0 || as == bs) && (bs == 0 || cs == 0 || bs == cs) && (as == 0 || cs == 0 || as == cs);
};
/**
 * Find a data point close to given screen position (x, y)
 *
 * @param   {number} x
 * @param   {number} y
 * @returns {Object | null} The closest data point or null if not close to any
 *                          data point
 * @private
 */


Graph3d.prototype._dataPointFromXY = function (x, y) {
  var i,
      distMax = 100,
      // px
  dataPoint = null,
      closestDataPoint = null,
      closestDist = null,
      center = new Point2d_1(x, y);

  if (this.style === Graph3d.STYLE.BAR || this.style === Graph3d.STYLE.BARCOLOR || this.style === Graph3d.STYLE.BARSIZE) {
    // the data points are ordered from far away to closest
    for (i = this.dataPoints.length - 1; i >= 0; i--) {
      dataPoint = this.dataPoints[i];
      var surfaces = dataPoint.surfaces;

      if (surfaces) {
        for (var s = surfaces.length - 1; s >= 0; s--) {
          // split each surface in two triangles, and see if the center point is inside one of these
          var surface = surfaces[s];
          var corners = surface.corners;
          var triangle1 = [corners[0].screen, corners[1].screen, corners[2].screen];
          var triangle2 = [corners[2].screen, corners[3].screen, corners[0].screen];

          if (this._insideTriangle(center, triangle1) || this._insideTriangle(center, triangle2)) {
            // return immediately at the first hit
            return dataPoint;
          }
        }
      }
    }
  } else {
    // find the closest data point, using distance to the center of the point on 2d screen
    for (i = 0; i < this.dataPoints.length; i++) {
      dataPoint = this.dataPoints[i];
      var point = dataPoint.screen;

      if (point) {
        var distX = Math.abs(x - point.x);
        var distY = Math.abs(y - point.y);
        var dist = Math.sqrt(distX * distX + distY * distY);

        if ((closestDist === null || dist < closestDist) && dist < distMax) {
          closestDist = dist;
          closestDataPoint = dataPoint;
        }
      }
    }
  }

  return closestDataPoint;
};
/**
 * Determine if the given style has bars
 *
 * @param   {number} style the style to check
 * @returns {boolean} true if bar style, false otherwise
 */


Graph3d.prototype.hasBars = function (style) {
  return style == Graph3d.STYLE.BAR || style == Graph3d.STYLE.BARCOLOR || style == Graph3d.STYLE.BARSIZE;
};
/**
 * Display a tooltip for given data point
 * @param {Object} dataPoint
 * @private
 */


Graph3d.prototype._showTooltip = function (dataPoint) {
  var content, line, dot;

  if (!this.tooltip) {
    content = document.createElement('div');
    Object.assign(content.style, {}, this.tooltipStyle.content);
    content.style.position = 'absolute';
    line = document.createElement('div');
    Object.assign(line.style, {}, this.tooltipStyle.line);
    line.style.position = 'absolute';
    dot = document.createElement('div');
    Object.assign(dot.style, {}, this.tooltipStyle.dot);
    dot.style.position = 'absolute';
    this.tooltip = {
      dataPoint: null,
      dom: {
        content: content,
        line: line,
        dot: dot
      }
    };
  } else {
    content = this.tooltip.dom.content;
    line = this.tooltip.dom.line;
    dot = this.tooltip.dom.dot;
  }

  this._hideTooltip();

  this.tooltip.dataPoint = dataPoint;

  if (typeof this.showTooltip === 'function') {
    content.innerHTML = this.showTooltip(dataPoint.point);
  } else {
    content.innerHTML = '<table>' + '<tr><td>' + this.xLabel + ':</td><td>' + dataPoint.point.x + '</td></tr>' + '<tr><td>' + this.yLabel + ':</td><td>' + dataPoint.point.y + '</td></tr>' + '<tr><td>' + this.zLabel + ':</td><td>' + dataPoint.point.z + '</td></tr>' + '</table>';
  }

  content.style.left = '0';
  content.style.top = '0';
  this.frame.appendChild(content);
  this.frame.appendChild(line);
  this.frame.appendChild(dot); // calculate sizes

  var contentWidth = content.offsetWidth;
  var contentHeight = content.offsetHeight;
  var lineHeight = line.offsetHeight;
  var dotWidth = dot.offsetWidth;
  var dotHeight = dot.offsetHeight;
  var left = dataPoint.screen.x - contentWidth / 2;
  left = Math.min(Math.max(left, 10), this.frame.clientWidth - 10 - contentWidth);
  line.style.left = dataPoint.screen.x + 'px';
  line.style.top = dataPoint.screen.y - lineHeight + 'px';
  content.style.left = left + 'px';
  content.style.top = dataPoint.screen.y - lineHeight - contentHeight + 'px';
  dot.style.left = dataPoint.screen.x - dotWidth / 2 + 'px';
  dot.style.top = dataPoint.screen.y - dotHeight / 2 + 'px';
};
/**
 * Hide the tooltip when displayed
 * @private
 */


Graph3d.prototype._hideTooltip = function () {
  if (this.tooltip) {
    this.tooltip.dataPoint = null;

    for (var prop in this.tooltip.dom) {
      if (this.tooltip.dom.hasOwnProperty(prop)) {
        var elem = this.tooltip.dom[prop];

        if (elem && elem.parentNode) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  }
};
/**--------------------------------------------------------------------------**/

/**
 * Get the horizontal mouse position from a mouse event
 *
 * @param   {Event}  event
 * @returns {number} mouse x
 */


function getMouseX(event) {
  if ('clientX' in event) return event.clientX;
  return event.targetTouches[0] && event.targetTouches[0].clientX || 0;
}
/**
 * Get the vertical mouse position from a mouse event
 *
 * @param   {Event}  event
 * @returns {number} mouse y
 */


function getMouseY(event) {
  if ('clientY' in event) return event.clientY;
  return event.targetTouches[0] && event.targetTouches[0].clientY || 0;
} // -----------------------------------------------------------------------------
//  Public methods for specific settings
// -----------------------------------------------------------------------------

/**
 * Set the rotation and distance of the camera
 *
 * @param {Object}  pos            An object with the camera position
 * @param {number} [pos.horizontal] The horizontal rotation, between 0 and 2*PI.
 *                                 Optional, can be left undefined.
 * @param {number} [pos.vertical]  The vertical rotation, between 0 and 0.5*PI.
 *                                 if vertical=0.5*PI, the graph is shown from
 *                                 the top. Optional, can be left undefined.
 * @param {number} [pos.distance]  The (normalized) distance of the camera to the
 *                                 center of the graph, a value between 0.71 and
 *                                 5.0. Optional, can be left undefined.
 */


Graph3d.prototype.setCameraPosition = function (pos) {
  Settings.setCameraPosition(pos, this);
  this.redraw();
};
/**
 * Set a new size for the graph
 *
 * @param {string} width  Width in pixels or percentage (for example '800px'
 *                        or '50%')
 * @param {string} height Height in pixels or percentage  (for example '400px'
 *                        or '30%')
 */


Graph3d.prototype.setSize = function (width, height) {
  this._setSize(width, height);

  this.redraw();
}; // -----------------------------------------------------------------------------
//  End public methods for specific settings
// -----------------------------------------------------------------------------


var Graph3d_1 = Graph3d;

var moment$2 = createCommonjsModule$1(function (module, exports) {

  (function (global, factory) {
     module.exports = factory() ;
  })(commonjsGlobal$1, function () {

    var hookCallback;

    function hooks() {
      return hookCallback.apply(null, arguments);
    } // This is done to register the method called with moment()
    // without creating circular dependencies.


    function setHookCallback(callback) {
      hookCallback = callback;
    }

    function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
      // IE8 will treat undefined and null as object if it wasn't for
      // input != null
      return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
      } else {
        var k;

        for (k in obj) {
          if (obj.hasOwnProperty(k)) {
            return false;
          }
        }

        return true;
      }
    }

    function isUndefined(input) {
      return input === void 0;
    }

    function isNumber(input) {
      return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
      return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
      var res = [],
          i;

      for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
      }

      return res;
    }

    function hasOwnProp(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
      for (var i in b) {
        if (hasOwnProp(b, i)) {
          a[i] = b[i];
        }
      }

      if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
      }

      if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
      }

      return a;
    }

    function createUTC(input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
      // We need to deep clone this object.
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
      };
    }

    function getParsingFlags(m) {
      if (m._pf == null) {
        m._pf = defaultParsingFlags();
      }

      return m._pf;
    }

    var some;

    if (Array.prototype.some) {
      some = Array.prototype.some;
    } else {
      some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
          if (i in t && fun.call(this, t[i], i, t)) {
            return true;
          }
        }

        return false;
      };
    }

    function isValid(m) {
      if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function (i) {
          return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

        if (m._strict) {
          isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
          m._isValid = isNowValid;
        } else {
          return isNowValid;
        }
      }

      return m._isValid;
    }

    function createInvalid(flags) {
      var m = createUTC(NaN);

      if (flags != null) {
        extend(getParsingFlags(m), flags);
      } else {
        getParsingFlags(m).userInvalidated = true;
      }

      return m;
    } // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.


    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
      var i, prop, val;

      if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
      }

      if (!isUndefined(from._i)) {
        to._i = from._i;
      }

      if (!isUndefined(from._f)) {
        to._f = from._f;
      }

      if (!isUndefined(from._l)) {
        to._l = from._l;
      }

      if (!isUndefined(from._strict)) {
        to._strict = from._strict;
      }

      if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
      }

      if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
      }

      if (!isUndefined(from._offset)) {
        to._offset = from._offset;
      }

      if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
      }

      if (!isUndefined(from._locale)) {
        to._locale = from._locale;
      }

      if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
          prop = momentProperties[i];
          val = from[prop];

          if (!isUndefined(val)) {
            to[prop] = val;
          }
        }
      }

      return to;
    }

    var updateInProgress = false; // Moment prototype object

    function Moment(config) {
      copyConfig(this, config);
      this._d = new Date(config._d != null ? config._d.getTime() : NaN);

      if (!this.isValid()) {
        this._d = new Date(NaN);
      } // Prevent infinite loop in case updateOffset creates new moment
      // objects.


      if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
      }
    }

    function isMoment(obj) {
      return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }

    function absFloor(number) {
      if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
      } else {
        return Math.floor(number);
      }
    }

    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion,
          value = 0;

      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
      }

      return value;
    } // compare two arrays, return the number of differences


    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length),
          lengthDiff = Math.abs(array1.length - array2.length),
          diffs = 0,
          i;

      for (i = 0; i < len; i++) {
        if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
          diffs++;
        }
      }

      return diffs + lengthDiff;
    }

    function warn(msg) {
      if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
        console.warn('Deprecation warning: ' + msg);
      }
    }

    function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function () {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(null, msg);
        }

        if (firstTime) {
          var args = [];
          var arg;

          for (var i = 0; i < arguments.length; i++) {
            arg = '';

            if (typeof arguments[i] === 'object') {
              arg += '\n[' + i + '] ';

              for (var key in arguments[0]) {
                arg += key + ': ' + arguments[0][key] + ', ';
              }

              arg = arg.slice(0, -2); // Remove trailing comma and space
            } else {
              arg = arguments[i];
            }

            args.push(arg);
          }

          warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
          firstTime = false;
        }

        return fn.apply(this, arguments);
      }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
      }

      if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
      }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
      return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set(config) {
      var prop, i;

      for (i in config) {
        prop = config[i];

        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this['_' + i] = prop;
        }
      }

      this._config = config; // Lenient ordinal parsing accepts just a number in addition to
      // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
      // TODO: Remove "ordinalParse" fallback in next major release.

      this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }

    function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig),
          prop;

      for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
          if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
            res[prop] = {};
            extend(res[prop], parentConfig[prop]);
            extend(res[prop], childConfig[prop]);
          } else if (childConfig[prop] != null) {
            res[prop] = childConfig[prop];
          } else {
            delete res[prop];
          }
        }
      }

      for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
          // make sure changes to properties don't modify parent config
          res[prop] = extend({}, res[prop]);
        }
      }

      return res;
    }

    function Locale(config) {
      if (config != null) {
        this.set(config);
      }
    }

    var keys;

    if (Object.keys) {
      keys = Object.keys;
    } else {
      keys = function (obj) {
        var i,
            res = [];

        for (i in obj) {
          if (hasOwnProp(obj, i)) {
            res.push(i);
          }
        }

        return res;
      };
    }

    var defaultCalendar = {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    };

    function calendar(key, mom, now) {
      var output = this._calendar[key] || this._calendar['sameElse'];
      return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
      LTS: 'h:mm:ss A',
      LT: 'h:mm A',
      L: 'MM/DD/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat(key) {
      var format = this._longDateFormat[key],
          formatUpper = this._longDateFormat[key.toUpperCase()];

      if (format || !formatUpper) {
        return format;
      }

      this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
      });
      return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
      return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
      return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
      var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
      return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
      var lowerCase = unit.toLowerCase();
      aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
      return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {},
          normalizedProp,
          prop;

      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);

          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }

      return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
      priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
      var units = [];

      for (var u in unitsObj) {
        units.push({
          unit: u,
          priority: priorities[u]
        });
      }

      units.sort(function (a, b) {
        return a.priority - b.priority;
      });
      return units;
    }

    function zeroFill(number, targetLength, forceSign) {
      var absNumber = '' + Math.abs(number),
          zerosToFill = targetLength - absNumber.length,
          sign = number >= 0;
      return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var formatFunctions = {};
    var formatTokenFunctions = {}; // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }

    function addFormatToken(token, padded, ordinal, callback) {
      var func = callback;

      if (typeof callback === 'string') {
        func = function () {
          return this[callback]();
        };
      }

      if (token) {
        formatTokenFunctions[token] = func;
      }

      if (padded) {
        formatTokenFunctions[padded[0]] = function () {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
      }

      if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
          return this.localeData().ordinal(func.apply(this, arguments), token);
        };
      }
    }

    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
      }

      return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
      var array = format.match(formattingTokens),
          i,
          length;

      for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }

      return function (mom) {
        var output = '',
            i;

        for (i = 0; i < length; i++) {
          output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }

        return output;
      };
    } // format date using native date object


    function formatMoment(m, format) {
      if (!m.isValid()) {
        return m.localeData().invalidDate();
      }

      format = expandFormat(format, m.localeData());
      formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
      return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
      var i = 5;

      function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
      }

      localFormattingTokens.lastIndex = 0;

      while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
      }

      return format;
    }

    var match1 = /\d/; //       0 - 9

    var match2 = /\d\d/; //      00 - 99

    var match3 = /\d{3}/; //     000 - 999

    var match4 = /\d{4}/; //    0000 - 9999

    var match6 = /[+-]?\d{6}/; // -999999 - 999999

    var match1to2 = /\d\d?/; //       0 - 99

    var match3to4 = /\d\d\d\d?/; //     999 - 9999

    var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

    var match1to3 = /\d{1,3}/; //       0 - 999

    var match1to4 = /\d{1,4}/; //       0 - 9999

    var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

    var matchUnsigned = /\d+/; //       0 - inf

    var matchSigned = /[+-]?\d+/; //    -inf - inf

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months

    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    var regexes = {};

    function addRegexToken(token, regex, strictRegex) {
      regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return isStrict && strictRegex ? strictRegex : regex;
      };
    }

    function getParseRegexForToken(token, config) {
      if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
      }

      return regexes[token](config._strict, config._locale);
    } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


    function unescapeFormat(s) {
      return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
      }));
    }

    function regexEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
      var i,
          func = callback;

      if (typeof token === 'string') {
        token = [token];
      }

      if (isNumber(callback)) {
        func = function (input, array) {
          array[callback] = toInt(input);
        };
      }

      for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
      }
    }

    function addWeekParseToken(token, callback) {
      addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
      });
    }

    function addTimeToArrayFromToken(token, input, config) {
      if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
      }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8; // FORMATTING

    addFormatToken('Y', 0, 0, function () {
      var y = this.year();
      return y <= 9999 ? '' + y : '+' + y;
    });
    addFormatToken(0, ['YY', 2], 0, function () {
      return this.year() % 100;
    });
    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

    addUnitAlias('year', 'y'); // PRIORITIES

    addUnitPriority('year', 1); // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
      array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
      array[YEAR] = parseInt(input, 10);
    }); // HELPERS

    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    } // HOOKS


    hooks.parseTwoDigitYear = function (input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    }; // MOMENTS


    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
      return isLeapYear(this.year());
    }

    function makeGetSet(unit, keepTime) {
      return function (value) {
        if (value != null) {
          set$1(this, unit, value);
          hooks.updateOffset(this, keepTime);
          return this;
        } else {
          return get(this, unit);
        }
      };
    }

    function get(mom, unit) {
      return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1(mom, unit, value) {
      if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
        } else {
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
      }
    } // MOMENTS


    function stringGet(units) {
      units = normalizeUnits(units);

      if (isFunction(this[units])) {
        return this[units]();
      }

      return this;
    }

    function stringSet(units, value) {
      if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);

        for (var i = 0; i < prioritized.length; i++) {
          this[prioritized[i].unit](units[prioritized[i].unit]);
        }
      } else {
        units = normalizeUnits(units);

        if (isFunction(this[units])) {
          return this[units](value);
        }
      }

      return this;
    }

    function mod(n, x) {
      return (n % x + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function (o) {
        // I know
        var i;

        for (i = 0; i < this.length; ++i) {
          if (this[i] === o) {
            return i;
          }
        }

        return -1;
      };
    }

    function daysInMonth(year, month) {
      if (isNaN(year) || isNaN(month)) {
        return NaN;
      }

      var modMonth = mod(month, 12);
      year += (month - modMonth) / 12;
      return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    } // FORMATTING


    addFormatToken('M', ['MM', 2], 'Mo', function () {
      return this.month() + 1;
    });
    addFormatToken('MMM', 0, 0, function (format) {
      return this.localeData().monthsShort(this, format);
    });
    addFormatToken('MMMM', 0, 0, function (format) {
      return this.localeData().months(this, format);
    }); // ALIASES

    addUnitAlias('month', 'M'); // PRIORITY

    addUnitPriority('month', 8); // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
      return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
      return locale.monthsRegex(isStrict);
    });
    addParseToken(['M', 'MM'], function (input, array) {
      array[MONTH] = toInt(input) - 1;
    });
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
      var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


      if (month != null) {
        array[MONTH] = month;
      } else {
        getParsingFlags(config).invalidMonth = input;
      }
    }); // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');

    function localeMonths(m, format) {
      if (!m) {
        return isArray(this._months) ? this._months : this._months['standalone'];
      }

      return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');

    function localeMonthsShort(m, format) {
      if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
      }

      return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
      var i,
          ii,
          mom,
          llc = monthName.toLocaleLowerCase();

      if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];

        for (i = 0; i < 12; ++i) {
          mom = createUTC([2000, i]);
          this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
          this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
      }

      if (strict) {
        if (format === 'MMM') {
          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format === 'MMM') {
          ii = indexOf.call(this._shortMonthsParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }

    function localeMonthsParse(monthName, format, strict) {
      var i, mom, regex;

      if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
      }

      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      } // TODO: add sorting
      // Sorting makes sure if one month (or abbr) is a prefix of another
      // see sorting in computeMonthsParse


      for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);

        if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
          this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }

        if (!strict && !this._monthsParse[i]) {
          regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
          this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        } // test the regex


        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
          return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
          return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    } // MOMENTS


    function setMonth(mom, value) {
      var dayOfMonth;

      if (!mom.isValid()) {
        // No op
        return mom;
      }

      if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
          value = toInt(value);
        } else {
          value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

          if (!isNumber(value)) {
            return mom;
          }
        }
      }

      dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

      mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

      return mom;
    }

    function getSetMonth(value) {
      if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
      } else {
        return get(this, 'Month');
      }
    }

    function getDaysInMonth() {
      return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;

    function monthsShortRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
        }

        if (isStrict) {
          return this._monthsShortStrictRegex;
        } else {
          return this._monthsShortRegex;
        }
      } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
          this._monthsShortRegex = defaultMonthsShortRegex;
        }

        return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
      }
    }

    var defaultMonthsRegex = matchWord;

    function monthsRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
        }

        if (isStrict) {
          return this._monthsStrictRegex;
        } else {
          return this._monthsRegex;
        }
      } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
          this._monthsRegex = defaultMonthsRegex;
        }

        return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
      }
    }

    function computeMonthsParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }

      var shortPieces = [],
          longPieces = [],
          mixedPieces = [],
          i,
          mom;

      for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
      } // Sorting makes sure if one month (or abbr) is a prefix of another it
      // will match the longer piece.


      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);

      for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
      }

      for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
      this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate(y, m, d, h, M, s, ms) {
      // can't just apply() to create a date:
      // https://stackoverflow.com/q/181348
      var date; // the date constructor remaps years 0-99 to 1900-1999

      if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        date = new Date(y + 400, m, d, h, M, s, ms);

        if (isFinite(date.getFullYear())) {
          date.setFullYear(y);
        }
      } else {
        date = new Date(y, m, d, h, M, s, ms);
      }

      return date;
    }

    function createUTCDate(y) {
      var date; // the Date.UTC function remaps years 0-99 to 1900-1999

      if (y < 100 && y >= 0) {
        var args = Array.prototype.slice.call(arguments); // preserve leap years using a full 400 year cycle, then reset

        args[0] = y + 400;
        date = new Date(Date.UTC.apply(null, args));

        if (isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(y);
        }
      } else {
        date = new Date(Date.UTC.apply(null, arguments));
      }

      return date;
    } // start-of-first-week - start-of-year


    function firstWeekOffset(year, dow, doy) {
      var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
      fwd = 7 + dow - doy,
          // first-week day local weekday -- which local weekday is fwd
      fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7,
          weekOffset = firstWeekOffset(year, dow, doy),
          dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
          resYear,
          resDayOfYear;

      if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
      } else {
        resYear = year;
        resDayOfYear = dayOfYear;
      }

      return {
        year: resYear,
        dayOfYear: resDayOfYear
      };
    }

    function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy),
          week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
          resWeek,
          resYear;

      if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
      } else {
        resYear = mom.year();
        resWeek = week;
      }

      return {
        week: resWeek,
        year: resYear
      };
    }

    function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy),
          weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    } // FORMATTING


    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W'); // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5); // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
      week[token.substr(0, 1)] = toInt(input);
    }); // HELPERS
    // LOCALES

    function localeWeek(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 6th is the first week of the year.

    };

    function localeFirstDayOfWeek() {
      return this._week.dow;
    }

    function localeFirstDayOfYear() {
      return this._week.doy;
    } // MOMENTS


    function getSetWeek(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, 'd');
    } // FORMATTING


    addFormatToken('d', 0, 'do', 'day');
    addFormatToken('dd', 0, 0, function (format) {
      return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken('ddd', 0, 0, function (format) {
      return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken('dddd', 0, 0, function (format) {
      return this.localeData().weekdays(this, format);
    });
    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E'); // PRIORITY

    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11); // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
      return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
      return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
      return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
      var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


      if (weekday != null) {
        week.d = weekday;
      } else {
        getParsingFlags(config).invalidWeekday = input;
      }
    });
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
      week[token] = toInt(input);
    }); // HELPERS

    function parseWeekday(input, locale) {
      if (typeof input !== 'string') {
        return input;
      }

      if (!isNaN(input)) {
        return parseInt(input, 10);
      }

      input = locale.weekdaysParse(input);

      if (typeof input === 'number') {
        return input;
      }

      return null;
    }

    function parseIsoWeekday(input, locale) {
      if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
      }

      return isNaN(input) ? null : input;
    } // LOCALES


    function shiftWeekdays(ws, n) {
      return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');

    function localeWeekdays(m, format) {
      var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
      return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

    function localeWeekdaysShort(m) {
      return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');

    function localeWeekdaysMin(m) {
      return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
      var i,
          ii,
          mom,
          llc = weekdayName.toLocaleLowerCase();

      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
          mom = createUTC([2000, 1]).day(i);
          this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
          this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
          this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
      }

      if (strict) {
        if (format === 'dddd') {
          ii = indexOf.call(this._weekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format === 'dddd') {
          ii = indexOf.call(this._weekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._shortWeekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
          ii = indexOf.call(this._shortWeekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._weekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._weekdaysParse, llc);

          if (ii !== -1) {
            return ii;
          }

          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
      var i, mom, regex;

      if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
      }

      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
      }

      for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);

        if (strict && !this._fullWeekdaysParse[i]) {
          this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
          this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
          this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
        }

        if (!this._weekdaysParse[i]) {
          regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
          this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        } // test the regex


        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
          return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
          return i;
        }
      }
    } // MOMENTS


    function getSetDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
      } else {
        return day;
      }
    }

    function getSetLocaleDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      } // behaves the same as moment#day except
      // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
      // as a setter, sunday should belong to the previous week.


      if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
        return this.day() || 7;
      }
    }

    var defaultWeekdaysRegex = matchWord;

    function weekdaysRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }

        if (isStrict) {
          return this._weekdaysStrictRegex;
        } else {
          return this._weekdaysRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          this._weekdaysRegex = defaultWeekdaysRegex;
        }

        return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
      }
    }

    var defaultWeekdaysShortRegex = matchWord;

    function weekdaysShortRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }

        if (isStrict) {
          return this._weekdaysShortStrictRegex;
        } else {
          return this._weekdaysShortRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }

        return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
      }
    }

    var defaultWeekdaysMinRegex = matchWord;

    function weekdaysMinRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }

        if (isStrict) {
          return this._weekdaysMinStrictRegex;
        } else {
          return this._weekdaysMinRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }

        return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
      }
    }

    function computeWeekdaysParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }

      var minPieces = [],
          shortPieces = [],
          longPieces = [],
          mixedPieces = [],
          i,
          mom,
          minp,
          shortp,
          longp;

      for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
      } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
      // will match the longer piece.


      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);

      for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;
      this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
      this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
      this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    } // FORMATTING


    function hFormat() {
      return this.hours() % 12 || 12;
    }

    function kFormat() {
      return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);
    addFormatToken('hmm', 0, 0, function () {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken('hmmss', 0, 0, function () {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken('Hmm', 0, 0, function () {
      return '' + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken('Hmmss', 0, 0, function () {
      return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });

    function meridiem(token, lowercase) {
      addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
      });
    }

    meridiem('a', true);
    meridiem('A', false); // ALIASES

    addUnitAlias('hour', 'h'); // PRIORITY

    addUnitPriority('hour', 13); // PARSING

    function matchMeridiem(isStrict, locale) {
      return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
      config._isPm = config._locale.isPM(input);
      config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
      array[HOUR] = toInt(input);
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
    }); // LOCALES

    function localeIsPM(input) {
      // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
      // Using charAt should be more compatible.
      return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

    function localeMeridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'pm' : 'PM';
      } else {
        return isLower ? 'am' : 'AM';
      }
    } // MOMENTS
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.


    var getSetHour = makeGetSet('Hours', true);
    var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,
      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,
      week: defaultLocaleWeek,
      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,
      meridiemParse: defaultLocaleMeridiemParse
    }; // internal storage for locale config files

    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace('_', '-') : key;
    } // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


    function chooseLocale(names) {
      var i = 0,
          j,
          next,
          locale,
          split;

      while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;

        while (j > 0) {
          locale = loadLocale(split.slice(0, j).join('-'));

          if (locale) {
            return locale;
          }

          if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
            //the next array item is better than a shallower substring of this one
            break;
          }

          j--;
        }

        i++;
      }

      return globalLocale;
    }

    function loadLocale(name) {
      var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

      if (!locales[name] && 'object' !== 'undefined' && module && module.exports) {
        try {
          oldLocale = globalLocale._abbr;
          var aliasedRequire = commonjsRequire$1;
          aliasedRequire('./locale/' + name);
          getSetGlobalLocale(oldLocale);
        } catch (e) {}
      }

      return locales[name];
    } // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.


    function getSetGlobalLocale(key, values) {
      var data;

      if (key) {
        if (isUndefined(values)) {
          data = getLocale(key);
        } else {
          data = defineLocale(key, values);
        }

        if (data) {
          // moment.duration._locale = moment._locale = data;
          globalLocale = data;
        } else {
          if (typeof console !== 'undefined' && console.warn) {
            //warn user if arguments are passed but the locale could not be set
            console.warn('Locale ' + key + ' not found. Did you forget to load it?');
          }
        }
      }

      return globalLocale._abbr;
    }

    function defineLocale(name, config) {
      if (config !== null) {
        var locale,
            parentConfig = baseConfig;
        config.abbr = name;

        if (locales[name] != null) {
          deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
          parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
          if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
          } else {
            locale = loadLocale(config.parentLocale);

            if (locale != null) {
              parentConfig = locale._config;
            } else {
              if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
              }

              localeFamilies[config.parentLocale].push({
                name: name,
                config: config
              });
              return null;
            }
          }
        }

        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
          localeFamilies[name].forEach(function (x) {
            defineLocale(x.name, x.config);
          });
        } // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.


        getSetGlobalLocale(name);
        return locales[name];
      } else {
        // useful for testing
        delete locales[name];
        return null;
      }
    }

    function updateLocale(name, config) {
      if (config != null) {
        var locale,
            tmpLocale,
            parentConfig = baseConfig; // MERGE

        tmpLocale = loadLocale(name);

        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }

        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale; // backwards compat for now: also set the locale

        getSetGlobalLocale(name);
      } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
            locales[name] = locales[name].parentLocale;
          } else if (locales[name] != null) {
            delete locales[name];
          }
        }
      }

      return locales[name];
    } // returns locale data


    function getLocale(key) {
      var locale;

      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }

      if (!key) {
        return globalLocale;
      }

      if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);

        if (locale) {
          return locale;
        }

        key = [key];
      }

      return chooseLocale(key);
    }

    function listLocales() {
      return keys(locales);
    }

    function checkOverflow(m) {
      var overflow;
      var a = m._a;

      if (a && getParsingFlags(m).overflow === -2) {
        overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
        }

        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
        }

        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
      }

      return m;
    } // Pick the first defined of two or three arguments.


    function defaults(a, b, c) {
      if (a != null) {
        return a;
      }

      if (b != null) {
        return b;
      }

      return c;
    }

    function currentDateArray(config) {
      // hooks is actually the exported moment object
      var nowValue = new Date(hooks.now());

      if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
      }

      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    } // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]


    function configFromArray(config) {
      var i,
          date,
          input = [],
          currentDate,
          expectedWeekday,
          yearToUse;

      if (config._d) {
        return;
      }

      currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
      } //if the day of the year is set, figure out what it is


      if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
          getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
      } // Default to current date.
      // * if no year, month, day of month are given, default to today
      // * if day of month is given, default month and year
      // * if month is given, default only year
      // * if year is given, don't default anything


      for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
      } // Zero out whatever was not defaulted, including time


      for (; i < 7; i++) {
        config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
      } // Check for 24:00:00.000


      if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
      }

      config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
      expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
      // with parseZone.

      if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }

      if (config._nextDay) {
        config._a[HOUR] = 24;
      } // check for mismatching day of week


      if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
      }
    }

    function dayOfYearFromWeekInfo(config) {
      var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
      w = config._w;

      if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).

        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);

        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        var curWeek = weekOfYear(createLocal(), dow, doy);
        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
          // weekday -- low day numbers are considered next week
          weekday = w.d;

          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w.e != null) {
          // local weekday -- counting starts from beginning of week
          weekday = w.e + dow;

          if (w.e < 0 || w.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          // default to beginning of week
          weekday = dow;
        }
      }

      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
      } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
      }
    } // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
    var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]]; // iso time formats and regexes

    var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i; // date from iso format

    function configFromISO(config) {
      var i,
          l,
          string = config._i,
          match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
          allowTime,
          dateFormat,
          timeFormat,
          tzFormat;

      if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
          if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
          }
        }

        if (dateFormat == null) {
          config._isValid = false;
          return;
        }

        if (match[3]) {
          for (i = 0, l = isoTimes.length; i < l; i++) {
            if (isoTimes[i][1].exec(match[3])) {
              // match[2] should be 'T' or space
              timeFormat = (match[2] || ' ') + isoTimes[i][0];
              break;
            }
          }

          if (timeFormat == null) {
            config._isValid = false;
            return;
          }
        }

        if (!allowTime && timeFormat != null) {
          config._isValid = false;
          return;
        }

        if (match[4]) {
          if (tzRegex.exec(match[4])) {
            tzFormat = 'Z';
          } else {
            config._isValid = false;
            return;
          }
        }

        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
      } else {
        config._isValid = false;
      }
    } // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3


    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

      if (secondStr) {
        result.push(parseInt(secondStr, 10));
      }

      return result;
    }

    function untruncateYear(yearStr) {
      var year = parseInt(yearStr, 10);

      if (year <= 49) {
        return 2000 + year;
      } else if (year <= 999) {
        return 1900 + year;
      }

      return year;
    }

    function preprocessRFC2822(s) {
      // Remove comments and folding whitespace and replace multiple-spaces with a single space
      return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
      if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
            weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

        if (weekdayProvided !== weekdayActual) {
          getParsingFlags(config).weekdayMismatch = true;
          config._isValid = false;
          return false;
        }
      }

      return true;
    }

    var obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
        return obsOffsets[obsOffset];
      } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
      } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100,
            h = (hm - m) / 100;
        return h * 60 + m;
      }
    } // date and time from ref 2822 format


    function configFromRFC2822(config) {
      var match = rfc2822.exec(preprocessRFC2822(config._i));

      if (match) {
        var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

        if (!checkWeekday(match[1], parsedArray, config)) {
          return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);
        config._d = createUTCDate.apply(null, config._a);

        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        getParsingFlags(config).rfc2822 = true;
      } else {
        config._isValid = false;
      }
    } // date from iso format or fallback


    function configFromString(config) {
      var matched = aspNetJsonRegex.exec(config._i);

      if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
      }

      configFromISO(config);

      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }

      configFromRFC2822(config);

      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      } // Final attempt, use Input Fallback


      hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
      config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }); // constant that refers to the ISO standard

    hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


    hooks.RFC_2822 = function () {}; // date from string and format string


    function configFromStringAndFormat(config) {
      // TODO: Move this to another part of the creation flow to prevent circular deps
      if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
      }

      if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
      }

      config._a = [];
      getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

      var string = '' + config._i,
          i,
          parsedInput,
          tokens,
          token,
          skipped,
          stringLength = string.length,
          totalParsedInputLength = 0;
      tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));

        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));

          if (skipped.length > 0) {
            getParsingFlags(config).unusedInput.push(skipped);
          }

          string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
          totalParsedInputLength += parsedInput.length;
        } // don't parse if it's not a known token


        if (formatTokenFunctions[token]) {
          if (parsedInput) {
            getParsingFlags(config).empty = false;
          } else {
            getParsingFlags(config).unusedTokens.push(token);
          }

          addTimeToArrayFromToken(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
          getParsingFlags(config).unusedTokens.push(token);
        }
      } // add remaining unparsed input length to the string


      getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

      if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
      } // clear _12h flag if hour is <= 12


      if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
      }

      getParsingFlags(config).parsedDateParts = config._a.slice(0);
      getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

      config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
      configFromArray(config);
      checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
      var isPm;

      if (meridiem == null) {
        // nothing to do
        return hour;
      }

      if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
      } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);

        if (isPm && hour < 12) {
          hour += 12;
        }

        if (!isPm && hour === 12) {
          hour = 0;
        }

        return hour;
      } else {
        // this is not supposed to happen
        return hour;
      }
    } // date from string and array of format strings


    function configFromStringAndArray(config) {
      var tempConfig, bestMoment, scoreToBeat, i, currentScore;

      if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
      }

      for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);

        if (config._useUTC != null) {
          tempConfig._useUTC = config._useUTC;
        }

        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
          continue;
        } // if there is any input that was not parsed add a penalty for that format


        currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }

      extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
      if (config._d) {
        return;
      }

      var i = normalizeObjectUnits(config._i);
      config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
      });
      configFromArray(config);
    }

    function createFromConfig(config) {
      var res = new Moment(checkOverflow(prepareConfig(config)));

      if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
      }

      return res;
    }

    function prepareConfig(config) {
      var input = config._i,
          format = config._f;
      config._locale = config._locale || getLocale(config._l);

      if (input === null || format === undefined && input === '') {
        return createInvalid({
          nullInput: true
        });
      }

      if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
      }

      if (isMoment(input)) {
        return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
        config._d = input;
      } else if (isArray(format)) {
        configFromStringAndArray(config);
      } else if (format) {
        configFromStringAndFormat(config);
      } else {
        configFromInput(config);
      }

      if (!isValid(config)) {
        config._d = null;
      }

      return config;
    }

    function configFromInput(config) {
      var input = config._i;

      if (isUndefined(input)) {
        config._d = new Date(hooks.now());
      } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
      } else if (typeof input === 'string') {
        configFromString(config);
      } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
          return parseInt(obj, 10);
        });
        configFromArray(config);
      } else if (isObject(input)) {
        configFromObject(config);
      } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
      } else {
        hooks.createFromInputFallback(config);
      }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
      var c = {};

      if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
      }

      if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
        input = undefined;
      } // object construction must be done this way.
      // https://github.com/moment/moment/issues/1423


      c._isAMomentObject = true;
      c._useUTC = c._isUTC = isUTC;
      c._l = locale;
      c._i = input;
      c._f = format;
      c._strict = strict;
      return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
      var other = createLocal.apply(null, arguments);

      if (this.isValid() && other.isValid()) {
        return other < this ? this : other;
      } else {
        return createInvalid();
      }
    });
    var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
      var other = createLocal.apply(null, arguments);

      if (this.isValid() && other.isValid()) {
        return other > this ? this : other;
      } else {
        return createInvalid();
      }
    }); // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.

    function pickBy(fn, moments) {
      var res, i;

      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }

      if (!moments.length) {
        return createLocal();
      }

      res = moments[0];

      for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
          res = moments[i];
        }
      }

      return res;
    } // TODO: Use [].sort instead?


    function min() {
      var args = [].slice.call(arguments, 0);
      return pickBy('isBefore', args);
    }

    function max() {
      var args = [].slice.call(arguments, 0);
      return pickBy('isAfter', args);
    }

    var now = function () {
      return Date.now ? Date.now() : +new Date();
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
      for (var key in m) {
        if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
          return false;
        }
      }

      var unitHasDecimal = false;

      for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
          if (unitHasDecimal) {
            return false; // only allow non-integers for smallest unit
          }

          if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
            unitHasDecimal = true;
          }
        }
      }

      return true;
    }

    function isValid$1() {
      return this._isValid;
    }

    function createInvalid$1() {
      return createDuration(NaN);
    }

    function Duration(duration) {
      var normalizedInput = normalizeObjectUnits(duration),
          years = normalizedInput.year || 0,
          quarters = normalizedInput.quarter || 0,
          months = normalizedInput.month || 0,
          weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
          days = normalizedInput.day || 0,
          hours = normalizedInput.hour || 0,
          minutes = normalizedInput.minute || 0,
          seconds = normalizedInput.second || 0,
          milliseconds = normalizedInput.millisecond || 0;
      this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

      this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
      minutes * 6e4 + // 1000 * 60
      hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
      // Because of dateAddRemove treats 24 hours as different from a
      // day when working around DST, we need to store them separately

      this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
      // which months you are are talking about, so we have to store
      // it separately.

      this._months = +months + quarters * 3 + years * 12;
      this._data = {};
      this._locale = getLocale();

      this._bubble();
    }

    function isDuration(obj) {
      return obj instanceof Duration;
    }

    function absRound(number) {
      if (number < 0) {
        return Math.round(-1 * number) * -1;
      } else {
        return Math.round(number);
      }
    } // FORMATTING


    function offset(token, separator) {
      addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';

        if (offset < 0) {
          offset = -offset;
          sign = '-';
        }

        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
      });
    }

    offset('Z', ':');
    offset('ZZ', ''); // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
      config._useUTC = true;
      config._tzm = offsetFromString(matchShortOffset, input);
    }); // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']

    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
      var matches = (string || '').match(matcher);

      if (matches === null) {
        return null;
      }

      var chunk = matches[matches.length - 1] || [];
      var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
      var minutes = +(parts[1] * 60) + toInt(parts[2]);
      return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    } // Return a moment from input, that is local/utc/zone equivalent to model.


    function cloneWithOffset(input, model) {
      var res, diff;

      if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

        res._d.setTime(res._d.valueOf() + diff);

        hooks.updateOffset(res, false);
        return res;
      } else {
        return createLocal(input).local();
      }
    }

    function getDateOffset(m) {
      // On Firefox.24 Date#getTimezoneOffset returns a floating point.
      // https://github.com/moment/moment/pull/1871
      return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    } // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.


    hooks.updateOffset = function () {}; // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.


    function getSetOffset(input, keepLocalTime, keepMinutes) {
      var offset = this._offset || 0,
          localAdjust;

      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      if (input != null) {
        if (typeof input === 'string') {
          input = offsetFromString(matchShortOffset, input);

          if (input === null) {
            return this;
          }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
          input = input * 60;
        }

        if (!this._isUTC && keepLocalTime) {
          localAdjust = getDateOffset(this);
        }

        this._offset = input;
        this._isUTC = true;

        if (localAdjust != null) {
          this.add(localAdjust, 'm');
        }

        if (offset !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addSubtract(this, createDuration(input - offset, 'm'), 1, false);
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            hooks.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }

        return this;
      } else {
        return this._isUTC ? offset : getDateOffset(this);
      }
    }

    function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== 'string') {
          input = -input;
        }

        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }

    function setOffsetToUTC(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
          this.subtract(getDateOffset(this), 'm');
        }
      }

      return this;
    }

    function setOffsetToParsedOffset() {
      if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);

        if (tZone != null) {
          this.utcOffset(tZone);
        } else {
          this.utcOffset(0, true);
        }
      }

      return this;
    }

    function hasAlignedHourOffset(input) {
      if (!this.isValid()) {
        return false;
      }

      input = input ? createLocal(input).utcOffset() : 0;
      return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }

    function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }

      var c = {};
      copyConfig(c, this);
      c = prepareConfig(c);

      if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }

      return this._isDSTShifted;
    }

    function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    } // ASP.NET json date format regex


    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day

    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
      var duration = input,
          // matching against regexp is expensive, do it on demand
      match = null,
          sign,
          ret,
          diffRes;

      if (isDuration(input)) {
        duration = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months
        };
      } else if (isNumber(input)) {
        duration = {};

        if (key) {
          duration[key] = input;
        } else {
          duration.milliseconds = input;
        }
      } else if (!!(match = aspNetRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
          y: 0,
          d: toInt(match[DATE]) * sign,
          h: toInt(match[HOUR]) * sign,
          m: toInt(match[MINUTE]) * sign,
          s: toInt(match[SECOND]) * sign,
          ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

        };
      } else if (!!(match = isoRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
          y: parseIso(match[2], sign),
          M: parseIso(match[3], sign),
          w: parseIso(match[4], sign),
          d: parseIso(match[5], sign),
          h: parseIso(match[6], sign),
          m: parseIso(match[7], sign),
          s: parseIso(match[8], sign)
        };
      } else if (duration == null) {
        // checks for null or undefined
        duration = {};
      } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
      }

      ret = new Duration(duration);

      if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
      }

      return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
      // We'd normally use ~~inp for this, but unfortunately it also
      // converts floats to ints.
      // inp may be undefined, so careful calling replace on it.
      var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

      return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
      var res = {};
      res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

      if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
      }

      res.milliseconds = +other - +base.clone().add(res.months, 'M');
      return res;
    }

    function momentsDifference(base, other) {
      var res;

      if (!(base.isValid() && other.isValid())) {
        return {
          milliseconds: 0,
          months: 0
        };
      }

      other = cloneWithOffset(other, base);

      if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
      } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }

      return res;
    } // TODO: remove 'name' arg after deprecation is removed


    function createAdder(direction, name) {
      return function (val, period) {
        var dur, tmp; //invert the arguments, but complain about it

        if (period !== null && !isNaN(+period)) {
          deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
          tmp = val;
          val = period;
          period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
      };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
      var milliseconds = duration._milliseconds,
          days = absRound(duration._days),
          months = absRound(duration._months);

      if (!mom.isValid()) {
        // No op
        return;
      }

      updateOffset = updateOffset == null ? true : updateOffset;

      if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
      }

      if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
      }

      if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
      }

      if (updateOffset) {
        hooks.updateOffset(mom, days || months);
      }
    }

    var add = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
      var diff = myMoment.diff(now, 'days', true);
      return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1(time, formats) {
      // We want to compare the start of today, vs this.
      // Getting start-of-today depends on whether we're local/utc/offset or not.
      var now = time || createLocal(),
          sod = cloneWithOffset(now, this).startOf('day'),
          format = hooks.calendarFormat(this, sod) || 'sameElse';
      var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
      return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone() {
      return new Moment(this);
    }

    function isAfter(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);

      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }

      units = normalizeUnits(units) || 'millisecond';

      if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
      } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
      }
    }

    function isBefore(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);

      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }

      units = normalizeUnits(units) || 'millisecond';

      if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
      } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
      }
    }

    function isBetween(from, to, units, inclusivity) {
      var localFrom = isMoment(from) ? from : createLocal(from),
          localTo = isMoment(to) ? to : createLocal(to);

      if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
      }

      inclusivity = inclusivity || '()';
      return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input),
          inputMs;

      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }

      units = normalizeUnits(units) || 'millisecond';

      if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
      } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
      }
    }

    function isSameOrAfter(input, units) {
      return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
      return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
      var that, zoneDelta, output;

      if (!this.isValid()) {
        return NaN;
      }

      that = cloneWithOffset(input, this);

      if (!that.isValid()) {
        return NaN;
      }

      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
      units = normalizeUnits(units);

      switch (units) {
        case 'year':
          output = monthDiff(this, that) / 12;
          break;

        case 'month':
          output = monthDiff(this, that);
          break;

        case 'quarter':
          output = monthDiff(this, that) / 3;
          break;

        case 'second':
          output = (this - that) / 1e3;
          break;
        // 1000

        case 'minute':
          output = (this - that) / 6e4;
          break;
        // 1000 * 60

        case 'hour':
          output = (this - that) / 36e5;
          break;
        // 1000 * 60 * 60

        case 'day':
          output = (this - that - zoneDelta) / 864e5;
          break;
        // 1000 * 60 * 60 * 24, negate dst

        case 'week':
          output = (this - that - zoneDelta) / 6048e5;
          break;
        // 1000 * 60 * 60 * 24 * 7, negate dst

        default:
          output = this - that;
      }

      return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
      // difference in months
      var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
          // b is in (anchor - 1 month, anchor + 1 month)
      anchor = a.clone().add(wholeMonthDiff, 'months'),
          anchor2,
          adjust;

      if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

        adjust = (b - anchor) / (anchor - anchor2);
      } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

        adjust = (b - anchor) / (anchor2 - anchor);
      } //check for negative zero, return zero if negative zero


      return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
      return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
      if (!this.isValid()) {
        return null;
      }

      var utc = keepOffset !== true;
      var m = utc ? this.clone().utc() : this;

      if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
      }

      if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
          return this.toDate().toISOString();
        } else {
          return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
      }

      return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */


    function inspect() {
      if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
      }

      var func = 'moment';
      var zone = '';

      if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
      }

      var prefix = '[' + func + '("]';
      var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
      var datetime = '-MM-DD[T]HH:mm:ss.SSS';
      var suffix = zone + '[")]';
      return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
      if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
      }

      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({
          to: this,
          from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }

    function fromNow(withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
      if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
        return createDuration({
          from: this,
          to: time
        }).locale(this.locale()).humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }

    function toNow(withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
    } // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.


    function locale(key) {
      var newLocaleData;

      if (key === undefined) {
        return this._locale._abbr;
      } else {
        newLocaleData = getLocale(key);

        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }

        return this;
      }
    }

    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
      if (key === undefined) {
        return this.localeData();
      } else {
        return this.locale(key);
      }
    });

    function localeData() {
      return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR; // actual modulo - handles negative numbers (for dates before 1970):

    function mod$1(dividend, divisor) {
      return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
      // the date constructor remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
      } else {
        return new Date(y, m, d).valueOf();
      }
    }

    function utcStartOfDate(y, m, d) {
      // Date.UTC remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
      } else {
        return Date.UTC(y, m, d);
      }
    }

    function startOf(units) {
      var time;
      units = normalizeUnits(units);

      if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
      }

      var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

      switch (units) {
        case 'year':
          time = startOfDate(this.year(), 0, 1);
          break;

        case 'quarter':
          time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
          break;

        case 'month':
          time = startOfDate(this.year(), this.month(), 1);
          break;

        case 'week':
          time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
          break;

        case 'isoWeek':
          time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
          break;

        case 'day':
        case 'date':
          time = startOfDate(this.year(), this.month(), this.date());
          break;

        case 'hour':
          time = this._d.valueOf();
          time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
          break;

        case 'minute':
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_MINUTE);
          break;

        case 'second':
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_SECOND);
          break;
      }

      this._d.setTime(time);

      hooks.updateOffset(this, true);
      return this;
    }

    function endOf(units) {
      var time;
      units = normalizeUnits(units);

      if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
      }

      var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

      switch (units) {
        case 'year':
          time = startOfDate(this.year() + 1, 0, 1) - 1;
          break;

        case 'quarter':
          time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
          break;

        case 'month':
          time = startOfDate(this.year(), this.month() + 1, 1) - 1;
          break;

        case 'week':
          time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;

        case 'isoWeek':
          time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
          break;

        case 'day':
        case 'date':
          time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
          break;

        case 'hour':
          time = this._d.valueOf();
          time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
          break;

        case 'minute':
          time = this._d.valueOf();
          time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
          break;

        case 'second':
          time = this._d.valueOf();
          time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
          break;
      }

      this._d.setTime(time);

      hooks.updateOffset(this, true);
      return this;
    }

    function valueOf() {
      return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
      return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
      return new Date(this.valueOf());
    }

    function toArray() {
      var m = this;
      return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject() {
      var m = this;
      return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
      };
    }

    function toJSON() {
      // new Date(NaN).toJSON() === null
      return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
      return isValid(this);
    }

    function parsingFlags() {
      return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
      return getParsingFlags(this).overflow;
    }

    function creationData() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    } // FORMATTING


    addFormatToken(0, ['gg', 2], 0, function () {
      return this.weekYear() % 100;
    });
    addFormatToken(0, ['GG', 2], 0, function () {
      return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
      addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1); // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
      week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
      week[token] = hooks.parseTwoDigitYear(input);
    }); // MOMENTS

    function getSetWeekYear(input) {
      return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }

    function getSetISOWeekYear(input) {
      return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear() {
      return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear() {
      var weekInfo = this.localeData()._week;

      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;

      if (input == null) {
        return weekOfYear(this, dow, doy).year;
      } else {
        weeksTarget = weeksInYear(input, dow, doy);

        if (week > weeksTarget) {
          week = weeksTarget;
        }

        return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
          date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
    } // FORMATTING


    addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

    addUnitAlias('quarter', 'Q'); // PRIORITY

    addUnitPriority('quarter', 7); // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
    }); // MOMENTS

    function getSetQuarter(input) {
      return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    } // FORMATTING


    addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

    addUnitAlias('date', 'D'); // PRIORITY

    addUnitPriority('date', 9); // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
      // TODO: Remove "ordinalParse" fallback in next major release.
      return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
    });
    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
    }); // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

    addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

    addUnitPriority('dayOfYear', 4); // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
      config._dayOfYear = toInt(input);
    }); // HELPERS
    // MOMENTS

    function getSetDayOfYear(input) {
      var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    } // FORMATTING


    addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

    addUnitAlias('minute', 'm'); // PRIORITY

    addUnitPriority('minute', 14); // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE); // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

    addUnitAlias('second', 's'); // PRIORITY

    addUnitPriority('second', 15); // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND); // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

    addFormatToken('S', 0, 0, function () {
      return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, ['SS', 2], 0, function () {
      return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
      return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
      return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
      return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
      return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
      return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
      return this.millisecond() * 1000000;
    }); // ALIASES

    addUnitAlias('millisecond', 'ms'); // PRIORITY

    addUnitPriority('millisecond', 16); // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var token;

    for (token = 'SSSS'; token.length <= 9; token += 'S') {
      addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
      array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
      addParseToken(token, parseMs);
    } // MOMENTS


    var getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

    function getZoneAbbr() {
      return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
      return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix(input) {
      return createLocal(input * 1000);
    }

    function createInZone() {
      return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
      return string;
    }

    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
      var locale = getLocale();
      var utc = createUTC().set(setter, index);
      return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';

      if (index != null) {
        return get$1(format, index, field, 'month');
      }

      var i;
      var out = [];

      for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
      }

      return out;
    } // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)


    function listWeekdaysImpl(localeSorted, format, index, field) {
      if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';
      } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';
      }

      var locale = getLocale(),
          shift = localeSorted ? locale._week.dow : 0;

      if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
      }

      var i;
      var out = [];

      for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
      }

      return out;
    }

    function listMonths(format, index) {
      return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
      return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (number) {
        var b = number % 10,
            output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        return number + output;
      }
    }); // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
    var mathAbs = Math.abs;

    function abs() {
      var data = this._data;
      this._milliseconds = mathAbs(this._milliseconds);
      this._days = mathAbs(this._days);
      this._months = mathAbs(this._months);
      data.milliseconds = mathAbs(data.milliseconds);
      data.seconds = mathAbs(data.seconds);
      data.minutes = mathAbs(data.minutes);
      data.hours = mathAbs(data.hours);
      data.months = mathAbs(data.months);
      data.years = mathAbs(data.years);
      return this;
    }

    function addSubtract$1(duration, input, value, direction) {
      var other = createDuration(input, value);
      duration._milliseconds += direction * other._milliseconds;
      duration._days += direction * other._days;
      duration._months += direction * other._months;
      return duration._bubble();
    } // supports only 2.0-style add(1, 's') or add(duration)


    function add$1(input, value) {
      return addSubtract$1(this, input, value, 1);
    } // supports only 2.0-style subtract(1, 's') or subtract(duration)


    function subtract$1(input, value) {
      return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
      if (number < 0) {
        return Math.floor(number);
      } else {
        return Math.ceil(number);
      }
    }

    function bubble() {
      var milliseconds = this._milliseconds;
      var days = this._days;
      var months = this._months;
      var data = this._data;
      var seconds, minutes, hours, years, monthsFromDays; // if we have a mix of positive and negative values, bubble down first
      // check: https://github.com/moment/moment/issues/2166

      if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
      } // The following code bubbles up values, see the tests for
      // examples of what that means.


      data.milliseconds = milliseconds % 1000;
      seconds = absFloor(milliseconds / 1000);
      data.seconds = seconds % 60;
      minutes = absFloor(seconds / 60);
      data.minutes = minutes % 60;
      hours = absFloor(minutes / 60);
      data.hours = hours % 24;
      days += absFloor(hours / 24); // convert days to months

      monthsFromDays = absFloor(daysToMonths(days));
      months += monthsFromDays;
      days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

      years = absFloor(months / 12);
      months %= 12;
      data.days = days;
      data.months = months;
      data.years = years;
      return this;
    }

    function daysToMonths(days) {
      // 400 years have 146097 days (taking into account leap year rules)
      // 400 years have 12 months === 4800
      return days * 4800 / 146097;
    }

    function monthsToDays(months) {
      // the reverse of daysToMonths
      return months * 146097 / 4800;
    }

    function as(units) {
      if (!this.isValid()) {
        return NaN;
      }

      var days;
      var months;
      var milliseconds = this._milliseconds;
      units = normalizeUnits(units);

      if (units === 'month' || units === 'quarter' || units === 'year') {
        days = this._days + milliseconds / 864e5;
        months = this._months + daysToMonths(days);

        switch (units) {
          case 'month':
            return months;

          case 'quarter':
            return months / 3;

          case 'year':
            return months / 12;
        }
      } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));

        switch (units) {
          case 'week':
            return days / 7 + milliseconds / 6048e5;

          case 'day':
            return days + milliseconds / 864e5;

          case 'hour':
            return days * 24 + milliseconds / 36e5;

          case 'minute':
            return days * 1440 + milliseconds / 6e4;

          case 'second':
            return days * 86400 + milliseconds / 1000;
          // Math.floor prevents floating point math errors here

          case 'millisecond':
            return Math.floor(days * 864e5) + milliseconds;

          default:
            throw new Error('Unknown unit ' + units);
        }
      }
    } // TODO: Use this.as('ms')?


    function valueOf$1() {
      if (!this.isValid()) {
        return NaN;
      }

      return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
    }

    function makeAs(alias) {
      return function () {
        return this.as(alias);
      };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asQuarters = makeAs('Q');
    var asYears = makeAs('y');

    function clone$1() {
      return createDuration(this);
    }

    function get$2(units) {
      units = normalizeUnits(units);
      return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
      return function () {
        return this.isValid() ? this._data[name] : NaN;
      };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');

    function weeks() {
      return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month
      M: 11 // months to year

    }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
      return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, locale) {
      var duration = createDuration(posNegDuration).abs();
      var seconds = round(duration.as('s'));
      var minutes = round(duration.as('m'));
      var hours = round(duration.as('h'));
      var days = round(duration.as('d'));
      var months = round(duration.as('M'));
      var years = round(duration.as('y'));
      var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
      a[2] = withoutSuffix;
      a[3] = +posNegDuration > 0;
      a[4] = locale;
      return substituteTimeAgo.apply(null, a);
    } // This function allows you to set the rounding function for relative time strings


    function getSetRelativeTimeRounding(roundingFunction) {
      if (roundingFunction === undefined) {
        return round;
      }

      if (typeof roundingFunction === 'function') {
        round = roundingFunction;
        return true;
      }

      return false;
    } // This function allows you to set a threshold for relative time strings


    function getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === undefined) {
        return false;
      }

      if (limit === undefined) {
        return thresholds[threshold];
      }

      thresholds[threshold] = limit;

      if (threshold === 's') {
        thresholds.ss = limit - 1;
      }

      return true;
    }

    function humanize(withSuffix) {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }

      var locale = this.localeData();
      var output = relativeTime$1(this, !withSuffix, locale);

      if (withSuffix) {
        output = locale.pastFuture(+this, output);
      }

      return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
      return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
      // for ISO strings we do not use the normal bubbling rules:
      //  * milliseconds bubble up until they become hours
      //  * days do not bubble at all
      //  * months bubble up until they become years
      // This is because there is no context-free conversion between hours and days
      // (think of clock changes)
      // and also not between days and months (28-31 days per month)
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }

      var seconds = abs$1(this._milliseconds) / 1000;
      var days = abs$1(this._days);
      var months = abs$1(this._months);
      var minutes, hours, years; // 3600 seconds -> 60 minutes -> 1 hour

      minutes = absFloor(seconds / 60);
      hours = absFloor(minutes / 60);
      seconds %= 60;
      minutes %= 60; // 12 months -> 1 year

      years = absFloor(months / 12);
      months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

      var Y = years;
      var M = months;
      var D = days;
      var h = hours;
      var m = minutes;
      var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
      var total = this.asSeconds();

      if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
      }

      var totalSign = total < 0 ? '-' : '';
      var ymSign = sign(this._months) !== sign(total) ? '-' : '';
      var daysSign = sign(this._days) !== sign(total) ? '-' : '';
      var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
      return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang; // Side effect imports
    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf'); // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
      config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
      config._d = new Date(toInt(input));
    }); // Side effect imports

    hooks.version = '2.24.0';
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

    hooks.HTML5_FMT = {
      DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
      // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
      // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
      // <input type="datetime-local" step="0.001" />
      DATE: 'YYYY-MM-DD',
      // <input type="date" />
      TIME: 'HH:mm',
      // <input type="time" />
      TIME_SECONDS: 'HH:mm:ss',
      // <input type="time" step="1" />
      TIME_MS: 'HH:mm:ss.SSS',
      // <input type="time" step="0.001" />
      WEEK: 'GGGG-[W]WW',
      // <input type="week" />
      MONTH: 'YYYY-MM' // <input type="month" />

    };
    return hooks;
  });
});

// use this instance. Else, load via commonjs.

var moment$3 = typeof window !== 'undefined' && window['moment'] || moment$2;

var propagating = createCommonjsModule$1(function (module, exports) {

  (function (factory) {
    {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory();
    }
  })(function () {
    var _firstTarget = null; // singleton, will contain the target element where the touch event started

    /**
     * Extend an Hammer.js instance with event propagation.
     *
     * Features:
     * - Events emitted by hammer will propagate in order from child to parent
     *   elements.
     * - Events are extended with a function `event.stopPropagation()` to stop
     *   propagation to parent elements.
     * - An option `preventDefault` to stop all default browser behavior.
     *
     * Usage:
     *   var hammer = propagatingHammer(new Hammer(element));
     *   var hammer = propagatingHammer(new Hammer(element), {preventDefault: true});
     *
     * @param {Hammer.Manager} hammer   An hammer instance.
     * @param {Object} [options]        Available options:
     *                                  - `preventDefault: true | false | 'mouse' | 'touch' | 'pen'`.
     *                                    Enforce preventing the default browser behavior.
     *                                    Cannot be set to `false`.
     * @return {Hammer.Manager} Returns the same hammer instance with extended
     *                          functionality
     */

    return function propagating(hammer, options) {
      var _options = options || {
        preventDefault: false
      };

      if (hammer.Manager) {
        // This looks like the Hammer constructor.
        // Overload the constructors with our own.
        var Hammer = hammer;

        var PropagatingHammer = function (element, options) {
          var o = Object.create(_options);
          if (options) Hammer.assign(o, options);
          return propagating(new Hammer(element, o), o);
        };

        Hammer.assign(PropagatingHammer, Hammer);

        PropagatingHammer.Manager = function (element, options) {
          var o = Object.create(_options);
          if (options) Hammer.assign(o, options);
          return propagating(new Hammer.Manager(element, o), o);
        };

        return PropagatingHammer;
      } // create a wrapper object which will override the functions
      // `on`, `off`, `destroy`, and `emit` of the hammer instance


      var wrapper = Object.create(hammer); // attach to DOM element

      var element = hammer.element;
      if (!element.hammer) element.hammer = [];
      element.hammer.push(wrapper); // register an event to catch the start of a gesture and store the
      // target in a singleton

      hammer.on('hammer.input', function (event) {
        if (_options.preventDefault === true || _options.preventDefault === event.pointerType) {
          event.preventDefault();
        }

        if (event.isFirst) {
          _firstTarget = event.target;
        }
      });
      /** @type {Object.<String, Array.<function>>} */

      wrapper._handlers = {};
      /**
       * Register a handler for one or multiple events
       * @param {String} events    A space separated string with events
       * @param {function} handler A callback function, called as handler(event)
       * @returns {Hammer.Manager} Returns the hammer instance
       */

      wrapper.on = function (events, handler) {
        // register the handler
        split(events).forEach(function (event) {
          var _handlers = wrapper._handlers[event];

          if (!_handlers) {
            wrapper._handlers[event] = _handlers = []; // register the static, propagated handler

            hammer.on(event, propagatedHandler);
          }

          _handlers.push(handler);
        });
        return wrapper;
      };
      /**
       * Unregister a handler for one or multiple events
       * @param {String} events      A space separated string with events
       * @param {function} [handler] Optional. The registered handler. If not
       *                             provided, all handlers for given events
       *                             are removed.
       * @returns {Hammer.Manager}   Returns the hammer instance
       */


      wrapper.off = function (events, handler) {
        // unregister the handler
        split(events).forEach(function (event) {
          var _handlers = wrapper._handlers[event];

          if (_handlers) {
            _handlers = handler ? _handlers.filter(function (h) {
              return h !== handler;
            }) : [];

            if (_handlers.length > 0) {
              wrapper._handlers[event] = _handlers;
            } else {
              // remove static, propagated handler
              hammer.off(event, propagatedHandler);
              delete wrapper._handlers[event];
            }
          }
        });
        return wrapper;
      };
      /**
       * Emit to the event listeners
       * @param {string} eventType
       * @param {Event} event
       */


      wrapper.emit = function (eventType, event) {
        _firstTarget = event.target;
        hammer.emit(eventType, event);
      };

      wrapper.destroy = function () {
        // Detach from DOM element
        var hammers = hammer.element.hammer;
        var idx = hammers.indexOf(wrapper);
        if (idx !== -1) hammers.splice(idx, 1);
        if (!hammers.length) delete hammer.element.hammer; // clear all handlers

        wrapper._handlers = {}; // call original hammer destroy

        hammer.destroy();
      }; // split a string with space separated words


      function split(events) {
        return events.match(/[^ ]+/g);
      }
      /**
       * A static event handler, applying event propagation.
       * @param {Object} event
       */


      function propagatedHandler(event) {
        // let only a single hammer instance handle this event
        if (event.type !== 'hammer.input') {
          // it is possible that the same srcEvent is used with multiple hammer events,
          // we keep track on which events are handled in an object _handled
          if (!event.srcEvent._handled) {
            event.srcEvent._handled = {};
          }

          if (event.srcEvent._handled[event.type]) {
            return;
          } else {
            event.srcEvent._handled[event.type] = true;
          }
        } // attach a stopPropagation function to the event


        var stopped = false;

        event.stopPropagation = function () {
          stopped = true;
        }; //wrap the srcEvent's stopPropagation to also stop hammer propagation:


        var srcStop = event.srcEvent.stopPropagation.bind(event.srcEvent);

        if (typeof srcStop == "function") {
          event.srcEvent.stopPropagation = function () {
            srcStop();
            event.stopPropagation();
          };
        } // attach firstTarget property to the event


        event.firstTarget = _firstTarget; // propagate over all elements (until stopped)

        var elem = _firstTarget;

        while (elem && !stopped) {
          var elemHammer = elem.hammer;

          if (elemHammer) {
            var _handlers;

            for (var k = 0; k < elemHammer.length; k++) {
              _handlers = elemHammer[k]._handlers[event.type];
              if (_handlers) for (var i = 0; i < _handlers.length && !stopped; i++) {
                _handlers[i](event);
              }
            }
          }

          elem = elem.parentNode;
        }
      }

      return wrapper;
    };
  });
});

var hammer = createCommonjsModule$1(function (module) {
  /*! Hammer.JS - v2.0.7 - 2016-04-22
   * http://hammerjs.github.io/
   *
   * Copyright (c) 2016 Jorik Tangelder;
   * Licensed under the MIT license */
  (function (window, document, exportName, undefined$1) {

    var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
    var TEST_ELEMENT = document.createElement('div');
    var TYPE_FUNCTION = 'function';
    var round = Math.round;
    var abs = Math.abs;
    var now = Date.now;
    /**
     * set a timeout with a given scope
     * @param {Function} fn
     * @param {Number} timeout
     * @param {Object} context
     * @returns {number}
     */

    function setTimeoutContext(fn, timeout, context) {
      return setTimeout(bindFn(fn, context), timeout);
    }
    /**
     * if the argument is an array, we want to execute the fn on each entry
     * if it aint an array we don't want to do a thing.
     * this is used by all the methods that accept a single and array argument.
     * @param {*|Array} arg
     * @param {String} fn
     * @param {Object} [context]
     * @returns {Boolean}
     */


    function invokeArrayArg(arg, fn, context) {
      if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
      }

      return false;
    }
    /**
     * walk objects and arrays
     * @param {Object} obj
     * @param {Function} iterator
     * @param {Object} context
     */


    function each(obj, iterator, context) {
      var i;

      if (!obj) {
        return;
      }

      if (obj.forEach) {
        obj.forEach(iterator, context);
      } else if (obj.length !== undefined$1) {
        i = 0;

        while (i < obj.length) {
          iterator.call(context, obj[i], i, obj);
          i++;
        }
      } else {
        for (i in obj) {
          obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
      }
    }
    /**
     * wrap a method with a deprecation warning and stack trace
     * @param {Function} method
     * @param {String} name
     * @param {String} message
     * @returns {Function} A new function wrapping the supplied method.
     */


    function deprecate(method, name, message) {
      var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
      return function () {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
        var log = window.console && (window.console.warn || window.console.log);

        if (log) {
          log.call(window.console, deprecationMessage, stack);
        }

        return method.apply(this, arguments);
      };
    }
    /**
     * extend object.
     * means that properties in dest will be overwritten by the ones in src.
     * @param {Object} target
     * @param {...Object} objects_to_assign
     * @returns {Object} target
     */


    var assign;

    if (typeof Object.assign !== 'function') {
      assign = function assign(target) {
        if (target === undefined$1 || target === null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var source = arguments[index];

          if (source !== undefined$1 && source !== null) {
            for (var nextKey in source) {
              if (source.hasOwnProperty(nextKey)) {
                output[nextKey] = source[nextKey];
              }
            }
          }
        }

        return output;
      };
    } else {
      assign = Object.assign;
    }
    /**
     * extend object.
     * means that properties in dest will be overwritten by the ones in src.
     * @param {Object} dest
     * @param {Object} src
     * @param {Boolean} [merge=false]
     * @returns {Object} dest
     */


    var extend = deprecate(function extend(dest, src, merge) {
      var keys = Object.keys(src);
      var i = 0;

      while (i < keys.length) {
        if (!merge || merge && dest[keys[i]] === undefined$1) {
          dest[keys[i]] = src[keys[i]];
        }

        i++;
      }

      return dest;
    }, 'extend', 'Use `assign`.');
    /**
     * merge the values from src in the dest.
     * means that properties that exist in dest will not be overwritten by src
     * @param {Object} dest
     * @param {Object} src
     * @returns {Object} dest
     */

    var merge = deprecate(function merge(dest, src) {
      return extend(dest, src, true);
    }, 'merge', 'Use `assign`.');
    /**
     * simple class inheritance
     * @param {Function} child
     * @param {Function} base
     * @param {Object} [properties]
     */

    function inherit(child, base, properties) {
      var baseP = base.prototype,
          childP;
      childP = child.prototype = Object.create(baseP);
      childP.constructor = child;
      childP._super = baseP;

      if (properties) {
        assign(childP, properties);
      }
    }
    /**
     * simple function bind
     * @param {Function} fn
     * @param {Object} context
     * @returns {Function}
     */


    function bindFn(fn, context) {
      return function boundFn() {
        return fn.apply(context, arguments);
      };
    }
    /**
     * let a boolean value also be a function that must return a boolean
     * this first item in args will be used as the context
     * @param {Boolean|Function} val
     * @param {Array} [args]
     * @returns {Boolean}
     */


    function boolOrFn(val, args) {
      if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined$1 : undefined$1, args);
      }

      return val;
    }
    /**
     * use the val2 when val1 is undefined
     * @param {*} val1
     * @param {*} val2
     * @returns {*}
     */


    function ifUndefined(val1, val2) {
      return val1 === undefined$1 ? val2 : val1;
    }
    /**
     * addEventListener with multiple events at once
     * @param {EventTarget} target
     * @param {String} types
     * @param {Function} handler
     */


    function addEventListeners(target, types, handler) {
      each(splitStr(types), function (type) {
        target.addEventListener(type, handler, false);
      });
    }
    /**
     * removeEventListener with multiple events at once
     * @param {EventTarget} target
     * @param {String} types
     * @param {Function} handler
     */


    function removeEventListeners(target, types, handler) {
      each(splitStr(types), function (type) {
        target.removeEventListener(type, handler, false);
      });
    }
    /**
     * find if a node is in the given parent
     * @method hasParent
     * @param {HTMLElement} node
     * @param {HTMLElement} parent
     * @return {Boolean} found
     */


    function hasParent(node, parent) {
      while (node) {
        if (node == parent) {
          return true;
        }

        node = node.parentNode;
      }

      return false;
    }
    /**
     * small indexOf wrapper
     * @param {String} str
     * @param {String} find
     * @returns {Boolean} found
     */


    function inStr(str, find) {
      return str.indexOf(find) > -1;
    }
    /**
     * split string on whitespace
     * @param {String} str
     * @returns {Array} words
     */


    function splitStr(str) {
      return str.trim().split(/\s+/g);
    }
    /**
     * find if a array contains the object using indexOf or a simple polyFill
     * @param {Array} src
     * @param {String} find
     * @param {String} [findByKey]
     * @return {Boolean|Number} false when not found, or the index
     */


    function inArray(src, find, findByKey) {
      if (src.indexOf && !findByKey) {
        return src.indexOf(find);
      } else {
        var i = 0;

        while (i < src.length) {
          if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
            return i;
          }

          i++;
        }

        return -1;
      }
    }
    /**
     * convert array-like objects to real arrays
     * @param {Object} obj
     * @returns {Array}
     */


    function toArray(obj) {
      return Array.prototype.slice.call(obj, 0);
    }
    /**
     * unique array with objects based on a key (like 'id') or just by the array's value
     * @param {Array} src [{id:1},{id:2},{id:1}]
     * @param {String} [key]
     * @param {Boolean} [sort=False]
     * @returns {Array} [{id:1},{id:2}]
     */


    function uniqueArray(src, key, sort) {
      var results = [];
      var values = [];
      var i = 0;

      while (i < src.length) {
        var val = key ? src[i][key] : src[i];

        if (inArray(values, val) < 0) {
          results.push(src[i]);
        }

        values[i] = val;
        i++;
      }

      if (sort) {
        if (!key) {
          results = results.sort();
        } else {
          results = results.sort(function sortUniqueArray(a, b) {
            return a[key] > b[key];
          });
        }
      }

      return results;
    }
    /**
     * get the prefixed property
     * @param {Object} obj
     * @param {String} property
     * @returns {String|Undefined} prefixed
     */


    function prefixed(obj, property) {
      var prefix, prop;
      var camelProp = property[0].toUpperCase() + property.slice(1);
      var i = 0;

      while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = prefix ? prefix + camelProp : property;

        if (prop in obj) {
          return prop;
        }

        i++;
      }

      return undefined$1;
    }
    /**
     * get a unique id
     * @returns {number} uniqueId
     */


    var _uniqueId = 1;

    function uniqueId() {
      return _uniqueId++;
    }
    /**
     * get the window object of an element
     * @param {HTMLElement} element
     * @returns {DocumentView|Window}
     */


    function getWindowForElement(element) {
      var doc = element.ownerDocument || element;
      return doc.defaultView || doc.parentWindow || window;
    }

    var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
    var SUPPORT_TOUCH = 'ontouchstart' in window;
    var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined$1;
    var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
    var INPUT_TYPE_TOUCH = 'touch';
    var INPUT_TYPE_PEN = 'pen';
    var INPUT_TYPE_MOUSE = 'mouse';
    var INPUT_TYPE_KINECT = 'kinect';
    var COMPUTE_INTERVAL = 25;
    var INPUT_START = 1;
    var INPUT_MOVE = 2;
    var INPUT_END = 4;
    var INPUT_CANCEL = 8;
    var DIRECTION_NONE = 1;
    var DIRECTION_LEFT = 2;
    var DIRECTION_RIGHT = 4;
    var DIRECTION_UP = 8;
    var DIRECTION_DOWN = 16;
    var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
    var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
    var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
    var PROPS_XY = ['x', 'y'];
    var PROPS_CLIENT_XY = ['clientX', 'clientY'];
    /**
     * create new input type manager
     * @param {Manager} manager
     * @param {Function} callback
     * @returns {Input}
     * @constructor
     */

    function Input(manager, callback) {
      var self = this;
      this.manager = manager;
      this.callback = callback;
      this.element = manager.element;
      this.target = manager.options.inputTarget; // smaller wrapper around the handler, for the scope and the enabled state of the manager,
      // so when disabled the input events are completely bypassed.

      this.domHandler = function (ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
          self.handler(ev);
        }
      };

      this.init();
    }

    Input.prototype = {
      /**
       * should handle the inputEvent data and trigger the callback
       * @virtual
       */
      handler: function () {},

      /**
       * bind the events
       */
      init: function () {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
      },

      /**
       * unbind the events
       */
      destroy: function () {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
      }
    };
    /**
     * create new input type manager
     * called by the Manager constructor
     * @param {Hammer} manager
     * @returns {Input}
     */

    function createInputInstance(manager) {
      var Type;
      var inputClass = manager.options.inputClass;

      if (inputClass) {
        Type = inputClass;
      } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
      } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
      } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
      } else {
        Type = TouchMouseInput;
      }

      return new Type(manager, inputHandler);
    }
    /**
     * handle input events
     * @param {Manager} manager
     * @param {String} eventType
     * @param {Object} input
     */


    function inputHandler(manager, eventType, input) {
      var pointersLen = input.pointers.length;
      var changedPointersLen = input.changedPointers.length;
      var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
      var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
      input.isFirst = !!isFirst;
      input.isFinal = !!isFinal;

      if (isFirst) {
        manager.session = {};
      } // source event is the normalized value of the domEvents
      // like 'touchstart, mouseup, pointerdown'


      input.eventType = eventType; // compute scale, rotation etc

      computeInputData(manager, input); // emit secret event

      manager.emit('hammer.input', input);
      manager.recognize(input);
      manager.session.prevInput = input;
    }
    /**
     * extend the data with some usable properties like scale, rotate, velocity etc
     * @param {Object} manager
     * @param {Object} input
     */


    function computeInputData(manager, input) {
      var session = manager.session;
      var pointers = input.pointers;
      var pointersLength = pointers.length; // store the first input to calculate the distance and direction

      if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
      } // to compute scale and rotation we need to store the multiple touches


      if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
      } else if (pointersLength === 1) {
        session.firstMultiple = false;
      }

      var firstInput = session.firstInput;
      var firstMultiple = session.firstMultiple;
      var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
      var center = input.center = getCenter(pointers);
      input.timeStamp = now();
      input.deltaTime = input.timeStamp - firstInput.timeStamp;
      input.angle = getAngle(offsetCenter, center);
      input.distance = getDistance(offsetCenter, center);
      computeDeltaXY(session, input);
      input.offsetDirection = getDirection(input.deltaX, input.deltaY);
      var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
      input.overallVelocityX = overallVelocity.x;
      input.overallVelocityY = overallVelocity.y;
      input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
      input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
      input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
      input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
      computeIntervalInputData(session, input); // find the correct target

      var target = manager.element;

      if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
      }

      input.target = target;
    }

    function computeDeltaXY(session, input) {
      var center = input.center;
      var offset = session.offsetDelta || {};
      var prevDelta = session.prevDelta || {};
      var prevInput = session.prevInput || {};

      if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
          x: prevInput.deltaX || 0,
          y: prevInput.deltaY || 0
        };
        offset = session.offsetDelta = {
          x: center.x,
          y: center.y
        };
      }

      input.deltaX = prevDelta.x + (center.x - offset.x);
      input.deltaY = prevDelta.y + (center.y - offset.y);
    }
    /**
     * velocity is calculated every x ms
     * @param {Object} session
     * @param {Object} input
     */


    function computeIntervalInputData(session, input) {
      var last = session.lastInterval || input,
          deltaTime = input.timeStamp - last.timeStamp,
          velocity,
          velocityX,
          velocityY,
          direction;

      if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined$1)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;
        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);
        session.lastInterval = input;
      } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
      }

      input.velocity = velocity;
      input.velocityX = velocityX;
      input.velocityY = velocityY;
      input.direction = direction;
    }
    /**
     * create a simple clone from the input used for storage of firstInput and firstMultiple
     * @param {Object} input
     * @returns {Object} clonedInputData
     */


    function simpleCloneInputData(input) {
      // make a simple copy of the pointers because we will get a reference if we don't
      // we only need clientXY for the calculations
      var pointers = [];
      var i = 0;

      while (i < input.pointers.length) {
        pointers[i] = {
          clientX: round(input.pointers[i].clientX),
          clientY: round(input.pointers[i].clientY)
        };
        i++;
      }

      return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
      };
    }
    /**
     * get the center of all the pointers
     * @param {Array} pointers
     * @return {Object} center contains `x` and `y` properties
     */


    function getCenter(pointers) {
      var pointersLength = pointers.length; // no need to loop when only one touch

      if (pointersLength === 1) {
        return {
          x: round(pointers[0].clientX),
          y: round(pointers[0].clientY)
        };
      }

      var x = 0,
          y = 0,
          i = 0;

      while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
      }

      return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
      };
    }
    /**
     * calculate the velocity between two points. unit is in px per ms.
     * @param {Number} deltaTime
     * @param {Number} x
     * @param {Number} y
     * @return {Object} velocity `x` and `y`
     */


    function getVelocity(deltaTime, x, y) {
      return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
      };
    }
    /**
     * get the direction between two points
     * @param {Number} x
     * @param {Number} y
     * @return {Number} direction
     */


    function getDirection(x, y) {
      if (x === y) {
        return DIRECTION_NONE;
      }

      if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }

      return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
    }
    /**
     * calculate the absolute distance between two points
     * @param {Object} p1 {x, y}
     * @param {Object} p2 {x, y}
     * @param {Array} [props] containing x and y keys
     * @return {Number} distance
     */


    function getDistance(p1, p2, props) {
      if (!props) {
        props = PROPS_XY;
      }

      var x = p2[props[0]] - p1[props[0]],
          y = p2[props[1]] - p1[props[1]];
      return Math.sqrt(x * x + y * y);
    }
    /**
     * calculate the angle between two coordinates
     * @param {Object} p1
     * @param {Object} p2
     * @param {Array} [props] containing x and y keys
     * @return {Number} angle
     */


    function getAngle(p1, p2, props) {
      if (!props) {
        props = PROPS_XY;
      }

      var x = p2[props[0]] - p1[props[0]],
          y = p2[props[1]] - p1[props[1]];
      return Math.atan2(y, x) * 180 / Math.PI;
    }
    /**
     * calculate the rotation degrees between two pointersets
     * @param {Array} start array of pointers
     * @param {Array} end array of pointers
     * @return {Number} rotation
     */


    function getRotation(start, end) {
      return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
    }
    /**
     * calculate the scale factor between two pointersets
     * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
     * @param {Array} start array of pointers
     * @param {Array} end array of pointers
     * @return {Number} scale
     */


    function getScale(start, end) {
      return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
    }

    var MOUSE_INPUT_MAP = {
      mousedown: INPUT_START,
      mousemove: INPUT_MOVE,
      mouseup: INPUT_END
    };
    var MOUSE_ELEMENT_EVENTS = 'mousedown';
    var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
    /**
     * Mouse events input
     * @constructor
     * @extends Input
     */

    function MouseInput() {
      this.evEl = MOUSE_ELEMENT_EVENTS;
      this.evWin = MOUSE_WINDOW_EVENTS;
      this.pressed = false; // mousedown state

      Input.apply(this, arguments);
    }

    inherit(MouseInput, Input, {
      /**
       * handle mouse events
       * @param {Object} ev
       */
      handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type]; // on start we want to have the left mouse button down

        if (eventType & INPUT_START && ev.button === 0) {
          this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
          eventType = INPUT_END;
        } // mouse must be down


        if (!this.pressed) {
          return;
        }

        if (eventType & INPUT_END) {
          this.pressed = false;
        }

        this.callback(this.manager, eventType, {
          pointers: [ev],
          changedPointers: [ev],
          pointerType: INPUT_TYPE_MOUSE,
          srcEvent: ev
        });
      }
    });
    var POINTER_INPUT_MAP = {
      pointerdown: INPUT_START,
      pointermove: INPUT_MOVE,
      pointerup: INPUT_END,
      pointercancel: INPUT_CANCEL,
      pointerout: INPUT_CANCEL
    }; // in IE10 the pointer types is defined as an enum

    var IE10_POINTER_TYPE_ENUM = {
      2: INPUT_TYPE_TOUCH,
      3: INPUT_TYPE_PEN,
      4: INPUT_TYPE_MOUSE,
      5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816

    };
    var POINTER_ELEMENT_EVENTS = 'pointerdown';
    var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel'; // IE10 has prefixed support, and case-sensitive

    if (window.MSPointerEvent && !window.PointerEvent) {
      POINTER_ELEMENT_EVENTS = 'MSPointerDown';
      POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
    }
    /**
     * Pointer events input
     * @constructor
     * @extends Input
     */


    function PointerEventInput() {
      this.evEl = POINTER_ELEMENT_EVENTS;
      this.evWin = POINTER_WINDOW_EVENTS;
      Input.apply(this, arguments);
      this.store = this.manager.session.pointerEvents = [];
    }

    inherit(PointerEventInput, Input, {
      /**
       * handle mouse events
       * @param {Object} ev
       */
      handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;
        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
        var isTouch = pointerType == INPUT_TYPE_TOUCH; // get index of the event in the store

        var storeIndex = inArray(store, ev.pointerId, 'pointerId'); // start and mouse must be down

        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
          if (storeIndex < 0) {
            store.push(ev);
            storeIndex = store.length - 1;
          }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
          removePointer = true;
        } // it not found, so the pointer hasn't been down (so it's probably a hover)


        if (storeIndex < 0) {
          return;
        } // update the event in the store


        store[storeIndex] = ev;
        this.callback(this.manager, eventType, {
          pointers: store,
          changedPointers: [ev],
          pointerType: pointerType,
          srcEvent: ev
        });

        if (removePointer) {
          // remove from the store
          store.splice(storeIndex, 1);
        }
      }
    });
    var SINGLE_TOUCH_INPUT_MAP = {
      touchstart: INPUT_START,
      touchmove: INPUT_MOVE,
      touchend: INPUT_END,
      touchcancel: INPUT_CANCEL
    };
    var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
    var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
    /**
     * Touch events input
     * @constructor
     * @extends Input
     */

    function SingleTouchInput() {
      this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
      this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
      this.started = false;
      Input.apply(this, arguments);
    }

    inherit(SingleTouchInput, Input, {
      handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type]; // should we handle the touch events?

        if (type === INPUT_START) {
          this.started = true;
        }

        if (!this.started) {
          return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type); // when done, reset the started state

        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
          this.started = false;
        }

        this.callback(this.manager, type, {
          pointers: touches[0],
          changedPointers: touches[1],
          pointerType: INPUT_TYPE_TOUCH,
          srcEvent: ev
        });
      }
    });
    /**
     * @this {TouchInput}
     * @param {Object} ev
     * @param {Number} type flag
     * @returns {undefined|Array} [all, changed]
     */

    function normalizeSingleTouches(ev, type) {
      var all = toArray(ev.touches);
      var changed = toArray(ev.changedTouches);

      if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
      }

      return [all, changed];
    }

    var TOUCH_INPUT_MAP = {
      touchstart: INPUT_START,
      touchmove: INPUT_MOVE,
      touchend: INPUT_END,
      touchcancel: INPUT_CANCEL
    };
    var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
    /**
     * Multi-user touch events input
     * @constructor
     * @extends Input
     */

    function TouchInput() {
      this.evTarget = TOUCH_TARGET_EVENTS;
      this.targetIds = {};
      Input.apply(this, arguments);
    }

    inherit(TouchInput, Input, {
      handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);

        if (!touches) {
          return;
        }

        this.callback(this.manager, type, {
          pointers: touches[0],
          changedPointers: touches[1],
          pointerType: INPUT_TYPE_TOUCH,
          srcEvent: ev
        });
      }
    });
    /**
     * @this {TouchInput}
     * @param {Object} ev
     * @param {Number} type flag
     * @returns {undefined|Array} [all, changed]
     */

    function getTouches(ev, type) {
      var allTouches = toArray(ev.touches);
      var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

      if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
      }

      var i,
          targetTouches,
          changedTouches = toArray(ev.changedTouches),
          changedTargetTouches = [],
          target = this.target; // get target touches from touches

      targetTouches = allTouches.filter(function (touch) {
        return hasParent(touch.target, target);
      }); // collect touches

      if (type === INPUT_START) {
        i = 0;

        while (i < targetTouches.length) {
          targetIds[targetTouches[i].identifier] = true;
          i++;
        }
      } // filter changed touches to only contain touches that exist in the collected target ids


      i = 0;

      while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
          changedTargetTouches.push(changedTouches[i]);
        } // cleanup removed touches


        if (type & (INPUT_END | INPUT_CANCEL)) {
          delete targetIds[changedTouches[i].identifier];
        }

        i++;
      }

      if (!changedTargetTouches.length) {
        return;
      }

      return [// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
      uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
    }
    /**
     * Combined touch and mouse input
     *
     * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
     * This because touch devices also emit mouse events while doing a touch.
     *
     * @constructor
     * @extends Input
     */


    var DEDUP_TIMEOUT = 2500;
    var DEDUP_DISTANCE = 25;

    function TouchMouseInput() {
      Input.apply(this, arguments);
      var handler = bindFn(this.handler, this);
      this.touch = new TouchInput(this.manager, handler);
      this.mouse = new MouseInput(this.manager, handler);
      this.primaryTouch = null;
      this.lastTouches = [];
    }

    inherit(TouchMouseInput, Input, {
      /**
       * handle mouse and touch events
       * @param {Hammer} manager
       * @param {String} inputEvent
       * @param {Object} inputData
       */
      handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
            isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
          return;
        } // when we're in a touch event, record touches to  de-dupe synthetic mouse event


        if (isTouch) {
          recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
          return;
        }

        this.callback(manager, inputEvent, inputData);
      },

      /**
       * remove the event listeners
       */
      destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
      }
    });

    function recordTouches(eventType, eventData) {
      if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
      } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
      }
    }

    function setLastTouch(eventData) {
      var touch = eventData.changedPointers[0];

      if (touch.identifier === this.primaryTouch) {
        var lastTouch = {
          x: touch.clientX,
          y: touch.clientY
        };
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;

        var removeLastTouch = function () {
          var i = lts.indexOf(lastTouch);

          if (i > -1) {
            lts.splice(i, 1);
          }
        };

        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
      }
    }

    function isSyntheticEvent(eventData) {
      var x = eventData.srcEvent.clientX,
          y = eventData.srcEvent.clientY;

      for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x),
            dy = Math.abs(y - t.y);

        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
          return true;
        }
      }

      return false;
    }

    var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
    var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined$1; // magical touchAction value

    var TOUCH_ACTION_COMPUTE = 'compute';
    var TOUCH_ACTION_AUTO = 'auto';
    var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

    var TOUCH_ACTION_NONE = 'none';
    var TOUCH_ACTION_PAN_X = 'pan-x';
    var TOUCH_ACTION_PAN_Y = 'pan-y';
    var TOUCH_ACTION_MAP = getTouchActionProps();
    /**
     * Touch Action
     * sets the touchAction property or uses the js alternative
     * @param {Manager} manager
     * @param {String} value
     * @constructor
     */

    function TouchAction(manager, value) {
      this.manager = manager;
      this.set(value);
    }

    TouchAction.prototype = {
      /**
       * set the touchAction value on the element or enable the polyfill
       * @param {String} value
       */
      set: function (value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
          value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
          this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }

        this.actions = value.toLowerCase().trim();
      },

      /**
       * just re-set the touchAction value
       */
      update: function () {
        this.set(this.manager.options.touchAction);
      },

      /**
       * compute the value for the touchAction property based on the recognizer's settings
       * @returns {String} value
       */
      compute: function () {
        var actions = [];
        each(this.manager.recognizers, function (recognizer) {
          if (boolOrFn(recognizer.options.enable, [recognizer])) {
            actions = actions.concat(recognizer.getTouchAction());
          }
        });
        return cleanTouchActions(actions.join(' '));
      },

      /**
       * this method is called on each input cycle and provides the preventing of the browser behavior
       * @param {Object} input
       */
      preventDefaults: function (input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection; // if the touch action did prevented once this session

        if (this.manager.session.prevented) {
          srcEvent.preventDefault();
          return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
          //do not prevent defaults if this is a tap gesture
          var isTapPointer = input.pointers.length === 1;
          var isTapMovement = input.distance < 2;
          var isTapTouchTime = input.deltaTime < 250;

          if (isTapPointer && isTapMovement && isTapTouchTime) {
            return;
          }
        }

        if (hasPanX && hasPanY) {
          // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
          return;
        }

        if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
          return this.preventSrc(srcEvent);
        }
      },

      /**
       * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
       * @param {Object} srcEvent
       */
      preventSrc: function (srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
      }
    };
    /**
     * when the touchActions are collected they are not a valid value, so we need to clean things up. *
     * @param {String} actions
     * @returns {*}
     */

    function cleanTouchActions(actions) {
      // none
      if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
      }

      var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
      var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y); // if both pan-x and pan-y are set (different recognizers
      // for different directions, e.g. horizontal pan but vertical swipe?)
      // we need none (as otherwise with pan-x pan-y combined none of these
      // recognizers will work, since the browser would handle all panning

      if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
      } // pan-x OR pan-y


      if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
      } // manipulation


      if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
      }

      return TOUCH_ACTION_AUTO;
    }

    function getTouchActionProps() {
      if (!NATIVE_TOUCH_ACTION) {
        return false;
      }

      var touchMap = {};
      var cssSupports = window.CSS && window.CSS.supports;
      ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
      });
      return touchMap;
    }
    /**
     * Recognizer flow explained; *
     * All recognizers have the initial state of POSSIBLE when a input session starts.
     * The definition of a input session is from the first input until the last input, with all it's movement in it. *
     * Example session for mouse-input: mousedown -> mousemove -> mouseup
     *
     * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
     * which determines with state it should be.
     *
     * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
     * POSSIBLE to give it another change on the next cycle.
     *
     *               Possible
     *                  |
     *            +-----+---------------+
     *            |                     |
     *      +-----+-----+               |
     *      |           |               |
     *   Failed      Cancelled          |
     *                          +-------+------+
     *                          |              |
     *                      Recognized       Began
     *                                         |
     *                                      Changed
     *                                         |
     *                                  Ended/Recognized
     */


    var STATE_POSSIBLE = 1;
    var STATE_BEGAN = 2;
    var STATE_CHANGED = 4;
    var STATE_ENDED = 8;
    var STATE_RECOGNIZED = STATE_ENDED;
    var STATE_CANCELLED = 16;
    var STATE_FAILED = 32;
    /**
     * Recognizer
     * Every recognizer needs to extend from this class.
     * @constructor
     * @param {Object} options
     */

    function Recognizer(options) {
      this.options = assign({}, this.defaults, options || {});
      this.id = uniqueId();
      this.manager = null; // default is enable true

      this.options.enable = ifUndefined(this.options.enable, true);
      this.state = STATE_POSSIBLE;
      this.simultaneous = {};
      this.requireFail = [];
    }

    Recognizer.prototype = {
      /**
       * @virtual
       * @type {Object}
       */
      defaults: {},

      /**
       * set options
       * @param {Object} options
       * @return {Recognizer}
       */
      set: function (options) {
        assign(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

        this.manager && this.manager.touchAction.update();
        return this;
      },

      /**
       * recognize simultaneous with an other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      recognizeWith: function (otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
          return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

        if (!simultaneous[otherRecognizer.id]) {
          simultaneous[otherRecognizer.id] = otherRecognizer;
          otherRecognizer.recognizeWith(this);
        }

        return this;
      },

      /**
       * drop the simultaneous link. it doesnt remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      dropRecognizeWith: function (otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
          return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
      },

      /**
       * recognizer can only run when an other is failing
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      requireFailure: function (otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
          return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

        if (inArray(requireFail, otherRecognizer) === -1) {
          requireFail.push(otherRecognizer);
          otherRecognizer.requireFailure(this);
        }

        return this;
      },

      /**
       * drop the requireFailure link. it does not remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      dropRequireFailure: function (otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
          return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);

        if (index > -1) {
          this.requireFail.splice(index, 1);
        }

        return this;
      },

      /**
       * has require failures boolean
       * @returns {boolean}
       */
      hasRequireFailures: function () {
        return this.requireFail.length > 0;
      },

      /**
       * if the recognizer can recognize simultaneous with an other recognizer
       * @param {Recognizer} otherRecognizer
       * @returns {Boolean}
       */
      canRecognizeWith: function (otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
      },

      /**
       * You should use `tryEmit` instead of `emit` directly to check
       * that all the needed recognizers has failed before emitting.
       * @param {Object} input
       */
      emit: function (input) {
        var self = this;
        var state = this.state;

        function emit(event) {
          self.manager.emit(event, input);
        } // 'panstart' and 'panmove'


        if (state < STATE_ENDED) {
          emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) {
          // additional event(panleft, panright, pinchin, pinchout...)
          emit(input.additionalEvent);
        } // panend and pancancel


        if (state >= STATE_ENDED) {
          emit(self.options.event + stateStr(state));
        }
      },

      /**
       * Check that all the require failure recognizers has failed,
       * if true, it emits a gesture event,
       * otherwise, setup the state to FAILED.
       * @param {Object} input
       */
      tryEmit: function (input) {
        if (this.canEmit()) {
          return this.emit(input);
        } // it's failing anyway


        this.state = STATE_FAILED;
      },

      /**
       * can we emit?
       * @returns {boolean}
       */
      canEmit: function () {
        var i = 0;

        while (i < this.requireFail.length) {
          if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
            return false;
          }

          i++;
        }

        return true;
      },

      /**
       * update the recognizer
       * @param {Object} inputData
       */
      recognize: function (inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData); // is is enabled and allow recognizing?

        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
          this.reset();
          this.state = STATE_FAILED;
          return;
        } // reset when we've reached the end


        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
          this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone); // the recognizer has recognized a gesture
        // so trigger an event

        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
          this.tryEmit(inputDataClone);
        }
      },

      /**
       * return the state of the recognizer
       * the actual recognizing happens in this method
       * @virtual
       * @param {Object} inputData
       * @returns {Const} STATE
       */
      process: function (inputData) {},
      // jshint ignore:line

      /**
       * return the preferred touch-action
       * @virtual
       * @returns {Array}
       */
      getTouchAction: function () {},

      /**
       * called when the gesture isn't allowed to recognize
       * like when another is being recognized or it is disabled
       * @virtual
       */
      reset: function () {}
    };
    /**
     * get a usable string, used as event postfix
     * @param {Const} state
     * @returns {String} state
     */

    function stateStr(state) {
      if (state & STATE_CANCELLED) {
        return 'cancel';
      } else if (state & STATE_ENDED) {
        return 'end';
      } else if (state & STATE_CHANGED) {
        return 'move';
      } else if (state & STATE_BEGAN) {
        return 'start';
      }

      return '';
    }
    /**
     * direction cons to string
     * @param {Const} direction
     * @returns {String}
     */


    function directionStr(direction) {
      if (direction == DIRECTION_DOWN) {
        return 'down';
      } else if (direction == DIRECTION_UP) {
        return 'up';
      } else if (direction == DIRECTION_LEFT) {
        return 'left';
      } else if (direction == DIRECTION_RIGHT) {
        return 'right';
      }

      return '';
    }
    /**
     * get a recognizer by name if it is bound to a manager
     * @param {Recognizer|String} otherRecognizer
     * @param {Recognizer} recognizer
     * @returns {Recognizer}
     */


    function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
      var manager = recognizer.manager;

      if (manager) {
        return manager.get(otherRecognizer);
      }

      return otherRecognizer;
    }
    /**
     * This recognizer is just used as a base for the simple attribute recognizers.
     * @constructor
     * @extends Recognizer
     */


    function AttrRecognizer() {
      Recognizer.apply(this, arguments);
    }

    inherit(AttrRecognizer, Recognizer, {
      /**
       * @namespace
       * @memberof AttrRecognizer
       */
      defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
      },

      /**
       * Used to check if it the recognizer receives valid input, like input.distance > 10.
       * @memberof AttrRecognizer
       * @param {Object} input
       * @returns {Boolean} recognized
       */
      attrTest: function (input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
      },

      /**
       * Process the input and return the state for the recognizer
       * @memberof AttrRecognizer
       * @param {Object} input
       * @returns {*} State
       */
      process: function (input) {
        var state = this.state;
        var eventType = input.eventType;
        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input); // on cancel input and we've recognized before, return STATE_CANCELLED

        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
          return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
          if (eventType & INPUT_END) {
            return state | STATE_ENDED;
          } else if (!(state & STATE_BEGAN)) {
            return STATE_BEGAN;
          }

          return state | STATE_CHANGED;
        }

        return STATE_FAILED;
      }
    });
    /**
     * Pan
     * Recognized when the pointer is down and moved in the allowed direction.
     * @constructor
     * @extends AttrRecognizer
     */

    function PanRecognizer() {
      AttrRecognizer.apply(this, arguments);
      this.pX = null;
      this.pY = null;
    }

    inherit(PanRecognizer, AttrRecognizer, {
      /**
       * @namespace
       * @memberof PanRecognizer
       */
      defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
      },
      getTouchAction: function () {
        var direction = this.options.direction;
        var actions = [];

        if (direction & DIRECTION_HORIZONTAL) {
          actions.push(TOUCH_ACTION_PAN_Y);
        }

        if (direction & DIRECTION_VERTICAL) {
          actions.push(TOUCH_ACTION_PAN_X);
        }

        return actions;
      },
      directionTest: function (input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY; // lock to axis?

        if (!(direction & options.direction)) {
          if (options.direction & DIRECTION_HORIZONTAL) {
            direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
            hasMoved = x != this.pX;
            distance = Math.abs(input.deltaX);
          } else {
            direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
            hasMoved = y != this.pY;
            distance = Math.abs(input.deltaY);
          }
        }

        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
      },
      attrTest: function (input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
      },
      emit: function (input) {
        this.pX = input.deltaX;
        this.pY = input.deltaY;
        var direction = directionStr(input.direction);

        if (direction) {
          input.additionalEvent = this.options.event + direction;
        }

        this._super.emit.call(this, input);
      }
    });
    /**
     * Pinch
     * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
     * @constructor
     * @extends AttrRecognizer
     */

    function PinchRecognizer() {
      AttrRecognizer.apply(this, arguments);
    }

    inherit(PinchRecognizer, AttrRecognizer, {
      /**
       * @namespace
       * @memberof PinchRecognizer
       */
      defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function () {
        return [TOUCH_ACTION_NONE];
      },
      attrTest: function (input) {
        return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
      },
      emit: function (input) {
        if (input.scale !== 1) {
          var inOut = input.scale < 1 ? 'in' : 'out';
          input.additionalEvent = this.options.event + inOut;
        }

        this._super.emit.call(this, input);
      }
    });
    /**
     * Press
     * Recognized when the pointer is down for x ms without any movement.
     * @constructor
     * @extends Recognizer
     */

    function PressRecognizer() {
      Recognizer.apply(this, arguments);
      this._timer = null;
      this._input = null;
    }

    inherit(PressRecognizer, Recognizer, {
      /**
       * @namespace
       * @memberof PressRecognizer
       */
      defaults: {
        event: 'press',
        pointers: 1,
        time: 251,
        // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low

      },
      getTouchAction: function () {
        return [TOUCH_ACTION_AUTO];
      },
      process: function (input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;
        this._input = input; // we only allow little movement
        // and we've reached an end event, so a tap is possible

        if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
          this.reset();
        } else if (input.eventType & INPUT_START) {
          this.reset();
          this._timer = setTimeoutContext(function () {
            this.state = STATE_RECOGNIZED;
            this.tryEmit();
          }, options.time, this);
        } else if (input.eventType & INPUT_END) {
          return STATE_RECOGNIZED;
        }

        return STATE_FAILED;
      },
      reset: function () {
        clearTimeout(this._timer);
      },
      emit: function (input) {
        if (this.state !== STATE_RECOGNIZED) {
          return;
        }

        if (input && input.eventType & INPUT_END) {
          this.manager.emit(this.options.event + 'up', input);
        } else {
          this._input.timeStamp = now();
          this.manager.emit(this.options.event, this._input);
        }
      }
    });
    /**
     * Rotate
     * Recognized when two or more pointer are moving in a circular motion.
     * @constructor
     * @extends AttrRecognizer
     */

    function RotateRecognizer() {
      AttrRecognizer.apply(this, arguments);
    }

    inherit(RotateRecognizer, AttrRecognizer, {
      /**
       * @namespace
       * @memberof RotateRecognizer
       */
      defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function () {
        return [TOUCH_ACTION_NONE];
      },
      attrTest: function (input) {
        return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
      }
    });
    /**
     * Swipe
     * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
     * @constructor
     * @extends AttrRecognizer
     */

    function SwipeRecognizer() {
      AttrRecognizer.apply(this, arguments);
    }

    inherit(SwipeRecognizer, AttrRecognizer, {
      /**
       * @namespace
       * @memberof SwipeRecognizer
       */
      defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
      },
      getTouchAction: function () {
        return PanRecognizer.prototype.getTouchAction.call(this);
      },
      attrTest: function (input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
          velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
          velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
          velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
      },
      emit: function (input) {
        var direction = directionStr(input.offsetDirection);

        if (direction) {
          this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
      }
    });
    /**
     * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
     * between the given interval and position. The delay option can be used to recognize multi-taps without firing
     * a single tap.
     *
     * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
     * multi-taps being recognized.
     * @constructor
     * @extends Recognizer
     */

    function TapRecognizer() {
      Recognizer.apply(this, arguments); // previous time and center,
      // used for tap counting

      this.pTime = false;
      this.pCenter = false;
      this._timer = null;
      this._input = null;
      this.count = 0;
    }

    inherit(TapRecognizer, Recognizer, {
      /**
       * @namespace
       * @memberof PinchRecognizer
       */
      defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300,
        // max time between the multi-tap taps
        time: 250,
        // max time of the pointer to be down (like finger on the screen)
        threshold: 9,
        // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position

      },
      getTouchAction: function () {
        return [TOUCH_ACTION_MANIPULATION];
      },
      process: function (input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;
        this.reset();

        if (input.eventType & INPUT_START && this.count === 0) {
          return this.failTimeout();
        } // we only allow little movement
        // and we've reached an end event, so a tap is possible


        if (validMovement && validTouchTime && validPointers) {
          if (input.eventType != INPUT_END) {
            return this.failTimeout();
          }

          var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
          var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
          this.pTime = input.timeStamp;
          this.pCenter = input.center;

          if (!validMultiTap || !validInterval) {
            this.count = 1;
          } else {
            this.count += 1;
          }

          this._input = input; // if tap count matches we have recognized it,
          // else it has began recognizing...

          var tapCount = this.count % options.taps;

          if (tapCount === 0) {
            // no failing requirements, immediately trigger the tap event
            // or wait as long as the multitap interval to trigger
            if (!this.hasRequireFailures()) {
              return STATE_RECOGNIZED;
            } else {
              this._timer = setTimeoutContext(function () {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
              }, options.interval, this);
              return STATE_BEGAN;
            }
          }
        }

        return STATE_FAILED;
      },
      failTimeout: function () {
        this._timer = setTimeoutContext(function () {
          this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
      },
      reset: function () {
        clearTimeout(this._timer);
      },
      emit: function () {
        if (this.state == STATE_RECOGNIZED) {
          this._input.tapCount = this.count;
          this.manager.emit(this.options.event, this._input);
        }
      }
    });
    /**
     * Simple way to create a manager with a default set of recognizers.
     * @param {HTMLElement} element
     * @param {Object} [options]
     * @constructor
     */

    function Hammer(element, options) {
      options = options || {};
      options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
      return new Manager(element, options);
    }
    /**
     * @const {string}
     */


    Hammer.VERSION = '2.0.7';
    /**
     * default settings
     * @namespace
     */

    Hammer.defaults = {
      /**
       * set if DOM events are being triggered.
       * But this is slower and unused by simple implementations, so disabled by default.
       * @type {Boolean}
       * @default false
       */
      domEvents: false,

      /**
       * The value for the touchAction property/fallback.
       * When set to `compute` it will magically set the correct value based on the added recognizers.
       * @type {String}
       * @default compute
       */
      touchAction: TOUCH_ACTION_COMPUTE,

      /**
       * @type {Boolean}
       * @default true
       */
      enable: true,

      /**
       * EXPERIMENTAL FEATURE -- can be removed/changed
       * Change the parent input target element.
       * If Null, then it is being set the to main element.
       * @type {Null|EventTarget}
       * @default null
       */
      inputTarget: null,

      /**
       * force an input class
       * @type {Null|Function}
       * @default null
       */
      inputClass: null,

      /**
       * Default recognizer setup when calling `Hammer()`
       * When creating a new Manager these will be skipped.
       * @type {Array}
       */
      preset: [// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
      [RotateRecognizer, {
        enable: false
      }], [PinchRecognizer, {
        enable: false
      }, ['rotate']], [SwipeRecognizer, {
        direction: DIRECTION_HORIZONTAL
      }], [PanRecognizer, {
        direction: DIRECTION_HORIZONTAL
      }, ['swipe']], [TapRecognizer], [TapRecognizer, {
        event: 'doubletap',
        taps: 2
      }, ['tap']], [PressRecognizer]],

      /**
       * Some CSS properties can be used to improve the working of Hammer.
       * Add them to this method and they will be set when creating a new Manager.
       * @namespace
       */
      cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
      }
    };
    var STOP = 1;
    var FORCED_STOP = 2;
    /**
     * Manager
     * @param {HTMLElement} element
     * @param {Object} [options]
     * @constructor
     */

    function Manager(element, options) {
      this.options = assign({}, Hammer.defaults, options || {});
      this.options.inputTarget = this.options.inputTarget || element;
      this.handlers = {};
      this.session = {};
      this.recognizers = [];
      this.oldCssProps = {};
      this.element = element;
      this.input = createInputInstance(this);
      this.touchAction = new TouchAction(this, this.options.touchAction);
      toggleCssProps(this, true);
      each(this.options.recognizers, function (item) {
        var recognizer = this.add(new item[0](item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
      }, this);
    }

    Manager.prototype = {
      /**
       * set options
       * @param {Object} options
       * @returns {Manager}
       */
      set: function (options) {
        assign(this.options, options); // Options that need a little more setup

        if (options.touchAction) {
          this.touchAction.update();
        }

        if (options.inputTarget) {
          // Clean up existing event listeners and reinitialize
          this.input.destroy();
          this.input.target = options.inputTarget;
          this.input.init();
        }

        return this;
      },

      /**
       * stop recognizing for this session.
       * This session will be discarded, when a new [input]start event is fired.
       * When forced, the recognizer cycle is stopped immediately.
       * @param {Boolean} [force]
       */
      stop: function (force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
      },

      /**
       * run the recognizers!
       * called by the inputHandler function on every movement of the pointers (touches)
       * it walks through all the recognizers and tries to detect the gesture that is being made
       * @param {Object} inputData
       */
      recognize: function (inputData) {
        var session = this.session;

        if (session.stopped) {
          return;
        } // run the touch-action polyfill


        this.touchAction.preventDefaults(inputData);
        var recognizer;
        var recognizers = this.recognizers; // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`

        var curRecognizer = session.curRecognizer; // reset when the last recognizer is recognized
        // or when we're in a new session

        if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
          curRecognizer = session.curRecognizer = null;
        }

        var i = 0;

        while (i < recognizers.length) {
          recognizer = recognizers[i]; // find out if we are allowed try to recognize the input for this one.
          // 1.   allow if the session is NOT forced stopped (see the .stop() method)
          // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
          //      that is being recognized.
          // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
          //      this can be setup with the `recognizeWith()` method on the recognizer.

          if (session.stopped !== FORCED_STOP && ( // 1
          !curRecognizer || recognizer == curRecognizer || // 2
          recognizer.canRecognizeWith(curRecognizer))) {
            // 3
            recognizer.recognize(inputData);
          } else {
            recognizer.reset();
          } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
          // current active recognizer. but only if we don't already have an active recognizer


          if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
            curRecognizer = session.curRecognizer = recognizer;
          }

          i++;
        }
      },

      /**
       * get a recognizer by its event name.
       * @param {Recognizer|String} recognizer
       * @returns {Recognizer|Null}
       */
      get: function (recognizer) {
        if (recognizer instanceof Recognizer) {
          return recognizer;
        }

        var recognizers = this.recognizers;

        for (var i = 0; i < recognizers.length; i++) {
          if (recognizers[i].options.event == recognizer) {
            return recognizers[i];
          }
        }

        return null;
      },

      /**
       * add a recognizer to the manager
       * existing recognizers with the same event name will be removed
       * @param {Recognizer} recognizer
       * @returns {Recognizer|Manager}
       */
      add: function (recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
          return this;
        } // remove existing


        var existing = this.get(recognizer.options.event);

        if (existing) {
          this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;
        this.touchAction.update();
        return recognizer;
      },

      /**
       * remove a recognizer by name or instance
       * @param {Recognizer|String} recognizer
       * @returns {Manager}
       */
      remove: function (recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
          return this;
        }

        recognizer = this.get(recognizer); // let's make sure this recognizer exists

        if (recognizer) {
          var recognizers = this.recognizers;
          var index = inArray(recognizers, recognizer);

          if (index !== -1) {
            recognizers.splice(index, 1);
            this.touchAction.update();
          }
        }

        return this;
      },

      /**
       * bind event
       * @param {String} events
       * @param {Function} handler
       * @returns {EventEmitter} this
       */
      on: function (events, handler) {
        if (events === undefined$1) {
          return;
        }

        if (handler === undefined$1) {
          return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function (event) {
          handlers[event] = handlers[event] || [];
          handlers[event].push(handler);
        });
        return this;
      },

      /**
       * unbind event, leave emit blank to remove all handlers
       * @param {String} events
       * @param {Function} [handler]
       * @returns {EventEmitter} this
       */
      off: function (events, handler) {
        if (events === undefined$1) {
          return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function (event) {
          if (!handler) {
            delete handlers[event];
          } else {
            handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
          }
        });
        return this;
      },

      /**
       * emit event to the listeners
       * @param {String} event
       * @param {Object} data
       */
      emit: function (event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
          triggerDomEvent(event, data);
        } // no handlers, so skip it all


        var handlers = this.handlers[event] && this.handlers[event].slice();

        if (!handlers || !handlers.length) {
          return;
        }

        data.type = event;

        data.preventDefault = function () {
          data.srcEvent.preventDefault();
        };

        var i = 0;

        while (i < handlers.length) {
          handlers[i](data);
          i++;
        }
      },

      /**
       * destroy the manager and unbinds all events
       * it doesn't unbind dom events, that is the user own responsibility
       */
      destroy: function () {
        this.element && toggleCssProps(this, false);
        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
      }
    };
    /**
     * add/remove the css properties as defined in manager.options.cssProps
     * @param {Manager} manager
     * @param {Boolean} add
     */

    function toggleCssProps(manager, add) {
      var element = manager.element;

      if (!element.style) {
        return;
      }

      var prop;
      each(manager.options.cssProps, function (value, name) {
        prop = prefixed(element.style, name);

        if (add) {
          manager.oldCssProps[prop] = element.style[prop];
          element.style[prop] = value;
        } else {
          element.style[prop] = manager.oldCssProps[prop] || '';
        }
      });

      if (!add) {
        manager.oldCssProps = {};
      }
    }
    /**
     * trigger dom event
     * @param {String} event
     * @param {Object} data
     */


    function triggerDomEvent(event, data) {
      var gestureEvent = document.createEvent('Event');
      gestureEvent.initEvent(event, true, true);
      gestureEvent.gesture = data;
      data.target.dispatchEvent(gestureEvent);
    }

    assign(Hammer, {
      INPUT_START: INPUT_START,
      INPUT_MOVE: INPUT_MOVE,
      INPUT_END: INPUT_END,
      INPUT_CANCEL: INPUT_CANCEL,
      STATE_POSSIBLE: STATE_POSSIBLE,
      STATE_BEGAN: STATE_BEGAN,
      STATE_CHANGED: STATE_CHANGED,
      STATE_ENDED: STATE_ENDED,
      STATE_RECOGNIZED: STATE_RECOGNIZED,
      STATE_CANCELLED: STATE_CANCELLED,
      STATE_FAILED: STATE_FAILED,
      DIRECTION_NONE: DIRECTION_NONE,
      DIRECTION_LEFT: DIRECTION_LEFT,
      DIRECTION_RIGHT: DIRECTION_RIGHT,
      DIRECTION_UP: DIRECTION_UP,
      DIRECTION_DOWN: DIRECTION_DOWN,
      DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
      DIRECTION_VERTICAL: DIRECTION_VERTICAL,
      DIRECTION_ALL: DIRECTION_ALL,
      Manager: Manager,
      Input: Input,
      TouchAction: TouchAction,
      TouchInput: TouchInput,
      MouseInput: MouseInput,
      PointerEventInput: PointerEventInput,
      TouchMouseInput: TouchMouseInput,
      SingleTouchInput: SingleTouchInput,
      Recognizer: Recognizer,
      AttrRecognizer: AttrRecognizer,
      Tap: TapRecognizer,
      Pan: PanRecognizer,
      Swipe: SwipeRecognizer,
      Pinch: PinchRecognizer,
      Rotate: RotateRecognizer,
      Press: PressRecognizer,
      on: addEventListeners,
      off: removeEventListeners,
      each: each,
      merge: merge,
      extend: extend,
      assign: assign,
      inherit: inherit,
      bindFn: bindFn,
      prefixed: prefixed
    }); // this prevents errors when Hammer is loaded in the presence of an AMD
    //  style loader but by script tag, not by the loader.

    var freeGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}; // jshint ignore:line

    freeGlobal.Hammer = Hammer;

    if (typeof undefined$1 === 'function' && undefined$1.amd) {
      undefined$1(function () {
        return Hammer;
      });
    } else if ( module.exports) {
      module.exports = Hammer;
    } else {
      window[exportName] = Hammer;
    }
  })(window, document, 'Hammer');
});

var hammer$1 = createCommonjsModule$1(function (module) {
  /**
   * Setup a mock hammer.js object, for unit testing.
   *
   * Inspiration: https://github.com/uber/deck.gl/pull/658
   *
   * @returns {{on: noop, off: noop, destroy: noop, emit: noop, get: get}}
   */
  function hammerMock() {
    var noop = function noop() {};

    return {
      on: noop,
      off: noop,
      destroy: noop,
      emit: noop,
      get: function get(m) {
        //eslint-disable-line no-unused-vars
        return {
          set: noop
        };
      }
    };
  }

  if (typeof window !== 'undefined') {
    var propagating$1 = propagating;
    var Hammer = window['Hammer'] || hammer;
    module.exports = propagating$1(Hammer, {
      preventDefault: 'mouse'
    });
  } else {
    module.exports = function () {
      // hammer.js is only available in a browser, not in node.js. Replacing it with a mock object.
      return hammerMock();
    };
  }
});

var keycharm = createCommonjsModule$1(function (module, exports) {
  /**
   * Created by Alex on 11/6/2014.
   */
  // https://github.com/umdjs/umd/blob/master/returnExports.js#L40-L60
  // if the module has no dependencies, the above pattern can be simplified to

  (function (root, factory) {
    {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory();
    }
  })(commonjsGlobal$1, function () {
    function keycharm(options) {
      var preventDefault = options && options.preventDefault || false;
      var container = options && options.container || window;
      var _exportFunctions = {};
      var _bound = {
        keydown: {},
        keyup: {}
      };
      var _keys = {};
      var i; // a - z

      for (i = 97; i <= 122; i++) {
        _keys[String.fromCharCode(i)] = {
          code: 65 + (i - 97),
          shift: false
        };
      } // A - Z


      for (i = 65; i <= 90; i++) {
        _keys[String.fromCharCode(i)] = {
          code: i,
          shift: true
        };
      } // 0 - 9


      for (i = 0; i <= 9; i++) {
        _keys['' + i] = {
          code: 48 + i,
          shift: false
        };
      } // F1 - F12


      for (i = 1; i <= 12; i++) {
        _keys['F' + i] = {
          code: 111 + i,
          shift: false
        };
      } // num0 - num9


      for (i = 0; i <= 9; i++) {
        _keys['num' + i] = {
          code: 96 + i,
          shift: false
        };
      } // numpad misc


      _keys['num*'] = {
        code: 106,
        shift: false
      };
      _keys['num+'] = {
        code: 107,
        shift: false
      };
      _keys['num-'] = {
        code: 109,
        shift: false
      };
      _keys['num/'] = {
        code: 111,
        shift: false
      };
      _keys['num.'] = {
        code: 110,
        shift: false
      }; // arrows

      _keys['left'] = {
        code: 37,
        shift: false
      };
      _keys['up'] = {
        code: 38,
        shift: false
      };
      _keys['right'] = {
        code: 39,
        shift: false
      };
      _keys['down'] = {
        code: 40,
        shift: false
      }; // extra keys

      _keys['space'] = {
        code: 32,
        shift: false
      };
      _keys['enter'] = {
        code: 13,
        shift: false
      };
      _keys['shift'] = {
        code: 16,
        shift: undefined
      };
      _keys['esc'] = {
        code: 27,
        shift: false
      };
      _keys['backspace'] = {
        code: 8,
        shift: false
      };
      _keys['tab'] = {
        code: 9,
        shift: false
      };
      _keys['ctrl'] = {
        code: 17,
        shift: false
      };
      _keys['alt'] = {
        code: 18,
        shift: false
      };
      _keys['delete'] = {
        code: 46,
        shift: false
      };
      _keys['pageup'] = {
        code: 33,
        shift: false
      };
      _keys['pagedown'] = {
        code: 34,
        shift: false
      }; // symbols

      _keys['='] = {
        code: 187,
        shift: false
      };
      _keys['-'] = {
        code: 189,
        shift: false
      };
      _keys[']'] = {
        code: 221,
        shift: false
      };
      _keys['['] = {
        code: 219,
        shift: false
      };

      var down = function (event) {
        handleEvent(event, 'keydown');
      };

      var up = function (event) {
        handleEvent(event, 'keyup');
      }; // handle the actualy bound key with the event


      var handleEvent = function (event, type) {
        if (_bound[type][event.keyCode] !== undefined) {
          var bound = _bound[type][event.keyCode];

          for (var i = 0; i < bound.length; i++) {
            if (bound[i].shift === undefined) {
              bound[i].fn(event);
            } else if (bound[i].shift == true && event.shiftKey == true) {
              bound[i].fn(event);
            } else if (bound[i].shift == false && event.shiftKey == false) {
              bound[i].fn(event);
            }
          }

          if (preventDefault == true) {
            event.preventDefault();
          }
        }
      }; // bind a key to a callback


      _exportFunctions.bind = function (key, callback, type) {
        if (type === undefined) {
          type = 'keydown';
        }

        if (_keys[key] === undefined) {
          throw new Error("unsupported key: " + key);
        }

        if (_bound[type][_keys[key].code] === undefined) {
          _bound[type][_keys[key].code] = [];
        }

        _bound[type][_keys[key].code].push({
          fn: callback,
          shift: _keys[key].shift
        });
      }; // bind all keys to a call back (demo purposes)


      _exportFunctions.bindAll = function (callback, type) {
        if (type === undefined) {
          type = 'keydown';
        }

        for (var key in _keys) {
          if (_keys.hasOwnProperty(key)) {
            _exportFunctions.bind(key, callback, type);
          }
        }
      }; // get the key label from an event


      _exportFunctions.getKey = function (event) {
        for (var key in _keys) {
          if (_keys.hasOwnProperty(key)) {
            if (event.shiftKey == true && _keys[key].shift == true && event.keyCode == _keys[key].code) {
              return key;
            } else if (event.shiftKey == false && _keys[key].shift == false && event.keyCode == _keys[key].code) {
              return key;
            } else if (event.keyCode == _keys[key].code && key == 'shift') {
              return key;
            }
          }
        }

        return "unknown key, currently not supported";
      }; // unbind either a specific callback from a key or all of them (by leaving callback undefined)


      _exportFunctions.unbind = function (key, callback, type) {
        if (type === undefined) {
          type = 'keydown';
        }

        if (_keys[key] === undefined) {
          throw new Error("unsupported key: " + key);
        }

        if (callback !== undefined) {
          var newBindings = [];
          var bound = _bound[type][_keys[key].code];

          if (bound !== undefined) {
            for (var i = 0; i < bound.length; i++) {
              if (!(bound[i].fn == callback && bound[i].shift == _keys[key].shift)) {
                newBindings.push(_bound[type][_keys[key].code][i]);
              }
            }
          }

          _bound[type][_keys[key].code] = newBindings;
        } else {
          _bound[type][_keys[key].code] = [];
        }
      }; // reset all bound variables.


      _exportFunctions.reset = function () {
        _bound = {
          keydown: {},
          keyup: {}
        };
      }; // unbind all listeners and reset all variables.


      _exportFunctions.destroy = function () {
        _bound = {
          keydown: {},
          keyup: {}
        };
        container.removeEventListener('keydown', down, true);
        container.removeEventListener('keyup', up, true);
      }; // create listeners.


      container.addEventListener('keydown', down, true);
      container.addEventListener('keyup', up, true); // return the public functions.

      return _exportFunctions;
    }

    return keycharm;
  });
});

var util_1 = util;
var DOMutil$1 = DOMutil; // data

var DataSet$3 = visData.DataSet,
    DataView$4 = visData.DataView,
    Queue$2 = visData.Queue;
var DataSet_1$1 = DataSet$3;
var DataView_1 = DataView$4;
var Queue_1$1 = Queue$2; // Graph3d

var Graph3d$1 = Graph3d_1;
var graph3d = {
  Camera: Camera_1,
  Filter: Filter_1,
  Point2d: Point2d_1,
  Point3d: Point3d_1,
  Slider: Slider_1,
  StepNumber: StepNumber_1
}; // bundled external libraries

var moment$4 = moment$3;
var Hammer = hammer$1;
var keycharm$1 = keycharm;
var visGraph3d = {
  util: util_1,
  DOMutil: DOMutil$1,
  DataSet: DataSet_1$1,
  DataView: DataView_1,
  Queue: Queue_1$1,
  Graph3d: Graph3d$1,
  graph3d: graph3d,
  moment: moment$4,
  Hammer: Hammer,
  keycharm: keycharm$1
};

export default visGraph3d;
export { DOMutil$1 as DOMutil, DataSet_1$1 as DataSet, DataView_1 as DataView, Graph3d$1 as Graph3d, Hammer, Queue_1$1 as Queue, graph3d, keycharm$1 as keycharm, moment$4 as moment, util_1 as util };
