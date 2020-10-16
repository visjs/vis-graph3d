/**
 * vis-graph3d
 * https://visjs.github.io/vis-graph3d/
 *
 * Create interactive, animated 3d graphs. Surfaces, lines, dots and block styling out of the box.
 *
 * @version 0.0.0-no-version
 * @date    2020-10-16T21:01:47.447Z
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

import { DataView, DataSet } from 'vis-data/peer/esm/vis-data.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


var global_1 = // eslint-disable-next-line no-undef
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func
Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var descriptors = !fails(function () {
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;
var objectPropertyIsEnumerable = {
  f: f
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string

var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var hasOwnProperty = {}.hasOwnProperty;

var has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var document$1 = global_1.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

var ie8DomDefine = !descriptors && !fails(function () {
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};
var objectGetOwnPropertyDescriptor = {
  f: f$1
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
var isForced_1 = isForced;

var path = {};

var aFunction = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

var functionBindContext = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty

var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};
var objectDefineProperty = {
  f: f$2
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
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

    return NativeConstructor.apply(this, arguments);
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
*/


var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;
  var nativeSource = GLOBAL ? global_1 : STATIC ? global_1[TARGET] : (global_1[TARGET] || {}).prototype;
  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;
  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contains in native

    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);
    targetProperty = target[key];
    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key]; // export native or implementation

    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue; // bind timers to global for call from export context

    if (options.bind && USE_NATIVE) resultProperty = functionBindContext(sourceProperty, global_1); // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty); // make static versions for prototype methods
      else if (PROTO && typeof sourceProperty == 'function') resultProperty = functionBindContext(Function.call, sourceProperty); // default case
        else resultProperty = sourceProperty; // add a flag to not completely full polyfills

    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';

      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      } // export virtual prototype methods


      path[VIRTUAL_PROTOTYPE][key] = sourceProperty; // export real prototype methods

      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger

var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var min = Math.min; // `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength

var toLength = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var hiddenKeys = {};

var indexOf = arrayIncludes.indexOf;

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }

  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

// https://tc39.github.io/ecma262/#sec-object.keys

var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

var f$3 = Object.getOwnPropertySymbols;
var objectGetOwnPropertySymbols = {
  f: f$3
};

// https://tc39.github.io/ecma262/#sec-toobject

var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty; // `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign

var objectAssign = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (descriptors && nativeAssign({
    b: 1
  }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  var propertyIsEnumerable = objectPropertyIsEnumerable.f;

  while (argumentsLength > index) {
    var S = indexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : nativeAssign;

// https://tc39.github.io/ecma262/#sec-object.assign

_export({
  target: 'Object',
  stat: true,
  forced: Object.assign !== objectAssign
}, {
  assign: objectAssign
});

var assign = path.Object.assign;

var assign$1 = assign;

var assign$2 = assign$1;

var aFunction$1 = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var slice = [].slice;
var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout
  /* , ...arguments */
  ) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
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

var setTimeout = path.setTimeout;

var setTimeout$1 = setTimeout;

// https://tc39.github.io/ecma262/#sec-isarray

var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

var createProperty = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global_1, key, value);
  } catch (error) {
    global_1[key] = value;
  }

  return value;
};

var SHARED = '__core-js_shared__';
var store = global_1[SHARED] || setGlobal(SHARED, {});
var sharedStore = store;

var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.6.4',
    mode:  'pure' ,
    copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
  });
});

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

var useSymbolAsUid = nativeSymbol // eslint-disable-next-line no-undef
&& !Symbol.sham // eslint-disable-next-line no-undef
&& typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  }

  return WellKnownSymbolsStore[name];
};

var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate

var arraySpeciesCreate = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var process = global_1.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);

  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var engineV8Version = version && +version;

var SPECIES$1 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};

    constructor[SPECIES$1] = function () {
      return {
        foo: 1
      };
    };

    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679

var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species

_export({
  target: 'Array',
  proto: true,
  forced: FORCED
}, {
  concat: function concat(arg) {
    // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;

    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];

      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }

    A.length = n;
    return A;
  }
});

var entryVirtual = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};

var concat = entryVirtual('Array').concat;

var ArrayPrototype = Array.prototype;

var concat_1 = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.concat ? concat : own;
};

var concat$1 = concat_1;

var concat$2 = concat$1;

// https://tc39.github.io/ecma262/#sec-number.isnan

_export({
  target: 'Number',
  stat: true
}, {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

var isNan = path.Number.isNaN;

var isNan$1 = isNan;

var isNan$2 = isNan$1;

// https://tc39.github.io/ecma262/#sec-array.isarray

_export({
  target: 'Array',
  stat: true
}, {
  isArray: isArray
});

var isArray$1 = path.Array.isArray;

var isArray$2 = isArray$1;

var isArray$3 = isArray$2;

var f$4 = wellKnownSymbol;
var wellKnownSymbolWrapped = {
  f: f$4
};

var defineProperty$1 = objectDefineProperty.f;

var defineWellKnownSymbol = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
    value: wellKnownSymbolWrapped.f(NAME)
  });
};

// https://tc39.github.io/ecma262/#sec-symbol.iterator

defineWellKnownSymbol('iterator');

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof sharedStore.inspectSource != 'function') {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap = global_1.WeakMap;
var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var WeakMap$1 = global_1.WeakMap;
var set, get, has$1;

var enforce = function (it) {
  return has$1(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (nativeWeakMap) {
  var store$1 = new WeakMap$1();
  var wmget = store$1.get;
  var wmhas = store$1.has;
  var wmset = store$1.set;

  set = function (it, metadata) {
    wmset.call(store$1, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget.call(store$1, it) || {};
  };

  has$1 = function (it) {
    return wmhas.call(store$1, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return has(it, STATE) ? it[STATE] : {};
  };

  has$1 = function (it) {
    return has(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$1,
  enforce: enforce,
  getterFor: getterFor
};

var correctPrototypeGetter = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof

var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectPrototype : null;
};

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object


var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

// https://tc39.github.io/ecma262/#sec-object.defineproperties

var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);

  return O;
};

var html = getBuiltIn('document', 'documentElement');

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
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
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true; // `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create

var objectCreate = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag'); // ES3 wrong here

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
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

// https://tc39.github.io/ecma262/#sec-object.prototype.tostring


var objectToString = toStringTagSupport ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

var defineProperty$2 = objectDefineProperty.f;
var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;

    if (!has(target, TO_STRING_TAG$2)) {
      defineProperty$2(target, TO_STRING_TAG$2, {
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

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

var returnThis = function () {
  return this;
};

var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

var aPossiblePrototype = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }

  return it;
};

// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */

var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var redefine = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;else createNonEnumerableProperty(target, key, value);
};

var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis$1 = function () {
  return this;
};

var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];

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
  var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      iterators[TO_STRING_TAG] = returnThis$1;
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;

    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  } // define iterator


  if (( FORCED) && IterablePrototype[ITERATOR$1] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
  }

  iterators[NAME] = defaultIterator; // export additional methods

  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else _export({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME
    }, methods);
  }

  return methods;
};

