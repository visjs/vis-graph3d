/**
 * vis-graph3d
 * https://visjs.github.io/vis-graph3d/
 *
 * Create interactive, animated 3d graphs. Surfaces, lines, dots and block styling out of the box.
 *
 * @version 0.0.0-no-version
 * @date    2022-05-12T13:00:56.675Z
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

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var functionBindNative = !fails(function () {
  var test = function () {
    /* empty */
  }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var FunctionPrototype$3 = Function.prototype;
var bind$5 = FunctionPrototype$3.bind;
var call$2 = FunctionPrototype$3.call;
var uncurryThis = functionBindNative && bind$5.bind(call$2, call$2);
var functionUncurryThis = functionBindNative ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call$2.apply(fn, arguments);
  };
};

var ceil = Math.ceil;
var floor$1 = Math.floor; // `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity

var toIntegerOrInfinity = function (argument) {
  var number = +argument; // eslint-disable-next-line no-self-compare -- safe

  return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil)(number);
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global_1 = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
function () {
  return this;
}() || Function('return this')();

var defineProperty$c = Object.defineProperty;

var setGlobal = function (key, value) {
  try {
    defineProperty$c(global_1, key, {
      value: value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global_1[key] = value;
  }

  return value;
};

var SHARED = '__core-js_shared__';
var store$1 = global_1[SHARED] || setGlobal(SHARED, {});
var sharedStore = store$1;

var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.21.1',
    mode: 'pure' ,
    copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });
});

var TypeError$j = global_1.TypeError; // `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible

var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError$j("Can't call method on " + it);
  return it;
};

var Object$6 = global_1.Object; // `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject

var toObject = function (argument) {
  return Object$6(requireObjectCoercible(argument));
};

var hasOwnProperty = functionUncurryThis({}.hasOwnProperty); // `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty

var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};

var id = 0;
var postfix = Math.random();
var toString$1 = functionUncurryThis(1.0.toString);

var uid = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$1(++id + postfix, 36);
};

var path = {};

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable = function (argument) {
  return typeof argument == 'function';
};

var aFunction = function (variable) {
  return isCallable(variable) ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process = global_1.process;
var Deno = global_1.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us

  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
} // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0


if (!version && engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && engineV8Version && engineV8Version < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var useSymbolAsUid = nativeSymbol && !Symbol.sham && typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore$1 = shared('wks');
var Symbol$3 = global_1.Symbol;
var symbolFor = Symbol$3 && Symbol$3['for'];
var createWellKnownSymbol = useSymbolAsUid ? Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!hasOwnProperty_1(WellKnownSymbolsStore$1, name) || !(nativeSymbol || typeof WellKnownSymbolsStore$1[name] == 'string')) {
    var description = 'Symbol.' + name;

    if (nativeSymbol && hasOwnProperty_1(Symbol$3, name)) {
      WellKnownSymbolsStore$1[name] = Symbol$3[name];
    } else if (useSymbolAsUid && symbolFor) {
      WellKnownSymbolsStore$1[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
    }
  }

  return WellKnownSymbolsStore$1[name];
};

var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
var test$2 = {};
test$2[TO_STRING_TAG$3] = 'z';
var toStringTagSupport = String(test$2) === '[object z]';

var toString = functionUncurryThis({}.toString);
var stringSlice$1 = functionUncurryThis(''.slice);

var classofRaw = function (it) {
  return stringSlice$1(toString(it), 8, -1);
};

var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
var Object$5 = global_1.Object; // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


var classof = toStringTagSupport ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object$5(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};

var String$4 = global_1.String;

var toString_1 = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String$4(argument);
};

var charAt$3 = functionUncurryThis(''.charAt);
var charCodeAt$1 = functionUncurryThis(''.charCodeAt);
var stringSlice = functionUncurryThis(''.slice);

var createMethod$5 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString_1(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt$1(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$3(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$5(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$5(true)
};

var functionToString = functionUncurryThis(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

if (!isCallable(sharedStore.inspectSource)) {
  sharedStore.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap$1 = global_1.WeakMap;
var nativeWeakMap = isCallable(WeakMap$1) && /native code/.test(inspectSource(WeakMap$1));

var isObject$1 = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};

var descriptors = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var document$1 = global_1.document; // typeof document.createElement is 'object' in old IE

var EXISTS$1 = isObject$1(document$1) && isObject$1(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var ie8DomDefine = !descriptors && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

// https://bugs.chromium.org/p/v8/issues/detail?id=3334

var v8PrototypeDefineBug = descriptors && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () {
    /* empty */
  }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var String$3 = global_1.String;
var TypeError$i = global_1.TypeError; // `Assert: Type(argument) is Object`

var anObject = function (argument) {
  if (isObject$1(argument)) return argument;
  throw TypeError$i(String$3(argument) + ' is not an object');
};

var call$1 = Function.prototype.call;
var functionCall = functionBindNative ? call$1.bind(call$1) : function () {
  return call$1.apply(call$1, arguments);
};

var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

var Object$4 = global_1.Object;
var isSymbol = useSymbolAsUid ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, Object$4(it));
};

var String$2 = global_1.String;

var tryToString = function (argument) {
  try {
    return String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var TypeError$h = global_1.TypeError; // `Assert: IsCallable(argument) is true`

var aCallable = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError$h(tryToString(argument) + ' is not a function');
};

// https://tc39.es/ecma262/#sec-getmethod

var getMethod = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};

var TypeError$g = global_1.TypeError; // `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive

var ordinaryToPrimitive = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject$1(val = functionCall(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject$1(val = functionCall(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject$1(val = functionCall(fn, input))) return val;
  throw TypeError$g("Can't convert object to primitive value");
};

var TypeError$f = global_1.TypeError;
var TO_PRIMITIVE$1 = wellKnownSymbol('toPrimitive'); // `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive

var toPrimitive = function (input, pref) {
  if (!isObject$1(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE$1);
  var result;

  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = functionCall(exoticToPrim, input, pref);
    if (!isObject$1(result) || isSymbol(result)) return result;
    throw TypeError$f("Can't convert object to primitive value");
  }

  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

// https://tc39.es/ecma262/#sec-topropertykey

var toPropertyKey = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var TypeError$e = global_1.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

var $defineProperty$1 = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable'; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty

var f$7 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);

  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$2(O, P);

    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }

  return $defineProperty$1(O, P, Attributes);
} : $defineProperty$1 : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return $defineProperty$1(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError$e('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var objectDefineProperty = {
  f: f$7
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var keys$7 = shared('keys');

var sharedKey = function (key) {
  return keys$7[key] || (keys$7[key] = uid(key));
};

var hiddenKeys$1 = {};

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$d = global_1.TypeError;
var WeakMap = global_1.WeakMap;
var set$3, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set$3(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$d('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (nativeWeakMap || sharedStore.state) {
  var store = sharedStore.state || (sharedStore.state = new WeakMap());
  var wmget = functionUncurryThis(store.get);
  var wmhas = functionUncurryThis(store.has);
  var wmset = functionUncurryThis(store.set);

  set$3 = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError$d(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget(store, it) || {};
  };

  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys$1[STATE] = true;

  set$3 = function (it, metadata) {
    if (hasOwnProperty_1(it, STATE)) throw new TypeError$d(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return hasOwnProperty_1(it, STATE);
  };
}

var internalState = {
  set: set$3,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var FunctionPrototype$2 = Function.prototype;
var apply = FunctionPrototype$2.apply;
var call = FunctionPrototype$2.call; // eslint-disable-next-line es/no-reflect -- safe

var functionApply = typeof Reflect == 'object' && Reflect.apply || (functionBindNative ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});

var $propertyIsEnumerable$2 = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable$2.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

var f$6 = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$3(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable$2;
var objectPropertyIsEnumerable = {
  f: f$6
};

var Object$3 = global_1.Object;
var split = functionUncurryThis(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split(it, '') : Object$3(it);
} : Object$3;

var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

var f$5 = descriptors ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (ie8DomDefine) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {
    /* empty */
  }
  if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
};
var objectGetOwnPropertyDescriptor = {
  f: f$5
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
var isForced_1 = isForced;

var bind$4 = functionUncurryThis(functionUncurryThis.bind); // optional / simple context binding

var functionBindContext = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : functionBindNative ? bind$4(fn, that) : function
    /* ...args */
  () {
    return fn.apply(that, arguments);
  };
};

var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0:
          return new NativeConstructor();

        case 1:
          return new NativeConstructor(a);

        case 2:
          return new NativeConstructor(a, b);
      }

      return new NativeConstructor(a, b, c);
    }

    return functionApply(NativeConstructor, this, arguments);
  };

  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/


var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;
  var nativeSource = GLOBAL ? global_1 : STATIC ? global_1[TARGET] : (global_1[TARGET] || {}).prototype;
  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;
  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contains in native

    USE_NATIVE = !FORCED && nativeSource && hasOwnProperty_1(nativeSource, key);
    targetProperty = target[key];
    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$2(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key]; // export native or implementation

    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue; // bind timers to global for call from export context

    if (options.bind && USE_NATIVE) resultProperty = functionBindContext(sourceProperty, global_1); // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty); // make static versions for prototype methods
    else if (PROTO && isCallable(sourceProperty)) resultProperty = functionUncurryThis(sourceProperty); // default case
    else resultProperty = sourceProperty; // add a flag to not completely full polyfills

    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';

      if (!hasOwnProperty_1(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      } // export virtual prototype methods


      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty); // export real prototype methods

      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};

var FunctionPrototype$1 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwnProperty_1(FunctionPrototype$1, 'name'); // additional protection from minified / mangled / dropped function names

var PROPER = EXISTS && function something() {
  /* empty */
}.name === 'something';

var CONFIGURABLE = EXISTS && (!descriptors || descriptors && getDescriptor(FunctionPrototype$1, 'name').configurable);
var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var max$3 = Math.max;
var min$2 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max$3(integer + length, 0) : min$2(integer, length);
};

var min$1 = Math.min; // `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength

var toLength = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

// https://tc39.es/ecma262/#sec-lengthofarraylike

var lengthOfArrayLike = function (obj) {
  return toLength(obj.length);
};

var createMethod$4 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
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

var indexOf$4 = arrayIncludes.indexOf;
var push$5 = functionUncurryThis([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$5(result, key); // Don't enum bug & hidden keys


  while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
    ~indexOf$4(result, key) || push$5(result, key);
  }

  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe

var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe

var f$4 = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) objectDefineProperty.f(O, key = keys[index++], props[key]);

  return O;
};
var objectDefineProperties = {
  f: f$4
};

var html = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
  : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys$1[IE_PROTO$1] = true; // `Object.create` method
// https://tc39.es/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : objectDefineProperties.f(result, Properties);
};

var correctPrototypeGetter = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var IE_PROTO = sharedKey('IE_PROTO');
var Object$2 = global_1.Object;
var ObjectPrototype$2 = Object$2.prototype; // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof

var objectGetPrototypeOf = correctPrototypeGetter ? Object$2.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwnProperty_1(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;

  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  }

  return object instanceof Object$2 ? ObjectPrototype$2 : null;
};

var redefine = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;else createNonEnumerableProperty(target, key, value);
};

var ITERATOR$6 = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false; // `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object

var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;
/* eslint-disable es/no-array-prototype-keys -- safe */

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$1 == undefined || fails(function () {
  var test = {}; // FF44- legacy iterators case

  return IteratorPrototype$1[ITERATOR$6].call(test) !== test;
});
if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};else IteratorPrototype$1 = objectCreate(IteratorPrototype$1); // `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

if (!isCallable(IteratorPrototype$1[ITERATOR$6])) {
  redefine(IteratorPrototype$1, ITERATOR$6, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$1,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

// https://tc39.es/ecma262/#sec-object.prototype.tostring


var objectToString = toStringTagSupport ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

var defineProperty$b = objectDefineProperty.f;
var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;

    if (!hasOwnProperty_1(target, TO_STRING_TAG$1)) {
      defineProperty$b(target, TO_STRING_TAG$1, {
        configurable: true,
        value: TAG
      });
    }

    if (SET_METHOD && !toStringTagSupport) {
      createNonEnumerableProperty(target, 'toString', objectToString);
    }
  }
};

var iterators = {};

var IteratorPrototype = iteratorsCore.IteratorPrototype;

var returnThis$1 = function () {
  return this;
};

var createIteratorConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype, {
    next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  iterators[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var String$1 = global_1.String;
var TypeError$c = global_1.TypeError;

var aPossiblePrototype = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError$c("Can't set " + String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */
// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe

var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = functionUncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$5 = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () {
  return this;
};

var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$5] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      iterators[TO_STRING_TAG] = returnThis;
    }
  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


  if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    {
      INCORRECT_VALUES_NAME = true;

      defaultIterator = function values() {
        return functionCall(nativeIterator, this);
      };
    }
  } // export additional methods


  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else _export({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  } // define iterator


  if ((FORCED) && IterablePrototype[ITERATOR$5] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR$5, defaultIterator, {
      name: DEFAULT
    });
  }

  iterators[NAME] = defaultIterator;
  return methods;
};

var charAt$2 = stringMultibyte.charAt;
var STRING_ITERATOR = 'String Iterator';
var setInternalState$4 = internalState.set;
var getInternalState$2 = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator

defineIterator(String, 'String', function (iterated) {
  setInternalState$4(this, {
    type: STRING_ITERATOR,
    string: toString_1(iterated),
    index: 0
  }); // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$2(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return {
    value: undefined,
    done: true
  };
  point = charAt$2(string, index);
  state.index += point.length;
  return {
    value: point,
    done: false
  };
});

var iteratorClose = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);

  try {
    innerResult = getMethod(iterator, 'return');

    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }

    innerResult = functionCall(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }

  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};

var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};

var ITERATOR$4 = wellKnownSymbol('iterator');
var ArrayPrototype$h = Array.prototype; // check on default Array iterator

var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype$h[ITERATOR$4] === it);
};

var noop = function () {
  /* empty */
};

var empty = [];
var construct$4 = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = functionUncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  try {
    construct$4(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;

  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction':
      return false;
  }

  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor

var isConstructor = !construct$4 || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;

var createProperty = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var ITERATOR$3 = wellKnownSymbol('iterator');

var getIteratorMethod$4 = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR$3) || getMethod(it, '@@iterator') || iterators[classof(it)];
};

var TypeError$b = global_1.TypeError;

var getIterator$4 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$4(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(functionCall(iteratorMethod, argument));
  throw TypeError$b(tryToString(argument) + ' is not iterable');
};

var Array$5 = global_1.Array; // `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from

var arrayFrom = function from(arrayLike
/* , mapfn = undefined, thisArg = undefined */
) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod$4(O);
  var index = 0;
  var length, result, step, iterator, next, value; // if the target is not iterable or it's an array with the default iterator - use a simple case

  if (iteratorMethod && !(this == Array$5 && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator$4(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];

    for (; !(step = functionCall(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array$5(length);

    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }

  result.length = index;
  return result;
};

var ITERATOR$2 = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return {
        done: !!called++
      };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };

  iteratorWithReturn[ITERATOR$2] = function () {
    return this;
  }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;

  try {
    var object = {};

    object[ITERATOR$2] = function () {
      return {
        next: function () {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };

    exec(object);
  } catch (error) {
    /* empty */
  }

  return ITERATION_SUPPORT;
};

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
}); // `Array.from` method
// https://tc39.es/ecma262/#sec-array.from

_export({
  target: 'Array',
  stat: true,
  forced: INCORRECT_ITERATION
}, {
  from: arrayFrom
});

var from_1$5 = path.Array.from;

var from_1$4 = from_1$5;

var from_1$3 = from_1$4;

objectDefineProperty.f;
var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$3 = internalState.set;
var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator

defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$3(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject

iterators.Arguments = iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

var getIteratorMethod_1 = getIteratorMethod$4;

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

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in domIterables) {
  var Collection = global_1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;

  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }

  iterators[COLLECTION_NAME] = iterators.Array;
}

var getIteratorMethod$3 = getIteratorMethod_1;

var getIteratorMethod$2 = getIteratorMethod$3;

var getIteratorMethod$1 = getIteratorMethod$2;

var getIteratorMethod = getIteratorMethod$1;

// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe

var isArray$6 = Array.isArray || function isArray(argument) {
  return classofRaw(argument) == 'Array';
};

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe

var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys);
};

var objectGetOwnPropertyNames = {
  f: f$3
};

var Array$4 = global_1.Array;
var max$2 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array$4(max$2(fin - k, 0));

  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);

  result.length = n;
  return result;
};

/* eslint-disable es/no-object-getownpropertynames -- safe */

var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames$1(it);
  } catch (error) {
    return arraySliceSimple(windowNames);
  }
}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


var f$2 = function getOwnPropertyNames(it) {
  return windowNames && classofRaw(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject(it));
};

var objectGetOwnPropertyNamesExternal = {
  f: f$2
};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
var f$1 = Object.getOwnPropertySymbols;
var objectGetOwnPropertySymbols = {
  f: f$1
};

var arraySlice = functionUncurryThis([].slice);

var f = wellKnownSymbol;
var wellKnownSymbolWrapped = {
  f: f
};

var defineProperty$a = objectDefineProperty.f;

var defineWellKnownSymbol = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwnProperty_1(Symbol, NAME)) defineProperty$a(Symbol, NAME, {
    value: wellKnownSymbolWrapped.f(NAME)
  });
};

