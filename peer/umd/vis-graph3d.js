/**
 * vis-graph3d
 * https://visjs.github.io/vis-graph3d/
 *
 * Create interactive, animated 3d graphs. Surfaces, lines, dots and block styling out of the box.
 *
 * @version 0.0.0-no-version
 * @date    2021-04-19T19:58:00.858Z
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

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vis-data/peer/umd/vis-data.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'vis-data/peer/umd/vis-data.js'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vis = global.vis || {}, global.vis));
}(this, (function (exports, esnext) {
	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


	var global$1 =
	/* global globalThis -- safe */
	check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
	function () {
	  return this;
	}() || Function('return this')();

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

	var nativePropertyIsEnumerable$1 = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

	var NASHORN_BUG = getOwnPropertyDescriptor$1 && !nativePropertyIsEnumerable$1.call({
	  1: 2
	}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

	var f$6 = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable$1;
	var objectPropertyIsEnumerable = {
	  f: f$6
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString$1 = {}.toString;

	var classofRaw = function (it) {
	  return toString$1.call(it).slice(8, -1);
	};

	var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
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

	// https://tc39.es/ecma262/#sec-toprimitive
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

	var has$1 = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var document$1 = global$1.document; // typeof document.createElement is 'object' in old IE

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

	var nativeGetOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

	var f$5 = descriptors ? nativeGetOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor$2(O, P);
	  } catch (error) {
	    /* empty */
	  }
	  if (has$1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};
	var objectGetOwnPropertyDescriptor = {
	  f: f$5
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

	var aFunction$1 = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  }

	  return it;
	};

	var functionBindContext = function (fn, that, length) {
	  aFunction$1(fn);
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

	var nativeDefineProperty$1 = Object.defineProperty; // `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty

	var f$4 = descriptors ? nativeDefineProperty$1 : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return nativeDefineProperty$1(O, P, Attributes);
	  } catch (error) {
	    /* empty */
	  }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};
	var objectDefineProperty = {
	  f: f$4
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

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
	  var nativeSource = GLOBAL ? global$1 : STATIC ? global$1[TARGET] : (global$1[TARGET] || {}).prototype;
	  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
	  var targetPrototype = target.prototype;
	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contains in native

	    USE_NATIVE = !FORCED && nativeSource && has$1(nativeSource, key);
	    targetProperty = target[key];
	    if (USE_NATIVE) if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key]; // export native or implementation

	    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
	    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue; // bind timers to global for call from export context

	    if (options.bind && USE_NATIVE) resultProperty = functionBindContext(sourceProperty, global$1); // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty); // make static versions for prototype methods
	      else if (PROTO && typeof sourceProperty == 'function') resultProperty = functionBindContext(Function.call, sourceProperty); // default case
	        else resultProperty = sourceProperty; // add a flag to not completely full polyfills

	    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
	      createNonEnumerableProperty(resultProperty, 'sham', true);
	    }

	    target[key] = resultProperty;

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';

	      if (!has$1(path, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
	      } // export virtual prototype methods


	      path[VIRTUAL_PROTOTYPE][key] = sourceProperty; // export real prototype methods

	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	// https://tc39.es/ecma262/#sec-isarray

	var isArray$5 = Array.isArray || function isArray(arg) {
	  return classofRaw(arg) == 'Array';
	};

	// https://tc39.es/ecma262/#sec-toobject

	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	var ceil = Math.ceil;
	var floor = Math.floor; // `ToInteger` abstract operation
	// https://tc39.es/ecma262/#sec-tointeger

	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min$2 = Math.min; // `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength

	var toLength = function (argument) {
	  return argument > 0 ? min$2(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var createProperty = function (object, key, value) {
	  var propertyKey = toPrimitive(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
	};

	var setGlobal = function (key, value) {
	  try {
	    createNonEnumerableProperty(global$1, key, value);
	  } catch (error) {
	    global$1[key] = value;
	  }

	  return value;
	};

	var SHARED = '__core-js_shared__';
	var store$1 = global$1[SHARED] || setGlobal(SHARED, {});
	var sharedStore = store$1;

	var shared = createCommonjsModule(function (module) {
	  (module.exports = function (key, value) {
	    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	  })('versions', []).push({
	    version: '3.9.1',
	    mode: 'pure' ,
	    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	  });
	});

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var engineIsNode = classofRaw(global$1.process) == 'process';

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global$1[namespace]) : path[namespace] && path[namespace][method] || global$1[namespace] && global$1[namespace][method];
	};

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process = global$1.process;
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

	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  /* global Symbol -- required for testing */
	  return !Symbol.sham && ( // Chrome 38 Symbol has incorrect toString conversion
	  // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	  engineIsNode ? engineV8Version === 38 : engineV8Version > 37 && engineV8Version < 41);
	});

	var useSymbolAsUid = nativeSymbol
	/* global Symbol -- safe */
	&& !Symbol.sham && typeof Symbol.iterator == 'symbol';

	var WellKnownSymbolsStore$1 = shared('wks');
	var Symbol$1 = global$1.Symbol;
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!has$1(WellKnownSymbolsStore$1, name) || !(nativeSymbol || typeof WellKnownSymbolsStore$1[name] == 'string')) {
	    if (nativeSymbol && has$1(Symbol$1, name)) {
	      WellKnownSymbolsStore$1[name] = Symbol$1[name];
	    } else {
	      WellKnownSymbolsStore$1[name] = createWellKnownSymbol('Symbol.' + name);
	    }
	  }

	  return WellKnownSymbolsStore$1[name];
	};

	var SPECIES$2 = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate

	var arraySpeciesCreate = function (originalArray, length) {
	  var C;

	  if (isArray$5(originalArray)) {
	    C = originalArray.constructor; // cross-realm fallback

	    if (typeof C == 'function' && (C === Array || isArray$5(C.prototype))) C = undefined;else if (isObject(C)) {
	      C = C[SPECIES$2];
	      if (C === null) C = undefined;
	    }
	  }

	  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

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
	var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
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
	  return spreadable !== undefined ? !!spreadable : isArray$5(O);
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
	        len = toLength(E.length);
	        if (n + len > MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty(A, n++, E);
	      }
	    }

	    A.length = n;
	    return A;
	  }
	});

	var max$2 = Math.max;
	var min$1 = Math.min; // Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max$2(integer + length, 0) : min$1(integer, length);
	};

	var createMethod$4 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
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

	var hiddenKeys$1 = {};

	var indexOf$3 = arrayIncludes.indexOf;

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;

	  for (key in O) !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key); // Don't enum bug & hidden keys


	  while (names.length > i) if (has$1(O, key = names[i++])) {
	    ~indexOf$3(result, key) || result.push(key);
	  }

	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

	// https://tc39.es/ecma262/#sec-object.keys

	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// https://tc39.es/ecma262/#sec-object.defineproperties

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

	var keys$3 = shared('keys');

	var sharedKey = function (key) {
	  return keys$3[key] || (keys$3[key] = uid(key));
	};

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
	    /* global ActiveXObject -- old IE */
	    activeXDocument = document.domain && new ActiveXObject('htmlfile');
	  } catch (error) {
	    /* ignore */
	  }

	  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
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

	  return Properties === undefined ? result : objectDefineProperties(result, Properties);
	};

	var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames

	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys);
	};

	var objectGetOwnPropertyNames = {
	  f: f$3
	};

	var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var toString = {}.toString;
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return nativeGetOwnPropertyNames$1(it);
	  } catch (error) {
	    return windowNames.slice();
	  }
	}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


	var f$2 = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : nativeGetOwnPropertyNames$1(toIndexedObject(it));
	};

	var objectGetOwnPropertyNamesExternal = {
	  f: f$2
	};

	var f$1 = Object.getOwnPropertySymbols;
	var objectGetOwnPropertySymbols = {
	  f: f$1
	};

	var redefine = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;else createNonEnumerableProperty(target, key, value);
	};

	var f = wellKnownSymbol;
	var wellKnownSymbolWrapped = {
	  f: f
	};

	var defineProperty$4 = objectDefineProperty.f;

	var defineWellKnownSymbol = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!has$1(Symbol, NAME)) defineProperty$4(Symbol, NAME, {
	    value: wellKnownSymbolWrapped.f(NAME)
	  });
	};

	var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
	var test$2 = {};
	test$2[TO_STRING_TAG$3] = 'z';
	var toStringTagSupport = String(test$2) === '[object z]';

	var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag'); // ES3 wrong here

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
	  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
	  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
	  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	// https://tc39.es/ecma262/#sec-object.prototype.tostring


	var objectToString = toStringTagSupport ? {}.toString : function toString() {
	  return '[object ' + classof(this) + ']';
	};

	var defineProperty$3 = objectDefineProperty.f;
	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');

	var setToStringTag = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;

	    if (!has$1(target, TO_STRING_TAG$1)) {
	      defineProperty$3(target, TO_STRING_TAG$1, {
	        configurable: true,
	        value: TAG
	      });
	    }

	    if (SET_METHOD && !toStringTagSupport) {
	      createNonEnumerableProperty(target, 'toString', objectToString);
	    }
	  }
	};

	var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

	if (typeof sharedStore.inspectSource != 'function') {
	  sharedStore.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap$1 = global$1.WeakMap;
	var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));

	var WeakMap = global$1.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
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
	  var store = sharedStore.state || (sharedStore.state = new WeakMap());
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;

	  set = function (it, metadata) {
	    metadata.facade = it;
	    wmset.call(store, it, metadata);
	    return metadata;
	  };

	  get = function (it) {
	    return wmget.call(store, it) || {};
	  };

	  has = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys$1[STATE] = true;

	  set = function (it, metadata) {
	    metadata.facade = it;
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };

	  get = function (it) {
	    return has$1(it, STATE) ? it[STATE] : {};
	  };

	  has = function (it) {
	    return has$1(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation

	var createMethod$3 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_OUT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = functionBindContext(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
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
	          } else switch (TYPE) {
	            case 4:
	              return false;
	            // every

	            case 7:
	              push.call(target, value);
	            // filterOut
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
	  // `Array.prototype.filterOut` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterOut: createMethod$3(7)
	};

	var $forEach$1 = arrayIteration.forEach;
	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
	var setInternalState$2 = internalState.set;
	var getInternalState$2 = internalState.getterFor(SYMBOL);
	var ObjectPrototype$1 = Object[PROTOTYPE];
	var $Symbol = global$1.Symbol;
	var $stringify$1 = getBuiltIn('JSON', 'stringify');
	var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var nativeDefineProperty = objectDefineProperty.f;
	var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = objectPropertyIsEnumerable.f;
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry = shared('symbol-to-string-registry');
	var WellKnownSymbolsStore = shared('wks');
	var QObject = global$1.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

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
	  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE]);
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

	  if (has$1(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!has$1(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (has$1(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
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
	    if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPrimitive(V, true);
	  var enumerable = nativePropertyIsEnumerable.call(this, P);
	  if (this === ObjectPrototype$1 && has$1(AllSymbols, P) && !has$1(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !has$1(this, P) || !has$1(AllSymbols, P) || has$1(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject(O);
	  var key = toPrimitive(P, true);
	  if (it === ObjectPrototype$1 && has$1(AllSymbols, key) && !has$1(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

	  if (descriptor && has$1(AllSymbols, key) && !(has$1(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }

	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!has$1(AllSymbols, key) && !has$1(hiddenKeys$1, key)) result.push(key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (has$1(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has$1(ObjectPrototype$1, key))) {
	      result.push(AllSymbols[key]);
	    }
	  });
	  return result;
	}; // `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor


	if (!nativeSymbol) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var tag = uid(description);

	    var setter = function (value) {
	      if (this === ObjectPrototype$1) setter.call(ObjectPrototypeSymbols, value);
	      if (has$1(this, HIDDEN) && has$1(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
	    };

	    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, {
	      configurable: true,
	      set: setter
	    });
	    return wrap$1(tag, description);
	  };

	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
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
	    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
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
	    var string = String(key);
	    if (has$1(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.es/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
	    if (has$1(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
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
	      var args = [it];
	      var index = 1;
	      var $replacer;

	      while (arguments.length > index) args.push(arguments[index++]);

	      $replacer = replacer;
	      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

	      if (!isArray$5(replacer)) replacer = function (key, value) {
	        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	        if (!isSymbol(value)) return value;
	      };
	      args[1] = replacer;
	      return $stringify$1.apply(null, args);
	    }
	  });
	} // `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


	if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
	  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	} // `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


	setToStringTag($Symbol, SYMBOL);
	hiddenKeys$1[HIDDEN] = true;

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

	setToStringTag(global$1.JSON, 'JSON', true);

	var symbol$4 = path.Symbol;

	// https://github.com/tc39/proposal-using-statement

	defineWellKnownSymbol('asyncDispose');

	// https://github.com/tc39/proposal-using-statement

	defineWellKnownSymbol('dispose');

	// https://github.com/tc39/proposal-observable

	defineWellKnownSymbol('observable');

	// https://github.com/tc39/proposal-pattern-matching

	defineWellKnownSymbol('patternMatch');

	defineWellKnownSymbol('replaceAll');

	var symbol$3 = symbol$4;

	var symbol$2 = symbol$3;

	var createMethod$2 = function (CONVERT_TO_STRING) {
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
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$2(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$2(true)
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
	// https://tc39.es/ecma262/#sec-object.getprototypeof

	var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
	  O = toObject(O);
	  if (has$1(O, IE_PROTO)) return O[IE_PROTO];

	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }

	  return O instanceof Object ? ObjectPrototype : null;
	};

	var ITERATOR$5 = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	var returnThis$2 = function () {
	  return this;
	}; // `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object


	var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

	if ([].keys) {
	  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
	    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
	  var test = {}; // FF44- legacy iterators case

	  return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
	});
	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

	if ((NEW_ITERATOR_PROTOTYPE) && !has$1(IteratorPrototype$2, ITERATOR$5)) {
	  createNonEnumerableProperty(IteratorPrototype$2, ITERATOR$5, returnThis$2);
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$2,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var iterators = {};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

	var returnThis$1 = function () {
	  return this;
	};

	var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
	    next: createPropertyDescriptor(1, next)
	  });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
	  iterators[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var aPossiblePrototype = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  }

	  return it;
	};

	/* eslint-disable no-proto -- safe */
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.

	Object.setPrototypeOf || ('__proto__' in {} ? function () {
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

	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$4 = wellKnownSymbol('iterator');
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
	  var nativeIterator = IterablePrototype[ITERATOR$4] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY; // fix native

	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

	    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {


	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      iterators[TO_STRING_TAG] = returnThis;
	    }
	  } // fix Array#{values, @@iterator}.name in V8 / FF


	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;

	    defaultIterator = function values() {
	      return nativeIterator.call(this);
	    };
	  } // define iterator


	  if ((FORCED) && IterablePrototype[ITERATOR$4] !== defaultIterator) {
	    createNonEnumerableProperty(IterablePrototype, ITERATOR$4, defaultIterator);
	  }

	  iterators[NAME] = defaultIterator; // export additional methods

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
	  }

	  return methods;
	};

	var charAt = stringMultibyte.charAt;
	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$1 = internalState.set;
	var getInternalState$1 = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator

	defineIterator(String, 'String', function (iterated) {
	  setInternalState$1(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  }); // `%StringIteratorPrototype%.next` method
	  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$1(this);
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
	var setInternalState = internalState.set;
	var getInternalState = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
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
	  setInternalState(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated),
	    // target
	    index: 0,
	    // next index
	    kind: kind // kind

	  }); // `%ArrayIteratorPrototype%.next` method
	  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState(this);
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
	  var Collection = global$1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;

	  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
	    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	  }

	  iterators[COLLECTION_NAME] = iterators.Array;
	}

	var iterator$2 = wellKnownSymbolWrapped.f('iterator');

	var iterator$1 = iterator$2;

	var iterator = iterator$1;

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof symbol$2 === "function" && typeof iterator === "symbol") {
	    _typeof = function _typeof(obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function _typeof(obj) {
	      return obj && typeof symbol$2 === "function" && obj.constructor === symbol$2 && obj !== symbol$2.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	var arrayMethodIsStrict = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
	    method.call(null, argument || function () {
	      throw 1;
	    }, 1);
	  });
	};

	var test$1 = [];
	var nativeSort = test$1.sort; // IE8-

	var FAILS_ON_UNDEFINED = fails(function () {
	  test$1.sort(undefined);
	}); // V8 bug

	var FAILS_ON_NULL = fails(function () {
	  test$1.sort(null);
	}); // Old WebKit

	var STRICT_METHOD$2 = arrayMethodIsStrict('sort');
	var FORCED$4 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$2; // `Array.prototype.sort` method
	// https://tc39.es/ecma262/#sec-array.prototype.sort

	_export({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$4
	}, {
	  sort: function sort(comparefn) {
	    return comparefn === undefined ? nativeSort.call(toObject(this)) : nativeSort.call(toObject(this), aFunction$1(comparefn));
	  }
	});

	var entryVirtual = function (CONSTRUCTOR) {
	  return path[CONSTRUCTOR + 'Prototype'];
	};

	var sort$2 = entryVirtual('Array').sort;

	var ArrayPrototype$c = Array.prototype;

	var sort_1 = function (it) {
	  var own = it.sort;
	  return it === ArrayPrototype$c || it instanceof Array && own === ArrayPrototype$c.sort ? sort$2 : own;
	};

	var sort$1 = sort_1;

	var sort = sort$1;

	var $indexOf = arrayIncludes.indexOf;
	var nativeIndexOf = [].indexOf;
	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var STRICT_METHOD$1 = arrayMethodIsStrict('indexOf'); // `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof

	_export({
	  target: 'Array',
	  proto: true,
	  forced: NEGATIVE_ZERO || !STRICT_METHOD$1
	}, {
	  indexOf: function indexOf(searchElement
	  /* , fromIndex = 0 */
	  ) {
	    return NEGATIVE_ZERO // convert -0 to +0
	    ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var indexOf$2 = entryVirtual('Array').indexOf;

	var ArrayPrototype$b = Array.prototype;

	var indexOf_1 = function (it) {
	  var own = it.indexOf;
	  return it === ArrayPrototype$b || it instanceof Array && own === ArrayPrototype$b.indexOf ? indexOf$2 : own;
	};

	var indexOf$1 = indexOf_1;

	var indexOf = indexOf$1;

	var $filter = arrayIteration.filter;
	var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('filter'); // `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species

	_export({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$3
	}, {
	  filter: function filter(callbackfn
	  /* , thisArg */
	  ) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var filter$2 = entryVirtual('Array').filter;

	var ArrayPrototype$a = Array.prototype;

	var filter_1 = function (it) {
	  var own = it.filter;
	  return it === ArrayPrototype$a || it instanceof Array && own === ArrayPrototype$a.filter ? filter$2 : own;
	};

	var filter$1 = filter_1;

	var filter = filter$1;

	// a string of all valid unicode whitespaces
	var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var whitespace = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

	var createMethod$1 = function (TYPE) {
	  return function ($this) {
	    var string = String(requireObjectCoercible($this));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
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

	var trim$1 = stringTrim.trim;
	var $parseFloat = global$1.parseFloat;
	var FORCED$3 = 1 / $parseFloat(whitespaces + '-0') !== -Infinity; // `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string

	var numberParseFloat = FORCED$3 ? function parseFloat(string) {
	  var trimmedString = trim$1(String(string));
	  var result = $parseFloat(trimmedString);
	  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

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

	// https://tc39.es/ecma262/#sec-array.prototype.fill


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

	// https://tc39.es/ecma262/#sec-array.prototype.fill

	_export({
	  target: 'Array',
	  proto: true
	}, {
	  fill: arrayFill
	}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

	var fill$2 = entryVirtual('Array').fill;

	var ArrayPrototype$9 = Array.prototype;

	var fill_1 = function (it) {
	  var own = it.fill;
	  return it === ArrayPrototype$9 || it instanceof Array && own === ArrayPrototype$9.fill ? fill$2 : own;
	};

	var fill$1 = fill_1;

	var fill = fill$1;

	var values$2 = entryVirtual('Array').values;

	var values$1 = values$2;

	var ArrayPrototype$8 = Array.prototype;
	var DOMIterables$1 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var values_1 = function (it) {
	  var own = it.values;
	  return it === ArrayPrototype$8 || it instanceof Array && own === ArrayPrototype$8.values // eslint-disable-next-line no-prototype-builtins -- safe
	  || DOMIterables$1.hasOwnProperty(classof(it)) ? values$1 : own;
	};

	var values = values_1;

	var $forEach = arrayIteration.forEach;
	var STRICT_METHOD = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach

	var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn
	/* , thisArg */
	) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	// https://tc39.es/ecma262/#sec-array.prototype.foreach


	_export({
	  target: 'Array',
	  proto: true,
	  forced: [].forEach != arrayForEach
	}, {
	  forEach: arrayForEach
	});

	var forEach$2 = entryVirtual('Array').forEach;

	var forEach$1 = forEach$2;

	var ArrayPrototype$7 = Array.prototype;
	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach_1 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$7 || it instanceof Array && own === ArrayPrototype$7.forEach // eslint-disable-next-line no-prototype-builtins -- safe
	  || DOMIterables.hasOwnProperty(classof(it)) ? forEach$1 : own;
	};

	var forEach = forEach_1;

	// https://tc39.es/ecma262/#sec-array.isarray

	_export({
	  target: 'Array',
	  stat: true
	}, {
	  isArray: isArray$5
	});

	var isArray$4 = path.Array.isArray;

	var isArray$3 = isArray$4;

	var isArray$2 = isArray$3;

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

	var concat$2 = entryVirtual('Array').concat;

	var ArrayPrototype$6 = Array.prototype;

	var concat_1 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype$6 || it instanceof Array && own === ArrayPrototype$6.concat ? concat$2 : own;
	};

	var concat$1 = concat_1;

	var concat = concat$1;

	var slice$6 = [].slice;
	var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check

	var wrap = function (scheduler) {
	  return function (handler, timeout
	  /* , ...arguments */
	  ) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice$6.call(arguments, 2) : undefined;
	    return scheduler(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func -- spec requirement
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
	  setTimeout: wrap(global$1.setTimeout),
	  // `setInterval` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
	  setInterval: wrap(global$1.setInterval)
	});

	var setTimeout$2 = path.setTimeout;

	var setTimeout$1 = setTimeout$2;

	var nativeAssign = Object.assign;
	var defineProperty$2 = Object.defineProperty; // `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign

	var objectAssign = !nativeAssign || fails(function () {
	  // should have correct order of operations (Edge bug)
	  if (descriptors && nativeAssign({
	    b: 1
	  }, nativeAssign(defineProperty$2({}, 'a', {
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
	  var B = {};
	  /* global Symbol -- required for testing */

	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) {
	    B[chr] = chr;
	  });
	  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars -- required for `.length`
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

	// https://tc39.es/ecma262/#sec-object.assign

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

	var iteratorClose = function (iterator) {
	  var returnMethod = iterator['return'];

	  if (returnMethod !== undefined) {
	    return anObject(returnMethod.call(iterator)).value;
	  }
	};

	var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
	  } catch (error) {
	    iteratorClose(iterator);
	    throw error;
	  }
	};

	var ITERATOR$3 = wellKnownSymbol('iterator');
	var ArrayPrototype$5 = Array.prototype; // check on default Array iterator

	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype$5[ITERATOR$3] === it);
	};

	var ITERATOR$2 = wellKnownSymbol('iterator');

	var getIteratorMethod$1 = function (it) {
	  if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || iterators[classof(it)];
	};

	// https://tc39.es/ecma262/#sec-array.from


	var arrayFrom = function from(arrayLike
	/* , mapfn = undefined, thisArg = undefined */
	) {
	  var O = toObject(arrayLike);
	  var C = typeof this == 'function' ? this : Array;
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod$1(O);
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

	var ITERATOR$1 = wellKnownSymbol('iterator');
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

	  iteratorWithReturn[ITERATOR$1] = function () {
	    return this;
	  }; // eslint-disable-next-line no-throw-literal -- required for testing


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

	    object[ITERATOR$1] = function () {
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
	// https://tc39.es/ecma262/#sec-array.from

	_export({
	  target: 'Array',
	  stat: true,
	  forced: INCORRECT_ITERATION
	}, {
	  from: arrayFrom
	});

	var from$4 = path.Array.from;

	var from$3 = from$4;

	var from$2 = from$3;

	var getIteratorMethod_1 = getIteratorMethod$1;

	var getIteratorMethod = getIteratorMethod_1;

	var getIterator$1 = function (it) {
	  var iteratorMethod = getIteratorMethod$1(it);

	  if (typeof iteratorMethod != 'function') {
	    throw TypeError(String(it) + ' is not iterable');
	  }

	  return anObject(iteratorMethod.call(it));
	};

	var getIterator_1 = getIterator$1;

	var getIterator = getIterator_1;

	path.Object.getOwnPropertySymbols;

	var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var FAILS_ON_PRIMITIVES$2 = fails(function () {
	  nativeGetOwnPropertyDescriptor(1);
	});
	var FORCED$2 = !descriptors || FAILS_ON_PRIMITIVES$2; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

	_export({
	  target: 'Object',
	  stat: true,
	  forced: FORCED$2,
	  sham: !descriptors
	}, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
	  }
	});

	createCommonjsModule(function (module) {
	  var Object = path.Object;

	  var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
	    return Object.getOwnPropertyDescriptor(it, key);
	  };

	  if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;
	});

	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
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

	path.Object.getOwnPropertyDescriptors;

	// https://tc39.es/ecma262/#sec-object.defineproperties

	_export({
	  target: 'Object',
	  stat: true,
	  forced: !descriptors,
	  sham: !descriptors
	}, {
	  defineProperties: objectDefineProperties
	});

	createCommonjsModule(function (module) {
	  var Object = path.Object;

	  var defineProperties = module.exports = function defineProperties(T, D) {
	    return Object.defineProperties(T, D);
	  };

	  if (Object.defineProperties.sham) defineProperties.sham = true;
	});

	// https://tc39.es/ecma262/#sec-object.defineproperty

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

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var defineProperty$1 = defineProperty_1;

	var defineProperty = defineProperty$1;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;

	    defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var isArray$1 = isArray$4;

	var isArray = isArray$1;

	var ITERATOR = wellKnownSymbol('iterator');

	var isIterable$1 = function (it) {
	  var O = Object(it);
	  return O[ITERATOR] !== undefined || '@@iterator' in O // eslint-disable-next-line no-prototype-builtins -- safe
	  || iterators.hasOwnProperty(classof(O));
	};

	var isIterable_1 = isIterable$1;

	var isIterable = isIterable_1;

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('slice');
	var SPECIES = wellKnownSymbol('species');
	var nativeSlice = [].slice;
	var max$1 = Math.max; // `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects

	_export({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$2
	}, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = toLength(O.length);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

	    var Constructor, result, n;

	    if (isArray$5(O)) {
	      Constructor = O.constructor; // cross-realm fallback

	      if (typeof Constructor == 'function' && (Constructor === Array || isArray$5(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject(Constructor)) {
	        Constructor = Constructor[SPECIES];
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

	var slice$5 = entryVirtual('Array').slice;

	var ArrayPrototype$4 = Array.prototype;

	var slice_1 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$4 || it instanceof Array && own === ArrayPrototype$4.slice ? slice$5 : own;
	};

	var slice$4 = slice_1;

	var slice$3 = slice$4;

	var from$1 = from$4;

	var from = from$1;

	function _arrayLikeToArray$1(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	function _unsupportedIterableToArray$1(o, minLen) {
	  var _context;

	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);

	  var n = slice$3(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
	}

	function _arrayWithoutHoles(arr) {
	  if (isArray(arr)) return _arrayLikeToArray$1(arr);
	}

	function _iterableToArray(iter) {
	  if (typeof symbol$2 !== "undefined" && isIterable(Object(iter))) return from(iter);
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
	}

	var symbol$1 = symbol$4;

	var symbol = symbol$1;

	var slice$2 = slice_1;

	var slice$1 = slice$2;

	// https://tc39.es/ecma262/#sec-reflect.ownkeys

	_export({
	  target: 'Reflect',
	  stat: true
	}, {
	  ownKeys: ownKeys
	});

	path.Reflect.ownKeys;

	var $map = arrayIteration.map;
	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species

	_export({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$1
	}, {
	  map: function map(callbackfn
	  /* , thisArg */
	  ) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var map$2 = entryVirtual('Array').map;

	var ArrayPrototype$3 = Array.prototype;

	var map_1 = function (it) {
	  var own = it.map;
	  return it === ArrayPrototype$3 || it instanceof Array && own === ArrayPrototype$3.map ? map$2 : own;
	};

	var map$1 = map_1;

	var map = map$1;

	var FAILS_ON_PRIMITIVES$1 = fails(function () {
	  objectKeys(1);
	}); // `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys

	_export({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$1
	}, {
	  keys: function keys(it) {
	    return objectKeys(toObject(it));
	  }
	});

	var keys$2 = path.Object.keys;

	var keys$1 = keys$2;

	var keys = keys$1;

	// https://tc39.es/ecma262/#sec-date.now

	_export({
	  target: 'Date',
	  stat: true
	}, {
	  now: function now() {
	    return new Date().getTime();
	  }
	});

	path.Date.now;

	var slice = [].slice;
	var factories = {};

	var construct = function (C, argsLength, args) {
	  if (!(argsLength in factories)) {
	    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']'; // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only


	    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
	  }

	  return factories[argsLength](C, args);
	}; // `Function.prototype.bind` method implementation
	// https://tc39.es/ecma262/#sec-function.prototype.bind


	var functionBind = Function.bind || function bind(that
	/* , ...args */
	) {
	  var fn = aFunction$1(this);
	  var partArgs = slice.call(arguments, 1);

	  var boundFunction = function bound()
	  /* args... */
	  {
	    var args = partArgs.concat(slice.call(arguments));
	    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
	  };

	  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
	  return boundFunction;
	};

	// https://tc39.es/ecma262/#sec-function.prototype.bind

	_export({
	  target: 'Function',
	  proto: true
	}, {
	  bind: functionBind
	});

	var bind$2 = entryVirtual('Function').bind;

	var FunctionPrototype = Function.prototype;

	var bind_1 = function (it) {
	  var own = it.bind;
	  return it === FunctionPrototype || it instanceof Function && own === FunctionPrototype.bind ? bind$2 : own;
	};

	var bind$1 = bind_1;

	var bind = bind$1;

	var nativeReverse = [].reverse;
	var test = [1, 2]; // `Array.prototype.reverse` method
	// https://tc39.es/ecma262/#sec-array.prototype.reverse
	// fix for Safari 12.0 bug
	// https://bugs.webkit.org/show_bug.cgi?id=188794

	_export({
	  target: 'Array',
	  proto: true,
	  forced: String(test) === String(test.reverse())
	}, {
	  reverse: function reverse() {
	    // eslint-disable-next-line no-self-assign -- dirty hack
	    if (isArray$5(this)) this.length = this.length;
	    return nativeReverse.call(this);
	  }
	});

	var reverse$2 = entryVirtual('Array').reverse;

	var ArrayPrototype$2 = Array.prototype;

	var reverse_1 = function (it) {
	  var own = it.reverse;
	  return it === ArrayPrototype$2 || it instanceof Array && own === ArrayPrototype$2.reverse ? reverse$2 : own;
	};

	var reverse$1 = reverse_1;

	var reverse = reverse$1;

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
	var max = Math.max;
	var min = Math.min;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
	// https://tc39.es/ecma262/#sec-array.prototype.splice
	// with adding support of @@species

	_export({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT
	}, {
	  splice: function splice(start, deleteCount
	  /* , ...items */
	  ) {
	    var O = toObject(this);
	    var len = toLength(O.length);
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
	      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
	    }

	    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
	      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
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

	var splice$2 = entryVirtual('Array').splice;

	var ArrayPrototype$1 = Array.prototype;

	var splice_1 = function (it) {
	  var own = it.splice;
	  return it === ArrayPrototype$1 || it instanceof Array && own === ArrayPrototype$1.splice ? splice$2 : own;
	};

	var splice$1 = splice_1;

	var splice = splice$1;

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
	  return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
	};

	var notARegexp = function (it) {
	  if (isRegexp(it)) {
	    throw TypeError("The method doesn't accept regular expressions");
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

	// https://tc39.es/ecma262/#sec-string.prototype.includes


	_export({
	  target: 'String',
	  proto: true,
	  forced: !correctIsRegexpLogic('includes')
	}, {
	  includes: function includes(searchString
	  /* , position = 0 */
	  ) {
	    return !!~String(requireObjectCoercible(this)).indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var includes$3 = entryVirtual('String').includes;

	var ArrayPrototype = Array.prototype;
	var StringPrototype = String.prototype;

	var includes$2 = function (it) {
	  var own = it.includes;
	  if (it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.includes) return includes$4;

	  if (typeof it === 'string' || it === StringPrototype || it instanceof String && own === StringPrototype.includes) {
	    return includes$3;
	  }

	  return own;
	};

	var includes$1 = includes$2;

	var includes = includes$1;

	var FAILS_ON_PRIMITIVES = fails(function () {
	  objectGetPrototypeOf(1);
	}); // `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof

	_export({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES,
	  sham: !correctPrototypeGetter
	}, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return objectGetPrototypeOf(toObject(it));
	  }
	});

	var getPrototypeOf$2 = path.Object.getPrototypeOf;

	var getPrototypeOf$1 = getPrototypeOf$2;

	var getPrototypeOf = getPrototypeOf$1;

	var propertyIsEnumerable = objectPropertyIsEnumerable.f; // `Object.{ entries, values }` methods implementation

	var createMethod = function (TO_ENTRIES) {
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
	  // https://tc39.es/ecma262/#sec-object.entries
	  entries: createMethod(true),
	  // `Object.values` method
	  // https://tc39.es/ecma262/#sec-object.values
	  values: createMethod(false)
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

	path.Object.values;

	var trim = stringTrim.trim;
	var $parseInt = global$1.parseInt;
	var hex = /^[+-]?0[Xx]/;
	var FORCED$1 = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22; // `parseInt` method
	// https://tc39.es/ecma262/#sec-parseint-string-radix

	var numberParseInt = FORCED$1 ? function parseInt(string, radix) {
	  var S = trim(String(string));
	  return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
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

	var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
	// of whitespaces and has a correct name

	var stringTrimForced = function (METHOD_NAME) {
	  return fails(function () {
	    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
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

	entryVirtual('String').trim;

	// https://tc39.es/ecma262/#sec-object.create

	_export({
	  target: 'Object',
	  stat: true,
	  sham: !descriptors
	}, {
	  create: objectCreate
	});

	var $stringify = getBuiltIn('JSON', 'stringify');
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

	var FORCED = fails(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify('\uDEAD') !== '"\\udead"';
	});

	if ($stringify) {
	  // `JSON.stringify` method
	  // https://tc39.es/ecma262/#sec-json.stringify
	  // https://github.com/tc39/proposal-well-formed-stringify
	  _export({
	    target: 'JSON',
	    stat: true,
	    forced: FORCED
	  }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var result = $stringify.apply(null, arguments);
	      return typeof result == 'string' ? result.replace(re, fix) : result;
	    }
	  });
	}

	if (!path.JSON) path.JSON = {
	  stringify: JSON.stringify
	}; // eslint-disable-next-line no-unused-vars -- required for `.length`

	var stringify$2 = function stringify(it, replacer, space) {
	  return path.JSON.stringify.apply(null, arguments);
	};

	var stringify$1 = stringify$2;

	var stringify = stringify$1;

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

	function _assertThisInitialized(self) {
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
	          recordTouches.call(_assertThisInitialized(_assertThisInitialized(_this)), inputEvent, inputData);
	        } else if (isMouse && isSyntheticEvent.call(_assertThisInitialized(_assertThisInitialized(_this)), inputData)) {
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


	var Hammer$1 = /*#__PURE__*/function () {
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
	}(); //  style loader but by script tag, not by the loader.

	function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof symbol === "undefined" || getIteratorMethod(o) == null) { if (isArray$2(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = getIterator(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray(o, minLen) { var _context21; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = slice$1(_context21 = Object.prototype.toString.call(o)).call(_context21, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from$2(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	/**
	 * Use this symbol to delete properies in deepObjectAssign.
	 */

	symbol("DELETE");
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

	var Hammer = typeof window !== "undefined" ? window.Hammer || Hammer$1 : function () {
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

	function Activator(container) {
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

	  var hammer = Hammer(this._dom.overlay);
	  hammer.on("tap", bind(_context3 = this._onTapOverlay).call(_context3, this));

	  this._cleanupQueue.push(function () {
	    hammer.destroy(); // FIXME: cleaning up hammer instances doesn't work (Timeline not removed
	    // from memory)
	  }); // block all touch events (except tap)


	  var events = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];

	  forEach(events).call(events, function (event) {
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


	componentEmitter(Activator.prototype); // The currently active activator

	Activator.current = null;
	/**
	 * Destroy the activator. Cleans up all created DOM and event listeners
	 */

	Activator.prototype.destroy = function () {
	  var _context4, _context5;

	  this.deactivate();

	  var _iterator2 = _createForOfIteratorHelper(reverse(_context4 = splice(_context5 = this._cleanupQueue).call(_context5, 0)).call(_context4)),
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


	Activator.prototype.activate = function () {
	  // we allow only one active activator at a time
	  if (Activator.current) {
	    Activator.current.deactivate();
	  }

	  Activator.current = this;
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


	Activator.prototype.deactivate = function () {
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


	Activator.prototype._onTapOverlay = function (event) {
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
	  if (isArray$2(b)) {
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
	      } else if (isArray$2(b[prop])) {
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
	      if (_typeof(b[prop]) === "object" && b[prop] !== null && getPrototypeOf(b[prop]) === Object.prototype) {
	        if (a[prop] === undefined) {
	          a[prop] = deepExtend({}, b[prop], protoExtend); // NOTE: allowDeletion not propagated!
	        } else if (_typeof(a[prop]) === "object" && a[prop] !== null && getPrototypeOf(a[prop]) === Object.prototype) {
	          deepExtend(a[prop], b[prop], protoExtend); // NOTE: allowDeletion not propagated!
	        } else {
	          copyOrDelete(a, b, prop, allowDeletion);
	        }
	      } else if (isArray$2(b[prop])) {
	        var _context6;

	        a[prop] = slice$1(_context6 = b[prop]).call(_context6);
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
	  var _context7;

	  return concat(_context7 = []).call(_context7, _toConsumableArray(arr), [newValue]);
	}
	/**
	 * Used to extend an array and copy it. This is used to propagate paths recursively.
	 *
	 * @param arr - The array to be copied.
	 *
	 * @returns Shallow copy of arr.
	 */


	function copyArray(arr) {
	  return slice$1(arr).call(arr);
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

	var errorFound = false;
	var allOptions$1;
	var VALIDATOR_PRINT_STYLE = "background: #FFeeee; color: #dd0000";
	/**
	 *  Used to validate options.
	 */

	var Validator = /*#__PURE__*/function () {
	  function Validator() {
	    _classCallCheck(this, Validator);
	  }

	  _createClass(Validator, null, [{
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

	      Validator.parse(options, usedOptions, []);
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
	          Validator.check(_option3, options, referenceOptions, path);
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
	        referenceOption = "__any__"; // if the any-subgroup is not a predefined object in the configurator,
	        // we do not look deeper into the object.

	        is_object = Validator.getType(options[option]) === "object";
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
	        console.error("%c" + message + Validator.printLocation(path, option), VALIDATOR_PRINT_STYLE);
	      };

	      var optionType = Validator.getType(options[option]);
	      var refOptionType = refOptionObj[optionType];

	      if (refOptionType !== undefined) {
	        // if the type is correct, we check if it is supposed to be one of a few select values
	        if (Validator.getType(refOptionType) === "array" && indexOf(refOptionType).call(refOptionType, options[option]) === -1) {
	          log('Invalid option detected in "' + option + '".' + " Allowed values are:" + Validator.print(refOptionType) + ' not "' + options[option] + '". ');
	          errorFound = true;
	        } else if (optionType === "object" && referenceOption !== "__any__") {
	          path = copyAndExtendArray(path, option);
	          Validator.parse(options[option], referenceOptions[referenceOption], path);
	        }
	      } else if (refOptionObj["any"] === undefined) {
	        // type of the field is incorrect and the field cannot be any
	        log('Invalid type received for "' + option + '". Expected: ' + Validator.print(keys(refOptionObj)) + ". Received [" + optionType + '] "' + options[option] + '"');
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

	        if (isArray$2(object)) {
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
	      var localSearch = Validator.findInOptions(option, options, path, false);
	      var globalSearch = Validator.findInOptions(option, allOptions$1, [], true);
	      var localSearchThreshold = 8;
	      var globalSearchThreshold = 4;
	      var msg;

	      if (localSearch.indexMatch !== undefined) {
	        msg = " in " + Validator.printLocation(localSearch.path, option, "") + 'Perhaps it was incomplete? Did you mean: "' + localSearch.indexMatch + '"?\n\n';
	      } else if (globalSearch.distance <= globalSearchThreshold && localSearch.distance > globalSearch.distance) {
	        msg = " in " + Validator.printLocation(localSearch.path, option, "") + "Perhaps it was misplaced? Matching option found at: " + Validator.printLocation(globalSearch.path, globalSearch.closestMatch, "");
	      } else if (localSearch.distance <= localSearchThreshold) {
	        msg = '. Did you mean "' + localSearch.closestMatch + '"?' + Validator.printLocation(localSearch.path, option);
	      } else {
	        msg = ". Did you mean one of these: " + Validator.print(keys(options)) + Validator.printLocation(path, option);
	      }

	      console.error('%cUnknown option detected: "' + option + '"' + msg, VALIDATOR_PRINT_STYLE);
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
	          var result = Validator.findInOptions(option, options[op], copyAndExtendArray(path, op));

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
	      return stringify(options).replace(/(")|(\[)|(\])|(,"__type__")/g, "").replace(/(,)/g, ", ");
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
	var VALIDATOR_PRINT_STYLE$1 = VALIDATOR_PRINT_STYLE;
	var Validator$1 = Validator;

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


	Slider.prototype.setValues = function (values$1) {
	  this.values = values$1;
	  if (values(this).length > 0) this.setIndex(0);else this.index = undefined;
	};
	/**
	 * Select a value by its index
	 * @param {number} index
	 */


	Slider.prototype.setIndex = function (index) {
	  if (index < values(this).length) {
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
	  return values(this)[this.index];
	};

	Slider.prototype._onMouseDown = function (event) {
	  // only react on left mouse button down
	  var leftButtonDown = event.which ? event.which === 1 : event.button === 1;
	  if (!leftButtonDown) return;
	  this.startClientX = event.clientX;
	  this.startSlideX = _parseFloat(this.frame.slide.style.left);
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
	  return _parseFloat(this._current.toPrecision(this.precision));
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

	// `Math.sign` method implementation
	// https://tc39.es/ecma262/#sec-math.sign
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

	  return str.charAt(0).toUpperCase() + slice$1(str).call(str, 1);
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
	  var fill$1 = 'white';
	  var stroke = 'gray';
	  var strokeWidth = 1;

	  if (typeof backgroundColor === 'string') {
	    fill$1 = backgroundColor;
	    stroke = 'none';
	    strokeWidth = 0;
	  } else if (_typeof(backgroundColor) === 'object') {
	    if (fill(backgroundColor) !== undefined) fill$1 = fill(backgroundColor);
	    if (backgroundColor.stroke !== undefined) stroke = backgroundColor.stroke;
	    if (backgroundColor.strokeWidth !== undefined) strokeWidth = backgroundColor.strokeWidth;
	  } else {
	    throw new Error('Unsupported type of backgroundColor');
	  }

	  dst.frame.style.backgroundColor = fill$1;
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

	  if (isArray$2(surfaceColors)) {
	    rgbColors = parseColorArray(surfaceColors);
	  } else if (_typeof(surfaceColors) === 'object') {
	    rgbColors = parseColorObject(surfaceColors.hue);
	  } else {
	    throw new Error('Unsupported type of surfaceColors');
	  } // for some reason surfaceColors goes from vMax to vMin:


	  reverse(rgbColors).call(rgbColors);

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

	  if (isArray$2(colormap)) {
	    rgbColors = parseColorArray(colormap);
	  } else if (_typeof(colormap) === 'object') {
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

	  return map(colormap).call(colormap, function (colorCode) {
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

	var allOptions = {
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
	  var len = values(this).length;

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
	  return values(this)[this.index];
	};
	/**
	 * Retrieve all values of the filter
	 * @return {Array} values
	 */


	Filter.prototype.getValues = function () {
	  return values(this);
	};
	/**
	 * Retrieve one value of the filter
	 * @param {number}  index
	 * @return {*} value
	 */


	Filter.prototype.getValue = function (index) {
	  if (index >= values(this).length) throw new Error('Index out of range');
	  return values(this)[index];
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
	    f.value = values(this)[index];
	    var dataView = new esnext.DataView(this.dataGroup.getDataSet(), {
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
	  if (index >= values(this).length) throw new Error('Index out of range');
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

	  if (isArray$2(rawData)) {
	    rawData = new esnext.DataSet(rawData);
	  }

	  var data;

	  if (rawData instanceof esnext.DataSet || rawData instanceof esnext.DataView) {
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

	  var index = indexOf(_context = ['x', 'y', 'z']).call(_context, column);

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

	  sort(points).call(points, sortDepth);
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
	  filter(this.frame).style.position = 'absolute';
	  filter(this.frame).style.bottom = '0px';
	  filter(this.frame).style.left = '0px';
	  filter(this.frame).style.width = '100%';
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

	  filter(this.frame).style.width = this.frame.canvas.clientWidth - 2 * 10 + 'px';
	};
	/**
	 * Start playing the animation, if requested and filter present. Only applicable
	 * when animation data is available.
	 */


	Graph3d.prototype.animationStart = function () {
	  // start animation when option is true
	  if (!this.animationAutoStart || !this.dataGroup.dataFilter) return;
	  if (!filter(this.frame) || !filter(this.frame).slider) throw new Error('No animation available');

	  filter(this.frame).slider.play();
	};
	/**
	 * Stop animation
	 */


	Graph3d.prototype.animationStop = function () {
	  if (!filter(this.frame) || !filter(this.frame).slider) return;

	  filter(this.frame).slider.stop();
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
	    this.currentXCenter = _parseFloat(this.xCenter) / 100 * this.frame.canvas.clientWidth;
	  } else {
	    this.currentXCenter = _parseFloat(this.xCenter); // supposed to be in px
	  } // calculate the vertical center position


	  if (this.yCenter.charAt(this.yCenter.length - 1) === '%') {
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
	  var errorFound = Validator$1.validate(options, allOptions);

	  if (errorFound === true) {
	    console.log("%cErrors have been found in the supplied options object.", VALIDATOR_PRINT_STYLE$1);
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

	  var filter$1 = filter(this.frame);

	  filter$1.innerHTML = '';

	  if (!dataFilter) {
	    filter$1.slider = undefined;
	    return;
	  }

	  var options = {
	    'visible': this.showAnimationControls
	  };
	  var slider = new Slider(filter$1, options);
	  filter$1.slider = slider; // TODO: css here is not nice here...

	  filter$1.style.padding = '10px'; //this.frame.filter.style.backgroundColor = '#EFEFEF';

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


	Graph3d.prototype._redrawSlider = function () {
	  if (filter(this.frame).slider !== undefined) {
	    filter(this.frame).slider.redraw();
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

	  forEach(top).call(top, function (obj) {
	    obj.screen = me._convert3Dto2D(obj.point);
	  });

	  forEach(bottom).call(bottom, function (obj) {
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


	Graph3d.prototype._drawCircle = function (ctx, point, color, borderColor, size) {
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

	  if (pointStyle && _typeof(pointStyle) === 'object' && fill(pointStyle) && pointStyle.stroke) {
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


	Graph3d.prototype._getColorsSize = function () {
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


	Graph3d.prototype._colormap = function (x) {
	  var v = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	  var r, g, b, a;
	  var colormap = this.colormap;

	  if (isArray$2(colormap)) {
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

	  if (typeof a === 'number' && !isNan(a)) {
	    var _context, _context2, _context3;

	    return concat(_context = concat(_context2 = concat(_context3 = "RGBA(".concat(Math.round(r * v), ", ")).call(_context3, Math.round(g * v), ", ")).call(_context2, Math.round(b * v), ", ")).call(_context, a, ")");
	  } else {
	    var _context4, _context5;

	    return concat(_context4 = concat(_context5 = "RGB(".concat(Math.round(r * v), ", ")).call(_context5, Math.round(g * v), ", ")).call(_context4, Math.round(b * v), ")");
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

	  this._redrawBar(ctx, point, xWidth, yWidth, fill(colors), colors.border);
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

	  this._redrawBar(ctx, point, xWidth, yWidth, fill(colors), colors.border);
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

	  this._redrawBar(ctx, point, xWidth, yWidth, fill(colors), colors.border);
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

	  this._drawCircle(ctx, point, fill(colors), colors.border);
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

	  this._drawCircle(ctx, point, fill(colors), colors.border);
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

	  this._drawCircle(ctx, point, fill(colors), colors.border, size);
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

	exports.Graph3d = Graph3d;
	exports.Graph3dCamera = Camera;
	exports.Graph3dFilter = Filter;
	exports.Graph3dPoint2d = Point2d_1;
	exports.Graph3dPoint3d = Point3d_1;
	exports.Graph3dSlider = Slider;
	exports.Graph3dStepNumber = StepNumber_1;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vis-graph3d.js.map