var charAt = stringMultibyte.charAt;
var STRING_ITERATOR = 'String Iterator';
var setInternalState = internalState.set;
var getInternalState = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator

defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  }); // `%StringIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return {
    value: undefined,
    done: true
  };
  point = charAt(string, index);
  state.index += point.length;
  return {
    value: point,
    done: false
  };
});

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$1 = internalState.set;
var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator

var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$1(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
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
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

iterators.Arguments = iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

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

var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in domIterables) {
  var Collection = global_1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;

  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG$3) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
  }

  iterators[COLLECTION_NAME] = iterators.Array;
}

var iterator = wellKnownSymbolWrapped.f('iterator');

var iterator$1 = iterator;

var iterator$2 = iterator$1;

var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys$1);
};

var objectGetOwnPropertyNames = {
  f: f$5
};

var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;
var toString$1 = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


var f$6 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
};

var objectGetOwnPropertyNamesExternal = {
  f: f$6
};

var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

var createMethod$2 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
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
              push.call(target, value);
            // filter
          } else if (IS_EVERY) return false; // every
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$2(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod$2(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod$2(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod$2(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod$2(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod$2(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$2(6)
};

var $forEach = arrayIteration.forEach;
var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE$1 = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState$2 = internalState.set;
var getInternalState$2 = internalState.getterFor(SYMBOL);
var ObjectPrototype$1 = Object[PROTOTYPE$1];
var $Symbol = global_1.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var nativeDefineProperty$1 = objectDefineProperty.f;
var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore$1 = shared('wks');
var QObject = global_1.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDescriptor = descriptors && fails(function () {
  return objectCreate(nativeDefineProperty$1({}, 'a', {
    get: function () {
      return nativeDefineProperty$1(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$1, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P];
  nativeDefineProperty$1(O, P, Attributes);

  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
    nativeDefineProperty$1(ObjectPrototype$1, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty$1;

var wrap$1 = function (tag, description) {
  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
  setInternalState$2(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!descriptors) symbol.description = description;
  return symbol;
};

var isSymbol = useSymbolAsUid ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);

  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = objectCreate(Attributes, {
        enumerable: createPropertyDescriptor(0, false)
      });
    }

    return setSymbolDescriptor(O, key, Attributes);
  }

  return nativeDefineProperty$1(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable$1.call(this, P);
  if (this === ObjectPrototype$1 && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype$1 && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }

  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
  var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype$1, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
}; // `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor


if (!nativeSymbol) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);

    var setter = function (value) {
      if (this === ObjectPrototype$1) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };

    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, {
      configurable: true,
      set: setter
    });
    return wrap$1(tag, description);
  };

  redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
    return getInternalState$2(this).tag;
  });
  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap$1(uid(description), description);
  });
  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
  objectDefineProperty.f = $defineProperty;
  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

  wellKnownSymbolWrapped.f = function (name) {
    return wrap$1(wellKnownSymbol(name), name);
  };

  if (descriptors) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState$2(this).description;
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
$forEach(objectKeys(WellKnownSymbolsStore$1), function (name) {
  defineWellKnownSymbol(name);
});
_export({
  target: SYMBOL,
  stat: true,
  forced: !nativeSymbol
}, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
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
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
_export({
  target: 'Object',
  stat: true,
  forced: !nativeSymbol
}, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
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
// https://tc39.github.io/ecma262/#sec-json.stringify

if ($stringify) {
  var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

    return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
    || $stringify({
      a: symbol
    }) != '{}' // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
  });
  _export({
    target: 'JSON',
    stat: true,
    forced: FORCED_JSON_STRINGIFY
  }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;

      while (arguments.length > index) args.push(arguments[index++]);

      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
} // `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive


if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
} // `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag


setToStringTag($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;

// https://tc39.github.io/ecma262/#sec-symbol.asynciterator

defineWellKnownSymbol('asyncIterator');

// https://tc39.github.io/ecma262/#sec-symbol.hasinstance

defineWellKnownSymbol('hasInstance');

// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable

defineWellKnownSymbol('isConcatSpreadable');

// https://tc39.github.io/ecma262/#sec-symbol.match

defineWellKnownSymbol('match');

defineWellKnownSymbol('matchAll');

// https://tc39.github.io/ecma262/#sec-symbol.replace

defineWellKnownSymbol('replace');

// https://tc39.github.io/ecma262/#sec-symbol.search

defineWellKnownSymbol('search');

// https://tc39.github.io/ecma262/#sec-symbol.species

defineWellKnownSymbol('species');

// https://tc39.github.io/ecma262/#sec-symbol.split

defineWellKnownSymbol('split');

// https://tc39.github.io/ecma262/#sec-symbol.toprimitive

defineWellKnownSymbol('toPrimitive');

// https://tc39.github.io/ecma262/#sec-symbol.tostringtag

defineWellKnownSymbol('toStringTag');

// https://tc39.github.io/ecma262/#sec-symbol.unscopables

defineWellKnownSymbol('unscopables');

// https://tc39.github.io/ecma262/#sec-math-@@tostringtag

setToStringTag(Math, 'Math', true);

// https://tc39.github.io/ecma262/#sec-json-@@tostringtag

setToStringTag(global_1.JSON, 'JSON', true);

var symbol = path.Symbol;

// https://github.com/tc39/proposal-using-statement

defineWellKnownSymbol('asyncDispose');

// https://github.com/tc39/proposal-using-statement

defineWellKnownSymbol('dispose');

// https://github.com/tc39/proposal-observable

defineWellKnownSymbol('observable');

// https://github.com/tc39/proposal-pattern-matching

defineWellKnownSymbol('patternMatch');

defineWellKnownSymbol('replaceAll');

var symbol$1 = symbol;

var symbol$2 = symbol$1;

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof symbol$2 === "function" && typeof iterator$2 === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof symbol$2 === "function" && obj.constructor === symbol$2 && obj !== symbol$2.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
});

var arrayMethodIsStrict = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

var defineProperty$3 = Object.defineProperty;
var cache = {};

var thrower = function (it) {
  throw it;
};

var arrayMethodUsesToLength = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;
  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !descriptors) return true;
    var O = {
      length: -1
    };
    if (ACCESSORS) defineProperty$3(O, 1, {
      enumerable: true,
      get: thrower
    });else O[1] = 1;
    method.call(O, argument0, argument1);
  });
};