var SPECIES$3 = wellKnownSymbol('species');
var Array$3 = global_1.Array; // a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesConstructor = function (originalArray) {
  var C;

  if (isArray$6(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (isConstructor(C) && (C === Array$3 || isArray$6(C.prototype))) C = undefined;else if (isObject$1(C)) {
      C = C[SPECIES$3];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array$3 : C;
};

// https://tc39.es/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var push$4 = functionUncurryThis([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

var createMethod$3 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3:
            return true;
          // some

          case 5:
            return value;
          // find

          case 6:
            return index;
          // findIndex

          case 2:
            push$4(target, value);
          // filter
        } else switch (TYPE) {
          case 4:
            return false;
          // every

          case 7:
            push$4(target, value);
          // filterReject
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

var $forEach$1 = arrayIteration.forEach;
var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState$2 = internalState.set;
var getInternalState = internalState.getterFor(SYMBOL);
var ObjectPrototype$1 = Object[PROTOTYPE];
var $Symbol = global_1.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError$a = global_1.TypeError;
var QObject = global_1.QObject;
var $stringify$1 = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var nativeDefineProperty = objectDefineProperty.f;
var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = objectPropertyIsEnumerable.f;
var push$3 = functionUncurryThis([].push);
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks'); // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDescriptor = descriptors && fails(function () {
  return objectCreate(nativeDefineProperty({}, 'a', {
    get: function () {
      return nativeDefineProperty(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$1, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
  nativeDefineProperty(O, P, Attributes);

  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
    nativeDefineProperty(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap$1 = function (tag, description) {
  var symbol = AllSymbols[tag] = objectCreate(SymbolPrototype);
  setInternalState$2(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!descriptors) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);

  if (hasOwnProperty_1(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwnProperty_1(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwnProperty_1(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = objectCreate(Attributes, {
        enumerable: createPropertyDescriptor(0, false)
      });
    }

    return setSymbolDescriptor(O, key, Attributes);
  }

  return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach$1(keys, function (key) {
    if (!descriptors || functionCall($propertyIsEnumerable$1, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
};

var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = functionCall(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype$1 && hasOwnProperty_1(AllSymbols, P) && !hasOwnProperty_1(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwnProperty_1(this, P) || !hasOwnProperty_1(AllSymbols, P) || hasOwnProperty_1(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype$1 && hasOwnProperty_1(AllSymbols, key) && !hasOwnProperty_1(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

  if (descriptor && hasOwnProperty_1(AllSymbols, key) && !(hasOwnProperty_1(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }

  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach$1(names, function (key) {
    if (!hasOwnProperty_1(AllSymbols, key) && !hasOwnProperty_1(hiddenKeys$1, key)) push$3(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach$1(names, function (key) {
    if (hasOwnProperty_1(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwnProperty_1(ObjectPrototype$1, key))) {
      push$3(result, AllSymbols[key]);
    }
  });
  return result;
}; // `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor


if (!nativeSymbol) {
  $Symbol = function Symbol() {
    if (objectIsPrototypeOf(SymbolPrototype, this)) throw TypeError$a('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : toString_1(arguments[0]);
    var tag = uid(description);

    var setter = function (value) {
      if (this === ObjectPrototype$1) functionCall(setter, ObjectPrototypeSymbols, value);
      if (hasOwnProperty_1(this, HIDDEN) && hasOwnProperty_1(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };

    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, {
      configurable: true,
      set: setter
    });
    return wrap$1(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];
  redefine(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });
  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap$1(uid(description), description);
  });
  objectPropertyIsEnumerable.f = $propertyIsEnumerable$1;
  objectDefineProperty.f = $defineProperty;
  objectDefineProperties.f = $defineProperties;
  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

  wellKnownSymbolWrapped.f = function (name) {
    return wrap$1(wellKnownSymbol(name), name);
  };

  if (descriptors) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
  }
}

_export({
  global: true,
  wrap: true,
  forced: !nativeSymbol,
  sham: !nativeSymbol
}, {
  Symbol: $Symbol
});
$forEach$1(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});
_export({
  target: SYMBOL,
  stat: true,
  forced: !nativeSymbol
}, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = toString_1(key);
    if (hasOwnProperty_1(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError$a(sym + ' is not a symbol');
    if (hasOwnProperty_1(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () {
    USE_SETTER = true;
  },
  useSimple: function () {
    USE_SETTER = false;
  }
});
_export({
  target: 'Object',
  stat: true,
  forced: !nativeSymbol,
  sham: !descriptors
}, {
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
_export({
  target: 'Object',
  stat: true,
  forced: !nativeSymbol
}, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

_export({
  target: 'Object',
  stat: true,
  forced: fails(function () {
    objectGetOwnPropertySymbols.f(1);
  })
}, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return objectGetOwnPropertySymbols.f(toObject(it));
  }
}); // `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify

if ($stringify$1) {
  var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

    return $stringify$1([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
    || $stringify$1({
      a: symbol
    }) != '{}' // V8 throws on boxed symbols
    || $stringify$1(Object(symbol)) != '{}';
  });
  _export({
    target: 'JSON',
    stat: true,
    forced: FORCED_JSON_STRINGIFY
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var $replacer = replacer;
      if (!isObject$1(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!isArray$6(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = functionCall($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return functionApply($stringify$1, null, args);
    }
  });
} // `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


if (!SymbolPrototype[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype.valueOf; // eslint-disable-next-line no-unused-vars -- required for .length

  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return functionCall(valueOf, this);
  });
} // `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


setToStringTag($Symbol, SYMBOL);
hiddenKeys$1[HIDDEN] = true;

var getOwnPropertySymbols$2 = path.Object.getOwnPropertySymbols;

var getOwnPropertySymbols$1 = getOwnPropertySymbols$2;

var getOwnPropertySymbols = getOwnPropertySymbols$1;

var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var FAILS_ON_PRIMITIVES$3 = fails(function () {
  nativeGetOwnPropertyDescriptor(1);
});
var FORCED$6 = !descriptors || FAILS_ON_PRIMITIVES$3; // `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

_export({
  target: 'Object',
  stat: true,
  forced: FORCED$6,
  sham: !descriptors
}, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});

var getOwnPropertyDescriptor_1 = createCommonjsModule(function (module) {
  var Object = path.Object;

  var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
    return Object.getOwnPropertyDescriptor(it, key);
  };

  if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;
});

var getOwnPropertyDescriptor$1 = getOwnPropertyDescriptor_1;

var getOwnPropertyDescriptor = getOwnPropertyDescriptor$1;

var concat$6 = functionUncurryThis([].concat); // all object keys, includes non-enumerable and symbols

var ownKeys$5 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? concat$6(keys, getOwnPropertySymbols(it)) : keys;
};

// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors

_export({
  target: 'Object',
  stat: true,
  sham: !descriptors
}, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    var keys = ownKeys$5(O);
    var result = {};
    var index = 0;
    var key, descriptor;

    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }

    return result;
  }
});

var getOwnPropertyDescriptors$2 = path.Object.getOwnPropertyDescriptors;

var getOwnPropertyDescriptors$1 = getOwnPropertyDescriptors$2;

var getOwnPropertyDescriptors = getOwnPropertyDescriptors$1;

var defineProperties$2 = objectDefineProperties.f; // `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe

_export({
  target: 'Object',
  stat: true,
  forced: Object.defineProperties !== defineProperties$2,
  sham: !descriptors
}, {
  defineProperties: defineProperties$2
});

var defineProperties_1 = createCommonjsModule(function (module) {
  var Object = path.Object;

  var defineProperties = module.exports = function defineProperties(T, D) {
    return Object.defineProperties(T, D);
  };

  if (Object.defineProperties.sham) defineProperties.sham = true;
});

var defineProperties$1 = defineProperties_1;

var defineProperties = defineProperties$1;

var defineProperty$9 = objectDefineProperty.f; // `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es/no-object-defineproperty -- safe

_export({
  target: 'Object',
  stat: true,
  forced: Object.defineProperty !== defineProperty$9,
  sham: !descriptors
}, {
  defineProperty: defineProperty$9
});

var defineProperty_1 = createCommonjsModule(function (module) {
  var Object = path.Object;

  var defineProperty = module.exports = function defineProperty(it, key, desc) {
    return Object.defineProperty(it, key, desc);
  };

  if (Object.defineProperty.sham) defineProperty.sham = true;
});

var defineProperty$8 = defineProperty_1;

var defineProperty$7 = defineProperty$8;

var classCallCheck = createCommonjsModule(function (module) {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
var _classCallCheck = unwrapExports(classCallCheck);

var defineProperty$6 = defineProperty$8;

var defineProperty$5 = defineProperty$6;

var defineProperty$4 = defineProperty$5;

var createClass = createCommonjsModule(function (module) {
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      defineProperty$4(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);

    defineProperty$4(Constructor, "prototype", {
      writable: false
    });

    return Constructor;
  }

  module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
var _createClass = unwrapExports(createClass);

var defineProperty$3 = createCommonjsModule(function (module) {
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      defineProperty$4(obj, key, {
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

  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
var _defineProperty = unwrapExports(defineProperty$3);

// https://tc39.es/ecma262/#sec-array.isarray

_export({
  target: 'Array',
  stat: true
}, {
  isArray: isArray$6
});

var isArray$5 = path.Array.isArray;

var isArray$4 = isArray$5;

var isArray$3 = isArray$4;

var isArray$2 = isArray$3;

var isArray$1 = isArray$2;

var arrayWithHoles = createCommonjsModule(function (module) {
  function _arrayWithHoles(arr) {
    if (isArray$1(arr)) return arr;
  }

  module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
unwrapExports(arrayWithHoles);

var SPECIES$2 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$2] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError$9 = global_1.TypeError; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject$1(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray$6(O);
};

var FORCED$5 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

_export({
  target: 'Array',
  proto: true,
  forced: FORCED$5
}, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER$1) throw TypeError$9(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER$1) throw TypeError$9(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

// https://tc39.es/ecma262/#sec-symbol.asynciterator

defineWellKnownSymbol('asyncIterator');

// https://tc39.es/ecma262/#sec-symbol.hasinstance

defineWellKnownSymbol('hasInstance');

// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable

defineWellKnownSymbol('isConcatSpreadable');

// https://tc39.es/ecma262/#sec-symbol.iterator

defineWellKnownSymbol('iterator');

// https://tc39.es/ecma262/#sec-symbol.match

defineWellKnownSymbol('match');

// https://tc39.es/ecma262/#sec-symbol.matchall

defineWellKnownSymbol('matchAll');

// https://tc39.es/ecma262/#sec-symbol.replace

defineWellKnownSymbol('replace');

// https://tc39.es/ecma262/#sec-symbol.search

defineWellKnownSymbol('search');

// https://tc39.es/ecma262/#sec-symbol.species

defineWellKnownSymbol('species');

// https://tc39.es/ecma262/#sec-symbol.split

defineWellKnownSymbol('split');

// https://tc39.es/ecma262/#sec-symbol.toprimitive

defineWellKnownSymbol('toPrimitive');

// https://tc39.es/ecma262/#sec-symbol.tostringtag

defineWellKnownSymbol('toStringTag');

// https://tc39.es/ecma262/#sec-symbol.unscopables

defineWellKnownSymbol('unscopables');

// https://tc39.es/ecma262/#sec-json-@@tostringtag

setToStringTag(global_1.JSON, 'JSON', true);

var symbol$5 = path.Symbol;

var symbol$4 = symbol$5;

var symbol$3 = symbol$4;

// https://github.com/tc39/proposal-using-statement

defineWellKnownSymbol('asyncDispose');

// https://github.com/tc39/proposal-using-statement

defineWellKnownSymbol('dispose');

// https://github.com/tc39/proposal-pattern-matching

defineWellKnownSymbol('matcher');

// https://github.com/tc39/proposal-decorators

defineWellKnownSymbol('metadata');

// https://github.com/tc39/proposal-observable

defineWellKnownSymbol('observable');

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching

defineWellKnownSymbol('patternMatch');

defineWellKnownSymbol('replaceAll');

// TODO: Remove from `core-js@4`

var symbol$2 = symbol$3;

var symbol$1 = symbol$2;

var iterableToArrayLimit = createCommonjsModule(function (module) {
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof symbol$1 !== "undefined" && getIteratorMethod(arr) || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
unwrapExports(iterableToArrayLimit);

var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('slice');
var SPECIES$1 = wellKnownSymbol('species');
var Array$2 = global_1.Array;
var max$1 = Math.max; // `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$3
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray$6(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (isConstructor(Constructor) && (Constructor === Array$2 || isArray$6(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject$1(Constructor)) {
        Constructor = Constructor[SPECIES$1];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array$2 || Constructor === undefined) {
        return arraySlice(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array$2 : Constructor)(max$1(fin - k, 0));

    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);

    result.length = n;
    return result;
  }
});

var entryVirtual = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};

var slice$6 = entryVirtual('Array').slice;

var ArrayPrototype$g = Array.prototype;

var slice$5 = function (it) {
  var own = it.slice;
  return it === ArrayPrototype$g || objectIsPrototypeOf(ArrayPrototype$g, it) && own === ArrayPrototype$g.slice ? slice$6 : own;
};

var slice$4 = slice$5;

var slice$3 = slice$4;

var slice$2 = slice$3;

var slice$1 = slice$2;

var from_1$2 = from_1$4;

var from_1$1 = from_1$2;

var from_1 = from_1$1;

var arrayLikeToArray = createCommonjsModule(function (module) {
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
unwrapExports(arrayLikeToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
  function _unsupportedIterableToArray(o, minLen) {
    var _context;

    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);

    var n = slice$1(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return from_1(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }

  module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
unwrapExports(unsupportedIterableToArray);

var nonIterableRest = createCommonjsModule(function (module) {
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
unwrapExports(nonIterableRest);

var slicedToArray = createCommonjsModule(function (module) {
  function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
  }

  module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
var _slicedToArray = unwrapExports(slicedToArray);

var iterator$5 = wellKnownSymbolWrapped.f('iterator');

var iterator$4 = iterator$5;

var iterator$3 = iterator$4;

var iterator$2 = iterator$3;

var iterator$1 = iterator$2;

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof symbol$1 && "symbol" == typeof iterator$1 ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof symbol$1 && obj.constructor === symbol$1 && obj !== symbol$1.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }

  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _typeof = unwrapExports(_typeof_1);

var arrayWithoutHoles = createCommonjsModule(function (module) {
  function _arrayWithoutHoles(arr) {
    if (isArray$1(arr)) return arrayLikeToArray(arr);
  }

  module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
  function _iterableToArray(iter) {
    if (typeof symbol$1 !== "undefined" && getIteratorMethod(iter) != null || iter["@@iterator"] != null) return from_1(iter);
  }

  module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
unwrapExports(iterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
  }

  module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
var _toConsumableArray = unwrapExports(toConsumableArray);

var symbol = symbol$4;

var concat$5 = entryVirtual('Array').concat;

var ArrayPrototype$f = Array.prototype;

var concat$4 = function (it) {
  var own = it.concat;
  return it === ArrayPrototype$f || objectIsPrototypeOf(ArrayPrototype$f, it) && own === ArrayPrototype$f.concat ? concat$5 : own;
};

var concat$3 = concat$4;

var concat$2 = concat$3;

var slice = slice$4;

// https://tc39.es/ecma262/#sec-reflect.ownkeys

_export({
  target: 'Reflect',
  stat: true
}, {
  ownKeys: ownKeys$5
});

var ownKeys$4 = path.Reflect.ownKeys;

var ownKeys$3 = ownKeys$4;

var ownKeys$2 = ownKeys$3;

var isArray = isArray$4;

var $map = arrayIteration.map;
var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$2
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var map$6 = entryVirtual('Array').map;

var ArrayPrototype$e = Array.prototype;

var map$5 = function (it) {
  var own = it.map;
  return it === ArrayPrototype$e || objectIsPrototypeOf(ArrayPrototype$e, it) && own === ArrayPrototype$e.map ? map$6 : own;
};

var map$4 = map$5;

var map$3 = map$4;

var FAILS_ON_PRIMITIVES$2 = fails(function () {
  objectKeys(1);
}); // `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys

_export({
  target: 'Object',
  stat: true,
  forced: FAILS_ON_PRIMITIVES$2
}, {
  keys: function keys(it) {
    return objectKeys(toObject(it));
  }
});

var keys$6 = path.Object.keys;

var keys$5 = keys$6;

var keys$4 = keys$5;

var Date$1 = global_1.Date;
var getTime = functionUncurryThis(Date$1.prototype.getTime); // `Date.now` method
// https://tc39.es/ecma262/#sec-date.now

_export({
  target: 'Date',
  stat: true
}, {
  now: function now() {
    return getTime(new Date$1());
  }
});

var now$3 = path.Date.now;

var now$2 = now$3;

var now$1 = now$2;

var Function$2 = global_1.Function;
var concat$1 = functionUncurryThis([].concat);
var join = functionUncurryThis([].join);
var factories = {};

var construct$3 = function (C, argsLength, args) {
  if (!hasOwnProperty_1(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';

    factories[argsLength] = Function$2('C,a', 'return new C(' + join(list, ',') + ')');
  }

  return factories[argsLength](C, args);
}; // `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind


var functionBind = functionBindNative ? Function$2.bind : function bind(that
/* , ...args */
) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);

  var boundFunction = function
    /* args... */
  bound() {
    var args = concat$1(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct$3(F, args.length, args) : F.apply(that, args);
  };

  if (isObject$1(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};

// https://tc39.es/ecma262/#sec-function.prototype.bind

_export({
  target: 'Function',
  proto: true,
  forced: Function.bind !== functionBind
}, {
  bind: functionBind
});

var bind$3 = entryVirtual('Function').bind;

var FunctionPrototype = Function.prototype;

var bind$2 = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || objectIsPrototypeOf(FunctionPrototype, it) && own === FunctionPrototype.bind ? bind$3 : own;
};

var bind$1 = bind$2;

var bind = bind$1;

var arrayMethodIsStrict = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () {
      return 1;
    }, 1);
  });
};

var $forEach = arrayIteration.forEach;
var STRICT_METHOD$4 = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach

var arrayForEach = !STRICT_METHOD$4 ? function forEach(callbackfn
/* , thisArg */
) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;

// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe


_export({
  target: 'Array',
  proto: true,
  forced: [].forEach != arrayForEach
}, {
  forEach: arrayForEach
});

var forEach$5 = entryVirtual('Array').forEach;

var forEach$4 = forEach$5;

var ArrayPrototype$d = Array.prototype;
var DOMIterables$3 = {
  DOMTokenList: true,
  NodeList: true
};

var forEach$3 = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype$d || objectIsPrototypeOf(ArrayPrototype$d, it) && own === ArrayPrototype$d.forEach || hasOwnProperty_1(DOMIterables$3, classof(it)) ? forEach$4 : own;
};

var forEach$2 = forEach$3;

var un$Reverse = functionUncurryThis([].reverse);
var test$1 = [1, 2]; // `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794

_export({
  target: 'Array',
  proto: true,
  forced: String(test$1) === String(test$1.reverse())
}, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray$6(this)) this.length = this.length;
    return un$Reverse(this);
  }
});

var reverse$3 = entryVirtual('Array').reverse;

var ArrayPrototype$c = Array.prototype;

var reverse$2 = function (it) {
  var own = it.reverse;
  return it === ArrayPrototype$c || objectIsPrototypeOf(ArrayPrototype$c, it) && own === ArrayPrototype$c.reverse ? reverse$3 : own;
};

var reverse$1 = reverse$2;

var reverse = reverse$1;

var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('splice');
var TypeError$8 = global_1.TypeError;
var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$1
}, {
  splice: function splice(start, deleteCount
  /* , ...items */
  ) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
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

    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError$8(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }

    A = arraySpeciesCreate(O, actualDeleteCount);

    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }

    A.length = actualDeleteCount;

    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];else delete O[to];
      }

      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];else delete O[to];
      }
    }

    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }

    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});

var splice$3 = entryVirtual('Array').splice;

var ArrayPrototype$b = Array.prototype;

var splice$2 = function (it) {
  var own = it.splice;
  return it === ArrayPrototype$b || objectIsPrototypeOf(ArrayPrototype$b, it) && own === ArrayPrototype$b.splice ? splice$3 : own;
};

var splice$1 = splice$2;

var splice = splice$1;

var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

var defineProperty$2 = Object.defineProperty;
var concat = functionUncurryThis([].concat); // `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign

var objectAssign = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (descriptors && $assign({
    b: 1
  }, $assign(defineProperty$2({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty$2(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line es/no-symbol -- safe

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  var propertyIsEnumerable = objectPropertyIsEnumerable.f;

  while (argumentsLength > index) {
    var S = indexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!descriptors || functionCall(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing

_export({
  target: 'Object',
  stat: true,
  forced: Object.assign !== objectAssign
}, {
  assign: objectAssign
});

var assign$4 = path.Object.assign;

var assign$3 = assign$4;

var assign$2 = assign$3;

var $includes = arrayIncludes.includes; // `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes

_export({
  target: 'Array',
  proto: true
}, {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

var includes$4 = entryVirtual('Array').includes;

var MATCH$1 = wellKnownSymbol('match'); // `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp

var isRegexp = function (it) {
  var isRegExp;
  return isObject$1(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
};

var TypeError$7 = global_1.TypeError;

var notARegexp = function (it) {
  if (isRegexp(it)) {
    throw TypeError$7("The method doesn't accept regular expressions");
  }

  return it;
};

var MATCH = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;

  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) {
      /* empty */
    }
  }

  return false;
};

var stringIndexOf = functionUncurryThis(''.indexOf); // `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes

_export({
  target: 'String',
  proto: true,
  forced: !correctIsRegexpLogic('includes')
}, {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~stringIndexOf(toString_1(requireObjectCoercible(this)), toString_1(notARegexp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
  }
});

var includes$3 = entryVirtual('String').includes;

var ArrayPrototype$a = Array.prototype;
var StringPrototype$1 = String.prototype;

var includes$2 = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype$a || objectIsPrototypeOf(ArrayPrototype$a, it) && own === ArrayPrototype$a.includes) return includes$4;

  if (typeof it == 'string' || it === StringPrototype$1 || objectIsPrototypeOf(StringPrototype$1, it) && own === StringPrototype$1.includes) {
    return includes$3;
  }

  return own;
};

var includes$1 = includes$2;

var includes = includes$1;

var FAILS_ON_PRIMITIVES$1 = fails(function () {
  objectGetPrototypeOf(1);
}); // `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof

_export({
  target: 'Object',
  stat: true,
  forced: FAILS_ON_PRIMITIVES$1,
  sham: !correctPrototypeGetter
}, {
  getPrototypeOf: function getPrototypeOf(it) {
    return objectGetPrototypeOf(toObject(it));
  }
});

var getPrototypeOf$6 = path.Object.getPrototypeOf;

var getPrototypeOf$5 = getPrototypeOf$6;

var getPrototypeOf$4 = getPrototypeOf$5;

var $filter = arrayIteration.filter;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT
}, {
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var filter$3 = entryVirtual('Array').filter;

var ArrayPrototype$9 = Array.prototype;

var filter$2 = function (it) {
  var own = it.filter;
  return it === ArrayPrototype$9 || objectIsPrototypeOf(ArrayPrototype$9, it) && own === ArrayPrototype$9.filter ? filter$3 : own;
};

var filter$1 = filter$2;

var filter = filter$1;

var $propertyIsEnumerable = objectPropertyIsEnumerable.f;
var propertyIsEnumerable = functionUncurryThis($propertyIsEnumerable);
var push$2 = functionUncurryThis([].push); // `Object.{ entries, values }` methods implementation

var createMethod$2 = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!descriptors || propertyIsEnumerable(O, key)) {
        push$2(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

var objectToArray = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod$2(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod$2(false)
};

var $values = objectToArray.values; // `Object.values` method
// https://tc39.es/ecma262/#sec-object.values

_export({
  target: 'Object',
  stat: true
}, {
  values: function values(O) {
    return $values(O);
  }
});

var values$6 = path.Object.values;

var values$5 = values$6;

var values$4 = values$5;

// a string of all valid unicode whitespaces
var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var replace$1 = functionUncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

var createMethod$1 = function (TYPE) {
  return function ($this) {
    var string = toString_1(requireObjectCoercible($this));
    if (TYPE & 1) string = replace$1(string, ltrim, '');
    if (TYPE & 2) string = replace$1(string, rtrim, '');
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

var trim$5 = stringTrim.trim;
var $parseInt = global_1.parseInt;
var Symbol$2 = global_1.Symbol;
var ITERATOR$1 = Symbol$2 && Symbol$2.iterator;
var hex = /^[+-]?0x/i;
var exec$1 = functionUncurryThis(hex.exec);
var FORCED$4 = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22 // MS Edge 18- broken with boxed symbols
|| ITERATOR$1 && !fails(function () {
  $parseInt(Object(ITERATOR$1));
}); // `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix

var numberParseInt = FORCED$4 ? function parseInt(string, radix) {
  var S = trim$5(toString_1(string));
  return $parseInt(S, radix >>> 0 || (exec$1(hex, S) ? 16 : 10));
} : $parseInt;

// https://tc39.es/ecma262/#sec-parseint-string-radix

_export({
  global: true,
  forced: parseInt != numberParseInt
}, {
  parseInt: numberParseInt
});

var _parseInt$2 = path.parseInt;

var _parseInt$1 = _parseInt$2;

var _parseInt = _parseInt$1;

/* eslint-disable es/no-array-prototype-indexof -- required for testing */


var $IndexOf = arrayIncludes.indexOf;
var un$IndexOf = functionUncurryThis([].indexOf);
var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
var STRICT_METHOD$3 = arrayMethodIsStrict('indexOf'); // `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof

_export({
  target: 'Array',
  proto: true,
  forced: NEGATIVE_ZERO || !STRICT_METHOD$3
}, {
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO // convert -0 to +0
    ? un$IndexOf(this, searchElement, fromIndex) || 0 : $IndexOf(this, searchElement, fromIndex);
  }
});

var indexOf$3 = entryVirtual('Array').indexOf;

var ArrayPrototype$8 = Array.prototype;

var indexOf$2 = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype$8 || objectIsPrototypeOf(ArrayPrototype$8, it) && own === ArrayPrototype$8.indexOf ? indexOf$3 : own;
};

var indexOf$1 = indexOf$2;

var indexOf = indexOf$1;

var PROPER_FUNCTION_NAME = functionName.PROPER;
var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
// of whitespaces and has a correct name

var stringTrimForced = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};

var $trim = stringTrim.trim; // `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim

_export({
  target: 'String',
  proto: true,
  forced: stringTrimForced('trim')
}, {
  trim: function trim() {
    return $trim(this);
  }
});

var trim$4 = entryVirtual('String').trim;

var StringPrototype = String.prototype;

var trim$3 = function (it) {
  var own = it.trim;
  return typeof it == 'string' || it === StringPrototype || objectIsPrototypeOf(StringPrototype, it) && own === StringPrototype.trim ? trim$4 : own;
};

var trim$2 = trim$3;

var trim$1 = trim$2;

// https://tc39.es/ecma262/#sec-object.create

_export({
  target: 'Object',
  stat: true,
  sham: !descriptors
}, {
  create: objectCreate
});

var Object$1 = path.Object;

var create$5 = function create(P, D) {
  return Object$1.create(P, D);
};

var create$4 = create$5;

var create$3 = create$4;

var Array$1 = global_1.Array;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = functionUncurryThis(/./.exec);
var charAt$1 = functionUncurryThis(''.charAt);
var charCodeAt = functionUncurryThis(''.charCodeAt);
var replace = functionUncurryThis(''.replace);
var numberToString = functionUncurryThis(1.0.toString);
var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = charAt$1(string, offset - 1);
  var next = charAt$1(string, offset + 1);

  if (exec(low, match) && !exec(hi, next) || exec(hi, match) && !exec(low, prev)) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  }

  return match;
};

var FORCED$3 = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify('\uDEAD') !== '"\\udead"';
});

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  // https://github.com/tc39/proposal-well-formed-stringify
  _export({
    target: 'JSON',
    stat: true,
    forced: FORCED$3
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      for (var i = 0, l = arguments.length, args = Array$1(l); i < l; i++) args[i] = arguments[i];

      var result = functionApply($stringify, null, args);
      return typeof result == 'string' ? replace(result, tester, fix) : result;
    }
  });
}

if (!path.JSON) path.JSON = {
  stringify: JSON.stringify
}; // eslint-disable-next-line no-unused-vars -- required for `.length`

var stringify$3 = function stringify(it, replacer, space) {
  return functionApply(path.JSON.stringify, null, arguments);
};

var stringify$2 = stringify$3;

var stringify$1 = stringify$2;

var TypeError$6 = global_1.TypeError;

var validateArgumentsLength = function (passed, required) {
  if (passed < required) throw TypeError$6('Not enough arguments');
  return passed;
};

var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check

var Function$1 = global_1.Function;

var wrap = function (scheduler) {
  return function (handler, timeout
  /* , ...arguments */
  ) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > 2;
    var fn = isCallable(handler) ? handler : Function$1(handler);
    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      functionApply(fn, this, args);
    } : fn, timeout);
  };
}; // ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


_export({
  global: true,
  bind: true,
  forced: MSIE
}, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global_1.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global_1.setInterval)
});

var setTimeout$2 = path.setTimeout;

var setTimeout$1 = setTimeout$2;

// https://tc39.es/ecma262/#sec-array.prototype.fill


var arrayFill = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) O[index++] = value;

  return O;
};

// https://tc39.es/ecma262/#sec-array.prototype.fill

_export({
  target: 'Array',
  proto: true
}, {
  fill: arrayFill
}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

var fill$3 = entryVirtual('Array').fill;

var ArrayPrototype$7 = Array.prototype;

var fill$2 = function (it) {
  var own = it.fill;
  return it === ArrayPrototype$7 || objectIsPrototypeOf(ArrayPrototype$7, it) && own === ArrayPrototype$7.fill ? fill$3 : own;
};

var fill$1 = fill$2;

var fill = fill$1;

var componentEmitter = createCommonjsModule(function (module) {
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


  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
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


  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {}; // all

    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    } // specific event


    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this; // remove all handlers

    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    } // remove specific handler


    var cb;

    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];

      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    } // Remove event specific arrays for event types that no
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


  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1),
        callbacks = this._callbacks['$' + event];

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


  Emitter.prototype.listeners = function (event) {
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


  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };
});

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
var SUPPORT_TOUCH = ('ontouchstart' in win);
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


var TouchAction = /*#__PURE__*/function () {
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


function hasParent$1(node, parent) {
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

  if (hasParent$1(srcEventTarget, target)) {
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


var Input = /*#__PURE__*/function () {
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


var PointerEventInput = /*#__PURE__*/function (_Input) {
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


function toArray$1(obj) {
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

var TouchInput = /*#__PURE__*/function (_Input) {
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
  var allTouches = toArray$1(ev.touches);
  var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

  if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
    targetIds[allTouches[0].identifier] = true;
    return [allTouches, allTouches];
  }

  var i;
  var targetTouches;
  var changedTouches = toArray$1(ev.changedTouches);
  var changedTargetTouches = [];
  var target = this.target; // get target touches from touches

  targetTouches = allTouches.filter(function (touch) {
    return hasParent$1(touch.target, target);
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

var MouseInput = /*#__PURE__*/function (_Input) {
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

var TouchMouseInput = /*#__PURE__*/function () {
  var TouchMouseInput = /*#__PURE__*/function (_Input) {
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


var Recognizer = /*#__PURE__*/function () {
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


var TapRecognizer = /*#__PURE__*/function (_Recognizer) {
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


var AttrRecognizer = /*#__PURE__*/function (_Recognizer) {
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


var PanRecognizer = /*#__PURE__*/function (_AttrRecognizer) {
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


var SwipeRecognizer = /*#__PURE__*/function (_AttrRecognizer) {
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


var PinchRecognizer = /*#__PURE__*/function (_AttrRecognizer) {
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


var RotateRecognizer = /*#__PURE__*/function (_AttrRecognizer) {
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


var PressRecognizer = /*#__PURE__*/function (_Recognizer) {
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


var Manager = /*#__PURE__*/function () {
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

var SingleTouchInput = /*#__PURE__*/function (_Input) {
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
  var all = toArray$1(ev.touches);
  var changed = toArray$1(ev.changedTouches);

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


var extend$1 = deprecate(function (dest, src, merge) {
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

var merge$1 = deprecate(function (dest, src) {
  return extend$1(dest, src, true);
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


var Hammer$3 = /*#__PURE__*/function () {
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
  Hammer.merge = merge$1;
  Hammer.extend = extend$1;
  Hammer.bindFn = bindFn;
  Hammer.assign = assign$1;
  Hammer.inherit = inherit;
  Hammer.bindFn = bindFn;
  Hammer.prefixed = prefixed;
  Hammer.toArray = toArray$1;
  Hammer.inArray = inArray;
  Hammer.uniqueArray = uniqueArray;
  Hammer.splitStr = splitStr;
  Hammer.boolOrFn = boolOrFn;
  Hammer.hasParent = hasParent$1;
  Hammer.addEventListeners = addEventListeners;
  Hammer.removeEventListeners = removeEventListeners;
  Hammer.defaults = assign$1({}, defaults, {
    preset: preset
  });
  return Hammer;
}(); //  style loader but by script tag, not by the loader.
var RealHammer = Hammer$3;

function ownKeys$1(object, enumerableOnly) { var keys = keys$4(object); if (getOwnPropertySymbols) { var symbols = getOwnPropertySymbols(object); enumerableOnly && (symbols = filter(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var _context22, _context23; var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? forEach$2(_context22 = ownKeys$1(Object(source), !0)).call(_context22, function (key) { _defineProperty(target, key, source[key]); }) : getOwnPropertyDescriptors ? defineProperties(target, getOwnPropertyDescriptors(source)) : forEach$2(_context23 = ownKeys$1(Object(source))).call(_context23, function (key) { defineProperty$7(target, key, getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof symbol !== "undefined" && getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { var _context21; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = slice(_context21 = Object.prototype.toString.call(o)).call(_context21, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from_1$3(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
/**
 * Use this symbol to delete properies in deepObjectAssign.
 */

var DELETE = symbol("DELETE");
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

  return deepObjectAssign.apply(void 0, concat$2(_context = [{}, base]).call(_context, updates));
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

    return deepObjectAssignNonentry.apply(void 0, concat$2(_context2 = [deepObjectAssign(values[0], values[1])]).call(_context2, _toConsumableArray(slice(values).call(values, 2))));
  }

  var a = values[0];
  var b = values[1];

  var _iterator = _createForOfIteratorHelper$1(ownKeys$2(b)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var prop = _step.value;
      if (!Object.prototype.propertyIsEnumerable.call(b, prop)) ;else if (b[prop] === DELETE) {
        delete a[prop];
      } else if (a[prop] !== null && b[prop] !== null && _typeof(a[prop]) === "object" && _typeof(b[prop]) === "object" && !isArray(a[prop]) && !isArray(b[prop])) {
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
  if (isArray(a)) {
    return map$3(a).call(a, function (value) {
      return clone(value);
    });
  } else if (_typeof(a) === "object" && a !== null) {
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
  for (var _i = 0, _Object$keys = keys$4(a); _i < _Object$keys.length; _i++) {
    var prop = _Object$keys[_i];

    if (a[prop] === DELETE) {
      delete a[prop];
    } else if (_typeof(a[prop]) === "object" && a[prop] !== null) {
      stripDelete(a[prop]);
    }
  }
}
/**
 * Seedable, fast and reasonably good (not crypto but more than okay for our
 * needs) random number generator.
 *
 * @remarks
 * Adapted from {@link https://web.archive.org/web/20110429100736/http://baagoe.com:80/en/RandomMusings/javascript}.
 * Original algorithm created by Johannes Baagøe \<baagoe\@baagoe.com\> in 2010.
 */

/**
 * Create a seeded pseudo random generator based on Alea by Johannes Baagøe.
 *
 * @param seed - All supplied arguments will be used as a seed. In case nothing
 * is supplied the current time will be used to seed the generator.
 * @returns A ready to use seeded generator.
 */


function Alea() {
  for (var _len3 = arguments.length, seed = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    seed[_key3] = arguments[_key3];
  }

  return AleaImplementation(seed.length ? seed : [now$1()]);
}
/**
 * An implementation of [[Alea]] without user input validation.
 *
 * @param seed - The data that will be used to seed the generator.
 * @returns A ready to use seeded generator.
 */


function AleaImplementation(seed) {
  var _mashSeed = mashSeed(seed),
      _mashSeed2 = _slicedToArray(_mashSeed, 3),
      s0 = _mashSeed2[0],
      s1 = _mashSeed2[1],
      s2 = _mashSeed2[2];

  var c = 1;

  var random = function random() {
    var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32

    s0 = s1;
    s1 = s2;
    return s2 = t - (c = t | 0);
  };

  random.uint32 = function () {
    return random() * 0x100000000;
  }; // 2^32


  random.fract53 = function () {
    return random() + (random() * 0x200000 | 0) * 1.1102230246251565e-16;
  }; // 2^-53


  random.algorithm = "Alea";
  random.seed = seed;
  random.version = "0.9";
  return random;
}
/**
 * Turn arbitrary data into values [[AleaImplementation]] can use to generate
 * random numbers.
 *
 * @param seed - Arbitrary data that will be used as the seed.
 * @returns Three numbers to use as initial values for [[AleaImplementation]].
 */


function mashSeed() {
  var mash = Mash();
  var s0 = mash(" ");
  var s1 = mash(" ");
  var s2 = mash(" ");

  for (var i = 0; i < arguments.length; i++) {
    s0 -= mash(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (s0 < 0) {
      s0 += 1;
    }

    s1 -= mash(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (s1 < 0) {
      s1 += 1;
    }

    s2 -= mash(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (s2 < 0) {
      s2 += 1;
    }
  }

  return [s0, s1, s2];
}
/**
 * Create a new mash function.
 *
 * @returns A nonpure function that takes arbitrary [[Mashable]] data and turns
 * them into numbers.
 */


function Mash() {
  var n = 0xefc8249d;
  return function (data) {
    var string = data.toString();

    for (var i = 0; i < string.length; i++) {
      n += string.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }

    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };
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
  hammer.on("tap", bind(_context3 = this._onTapOverlay).call(_context3, this));

  this._cleanupQueue.push(function () {
    hammer.destroy(); // FIXME: cleaning up hammer instances doesn't work (Timeline not removed
    // from memory)
  }); // block all touch events (except tap)


  var events = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];

  forEach$2(events).call(events, function (event) {
    hammer.on(event, function (event) {
      event.srcEvent.stopPropagation();
    });
  }); // attach a click event to the window, in order to deactivate when clicking outside the timeline


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
  } // prepare escape key listener for deactivating when active


  this._escListener = function (event) {
    if ("key" in event ? event.key === "Escape" : event.keyCode === 27
    /* the keyCode is for IE11 */
    ) {
      _this.deactivate();
    }
  };
} // turn into an event emitter


componentEmitter(Activator$1.prototype); // The currently active activator

Activator$1.current = null;
/**
 * Destroy the activator. Cleans up all created DOM and event listeners
 */

Activator$1.prototype.destroy = function () {
  var _context4, _context5;

  this.deactivate();

  var _iterator2 = _createForOfIteratorHelper$1(reverse(_context4 = splice(_context5 = this._cleanupQueue).call(_context5, 0)).call(_context4)),
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
  this.emit("activate"); // ugly hack: bind ESC after emitting the events, as the Network rebinds all
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
} // utility functions
// parse ASP.Net Date pattern,
// for example '/Date(1198908717056)/' or '/Date(1198908717056-0700)/'
// code from http://momentjs.com/


var ASPDateRegex = /^\/?Date\((-?\d+)/i; // Color REs

var fullHexRE = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
var shortHexRE = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
var rgbRE = /^rgb\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *\)$/i;
var rgbaRE = /^rgba\( *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *(1?\d{1,2}|2[0-4]\d|25[0-5]) *, *([01]|0?\.\d+) *\)$/i;
/**
 * Test whether given object is a number.
 *
 * @param value - Input value of unknown type.
 * @returns True if number, false otherwise.
 */

function isNumber(value) {
  return value instanceof Number || typeof value === "number";
}
/**
 * Remove everything in the DOM object.
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
 * Test whether given object is a string.
 *
 * @param value - Input value of unknown type.
 * @returns True if string, false otherwise.
 */


function isString(value) {
  return value instanceof String || typeof value === "string";
}
/**
 * Test whether given object is a object (not primitive or null).
 *
 * @param value - Input value of unknown type.
 * @returns True if not null object, false otherwise.
 */


function isObject(value) {
  return _typeof(value) === "object" && value !== null;
}
/**
 * Test whether given object is a Date, or a String containing a Date.
 *
 * @param value - Input value of unknown type.
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
 * Fill an object with a possibly partially defined other object.
 *
 * Only copies values for the properties already present in a.
 * That means an object is not created on a property if only the b object has it.
 *
 * @param a - The object that will have it's properties updated.
 * @param b - The object with property updates.
 * @param allowDeletion - If true, delete properties in a that are explicitly set to null in b.
 */


function fillIfDefined(a, b) {
  var allowDeletion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // NOTE: iteration of properties of a
  // NOTE: prototype properties iterated over as well
  for (var prop in a) {
    if (b[prop] !== undefined) {
      if (b[prop] === null || _typeof(b[prop]) !== "object") {
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
 * @returns The target object.
 */


var extend = assign$2;
/**
 * Extend object a with selected properties of object b or a series of objects.
 *
 * @remarks
 * Only properties with defined values are copied.
 * @param props - Properties to be copied to a.
 * @param a - The target.
 * @param others - The sources.
 * @returns Argument a.
 */

function selectiveExtend(props, a) {
  if (!isArray(props)) {
    throw new Error("Array with property names expected as first argument");
  }

  for (var _len4 = arguments.length, others = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    others[_key4 - 2] = arguments[_key4];
  }

  for (var _i2 = 0, _others = others; _i2 < _others.length; _i2++) {
    var other = _others[_i2];

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
  if (isArray(b)) {
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
      } else if (isArray(b[prop])) {
        throw new TypeError("Arrays are not supported by deepExtend");
      } else {
        copyOrDelete(a, b, prop, allowDeletion);
      }
    }
  }

  return a;
}
/**
 * Extend object `a` with properties of object `b`, ignoring properties which
 * are explicitly specified to be excluded.
 *
 * @remarks
 * The properties of `b` are considered for copying. Properties which are
 * themselves objects are are also extended. Only properties with defined
 * values are copied.
 * @param propsToExclude - Names of properties which should *not* be copied.
 * @param a - Object to extend.
 * @param b - Object to take properties from for extension.
 * @param allowDeletion - If true, delete properties in a that are explicitly
 * set to null in b.
 * @returns Argument a.
 */


function selectiveNotDeepExtend(propsToExclude, a, b) {
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  // TODO: add support for Arrays to deepExtend
  // NOTE: array properties have an else-below; apparently, there is a problem here.
  if (isArray(b)) {
    throw new TypeError("Arrays are not supported by deepExtend");
  }

  for (var prop in b) {
    if (!Object.prototype.hasOwnProperty.call(b, prop)) {
      continue;
    } // Handle local properties only


    if (includes(propsToExclude).call(propsToExclude, prop)) {
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
    } else if (isArray(b[prop])) {
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
      if (_typeof(b[prop]) === "object" && b[prop] !== null && getPrototypeOf$4(b[prop]) === Object.prototype) {
        if (a[prop] === undefined) {
          a[prop] = deepExtend({}, b[prop], protoExtend); // NOTE: allowDeletion not propagated!
        } else if (_typeof(a[prop]) === "object" && a[prop] !== null && getPrototypeOf$4(a[prop]) === Object.prototype) {
          deepExtend(a[prop], b[prop], protoExtend); // NOTE: allowDeletion not propagated!
        } else {
          copyOrDelete(a, b, prop, allowDeletion);
        }
      } else if (isArray(b[prop])) {
        var _context6;

        a[prop] = slice(_context6 = b[prop]).call(_context6);
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
 * Get the type of an object, for example exports.getType([]) returns 'Array'.
 *
 * @param object - Input value of unknown type.
 * @returns Detected type.
 */


function getType(object) {
  var type = _typeof(object);

  if (type === "object") {
    if (object === null) {
      return "null";
    }

    if (object instanceof Boolean) {
      return "Boolean";
    }

    if (object instanceof Number) {
      return "Number";
    }

    if (object instanceof String) {
      return "String";
    }

    if (isArray(object)) {
      return "Array";
    }

    if (object instanceof Date) {
      return "Date";
    }

    return "Object";
  }

  if (type === "number") {
    return "Number";
  }

  if (type === "boolean") {
    return "Boolean";
  }

  if (type === "string") {
    return "String";
  }

  if (type === undefined) {
    return "undefined";
  }

  return type;
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

  return concat$2(_context7 = []).call(_context7, _toConsumableArray(arr), [newValue]);
}
/**
 * Used to extend an array and copy it. This is used to propagate paths recursively.
 *
 * @param arr - The array to be copied.
 * @returns Shallow copy of arr.
 */


function copyArray(arr) {
  return slice(arr).call(arr);
}
/**
 * Retrieve the absolute left value of a DOM element.
 *
 * @param elem - A dom element, for example a div.
 * @returns The absolute left position of this element in the browser page.
 */


function getAbsoluteLeft(elem) {
  return elem.getBoundingClientRect().left;
}
/**
 * Retrieve the absolute right value of a DOM element.
 *
 * @param elem - A dom element, for example a div.
 * @returns The absolute right position of this element in the browser page.
 */


function getAbsoluteRight(elem) {
  return elem.getBoundingClientRect().right;
}
/**
 * Retrieve the absolute top value of a DOM element.
 *
 * @param elem - A dom element, for example a div.
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
  var classes = elem.className.split(" ");
  var newClasses = classNames.split(" ");
  classes = concat$2(classes).call(classes, filter(newClasses).call(newClasses, function (className) {
    return !includes(classes).call(classes, className);
  }));
  elem.className = classes.join(" ");
}
/**
 * Remove a className from the given elements style.
 *
 * @param elem - The element from which the classes will be removed.
 * @param classNames - Space separated list of classes.
 */


function removeClassName(elem, classNames) {
  var classes = elem.className.split(" ");
  var oldClasses = classNames.split(" ");
  classes = filter(classes).call(classes, function (className) {
    return !includes(oldClasses).call(oldClasses, className);
  });
  elem.className = classes.join(" ");
}
/**
 * For each method for both arrays and objects.
 * In case of an array, the built-in Array.forEach() is applied (**No, it's not!**).
 * In case of an Object, the method loops over all properties of the object.
 *
 * @param object - An Object or Array to be iterated over.
 * @param callback - Array.forEach-like callback.
 */


function forEach$1(object, callback) {
  if (isArray(object)) {
    // array
    var len = object.length;

    for (var i = 0; i < len; i++) {
      callback(object[i], i, object);
    }
  } else {
    // object
    for (var key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }
}
/**
 * Convert an object into an array: all objects properties are put into the array. The resulting array is unordered.
 *
 * @param o - Object that contains the properties and methods.
 * @returns An array of unordered values.
 */


var toArray = values$4;
/**
 * Update a property in an object.
 *
 * @param object - The object whose property will be updated.
 * @param key - Name of the property to be updated.
 * @param value - The new value to be assigned.
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
    var _context8;

    if (useCapture === undefined) {
      useCapture = false;
    }

    if (action === "mousewheel" && includes(_context8 = navigator.userAgent).call(_context8, "Firefox")) {
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

    if (action === "mousewheel" && includes(_context9 = navigator.userAgent).call(_context9, "Firefox")) {
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
 * Get HTML element which is the target of the event.
 *
 * @param event - The event.
 * @returns The element or null if not obtainable.
 */


function getTarget() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.event;
  // code from http://www.quirksmode.org/js/events_properties.html
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
 * Check if given element contains given parent somewhere in the DOM tree.
 *
 * @param element - The element to be tested.
 * @param parent - The ancestor (not necessarily parent) of the element.
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
   * @param value - Value to be converted intoboolean, a function will be executed as `(() => unknown)`.
   * @param defaultValue - If the value or the return value of the function == null then this will be returned.
   * @returns Corresponding boolean value, if none then the default value, if none then null.
   */
  asBoolean: function asBoolean(value, defaultValue) {
    if (typeof value == "function") {
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
   * @param value - Value to be converted intonumber, a function will be executed as `(() => unknown)`.
   * @param defaultValue - If the value or the return value of the function == null then this will be returned.
   * @returns Corresponding **boxed** number value, if none then the default value, if none then null.
   */
  asNumber: function asNumber(value, defaultValue) {
    if (typeof value == "function") {
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
   * @param value - Value to be converted intostring, a function will be executed as `(() => unknown)`.
   * @param defaultValue - If the value or the return value of the function == null then this will be returned.
   * @returns Corresponding **boxed** string value, if none then the default value, if none then null.
   */
  asString: function asString(value, defaultValue) {
    if (typeof value == "function") {
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
   * @param value - Value to be converted intosize, a function will be executed as `(() => unknown)`.
   * @param defaultValue - If the value or the return value of the function == null then this will be returned.
   * @returns Corresponding string value (number + 'px'), if none then the default value, if none then null.
   */
  asSize: function asSize(value, defaultValue) {
    if (typeof value == "function") {
      value = value();
    }

    if (isString(value)) {
      return value;
    } else if (isNumber(value)) {
      return value + "px";
    } else {
      return defaultValue || null;
    }
  },

  /**
   * Convert a value into a DOM Element.
   *
   * @param value - Value to be converted into DOM Element, a function will be executed as `(() => unknown)`.
   * @param defaultValue - If the value or the return value of the function == null then this will be returned.
   * @returns The DOM Element, if none then the default value, if none then null.
   */
  asElement: function asElement(value, defaultValue) {
    if (typeof value == "function") {
      value = value();
    }

    return value || defaultValue || null;
  }
};
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
        r: _parseInt(result[1] + result[1], 16),
        g: _parseInt(result[2] + result[2], 16),
        b: _parseInt(result[3] + result[3], 16)
      } : null;

    case 6:
    case 7:
      result = fullHexRE.exec(hex);
      return result ? {
        r: _parseInt(result[1], 16),
        g: _parseInt(result[2], 16),
        b: _parseInt(result[3], 16)
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
 * @returns RGBA string, for example 'rgba(255, 0, 127, 0.3)'.
 */


function overrideOpacity(color, opacity) {
  if (includes(color).call(color, "rgba")) {
    return color;
  } else if (includes(color).call(color, "rgb")) {
    var rgb = color.substr(indexOf(color).call(color, "(") + 1).replace(")", "").split(",");
    return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + opacity + ")";
  } else {
    var _rgb = hexToRGB(color);

    if (_rgb == null) {
      return color;
    } else {
      return "rgba(" + _rgb.r + "," + _rgb.g + "," + _rgb.b + "," + opacity + ")";
    }
  }
}
/**
 * Convert RGB \<0, 255\> into hex color string.
 *
 * @param red - Red channel.
 * @param green - Green channel.
 * @param blue - Blue channel.
 * @returns Hex color string (for example: '#0acdc0').
 */


function RGBToHex(red, green, blue) {
  var _context10;

  return "#" + slice(_context10 = ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16)).call(_context10, 1);
}
/**
 * Parse a color property into an object with border, background, and highlight colors.
 *
 * @param inputColor - Shorthand color string or input color object.
 * @param defaultColor - Full color object to fill in missing values in inputColor.
 * @returns Color object.
 */


function parseColor(inputColor, defaultColor) {
  if (isString(inputColor)) {
    var colorStr = inputColor;

    if (isValidRGB(colorStr)) {
      var _context11;

      var rgb = map$3(_context11 = colorStr.substr(4).substr(0, colorStr.length - 5).split(",")).call(_context11, function (value) {
        return _parseInt(value);
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
 * Convert RGB \<0, 255\> into HSV object.
 *
 * @remarks
 * {@link http://www.javascripter.net/faq/rgb2hsv.htm}
 * @param red - Red channel.
 * @param green - Green channel.
 * @param blue - Blue channel.
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
    var _context12;

    var styles = {};

    forEach$2(_context12 = cssText.split(";")).call(_context12, function (style) {
      if (trim$1(style).call(style) != "") {
        var _context13, _context14;

        var parts = style.split(":");

        var key = trim$1(_context13 = parts[0]).call(_context13);

        var value = trim$1(_context14 = parts[1]).call(_context14);

        styles[key] = value;
      }
    });

    return styles;
  },
  // build a css text string from an object with key/values
  join: function join(styles) {
    var _context15;

    return map$3(_context15 = keys$4(styles)).call(_context15, function (key) {
      return key + ": " + styles[key];
    }).join("; ");
  }
};
/**
 * Append a string with css styles to an element.
 *
 * @param element - The element that will receive new styles.
 * @param cssText - The styles to be appended.
 */

function addCssText(element, cssText) {
  var currentStyles = cssUtil.split(element.style.cssText);
  var newStyles = cssUtil.split(cssText);

  var styles = _objectSpread$1(_objectSpread$1({}, currentStyles), newStyles);

  element.style.cssText = cssUtil.join(styles);
}
/**
 * Remove a string with css styles from an element.
 *
 * @param element - The element from which styles should be removed.
 * @param cssText - The styles to be removed.
 */


function removeCssText(element, cssText) {
  var styles = cssUtil.split(element.style.cssText);
  var removeStyles = cssUtil.split(cssText);

  for (var key in removeStyles) {
    if (Object.prototype.hasOwnProperty.call(removeStyles, key)) {
      delete styles[key];
    }
  }

  element.style.cssText = cssUtil.join(styles);
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
 * Convert HSV \<0, 1\> into hex color string.
 *
 * @param h - Hue.
 * @param s - Saturation.
 * @param v - Value.
 * @returns Hex color string.
 */


function HSVToHex(h, s, v) {
  var rgb = HSVToRGB(h, s, v);
  return RGBToHex(rgb.r, rgb.g, rgb.b);
}
/**
 * Convert hex color string into HSV \<0, 1\>.
 *
 * @param hex - Hex color string.
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
 * @returns True if the string is valid, false otherwise.
 */


function isValidRGB(rgb) {
  return rgbRE.test(rgb);
}
/**
 * Validate RGBA color string.
 *
 * @param rgba - Unknown string that may contain a color.
 * @returns True if the string is valid, false otherwise.
 */


function isValidRGBA(rgba) {
  return rgbaRE.test(rgba);
}
/**
 * This recursively redirects the prototype of JSON objects to the referenceObject.
 * This is used for default options.
 *
 * @param fields - Names of properties to be bridged.
 * @param referenceObject - The original object.
 * @returns A new object inheriting from the referenceObject.
 */


function selectiveBridgeObject(fields, referenceObject) {
  if (referenceObject !== null && _typeof(referenceObject) === "object") {
    // !!! typeof null === 'object'
    var objectTo = create$3(referenceObject);

    for (var i = 0; i < fields.length; i++) {
      if (Object.prototype.hasOwnProperty.call(referenceObject, fields[i])) {
        if (_typeof(referenceObject[fields[i]]) == "object") {
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
 * @returns The Element if the referenceObject is an Element, or a new object inheriting from the referenceObject.
 */


function bridgeObject(referenceObject) {
  if (referenceObject === null || _typeof(referenceObject) !== "object") {
    return null;
  }

  if (referenceObject instanceof Element) {
    // Avoid bridging DOM objects
    return referenceObject;
  }

  var objectTo = create$3(referenceObject);

  for (var i in referenceObject) {
    if (Object.prototype.hasOwnProperty.call(referenceObject, i)) {
      if (_typeof(referenceObject[i]) == "object") {
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
  var globalOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  // Local helpers
  var isPresent = function isPresent(obj) {
    return obj !== null && obj !== undefined;
  };

  var isObject = function isObject(obj) {
    return obj !== null && _typeof(obj) === "object";
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
    throw new Error("Parameter mergeTarget must be an object");
  }

  if (!isObject(options)) {
    throw new Error("Parameter options must be an object");
  }

  if (!isPresent(option)) {
    throw new Error("Parameter option must have a value");
  }

  if (!isObject(globalOptions)) {
    throw new Error("Parameter globalOptions must be an object");
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

  if (typeof srcOption === "boolean") {
    if (!isObject(mergeTarget[option])) {
      mergeTarget[option] = {};
    }

    mergeTarget[option].enabled = srcOption;
    return;
  }

  if (srcOption === null && !isObject(mergeTarget[option])) {
    // If possible, explicit copy from globals
    if (isPresent(globalOption)) {
      mergeTarget[option] = create$3(globalOption);
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
 * @param orderedItems - Items ordered by start.
 * @param comparator - -1 is lower, 0 is equal, 1 is higher.
 * @param field - Property name on an item (That is item[field]).
 * @param field2 - Second property name on an item (That is item[field][field2]).
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
}
/**
 * This function does a binary search for a specific value in a sorted array.
 * If it does not exist but is in between of two values, we return either the
 * one before or the one after, depending on user input If it is found, we
 * return the index, else -1.
 *
 * @param orderedItems - Sorted array.
 * @param target - The searched value.
 * @param field - Name of the property in items to be searched.
 * @param sidePreference - If the target is between two values, should the index of the before or the after be returned?
 * @param comparator - An optional comparator, returning -1, 0, 1 for \<, ===, \>.
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
      return sidePreference == "before" ? Math.max(0, middle - 1) : middle;
    } else if (comparator(value, target) < 0 && comparator(nextValue, target) > 0) {
      // target is in between of the current and the next
      return sidePreference == "before" ? middle : Math.min(orderedItems.length - 1, middle + 1);
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
   * Provides no easing and no acceleration.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  linear: function linear(t) {
    return t;
  },

  /**
   * Accelerate from zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },

  /**
   * Decelerate to zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },

  /**
   * Accelerate until halfway, then decelerate.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInOutQuad: function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },

  /**
   * Accelerate from zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },

  /**
   * Decelerate to zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },

  /**
   * Accelerate until halfway, then decelerate.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInOutCubic: function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },

  /**
   * Accelerate from zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },

  /**
   * Decelerate to zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },

  /**
   * Accelerate until halfway, then decelerate.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInOutQuart: function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },

  /**
   * Accelerate from zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },

  /**
   * Decelerate to zero velocity.
   *
   * @param t - Time.
   * @returns Value at time t.
   */
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },

  /**
   * Accelerate until halfway, then decelerate.
   *
   * @param t - Time.
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
  var inner = document.createElement("p");
  inner.style.width = "100%";
  inner.style.height = "200px";
  var outer = document.createElement("div");
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
  outer.style.overflow = "scroll";
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
 * @param accessors - Array of property names.
 * For example `object['foo']['bar']` → `['foo', 'bar']`.
 * @returns Value of the property with given accessors path from the first pile item where it's not undefined.
 */


function topMost(pile, accessors) {
  var candidate;

  if (!isArray(accessors)) {
    accessors = [accessors];
  }

  var _iterator3 = _createForOfIteratorHelper$1(pile),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var member = _step3.value;

      if (member) {
        candidate = member[accessors[0]];

        for (var i = 1; i < accessors.length; i++) {
          if (candidate) {
            candidate = candidate[accessors[i]];
          }
        }

        if (typeof candidate !== "undefined") {
          break;
        }
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return candidate;
}

var htmlColors = {
  black: "#000000",
  navy: "#000080",
  darkblue: "#00008B",
  mediumblue: "#0000CD",
  blue: "#0000FF",
  darkgreen: "#006400",
  green: "#008000",
  teal: "#008080",
  darkcyan: "#008B8B",
  deepskyblue: "#00BFFF",
  darkturquoise: "#00CED1",
  mediumspringgreen: "#00FA9A",
  lime: "#00FF00",
  springgreen: "#00FF7F",
  aqua: "#00FFFF",
  cyan: "#00FFFF",
  midnightblue: "#191970",
  dodgerblue: "#1E90FF",
  lightseagreen: "#20B2AA",
  forestgreen: "#228B22",
  seagreen: "#2E8B57",
  darkslategray: "#2F4F4F",
  limegreen: "#32CD32",
  mediumseagreen: "#3CB371",
  turquoise: "#40E0D0",
  royalblue: "#4169E1",
  steelblue: "#4682B4",
  darkslateblue: "#483D8B",
  mediumturquoise: "#48D1CC",
  indigo: "#4B0082",
  darkolivegreen: "#556B2F",
  cadetblue: "#5F9EA0",
  cornflowerblue: "#6495ED",
  mediumaquamarine: "#66CDAA",
  dimgray: "#696969",
  slateblue: "#6A5ACD",
  olivedrab: "#6B8E23",
  slategray: "#708090",
  lightslategray: "#778899",
  mediumslateblue: "#7B68EE",
  lawngreen: "#7CFC00",
  chartreuse: "#7FFF00",
  aquamarine: "#7FFFD4",
  maroon: "#800000",
  purple: "#800080",
  olive: "#808000",
  gray: "#808080",
  skyblue: "#87CEEB",
  lightskyblue: "#87CEFA",
  blueviolet: "#8A2BE2",
  darkred: "#8B0000",
  darkmagenta: "#8B008B",
  saddlebrown: "#8B4513",
  darkseagreen: "#8FBC8F",
  lightgreen: "#90EE90",
  mediumpurple: "#9370D8",
  darkviolet: "#9400D3",
  palegreen: "#98FB98",
  darkorchid: "#9932CC",
  yellowgreen: "#9ACD32",
  sienna: "#A0522D",
  brown: "#A52A2A",
  darkgray: "#A9A9A9",
  lightblue: "#ADD8E6",
  greenyellow: "#ADFF2F",
  paleturquoise: "#AFEEEE",
  lightsteelblue: "#B0C4DE",
  powderblue: "#B0E0E6",
  firebrick: "#B22222",
  darkgoldenrod: "#B8860B",
  mediumorchid: "#BA55D3",
  rosybrown: "#BC8F8F",
  darkkhaki: "#BDB76B",
  silver: "#C0C0C0",
  mediumvioletred: "#C71585",
  indianred: "#CD5C5C",
  peru: "#CD853F",
  chocolate: "#D2691E",
  tan: "#D2B48C",
  lightgrey: "#D3D3D3",
  palevioletred: "#D87093",
  thistle: "#D8BFD8",
  orchid: "#DA70D6",
  goldenrod: "#DAA520",
  crimson: "#DC143C",
  gainsboro: "#DCDCDC",
  plum: "#DDA0DD",
  burlywood: "#DEB887",
  lightcyan: "#E0FFFF",
  lavender: "#E6E6FA",
  darksalmon: "#E9967A",
  violet: "#EE82EE",
  palegoldenrod: "#EEE8AA",
  lightcoral: "#F08080",
  khaki: "#F0E68C",
  aliceblue: "#F0F8FF",
  honeydew: "#F0FFF0",
  azure: "#F0FFFF",
  sandybrown: "#F4A460",
  wheat: "#F5DEB3",
  beige: "#F5F5DC",
  whitesmoke: "#F5F5F5",
  mintcream: "#F5FFFA",
  ghostwhite: "#F8F8FF",
  salmon: "#FA8072",
  antiquewhite: "#FAEBD7",
  linen: "#FAF0E6",
  lightgoldenrodyellow: "#FAFAD2",
  oldlace: "#FDF5E6",
  red: "#FF0000",
  fuchsia: "#FF00FF",
  magenta: "#FF00FF",
  deeppink: "#FF1493",
  orangered: "#FF4500",
  tomato: "#FF6347",
  hotpink: "#FF69B4",
  coral: "#FF7F50",
  darkorange: "#FF8C00",
  lightsalmon: "#FFA07A",
  orange: "#FFA500",
  lightpink: "#FFB6C1",
  pink: "#FFC0CB",
  gold: "#FFD700",
  peachpuff: "#FFDAB9",
  navajowhite: "#FFDEAD",
  moccasin: "#FFE4B5",
  bisque: "#FFE4C4",
  mistyrose: "#FFE4E1",
  blanchedalmond: "#FFEBCD",
  papayawhip: "#FFEFD5",
  lavenderblush: "#FFF0F5",
  seashell: "#FFF5EE",
  cornsilk: "#FFF8DC",
  lemonchiffon: "#FFFACD",
  floralwhite: "#FFFAF0",
  snow: "#FFFAFA",
  yellow: "#FFFF00",
  lightyellow: "#FFFFE0",
  ivory: "#FFFFF0",
  white: "#FFFFFF"
};
/**
 * @param {number} [pixelRatio=1]
 */

var ColorPicker$1 = /*#__PURE__*/function () {
  /**
   * @param {number} [pixelRatio=1]
   */
  function ColorPicker$1() {
    var pixelRatio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    _classCallCheck(this, ColorPicker$1);

    this.pixelRatio = pixelRatio;
    this.generated = false;
    this.centerCoordinates = {
      x: 289 / 2,
      y: 289 / 2
    };
    this.r = 289 * 0.49;
    this.color = {
      r: 255,
      g: 255,
      b: 255,
      a: 1.0
    };
    this.hueCircle = undefined;
    this.initialColor = {
      r: 255,
      g: 255,
      b: 255,
      a: 1.0
    };
    this.previousColor = undefined;
    this.applied = false; // bound by

    this.updateCallback = function () {};

    this.closeCallback = function () {}; // create all DOM elements


    this._create();
  }
  /**
   * this inserts the colorPicker into a div from the DOM
   *
   * @param {Element} container
   */


  _createClass(ColorPicker$1, [{
    key: "insertTo",
    value: function insertTo(container) {
      if (this.hammer !== undefined) {
        this.hammer.destroy();
        this.hammer = undefined;
      }

      this.container = container;
      this.container.appendChild(this.frame);

      this._bindHammer();

      this._setSize();
    }
    /**
     * the callback is executed on apply and save. Bind it to the application
     *
     * @param {Function} callback
     */

  }, {
    key: "setUpdateCallback",
    value: function setUpdateCallback(callback) {
      if (typeof callback === "function") {
        this.updateCallback = callback;
      } else {
        throw new Error("Function attempted to set as colorPicker update callback is not a function.");
      }
    }
    /**
     * the callback is executed on apply and save. Bind it to the application
     *
     * @param {Function} callback
     */

  }, {
    key: "setCloseCallback",
    value: function setCloseCallback(callback) {
      if (typeof callback === "function") {
        this.closeCallback = callback;
      } else {
        throw new Error("Function attempted to set as colorPicker closing callback is not a function.");
      }
    }
    /**
     *
     * @param {string} color
     * @returns {string}
     * @private
     */

  }, {
    key: "_isColorString",
    value: function _isColorString(color) {
      if (typeof color === "string") {
        return htmlColors[color];
      }
    }
    /**
     * Set the color of the colorPicker
     * Supported formats:
     * 'red'                   --> HTML color string
     * '#ffffff'               --> hex string
     * 'rgb(255,255,255)'      --> rgb string
     * 'rgba(255,255,255,1.0)' --> rgba string
     * {r:255,g:255,b:255}     --> rgb object
     * {r:255,g:255,b:255,a:1.0} --> rgba object
     *
     * @param {string | object} color
     * @param {boolean} [setInitial=true]
     */

  }, {
    key: "setColor",
    value: function setColor(color) {
      var setInitial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (color === "none") {
        return;
      }

      var rgba; // if a html color shorthand is used, convert to hex

      var htmlColor = this._isColorString(color);

      if (htmlColor !== undefined) {
        color = htmlColor;
      } // check format


      if (isString(color) === true) {
        if (isValidRGB(color) === true) {
          var rgbaArray = color.substr(4).substr(0, color.length - 5).split(",");
          rgba = {
            r: rgbaArray[0],
            g: rgbaArray[1],
            b: rgbaArray[2],
            a: 1.0
          };
        } else if (isValidRGBA(color) === true) {
          var _rgbaArray = color.substr(5).substr(0, color.length - 6).split(",");

          rgba = {
            r: _rgbaArray[0],
            g: _rgbaArray[1],
            b: _rgbaArray[2],
            a: _rgbaArray[3]
          };
        } else if (isValidHex(color) === true) {
          var rgbObj = hexToRGB(color);
          rgba = {
            r: rgbObj.r,
            g: rgbObj.g,
            b: rgbObj.b,
            a: 1.0
          };
        }
      } else {
        if (color instanceof Object) {
          if (color.r !== undefined && color.g !== undefined && color.b !== undefined) {
            var alpha = color.a !== undefined ? color.a : "1.0";
            rgba = {
              r: color.r,
              g: color.g,
              b: color.b,
              a: alpha
            };
          }
        }
      } // set color


      if (rgba === undefined) {
        throw new Error("Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: " + stringify$1(color));
      } else {
        this._setColor(rgba, setInitial);
      }
    }
    /**
     * this shows the color picker.
     * The hue circle is constructed once and stored.
     */

  }, {
    key: "show",
    value: function show() {
      if (this.closeCallback !== undefined) {
        this.closeCallback();
        this.closeCallback = undefined;
      }

      this.applied = false;
      this.frame.style.display = "block";

      this._generateHueCircle();
    } // ------------------------------------------ PRIVATE ----------------------------- //

    /**
     * Hide the picker. Is called by the cancel button.
     * Optional boolean to store the previous color for easy access later on.
     *
     * @param {boolean} [storePrevious=true]
     * @private
     */

  }, {
    key: "_hide",
    value: function _hide() {
      var _this2 = this;

      var storePrevious = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      // store the previous color for next time;
      if (storePrevious === true) {
        this.previousColor = assign$2({}, this.color);
      }

      if (this.applied === true) {
        this.updateCallback(this.initialColor);
      }

      this.frame.style.display = "none"; // call the closing callback, restoring the onclick method.
      // this is in a setTimeout because it will trigger the show again before the click is done.

      setTimeout$1(function () {
        if (_this2.closeCallback !== undefined) {
          _this2.closeCallback();

          _this2.closeCallback = undefined;
        }
      }, 0);
    }
    /**
     * bound to the save button. Saves and hides.
     *
     * @private
     */

  }, {
    key: "_save",
    value: function _save() {
      this.updateCallback(this.color);
      this.applied = false;

      this._hide();
    }
    /**
     * Bound to apply button. Saves but does not close. Is undone by the cancel button.
     *
     * @private
     */

  }, {
    key: "_apply",
    value: function _apply() {
      this.applied = true;
      this.updateCallback(this.color);

      this._updatePicker(this.color);
    }
    /**
     * load the color from the previous session.
     *
     * @private
     */

  }, {
    key: "_loadLast",
    value: function _loadLast() {
      if (this.previousColor !== undefined) {
        this.setColor(this.previousColor, false);
      } else {
        alert("There is no last color to load...");
      }
    }
    /**
     * set the color, place the picker
     *
     * @param {object} rgba
     * @param {boolean} [setInitial=true]
     * @private
     */

  }, {
    key: "_setColor",
    value: function _setColor(rgba) {
      var setInitial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      // store the initial color
      if (setInitial === true) {
        this.initialColor = assign$2({}, rgba);
      }

      this.color = rgba;
      var hsv = RGBToHSV(rgba.r, rgba.g, rgba.b);
      var angleConvert = 2 * Math.PI;
      var radius = this.r * hsv.s;
      var x = this.centerCoordinates.x + radius * Math.sin(angleConvert * hsv.h);
      var y = this.centerCoordinates.y + radius * Math.cos(angleConvert * hsv.h);
      this.colorPickerSelector.style.left = x - 0.5 * this.colorPickerSelector.clientWidth + "px";
      this.colorPickerSelector.style.top = y - 0.5 * this.colorPickerSelector.clientHeight + "px";

      this._updatePicker(rgba);
    }
    /**
     * bound to opacity control
     *
     * @param {number} value
     * @private
     */

  }, {
    key: "_setOpacity",
    value: function _setOpacity(value) {
      this.color.a = value / 100;

      this._updatePicker(this.color);
    }
    /**
     * bound to brightness control
     *
     * @param {number} value
     * @private
     */

  }, {
    key: "_setBrightness",
    value: function _setBrightness(value) {
      var hsv = RGBToHSV(this.color.r, this.color.g, this.color.b);
      hsv.v = value / 100;
      var rgba = HSVToRGB(hsv.h, hsv.s, hsv.v);
      rgba["a"] = this.color.a;
      this.color = rgba;

      this._updatePicker();
    }
    /**
     * update the color picker. A black circle overlays the hue circle to mimic the brightness decreasing.
     *
     * @param {object} rgba
     * @private
     */

  }, {
    key: "_updatePicker",
    value: function _updatePicker() {
      var rgba = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.color;
      var hsv = RGBToHSV(rgba.r, rgba.g, rgba.b);
      var ctx = this.colorPickerCanvas.getContext("2d");

      if (this.pixelRation === undefined) {
        this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
      }

      ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0); // clear the canvas

      var w = this.colorPickerCanvas.clientWidth;
      var h = this.colorPickerCanvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.putImageData(this.hueCircle, 0, 0);
      ctx.fillStyle = "rgba(0,0,0," + (1 - hsv.v) + ")";
      ctx.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r);

      fill(ctx).call(ctx);

      this.brightnessRange.value = 100 * hsv.v;
      this.opacityRange.value = 100 * rgba.a;
      this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")";
      this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")";
    }
    /**
     * used by create to set the size of the canvas.
     *
     * @private
     */

  }, {
    key: "_setSize",
    value: function _setSize() {
      this.colorPickerCanvas.style.width = "100%";
      this.colorPickerCanvas.style.height = "100%";
      this.colorPickerCanvas.width = 289 * this.pixelRatio;
      this.colorPickerCanvas.height = 289 * this.pixelRatio;
    }
    /**
     * create all dom elements
     * TODO: cleanup, lots of similar dom elements
     *
     * @private
     */

  }, {
    key: "_create",
    value: function _create() {
      var _context16, _context17, _context18, _context19;

      this.frame = document.createElement("div");
      this.frame.className = "vis-color-picker";
      this.colorPickerDiv = document.createElement("div");
      this.colorPickerSelector = document.createElement("div");
      this.colorPickerSelector.className = "vis-selector";
      this.colorPickerDiv.appendChild(this.colorPickerSelector);
      this.colorPickerCanvas = document.createElement("canvas");
      this.colorPickerDiv.appendChild(this.colorPickerCanvas);

      if (!this.colorPickerCanvas.getContext) {
        var noCanvas = document.createElement("DIV");
        noCanvas.style.color = "red";
        noCanvas.style.fontWeight = "bold";
        noCanvas.style.padding = "10px";
        noCanvas.innerText = "Error: your browser does not support HTML canvas";
        this.colorPickerCanvas.appendChild(noCanvas);
      } else {
        var ctx = this.colorPickerCanvas.getContext("2d");
        this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
        this.colorPickerCanvas.getContext("2d").setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
      }

      this.colorPickerDiv.className = "vis-color";
      this.opacityDiv = document.createElement("div");
      this.opacityDiv.className = "vis-opacity";
      this.brightnessDiv = document.createElement("div");
      this.brightnessDiv.className = "vis-brightness";
      this.arrowDiv = document.createElement("div");
      this.arrowDiv.className = "vis-arrow";
      this.opacityRange = document.createElement("input");

      try {
        this.opacityRange.type = "range"; // Not supported on IE9

        this.opacityRange.min = "0";
        this.opacityRange.max = "100";
      } catch (err) {// TODO: Add some error handling.
      }

      this.opacityRange.value = "100";
      this.opacityRange.className = "vis-range";
      this.brightnessRange = document.createElement("input");

      try {
        this.brightnessRange.type = "range"; // Not supported on IE9

        this.brightnessRange.min = "0";
        this.brightnessRange.max = "100";
      } catch (err) {// TODO: Add some error handling.
      }

      this.brightnessRange.value = "100";
      this.brightnessRange.className = "vis-range";
      this.opacityDiv.appendChild(this.opacityRange);
      this.brightnessDiv.appendChild(this.brightnessRange);
      var me = this;

      this.opacityRange.onchange = function () {
        me._setOpacity(this.value);
      };

      this.opacityRange.oninput = function () {
        me._setOpacity(this.value);
      };

      this.brightnessRange.onchange = function () {
        me._setBrightness(this.value);
      };

      this.brightnessRange.oninput = function () {
        me._setBrightness(this.value);
      };

      this.brightnessLabel = document.createElement("div");
      this.brightnessLabel.className = "vis-label vis-brightness";
      this.brightnessLabel.innerText = "brightness:";
      this.opacityLabel = document.createElement("div");
      this.opacityLabel.className = "vis-label vis-opacity";
      this.opacityLabel.innerText = "opacity:";
      this.newColorDiv = document.createElement("div");
      this.newColorDiv.className = "vis-new-color";
      this.newColorDiv.innerText = "new";
      this.initialColorDiv = document.createElement("div");
      this.initialColorDiv.className = "vis-initial-color";
      this.initialColorDiv.innerText = "initial";
      this.cancelButton = document.createElement("div");
      this.cancelButton.className = "vis-button vis-cancel";
      this.cancelButton.innerText = "cancel";
      this.cancelButton.onclick = bind(_context16 = this._hide).call(_context16, this, false);
      this.applyButton = document.createElement("div");
      this.applyButton.className = "vis-button vis-apply";
      this.applyButton.innerText = "apply";
      this.applyButton.onclick = bind(_context17 = this._apply).call(_context17, this);
      this.saveButton = document.createElement("div");
      this.saveButton.className = "vis-button vis-save";
      this.saveButton.innerText = "save";
      this.saveButton.onclick = bind(_context18 = this._save).call(_context18, this);
      this.loadButton = document.createElement("div");
      this.loadButton.className = "vis-button vis-load";
      this.loadButton.innerText = "load last";
      this.loadButton.onclick = bind(_context19 = this._loadLast).call(_context19, this);
      this.frame.appendChild(this.colorPickerDiv);
      this.frame.appendChild(this.arrowDiv);
      this.frame.appendChild(this.brightnessLabel);
      this.frame.appendChild(this.brightnessDiv);
      this.frame.appendChild(this.opacityLabel);
      this.frame.appendChild(this.opacityDiv);
      this.frame.appendChild(this.newColorDiv);
      this.frame.appendChild(this.initialColorDiv);
      this.frame.appendChild(this.cancelButton);
      this.frame.appendChild(this.applyButton);
      this.frame.appendChild(this.saveButton);
      this.frame.appendChild(this.loadButton);
    }
    /**
     * bind hammer to the color picker
     *
     * @private
     */

  }, {
    key: "_bindHammer",
    value: function _bindHammer() {
      var _this3 = this;

      this.drag = {};
      this.pinch = {};
      this.hammer = new Hammer$1(this.colorPickerCanvas);
      this.hammer.get("pinch").set({
        enable: true
      });
      this.hammer.on("hammer.input", function (event) {
        if (event.isFirst) {
          _this3._moveSelector(event);
        }
      });
      this.hammer.on("tap", function (event) {
        _this3._moveSelector(event);
      });
      this.hammer.on("panstart", function (event) {
        _this3._moveSelector(event);
      });
      this.hammer.on("panmove", function (event) {
        _this3._moveSelector(event);
      });
      this.hammer.on("panend", function (event) {
        _this3._moveSelector(event);
      });
    }
    /**
     * generate the hue circle. This is relatively heavy (200ms) and is done only once on the first time it is shown.
     *
     * @private
     */

  }, {
    key: "_generateHueCircle",
    value: function _generateHueCircle() {
      if (this.generated === false) {
        var ctx = this.colorPickerCanvas.getContext("2d");

        if (this.pixelRation === undefined) {
          this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
        }

        ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0); // clear the canvas

        var w = this.colorPickerCanvas.clientWidth;
        var h = this.colorPickerCanvas.clientHeight;
        ctx.clearRect(0, 0, w, h); // draw hue circle

        var x, y, hue, sat;
        this.centerCoordinates = {
          x: w * 0.5,
          y: h * 0.5
        };
        this.r = 0.49 * w;
        var angleConvert = 2 * Math.PI / 360;
        var hfac = 1 / 360;
        var sfac = 1 / this.r;
        var rgb;

        for (hue = 0; hue < 360; hue++) {
          for (sat = 0; sat < this.r; sat++) {
            x = this.centerCoordinates.x + sat * Math.sin(angleConvert * hue);
            y = this.centerCoordinates.y + sat * Math.cos(angleConvert * hue);
            rgb = HSVToRGB(hue * hfac, sat * sfac, 1);
            ctx.fillStyle = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
            ctx.fillRect(x - 0.5, y - 0.5, 2, 2);
          }
        }

        ctx.strokeStyle = "rgba(0,0,0,1)";
        ctx.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r);
        ctx.stroke();
        this.hueCircle = ctx.getImageData(0, 0, w, h);
      }

      this.generated = true;
    }
    /**
     * move the selector. This is called by hammer functions.
     *
     * @param {Event}  event   The event
     * @private
     */

  }, {
    key: "_moveSelector",
    value: function _moveSelector(event) {
      var rect = this.colorPickerDiv.getBoundingClientRect();
      var left = event.center.x - rect.left;
      var top = event.center.y - rect.top;
      var centerY = 0.5 * this.colorPickerDiv.clientHeight;
      var centerX = 0.5 * this.colorPickerDiv.clientWidth;
      var x = left - centerX;
      var y = top - centerY;
      var angle = Math.atan2(x, y);
      var radius = 0.98 * Math.min(Math.sqrt(x * x + y * y), centerX);
      var newTop = Math.cos(angle) * radius + centerY;
      var newLeft = Math.sin(angle) * radius + centerX;
      this.colorPickerSelector.style.top = newTop - 0.5 * this.colorPickerSelector.clientHeight + "px";
      this.colorPickerSelector.style.left = newLeft - 0.5 * this.colorPickerSelector.clientWidth + "px"; // set color

      var h = angle / (2 * Math.PI);
      h = h < 0 ? h + 1 : h;
      var s = radius / this.r;
      var hsv = RGBToHSV(this.color.r, this.color.g, this.color.b);
      hsv.h = h;
      hsv.s = s;
      var rgba = HSVToRGB(hsv.h, hsv.s, hsv.v);
      rgba["a"] = this.color.a;
      this.color = rgba; // update previews

      this.initialColorDiv.style.backgroundColor = "rgba(" + this.initialColor.r + "," + this.initialColor.g + "," + this.initialColor.b + "," + this.initialColor.a + ")";
      this.newColorDiv.style.backgroundColor = "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")";
    }
  }]);

  return ColorPicker$1;
}();
/**
 * Wrap given text (last argument) in HTML elements (all preceding arguments).
 *
 * @param {...any} rest - List of tag names followed by inner text.
 * @returns An element or a text node.
 */


function wrapInTag() {
  for (var _len5 = arguments.length, rest = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    rest[_key5] = arguments[_key5];
  }

  if (rest.length < 1) {
    throw new TypeError("Invalid arguments.");
  } else if (rest.length === 1) {
    return document.createTextNode(rest[0]);
  } else {
    var element = document.createElement(rest[0]);
    element.appendChild(wrapInTag.apply(void 0, _toConsumableArray(slice(rest).call(rest, 1))));
    return element;
  }
}
/**
 * The way this works is for all properties of this.possible options, you can supply the property name in any form to list the options.
 * Boolean options are recognised as Boolean
 * Number options should be written as array: [default value, min value, max value, stepsize]
 * Colors should be written as array: ['color', '#ffffff']
 * Strings with should be written as array: [option1, option2, option3, ..]
 *
 * The options are matched with their counterparts in each of the modules and the values used in the configuration are
 */


var Configurator$1 = /*#__PURE__*/function () {
  /**
   * @param {object} parentModule        | the location where parentModule.setOptions() can be called
   * @param {object} defaultContainer    | the default container of the module
   * @param {object} configureOptions    | the fully configured and predefined options set found in allOptions.js
   * @param {number} pixelRatio          | canvas pixel ratio
   * @param {Function} hideOption        | custom logic to dynamically hide options
   */
  function Configurator$1(parentModule, defaultContainer, configureOptions) {
    var pixelRatio = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var hideOption = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {
      return false;
    };

    _classCallCheck(this, Configurator$1);

    this.parent = parentModule;
    this.changedOptions = [];
    this.container = defaultContainer;
    this.allowCreation = false;
    this.hideOption = hideOption;
    this.options = {};
    this.initialized = false;
    this.popupCounter = 0;
    this.defaultOptions = {
      enabled: false,
      filter: true,
      container: undefined,
      showButton: true
    };

    assign$2(this.options, this.defaultOptions);

    this.configureOptions = configureOptions;
    this.moduleOptions = {};
    this.domElements = [];
    this.popupDiv = {};
    this.popupLimit = 5;
    this.popupHistory = {};
    this.colorPicker = new ColorPicker$1(pixelRatio);
    this.wrapper = undefined;
  }
  /**
   * refresh all options.
   * Because all modules parse their options by themselves, we just use their options. We copy them here.
   *
   * @param {object} options
   */


  _createClass(Configurator$1, [{
    key: "setOptions",
    value: function setOptions(options) {
      if (options !== undefined) {
        // reset the popup history because the indices may have been changed.
        this.popupHistory = {};

        this._removePopup();

        var enabled = true;

        if (typeof options === "string") {
          this.options.filter = options;
        } else if (isArray(options)) {
          this.options.filter = options.join();
        } else if (_typeof(options) === "object") {
          if (options == null) {
            throw new TypeError("options cannot be null");
          }

          if (options.container !== undefined) {
            this.options.container = options.container;
          }

          if (filter(options) !== undefined) {
            this.options.filter = filter(options);
          }

          if (options.showButton !== undefined) {
            this.options.showButton = options.showButton;
          }

          if (options.enabled !== undefined) {
            enabled = options.enabled;
          }
        } else if (typeof options === "boolean") {
          this.options.filter = true;
          enabled = options;
        } else if (typeof options === "function") {
          this.options.filter = options;
          enabled = true;
        }

        if (filter(this.options) === false) {
          enabled = false;
        }

        this.options.enabled = enabled;
      }

      this._clean();
    }
    /**
     *
     * @param {object} moduleOptions
     */

  }, {
    key: "setModuleOptions",
    value: function setModuleOptions(moduleOptions) {
      this.moduleOptions = moduleOptions;

      if (this.options.enabled === true) {
        this._clean();

        if (this.options.container !== undefined) {
          this.container = this.options.container;
        }

        this._create();
      }
    }
    /**
     * Create all DOM elements
     *
     * @private
     */

  }, {
    key: "_create",
    value: function _create() {
      this._clean();

      this.changedOptions = [];

      var filter$1 = filter(this.options);

      var counter = 0;
      var show = false;

      for (var _option in this.configureOptions) {
        if (Object.prototype.hasOwnProperty.call(this.configureOptions, _option)) {
          this.allowCreation = false;
          show = false;

          if (typeof filter$1 === "function") {
            show = filter$1(_option, []);
            show = show || this._handleObject(this.configureOptions[_option], [_option], true);
          } else if (filter$1 === true || indexOf(filter$1).call(filter$1, _option) !== -1) {
            show = true;
          }

          if (show !== false) {
            this.allowCreation = true; // linebreak between categories

            if (counter > 0) {
              this._makeItem([]);
            } // a header for the category


            this._makeHeader(_option); // get the sub options


            this._handleObject(this.configureOptions[_option], [_option]);
          }

          counter++;
        }
      }

      this._makeButton();

      this._push(); //~ this.colorPicker.insertTo(this.container);

    }
    /**
     * draw all DOM elements on the screen
     *
     * @private
     */

  }, {
    key: "_push",
    value: function _push() {
      this.wrapper = document.createElement("div");
      this.wrapper.className = "vis-configuration-wrapper";
      this.container.appendChild(this.wrapper);

      for (var i = 0; i < this.domElements.length; i++) {
        this.wrapper.appendChild(this.domElements[i]);
      }

      this._showPopupIfNeeded();
    }
    /**
     * delete all DOM elements
     *
     * @private
     */

  }, {
    key: "_clean",
    value: function _clean() {
      for (var i = 0; i < this.domElements.length; i++) {
        this.wrapper.removeChild(this.domElements[i]);
      }

      if (this.wrapper !== undefined) {
        this.container.removeChild(this.wrapper);
        this.wrapper = undefined;
      }

      this.domElements = [];

      this._removePopup();
    }
    /**
     * get the value from the actualOptions if it exists
     *
     * @param {Array} path    | where to look for the actual option
     * @returns {*}
     * @private
     */

  }, {
    key: "_getValue",
    value: function _getValue(path) {
      var base = this.moduleOptions;

      for (var i = 0; i < path.length; i++) {
        if (base[path[i]] !== undefined) {
          base = base[path[i]];
        } else {
          base = undefined;
          break;
        }
      }

      return base;
    }
    /**
     * all option elements are wrapped in an item
     *
     * @param {Array} path    | where to look for the actual option
     * @param {Array.<Element>} domElements
     * @returns {number}
     * @private
     */

  }, {
    key: "_makeItem",
    value: function _makeItem(path) {
      if (this.allowCreation === true) {
        var item = document.createElement("div");
        item.className = "vis-configuration vis-config-item vis-config-s" + path.length;

        for (var _len6 = arguments.length, domElements = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          domElements[_key6 - 1] = arguments[_key6];
        }

        forEach$2(domElements).call(domElements, function (element) {
          item.appendChild(element);
        });

        this.domElements.push(item);
        return this.domElements.length;
      }

      return 0;
    }
    /**
     * header for major subjects
     *
     * @param {string} name
     * @private
     */

  }, {
    key: "_makeHeader",
    value: function _makeHeader(name) {
      var div = document.createElement("div");
      div.className = "vis-configuration vis-config-header";
      div.innerText = name;

      this._makeItem([], div);
    }
    /**
     * make a label, if it is an object label, it gets different styling.
     *
     * @param {string} name
     * @param {Array} path    | where to look for the actual option
     * @param {string} objectLabel
     * @returns {HTMLElement}
     * @private
     */

  }, {
    key: "_makeLabel",
    value: function _makeLabel(name, path) {
      var objectLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var div = document.createElement("div");
      div.className = "vis-configuration vis-config-label vis-config-s" + path.length;

      if (objectLabel === true) {
        while (div.firstChild) {
          div.removeChild(div.firstChild);
        }

        div.appendChild(wrapInTag("i", "b", name));
      } else {
        div.innerText = name + ":";
      }

      return div;
    }
    /**
     * make a dropdown list for multiple possible string optoins
     *
     * @param {Array.<number>} arr
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: "_makeDropdown",
    value: function _makeDropdown(arr, value, path) {
      var select = document.createElement("select");
      select.className = "vis-configuration vis-config-select";
      var selectedValue = 0;

      if (value !== undefined) {
        if (indexOf(arr).call(arr, value) !== -1) {
          selectedValue = indexOf(arr).call(arr, value);
        }
      }

      for (var i = 0; i < arr.length; i++) {
        var _option2 = document.createElement("option");

        _option2.value = arr[i];

        if (i === selectedValue) {
          _option2.selected = "selected";
        }

        _option2.innerText = arr[i];
        select.appendChild(_option2);
      }

      var me = this;

      select.onchange = function () {
        me._update(this.value, path);
      };

      var label = this._makeLabel(path[path.length - 1], path);

      this._makeItem(path, label, select);
    }
    /**
     * make a range object for numeric options
     *
     * @param {Array.<number>} arr
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: "_makeRange",
    value: function _makeRange(arr, value, path) {
      var defaultValue = arr[0];
      var min = arr[1];
      var max = arr[2];
      var step = arr[3];
      var range = document.createElement("input");
      range.className = "vis-configuration vis-config-range";

      try {
        range.type = "range"; // not supported on IE9

        range.min = min;
        range.max = max;
      } catch (err) {// TODO: Add some error handling.
      }

      range.step = step; // set up the popup settings in case they are needed.

      var popupString = "";
      var popupValue = 0;

      if (value !== undefined) {
        var factor = 1.2;

        if (value < 0 && value * factor < min) {
          range.min = Math.ceil(value * factor);
          popupValue = range.min;
          popupString = "range increased";
        } else if (value / factor < min) {
          range.min = Math.ceil(value / factor);
          popupValue = range.min;
          popupString = "range increased";
        }

        if (value * factor > max && max !== 1) {
          range.max = Math.ceil(value * factor);
          popupValue = range.max;
          popupString = "range increased";
        }

        range.value = value;
      } else {
        range.value = defaultValue;
      }

      var input = document.createElement("input");
      input.className = "vis-configuration vis-config-rangeinput";
      input.value = range.value;
      var me = this;

      range.onchange = function () {
        input.value = this.value;

        me._update(Number(this.value), path);
      };

      range.oninput = function () {
        input.value = this.value;
      };

      var label = this._makeLabel(path[path.length - 1], path);

      var itemIndex = this._makeItem(path, label, range, input); // if a popup is needed AND it has not been shown for this value, show it.


      if (popupString !== "" && this.popupHistory[itemIndex] !== popupValue) {
        this.popupHistory[itemIndex] = popupValue;

        this._setupPopup(popupString, itemIndex);
      }
    }
    /**
     * make a button object
     *
     * @private
     */

  }, {
    key: "_makeButton",
    value: function _makeButton() {
      var _this4 = this;

      if (this.options.showButton === true) {
        var generateButton = document.createElement("div");
        generateButton.className = "vis-configuration vis-config-button";
        generateButton.innerText = "generate options";

        generateButton.onclick = function () {
          _this4._printOptions();
        };

        generateButton.onmouseover = function () {
          generateButton.className = "vis-configuration vis-config-button hover";
        };

        generateButton.onmouseout = function () {
          generateButton.className = "vis-configuration vis-config-button";
        };

        this.optionsContainer = document.createElement("div");
        this.optionsContainer.className = "vis-configuration vis-config-option-container";
        this.domElements.push(this.optionsContainer);
        this.domElements.push(generateButton);
      }
    }
    /**
     * prepare the popup
     *
     * @param {string} string
     * @param {number} index
     * @private
     */

  }, {
    key: "_setupPopup",
    value: function _setupPopup(string, index) {
      var _this5 = this;

      if (this.initialized === true && this.allowCreation === true && this.popupCounter < this.popupLimit) {
        var div = document.createElement("div");
        div.id = "vis-configuration-popup";
        div.className = "vis-configuration-popup";
        div.innerText = string;

        div.onclick = function () {
          _this5._removePopup();
        };

        this.popupCounter += 1;
        this.popupDiv = {
          html: div,
          index: index
        };
      }
    }
    /**
     * remove the popup from the dom
     *
     * @private
     */

  }, {
    key: "_removePopup",
    value: function _removePopup() {
      if (this.popupDiv.html !== undefined) {
        this.popupDiv.html.parentNode.removeChild(this.popupDiv.html);
        clearTimeout(this.popupDiv.hideTimeout);
        clearTimeout(this.popupDiv.deleteTimeout);
        this.popupDiv = {};
      }
    }
    /**
     * Show the popup if it is needed.
     *
     * @private
     */

  }, {
    key: "_showPopupIfNeeded",
    value: function _showPopupIfNeeded() {
      var _this6 = this;

      if (this.popupDiv.html !== undefined) {
        var correspondingElement = this.domElements[this.popupDiv.index];
        var rect = correspondingElement.getBoundingClientRect();
        this.popupDiv.html.style.left = rect.left + "px";
        this.popupDiv.html.style.top = rect.top - 30 + "px"; // 30 is the height;

        document.body.appendChild(this.popupDiv.html);
        this.popupDiv.hideTimeout = setTimeout$1(function () {
          _this6.popupDiv.html.style.opacity = 0;
        }, 1500);
        this.popupDiv.deleteTimeout = setTimeout$1(function () {
          _this6._removePopup();
        }, 1800);
      }
    }
    /**
     * make a checkbox for boolean options.
     *
     * @param {number} defaultValue
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: "_makeCheckbox",
    value: function _makeCheckbox(defaultValue, value, path) {
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "vis-configuration vis-config-checkbox";
      checkbox.checked = defaultValue;

      if (value !== undefined) {
        checkbox.checked = value;

        if (value !== defaultValue) {
          if (_typeof(defaultValue) === "object") {
            if (value !== defaultValue.enabled) {
              this.changedOptions.push({
                path: path,
                value: value
              });
            }
          } else {
            this.changedOptions.push({
              path: path,
              value: value
            });
          }
        }
      }

      var me = this;

      checkbox.onchange = function () {
        me._update(this.checked, path);
      };

      var label = this._makeLabel(path[path.length - 1], path);

      this._makeItem(path, label, checkbox);
    }
    /**
     * make a text input field for string options.
     *
     * @param {number} defaultValue
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: "_makeTextInput",
    value: function _makeTextInput(defaultValue, value, path) {
      var checkbox = document.createElement("input");
      checkbox.type = "text";
      checkbox.className = "vis-configuration vis-config-text";
      checkbox.value = value;

      if (value !== defaultValue) {
        this.changedOptions.push({
          path: path,
          value: value
        });
      }

      var me = this;

      checkbox.onchange = function () {
        me._update(this.value, path);
      };

      var label = this._makeLabel(path[path.length - 1], path);

      this._makeItem(path, label, checkbox);
    }
    /**
     * make a color field with a color picker for color fields
     *
     * @param {Array.<number>} arr
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: "_makeColorField",
    value: function _makeColorField(arr, value, path) {
      var _this7 = this;

      var defaultColor = arr[1];
      var div = document.createElement("div");
      value = value === undefined ? defaultColor : value;

      if (value !== "none") {
        div.className = "vis-configuration vis-config-colorBlock";
        div.style.backgroundColor = value;
      } else {
        div.className = "vis-configuration vis-config-colorBlock none";
      }

      value = value === undefined ? defaultColor : value;

      div.onclick = function () {
        _this7._showColorPicker(value, div, path);
      };

      var label = this._makeLabel(path[path.length - 1], path);

      this._makeItem(path, label, div);
    }
    /**
     * used by the color buttons to call the color picker.
     *
     * @param {number} value
     * @param {HTMLElement} div
     * @param {Array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: "_showColorPicker",
    value: function _showColorPicker(value, div, path) {
      var _this8 = this;

      // clear the callback from this div
      div.onclick = function () {};

      this.colorPicker.insertTo(div);
      this.colorPicker.show();
      this.colorPicker.setColor(value);
      this.colorPicker.setUpdateCallback(function (color) {
        var colorString = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
        div.style.backgroundColor = colorString;

        _this8._update(colorString, path);
      }); // on close of the colorpicker, restore the callback.

      this.colorPicker.setCloseCallback(function () {
        div.onclick = function () {
          _this8._showColorPicker(value, div, path);
        };
      });
    }
    /**
     * parse an object and draw the correct items
     *
     * @param {object} obj
     * @param {Array} [path=[]]    | where to look for the actual option
     * @param {boolean} [checkOnly=false]
     * @returns {boolean}
     * @private
     */

  }, {
    key: "_handleObject",
    value: function _handleObject(obj) {
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var checkOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var show = false;

      var filter$1 = filter(this.options);

      var visibleInSet = false;

      for (var subObj in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, subObj)) {
          show = true;
          var item = obj[subObj];
          var newPath = copyAndExtendArray(path, subObj);

          if (typeof filter$1 === "function") {
            show = filter$1(subObj, path); // if needed we must go deeper into the object.

            if (show === false) {
              if (!isArray(item) && typeof item !== "string" && typeof item !== "boolean" && item instanceof Object) {
                this.allowCreation = false;
                show = this._handleObject(item, newPath, true);
                this.allowCreation = checkOnly === false;
              }
            }
          }

          if (show !== false) {
            visibleInSet = true;

            var value = this._getValue(newPath);

            if (isArray(item)) {
              this._handleArray(item, value, newPath);
            } else if (typeof item === "string") {
              this._makeTextInput(item, value, newPath);
            } else if (typeof item === "boolean") {
              this._makeCheckbox(item, value, newPath);
            } else if (item instanceof Object) {
              // skip the options that are not enabled
              if (!this.hideOption(path, subObj, this.moduleOptions)) {
                // initially collapse options with an disabled enabled option.
                if (item.enabled !== undefined) {
                  var enabledPath = copyAndExtendArray(newPath, "enabled");

                  var enabledValue = this._getValue(enabledPath);

                  if (enabledValue === true) {
                    var label = this._makeLabel(subObj, newPath, true);

                    this._makeItem(newPath, label);

                    visibleInSet = this._handleObject(item, newPath) || visibleInSet;
                  } else {
                    this._makeCheckbox(item, enabledValue, newPath);
                  }
                } else {
                  var _label = this._makeLabel(subObj, newPath, true);

                  this._makeItem(newPath, _label);

                  visibleInSet = this._handleObject(item, newPath) || visibleInSet;
                }
              }
            } else {
              console.error("dont know how to handle", item, subObj, newPath);
            }
          }
        }
      }

      return visibleInSet;
    }
    /**
     * handle the array type of option
     *
     * @param {Array.<number>} arr
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: "_handleArray",
    value: function _handleArray(arr, value, path) {
      if (typeof arr[0] === "string" && arr[0] === "color") {
        this._makeColorField(arr, value, path);

        if (arr[1] !== value) {
          this.changedOptions.push({
            path: path,
            value: value
          });
        }
      } else if (typeof arr[0] === "string") {
        this._makeDropdown(arr, value, path);

        if (arr[0] !== value) {
          this.changedOptions.push({
            path: path,
            value: value
          });
        }
      } else if (typeof arr[0] === "number") {
        this._makeRange(arr, value, path);

        if (arr[0] !== value) {
          this.changedOptions.push({
            path: path,
            value: Number(value)
          });
        }
      }
    }
    /**
     * called to update the network with the new settings.
     *
     * @param {number} value
     * @param {Array} path    | where to look for the actual option
     * @private
     */

  }, {
    key: "_update",
    value: function _update(value, path) {
      var options = this._constructOptions(value, path);

      if (this.parent.body && this.parent.body.emitter && this.parent.body.emitter.emit) {
        this.parent.body.emitter.emit("configChange", options);
      }

      this.initialized = true;
      this.parent.setOptions(options);
    }
    /**
     *
     * @param {string | boolean} value
     * @param {Array.<string>} path
     * @param {{}} optionsObj
     * @returns {{}}
     * @private
     */

  }, {
    key: "_constructOptions",
    value: function _constructOptions(value, path) {
      var optionsObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var pointer = optionsObj; // when dropdown boxes can be string or boolean, we typecast it into correct types

      value = value === "true" ? true : value;
      value = value === "false" ? false : value;

      for (var i = 0; i < path.length; i++) {
        if (path[i] !== "global") {
          if (pointer[path[i]] === undefined) {
            pointer[path[i]] = {};
          }

          if (i !== path.length - 1) {
            pointer = pointer[path[i]];
          } else {
            pointer[path[i]] = value;
          }
        }
      }

      return optionsObj;
    }
    /**
     * @private
     */

  }, {
    key: "_printOptions",
    value: function _printOptions() {
      var options = this.getOptions();

      while (this.optionsContainer.firstChild) {
        this.optionsContainer.removeChild(this.optionsContainer.firstChild);
      }

      this.optionsContainer.appendChild(wrapInTag("pre", "const options = " + stringify$1(options, null, 2)));
    }
    /**
     *
     * @returns {{}} options
     */

  }, {
    key: "getOptions",
    value: function getOptions() {
      var options = {};

      for (var i = 0; i < this.changedOptions.length; i++) {
        this._constructOptions(this.changedOptions[i].value, this.changedOptions[i].path, options);
      }

      return options;
    }
  }]);

  return Configurator$1;
}();
/**
 * Popup is a class to create a popup window with some text
 */


var Popup$1 = /*#__PURE__*/function () {
  /**
   * @param {Element} container       The container object.
   * @param {string}  overflowMethod  How the popup should act to overflowing ('flip' or 'cap')
   */
  function Popup$1(container, overflowMethod) {
    _classCallCheck(this, Popup$1);

    this.container = container;
    this.overflowMethod = overflowMethod || "cap";
    this.x = 0;
    this.y = 0;
    this.padding = 5;
    this.hidden = false; // create the frame

    this.frame = document.createElement("div");
    this.frame.className = "vis-tooltip";
    this.container.appendChild(this.frame);
  }
  /**
   * @param {number} x   Horizontal position of the popup window
   * @param {number} y   Vertical position of the popup window
   */


  _createClass(Popup$1, [{
    key: "setPosition",
    value: function setPosition(x, y) {
      this.x = _parseInt(x);
      this.y = _parseInt(y);
    }
    /**
     * Set the content for the popup window. This can be HTML code or text.
     *
     * @param {string | Element} content
     */

  }, {
    key: "setText",
    value: function setText(content) {
      if (content instanceof Element) {
        while (this.frame.firstChild) {
          this.frame.removeChild(this.frame.firstChild);
        }

        this.frame.appendChild(content);
      } else {
        // String containing literal text, element has to be used for HTML due to
        // XSS risks associated with innerHTML (i.e. prevent XSS by accident).
        this.frame.innerText = content;
      }
    }
    /**
     * Show the popup window
     *
     * @param {boolean} [doShow]    Show or hide the window
     */

  }, {
    key: "show",
    value: function show(doShow) {
      if (doShow === undefined) {
        doShow = true;
      }

      if (doShow === true) {
        var height = this.frame.clientHeight;
        var width = this.frame.clientWidth;
        var maxHeight = this.frame.parentNode.clientHeight;
        var maxWidth = this.frame.parentNode.clientWidth;
        var left = 0,
            top = 0;

        if (this.overflowMethod == "flip") {
          var isLeft = false,
              isTop = true; // Where around the position it's located

          if (this.y - height < this.padding) {
            isTop = false;
          }

          if (this.x + width > maxWidth - this.padding) {
            isLeft = true;
          }

          if (isLeft) {
            left = this.x - width;
          } else {
            left = this.x;
          }

          if (isTop) {
            top = this.y - height;
          } else {
            top = this.y;
          }
        } else {
          top = this.y - height;

          if (top + height + this.padding > maxHeight) {
            top = maxHeight - height - this.padding;
          }

          if (top < this.padding) {
            top = this.padding;
          }

          left = this.x;

          if (left + width + this.padding > maxWidth) {
            left = maxWidth - width - this.padding;
          }

          if (left < this.padding) {
            left = this.padding;
          }
        }

        this.frame.style.left = left + "px";
        this.frame.style.top = top + "px";
        this.frame.style.visibility = "visible";
        this.hidden = false;
      } else {
        this.hide();
      }
    }
    /**
     * Hide the popup window
     */

  }, {
    key: "hide",
    value: function hide() {
      this.hidden = true;
      this.frame.style.left = "0";
      this.frame.style.top = "0";
      this.frame.style.visibility = "hidden";
    }
    /**
     * Remove the popup window
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.frame.parentNode.removeChild(this.frame); // Remove element from DOM
    }
  }]);

  return Popup$1;
}();

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
        referenceOption = "__any__"; // if the any-subgroup is not a predefined object in the configurator,
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
        if (Validator$1.getType(refOptionType) === "array" && indexOf(refOptionType).call(refOptionType, options[option]) === -1) {
          log('Invalid option detected in "' + option + '".' + " Allowed values are:" + Validator$1.print(refOptionType) + ' not "' + options[option] + '". ');
          errorFound = true;
        } else if (optionType === "object" && referenceOption !== "__any__") {
          path = copyAndExtendArray(path, option);
          Validator$1.parse(options[option], referenceOptions[referenceOption], path);
        }
      } else if (refOptionObj["any"] === undefined) {
        // type of the field is incorrect and the field cannot be any
        log('Invalid type received for "' + option + '". Expected: ' + Validator$1.print(keys$4(refOptionObj)) + ". Received [" + optionType + '] "' + options[option] + '"');
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
      var type = _typeof(object);

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

        if (isArray(object)) {
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
        msg = ". Did you mean one of these: " + Validator$1.print(keys$4(options)) + Validator$1.printLocation(path, option);
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

          if (indexOf(_context20 = op.toLowerCase()).call(_context20, lowerCaseOption) !== -1) {
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
      return stringify$1(options).replace(/(")|(\[)|(\])|(,"__type__")/g, "").replace(/(,)/g, ", ");
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

  return Validator$1;
}();

var Activator = Activator$1;
var ColorPicker = ColorPicker$1;
var Configurator = Configurator$1;
var Hammer$2 = Hammer$1;
var Popup = Popup$1;
var VALIDATOR_PRINT_STYLE = VALIDATOR_PRINT_STYLE$1;
var Validator = Validator$1;

var esnext$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Activator: Activator,
  Alea: Alea,
  ColorPicker: ColorPicker,
  Configurator: Configurator,
  DELETE: DELETE,
  HSVToHex: HSVToHex,
  HSVToRGB: HSVToRGB,
  Hammer: Hammer$2,
  Popup: Popup,
  RGBToHSV: RGBToHSV,
  RGBToHex: RGBToHex,
  VALIDATOR_PRINT_STYLE: VALIDATOR_PRINT_STYLE,
  Validator: Validator,
  addClassName: addClassName,
  addCssText: addCssText,
  addEventListener: addEventListener,
  binarySearchCustom: binarySearchCustom,
  binarySearchValue: binarySearchValue,
  bridgeObject: bridgeObject,
  copyAndExtendArray: copyAndExtendArray,
  copyArray: copyArray,
  deepExtend: deepExtend,
  deepObjectAssign: deepObjectAssign,
  easingFunctions: easingFunctions,
  equalArray: equalArray,
  extend: extend,
  fillIfDefined: fillIfDefined,
  forEach: forEach$1,
  getAbsoluteLeft: getAbsoluteLeft,
  getAbsoluteRight: getAbsoluteRight,
  getAbsoluteTop: getAbsoluteTop,
  getScrollBarWidth: getScrollBarWidth,
  getTarget: getTarget,
  getType: getType,
  hasParent: hasParent,
  hexToHSV: hexToHSV,
  hexToRGB: hexToRGB,
  insertSort: insertSort,
  isDate: isDate,
  isNumber: isNumber,
  isObject: isObject,
  isString: isString,
  isValidHex: isValidHex,
  isValidRGB: isValidRGB,
  isValidRGBA: isValidRGBA,
  mergeOptions: mergeOptions,
  option: option,
  overrideOpacity: overrideOpacity,
  parseColor: parseColor,
  preventDefault: preventDefault,
  pureDeepObjectAssign: pureDeepObjectAssign,
  recursiveDOMDelete: recursiveDOMDelete,
  removeClassName: removeClassName,
  removeCssText: removeCssText,
  removeEventListener: removeEventListener,
  selectiveBridgeObject: selectiveBridgeObject,
  selectiveDeepExtend: selectiveDeepExtend,
  selectiveExtend: selectiveExtend,
  selectiveNotDeepExtend: selectiveNotDeepExtend,
  throttle: throttle,
  toArray: toArray,
  topMost: topMost,
  updateProperty: updateProperty
});

var DOMutil$1 = createCommonjsModule(function (module, exports) {
  // DOM utility methods

  /**
   * this prepares the JSON container for allocating SVG elements
   *
   * @param {object} JSONcontainer
   * @private
   */
  exports.prepareElements = function (JSONcontainer) {
    // cleanup the redundant svgElements;
    for (var elementType in JSONcontainer) {
      if (Object.prototype.hasOwnProperty.call(JSONcontainer, elementType)) {
        JSONcontainer[elementType].redundant = JSONcontainer[elementType].used;
        JSONcontainer[elementType].used = [];
      }
    }
  };
  /**
   * this cleans up all the unused SVG elements. By asking for the parentNode, we only need to supply the JSON container from
   * which to remove the redundant elements.
   *
   * @param {object} JSONcontainer
   * @private
   */


  exports.cleanupElements = function (JSONcontainer) {
    // cleanup the redundant svgElements;
    for (var elementType in JSONcontainer) {
      if (Object.prototype.hasOwnProperty.call((elementType))) {
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
   *
   * @param {object} JSONcontainer
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
   * @param {object} JSONcontainer
   * @param {object} svgContainer
   * @returns {Element}
   * @private
   */


  exports.getSVGElement = function (elementType, JSONcontainer, svgContainer) {
    var element; // allocate SVG element, if it doesnt yet exist, create one.

    if (Object.prototype.hasOwnProperty.call((elementType))) {
      // this element has been created before
      // check if there is an redundant element
      if (JSONcontainer[elementType].redundant.length > 0) {
        element = JSONcontainer[elementType].redundant[0];
        JSONcontainer[elementType].redundant.shift();
      } else {
        // create a new element and add it to the SVG
        element = document.createElementNS("http://www.w3.org/2000/svg", elementType);
        svgContainer.appendChild(element);
      }
    } else {
      // create a new element and add it to the SVG, also create a new object in the svgElements to keep track of it.
      element = document.createElementNS("http://www.w3.org/2000/svg", elementType);
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
   * @param {object} JSONcontainer
   * @param {Element} DOMContainer
   * @param {Element} insertBefore
   * @returns {*}
   */


  exports.getDOMElement = function (elementType, JSONcontainer, DOMContainer, insertBefore) {
    var element; // allocate DOM element, if it doesnt yet exist, create one.

    if (Object.prototype.hasOwnProperty.call((elementType))) {
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
   * @param {object} groupTemplate: A template containing the necessary information to draw the datapoint e.g., {style: 'circle', size: 5, className: 'className' }
   * @param groupTemplate
   * @param {object} JSONcontainer
   * @param {object} svgContainer
   * @param {object} labelObj
   * @returns {vis.PointItem}
   */


  exports.drawPoint = function (x, y, groupTemplate, JSONcontainer, svgContainer, labelObj) {
    var point;

    if (groupTemplate.style == "circle") {
      point = exports.getSVGElement("circle", JSONcontainer, svgContainer);
      point.setAttributeNS(null, "cx", x);
      point.setAttributeNS(null, "cy", y);
      point.setAttributeNS(null, "r", 0.5 * groupTemplate.size);
    } else {
      point = exports.getSVGElement("rect", JSONcontainer, svgContainer);
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
      var label = exports.getSVGElement("text", JSONcontainer, svgContainer);

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
   * @param {object} JSONcontainer
   * @param {object} svgContainer
   * @param {string} style
   */


  exports.drawBar = function (x, y, width, height, className, JSONcontainer, svgContainer, style) {
    if (height != 0) {
      if (height < 0) {
        height *= -1;
        y -= height;
      }

      var rect = exports.getSVGElement("rect", JSONcontainer, svgContainer);
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
DOMutil$1.prepareElements;
DOMutil$1.cleanupElements;
DOMutil$1.resetElements;
DOMutil$1.getSVGElement;
DOMutil$1.getDOMElement;
DOMutil$1.drawPoint;
DOMutil$1.drawBar;

var TypeError$5 = global_1.TypeError; // `Assert: IsConstructor(argument) is true`

var aConstructor = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError$5(tryToString(argument) + ' is not a constructor');
};

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push$1 = [].push; // `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails(function () {
  function F() {
    /* empty */
  }

  return !(nativeConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  nativeConstruct(function () {
    /* empty */
  });
});
var FORCED$2 = NEW_TARGET_BUG || ARGS_BUG;
_export({
  target: 'Reflect',
  stat: true,
  forced: FORCED$2,
  sham: FORCED$2
}, {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();

        case 1:
          return new Target(args[0]);

        case 2:
          return new Target(args[0], args[1]);

        case 3:
          return new Target(args[0], args[1], args[2]);

        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      functionApply(push$1, $args, args);
      return new (functionApply(functionBind, Target, $args))();
    } // with altered newTarget, not support built-in constructors


    var proto = newTarget.prototype;
    var instance = objectCreate(isObject$1(proto) ? proto : ObjectPrototype);
    var result = functionApply(Target, instance, args);
    return isObject$1(result) ? result : instance;
  }
});

var construct$2 = path.Reflect.construct;

var construct$1 = construct$2;

var construct = construct$1;

var assertThisInitialized = createCommonjsModule(function (module) {
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
var _assertThisInitialized = unwrapExports(assertThisInitialized);

var create$2 = create$4;

var create$1 = create$2;

var create = create$1;

// https://tc39.es/ecma262/#sec-object.setprototypeof

_export({
  target: 'Object',
  stat: true
}, {
  setPrototypeOf: objectSetPrototypeOf
});

var setPrototypeOf$5 = path.Object.setPrototypeOf;

var setPrototypeOf$4 = setPrototypeOf$5;

var setPrototypeOf$3 = setPrototypeOf$4;

var setPrototypeOf$2 = setPrototypeOf$3;

var setPrototypeOf$1 = setPrototypeOf$2;

var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = setPrototypeOf$1 || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
unwrapExports(setPrototypeOf);

var inherits = createCommonjsModule(function (module) {
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });

    defineProperty$4(subClass, "prototype", {
      writable: false
    });

    if (superClass) setPrototypeOf(subClass, superClass);
  }

  module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
var _inherits = unwrapExports(inherits);

var possibleConstructorReturn = createCommonjsModule(function (module) {
  var _typeof = _typeof_1["default"];

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized(self);
  }

  module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

var getPrototypeOf$3 = getPrototypeOf$5;

var getPrototypeOf$2 = getPrototypeOf$3;

var getPrototypeOf$1 = getPrototypeOf$2;

var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = setPrototypeOf$1 ? getPrototypeOf$1 : function _getPrototypeOf(o) {
      return o.__proto__ || getPrototypeOf$1(o);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});
var _getPrototypeOf = unwrapExports(getPrototypeOf);

var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

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

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    });
    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    define(Gp, iteratorSymbol, function () {
      return this;
    });
    define(Gp, "toString", function () {
      return "[object Generator]";
    });

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }
});

var regenerator = runtime_1;

var TypeError$4 = global_1.TypeError; // `Array.prototype.{ reduce, reduceRight }` methods implementation

var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = indexedObject(O);
    var length = lengthOfArrayLike(O);
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
        throw TypeError$4('Reduce of empty array with no initial value');
      }
    }

    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
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

var engineIsNode = classofRaw(global_1.process) == 'process';

var $reduce = arrayReduce.left;
var STRICT_METHOD$2 = arrayMethodIsStrict('reduce'); // Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

var CHROME_BUG = !engineIsNode && engineV8Version > 79 && engineV8Version < 83; // `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce

_export({
  target: 'Array',
  proto: true,
  forced: !STRICT_METHOD$2 || CHROME_BUG
}, {
  reduce: function reduce(callbackfn
  /* , initialValue */
  ) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});

var reduce$3 = entryVirtual('Array').reduce;

var ArrayPrototype$6 = Array.prototype;

var reduce$2 = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype$6 || objectIsPrototypeOf(ArrayPrototype$6, it) && own === ArrayPrototype$6.reduce ? reduce$3 : own;
};

var reduce$1 = reduce$2;

var reduce = reduce$1;

var TypeError$3 = global_1.TypeError; // `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? functionBindContext(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray$6(element)) {
        elementLen = lengthOfArrayLike(element);
        targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError$3('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
};

var flattenIntoArray_1 = flattenIntoArray;

// https://tc39.es/ecma262/#sec-array.prototype.flatmap


_export({
  target: 'Array',
  proto: true
}, {
  flatMap: function flatMap(callbackfn
  /* , thisArg */
  ) {
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A;
    aCallable(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray_1(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});

var flatMap$3 = entryVirtual('Array').flatMap;

var ArrayPrototype$5 = Array.prototype;

var flatMap$2 = function (it) {
  var own = it.flatMap;
  return it === ArrayPrototype$5 || objectIsPrototypeOf(ArrayPrototype$5, it) && own === ArrayPrototype$5.flatMap ? flatMap$3 : own;
};

var flatMap$1 = flatMap$2;

var flatMap = flatMap$1;

var arrayBufferNonExtensible = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8); // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe

    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {
      value: 8
    });
  }
});

var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () {
  $isExtensible(1);
}); // `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible

var objectIsExtensible = FAILS_ON_PRIMITIVES || arrayBufferNonExtensible ? function isExtensible(it) {
  if (!isObject$1(it)) return false;
  if (arrayBufferNonExtensible && classofRaw(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;

var freezing = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});

var internalMetadata = createCommonjsModule(function (module) {
  var defineProperty = objectDefineProperty.f;
  var REQUIRED = false;
  var METADATA = uid('meta');
  var id = 0;

  var setMetadata = function (it) {
    defineProperty(it, METADATA, {
      value: {
        objectID: 'O' + id++,
        // object ID
        weakData: {} // weak collections IDs

      }
    });
  };

  var fastKey = function (it, create) {
    // return a primitive with prefix
    if (!isObject$1(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

    if (!hasOwnProperty_1(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!objectIsExtensible(it)) return 'F'; // not necessary to add metadata

      if (!create) return 'E'; // add missing metadata

      setMetadata(it); // return object ID
    }

    return it[METADATA].objectID;
  };

  var getWeakData = function (it, create) {
    if (!hasOwnProperty_1(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!objectIsExtensible(it)) return true; // not necessary to add metadata

      if (!create) return false; // add missing metadata

      setMetadata(it); // return the store of weak collections IDs
    }

    return it[METADATA].weakData;
  }; // add metadata on freeze-family methods calling


  var onFreeze = function (it) {
    if (freezing && REQUIRED && objectIsExtensible(it) && !hasOwnProperty_1(it, METADATA)) setMetadata(it);
    return it;
  };

  var enable = function () {
    meta.enable = function () {
      /* empty */
    };

    REQUIRED = true;
    var getOwnPropertyNames = objectGetOwnPropertyNames.f;
    var splice = functionUncurryThis([].splice);
    var test = {};
    test[METADATA] = 1; // prevent exposing of metadata key

    if (getOwnPropertyNames(test).length) {
      objectGetOwnPropertyNames.f = function (it) {
        var result = getOwnPropertyNames(it);

        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1);
            break;
          }
        }

        return result;
      };

      _export({
        target: 'Object',
        stat: true,
        forced: true
      }, {
        getOwnPropertyNames: objectGetOwnPropertyNamesExternal.f
      });
    }
  };

  var meta = module.exports = {
    enable: enable,
    fastKey: fastKey,
    getWeakData: getWeakData,
    onFreeze: onFreeze
  };
  hiddenKeys$1[METADATA] = true;
});
internalMetadata.enable;
internalMetadata.fastKey;
internalMetadata.getWeakData;
internalMetadata.onFreeze;

var TypeError$2 = global_1.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = functionBindContext(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }

    return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$4(iterable);
    if (!iterFn) throw TypeError$2(tryToString(iterable) + ' is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && objectIsPrototypeOf(ResultPrototype, result)) return result;
      }

      return new Result(false);
    }

    iterator = getIterator$4(iterable, iterFn);
  }

  next = iterator.next;

  while (!(step = functionCall(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }

    if (typeof result == 'object' && result && objectIsPrototypeOf(ResultPrototype, result)) return result;
  }

  return new Result(false);
};

var TypeError$1 = global_1.TypeError;

var anInstance = function (it, Prototype) {
  if (objectIsPrototypeOf(Prototype, it)) return it;
  throw TypeError$1('Incorrect invocation');
};

var defineProperty$1 = objectDefineProperty.f;
var forEach = arrayIteration.forEach;
var setInternalState$1 = internalState.set;
var internalStateGetterFor$1 = internalState.getterFor;

var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;

  if (!descriptors || !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  }))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    internalMetadata.enable();
  } else {
    Constructor = wrapper(function (target, iterable) {
      setInternalState$1(anInstance(target, Prototype), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (iterable != undefined) iterate(iterable, target[ADDER], {
        that: target,
        AS_ENTRIES: IS_MAP
      });
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
    IS_WEAK || defineProperty$1(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).collection.size;
      }
    });
  }

  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
  exported[CONSTRUCTOR_NAME] = Constructor;
  _export({
    global: true,
    forced: true
  }, exported);
  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};

var redefineAll = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];else redefine(target, key, src[key], options);
  }

  return target;
};

var SPECIES = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};

var defineProperty = objectDefineProperty.f;
var fastKey = internalMetadata.fastKey;
var setInternalState = internalState.set;
var internalStateGetterFor = internalState.getterFor;
var collectionStrong = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: objectCreate(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!descriptors) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], {
        that: that,
        AS_ENTRIES: IS_MAP
      });
    });
    var Prototype = Constructor.prototype;
    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index; // change existing entry

      if (entry) {
        entry.value = value; // create new entry
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
        if (descriptors) state.size++;else that.size++; // add to index

        if (index !== 'F') state.index[index] = entry;
      }

      return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that); // fast case

      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index]; // frozen object case

      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(Prototype, {
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
        if (descriptors) state.size = 0;else that.size = 0;
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
          if (descriptors) state.size--;else that.size--;
        }

        return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        var state = getInternalState(this);
        var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;

        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this); // revert to the last existing entry

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
    redefineAll(Prototype, IS_MAP ? {
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
    if (descriptors) defineProperty(Prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
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
      var entry = state.last; // revert to the last existing entry

      while (entry && entry.removed) entry = entry.previous; // get next entry


      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return {
          value: undefined,
          done: true
        };
      } // return step by kind


      if (kind == 'keys') return {
        value: entry.key,
        done: false
      };
      if (kind == 'values') return {
        value: entry.value,
        done: false
      };
      return {
        value: [entry.key, entry.value],
        done: false
      };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species

    setSpecies(CONSTRUCTOR_NAME);
  }
};
collectionStrong.getConstructor;
collectionStrong.setStrong;

// https://tc39.es/ecma262/#sec-map-objects


collection('Map', function (init) {
  return function Map() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
}, collectionStrong);

var map$2 = path.Map;

var map$1 = map$2;

var map = map$1;

// https://tc39.es/ecma262/#sec-set-objects


collection('Set', function (init) {
  return function Set() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
}, collectionStrong);

var set$2 = path.Set;

var set$1 = set$2;

var set = set$1;

var iterator = iterator$4;

var getIterator_1 = getIterator$4;

var getIterator$3 = getIterator_1;

var getIterator$2 = getIterator$3;

var getIterator$1 = getIterator$2;

var getIterator = getIterator$1;

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySliceSimple(array, 0, middle), comparefn), mergeSort(arraySliceSimple(array, middle), comparefn), comparefn);
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
  }

  return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
  }

  return array;
};

var arraySort = mergeSort;

var firefox = engineUserAgent.match(/firefox\/(\d+)/i);
var engineFfVersion = !!firefox && +firefox[1];

var engineIsIeOrEdge = /MSIE|Trident/.test(engineUserAgent);

var webkit = engineUserAgent.match(/AppleWebKit\/(\d+)\./);
var engineWebkitVersion = !!webkit && +webkit[1];

var test = [];
var un$Sort = functionUncurryThis(test.sort);
var push = functionUncurryThis(test.push); // IE8-

var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
}); // V8 bug

var FAILS_ON_NULL = fails(function () {
  test.sort(null);
}); // Old WebKit

var STRICT_METHOD$1 = arrayMethodIsStrict('sort');
var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (engineV8Version) return engineV8Version < 70;
  if (engineFfVersion && engineFfVersion > 3) return;
  if (engineIsIeOrEdge) return true;
  if (engineWebkitVersion) return engineWebkitVersion < 603;
  var result = '';
  var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)

  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66:
      case 69:
      case 70:
      case 72:
        value = 3;
        break;

      case 68:
      case 71:
        value = 4;
        break;

      default:
        value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({
        k: chr + index,
        v: value
      });
    }
  }

  test.sort(function (a, b) {
    return b.v - a.v;
  });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});
var FORCED$1 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$1 || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString_1(x) > toString_1(y) ? 1 : -1;
  };
}; // `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort


_export({
  target: 'Array',
  proto: true,
  forced: FORCED$1
}, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);
    var array = toObject(this);
    if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);
    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    arraySort(items, getSortCompare(comparefn));
    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];

    while (index < arrayLength) delete array[index++];

    return array;
  }
});

var sort$3 = entryVirtual('Array').sort;

var ArrayPrototype$4 = Array.prototype;

var sort$2 = function (it) {
  var own = it.sort;
  return it === ArrayPrototype$4 || objectIsPrototypeOf(ArrayPrototype$4, it) && own === ArrayPrototype$4.sort ? sort$3 : own;
};

var sort$1 = sort$2;

var sort = sort$1;

var $some = arrayIteration.some;
var STRICT_METHOD = arrayMethodIsStrict('some'); // `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some

_export({
  target: 'Array',
  proto: true,
  forced: !STRICT_METHOD
}, {
  some: function some(callbackfn
  /* , thisArg */
  ) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var some$3 = entryVirtual('Array').some;

var ArrayPrototype$3 = Array.prototype;

var some$2 = function (it) {
  var own = it.some;
  return it === ArrayPrototype$3 || objectIsPrototypeOf(ArrayPrototype$3, it) && own === ArrayPrototype$3.some ? some$3 : own;
};

var some$1 = some$2;

var some = some$1;

var keys$3 = entryVirtual('Array').keys;

var keys$2 = keys$3;

var ArrayPrototype$2 = Array.prototype;
var DOMIterables$2 = {
  DOMTokenList: true,
  NodeList: true
};

var keys$1 = function (it) {
  var own = it.keys;
  return it === ArrayPrototype$2 || objectIsPrototypeOf(ArrayPrototype$2, it) && own === ArrayPrototype$2.keys || hasOwnProperty_1(DOMIterables$2, classof(it)) ? keys$2 : own;
};

var keys = keys$1;

var values$3 = entryVirtual('Array').values;

var values$2 = values$3;

var ArrayPrototype$1 = Array.prototype;
var DOMIterables$1 = {
  DOMTokenList: true,
  NodeList: true
};

var values$1 = function (it) {
  var own = it.values;
  return it === ArrayPrototype$1 || objectIsPrototypeOf(ArrayPrototype$1, it) && own === ArrayPrototype$1.values || hasOwnProperty_1(DOMIterables$1, classof(it)) ? values$2 : own;
};

var values = values$1;

var entries$3 = entryVirtual('Array').entries;

var entries$2 = entries$3;

var ArrayPrototype = Array.prototype;
var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

var entries$1 = function (it) {
  var own = it.entries;
  return it === ArrayPrototype || objectIsPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.entries || hasOwnProperty_1(DOMIterables, classof(it)) ? entries$2 : own;
};

var entries = entries$1;

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var _Symbol$iterator;

function ownKeys(object, enumerableOnly) { var keys = keys$4(object); if (getOwnPropertySymbols) { var symbols = getOwnPropertySymbols(object); enumerableOnly && (symbols = filter(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var _context32, _context33; var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? forEach$2(_context32 = ownKeys(Object(source), !0)).call(_context32, function (key) { _defineProperty(target, key, source[key]); }) : getOwnPropertyDescriptors ? defineProperties(target, getOwnPropertyDescriptors(source)) : forEach$2(_context33 = ownKeys(Object(source))).call(_context33, function (key) { defineProperty$7(target, key, getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct) return false; if (construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof symbol !== "undefined" && getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context31; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = slice(_context31 = Object.prototype.toString.call(o)).call(_context31, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from_1$3(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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
      add: bind(_context = this._add).call(_context, this),
      remove: bind(_context2 = this._remove).call(_context2, this),
      update: bind(_context3 = this._update).call(_context3, this)
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

      return reduce(_context4 = this._transformers).call(_context4, function (items, transform) {
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
    value: function filter$1(callback) {
      this._transformers.push(function (input) {
        return filter(input).call(input, callback);
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
        return map$3(input).call(input, callback);
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
    value: function flatMap$1(callback) {
      this._transformers.push(function (input) {
        return flatMap(input).call(input, callback);
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


var Queue$1 = /*#__PURE__*/function () {
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
      } // flush after a period of inactivity when a delay is configured


      if (this._timeout != null) {
        clearTimeout(this._timeout);
        this._timeout = null;
      }

      if (this.queue.length > 0 && typeof this.delay === "number") {
        this._timeout = setTimeout$1(function () {
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

      forEach$2(_context5 = splice(_context6 = this._queue).call(_context6, 0)).call(_context5, function (entry) {
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
          }); // @TODO: better solution?

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
 * [[DataSet]] code that can be reused in [[DataView]] or other similar implementations of [[DataInterface]].
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

    _defineProperty(this, "subscribe", DataSetPart.prototype.on);

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

      forEach$2(_context7 = concat$2(_context8 = []).call(_context8, _toConsumableArray(this._subscribers[event]), _toConsumableArray(this._subscribers["*"]))).call(_context7, function (subscriber) {
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
      } // @TODO: Maybe throw for invalid callbacks?

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

      this._subscribers[event] = filter(_context9 = this._subscribers[event]).call(_context9, function (subscriber) {
        return subscriber !== callback;
      });
    }
    /**
     * @deprecated Use on instead (PS: DataView.subscribe === DataView.on).
     */

  }]);

  return DataSetPart;
}();
/**
 * Data stream
 *
 * @remarks
 * [[DataStream]] offers an always up to date stream of items from a [[DataSet]] or [[DataView]].
 * That means that the stream is evaluated at the time of iteration, conversion to another data type or when [[cache]] is called, not when the [[DataStream]] was created.
 * Multiple invocations of for example [[toItemArray]] may yield different results (if the data source like for example [[DataSet]] gets modified).
 * @typeParam Item - The item type this stream is going to work with.
 */


_Symbol$iterator = iterator;

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
    regenerator.mark(function value() {
      var _iterator, _step, _step$value, id, item;

      return regenerator.wrap(function value$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
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
    regenerator.mark(function entries() {
      var _iterator2, _step2, _step2$value, id, item;

      return regenerator.wrap(function entries$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
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
    regenerator.mark(function keys() {
      var _iterator3, _step3, _step3$value, id;

      return regenerator.wrap(function keys$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
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
    regenerator.mark(function values() {
      var _iterator4, _step4, _step4$value, item;

      return regenerator.wrap(function values$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
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

      return map$3(_context14 = _toConsumableArray(this._pairs)).call(_context14, function (pair) {
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

      return map$3(_context15 = _toConsumableArray(this._pairs)).call(_context15, function (pair) {
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
      var map = create$3(null);

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
      return new map(this._pairs);
    }
    /**
     * Return a set containing all the (unique) ids in this stream.
     *
     * @returns The set of all ids from this stream.
     */

  }, {
    key: "toIdSet",
    value: function toIdSet() {
      return new set(this.toIdArray());
    }
    /**
     * Return a set containing all the (unique) items in this stream.
     *
     * @returns The set of all items from this stream.
     */

  }, {
    key: "toItemSet",
    value: function toItemSet() {
      return new set(this.toItemArray());
    }
    /**
     * Cache the items from this stream.
     *
     * @remarks
     * This method allows for items to be fetched immediatelly and used (possibly multiple times) later.
     * It can also be used to optimize performance as [[DataStream]] would otherwise reevaluate everything upon each iteration.
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
     * @returns A new [[DataStream]] with cached items (detached from the original [[DataSet]]).
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
      var set$1 = new set();

      var _iterator6 = _createForOfIteratorHelper(this._pairs),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _step6$value = _slicedToArray(_step6.value, 2),
              id = _step6$value[0],
              item = _step6$value[1];

          set$1.add(callback(item, id));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return set$1;
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
      return new DataStream(_defineProperty({}, iterator, /*#__PURE__*/regenerator.mark(function _callee() {
        var _iterator7, _step7, _step7$value, id, item;

        return regenerator.wrap(function _callee$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
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
      return new DataStream(_defineProperty({}, iterator, /*#__PURE__*/regenerator.mark(function _callee2() {
        var _iterator9, _step9, _step9$value, id, item;

        return regenerator.wrap(function _callee2$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
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
      var iter = getIterator(this._pairs);

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
      var iter = getIterator(this._pairs);

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
    value: function sort$1(callback) {
      var _this2 = this;

      return new DataStream(_defineProperty({}, iterator, function () {
        var _context18;

        return getIterator(sort(_context18 = _toConsumableArray(_this2._pairs)).call(_context18, function (_ref, _ref2) {
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


var DataSet$1 = /*#__PURE__*/function (_DataSetPart) {
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

    _this3 = _super.call(this); // correctly read optional arguments

    _defineProperty(_assertThisInitialized(_this3), "flush", void 0);

    _defineProperty(_assertThisInitialized(_this3), "length", void 0);

    _defineProperty(_assertThisInitialized(_this3), "_options", void 0);

    _defineProperty(_assertThisInitialized(_this3), "_data", void 0);

    _defineProperty(_assertThisInitialized(_this3), "_idProp", void 0);

    _defineProperty(_assertThisInitialized(_this3), "_queue", null);

    if (data && !isArray(data)) {
      options = data;
      data = [];
    }

    _this3._options = options || {};
    _this3._data = new map(); // map with data indexed by id

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
    /** Flush all queued calls. */

    /** @inheritDoc */

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
            this._queue = Queue$1.extend(this, {
              replace: ["add", "update", "remove"]
            });
          }

          if (options.queue && _typeof(options.queue) === "object") {
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

      if (isArray(data)) {
        // Array
        var idsToAdd = map$3(data).call(data, function (d) {
          return d[_this4._idProp];
        });

        if (some(idsToAdd).call(idsToAdd, function (id) {
          return _this4._data.has(id);
        })) {
          throw new Error("A duplicate id was found in the parameter array.");
        }

        for (var i = 0, len = data.length; i < len; i++) {
          id = this._addItem(data[i]);
          addedIds.push(id);
        }
      } else if (data && _typeof(data) === "object") {
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

          var oldItem = assign$2({}, _this5._data.get(origId)); // update item


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

      if (isArray(data)) {
        // Array
        for (var i = 0, len = data.length; i < len; i++) {
          if (data[i] && _typeof(data[i]) === "object") {
            addOrUpdate(data[i]);
          } else {
            console.warn("Ignoring input item, which is not an object at index " + i);
          }
        }
      } else if (data && _typeof(data) === "object") {
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
        }; // TODO: remove deprecated property 'data' some day
        //Object.defineProperty(props, 'data', {
        //  'get': (function() {
        //    console.warn('Property data is deprecated. Use DataSet.get(ids) to retrieve the new data, use the oldData property on this object to get the old data');
        //    return updatedData;
        //  }).bind(this)
        //});

        this._trigger("update", props, senderId);
      }

      return concat$2(addedIds).call(addedIds, updatedIds);
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

      if (!isArray(data)) {
        data = [data];
      }

      var updateEventData = map$3(_context19 = map$3(data).call(data, function (update) {
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
          items: map$3(updateEventData).call(updateEventData, function (value) {
            return value.id;
          }),
          oldData: map$3(updateEventData).call(updateEventData, function (value) {
            return value.oldData;
          }),
          data: map$3(updateEventData).call(updateEventData, function (value) {
            return value.updatedData;
          })
        }; // TODO: remove deprecated property 'data' some day
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
      } else if (isArray(first)) {
        // get(ids [, options])
        ids = first;
        options = second;
      } else {
        // get([, options])
        options = first;
      } // determine the return type


      var returnType = options && options.returnType === "Object" ? "Object" : "Array"; // @TODO: WTF is this? Or am I missing something?
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

      var filter$1 = options && filter(options);

      var items = [];
      var item = undefined;
      var itemIds = undefined;
      var itemId = undefined; // convert items

      if (id != null) {
        // return a single item
        item = this._data.get(id);

        if (item && filter$1 && !filter$1(item)) {
          item = undefined;
        }
      } else if (ids != null) {
        // return a subset of items
        for (var i = 0, len = ids.length; i < len; i++) {
          item = this._data.get(ids[i]);

          if (item != null && (!filter$1 || filter$1(item))) {
            items.push(item);
          }
        }
      } else {
        var _context20;

        // return all items
        itemIds = _toConsumableArray(keys(_context20 = this._data).call(_context20));

        for (var _i = 0, _len2 = itemIds.length; _i < _len2; _i++) {
          itemId = itemIds[_i];
          item = this._data.get(itemId);

          if (item != null && (!filter$1 || filter$1(item))) {
            items.push(item);
          }
        }
      } // order the results


      if (options && options.order && id == undefined) {
        this._sort(items, options.order);
      } // filter fields of the items


      if (options && options.fields) {
        var fields = options.fields;

        if (id != undefined && item != null) {
          item = this._filterFields(item, fields);
        } else {
          for (var _i2 = 0, _len3 = items.length; _i2 < _len3; _i2++) {
            items[_i2] = this._filterFields(items[_i2], fields);
          }
        }
      } // return the results


      if (returnType == "Object") {
        var result = {};

        for (var _i3 = 0, _len4 = items.length; _i3 < _len4; _i3++) {
          var resultant = items[_i3]; // @TODO: Shoudn't this be this._fieldId?
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

      var filter$1 = options && filter(options);

      var order = options && options.order;

      var itemIds = _toConsumableArray(keys(data).call(data));

      var ids = [];

      if (filter$1) {
        // get filtered items
        if (order) {
          // create ordered list
          var items = [];

          for (var i = 0, len = itemIds.length; i < len; i++) {
            var id = itemIds[i];

            var item = this._data.get(id);

            if (item != null && filter$1(item)) {
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

            if (_item2 != null && filter$1(_item2)) {
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
      var filter$1 = options && filter(options);

      var data = this._data;

      var itemIds = _toConsumableArray(keys(data).call(data));

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

          if (_item4 != null && (!filter$1 || filter$1(_item4))) {
            callback(_item4, _id6);
          }
        }
      }
    }
    /** @inheritDoc */

  }, {
    key: "map",
    value: function map(callback, options) {
      var filter$1 = options && filter(options);

      var mappedItems = [];
      var data = this._data;

      var itemIds = _toConsumableArray(keys(data).call(data)); // convert and filter items


      for (var i = 0, len = itemIds.length; i < len; i++) {
        var id = itemIds[i];

        var item = this._data.get(id);

        if (item != null && (!filter$1 || filter$1(item))) {
          mappedItems.push(callback(item, id));
        }
      } // order items


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

      return reduce(_context21 = isArray(fields) ? // Use the supplied array
      fields : // Use the keys of the supplied object
      keys$4(fields)).call(_context21, function (filteredItem, field) {
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

        sort(items).call(items, function (a, b) {
          // @TODO: How to treat missing properties?
          var av = a[name];
          var bv = b[name];
          return av > bv ? 1 : av < bv ? -1 : 0;
        });
      } else if (typeof order === "function") {
        // order by sort function
        sort(items).call(items, order);
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
      var removedItems = []; // force everything to be an array for simplicity

      var ids = isArray(id) ? id : [id];

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
      var ident; // confirm the id to use based on the args type

      if (isId(id)) {
        ident = id;
      } else if (id && _typeof(id) === "object") {
        ident = id[this._idProp]; // look for the identifier field using ._idProp
      } // do the removing if the item is found


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
     * After the items are removed, the [[DataSet]] will trigger an event `remove` for all removed items. When a `senderId` is provided, this id will be passed with the triggered event to all subscribers.
     *
     * @param senderId - Sender id.
     * @returns removedIds - The ids of all removed items.
     */

  }, {
    key: "clear",
    value: function clear(senderId) {
      var _context22;

      var ids = _toConsumableArray(keys(_context22 = this._data).call(_context22));

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

      var _iterator11 = _createForOfIteratorHelper(values(_context23 = this._data).call(_context23)),
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

      var _iterator12 = _createForOfIteratorHelper(values(_context24 = this._data).call(_context24)),
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

      var itemIds = _toConsumableArray(keys(data).call(data));

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
      var id = fullItem[this._idProp]; // check whether this id is already taken

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
        throw new Error("Cannot update item: item has no id (item: " + stringify$1(update) + ")");
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
        return new DataStream(_defineProperty({}, iterator, /*#__PURE__*/regenerator.mark(function _callee3() {
          var _iterator13, _step13, id, item;

          return regenerator.wrap(function _callee3$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
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
            }
          }, _callee3, null, [[1, 13, 16, 19]]);
        })));
      } else {
        var _context26;

        return new DataStream(_defineProperty({}, iterator, bind(_context26 = entries(this._data)).call(_context26, this._data)));
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


var DataView$1 = /*#__PURE__*/function (_DataSetPart2) {
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

    _defineProperty(_assertThisInitialized(_this7), "length", 0);

    _defineProperty(_assertThisInitialized(_this7), "_listener", void 0);

    _defineProperty(_assertThisInitialized(_this7), "_data", void 0);

    _defineProperty(_assertThisInitialized(_this7), "_ids", new set());

    _defineProperty(_assertThisInitialized(_this7), "_options", void 0);

    _this7._options = options || {};
    _this7._listener = bind(_context27 = _this7._onEvent).call(_context27, _assertThisInitialized(_this7));

    _this7.setData(data);

    return _this7;
  } // TODO: implement a function .config() to dynamically update things like configured filter
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
        } // trigger a remove of all items in memory


        var ids = this._data.getIds({
          filter: filter(this._options)
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
        this._data = data; // trigger an add of all added items

        var _ids = this._data.getIds({
          filter: filter(this._options)
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
        this._data = new DataSet$1();
      } // subscribe to new dataset


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
        filter: filter(this._options)
      });

      var oldIds = _toConsumableArray(this._ids);

      var newIds = {};
      var addedIds = [];
      var removedIds = [];
      var removedItems = []; // check for additions

      for (var i = 0, len = ids.length; i < len; i++) {
        var id = ids[i];
        newIds[id] = true;

        if (!this._ids.has(id)) {
          addedIds.push(id);

          this._ids.add(id);
        }
      } // check for removals


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

      this.length += addedIds.length - removedIds.length; // trigger events

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
      } // parse the arguments


      var ids = null;
      var options;

      if (isId(first) || isArray(first)) {
        ids = first;
        options = second;
      } else {
        options = first;
      } // extend the options with the default options and provided options


      var viewOptions = assign$2({}, this._options, options); // create a combined filter method when needed


      var thisFilter = filter(this._options);

      var optionsFilter = options && filter(options);

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
        var defaultFilter = filter(this._options);

        var optionsFilter = options != null ? filter(options) : null;
        var filter$1;

        if (optionsFilter) {
          if (defaultFilter) {
            filter$1 = function filter(item) {
              return defaultFilter(item) && optionsFilter(item);
            };
          } else {
            filter$1 = optionsFilter;
          }
        } else {
          filter$1 = defaultFilter;
        }

        return this._data.getIds({
          filter: filter$1,
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

        var defaultFilter = filter(this._options);

        var optionsFilter = options && filter(options);

        var filter$1;

        if (optionsFilter) {
          if (defaultFilter) {
            filter$1 = function filter(item) {
              return defaultFilter(item) && optionsFilter(item);
            };
          } else {
            filter$1 = optionsFilter;
          }
        } else {
          filter$1 = defaultFilter;
        }

        forEach$2(_context28 = this._data).call(_context28, callback, {
          filter: filter$1,
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

        var defaultFilter = filter(this._options);

        var optionsFilter = options && filter(options);

        var filter$1;

        if (optionsFilter) {
          if (defaultFilter) {
            filter$1 = function filter(item) {
              return defaultFilter(item) && optionsFilter(item);
            };
          } else {
            filter$1 = optionsFilter;
          }
        } else {
          filter$1 = defaultFilter;
        }

        return map$3(_context29 = this._data).call(_context29, callback, {
          filter: filter$1,
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

      return this._data.stream(ids || _defineProperty({}, iterator, bind(_context30 = keys(this._ids)).call(_context30, this._ids)));
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

      var _iterator14 = _createForOfIteratorHelper(ownKeys$2(DataView.prototype)),
          _step14;

      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var key = _step14.value;

          defineProperty$7(this, key, replacement);
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
  return _typeof(v) === "object" && v !== null && idProp === v.idProp && typeof v.add === "function" && typeof v.clear === "function" && typeof v.distinct === "function" && typeof forEach$2(v) === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof map$3(v) === "function" && typeof v.max === "function" && typeof v.min === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.remove === "function" && typeof v.setOptions === "function" && typeof v.stream === "function" && typeof v.update === "function" && typeof v.updateOnly === "function";
}
/**
 * Check that given value is compatible with Vis Data View interface.
 *
 * @param idProp - The expected property to contain item id.
 * @param v - The value to be tested.
 * @returns True if all expected values and methods match, false otherwise.
 */


function isDataViewLike(idProp, v) {
  return _typeof(v) === "object" && v !== null && idProp === v.idProp && typeof forEach$2(v) === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof map$3(v) === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.stream === "function" && isDataSetLike(idProp, v.getDataSet());
}

var esnext = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DELETE: DELETE,
  DataSet: DataSet$1,
  DataStream: DataStream,
  DataView: DataView$1,
  Queue: Queue$1,
  createNewDataPipeFrom: createNewDataPipeFrom,
  isDataSetLike: isDataSetLike,
  isDataViewLike: isDataViewLike
});

var trim = stringTrim.trim;
var charAt = functionUncurryThis(''.charAt);
var n$ParseFloat = global_1.parseFloat;
var Symbol$1 = global_1.Symbol;
var ITERATOR = Symbol$1 && Symbol$1.iterator;
var FORCED = 1 / n$ParseFloat(whitespaces + '-0') !== -Infinity // MS Edge 18- broken with boxed symbols
|| ITERATOR && !fails(function () {
  n$ParseFloat(Object(ITERATOR));
}); // `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string

var numberParseFloat = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString_1(string));
  var result = n$ParseFloat(trimmedString);
  return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
} : n$ParseFloat;

// https://tc39.es/ecma262/#sec-parsefloat-string

_export({
  global: true,
  forced: parseFloat != numberParseFloat
}, {
  parseFloat: numberParseFloat
});

var _parseFloat$2 = path.parseFloat;

var _parseFloat$1 = _parseFloat$2;

var _parseFloat = _parseFloat$1;

// https://tc39.es/ecma262/#sec-number.isnan

_export({
  target: 'Number',
  stat: true
}, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return number != number;
  }
});

var isNan$2 = path.Number.isNaN;

var isNan$1 = isNan$2;

var isNan = isNan$1;

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

/**
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
    this.frame = document.createElement("DIV"); //this.frame.style.backgroundColor = '#E5E5E5';

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

  if (index < values(this).length - 1) {
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

  if (index < values(this).length - 1) {
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
  this.playTimeout = setTimeout$1(function () {
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
    this.frame.bar.style.width = this.frame.clientWidth - this.frame.prev.clientWidth - this.frame.play.clientWidth - this.frame.next.clientWidth - 30 + "px"; // position the slider button

    var left = this.indexToLeft(this.index);
    this.frame.slide.style.left = left + "px";
  }
};
/**
 * Set the list with values for the slider
 *
 * @param {Array} values   A javascript array with values (any type)
 */


Slider.prototype.setValues = function (values$1) {
  this.values = values$1;
  if (values(this).length > 0) this.setIndex(0);else this.index = undefined;
};
/**
 * Select a value by its index
 *
 * @param {number} index
 */


Slider.prototype.setIndex = function (index) {
  if (index < values(this).length) {
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
  return values(this)[this.index];
};

Slider.prototype._onMouseDown = function (event) {
  // only react on left mouse button down
  var leftButtonDown = event.which ? event.which === 1 : event.button === 1;
  if (!leftButtonDown) return;
  this.startClientX = event.clientX;
  this.startSlideX = _parseFloat(this.frame.slide.style.left);
  this.frame.style.cursor = "move"; // add event listeners to handle moving the contents
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
  var width = _parseFloat(this.frame.bar.style.width) - this.frame.slide.clientWidth - 10;
  var x = left - 3;
  var index = Math.round(x / width * (values(this).length - 1));
  if (index < 0) index = 0;
  if (index > values(this).length - 1) index = values(this).length - 1;
  return index;
};

Slider.prototype.indexToLeft = function (index) {
  var width = _parseFloat(this.frame.bar.style.width) - this.frame.slide.clientWidth - 10;
  var x = index / (values(this).length - 1) * width;
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
  this.frame.style.cursor = "auto"; // remove event listeners

  removeEventListener(document, "mousemove", this.onmousemove);
  removeEventListener(document, "mouseup", this.onmouseup);
  preventDefault();
};

/**
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
  return !isNaN(_parseFloat(n)) && isFinite(n);
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
 *
 * @returns {number} current value
 */


StepNumber.prototype.getCurrent = function () {
  return _parseFloat(this._current.toPrecision(this.precision));
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

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
var mathSign = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

// https://tc39.es/ecma262/#sec-math.sign

_export({
  target: 'Math',
  stat: true
}, {
  sign: mathSign
});

var sign$2 = path.Math.sign;

var sign$1 = sign$2;

var sign = sign$1;

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
 *
 * @param {number} x offset by camera horisontal
 * @param {number} y offset by camera vertical
 */


Camera.prototype.setOffset = function (x, y) {
  var abs = Math.abs,
      sign$1 = sign,
      mul = this.offsetMultiplier,
      border = this.armLength * mul;

  if (abs(x) > border) {
    x = sign$1(x) * border;
  }

  if (abs(y) > border) {
    y = sign$1(y) * border;
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

var PREFIXEDOPTIONKEYS = ["xBarWidth", "yBarWidth", "valueMin", "valueMax", "xMin", "xMax", "xStep", "yMin", "yMax", "yStep", "zMin", "zMax", "zStep"]; // Placeholder for DEFAULTS reference

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

  return str.charAt(0).toUpperCase() + slice(str).call(str, 1);
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
  } // Remember defaults for future reference


  DEFAULTS = src; // Handle the defaults which can be simply copied over

  forceCopy(src, dst, OPTIONKEYS);
  forceCopy(src, dst, PREFIXEDOPTIONKEYS, "default"); // Handle the more complex ('special') fields

  setSpecialSettings(src, dst); // Following are internal fields, not part of the user settings

  dst.margin = 10; // px

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
    throw new Error("No dst passed");
  }

  if (DEFAULTS === undefined || isEmpty(DEFAULTS)) {
    throw new Error("DEFAULTS not set for module Settings");
  } // Handle the parameters which can be simply copied over


  safeCopy(options, dst, OPTIONKEYS);
  safeCopy(options, dst, PREFIXEDOPTIONKEYS, "default"); // Handle the more complex ('special') fields

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
  setCameraPosition(src.cameraPosition, dst); // As special fields go, this is an easy one; just a translation of the name.
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
  var fill$1 = "white";
  var stroke = "gray";
  var strokeWidth = 1;

  if (typeof backgroundColor === "string") {
    fill$1 = backgroundColor;
    stroke = "none";
    strokeWidth = 0;
  } else if (_typeof(backgroundColor) === "object") {
    if (fill(backgroundColor) !== undefined) fill$1 = fill(backgroundColor);
    if (backgroundColor.stroke !== undefined) stroke = backgroundColor.stroke;
    if (backgroundColor.strokeWidth !== undefined) strokeWidth = backgroundColor.strokeWidth;
  } else {
    throw new Error("Unsupported type of backgroundColor");
  }

  dst.frame.style.backgroundColor = fill$1;
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
    if (fill(dataColor)) {
      dst.dataColor.fill = fill(dataColor);
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

  if (isArray(surfaceColors)) {
    rgbColors = parseColorArray(surfaceColors);
  } else if (_typeof(surfaceColors) === "object") {
    rgbColors = parseColorObject(surfaceColors.hue);
  } else {
    throw new Error("Unsupported type of surfaceColors");
  } // for some reason surfaceColors goes from vMax to vMin:


  reverse(rgbColors).call(rgbColors);

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

  if (isArray(colormap)) {
    rgbColors = parseColorArray(colormap);
  } else if (_typeof(colormap) === "object") {
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

  return map$3(colormap).call(colormap, function (colorCode) {
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

var array = "array"; // Following not used here, but useful for reference
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
  var newMax = this.max + val; // Note that following allows newMin === newMax.
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
  this.value = undefined; // read all distinct values and select the first one

  this.values = dataGroup.getDistinctValues(this.column);

  if (values(this).length > 0) {
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
  var len = values(this).length;

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
  return values(this)[this.index];
};
/**
 * Retrieve all values of the filter
 *
 * @returns {Array} values
 */


Filter.prototype.getValues = function () {
  return values(this);
};
/**
 * Retrieve one value of the filter
 *
 * @param {number}  index
 * @returns {*} value
 */


Filter.prototype.getValue = function (index) {
  if (index >= values(this).length) throw new Error("Index out of range");
  return values(this)[index];
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
    f.value = values(this)[index];
    var dataView = new DataView$1(this.dataGroup.getDataSet(), {
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
  if (index >= values(this).length) throw new Error("Index out of range");
  this.index = index;
  this.value = values(this)[index];
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

  if (index < values(this).length) {
    // create a progress box
    if (frame.progress === undefined) {
      frame.progress = document.createElement("DIV");
      frame.progress.style.position = "absolute";
      frame.progress.style.color = "gray";
      frame.appendChild(frame.progress);
    }

    var progress = this.getLoadedProgress();
    frame.progress.innerHTML = "Loading animation... " + progress + "%"; // TODO: this is no nice solution...

    frame.progress.style.bottom = 60 + "px"; // TODO: use height of slider

    frame.progress.style.left = 10 + "px";
    var me = this;

    setTimeout$1(function () {
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

  if (isArray(rawData)) {
    rawData = new DataSet$1(rawData);
  }

  var data;

  if (rawData instanceof DataSet$1 || rawData instanceof DataView$1) {
    data = rawData.get();
  } else {
    throw new Error("Array, DataSet, or DataView expected");
  }

  if (data.length == 0) return;
  this.style = style; // unsubscribe from the dataTable

  if (this.dataSet) {
    this.dataSet.off("*", this._onChange);
  }

  this.dataSet = rawData;
  this.dataTable = data; // subscribe to changes in the dataset

  var me = this;

  this._onChange = function () {
    graph3d.setData(me.dataSet);
  };

  this.dataSet.on("*", this._onChange); // determine the location of x,y,z,value,filter columns

  this.colX = "x";
  this.colY = "y";
  this.colZ = "z";
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

  if (Object.prototype.hasOwnProperty.call(data[0], "style")) {
    this.colValue = "style";
    var valueRange = this.getColumnRange(data, this.colValue);

    this._setRangeDefaults(valueRange, graph3d.defaultValueMin, graph3d.defaultValueMax);

    this.valueRange = valueRange;
  } else {
    this.colValue = "z";
    this.valueRange = this.zRange;
  } // Initialize data filter if a filter column is provided


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

  var index = indexOf(_context = ["x", "y", "z"]).call(_context, column);

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

    if (indexOf(values).call(values, value) === -1) {
      values.push(value);
    }
  }

  return sort(values).call(values, function (a, b) {
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
 *
 * @param {Array.<object>} data
 * @returns {Array.<object>}
 */


DataGroup.prototype.getDataPoints = function (data) {
  var dataPoints = [];

  for (var i = 0; i < data.length; i++) {
    var point = new Point3d_1();
    point.x = data[i][this.colX] || 0;
    point.y = data[i][this.colY] || 0;
    point.z = data[i][this.colZ] || 0;
    point.data = data[i];
    point.value = data[i][this.colValue] || 0;
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
 *
 * @param {Array.<object>} data
 * @returns {Array.<object>}
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

    var xIndex = indexOf(dataX).call(dataX, obj.point.x);

    var yIndex = indexOf(dataY).call(dataY, obj.point.y);

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

Graph3d$1.STYLE = STYLE;
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

Graph3d$1.DEFAULTS = {
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
  style: Graph3d$1.STYLE.DOT,
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
}; // -----------------------------------------------------------------------------
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

function Graph3d$1(container, data, options) {
  if (!(this instanceof Graph3d$1)) {
    throw new SyntaxError("Constructor must be called with the new operator");
  } // create variables and set default values


  this.containerElement = container;
  this.dataGroup = new DataGroup();
  this.dataPoints = null; // The table with point objects
  // create a frame and canvas

  this.create();
  setDefaults(Graph3d$1.DEFAULTS, this); // the column indexes

  this.colX = undefined;
  this.colY = undefined;
  this.colZ = undefined;
  this.colValue = undefined; // TODO: customize axis range
  // apply options (also when undefined)

  this.setOptions(options); // apply data

  this.setData(data);
} // Extend Graph3d with an Emitter mixin


componentEmitter(Graph3d$1.prototype);
/**
 * Calculate the scaling values, dependent on the range in x, y, and z direction
 */

Graph3d$1.prototype._setScale = function () {
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


Graph3d$1.prototype._convert3Dto2D = function (point3d) {
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


Graph3d$1.prototype._convertPointToTranslation = function (point3d) {
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


Graph3d$1.prototype._convertTranslationToScreen = function (translation) {
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


Graph3d$1.prototype._calcTranslations = function (points) {
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

  sort(points).call(points, sortDepth);
};
/**
 * Transfer min/max values to the Graph3d instance.
 */


Graph3d$1.prototype._initializeRanges = function () {
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
 * @returns {Array.<object>}
 */


Graph3d$1.prototype.getDataPoints = function (data) {
  var dataPoints = [];

  for (var i = 0; i < data.length; i++) {
    var point = new Point3d_1();
    point.x = data[i][this.colX] || 0;
    point.y = data[i][this.colY] || 0;
    point.z = data[i][this.colZ] || 0;
    point.data = data[i];
    point.value = data[i][this.colValue] || 0;
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


Graph3d$1.prototype._getDataPoints = function (data) {
  // TODO: store the created matrix dataPoints in the filters instead of
  //       reloading each time.
  var x, y, i, obj;
  var dataPoints = [];

  if (this.style === Graph3d$1.STYLE.GRID || this.style === Graph3d$1.STYLE.SURFACE) {
    // copy all values from the data table to a matrix
    // the provided values are supposed to form a grid of (x,y) positions
    // create two lists with all present x and y values
    var dataX = this.dataGroup.getDistinctValues(this.colX, data);
    var dataY = this.dataGroup.getDistinctValues(this.colY, data);
    dataPoints = this.getDataPoints(data); // create a grid, a 2d matrix, with all values.

    var dataMatrix = []; // temporary data matrix

    for (i = 0; i < dataPoints.length; i++) {
      obj = dataPoints[i]; // TODO: implement Array().indexOf() for Internet Explorer

      var xIndex = indexOf(dataX).call(dataX, obj.point.x);

      var yIndex = indexOf(dataY).call(dataY, obj.point.y);

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
    dataPoints = this.getDataPoints(data);

    if (this.style === Graph3d$1.STYLE.LINE) {
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


Graph3d$1.prototype.create = function () {
  // remove all elements from the container element.
  while (this.containerElement.hasChildNodes()) {
    this.containerElement.removeChild(this.containerElement.firstChild);
  }

  this.frame = document.createElement("div");
  this.frame.style.position = "relative";
  this.frame.style.overflow = "hidden"; // create the graph canvas (HTML canvas element)

  this.frame.canvas = document.createElement("canvas");
  this.frame.canvas.style.position = "relative";
  this.frame.appendChild(this.frame.canvas); //if (!this.frame.canvas.getContext) {

  {
    var noCanvas = document.createElement("DIV");
    noCanvas.style.color = "red";
    noCanvas.style.fontWeight = "bold";
    noCanvas.style.padding = "10px";
    noCanvas.innerHTML = "Error: your browser does not support HTML canvas";
    this.frame.canvas.appendChild(noCanvas);
  }
  this.frame.filter = document.createElement("div");
  filter(this.frame).style.position = "absolute";
  filter(this.frame).style.bottom = "0px";
  filter(this.frame).style.left = "0px";
  filter(this.frame).style.width = "100%";
  this.frame.appendChild(filter(this.frame)); // add event listeners to handle moving and zooming the contents

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


  addEventListener(this.frame.canvas, "mousedown", onmousedown);
  addEventListener(this.frame.canvas, "touchstart", ontouchstart);
  addEventListener(this.frame.canvas, "mousewheel", onmousewheel);
  addEventListener(this.frame.canvas, "mousemove", ontooltip);
  addEventListener(this.frame.canvas, "click", onclick); // add the new graph to the container element

  this.containerElement.appendChild(this.frame);
};
/**
 * Set a new size for the graph
 *
 * @param {number} width
 * @param {number} height
 * @private
 */


Graph3d$1.prototype._setSize = function (width, height) {
  this.frame.style.width = width;
  this.frame.style.height = height;

  this._resizeCanvas();
};
/**
 * Resize the canvas to the current size of the frame
 */


Graph3d$1.prototype._resizeCanvas = function () {
  this.frame.canvas.style.width = "100%";
  this.frame.canvas.style.height = "100%";
  this.frame.canvas.width = this.frame.canvas.clientWidth;
  this.frame.canvas.height = this.frame.canvas.clientHeight; // adjust with for margin

  filter(this.frame).style.width = this.frame.canvas.clientWidth - 2 * 10 + "px";
};
/**
 * Start playing the animation, if requested and filter present. Only applicable
 * when animation data is available.
 */


Graph3d$1.prototype.animationStart = function () {
  // start animation when option is true
  if (!this.animationAutoStart || !this.dataGroup.dataFilter) return;
  if (!filter(this.frame) || !filter(this.frame).slider) throw new Error("No animation available");

  filter(this.frame).slider.play();
};
/**
 * Stop animation
 */


Graph3d$1.prototype.animationStop = function () {
  if (!filter(this.frame) || !filter(this.frame).slider) return;

  filter(this.frame).slider.stop();
};
/**
 * Resize the center position based on the current values in this.xCenter
 * and this.yCenter (which are strings with a percentage or a value
 * in pixels). The center positions are the variables this.currentXCenter
 * and this.currentYCenter
 */


Graph3d$1.prototype._resizeCenter = function () {
  // calculate the horizontal center position
  if (this.xCenter.charAt(this.xCenter.length - 1) === "%") {
    this.currentXCenter = _parseFloat(this.xCenter) / 100 * this.frame.canvas.clientWidth;
  } else {
    this.currentXCenter = _parseFloat(this.xCenter); // supposed to be in px
  } // calculate the vertical center position


  if (this.yCenter.charAt(this.yCenter.length - 1) === "%") {
    this.currentYCenter = _parseFloat(this.yCenter) / 100 * (this.frame.canvas.clientHeight - filter(this.frame).clientHeight);
  } else {
    this.currentYCenter = _parseFloat(this.yCenter); // supposed to be in px
  }
};
/**
 * Retrieve the current camera rotation
 *
 * @returns {object} An object with parameters horizontal, vertical, and
 *                   distance
 */


Graph3d$1.prototype.getCameraPosition = function () {
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


Graph3d$1.prototype._readData = function (data) {
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


Graph3d$1.prototype.setData = function (data) {
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


Graph3d$1.prototype.setOptions = function (options) {
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


Graph3d$1.prototype.setPointDrawingMethod = function () {
  var method = undefined;

  switch (this.style) {
    case Graph3d$1.STYLE.BAR:
      method = this._redrawBarGraphPoint;
      break;

    case Graph3d$1.STYLE.BARCOLOR:
      method = this._redrawBarColorGraphPoint;
      break;

    case Graph3d$1.STYLE.BARSIZE:
      method = this._redrawBarSizeGraphPoint;
      break;

    case Graph3d$1.STYLE.DOT:
      method = this._redrawDotGraphPoint;
      break;

    case Graph3d$1.STYLE.DOTLINE:
      method = this._redrawDotLineGraphPoint;
      break;

    case Graph3d$1.STYLE.DOTCOLOR:
      method = this._redrawDotColorGraphPoint;
      break;

    case Graph3d$1.STYLE.DOTSIZE:
      method = this._redrawDotSizeGraphPoint;
      break;

    case Graph3d$1.STYLE.SURFACE:
      method = this._redrawSurfaceGraphPoint;
      break;

    case Graph3d$1.STYLE.GRID:
      method = this._redrawGridGraphPoint;
      break;

    case Graph3d$1.STYLE.LINE:
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


Graph3d$1.prototype.setAxisLabelMethod = function () {
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


Graph3d$1.prototype.redraw = function () {
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


Graph3d$1.prototype._getContext = function () {
  var canvas = this.frame.canvas;
  var ctx = canvas.getContext("2d");
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  return ctx;
};
/**
 * Clear the canvas before redrawing
 */


Graph3d$1.prototype._redrawClear = function () {
  var canvas = this.frame.canvas;
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

Graph3d$1.prototype._dotSize = function () {
  return this.frame.clientWidth * this.dotSizeRatio;
};
/**
 * Get legend width
 *
 * @returns {*}
 * @private
 */


Graph3d$1.prototype._getLegendWidth = function () {
  var width;

  if (this.style === Graph3d$1.STYLE.DOTSIZE) {
    var dotSize = this._dotSize(); //width =  dotSize / 2 + dotSize * 2;


    width = dotSize * this.dotSizeMaxFraction;
  } else if (this.style === Graph3d$1.STYLE.BARSIZE) {
    width = this.xBarWidth;
  } else {
    width = 20;
  }

  return width;
};
/**
 * Redraw the legend based on size, dot color, or surface height
 */


Graph3d$1.prototype._redrawLegend = function () {
  //Return without drawing anything, if no legend is specified
  if (this.showLegend !== true) {
    return;
  } // Do not draw legend when graph style does not support


  if (this.style === Graph3d$1.STYLE.LINE || this.style === Graph3d$1.STYLE.BARSIZE //TODO add legend support for BARSIZE
  ) {
    return;
  } // Legend types - size and color. Determine if size legend.


  var isSizeLegend = this.style === Graph3d$1.STYLE.BARSIZE || this.style === Graph3d$1.STYLE.DOTSIZE; // Legend is either tracking z values or style values. This flag if false means use z values.

  var isValueLegend = this.style === Graph3d$1.STYLE.DOTSIZE || this.style === Graph3d$1.STYLE.DOTCOLOR || this.style === Graph3d$1.STYLE.SURFACE || this.style === Graph3d$1.STYLE.BARCOLOR;
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

    if (this.style === Graph3d$1.STYLE.DOTSIZE) {
      // Get the proportion to max and min right
      widthMin = width * (this.dotSizeMinFraction / this.dotSizeMaxFraction);
    } else if (this.style === Graph3d$1.STYLE.BARSIZE) ;

    ctx.strokeStyle = this.axisColor;
    ctx.fillStyle = fill(this.dataColor);
    ctx.beginPath();
    ctx.moveTo(left, top);
    ctx.lineTo(right, top);
    ctx.lineTo(left + widthMin, bottom);
    ctx.lineTo(left, bottom);
    ctx.closePath();

    fill(ctx).call(ctx);

    ctx.stroke();
  } // print value text along the legend edge


  var gridLineLen = 5; // px

  var legendMin = isValueLegend ? this.valueRange.min : this.zRange.min;
  var legendMax = isValueLegend ? this.valueRange.max : this.zRange.max;
  var step = new StepNumber_1(legendMin, legendMax, (legendMax - legendMin) / 5, true);
  step.start(true);

  while (!step.end()) {
    var _y = bottom - (step.getCurrent() - legendMin) / (legendMax - legendMin) * height;

    var from = new Point2d_1(left - gridLineLen, _y);
    var to = new Point2d_1(left, _y);

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


Graph3d$1.prototype._redrawFilter = function () {
  var dataFilter = this.dataGroup.dataFilter;

  var filter$1 = filter(this.frame);

  filter$1.innerHTML = "";

  if (!dataFilter) {
    filter$1.slider = undefined;
    return;
  }

  var options = {
    visible: this.showAnimationControls
  };
  var slider = new Slider(filter$1, options);
  filter$1.slider = slider; // TODO: css here is not nice here...

  filter$1.style.padding = "10px"; //this.frame.filter.style.backgroundColor = '#EFEFEF';

  slider.setValues(values(dataFilter));
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


Graph3d$1.prototype._redrawSlider = function () {
  if (filter(this.frame).slider !== undefined) {
    filter(this.frame).slider.redraw();
  }
};
/**
 * Redraw common information
 */


Graph3d$1.prototype._redrawInfo = function () {
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


Graph3d$1.prototype._line = function (ctx, from, to, strokeStyle) {
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


Graph3d$1.prototype.drawAxisLabelX = function (ctx, point3d, text, armAngle, yMargin) {
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


Graph3d$1.prototype.drawAxisLabelY = function (ctx, point3d, text, armAngle, yMargin) {
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


Graph3d$1.prototype.drawAxisLabelZ = function (ctx, point3d, text, offset) {
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


Graph3d$1.prototype.drawAxisLabelXRotate = function (ctx, point3d, text, armAngle, yMargin) {

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


Graph3d$1.prototype.drawAxisLabelYRotate = function (ctx, point3d, text, armAngle, yMargin) {

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


Graph3d$1.prototype.drawAxisLabelZRotate = function (ctx, point3d, text, offset) {
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


Graph3d$1.prototype._line3d = function (ctx, from, to, strokeStyle) {
  var from2d = this._convert3Dto2D(from);

  var to2d = this._convert3Dto2D(to);

  this._line(ctx, from2d, to2d, strokeStyle);
};
/**
 * Redraw the axis
 */


Graph3d$1.prototype._redrawAxis = function () {
  var ctx = this._getContext();

  var from, to, step, prettyStep, text, xText, yText, zText, offset, xOffset, yOffset; // TODO: get the actual rendered style of the containerElement
  //ctx.font = this.containerElement.style.font;
  //ctx.font = 24 / this.camera.getArmLength() + 'px arial';

  ctx.font = this.axisFontSize / this.camera.getArmLength() + "px " + this.axisFontType; // calculate the length for the short grid lines

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
      var msg = "  " + this.xValueLabel(x) + "  ";

      this._drawAxisLabelX.call(this, ctx, point3d, msg, armAngle, textMargin);
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

      var _msg = "  " + this.yValueLabel(y) + "  ";

      this._drawAxisLabelY.call(this, ctx, point3d, _msg, armAngle, textMargin);
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

      var _msg2 = this.zValueLabel(z) + " ";

      this._drawAxisLabelZ.call(this, ctx, from3d, _msg2, 5);

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
 *
 * @param {vis.Point3d} point
 * @returns {*}
 * @private
 */


Graph3d$1.prototype._getStrokeWidth = function (point) {
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
 * @param {object} point
 * @param {number} xWidth
 * @param {number} yWidth
 * @param {string} color
 * @param {string} borderColor
 * @private
 */


Graph3d$1.prototype._redrawBar = function (ctx, point, xWidth, yWidth, color, borderColor) {
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

  forEach$2(top).call(top, function (obj) {
    obj.screen = me._convert3Dto2D(obj.point);
  });

  forEach$2(bottom).call(bottom, function (obj) {
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


  sort(surfaces).call(surfaces, function (a, b) {
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


Graph3d$1.prototype._polygon = function (ctx, points, fillStyle, strokeStyle) {
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

  fill(ctx).call(ctx);

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


Graph3d$1.prototype._drawCircle = function (ctx, point, color, borderColor, size) {
  var radius = this._calcRadius(point, size);

  ctx.lineWidth = this._getStrokeWidth(point);
  ctx.strokeStyle = borderColor;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(point.screen.x, point.screen.y, radius, 0, Math.PI * 2, true);

  fill(ctx).call(ctx);

  ctx.stroke();
};
/**
 * Determine the colors for the 'regular' graph styles.
 *
 * @param {object} point
 * @returns {{fill, border}}
 * @private
 */


Graph3d$1.prototype._getColorsRegular = function (point) {
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


Graph3d$1.prototype._getColorsColor = function (point) {
  // calculate the color based on the value
  var color, borderColor, pointStyle;

  if (point && point.point && point.point.data && point.point.data.style) {
    pointStyle = point.point.data.style;
  }

  if (pointStyle && _typeof(pointStyle) === "object" && fill(pointStyle) && pointStyle.stroke) {
    return {
      fill: fill(pointStyle),
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


Graph3d$1.prototype._getColorsSize = function () {
  return {
    fill: fill(this.dataColor),
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


Graph3d$1.prototype._colormap = function (x) {
  var v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var r, g, b, a;
  var colormap = this.colormap;

  if (isArray(colormap)) {
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

  if (typeof a === "number" && !isNan(a)) {
    var _context, _context2, _context3;

    return concat$2(_context = concat$2(_context2 = concat$2(_context3 = "RGBA(".concat(Math.round(r * v), ", ")).call(_context3, Math.round(g * v), ", ")).call(_context2, Math.round(b * v), ", ")).call(_context, a, ")");
  } else {
    var _context4, _context5;

    return concat$2(_context4 = concat$2(_context5 = "RGB(".concat(Math.round(r * v), ", ")).call(_context5, Math.round(g * v), ", ")).call(_context4, Math.round(b * v), ")");
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


Graph3d$1.prototype._calcRadius = function (point, size) {
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
 * @param {object} point
 * @private
 */


Graph3d$1.prototype._redrawBarGraphPoint = function (ctx, point) {
  var xWidth = this.xBarWidth / 2;
  var yWidth = this.yBarWidth / 2;

  var colors = this._getColorsRegular(point);

  this._redrawBar(ctx, point, xWidth, yWidth, fill(colors), colors.border);
};
/**
 * Draw single datapoint for graph style 'bar-color'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */


Graph3d$1.prototype._redrawBarColorGraphPoint = function (ctx, point) {
  var xWidth = this.xBarWidth / 2;
  var yWidth = this.yBarWidth / 2;

  var colors = this._getColorsColor(point);

  this._redrawBar(ctx, point, xWidth, yWidth, fill(colors), colors.border);
};
/**
 * Draw single datapoint for graph style 'bar-size'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */


Graph3d$1.prototype._redrawBarSizeGraphPoint = function (ctx, point) {
  // calculate size for the bar
  var fraction = (point.point.value - this.valueRange.min) / this.valueRange.range();
  var xWidth = this.xBarWidth / 2 * (fraction * 0.8 + 0.2);
  var yWidth = this.yBarWidth / 2 * (fraction * 0.8 + 0.2);

  var colors = this._getColorsSize();

  this._redrawBar(ctx, point, xWidth, yWidth, fill(colors), colors.border);
};
/**
 * Draw single datapoint for graph style 'dot'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */


Graph3d$1.prototype._redrawDotGraphPoint = function (ctx, point) {
  var colors = this._getColorsRegular(point);

  this._drawCircle(ctx, point, fill(colors), colors.border);
};
/**
 * Draw single datapoint for graph style 'dot-line'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */


Graph3d$1.prototype._redrawDotLineGraphPoint = function (ctx, point) {
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


Graph3d$1.prototype._redrawDotColorGraphPoint = function (ctx, point) {
  var colors = this._getColorsColor(point);

  this._drawCircle(ctx, point, fill(colors), colors.border);
};
/**
 * Draw single datapoint for graph style 'dot-size'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */


Graph3d$1.prototype._redrawDotSizeGraphPoint = function (ctx, point) {
  var dotSize = this._dotSize();

  var fraction = (point.point.value - this.valueRange.min) / this.valueRange.range();
  var sizeMin = dotSize * this.dotSizeMinFraction;
  var sizeRange = dotSize * this.dotSizeMaxFraction - sizeMin;
  var size = sizeMin + sizeRange * fraction;

  var colors = this._getColorsSize();

  this._drawCircle(ctx, point, fill(colors), colors.border, size);
};
/**
 * Draw single datapoint for graph style 'surface'.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} point
 * @private
 */


Graph3d$1.prototype._redrawSurfaceGraphPoint = function (ctx, point) {
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
    var aDiff = Point3d_1.subtract(cross.trans, point.trans);
    var bDiff = Point3d_1.subtract(top.trans, right.trans);
    var surfaceNormal = Point3d_1.crossProduct(aDiff, bDiff);

    if (this.showPerspective) {
      var surfacePosition = Point3d_1.avg(Point3d_1.avg(point.trans, cross.trans), Point3d_1.avg(right.trans, top.trans)); // This corresponds to diffuse lighting with light source at (0, 0, 0).
      // More generally, we would need `surfacePosition - lightPosition`:

      cosViewAngle = -Point3d_1.dotProduct(surfaceNormal.normalize(), surfacePosition.normalize());
    } else {
      cosViewAngle = surfaceNormal.z / surfaceNormal.length();
    }

    topSideVisible = cosViewAngle > 0;
  }

  if (topSideVisible || !this.showGrayBottom) {
    var vAvg = (point.point.value + right.point.value + top.point.value + cross.point.value) / 4;
    var ratio = (vAvg - this.valueRange.min) * this.scale.value; // lighting factor. TODO: let user specify lighting model as function(?)

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

  ctx.lineWidth = this._getStrokeWidth(point); // TODO: only draw stroke when strokeWidth > 0

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


Graph3d$1.prototype._drawGridLine = function (ctx, from, to) {
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


Graph3d$1.prototype._redrawGridGraphPoint = function (ctx, point) {
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


Graph3d$1.prototype._redrawLineGraphPoint = function (ctx, point) {
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


Graph3d$1.prototype._redrawDataGraph = function () {
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


Graph3d$1.prototype._storeMousePosition = function (event) {
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


Graph3d$1.prototype._onMouseDown = function (event) {
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
  this.frame.style.cursor = "move"; // add event listeners to handle moving the contents
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


Graph3d$1.prototype._onMouseMove = function (event) {
  this.moving = true;
  event = event || window.event; // calculate change in mouse position

  var diffX = _parseFloat(getMouseX(event)) - this.startMouseX;
  var diffY = _parseFloat(getMouseY(event)) - this.startMouseY; // move with ctrl or rotate by other

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
  this.emit("cameraPositionChange", parameters);
  preventDefault(event);
};
/**
 * Stop moving operating.
 * This function activated from within the funcion Graph.mouseDown().
 *
 * @param {Event}  event   The event
 */


Graph3d$1.prototype._onMouseUp = function (event) {
  this.frame.style.cursor = "auto";
  this.leftButtonDown = false; // remove event listeners here

  removeEventListener(document, "mousemove", this.onmousemove);
  removeEventListener(document, "mouseup", this.onmouseup);
  preventDefault(event);
};
/**
 * @param {Event}  event   The event
 */


Graph3d$1.prototype._onClick = function (event) {
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


Graph3d$1.prototype._onTooltip = function (event) {
  var delay = this.tooltipDelay; // ms

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
    this.tooltipTimeout = setTimeout$1(function () {
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
 *
 * @param {Event}  event   The event
 */


Graph3d$1.prototype._onTouchStart = function (event) {
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


Graph3d$1.prototype._onTouchMove = function (event) {
  this._onMouseMove(event);
};
/**
 * Event handler for touchend event on mobile devices
 *
 * @param {Event}  event   The event
 */


Graph3d$1.prototype._onTouchEnd = function (event) {
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


Graph3d$1.prototype._onWheel = function (event) {
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
    this.emit("cameraPositionChange", parameters); // Prevent default actions caused by mouse wheel.
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


Graph3d$1.prototype._insideTriangle = function (point, triangle) {
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
 * @returns {object | null} The closest data point or null if not close to any
 *                          data point
 * @private
 */


Graph3d$1.prototype._dataPointFromXY = function (x, y) {
  var distMax = 100; // px

  var center = new Point2d_1(x, y);
  var i,
      dataPoint = null,
      closestDataPoint = null,
      closestDist = null;

  if (this.style === Graph3d$1.STYLE.BAR || this.style === Graph3d$1.STYLE.BARCOLOR || this.style === Graph3d$1.STYLE.BARSIZE) {
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


Graph3d$1.prototype.hasBars = function (style) {
  return style == Graph3d$1.STYLE.BAR || style == Graph3d$1.STYLE.BARCOLOR || style == Graph3d$1.STYLE.BARSIZE;
};
/**
 * Display a tooltip for given data point
 *
 * @param {object} dataPoint
 * @private
 */


Graph3d$1.prototype._showTooltip = function (dataPoint) {
  var content, line, dot;

  if (!this.tooltip) {
    content = document.createElement("div");

    assign$2(content.style, {}, this.tooltipStyle.content);

    content.style.position = "absolute";
    line = document.createElement("div");

    assign$2(line.style, {}, this.tooltipStyle.line);

    line.style.position = "absolute";
    dot = document.createElement("div");

    assign$2(dot.style, {}, this.tooltipStyle.dot);

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
  this.frame.appendChild(dot); // calculate sizes

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


Graph3d$1.prototype._hideTooltip = function () {
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
} // -----------------------------------------------------------------------------
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


Graph3d$1.prototype.setCameraPosition = function (pos) {
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


Graph3d$1.prototype.setSize = function (width, height) {
  this._setSize(width, height);

  this.redraw();
}; // -----------------------------------------------------------------------------

/**
 * Created by Alex on 11/6/2014.
 */
function keycharm$1(options) {
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

var util_1 = esnext$1;
var DOMutil = DOMutil$1; // data

var DataSet = esnext.DataSet,
    DataView = esnext.DataView,
    Queue = esnext.Queue;
var DataSet_1 = DataSet;
var DataView_1 = DataView;
var Queue_1 = Queue; // Graph3d

var Graph3d = Graph3d$1;
var graph3d = {
  Camera: Camera,
  Filter: Filter,
  Point2d: Point2d_1,
  Point3d: Point3d_1,
  Slider: Slider,
  StepNumber: StepNumber_1
}; // bundled external libraries

var Hammer = esnext$1.Hammer;
var keycharm = keycharm$1;
var repo = {
  util: util_1,
  DOMutil: DOMutil,
  DataSet: DataSet_1,
  DataView: DataView_1,
  Queue: Queue_1,
  Graph3d: Graph3d,
  graph3d: graph3d,
  Hammer: Hammer,
  keycharm: keycharm
};

export { DOMutil, DataSet_1 as DataSet, DataView_1 as DataView, Graph3d, Hammer, Queue_1 as Queue, repo as default, graph3d, keycharm, util_1 as util };
//# sourceMappingURL=esm.js.map
