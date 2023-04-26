/**
 * vis-graph3d
 * https://visjs.github.io/vis-graph3d/
 *
 * Create interactive, animated 3d graphs. Surfaces, lines, dots and block styling out of the box.
 *
 * @version 0.0.0-no-version
 * @date    2023-04-26T19:32:53.614Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$o =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var fails$w = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$v = fails$w;

var functionBindNative = !fails$v(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$4 = functionBindNative;

var FunctionPrototype$3 = Function.prototype;
var apply$6 = FunctionPrototype$3.apply;
var call$k = FunctionPrototype$3.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$4 ? call$k.bind(apply$6) : function () {
  return call$k.apply(apply$6, arguments);
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$j = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$j, call$j);

var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$j.apply(fn, arguments);
  };
};

var uncurryThis$v = functionUncurryThis;

var toString$d = uncurryThis$v({}.toString);
var stringSlice$1 = uncurryThis$v(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$1(toString$d(it), 8, -1);
};

var classofRaw$1 = classofRaw$2;
var uncurryThis$u = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw$1(fn) === 'Function') return uncurryThis$u(fn);
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$m = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var objectGetOwnPropertyDescriptor = {};

var fails$u = fails$w;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$u(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var NATIVE_BIND$2 = functionBindNative;

var call$i = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$i.bind(call$i) : function () {
  return call$i.apply(call$i, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$7 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$7 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$7(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$1;

var createPropertyDescriptor$7 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var uncurryThis$t = functionUncurryThis;
var fails$t = fails$w;
var classof$g = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$t(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$t(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$g(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$5 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$4 = isNullOrUndefined$5;

var $TypeError$h = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$5 = function (it) {
  if (isNullOrUndefined$4(it)) throw $TypeError$h("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$3 = indexedObject;
var requireObjectCoercible$4 = requireObjectCoercible$5;

var toIndexedObject$a = function (it) {
  return IndexedObject$3(requireObjectCoercible$4(it));
};

var isCallable$l = isCallable$m;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$i = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$l(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$l(it);
};

var path$s = {};

var path$r = path$s;
var global$n = global$o;
var isCallable$k = isCallable$m;

var aFunction = function (variable) {
  return isCallable$k(variable) ? variable : undefined;
};

var getBuiltIn$f = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path$r[namespace]) || aFunction(global$n[namespace])
    : path$r[namespace] && path$r[namespace][method] || global$n[namespace] && global$n[namespace][method];
};

var uncurryThis$s = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$s({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$m = global$o;
var userAgent$5 = engineUserAgent;

var process$4 = global$m.process;
var Deno$1 = global$m.Deno;
var versions = process$4 && process$4.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent$5) {
  match = userAgent$5.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$5.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$3 = engineV8Version;
var fails$s = fails$w;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$s(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$5 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$5
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$e = getBuiltIn$f;
var isCallable$j = isCallable$m;
var isPrototypeOf$m = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$5 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$e('Symbol');
  return isCallable$j($Symbol) && isPrototypeOf$m($Symbol.prototype, $Object$3(it));
};

var $String$4 = String;

var tryToString$6 = function (argument) {
  try {
    return $String$4(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$i = isCallable$m;
var tryToString$5 = tryToString$6;

var $TypeError$g = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$e = function (argument) {
  if (isCallable$i(argument)) return argument;
  throw $TypeError$g(tryToString$5(argument) + ' is not a function');
};

var aCallable$d = aCallable$e;
var isNullOrUndefined$3 = isNullOrUndefined$5;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$3(func) ? undefined : aCallable$d(func);
};

var call$h = functionCall;
var isCallable$h = isCallable$m;
var isObject$h = isObject$i;

var $TypeError$f = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$h(fn = input.toString) && !isObject$h(val = call$h(fn, input))) return val;
  if (isCallable$h(fn = input.valueOf) && !isObject$h(val = call$h(fn, input))) return val;
  if (pref !== 'string' && isCallable$h(fn = input.toString) && !isObject$h(val = call$h(fn, input))) return val;
  throw $TypeError$f("Can't convert object to primitive value");
};

var shared$7 = {exports: {}};

var isPure = true;

var global$l = global$o;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$f = Object.defineProperty;

var defineGlobalProperty$1 = function (key, value) {
  try {
    defineProperty$f(global$l, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$l[key] = value;
  } return value;
};

var global$k = global$o;
var defineGlobalProperty = defineGlobalProperty$1;

var SHARED = '__core-js_shared__';
var store$3 = global$k[SHARED] || defineGlobalProperty(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$7.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.29.0',
  mode: 'pure' ,
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var sharedExports = shared$7.exports;

var requireObjectCoercible$3 = requireObjectCoercible$5;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$e = function (argument) {
  return $Object$2(requireObjectCoercible$3(argument));
};

var uncurryThis$r = functionUncurryThis;
var toObject$d = toObject$e;

var hasOwnProperty = uncurryThis$r({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$d(it), key);
};

var uncurryThis$q = functionUncurryThis;

var id$1 = 0;
var postfix = Math.random();
var toString$c = uncurryThis$q(1.0.toString);

var uid$4 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$c(++id$1 + postfix, 36);
};

var global$j = global$o;
var shared$6 = sharedExports;
var hasOwn$j = hasOwnProperty_1;
var uid$3 = uid$4;
var NATIVE_SYMBOL$4 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$5 = global$j.Symbol;
var WellKnownSymbolsStore$2 = shared$6('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$5['for'] || Symbol$5 : Symbol$5 && Symbol$5.withoutSetter || uid$3;

var wellKnownSymbol$o = function (name) {
  if (!hasOwn$j(WellKnownSymbolsStore$2, name)) {
    WellKnownSymbolsStore$2[name] = NATIVE_SYMBOL$4 && hasOwn$j(Symbol$5, name)
      ? Symbol$5[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore$2[name];
};

var call$g = functionCall;
var isObject$g = isObject$i;
var isSymbol$4 = isSymbol$5;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$n = wellKnownSymbol$o;

var $TypeError$e = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$n('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$7 = function (input, pref) {
  if (!isObject$g(input) || isSymbol$4(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$g(exoticToPrim, input, pref);
    if (!isObject$g(result) || isSymbol$4(result)) return result;
    throw $TypeError$e("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive$6 = toPrimitive$7;
var isSymbol$3 = isSymbol$5;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$4 = function (argument) {
  var key = toPrimitive$6(argument, 'string');
  return isSymbol$3(key) ? key : key + '';
};

var global$i = global$o;
var isObject$f = isObject$i;

var document$3 = global$i.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$f(document$3) && isObject$f(document$3.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};

var DESCRIPTORS$h = descriptors;
var fails$r = fails$w;
var createElement$1 = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$h && !fails$r(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement$1('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$g = descriptors;
var call$f = functionCall;
var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
var createPropertyDescriptor$6 = createPropertyDescriptor$7;
var toIndexedObject$9 = toIndexedObject$a;
var toPropertyKey$3 = toPropertyKey$4;
var hasOwn$i = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$g ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$9(O);
  P = toPropertyKey$3(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$2(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$i(O, P)) return createPropertyDescriptor$6(!call$f(propertyIsEnumerableModule$2.f, O, P), O[P]);
};

var fails$q = fails$w;
var isCallable$g = isCallable$m;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$g(detection) ? fails$q(detection)
    : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;

var uncurryThis$p = functionUncurryThisClause;
var aCallable$c = aCallable$e;
var NATIVE_BIND$1 = functionBindNative;

var bind$j = uncurryThis$p(uncurryThis$p.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$c(fn);
  return that === undefined ? fn : NATIVE_BIND$1 ? bind$j(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var objectDefineProperty = {};

var DESCRIPTORS$f = descriptors;
var fails$p = fails$w;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$f && fails$p(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$e = isObject$i;

var $String$3 = String;
var $TypeError$d = TypeError;

// `Assert: Type(argument) is Object`
var anObject$d = function (argument) {
  if (isObject$e(argument)) return argument;
  throw $TypeError$d($String$3(argument) + ' is not an object');
};

var DESCRIPTORS$e = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$c = anObject$d;
var toPropertyKey$2 = toPropertyKey$4;

var $TypeError$c = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty$1 = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$e ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$c(O);
  P = toPropertyKey$2(P);
  anObject$c(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject$c(O);
  P = toPropertyKey$2(P);
  anObject$c(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$c('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$d = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$5 = createPropertyDescriptor$7;

var createNonEnumerableProperty$9 = DESCRIPTORS$d ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$5(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var global$h = global$o;
var apply$5 = functionApply;
var uncurryThis$o = functionUncurryThisClause;
var isCallable$f = isCallable$m;
var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f;
var isForced$1 = isForced_1;
var path$q = path$s;
var bind$i = functionBindContext;
var createNonEnumerableProperty$8 = createNonEnumerableProperty$9;
var hasOwn$h = hasOwnProperty_1;

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply$5(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global$h : STATIC ? global$h[TARGET] : (global$h[TARGET] || {}).prototype;

  var target = GLOBAL ? path$q : path$q[TARGET] || createNonEnumerableProperty$8(path$q, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn$h(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$6(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

    // bind methods to global for calling from export context
    if (options.bind && USE_NATIVE) resultProperty = bind$i(sourceProperty, global$h);
    // wrap global constructors for prevent changes in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable$f(sourceProperty)) resultProperty = uncurryThis$o(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$8(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty$8(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn$h(path$q, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty$8(path$q, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty$8(path$q[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
        createNonEnumerableProperty$8(targetPrototype, key, sourceProperty);
      }
    }
  }
};

var classof$f = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$f = Array.isArray || function isArray(argument) {
  return classof$f(argument) == 'Array';
};

var ceil = Math.ceil;
var floor$1 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$1 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

var min$2 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  return argument > 0 ? min$2(toIntegerOrInfinity$3(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$d = function (obj) {
  return toLength(obj.length);
};

var $TypeError$b = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$3 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError$b('Maximum allowed index exceeded');
  return it;
};

var toPropertyKey$1 = toPropertyKey$4;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$4 = createPropertyDescriptor$7;

var createProperty$6 = function (object, key, value) {
  var propertyKey = toPropertyKey$1(key);
  if (propertyKey in object) definePropertyModule$3.f(object, propertyKey, createPropertyDescriptor$4(0, value));
  else object[propertyKey] = value;
};

var wellKnownSymbol$m = wellKnownSymbol$o;

var TO_STRING_TAG$4 = wellKnownSymbol$m('toStringTag');
var test$2 = {};

test$2[TO_STRING_TAG$4] = 'z';

var toStringTagSupport = String(test$2) === '[object z]';

var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
var isCallable$e = isCallable$m;
var classofRaw = classofRaw$2;
var wellKnownSymbol$l = wellKnownSymbol$o;

var TO_STRING_TAG$3 = wellKnownSymbol$l('toStringTag');
var $Object$1 = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$e = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$3)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$e(O.callee) ? 'Arguments' : result;
};

var uncurryThis$n = functionUncurryThis;
var isCallable$d = isCallable$m;
var store$1 = sharedStore;

var functionToString = uncurryThis$n(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$d(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$2 = store$1.inspectSource;

var uncurryThis$m = functionUncurryThis;
var fails$o = fails$w;
var isCallable$c = isCallable$m;
var classof$d = classof$e;
var getBuiltIn$d = getBuiltIn$f;
var inspectSource$1 = inspectSource$2;

var noop = function () { /* empty */ };
var empty = [];
var construct$4 = getBuiltIn$d('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$m(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$c(argument)) return false;
  try {
    construct$4(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$c(argument)) return false;
  switch (classof$d(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$4 = !construct$4 || fails$o(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isArray$e = isArray$f;
var isConstructor$3 = isConstructor$4;
var isObject$d = isObject$i;
var wellKnownSymbol$k = wellKnownSymbol$o;

var SPECIES$5 = wellKnownSymbol$k('species');
var $Array$3 = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray$e(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor$3(C) && (C === $Array$3 || isArray$e(C.prototype))) C = undefined;
    else if (isObject$d(C)) {
      C = C[SPECIES$5];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array$3 : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$4 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var fails$n = fails$w;
var wellKnownSymbol$j = wellKnownSymbol$o;
var V8_VERSION$2 = engineV8Version;

var SPECIES$4 = wellKnownSymbol$j('species');

var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION$2 >= 51 || !fails$n(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$4] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var $$T = _export;
var fails$m = fails$w;
var isArray$d = isArray$f;
var isObject$c = isObject$i;
var toObject$c = toObject$e;
var lengthOfArrayLike$c = lengthOfArrayLike$d;
var doesNotExceedSafeInteger$2 = doesNotExceedSafeInteger$3;
var createProperty$5 = createProperty$6;
var arraySpeciesCreate$3 = arraySpeciesCreate$4;
var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
var wellKnownSymbol$i = wellKnownSymbol$o;
var V8_VERSION$1 = engineV8Version;

var IS_CONCAT_SPREADABLE = wellKnownSymbol$i('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$m(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject$c(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$d(O);
};

var FORCED$8 = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport$4('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$$T({ target: 'Array', proto: true, arity: 1, forced: FORCED$8 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject$c(this);
    var A = arraySpeciesCreate$3(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike$c(E);
        doesNotExceedSafeInteger$2(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty$5(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger$2(n + 1);
        createProperty$5(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var classof$c = classof$e;

var $String$2 = String;

var toString$b = function (argument) {
  if (classof$c(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$2(argument);
};

var objectDefineProperties = {};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var max$3 = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$5 = function (index, length) {
  var integer = toIntegerOrInfinity$2(index);
  return integer < 0 ? max$3(integer + length, 0) : min$1(integer, length);
};

var toIndexedObject$8 = toIndexedObject$a;
var toAbsoluteIndex$4 = toAbsoluteIndex$5;
var lengthOfArrayLike$b = lengthOfArrayLike$d;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$4 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$8($this);
    var length = lengthOfArrayLike$b(O);
    var index = toAbsoluteIndex$4(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$4(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$4(false)
};

var hiddenKeys$6 = {};

var uncurryThis$l = functionUncurryThis;
var hasOwn$g = hasOwnProperty_1;
var toIndexedObject$7 = toIndexedObject$a;
var indexOf$4 = arrayIncludes.indexOf;
var hiddenKeys$5 = hiddenKeys$6;

var push$6 = uncurryThis$l([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$7(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$g(hiddenKeys$5, key) && hasOwn$g(O, key) && push$6(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$g(O, key = names[i++])) {
    ~indexOf$4(result, key) || push$6(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$3 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};

var DESCRIPTORS$c = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$2 = objectDefineProperty;
var anObject$b = anObject$d;
var toIndexedObject$6 = toIndexedObject$a;
var objectKeys$2 = objectKeys$3;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$c && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$b(O);
  var props = toIndexedObject$6(Properties);
  var keys = objectKeys$2(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$c = getBuiltIn$f;

var html$2 = getBuiltIn$c('document', 'documentElement');

var shared$5 = sharedExports;
var uid$2 = uid$4;

var keys$7 = shared$5('keys');

var sharedKey$4 = function (key) {
  return keys$7[key] || (keys$7[key] = uid$2(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$a = anObject$d;
var definePropertiesModule$1 = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$4 = hiddenKeys$6;
var html$1 = html$2;
var documentCreateElement = documentCreateElement$1;
var sharedKey$3 = sharedKey$4;

var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$3('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html$1.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys$1.length;
  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];
  return NullProtoObject();
};

hiddenKeys$4[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject$a(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
};

var objectGetOwnPropertyNames = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;

var hiddenKeys$3 = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys$3);
};

var objectGetOwnPropertyNamesExternal = {};

var toAbsoluteIndex$3 = toAbsoluteIndex$5;
var lengthOfArrayLike$a = lengthOfArrayLike$d;
var createProperty$4 = createProperty$6;

var $Array$2 = Array;
var max$2 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike$a(O);
  var k = toAbsoluteIndex$3(start, length);
  var fin = toAbsoluteIndex$3(end === undefined ? length : end, length);
  var result = $Array$2(max$2(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty$4(result, n, O[k]);
  result.length = n;
  return result;
};

/* eslint-disable es/no-object-getownpropertynames -- safe */

var classof$b = classofRaw$2;
var toIndexedObject$5 = toIndexedObject$a;
var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var arraySlice$6 = arraySliceSimple;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySlice$6(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
  return windowNames && classof$b(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames$1(toIndexedObject$5(it));
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var createNonEnumerableProperty$7 = createNonEnumerableProperty$9;

var defineBuiltIn$6 = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty$7(target, key, value);
  return target;
};

var defineProperty$e = objectDefineProperty;

var defineBuiltInAccessor$3 = function (target, name, descriptor) {
  return defineProperty$e.f(target, name, descriptor);
};

var wellKnownSymbolWrapped = {};

var wellKnownSymbol$h = wellKnownSymbol$o;

wellKnownSymbolWrapped.f = wellKnownSymbol$h;

var path$p = path$s;
var hasOwn$f = hasOwnProperty_1;
var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
var defineProperty$d = objectDefineProperty.f;

var wellKnownSymbolDefine = function (NAME) {
  var Symbol = path$p.Symbol || (path$p.Symbol = {});
  if (!hasOwn$f(Symbol, NAME)) defineProperty$d(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule$1.f(NAME)
  });
};

var call$e = functionCall;
var getBuiltIn$b = getBuiltIn$f;
var wellKnownSymbol$g = wellKnownSymbol$o;
var defineBuiltIn$5 = defineBuiltIn$6;

var symbolDefineToPrimitive = function () {
  var Symbol = getBuiltIn$b('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol$g('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn$5(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call$e(valueOf, this);
    }, { arity: 1 });
  }
};

var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
var classof$a = classof$e;

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
  return '[object ' + classof$a(this) + ']';
};

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var defineProperty$c = objectDefineProperty.f;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$9;
var hasOwn$e = hasOwnProperty_1;
var toString$a = objectToString;
var wellKnownSymbol$f = wellKnownSymbol$o;

var TO_STRING_TAG$2 = wellKnownSymbol$f('toStringTag');

var setToStringTag$7 = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!hasOwn$e(target, TO_STRING_TAG$2)) {
      defineProperty$c(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty$6(target, 'toString', toString$a);
    }
  }
};

var global$g = global$o;
var isCallable$b = isCallable$m;

var WeakMap$1 = global$g.WeakMap;

var weakMapBasicDetection = isCallable$b(WeakMap$1) && /native code/.test(String(WeakMap$1));

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$f = global$o;
var isObject$b = isObject$i;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
var hasOwn$d = hasOwnProperty_1;
var shared$4 = sharedStore;
var sharedKey$2 = sharedKey$4;
var hiddenKeys$2 = hiddenKeys$6;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$3 = global$f.TypeError;
var WeakMap = global$f.WeakMap;
var set$4, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set$4(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$b(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$3('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$4.state) {
  var store = shared$4.state || (shared$4.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set$4 = function (it, metadata) {
    if (store.has(it)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$2[STATE] = true;
  set$4 = function (it, metadata) {
    if (hasOwn$d(it, STATE)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$5(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$d(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$d(it, STATE);
  };
}

var internalState = {
  set: set$4,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var bind$h = functionBindContext;
var uncurryThis$k = functionUncurryThis;
var IndexedObject$2 = indexedObject;
var toObject$b = toObject$e;
var lengthOfArrayLike$9 = lengthOfArrayLike$d;
var arraySpeciesCreate$2 = arraySpeciesCreate$4;

var push$5 = uncurryThis$k([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod$3 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$b($this);
    var self = IndexedObject$2(O);
    var boundFunction = bind$h(callbackfn, that);
    var length = lengthOfArrayLike$9(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate$2;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push$5(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push$5(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$3(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod$3(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod$3(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod$3(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod$3(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod$3(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$3(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod$3(7)
};

var $$S = _export;
var global$e = global$o;
var call$d = functionCall;
var uncurryThis$j = functionUncurryThis;
var DESCRIPTORS$b = descriptors;
var NATIVE_SYMBOL$3 = symbolConstructorDetection;
var fails$l = fails$w;
var hasOwn$c = hasOwnProperty_1;
var isPrototypeOf$l = objectIsPrototypeOf;
var anObject$9 = anObject$d;
var toIndexedObject$4 = toIndexedObject$a;
var toPropertyKey = toPropertyKey$4;
var $toString = toString$b;
var createPropertyDescriptor$3 = createPropertyDescriptor$7;
var nativeObjectCreate = objectCreate;
var objectKeys$1 = objectKeys$3;
var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols;
var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;
var definePropertiesModule = objectDefineProperties;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var defineBuiltIn$4 = defineBuiltIn$6;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
var shared$3 = sharedExports;
var sharedKey$1 = sharedKey$4;
var hiddenKeys$1 = hiddenKeys$6;
var uid$1 = uid$4;
var wellKnownSymbol$e = wellKnownSymbol$o;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineWellKnownSymbol$l = wellKnownSymbolDefine;
var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
var setToStringTag$6 = setToStringTag$7;
var InternalStateModule$5 = internalState;
var $forEach$1 = arrayIteration.forEach;

var HIDDEN = sharedKey$1('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState$5 = InternalStateModule$5.set;
var getInternalState$2 = InternalStateModule$5.getterFor(SYMBOL);

var ObjectPrototype$2 = Object[PROTOTYPE];
var $Symbol = global$e.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError$2 = global$e.TypeError;
var QObject = global$e.QObject;
var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$2.f;
var nativeDefineProperty = definePropertyModule$1.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
var push$4 = uncurryThis$j([].push);

var AllSymbols = shared$3('symbols');
var ObjectPrototypeSymbols = shared$3('op-symbols');
var WellKnownSymbolsStore$1 = shared$3('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS$b && fails$l(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$2, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype$2[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$2) {
    nativeDefineProperty(ObjectPrototype$2, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState$5(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS$b) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype$2) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject$9(O);
  var key = toPropertyKey(P);
  anObject$9(Attributes);
  if (hasOwn$c(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn$c(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$3(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn$c(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$3(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject$9(O);
  var properties = toIndexedObject$4(Properties);
  var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
  $forEach$1(keys, function (key) {
    if (!DESCRIPTORS$b || call$d($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call$d(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype$2 && hasOwn$c(AllSymbols, P) && !hasOwn$c(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn$c(this, P) || !hasOwn$c(AllSymbols, P) || hasOwn$c(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject$4(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype$2 && hasOwn$c(AllSymbols, key) && !hasOwn$c(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
  if (descriptor && hasOwn$c(AllSymbols, key) && !(hasOwn$c(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject$4(O));
  var result = [];
  $forEach$1(names, function (key) {
    if (!hasOwn$c(AllSymbols, key) && !hasOwn$c(hiddenKeys$1, key)) push$4(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$2;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$4(O));
  var result = [];
  $forEach$1(names, function (key) {
    if (hasOwn$c(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$c(ObjectPrototype$2, key))) {
      push$4(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL$3) {
  $Symbol = function Symbol() {
    if (isPrototypeOf$l(SymbolPrototype, this)) throw TypeError$2('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid$1(description);
    var setter = function (value) {
      if (this === ObjectPrototype$2) call$d(setter, ObjectPrototypeSymbols, value);
      if (hasOwn$c(this, HIDDEN) && hasOwn$c(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor$3(1, value));
    };
    if (DESCRIPTORS$b && USE_SETTER) setSymbolDescriptor(ObjectPrototype$2, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn$4(SymbolPrototype, 'toString', function toString() {
    return getInternalState$2(this).tag;
  });

  defineBuiltIn$4($Symbol, 'withoutSetter', function (description) {
    return wrap(uid$1(description), description);
  });

  propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
  definePropertyModule$1.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule$2.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule$2.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule$3.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol$e(name), name);
  };

  if (DESCRIPTORS$b) {
    // https://github.com/tc39/proposal-Symbol-description
    defineBuiltInAccessor$2(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState$2(this).description;
      }
    });
  }
}

$$S({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$3, sham: !NATIVE_SYMBOL$3 }, {
  Symbol: $Symbol
});

$forEach$1(objectKeys$1(WellKnownSymbolsStore$1), function (name) {
  defineWellKnownSymbol$l(name);
});

$$S({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$3 }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$$S({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3, sham: !DESCRIPTORS$b }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$$S({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$3 }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive$1();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag$6($Symbol, SYMBOL);

hiddenKeys$1[HIDDEN] = true;

var NATIVE_SYMBOL$2 = symbolConstructorDetection;

/* eslint-disable es/no-symbol -- safe */
var symbolRegistryDetection = NATIVE_SYMBOL$2 && !!Symbol['for'] && !!Symbol.keyFor;

var $$R = _export;
var getBuiltIn$a = getBuiltIn$f;
var hasOwn$b = hasOwnProperty_1;
var toString$9 = toString$b;
var shared$2 = sharedExports;
var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;

var StringToSymbolRegistry = shared$2('string-to-symbol-registry');
var SymbolToStringRegistry$1 = shared$2('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$$R({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
  'for': function (key) {
    var string = toString$9(key);
    if (hasOwn$b(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn$a('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry$1[symbol] = string;
    return symbol;
  }
});

var $$Q = _export;
var hasOwn$a = hasOwnProperty_1;
var isSymbol$2 = isSymbol$5;
var tryToString$4 = tryToString$6;
var shared$1 = sharedExports;
var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;

var SymbolToStringRegistry = shared$1('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$$Q({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol$2(sym)) throw TypeError(tryToString$4(sym) + ' is not a symbol');
    if (hasOwn$a(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});

var uncurryThis$i = functionUncurryThis;

var arraySlice$5 = uncurryThis$i([].slice);

var uncurryThis$h = functionUncurryThis;
var isArray$c = isArray$f;
var isCallable$a = isCallable$m;
var classof$9 = classofRaw$2;
var toString$8 = toString$b;

var push$3 = uncurryThis$h([].push);

var getJsonReplacerFunction = function (replacer) {
  if (isCallable$a(replacer)) return replacer;
  if (!isArray$c(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push$3(keys, element);
    else if (typeof element == 'number' || classof$9(element) == 'Number' || classof$9(element) == 'String') push$3(keys, toString$8(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray$c(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};

var $$P = _export;
var getBuiltIn$9 = getBuiltIn$f;
var apply$4 = functionApply;
var call$c = functionCall;
var uncurryThis$g = functionUncurryThis;
var fails$k = fails$w;
var isCallable$9 = isCallable$m;
var isSymbol$1 = isSymbol$5;
var arraySlice$4 = arraySlice$5;
var getReplacerFunction = getJsonReplacerFunction;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var $String$1 = String;
var $stringify = getBuiltIn$9('JSON', 'stringify');
var exec$1 = uncurryThis$g(/./.exec);
var charAt$3 = uncurryThis$g(''.charAt);
var charCodeAt$1 = uncurryThis$g(''.charCodeAt);
var replace$2 = uncurryThis$g(''.replace);
var numberToString = uncurryThis$g(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$1 || fails$k(function () {
  var symbol = getBuiltIn$9('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails$k(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice$4(arguments);
  var $replacer = getReplacerFunction(replacer);
  if (!isCallable$9($replacer) && (it === undefined || isSymbol$1(it))) return; // IE8 returns string on undefined
  args[1] = function (key, value) {
    // some old implementations (like WebKit) could pass numbers as keys
    if (isCallable$9($replacer)) value = call$c($replacer, this, $String$1(key), value);
    if (!isSymbol$1(value)) return value;
  };
  return apply$4($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt$3(string, offset - 1);
  var next = charAt$3(string, offset + 1);
  if ((exec$1(low, match) && !exec$1(hi, next)) || (exec$1(hi, match) && !exec$1(low, prev))) {
    return '\\u' + numberToString(charCodeAt$1(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $$P({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice$4(arguments);
      var result = apply$4(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$2(result, tester, fixIllFormed) : result;
    }
  });
}

var $$O = _export;
var NATIVE_SYMBOL = symbolConstructorDetection;
var fails$j = fails$w;
var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
var toObject$a = toObject$e;

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED$7 = !NATIVE_SYMBOL || fails$j(function () { getOwnPropertySymbolsModule$2.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$$O({ target: 'Object', stat: true, forced: FORCED$7 }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$a(it)) : [];
  }
});

var defineWellKnownSymbol$k = wellKnownSymbolDefine;

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol$k('asyncIterator');

var defineWellKnownSymbol$j = wellKnownSymbolDefine;

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol$j('hasInstance');

var defineWellKnownSymbol$i = wellKnownSymbolDefine;

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol$i('isConcatSpreadable');

var defineWellKnownSymbol$h = wellKnownSymbolDefine;

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol$h('iterator');

var defineWellKnownSymbol$g = wellKnownSymbolDefine;

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol$g('match');

var defineWellKnownSymbol$f = wellKnownSymbolDefine;

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol$f('matchAll');

var defineWellKnownSymbol$e = wellKnownSymbolDefine;

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol$e('replace');

var defineWellKnownSymbol$d = wellKnownSymbolDefine;

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol$d('search');

var defineWellKnownSymbol$c = wellKnownSymbolDefine;

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol$c('species');

var defineWellKnownSymbol$b = wellKnownSymbolDefine;

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol$b('split');

var defineWellKnownSymbol$a = wellKnownSymbolDefine;
var defineSymbolToPrimitive = symbolDefineToPrimitive;

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol$a('toPrimitive');

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

var getBuiltIn$8 = getBuiltIn$f;
var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
var setToStringTag$5 = setToStringTag$7;

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol$9('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag$5(getBuiltIn$8('Symbol'), 'Symbol');

var defineWellKnownSymbol$8 = wellKnownSymbolDefine;

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol$8('unscopables');

var global$d = global$o;
var setToStringTag$4 = setToStringTag$7;

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag$4(global$d.JSON, 'JSON', true);

var path$o = path$s;

var symbol$6 = path$o.Symbol;

var iterators = {};

var DESCRIPTORS$a = descriptors;
var hasOwn$9 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$a && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$9(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$a || (DESCRIPTORS$a && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var fails$i = fails$w;

var correctPrototypeGetter = !fails$i(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$8 = hasOwnProperty_1;
var isCallable$8 = isCallable$m;
var toObject$9 = toObject$e;
var sharedKey = sharedKey$4;
var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype$1 = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? $Object.getPrototypeOf : function (O) {
  var object = toObject$9(O);
  if (hasOwn$8(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$8(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype$1 : null;
};

var fails$h = fails$w;
var isCallable$7 = isCallable$m;
var isObject$a = isObject$i;
var create$c = objectCreate;
var getPrototypeOf$9 = objectGetPrototypeOf;
var defineBuiltIn$3 = defineBuiltIn$6;
var wellKnownSymbol$d = wellKnownSymbol$o;

var ITERATOR$6 = wellKnownSymbol$d('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$9(getPrototypeOf$9(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$a(IteratorPrototype$1) || fails$h(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$1[ITERATOR$6].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
else IteratorPrototype$1 = create$c(IteratorPrototype$1);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$7(IteratorPrototype$1[ITERATOR$6])) {
  defineBuiltIn$3(IteratorPrototype$1, ITERATOR$6, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$1,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var IteratorPrototype = iteratorsCore.IteratorPrototype;
var create$b = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$7;
var setToStringTag$3 = setToStringTag$7;
var Iterators$5 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$b(IteratorPrototype, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next) });
  setToStringTag$3(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators$5[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var uncurryThis$f = functionUncurryThis;
var aCallable$b = aCallable$e;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$f(aCallable$b(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$6 = isCallable$m;

var $String = String;
var $TypeError$a = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$6(argument)) return argument;
  throw $TypeError$a("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThisAccessor = functionUncurryThisAccessor;
var anObject$8 = anObject$d;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$8(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$N = _export;
var call$b = functionCall;
var FunctionName = functionName;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf$8 = objectGetPrototypeOf;
var setToStringTag$2 = setToStringTag$7;
var defineBuiltIn$2 = defineBuiltIn$6;
var wellKnownSymbol$c = wellKnownSymbol$o;
var Iterators$4 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
FunctionName.CONFIGURABLE;
IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$5 = wellKnownSymbol$c('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$5]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf$8(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      Iterators$4[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$b(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$2(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$N({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((FORCED) && IterablePrototype[ITERATOR$5] !== defaultIterator) {
    defineBuiltIn$2(IterablePrototype, ITERATOR$5, defaultIterator, { name: DEFAULT });
  }
  Iterators$4[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$3 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject$3 = toIndexedObject$a;
var Iterators$3 = iterators;
var InternalStateModule$4 = internalState;
objectDefineProperty.f;
var defineIterator$2 = iteratorDefine;
var createIterResultObject$2 = createIterResultObject$3;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$4 = InternalStateModule$4.set;
var getInternalState$1 = InternalStateModule$4.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
defineIterator$2(Array, 'Array', function (iterated, kind) {
  setInternalState$4(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject$3(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject$2(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject$2(index, false);
  if (kind == 'values') return createIterResultObject$2(target[index], false);
  return createIterResultObject$2([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators$3.Arguments = Iterators$3.Array;

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var DOMIterables$4 = domIterables;
var global$c = global$o;
var classof$8 = classof$e;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;
var Iterators$2 = iterators;
var wellKnownSymbol$b = wellKnownSymbol$o;

var TO_STRING_TAG$1 = wellKnownSymbol$b('toStringTag');

for (var COLLECTION_NAME in DOMIterables$4) {
  var Collection = global$c[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof$8(CollectionPrototype) !== TO_STRING_TAG$1) {
    createNonEnumerableProperty$4(CollectionPrototype, TO_STRING_TAG$1, COLLECTION_NAME);
  }
  Iterators$2[COLLECTION_NAME] = Iterators$2.Array;
}

var parent$1c = symbol$6;


var symbol$5 = parent$1c;

var defineWellKnownSymbol$7 = wellKnownSymbolDefine;

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-explicit-resource-management
defineWellKnownSymbol$7('dispose');

var parent$1b = symbol$5;



var symbol$4 = parent$1b;

var defineWellKnownSymbol$6 = wellKnownSymbolDefine;

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-async-explicit-resource-management
defineWellKnownSymbol$6('asyncDispose');

var $$M = _export;
var getBuiltIn$7 = getBuiltIn$f;
var uncurryThis$e = functionUncurryThis;

var Symbol$4 = getBuiltIn$7('Symbol');
var keyFor = Symbol$4.keyFor;
var thisSymbolValue$1 = uncurryThis$e(Symbol$4.prototype.valueOf);

// `Symbol.isRegistered` method
// https://tc39.es/proposal-symbol-predicates/#sec-symbol-isregistered
$$M({ target: 'Symbol', stat: true }, {
  isRegistered: function isRegistered(value) {
    try {
      return keyFor(thisSymbolValue$1(value)) !== undefined;
    } catch (error) {
      return false;
    }
  }
});

var $$L = _export;
var shared = sharedExports;
var getBuiltIn$6 = getBuiltIn$f;
var uncurryThis$d = functionUncurryThis;
var isSymbol = isSymbol$5;
var wellKnownSymbol$a = wellKnownSymbol$o;

var Symbol$3 = getBuiltIn$6('Symbol');
var $isWellKnown = Symbol$3.isWellKnown;
var getOwnPropertyNames = getBuiltIn$6('Object', 'getOwnPropertyNames');
var thisSymbolValue = uncurryThis$d(Symbol$3.prototype.valueOf);
var WellKnownSymbolsStore = shared('wks');

for (var i = 0, symbolKeys = getOwnPropertyNames(Symbol$3), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
  // some old engines throws on access to some keys like `arguments` or `caller`
  try {
    var symbolKey = symbolKeys[i];
    if (isSymbol(Symbol$3[symbolKey])) wellKnownSymbol$a(symbolKey);
  } catch (error) { /* empty */ }
}

// `Symbol.isWellKnown` method
// https://tc39.es/proposal-symbol-predicates/#sec-symbol-iswellknown
// We should patch it for newly added well-known symbols. If it's not required, this module just will not be injected
$$L({ target: 'Symbol', stat: true, forced: true }, {
  isWellKnown: function isWellKnown(value) {
    if ($isWellKnown && $isWellKnown(value)) return true;
    try {
      var symbol = thisSymbolValue(value);
      for (var j = 0, keys = getOwnPropertyNames(WellKnownSymbolsStore), keysLength = keys.length; j < keysLength; j++) {
        if (WellKnownSymbolsStore[keys[j]] == symbol) return true;
      }
    } catch (error) { /* empty */ }
    return false;
  }
});

var defineWellKnownSymbol$5 = wellKnownSymbolDefine;

// `Symbol.matcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol$5('matcher');

var defineWellKnownSymbol$4 = wellKnownSymbolDefine;

// `Symbol.metadataKey` well-known symbol
// https://github.com/tc39/proposal-decorator-metadata
defineWellKnownSymbol$4('metadataKey');

var defineWellKnownSymbol$3 = wellKnownSymbolDefine;

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol$3('observable');

// TODO: Remove from `core-js@4`
var defineWellKnownSymbol$2 = wellKnownSymbolDefine;

// `Symbol.metadata` well-known symbol
// https://github.com/tc39/proposal-decorators
defineWellKnownSymbol$2('metadata');

// TODO: remove from `core-js@4`
var defineWellKnownSymbol$1 = wellKnownSymbolDefine;

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol$1('patternMatch');

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = wellKnownSymbolDefine;

defineWellKnownSymbol('replaceAll');

var parent$1a = symbol$4;






// TODO: Remove from `core-js@4`




var symbol$3 = parent$1a;

var symbol$2 = symbol$3;

var symbol$1 = symbol$2;

var _Symbol$1 = /*@__PURE__*/getDefaultExportFromCjs(symbol$1);

var uncurryThis$c = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$7 = toString$b;
var requireObjectCoercible$2 = requireObjectCoercible$5;

var charAt$2 = uncurryThis$c(''.charAt);
var charCodeAt = uncurryThis$c(''.charCodeAt);
var stringSlice = uncurryThis$c(''.slice);

var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$7(requireObjectCoercible$2($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$2(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$2(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$2(true)
};

var charAt$1 = stringMultibyte.charAt;
var toString$6 = toString$b;
var InternalStateModule$3 = internalState;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$3;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$3 = InternalStateModule$3.set;
var getInternalState = InternalStateModule$3.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator$1(String, 'String', function (iterated) {
  setInternalState$3(this, {
    type: STRING_ITERATOR,
    string: toString$6(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject$1(undefined, true);
  point = charAt$1(string, index);
  state.index += point.length;
  return createIterResultObject$1(point, false);
});

var WrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;

var iterator$6 = WrappedWellKnownSymbolModule$1.f('iterator');

var parent$19 = iterator$6;


var iterator$5 = parent$19;

var parent$18 = iterator$5;

var iterator$4 = parent$18;

var parent$17 = iterator$4;

var iterator$3 = parent$17;

var iterator$2 = iterator$3;

var iterator$1 = iterator$2;

var _Symbol$iterator$1 = /*@__PURE__*/getDefaultExportFromCjs(iterator$1);

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof _Symbol$1 && "symbol" == typeof _Symbol$iterator$1 ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof _Symbol$1 && obj.constructor === _Symbol$1 && obj !== _Symbol$1.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}

var tryToString$3 = tryToString$6;

var $TypeError$9 = TypeError;

var deletePropertyOrThrow$2 = function (O, P) {
  if (!delete O[P]) throw $TypeError$9('Cannot delete property ' + tryToString$3(P) + ' of ' + tryToString$3(O));
};

var arraySlice$3 = arraySliceSimple;

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge$1(
    array,
    mergeSort(arraySlice$3(array, 0, middle), comparefn),
    mergeSort(arraySlice$3(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge$1 = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

var arraySort = mergeSort;

var fails$g = fails$w;

var arrayMethodIsStrict$5 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$g(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

var userAgent$4 = engineUserAgent;

var firefox = userAgent$4.match(/firefox\/(\d+)/i);

var engineFfVersion = !!firefox && +firefox[1];

var UA = engineUserAgent;

var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

var userAgent$3 = engineUserAgent;

var webkit = userAgent$3.match(/AppleWebKit\/(\d+)\./);

var engineWebkitVersion = !!webkit && +webkit[1];

var $$K = _export;
var uncurryThis$b = functionUncurryThis;
var aCallable$a = aCallable$e;
var toObject$8 = toObject$e;
var lengthOfArrayLike$8 = lengthOfArrayLike$d;
var deletePropertyOrThrow$1 = deletePropertyOrThrow$2;
var toString$5 = toString$b;
var fails$f = fails$w;
var internalSort = arraySort;
var arrayMethodIsStrict$4 = arrayMethodIsStrict$5;
var FF = engineFfVersion;
var IE_OR_EDGE = engineIsIeOrEdge;
var V8 = engineV8Version;
var WEBKIT = engineWebkitVersion;

var test$1 = [];
var nativeSort = uncurryThis$b(test$1.sort);
var push$2 = uncurryThis$b(test$1.push);

// IE8-
var FAILS_ON_UNDEFINED = fails$f(function () {
  test$1.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails$f(function () {
  test$1.sort(null);
});
// Old WebKit
var STRICT_METHOD$2 = arrayMethodIsStrict$4('sort');

var STABLE_SORT = !fails$f(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test$1.push({ k: chr + index, v: value });
    }
  }

  test$1.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test$1.length; index++) {
    chr = test$1[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED$6 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$2 || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString$5(x) > toString$5(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$$K({ target: 'Array', proto: true, forced: FORCED$6 }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable$a(comparefn);

    var array = toObject$8(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike$8(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push$2(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike$8(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow$1(array, index++);

    return array;
  }
});

var path$n = path$s;

var entryVirtual$j = function (CONSTRUCTOR) {
  return path$n[CONSTRUCTOR + 'Prototype'];
};

var entryVirtual$i = entryVirtual$j;

var sort$3 = entryVirtual$i('Array').sort;

var isPrototypeOf$k = objectIsPrototypeOf;
var method$g = sort$3;

var ArrayPrototype$h = Array.prototype;

var sort$2 = function (it) {
  var own = it.sort;
  return it === ArrayPrototype$h || (isPrototypeOf$k(ArrayPrototype$h, it) && own === ArrayPrototype$h.sort) ? method$g : own;
};

var parent$16 = sort$2;

var sort$1 = parent$16;

var sort = sort$1;

var _sortInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(sort);

/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $$J = _export;
var uncurryThis$a = functionUncurryThisClause;
var $indexOf = arrayIncludes.indexOf;
var arrayMethodIsStrict$3 = arrayMethodIsStrict$5;

var nativeIndexOf = uncurryThis$a([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED$5 = NEGATIVE_ZERO || !arrayMethodIsStrict$3('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$$J({ target: 'Array', proto: true, forced: FORCED$5 }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});

var entryVirtual$h = entryVirtual$j;

var indexOf$3 = entryVirtual$h('Array').indexOf;

var isPrototypeOf$j = objectIsPrototypeOf;
var method$f = indexOf$3;

var ArrayPrototype$g = Array.prototype;

var indexOf$2 = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype$g || (isPrototypeOf$j(ArrayPrototype$g, it) && own === ArrayPrototype$g.indexOf) ? method$f : own;
};

var parent$15 = indexOf$2;

var indexOf$1 = parent$15;

var indexOf = indexOf$1;

var _indexOfInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(indexOf);

var $$I = _export;
var $filter = arrayIteration.filter;
var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;

var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$$I({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$g = entryVirtual$j;

var filter$3 = entryVirtual$g('Array').filter;

var isPrototypeOf$i = objectIsPrototypeOf;
var method$e = filter$3;

var ArrayPrototype$f = Array.prototype;

var filter$2 = function (it) {
  var own = it.filter;
  return it === ArrayPrototype$f || (isPrototypeOf$i(ArrayPrototype$f, it) && own === ArrayPrototype$f.filter) ? method$e : own;
};

var parent$14 = filter$2;

var filter$1 = parent$14;

var filter = filter$1;

var _filterInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(filter);

// a string of all valid unicode whitespaces
var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var uncurryThis$9 = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$5;
var toString$4 = toString$b;
var whitespaces$2 = whitespaces$3;

var replace$1 = uncurryThis$9(''.replace);
var ltrim = RegExp('^[' + whitespaces$2 + ']+');
var rtrim = RegExp('(^|[^' + whitespaces$2 + '])[' + whitespaces$2 + ']+$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$1 = function (TYPE) {
  return function ($this) {
    var string = toString$4(requireObjectCoercible$1($this));
    if (TYPE & 1) string = replace$1(string, ltrim, '');
    if (TYPE & 2) string = replace$1(string, rtrim, '$1');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod$1(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod$1(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod$1(3)
};

var global$b = global$o;
var fails$e = fails$w;
var uncurryThis$8 = functionUncurryThis;
var toString$3 = toString$b;
var trim$1 = stringTrim.trim;
var whitespaces$1 = whitespaces$3;

var charAt = uncurryThis$8(''.charAt);
var $parseFloat$1 = global$b.parseFloat;
var Symbol$2 = global$b.Symbol;
var ITERATOR$4 = Symbol$2 && Symbol$2.iterator;
var FORCED$4 = 1 / $parseFloat$1(whitespaces$1 + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR$4 && !fails$e(function () { $parseFloat$1(Object(ITERATOR$4)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
var numberParseFloat = FORCED$4 ? function parseFloat(string) {
  var trimmedString = trim$1(toString$3(string));
  var result = $parseFloat$1(trimmedString);
  return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
} : $parseFloat$1;

var $$H = _export;
var $parseFloat = numberParseFloat;

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$$H({ global: true, forced: parseFloat != $parseFloat }, {
  parseFloat: $parseFloat
});

var path$m = path$s;

var _parseFloat$3 = path$m.parseFloat;

var parent$13 = _parseFloat$3;

var _parseFloat$2 = parent$13;

var _parseFloat = _parseFloat$2;

var _parseFloat$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseFloat);

var toObject$7 = toObject$e;
var toAbsoluteIndex$2 = toAbsoluteIndex$5;
var lengthOfArrayLike$7 = lengthOfArrayLike$d;

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
var arrayFill = function fill(value /* , start = 0, end = @length */) {
  var O = toObject$7(this);
  var length = lengthOfArrayLike$7(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex$2(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex$2(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

var $$G = _export;
var fill$4 = arrayFill;

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$$G({ target: 'Array', proto: true }, {
  fill: fill$4
});

var entryVirtual$f = entryVirtual$j;

var fill$3 = entryVirtual$f('Array').fill;

var isPrototypeOf$h = objectIsPrototypeOf;
var method$d = fill$3;

var ArrayPrototype$e = Array.prototype;

var fill$2 = function (it) {
  var own = it.fill;
  return it === ArrayPrototype$e || (isPrototypeOf$h(ArrayPrototype$e, it) && own === ArrayPrototype$e.fill) ? method$d : own;
};

var parent$12 = fill$2;

var fill$1 = parent$12;

var fill = fill$1;

var _fillInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(fill);

var entryVirtual$e = entryVirtual$j;

var values$3 = entryVirtual$e('Array').values;

var parent$11 = values$3;

var values$2 = parent$11;

var classof$7 = classof$e;
var hasOwn$7 = hasOwnProperty_1;
var isPrototypeOf$g = objectIsPrototypeOf;
var method$c = values$2;

var ArrayPrototype$d = Array.prototype;

var DOMIterables$3 = {
  DOMTokenList: true,
  NodeList: true
};

var values$1 = function (it) {
  var own = it.values;
  return it === ArrayPrototype$d || (isPrototypeOf$g(ArrayPrototype$d, it) && own === ArrayPrototype$d.values)
    || hasOwn$7(DOMIterables$3, classof$7(it)) ? method$c : own;
};

var values = values$1;

var _valuesInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(values);

var $forEach = arrayIteration.forEach;
var arrayMethodIsStrict$2 = arrayMethodIsStrict$5;

var STRICT_METHOD$1 = arrayMethodIsStrict$2('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

var $$F = _export;
var forEach$9 = arrayForEach;

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$$F({ target: 'Array', proto: true, forced: [].forEach != forEach$9 }, {
  forEach: forEach$9
});

var entryVirtual$d = entryVirtual$j;

var forEach$8 = entryVirtual$d('Array').forEach;

var parent$10 = forEach$8;

var forEach$7 = parent$10;

var classof$6 = classof$e;
var hasOwn$6 = hasOwnProperty_1;
var isPrototypeOf$f = objectIsPrototypeOf;
var method$b = forEach$7;

var ArrayPrototype$c = Array.prototype;

var DOMIterables$2 = {
  DOMTokenList: true,
  NodeList: true
};

var forEach$6 = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype$c || (isPrototypeOf$f(ArrayPrototype$c, it) && own === ArrayPrototype$c.forEach)
    || hasOwn$6(DOMIterables$2, classof$6(it)) ? method$b : own;
};

var forEach$5 = forEach$6;

var _forEachInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(forEach$5);

var $$E = _export;
var isArray$b = isArray$f;

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$$E({ target: 'Array', stat: true }, {
  isArray: isArray$b
});

var path$l = path$s;

var isArray$a = path$l.Array.isArray;

var parent$$ = isArray$a;

var isArray$9 = parent$$;

var isArray$8 = isArray$9;

var _Array$isArray$1 = /*@__PURE__*/getDefaultExportFromCjs(isArray$8);

var $$D = _export;

// `Number.isNaN` method
// https://tc39.es/ecma262/#sec-number.isnan
$$D({ target: 'Number', stat: true }, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return number != number;
  }
});

var path$k = path$s;

var isNan$2 = path$k.Number.isNaN;

var parent$_ = isNan$2;

var isNan$1 = parent$_;

var isNan = isNan$1;

var _Number$isNaN = /*@__PURE__*/getDefaultExportFromCjs(isNan);

var entryVirtual$c = entryVirtual$j;

var concat$6 = entryVirtual$c('Array').concat;

var isPrototypeOf$e = objectIsPrototypeOf;
var method$a = concat$6;

var ArrayPrototype$b = Array.prototype;

var concat$5 = function (it) {
  var own = it.concat;
  return it === ArrayPrototype$b || (isPrototypeOf$e(ArrayPrototype$b, it) && own === ArrayPrototype$b.concat) ? method$a : own;
};

var parent$Z = concat$5;

var concat$4 = parent$Z;

var concat$3 = concat$4;

var _concatInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(concat$3);

/* global Bun -- Deno case */

var engineIsBun = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';

var $TypeError$8 = TypeError;

var validateArgumentsLength$2 = function (passed, required) {
  if (passed < required) throw $TypeError$8('Not enough arguments');
  return passed;
};

var global$a = global$o;
var apply$3 = functionApply;
var isCallable$5 = isCallable$m;
var ENGINE_IS_BUN = engineIsBun;
var USER_AGENT = engineUserAgent;
var arraySlice$2 = arraySlice$5;
var validateArgumentsLength$1 = validateArgumentsLength$2;

var Function$2 = global$a.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && (function () {
  var version = global$a.Bun.version.split('.');
  return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
})();

// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
var schedulersFix$2 = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength$1(arguments.length, 1) > firstParamIndex;
    var fn = isCallable$5(handler) ? handler : Function$2(handler);
    var params = boundArgs ? arraySlice$2(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply$3(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};

var $$C = _export;
var global$9 = global$o;
var schedulersFix$1 = schedulersFix$2;

var setInterval = schedulersFix$1(global$9.setInterval, true);

// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$$C({ global: true, bind: true, forced: global$9.setInterval !== setInterval }, {
  setInterval: setInterval
});

var $$B = _export;
var global$8 = global$o;
var schedulersFix = schedulersFix$2;

var setTimeout$3 = schedulersFix(global$8.setTimeout, true);

// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$$B({ global: true, bind: true, forced: global$8.setTimeout !== setTimeout$3 }, {
  setTimeout: setTimeout$3
});

var path$j = path$s;

var setTimeout$2 = path$j.setTimeout;

var setTimeout$1 = setTimeout$2;

var _setTimeout = /*@__PURE__*/getDefaultExportFromCjs(setTimeout$1);

var DESCRIPTORS$9 = descriptors;
var uncurryThis$7 = functionUncurryThis;
var call$a = functionCall;
var fails$d = fails$w;
var objectKeys = objectKeys$3;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$6 = toObject$e;
var IndexedObject$1 = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty$b = Object.defineProperty;
var concat$2 = uncurryThis$7([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$d(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$9 && $assign({ b: 1 }, $assign(defineProperty$b({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$b(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$6(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject$1(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$2(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS$9 || call$a(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $$A = _export;
var assign$5 = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$A({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$5 }, {
  assign: assign$5
});

var path$i = path$s;

var assign$4 = path$i.Object.assign;

var parent$Y = assign$4;

var assign$3 = parent$Y;

var assign$2 = assign$3;

var _Object$assign = /*@__PURE__*/getDefaultExportFromCjs(assign$2);

var componentEmitter = {exports: {}};

(function (module) {
	/**
	 * Expose `Emitter`.
	 */

	{
	  module.exports = Emitter;
	}

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

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
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

	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
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

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }

	  // Remove event specific arrays for event types that no
	  // one is subscribed for to avoid memory leak.
	  if (callbacks.length === 0) {
	    delete this._callbacks['$' + event];
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

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};

	  var args = new Array(arguments.length - 1)
	    , callbacks = this._callbacks['$' + event];

	  for (var i = 1; i < arguments.length; i++) {
	    args[i - 1] = arguments[i];
	  }

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

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	}; 
} (componentEmitter));

var componentEmitterExports = componentEmitter.exports;
var Emitter = /*@__PURE__*/getDefaultExportFromCjs(componentEmitterExports);

var call$9 = functionCall;
var anObject$7 = anObject$d;
var getMethod$1 = getMethod$3;

var iteratorClose$2 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$7(iterator);
  try {
    innerResult = getMethod$1(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$9(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$7(innerResult);
  return value;
};

var anObject$6 = anObject$d;
var iteratorClose$1 = iteratorClose$2;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$6(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose$1(iterator, 'throw', error);
  }
};

var wellKnownSymbol$9 = wellKnownSymbol$o;
var Iterators$1 = iterators;

var ITERATOR$3 = wellKnownSymbol$9('iterator');
var ArrayPrototype$a = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$2 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype$a[ITERATOR$3] === it);
};

var classof$5 = classof$e;
var getMethod = getMethod$3;
var isNullOrUndefined$2 = isNullOrUndefined$5;
var Iterators = iterators;
var wellKnownSymbol$8 = wellKnownSymbol$o;

var ITERATOR$2 = wellKnownSymbol$8('iterator');

var getIteratorMethod$9 = function (it) {
  if (!isNullOrUndefined$2(it)) return getMethod(it, ITERATOR$2)
    || getMethod(it, '@@iterator')
    || Iterators[classof$5(it)];
};

var call$8 = functionCall;
var aCallable$9 = aCallable$e;
var anObject$5 = anObject$d;
var tryToString$2 = tryToString$6;
var getIteratorMethod$8 = getIteratorMethod$9;

var $TypeError$7 = TypeError;

var getIterator$8 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$8(argument) : usingIterator;
  if (aCallable$9(iteratorMethod)) return anObject$5(call$8(iteratorMethod, argument));
  throw $TypeError$7(tryToString$2(argument) + ' is not iterable');
};

var bind$g = functionBindContext;
var call$7 = functionCall;
var toObject$5 = toObject$e;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
var isConstructor$2 = isConstructor$4;
var lengthOfArrayLike$6 = lengthOfArrayLike$d;
var createProperty$3 = createProperty$6;
var getIterator$7 = getIterator$8;
var getIteratorMethod$7 = getIteratorMethod$9;

var $Array$1 = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject$5(arrayLike);
  var IS_CONSTRUCTOR = isConstructor$2(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind$g(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod$7(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array$1 && isArrayIteratorMethod$1(iteratorMethod))) {
    iterator = getIterator$7(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call$7(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty$3(result, index, value);
    }
  } else {
    length = lengthOfArrayLike$6(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array$1(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty$3(result, index, value);
    }
  }
  result.length = index;
  return result;
};

var wellKnownSymbol$7 = wellKnownSymbol$o;

var ITERATOR$1 = wellKnownSymbol$7('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$1] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$2 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$1] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var $$z = _export;
var from$7 = arrayFrom;
var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$2;

var INCORRECT_ITERATION = !checkCorrectnessOfIteration$1(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$$z({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from$7
});

var path$h = path$s;

var from$6 = path$h.Array.from;

var parent$X = from$6;

var from$5 = parent$X;

var from$4 = from$5;

var _Array$from$1 = /*@__PURE__*/getDefaultExportFromCjs(from$4);

var getIteratorMethod$6 = getIteratorMethod$9;

var getIteratorMethod_1 = getIteratorMethod$6;

var parent$W = getIteratorMethod_1;


var getIteratorMethod$5 = parent$W;

var parent$V = getIteratorMethod$5;

var getIteratorMethod$4 = parent$V;

var parent$U = getIteratorMethod$4;

var getIteratorMethod$3 = parent$U;

var getIteratorMethod$2 = getIteratorMethod$3;

var getIteratorMethod$1 = getIteratorMethod$2;

var _getIteratorMethod = /*@__PURE__*/getDefaultExportFromCjs(getIteratorMethod$1);

var path$g = path$s;

var getOwnPropertySymbols$2 = path$g.Object.getOwnPropertySymbols;

var parent$T = getOwnPropertySymbols$2;

var getOwnPropertySymbols$1 = parent$T;

var getOwnPropertySymbols = getOwnPropertySymbols$1;

var _Object$getOwnPropertySymbols = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertySymbols);

var getOwnPropertyDescriptor$5 = {exports: {}};

var $$y = _export;
var fails$c = fails$w;
var toIndexedObject$2 = toIndexedObject$a;
var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var DESCRIPTORS$8 = descriptors;

var FORCED$3 = !DESCRIPTORS$8 || fails$c(function () { nativeGetOwnPropertyDescriptor(1); });

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$$y({ target: 'Object', stat: true, forced: FORCED$3, sham: !DESCRIPTORS$8 }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject$2(it), key);
  }
});

var path$f = path$s;

var Object$4 = path$f.Object;

var getOwnPropertyDescriptor$4 = getOwnPropertyDescriptor$5.exports = function getOwnPropertyDescriptor(it, key) {
  return Object$4.getOwnPropertyDescriptor(it, key);
};

if (Object$4.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor$4.sham = true;

var getOwnPropertyDescriptorExports = getOwnPropertyDescriptor$5.exports;

var parent$S = getOwnPropertyDescriptorExports;

var getOwnPropertyDescriptor$3 = parent$S;

var getOwnPropertyDescriptor$2 = getOwnPropertyDescriptor$3;

var _Object$getOwnPropertyDescriptor = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyDescriptor$2);

var getBuiltIn$5 = getBuiltIn$f;
var uncurryThis$6 = functionUncurryThis;
var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$4 = anObject$d;

var concat$1 = uncurryThis$6([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$7 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule$1.f(anObject$4(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
};

var $$x = _export;
var DESCRIPTORS$7 = descriptors;
var ownKeys$6 = ownKeys$7;
var toIndexedObject$1 = toIndexedObject$a;
var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
var createProperty$2 = createProperty$6;

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$$x({ target: 'Object', stat: true, sham: !DESCRIPTORS$7 }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject$1(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
    var keys = ownKeys$6(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty$2(result, key, descriptor);
    }
    return result;
  }
});

var path$e = path$s;

var getOwnPropertyDescriptors$2 = path$e.Object.getOwnPropertyDescriptors;

var parent$R = getOwnPropertyDescriptors$2;

var getOwnPropertyDescriptors$1 = parent$R;

var getOwnPropertyDescriptors = getOwnPropertyDescriptors$1;

var _Object$getOwnPropertyDescriptors = /*@__PURE__*/getDefaultExportFromCjs(getOwnPropertyDescriptors);

var defineProperties$4 = {exports: {}};

var $$w = _export;
var DESCRIPTORS$6 = descriptors;
var defineProperties$3 = objectDefineProperties.f;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
$$w({ target: 'Object', stat: true, forced: Object.defineProperties !== defineProperties$3, sham: !DESCRIPTORS$6 }, {
  defineProperties: defineProperties$3
});

var path$d = path$s;

var Object$3 = path$d.Object;

var defineProperties$2 = defineProperties$4.exports = function defineProperties(T, D) {
  return Object$3.defineProperties(T, D);
};

if (Object$3.defineProperties.sham) defineProperties$2.sham = true;

var definePropertiesExports = defineProperties$4.exports;

var parent$Q = definePropertiesExports;

var defineProperties$1 = parent$Q;

var defineProperties = defineProperties$1;

var _Object$defineProperties = /*@__PURE__*/getDefaultExportFromCjs(defineProperties);

var defineProperty$a = {exports: {}};

var $$v = _export;
var DESCRIPTORS$5 = descriptors;
var defineProperty$9 = objectDefineProperty.f;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe
$$v({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$9, sham: !DESCRIPTORS$5 }, {
  defineProperty: defineProperty$9
});

var path$c = path$s;

var Object$2 = path$c.Object;

var defineProperty$8 = defineProperty$a.exports = function defineProperty(it, key, desc) {
  return Object$2.defineProperty(it, key, desc);
};

if (Object$2.defineProperty.sham) defineProperty$8.sham = true;

var definePropertyExports = defineProperty$a.exports;

var parent$P = definePropertyExports;

var defineProperty$7 = parent$P;

var defineProperty$6 = defineProperty$7;

var _Object$defineProperty$1 = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$6);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var parent$O = defineProperty$7;

var defineProperty$5 = parent$O;

var parent$N = defineProperty$5;

var defineProperty$4 = parent$N;

var defineProperty$3 = defineProperty$4;

var defineProperty$2 = defineProperty$3;

var _Object$defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty$2);

var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;

var toPrimitive$5 = WrappedWellKnownSymbolModule.f('toPrimitive');

var parent$M = toPrimitive$5;

var toPrimitive$4 = parent$M;

var parent$L = toPrimitive$4;

var toPrimitive$3 = parent$L;

var parent$K = toPrimitive$3;

var toPrimitive$2 = parent$K;

var toPrimitive$1 = toPrimitive$2;

var toPrimitive = toPrimitive$1;

var _Symbol$toPrimitive = /*@__PURE__*/getDefaultExportFromCjs(toPrimitive);

function _toPrimitive(input, hint) {
  if (_typeof$1(input) !== "object" || input === null) return input;
  var prim = input[_Symbol$toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof$1(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof$1(key) === "symbol" ? key : String(key);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    _Object$defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  _Object$defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    _Object$defineProperty(obj, key, {
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

var parent$J = isArray$9;

var isArray$7 = parent$J;

var parent$I = isArray$7;

var isArray$6 = parent$I;

var isArray$5 = isArray$6;

var isArray$4 = isArray$5;

var _Array$isArray = /*@__PURE__*/getDefaultExportFromCjs(isArray$4);

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof _Symbol$1 && _getIteratorMethod(arr) || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

var $$u = _export;
var isArray$3 = isArray$f;
var isConstructor$1 = isConstructor$4;
var isObject$9 = isObject$i;
var toAbsoluteIndex$1 = toAbsoluteIndex$5;
var lengthOfArrayLike$5 = lengthOfArrayLike$d;
var toIndexedObject = toIndexedObject$a;
var createProperty$1 = createProperty$6;
var wellKnownSymbol$6 = wellKnownSymbol$o;
var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;
var nativeSlice = arraySlice$5;

var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('slice');

var SPECIES$3 = wellKnownSymbol$6('species');
var $Array = Array;
var max$1 = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$$u({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike$5(O);
    var k = toAbsoluteIndex$1(start, length);
    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray$3(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor$1(Constructor) && (Constructor === $Array || isArray$3(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject$9(Constructor)) {
        Constructor = Constructor[SPECIES$3];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max$1(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);
    result.length = n;
    return result;
  }
});

var entryVirtual$b = entryVirtual$j;

var slice$7 = entryVirtual$b('Array').slice;

var isPrototypeOf$d = objectIsPrototypeOf;
var method$9 = slice$7;

var ArrayPrototype$9 = Array.prototype;

var slice$6 = function (it) {
  var own = it.slice;
  return it === ArrayPrototype$9 || (isPrototypeOf$d(ArrayPrototype$9, it) && own === ArrayPrototype$9.slice) ? method$9 : own;
};

var parent$H = slice$6;

var slice$5 = parent$H;

var parent$G = slice$5;

var slice$4 = parent$G;

var parent$F = slice$4;

var slice$3 = parent$F;

var slice$2 = slice$3;

var slice$1 = slice$2;

var _sliceInstanceProperty$1 = /*@__PURE__*/getDefaultExportFromCjs(slice$1);

var parent$E = from$5;

var from$3 = parent$E;

var parent$D = from$3;

var from$2 = parent$D;

var from$1 = from$2;

var from = from$1;

var _Array$from = /*@__PURE__*/getDefaultExportFromCjs(from);

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray$2(o, minLen) {
  var _context;
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = _sliceInstanceProperty$1(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest();
}

function _arrayWithoutHoles(arr) {
  if (_Array$isArray(arr)) return _arrayLikeToArray$2(arr);
}

function _iterableToArray(iter) {
  if (typeof _Symbol$1 !== "undefined" && _getIteratorMethod(iter) != null || iter["@@iterator"] != null) return _Array$from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
}

var symbol = symbol$5;

var _Symbol = /*@__PURE__*/getDefaultExportFromCjs(symbol);

var slice = slice$5;

var _sliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(slice);

var $$t = _export;
var ownKeys$5 = ownKeys$7;

// `Reflect.ownKeys` method
// https://tc39.es/ecma262/#sec-reflect.ownkeys
$$t({ target: 'Reflect', stat: true }, {
  ownKeys: ownKeys$5
});

var path$b = path$s;

var ownKeys$4 = path$b.Reflect.ownKeys;

var parent$C = ownKeys$4;

var ownKeys$3 = parent$C;

var ownKeys$2 = ownKeys$3;

var _Reflect$ownKeys = /*@__PURE__*/getDefaultExportFromCjs(ownKeys$2);

var $$s = _export;
var $map = arrayIteration.map;
var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;

var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$$s({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$a = entryVirtual$j;

var map$6 = entryVirtual$a('Array').map;

var isPrototypeOf$c = objectIsPrototypeOf;
var method$8 = map$6;

var ArrayPrototype$8 = Array.prototype;

var map$5 = function (it) {
  var own = it.map;
  return it === ArrayPrototype$8 || (isPrototypeOf$c(ArrayPrototype$8, it) && own === ArrayPrototype$8.map) ? method$8 : own;
};

var parent$B = map$5;

var map$4 = parent$B;

var map$3 = map$4;

var _mapInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(map$3);

var $$r = _export;
var toObject$4 = toObject$e;
var nativeKeys = objectKeys$3;
var fails$b = fails$w;

var FAILS_ON_PRIMITIVES$2 = fails$b(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$$r({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2 }, {
  keys: function keys(it) {
    return nativeKeys(toObject$4(it));
  }
});

var path$a = path$s;

var keys$6 = path$a.Object.keys;

var parent$A = keys$6;

var keys$5 = parent$A;

var keys$4 = keys$5;

var _Object$keys = /*@__PURE__*/getDefaultExportFromCjs(keys$4);

var uncurryThis$5 = functionUncurryThis;
var aCallable$8 = aCallable$e;
var isObject$8 = isObject$i;
var hasOwn$5 = hasOwnProperty_1;
var arraySlice$1 = arraySlice$5;
var NATIVE_BIND = functionBindNative;

var $Function = Function;
var concat = uncurryThis$5([].concat);
var join = uncurryThis$5([].join);
var factories = {};

var construct$3 = function (C, argsLength, args) {
  if (!hasOwn$5(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
var functionBind = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable$8(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice$1(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice$1(arguments));
    return this instanceof boundFunction ? construct$3(F, args.length, args) : F.apply(that, args);
  };
  if (isObject$8(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};

// TODO: Remove from `core-js@4`
var $$q = _export;
var bind$f = functionBind;

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
// eslint-disable-next-line es/no-function-prototype-bind -- detection
$$q({ target: 'Function', proto: true, forced: Function.bind !== bind$f }, {
  bind: bind$f
});

var entryVirtual$9 = entryVirtual$j;

var bind$e = entryVirtual$9('Function').bind;

var isPrototypeOf$b = objectIsPrototypeOf;
var method$7 = bind$e;

var FunctionPrototype = Function.prototype;

var bind$d = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || (isPrototypeOf$b(FunctionPrototype, it) && own === FunctionPrototype.bind) ? method$7 : own;
};

var parent$z = bind$d;

var bind$c = parent$z;

var bind$b = bind$c;

var _bindInstanceProperty$1 = /*@__PURE__*/getDefaultExportFromCjs(bind$b);

var $$p = _export;
var uncurryThis$4 = functionUncurryThis;
var isArray$2 = isArray$f;

var nativeReverse = uncurryThis$4([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$$p({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray$2(this)) this.length = this.length;
    return nativeReverse(this);
  }
});

var entryVirtual$8 = entryVirtual$j;

var reverse$7 = entryVirtual$8('Array').reverse;

var isPrototypeOf$a = objectIsPrototypeOf;
var method$6 = reverse$7;

var ArrayPrototype$7 = Array.prototype;

var reverse$6 = function (it) {
  var own = it.reverse;
  return it === ArrayPrototype$7 || (isPrototypeOf$a(ArrayPrototype$7, it) && own === ArrayPrototype$7.reverse) ? method$6 : own;
};

var parent$y = reverse$6;

var reverse$5 = parent$y;

var reverse$4 = reverse$5;

var _reverseInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(reverse$4);

var DESCRIPTORS$4 = descriptors;
var isArray$1 = isArray$f;

var $TypeError$6 = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$4 && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray$1(O) && !getOwnPropertyDescriptor$1(O, 'length').writable) {
    throw $TypeError$6('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};

var $$o = _export;
var toObject$3 = toObject$e;
var toAbsoluteIndex = toAbsoluteIndex$5;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var lengthOfArrayLike$4 = lengthOfArrayLike$d;
var setArrayLength = arraySetLength;
var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$3;
var arraySpeciesCreate$1 = arraySpeciesCreate$4;
var createProperty = createProperty$6;
var deletePropertyOrThrow = deletePropertyOrThrow$2;
var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$$o({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject$3(this);
    var len = lengthOfArrayLike$4(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger$1(len + insertCount - actualDeleteCount);
    A = arraySpeciesCreate$1(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    setArrayLength(O, len - actualDeleteCount + insertCount);
    return A;
  }
});

var entryVirtual$7 = entryVirtual$j;

var splice$3 = entryVirtual$7('Array').splice;

var isPrototypeOf$9 = objectIsPrototypeOf;
var method$5 = splice$3;

var ArrayPrototype$6 = Array.prototype;

var splice$2 = function (it) {
  var own = it.splice;
  return it === ArrayPrototype$6 || (isPrototypeOf$9(ArrayPrototype$6, it) && own === ArrayPrototype$6.splice) ? method$5 : own;
};

var parent$x = splice$2;

var splice$1 = parent$x;

var splice = splice$1;

var _spliceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(splice);

var $$n = _export;
var $includes = arrayIncludes.includes;
var fails$a = fails$w;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$a(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$n({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$6 = entryVirtual$j;

var includes$4 = entryVirtual$6('Array').includes;

var isObject$7 = isObject$i;
var classof$4 = classofRaw$2;
var wellKnownSymbol$5 = wellKnownSymbol$o;

var MATCH$1 = wellKnownSymbol$5('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$7(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$4(it) == 'RegExp');
};

var isRegExp = isRegexp;

var $TypeError$5 = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError$5("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$4 = wellKnownSymbol$o;

var MATCH = wellKnownSymbol$4('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$m = _export;
var uncurryThis$3 = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible = requireObjectCoercible$5;
var toString$2 = toString$b;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf = uncurryThis$3(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$m({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString$2(requireObjectCoercible(this)),
      toString$2(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

var entryVirtual$5 = entryVirtual$j;

var includes$3 = entryVirtual$5('String').includes;

var isPrototypeOf$8 = objectIsPrototypeOf;
var arrayMethod = includes$4;
var stringMethod = includes$3;

var ArrayPrototype$5 = Array.prototype;
var StringPrototype = String.prototype;

var includes$2 = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype$5 || (isPrototypeOf$8(ArrayPrototype$5, it) && own === ArrayPrototype$5.includes)) return arrayMethod;
  if (typeof it == 'string' || it === StringPrototype || (isPrototypeOf$8(StringPrototype, it) && own === StringPrototype.includes)) {
    return stringMethod;
  } return own;
};

var parent$w = includes$2;

var includes$1 = parent$w;

var includes = includes$1;

var _includesInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(includes);

var $$l = _export;
var fails$9 = fails$w;
var toObject$2 = toObject$e;
var nativeGetPrototypeOf = objectGetPrototypeOf;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var FAILS_ON_PRIMITIVES$1 = fails$9(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$$l({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject$2(it));
  }
});

var path$9 = path$s;

var getPrototypeOf$7 = path$9.Object.getPrototypeOf;

var parent$v = getPrototypeOf$7;

var getPrototypeOf$6 = parent$v;

var getPrototypeOf$5 = getPrototypeOf$6;

var _Object$getPrototypeOf$1 = /*@__PURE__*/getDefaultExportFromCjs(getPrototypeOf$5);

var global$7 = global$o;
var fails$8 = fails$w;
var uncurryThis$2 = functionUncurryThis;
var toString$1 = toString$b;
var trim = stringTrim.trim;
var whitespaces = whitespaces$3;

var $parseInt$1 = global$7.parseInt;
var Symbol$1 = global$7.Symbol;
var ITERATOR = Symbol$1 && Symbol$1.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis$2(hex.exec);
var FORCED$2 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails$8(function () { $parseInt$1(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
var numberParseInt = FORCED$2 ? function parseInt(string, radix) {
  var S = trim(toString$1(string));
  return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt$1;

var $$k = _export;
var $parseInt = numberParseInt;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$$k({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});

var path$8 = path$s;

var _parseInt$3 = path$8.parseInt;

var parent$u = _parseInt$3;

var _parseInt$2 = parent$u;

var _parseInt = _parseInt$2;

var _parseInt$1 = /*@__PURE__*/getDefaultExportFromCjs(_parseInt);

// TODO: Remove from `core-js@4`
var $$j = _export;
var DESCRIPTORS$3 = descriptors;
var create$a = objectCreate;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$$j({ target: 'Object', stat: true, sham: !DESCRIPTORS$3 }, {
  create: create$a
});

var path$7 = path$s;

var Object$1 = path$7.Object;

var create$9 = function create(P, D) {
  return Object$1.create(P, D);
};

var parent$t = create$9;

var create$8 = parent$t;

var create$7 = create$8;

var _Object$create$1 = /*@__PURE__*/getDefaultExportFromCjs(create$7);

var path$6 = path$s;
var apply$2 = functionApply;

// eslint-disable-next-line es/no-json -- safe
if (!path$6.JSON) path$6.JSON = { stringify: JSON.stringify };

// eslint-disable-next-line no-unused-vars -- required for `.length`
var stringify$2 = function stringify(it, replacer, space) {
  return apply$2(path$6.JSON.stringify, null, arguments);
};

var parent$s = stringify$2;

var stringify$1 = parent$s;

var stringify = stringify$1;

var _JSON$stringify = /*@__PURE__*/getDefaultExportFromCjs(stringify);

/*! Hammer.JS - v2.0.17-rc - 2019-12-16
 * http://naver.github.io/egjs
 *
 * Forked By Naver egjs
 * Copyright (c) hammerjs
 * Licensed under the MIT license */
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/**
 * @private
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;

if (typeof Object.assign !== 'function') {
  assign = function assign(target) {
    if (target === undefined || target === null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var output = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];

      if (source !== undefined && source !== null) {
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

var assign$1 = assign;

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = typeof document === "undefined" ? {
  style: {}
} : document.createElement('div');
var TYPE_FUNCTION = 'function';
var round = Math.round,
    abs = Math.abs;
var now = Date.now;

/**
 * @private
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */

function prefixed(obj, property) {
  var prefix;
  var prop;
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

  return undefined;
}

/* eslint-disable no-new-func, no-nested-ternary */
var win;

if (typeof window === "undefined") {
  // window is undefined in node.js
  win = {};
} else {
  win = window;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
function getTouchActionProps() {
  if (!NATIVE_TOUCH_ACTION) {
    return false;
  }

  var touchMap = {};
  var cssSupports = win.CSS && win.CSS.supports;
  ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
    // If css.supports is not supported but there is native touch-action assume it supports
    // all values. This is the case for IE 10 and 11.
    return touchMap[val] = cssSupports ? win.CSS.supports('touch-action', val) : true;
  });
  return touchMap;
}

var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
var SUPPORT_TOUCH = 'ontouchstart' in win;
var SUPPORT_POINTER_EVENTS = prefixed(win, 'PointerEvent') !== undefined;
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
 * @private
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
  } else if (obj.length !== undefined) {
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
 * @private
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */

function boolOrFn(val, args) {
  if (typeof val === TYPE_FUNCTION) {
    return val.apply(args ? args[0] || undefined : undefined, args);
  }

  return val;
}

/**
 * @private
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
  return str.indexOf(find) > -1;
}

/**
 * @private
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

/**
 * @private
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */

var TouchAction =
/*#__PURE__*/
function () {
  function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
  }
  /**
   * @private
   * set the touchAction value on the element or enable the polyfill
   * @param {String} value
   */


  var _proto = TouchAction.prototype;

  _proto.set = function set(value) {
    // find out the touch-action by the event handlers
    if (value === TOUCH_ACTION_COMPUTE) {
      value = this.compute();
    }

    if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
      this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
    }

    this.actions = value.toLowerCase().trim();
  };
  /**
   * @private
   * just re-set the touchAction value
   */


  _proto.update = function update() {
    this.set(this.manager.options.touchAction);
  };
  /**
   * @private
   * compute the value for the touchAction property based on the recognizer's settings
   * @returns {String} value
   */


  _proto.compute = function compute() {
    var actions = [];
    each(this.manager.recognizers, function (recognizer) {
      if (boolOrFn(recognizer.options.enable, [recognizer])) {
        actions = actions.concat(recognizer.getTouchAction());
      }
    });
    return cleanTouchActions(actions.join(' '));
  };
  /**
   * @private
   * this method is called on each input cycle and provides the preventing of the browser behavior
   * @param {Object} input
   */


  _proto.preventDefaults = function preventDefaults(input) {
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
      // do not prevent defaults if this is a tap gesture
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
  };
  /**
   * @private
   * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
   * @param {Object} srcEvent
   */


  _proto.preventSrc = function preventSrc(srcEvent) {
    this.manager.session.prevented = true;
    srcEvent.preventDefault();
  };

  return TouchAction;
}();

/**
 * @private
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
  while (node) {
    if (node === parent) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}

/**
 * @private
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

  var x = 0;
  var y = 0;
  var i = 0;

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
 * @private
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
 * @private
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

  var x = p2[props[0]] - p1[props[0]];
  var y = p2[props[1]] - p1[props[1]];
  return Math.sqrt(x * x + y * y);
}

/**
 * @private
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

  var x = p2[props[0]] - p1[props[0]];
  var y = p2[props[1]] - p1[props[1]];
  return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * @private
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

function computeDeltaXY(session, input) {
  var center = input.center; // let { offsetDelta:offset = {}, prevDelta = {}, prevInput = {} } = session;
  // jscs throwing error on defalut destructured values and without defaults tests fail

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
 * @private
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
 * @private
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */

function getScale(start, end) {
  return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

/**
 * @private
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */

function getRotation(start, end) {
  return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * @private
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */

function computeIntervalInputData(session, input) {
  var last = session.lastInterval || input;
  var deltaTime = input.timeStamp - last.timeStamp;
  var velocity;
  var velocityX;
  var velocityY;
  var direction;

  if (input.eventType !== INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
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
* @private
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

  var firstInput = session.firstInput,
      firstMultiple = session.firstMultiple;
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
  var srcEvent = input.srcEvent;
  var srcEventTarget;

  if (srcEvent.composedPath) {
    srcEventTarget = srcEvent.composedPath()[0];
  } else if (srcEvent.path) {
    srcEventTarget = srcEvent.path[0];
  } else {
    srcEventTarget = srcEvent.target;
  }

  if (hasParent(srcEventTarget, target)) {
    target = srcEventTarget;
  }

  input.target = target;
}

/**
 * @private
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
 * @private
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
  return str.trim().split(/\s+/g);
}

/**
 * @private
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
 * @private
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
 * @private
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
  var doc = element.ownerDocument || element;
  return doc.defaultView || doc.parentWindow || window;
}

/**
 * @private
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */

var Input =
/*#__PURE__*/
function () {
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
  /**
   * @private
   * should handle the inputEvent data and trigger the callback
   * @virtual
   */


  var _proto = Input.prototype;

  _proto.handler = function handler() {};
  /**
   * @private
   * bind the events
   */


  _proto.init = function init() {
    this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
    this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
    this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
  };
  /**
   * @private
   * unbind the events
   */


  _proto.destroy = function destroy() {
    this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
    this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
    this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
  };

  return Input;
}();

/**
 * @private
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
        // do not use === here, test fails
        return i;
      }

      i++;
    }

    return -1;
  }
}

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

if (win.MSPointerEvent && !win.PointerEvent) {
  POINTER_ELEMENT_EVENTS = 'MSPointerDown';
  POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}
/**
 * @private
 * Pointer events input
 * @constructor
 * @extends Input
 */


var PointerEventInput =
/*#__PURE__*/
function (_Input) {
  _inheritsLoose(PointerEventInput, _Input);

  function PointerEventInput() {
    var _this;

    var proto = PointerEventInput.prototype;
    proto.evEl = POINTER_ELEMENT_EVENTS;
    proto.evWin = POINTER_WINDOW_EVENTS;
    _this = _Input.apply(this, arguments) || this;
    _this.store = _this.manager.session.pointerEvents = [];
    return _this;
  }
  /**
   * @private
   * handle mouse events
   * @param {Object} ev
   */


  var _proto = PointerEventInput.prototype;

  _proto.handler = function handler(ev) {
    var store = this.store;
    var removePointer = false;
    var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
    var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
    var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
    var isTouch = pointerType === INPUT_TYPE_TOUCH; // get index of the event in the store

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
  };

  return PointerEventInput;
}(Input);

/**
 * @private
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
  return Array.prototype.slice.call(obj, 0);
}

/**
 * @private
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
      results = results.sort(function (a, b) {
        return a[key] > b[key];
      });
    }
  }

  return results;
}

var TOUCH_INPUT_MAP = {
  touchstart: INPUT_START,
  touchmove: INPUT_MOVE,
  touchend: INPUT_END,
  touchcancel: INPUT_CANCEL
};
var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
/**
 * @private
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */

var TouchInput =
/*#__PURE__*/
function (_Input) {
  _inheritsLoose(TouchInput, _Input);

  function TouchInput() {
    var _this;

    TouchInput.prototype.evTarget = TOUCH_TARGET_EVENTS;
    _this = _Input.apply(this, arguments) || this;
    _this.targetIds = {}; // this.evTarget = TOUCH_TARGET_EVENTS;

    return _this;
  }

  var _proto = TouchInput.prototype;

  _proto.handler = function handler(ev) {
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
  };

  return TouchInput;
}(Input);

function getTouches(ev, type) {
  var allTouches = toArray(ev.touches);
  var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

  if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
    targetIds[allTouches[0].identifier] = true;
    return [allTouches, allTouches];
  }

  var i;
  var targetTouches;
  var changedTouches = toArray(ev.changedTouches);
  var changedTargetTouches = [];
  var target = this.target; // get target touches from touches

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

var MOUSE_INPUT_MAP = {
  mousedown: INPUT_START,
  mousemove: INPUT_MOVE,
  mouseup: INPUT_END
};
var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
/**
 * @private
 * Mouse events input
 * @constructor
 * @extends Input
 */

var MouseInput =
/*#__PURE__*/
function (_Input) {
  _inheritsLoose(MouseInput, _Input);

  function MouseInput() {
    var _this;

    var proto = MouseInput.prototype;
    proto.evEl = MOUSE_ELEMENT_EVENTS;
    proto.evWin = MOUSE_WINDOW_EVENTS;
    _this = _Input.apply(this, arguments) || this;
    _this.pressed = false; // mousedown state

    return _this;
  }
  /**
   * @private
   * handle mouse events
   * @param {Object} ev
   */


  var _proto = MouseInput.prototype;

  _proto.handler = function handler(ev) {
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
  };

  return MouseInput;
}(Input);

/**
 * @private
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

function setLastTouch(eventData) {
  var _eventData$changedPoi = eventData.changedPointers,
      touch = _eventData$changedPoi[0];

  if (touch.identifier === this.primaryTouch) {
    var lastTouch = {
      x: touch.clientX,
      y: touch.clientY
    };
    var lts = this.lastTouches;
    this.lastTouches.push(lastTouch);

    var removeLastTouch = function removeLastTouch() {
      var i = lts.indexOf(lastTouch);

      if (i > -1) {
        lts.splice(i, 1);
      }
    };

    setTimeout(removeLastTouch, DEDUP_TIMEOUT);
  }
}

function recordTouches(eventType, eventData) {
  if (eventType & INPUT_START) {
    this.primaryTouch = eventData.changedPointers[0].identifier;
    setLastTouch.call(this, eventData);
  } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
    setLastTouch.call(this, eventData);
  }
}

function isSyntheticEvent(eventData) {
  var x = eventData.srcEvent.clientX;
  var y = eventData.srcEvent.clientY;

  for (var i = 0; i < this.lastTouches.length; i++) {
    var t = this.lastTouches[i];
    var dx = Math.abs(x - t.x);
    var dy = Math.abs(y - t.y);

    if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
      return true;
    }
  }

  return false;
}

var TouchMouseInput =
/*#__PURE__*/
function () {
  var TouchMouseInput =
  /*#__PURE__*/
  function (_Input) {
    _inheritsLoose(TouchMouseInput, _Input);

    function TouchMouseInput(_manager, callback) {
      var _this;

      _this = _Input.call(this, _manager, callback) || this;

      _this.handler = function (manager, inputEvent, inputData) {
        var isTouch = inputData.pointerType === INPUT_TYPE_TOUCH;
        var isMouse = inputData.pointerType === INPUT_TYPE_MOUSE;

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
          return;
        } // when we're in a touch event, record touches to  de-dupe synthetic mouse event


        if (isTouch) {
          recordTouches.call(_assertThisInitialized$1(_assertThisInitialized$1(_this)), inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(_assertThisInitialized$1(_assertThisInitialized$1(_this)), inputData)) {
          return;
        }

        _this.callback(manager, inputEvent, inputData);
      };

      _this.touch = new TouchInput(_this.manager, _this.handler);
      _this.mouse = new MouseInput(_this.manager, _this.handler);
      _this.primaryTouch = null;
      _this.lastTouches = [];
      return _this;
    }
    /**
     * @private
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */


    var _proto = TouchMouseInput.prototype;

    /**
     * @private
     * remove the event listeners
     */
    _proto.destroy = function destroy() {
      this.touch.destroy();
      this.mouse.destroy();
    };

    return TouchMouseInput;
  }(Input);

  return TouchMouseInput;
}();

/**
 * @private
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */

function createInputInstance(manager) {
  var Type; // let inputClass = manager.options.inputClass;

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
 * @private
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

var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * @private
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
  return _uniqueId++;
}

/**
 * @private
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
 * @private
 * get a usable string, used as event postfix
 * @param {constant} state
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
 * @private
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

/**
 * @private
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */

var Recognizer =
/*#__PURE__*/
function () {
  function Recognizer(options) {
    if (options === void 0) {
      options = {};
    }

    this.options = _extends({
      enable: true
    }, options);
    this.id = uniqueId();
    this.manager = null; // default is enable true

    this.state = STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
  }
  /**
   * @private
   * set options
   * @param {Object} options
   * @return {Recognizer}
   */


  var _proto = Recognizer.prototype;

  _proto.set = function set(options) {
    assign$1(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

    this.manager && this.manager.touchAction.update();
    return this;
  };
  /**
   * @private
   * recognize simultaneous with an other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */


  _proto.recognizeWith = function recognizeWith(otherRecognizer) {
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
  };
  /**
   * @private
   * drop the simultaneous link. it doesnt remove the link on the other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */


  _proto.dropRecognizeWith = function dropRecognizeWith(otherRecognizer) {
    if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
      return this;
    }

    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
    delete this.simultaneous[otherRecognizer.id];
    return this;
  };
  /**
   * @private
   * recognizer can only run when an other is failing
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */


  _proto.requireFailure = function requireFailure(otherRecognizer) {
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
  };
  /**
   * @private
   * drop the requireFailure link. it does not remove the link on the other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */


  _proto.dropRequireFailure = function dropRequireFailure(otherRecognizer) {
    if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
      return this;
    }

    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
    var index = inArray(this.requireFail, otherRecognizer);

    if (index > -1) {
      this.requireFail.splice(index, 1);
    }

    return this;
  };
  /**
   * @private
   * has require failures boolean
   * @returns {boolean}
   */


  _proto.hasRequireFailures = function hasRequireFailures() {
    return this.requireFail.length > 0;
  };
  /**
   * @private
   * if the recognizer can recognize simultaneous with an other recognizer
   * @param {Recognizer} otherRecognizer
   * @returns {Boolean}
   */


  _proto.canRecognizeWith = function canRecognizeWith(otherRecognizer) {
    return !!this.simultaneous[otherRecognizer.id];
  };
  /**
   * @private
   * You should use `tryEmit` instead of `emit` directly to check
   * that all the needed recognizers has failed before emitting.
   * @param {Object} input
   */


  _proto.emit = function emit(input) {
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
  };
  /**
   * @private
   * Check that all the require failure recognizers has failed,
   * if true, it emits a gesture event,
   * otherwise, setup the state to FAILED.
   * @param {Object} input
   */


  _proto.tryEmit = function tryEmit(input) {
    if (this.canEmit()) {
      return this.emit(input);
    } // it's failing anyway


    this.state = STATE_FAILED;
  };
  /**
   * @private
   * can we emit?
   * @returns {boolean}
   */


  _proto.canEmit = function canEmit() {
    var i = 0;

    while (i < this.requireFail.length) {
      if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
        return false;
      }

      i++;
    }

    return true;
  };
  /**
   * @private
   * update the recognizer
   * @param {Object} inputData
   */


  _proto.recognize = function recognize(inputData) {
    // make a new copy of the inputData
    // so we can change the inputData without messing up the other recognizers
    var inputDataClone = assign$1({}, inputData); // is is enabled and allow recognizing?

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
  };
  /**
   * @private
   * return the state of the recognizer
   * the actual recognizing happens in this method
   * @virtual
   * @param {Object} inputData
   * @returns {constant} STATE
   */

  /* jshint ignore:start */


  _proto.process = function process(inputData) {};
  /* jshint ignore:end */

  /**
   * @private
   * return the preferred touch-action
   * @virtual
   * @returns {Array}
   */


  _proto.getTouchAction = function getTouchAction() {};
  /**
   * @private
   * called when the gesture isn't allowed to recognize
   * like when another is being recognized or it is disabled
   * @virtual
   */


  _proto.reset = function reset() {};

  return Recognizer;
}();

/**
 * @private
 * A tap is recognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */

var TapRecognizer =
/*#__PURE__*/
function (_Recognizer) {
  _inheritsLoose(TapRecognizer, _Recognizer);

  function TapRecognizer(options) {
    var _this;

    if (options === void 0) {
      options = {};
    }

    _this = _Recognizer.call(this, _extends({
      event: 'tap',
      pointers: 1,
      taps: 1,
      interval: 300,
      // max time between the multi-tap taps
      time: 250,
      // max time of the pointer to be down (like finger on the screen)
      threshold: 9,
      // a minimal movement is ok, but keep it low
      posThreshold: 10
    }, options)) || this; // previous time and center,
    // used for tap counting

    _this.pTime = false;
    _this.pCenter = false;
    _this._timer = null;
    _this._input = null;
    _this.count = 0;
    return _this;
  }

  var _proto = TapRecognizer.prototype;

  _proto.getTouchAction = function getTouchAction() {
    return [TOUCH_ACTION_MANIPULATION];
  };

  _proto.process = function process(input) {
    var _this2 = this;

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
      if (input.eventType !== INPUT_END) {
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
          this._timer = setTimeout(function () {
            _this2.state = STATE_RECOGNIZED;

            _this2.tryEmit();
          }, options.interval);
          return STATE_BEGAN;
        }
      }
    }

    return STATE_FAILED;
  };

  _proto.failTimeout = function failTimeout() {
    var _this3 = this;

    this._timer = setTimeout(function () {
      _this3.state = STATE_FAILED;
    }, this.options.interval);
    return STATE_FAILED;
  };

  _proto.reset = function reset() {
    clearTimeout(this._timer);
  };

  _proto.emit = function emit() {
    if (this.state === STATE_RECOGNIZED) {
      this._input.tapCount = this.count;
      this.manager.emit(this.options.event, this._input);
    }
  };

  return TapRecognizer;
}(Recognizer);

/**
 * @private
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */

var AttrRecognizer =
/*#__PURE__*/
function (_Recognizer) {
  _inheritsLoose(AttrRecognizer, _Recognizer);

  function AttrRecognizer(options) {
    if (options === void 0) {
      options = {};
    }

    return _Recognizer.call(this, _extends({
      pointers: 1
    }, options)) || this;
  }
  /**
   * @private
   * Used to check if it the recognizer receives valid input, like input.distance > 10.
   * @memberof AttrRecognizer
   * @param {Object} input
   * @returns {Boolean} recognized
   */


  var _proto = AttrRecognizer.prototype;

  _proto.attrTest = function attrTest(input) {
    var optionPointers = this.options.pointers;
    return optionPointers === 0 || input.pointers.length === optionPointers;
  };
  /**
   * @private
   * Process the input and return the state for the recognizer
   * @memberof AttrRecognizer
   * @param {Object} input
   * @returns {*} State
   */


  _proto.process = function process(input) {
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
  };

  return AttrRecognizer;
}(Recognizer);

/**
 * @private
 * direction cons to string
 * @param {constant} direction
 * @returns {String}
 */

function directionStr(direction) {
  if (direction === DIRECTION_DOWN) {
    return 'down';
  } else if (direction === DIRECTION_UP) {
    return 'up';
  } else if (direction === DIRECTION_LEFT) {
    return 'left';
  } else if (direction === DIRECTION_RIGHT) {
    return 'right';
  }

  return '';
}

/**
 * @private
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */

var PanRecognizer =
/*#__PURE__*/
function (_AttrRecognizer) {
  _inheritsLoose(PanRecognizer, _AttrRecognizer);

  function PanRecognizer(options) {
    var _this;

    if (options === void 0) {
      options = {};
    }

    _this = _AttrRecognizer.call(this, _extends({
      event: 'pan',
      threshold: 10,
      pointers: 1,
      direction: DIRECTION_ALL
    }, options)) || this;
    _this.pX = null;
    _this.pY = null;
    return _this;
  }

  var _proto = PanRecognizer.prototype;

  _proto.getTouchAction = function getTouchAction() {
    var direction = this.options.direction;
    var actions = [];

    if (direction & DIRECTION_HORIZONTAL) {
      actions.push(TOUCH_ACTION_PAN_Y);
    }

    if (direction & DIRECTION_VERTICAL) {
      actions.push(TOUCH_ACTION_PAN_X);
    }

    return actions;
  };

  _proto.directionTest = function directionTest(input) {
    var options = this.options;
    var hasMoved = true;
    var distance = input.distance;
    var direction = input.direction;
    var x = input.deltaX;
    var y = input.deltaY; // lock to axis?

    if (!(direction & options.direction)) {
      if (options.direction & DIRECTION_HORIZONTAL) {
        direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        hasMoved = x !== this.pX;
        distance = Math.abs(input.deltaX);
      } else {
        direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
        hasMoved = y !== this.pY;
        distance = Math.abs(input.deltaY);
      }
    }

    input.direction = direction;
    return hasMoved && distance > options.threshold && direction & options.direction;
  };

  _proto.attrTest = function attrTest(input) {
    return AttrRecognizer.prototype.attrTest.call(this, input) && ( // replace with a super call
    this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
  };

  _proto.emit = function emit(input) {
    this.pX = input.deltaX;
    this.pY = input.deltaY;
    var direction = directionStr(input.direction);

    if (direction) {
      input.additionalEvent = this.options.event + direction;
    }

    _AttrRecognizer.prototype.emit.call(this, input);
  };

  return PanRecognizer;
}(AttrRecognizer);

/**
 * @private
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */

var SwipeRecognizer =
/*#__PURE__*/
function (_AttrRecognizer) {
  _inheritsLoose(SwipeRecognizer, _AttrRecognizer);

  function SwipeRecognizer(options) {
    if (options === void 0) {
      options = {};
    }

    return _AttrRecognizer.call(this, _extends({
      event: 'swipe',
      threshold: 10,
      velocity: 0.3,
      direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
      pointers: 1
    }, options)) || this;
  }

  var _proto = SwipeRecognizer.prototype;

  _proto.getTouchAction = function getTouchAction() {
    return PanRecognizer.prototype.getTouchAction.call(this);
  };

  _proto.attrTest = function attrTest(input) {
    var direction = this.options.direction;
    var velocity;

    if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
      velocity = input.overallVelocity;
    } else if (direction & DIRECTION_HORIZONTAL) {
      velocity = input.overallVelocityX;
    } else if (direction & DIRECTION_VERTICAL) {
      velocity = input.overallVelocityY;
    }

    return _AttrRecognizer.prototype.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers === this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
  };

  _proto.emit = function emit(input) {
    var direction = directionStr(input.offsetDirection);

    if (direction) {
      this.manager.emit(this.options.event + direction, input);
    }

    this.manager.emit(this.options.event, input);
  };

  return SwipeRecognizer;
}(AttrRecognizer);

/**
 * @private
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */

var PinchRecognizer =
/*#__PURE__*/
function (_AttrRecognizer) {
  _inheritsLoose(PinchRecognizer, _AttrRecognizer);

  function PinchRecognizer(options) {
    if (options === void 0) {
      options = {};
    }

    return _AttrRecognizer.call(this, _extends({
      event: 'pinch',
      threshold: 0,
      pointers: 2
    }, options)) || this;
  }

  var _proto = PinchRecognizer.prototype;

  _proto.getTouchAction = function getTouchAction() {
    return [TOUCH_ACTION_NONE];
  };

  _proto.attrTest = function attrTest(input) {
    return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
  };

  _proto.emit = function emit(input) {
    if (input.scale !== 1) {
      var inOut = input.scale < 1 ? 'in' : 'out';
      input.additionalEvent = this.options.event + inOut;
    }

    _AttrRecognizer.prototype.emit.call(this, input);
  };

  return PinchRecognizer;
}(AttrRecognizer);

/**
 * @private
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */

var RotateRecognizer =
/*#__PURE__*/
function (_AttrRecognizer) {
  _inheritsLoose(RotateRecognizer, _AttrRecognizer);

  function RotateRecognizer(options) {
    if (options === void 0) {
      options = {};
    }

    return _AttrRecognizer.call(this, _extends({
      event: 'rotate',
      threshold: 0,
      pointers: 2
    }, options)) || this;
  }

  var _proto = RotateRecognizer.prototype;

  _proto.getTouchAction = function getTouchAction() {
    return [TOUCH_ACTION_NONE];
  };

  _proto.attrTest = function attrTest(input) {
    return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
  };

  return RotateRecognizer;
}(AttrRecognizer);

/**
 * @private
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */

var PressRecognizer =
/*#__PURE__*/
function (_Recognizer) {
  _inheritsLoose(PressRecognizer, _Recognizer);

  function PressRecognizer(options) {
    var _this;

    if (options === void 0) {
      options = {};
    }

    _this = _Recognizer.call(this, _extends({
      event: 'press',
      pointers: 1,
      time: 251,
      // minimal time of the pointer to be pressed
      threshold: 9
    }, options)) || this;
    _this._timer = null;
    _this._input = null;
    return _this;
  }

  var _proto = PressRecognizer.prototype;

  _proto.getTouchAction = function getTouchAction() {
    return [TOUCH_ACTION_AUTO];
  };

  _proto.process = function process(input) {
    var _this2 = this;

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
      this._timer = setTimeout(function () {
        _this2.state = STATE_RECOGNIZED;

        _this2.tryEmit();
      }, options.time);
    } else if (input.eventType & INPUT_END) {
      return STATE_RECOGNIZED;
    }

    return STATE_FAILED;
  };

  _proto.reset = function reset() {
    clearTimeout(this._timer);
  };

  _proto.emit = function emit(input) {
    if (this.state !== STATE_RECOGNIZED) {
      return;
    }

    if (input && input.eventType & INPUT_END) {
      this.manager.emit(this.options.event + "up", input);
    } else {
      this._input.timeStamp = now();
      this.manager.emit(this.options.event, this._input);
    }
  };

  return PressRecognizer;
}(Recognizer);

var defaults = {
  /**
   * @private
   * set if DOM events are being triggered.
   * But this is slower and unused by simple implementations, so disabled by default.
   * @type {Boolean}
   * @default false
   */
  domEvents: false,

  /**
   * @private
   * The value for the touchAction property/fallback.
   * When set to `compute` it will magically set the correct value based on the added recognizers.
   * @type {String}
   * @default compute
   */
  touchAction: TOUCH_ACTION_COMPUTE,

  /**
   * @private
   * @type {Boolean}
   * @default true
   */
  enable: true,

  /**
   * @private
   * EXPERIMENTAL FEATURE -- can be removed/changed
   * Change the parent input target element.
   * If Null, then it is being set the to main element.
   * @type {Null|EventTarget}
   * @default null
   */
  inputTarget: null,

  /**
   * @private
   * force an input class
   * @type {Null|Function}
   * @default null
   */
  inputClass: null,

  /**
   * @private
   * Some CSS properties can be used to improve the working of Hammer.
   * Add them to this method and they will be set when creating a new Manager.
   * @namespace
   */
  cssProps: {
    /**
     * @private
     * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
     * @type {String}
     * @default 'none'
     */
    userSelect: "none",

    /**
     * @private
     * Disable the Windows Phone grippers when pressing an element.
     * @type {String}
     * @default 'none'
     */
    touchSelect: "none",

    /**
     * @private
     * Disables the default callout shown when you touch and hold a touch target.
     * On iOS, when you touch and hold a touch target such as a link, Safari displays
     * a callout containing information about the link. This property allows you to disable that callout.
     * @type {String}
     * @default 'none'
     */
    touchCallout: "none",

    /**
     * @private
     * Specifies whether zooming is enabled. Used by IE10>
     * @type {String}
     * @default 'none'
     */
    contentZooming: "none",

    /**
     * @private
     * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
     * @type {String}
     * @default 'none'
     */
    userDrag: "none",

    /**
     * @private
     * Overrides the highlight color shown when the user taps a link or a JavaScript
     * clickable element in iOS. This property obeys the alpha value, if specified.
     * @type {String}
     * @default 'rgba(0,0,0,0)'
     */
    tapHighlightColor: "rgba(0,0,0,0)"
  }
};
/**
 * @private
 * Default recognizer setup when calling `Hammer()`
 * When creating a new Manager these will be skipped.
 * This is separated with other defaults because of tree-shaking.
 * @type {Array}
 */

var preset = [[RotateRecognizer, {
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
}, ['tap']], [PressRecognizer]];

var STOP = 1;
var FORCED_STOP = 2;
/**
 * @private
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
      element.style[prop] = manager.oldCssProps[prop] || "";
    }
  });

  if (!add) {
    manager.oldCssProps = {};
  }
}
/**
 * @private
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */


function triggerDomEvent(event, data) {
  var gestureEvent = document.createEvent("Event");
  gestureEvent.initEvent(event, true, true);
  gestureEvent.gesture = data;
  data.target.dispatchEvent(gestureEvent);
}
/**
* @private
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */


var Manager =
/*#__PURE__*/
function () {
  function Manager(element, options) {
    var _this = this;

    this.options = assign$1({}, defaults, options || {});
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
      var recognizer = _this.add(new item[0](item[1]));

      item[2] && recognizer.recognizeWith(item[2]);
      item[3] && recognizer.requireFailure(item[3]);
    }, this);
  }
  /**
   * @private
   * set options
   * @param {Object} options
   * @returns {Manager}
   */


  var _proto = Manager.prototype;

  _proto.set = function set(options) {
    assign$1(this.options, options); // Options that need a little more setup

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
  };
  /**
   * @private
   * stop recognizing for this session.
   * This session will be discarded, when a new [input]start event is fired.
   * When forced, the recognizer cycle is stopped immediately.
   * @param {Boolean} [force]
   */


  _proto.stop = function stop(force) {
    this.session.stopped = force ? FORCED_STOP : STOP;
  };
  /**
   * @private
   * run the recognizers!
   * called by the inputHandler function on every movement of the pointers (touches)
   * it walks through all the recognizers and tries to detect the gesture that is being made
   * @param {Object} inputData
   */


  _proto.recognize = function recognize(inputData) {
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
      session.curRecognizer = null;
      curRecognizer = null;
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
      !curRecognizer || recognizer === curRecognizer || // 2
      recognizer.canRecognizeWith(curRecognizer))) {
        // 3
        recognizer.recognize(inputData);
      } else {
        recognizer.reset();
      } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
      // current active recognizer. but only if we don't already have an active recognizer


      if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
        session.curRecognizer = recognizer;
        curRecognizer = recognizer;
      }

      i++;
    }
  };
  /**
   * @private
   * get a recognizer by its event name.
   * @param {Recognizer|String} recognizer
   * @returns {Recognizer|Null}
   */


  _proto.get = function get(recognizer) {
    if (recognizer instanceof Recognizer) {
      return recognizer;
    }

    var recognizers = this.recognizers;

    for (var i = 0; i < recognizers.length; i++) {
      if (recognizers[i].options.event === recognizer) {
        return recognizers[i];
      }
    }

    return null;
  };
  /**
   * @private add a recognizer to the manager
   * existing recognizers with the same event name will be removed
   * @param {Recognizer} recognizer
   * @returns {Recognizer|Manager}
   */


  _proto.add = function add(recognizer) {
    if (invokeArrayArg(recognizer, "add", this)) {
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
  };
  /**
   * @private
   * remove a recognizer by name or instance
   * @param {Recognizer|String} recognizer
   * @returns {Manager}
   */


  _proto.remove = function remove(recognizer) {
    if (invokeArrayArg(recognizer, "remove", this)) {
      return this;
    }

    var targetRecognizer = this.get(recognizer); // let's make sure this recognizer exists

    if (recognizer) {
      var recognizers = this.recognizers;
      var index = inArray(recognizers, targetRecognizer);

      if (index !== -1) {
        recognizers.splice(index, 1);
        this.touchAction.update();
      }
    }

    return this;
  };
  /**
   * @private
   * bind event
   * @param {String} events
   * @param {Function} handler
   * @returns {EventEmitter} this
   */


  _proto.on = function on(events, handler) {
    if (events === undefined || handler === undefined) {
      return this;
    }

    var handlers = this.handlers;
    each(splitStr(events), function (event) {
      handlers[event] = handlers[event] || [];
      handlers[event].push(handler);
    });
    return this;
  };
  /**
   * @private unbind event, leave emit blank to remove all handlers
   * @param {String} events
   * @param {Function} [handler]
   * @returns {EventEmitter} this
   */


  _proto.off = function off(events, handler) {
    if (events === undefined) {
      return this;
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
  };
  /**
   * @private emit event to the listeners
   * @param {String} event
   * @param {Object} data
   */


  _proto.emit = function emit(event, data) {
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
  };
  /**
   * @private
   * destroy the manager and unbinds all events
   * it doesn't unbind dom events, that is the user own responsibility
   */


  _proto.destroy = function destroy() {
    this.element && toggleCssProps(this, false);
    this.handlers = {};
    this.session = {};
    this.input.destroy();
    this.element = null;
  };

  return Manager;
}();

var SINGLE_TOUCH_INPUT_MAP = {
  touchstart: INPUT_START,
  touchmove: INPUT_MOVE,
  touchend: INPUT_END,
  touchcancel: INPUT_CANCEL
};
var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
/**
 * @private
 * Touch events input
 * @constructor
 * @extends Input
 */

var SingleTouchInput =
/*#__PURE__*/
function (_Input) {
  _inheritsLoose(SingleTouchInput, _Input);

  function SingleTouchInput() {
    var _this;

    var proto = SingleTouchInput.prototype;
    proto.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    proto.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    _this = _Input.apply(this, arguments) || this;
    _this.started = false;
    return _this;
  }

  var _proto = SingleTouchInput.prototype;

  _proto.handler = function handler(ev) {
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
  };

  return SingleTouchInput;
}(Input);

function normalizeSingleTouches(ev, type) {
  var all = toArray(ev.touches);
  var changed = toArray(ev.changedTouches);

  if (type & (INPUT_END | INPUT_CANCEL)) {
    all = uniqueArray(all.concat(changed), 'identifier', true);
  }

  return [all, changed];
}

/**
 * @private
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
  var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
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
 * @private
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */

var extend = deprecate(function (dest, src, merge) {
  var keys = Object.keys(src);
  var i = 0;

  while (i < keys.length) {
    if (!merge || merge && dest[keys[i]] === undefined) {
      dest[keys[i]] = src[keys[i]];
    }

    i++;
  }

  return dest;
}, 'extend', 'Use `assign`.');

/**
 * @private
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */

var merge = deprecate(function (dest, src) {
  return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * @private
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */

function inherit(child, base, properties) {
  var baseP = base.prototype;
  var childP;
  childP = child.prototype = Object.create(baseP);
  childP.constructor = child;
  childP._super = baseP;

  if (properties) {
    assign$1(childP, properties);
  }
}

/**
 * @private
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
 * @private
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */

var Hammer =
/*#__PURE__*/
function () {
  var Hammer =
  /**
    * @private
    * @const {string}
    */
  function Hammer(element, options) {
    if (options === void 0) {
      options = {};
    }

    return new Manager(element, _extends({
      recognizers: preset.concat()
    }, options));
  };

  Hammer.VERSION = "2.0.17-rc";
  Hammer.DIRECTION_ALL = DIRECTION_ALL;
  Hammer.DIRECTION_DOWN = DIRECTION_DOWN;
  Hammer.DIRECTION_LEFT = DIRECTION_LEFT;
  Hammer.DIRECTION_RIGHT = DIRECTION_RIGHT;
  Hammer.DIRECTION_UP = DIRECTION_UP;
  Hammer.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
  Hammer.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
  Hammer.DIRECTION_NONE = DIRECTION_NONE;
  Hammer.DIRECTION_DOWN = DIRECTION_DOWN;
  Hammer.INPUT_START = INPUT_START;
  Hammer.INPUT_MOVE = INPUT_MOVE;
  Hammer.INPUT_END = INPUT_END;
  Hammer.INPUT_CANCEL = INPUT_CANCEL;
  Hammer.STATE_POSSIBLE = STATE_POSSIBLE;
  Hammer.STATE_BEGAN = STATE_BEGAN;
  Hammer.STATE_CHANGED = STATE_CHANGED;
  Hammer.STATE_ENDED = STATE_ENDED;
  Hammer.STATE_RECOGNIZED = STATE_RECOGNIZED;
  Hammer.STATE_CANCELLED = STATE_CANCELLED;
  Hammer.STATE_FAILED = STATE_FAILED;
  Hammer.Manager = Manager;
  Hammer.Input = Input;
  Hammer.TouchAction = TouchAction;
  Hammer.TouchInput = TouchInput;
  Hammer.MouseInput = MouseInput;
  Hammer.PointerEventInput = PointerEventInput;
  Hammer.TouchMouseInput = TouchMouseInput;
  Hammer.SingleTouchInput = SingleTouchInput;
  Hammer.Recognizer = Recognizer;
  Hammer.AttrRecognizer = AttrRecognizer;
  Hammer.Tap = TapRecognizer;
  Hammer.Pan = PanRecognizer;
  Hammer.Swipe = SwipeRecognizer;
  Hammer.Pinch = PinchRecognizer;
  Hammer.Rotate = RotateRecognizer;
  Hammer.Press = PressRecognizer;
  Hammer.on = addEventListeners;
  Hammer.off = removeEventListeners;
  Hammer.each = each;
  Hammer.merge = merge;
  Hammer.extend = extend;
  Hammer.bindFn = bindFn;
  Hammer.assign = assign$1;
  Hammer.inherit = inherit;
  Hammer.bindFn = bindFn;
  Hammer.prefixed = prefixed;
  Hammer.toArray = toArray;
  Hammer.inArray = inArray;
  Hammer.uniqueArray = uniqueArray;
  Hammer.splitStr = splitStr;
  Hammer.boolOrFn = boolOrFn;
  Hammer.hasParent = hasParent;
  Hammer.addEventListeners = addEventListeners;
  Hammer.removeEventListeners = removeEventListeners;
  Hammer.defaults = assign$1({}, defaults, {
    preset: preset
  });
  return Hammer;
}();

var RealHammer = Hammer;

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (_Array$isArray$1(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray$1(o, minLen) { var _context21; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = _sliceInstanceProperty(_context21 = Object.prototype.toString.call(o)).call(_context21, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from$1(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }
function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

/**
 * Use this symbol to delete properies in deepObjectAssign.
 */
var DELETE = _Symbol("DELETE");
/**
 * Pure version of deepObjectAssign, it doesn't modify any of it's arguments.
 *
 * @param base - The base object that fullfils the whole interface T.
 * @param updates - Updates that may change or delete props.
 * @returns A brand new instance with all the supplied objects deeply merged.
 */
function pureDeepObjectAssign(base) {
  var _context;
  for (var _len = arguments.length, updates = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    updates[_key - 1] = arguments[_key];
  }
  return deepObjectAssign.apply(void 0, _concatInstanceProperty(_context = [{}, base]).call(_context, updates));
}
/**
 * Deep version of object assign with additional deleting by the DELETE symbol.
 *
 * @param values - Objects to be deeply merged.
 * @returns The first object from values.
 */
function deepObjectAssign() {
  var merged = deepObjectAssignNonentry.apply(void 0, arguments);
  stripDelete(merged);
  return merged;
}
/**
 * Deep version of object assign with additional deleting by the DELETE symbol.
 *
 * @remarks
 * This doesn't strip the DELETE symbols so they may end up in the final object.
 * @param values - Objects to be deeply merged.
 * @returns The first object from values.
 */
function deepObjectAssignNonentry() {
  for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }
  if (values.length < 2) {
    return values[0];
  } else if (values.length > 2) {
    var _context2;
    return deepObjectAssignNonentry.apply(void 0, _concatInstanceProperty(_context2 = [deepObjectAssign(values[0], values[1])]).call(_context2, _toConsumableArray(_sliceInstanceProperty(values).call(values, 2))));
  }
  var a = values[0];
  var b = values[1];
  var _iterator = _createForOfIteratorHelper$1(_Reflect$ownKeys(b)),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var prop = _step.value;
      if (!Object.prototype.propertyIsEnumerable.call(b, prop)) ;else if (b[prop] === DELETE) {
        delete a[prop];
      } else if (a[prop] !== null && b[prop] !== null && _typeof$1(a[prop]) === "object" && _typeof$1(b[prop]) === "object" && !_Array$isArray$1(a[prop]) && !_Array$isArray$1(b[prop])) {
        a[prop] = deepObjectAssignNonentry(a[prop], b[prop]);
      } else {
        a[prop] = clone(b[prop]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return a;
}
/**
 * Deep clone given object or array. In case of primitive simply return.
 *
 * @param a - Anything.
 * @returns Deep cloned object/array or unchanged a.
 */
function clone(a) {
  if (_Array$isArray$1(a)) {
    return _mapInstanceProperty(a).call(a, function (value) {
      return clone(value);
    });
  } else if (_typeof$1(a) === "object" && a !== null) {
    return deepObjectAssignNonentry({}, a);
  } else {
    return a;
  }
}
/**
 * Strip DELETE from given object.
 *
 * @param a - Object which may contain DELETE but won't after this is executed.
 */
function stripDelete(a) {
  for (var _i = 0, _Object$keys$1 = _Object$keys(a); _i < _Object$keys$1.length; _i++) {
    var prop = _Object$keys$1[_i];
    if (a[prop] === DELETE) {
      delete a[prop];
    } else if (_typeof$1(a[prop]) === "object" && a[prop] !== null) {
      stripDelete(a[prop]);
    }
  }
}

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
    get: function get() {
      return {
        set: noop
      };
    }
  };
}
var Hammer$1 = typeof window !== "undefined" ? window.Hammer || RealHammer : function () {
  // hammer.js is only available in a browser, not in node.js. Replacing it with a mock object.
  return hammerMock();
};

/**
 * Turn an element into an clickToUse element.
 * When not active, the element has a transparent overlay. When the overlay is
 * clicked, the mode is changed to active.
 * When active, the element is displayed with a blue border around it, and
 * the interactive contents of the element can be used. When clicked outside
 * the element, the elements mode is changed to inactive.
 *
 * @param {Element} container
 * @class Activator
 */
function Activator$1(container) {
  var _this = this,
    _context3;
  this._cleanupQueue = [];
  this.active = false;
  this._dom = {
    container: container,
    overlay: document.createElement("div")
  };
  this._dom.overlay.classList.add("vis-overlay");
  this._dom.container.appendChild(this._dom.overlay);
  this._cleanupQueue.push(function () {
    _this._dom.overlay.parentNode.removeChild(_this._dom.overlay);
  });
  var hammer = Hammer$1(this._dom.overlay);
  hammer.on("tap", _bindInstanceProperty$1(_context3 = this._onTapOverlay).call(_context3, this));
  this._cleanupQueue.push(function () {
    hammer.destroy();
    // FIXME: cleaning up hammer instances doesn't work (Timeline not removed
    // from memory)
  });

  // block all touch events (except tap)
  var events = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];
  _forEachInstanceProperty(events).call(events, function (event) {
    hammer.on(event, function (event) {
      event.srcEvent.stopPropagation();
    });
  });

  // attach a click event to the window, in order to deactivate when clicking outside the timeline
  if (document && document.body) {
    this._onClick = function (event) {
      if (!_hasParent(event.target, container)) {
        _this.deactivate();
      }
    };
    document.body.addEventListener("click", this._onClick);
    this._cleanupQueue.push(function () {
      document.body.removeEventListener("click", _this._onClick);
    });
  }

  // prepare escape key listener for deactivating when active
  this._escListener = function (event) {
    if ("key" in event ? event.key === "Escape" : event.keyCode === 27 /* the keyCode is for IE11 */) {
      _this.deactivate();
    }
  };
}

// turn into an event emitter
Emitter(Activator$1.prototype);

// The currently active activator
Activator$1.current = null;

/**
 * Destroy the activator. Cleans up all created DOM and event listeners
 */
Activator$1.prototype.destroy = function () {
  var _context4, _context5;
  this.deactivate();
  var _iterator2 = _createForOfIteratorHelper$1(_reverseInstanceProperty(_context4 = _spliceInstanceProperty(_context5 = this._cleanupQueue).call(_context5, 0)).call(_context4)),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var callback = _step2.value;
      callback();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};

/**
 * Activate the element
 * Overlay is hidden, element is decorated with a blue shadow border
 */
Activator$1.prototype.activate = function () {
  // we allow only one active activator at a time
  if (Activator$1.current) {
    Activator$1.current.deactivate();
  }
  Activator$1.current = this;
  this.active = true;
  this._dom.overlay.style.display = "none";
  this._dom.container.classList.add("vis-active");
  this.emit("change");
  this.emit("activate");

  // ugly hack: bind ESC after emitting the events, as the Network rebinds all
  // keyboard events on a 'change' event
  document.body.addEventListener("keydown", this._escListener);
};

/**
 * Deactivate the element
 * Overlay is displayed on top of the element
 */
Activator$1.prototype.deactivate = function () {
  this.active = false;
  this._dom.overlay.style.display = "block";
  this._dom.container.classList.remove("vis-active");
  document.body.removeEventListener("keydown", this._escListener);
  this.emit("change");
  this.emit("deactivate");
};

/**
 * Handle a tap event: activate the container
 *
 * @param {Event}  event   The event
 * @private
 */
Activator$1.prototype._onTapOverlay = function (event) {
  // activate the container
  this.activate();
  event.srcEvent.stopPropagation();
};

/**
 * Test whether the element has the requested parent element somewhere in
 * its chain of parent nodes.
 *
 * @param {HTMLElement} element
 * @param {HTMLElement} parent
 * @returns {boolean} Returns true when the parent is found somewhere in the
 *                    chain of parent nodes.
 * @private
 */
function _hasParent(element, parent) {
  while (element) {
    if (element === parent) {
      return true;
    }
    element = element.parentNode;
  }
  return false;
}
// Color REs
var fullHexRE = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
var shortHexRE = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
/**
 * Copy property from b to a if property present in a.
 * If property in b explicitly set to null, delete it if `allowDeletion` set.
 *
 * Internal helper routine, should not be exported. Not added to `exports` for that reason.
 *
 * @param a - Target object.
 * @param b - Source object.
 * @param prop - Name of property to copy from b to a.
 * @param allowDeletion - If true, delete property in a if explicitly set to null in b.
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
 * Extend object a with selected properties of object b.
 * Only properties with defined values are copied.
 *
 * @remarks
 * Previous version of this routine implied that multiple source objects could
 * be used; however, the implementation was **wrong**. Since multiple (\>1)
 * sources weren't used anywhere in the `vis.js` code, this has been removed
 * @param props - Names of first-level properties to copy over.
 * @param a - Target object.
 * @param b - Source object.
 * @param allowDeletion - If true, delete property in a if explicitly set to null in b.
 * @returns Argument a.
 */
function selectiveDeepExtend(props, a, b) {
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // TODO: add support for Arrays to deepExtend
  if (_Array$isArray$1(b)) {
    throw new TypeError("Arrays are not supported by deepExtend");
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
      } else if (_Array$isArray$1(b[prop])) {
        throw new TypeError("Arrays are not supported by deepExtend");
      } else {
        copyOrDelete(a, b, prop, allowDeletion);
      }
    }
  }
  return a;
}
/**
 * Deep extend an object a with the properties of object b.
 *
 * @param a - Target object.
 * @param b - Source object.
 * @param protoExtend - If true, the prototype values will also be extended.
 * (That is the options objects that inherit from others will also get the
 * inherited options).
 * @param allowDeletion - If true, the values of fields that are null will be deleted.
 * @returns Argument a.
 */
function deepExtend(a, b) {
  var protoExtend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  for (var prop in b) {
    if (Object.prototype.hasOwnProperty.call(b, prop) || protoExtend === true) {
      if (_typeof$1(b[prop]) === "object" && b[prop] !== null && _Object$getPrototypeOf$1(b[prop]) === Object.prototype) {
        if (a[prop] === undefined) {
          a[prop] = deepExtend({}, b[prop], protoExtend); // NOTE: allowDeletion not propagated!
        } else if (_typeof$1(a[prop]) === "object" && a[prop] !== null && _Object$getPrototypeOf$1(a[prop]) === Object.prototype) {
          deepExtend(a[prop], b[prop], protoExtend); // NOTE: allowDeletion not propagated!
        } else {
          copyOrDelete(a, b, prop, allowDeletion);
        }
      } else if (_Array$isArray$1(b[prop])) {
        var _context6;
        a[prop] = _sliceInstanceProperty(_context6 = b[prop]).call(_context6);
      } else {
        copyOrDelete(a, b, prop, allowDeletion);
      }
    }
  }
  return a;
}
/**
 * Used to extend an array and copy it. This is used to propagate paths recursively.
 *
 * @param arr - First part.
 * @param newValue - The value to be aadded into the array.
 * @returns A new array with all items from arr and newValue (which is last).
 */
function copyAndExtendArray(arr, newValue) {
  var _context7;
  return _concatInstanceProperty(_context7 = []).call(_context7, _toConsumableArray(arr), [newValue]);
}
/**
 * Used to extend an array and copy it. This is used to propagate paths recursively.
 *
 * @param arr - The array to be copied.
 * @returns Shallow copy of arr.
 */
function copyArray(arr) {
  return _sliceInstanceProperty(arr).call(arr);
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
    var _context8;
    if (useCapture === undefined) {
      useCapture = false;
    }
    if (action === "mousewheel" && _includesInstanceProperty(_context8 = navigator.userAgent).call(_context8, "Firefox")) {
      action = "DOMMouseScroll"; // For Firefox
    }

    element.addEventListener(action, listener, useCapture);
  } else {
    // @TODO: IE types? Does anyone care?
    element.attachEvent("on" + action, listener); // IE browsers
  }
}
/**
 * Remove an event listener from an element.
 *
 * @param element - The element to bind the event listener to.
 * @param action - Same as Element.removeEventListener(action, —, —).
 * @param listener - Same as Element.removeEventListener(—, listener, —).
 * @param useCapture - Same as Element.removeEventListener(—, —, useCapture).
 */
function removeEventListener(element, action, listener, useCapture) {
  if (element.removeEventListener) {
    var _context9;
    // non-IE browsers
    if (useCapture === undefined) {
      useCapture = false;
    }
    if (action === "mousewheel" && _includesInstanceProperty(_context9 = navigator.userAgent).call(_context9, "Firefox")) {
      action = "DOMMouseScroll"; // For Firefox
    }

    element.removeEventListener(action, listener, useCapture);
  } else {
    // @TODO: IE types? Does anyone care?
    element.detachEvent("on" + action, listener); // IE browsers
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
    // @TODO: IE types? Does anyone care?
    event.returnValue = false; // IE browsers
  }
}
/**
 * Convert hex color string into RGB color object.
 *
 * @remarks
 * {@link http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb}
 * @param hex - Hex color string (3 or 6 digits, with or without #).
 * @returns RGB color object.
 */
function hexToRGB(hex) {
  var result;
  switch (hex.length) {
    case 3:
    case 4:
      result = shortHexRE.exec(hex);
      return result ? {
        r: _parseInt$1(result[1] + result[1], 16),
        g: _parseInt$1(result[2] + result[2], 16),
        b: _parseInt$1(result[3] + result[3], 16)
      } : null;
    case 6:
    case 7:
      result = fullHexRE.exec(hex);
      return result ? {
        r: _parseInt$1(result[1], 16),
        g: _parseInt$1(result[2], 16),
        b: _parseInt$1(result[3], 16)
      } : null;
    default:
      return null;
  }
}
/**
 * Convert HSV \<0, 1\> into RGB color object.
 *
 * @remarks
 * {@link https://gist.github.com/mjijackson/5311256}
 * @param h - Hue.
 * @param s - Saturation.
 * @param v - Value.
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
 * Validate hex color string.
 *
 * @param hex - Unknown string that may contain a color.
 * @returns True if the string is valid, false otherwise.
 */
function isValidHex(hex) {
  var isOk = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
  return isOk;
}
var errorFound = false;
var allOptions$1;
var VALIDATOR_PRINT_STYLE$1 = "background: #FFeeee; color: #dd0000";

/**
 *  Used to validate options.
 */
var Validator$1 = /*#__PURE__*/function () {
  function Validator$1() {
    _classCallCheck(this, Validator$1);
  }
  _createClass(Validator$1, null, [{
    key: "validate",
    value:
    /**
     * Main function to be called
     *
     * @param {object} options
     * @param {object} referenceOptions
     * @param {object} subObject
     * @returns {boolean}
     * @static
     */
    function validate(options, referenceOptions, subObject) {
      errorFound = false;
      allOptions$1 = referenceOptions;
      var usedOptions = referenceOptions;
      if (subObject !== undefined) {
        usedOptions = referenceOptions[subObject];
      }
      Validator$1.parse(options, usedOptions, []);
      return errorFound;
    }

    /**
     * Will traverse an object recursively and check every value
     *
     * @param {object} options
     * @param {object} referenceOptions
     * @param {Array} path    | where to look for the actual option
     * @static
     */
  }, {
    key: "parse",
    value: function parse(options, referenceOptions, path) {
      for (var _option3 in options) {
        if (Object.prototype.hasOwnProperty.call(options, _option3)) {
          Validator$1.check(_option3, options, referenceOptions, path);
        }
      }
    }

    /**
     * Check every value. If the value is an object, call the parse function on that object.
     *
     * @param {string} option
     * @param {object} options
     * @param {object} referenceOptions
     * @param {Array} path    | where to look for the actual option
     * @static
     */
  }, {
    key: "check",
    value: function check(option, options, referenceOptions, path) {
      if (referenceOptions[option] === undefined && referenceOptions.__any__ === undefined) {
        Validator$1.getSuggestion(option, referenceOptions, path);
        return;
      }
      var referenceOption = option;
      var is_object = true;
      if (referenceOptions[option] === undefined && referenceOptions.__any__ !== undefined) {
        // NOTE: This only triggers if the __any__ is in the top level of the options object.
        //       THAT'S A REALLY BAD PLACE TO ALLOW IT!!!!
        // TODO: Examine if needed, remove if possible

        // __any__ is a wildcard. Any value is accepted and will be further analysed by reference.
        referenceOption = "__any__";

        // if the any-subgroup is not a predefined object in the configurator,
        // we do not look deeper into the object.
        is_object = Validator$1.getType(options[option]) === "object";
      }
      var refOptionObj = referenceOptions[referenceOption];
      if (is_object && refOptionObj.__type__ !== undefined) {
        refOptionObj = refOptionObj.__type__;
      }
      Validator$1.checkFields(option, options, referenceOptions, referenceOption, refOptionObj, path);
    }

    /**
     *
     * @param {string}  option           | the option property
     * @param {object}  options          | The supplied options object
     * @param {object}  referenceOptions | The reference options containing all options and their allowed formats
     * @param {string}  referenceOption  | Usually this is the same as option, except when handling an __any__ tag.
     * @param {string}  refOptionObj     | This is the type object from the reference options
     * @param {Array}   path             | where in the object is the option
     * @static
     */
  }, {
    key: "checkFields",
    value: function checkFields(option, options, referenceOptions, referenceOption, refOptionObj, path) {
      var log = function log(message) {
        console.error("%c" + message + Validator$1.printLocation(path, option), VALIDATOR_PRINT_STYLE$1);
      };
      var optionType = Validator$1.getType(options[option]);
      var refOptionType = refOptionObj[optionType];
      if (refOptionType !== undefined) {
        // if the type is correct, we check if it is supposed to be one of a few select values
        if (Validator$1.getType(refOptionType) === "array" && _indexOfInstanceProperty(refOptionType).call(refOptionType, options[option]) === -1) {
          log('Invalid option detected in "' + option + '".' + " Allowed values are:" + Validator$1.print(refOptionType) + ' not "' + options[option] + '". ');
          errorFound = true;
        } else if (optionType === "object" && referenceOption !== "__any__") {
          path = copyAndExtendArray(path, option);
          Validator$1.parse(options[option], referenceOptions[referenceOption], path);
        }
      } else if (refOptionObj["any"] === undefined) {
        // type of the field is incorrect and the field cannot be any
        log('Invalid type received for "' + option + '". Expected: ' + Validator$1.print(_Object$keys(refOptionObj)) + ". Received [" + optionType + '] "' + options[option] + '"');
        errorFound = true;
      }
    }

    /**
     *
     * @param {object | boolean | number | string | Array.<number> | Date | Node | Moment | undefined | null} object
     * @returns {string}
     * @static
     */
  }, {
    key: "getType",
    value: function getType(object) {
      var type = _typeof$1(object);
      if (type === "object") {
        if (object === null) {
          return "null";
        }
        if (object instanceof Boolean) {
          return "boolean";
        }
        if (object instanceof Number) {
          return "number";
        }
        if (object instanceof String) {
          return "string";
        }
        if (_Array$isArray$1(object)) {
          return "array";
        }
        if (object instanceof Date) {
          return "date";
        }
        if (object.nodeType !== undefined) {
          return "dom";
        }
        if (object._isAMomentObject === true) {
          return "moment";
        }
        return "object";
      } else if (type === "number") {
        return "number";
      } else if (type === "boolean") {
        return "boolean";
      } else if (type === "string") {
        return "string";
      } else if (type === undefined) {
        return "undefined";
      }
      return type;
    }

    /**
     * @param {string} option
     * @param {object} options
     * @param {Array.<string>} path
     * @static
     */
  }, {
    key: "getSuggestion",
    value: function getSuggestion(option, options, path) {
      var localSearch = Validator$1.findInOptions(option, options, path, false);
      var globalSearch = Validator$1.findInOptions(option, allOptions$1, [], true);
      var localSearchThreshold = 8;
      var globalSearchThreshold = 4;
      var msg;
      if (localSearch.indexMatch !== undefined) {
        msg = " in " + Validator$1.printLocation(localSearch.path, option, "") + 'Perhaps it was incomplete? Did you mean: "' + localSearch.indexMatch + '"?\n\n';
      } else if (globalSearch.distance <= globalSearchThreshold && localSearch.distance > globalSearch.distance) {
        msg = " in " + Validator$1.printLocation(localSearch.path, option, "") + "Perhaps it was misplaced? Matching option found at: " + Validator$1.printLocation(globalSearch.path, globalSearch.closestMatch, "");
      } else if (localSearch.distance <= localSearchThreshold) {
        msg = '. Did you mean "' + localSearch.closestMatch + '"?' + Validator$1.printLocation(localSearch.path, option);
      } else {
        msg = ". Did you mean one of these: " + Validator$1.print(_Object$keys(options)) + Validator$1.printLocation(path, option);
      }
      console.error('%cUnknown option detected: "' + option + '"' + msg, VALIDATOR_PRINT_STYLE$1);
      errorFound = true;
    }

    /**
     * traverse the options in search for a match.
     *
     * @param {string} option
     * @param {object} options
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
      var closestMatch = "";
      var closestMatchPath = [];
      var lowerCaseOption = option.toLowerCase();
      var indexMatch = undefined;
      for (var op in options) {
        var distance = void 0;
        if (options[op].__type__ !== undefined && recursive === true) {
          var result = Validator$1.findInOptions(option, options[op], copyAndExtendArray(path, op));
          if (min > result.distance) {
            closestMatch = result.closestMatch;
            closestMatchPath = result.path;
            min = result.distance;
            indexMatch = result.indexMatch;
          }
        } else {
          var _context20;
          if (_indexOfInstanceProperty(_context20 = op.toLowerCase()).call(_context20, lowerCaseOption) !== -1) {
            indexMatch = op;
          }
          distance = Validator$1.levenshteinDistance(option, op);
          if (min > distance) {
            closestMatch = op;
            closestMatchPath = copyArray(path);
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
     * @param {object} option
     * @param {string} prefix
     * @returns {string}
     * @static
     */
  }, {
    key: "printLocation",
    value: function printLocation(path, option) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Problem value found at: \n";
      var str = "\n\n" + prefix + "options = {\n";
      for (var i = 0; i < path.length; i++) {
        for (var j = 0; j < i + 1; j++) {
          str += "  ";
        }
        str += path[i] + ": {\n";
      }
      for (var _j = 0; _j < path.length + 1; _j++) {
        str += "  ";
      }
      str += option + "\n";
      for (var _i3 = 0; _i3 < path.length + 1; _i3++) {
        for (var _j2 = 0; _j2 < path.length - _i3; _j2++) {
          str += "  ";
        }
        str += "}\n";
      }
      return str + "\n\n";
    }

    /**
     * @param {object} options
     * @returns {string}
     * @static
     */
  }, {
    key: "print",
    value: function print(options) {
      return _JSON$stringify(options).replace(/(")|(\[)|(\])|(,"__type__")/g, "").replace(/(,)/g, ", ");
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
      var matrix = [];

      // increment along the first column of each row
      var i;
      for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
      }

      // increment each column in the first row
      var j;
      for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
      }

      // Fill in the rest of the matrix
      for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) == a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1,
            // substitution
            Math.min(matrix[i][j - 1] + 1,
            // insertion
            matrix[i - 1][j] + 1)); // deletion
          }
        }
      }

      return matrix[b.length][a.length];
    }
  }]);
  return Validator$1;
}();
var VALIDATOR_PRINT_STYLE = VALIDATOR_PRINT_STYLE$1;
var Validator = Validator$1;

/**
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
 *
 * @param {Point3d} a
 * @param {Point3d} b
 * @returns {Point3d} a-b
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
 *
 * @param {Point3d} a
 * @param {Point3d} b
 * @returns {Point3d} a+b
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
 *
 * @param {Point3d} a
 * @param {Point3d} b
 * @returns {Point3d} The average, (a+b)/2
 */
Point3d.avg = function (a, b) {
  return new Point3d((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
};

/**
 * Scale the provided point by a scalar, returns p*c
 *
 * @param {Point3d} p
 * @param {number} c
 * @returns {Point3d} p*c
 */
Point3d.scalarProduct = function (p, c) {
  return new Point3d(p.x * c, p.y * c, p.z * c);
};

/**
 * Calculate the dot product of the two provided points, returns a.b
 * Documentation: http://en.wikipedia.org/wiki/Dot_product
 *
 * @param {Point3d} a
 * @param {Point3d} b
 * @returns {Point3d} dot product a.b
 */
Point3d.dotProduct = function (a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
};

/**
 * Calculate the cross product of the two provided points, returns axb
 * Documentation: http://en.wikipedia.org/wiki/Cross_product
 *
 * @param {Point3d} a
 * @param {Point3d} b
 * @returns {Point3d} cross product axb
 */
Point3d.crossProduct = function (a, b) {
  var crossproduct = new Point3d();
  crossproduct.x = a.y * b.z - a.z * b.y;
  crossproduct.y = a.z * b.x - a.x * b.z;
  crossproduct.z = a.x * b.y - a.y * b.x;
  return crossproduct;
};

/**
 * Retrieve the length of the vector (or the distance from this point to the origin
 *
 * @returns {number}  length
 */
Point3d.prototype.length = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
};

/**
 * Return a normalized vector pointing in the same direction.
 *
 * @returns {Point3d}  normalized
 */
Point3d.prototype.normalize = function () {
  return Point3d.scalarProduct(this, 1 / this.length());
};
var Point3d_1 = Point3d;
var Point3d$1 = /*@__PURE__*/getDefaultExportFromCjs(Point3d_1);

/**
 * @param {number} [x]
 * @param {number} [y]
 */
function Point2d(x, y) {
  this.x = x !== undefined ? x : 0;
  this.y = y !== undefined ? y : 0;
}
var Point2d_1 = Point2d;
var Point2d$1 = /*@__PURE__*/getDefaultExportFromCjs(Point2d_1);

/**
 * An html slider control with start/stop/prev/next buttons
 *
 * @function Object() { [native code] } Slider
 * @param {Element} container  The element where the slider will be created
 * @param {object} options   Available options:
 *                 {boolean} visible   If true (default) the
 *                           slider is visible.
 */
function Slider(container, options) {
  if (container === undefined) {
    throw new Error("No container element defined");
  }
  this.container = container;
  this.visible = options && options.visible != undefined ? options.visible : true;
  if (this.visible) {
    this.frame = document.createElement("DIV");
    //this.frame.style.backgroundColor = '#E5E5E5';
    this.frame.style.width = "100%";
    this.frame.style.position = "relative";
    this.container.appendChild(this.frame);
    this.frame.prev = document.createElement("INPUT");
    this.frame.prev.type = "BUTTON";
    this.frame.prev.value = "Prev";
    this.frame.appendChild(this.frame.prev);
    this.frame.play = document.createElement("INPUT");
    this.frame.play.type = "BUTTON";
    this.frame.play.value = "Play";
    this.frame.appendChild(this.frame.play);
    this.frame.next = document.createElement("INPUT");
    this.frame.next.type = "BUTTON";
    this.frame.next.value = "Next";
    this.frame.appendChild(this.frame.next);
    this.frame.bar = document.createElement("INPUT");
    this.frame.bar.type = "BUTTON";
    this.frame.bar.style.position = "absolute";
    this.frame.bar.style.border = "1px solid red";
    this.frame.bar.style.width = "100px";
    this.frame.bar.style.height = "6px";
    this.frame.bar.style.borderRadius = "2px";
    this.frame.bar.style.MozBorderRadius = "2px";
    this.frame.bar.style.border = "1px solid #7F7F7F";
    this.frame.bar.style.backgroundColor = "#E5E5E5";
    this.frame.appendChild(this.frame.bar);
    this.frame.slide = document.createElement("INPUT");
    this.frame.slide.type = "BUTTON";
    this.frame.slide.style.margin = "0px";
    this.frame.slide.value = " ";
    this.frame.slide.style.position = "relative";
    this.frame.slide.style.left = "-100px";
    this.frame.appendChild(this.frame.slide);

    // create events
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
  if (index < _valuesInstanceProperty(this).length - 1) {
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
  if (index < _valuesInstanceProperty(this).length - 1) {
    index++;
    this.setIndex(index);
  } else if (this.playLoop) {
    // jump to the start
    index = 0;
    this.setIndex(index);
  }
  var end = new Date();
  var diff = end - start;

  // calculate how much time it to to set the index and to execute the callback
  // function.
  var interval = Math.max(this.playInterval - diff, 0);
  // document.title = diff // TODO: cleanup

  var me = this;
  this.playTimeout = _setTimeout(function () {
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
    this.frame.play.value = "Stop";
  }
};

/**
 * Stop playing
 */
Slider.prototype.stop = function () {
  clearInterval(this.playTimeout);
  this.playTimeout = undefined;
  if (this.frame) {
    this.frame.play.value = "Play";
  }
};

/**
 * Set a callback function which will be triggered when the value of the
 * slider bar has changed.
 *
 * @param {Function} callback
 */
Slider.prototype.setOnChangeCallback = function (callback) {
  this.onChangeCallback = callback;
};

/**
 * Set the interval for playing the list
 *
 * @param {number} interval   The interval in milliseconds
 */
Slider.prototype.setPlayInterval = function (interval) {
  this.playInterval = interval;
};

/**
 * Retrieve the current play interval
 *
 * @returns {number} interval   The interval in milliseconds
 */
Slider.prototype.getPlayInterval = function () {
  return this.playInterval;
};

/**
 * Set looping on or off
 *
 * @param {boolean} doLoop  If true, the slider will jump to the start when
 *               the end is passed, and will jump to the end
 *               when the start is passed.
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
    this.frame.bar.style.top = this.frame.clientHeight / 2 - this.frame.bar.offsetHeight / 2 + "px";
    this.frame.bar.style.width = this.frame.clientWidth - this.frame.prev.clientWidth - this.frame.play.clientWidth - this.frame.next.clientWidth - 30 + "px";

    // position the slider button
    var left = this.indexToLeft(this.index);
    this.frame.slide.style.left = left + "px";
  }
};

/**
 * Set the list with values for the slider
 *
 * @param {Array} values   A javascript array with values (any type)
 */
Slider.prototype.setValues = function (values) {
  this.values = values;
  if (_valuesInstanceProperty(this).length > 0) this.setIndex(0);else this.index = undefined;
};

/**
 * Select a value by its index
 *
 * @param {number} index
 */
Slider.prototype.setIndex = function (index) {
  if (index < _valuesInstanceProperty(this).length) {
    this.index = index;
    this.redraw();
    this.onChange();
  } else {
    throw new Error("Index out of range");
  }
};

/**
 * retrieve the index of the currently selected vaue
 *
 * @returns {number} index
 */
Slider.prototype.getIndex = function () {
  return this.index;
};

/**
 * retrieve the currently selected value
 *
 * @returns {*} value
 */
Slider.prototype.get = function () {
  return _valuesInstanceProperty(this)[this.index];
};
Slider.prototype._onMouseDown = function (event) {
  // only react on left mouse button down
  var leftButtonDown = event.which ? event.which === 1 : event.button === 1;
  if (!leftButtonDown) return;
  this.startClientX = event.clientX;
  this.startSlideX = _parseFloat$1(this.frame.slide.style.left);
  this.frame.style.cursor = "move";

  // add event listeners to handle moving the contents
  // we store the function onmousemove and onmouseup in the graph, so we can
  // remove the eventlisteners lateron in the function mouseUp()
  var me = this;
  this.onmousemove = function (event) {
    me._onMouseMove(event);
  };
  this.onmouseup = function (event) {
    me._onMouseUp(event);
  };
  addEventListener(document, "mousemove", this.onmousemove);
  addEventListener(document, "mouseup", this.onmouseup);
  preventDefault(event);
};
Slider.prototype.leftToIndex = function (left) {
  var width = _parseFloat$1(this.frame.bar.style.width) - this.frame.slide.clientWidth - 10;
  var x = left - 3;
  var index = Math.round(x / width * (_valuesInstanceProperty(this).length - 1));
  if (index < 0) index = 0;
  if (index > _valuesInstanceProperty(this).length - 1) index = _valuesInstanceProperty(this).length - 1;
  return index;
};
Slider.prototype.indexToLeft = function (index) {
  var width = _parseFloat$1(this.frame.bar.style.width) - this.frame.slide.clientWidth - 10;
  var x = index / (_valuesInstanceProperty(this).length - 1) * width;
  var left = x + 3;
  return left;
};
Slider.prototype._onMouseMove = function (event) {
  var diff = event.clientX - this.startClientX;
  var x = this.startSlideX + diff;
  var index = this.leftToIndex(x);
  this.setIndex(index);
  preventDefault();
};
Slider.prototype._onMouseUp = function () {
  this.frame.style.cursor = "auto";

  // remove event listeners
  removeEventListener(document, "mousemove", this.onmousemove);
  removeEventListener(document, "mouseup", this.onmouseup);
  preventDefault();
};

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
  return !isNaN(_parseFloat$1(n)) && isFinite(n);
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
    throw new Error("Parameter 'start' is not numeric; value: " + start);
  }
  if (!this.isNumeric(end)) {
    throw new Error("Parameter 'end' is not numeric; value: " + start);
  }
  if (!this.isNumeric(step)) {
    throw new Error("Parameter 'step' is not numeric; value: " + start);
  }
  this._start = start ? start : 0;
  this._end = end ? end : 0;
  this.setStep(step, prettyStep);
};

/**
 * Set a new step size
 *
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
 *
 * @param {number}  step  Desired step size
 * @returns {number}     Nice step size
 */
StepNumber.calculatePrettyStep = function (step) {
  var log10 = function log10(x) {
    return Math.log(x) / Math.LN10;
  };

  // try three steps (multiple of 1, 2, or 5
  var step1 = Math.pow(10, Math.round(log10(step))),
    step2 = 2 * Math.pow(10, Math.round(log10(step / 2))),
    step5 = 5 * Math.pow(10, Math.round(log10(step / 5)));

  // choose the best step (closest to minimum step)
  var prettyStep = step1;
  if (Math.abs(step2 - step) <= Math.abs(prettyStep - step)) prettyStep = step2;
  if (Math.abs(step5 - step) <= Math.abs(prettyStep - step)) prettyStep = step5;

  // for safety
  if (prettyStep <= 0) {
    prettyStep = 1;
  }
  return prettyStep;
};

/**
 * returns the current value of the step
 *
 * @returns {number} current value
 */
StepNumber.prototype.getCurrent = function () {
  return _parseFloat$1(this._current.toPrecision(this.precision));
};

/**
 * returns the current step size
 *
 * @returns {number} current step size
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
 *
 * @returns {boolean}  True if the current value has passed the end value.
 */
StepNumber.prototype.end = function () {
  return this._current > this._end;
};
var StepNumber_1 = StepNumber;
var StepNumber$1 = /*@__PURE__*/getDefaultExportFromCjs(StepNumber_1);

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
var mathSign = Math.sign || function sign(x) {
  var n = +x;
  // eslint-disable-next-line no-self-compare -- NaN check
  return n == 0 || n != n ? n : n < 0 ? -1 : 1;
};

var $$i = _export;
var sign$3 = mathSign;

// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
$$i({ target: 'Math', stat: true }, {
  sign: sign$3
});

var path$5 = path$s;

var sign$2 = path$5.Math.sign;

var parent$r = sign$2;

var sign$1 = parent$r;

var sign = sign$1;

var _Math$sign = /*@__PURE__*/getDefaultExportFromCjs(sign);

/**
 * The camera is mounted on a (virtual) camera arm. The camera arm can rotate
 * The camera is always looking in the direction of the origin of the arm.
 * This way, the camera always rotates around one fixed point, the location
 * of the camera arm.
 *
 * Documentation:
 *   http://en.wikipedia.org/wiki/3D_projection
 *
 * @class Camera
 */
function Camera() {
  this.armLocation = new Point3d$1();
  this.armRotation = {};
  this.armRotation.horizontal = 0;
  this.armRotation.vertical = 0;
  this.armLength = 1.7;
  this.cameraOffset = new Point3d$1();
  this.offsetMultiplier = 0.6;
  this.cameraLocation = new Point3d$1();
  this.cameraRotation = new Point3d$1(0.5 * Math.PI, 0, 0);
  this.calculateCameraOrientation();
}

/**
 * Set offset camera in camera coordinates
 *
 * @param {number} x offset by camera horisontal
 * @param {number} y offset by camera vertical
 */
Camera.prototype.setOffset = function (x, y) {
  var abs = Math.abs,
    sign = _Math$sign,
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
 *
 * @returns {number}
 */
Camera.prototype.getOffset = function () {
  return this.cameraOffset;
};

/**
 * Set the location (origin) of the arm
 *
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
 *
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
 *
 * @returns {object}   An object with parameters horizontal and vertical
 */
Camera.prototype.getArmRotation = function () {
  var rot = {};
  rot.horizontal = this.armRotation.horizontal;
  rot.vertical = this.armRotation.vertical;
  return rot;
};

/**
 * Set the (normalized) length of the camera arm.
 *
 * @param {number} length A length between 0.71 and 5.0
 */
Camera.prototype.setArmLength = function (length) {
  if (length === undefined) return;
  this.armLength = length;

  // Radius must be larger than the corner of the graph,
  // which has a distance of sqrt(0.5^2+0.5^2) = 0.71 from the center of the
  // graph
  if (this.armLength < 0.71) this.armLength = 0.71;
  if (this.armLength > 5.0) this.armLength = 5.0;
  this.setOffset(this.cameraOffset.x, this.cameraOffset.y);
  this.calculateCameraOrientation();
};

/**
 * Retrieve the arm length
 *
 * @returns {number} length
 */
Camera.prototype.getArmLength = function () {
  return this.armLength;
};

/**
 * Retrieve the camera location
 *
 * @returns {Point3d} cameraLocation
 */
Camera.prototype.getCameraLocation = function () {
  return this.cameraLocation;
};

/**
 * Retrieve the camera rotation
 *
 * @returns {Point3d} cameraRotation
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
  this.cameraLocation.z = this.armLocation.z + this.armLength * Math.sin(this.armRotation.vertical);

  // calculate rotation of the camera
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
};

// The string representations of the styles
var STYLENAME = {
  dot: STYLE.DOT,
  "dot-line": STYLE.DOTLINE,
  "dot-color": STYLE.DOTCOLOR,
  "dot-size": STYLE.DOTSIZE,
  line: STYLE.LINE,
  grid: STYLE.GRID,
  surface: STYLE.SURFACE,
  bar: STYLE.BAR,
  "bar-color": STYLE.BARCOLOR,
  "bar-size": STYLE.BARSIZE
};

/**
 * Field names in the options hash which are of relevance to the user.
 *
 * Specifically, these are the fields which require no special handling,
 * and can be directly copied over.
 */
var OPTIONKEYS = ["width", "height", "filterLabel", "legendLabel", "xLabel", "yLabel", "zLabel", "xValueLabel", "yValueLabel", "zValueLabel", "showXAxis", "showYAxis", "showZAxis", "showGrayBottom", "showGrid", "showPerspective", "showShadow", "showSurfaceGrid", "keepAspectRatio", "rotateAxisLabels", "verticalRatio", "dotSizeRatio", "dotSizeMinFraction", "dotSizeMaxFraction", "showAnimationControls", "animationInterval", "animationPreload", "animationAutoStart", "axisColor", "axisFontSize", "axisFontType", "gridColor", "xCenter", "yCenter", "zoomable", "tooltipDelay", "ctrlToZoom"];

/**
 * Field names in the options hash which are of relevance to the user.
 *
 * Same as OPTIONKEYS, but internally these fields are stored with
 * prefix 'default' in the name.
 */
var PREFIXEDOPTIONKEYS = ["xBarWidth", "yBarWidth", "valueMin", "valueMax", "xMin", "xMax", "xStep", "yMin", "yMax", "yStep", "zMin", "zMax", "zStep"];

// Placeholder for DEFAULTS reference
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
    if (Object.prototype.hasOwnProperty.call(obj, prop)) return false;
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
  return str.charAt(0).toUpperCase() + _sliceInstanceProperty(str).call(str, 1);
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
 * @param {Array<string>} fields array with names of fields to copy
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
 * @param {Array<string>} fields array with names of fields to copy
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
 *
 * @param {object} src
 * @param {object} dst
 */
function setDefaults(src, dst) {
  if (src === undefined || isEmpty(src)) {
    throw new Error("No DEFAULTS passed");
  }
  if (dst === undefined) {
    throw new Error("No dst passed");
  }

  // Remember defaults for future reference
  DEFAULTS = src;

  // Handle the defaults which can be simply copied over
  forceCopy(src, dst, OPTIONKEYS);
  forceCopy(src, dst, PREFIXEDOPTIONKEYS, "default");

  // Handle the more complex ('special') fields
  setSpecialSettings(src, dst);

  // Following are internal fields, not part of the user settings
  dst.margin = 10; // px
  dst.showTooltip = false;
  dst.onclick_callback = null;
  dst.eye = new Point3d$1(0, 0, -1); // TODO: set eye.z about 3/4 of the width of the window?
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
    throw new Error("No dst passed");
  }
  if (DEFAULTS === undefined || isEmpty(DEFAULTS)) {
    throw new Error("DEFAULTS not set for module Settings");
  }

  // Handle the parameters which can be simply copied over
  safeCopy(options, dst, OPTIONKEYS);
  safeCopy(options, dst, PREFIXEDOPTIONKEYS, "default");

  // Handle the more complex ('special') fields
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
  if (src.surfaceColors !== undefined) {
    console.warn("`options.surfaceColors` is deprecated and may be removed in a future " + "version. Please use `options.colormap` instead. Note that the `colormap` " + "option uses the inverse array ordering (running from vMin to vMax).");
    if (src.colormap !== undefined) {
      throw new Error("The `colormap` and `surfaceColors` options are mutually exclusive.");
    }
    if (dst.style !== "surface") {
      console.warn("Ignoring `surfaceColors` in graph style `" + dst.style + "` for " + "backward compatibility (only effective in `surface` plots).");
    } else {
      setSurfaceColor(src.surfaceColors, dst);
    }
  } else {
    setColormap(src.colormap, dst);
  }
  setShowLegend(src.showLegend, dst);
  setCameraPosition(src.cameraPosition, dst);

  // As special fields go, this is an easy one; just a translation of the name.
  // Can't use this.tooltip directly, because that field exists internally
  if (src.tooltip !== undefined) {
    dst.showTooltip = src.tooltip;
  }
  if (src.onclick != undefined) {
    dst.onclick_callback = src.onclick;
    console.warn("`options.onclick` is deprecated and may be removed in a future version." + " Please use `Graph3d.on('click', handler)` instead.");
  }
  if (src.tooltipStyle !== undefined) {
    selectiveDeepExtend(["tooltipStyle"], dst, src);
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
 *
 * @param {string} styleName  Style name such as 'dot', 'grid', 'dot-line'
 * @returns {number} styleNumber Enumeration value representing the style, or -1
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
 * @returns {boolean} true if valid, false otherwise
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
 * @param {object} dst
 */
function setStyle(style, dst) {
  if (style === undefined) {
    return; // Nothing to do
  }

  var styleNumber;
  if (typeof style === "string") {
    styleNumber = getStyleNumberByName(style);
    if (styleNumber === -1) {
      throw new Error("Style '" + style + "' is invalid");
    }
  } else {
    // Do a pedantic check on style number value
    if (!checkStyleNumber(style)) {
      throw new Error("Style '" + style + "' is invalid");
    }
    styleNumber = style;
  }
  dst.style = styleNumber;
}

/**
 * Set the background styling for the graph
 *
 * @param {string | {fill: string, stroke: string, strokeWidth: string}} backgroundColor
 * @param {object} dst
 */
function setBackgroundColor(backgroundColor, dst) {
  var fill = "white";
  var stroke = "gray";
  var strokeWidth = 1;
  if (typeof backgroundColor === "string") {
    fill = backgroundColor;
    stroke = "none";
    strokeWidth = 0;
  } else if (_typeof$1(backgroundColor) === "object") {
    if (_fillInstanceProperty(backgroundColor) !== undefined) fill = _fillInstanceProperty(backgroundColor);
    if (backgroundColor.stroke !== undefined) stroke = backgroundColor.stroke;
    if (backgroundColor.strokeWidth !== undefined) strokeWidth = backgroundColor.strokeWidth;
  } else {
    throw new Error("Unsupported type of backgroundColor");
  }
  dst.frame.style.backgroundColor = fill;
  dst.frame.style.borderColor = stroke;
  dst.frame.style.borderWidth = strokeWidth + "px";
  dst.frame.style.borderStyle = "solid";
}

/**
 *
 * @param {string | object} dataColor
 * @param {object} dst
 */
function setDataColor(dataColor, dst) {
  if (dataColor === undefined) {
    return; // Nothing to do
  }

  if (dst.dataColor === undefined) {
    dst.dataColor = {};
  }
  if (typeof dataColor === "string") {
    dst.dataColor.fill = dataColor;
    dst.dataColor.stroke = dataColor;
  } else {
    if (_fillInstanceProperty(dataColor)) {
      dst.dataColor.fill = _fillInstanceProperty(dataColor);
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
 * @param {object | Array<string>} surfaceColors Either an object that describes the HUE, or an array of HTML hex color codes
 * @param {object} dst
 */
function setSurfaceColor(surfaceColors, dst) {
  if (surfaceColors === undefined || surfaceColors === true) {
    return; // Nothing to do
  }

  if (surfaceColors === false) {
    dst.surfaceColors = undefined;
    return;
  }
  if (dst.surfaceColors === undefined) {
    dst.surfaceColors = {};
  }
  var rgbColors;
  if (_Array$isArray$1(surfaceColors)) {
    rgbColors = parseColorArray(surfaceColors);
  } else if (_typeof$1(surfaceColors) === "object") {
    rgbColors = parseColorObject(surfaceColors.hue);
  } else {
    throw new Error("Unsupported type of surfaceColors");
  }
  // for some reason surfaceColors goes from vMax to vMin:
  _reverseInstanceProperty(rgbColors).call(rgbColors);
  dst.colormap = rgbColors;
}

/**
 *
 * @param {object | Array<string>} colormap Either an object that describes the HUE, or an array of HTML hex color codes
 * @param {object} dst
 */
function setColormap(colormap, dst) {
  if (colormap === undefined) {
    return;
  }
  var rgbColors;
  if (_Array$isArray$1(colormap)) {
    rgbColors = parseColorArray(colormap);
  } else if (_typeof$1(colormap) === "object") {
    rgbColors = parseColorObject(colormap.hue);
  } else if (typeof colormap === "function") {
    rgbColors = colormap;
  } else {
    throw new Error("Unsupported type of colormap");
  }
  dst.colormap = rgbColors;
}

/**
 *
 * @param {Array} colormap
 */
function parseColorArray(colormap) {
  if (colormap.length < 2) {
    throw new Error("Colormap array length must be 2 or above.");
  }
  return _mapInstanceProperty(colormap).call(colormap, function (colorCode) {
    if (!isValidHex(colorCode)) {
      throw new Error("Invalid hex color code supplied to colormap.");
    }
    return hexToRGB(colorCode);
  });
}

/**
 * Converts an object to a certain amount of hex color stops. At which point:
 * the HTML hex color codes is converted into an RGB color object.
 *
 * @param {object} hues
 */
function parseColorObject(hues) {
  if (hues === undefined) {
    throw new Error("Unsupported type of colormap");
  }
  if (!(hues.saturation >= 0 && hues.saturation <= 100)) {
    throw new Error("Saturation is out of bounds. Expected range is 0-100.");
  }
  if (!(hues.brightness >= 0 && hues.brightness <= 100)) {
    throw new Error("Brightness is out of bounds. Expected range is 0-100.");
  }
  if (!(hues.colorStops >= 2)) {
    throw new Error("colorStops is out of bounds. Expected 2 or above.");
  }
  var hueStep = (hues.end - hues.start) / (hues.colorStops - 1);
  var rgbColors = [];
  for (var i = 0; i < hues.colorStops; ++i) {
    var hue = (hues.start + hueStep * i) % 360 / 360;
    rgbColors.push(HSVToRGB(hue < 0 ? hue + 1 : hue, hues.saturation / 100, hues.brightness / 100));
  }
  return rgbColors;
}

/**
 *
 * @param {object} cameraPosition
 * @param {object} dst
 */
function setCameraPosition(cameraPosition, dst) {
  var camPos = cameraPosition;
  if (camPos === undefined) {
    return;
  }
  if (dst.camera === undefined) {
    dst.camera = new Camera();
  }
  dst.camera.setArmRotation(camPos.horizontal, camPos.vertical);
  dst.camera.setArmLength(camPos.distance);
}

/**
 * This object contains all possible options. It will check if the types are correct, if required if the option is one
 * of the allowed values.
 *
 * __any__ means that the name of the property does not matter.
 * __type__ is a required field for all objects and contains the allowed types of all objects
 */
var string = "string";
var bool = "boolean";
var number = "number";
var object = "object"; // should only be in a __type__ property
var array = "array";
// Following not used here, but useful for reference
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
    undefined: "undefined"
  }
};
var surfaceColorsOptions = {
  hue: {
    start: {
      number: number
    },
    end: {
      number: number
    },
    saturation: {
      number: number
    },
    brightness: {
      number: number
    },
    colorStops: {
      number: number
    },
    __type__: {
      object: object
    }
  },
  __type__: {
    boolean: bool,
    array: array,
    object: object,
    undefined: "undefined"
  }
};
var colormapOptions = {
  hue: {
    start: {
      number: number
    },
    end: {
      number: number
    },
    saturation: {
      number: number
    },
    brightness: {
      number: number
    },
    colorStops: {
      number: number
    },
    __type__: {
      object: object
    }
  },
  __type__: {
    array: array,
    object: object,
    function: "function",
    undefined: "undefined"
  }
};

/**
 * Order attempted to be alphabetical.
 *   - x/y/z-prefixes ignored in sorting
 *   - __type__ always at end
 *   - globals at end
 */
var allOptions = {
  animationAutoStart: {
    boolean: bool,
    undefined: "undefined"
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
  axisFontSize: {
    number: number
  },
  axisFontType: {
    string: string
  },
  backgroundColor: colorOptions,
  xBarWidth: {
    number: number,
    undefined: "undefined"
  },
  yBarWidth: {
    number: number,
    undefined: "undefined"
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
  colormap: colormapOptions,
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
    function: "function"
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
    undefined: "undefined"
  },
  yMin: {
    number: number,
    undefined: "undefined"
  },
  zMin: {
    number: number,
    undefined: "undefined"
  },
  xMax: {
    number: number,
    undefined: "undefined"
  },
  yMax: {
    number: number,
    undefined: "undefined"
  },
  zMax: {
    number: number,
    undefined: "undefined"
  },
  showAnimationControls: {
    boolean: bool,
    undefined: "undefined"
  },
  showGrayBottom: {
    boolean: bool
  },
  showGrid: {
    boolean: bool
  },
  showLegend: {
    boolean: bool,
    undefined: "undefined"
  },
  showPerspective: {
    boolean: bool
  },
  showShadow: {
    boolean: bool
  },
  showSurfaceGrid: {
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
  rotateAxisLabels: {
    boolean: bool
  },
  surfaceColors: surfaceColorsOptions,
  xStep: {
    number: number,
    undefined: "undefined"
  },
  yStep: {
    number: number,
    undefined: "undefined"
  },
  zStep: {
    number: number,
    undefined: "undefined"
  },
  style: {
    number: number,
    // TODO: either Graph3d.DEFAULT has string, or number allowed in documentation
    string: ["bar", "bar-color", "bar-size", "dot", "dot-line", "dot-color", "dot-size", "line", "grid", "surface"]
  },
  tooltip: {
    boolean: bool,
    function: "function"
  },
  tooltipDelay: {
    number: number
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
    function: "function"
  },
  yValueLabel: {
    function: "function"
  },
  zValueLabel: {
    function: "function"
  },
  valueMax: {
    number: number,
    undefined: "undefined"
  },
  valueMin: {
    number: number,
    undefined: "undefined"
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

var parent$q = create$8;

var create$6 = parent$q;

var parent$p = create$6;

var create$5 = parent$p;

var create$4 = create$5;

var create$3 = create$4;

var _Object$create = /*@__PURE__*/getDefaultExportFromCjs(create$3);

var $$h = _export;
var setPrototypeOf$7 = objectSetPrototypeOf;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$$h({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf$7
});

var path$4 = path$s;

var setPrototypeOf$6 = path$4.Object.setPrototypeOf;

var parent$o = setPrototypeOf$6;

var setPrototypeOf$5 = parent$o;

var parent$n = setPrototypeOf$5;

var setPrototypeOf$4 = parent$n;

var parent$m = setPrototypeOf$4;

var setPrototypeOf$3 = parent$m;

var setPrototypeOf$2 = setPrototypeOf$3;

var setPrototypeOf$1 = setPrototypeOf$2;

var _Object$setPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(setPrototypeOf$1);

var parent$l = bind$c;

var bind$a = parent$l;

var parent$k = bind$a;

var bind$9 = parent$k;

var bind$8 = bind$9;

var bind$7 = bind$8;

var _bindInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(bind$7);

function _setPrototypeOf(o, p) {
  var _context;
  _setPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$setPrototypeOf).call(_context) : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  _Object$defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}

var parent$j = getPrototypeOf$6;

var getPrototypeOf$4 = parent$j;

var parent$i = getPrototypeOf$4;

var getPrototypeOf$3 = parent$i;

var getPrototypeOf$2 = getPrototypeOf$3;

var getPrototypeOf$1 = getPrototypeOf$2;

var _Object$getPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(getPrototypeOf$1);

function _getPrototypeOf(o) {
  var _context;
  _getPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$getPrototypeOf).call(_context) : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var regeneratorRuntime$1 = {exports: {}};

var _typeof = {exports: {}};

(function (module) {
	var _Symbol = symbol$1;
	var _Symbol$iterator = iterator$1;
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return (module.exports = _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	}
	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports; 
} (_typeof));

var _typeofExports = _typeof.exports;

var parent$h = forEach$6;

var forEach$4 = parent$h;

var parent$g = forEach$4;

var forEach$3 = parent$g;

var forEach$2 = forEach$3;

var forEach$1 = forEach$2;

var hasOwn$4 = hasOwnProperty_1;
var ownKeys$1 = ownKeys$7;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys$1(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var isObject$6 = isObject$i;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
var installErrorCause$1 = function (O, options) {
  if (isObject$6(options) && 'cause' in options) {
    createNonEnumerableProperty$3(O, 'cause', options.cause);
  }
};

var uncurryThis$1 = functionUncurryThis;

var $Error$1 = Error;
var replace = uncurryThis$1(''.replace);

var TEST = (function (arg) { return String($Error$1(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

var errorStackClear = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};

var fails$7 = fails$w;
var createPropertyDescriptor$1 = createPropertyDescriptor$7;

var errorStackInstallable = !fails$7(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor$1(1, 7));
  return error.stack !== 7;
});

var createNonEnumerableProperty$2 = createNonEnumerableProperty$9;
var clearErrorStack = errorStackClear;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;

// non-standard V8
var captureStackTrace = Error.captureStackTrace;

var errorStackInstall = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty$2(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};

var bind$6 = functionBindContext;
var call$6 = functionCall;
var anObject$3 = anObject$d;
var tryToString$1 = tryToString$6;
var isArrayIteratorMethod = isArrayIteratorMethod$2;
var lengthOfArrayLike$3 = lengthOfArrayLike$d;
var isPrototypeOf$7 = objectIsPrototypeOf;
var getIterator$6 = getIterator$8;
var getIteratorMethod = getIteratorMethod$9;
var iteratorClose = iteratorClose$2;

var $TypeError$4 = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$7 = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$6(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$3(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError$4(tryToString$1(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$3(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$7(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator$6(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$6(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$7(ResultPrototype, result)) return result;
  } return new Result(false);
};

var toString = toString$b;

var normalizeStringArgument$1 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};

var $$g = _export;
var isPrototypeOf$6 = objectIsPrototypeOf;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var copyConstructorProperties = copyConstructorProperties$1;
var create$2 = objectCreate;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$9;
var createPropertyDescriptor = createPropertyDescriptor$7;
var installErrorCause = installErrorCause$1;
var installErrorStack = errorStackInstall;
var iterate$6 = iterate$7;
var normalizeStringArgument = normalizeStringArgument$1;
var wellKnownSymbol$3 = wellKnownSymbol$o;

var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
var $Error = Error;
var push$1 = [].push;

var $AggregateError = function AggregateError(errors, message /* , options */) {
  var isInstance = isPrototypeOf$6(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf) {
    that = setPrototypeOf($Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create$2(AggregateErrorPrototype);
    createNonEnumerableProperty$1(that, TO_STRING_TAG, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty$1(that, 'message', normalizeStringArgument(message));
  installErrorStack(that, $AggregateError, that.stack, 1);
  if (arguments.length > 2) installErrorCause(that, arguments[2]);
  var errorsArray = [];
  iterate$6(errors, push$1, { that: errorsArray });
  createNonEnumerableProperty$1(that, 'errors', errorsArray);
  return that;
};

if (setPrototypeOf) setPrototypeOf($AggregateError, $Error);
else copyConstructorProperties($AggregateError, $Error, { name: true });

var AggregateErrorPrototype = $AggregateError.prototype = create$2($Error.prototype, {
  constructor: createPropertyDescriptor(1, $AggregateError),
  message: createPropertyDescriptor(1, ''),
  name: createPropertyDescriptor(1, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$$g({ global: true, constructor: true, arity: 2 }, {
  AggregateError: $AggregateError
});

var classof$3 = classofRaw$2;

var engineIsNode = typeof process != 'undefined' && classof$3(process) == 'process';

var getBuiltIn$4 = getBuiltIn$f;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
var wellKnownSymbol$2 = wellKnownSymbol$o;
var DESCRIPTORS$2 = descriptors;

var SPECIES$2 = wellKnownSymbol$2('species');

var setSpecies$2 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$4(CONSTRUCTOR_NAME);

  if (DESCRIPTORS$2 && Constructor && !Constructor[SPECIES$2]) {
    defineBuiltInAccessor$1(Constructor, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var isPrototypeOf$5 = objectIsPrototypeOf;

var $TypeError$3 = TypeError;

var anInstance$3 = function (it, Prototype) {
  if (isPrototypeOf$5(Prototype, it)) return it;
  throw $TypeError$3('Incorrect invocation');
};

var isConstructor = isConstructor$4;
var tryToString = tryToString$6;

var $TypeError$2 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$2 = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError$2(tryToString(argument) + ' is not a constructor');
};

var anObject$2 = anObject$d;
var aConstructor$1 = aConstructor$2;
var isNullOrUndefined$1 = isNullOrUndefined$5;
var wellKnownSymbol$1 = wellKnownSymbol$o;

var SPECIES$1 = wellKnownSymbol$1('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$2 = function (O, defaultConstructor) {
  var C = anObject$2(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$1(S = anObject$2(C)[SPECIES$1]) ? defaultConstructor : aConstructor$1(S);
};

var userAgent$2 = engineUserAgent;

// eslint-disable-next-line redos/no-vulnerable -- safe
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);

var global$6 = global$o;
var apply$1 = functionApply;
var bind$5 = functionBindContext;
var isCallable$4 = isCallable$m;
var hasOwn$3 = hasOwnProperty_1;
var fails$6 = fails$w;
var html = html$2;
var arraySlice = arraySlice$5;
var createElement = documentCreateElement$1;
var validateArgumentsLength = validateArgumentsLength$2;
var IS_IOS$1 = engineIsIos;
var IS_NODE$4 = engineIsNode;

var set$3 = global$6.setImmediate;
var clear = global$6.clearImmediate;
var process$3 = global$6.process;
var Dispatch = global$6.Dispatch;
var Function$1 = global$6.Function;
var MessageChannel = global$6.MessageChannel;
var String$1 = global$6.String;
var counter = 0;
var queue$2 = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;

fails$6(function () {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  $location = global$6.location;
});

var run = function (id) {
  if (hasOwn$3(queue$2, id)) {
    var fn = queue$2[id];
    delete queue$2[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var eventListener = function (event) {
  run(event.data);
};

var globalPostMessageDefer = function (id) {
  // old engines have not location.origin
  global$6.postMessage(String$1(id), $location.protocol + '//' + $location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set$3 || !clear) {
  set$3 = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$4(handler) ? handler : Function$1(handler);
    var args = arraySlice(arguments, 1);
    queue$2[++counter] = function () {
      apply$1(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue$2[id];
  };
  // Node.js 0.8-
  if (IS_NODE$4) {
    defer = function (id) {
      process$3.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = eventListener;
    defer = bind$5(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global$6.addEventListener &&
    isCallable$4(global$6.postMessage) &&
    !global$6.importScripts &&
    $location && $location.protocol !== 'file:' &&
    !fails$6(globalPostMessageDefer)
  ) {
    defer = globalPostMessageDefer;
    global$6.addEventListener('message', eventListener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

var task$1 = {
  set: set$3,
  clear: clear
};

var Queue$3 = function () {
  this.head = null;
  this.tail = null;
};

Queue$3.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    var tail = this.tail;
    if (tail) tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      var next = this.head = entry.next;
      if (next === null) this.tail = null;
      return entry.item;
    }
  }
};

var queue$1 = Queue$3;

var userAgent$1 = engineUserAgent;

var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && typeof Pebble != 'undefined';

var userAgent = engineUserAgent;

var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);

var global$5 = global$o;
var bind$4 = functionBindContext;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var Queue$2 = queue$1;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$3 = engineIsNode;

var MutationObserver = global$5.MutationObserver || global$5.WebKitMutationObserver;
var document$2 = global$5.document;
var process$2 = global$5.process;
var Promise$1 = global$5.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global$5, 'queueMicrotask');
var microtask$1 = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var notify$1, toggle, node, promise$6, then;

// modern engines have queueMicrotask method
if (!microtask$1) {
  var queue = new Queue$2();

  var flush = function () {
    var parent, fn;
    if (IS_NODE$3 && (parent = process$2.domain)) parent.exit();
    while (fn = queue.get()) try {
      fn();
    } catch (error) {
      if (queue.head) notify$1();
      throw error;
    }
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE$3 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify$1 = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise$6 = Promise$1.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise$6.constructor = Promise$1;
    then = bind$4(promise$6.then, promise$6);
    notify$1 = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE$3) {
    notify$1 = function () {
      process$2.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // `webpack` dev server bug on IE global methods - use bind(fn, global)
    macrotask = bind$4(macrotask, global$5);
    notify$1 = function () {
      macrotask(flush);
    };
  }

  microtask$1 = function (fn) {
    if (!queue.head) notify$1();
    queue.add(fn);
  };
}

var microtask_1 = microtask$1;

var hostReportErrors$1 = function (a, b) {
  try {
    // eslint-disable-next-line no-console -- safe
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  } catch (error) { /* empty */ }
};

var perform$6 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var global$4 = global$o;

var promiseNativeConstructor = global$4.Promise;

/* global Deno -- Deno case */

var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var IS_DENO$1 = engineIsDeno;
var IS_NODE$2 = engineIsNode;

var engineIsBrowser = !IS_DENO$1 && !IS_NODE$2
  && typeof window == 'object'
  && typeof document == 'object';

var global$3 = global$o;
var NativePromiseConstructor$5 = promiseNativeConstructor;
var isCallable$3 = isCallable$m;
var isForced = isForced_1;
var inspectSource = inspectSource$2;
var wellKnownSymbol = wellKnownSymbol$o;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var V8_VERSION = engineV8Version;

var NativePromisePrototype$2 = NativePromiseConstructor$5 && NativePromiseConstructor$5.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$3(global$3.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$5 = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$5);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$5);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (!(NativePromisePrototype$2['catch'] && NativePromisePrototype$2['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$5(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING: SUBCLASSING
};

var newPromiseCapability$2 = {};

var aCallable$7 = aCallable$e;

var $TypeError$1 = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$1('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$7(resolve);
  this.reject = aCallable$7(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability$2.f = function (C) {
  return new PromiseCapability(C);
};

var $$f = _export;
var IS_NODE$1 = engineIsNode;
var global$2 = global$o;
var call$5 = functionCall;
var defineBuiltIn$1 = defineBuiltIn$6;
var setToStringTag$1 = setToStringTag$7;
var setSpecies$1 = setSpecies$2;
var aCallable$6 = aCallable$e;
var isCallable$2 = isCallable$m;
var isObject$5 = isObject$i;
var anInstance$2 = anInstance$3;
var speciesConstructor$1 = speciesConstructor$2;
var task = task$1.set;
var microtask = microtask_1;
var hostReportErrors = hostReportErrors$1;
var perform$5 = perform$6;
var Queue$1 = queue$1;
var InternalStateModule$2 = internalState;
var NativePromiseConstructor$4 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$6 = newPromiseCapability$2;

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule$2.getterFor(PROMISE);
var setInternalState$2 = InternalStateModule$2.set;
var NativePromisePrototype$1 = NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
var PromiseConstructor = NativePromiseConstructor$4;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$1 = global$2.TypeError;
var document$1 = global$2.document;
var process$1 = global$2.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$6.f;
var newGenericPromiseCapability = newPromiseCapability$1;

var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$2.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper;

// helpers
var isThenable = function (it) {
  var then;
  return isObject$5(it) && isCallable$2(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError$1('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call$5(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$2.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$2['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call$5(task, global$2, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$5(function () {
        if (IS_NODE$1) {
          process$1.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call$5(task, global$2, function () {
    var promise = state.facade;
    if (IS_NODE$1) {
      process$1.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind$3 = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call$5(then, value,
            bind$3(internalResolve, wrapper, state),
            bind$3(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance$2(this, PromisePrototype);
    aCallable$6(executor);
    call$5(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$3(internalResolve, state), bind$3(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState$2(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue$1(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn$1(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable$2(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable$2(onRejected) && onRejected;
    reaction.domain = IS_NODE$1 ? process$1.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind$3(internalResolve, state);
    this.reject = bind$3(internalReject, state);
  };

  newPromiseCapabilityModule$6.f = newPromiseCapability$1 = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$$f({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
  Promise: PromiseConstructor
});

setToStringTag$1(PromiseConstructor, PROMISE, false, true);
setSpecies$1(PROMISE);

var NativePromiseConstructor$3 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$2;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor$3.all(iterable).then(undefined, function () { /* empty */ });
});

var $$e = _export;
var call$4 = functionCall;
var aCallable$5 = aCallable$e;
var newPromiseCapabilityModule$5 = newPromiseCapability$2;
var perform$4 = perform$6;
var iterate$5 = iterate$7;
var PROMISE_STATICS_INCORRECT_ITERATION$3 = promiseStaticsIncorrectIteration;

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$$e({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$3 }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$5.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$4(function () {
      var $promiseResolve = aCallable$5(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$5(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$4($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$d = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor$2 = promiseNativeConstructor;

NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$$d({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

var $$c = _export;
var call$3 = functionCall;
var aCallable$4 = aCallable$e;
var newPromiseCapabilityModule$4 = newPromiseCapability$2;
var perform$3 = perform$6;
var iterate$4 = iterate$7;
var PROMISE_STATICS_INCORRECT_ITERATION$2 = promiseStaticsIncorrectIteration;

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$$c({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$2 }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$4.f(C);
    var reject = capability.reject;
    var result = perform$3(function () {
      var $promiseResolve = aCallable$4(C.resolve);
      iterate$4(iterable, function (promise) {
        call$3($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$b = _export;
var call$2 = functionCall;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$$b({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule$3.f(this);
    call$2(capability.reject, undefined, r);
    return capability.promise;
  }
});

var anObject$1 = anObject$d;
var isObject$4 = isObject$i;
var newPromiseCapability = newPromiseCapability$2;

var promiseResolve$2 = function (C, x) {
  anObject$1(C);
  if (isObject$4(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var $$a = _export;
var getBuiltIn$3 = getBuiltIn$f;
var IS_PURE = isPure;
var NativePromiseConstructor$1 = promiseNativeConstructor;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve$1 = promiseResolve$2;

var PromiseConstructorWrapper = getBuiltIn$3('Promise');
var CHECK_WRAPPER = !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$$a({ target: 'Promise', stat: true, forced: IS_PURE  }, {
  resolve: function resolve(x) {
    return promiseResolve$1(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor$1 : this, x);
  }
});

var $$9 = _export;
var call$1 = functionCall;
var aCallable$3 = aCallable$e;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$2 = perform$6;
var iterate$3 = iterate$7;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$$9({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$2(function () {
      var promiseResolve = aCallable$3(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$3(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$1(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$8 = _export;
var call = functionCall;
var aCallable$2 = aCallable$e;
var getBuiltIn$2 = getBuiltIn$f;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform$1 = perform$6;
var iterate$2 = iterate$7;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$$8({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn$2('AggregateError');
    var capability = newPromiseCapabilityModule$1.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var promiseResolve = aCallable$2(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate$2(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$7 = _export;
var NativePromiseConstructor = promiseNativeConstructor;
var fails$5 = fails$w;
var getBuiltIn$1 = getBuiltIn$f;
var isCallable$1 = isCallable$m;
var speciesConstructor = speciesConstructor$2;
var promiseResolve = promiseResolve$2;

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromiseConstructor && fails$5(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$$7({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn$1('Promise'));
    var isFunction = isCallable$1(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

var path$3 = path$s;

var promise$5 = path$3.Promise;

var parent$f = promise$5;


var promise$4 = parent$f;

var parent$e = promise$4;

var promise$3 = parent$e;

// TODO: Remove from `core-js@4`
var $$6 = _export;
var newPromiseCapabilityModule = newPromiseCapability$2;
var perform = perform$6;

// `Promise.try` method
// https://github.com/tc39/proposal-promise-try
$$6({ target: 'Promise', stat: true, forced: true }, {
  'try': function (callbackfn) {
    var promiseCapability = newPromiseCapabilityModule.f(this);
    var result = perform(callbackfn);
    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
    return promiseCapability.promise;
  }
});

var parent$d = promise$3;

// TODO: Remove from `core-js@4`




var promise$2 = parent$d;

var promise$1 = promise$2;

var promise = promise$1;

var parent$c = reverse$5;

var reverse$3 = parent$c;

var parent$b = reverse$3;

var reverse$2 = parent$b;

var reverse$1 = reverse$2;

var reverse = reverse$1;

(function (module) {
	var _typeof = _typeofExports["default"];
	var _Object$defineProperty = defineProperty$2;
	var _Symbol = symbol$1;
	var _Object$create = create$3;
	var _Object$getPrototypeOf = getPrototypeOf$1;
	var _forEachInstanceProperty = forEach$1;
	var _Object$setPrototypeOf = setPrototypeOf$1;
	var _Promise = promise;
	var _reverseInstanceProperty = reverse;
	var _sliceInstanceProperty = slice$1;
	function _regeneratorRuntime() {
	  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
	    return exports;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  var exports = {},
	    Op = Object.prototype,
	    hasOwn = Op.hasOwnProperty,
	    defineProperty = _Object$defineProperty || function (obj, key, desc) {
	      obj[key] = desc.value;
	    },
	    $Symbol = "function" == typeof _Symbol ? _Symbol : {},
	    iteratorSymbol = $Symbol.iterator || "@@iterator",
	    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
	    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	  function define(obj, key, value) {
	    return _Object$defineProperty(obj, key, {
	      value: value,
	      enumerable: !0,
	      configurable: !0,
	      writable: !0
	    }), obj[key];
	  }
	  try {
	    define({}, "");
	  } catch (err) {
	    define = function define(obj, key, value) {
	      return obj[key] = value;
	    };
	  }
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
	      generator = _Object$create(protoGenerator.prototype),
	      context = new Context(tryLocsList || []);
	    return defineProperty(generator, "_invoke", {
	      value: makeInvokeMethod(innerFn, self, context)
	    }), generator;
	  }
	  function tryCatch(fn, obj, arg) {
	    try {
	      return {
	        type: "normal",
	        arg: fn.call(obj, arg)
	      };
	    } catch (err) {
	      return {
	        type: "throw",
	        arg: err
	      };
	    }
	  }
	  exports.wrap = wrap;
	  var ContinueSentinel = {};
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });
	  var getProto = _Object$getPrototypeOf,
	    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(IteratorPrototype);
	  function defineIteratorMethods(prototype) {
	    var _context;
	    _forEachInstanceProperty(_context = ["next", "throw", "return"]).call(_context, function (method) {
	      define(prototype, method, function (arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }
	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if ("throw" !== record.type) {
	        var result = record.arg,
	          value = result.value;
	        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
	          invoke("next", value, resolve, reject);
	        }, function (err) {
	          invoke("throw", err, resolve, reject);
	        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
	          result.value = unwrapped, resolve(result);
	        }, function (error) {
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	      reject(record.arg);
	    }
	    var previousPromise;
	    defineProperty(this, "_invoke", {
	      value: function value(method, arg) {
	        function callInvokeWithMethodAndArg() {
	          return new PromiseImpl(function (resolve, reject) {
	            invoke(method, arg, resolve, reject);
	          });
	        }
	        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      }
	    });
	  }
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = "suspendedStart";
	    return function (method, arg) {
	      if ("executing" === state) throw new Error("Generator is already running");
	      if ("completed" === state) {
	        if ("throw" === method) throw arg;
	        return doneResult();
	      }
	      for (context.method = method, context.arg = arg;;) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
	          if ("suspendedStart" === state) throw state = "completed", context.arg;
	          context.dispatchException(context.arg);
	        } else "return" === context.method && context.abrupt("return", context.arg);
	        state = "executing";
	        var record = tryCatch(innerFn, self, context);
	        if ("normal" === record.type) {
	          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
	          return {
	            value: record.arg,
	            done: context.done
	          };
	        }
	        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
	      }
	    };
	  }
	  function maybeInvokeDelegate(delegate, context) {
	    var methodName = context.method,
	      method = delegate.iterator[methodName];
	    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
	    var record = tryCatch(method, delegate.iterator, context.arg);
	    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
	    var info = record.arg;
	    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
	  }
	  function pushTryEntry(locs) {
	    var entry = {
	      tryLoc: locs[0]
	    };
	    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
	  }
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal", delete record.arg, entry.completion = record;
	  }
	  function Context(tryLocsList) {
	    this.tryEntries = [{
	      tryLoc: "root"
	    }], _forEachInstanceProperty(tryLocsList).call(tryLocsList, pushTryEntry, this), this.reset(!0);
	  }
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) return iteratorMethod.call(iterable);
	      if ("function" == typeof iterable.next) return iterable;
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	          next = function next() {
	            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
	            return next.value = undefined, next.done = !0, next;
	          };
	        return next.next = next;
	      }
	    }
	    return {
	      next: doneResult
	    };
	  }
	  function doneResult() {
	    return {
	      value: undefined,
	      done: !0
	    };
	  }
	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
	    value: GeneratorFunctionPrototype,
	    configurable: !0
	  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
	    value: GeneratorFunction,
	    configurable: !0
	  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
	    var ctor = "function" == typeof genFun && genFun.constructor;
	    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
	  }, exports.mark = function (genFun) {
	    return _Object$setPrototypeOf ? _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = _Object$create(Gp), genFun;
	  }, exports.awrap = function (arg) {
	    return {
	      __await: arg
	    };
	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    void 0 === PromiseImpl && (PromiseImpl = _Promise);
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
	    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
	    return this;
	  }), define(Gp, "toString", function () {
	    return "[object Generator]";
	  }), exports.keys = function (val) {
	    var object = Object(val),
	      keys = [];
	    for (var key in object) keys.push(key);
	    return _reverseInstanceProperty(keys).call(keys), function next() {
	      for (; keys.length;) {
	        var key = keys.pop();
	        if (key in object) return next.value = key, next.done = !1, next;
	      }
	      return next.done = !0, next;
	    };
	  }, exports.values = values, Context.prototype = {
	    constructor: Context,
	    reset: function reset(skipTempReset) {
	      var _context2;
	      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, _forEachInstanceProperty(_context2 = this.tryEntries).call(_context2, resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+_sliceInstanceProperty(name).call(name, 1)) && (this[name] = undefined);
	    },
	    stop: function stop() {
	      this.done = !0;
	      var rootRecord = this.tryEntries[0].completion;
	      if ("throw" === rootRecord.type) throw rootRecord.arg;
	      return this.rval;
	    },
	    dispatchException: function dispatchException(exception) {
	      if (this.done) throw exception;
	      var context = this;
	      function handle(loc, caught) {
	        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
	      }
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i],
	          record = entry.completion;
	        if ("root" === entry.tryLoc) return handle("end");
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc"),
	            hasFinally = hasOwn.call(entry, "finallyLoc");
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	          } else {
	            if (!hasFinally) throw new Error("try statement without catch or finally");
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          }
	        }
	      }
	    },
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
	      var record = finallyEntry ? finallyEntry.completion : {};
	      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
	    },
	    complete: function complete(record, afterLoc) {
	      if ("throw" === record.type) throw record.arg;
	      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
	    },
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
	      }
	    },
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if ("throw" === record.type) {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	      throw new Error("illegal catch attempt");
	    },
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      return this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
	    }
	  }, exports;
	}
	module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports; 
} (regeneratorRuntime$1));

var regeneratorRuntimeExports = regeneratorRuntime$1.exports;

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntimeExports();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regenerator);

var aCallable$1 = aCallable$e;
var toObject$1 = toObject$e;
var IndexedObject = indexedObject;
var lengthOfArrayLike$2 = lengthOfArrayLike$d;

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable$1(callbackfn);
    var O = toObject$1(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike$2(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

var $$5 = _export;
var $reduce = arrayReduce.left;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$5;
var CHROME_VERSION = engineV8Version;
var IS_NODE = engineIsNode;

// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
var FORCED$1 = CHROME_BUG || !arrayMethodIsStrict$1('reduce');

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$$5({ target: 'Array', proto: true, forced: FORCED$1 }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$4 = entryVirtual$j;

var reduce$3 = entryVirtual$4('Array').reduce;

var isPrototypeOf$4 = objectIsPrototypeOf;
var method$4 = reduce$3;

var ArrayPrototype$4 = Array.prototype;

var reduce$2 = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype$4 || (isPrototypeOf$4(ArrayPrototype$4, it) && own === ArrayPrototype$4.reduce) ? method$4 : own;
};

var parent$a = reduce$2;

var reduce$1 = parent$a;

var reduce = reduce$1;

var _reduceInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(reduce);

var isArray = isArray$f;
var lengthOfArrayLike$1 = lengthOfArrayLike$d;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$3;
var bind$2 = functionBindContext;

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray$1 = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind$2(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        elementLen = lengthOfArrayLike$1(element);
        targetIndex = flattenIntoArray$1(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

var flattenIntoArray_1 = flattenIntoArray$1;

var $$4 = _export;
var flattenIntoArray = flattenIntoArray_1;
var aCallable = aCallable$e;
var toObject = toObject$e;
var lengthOfArrayLike = lengthOfArrayLike$d;
var arraySpeciesCreate = arraySpeciesCreate$4;

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$$4({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A;
    aCallable(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});

var entryVirtual$3 = entryVirtual$j;

var flatMap$3 = entryVirtual$3('Array').flatMap;

var isPrototypeOf$3 = objectIsPrototypeOf;
var method$3 = flatMap$3;

var ArrayPrototype$3 = Array.prototype;

var flatMap$2 = function (it) {
  var own = it.flatMap;
  return it === ArrayPrototype$3 || (isPrototypeOf$3(ArrayPrototype$3, it) && own === ArrayPrototype$3.flatMap) ? method$3 : own;
};

var parent$9 = flatMap$2;

var flatMap$1 = parent$9;

var flatMap = flatMap$1;

var _flatMapInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(flatMap);

var internalMetadata = {exports: {}};

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails$4 = fails$w;

var arrayBufferNonExtensible = fails$4(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});

var fails$3 = fails$w;
var isObject$3 = isObject$i;
var classof$2 = classofRaw$2;
var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails$3(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
var objectIsExtensible = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject$3(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$2(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;

var fails$2 = fails$w;

var freezing = !fails$2(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});

var $$3 = _export;
var uncurryThis = functionUncurryThis;
var hiddenKeys = hiddenKeys$6;
var isObject$2 = isObject$i;
var hasOwn$2 = hasOwnProperty_1;
var defineProperty$1 = objectDefineProperty.f;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
var isExtensible = objectIsExtensible;
var uid = uid$4;
var FREEZING = freezing;

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty$1(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey$1 = function (it, create) {
  // return a primitive with prefix
  if (!isObject$2(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn$2(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn$2(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn$2(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $$3({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = internalMetadata.exports = {
  enable: enable,
  fastKey: fastKey$1,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;

var internalMetadataExports = internalMetadata.exports;

var $$2 = _export;
var global$1 = global$o;
var InternalMetadataModule = internalMetadataExports;
var fails$1 = fails$w;
var createNonEnumerableProperty = createNonEnumerableProperty$9;
var iterate$1 = iterate$7;
var anInstance$1 = anInstance$3;
var isCallable = isCallable$m;
var isObject$1 = isObject$i;
var setToStringTag = setToStringTag$7;
var defineProperty = objectDefineProperty.f;
var forEach = arrayIteration.forEach;
var DESCRIPTORS$1 = descriptors;
var InternalStateModule$1 = internalState;

var setInternalState$1 = InternalStateModule$1.set;
var internalStateGetterFor$1 = InternalStateModule$1.getterFor;

var collection$2 = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global$1[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;

  if (!DESCRIPTORS$1 || !isCallable(NativeConstructor)
    || !(IS_WEAK || NativePrototype.forEach && !fails$1(function () { new NativeConstructor().entries().next(); }))
  ) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else {
    Constructor = wrapper(function (target, iterable) {
      setInternalState$1(anInstance$1(target, Prototype), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (iterable != undefined) iterate$1(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
        createNonEnumerableProperty(Prototype, KEY, function (a, b) {
          var collection = getInternalState(this).collection;
          if (!IS_ADDER && IS_WEAK && !isObject$1(a)) return KEY == 'get' ? undefined : false;
          var result = collection[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      }
    });

    IS_WEAK || defineProperty(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).collection.size;
      }
    });
  }

  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);

  exported[CONSTRUCTOR_NAME] = Constructor;
  $$2({ global: true, forced: true }, exported);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};

var defineBuiltIn = defineBuiltIn$6;

var defineBuiltIns$1 = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else defineBuiltIn(target, key, src[key], options);
  } return target;
};

var create$1 = objectCreate;
var defineBuiltInAccessor = defineBuiltInAccessor$3;
var defineBuiltIns = defineBuiltIns$1;
var bind$1 = functionBindContext;
var anInstance = anInstance$3;
var isNullOrUndefined = isNullOrUndefined$5;
var iterate = iterate$7;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$3;
var setSpecies = setSpecies$2;
var DESCRIPTORS = descriptors;
var fastKey = internalMetadataExports.fastKey;
var InternalStateModule = internalState;

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

var collectionStrong$2 = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create$1(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind$1(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind == 'keys') return createIterResultObject(entry.key, false);
      if (kind == 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};

var collection$1 = collection$2;
var collectionStrong$1 = collectionStrong$2;

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection$1('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong$1);

var path$2 = path$s;

var map$2 = path$2.Map;

var parent$8 = map$2;


var map$1 = parent$8;

var map = map$1;

var _Map = /*@__PURE__*/getDefaultExportFromCjs(map);

var collection = collection$2;
var collectionStrong = collectionStrong$2;

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

var path$1 = path$s;

var set$2 = path$1.Set;

var parent$7 = set$2;


var set$1 = parent$7;

var set = set$1;

var _Set = /*@__PURE__*/getDefaultExportFromCjs(set);

var iterator = iterator$5;

var _Symbol$iterator2 = /*@__PURE__*/getDefaultExportFromCjs(iterator);

var getIterator$5 = getIterator$8;

var getIterator_1 = getIterator$5;

var parent$6 = getIterator_1;


var getIterator$4 = parent$6;

var parent$5 = getIterator$4;

var getIterator$3 = parent$5;

var parent$4 = getIterator$3;

var getIterator$2 = parent$4;

var getIterator$1 = getIterator$2;

var getIterator = getIterator$1;

var _getIterator = /*@__PURE__*/getDefaultExportFromCjs(getIterator);

var $$1 = _export;
var $some = arrayIteration.some;
var arrayMethodIsStrict = arrayMethodIsStrict$5;

var STRICT_METHOD = arrayMethodIsStrict('some');

// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$$1({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var entryVirtual$2 = entryVirtual$j;

var some$3 = entryVirtual$2('Array').some;

var isPrototypeOf$2 = objectIsPrototypeOf;
var method$2 = some$3;

var ArrayPrototype$2 = Array.prototype;

var some$2 = function (it) {
  var own = it.some;
  return it === ArrayPrototype$2 || (isPrototypeOf$2(ArrayPrototype$2, it) && own === ArrayPrototype$2.some) ? method$2 : own;
};

var parent$3 = some$2;

var some$1 = parent$3;

var some = some$1;

var _someInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(some);

var entryVirtual$1 = entryVirtual$j;

var keys$3 = entryVirtual$1('Array').keys;

var parent$2 = keys$3;

var keys$2 = parent$2;

var classof$1 = classof$e;
var hasOwn$1 = hasOwnProperty_1;
var isPrototypeOf$1 = objectIsPrototypeOf;
var method$1 = keys$2;

var ArrayPrototype$1 = Array.prototype;

var DOMIterables$1 = {
  DOMTokenList: true,
  NodeList: true
};

var keys$1 = function (it) {
  var own = it.keys;
  return it === ArrayPrototype$1 || (isPrototypeOf$1(ArrayPrototype$1, it) && own === ArrayPrototype$1.keys)
    || hasOwn$1(DOMIterables$1, classof$1(it)) ? method$1 : own;
};

var keys = keys$1;

var _keysInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(keys);

var entryVirtual = entryVirtual$j;

var entries$3 = entryVirtual('Array').entries;

var parent$1 = entries$3;

var entries$2 = parent$1;

var classof = classof$e;
var hasOwn = hasOwnProperty_1;
var isPrototypeOf = objectIsPrototypeOf;
var method = entries$2;

var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

var entries$1 = function (it) {
  var own = it.entries;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.entries)
    || hasOwn(DOMIterables, classof(it)) ? method : own;
};

var entries = entries$1;

var _entriesInstanceProperty = /*@__PURE__*/getDefaultExportFromCjs(entries);

var $ = _export;
var getBuiltIn = getBuiltIn$f;
var apply = functionApply;
var bind = functionBind;
var aConstructor = aConstructor$2;
var anObject = anObject$d;
var isObject = isObject$i;
var create = objectCreate;
var fails = fails$w;

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

var path = path$s;

var construct$2 = path.Reflect.construct;

var parent = construct$2;

var construct$1 = parent;

var construct = construct$1;

var _Reflect$construct = /*@__PURE__*/getDefaultExportFromCjs(construct);

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};

function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

var _Symbol$iterator;
function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); enumerableOnly && (symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var _context32, _context33; var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _forEachInstanceProperty(_context32 = ownKeys(Object(source), !0)).call(_context32, function (key) { _defineProperty(target, key, source[key]); }) : _Object$getOwnPropertyDescriptors ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)) : _forEachInstanceProperty(_context33 = ownKeys(Object(source))).call(_context33, function (key) { _Object$defineProperty$1(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (_Array$isArray$1(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { var _context31; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty(_context31 = Object.prototype.toString.call(o)).call(_context31, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from$1(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

/**
 * Create new data pipe.
 *
 * @param from - The source data set or data view.
 * @remarks
 * Example usage:
 * ```typescript
 * interface AppItem {
 *   whoami: string;
 *   appData: unknown;
 *   visData: VisItem;
 * }
 * interface VisItem {
 *   id: number;
 *   label: string;
 *   color: string;
 *   x: number;
 *   y: number;
 * }
 *
 * const ds1 = new DataSet<AppItem, "whoami">([], { fieldId: "whoami" });
 * const ds2 = new DataSet<VisItem, "id">();
 *
 * const pipe = createNewDataPipeFrom(ds1)
 *   .filter((item): boolean => item.enabled === true)
 *   .map<VisItem, "id">((item): VisItem => item.visData)
 *   .to(ds2);
 *
 * pipe.start();
 * ```
 * @returns A factory whose methods can be used to configure the pipe.
 */
function createNewDataPipeFrom(from) {
  return new DataPipeUnderConstruction(from);
}
/**
 * Internal implementation of the pipe. This should be accessible only through
 * `createNewDataPipeFrom` from the outside.
 *
 * @typeParam SI - Source item type.
 * @typeParam SP - Source item type's id property name.
 * @typeParam TI - Target item type.
 * @typeParam TP - Target item type's id property name.
 */
var SimpleDataPipe = /*#__PURE__*/function () {
  /**
   * Bound listeners for use with `DataInterface['on' | 'off']`.
   */

  /**
   * Create a new data pipe.
   *
   * @param _source - The data set or data view that will be observed.
   * @param _transformers - An array of transforming functions to be used to
   * filter or transform the items in the pipe.
   * @param _target - The data set or data view that will receive the items.
   */
  function SimpleDataPipe(_source, _transformers, _target) {
    var _context, _context2, _context3;
    _classCallCheck(this, SimpleDataPipe);
    _defineProperty(this, "_source", void 0);
    _defineProperty(this, "_transformers", void 0);
    _defineProperty(this, "_target", void 0);
    _defineProperty(this, "_listeners", {
      add: _bindInstanceProperty$1(_context = this._add).call(_context, this),
      remove: _bindInstanceProperty$1(_context2 = this._remove).call(_context2, this),
      update: _bindInstanceProperty$1(_context3 = this._update).call(_context3, this)
    });
    this._source = _source;
    this._transformers = _transformers;
    this._target = _target;
  }
  /** @inheritDoc */
  _createClass(SimpleDataPipe, [{
    key: "all",
    value: function all() {
      this._target.update(this._transformItems(this._source.get()));
      return this;
    }
    /** @inheritDoc */
  }, {
    key: "start",
    value: function start() {
      this._source.on("add", this._listeners.add);
      this._source.on("remove", this._listeners.remove);
      this._source.on("update", this._listeners.update);
      return this;
    }
    /** @inheritDoc */
  }, {
    key: "stop",
    value: function stop() {
      this._source.off("add", this._listeners.add);
      this._source.off("remove", this._listeners.remove);
      this._source.off("update", this._listeners.update);
      return this;
    }
    /**
     * Apply the transformers to the items.
     *
     * @param items - The items to be transformed.
     * @returns The transformed items.
     */
  }, {
    key: "_transformItems",
    value: function _transformItems(items) {
      var _context4;
      return _reduceInstanceProperty(_context4 = this._transformers).call(_context4, function (items, transform) {
        return transform(items);
      }, items);
    }
    /**
     * Handle an add event.
     *
     * @param _name - Ignored.
     * @param payload - The payload containing the ids of the added items.
     */
  }, {
    key: "_add",
    value: function _add(_name, payload) {
      if (payload == null) {
        return;
      }
      this._target.add(this._transformItems(this._source.get(payload.items)));
    }
    /**
     * Handle an update event.
     *
     * @param _name - Ignored.
     * @param payload - The payload containing the ids of the updated items.
     */
  }, {
    key: "_update",
    value: function _update(_name, payload) {
      if (payload == null) {
        return;
      }
      this._target.update(this._transformItems(this._source.get(payload.items)));
    }
    /**
     * Handle a remove event.
     *
     * @param _name - Ignored.
     * @param payload - The payload containing the data of the removed items.
     */
  }, {
    key: "_remove",
    value: function _remove(_name, payload) {
      if (payload == null) {
        return;
      }
      this._target.remove(this._transformItems(payload.oldData));
    }
  }]);
  return SimpleDataPipe;
}();
/**
 * Internal implementation of the pipe factory. This should be accessible
 * only through `createNewDataPipeFrom` from the outside.
 *
 * @typeParam TI - Target item type.
 * @typeParam TP - Target item type's id property name.
 */
var DataPipeUnderConstruction = /*#__PURE__*/function () {
  /**
   * Array transformers used to transform items within the pipe. This is typed
   * as any for the sake of simplicity.
   */

  /**
   * Create a new data pipe factory. This is an internal constructor that
   * should never be called from outside of this file.
   *
   * @param _source - The source data set or data view for this pipe.
   */
  function DataPipeUnderConstruction(_source) {
    _classCallCheck(this, DataPipeUnderConstruction);
    _defineProperty(this, "_source", void 0);
    _defineProperty(this, "_transformers", []);
    this._source = _source;
  }
  /**
   * Filter the items.
   *
   * @param callback - A filtering function that returns true if given item
   * should be piped and false if not.
   * @returns This factory for further configuration.
   */
  _createClass(DataPipeUnderConstruction, [{
    key: "filter",
    value: function filter(callback) {
      this._transformers.push(function (input) {
        return _filterInstanceProperty(input).call(input, callback);
      });
      return this;
    }
    /**
     * Map each source item to a new type.
     *
     * @param callback - A mapping function that takes a source item and returns
     * corresponding mapped item.
     * @typeParam TI - Target item type.
     * @typeParam TP - Target item type's id property name.
     * @returns This factory for further configuration.
     */
  }, {
    key: "map",
    value: function map(callback) {
      this._transformers.push(function (input) {
        return _mapInstanceProperty(input).call(input, callback);
      });
      return this;
    }
    /**
     * Map each source item to zero or more items of a new type.
     *
     * @param callback - A mapping function that takes a source item and returns
     * an array of corresponding mapped items.
     * @typeParam TI - Target item type.
     * @typeParam TP - Target item type's id property name.
     * @returns This factory for further configuration.
     */
  }, {
    key: "flatMap",
    value: function flatMap(callback) {
      this._transformers.push(function (input) {
        return _flatMapInstanceProperty(input).call(input, callback);
      });
      return this;
    }
    /**
     * Connect this pipe to given data set.
     *
     * @param target - The data set that will receive the items from this pipe.
     * @returns The pipe connected between given data sets and performing
     * configured transformation on the processed items.
     */
  }, {
    key: "to",
    value: function to(target) {
      return new SimpleDataPipe(this._source, this._transformers, target);
    }
  }]);
  return DataPipeUnderConstruction;
}();
/**
 * Determine whether a value can be used as an id.
 *
 * @param value - Input value of unknown type.
 * @returns True if the value is valid id, false otherwise.
 */
function isId(value) {
  return typeof value === "string" || typeof value === "number";
}

/**
 * A queue.
 *
 * @typeParam T - The type of method names to be replaced by queued versions.
 */
var Queue = /*#__PURE__*/function () {
  /** Delay in milliseconds. If defined the queue will be periodically flushed. */

  /** Maximum number of entries in the queue before it will be flushed. */

  /**
   * Construct a new Queue.
   *
   * @param options - Queue configuration.
   */
  function Queue(options) {
    _classCallCheck(this, Queue);
    _defineProperty(this, "delay", void 0);
    _defineProperty(this, "max", void 0);
    _defineProperty(this, "_queue", []);
    _defineProperty(this, "_timeout", null);
    _defineProperty(this, "_extended", null);
    // options
    this.delay = null;
    this.max = Infinity;
    this.setOptions(options);
  }
  /**
   * Update the configuration of the queue.
   *
   * @param options - Queue configuration.
   */
  _createClass(Queue, [{
    key: "setOptions",
    value: function setOptions(options) {
      if (options && typeof options.delay !== "undefined") {
        this.delay = options.delay;
      }
      if (options && typeof options.max !== "undefined") {
        this.max = options.max;
      }
      this._flushIfNeeded();
    }
    /**
     * Extend an object with queuing functionality.
     * The object will be extended with a function flush, and the methods provided in options.replace will be replaced with queued ones.
     *
     * @param object - The object to be extended.
     * @param options - Additional options.
     * @returns The created queue.
     */
  }, {
    key: "destroy",
    value:
    /**
     * Destroy the queue. The queue will first flush all queued actions, and in case it has extended an object, will restore the original object.
     */
    function destroy() {
      this.flush();
      if (this._extended) {
        var object = this._extended.object;
        var methods = this._extended.methods;
        for (var i = 0; i < methods.length; i++) {
          var method = methods[i];
          if (method.original) {
            // @TODO: better solution?
            object[method.name] = method.original;
          } else {
            // @TODO: better solution?
            delete object[method.name];
          }
        }
        this._extended = null;
      }
    }
    /**
     * Replace a method on an object with a queued version.
     *
     * @param object - Object having the method.
     * @param method - The method name.
     */
  }, {
    key: "replace",
    value: function replace(object, method) {
      /* eslint-disable-next-line @typescript-eslint/no-this-alias -- Function this is necessary in the function bellow, so class this has to be saved into a variable here. */
      var me = this;
      var original = object[method];
      if (!original) {
        throw new Error("Method " + method + " undefined");
      }
      object[method] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        // add this call to the queue
        me.queue({
          args: args,
          fn: original,
          context: this
        });
      };
    }
    /**
     * Queue a call.
     *
     * @param entry - The function or entry to be queued.
     */
  }, {
    key: "queue",
    value: function queue(entry) {
      if (typeof entry === "function") {
        this._queue.push({
          fn: entry
        });
      } else {
        this._queue.push(entry);
      }
      this._flushIfNeeded();
    }
    /**
     * Check whether the queue needs to be flushed.
     */
  }, {
    key: "_flushIfNeeded",
    value: function _flushIfNeeded() {
      var _this = this;
      // flush when the maximum is exceeded.
      if (this._queue.length > this.max) {
        this.flush();
      }
      // flush after a period of inactivity when a delay is configured
      if (this._timeout != null) {
        clearTimeout(this._timeout);
        this._timeout = null;
      }
      if (this.queue.length > 0 && typeof this.delay === "number") {
        this._timeout = _setTimeout(function () {
          _this.flush();
        }, this.delay);
      }
    }
    /**
     * Flush all queued calls
     */
  }, {
    key: "flush",
    value: function flush() {
      var _context5, _context6;
      _forEachInstanceProperty(_context5 = _spliceInstanceProperty(_context6 = this._queue).call(_context6, 0)).call(_context5, function (entry) {
        entry.fn.apply(entry.context || entry.fn, entry.args || []);
      });
    }
  }], [{
    key: "extend",
    value: function extend(object, options) {
      var queue = new Queue(options);
      if (object.flush !== undefined) {
        throw new Error("Target object already has a property flush");
      }
      object.flush = function () {
        queue.flush();
      };
      var methods = [{
        name: "flush",
        original: undefined
      }];
      if (options && options.replace) {
        for (var i = 0; i < options.replace.length; i++) {
          var name = options.replace[i];
          methods.push({
            name: name,
            // @TODO: better solution?
            original: object[name]
          });
          // @TODO: better solution?
          queue.replace(object, name);
        }
      }
      queue._extended = {
        object: object,
        methods: methods
      };
      return queue;
    }
  }]);
  return Queue;
}();
/**
 * {@link DataSet} code that can be reused in {@link DataView} or other similar implementations of {@link DataInterface}.
 *
 * @typeParam Item - Item type that may or may not have an id.
 * @typeParam IdProp - Name of the property that contains the id.
 */
var DataSetPart = /*#__PURE__*/function () {
  function DataSetPart() {
    _classCallCheck(this, DataSetPart);
    _defineProperty(this, "_subscribers", {
      "*": [],
      add: [],
      remove: [],
      update: []
    });
    /**
     * @deprecated Use on instead (PS: DataView.subscribe === DataView.on).
     */
    _defineProperty(this, "subscribe", DataSetPart.prototype.on);
    /**
     * @deprecated Use off instead (PS: DataView.unsubscribe === DataView.off).
     */
    _defineProperty(this, "unsubscribe", DataSetPart.prototype.off);
  }
  _createClass(DataSetPart, [{
    key: "_trigger",
    value:
    /**
     * Trigger an event
     *
     * @param event - Event name.
     * @param payload - Event payload.
     * @param senderId - Id of the sender.
     */
    function _trigger(event, payload, senderId) {
      var _context7, _context8;
      if (event === "*") {
        throw new Error("Cannot trigger event *");
      }
      _forEachInstanceProperty(_context7 = _concatInstanceProperty(_context8 = []).call(_context8, _toConsumableArray(this._subscribers[event]), _toConsumableArray(this._subscribers["*"]))).call(_context7, function (subscriber) {
        subscriber(event, payload, senderId != null ? senderId : null);
      });
    }
    /**
     * Subscribe to an event, add an event listener.
     *
     * @remarks Non-function callbacks are ignored.
     * @param event - Event name.
     * @param callback - Callback method.
     */
  }, {
    key: "on",
    value: function on(event, callback) {
      if (typeof callback === "function") {
        this._subscribers[event].push(callback);
      }
      // @TODO: Maybe throw for invalid callbacks?
    }
    /**
     * Unsubscribe from an event, remove an event listener.
     *
     * @remarks If the same callback was subscribed more than once **all** occurences will be removed.
     * @param event - Event name.
     * @param callback - Callback method.
     */
  }, {
    key: "off",
    value: function off(event, callback) {
      var _context9;
      this._subscribers[event] = _filterInstanceProperty(_context9 = this._subscribers[event]).call(_context9, function (subscriber) {
        return subscriber !== callback;
      });
    }
  }]);
  return DataSetPart;
}();
/**
 * Data stream
 *
 * @remarks
 * {@link DataStream} offers an always up to date stream of items from a {@link DataSet} or {@link DataView}.
 * That means that the stream is evaluated at the time of iteration, conversion to another data type or when {@link cache} is called, not when the {@link DataStream} was created.
 * Multiple invocations of for example {@link toItemArray} may yield different results (if the data source like for example {@link DataSet} gets modified).
 * @typeParam Item - The item type this stream is going to work with.
 */
_Symbol$iterator = _Symbol$iterator2;
var DataStream = /*#__PURE__*/function () {
  /**
   * Create a new data stream.
   *
   * @param pairs - The id, item pairs.
   */
  function DataStream(pairs) {
    _classCallCheck(this, DataStream);
    _defineProperty(this, "_pairs", void 0);
    this._pairs = pairs;
  }
  /**
   * Return an iterable of key, value pairs for every entry in the stream.
   */
  _createClass(DataStream, [{
    key: _Symbol$iterator,
    value:
    /*#__PURE__*/
    _regeneratorRuntime.mark(function value() {
      var _iterator, _step, _step$value, id, item;
      return _regeneratorRuntime.wrap(function value$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _iterator = _createForOfIteratorHelper(this._pairs);
            _context10.prev = 1;
            _iterator.s();
          case 3:
            if ((_step = _iterator.n()).done) {
              _context10.next = 9;
              break;
            }
            _step$value = _slicedToArray(_step.value, 2), id = _step$value[0], item = _step$value[1];
            _context10.next = 7;
            return [id, item];
          case 7:
            _context10.next = 3;
            break;
          case 9:
            _context10.next = 14;
            break;
          case 11:
            _context10.prev = 11;
            _context10.t0 = _context10["catch"](1);
            _iterator.e(_context10.t0);
          case 14:
            _context10.prev = 14;
            _iterator.f();
            return _context10.finish(14);
          case 17:
          case "end":
            return _context10.stop();
        }
      }, value, this, [[1, 11, 14, 17]]);
    })
    /**
     * Return an iterable of key, value pairs for every entry in the stream.
     */
  }, {
    key: "entries",
    value:
    /*#__PURE__*/
    _regeneratorRuntime.mark(function entries() {
      var _iterator2, _step2, _step2$value, id, item;
      return _regeneratorRuntime.wrap(function entries$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _iterator2 = _createForOfIteratorHelper(this._pairs);
            _context11.prev = 1;
            _iterator2.s();
          case 3:
            if ((_step2 = _iterator2.n()).done) {
              _context11.next = 9;
              break;
            }
            _step2$value = _slicedToArray(_step2.value, 2), id = _step2$value[0], item = _step2$value[1];
            _context11.next = 7;
            return [id, item];
          case 7:
            _context11.next = 3;
            break;
          case 9:
            _context11.next = 14;
            break;
          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](1);
            _iterator2.e(_context11.t0);
          case 14:
            _context11.prev = 14;
            _iterator2.f();
            return _context11.finish(14);
          case 17:
          case "end":
            return _context11.stop();
        }
      }, entries, this, [[1, 11, 14, 17]]);
    })
    /**
     * Return an iterable of keys in the stream.
     */
  }, {
    key: "keys",
    value:
    /*#__PURE__*/
    _regeneratorRuntime.mark(function keys() {
      var _iterator3, _step3, _step3$value, id;
      return _regeneratorRuntime.wrap(function keys$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _iterator3 = _createForOfIteratorHelper(this._pairs);
            _context12.prev = 1;
            _iterator3.s();
          case 3:
            if ((_step3 = _iterator3.n()).done) {
              _context12.next = 9;
              break;
            }
            _step3$value = _slicedToArray(_step3.value, 1), id = _step3$value[0];
            _context12.next = 7;
            return id;
          case 7:
            _context12.next = 3;
            break;
          case 9:
            _context12.next = 14;
            break;
          case 11:
            _context12.prev = 11;
            _context12.t0 = _context12["catch"](1);
            _iterator3.e(_context12.t0);
          case 14:
            _context12.prev = 14;
            _iterator3.f();
            return _context12.finish(14);
          case 17:
          case "end":
            return _context12.stop();
        }
      }, keys, this, [[1, 11, 14, 17]]);
    })
    /**
     * Return an iterable of values in the stream.
     */
  }, {
    key: "values",
    value:
    /*#__PURE__*/
    _regeneratorRuntime.mark(function values() {
      var _iterator4, _step4, _step4$value, item;
      return _regeneratorRuntime.wrap(function values$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _iterator4 = _createForOfIteratorHelper(this._pairs);
            _context13.prev = 1;
            _iterator4.s();
          case 3:
            if ((_step4 = _iterator4.n()).done) {
              _context13.next = 9;
              break;
            }
            _step4$value = _slicedToArray(_step4.value, 2), item = _step4$value[1];
            _context13.next = 7;
            return item;
          case 7:
            _context13.next = 3;
            break;
          case 9:
            _context13.next = 14;
            break;
          case 11:
            _context13.prev = 11;
            _context13.t0 = _context13["catch"](1);
            _iterator4.e(_context13.t0);
          case 14:
            _context13.prev = 14;
            _iterator4.f();
            return _context13.finish(14);
          case 17:
          case "end":
            return _context13.stop();
        }
      }, values, this, [[1, 11, 14, 17]]);
    })
    /**
     * Return an array containing all the ids in this stream.
     *
     * @remarks
     * The array may contain duplicities.
     * @returns The array with all ids from this stream.
     */
  }, {
    key: "toIdArray",
    value: function toIdArray() {
      var _context14;
      return _mapInstanceProperty(_context14 = _toConsumableArray(this._pairs)).call(_context14, function (pair) {
        return pair[0];
      });
    }
    /**
     * Return an array containing all the items in this stream.
     *
     * @remarks
     * The array may contain duplicities.
     * @returns The array with all items from this stream.
     */
  }, {
    key: "toItemArray",
    value: function toItemArray() {
      var _context15;
      return _mapInstanceProperty(_context15 = _toConsumableArray(this._pairs)).call(_context15, function (pair) {
        return pair[1];
      });
    }
    /**
     * Return an array containing all the entries in this stream.
     *
     * @remarks
     * The array may contain duplicities.
     * @returns The array with all entries from this stream.
     */
  }, {
    key: "toEntryArray",
    value: function toEntryArray() {
      return _toConsumableArray(this._pairs);
    }
    /**
     * Return an object map containing all the items in this stream accessible by ids.
     *
     * @remarks
     * In case of duplicate ids (coerced to string so `7 == '7'`) the last encoutered appears in the returned object.
     * @returns The object map of all id → item pairs from this stream.
     */
  }, {
    key: "toObjectMap",
    value: function toObjectMap() {
      var map = _Object$create$1(null);
      var _iterator5 = _createForOfIteratorHelper(this._pairs),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _step5$value = _slicedToArray(_step5.value, 2),
            id = _step5$value[0],
            item = _step5$value[1];
          map[id] = item;
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      return map;
    }
    /**
     * Return a map containing all the items in this stream accessible by ids.
     *
     * @returns The map of all id → item pairs from this stream.
     */
  }, {
    key: "toMap",
    value: function toMap() {
      return new _Map(this._pairs);
    }
    /**
     * Return a set containing all the (unique) ids in this stream.
     *
     * @returns The set of all ids from this stream.
     */
  }, {
    key: "toIdSet",
    value: function toIdSet() {
      return new _Set(this.toIdArray());
    }
    /**
     * Return a set containing all the (unique) items in this stream.
     *
     * @returns The set of all items from this stream.
     */
  }, {
    key: "toItemSet",
    value: function toItemSet() {
      return new _Set(this.toItemArray());
    }
    /**
     * Cache the items from this stream.
     *
     * @remarks
     * This method allows for items to be fetched immediatelly and used (possibly multiple times) later.
     * It can also be used to optimize performance as {@link DataStream} would otherwise reevaluate everything upon each iteration.
     *
     * ## Example
     * ```javascript
     * const ds = new DataSet([…])
     *
     * const cachedStream = ds.stream()
     *   .filter(…)
     *   .sort(…)
     *   .map(…)
     *   .cached(…) // Data are fetched, processed and cached here.
     *
     * ds.clear()
     * chachedStream // Still has all the items.
     * ```
     * @returns A new {@link DataStream} with cached items (detached from the original {@link DataSet}).
     */
  }, {
    key: "cache",
    value: function cache() {
      return new DataStream(_toConsumableArray(this._pairs));
    }
    /**
     * Get the distinct values of given property.
     *
     * @param callback - The function that picks and possibly converts the property.
     * @typeParam T - The type of the distinct value.
     * @returns A set of all distinct properties.
     */
  }, {
    key: "distinct",
    value: function distinct(callback) {
      var set = new _Set();
      var _iterator6 = _createForOfIteratorHelper(this._pairs),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _step6$value = _slicedToArray(_step6.value, 2),
            id = _step6$value[0],
            item = _step6$value[1];
          set.add(callback(item, id));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return set;
    }
    /**
     * Filter the items of the stream.
     *
     * @param callback - The function that decides whether an item will be included.
     * @returns A new data stream with the filtered items.
     */
  }, {
    key: "filter",
    value: function filter(callback) {
      var pairs = this._pairs;
      return new DataStream(_defineProperty({}, _Symbol$iterator2, /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var _iterator7, _step7, _step7$value, id, item;
        return _regeneratorRuntime.wrap(function _callee$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              _iterator7 = _createForOfIteratorHelper(pairs);
              _context16.prev = 1;
              _iterator7.s();
            case 3:
              if ((_step7 = _iterator7.n()).done) {
                _context16.next = 10;
                break;
              }
              _step7$value = _slicedToArray(_step7.value, 2), id = _step7$value[0], item = _step7$value[1];
              if (!callback(item, id)) {
                _context16.next = 8;
                break;
              }
              _context16.next = 8;
              return [id, item];
            case 8:
              _context16.next = 3;
              break;
            case 10:
              _context16.next = 15;
              break;
            case 12:
              _context16.prev = 12;
              _context16.t0 = _context16["catch"](1);
              _iterator7.e(_context16.t0);
            case 15:
              _context16.prev = 15;
              _iterator7.f();
              return _context16.finish(15);
            case 18:
            case "end":
              return _context16.stop();
          }
        }, _callee, null, [[1, 12, 15, 18]]);
      })));
    }
    /**
     * Execute a callback for each item of the stream.
     *
     * @param callback - The function that will be invoked for each item.
     */
  }, {
    key: "forEach",
    value: function forEach(callback) {
      var _iterator8 = _createForOfIteratorHelper(this._pairs),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _step8$value = _slicedToArray(_step8.value, 2),
            id = _step8$value[0],
            item = _step8$value[1];
          callback(item, id);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
    /**
     * Map the items into a different type.
     *
     * @param callback - The function that does the conversion.
     * @typeParam Mapped - The type of the item after mapping.
     * @returns A new data stream with the mapped items.
     */
  }, {
    key: "map",
    value: function map(callback) {
      var pairs = this._pairs;
      return new DataStream(_defineProperty({}, _Symbol$iterator2, /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var _iterator9, _step9, _step9$value, id, item;
        return _regeneratorRuntime.wrap(function _callee2$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _iterator9 = _createForOfIteratorHelper(pairs);
              _context17.prev = 1;
              _iterator9.s();
            case 3:
              if ((_step9 = _iterator9.n()).done) {
                _context17.next = 9;
                break;
              }
              _step9$value = _slicedToArray(_step9.value, 2), id = _step9$value[0], item = _step9$value[1];
              _context17.next = 7;
              return [id, callback(item, id)];
            case 7:
              _context17.next = 3;
              break;
            case 9:
              _context17.next = 14;
              break;
            case 11:
              _context17.prev = 11;
              _context17.t0 = _context17["catch"](1);
              _iterator9.e(_context17.t0);
            case 14:
              _context17.prev = 14;
              _iterator9.f();
              return _context17.finish(14);
            case 17:
            case "end":
              return _context17.stop();
          }
        }, _callee2, null, [[1, 11, 14, 17]]);
      })));
    }
    /**
     * Get the item with the maximum value of given property.
     *
     * @param callback - The function that picks and possibly converts the property.
     * @returns The item with the maximum if found otherwise null.
     */
  }, {
    key: "max",
    value: function max(callback) {
      var iter = _getIterator(this._pairs);
      var curr = iter.next();
      if (curr.done) {
        return null;
      }
      var maxItem = curr.value[1];
      var maxValue = callback(curr.value[1], curr.value[0]);
      while (!(curr = iter.next()).done) {
        var _curr$value = _slicedToArray(curr.value, 2),
          id = _curr$value[0],
          item = _curr$value[1];
        var _value = callback(item, id);
        if (_value > maxValue) {
          maxValue = _value;
          maxItem = item;
        }
      }
      return maxItem;
    }
    /**
     * Get the item with the minimum value of given property.
     *
     * @param callback - The function that picks and possibly converts the property.
     * @returns The item with the minimum if found otherwise null.
     */
  }, {
    key: "min",
    value: function min(callback) {
      var iter = _getIterator(this._pairs);
      var curr = iter.next();
      if (curr.done) {
        return null;
      }
      var minItem = curr.value[1];
      var minValue = callback(curr.value[1], curr.value[0]);
      while (!(curr = iter.next()).done) {
        var _curr$value2 = _slicedToArray(curr.value, 2),
          id = _curr$value2[0],
          item = _curr$value2[1];
        var _value2 = callback(item, id);
        if (_value2 < minValue) {
          minValue = _value2;
          minItem = item;
        }
      }
      return minItem;
    }
    /**
     * Reduce the items into a single value.
     *
     * @param callback - The function that does the reduction.
     * @param accumulator - The initial value of the accumulator.
     * @typeParam T - The type of the accumulated value.
     * @returns The reduced value.
     */
  }, {
    key: "reduce",
    value: function reduce(callback, accumulator) {
      var _iterator10 = _createForOfIteratorHelper(this._pairs),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _step10$value = _slicedToArray(_step10.value, 2),
            id = _step10$value[0],
            item = _step10$value[1];
          accumulator = callback(accumulator, item, id);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return accumulator;
    }
    /**
     * Sort the items.
     *
     * @param callback - Item comparator.
     * @returns A new stream with sorted items.
     */
  }, {
    key: "sort",
    value: function sort(callback) {
      var _this2 = this;
      return new DataStream(_defineProperty({}, _Symbol$iterator2, function () {
        var _context18;
        return _getIterator(_sortInstanceProperty(_context18 = _toConsumableArray(_this2._pairs)).call(_context18, function (_ref, _ref2) {
          var _ref3 = _slicedToArray(_ref, 2),
            idA = _ref3[0],
            itemA = _ref3[1];
          var _ref4 = _slicedToArray(_ref2, 2),
            idB = _ref4[0],
            itemB = _ref4[1];
          return callback(itemA, itemB, idA, idB);
        }));
      }));
    }
  }]);
  return DataStream;
}();
/**
 * Add an id to given item if it doesn't have one already.
 *
 * @remarks
 * The item will be modified.
 * @param item - The item that will have an id after a call to this function.
 * @param idProp - The key of the id property.
 * @typeParam Item - Item type that may or may not have an id.
 * @typeParam IdProp - Name of the property that contains the id.
 * @returns true
 */
function ensureFullItem(item, idProp) {
  if (item[idProp] == null) {
    // generate an id
    item[idProp] = v4();
  }
  return item;
}
/**
 * # DataSet
 *
 * Vis.js comes with a flexible DataSet, which can be used to hold and
 * manipulate unstructured data and listen for changes in the data. The DataSet
 * is key/value based. Data items can be added, updated and removed from the
 * DataSet, and one can subscribe to changes in the DataSet. The data in the
 * DataSet can be filtered and ordered. Data can be normalized when appending it
 * to the DataSet as well.
 *
 * ## Example
 *
 * The following example shows how to use a DataSet.
 *
 * ```javascript
 * // create a DataSet
 * var options = {};
 * var data = new vis.DataSet(options);
 *
 * // add items
 * // note that the data items can contain different properties and data formats
 * data.add([
 *   {id: 1, text: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true},
 *   {id: 2, text: 'item 2', date: '2013-06-23', group: 2},
 *   {id: 3, text: 'item 3', date: '2013-06-25', group: 2},
 *   {id: 4, text: 'item 4'}
 * ]);
 *
 * // subscribe to any change in the DataSet
 * data.on('*', function (event, properties, senderId) {
 *   console.log('event', event, properties);
 * });
 *
 * // update an existing item
 * data.update({id: 2, group: 1});
 *
 * // remove an item
 * data.remove(4);
 *
 * // get all ids
 * var ids = data.getIds();
 * console.log('ids', ids);
 *
 * // get a specific item
 * var item1 = data.get(1);
 * console.log('item1', item1);
 *
 * // retrieve a filtered subset of the data
 * var items = data.get({
 *   filter: function (item) {
 *     return item.group == 1;
 *   }
 * });
 * console.log('filtered items', items);
 * ```
 *
 * @typeParam Item - Item type that may or may not have an id.
 * @typeParam IdProp - Name of the property that contains the id.
 */
var DataSet = /*#__PURE__*/function (_DataSetPart) {
  _inherits(DataSet, _DataSetPart);
  var _super = _createSuper(DataSet);
  /**
   * Construct a new DataSet.
   *
   * @param data - Initial data or options.
   * @param options - Options (type error if data is also options).
   */
  function DataSet(data, options) {
    var _this3;
    _classCallCheck(this, DataSet);
    _this3 = _super.call(this);
    // correctly read optional arguments
    /** Flush all queued calls. */
    _defineProperty(_assertThisInitialized(_this3), "flush", void 0);
    /** @inheritDoc */
    _defineProperty(_assertThisInitialized(_this3), "length", void 0);
    _defineProperty(_assertThisInitialized(_this3), "_options", void 0);
    _defineProperty(_assertThisInitialized(_this3), "_data", void 0);
    _defineProperty(_assertThisInitialized(_this3), "_idProp", void 0);
    _defineProperty(_assertThisInitialized(_this3), "_queue", null);
    if (data && !_Array$isArray$1(data)) {
      options = data;
      data = [];
    }
    _this3._options = options || {};
    _this3._data = new _Map(); // map with data indexed by id
    _this3.length = 0; // number of items in the DataSet
    _this3._idProp = _this3._options.fieldId || "id"; // name of the field containing id
    // add initial data when provided
    if (data && data.length) {
      _this3.add(data);
    }
    _this3.setOptions(options);
    return _this3;
  }
  /**
   * Set new options.
   *
   * @param options - The new options.
   */
  _createClass(DataSet, [{
    key: "idProp",
    get:
    /** @inheritDoc */
    function get() {
      return this._idProp;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (options && options.queue !== undefined) {
        if (options.queue === false) {
          // delete queue if loaded
          if (this._queue) {
            this._queue.destroy();
            this._queue = null;
          }
        } else {
          // create queue and update its options
          if (!this._queue) {
            this._queue = Queue.extend(this, {
              replace: ["add", "update", "remove"]
            });
          }
          if (options.queue && _typeof$1(options.queue) === "object") {
            this._queue.setOptions(options.queue);
          }
        }
      }
    }
    /**
     * Add a data item or an array with items.
     *
     * After the items are added to the DataSet, the DataSet will trigger an event `add`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * ## Example
     *
     * ```javascript
     * // create a DataSet
     * const data = new vis.DataSet()
     *
     * // add items
     * const ids = data.add([
     *   { id: 1, text: 'item 1' },
     *   { id: 2, text: 'item 2' },
     *   { text: 'item without an id' }
     * ])
     *
     * console.log(ids) // [1, 2, '<UUIDv4>']
     * ```
     *
     * @param data - Items to be added (ids will be generated if missing).
     * @param senderId - Sender id.
     * @returns addedIds - Array with the ids (generated if not present) of the added items.
     * @throws When an item with the same id as any of the added items already exists.
     */
  }, {
    key: "add",
    value: function add(data, senderId) {
      var _this4 = this;
      var addedIds = [];
      var id;
      if (_Array$isArray$1(data)) {
        // Array
        var idsToAdd = _mapInstanceProperty(data).call(data, function (d) {
          return d[_this4._idProp];
        });
        if (_someInstanceProperty(idsToAdd).call(idsToAdd, function (id) {
          return _this4._data.has(id);
        })) {
          throw new Error("A duplicate id was found in the parameter array.");
        }
        for (var i = 0, len = data.length; i < len; i++) {
          id = this._addItem(data[i]);
          addedIds.push(id);
        }
      } else if (data && _typeof$1(data) === "object") {
        // Single item
        id = this._addItem(data);
        addedIds.push(id);
      } else {
        throw new Error("Unknown dataType");
      }
      if (addedIds.length) {
        this._trigger("add", {
          items: addedIds
        }, senderId);
      }
      return addedIds;
    }
    /**
     * Update existing items. When an item does not exist, it will be created.
     *
     * @remarks
     * The provided properties will be merged in the existing item. When an item does not exist, it will be created.
     *
     * After the items are updated, the DataSet will trigger an event `add` for the added items, and an event `update`. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * ## Example
     *
     * ```javascript
     * // create a DataSet
     * const data = new vis.DataSet([
     *   { id: 1, text: 'item 1' },
     *   { id: 2, text: 'item 2' },
     *   { id: 3, text: 'item 3' }
     * ])
     *
     * // update items
     * const ids = data.update([
     *   { id: 2, text: 'item 2 (updated)' },
     *   { id: 4, text: 'item 4 (new)' }
     * ])
     *
     * console.log(ids) // [2, 4]
     * ```
     *
     * ## Warning for TypeScript users
     * This method may introduce partial items into the data set. Use add or updateOnly instead for better type safety.
     * @param data - Items to be updated (if the id is already present) or added (if the id is missing).
     * @param senderId - Sender id.
     * @returns updatedIds - The ids of the added (these may be newly generated if there was no id in the item from the data) or updated items.
     * @throws When the supplied data is neither an item nor an array of items.
     */
  }, {
    key: "update",
    value: function update(data, senderId) {
      var _this5 = this;
      var addedIds = [];
      var updatedIds = [];
      var oldData = [];
      var updatedData = [];
      var idProp = this._idProp;
      var addOrUpdate = function addOrUpdate(item) {
        var origId = item[idProp];
        if (origId != null && _this5._data.has(origId)) {
          var fullItem = item; // it has an id, therefore it is a fullitem
          var oldItem = _Object$assign({}, _this5._data.get(origId));
          // update item
          var id = _this5._updateItem(fullItem);
          updatedIds.push(id);
          updatedData.push(fullItem);
          oldData.push(oldItem);
        } else {
          // add new item
          var _id = _this5._addItem(item);
          addedIds.push(_id);
        }
      };
      if (_Array$isArray$1(data)) {
        // Array
        for (var i = 0, len = data.length; i < len; i++) {
          if (data[i] && _typeof$1(data[i]) === "object") {
            addOrUpdate(data[i]);
          } else {
            console.warn("Ignoring input item, which is not an object at index " + i);
          }
        }
      } else if (data && _typeof$1(data) === "object") {
        // Single item
        addOrUpdate(data);
      } else {
        throw new Error("Unknown dataType");
      }
      if (addedIds.length) {
        this._trigger("add", {
          items: addedIds
        }, senderId);
      }
      if (updatedIds.length) {
        var props = {
          items: updatedIds,
          oldData: oldData,
          data: updatedData
        };
        // TODO: remove deprecated property 'data' some day
        //Object.defineProperty(props, 'data', {
        //  'get': (function() {
        //    console.warn('Property data is deprecated. Use DataSet.get(ids) to retrieve the new data, use the oldData property on this object to get the old data');
        //    return updatedData;
        //  }).bind(this)
        //});
        this._trigger("update", props, senderId);
      }
      return _concatInstanceProperty(addedIds).call(addedIds, updatedIds);
    }
    /**
     * Update existing items. When an item does not exist, an error will be thrown.
     *
     * @remarks
     * The provided properties will be deeply merged into the existing item.
     * When an item does not exist (id not present in the data set or absent), an error will be thrown and nothing will be changed.
     *
     * After the items are updated, the DataSet will trigger an event `update`.
     * When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * ## Example
     *
     * ```javascript
     * // create a DataSet
     * const data = new vis.DataSet([
     *   { id: 1, text: 'item 1' },
     *   { id: 2, text: 'item 2' },
     *   { id: 3, text: 'item 3' },
     * ])
     *
     * // update items
     * const ids = data.update([
     *   { id: 2, text: 'item 2 (updated)' }, // works
     *   // { id: 4, text: 'item 4 (new)' }, // would throw
     *   // { text: 'item 4 (new)' }, // would also throw
     * ])
     *
     * console.log(ids) // [2]
     * ```
     * @param data - Updates (the id and optionally other props) to the items in this data set.
     * @param senderId - Sender id.
     * @returns updatedIds - The ids of the updated items.
     * @throws When the supplied data is neither an item nor an array of items, when the ids are missing.
     */
  }, {
    key: "updateOnly",
    value: function updateOnly(data, senderId) {
      var _context19,
        _this6 = this;
      if (!_Array$isArray$1(data)) {
        data = [data];
      }
      var updateEventData = _mapInstanceProperty(_context19 = _mapInstanceProperty(data).call(data, function (update) {
        var oldData = _this6._data.get(update[_this6._idProp]);
        if (oldData == null) {
          throw new Error("Updating non-existent items is not allowed.");
        }
        return {
          oldData: oldData,
          update: update
        };
      })).call(_context19, function (_ref5) {
        var oldData = _ref5.oldData,
          update = _ref5.update;
        var id = oldData[_this6._idProp];
        var updatedData = pureDeepObjectAssign(oldData, update);
        _this6._data.set(id, updatedData);
        return {
          id: id,
          oldData: oldData,
          updatedData: updatedData
        };
      });
      if (updateEventData.length) {
        var props = {
          items: _mapInstanceProperty(updateEventData).call(updateEventData, function (value) {
            return value.id;
          }),
          oldData: _mapInstanceProperty(updateEventData).call(updateEventData, function (value) {
            return value.oldData;
          }),
          data: _mapInstanceProperty(updateEventData).call(updateEventData, function (value) {
            return value.updatedData;
          })
        };
        // TODO: remove deprecated property 'data' some day
        //Object.defineProperty(props, 'data', {
        //  'get': (function() {
        //    console.warn('Property data is deprecated. Use DataSet.get(ids) to retrieve the new data, use the oldData property on this object to get the old data');
        //    return updatedData;
        //  }).bind(this)
        //});
        this._trigger("update", props, senderId);
        return props.items;
      } else {
        return [];
      }
    }
    /** @inheritDoc */
  }, {
    key: "get",
    value: function get(first, second) {
      // @TODO: Woudn't it be better to split this into multiple methods?
      // parse the arguments
      var id = undefined;
      var ids = undefined;
      var options = undefined;
      if (isId(first)) {
        // get(id [, options])
        id = first;
        options = second;
      } else if (_Array$isArray$1(first)) {
        // get(ids [, options])
        ids = first;
        options = second;
      } else {
        // get([, options])
        options = first;
      }
      // determine the return type
      var returnType = options && options.returnType === "Object" ? "Object" : "Array";
      // @TODO: WTF is this? Or am I missing something?
      // var returnType
      // if (options && options.returnType) {
      //   var allowedValues = ['Array', 'Object']
      //   returnType =
      //     allowedValues.indexOf(options.returnType) == -1
      //       ? 'Array'
      //       : options.returnType
      // } else {
      //   returnType = 'Array'
      // }
      // build options
      var filter = options && _filterInstanceProperty(options);
      var items = [];
      var item = undefined;
      var itemIds = undefined;
      var itemId = undefined;
      // convert items
      if (id != null) {
        // return a single item
        item = this._data.get(id);
        if (item && filter && !filter(item)) {
          item = undefined;
        }
      } else if (ids != null) {
        // return a subset of items
        for (var i = 0, len = ids.length; i < len; i++) {
          item = this._data.get(ids[i]);
          if (item != null && (!filter || filter(item))) {
            items.push(item);
          }
        }
      } else {
        var _context20;
        // return all items
        itemIds = _toConsumableArray(_keysInstanceProperty(_context20 = this._data).call(_context20));
        for (var _i = 0, _len2 = itemIds.length; _i < _len2; _i++) {
          itemId = itemIds[_i];
          item = this._data.get(itemId);
          if (item != null && (!filter || filter(item))) {
            items.push(item);
          }
        }
      }
      // order the results
      if (options && options.order && id == undefined) {
        this._sort(items, options.order);
      }
      // filter fields of the items
      if (options && options.fields) {
        var fields = options.fields;
        if (id != undefined && item != null) {
          item = this._filterFields(item, fields);
        } else {
          for (var _i2 = 0, _len3 = items.length; _i2 < _len3; _i2++) {
            items[_i2] = this._filterFields(items[_i2], fields);
          }
        }
      }
      // return the results
      if (returnType == "Object") {
        var result = {};
        for (var _i3 = 0, _len4 = items.length; _i3 < _len4; _i3++) {
          var resultant = items[_i3];
          // @TODO: Shoudn't this be this._fieldId?
          // result[resultant.id] = resultant
          var _id2 = resultant[this._idProp];
          result[_id2] = resultant;
        }
        return result;
      } else {
        if (id != null) {
          var _item;
          // a single item
          return (_item = item) !== null && _item !== void 0 ? _item : null;
        } else {
          // just return our array
          return items;
        }
      }
    }
    /** @inheritDoc */
  }, {
    key: "getIds",
    value: function getIds(options) {
      var data = this._data;
      var filter = options && _filterInstanceProperty(options);
      var order = options && options.order;
      var itemIds = _toConsumableArray(_keysInstanceProperty(data).call(data));
      var ids = [];
      if (filter) {
        // get filtered items
        if (order) {
          // create ordered list
          var items = [];
          for (var i = 0, len = itemIds.length; i < len; i++) {
            var id = itemIds[i];
            var item = this._data.get(id);
            if (item != null && filter(item)) {
              items.push(item);
            }
          }
          this._sort(items, order);
          for (var _i4 = 0, _len5 = items.length; _i4 < _len5; _i4++) {
            ids.push(items[_i4][this._idProp]);
          }
        } else {
          // create unordered list
          for (var _i5 = 0, _len6 = itemIds.length; _i5 < _len6; _i5++) {
            var _id3 = itemIds[_i5];
            var _item2 = this._data.get(_id3);
            if (_item2 != null && filter(_item2)) {
              ids.push(_item2[this._idProp]);
            }
          }
        }
      } else {
        // get all items
        if (order) {
          // create an ordered list
          var _items = [];
          for (var _i6 = 0, _len7 = itemIds.length; _i6 < _len7; _i6++) {
            var _id4 = itemIds[_i6];
            _items.push(data.get(_id4));
          }
          this._sort(_items, order);
          for (var _i7 = 0, _len8 = _items.length; _i7 < _len8; _i7++) {
            ids.push(_items[_i7][this._idProp]);
          }
        } else {
          // create unordered list
          for (var _i8 = 0, _len9 = itemIds.length; _i8 < _len9; _i8++) {
            var _id5 = itemIds[_i8];
            var _item3 = data.get(_id5);
            if (_item3 != null) {
              ids.push(_item3[this._idProp]);
            }
          }
        }
      }
      return ids;
    }
    /** @inheritDoc */
  }, {
    key: "getDataSet",
    value: function getDataSet() {
      return this;
    }
    /** @inheritDoc */
  }, {
    key: "forEach",
    value: function forEach(callback, options) {
      var filter = options && _filterInstanceProperty(options);
      var data = this._data;
      var itemIds = _toConsumableArray(_keysInstanceProperty(data).call(data));
      if (options && options.order) {
        // execute forEach on ordered list
        var items = this.get(options);
        for (var i = 0, len = items.length; i < len; i++) {
          var item = items[i];
          var id = item[this._idProp];
          callback(item, id);
        }
      } else {
        // unordered
        for (var _i9 = 0, _len10 = itemIds.length; _i9 < _len10; _i9++) {
          var _id6 = itemIds[_i9];
          var _item4 = this._data.get(_id6);
          if (_item4 != null && (!filter || filter(_item4))) {
            callback(_item4, _id6);
          }
        }
      }
    }
    /** @inheritDoc */
  }, {
    key: "map",
    value: function map(callback, options) {
      var filter = options && _filterInstanceProperty(options);
      var mappedItems = [];
      var data = this._data;
      var itemIds = _toConsumableArray(_keysInstanceProperty(data).call(data));
      // convert and filter items
      for (var i = 0, len = itemIds.length; i < len; i++) {
        var id = itemIds[i];
        var item = this._data.get(id);
        if (item != null && (!filter || filter(item))) {
          mappedItems.push(callback(item, id));
        }
      }
      // order items
      if (options && options.order) {
        this._sort(mappedItems, options.order);
      }
      return mappedItems;
    }
    /**
     * Filter the fields of an item.
     *
     * @param item - The item whose fields should be filtered.
     * @param fields - The names of the fields that will be kept.
     * @typeParam K - Field name type.
     * @returns The item without any additional fields.
     */
  }, {
    key: "_filterFields",
    value: function _filterFields(item, fields) {
      var _context21;
      if (!item) {
        // item is null
        return item;
      }
      return _reduceInstanceProperty(_context21 = _Array$isArray$1(fields) ?
      // Use the supplied array
      fields :
      // Use the keys of the supplied object
      _Object$keys(fields)).call(_context21, function (filteredItem, field) {
        filteredItem[field] = item[field];
        return filteredItem;
      }, {});
    }
    /**
     * Sort the provided array with items.
     *
     * @param items - Items to be sorted in place.
     * @param order - A field name or custom sort function.
     * @typeParam T - The type of the items in the items array.
     */
  }, {
    key: "_sort",
    value: function _sort(items, order) {
      if (typeof order === "string") {
        // order by provided field name
        var name = order; // field name
        _sortInstanceProperty(items).call(items, function (a, b) {
          // @TODO: How to treat missing properties?
          var av = a[name];
          var bv = b[name];
          return av > bv ? 1 : av < bv ? -1 : 0;
        });
      } else if (typeof order === "function") {
        // order by sort function
        _sortInstanceProperty(items).call(items, order);
      } else {
        // TODO: extend order by an Object {field:string, direction:string}
        //       where direction can be 'asc' or 'desc'
        throw new TypeError("Order must be a function or a string");
      }
    }
    /**
     * Remove an item or multiple items by “reference” (only the id is used) or by id.
     *
     * The method ignores removal of non-existing items, and returns an array containing the ids of the items which are actually removed from the DataSet.
     *
     * After the items are removed, the DataSet will trigger an event `remove` for the removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * ## Example
     * ```javascript
     * // create a DataSet
     * const data = new vis.DataSet([
     *   { id: 1, text: 'item 1' },
     *   { id: 2, text: 'item 2' },
     *   { id: 3, text: 'item 3' }
     * ])
     *
     * // remove items
     * const ids = data.remove([2, { id: 3 }, 4])
     *
     * console.log(ids) // [2, 3]
     * ```
     *
     * @param id - One or more items or ids of items to be removed.
     * @param senderId - Sender id.
     * @returns The ids of the removed items.
     */
  }, {
    key: "remove",
    value: function remove(id, senderId) {
      var removedIds = [];
      var removedItems = [];
      // force everything to be an array for simplicity
      var ids = _Array$isArray$1(id) ? id : [id];
      for (var i = 0, len = ids.length; i < len; i++) {
        var item = this._remove(ids[i]);
        if (item) {
          var itemId = item[this._idProp];
          if (itemId != null) {
            removedIds.push(itemId);
            removedItems.push(item);
          }
        }
      }
      if (removedIds.length) {
        this._trigger("remove", {
          items: removedIds,
          oldData: removedItems
        }, senderId);
      }
      return removedIds;
    }
    /**
     * Remove an item by its id or reference.
     *
     * @param id - Id of an item or the item itself.
     * @returns The removed item if removed, null otherwise.
     */
  }, {
    key: "_remove",
    value: function _remove(id) {
      // @TODO: It origianlly returned the item although the docs say id.
      // The code expects the item, so probably an error in the docs.
      var ident;
      // confirm the id to use based on the args type
      if (isId(id)) {
        ident = id;
      } else if (id && _typeof$1(id) === "object") {
        ident = id[this._idProp]; // look for the identifier field using ._idProp
      }
      // do the removing if the item is found
      if (ident != null && this._data.has(ident)) {
        var item = this._data.get(ident) || null;
        this._data.delete(ident);
        --this.length;
        return item;
      }
      return null;
    }
    /**
     * Clear the entire data set.
     *
     * After the items are removed, the {@link DataSet} will trigger an event `remove` for all removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * @param senderId - Sender id.
     * @returns removedIds - The ids of all removed items.
     */
  }, {
    key: "clear",
    value: function clear(senderId) {
      var _context22;
      var ids = _toConsumableArray(_keysInstanceProperty(_context22 = this._data).call(_context22));
      var items = [];
      for (var i = 0, len = ids.length; i < len; i++) {
        items.push(this._data.get(ids[i]));
      }
      this._data.clear();
      this.length = 0;
      this._trigger("remove", {
        items: ids,
        oldData: items
      }, senderId);
      return ids;
    }
    /**
     * Find the item with maximum value of a specified field.
     *
     * @param field - Name of the property that should be searched for max value.
     * @returns Item containing max value, or null if no items.
     */
  }, {
    key: "max",
    value: function max(field) {
      var _context23;
      var max = null;
      var maxField = null;
      var _iterator11 = _createForOfIteratorHelper(_valuesInstanceProperty(_context23 = this._data).call(_context23)),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var item = _step11.value;
          var itemField = item[field];
          if (typeof itemField === "number" && (maxField == null || itemField > maxField)) {
            max = item;
            maxField = itemField;
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      return max || null;
    }
    /**
     * Find the item with minimum value of a specified field.
     *
     * @param field - Name of the property that should be searched for min value.
     * @returns Item containing min value, or null if no items.
     */
  }, {
    key: "min",
    value: function min(field) {
      var _context24;
      var min = null;
      var minField = null;
      var _iterator12 = _createForOfIteratorHelper(_valuesInstanceProperty(_context24 = this._data).call(_context24)),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var item = _step12.value;
          var itemField = item[field];
          if (typeof itemField === "number" && (minField == null || itemField < minField)) {
            min = item;
            minField = itemField;
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      return min || null;
    }
    /**
     * Find all distinct values of a specified field
     *
     * @param prop - The property name whose distinct values should be returned.
     * @returns Unordered array containing all distinct values. Items without specified property are ignored.
     */
  }, {
    key: "distinct",
    value: function distinct(prop) {
      var data = this._data;
      var itemIds = _toConsumableArray(_keysInstanceProperty(data).call(data));
      var values = [];
      var count = 0;
      for (var i = 0, len = itemIds.length; i < len; i++) {
        var id = itemIds[i];
        var item = data.get(id);
        var _value3 = item[prop];
        var exists = false;
        for (var j = 0; j < count; j++) {
          if (values[j] == _value3) {
            exists = true;
            break;
          }
        }
        if (!exists && _value3 !== undefined) {
          values[count] = _value3;
          count++;
        }
      }
      return values;
    }
    /**
     * Add a single item. Will fail when an item with the same id already exists.
     *
     * @param item - A new item to be added.
     * @returns Added item's id. An id is generated when it is not present in the item.
     */
  }, {
    key: "_addItem",
    value: function _addItem(item) {
      var fullItem = ensureFullItem(item, this._idProp);
      var id = fullItem[this._idProp];
      // check whether this id is already taken
      if (this._data.has(id)) {
        // item already exists
        throw new Error("Cannot add item: item with id " + id + " already exists");
      }
      this._data.set(id, fullItem);
      ++this.length;
      return id;
    }
    /**
     * Update a single item: merge with existing item.
     * Will fail when the item has no id, or when there does not exist an item with the same id.
     *
     * @param update - The new item
     * @returns The id of the updated item.
     */
  }, {
    key: "_updateItem",
    value: function _updateItem(update) {
      var id = update[this._idProp];
      if (id == null) {
        throw new Error("Cannot update item: item has no id (item: " + _JSON$stringify(update) + ")");
      }
      var item = this._data.get(id);
      if (!item) {
        // item doesn't exist
        throw new Error("Cannot update item: no item with id " + id + " found");
      }
      this._data.set(id, _objectSpread(_objectSpread({}, item), update));
      return id;
    }
    /** @inheritDoc */
  }, {
    key: "stream",
    value: function stream(ids) {
      if (ids) {
        var data = this._data;
        return new DataStream(_defineProperty({}, _Symbol$iterator2, /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
          var _iterator13, _step13, id, item;
          return _regeneratorRuntime.wrap(function _callee3$(_context25) {
            while (1) switch (_context25.prev = _context25.next) {
              case 0:
                _iterator13 = _createForOfIteratorHelper(ids);
                _context25.prev = 1;
                _iterator13.s();
              case 3:
                if ((_step13 = _iterator13.n()).done) {
                  _context25.next = 11;
                  break;
                }
                id = _step13.value;
                item = data.get(id);
                if (!(item != null)) {
                  _context25.next = 9;
                  break;
                }
                _context25.next = 9;
                return [id, item];
              case 9:
                _context25.next = 3;
                break;
              case 11:
                _context25.next = 16;
                break;
              case 13:
                _context25.prev = 13;
                _context25.t0 = _context25["catch"](1);
                _iterator13.e(_context25.t0);
              case 16:
                _context25.prev = 16;
                _iterator13.f();
                return _context25.finish(16);
              case 19:
              case "end":
                return _context25.stop();
            }
          }, _callee3, null, [[1, 13, 16, 19]]);
        })));
      } else {
        var _context26;
        return new DataStream(_defineProperty({}, _Symbol$iterator2, _bindInstanceProperty$1(_context26 = _entriesInstanceProperty(this._data)).call(_context26, this._data)));
      }
    }
  }]);
  return DataSet;
}(DataSetPart);
/**
 * DataView
 *
 * A DataView offers a filtered and/or formatted view on a DataSet. One can subscribe to changes in a DataView, and easily get filtered or formatted data without having to specify filters and field types all the time.
 *
 * ## Example
 * ```javascript
 * // create a DataSet
 * var data = new vis.DataSet();
 * data.add([
 *   {id: 1, text: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true},
 *   {id: 2, text: 'item 2', date: '2013-06-23', group: 2},
 *   {id: 3, text: 'item 3', date: '2013-06-25', group: 2},
 *   {id: 4, text: 'item 4'}
 * ]);
 *
 * // create a DataView
 * // the view will only contain items having a property group with value 1,
 * // and will only output fields id, text, and date.
 * var view = new vis.DataView(data, {
 *   filter: function (item) {
 *     return (item.group == 1);
 *   },
 *   fields: ['id', 'text', 'date']
 * });
 *
 * // subscribe to any change in the DataView
 * view.on('*', function (event, properties, senderId) {
 *   console.log('event', event, properties);
 * });
 *
 * // update an item in the data set
 * data.update({id: 2, group: 1});
 *
 * // get all ids in the view
 * var ids = view.getIds();
 * console.log('ids', ids); // will output [1, 2]
 *
 * // get all items in the view
 * var items = view.get();
 * ```
 *
 * @typeParam Item - Item type that may or may not have an id.
 * @typeParam IdProp - Name of the property that contains the id.
 */
var DataView = /*#__PURE__*/function (_DataSetPart2) {
  _inherits(DataView, _DataSetPart2);
  var _super2 = _createSuper(DataView);
  /**
   * Create a DataView.
   *
   * @param data - The instance containing data (directly or indirectly).
   * @param options - Options to configure this data view.
   */
  function DataView(data, options) {
    var _context27;
    var _this7;
    _classCallCheck(this, DataView);
    _this7 = _super2.call(this);
    /** @inheritDoc */
    _defineProperty(_assertThisInitialized(_this7), "length", 0);
    _defineProperty(_assertThisInitialized(_this7), "_listener", void 0);
    _defineProperty(_assertThisInitialized(_this7), "_data", void 0);
    // constructor → setData
    _defineProperty(_assertThisInitialized(_this7), "_ids", new _Set());
    // ids of the items currently in memory (just contains a boolean true)
    _defineProperty(_assertThisInitialized(_this7), "_options", void 0);
    _this7._options = options || {};
    _this7._listener = _bindInstanceProperty$1(_context27 = _this7._onEvent).call(_context27, _assertThisInitialized(_this7));
    _this7.setData(data);
    return _this7;
  }
  // TODO: implement a function .config() to dynamically update things like configured filter
  // and trigger changes accordingly
  /**
   * Set a data source for the view.
   *
   * @param data - The instance containing data (directly or indirectly).
   * @remarks
   * Note that when the data view is bound to a data set it won't be garbage
   * collected unless the data set is too. Use `dataView.setData(null)` or
   * `dataView.dispose()` to enable garbage collection before you lose the last
   * reference.
   */
  _createClass(DataView, [{
    key: "idProp",
    get:
    /** @inheritDoc */
    function get() {
      return this.getDataSet().idProp;
    }
  }, {
    key: "setData",
    value: function setData(data) {
      if (this._data) {
        // unsubscribe from current dataset
        if (this._data.off) {
          this._data.off("*", this._listener);
        }
        // trigger a remove of all items in memory
        var ids = this._data.getIds({
          filter: _filterInstanceProperty(this._options)
        });
        var items = this._data.get(ids);
        this._ids.clear();
        this.length = 0;
        this._trigger("remove", {
          items: ids,
          oldData: items
        });
      }
      if (data != null) {
        this._data = data;
        // trigger an add of all added items
        var _ids = this._data.getIds({
          filter: _filterInstanceProperty(this._options)
        });
        for (var i = 0, len = _ids.length; i < len; i++) {
          var id = _ids[i];
          this._ids.add(id);
        }
        this.length = _ids.length;
        this._trigger("add", {
          items: _ids
        });
      } else {
        this._data = new DataSet();
      }
      // subscribe to new dataset
      if (this._data.on) {
        this._data.on("*", this._listener);
      }
    }
    /**
     * Refresh the DataView.
     * Useful when the DataView has a filter function containing a variable parameter.
     */
  }, {
    key: "refresh",
    value: function refresh() {
      var ids = this._data.getIds({
        filter: _filterInstanceProperty(this._options)
      });
      var oldIds = _toConsumableArray(this._ids);
      var newIds = {};
      var addedIds = [];
      var removedIds = [];
      var removedItems = [];
      // check for additions
      for (var i = 0, len = ids.length; i < len; i++) {
        var id = ids[i];
        newIds[id] = true;
        if (!this._ids.has(id)) {
          addedIds.push(id);
          this._ids.add(id);
        }
      }
      // check for removals
      for (var _i10 = 0, _len11 = oldIds.length; _i10 < _len11; _i10++) {
        var _id7 = oldIds[_i10];
        var item = this._data.get(_id7);
        if (item == null) {
          // @TODO: Investigate.
          // Doesn't happen during tests or examples.
          // Is it really impossible or could it eventually happen?
          // How to handle it if it does? The types guarantee non-nullable items.
          console.error("If you see this, report it please.");
        } else if (!newIds[_id7]) {
          removedIds.push(_id7);
          removedItems.push(item);
          this._ids.delete(_id7);
        }
      }
      this.length += addedIds.length - removedIds.length;
      // trigger events
      if (addedIds.length) {
        this._trigger("add", {
          items: addedIds
        });
      }
      if (removedIds.length) {
        this._trigger("remove", {
          items: removedIds,
          oldData: removedItems
        });
      }
    }
    /** @inheritDoc */
  }, {
    key: "get",
    value: function get(first, second) {
      if (this._data == null) {
        return null;
      }
      // parse the arguments
      var ids = null;
      var options;
      if (isId(first) || _Array$isArray$1(first)) {
        ids = first;
        options = second;
      } else {
        options = first;
      }
      // extend the options with the default options and provided options
      var viewOptions = _Object$assign({}, this._options, options);
      // create a combined filter method when needed
      var thisFilter = _filterInstanceProperty(this._options);
      var optionsFilter = options && _filterInstanceProperty(options);
      if (thisFilter && optionsFilter) {
        viewOptions.filter = function (item) {
          return thisFilter(item) && optionsFilter(item);
        };
      }
      if (ids == null) {
        return this._data.get(viewOptions);
      } else {
        return this._data.get(ids, viewOptions);
      }
    }
    /** @inheritDoc */
  }, {
    key: "getIds",
    value: function getIds(options) {
      if (this._data.length) {
        var defaultFilter = _filterInstanceProperty(this._options);
        var optionsFilter = options != null ? _filterInstanceProperty(options) : null;
        var filter;
        if (optionsFilter) {
          if (defaultFilter) {
            filter = function filter(item) {
              return defaultFilter(item) && optionsFilter(item);
            };
          } else {
            filter = optionsFilter;
          }
        } else {
          filter = defaultFilter;
        }
        return this._data.getIds({
          filter: filter,
          order: options && options.order
        });
      } else {
        return [];
      }
    }
    /** @inheritDoc */
  }, {
    key: "forEach",
    value: function forEach(callback, options) {
      if (this._data) {
        var _context28;
        var defaultFilter = _filterInstanceProperty(this._options);
        var optionsFilter = options && _filterInstanceProperty(options);
        var filter;
        if (optionsFilter) {
          if (defaultFilter) {
            filter = function filter(item) {
              return defaultFilter(item) && optionsFilter(item);
            };
          } else {
            filter = optionsFilter;
          }
        } else {
          filter = defaultFilter;
        }
        _forEachInstanceProperty(_context28 = this._data).call(_context28, callback, {
          filter: filter,
          order: options && options.order
        });
      }
    }
    /** @inheritDoc */
  }, {
    key: "map",
    value: function map(callback, options) {
      if (this._data) {
        var _context29;
        var defaultFilter = _filterInstanceProperty(this._options);
        var optionsFilter = options && _filterInstanceProperty(options);
        var filter;
        if (optionsFilter) {
          if (defaultFilter) {
            filter = function filter(item) {
              return defaultFilter(item) && optionsFilter(item);
            };
          } else {
            filter = optionsFilter;
          }
        } else {
          filter = defaultFilter;
        }
        return _mapInstanceProperty(_context29 = this._data).call(_context29, callback, {
          filter: filter,
          order: options && options.order
        });
      } else {
        return [];
      }
    }
    /** @inheritDoc */
  }, {
    key: "getDataSet",
    value: function getDataSet() {
      return this._data.getDataSet();
    }
    /** @inheritDoc */
  }, {
    key: "stream",
    value: function stream(ids) {
      var _context30;
      return this._data.stream(ids || _defineProperty({}, _Symbol$iterator2, _bindInstanceProperty$1(_context30 = _keysInstanceProperty(this._ids)).call(_context30, this._ids)));
    }
    /**
     * Render the instance unusable prior to garbage collection.
     *
     * @remarks
     * The intention of this method is to help discover scenarios where the data
     * view is being used when the programmer thinks it has been garbage collected
     * already. It's stricter version of `dataView.setData(null)`.
     */
  }, {
    key: "dispose",
    value: function dispose() {
      var _this$_data;
      if ((_this$_data = this._data) !== null && _this$_data !== void 0 && _this$_data.off) {
        this._data.off("*", this._listener);
      }
      var message = "This data view has already been disposed of.";
      var replacement = {
        get: function get() {
          throw new Error(message);
        },
        set: function set() {
          throw new Error(message);
        },
        configurable: false
      };
      var _iterator14 = _createForOfIteratorHelper(_Reflect$ownKeys(DataView.prototype)),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var key = _step14.value;
          _Object$defineProperty$1(this, key, replacement);
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
    /**
     * Event listener. Will propagate all events from the connected data set to the subscribers of the DataView, but will filter the items and only trigger when there are changes in the filtered data set.
     *
     * @param event - The name of the event.
     * @param params - Parameters of the event.
     * @param senderId - Id supplied by the sender.
     */
  }, {
    key: "_onEvent",
    value: function _onEvent(event, params, senderId) {
      if (!params || !params.items || !this._data) {
        return;
      }
      var ids = params.items;
      var addedIds = [];
      var updatedIds = [];
      var removedIds = [];
      var oldItems = [];
      var updatedItems = [];
      var removedItems = [];
      switch (event) {
        case "add":
          // filter the ids of the added items
          for (var i = 0, len = ids.length; i < len; i++) {
            var id = ids[i];
            var item = this.get(id);
            if (item) {
              this._ids.add(id);
              addedIds.push(id);
            }
          }
          break;
        case "update":
          // determine the event from the views viewpoint: an updated
          // item can be added, updated, or removed from this view.
          for (var _i11 = 0, _len12 = ids.length; _i11 < _len12; _i11++) {
            var _id8 = ids[_i11];
            var _item5 = this.get(_id8);
            if (_item5) {
              if (this._ids.has(_id8)) {
                updatedIds.push(_id8);
                updatedItems.push(params.data[_i11]);
                oldItems.push(params.oldData[_i11]);
              } else {
                this._ids.add(_id8);
                addedIds.push(_id8);
              }
            } else {
              if (this._ids.has(_id8)) {
                this._ids.delete(_id8);
                removedIds.push(_id8);
                removedItems.push(params.oldData[_i11]);
              }
            }
          }
          break;
        case "remove":
          // filter the ids of the removed items
          for (var _i12 = 0, _len13 = ids.length; _i12 < _len13; _i12++) {
            var _id9 = ids[_i12];
            if (this._ids.has(_id9)) {
              this._ids.delete(_id9);
              removedIds.push(_id9);
              removedItems.push(params.oldData[_i12]);
            }
          }
          break;
      }
      this.length += addedIds.length - removedIds.length;
      if (addedIds.length) {
        this._trigger("add", {
          items: addedIds
        }, senderId);
      }
      if (updatedIds.length) {
        this._trigger("update", {
          items: updatedIds,
          oldData: oldItems,
          data: updatedItems
        }, senderId);
      }
      if (removedIds.length) {
        this._trigger("remove", {
          items: removedIds,
          oldData: removedItems
        }, senderId);
      }
    }
  }]);
  return DataView;
}(DataSetPart);
/**
 * Check that given value is compatible with Vis Data Set interface.
 *
 * @param idProp - The expected property to contain item id.
 * @param v - The value to be tested.
 * @returns True if all expected values and methods match, false otherwise.
 */
function isDataSetLike(idProp, v) {
  return _typeof$1(v) === "object" && v !== null && idProp === v.idProp && typeof v.add === "function" && typeof v.clear === "function" && typeof v.distinct === "function" && typeof _forEachInstanceProperty(v) === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof _mapInstanceProperty(v) === "function" && typeof v.max === "function" && typeof v.min === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.remove === "function" && typeof v.setOptions === "function" && typeof v.stream === "function" && typeof v.update === "function" && typeof v.updateOnly === "function";
}

/**
 * Check that given value is compatible with Vis Data View interface.
 *
 * @param idProp - The expected property to contain item id.
 * @param v - The value to be tested.
 * @returns True if all expected values and methods match, false otherwise.
 */
function isDataViewLike(idProp, v) {
  return _typeof$1(v) === "object" && v !== null && idProp === v.idProp && typeof _forEachInstanceProperty(v) === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof _mapInstanceProperty(v) === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.stream === "function" && isDataSetLike(idProp, v.getDataSet());
}

/**
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
  var newMax = this.max + val;

  // Note that following allows newMin === newMax.
  // This should be OK, since method expand() allows this also.
  if (newMin > newMax) {
    throw new Error("Passed expansion value makes range invalid");
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
var Range$1 = /*@__PURE__*/getDefaultExportFromCjs(Range_1);

/**
 * @class Filter
 * @param {DataGroup} dataGroup the data group
 * @param {number}  column             The index of the column to be filtered
 * @param {Graph3d} graph              The graph
 */
function Filter(dataGroup, column, graph) {
  this.dataGroup = dataGroup;
  this.column = column;
  this.graph = graph; // the parent graph

  this.index = undefined;
  this.value = undefined;

  // read all distinct values and select the first one
  this.values = dataGroup.getDistinctValues(this.column);
  if (_valuesInstanceProperty(this).length > 0) {
    this.selectValue(0);
  }

  // create an array with the filtered datapoints. this will be loaded afterwards
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
 *
 * @returns {string} label
 */
Filter.prototype.isLoaded = function () {
  return this.loaded;
};

/**
 * Return the loaded progress
 *
 * @returns {number} percentage between 0 and 100
 */
Filter.prototype.getLoadedProgress = function () {
  var len = _valuesInstanceProperty(this).length;
  var i = 0;
  while (this.dataPoints[i]) {
    i++;
  }
  return Math.round(i / len * 100);
};

/**
 * Return the label
 *
 * @returns {string} label
 */
Filter.prototype.getLabel = function () {
  return this.graph.filterLabel;
};

/**
 * Return the columnIndex of the filter
 *
 * @returns {number} columnIndex
 */
Filter.prototype.getColumn = function () {
  return this.column;
};

/**
 * Return the currently selected value. Returns undefined if there is no selection
 *
 * @returns {*} value
 */
Filter.prototype.getSelectedValue = function () {
  if (this.index === undefined) return undefined;
  return _valuesInstanceProperty(this)[this.index];
};

/**
 * Retrieve all values of the filter
 *
 * @returns {Array} values
 */
Filter.prototype.getValues = function () {
  return _valuesInstanceProperty(this);
};

/**
 * Retrieve one value of the filter
 *
 * @param {number}  index
 * @returns {*} value
 */
Filter.prototype.getValue = function (index) {
  if (index >= _valuesInstanceProperty(this).length) throw new Error("Index out of range");
  return _valuesInstanceProperty(this)[index];
};

/**
 * Retrieve the (filtered) dataPoints for the currently selected filter index
 *
 * @param {number} [index] (optional)
 * @returns {Array} dataPoints
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
    f.value = _valuesInstanceProperty(this)[index];
    var dataView = new DataView(this.dataGroup.getDataSet(), {
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
 * @param {Function} callback
 */
Filter.prototype.setOnLoadCallback = function (callback) {
  this.onLoadCallback = callback;
};

/**
 * Add a value to the list with available values for this filter
 * No double entries will be created.
 *
 * @param {number} index
 */
Filter.prototype.selectValue = function (index) {
  if (index >= _valuesInstanceProperty(this).length) throw new Error("Index out of range");
  this.index = index;
  this.value = _valuesInstanceProperty(this)[index];
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
  if (index < _valuesInstanceProperty(this).length) {
    // create a progress box
    if (frame.progress === undefined) {
      frame.progress = document.createElement("DIV");
      frame.progress.style.position = "absolute";
      frame.progress.style.color = "gray";
      frame.appendChild(frame.progress);
    }
    var progress = this.getLoadedProgress();
    frame.progress.innerHTML = "Loading animation... " + progress + "%";
    // TODO: this is no nice solution...
    frame.progress.style.bottom = 60 + "px"; // TODO: use height of slider
    frame.progress.style.left = 10 + "px";
    var me = this;
    _setTimeout(function () {
      me.loadInBackground(index + 1);
    }, 10);
    this.loaded = false;
  } else {
    this.loaded = true;

    // remove the progress box
    if (frame.progress !== undefined) {
      frame.removeChild(frame.progress);
      frame.progress = undefined;
    }
    if (this.onLoadCallback) this.onLoadCallback();
  }
};

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
 * @function Object() { [native code] } DataGroup
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
 * @returns {Array.<object>}
 */
DataGroup.prototype.initializeData = function (graph3d, rawData, style) {
  if (rawData === undefined) return;
  if (_Array$isArray$1(rawData)) {
    rawData = new DataSet(rawData);
  }
  var data;
  if (rawData instanceof DataSet || rawData instanceof DataView) {
    data = rawData.get();
  } else {
    throw new Error("Array, DataSet, or DataView expected");
  }
  if (data.length == 0) return;
  this.style = style;

  // unsubscribe from the dataTable
  if (this.dataSet) {
    this.dataSet.off("*", this._onChange);
  }
  this.dataSet = rawData;
  this.dataTable = data;

  // subscribe to changes in the dataset
  var me = this;
  this._onChange = function () {
    graph3d.setData(me.dataSet);
  };
  this.dataSet.on("*", this._onChange);

  // determine the location of x,y,z,value,filter columns
  this.colX = "x";
  this.colY = "y";
  this.colZ = "z";
  var withBars = graph3d.hasBars(style);

  // determine barWidth from data
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
  }

  // calculate minima and maxima
  this._initializeRange(data, this.colX, graph3d, withBars);
  this._initializeRange(data, this.colY, graph3d, withBars);
  this._initializeRange(data, this.colZ, graph3d, false);
  if (Object.prototype.hasOwnProperty.call(data[0], "style")) {
    this.colValue = "style";
    var valueRange = this.getColumnRange(data, this.colValue);
    this._setRangeDefaults(valueRange, graph3d.defaultValueMin, graph3d.defaultValueMax);
    this.valueRange = valueRange;
  } else {
    this.colValue = "z";
    this.valueRange = this.zRange;
  }

  // Initialize data filter if a filter column is provided
  var table = this.getDataTable();
  if (Object.prototype.hasOwnProperty.call(table[0], "filter")) {
    if (this.dataFilter === undefined) {
      this.dataFilter = new Filter(this, "filter", graph3d);
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
 * @param {'x'|'y'|'z'} column  The data column to process
 * @param {vis.Graph3d} graph3d Reference to the calling Graph3D instance;
 *                              required for access to settings
 * @returns {object}
 */
DataGroup.prototype._collectRangeSettings = function (column, graph3d) {
  var _context;
  var index = _indexOfInstanceProperty(_context = ["x", "y", "z"]).call(_context, column);
  if (index == -1) {
    throw new Error("Column '" + column + "' invalid");
  }
  var upper = column.toUpperCase();
  return {
    barWidth: this[column + "BarWidth"],
    min: graph3d["default" + upper + "Min"],
    max: graph3d["default" + upper + "Max"],
    step: graph3d["default" + upper + "Step"],
    range_label: column + "Range",
    // Name of instance field to write to
    step_label: column + "Step" // Name of instance field to write to
  };
};

/**
 * Initializes the settings per given column.
 *
 * TODO: if/when combined settings per axis defined, rewrite this.
 *
 * @private
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
  if (withBars && column != "z") {
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
 * @returns {Array} All distinct values in the given column data, sorted ascending.
 */
DataGroup.prototype.getDistinctValues = function (column, data) {
  if (data === undefined) {
    data = this.dataTable;
  }
  var values = [];
  for (var i = 0; i < data.length; i++) {
    var value = data[i][column] || 0;
    if (_indexOfInstanceProperty(values).call(values, value) === -1) {
      values.push(value);
    }
  }
  return _sortInstanceProperty(values).call(values, function (a, b) {
    return a - b;
  });
};

/**
 * Determine the smallest difference between the values for given
 * column in the passed data set.
 *
 * @param {DataSet|DataView|undefined} data   The data containing the items for the Graph
 * @param {'x'|'y'|'z'}                column The data column to process
 * @returns {number|null} Smallest difference value or
 *                        null, if it can't be determined.
 */
DataGroup.prototype.getSmallestDifference = function (data, column) {
  var values = this.getDistinctValues(data, column);

  // Get all the distinct diffs
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
 * @returns {Range} A Range instance with min/max members properly set.
 */
DataGroup.prototype.getColumnRange = function (data, column) {
  var range = new Range$1();

  // Adjust the range so that it covers all values in the passed data elements.
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
  }

  // This is the original way that the default min/max values were adjusted.
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
 *
 * @param {Array.<object>} data
 * @returns {Array.<object>}
 */
DataGroup.prototype.getDataPoints = function (data) {
  var dataPoints = [];
  for (var i = 0; i < data.length; i++) {
    var point = new Point3d$1();
    point.x = data[i][this.colX] || 0;
    point.y = data[i][this.colY] || 0;
    point.z = data[i][this.colZ] || 0;
    point.data = data[i];
    point.value = data[i][this.colValue] || 0;
    var obj = {};
    obj.point = point;
    obj.bottom = new Point3d$1(point.x, point.y, this.zRange.min);
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
 *
 * @param {Array.<object>} data
 * @returns {Array.<object>}
 * @private
 */
DataGroup.prototype.initDataAsMatrix = function (data) {
  // TODO: store the created matrix dataPoints in the filters instead of
  //       reloading each time.
  var x, y, i, obj;

  // create two lists with all present x and y values
  var dataX = this.getDistinctValues(this.colX, data);
  var dataY = this.getDistinctValues(this.colY, data);
  var dataPoints = this.getDataPoints(data);

  // create a grid, a 2d matrix, with all values.
  var dataMatrix = []; // temporary data matrix
  for (i = 0; i < dataPoints.length; i++) {
    obj = dataPoints[i];

    // TODO: implement Array().indexOf() for Internet Explorer
    var xIndex = _indexOfInstanceProperty(dataX).call(dataX, obj.point.x);
    var yIndex = _indexOfInstanceProperty(dataY).call(dataY, obj.point.y);
    if (dataMatrix[xIndex] === undefined) {
      dataMatrix[xIndex] = [];
    }
    dataMatrix[xIndex][yIndex] = obj;
  }

  // fill in the pointers to the neighbors.
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
  return dataFilter.getLabel() + ": " + dataFilter.getSelectedValue();
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
  if (this.style === STYLE.GRID || this.style === STYLE.SURFACE) {
    dataPoints = this.initDataAsMatrix(data);
  } else {
    // 'dot', 'dot-line', etc.
    dataPoints = this.getDataPoints(data);
    if (this.style === STYLE.LINE) {
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

/// enumerate the available styles
Graph3d.STYLE = STYLE;

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
  width: "400px",
  height: "400px",
  filterLabel: "time",
  legendLabel: "value",
  xLabel: "x",
  yLabel: "y",
  zLabel: "z",
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
  showGrayBottom: false,
  showGrid: true,
  showPerspective: true,
  showShadow: false,
  showSurfaceGrid: true,
  keepAspectRatio: true,
  rotateAxisLabels: true,
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
  axisFontSize: 14,
  axisFontType: "arial",
  axisColor: "#4D4D4D",
  gridColor: "#D3D3D3",
  xCenter: "55%",
  yCenter: "50%",
  style: Graph3d.STYLE.DOT,
  tooltip: false,
  tooltipDelay: 300,
  // milliseconds

  tooltipStyle: {
    content: {
      padding: "10px",
      border: "1px solid #4d4d4d",
      color: "#1a1a1a",
      background: "rgba(255,255,255,0.7)",
      borderRadius: "2px",
      boxShadow: "5px 5px 10px rgba(128,128,128,0.5)"
    },
    line: {
      height: "40px",
      width: "0",
      borderLeft: "1px solid #4d4d4d",
      pointerEvents: "none"
    },
    dot: {
      height: "0",
      width: "0",
      border: "5px solid #4d4d4d",
      borderRadius: "5px",
      pointerEvents: "none"
    }
  },
  dataColor: {
    fill: "#7DC1FF",
    stroke: "#3267D2",
    strokeWidth: 1 // px
  },

  surfaceColors: autoByDefault,
  colormap: autoByDefault,
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
};

// -----------------------------------------------------------------------------
// Class Graph3d
// -----------------------------------------------------------------------------

/**
 * Graph3d displays data in 3d.
 *
 * Graph3d is developed in javascript as a Google Visualization Chart.
 *
 * @function Object() { [native code] } Graph3d
 * @param {Element} container   The DOM element in which the Graph3d will
 *                              be created. Normally a div element.
 * @param {DataSet | DataView | Array} [data]
 * @param {object} [options]
 */
function Graph3d(container, data, options) {
  if (!(this instanceof Graph3d)) {
    throw new SyntaxError("Constructor must be called with the new operator");
  }

  // create variables and set default values
  this.containerElement = container;
  this.dataGroup = new DataGroup();
  this.dataPoints = null; // The table with point objects

  // create a frame and canvas
  this.create();
  setDefaults(Graph3d.DEFAULTS, this);

  // the column indexes
  this.colX = undefined;
  this.colY = undefined;
  this.colZ = undefined;
  this.colValue = undefined;

  // TODO: customize axis range

  // apply options (also when undefined)
  this.setOptions(options);

  // apply data
  this.setData(data);
}

// Extend Graph3d with an Emitter mixin
Emitter(Graph3d.prototype);

/**
 * Calculate the scaling values, dependent on the range in x, y, and z direction
 */
Graph3d.prototype._setScale = function () {
  this.scale = new Point3d$1(1 / this.xRange.range(), 1 / this.yRange.range(), 1 / this.zRange.range());

  // keep aspect ration between x and y scale if desired
  if (this.keepAspectRatio) {
    if (this.scale.x < this.scale.y) {
      //noinspection JSSuspiciousNameCombination
      this.scale.y = this.scale.x;
    } else {
      //noinspection JSSuspiciousNameCombination
      this.scale.x = this.scale.y;
    }
  }

  // scale the vertical axis
  this.scale.z *= this.verticalRatio;
  // TODO: can this be automated? verticalRatio?

  // determine scale for (optional) value
  if (this.valueRange !== undefined) {
    this.scale.value = 1 / this.valueRange.range();
  }

  // position the camera arm
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
  return new Point3d$1(dx, dy, dz);
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
    dz = translation.z;

  // calculate position on screen from translation
  var bx;
  var by;
  if (this.showPerspective) {
    bx = (dx - ex) * (ez / dz);
    by = (dy - ey) * (ez / dz);
  } else {
    bx = dx * -(ez / this.camera.getArmLength());
    by = dy * -(ez / this.camera.getArmLength());
  }

  // shift and scale the point to the center of the screen
  // use the width of the graph to scale both horizontally and vertically.
  return new Point2d$1(this.currentXCenter + bx * this.frame.canvas.clientWidth, this.currentYCenter - by * this.frame.canvas.clientWidth);
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
    point.screen = this._convertTranslationToScreen(point.trans);

    // calculate the translation of the point at the bottom (needed for sorting)
    var transBottom = this._convertPointToTranslation(point.bottom);
    point.dist = this.showPerspective ? transBottom.length() : -transBottom.z;
  }

  // sort the points on depth of their (x,y) position (not on z)
  var sortDepth = function sortDepth(a, b) {
    return b.dist - a.dist;
  };
  _sortInstanceProperty(points).call(points, sortDepth);
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
  this.valueRange = dg.valueRange;

  // Values currently needed but which need to be sorted out for
  // the multiple graph case.
  this.xStep = dg.xStep;
  this.yStep = dg.yStep;
  this.zStep = dg.zStep;
  this.xBarWidth = dg.xBarWidth;
  this.yBarWidth = dg.yBarWidth;
  this.colX = dg.colX;
  this.colY = dg.colY;
  this.colZ = dg.colZ;
  this.colValue = dg.colValue;

  // set the scale dependent on the ranges.
  this._setScale();
};

/**
 * Return all data values as a list of Point3d objects
 *
 * @param {vis.DataSet} data
 * @returns {Array.<object>}
 */
Graph3d.prototype.getDataPoints = function (data) {
  var dataPoints = [];
  for (var i = 0; i < data.length; i++) {
    var point = new Point3d$1();
    point.x = data[i][this.colX] || 0;
    point.y = data[i][this.colY] || 0;
    point.z = data[i][this.colZ] || 0;
    point.data = data[i];
    point.value = data[i][this.colValue] || 0;
    var obj = {};
    obj.point = point;
    obj.bottom = new Point3d$1(point.x, point.y, this.zRange.min);
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
    dataPoints = this.getDataPoints(data);

    // create a grid, a 2d matrix, with all values.
    var dataMatrix = []; // temporary data matrix
    for (i = 0; i < dataPoints.length; i++) {
      obj = dataPoints[i];

      // TODO: implement Array().indexOf() for Internet Explorer
      var xIndex = _indexOfInstanceProperty(dataX).call(dataX, obj.point.x);
      var yIndex = _indexOfInstanceProperty(dataY).call(dataY, obj.point.y);
      if (dataMatrix[xIndex] === undefined) {
        dataMatrix[xIndex] = [];
      }
      dataMatrix[xIndex][yIndex] = obj;
    }

    // fill in the pointers to the neighbors.
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
  this.frame = document.createElement("div");
  this.frame.style.position = "relative";
  this.frame.style.overflow = "hidden";

  // create the graph canvas (HTML canvas element)
  this.frame.canvas = document.createElement("canvas");
  this.frame.canvas.style.position = "relative";
  this.frame.appendChild(this.frame.canvas);
  //if (!this.frame.canvas.getContext) {
  {
    var noCanvas = document.createElement("DIV");
    noCanvas.style.color = "red";
    noCanvas.style.fontWeight = "bold";
    noCanvas.style.padding = "10px";
    noCanvas.innerHTML = "Error: your browser does not support HTML canvas";
    this.frame.canvas.appendChild(noCanvas);
  }
  this.frame.filter = document.createElement("div");
  _filterInstanceProperty(this.frame).style.position = "absolute";
  _filterInstanceProperty(this.frame).style.bottom = "0px";
  _filterInstanceProperty(this.frame).style.left = "0px";
  _filterInstanceProperty(this.frame).style.width = "100%";
  this.frame.appendChild(_filterInstanceProperty(this.frame));

  // add event listeners to handle moving and zooming the contents
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
  };
  // TODO: these events are never cleaned up... can give a 'memory leakage'

  addEventListener(this.frame.canvas, "mousedown", onmousedown);
  addEventListener(this.frame.canvas, "touchstart", ontouchstart);
  addEventListener(this.frame.canvas, "mousewheel", onmousewheel);
  addEventListener(this.frame.canvas, "mousemove", ontooltip);
  addEventListener(this.frame.canvas, "click", onclick);

  // add the new graph to the container element
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
  this.frame.canvas.style.width = "100%";
  this.frame.canvas.style.height = "100%";
  this.frame.canvas.width = this.frame.canvas.clientWidth;
  this.frame.canvas.height = this.frame.canvas.clientHeight;

  // adjust with for margin
  _filterInstanceProperty(this.frame).style.width = this.frame.canvas.clientWidth - 2 * 10 + "px";
};

/**
 * Start playing the animation, if requested and filter present. Only applicable
 * when animation data is available.
 */
Graph3d.prototype.animationStart = function () {
  // start animation when option is true
  if (!this.animationAutoStart || !this.dataGroup.dataFilter) return;
  if (!_filterInstanceProperty(this.frame) || !_filterInstanceProperty(this.frame).slider) throw new Error("No animation available");
  _filterInstanceProperty(this.frame).slider.play();
};

/**
 * Stop animation
 */
Graph3d.prototype.animationStop = function () {
  if (!_filterInstanceProperty(this.frame) || !_filterInstanceProperty(this.frame).slider) return;
  _filterInstanceProperty(this.frame).slider.stop();
};

/**
 * Resize the center position based on the current values in this.xCenter
 * and this.yCenter (which are strings with a percentage or a value
 * in pixels). The center positions are the variables this.currentXCenter
 * and this.currentYCenter
 */
Graph3d.prototype._resizeCenter = function () {
  // calculate the horizontal center position
  if (this.xCenter.charAt(this.xCenter.length - 1) === "%") {
    this.currentXCenter = _parseFloat$1(this.xCenter) / 100 * this.frame.canvas.clientWidth;
  } else {
    this.currentXCenter = _parseFloat$1(this.xCenter); // supposed to be in px
  }

  // calculate the vertical center position
  if (this.yCenter.charAt(this.yCenter.length - 1) === "%") {
    this.currentYCenter = _parseFloat$1(this.yCenter) / 100 * (this.frame.canvas.clientHeight - _filterInstanceProperty(this.frame).clientHeight);
  } else {
    this.currentYCenter = _parseFloat$1(this.yCenter); // supposed to be in px
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
 * @param {object} options
 */
Graph3d.prototype.setOptions = function (options) {
  if (options === undefined) return;
  var errorFound = Validator.validate(options, allOptions);
  if (errorFound === true) {
    console.error("%cErrors have been found in the supplied options object.", VALIDATOR_PRINT_STYLE);
  }
  this.animationStop();
  setOptions(options, this);
  this.setPointDrawingMethod();
  this._setSize(this.width, this.height);
  this.setAxisLabelMethod();
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
      method = this._redrawBarGraphPoint;
      break;
    case Graph3d.STYLE.BARCOLOR:
      method = this._redrawBarColorGraphPoint;
      break;
    case Graph3d.STYLE.BARSIZE:
      method = this._redrawBarSizeGraphPoint;
      break;
    case Graph3d.STYLE.DOT:
      method = this._redrawDotGraphPoint;
      break;
    case Graph3d.STYLE.DOTLINE:
      method = this._redrawDotLineGraphPoint;
      break;
    case Graph3d.STYLE.DOTCOLOR:
      method = this._redrawDotColorGraphPoint;
      break;
    case Graph3d.STYLE.DOTSIZE:
      method = this._redrawDotSizeGraphPoint;
      break;
    case Graph3d.STYLE.SURFACE:
      method = this._redrawSurfaceGraphPoint;
      break;
    case Graph3d.STYLE.GRID:
      method = this._redrawGridGraphPoint;
      break;
    case Graph3d.STYLE.LINE:
      method = this._redrawLineGraphPoint;
      break;
    default:
      throw new Error("Can not determine point drawing method " + "for graph style '" + this.style + "'");
  }
  this._pointDrawingMethod = method;
};

/**
 * Determine which functions to use to draw axis labels.
 */
Graph3d.prototype.setAxisLabelMethod = function () {
  if (this.rotateAxisLabels) {
    this._drawAxisLabelX = this.drawAxisLabelXRotate;
    this._drawAxisLabelY = this.drawAxisLabelYRotate;
    this._drawAxisLabelZ = this.drawAxisLabelZRotate;
  } else {
    this._drawAxisLabelX = this.drawAxisLabelX;
    this._drawAxisLabelY = this.drawAxisLabelY;
    this._drawAxisLabelZ = this.drawAxisLabelZ;
  }
};

/**
 * Redraw the Graph.
 */
Graph3d.prototype.redraw = function () {
  if (this.dataPoints === undefined) {
    throw new Error("Graph data not initialized");
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
  var ctx = canvas.getContext("2d");
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  return ctx;
};

/**
 * Clear the canvas before redrawing
 */
Graph3d.prototype._redrawClear = function () {
  var canvas = this.frame.canvas;
  var ctx = canvas.getContext("2d");
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
    var dotSize = this._dotSize();
    //width =  dotSize / 2 + dotSize * 2;
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
  }

  // Do not draw legend when graph style does not support
  if (this.style === Graph3d.STYLE.LINE || this.style === Graph3d.STYLE.BARSIZE //TODO add legend support for BARSIZE
  ) {
    return;
  }

  // Legend types - size and color. Determine if size legend.
  var isSizeLegend = this.style === Graph3d.STYLE.BARSIZE || this.style === Graph3d.STYLE.DOTSIZE;

  // Legend is either tracking z values or style values. This flag if false means use z values.
  var isValueLegend = this.style === Graph3d.STYLE.DOTSIZE || this.style === Graph3d.STYLE.DOTCOLOR || this.style === Graph3d.STYLE.SURFACE || this.style === Graph3d.STYLE.BARCOLOR;
  var height = Math.max(this.frame.clientHeight * 0.25, 100);
  var top = this.margin;
  var width = this._getLegendWidth(); // px - overwritten by size legend
  var right = this.frame.clientWidth - this.margin;
  var left = right - width;
  var bottom = top + height;
  var ctx = this._getContext();
  ctx.lineWidth = 1;
  ctx.font = "14px arial"; // TODO: put in options

  if (isSizeLegend === false) {
    // draw the color bar
    var ymin = 0;
    var ymax = height; // Todo: make height customizable
    var y;
    for (y = ymin; y < ymax; y++) {
      // Need (1 - x) because y runs from top to bottom:
      var f = 1 - (y - ymin) / (ymax - ymin);
      var color = this._colormap(f, 1);
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
    ctx.fillStyle = _fillInstanceProperty(this.dataColor);
    ctx.beginPath();
    ctx.moveTo(left, top);
    ctx.lineTo(right, top);
    ctx.lineTo(left + widthMin, bottom);
    ctx.lineTo(left, bottom);
    ctx.closePath();
    _fillInstanceProperty(ctx).call(ctx);
    ctx.stroke();
  }

  // print value text along the legend edge
  var gridLineLen = 5; // px

  var legendMin = isValueLegend ? this.valueRange.min : this.zRange.min;
  var legendMax = isValueLegend ? this.valueRange.max : this.zRange.max;
  var step = new StepNumber$1(legendMin, legendMax, (legendMax - legendMin) / 5, true);
  step.start(true);
  while (!step.end()) {
    var _y = bottom - (step.getCurrent() - legendMin) / (legendMax - legendMin) * height;
    var from = new Point2d$1(left - gridLineLen, _y);
    var to = new Point2d$1(left, _y);
    this._line(ctx, from, to);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.axisColor;
    ctx.fillText(step.getCurrent(), left - 2 * gridLineLen, _y);
    step.next();
  }
  ctx.textAlign = "right";
  ctx.textBaseline = "top";
  var label = this.legendLabel;
  ctx.fillText(label, right, bottom + this.margin);
};

/**
 * Redraw the filter
 */
Graph3d.prototype._redrawFilter = function () {
  var dataFilter = this.dataGroup.dataFilter;
  var filter = _filterInstanceProperty(this.frame);
  filter.innerHTML = "";
  if (!dataFilter) {
    filter.slider = undefined;
    return;
  }
  var options = {
    visible: this.showAnimationControls
  };
  var slider = new Slider(filter, options);
  filter.slider = slider;

  // TODO: css here is not nice here...
  filter.style.padding = "10px";
  //this.frame.filter.style.backgroundColor = '#EFEFEF';

  slider.setValues(_valuesInstanceProperty(dataFilter));
  slider.setPlayInterval(this.animationInterval);

  // create an event handler
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
  if (_filterInstanceProperty(this.frame).slider !== undefined) {
    _filterInstanceProperty(this.frame).slider.redraw();
  }
};

/**
 * Redraw common information
 */
Graph3d.prototype._redrawInfo = function () {
  var info = this.dataGroup.getInfo();
  if (info === undefined) return;
  var ctx = this._getContext();
  ctx.font = "14px arial"; // TODO: put in options
  ctx.lineStyle = "gray";
  ctx.fillStyle = "gray";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
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
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    point2d.y += yMargin;
  } else if (Math.sin(armAngle * 2) < 0) {
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
  } else {
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
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
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    point2d.y += yMargin;
  } else if (Math.sin(armAngle * 2) > 0) {
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
  } else {
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
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
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  ctx.fillStyle = this.axisColor;
  ctx.fillText(text, point2d.x - offset, point2d.y);
};

/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {vis.Point3d} point3d
 * @param {string} text
 * @param {number} armAngle
 * @param {number} [yMargin=0]
 */
Graph3d.prototype.drawAxisLabelXRotate = function (ctx, point3d, text, armAngle, yMargin) {
  var point2d = this._convert3Dto2D(point3d);
  if (Math.cos(armAngle * 2) > 0) {
    ctx.save();
    ctx.translate(point2d.x, point2d.y);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, 0, 0);
    ctx.restore();
  } else if (Math.sin(armAngle * 2) < 0) {
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, point2d.x, point2d.y);
  } else {
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, point2d.x, point2d.y);
  }
};

/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {vis.Point3d} point3d
 * @param {string} text
 * @param {number} armAngle
 * @param {number} [yMargin=0]
 */
Graph3d.prototype.drawAxisLabelYRotate = function (ctx, point3d, text, armAngle, yMargin) {
  var point2d = this._convert3Dto2D(point3d);
  if (Math.cos(armAngle * 2) < 0) {
    ctx.save();
    ctx.translate(point2d.x, point2d.y);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, 0, 0);
    ctx.restore();
  } else if (Math.sin(armAngle * 2) > 0) {
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, point2d.x, point2d.y);
  } else {
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, point2d.x, point2d.y);
  }
};

/**
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {vis.Point3d} point3d
 * @param {string} text
 * @param {number} [offset=0]
 */
Graph3d.prototype.drawAxisLabelZRotate = function (ctx, point3d, text, offset) {
  if (offset === undefined) {
    offset = 0;
  }
  var point2d = this._convert3Dto2D(point3d);
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
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
  var ctx = this._getContext();
  var from, to, step, prettyStep, text, xText, yText, zText, offset, xOffset, yOffset;

  // TODO: get the actual rendered style of the containerElement
  //ctx.font = this.containerElement.style.font;
  //ctx.font = 24 / this.camera.getArmLength() + 'px arial';
  ctx.font = this.axisFontSize / this.camera.getArmLength() + "px " + this.axisFontType;

  // calculate the length for the short grid lines
  var gridLenX = 0.025 / this.scale.x;
  var gridLenY = 0.025 / this.scale.y;
  var textMargin = 5 / this.camera.getArmLength(); // px
  var armAngle = this.camera.getArmRotation().horizontal;
  var armVector = new Point2d$1(Math.cos(armAngle), Math.sin(armAngle));
  var xRange = this.xRange;
  var yRange = this.yRange;
  var zRange = this.zRange;
  var point3d;

  // draw x-grid lines
  ctx.lineWidth = 1;
  prettyStep = this.defaultXStep === undefined;
  step = new StepNumber$1(xRange.min, xRange.max, this.xStep, prettyStep);
  step.start(true);
  while (!step.end()) {
    var x = step.getCurrent();
    if (this.showGrid) {
      from = new Point3d$1(x, yRange.min, zRange.min);
      to = new Point3d$1(x, yRange.max, zRange.min);
      this._line3d(ctx, from, to, this.gridColor);
    } else if (this.showXAxis) {
      from = new Point3d$1(x, yRange.min, zRange.min);
      to = new Point3d$1(x, yRange.min + gridLenX, zRange.min);
      this._line3d(ctx, from, to, this.axisColor);
      from = new Point3d$1(x, yRange.max, zRange.min);
      to = new Point3d$1(x, yRange.max - gridLenX, zRange.min);
      this._line3d(ctx, from, to, this.axisColor);
    }
    if (this.showXAxis) {
      yText = armVector.x > 0 ? yRange.min : yRange.max;
      point3d = new Point3d$1(x, yText, zRange.min);
      var msg = "  " + this.xValueLabel(x) + "  ";
      this._drawAxisLabelX.call(this, ctx, point3d, msg, armAngle, textMargin);
    }
    step.next();
  }

  // draw y-grid lines
  ctx.lineWidth = 1;
  prettyStep = this.defaultYStep === undefined;
  step = new StepNumber$1(yRange.min, yRange.max, this.yStep, prettyStep);
  step.start(true);
  while (!step.end()) {
    var y = step.getCurrent();
    if (this.showGrid) {
      from = new Point3d$1(xRange.min, y, zRange.min);
      to = new Point3d$1(xRange.max, y, zRange.min);
      this._line3d(ctx, from, to, this.gridColor);
    } else if (this.showYAxis) {
      from = new Point3d$1(xRange.min, y, zRange.min);
      to = new Point3d$1(xRange.min + gridLenY, y, zRange.min);
      this._line3d(ctx, from, to, this.axisColor);
      from = new Point3d$1(xRange.max, y, zRange.min);
      to = new Point3d$1(xRange.max - gridLenY, y, zRange.min);
      this._line3d(ctx, from, to, this.axisColor);
    }
    if (this.showYAxis) {
      xText = armVector.y > 0 ? xRange.min : xRange.max;
      point3d = new Point3d$1(xText, y, zRange.min);
      var _msg = "  " + this.yValueLabel(y) + "  ";
      this._drawAxisLabelY.call(this, ctx, point3d, _msg, armAngle, textMargin);
    }
    step.next();
  }

  // draw z-grid lines and axis
  if (this.showZAxis) {
    ctx.lineWidth = 1;
    prettyStep = this.defaultZStep === undefined;
    step = new StepNumber$1(zRange.min, zRange.max, this.zStep, prettyStep);
    step.start(true);
    xText = armVector.x > 0 ? xRange.min : xRange.max;
    yText = armVector.y < 0 ? yRange.min : yRange.max;
    while (!step.end()) {
      var z = step.getCurrent();

      // TODO: make z-grid lines really 3d?
      var from3d = new Point3d$1(xText, yText, z);
      var from2d = this._convert3Dto2D(from3d);
      to = new Point2d$1(from2d.x - textMargin, from2d.y);
      this._line(ctx, from2d, to, this.axisColor);
      var _msg2 = this.zValueLabel(z) + " ";
      this._drawAxisLabelZ.call(this, ctx, from3d, _msg2, 5);
      step.next();
    }
    ctx.lineWidth = 1;
    from = new Point3d$1(xText, yText, zRange.min);
    to = new Point3d$1(xText, yText, zRange.max);
    this._line3d(ctx, from, to, this.axisColor);
  }

  // draw x-axis
  if (this.showXAxis) {
    var xMin2d;
    var xMax2d;
    ctx.lineWidth = 1;

    // line at yMin
    xMin2d = new Point3d$1(xRange.min, yRange.min, zRange.min);
    xMax2d = new Point3d$1(xRange.max, yRange.min, zRange.min);
    this._line3d(ctx, xMin2d, xMax2d, this.axisColor);
    // line at ymax
    xMin2d = new Point3d$1(xRange.min, yRange.max, zRange.min);
    xMax2d = new Point3d$1(xRange.max, yRange.max, zRange.min);
    this._line3d(ctx, xMin2d, xMax2d, this.axisColor);
  }

  // draw y-axis
  if (this.showYAxis) {
    ctx.lineWidth = 1;
    // line at xMin
    from = new Point3d$1(xRange.min, yRange.min, zRange.min);
    to = new Point3d$1(xRange.min, yRange.max, zRange.min);
    this._line3d(ctx, from, to, this.axisColor);
    // line at xMax
    from = new Point3d$1(xRange.max, yRange.min, zRange.min);
    to = new Point3d$1(xRange.max, yRange.max, zRange.min);
    this._line3d(ctx, from, to, this.axisColor);
  }

  // draw x-label
  var xLabel = this.xLabel;
  if (xLabel.length > 0 && this.showXAxis) {
    yOffset = 0.1 / this.scale.y;
    xText = (xRange.max + 3 * xRange.min) / 4;
    yText = armVector.x > 0 ? yRange.min - yOffset : yRange.max + yOffset;
    text = new Point3d$1(xText, yText, zRange.min);
    this.drawAxisLabelX(ctx, text, xLabel, armAngle);
  }

  // draw y-label
  var yLabel = this.yLabel;
  if (yLabel.length > 0 && this.showYAxis) {
    xOffset = 0.1 / this.scale.x;
    xText = armVector.y > 0 ? xRange.min - xOffset : xRange.max + xOffset;
    yText = (yRange.max + 3 * yRange.min) / 4;
    text = new Point3d$1(xText, yText, zRange.min);
    this.drawAxisLabelY(ctx, text, yLabel, armAngle);
  }

  // draw z-label
  var zLabel = this.zLabel;
  if (zLabel.length > 0 && this.showZAxis) {
    offset = 30; // pixels.  // TODO: relate to the max width of the values on the z axis?
    xText = armVector.x > 0 ? xRange.min : xRange.max;
    yText = armVector.y < 0 ? yRange.min : yRange.max;
    zText = (zRange.max + 3 * zRange.min) / 4;
    text = new Point3d$1(xText, yText, zText);
    this.drawAxisLabelZ(ctx, text, zLabel, offset);
  }
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
};

// -----------------------------------------------------------------------------
// Drawing primitives for the graphs
// -----------------------------------------------------------------------------

/**
 * Draw a bar element in the view with the given properties.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @param {number} xWidth
 * @param {number} yWidth
 * @param {string} color
 * @param {string} borderColor
 * @private
 */
Graph3d.prototype._redrawBar = function (ctx, point, xWidth, yWidth, color, borderColor) {
  var surface;

  // calculate all corner points
  var me = this;
  var point3d = point.point;
  var zMin = this.zRange.min;
  var top = [{
    point: new Point3d$1(point3d.x - xWidth, point3d.y - yWidth, point3d.z)
  }, {
    point: new Point3d$1(point3d.x + xWidth, point3d.y - yWidth, point3d.z)
  }, {
    point: new Point3d$1(point3d.x + xWidth, point3d.y + yWidth, point3d.z)
  }, {
    point: new Point3d$1(point3d.x - xWidth, point3d.y + yWidth, point3d.z)
  }];
  var bottom = [{
    point: new Point3d$1(point3d.x - xWidth, point3d.y - yWidth, zMin)
  }, {
    point: new Point3d$1(point3d.x + xWidth, point3d.y - yWidth, zMin)
  }, {
    point: new Point3d$1(point3d.x + xWidth, point3d.y + yWidth, zMin)
  }, {
    point: new Point3d$1(point3d.x - xWidth, point3d.y + yWidth, zMin)
  }];

  // calculate screen location of the points
  _forEachInstanceProperty(top).call(top, function (obj) {
    obj.screen = me._convert3Dto2D(obj.point);
  });
  _forEachInstanceProperty(bottom).call(bottom, function (obj) {
    obj.screen = me._convert3Dto2D(obj.point);
  });

  // create five sides, calculate both corner points and center points
  var surfaces = [{
    corners: top,
    center: Point3d$1.avg(bottom[0].point, bottom[2].point)
  }, {
    corners: [top[0], top[1], bottom[1], bottom[0]],
    center: Point3d$1.avg(bottom[1].point, bottom[0].point)
  }, {
    corners: [top[1], top[2], bottom[2], bottom[1]],
    center: Point3d$1.avg(bottom[2].point, bottom[1].point)
  }, {
    corners: [top[2], top[3], bottom[3], bottom[2]],
    center: Point3d$1.avg(bottom[3].point, bottom[2].point)
  }, {
    corners: [top[3], top[0], bottom[0], bottom[3]],
    center: Point3d$1.avg(bottom[0].point, bottom[3].point)
  }];
  point.surfaces = surfaces;

  // calculate the distance of each of the surface centers to the camera
  for (var j = 0; j < surfaces.length; j++) {
    surface = surfaces[j];
    var transCenter = this._convertPointToTranslation(surface.center);
    surface.dist = this.showPerspective ? transCenter.length() : -transCenter.z;
    // TODO: this dept calculation doesn't work 100% of the cases due to perspective,
    //     but the current solution is fast/simple and works in 99.9% of all cases
    //     the issue is visible in example 14, with graph.setCameraPosition({horizontal: 2.97, vertical: 0.5, distance: 0.9})
  }

  // order the surfaces by their (translated) depth
  _sortInstanceProperty(surfaces).call(surfaces, function (a, b) {
    var diff = b.dist - a.dist;
    if (diff) return diff;

    // if equal depth, sort the top surface last
    if (a.corners === top) return 1;
    if (b.corners === top) return -1;

    // both are equal
    return 0;
  });

  // draw the ordered surfaces
  ctx.lineWidth = this._getStrokeWidth(point);
  ctx.strokeStyle = borderColor;
  ctx.fillStyle = color;
  // NOTE: we start at j=2 instead of j=0 as we don't need to draw the two surfaces at the backside
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
  _fillInstanceProperty(ctx).call(ctx);
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
  _fillInstanceProperty(ctx).call(ctx);
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
  var f = (point.point.value - this.valueRange.min) * this.scale.value;
  var color = this._colormap(f, 1);
  var borderColor = this._colormap(f, 0.8);
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
 *
 * @param {object} point
 * @returns {{fill: *, border: *}}
 * @private
 */
Graph3d.prototype._getColorsColor = function (point) {
  // calculate the color based on the value
  var color, borderColor, pointStyle;
  if (point && point.point && point.point.data && point.point.data.style) {
    pointStyle = point.point.data.style;
  }
  if (pointStyle && _typeof$1(pointStyle) === "object" && _fillInstanceProperty(pointStyle) && pointStyle.stroke) {
    return {
      fill: _fillInstanceProperty(pointStyle),
      border: pointStyle.stroke
    };
  }
  if (typeof point.point.value === "string") {
    color = point.point.value;
    borderColor = point.point.value;
  } else {
    var f = (point.point.value - this.valueRange.min) * this.scale.value;
    color = this._colormap(f, 1);
    borderColor = this._colormap(f, 0.8);
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
    fill: _fillInstanceProperty(this.dataColor),
    border: this.dataColor.stroke
  };
};

/**
 * Determine the color corresponding to a given value on the color scale.
 *
 * @param {number} [x] the data value to be mapped running from 0 to 1
 * @param {number} [v] scale factor between 0 and 1 for the color brightness
 * @returns {string}
 * @private
 */
Graph3d.prototype._colormap = function (x) {
  var v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var r, g, b, a;
  var colormap = this.colormap;
  if (_Array$isArray$1(colormap)) {
    var maxIndex = colormap.length - 1;
    var startIndex = Math.max(Math.floor(x * maxIndex), 0);
    var endIndex = Math.min(startIndex + 1, maxIndex);
    var innerRatio = x * maxIndex - startIndex;
    var min = colormap[startIndex];
    var max = colormap[endIndex];
    r = min.r + innerRatio * (max.r - min.r);
    g = min.g + innerRatio * (max.g - min.g);
    b = min.b + innerRatio * (max.b - min.b);
  } else if (typeof colormap === "function") {
    var _colormap = colormap(x);
    r = _colormap.r;
    g = _colormap.g;
    b = _colormap.b;
    a = _colormap.a;
  } else {
    var hue = (1 - x) * 240;
    var _util$HSVToRGB = HSVToRGB(hue / 360, 1, 1);
    r = _util$HSVToRGB.r;
    g = _util$HSVToRGB.g;
    b = _util$HSVToRGB.b;
  }
  if (typeof a === "number" && !_Number$isNaN(a)) {
    var _context, _context2, _context3;
    return _concatInstanceProperty(_context = _concatInstanceProperty(_context2 = _concatInstanceProperty(_context3 = "RGBA(".concat(Math.round(r * v), ", ")).call(_context3, Math.round(g * v), ", ")).call(_context2, Math.round(b * v), ", ")).call(_context, a, ")");
  } else {
    var _context4, _context5;
    return _concatInstanceProperty(_context4 = _concatInstanceProperty(_context5 = "RGB(".concat(Math.round(r * v), ", ")).call(_context5, Math.round(g * v), ", ")).call(_context4, Math.round(b * v), ")");
  }
};

/**
 * Determine the size of a point on-screen, as determined by the
 * distance to the camera.
 *
 * @param {object} point
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
};

// -----------------------------------------------------------------------------
// Methods for drawing points per graph style.
// -----------------------------------------------------------------------------

/**
 * Draw single datapoint for graph style 'bar'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawBarGraphPoint = function (ctx, point) {
  var xWidth = this.xBarWidth / 2;
  var yWidth = this.yBarWidth / 2;
  var colors = this._getColorsRegular(point);
  this._redrawBar(ctx, point, xWidth, yWidth, _fillInstanceProperty(colors), colors.border);
};

/**
 * Draw single datapoint for graph style 'bar-color'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawBarColorGraphPoint = function (ctx, point) {
  var xWidth = this.xBarWidth / 2;
  var yWidth = this.yBarWidth / 2;
  var colors = this._getColorsColor(point);
  this._redrawBar(ctx, point, xWidth, yWidth, _fillInstanceProperty(colors), colors.border);
};

/**
 * Draw single datapoint for graph style 'bar-size'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawBarSizeGraphPoint = function (ctx, point) {
  // calculate size for the bar
  var fraction = (point.point.value - this.valueRange.min) / this.valueRange.range();
  var xWidth = this.xBarWidth / 2 * (fraction * 0.8 + 0.2);
  var yWidth = this.yBarWidth / 2 * (fraction * 0.8 + 0.2);
  var colors = this._getColorsSize();
  this._redrawBar(ctx, point, xWidth, yWidth, _fillInstanceProperty(colors), colors.border);
};

/**
 * Draw single datapoint for graph style 'dot'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawDotGraphPoint = function (ctx, point) {
  var colors = this._getColorsRegular(point);
  this._drawCircle(ctx, point, _fillInstanceProperty(colors), colors.border);
};

/**
 * Draw single datapoint for graph style 'dot-line'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
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
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawDotColorGraphPoint = function (ctx, point) {
  var colors = this._getColorsColor(point);
  this._drawCircle(ctx, point, _fillInstanceProperty(colors), colors.border);
};

/**
 * Draw single datapoint for graph style 'dot-size'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */
Graph3d.prototype._redrawDotSizeGraphPoint = function (ctx, point) {
  var dotSize = this._dotSize();
  var fraction = (point.point.value - this.valueRange.min) / this.valueRange.range();
  var sizeMin = dotSize * this.dotSizeMinFraction;
  var sizeRange = dotSize * this.dotSizeMaxFraction - sizeMin;
  var size = sizeMin + sizeRange * fraction;
  var colors = this._getColorsSize();
  this._drawCircle(ctx, point, _fillInstanceProperty(colors), colors.border, size);
};

/**
 * Draw single datapoint for graph style 'surface'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
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
  var cosViewAngle;
  if (this.showGrayBottom || this.showShadow) {
    // calculate the cross product of the two vectors from center
    // to left and right, in order to know whether we are looking at the
    // bottom or at the top side. We can also use the cross product
    // for calculating light intensity
    var aDiff = Point3d$1.subtract(cross.trans, point.trans);
    var bDiff = Point3d$1.subtract(top.trans, right.trans);
    var surfaceNormal = Point3d$1.crossProduct(aDiff, bDiff);
    if (this.showPerspective) {
      var surfacePosition = Point3d$1.avg(Point3d$1.avg(point.trans, cross.trans), Point3d$1.avg(right.trans, top.trans));
      // This corresponds to diffuse lighting with light source at (0, 0, 0).
      // More generally, we would need `surfacePosition - lightPosition`:
      cosViewAngle = -Point3d$1.dotProduct(surfaceNormal.normalize(), surfacePosition.normalize());
    } else {
      cosViewAngle = surfaceNormal.z / surfaceNormal.length();
    }
    topSideVisible = cosViewAngle > 0;
  }
  if (topSideVisible || !this.showGrayBottom) {
    var vAvg = (point.point.value + right.point.value + top.point.value + cross.point.value) / 4;
    var ratio = (vAvg - this.valueRange.min) * this.scale.value;
    // lighting factor. TODO: let user specify lighting model as function(?)
    var v = this.showShadow ? (1 + cosViewAngle) / 2 : 1;
    fillStyle = this._colormap(ratio, v);
  } else {
    fillStyle = "gray";
  }
  if (this.showSurfaceGrid) {
    strokeStyle = this.axisColor; // TODO: should be customizable
  } else {
    strokeStyle = fillStyle;
  }
  ctx.lineWidth = this._getStrokeWidth(point);
  // TODO: only draw stroke when strokeWidth > 0

  var points = [point, right, cross, top];
  this._polygon(ctx, points, fillStyle, strokeStyle);
};

/**
 * Helper method for _redrawGridGraphPoint()
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} from
 * @param {object} to
 * @private
 */
Graph3d.prototype._drawGridLine = function (ctx, from, to) {
  if (from === undefined || to === undefined) {
    return;
  }
  var vAvg = (from.point.value + to.point.value) / 2;
  var f = (vAvg - this.valueRange.min) * this.scale.value;
  ctx.lineWidth = this._getStrokeWidth(from) * 2;
  ctx.strokeStyle = this._colormap(f, 1);
  this._line(ctx, from.screen, to.screen);
};

/**
 * Draw single datapoint for graph style 'Grid'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
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
 * @param {object} point
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
    var point = this.dataPoints[i];

    // Using call() ensures that the correct context is used
    this._pointDrawingMethod.call(this, ctx, point);
  }
};

// -----------------------------------------------------------------------------
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
 *
 * @param {Event}     event     The event that occurred (required for
 *                  retrieving the  mouse position)
 */
Graph3d.prototype._onMouseDown = function (event) {
  event = event || window.event;

  // check if mouse is still down (may be up when focus is lost for example
  // in an iframe)
  if (this.leftButtonDown) {
    this._onMouseUp(event);
  }

  // only react on left mouse button down
  this.leftButtonDown = event.which ? event.which === 1 : event.button === 1;
  if (!this.leftButtonDown && !this.touchDown) return;
  this._storeMousePosition(event);
  this.startStart = new Date(this.start);
  this.startEnd = new Date(this.end);
  this.startArmRotation = this.camera.getArmRotation();
  this.frame.style.cursor = "move";

  // add event listeners to handle moving the contents
  // we store the function onmousemove and onmouseup in the graph, so we can
  // remove the eventlisteners lateron in the function mouseUp()
  var me = this;
  this.onmousemove = function (event) {
    me._onMouseMove(event);
  };
  this.onmouseup = function (event) {
    me._onMouseUp(event);
  };
  addEventListener(document, "mousemove", me.onmousemove);
  addEventListener(document, "mouseup", me.onmouseup);
  preventDefault(event);
};

/**
 * Perform moving operating.
 * This function activated from within the funcion Graph.mouseDown().
 *
 * @param {Event}   event  Well, eehh, the event
 */
Graph3d.prototype._onMouseMove = function (event) {
  this.moving = true;
  event = event || window.event;

  // calculate change in mouse position
  var diffX = _parseFloat$1(getMouseX(event)) - this.startMouseX;
  var diffY = _parseFloat$1(getMouseY(event)) - this.startMouseY;

  // move with ctrl or rotate by other
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
    var snapValue = Math.sin(snapAngle / 360 * 2 * Math.PI);

    // snap horizontally to nice angles at 0pi, 0.5pi, 1pi, 1.5pi, etc...
    // the -0.001 is to take care that the vertical axis is always drawn at the left front corner
    if (Math.abs(Math.sin(horizontalNew)) < snapValue) {
      horizontalNew = Math.round(horizontalNew / Math.PI) * Math.PI - 0.001;
    }
    if (Math.abs(Math.cos(horizontalNew)) < snapValue) {
      horizontalNew = (Math.round(horizontalNew / Math.PI - 0.5) + 0.5) * Math.PI - 0.001;
    }

    // snap vertically to nice angles
    if (Math.abs(Math.sin(verticalNew)) < snapValue) {
      verticalNew = Math.round(verticalNew / Math.PI) * Math.PI;
    }
    if (Math.abs(Math.cos(verticalNew)) < snapValue) {
      verticalNew = (Math.round(verticalNew / Math.PI - 0.5) + 0.5) * Math.PI;
    }
    this.camera.setArmRotation(horizontalNew, verticalNew);
  }
  this.redraw();

  // fire a cameraPositionChange event
  var parameters = this.getCameraPosition();
  this.emit("cameraPositionChange", parameters);
  preventDefault(event);
};

/**
 * Stop moving operating.
 * This function activated from within the funcion Graph.mouseDown().
 *
 * @param {Event}  event   The event
 */
Graph3d.prototype._onMouseUp = function (event) {
  this.frame.style.cursor = "auto";
  this.leftButtonDown = false;

  // remove event listeners here
  removeEventListener(document, "mousemove", this.onmousemove);
  removeEventListener(document, "mouseup", this.onmouseup);
  preventDefault(event);
};

/**
 * @param {Event}  event   The event
 */
Graph3d.prototype._onClick = function (event) {
  // NOTE: onclick_callback is deprecated and may be removed in a future version.
  if (!this.onclick_callback && !this.hasListeners("click")) return;
  if (!this.moving) {
    var boundingRect = this.frame.getBoundingClientRect();
    var mouseX = getMouseX(event) - boundingRect.left;
    var mouseY = getMouseY(event) - boundingRect.top;
    var dataPoint = this._dataPointFromXY(mouseX, mouseY);
    if (dataPoint) {
      if (this.onclick_callback) this.onclick_callback(dataPoint.point.data);
      this.emit("click", dataPoint.point.data);
    }
  } else {
    // disable onclick callback, if it came immediately after rotate/pan
    this.moving = false;
  }
  preventDefault(event);
};

/**
 * After having moved the mouse, a tooltip should pop up when the mouse is resting on a data point
 *
 * @param {Event}  event   A mouse move event
 */
Graph3d.prototype._onTooltip = function (event) {
  var delay = this.tooltipDelay; // ms
  var boundingRect = this.frame.getBoundingClientRect();
  var mouseX = getMouseX(event) - boundingRect.left;
  var mouseY = getMouseY(event) - boundingRect.top;
  if (!this.showTooltip) {
    return;
  }
  if (this.tooltipTimeout) {
    clearTimeout(this.tooltipTimeout);
  }

  // (delayed) display of a tooltip only if no mouse button is down
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
    this.tooltipTimeout = _setTimeout(function () {
      me.tooltipTimeout = null;

      // show a tooltip if we have a data point
      var dataPoint = me._dataPointFromXY(mouseX, mouseY);
      if (dataPoint) {
        me._showTooltip(dataPoint);
      }
    }, delay);
  }
};

/**
 * Event handler for touchstart event on mobile devices
 *
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
  addEventListener(document, "touchmove", me.ontouchmove);
  addEventListener(document, "touchend", me.ontouchend);
  this._onMouseDown(event);
};

/**
 * Event handler for touchmove event on mobile devices
 *
 * @param {Event}  event   The event
 */
Graph3d.prototype._onTouchMove = function (event) {
  this._onMouseMove(event);
};

/**
 * Event handler for touchend event on mobile devices
 *
 * @param {Event}  event   The event
 */
Graph3d.prototype._onTouchEnd = function (event) {
  this.touchDown = false;
  removeEventListener(document, "touchmove", this.ontouchmove);
  removeEventListener(document, "touchend", this.ontouchend);
  this._onMouseUp(event);
};

/**
 * Event handler for mouse wheel event, used to zoom the graph
 * Code from http://adomas.org/javascript-mouse-wheel/
 *
 * @param {Event}  event   The event
 */
Graph3d.prototype._onWheel = function (event) {
  if (!event) /* For IE. */event = window.event;
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
    }

    // If delta is nonzero, handle it.
    // Basically, delta is now positive if wheel was scrolled up,
    // and negative, if wheel was scrolled down.
    if (delta) {
      var oldLength = this.camera.getArmLength();
      var newLength = oldLength * (1 - delta / 10);
      this.camera.setArmLength(newLength);
      this.redraw();
      this._hideTooltip();
    }

    // fire a cameraPositionChange event
    var parameters = this.getCameraPosition();
    this.emit("cameraPositionChange", parameters);

    // Prevent default actions caused by mouse wheel.
    // That might be ugly, but we handle scrolls somehow
    // anyway, so don't bother here..
    preventDefault(event);
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
  var cs = sign((a.x - c.x) * (point.y - c.y) - (a.y - c.y) * (point.x - c.x));

  // each of the three signs must be either equal to each other or zero
  return (as == 0 || bs == 0 || as == bs) && (bs == 0 || cs == 0 || bs == cs) && (as == 0 || cs == 0 || as == cs);
};

/**
 * Find a data point close to given screen position (x, y)
 *
 * @param   {number} x
 * @param   {number} y
 * @returns {object | null} The closest data point or null if not close to any
 *                          data point
 * @private
 */
Graph3d.prototype._dataPointFromXY = function (x, y) {
  var distMax = 100; // px
  var center = new Point2d$1(x, y);
  var i,
    dataPoint = null,
    closestDataPoint = null,
    closestDist = null;
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
 *
 * @param {object} dataPoint
 * @private
 */
Graph3d.prototype._showTooltip = function (dataPoint) {
  var content, line, dot;
  if (!this.tooltip) {
    content = document.createElement("div");
    _Object$assign(content.style, {}, this.tooltipStyle.content);
    content.style.position = "absolute";
    line = document.createElement("div");
    _Object$assign(line.style, {}, this.tooltipStyle.line);
    line.style.position = "absolute";
    dot = document.createElement("div");
    _Object$assign(dot.style, {}, this.tooltipStyle.dot);
    dot.style.position = "absolute";
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
  if (typeof this.showTooltip === "function") {
    content.innerHTML = this.showTooltip(dataPoint.point);
  } else {
    content.innerHTML = "<table>" + "<tr><td>" + this.xLabel + ":</td><td>" + dataPoint.point.x + "</td></tr>" + "<tr><td>" + this.yLabel + ":</td><td>" + dataPoint.point.y + "</td></tr>" + "<tr><td>" + this.zLabel + ":</td><td>" + dataPoint.point.z + "</td></tr>" + "</table>";
  }
  content.style.left = "0";
  content.style.top = "0";
  this.frame.appendChild(content);
  this.frame.appendChild(line);
  this.frame.appendChild(dot);

  // calculate sizes
  var contentWidth = content.offsetWidth;
  var contentHeight = content.offsetHeight;
  var lineHeight = line.offsetHeight;
  var dotWidth = dot.offsetWidth;
  var dotHeight = dot.offsetHeight;
  var left = dataPoint.screen.x - contentWidth / 2;
  left = Math.min(Math.max(left, 10), this.frame.clientWidth - 10 - contentWidth);
  line.style.left = dataPoint.screen.x + "px";
  line.style.top = dataPoint.screen.y - lineHeight + "px";
  content.style.left = left + "px";
  content.style.top = dataPoint.screen.y - lineHeight - contentHeight + "px";
  dot.style.left = dataPoint.screen.x - dotWidth / 2 + "px";
  dot.style.top = dataPoint.screen.y - dotHeight / 2 + "px";
};

/**
 * Hide the tooltip when displayed
 *
 * @private
 */
Graph3d.prototype._hideTooltip = function () {
  if (this.tooltip) {
    this.tooltip.dataPoint = null;
    for (var prop in this.tooltip.dom) {
      if (Object.prototype.hasOwnProperty.call(this.tooltip.dom, prop)) {
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
  if ("clientX" in event) return event.clientX;
  return event.targetTouches[0] && event.targetTouches[0].clientX || 0;
}

/**
 * Get the vertical mouse position from a mouse event
 *
 * @param   {Event}  event
 * @returns {number} mouse y
 */
function getMouseY(event) {
  if ("clientY" in event) return event.clientY;
  return event.targetTouches[0] && event.targetTouches[0].clientY || 0;
}

// -----------------------------------------------------------------------------
//  Public methods for specific settings
// -----------------------------------------------------------------------------

/**
 * Set the rotation and distance of the camera
 *
 * @param {object}  pos            An object with the camera position
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
  setCameraPosition(pos, this);
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
};

export { DELETE, DataSet, DataStream, DataView, Graph3d, Camera as Graph3dCamera, Filter as Graph3dFilter, Point2d$1 as Graph3dPoint2d, Point3d$1 as Graph3dPoint3d, Slider as Graph3dSlider, StepNumber$1 as Graph3dStepNumber, Queue, createNewDataPipeFrom, isDataSetLike, isDataViewLike };
//# sourceMappingURL=vis-graph3d.js.map