var $forEach$1 = arrayIteration.forEach;
var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach'); // `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach

var arrayForEach = !STRICT_METHOD || !USES_TO_LENGTH ? function forEach(callbackfn
/* , thisArg */
) {
  return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

// https://tc39.github.io/ecma262/#sec-array.prototype.foreach


_export({
  target: 'Array',
  proto: true,
  forced: [].forEach != arrayForEach
}, {
  forEach: arrayForEach
});

var forEach = entryVirtual('Array').forEach;

var forEach$1 = forEach;

var ArrayPrototype$1 = Array.prototype;
var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

var forEach_1 = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype$1 || it instanceof Array && own === ArrayPrototype$1.forEach // eslint-disable-next-line no-prototype-builtins
  || DOMIterables.hasOwnProperty(classof(it)) ? forEach$1 : own;
};

var forEach$2 = forEach_1;

var values = entryVirtual('Array').values;

var values$1 = values;

var ArrayPrototype$2 = Array.prototype;
var DOMIterables$1 = {
  DOMTokenList: true,
  NodeList: true
};

var values_1 = function (it) {
  var own = it.values;
  return it === ArrayPrototype$2 || it instanceof Array && own === ArrayPrototype$2.values // eslint-disable-next-line no-prototype-builtins
  || DOMIterables$1.hasOwnProperty(classof(it)) ? values$1 : own;
};

var values$2 = values_1;

// https://tc39.github.io/ecma262/#sec-array.prototype.fill


var arrayFill = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) O[index++] = value;

  return O;
};

// https://tc39.github.io/ecma262/#sec-array.prototype.fill

_export({
  target: 'Array',
  proto: true
}, {
  fill: arrayFill
}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

var fill = entryVirtual('Array').fill;

var ArrayPrototype$3 = Array.prototype;

var fill_1 = function (it) {
  var own = it.fill;
  return it === ArrayPrototype$3 || it instanceof Array && own === ArrayPrototype$3.fill ? fill : own;
};

var fill$1 = fill_1;

var fill$2 = fill$1;

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

var createMethod$3 = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod$3(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod$3(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod$3(3)
};

var trim = stringTrim.trim;
var $parseFloat = global_1.parseFloat;
var FORCED$1 = 1 / $parseFloat(whitespaces + '-0') !== -Infinity; // `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string

var numberParseFloat = FORCED$1 ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// https://tc39.github.io/ecma262/#sec-parsefloat-string

_export({
  global: true,
  forced: parseFloat != numberParseFloat
}, {
  parseFloat: numberParseFloat
});

var _parseFloat = path.parseFloat;

var _parseFloat$1 = _parseFloat;

var _parseFloat$2 = _parseFloat$1;

var $filter = arrayIteration.filter;
var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // Edge 14- issue

var USES_TO_LENGTH$1 = arrayMethodUsesToLength('filter'); // `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH$1
}, {
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var filter = entryVirtual('Array').filter;

var ArrayPrototype$4 = Array.prototype;

var filter_1 = function (it) {
  var own = it.filter;
  return it === ArrayPrototype$4 || it instanceof Array && own === ArrayPrototype$4.filter ? filter : own;
};

var filter$1 = filter_1;

var filter$2 = filter$1;

var $indexOf = arrayIncludes.indexOf;
var nativeIndexOf = [].indexOf;
var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD$1 = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH$2 = arrayMethodUsesToLength('indexOf', {
  ACCESSORS: true,
  1: 0
}); // `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof

_export({
  target: 'Array',
  proto: true,
  forced: NEGATIVE_ZERO || !STRICT_METHOD$1 || !USES_TO_LENGTH$2
}, {
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    return NEGATIVE_ZERO // convert -0 to +0
    ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var indexOf$1 = entryVirtual('Array').indexOf;

var ArrayPrototype$5 = Array.prototype;

var indexOf_1 = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype$5 || it instanceof Array && own === ArrayPrototype$5.indexOf ? indexOf$1 : own;
};

var indexOf$2 = indexOf_1;

var indexOf$3 = indexOf$2;

var test$1 = [];
var nativeSort = test$1.sort; // IE8-

var FAILS_ON_UNDEFINED = fails(function () {
  test$1.sort(undefined);
}); // V8 bug

var FAILS_ON_NULL = fails(function () {
  test$1.sort(null);
}); // Old WebKit

var STRICT_METHOD$2 = arrayMethodIsStrict('sort');
var FORCED$2 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$2; // `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort

_export({
  target: 'Array',
  proto: true,
  forced: FORCED$2
}, {
  sort: function sort(comparefn) {
    return comparefn === undefined ? nativeSort.call(toObject(this)) : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});

var sort = entryVirtual('Array').sort;

var ArrayPrototype$6 = Array.prototype;

var sort_1 = function (it) {
  var own = it.sort;
  return it === ArrayPrototype$6 || it instanceof Array && own === ArrayPrototype$6.sort ? sort : own;
};

var sort$1 = sort_1;

var sort$2 = sort$1;

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

// https://tc39.github.io/ecma262/#sec-object.defineproperty

_export({
  target: 'Object',
  stat: true,
  forced: !descriptors,
  sham: !descriptors
}, {
  defineProperty: objectDefineProperty.f
});

var defineProperty_1 = createCommonjsModule(function (module) {
  var Object = path.Object;

  var defineProperty = module.exports = function defineProperty(it, key, desc) {
    return Object.defineProperty(it, key, desc);
  };

  if (Object.defineProperty.sham) defineProperty.sham = true;
});

// https://tc39.github.io/ecma262/#sec-object.defineproperties

_export({
  target: 'Object',
  stat: true,
  forced: !descriptors,
  sham: !descriptors
}, {
  defineProperties: objectDefineProperties
});

var defineProperties_1 = createCommonjsModule(function (module) {
  var Object = path.Object;

  var defineProperties = module.exports = function defineProperties(T, D) {
    return Object.defineProperties(T, D);
  };

  if (Object.defineProperties.sham) defineProperties.sham = true;
});

var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors

_export({
  target: 'Object',
  stat: true,
  sham: !descriptors
}, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    var keys = ownKeys(O);
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

var getOwnPropertyDescriptors = path.Object.getOwnPropertyDescriptors;

var nativeGetOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var FAILS_ON_PRIMITIVES = fails(function () {
  nativeGetOwnPropertyDescriptor$2(1);
});
var FORCED$3 = !descriptors || FAILS_ON_PRIMITIVES; // `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

_export({
  target: 'Object',
  stat: true,
  forced: FORCED$3,
  sham: !descriptors
}, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor$2(toIndexedObject(it), key);
  }
});

var getOwnPropertyDescriptor_1 = createCommonjsModule(function (module) {
  var Object = path.Object;

  var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
    return Object.getOwnPropertyDescriptor(it, key);
  };

  if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;
});

var getOwnPropertySymbols = path.Object.getOwnPropertySymbols;

var ITERATOR$2 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || iterators[classof(it)];
};

var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};

var ITERATOR$3 = wellKnownSymbol('iterator');
var ArrayPrototype$7 = Array.prototype; // check on default Array iterator

var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype$7[ITERATOR$3] === it);
};

// https://tc39.github.io/ecma262/#sec-array.from


var arrayFrom = function from(arrayLike
/* , mapfn = undefined, thisArg = undefined */
) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();

    for (; !(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);

    for (; length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }

  result.length = index;
  return result;
};

var ITERATOR$4 = wellKnownSymbol('iterator');
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

  iteratorWithReturn[ITERATOR$4] = function () {
    return this;
  }; // eslint-disable-next-line no-throw-literal


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

    object[ITERATOR$4] = function () {
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
  Array.from(iterable);
}); // `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from

_export({
  target: 'Array',
  stat: true,
  forced: INCORRECT_ITERATION
}, {
  from: arrayFrom
});

var from_1 = path.Array.from;

// https://tc39.github.io/ecma262/#sec-object.create

_export({
  target: 'Object',
  stat: true,
  sham: !descriptors
}, {
  create: objectCreate
});

var defineProperty$4 = defineProperty_1;

var defineProperty$5 = defineProperty$4;

var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
// of whitespaces and has a correct name

var stringTrimForced = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};

var $trim = stringTrim.trim; // `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim

_export({
  target: 'String',
  proto: true,
  forced: stringTrimForced('trim')
}, {
  trim: function trim() {
    return $trim(this);
  }
});

var trim$1 = entryVirtual('String').trim;

var trim$2 = stringTrim.trim;
var $parseInt = global_1.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED$4 = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22; // `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix

var numberParseInt = FORCED$4 ? function parseInt(string, radix) {
  var S = trim$2(String(string));
  return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
} : $parseInt;

// https://tc39.github.io/ecma262/#sec-parseint-string-radix

_export({
  global: true,
  forced: parseInt != numberParseInt
}, {
  parseInt: numberParseInt
});

var _parseInt = path.parseInt;

var _parseInt$1 = _parseInt;

var _parseInt$2 = _parseInt$1;

var propertyIsEnumerable = objectPropertyIsEnumerable.f; // `Object.{ entries, values }` methods implementation

var createMethod$4 = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!descriptors || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

var objectToArray = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod$4(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod$4(false)
};

var $values = objectToArray.values; // `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values

_export({
  target: 'Object',
  stat: true
}, {
  values: function values(O) {
    return $values(O);
  }
});

var values$3 = path.Object.values;

var FAILS_ON_PRIMITIVES$1 = fails(function () {
  objectGetPrototypeOf(1);
}); // `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof

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

var getPrototypeOf = path.Object.getPrototypeOf;

var getPrototypeOf$1 = getPrototypeOf;

var getPrototypeOf$2 = getPrototypeOf$1;

var isArray$4 = isArray$1;

var isArray$5 = isArray$4;

var ITERATOR$5 = wellKnownSymbol('iterator');

var isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR$5] !== undefined || '@@iterator' in O // eslint-disable-next-line no-prototype-builtins
  || iterators.hasOwnProperty(classof(O));
};

var isIterable_1 = isIterable;

var isIterable$1 = isIterable_1;

var from_1$1 = from_1;

var from_1$2 = from_1$1;

var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH$3 = arrayMethodUsesToLength('slice', {
  ACCESSORS: true,
  0: 0,
  1: 2
});
var SPECIES$2 = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max$1 = Math.max; // `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$3
}, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

    var Constructor, result, n;

    if (isArray(O)) {
      Constructor = O.constructor; // cross-realm fallback

      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES$2];
        if (Constructor === null) Constructor = undefined;
      }

      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }

    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));

    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);

    result.length = n;
    return result;
  }
});

var slice$1 = entryVirtual('Array').slice;

var ArrayPrototype$8 = Array.prototype;

var slice_1 = function (it) {
  var own = it.slice;
  return it === ArrayPrototype$8 || it instanceof Array && own === ArrayPrototype$8.slice ? slice$1 : own;
};

var slice$2 = slice_1;

var slice$3 = slice$2;

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _unsupportedIterableToArray(o, minLen) {
  var _context;

  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);

  var n = slice$3(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return from_1$2(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

// https://tc39.github.io/ecma262/#sec-date.now

_export({
  target: 'Date',
  stat: true
}, {
  now: function now() {
    return new Date().getTime();
  }
});

var now = path.Date.now;

var FAILS_ON_PRIMITIVES$2 = fails(function () {
  objectKeys(1);
}); // `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys

_export({
  target: 'Object',
  stat: true,
  forced: FAILS_ON_PRIMITIVES$2
}, {
  keys: function keys(it) {
    return objectKeys(toObject(it));
  }
});

var keys$1 = path.Object.keys;

var keys$2 = keys$1;

var keys$3 = keys$2;

var $map = arrayIteration.map;
var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('map'); // FF49- issue

var USES_TO_LENGTH$4 = arrayMethodUsesToLength('map'); // `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species

_export({
  target: 'Array',
  proto: true,
  forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$4
}, {
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var map = entryVirtual('Array').map;

var ArrayPrototype$9 = Array.prototype;

var map_1 = function (it) {
  var own = it.map;
  return it === ArrayPrototype$9 || it instanceof Array && own === ArrayPrototype$9.map ? map : own;
};

var map$1 = map_1;

var map$2 = map$1;

// https://tc39.github.io/ecma262/#sec-reflect.ownkeys

_export({
  target: 'Reflect',
  stat: true
}, {
  ownKeys: ownKeys
});

var ownKeys$1 = path.Reflect.ownKeys;

var slice$4 = slice_1;

var slice$5 = slice$4;

function _arrayWithoutHoles(arr) {
  if (isArray$5(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof symbol$2 !== "undefined" && isIterable$1(Object(iter))) return from_1$2(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

var symbol$3 = symbol;

var symbol$4 = symbol$3;

/**
 * vis-util
 * https://github.com/visjs/vis-util
 *
 * utilitie collection for visjs
 *
 * @version 4.3.4
 * @date    2020-08-01T15:11:53.524Z
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

/**
 * Use this symbol to delete properies in deepObjectAssign.
 */
var DELETE = symbol$4("DELETE");

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
 *
 * @param props - Names of first-level properties to copy over.
 * @param a - Target object.
 * @param b - Source object.
 * @param allowDeletion - If true, delete property in a if explicitly set to null in b.
 *
 * @returns Argument a.
 */


function selectiveDeepExtend(props, a, b) {
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  // TODO: add support for Arrays to deepExtend
  if (isArray$3(b)) {
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
      } else if (isArray$3(b[prop])) {
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
 *
 * @returns Argument a.
 */


function deepExtend(a, b) {
  var protoExtend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  for (var prop in b) {
    if (Object.prototype.hasOwnProperty.call(b, prop) || protoExtend === true) {
      if (_typeof_1(b[prop]) === "object" && b[prop] !== null && getPrototypeOf$2(b[prop]) === Object.prototype) {
        if (a[prop] === undefined) {
          a[prop] = deepExtend({}, b[prop], protoExtend); // NOTE: allowDeletion not propagated!
        } else if (_typeof_1(a[prop]) === "object" && a[prop] !== null && getPrototypeOf$2(a[prop]) === Object.prototype) {
          deepExtend(a[prop], b[prop], protoExtend); // NOTE: allowDeletion not propagated!
        } else {
          copyOrDelete(a, b, prop, allowDeletion);
        }
      } else if (isArray$3(b[prop])) {
        var _context3;

        a[prop] = slice$5(_context3 = b[prop]).call(_context3);
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
 *
 * @returns A new array with all items from arr and newValue (which is last).
 */


function copyAndExtendArray(arr, newValue) {
  var _context4;

  return concat$2(_context4 = []).call(_context4, toConsumableArray(arr), [newValue]);
}
/**
 * Used to extend an array and copy it. This is used to propagate paths recursively.
 *
 * @param arr - The array to be copied.
 *
 * @returns Shallow copy of arr.
 */


function copyArray(arr) {
  return slice$5(arr).call(arr);
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
    var _context5;

    if (useCapture === undefined) {
      useCapture = false;
    }

    if (action === "mousewheel" && indexOf$3(_context5 = navigator.userAgent).call(_context5, "Firefox") >= 0) {
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
    var _context6;

    // non-IE browsers
    if (useCapture === undefined) {
      useCapture = false;
    }

    if (action === "mousewheel" && indexOf$3(_context6 = navigator.userAgent).call(_context6, "Firefox") >= 0) {
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
        r: _parseInt$2(result[1] + result[1], 16),
        g: _parseInt$2(result[2] + result[2], 16),
        b: _parseInt$2(result[3] + result[3], 16)
      } : null;

    case 6:
    case 7:
      result = fullHexRE.exec(hex);
      return result ? {
        r: _parseInt$2(result[1], 16),
        g: _parseInt$2(result[2], 16),
        b: _parseInt$2(result[3], 16)
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
 *
 * @param h - Hue.
 * @param s - Saturation.
 * @param v - Value.
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
 * Scale the provided point by a scalar, returns p*c
 * @param {Point3d} p
 * @param {number} c
 * @return {Point3d} p*c
 */


Point3d.scalarProduct = function (p, c) {
  return new Point3d(p.x * c, p.y * c, p.z * c);
};
/**
 * Calculate the dot product of the two provided points, returns a.b
 * Documentation: http://en.wikipedia.org/wiki/Dot_product
 * @param {Point3d} a
 * @param {Point3d} b
 * @return {Point3d} dot product a.b
 */


Point3d.dotProduct = function (a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
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
 * Retrieve the length of the vector (or the distance from this point to the origin
 * @return {number}  length
 */


Point3d.prototype.length = function () {
  return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
};
/**
 * Return a normalized vector pointing in the same direction.
 * @return {Point3d}  normalized
 */


Point3d.prototype.normalize = function () {
  return Point3d.scalarProduct(this, 1 / this.length());
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

  if (index < values$2(this).length - 1) {
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

  if (index < values$2(this).length - 1) {
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
  if (values$2(this).length > 0) this.setIndex(0);else this.index = undefined;
};
/**
 * Select a value by its index
 * @param {number} index
 */


Slider.prototype.setIndex = function (index) {
  if (index < values$2(this).length) {
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
  return values$2(this)[this.index];
};

Slider.prototype._onMouseDown = function (event) {
  // only react on left mouse button down
  var leftButtonDown = event.which ? event.which === 1 : event.button === 1;
  if (!leftButtonDown) return;
  this.startClientX = event.clientX;
  this.startSlideX = _parseFloat$2(this.frame.slide.style.left);
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

  addEventListener(document, 'mousemove', this.onmousemove);
  addEventListener(document, 'mouseup', this.onmouseup);
  preventDefault(event);
};

Slider.prototype.leftToIndex = function (left) {
  var width = _parseFloat$2(this.frame.bar.style.width) - this.frame.slide.clientWidth - 10;
  var x = left - 3;
  var index = Math.round(x / width * (values$2(this).length - 1));
  if (index < 0) index = 0;
  if (index > values$2(this).length - 1) index = values$2(this).length - 1;
  return index;
};

Slider.prototype.indexToLeft = function (index) {
  var width = _parseFloat$2(this.frame.bar.style.width) - this.frame.slide.clientWidth - 10;
  var x = index / (values$2(this).length - 1) * width;
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

Slider.prototype._onMouseUp = function (event) {
  // eslint-disable-line no-unused-vars
  this.frame.style.cursor = 'auto'; // remove event listeners

  removeEventListener(document, 'mousemove', this.onmousemove);
  removeEventListener(document, 'mouseup', this.onmouseup);
  preventDefault();
};

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
  return !isNaN(_parseFloat$2(n)) && isFinite(n);
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
  return _parseFloat$2(this._current.toPrecision(this.precision));
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

var nativeReverse = [].reverse;
var test$2 = [1, 2]; // `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794

_export({
  target: 'Array',
  proto: true,
  forced: String(test$2) === String(test$2.reverse())
}, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});

var reverse = entryVirtual('Array').reverse;

var ArrayPrototype$a = Array.prototype;

var reverse_1 = function (it) {
  var own = it.reverse;
  return it === ArrayPrototype$a || it instanceof Array && own === ArrayPrototype$a.reverse ? reverse : own;
};

var reverse$1 = reverse_1;

var reverse$2 = reverse$1;

// `Math.sign` method implementation
// https://tc39.github.io/ecma262/#sec-math.sign
var mathSign = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

// https://tc39.github.io/ecma262/#sec-math.sign

_export({
  target: 'Math',
  stat: true
}, {
  sign: mathSign
});

var sign = path.Math.sign;

var sign$1 = sign;

var sign$2 = sign$1;

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
      sign = sign$2,
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

var OPTIONKEYS = ['width', 'height', 'filterLabel', 'legendLabel', 'xLabel', 'yLabel', 'zLabel', 'xValueLabel', 'yValueLabel', 'zValueLabel', 'showXAxis', 'showYAxis', 'showZAxis', 'showGrayBottom', 'showGrid', 'showPerspective', 'showShadow', 'showSurfaceGrid', 'keepAspectRatio', 'rotateAxisLabels', 'verticalRatio', 'dotSizeRatio', 'dotSizeMinFraction', 'dotSizeMaxFraction', 'showAnimationControls', 'animationInterval', 'animationPreload', 'animationAutoStart', 'axisColor', 'axisFontSize', 'axisFontType', 'gridColor', 'xCenter', 'yCenter', 'zoomable', 'tooltipDelay', 'ctrlToZoom'];
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

  return str.charAt(0).toUpperCase() + slice$5(str).call(str, 1);
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

  if (src.surfaceColors !== undefined) {
    console.warn('`options.surfaceColors` is deprecated and may be removed in a future ' + 'version. Please use `options.colormap` instead. Note that the `colormap` ' + 'option uses the inverse array ordering (running from vMin to vMax).');

    if (src.colormap !== undefined) {
      throw new Error('The `colormap` and `surfaceColors` options are mutually exclusive.');
    }

    if (dst.style !== 'surface') {
      console.warn('Ignoring `surfaceColors` in graph style `' + dst.style + '` for ' + 'backward compatibility (only effective in `surface` plots).');
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
    selectiveDeepExtend(['tooltipStyle'], dst, src);
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
  } else if (_typeof_1(backgroundColor) === 'object') {
    if (fill$2(backgroundColor) !== undefined) fill = fill$2(backgroundColor);
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
    if (fill$2(dataColor)) {
      dst.dataColor.fill = fill$2(dataColor);
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
 * @param {Object | Array<string>} surfaceColors Either an object that describes the HUE, or an array of HTML hex color codes
 * @param {Object} dst 
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

  if (isArray$3(surfaceColors)) {
    rgbColors = parseColorArray(surfaceColors);
  } else if (_typeof_1(surfaceColors) === 'object') {
    rgbColors = parseColorObject(surfaceColors.hue);
  } else {
    throw new Error('Unsupported type of surfaceColors');
  } // for some reason surfaceColors goes from vMax to vMin:


  reverse$2(rgbColors).call(rgbColors);

  dst.colormap = rgbColors;
}
/**
 *
 * @param {Object | Array<string>} colormap Either an object that describes the HUE, or an array of HTML hex color codes
 * @param {Object} dst
 */


function setColormap(colormap, dst) {
  if (colormap === undefined) {
    return;
  }

  var rgbColors;

  if (isArray$3(colormap)) {
    rgbColors = parseColorArray(colormap);
  } else if (_typeof_1(colormap) === 'object') {
    rgbColors = parseColorObject(colormap.hue);
  } else if (typeof colormap === 'function') {
    rgbColors = colormap;
  } else {
    throw new Error('Unsupported type of colormap');
  }

  dst.colormap = rgbColors;
}
/**
 *
 * @param {Array} colormap
 */


function parseColorArray(colormap) {
  if (colormap.length < 2) {
    throw new Error('Colormap array length must be 2 or above.');
  }

  return map$2(colormap).call(colormap, function (colorCode) {
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
 * @param {Object} hues
 */


function parseColorObject(hues) {
  if (hues === undefined) {
    throw new Error('Unsupported type of colormap');
  }

  if (!(hues.saturation >= 0 && hues.saturation <= 100)) {
    throw new Error('Saturation is out of bounds. Expected range is 0-100.');
  }

  if (!(hues.brightness >= 0 && hues.brightness <= 100)) {
    throw new Error('Brightness is out of bounds. Expected range is 0-100.');
  }

  if (!(hues.colorStops >= 2)) {
    throw new Error('colorStops is out of bounds. Expected 2 or above.');
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
 * @param {Object} cameraPosition
 * @param {Object} dst
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

var $stringify$1 = getBuiltIn('JSON', 'stringify');
var re = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = string.charAt(offset - 1);
  var next = string.charAt(offset + 1);

  if (low.test(match) && !hi.test(next) || hi.test(match) && !low.test(prev)) {
    return '\\u' + match.charCodeAt(0).toString(16);
  }

  return match;
};

var FORCED$5 = fails(function () {
  return $stringify$1('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify$1('\uDEAD') !== '"\\udead"';
});

if ($stringify$1) {
  // https://github.com/tc39/proposal-well-formed-stringify
  _export({
    target: 'JSON',
    stat: true,
    forced: FORCED$5
  }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var result = $stringify$1.apply(null, arguments);
      return typeof result == 'string' ? result.replace(re, fix) : result;
    }
  });
}

if (!path.JSON) path.JSON = {
  stringify: JSON.stringify
}; // eslint-disable-next-line no-unused-vars

var stringify = function stringify(it, replacer, space) {
  return path.JSON.stringify.apply(null, arguments);
};

var stringify$1 = stringify;

var stringify$2 = stringify$1;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    defineProperty$5(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var errorFound = false;
var allOptions;
var printStyle = 'background: #FFeeee; color: #dd0000';
/**
 *  Used to validate options.
 */

var Validator = /*#__PURE__*/function () {
  /**
   * @ignore
   */
  function Validator() {
    classCallCheck(this, Validator);
  }
  /**
   * Main function to be called
   * @param {Object} options
   * @param {Object} referenceOptions
   * @param {Object} subObject
   * @returns {boolean}
   * @static
   */


  createClass(Validator, null, [{
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
        if (Validator.getType(refOptionType) === 'array' && indexOf$3(refOptionType).call(refOptionType, options[option]) === -1) {
          log('Invalid option detected in "' + option + '".' + ' Allowed values are:' + Validator.print(refOptionType) + ' not "' + options[option] + '". ');
          errorFound = true;
        } else if (optionType === 'object' && referenceOption !== "__any__") {
          path = copyAndExtendArray(path, option);
          Validator.parse(options[option], referenceOptions[referenceOption], path);
        }
      } else if (refOptionObj['any'] === undefined) {
        // type of the field is incorrect and the field cannot be any
        log('Invalid type received for "' + option + '". Expected: ' + Validator.print(keys$3(refOptionObj)) + '. Received [' + optionType + '] "' + options[option] + '"');
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
      var type = _typeof_1(object);

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

        if (isArray$3(object)) {
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
        msg = '. Did you mean one of these: ' + Validator.print(keys$3(options)) + Validator.printLocation(path, option);
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
          var result = Validator.findInOptions(option, options[op], copyAndExtendArray(path, op));

          if (min > result.distance) {
            closestMatch = result.closestMatch;
            closestMatchPath = result.path;
            min = result.distance;
            indexMatch = result.indexMatch;
          }
        } else {
          var _context;

          if (indexOf$3(_context = op.toLowerCase()).call(_context, lowerCaseOption) !== -1) {
            indexMatch = op;
          }

          distance = Validator.levenshteinDistance(option, op);

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
      return stringify$2(options).replace(/(\")|(\[)|(\])|(,"__type__")/g, "").replace(/(\,)/g, ', ');
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

var array = 'array'; // Following not used here, but useful for reference
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
    'undefined': 'undefined'
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
    'function': 'function',
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
  axisFontSize: {
    number: number
  },
  axisFontType: {
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
  showGrayBottom: {
    boolean: bool
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

  if (values$2(this).length > 0) {
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
  var len = values$2(this).length;

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
  return values$2(this)[this.index];
};
/**
 * Retrieve all values of the filter
 * @return {Array} values
 */


Filter.prototype.getValues = function () {
  return values$2(this);
};
/**
 * Retrieve one value of the filter
 * @param {number}  index
 * @return {*} value
 */


Filter.prototype.getValue = function (index) {
  if (index >= values$2(this).length) throw new Error('Index out of range');
  return values$2(this)[index];
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
    f.value = values$2(this)[index];
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
  if (index >= values$2(this).length) throw new Error('Index out of range');
  this.index = index;
  this.value = values$2(this)[index];
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

  if (index < values$2(this).length) {
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

  if (isArray$3(rawData)) {
    rawData = new DataSet(rawData);
  }

  var data;

  if (rawData instanceof DataSet || rawData instanceof DataView) {
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
  } else {
    this.colValue = 'z';
    this.valueRange = this.zRange;
  } // Initialize data filter if a filter column is provided


  var table = this.getDataTable();

  if (table[0].hasOwnProperty('filter')) {
    if (this.dataFilter === undefined) {
      this.dataFilter = new Filter(this, 'filter', graph3d);
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
  var _context;

  var index = indexOf$3(_context = ['x', 'y', 'z']).call(_context, column);

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

    if (indexOf$3(values).call(values, value) === -1) {
      values.push(value);
    }
  }

  return sort$2(values).call(values, function (a, b) {
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

    var xIndex = indexOf$3(dataX).call(dataX, obj.point.x);

    var yIndex = indexOf$3(dataY).call(dataY, obj.point.y);

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
  axisFontType: 'arial',
  axisColor: '#4D4D4D',
  gridColor: '#D3D3D3',
  xCenter: '55%',
  yCenter: '50%',
  style: Graph3d.STYLE.DOT,
  tooltip: false,
  tooltipDelay: 300,
  // milliseconds
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
  this.dataGroup = new DataGroup();
  this.dataPoints = null; // The table with point objects
  // create a frame and canvas

  this.create();
  setDefaults(Graph3d.DEFAULTS, this); // the column indexes

  this.colX = undefined;
  this.colY = undefined;
  this.colZ = undefined;
  this.colValue = undefined; // TODO: customize axis range
  // apply options (also when undefined)

  this.setOptions(options); // apply data

  this.setData(data);
} // Extend Graph3d with an Emitter mixin


componentEmitter(Graph3d.prototype);
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

  sort$2(points).call(points, sortDepth);
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

      var xIndex = indexOf$3(dataX).call(dataX, obj.point.x);

      var yIndex = indexOf$3(dataY).call(dataY, obj.point.y);

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
  filter$2(this.frame).style.position = 'absolute';
  filter$2(this.frame).style.bottom = '0px';
  filter$2(this.frame).style.left = '0px';
  filter$2(this.frame).style.width = '100%';
  this.frame.appendChild(filter$2(this.frame)); // add event listeners to handle moving and zooming the contents

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


  addEventListener(this.frame.canvas, 'mousedown', onmousedown);
  addEventListener(this.frame.canvas, 'touchstart', ontouchstart);
  addEventListener(this.frame.canvas, 'mousewheel', onmousewheel);
  addEventListener(this.frame.canvas, 'mousemove', ontooltip);
  addEventListener(this.frame.canvas, 'click', onclick); // add the new graph to the container element

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

  filter$2(this.frame).style.width = this.frame.canvas.clientWidth - 2 * 10 + 'px';
};
/**
 * Start playing the animation, if requested and filter present. Only applicable
 * when animation data is available.
 */


Graph3d.prototype.animationStart = function () {
  // start animation when option is true
  if (!this.animationAutoStart || !this.dataGroup.dataFilter) return;
  if (!filter$2(this.frame) || !filter$2(this.frame).slider) throw new Error('No animation available');

  filter$2(this.frame).slider.play();
};
/**
 * Stop animation
 */


Graph3d.prototype.animationStop = function () {
  if (!filter$2(this.frame) || !filter$2(this.frame).slider) return;

  filter$2(this.frame).slider.stop();
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
    this.currentXCenter = _parseFloat$2(this.xCenter) / 100 * this.frame.canvas.clientWidth;
  } else {
    this.currentXCenter = _parseFloat$2(this.xCenter); // supposed to be in px
  } // calculate the vertical center position


  if (this.yCenter.charAt(this.yCenter.length - 1) === '%') {
    this.currentYCenter = _parseFloat$2(this.yCenter) / 100 * (this.frame.canvas.clientHeight - filter$2(this.frame).clientHeight);
  } else {
    this.currentYCenter = _parseFloat$2(this.yCenter); // supposed to be in px
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
  var errorFound = Validator.validate(options, allOptions$1);

  if (errorFound === true) {
    console.log('%cErrors have been found in the supplied options object.', printStyle);
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
      throw new Error('Can not determine point drawing method ' + 'for graph style \'' + this.style + '\'');
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

  var isValueLegend = this.style === Graph3d.STYLE.DOTSIZE || this.style === Graph3d.STYLE.DOTCOLOR || this.style === Graph3d.STYLE.SURFACE || this.style === Graph3d.STYLE.BARCOLOR;
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
    ctx.fillStyle = fill$2(this.dataColor);
    ctx.beginPath();
    ctx.moveTo(left, top);
    ctx.lineTo(right, top);
    ctx.lineTo(left + widthMin, bottom);
    ctx.lineTo(left, bottom);
    ctx.closePath();

    fill$2(ctx).call(ctx);

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

  var filter = filter$2(this.frame);

  filter.innerHTML = '';

  if (!dataFilter) {
    filter.slider = undefined;
    return;
  }

  var options = {
    'visible': this.showAnimationControls
  };
  var slider = new Slider(filter, options);
  filter.slider = slider; // TODO: css here is not nice here...

  filter.style.padding = '10px'; //this.frame.filter.style.backgroundColor = '#EFEFEF';

  slider.setValues(values$2(dataFilter));
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
  if (filter$2(this.frame).slider !== undefined) {
    filter$2(this.frame).slider.redraw();
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
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, 0, 0);
    ctx.restore();
  } else if (Math.sin(armAngle * 2) < 0) {
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, point2d.x, point2d.y);
  } else {
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
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
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, 0, 0);
    ctx.restore();
  } else if (Math.sin(armAngle * 2) > 0) {
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = this.axisColor;
    ctx.fillText(text, point2d.x, point2d.y);
  } else {
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
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
  //ctx.font = 24 / this.camera.getArmLength() + 'px arial';


  ctx.font = this.axisFontSize / this.camera.getArmLength() + 'px ' + this.axisFontType; // calculate the length for the short grid lines

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

      var _msg = '  ' + this.yValueLabel(y) + '  ';

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

      var _msg2 = this.zValueLabel(z) + ' ';

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


  sort$2(surfaces).call(surfaces, function (a, b) {
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

  fill$2(ctx).call(ctx);

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

  fill$2(ctx).call(ctx);

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

  if (pointStyle && _typeof_1(pointStyle) === 'object' && fill$2(pointStyle) && pointStyle.stroke) {
    return {
      fill: fill$2(pointStyle),
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
    fill: fill$2(this.dataColor),
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

  if (isArray$3(colormap)) {
    var maxIndex = colormap.length - 1;
    var startIndex = Math.max(Math.floor(x * maxIndex), 0);
    var endIndex = Math.min(startIndex + 1, maxIndex);
    var innerRatio = x * maxIndex - startIndex;
    var min = colormap[startIndex];
    var max = colormap[endIndex];
    r = min.r + innerRatio * (max.r - min.r);
    g = min.g + innerRatio * (max.g - min.g);
    b = min.b + innerRatio * (max.b - min.b);
  } else if (typeof colormap === 'function') {
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

  if (typeof a === 'number' && !isNan$2(a)) {
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

  this._redrawBar(ctx, point, xWidth, yWidth, fill$2(colors), colors.border);
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

  this._redrawBar(ctx, point, xWidth, yWidth, fill$2(colors), colors.border);
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

  this._redrawBar(ctx, point, xWidth, yWidth, fill$2(colors), colors.border);
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

  this._drawCircle(ctx, point, fill$2(colors), colors.border);
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

  this._drawCircle(ctx, point, fill$2(colors), colors.border);
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

  this._drawCircle(ctx, point, fill$2(colors), colors.border, size);
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
    fillStyle = 'gray';
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
 * @param {Object} from
 * @param {Object} to
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

  addEventListener(document, 'mousemove', me.onmousemove);
  addEventListener(document, 'mouseup', me.onmouseup);
  preventDefault(event);
};
/**
 * Perform moving operating.
 * This function activated from within the funcion Graph.mouseDown().
 * @param {Event}   event  Well, eehh, the event
 */


Graph3d.prototype._onMouseMove = function (event) {
  this.moving = true;
  event = event || window.event; // calculate change in mouse position

  var diffX = _parseFloat$2(getMouseX(event)) - this.startMouseX;
  var diffY = _parseFloat$2(getMouseY(event)) - this.startMouseY; // move with ctrl or rotate by other

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
  preventDefault(event);
};
/**
 * Stop moving operating.
 * This function activated from within the funcion Graph.mouseDown().
 * @param {Event}  event   The event
 */


Graph3d.prototype._onMouseUp = function (event) {
  this.frame.style.cursor = 'auto';
  this.leftButtonDown = false; // remove event listeners here

  removeEventListener(document, 'mousemove', this.onmousemove);
  removeEventListener(document, 'mouseup', this.onmouseup);
  preventDefault(event);
};
/**
 * @param {Event}  event   The event
 */


Graph3d.prototype._onClick = function (event) {
  // NOTE: onclick_callback is deprecated and may be removed in a future version.
  if (!this.onclick_callback && !this.hasListeners('click')) return;

  if (!this.moving) {
    var boundingRect = this.frame.getBoundingClientRect();
    var mouseX = getMouseX(event) - boundingRect.left;
    var mouseY = getMouseY(event) - boundingRect.top;

    var dataPoint = this._dataPointFromXY(mouseX, mouseY);

    if (dataPoint) {
      if (this.onclick_callback) this.onclick_callback(dataPoint.point.data);
      this.emit('click', dataPoint.point.data);
    }
  } else {
    // disable onclick callback, if it came immediately after rotate/pan
    this.moving = false;
  }

  preventDefault(event);
};
/**
 * After having moved the mouse, a tooltip should pop up when the mouse is resting on a data point
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

  addEventListener(document, 'touchmove', me.ontouchmove);
  addEventListener(document, 'touchend', me.ontouchend);

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
  removeEventListener(document, 'touchmove', this.ontouchmove);
  removeEventListener(document, 'touchend', this.ontouchend);

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

    assign$2(content.style, {}, this.tooltipStyle.content);

    content.style.position = 'absolute';
    line = document.createElement('div');

    assign$2(line.style, {}, this.tooltipStyle.line);

    line.style.position = 'absolute';
    dot = document.createElement('div');

    assign$2(dot.style, {}, this.tooltipStyle.dot);

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
}; // -----------------------------------------------------------------------------

export { Graph3d, Camera as Graph3dCamera, Filter as Graph3dFilter, Point2d_1 as Graph3dPoint2d, Point3d_1 as Graph3dPoint3d, Slider as Graph3dSlider, StepNumber_1 as Graph3dStepNumber };
//# sourceMappingURL=vis-graph3d.js.map
