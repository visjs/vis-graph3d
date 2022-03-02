/**
 * vis-graph3d
 * https://visjs.github.io/vis-graph3d/
 *
 * Create interactive, animated 3d graphs. Surfaces, lines, dots and block styling out of the box.
 *
 * @version 0.0.0-no-version
 * @date    2022-03-02T11:35:42.213Z
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
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.vis = global.vis || {}));
})(this, (function (exports) {
	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var check = function (it) {
	  return it && it.Math == Math && it;
	}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


	var global$i = // eslint-disable-next-line es/no-global-this -- safe
	check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
	check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
	function () {
	  return this;
	}() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$l = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$k = fails$l; // Detect IE8's incomplete defineProperty implementation

	var descriptors = !fails$k(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, {
	    get: function () {
	      return 7;
	    }
	  })[1] != 7;
	});

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable$1 = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

	var getOwnPropertyDescriptor$5 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

	var NASHORN_BUG = getOwnPropertyDescriptor$5 && !$propertyIsEnumerable$1.call({
	  1: 2
	}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$5(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$1;

	var createPropertyDescriptor$5 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString$a = {}.toString;

	var classofRaw$1 = function (it) {
	  return toString$a.call(it).slice(8, -1);
	};

	var fails$j = fails$l;
	var classof$b = classofRaw$1;
	var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

	var indexedObject = fails$j(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$b(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// https://tc39.es/ecma262/#sec-requireobjectcoercible

	var requireObjectCoercible$5 = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	var IndexedObject$3 = indexedObject;
	var requireObjectCoercible$4 = requireObjectCoercible$5;

	var toIndexedObject$a = function (it) {
	  return IndexedObject$3(requireObjectCoercible$4(it));
	};

	var isObject$f = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var path$s = {};

	var path$r = path$s;
	var global$h = global$i;

	var aFunction$7 = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn$8 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$7(path$r[namespace]) || aFunction$7(global$h[namespace]) : path$r[namespace] && path$r[namespace][method] || global$h[namespace] && global$h[namespace][method];
	};

	var getBuiltIn$7 = getBuiltIn$8;
	var engineUserAgent = getBuiltIn$7('navigator', 'userAgent') || '';

	var global$g = global$i;
	var userAgent$3 = engineUserAgent;
	var process = global$g.process;
	var Deno = global$g.Deno;
	var versions = process && process.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] < 4 ? 1 : match[0] + match[1];
	} else if (userAgent$3) {
	  match = userAgent$3.match(/Edge\/(\d+)/);

	  if (!match || match[1] >= 74) {
	    match = userAgent$3.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	var engineV8Version = version && +version;

	/* eslint-disable es/no-symbol -- required for testing */
	var V8_VERSION$2 = engineV8Version;
	var fails$i = fails$l; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$i(function () {
	  var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

	  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	  !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */
	var NATIVE_SYMBOL$2 = nativeSymbol;
	var useSymbolAsUid = NATIVE_SYMBOL$2 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

	var getBuiltIn$6 = getBuiltIn$8;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
	var isSymbol$4 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$6('Symbol');
	  return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
	};

	var isObject$e = isObject$f; // `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive

	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject$e(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject$e(val = fn.call(input))) return val;
	  if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject$e(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var shared$4 = {exports: {}};

	var global$f = global$i;

	var setGlobal$1 = function (key, value) {
	  try {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty(global$f, key, {
	      value: value,
	      configurable: true,
	      writable: true
	    });
	  } catch (error) {
	    global$f[key] = value;
	  }

	  return value;
	};

	var global$e = global$i;
	var setGlobal = setGlobal$1;
	var SHARED = '__core-js_shared__';
	var store$3 = global$e[SHARED] || setGlobal(SHARED, {});
	var sharedStore = store$3;

	var store$2 = sharedStore;
	(shared$4.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.16.1',
	  mode: 'pure' ,
	  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	});

	var requireObjectCoercible$3 = requireObjectCoercible$5; // `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject

	var toObject$e = function (argument) {
	  return Object(requireObjectCoercible$3(argument));
	};

	var toObject$d = toObject$e;
	var hasOwnProperty = {}.hasOwnProperty;

	var has$b = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty.call(toObject$d(it), key);
	};

	var id$1 = 0;
	var postfix = Math.random();

	var uid$4 = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$1 + postfix).toString(36);
	};

	var global$d = global$i;
	var shared$3 = shared$4.exports;
	var has$a = has$b;
	var uid$3 = uid$4;
	var NATIVE_SYMBOL$1 = nativeSymbol;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;
	var WellKnownSymbolsStore$1 = shared$3('wks');
	var Symbol$1 = global$d.Symbol;
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$3;

	var wellKnownSymbol$j = function (name) {
	  if (!has$a(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$1 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
	    if (NATIVE_SYMBOL$1 && has$a(Symbol$1, name)) {
	      WellKnownSymbolsStore$1[name] = Symbol$1[name];
	    } else {
	      WellKnownSymbolsStore$1[name] = createWellKnownSymbol('Symbol.' + name);
	    }
	  }

	  return WellKnownSymbolsStore$1[name];
	};

	var isObject$d = isObject$f;
	var isSymbol$3 = isSymbol$4;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$i = wellKnownSymbol$j;
	var TO_PRIMITIVE$1 = wellKnownSymbol$i('toPrimitive'); // `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive

	var toPrimitive$1 = function (input, pref) {
	  if (!isObject$d(input) || isSymbol$3(input)) return input;
	  var exoticToPrim = input[TO_PRIMITIVE$1];
	  var result;

	  if (exoticToPrim !== undefined) {
	    if (pref === undefined) pref = 'default';
	    result = exoticToPrim.call(input, pref);
	    if (!isObject$d(result) || isSymbol$3(result)) return result;
	    throw TypeError("Can't convert object to primitive value");
	  }

	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive = toPrimitive$1;
	var isSymbol$2 = isSymbol$4; // `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey

	var toPropertyKey$4 = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol$2(key) ? key : String(key);
	};

	var global$c = global$i;
	var isObject$c = isObject$f;
	var document$1 = global$c.document; // typeof document.createElement is 'object' in old IE

	var EXISTS = isObject$c(document$1) && isObject$c(document$1.createElement);

	var documentCreateElement$1 = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$f = descriptors;
	var fails$h = fails$l;
	var createElement = documentCreateElement$1; // Thank's IE8 for his funny defineProperty

	var ie8DomDefine = !DESCRIPTORS$f && !fails$h(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () {
	      return 7;
	    }
	  }).a != 7;
	});

	var DESCRIPTORS$e = descriptors;
	var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$4 = createPropertyDescriptor$5;
	var toIndexedObject$9 = toIndexedObject$a;
	var toPropertyKey$3 = toPropertyKey$4;
	var has$9 = has$b;
	var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$e ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$9(O);
	  P = toPropertyKey$3(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) {
	    /* empty */
	  }
	  if (has$9(O, P)) return createPropertyDescriptor$4(!propertyIsEnumerableModule$2.f.call(O, P), O[P]);
	};

	var fails$g = fails$l;
	var replacement = /#|\.prototype\./;

	var isForced$1 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails$g(detection) : !!detection;
	};

	var normalize = isForced$1.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$1.data = {};
	var NATIVE = isForced$1.NATIVE = 'N';
	var POLYFILL = isForced$1.POLYFILL = 'P';
	var isForced_1 = isForced$1;

	var aFunction$6 = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  }

	  return it;
	};

	var aFunction$5 = aFunction$6; // optional / simple context binding

	var functionBindContext = function (fn, that, length) {
	  aFunction$5(fn);
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

	  return function () {
	    return fn.apply(that, arguments);
	  };
	};

	var objectDefineProperty = {};

	var isObject$b = isObject$f;

	var anObject$b = function (it) {
	  if (!isObject$b(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  }

	  return it;
	};

	var DESCRIPTORS$d = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var anObject$a = anObject$b;
	var toPropertyKey$2 = toPropertyKey$4; // eslint-disable-next-line es/no-object-defineproperty -- safe

	var $defineProperty$1 = Object.defineProperty; // `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty

	objectDefineProperty.f = DESCRIPTORS$d ? $defineProperty$1 : function defineProperty(O, P, Attributes) {
	  anObject$a(O);
	  P = toPropertyKey$2(P);
	  anObject$a(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty$1(O, P, Attributes);
	  } catch (error) {
	    /* empty */
	  }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$c = descriptors;
	var definePropertyModule$4 = objectDefineProperty;
	var createPropertyDescriptor$3 = createPropertyDescriptor$5;
	var createNonEnumerableProperty$9 = DESCRIPTORS$c ? function (object, key, value) {
	  return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var global$b = global$i;
	var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;
	var isForced = isForced_1;
	var path$q = path$s;
	var bind$b = functionBindContext;
	var createNonEnumerableProperty$8 = createNonEnumerableProperty$9;
	var has$8 = has$b;

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
	  var nativeSource = GLOBAL ? global$b : STATIC ? global$b[TARGET] : (global$b[TARGET] || {}).prototype;
	  var target = GLOBAL ? path$q : path$q[TARGET] || (path$q[TARGET] = {});
	  var targetPrototype = target.prototype;
	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contains in native

	    USE_NATIVE = !FORCED && nativeSource && has$8(nativeSource, key);
	    targetProperty = target[key];
	    if (USE_NATIVE) if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$4(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key]; // export native or implementation

	    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
	    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue; // bind timers to global for call from export context

	    if (options.bind && USE_NATIVE) resultProperty = bind$b(sourceProperty, global$b); // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty); // make static versions for prototype methods
	    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind$b(Function.call, sourceProperty); // default case
	    else resultProperty = sourceProperty; // add a flag to not completely full polyfills

	    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
	      createNonEnumerableProperty$8(resultProperty, 'sham', true);
	    }

	    target[key] = resultProperty;

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';

	      if (!has$8(path$q, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty$8(path$q, VIRTUAL_PROTOTYPE, {});
	      } // export virtual prototype methods


	      path$q[VIRTUAL_PROTOTYPE][key] = sourceProperty; // export real prototype methods

	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty$8(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var classof$a = classofRaw$1; // `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe

	var isArray$c = Array.isArray || function isArray(arg) {
	  return classof$a(arg) == 'Array';
	};

	var ceil = Math.ceil;
	var floor$1 = Math.floor; // `ToInteger` abstract operation
	// https://tc39.es/ecma262/#sec-tointeger

	var toInteger$4 = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$1 : ceil)(argument);
	};

	var toInteger$3 = toInteger$4;
	var min$2 = Math.min; // `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength

	var toLength$c = function (argument) {
	  return argument > 0 ? min$2(toInteger$3(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toPropertyKey$1 = toPropertyKey$4;
	var definePropertyModule$3 = objectDefineProperty;
	var createPropertyDescriptor$2 = createPropertyDescriptor$5;

	var createProperty$5 = function (object, key, value) {
	  var propertyKey = toPropertyKey$1(key);
	  if (propertyKey in object) definePropertyModule$3.f(object, propertyKey, createPropertyDescriptor$2(0, value));else object[propertyKey] = value;
	};

	var isObject$a = isObject$f;
	var isArray$b = isArray$c;
	var wellKnownSymbol$h = wellKnownSymbol$j;
	var SPECIES$3 = wellKnownSymbol$h('species'); // a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate

	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;

	  if (isArray$b(originalArray)) {
	    C = originalArray.constructor; // cross-realm fallback

	    if (typeof C == 'function' && (C === Array || isArray$b(C.prototype))) C = undefined;else if (isObject$a(C)) {
	      C = C[SPECIES$3];
	      if (C === null) C = undefined;
	    }
	  }

	  return C === undefined ? Array : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate

	var arraySpeciesCreate$4 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var fails$f = fails$l;
	var wellKnownSymbol$g = wellKnownSymbol$j;
	var V8_VERSION$1 = engineV8Version;
	var SPECIES$2 = wellKnownSymbol$g('species');

	var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$1 >= 51 || !fails$f(function () {
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

	var $$F = _export;
	var fails$e = fails$l;
	var isArray$a = isArray$c;
	var isObject$9 = isObject$f;
	var toObject$c = toObject$e;
	var toLength$b = toLength$c;
	var createProperty$4 = createProperty$5;
	var arraySpeciesCreate$3 = arraySpeciesCreate$4;
	var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
	var wellKnownSymbol$f = wellKnownSymbol$j;
	var V8_VERSION = engineV8Version;
	var IS_CONCAT_SPREADABLE = wellKnownSymbol$f('isConcatSpreadable');
	var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679

	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$e(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});
	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$4('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject$9(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$a(O);
	};

	var FORCED$6 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
	// https://tc39.es/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species

	$$F({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$6
	}, {
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  concat: function concat(arg) {
	    var O = toObject$c(this);
	    var A = arraySpeciesCreate$3(O, 0);
	    var n = 0;
	    var i, k, length, len, E;

	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];

	      if (isConcatSpreadable(E)) {
	        len = toLength$b(E.length);
	        if (n + len > MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$4(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty$4(A, n++, E);
	      }
	    }

	    A.length = n;
	    return A;
	  }
	});

	var isSymbol$1 = isSymbol$4;

	var toString$9 = function (argument) {
	  if (isSymbol$1(argument)) throw TypeError('Cannot convert a Symbol value to a string');
	  return String(argument);
	};

	var toInteger$2 = toInteger$4;
	var max$2 = Math.max;
	var min$1 = Math.min; // Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

	var toAbsoluteIndex$4 = function (index, length) {
	  var integer = toInteger$2(index);
	  return integer < 0 ? max$2(integer + length, 0) : min$1(integer, length);
	};

	var toIndexedObject$8 = toIndexedObject$a;
	var toLength$a = toLength$c;
	var toAbsoluteIndex$3 = toAbsoluteIndex$4; // `Array.prototype.{ indexOf, includes }` methods implementation

	var createMethod$5 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$8($this);
	    var length = toLength$a(O.length);
	    var index = toAbsoluteIndex$3(fromIndex, length);
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

	var arrayIncludes$1 = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$5(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$5(false)
	};

	var hiddenKeys$6 = {};

	var has$7 = has$b;
	var toIndexedObject$7 = toIndexedObject$a;
	var indexOf$4 = arrayIncludes$1.indexOf;
	var hiddenKeys$5 = hiddenKeys$6;

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$7(object);
	  var i = 0;
	  var result = [];
	  var key;

	  for (key in O) !has$7(hiddenKeys$5, key) && has$7(O, key) && result.push(key); // Don't enum bug & hidden keys


	  while (names.length > i) if (has$7(O, key = names[i++])) {
	    ~indexOf$4(result, key) || result.push(key);
	  }

	  return result;
	};

	var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3; // `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe

	var objectKeys$4 = Object.keys || function keys(O) {
	  return internalObjectKeys$1(O, enumBugKeys$2);
	};

	var DESCRIPTORS$b = descriptors;
	var definePropertyModule$2 = objectDefineProperty;
	var anObject$9 = anObject$b;
	var objectKeys$3 = objectKeys$4; // `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe

	var objectDefineProperties = DESCRIPTORS$b ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$9(O);
	  var keys = objectKeys$3(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;

	  while (length > index) definePropertyModule$2.f(O, key = keys[index++], Properties[key]);

	  return O;
	};

	var getBuiltIn$5 = getBuiltIn$8;
	var html$1 = getBuiltIn$5('document', 'documentElement');

	var shared$2 = shared$4.exports;
	var uid$2 = uid$4;
	var keys$7 = shared$2('keys');

	var sharedKey$4 = function (key) {
	  return keys$7[key] || (keys$7[key] = uid$2(key));
	};

	/* global ActiveXObject -- old IE, WSH */
	var anObject$8 = anObject$b;
	var defineProperties$5 = objectDefineProperties;
	var enumBugKeys$1 = enumBugKeys$3;
	var hiddenKeys$4 = hiddenKeys$6;
	var html = html$1;
	var documentCreateElement = documentCreateElement$1;
	var sharedKey$3 = sharedKey$4;
	var GT = '>';
	var LT = '<';
	var PROTOTYPE$1 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey$3('IE_PROTO');

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

	  if (iframe.style) {
	    iframe.style.display = 'none';
	    html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

	    iframe.src = String(JS);
	    iframeDocument = iframe.contentWindow.document;
	    iframeDocument.open();
	    iframeDocument.write(scriptTag('document.F=Object'));
	    iframeDocument.close();
	    return iframeDocument.F;
	  }
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

	  NullProtoObject = document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : // old IE
	  NullProtoObjectViaIFrame() || NullProtoObjectViaActiveX(activeXDocument); // WSH

	  var length = enumBugKeys$1.length;

	  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$1[length]];

	  return NullProtoObject();
	};

	hiddenKeys$4[IE_PROTO$1] = true; // `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create

	var objectCreate = Object.create || function create(O, Properties) {
	  var result;

	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$1] = anObject$8(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();

	  return Properties === undefined ? result : defineProperties$5(result, Properties);
	};

	var objectGetOwnPropertyNames = {};

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys = enumBugKeys$3;
	var hiddenKeys$3 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe

	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys(O, hiddenKeys$3);
	};

	var objectGetOwnPropertyNamesExternal = {};

	/* eslint-disable es/no-object-getownpropertynames -- safe */
	var toIndexedObject$6 = toIndexedObject$a;
	var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var toString$8 = {}.toString;
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return windowNames.slice();
	  }
	}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && toString$8.call(it) == '[object Window]' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$6(it));
	};

	var objectGetOwnPropertySymbols = {};

	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var createNonEnumerableProperty$7 = createNonEnumerableProperty$9;

	var redefine$3 = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;else createNonEnumerableProperty$7(target, key, value);
	};

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$e = wellKnownSymbol$j;
	wellKnownSymbolWrapped.f = wellKnownSymbol$e;

	var path$p = path$s;
	var has$6 = has$b;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$b = objectDefineProperty.f;

	var defineWellKnownSymbol$l = function (NAME) {
	  var Symbol = path$p.Symbol || (path$p.Symbol = {});
	  if (!has$6(Symbol, NAME)) defineProperty$b(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var wellKnownSymbol$d = wellKnownSymbol$j;
	var TO_STRING_TAG$3 = wellKnownSymbol$d('toStringTag');
	var test$2 = {};
	test$2[TO_STRING_TAG$3] = 'z';
	var toStringTagSupport = String(test$2) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var classofRaw = classofRaw$1;
	var wellKnownSymbol$c = wellKnownSymbol$j;
	var TO_STRING_TAG$2 = wellKnownSymbol$c('toStringTag'); // ES3 wrong here

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


	var classof$9 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
	  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
	  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
	  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$8 = classof$9; // `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring

	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$8(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineProperty$a = objectDefineProperty.f;
	var createNonEnumerableProperty$6 = createNonEnumerableProperty$9;
	var has$5 = has$b;
	var toString$7 = objectToString;
	var wellKnownSymbol$b = wellKnownSymbol$j;
	var TO_STRING_TAG$1 = wellKnownSymbol$b('toStringTag');

	var setToStringTag$5 = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;

	    if (!has$5(target, TO_STRING_TAG$1)) {
	      defineProperty$a(target, TO_STRING_TAG$1, {
	        configurable: true,
	        value: TAG
	      });
	    }

	    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
	      createNonEnumerableProperty$6(target, 'toString', toString$7);
	    }
	  }
	};

	var store$1 = sharedStore;
	var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

	if (typeof store$1.inspectSource != 'function') {
	  store$1.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource$1 = store$1.inspectSource;

	var global$a = global$i;
	var inspectSource = inspectSource$1;
	var WeakMap$1 = global$a.WeakMap;
	var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));

	var NATIVE_WEAK_MAP = nativeWeakMap;
	var global$9 = global$i;
	var isObject$8 = isObject$f;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
	var objectHas = has$b;
	var shared$1 = sharedStore;
	var sharedKey$2 = sharedKey$4;
	var hiddenKeys$2 = hiddenKeys$6;
	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var WeakMap = global$9.WeakMap;
	var set$3, get, has$4;

	var enforce = function (it) {
	  return has$4(it) ? get(it) : set$3(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;

	    if (!isObject$8(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    }

	    return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared$1.state) {
	  var store = shared$1.state || (shared$1.state = new WeakMap());
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;

	  set$3 = function (it, metadata) {
	    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset.call(store, it, metadata);
	    return metadata;
	  };

	  get = function (it) {
	    return wmget.call(store, it) || {};
	  };

	  has$4 = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey$2('state');
	  hiddenKeys$2[STATE] = true;

	  set$3 = function (it, metadata) {
	    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$5(it, STATE, metadata);
	    return metadata;
	  };

	  get = function (it) {
	    return objectHas(it, STATE) ? it[STATE] : {};
	  };

	  has$4 = function (it) {
	    return objectHas(it, STATE);
	  };
	}

	var internalState = {
	  set: set$3,
	  get: get,
	  has: has$4,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var bind$a = functionBindContext;
	var IndexedObject$2 = indexedObject;
	var toObject$b = toObject$e;
	var toLength$9 = toLength$c;
	var arraySpeciesCreate$2 = arraySpeciesCreate$4;
	var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

	var createMethod$4 = function (TYPE) {
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
	    var boundFunction = bind$a(callbackfn, that, 3);
	    var length = toLength$9(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate$2;
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
	            push.call(target, value);
	          // filter
	        } else switch (TYPE) {
	          case 4:
	            return false;
	          // every

	          case 7:
	            push.call(target, value);
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
	  forEach: createMethod$4(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod$4(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod$4(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod$4(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod$4(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod$4(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$4(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod$4(7)
	};

	var $$E = _export;
	var global$8 = global$i;
	var getBuiltIn$4 = getBuiltIn$8;
	var DESCRIPTORS$a = descriptors;
	var NATIVE_SYMBOL = nativeSymbol;
	var fails$d = fails$l;
	var has$3 = has$b;
	var isArray$9 = isArray$c;
	var isObject$7 = isObject$f;
	var isSymbol = isSymbol$4;
	var anObject$7 = anObject$b;
	var toObject$a = toObject$e;
	var toIndexedObject$5 = toIndexedObject$a;
	var toPropertyKey = toPropertyKey$4;
	var $toString = toString$9;
	var createPropertyDescriptor$1 = createPropertyDescriptor$5;
	var nativeObjectCreate = objectCreate;
	var objectKeys$2 = objectKeys$4;
	var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
	var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$1 = objectDefineProperty;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;
	var redefine$2 = redefine$3;
	var shared = shared$4.exports;
	var sharedKey$1 = sharedKey$4;
	var hiddenKeys$1 = hiddenKeys$6;
	var uid$1 = uid$4;
	var wellKnownSymbol$a = wellKnownSymbol$j;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineWellKnownSymbol$k = defineWellKnownSymbol$l;
	var setToStringTag$4 = setToStringTag$5;
	var InternalStateModule$4 = internalState;
	var $forEach$1 = arrayIteration.forEach;
	var HIDDEN = sharedKey$1('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var TO_PRIMITIVE = wellKnownSymbol$a('toPrimitive');
	var setInternalState$4 = InternalStateModule$4.set;
	var getInternalState$2 = InternalStateModule$4.getterFor(SYMBOL);
	var ObjectPrototype$1 = Object[PROTOTYPE];
	var $Symbol = global$8.Symbol;
	var $stringify$1 = getBuiltIn$4('JSON', 'stringify');
	var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$1.f;
	var nativeDefineProperty = definePropertyModule$1.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry = shared('symbol-to-string-registry');
	var WellKnownSymbolsStore = shared('wks');
	var QObject = global$8.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

	var setSymbolDescriptor = DESCRIPTORS$a && fails$d(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
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
	  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
	  setInternalState$4(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$a) symbol.description = description;
	  return symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject$7(O);
	  var key = toPropertyKey(P);
	  anObject$7(Attributes);

	  if (has$3(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!has$3(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$1(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (has$3(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, {
	        enumerable: createPropertyDescriptor$1(0, false)
	      });
	    }

	    return setSymbolDescriptor(O, key, Attributes);
	  }

	  return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$7(O);
	  var properties = toIndexedObject$5(Properties);
	  var keys = objectKeys$2(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$1(keys, function (key) {
	    if (!DESCRIPTORS$a || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPropertyKey(V);
	  var enumerable = nativePropertyIsEnumerable.call(this, P);
	  if (this === ObjectPrototype$1 && has$3(AllSymbols, P) && !has$3(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !has$3(this, P) || !has$3(AllSymbols, P) || has$3(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$5(O);
	  var key = toPropertyKey(P);
	  if (it === ObjectPrototype$1 && has$3(AllSymbols, key) && !has$3(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

	  if (descriptor && has$3(AllSymbols, key) && !(has$3(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }

	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$5(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!has$3(AllSymbols, key) && !has$3(hiddenKeys$1, key)) result.push(key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$5(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (has$3(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has$3(ObjectPrototype$1, key))) {
	      result.push(AllSymbols[key]);
	    }
	  });
	  return result;
	}; // `Symbol` constructor
	// https://tc39.es/ecma262/#sec-symbol-constructor


	if (!NATIVE_SYMBOL) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
	    var tag = uid$1(description);

	    var setter = function (value) {
	      if (this === ObjectPrototype$1) setter.call(ObjectPrototypeSymbols, value);
	      if (has$3(this, HIDDEN) && has$3(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor$1(1, value));
	    };

	    if (DESCRIPTORS$a && USE_SETTER) setSymbolDescriptor(ObjectPrototype$1, tag, {
	      configurable: true,
	      set: setter
	    });
	    return wrap$1(tag, description);
	  };

	  redefine$2($Symbol[PROTOTYPE], 'toString', function toString() {
	    return getInternalState$2(this).tag;
	  });
	  redefine$2($Symbol, 'withoutSetter', function (description) {
	    return wrap$1(uid$1(description), description);
	  });
	  propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
	  definePropertyModule$1.f = $defineProperty;
	  getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule$2.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$2.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap$1(wellKnownSymbol$a(name), name);
	  };

	  if (DESCRIPTORS$a) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$2(this).description;
	      }
	    });
	  }
	}

	$$E({
	  global: true,
	  wrap: true,
	  forced: !NATIVE_SYMBOL,
	  sham: !NATIVE_SYMBOL
	}, {
	  Symbol: $Symbol
	});
	$forEach$1(objectKeys$2(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol$k(name);
	});
	$$E({
	  target: SYMBOL,
	  stat: true,
	  forced: !NATIVE_SYMBOL
	}, {
	  // `Symbol.for` method
	  // https://tc39.es/ecma262/#sec-symbol.for
	  'for': function (key) {
	    var string = $toString(key);
	    if (has$3(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.es/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
	    if (has$3(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  },
	  useSetter: function () {
	    USE_SETTER = true;
	  },
	  useSimple: function () {
	    USE_SETTER = false;
	  }
	});
	$$E({
	  target: 'Object',
	  stat: true,
	  forced: !NATIVE_SYMBOL,
	  sham: !DESCRIPTORS$a
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
	$$E({
	  target: 'Object',
	  stat: true,
	  forced: !NATIVE_SYMBOL
	}, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // `Object.getOwnPropertySymbols` method
	  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
	  getOwnPropertySymbols: $getOwnPropertySymbols
	}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443

	$$E({
	  target: 'Object',
	  stat: true,
	  forced: fails$d(function () {
	    getOwnPropertySymbolsModule$2.f(1);
	  })
	}, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return getOwnPropertySymbolsModule$2.f(toObject$a(it));
	  }
	}); // `JSON.stringify` method behavior with symbols
	// https://tc39.es/ecma262/#sec-json.stringify

	if ($stringify$1) {
	  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails$d(function () {
	    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

	    return $stringify$1([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
	    || $stringify$1({
	      a: symbol
	    }) != '{}' // V8 throws on boxed symbols
	    || $stringify$1(Object(symbol)) != '{}';
	  });
	  $$E({
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
	      if (!isObject$7(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

	      if (!isArray$9(replacer)) replacer = function (key, value) {
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
	  createNonEnumerableProperty$4($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	} // `Symbol.prototype[@@toStringTag]` property
	// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


	setToStringTag$4($Symbol, SYMBOL);
	hiddenKeys$1[HIDDEN] = true;

	var defineWellKnownSymbol$j = defineWellKnownSymbol$l; // `Symbol.asyncIterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.asynciterator

	defineWellKnownSymbol$j('asyncIterator');

	var defineWellKnownSymbol$i = defineWellKnownSymbol$l; // `Symbol.hasInstance` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.hasinstance

	defineWellKnownSymbol$i('hasInstance');

	var defineWellKnownSymbol$h = defineWellKnownSymbol$l; // `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable

	defineWellKnownSymbol$h('isConcatSpreadable');

	var defineWellKnownSymbol$g = defineWellKnownSymbol$l; // `Symbol.iterator` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.iterator

	defineWellKnownSymbol$g('iterator');

	var defineWellKnownSymbol$f = defineWellKnownSymbol$l; // `Symbol.match` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.match

	defineWellKnownSymbol$f('match');

	var defineWellKnownSymbol$e = defineWellKnownSymbol$l; // `Symbol.matchAll` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.matchall

	defineWellKnownSymbol$e('matchAll');

	var defineWellKnownSymbol$d = defineWellKnownSymbol$l; // `Symbol.replace` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.replace

	defineWellKnownSymbol$d('replace');

	var defineWellKnownSymbol$c = defineWellKnownSymbol$l; // `Symbol.search` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.search

	defineWellKnownSymbol$c('search');

	var defineWellKnownSymbol$b = defineWellKnownSymbol$l; // `Symbol.species` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.species

	defineWellKnownSymbol$b('species');

	var defineWellKnownSymbol$a = defineWellKnownSymbol$l; // `Symbol.split` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.split

	defineWellKnownSymbol$a('split');

	var defineWellKnownSymbol$9 = defineWellKnownSymbol$l; // `Symbol.toPrimitive` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.toprimitive

	defineWellKnownSymbol$9('toPrimitive');

	var defineWellKnownSymbol$8 = defineWellKnownSymbol$l; // `Symbol.toStringTag` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.tostringtag

	defineWellKnownSymbol$8('toStringTag');

	var defineWellKnownSymbol$7 = defineWellKnownSymbol$l; // `Symbol.unscopables` well-known symbol
	// https://tc39.es/ecma262/#sec-symbol.unscopables

	defineWellKnownSymbol$7('unscopables');

	var global$7 = global$i;
	var setToStringTag$3 = setToStringTag$5; // JSON[@@toStringTag] property
	// https://tc39.es/ecma262/#sec-json-@@tostringtag

	setToStringTag$3(global$7.JSON, 'JSON', true);

	var path$o = path$s;
	var symbol$4 = path$o.Symbol;

	var iterators = {};

	var fails$c = fails$l;
	var correctPrototypeGetter = !fails$c(function () {
	  function F() {
	    /* empty */
	  }

	  F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var has$2 = has$b;
	var toObject$9 = toObject$e;
	var sharedKey = sharedKey$4;
	var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
	var IE_PROTO = sharedKey('IE_PROTO');
	var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe

	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? Object.getPrototypeOf : function (O) {
	  O = toObject$9(O);
	  if (has$2(O, IE_PROTO)) return O[IE_PROTO];

	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }

	  return O instanceof Object ? ObjectPrototype : null;
	};

	var fails$b = fails$l;
	var getPrototypeOf$6 = objectGetPrototypeOf;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;
	var has$1 = has$b;
	var wellKnownSymbol$9 = wellKnownSymbol$j;
	var ITERATOR$4 = wellKnownSymbol$9('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	var returnThis$2 = function () {
	  return this;
	}; // `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object


	var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
	/* eslint-disable es/no-array-prototype-keys -- safe */

	if ([].keys) {
	  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$6(getPrototypeOf$6(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$b(function () {
	  var test = {}; // FF44- legacy iterators case

	  return IteratorPrototype$2[ITERATOR$4].call(test) !== test;
	});
	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

	if ((NEW_ITERATOR_PROTOTYPE) && !has$1(IteratorPrototype$2, ITERATOR$4)) {
	  createNonEnumerableProperty$3(IteratorPrototype$2, ITERATOR$4, returnThis$2);
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$2,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
	var create$8 = objectCreate;
	var createPropertyDescriptor = createPropertyDescriptor$5;
	var setToStringTag$2 = setToStringTag$5;
	var Iterators$5 = iterators;

	var returnThis$1 = function () {
	  return this;
	};

	var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$8(IteratorPrototype$1, {
	    next: createPropertyDescriptor(1, next)
	  });
	  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators$5[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var isObject$6 = isObject$f;

	var aPossiblePrototype$1 = function (it) {
	  if (!isObject$6(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  }

	  return it;
	};

	/* eslint-disable no-proto -- safe */
	var anObject$6 = anObject$b;
	var aPossiblePrototype = aPossiblePrototype$1; // `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es/no-object-setprototypeof -- safe

	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;

	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) {
	    /* empty */
	  }

	  return function setPrototypeOf(O, proto) {
	    anObject$6(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var $$D = _export;
	var createIteratorConstructor = createIteratorConstructor$1;
	var getPrototypeOf$5 = objectGetPrototypeOf;
	var setToStringTag$1 = setToStringTag$5;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$9;
	var redefine$1 = redefine$3;
	var wellKnownSymbol$8 = wellKnownSymbol$j;
	var Iterators$4 = iterators;
	var IteratorsCore = iteratorsCore;
	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$3 = wellKnownSymbol$8('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () {
	  return this;
	};

	var defineIterator$3 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
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
	  var nativeIterator = IterablePrototype[ITERATOR$3] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY; // fix native

	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf$5(anyNativeIterator.call(new Iterable()));

	    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {


	      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      Iterators$4[TO_STRING_TAG] = returnThis;
	    }
	  } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;

	    defaultIterator = function values() {
	      return nativeIterator.call(this);
	    };
	  } // define iterator


	  if ((FORCED) && IterablePrototype[ITERATOR$3] !== defaultIterator) {
	    createNonEnumerableProperty$2(IterablePrototype, ITERATOR$3, defaultIterator);
	  }

	  Iterators$4[NAME] = defaultIterator; // export additional methods

	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine$1(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$D({
	      target: NAME,
	      proto: true,
	      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
	    }, methods);
	  }

	  return methods;
	};

	var toIndexedObject$4 = toIndexedObject$a;
	var Iterators$3 = iterators;
	var InternalStateModule$3 = internalState;
	var defineIterator$2 = defineIterator$3;
	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$3 = InternalStateModule$3.set;
	var getInternalState$1 = InternalStateModule$3.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
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
	  setInternalState$3(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$4(iterated),
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

	Iterators$3.Arguments = Iterators$3.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

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
	var global$6 = global$i;
	var classof$7 = classof$9;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$9;
	var Iterators$2 = iterators;
	var wellKnownSymbol$7 = wellKnownSymbol$j;
	var TO_STRING_TAG = wellKnownSymbol$7('toStringTag');

	for (var COLLECTION_NAME in DOMIterables$4) {
	  var Collection = global$6[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;

	  if (CollectionPrototype && classof$7(CollectionPrototype) !== TO_STRING_TAG) {
	    createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	  }

	  Iterators$2[COLLECTION_NAME] = Iterators$2.Array;
	}

	var parent$R = symbol$4;
	var symbol$3 = parent$R;

	var defineWellKnownSymbol$6 = defineWellKnownSymbol$l; // `Symbol.asyncDispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement

	defineWellKnownSymbol$6('asyncDispose');

	var defineWellKnownSymbol$5 = defineWellKnownSymbol$l; // `Symbol.dispose` well-known symbol
	// https://github.com/tc39/proposal-using-statement

	defineWellKnownSymbol$5('dispose');

	var defineWellKnownSymbol$4 = defineWellKnownSymbol$l; // `Symbol.matcher` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching

	defineWellKnownSymbol$4('matcher');

	var defineWellKnownSymbol$3 = defineWellKnownSymbol$l; // `Symbol.metadata` well-known symbol
	// https://github.com/tc39/proposal-decorators

	defineWellKnownSymbol$3('metadata');

	var defineWellKnownSymbol$2 = defineWellKnownSymbol$l; // `Symbol.observable` well-known symbol
	// https://github.com/tc39/proposal-observable

	defineWellKnownSymbol$2('observable');

	var defineWellKnownSymbol$1 = defineWellKnownSymbol$l; // `Symbol.patternMatch` well-known symbol
	// https://github.com/tc39/proposal-pattern-matching

	defineWellKnownSymbol$1('patternMatch');

	var defineWellKnownSymbol = defineWellKnownSymbol$l;
	defineWellKnownSymbol('replaceAll');

	var parent$Q = symbol$3; // TODO: Remove from `core-js@4`
	// TODO: Remove from `core-js@4`

	var symbol$2 = parent$Q;

	var symbol$1 = symbol$2;

	var toInteger$1 = toInteger$4;
	var toString$6 = toString$9;
	var requireObjectCoercible$2 = requireObjectCoercible$5; // `String.prototype.codePointAt` methods implementation

	var createMethod$3 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$6(requireObjectCoercible$2($this));
	    var position = toInteger$1(pos);
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
	  codeAt: createMethod$3(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$3(true)
	};

	var charAt = stringMultibyte.charAt;
	var toString$5 = toString$9;
	var InternalStateModule$2 = internalState;
	var defineIterator$1 = defineIterator$3;
	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$2 = InternalStateModule$2.set;
	var getInternalState = InternalStateModule$2.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator

	defineIterator$1(String, 'String', function (iterated) {
	  setInternalState$2(this, {
	    type: STRING_ITERATOR,
	    string: toString$5(iterated),
	    index: 0
	  }); // `%StringIteratorPrototype%.next` method
	  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
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

	var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var iterator$4 = WrappedWellKnownSymbolModule.f('iterator');

	var parent$P = iterator$4;
	var iterator$3 = parent$P;

	var parent$O = iterator$3;
	var iterator$2 = parent$O;

	var iterator$1 = iterator$2;

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof symbol$1 === "function" && typeof iterator$1 === "symbol") {
	    _typeof = function _typeof(obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function _typeof(obj) {
	      return obj && typeof symbol$1 === "function" && obj.constructor === symbol$1 && obj !== symbol$1.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	var floor = Math.floor;

	var mergeSort = function (array, comparefn) {
	  var length = array.length;
	  var middle = floor(length / 2);
	  return length < 8 ? insertionSort(array, comparefn) : merge$1(mergeSort(array.slice(0, middle), comparefn), mergeSort(array.slice(middle), comparefn), comparefn);
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

	var merge$1 = function (left, right, comparefn) {
	  var llength = left.length;
	  var rlength = right.length;
	  var lindex = 0;
	  var rindex = 0;
	  var result = [];

	  while (lindex < llength || rindex < rlength) {
	    if (lindex < llength && rindex < rlength) {
	      result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
	    } else {
	      result.push(lindex < llength ? left[lindex++] : right[rindex++]);
	    }
	  }

	  return result;
	};

	var arraySort = mergeSort;

	var fails$a = fails$l;

	var arrayMethodIsStrict$5 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$a(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
	    method.call(null, argument || function () {
	      throw 1;
	    }, 1);
	  });
	};

	var userAgent$2 = engineUserAgent;
	var firefox = userAgent$2.match(/firefox\/(\d+)/i);
	var engineFfVersion = !!firefox && +firefox[1];

	var UA = engineUserAgent;
	var engineIsIeOrEdge = /MSIE|Trident/.test(UA);

	var userAgent$1 = engineUserAgent;
	var webkit = userAgent$1.match(/AppleWebKit\/(\d+)\./);
	var engineWebkitVersion = !!webkit && +webkit[1];

	var $$C = _export;
	var aFunction$4 = aFunction$6;
	var toObject$8 = toObject$e;
	var toLength$8 = toLength$c;
	var toString$4 = toString$9;
	var fails$9 = fails$l;
	var internalSort = arraySort;
	var arrayMethodIsStrict$4 = arrayMethodIsStrict$5;
	var FF = engineFfVersion;
	var IE_OR_EDGE = engineIsIeOrEdge;
	var V8 = engineV8Version;
	var WEBKIT = engineWebkitVersion;
	var test$1 = [];
	var nativeSort = test$1.sort; // IE8-

	var FAILS_ON_UNDEFINED = fails$9(function () {
	  test$1.sort(undefined);
	}); // V8 bug

	var FAILS_ON_NULL = fails$9(function () {
	  test$1.sort(null);
	}); // Old WebKit

	var STRICT_METHOD$4 = arrayMethodIsStrict$4('sort');
	var STABLE_SORT = !fails$9(function () {
	  // feature detection can be too slow, so check engines versions
	  if (V8) return V8 < 70;
	  if (FF && FF > 3) return;
	  if (IE_OR_EDGE) return true;
	  if (WEBKIT) return WEBKIT < 603;
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
	      test$1.push({
	        k: chr + index,
	        v: value
	      });
	    }
	  }

	  test$1.sort(function (a, b) {
	    return b.v - a.v;
	  });

	  for (index = 0; index < test$1.length; index++) {
	    chr = test$1[index].k.charAt(0);
	    if (result.charAt(result.length - 1) !== chr) result += chr;
	  }

	  return result !== 'DGBEFHACIJK';
	});
	var FORCED$5 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$4 || !STABLE_SORT;

	var getSortCompare = function (comparefn) {
	  return function (x, y) {
	    if (y === undefined) return -1;
	    if (x === undefined) return 1;
	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
	    return toString$4(x) > toString$4(y) ? 1 : -1;
	  };
	}; // `Array.prototype.sort` method
	// https://tc39.es/ecma262/#sec-array.prototype.sort


	$$C({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$5
	}, {
	  sort: function sort(comparefn) {
	    if (comparefn !== undefined) aFunction$4(comparefn);
	    var array = toObject$8(this);
	    if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);
	    var items = [];
	    var arrayLength = toLength$8(array.length);
	    var itemsLength, index;

	    for (index = 0; index < arrayLength; index++) {
	      if (index in array) items.push(array[index]);
	    }

	    items = internalSort(items, getSortCompare(comparefn));
	    itemsLength = items.length;
	    index = 0;

	    while (index < itemsLength) array[index] = items[index++];

	    while (index < arrayLength) delete array[index++];

	    return array;
	  }
	});

	var path$n = path$s;

	var entryVirtual$k = function (CONSTRUCTOR) {
	  return path$n[CONSTRUCTOR + 'Prototype'];
	};

	var entryVirtual$j = entryVirtual$k;
	var sort$3 = entryVirtual$j('Array').sort;

	var sort$2 = sort$3;
	var ArrayPrototype$h = Array.prototype;

	var sort_1 = function (it) {
	  var own = it.sort;
	  return it === ArrayPrototype$h || it instanceof Array && own === ArrayPrototype$h.sort ? sort$2 : own;
	};

	var parent$N = sort_1;
	var sort$1 = parent$N;

	var sort = sort$1;

	/* eslint-disable es/no-array-prototype-indexof -- required for testing */


	var $$B = _export;
	var $indexOf = arrayIncludes$1.indexOf;
	var arrayMethodIsStrict$3 = arrayMethodIsStrict$5;
	var nativeIndexOf = [].indexOf;
	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var STRICT_METHOD$3 = arrayMethodIsStrict$3('indexOf'); // `Array.prototype.indexOf` method
	// https://tc39.es/ecma262/#sec-array.prototype.indexof

	$$B({
	  target: 'Array',
	  proto: true,
	  forced: NEGATIVE_ZERO || !STRICT_METHOD$3
	}, {
	  indexOf: function indexOf(searchElement
	  /* , fromIndex = 0 */
	  ) {
	    return NEGATIVE_ZERO // convert -0 to +0
	    ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$i = entryVirtual$k;
	var indexOf$3 = entryVirtual$i('Array').indexOf;

	var indexOf$2 = indexOf$3;
	var ArrayPrototype$g = Array.prototype;

	var indexOf_1 = function (it) {
	  var own = it.indexOf;
	  return it === ArrayPrototype$g || it instanceof Array && own === ArrayPrototype$g.indexOf ? indexOf$2 : own;
	};

	var parent$M = indexOf_1;
	var indexOf$1 = parent$M;

	var indexOf = indexOf$1;

	var $$A = _export;
	var $filter = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
	var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$3('filter'); // `Array.prototype.filter` method
	// https://tc39.es/ecma262/#sec-array.prototype.filter
	// with adding support of @@species

	$$A({
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

	var entryVirtual$h = entryVirtual$k;
	var filter$3 = entryVirtual$h('Array').filter;

	var filter$2 = filter$3;
	var ArrayPrototype$f = Array.prototype;

	var filter_1 = function (it) {
	  var own = it.filter;
	  return it === ArrayPrototype$f || it instanceof Array && own === ArrayPrototype$f.filter ? filter$2 : own;
	};

	var parent$L = filter_1;
	var filter$1 = parent$L;

	var filter = filter$1;

	var whitespaces$4 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var requireObjectCoercible$1 = requireObjectCoercible$5;
	var toString$3 = toString$9;
	var whitespaces$3 = whitespaces$4;
	var whitespace = '[' + whitespaces$3 + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

	var createMethod$2 = function (TYPE) {
	  return function ($this) {
	    var string = toString$3(requireObjectCoercible$1($this));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$2(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.es/ecma262/#sec-string.prototype.trimend
	  end: createMethod$2(2),
	  // `String.prototype.trim` method
	  // https://tc39.es/ecma262/#sec-string.prototype.trim
	  trim: createMethod$2(3)
	};

	var global$5 = global$i;
	var toString$2 = toString$9;
	var trim$1 = stringTrim.trim;
	var whitespaces$2 = whitespaces$4;
	var $parseFloat = global$5.parseFloat;
	var FORCED$4 = 1 / $parseFloat(whitespaces$2 + '-0') !== -Infinity; // `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string

	var numberParseFloat = FORCED$4 ? function parseFloat(string) {
	  var trimmedString = trim$1(toString$2(string));
	  var result = $parseFloat(trimmedString);
	  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

	var $$z = _export;
	var parseFloatImplementation = numberParseFloat; // `parseFloat` method
	// https://tc39.es/ecma262/#sec-parsefloat-string

	$$z({
	  global: true,
	  forced: parseFloat != parseFloatImplementation
	}, {
	  parseFloat: parseFloatImplementation
	});

	var path$m = path$s;
	var _parseFloat$2 = path$m.parseFloat;

	var parent$K = _parseFloat$2;
	var _parseFloat$1 = parent$K;

	var _parseFloat = _parseFloat$1;

	var toObject$7 = toObject$e;
	var toAbsoluteIndex$2 = toAbsoluteIndex$4;
	var toLength$7 = toLength$c; // `Array.prototype.fill` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.fill

	var arrayFill = function fill(value
	/* , start = 0, end = @length */
	) {
	  var O = toObject$7(this);
	  var length = toLength$7(O.length);
	  var argumentsLength = arguments.length;
	  var index = toAbsoluteIndex$2(argumentsLength > 1 ? arguments[1] : undefined, length);
	  var end = argumentsLength > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex$2(end, length);

	  while (endPos > index) O[index++] = value;

	  return O;
	};

	var $$y = _export;
	var fill$4 = arrayFill;
	// https://tc39.es/ecma262/#sec-array.prototype.fill

	$$y({
	  target: 'Array',
	  proto: true
	}, {
	  fill: fill$4
	}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

	var entryVirtual$g = entryVirtual$k;
	var fill$3 = entryVirtual$g('Array').fill;

	var fill$2 = fill$3;
	var ArrayPrototype$e = Array.prototype;

	var fill_1 = function (it) {
	  var own = it.fill;
	  return it === ArrayPrototype$e || it instanceof Array && own === ArrayPrototype$e.fill ? fill$2 : own;
	};

	var parent$J = fill_1;
	var fill$1 = parent$J;

	var fill = fill$1;

	var entryVirtual$f = entryVirtual$k;
	var values$3 = entryVirtual$f('Array').values;

	var parent$I = values$3;
	var values$2 = parent$I;

	var values$1 = values$2;
	var classof$6 = classof$9;
	var ArrayPrototype$d = Array.prototype;
	var DOMIterables$3 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var values_1 = function (it) {
	  var own = it.values;
	  return it === ArrayPrototype$d || it instanceof Array && own === ArrayPrototype$d.values // eslint-disable-next-line no-prototype-builtins -- safe
	  || DOMIterables$3.hasOwnProperty(classof$6(it)) ? values$1 : own;
	};

	var values = values_1;

	var $forEach = arrayIteration.forEach;
	var arrayMethodIsStrict$2 = arrayMethodIsStrict$5;
	var STRICT_METHOD$2 = arrayMethodIsStrict$2('forEach'); // `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach

	var arrayForEach = !STRICT_METHOD$2 ? function forEach(callbackfn
	/* , thisArg */
	) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
	} : [].forEach;

	var $$x = _export;
	var forEach$5 = arrayForEach; // `Array.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe

	$$x({
	  target: 'Array',
	  proto: true,
	  forced: [].forEach != forEach$5
	}, {
	  forEach: forEach$5
	});

	var entryVirtual$e = entryVirtual$k;
	var forEach$4 = entryVirtual$e('Array').forEach;

	var parent$H = forEach$4;
	var forEach$3 = parent$H;

	var forEach$2 = forEach$3;
	var classof$5 = classof$9;
	var ArrayPrototype$c = Array.prototype;
	var DOMIterables$2 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach_1 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$c || it instanceof Array && own === ArrayPrototype$c.forEach // eslint-disable-next-line no-prototype-builtins -- safe
	  || DOMIterables$2.hasOwnProperty(classof$5(it)) ? forEach$2 : own;
	};

	var forEach$1 = forEach_1;

	var $$w = _export;
	var isArray$8 = isArray$c; // `Array.isArray` method
	// https://tc39.es/ecma262/#sec-array.isarray

	$$w({
	  target: 'Array',
	  stat: true
	}, {
	  isArray: isArray$8
	});

	var path$l = path$s;
	var isArray$7 = path$l.Array.isArray;

	var parent$G = isArray$7;
	var isArray$6 = parent$G;

	var isArray$5 = isArray$6;

	var $$v = _export; // `Number.isNaN` method
	// https://tc39.es/ecma262/#sec-number.isnan

	$$v({
	  target: 'Number',
	  stat: true
	}, {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare -- NaN check
	    return number != number;
	  }
	});

	var path$k = path$s;
	var isNan$2 = path$k.Number.isNaN;

	var parent$F = isNan$2;
	var isNan$1 = parent$F;

	var isNan = isNan$1;

	var entryVirtual$d = entryVirtual$k;
	var concat$3 = entryVirtual$d('Array').concat;

	var concat$2 = concat$3;
	var ArrayPrototype$b = Array.prototype;

	var concat_1 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype$b || it instanceof Array && own === ArrayPrototype$b.concat ? concat$2 : own;
	};

	var parent$E = concat_1;
	var concat$1 = parent$E;

	var concat = concat$1;

	var $$u = _export;
	var global$4 = global$i;
	var userAgent = engineUserAgent;
	var slice$7 = [].slice;
	var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

	var wrap = function (scheduler) {
	  return function (handler, timeout
	  /* , ...arguments */
	  ) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice$7.call(arguments, 2) : undefined;
	    return scheduler(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func -- spec requirement
	      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
	    } : handler, timeout);
	  };
	}; // ie9- setTimeout & setInterval additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


	$$u({
	  global: true,
	  bind: true,
	  forced: MSIE
	}, {
	  // `setTimeout` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
	  setTimeout: wrap(global$4.setTimeout),
	  // `setInterval` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
	  setInterval: wrap(global$4.setInterval)
	});

	var path$j = path$s;
	var setTimeout$2 = path$j.setTimeout;

	var setTimeout$1 = setTimeout$2;

	var DESCRIPTORS$9 = descriptors;
	var fails$8 = fails$l;
	var objectKeys$1 = objectKeys$4;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject$6 = toObject$e;
	var IndexedObject$1 = indexedObject; // eslint-disable-next-line es/no-object-assign -- safe

	var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

	var defineProperty$9 = Object.defineProperty; // `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign

	var objectAssign = !$assign || fails$8(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS$9 && $assign({
	    b: 1
	  }, $assign(defineProperty$9({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$9(this, 'b', {
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
	  return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject$6(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;

	  while (argumentsLength > index) {
	    var S = IndexedObject$1(arguments[index++]);
	    var keys = getOwnPropertySymbols ? objectKeys$1(S).concat(getOwnPropertySymbols(S)) : objectKeys$1(S);
	    var length = keys.length;
	    var j = 0;
	    var key;

	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS$9 || propertyIsEnumerable.call(S, key)) T[key] = S[key];
	    }
	  }

	  return T;
	} : $assign;

	var $$t = _export;
	var assign$5 = objectAssign; // `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing

	$$t({
	  target: 'Object',
	  stat: true,
	  forced: Object.assign !== assign$5
	}, {
	  assign: assign$5
	});

	var path$i = path$s;
	var assign$4 = path$i.Object.assign;

	var parent$D = assign$4;
	var assign$3 = parent$D;

	var assign$2 = assign$3;

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
	})(componentEmitter);

	var Emitter = componentEmitter.exports;

	var anObject$5 = anObject$b;

	var iteratorClose$2 = function (iterator) {
	  var returnMethod = iterator['return'];

	  if (returnMethod !== undefined) {
	    return anObject$5(returnMethod.call(iterator)).value;
	  }
	};

	var anObject$4 = anObject$b;
	var iteratorClose$1 = iteratorClose$2; // call something on iterator step with safe closing on error

	var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject$4(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose$1(iterator);
	    throw error;
	  }
	};

	var wellKnownSymbol$6 = wellKnownSymbol$j;
	var Iterators$1 = iterators;
	var ITERATOR$2 = wellKnownSymbol$6('iterator');
	var ArrayPrototype$a = Array.prototype; // check on default Array iterator

	var isArrayIteratorMethod$2 = function (it) {
	  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype$a[ITERATOR$2] === it);
	};

	var classof$4 = classof$9;
	var Iterators = iterators;
	var wellKnownSymbol$5 = wellKnownSymbol$j;
	var ITERATOR$1 = wellKnownSymbol$5('iterator');

	var getIteratorMethod$7 = function (it) {
	  if (it != undefined) return it[ITERATOR$1] || it['@@iterator'] || Iterators[classof$4(it)];
	};

	var bind$9 = functionBindContext;
	var toObject$5 = toObject$e;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
	var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
	var toLength$6 = toLength$c;
	var createProperty$3 = createProperty$5;
	var getIteratorMethod$6 = getIteratorMethod$7; // `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from

	var arrayFrom = function from(arrayLike
	/* , mapfn = undefined, thisArg = undefined */
	) {
	  var O = toObject$5(arrayLike);
	  var C = typeof this == 'function' ? this : Array;
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod$6(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  if (mapping) mapfn = bind$9(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

	  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod$1(iteratorMethod))) {
	    iterator = iteratorMethod.call(O);
	    next = iterator.next;
	    result = new C();

	    for (; !(step = next.call(iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty$3(result, index, value);
	    }
	  } else {
	    length = toLength$6(O.length);
	    result = new C(length);

	    for (; length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty$3(result, index, value);
	    }
	  }

	  result.length = index;
	  return result;
	};

	var wellKnownSymbol$4 = wellKnownSymbol$j;
	var ITERATOR = wellKnownSymbol$4('iterator');
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

	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


	  Array.from(iteratorWithReturn, function () {
	    throw 2;
	  });
	} catch (error) {
	  /* empty */
	}

	var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;

	  try {
	    var object = {};

	    object[ITERATOR] = function () {
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

	var $$s = _export;
	var from$5 = arrayFrom;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	  // eslint-disable-next-line es/no-array-from -- required for testing
	  Array.from(iterable);
	}); // `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from

	$$s({
	  target: 'Array',
	  stat: true,
	  forced: INCORRECT_ITERATION
	}, {
	  from: from$5
	});

	var path$h = path$s;
	var from$4 = path$h.Array.from;

	var parent$C = from$4;
	var from$3 = parent$C;

	var from$2 = from$3;

	var getIteratorMethod$5 = getIteratorMethod$7;
	var getIteratorMethod_1 = getIteratorMethod$5;

	var parent$B = getIteratorMethod_1;
	var getIteratorMethod$4 = parent$B;

	var parent$A = getIteratorMethod$4;
	var getIteratorMethod$3 = parent$A;

	var getIteratorMethod$2 = getIteratorMethod$3;

	var path$g = path$s;
	var getOwnPropertySymbols$2 = path$g.Object.getOwnPropertySymbols;

	var parent$z = getOwnPropertySymbols$2;
	var getOwnPropertySymbols$1 = parent$z;

	var getOwnPropertySymbols = getOwnPropertySymbols$1;

	var getOwnPropertyDescriptor$3 = {exports: {}};

	var $$r = _export;
	var fails$7 = fails$l;
	var toIndexedObject$3 = toIndexedObject$a;
	var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var DESCRIPTORS$8 = descriptors;
	var FAILS_ON_PRIMITIVES$2 = fails$7(function () {
	  nativeGetOwnPropertyDescriptor(1);
	});
	var FORCED$3 = !DESCRIPTORS$8 || FAILS_ON_PRIMITIVES$2; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

	$$r({
	  target: 'Object',
	  stat: true,
	  forced: FORCED$3,
	  sham: !DESCRIPTORS$8
	}, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor(toIndexedObject$3(it), key);
	  }
	});

	var path$f = path$s;
	var Object$4 = path$f.Object;

	var getOwnPropertyDescriptor$2 = getOwnPropertyDescriptor$3.exports = function getOwnPropertyDescriptor(it, key) {
	  return Object$4.getOwnPropertyDescriptor(it, key);
	};

	if (Object$4.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor$2.sham = true;

	var parent$y = getOwnPropertyDescriptor$3.exports;
	var getOwnPropertyDescriptor$1 = parent$y;

	var getOwnPropertyDescriptor = getOwnPropertyDescriptor$1;

	var getBuiltIn$3 = getBuiltIn$8;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var anObject$3 = anObject$b; // all object keys, includes non-enumerable and symbols

	var ownKeys$6 = getBuiltIn$3('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule$1.f(anObject$3(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var $$q = _export;
	var DESCRIPTORS$7 = descriptors;
	var ownKeys$5 = ownKeys$6;
	var toIndexedObject$2 = toIndexedObject$a;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var createProperty$2 = createProperty$5; // `Object.getOwnPropertyDescriptors` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors

	$$q({
	  target: 'Object',
	  stat: true,
	  sham: !DESCRIPTORS$7
	}, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject$2(object);
	    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	    var keys = ownKeys$5(O);
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

	var parent$x = getOwnPropertyDescriptors$2;
	var getOwnPropertyDescriptors$1 = parent$x;

	var getOwnPropertyDescriptors = getOwnPropertyDescriptors$1;

	var defineProperties$4 = {exports: {}};

	var $$p = _export;
	var DESCRIPTORS$6 = descriptors;
	var defineProperties$3 = objectDefineProperties; // `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties

	$$p({
	  target: 'Object',
	  stat: true,
	  forced: !DESCRIPTORS$6,
	  sham: !DESCRIPTORS$6
	}, {
	  defineProperties: defineProperties$3
	});

	var path$d = path$s;
	var Object$3 = path$d.Object;

	var defineProperties$2 = defineProperties$4.exports = function defineProperties(T, D) {
	  return Object$3.defineProperties(T, D);
	};

	if (Object$3.defineProperties.sham) defineProperties$2.sham = true;

	var parent$w = defineProperties$4.exports;
	var defineProperties$1 = parent$w;

	var defineProperties = defineProperties$1;

	var defineProperty$8 = {exports: {}};

	var $$o = _export;
	var DESCRIPTORS$5 = descriptors;
	var objectDefinePropertyModile = objectDefineProperty; // `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty

	$$o({
	  target: 'Object',
	  stat: true,
	  forced: !DESCRIPTORS$5,
	  sham: !DESCRIPTORS$5
	}, {
	  defineProperty: objectDefinePropertyModile.f
	});

	var path$c = path$s;
	var Object$2 = path$c.Object;

	var defineProperty$7 = defineProperty$8.exports = function defineProperty(it, key, desc) {
	  return Object$2.defineProperty(it, key, desc);
	};

	if (Object$2.defineProperty.sham) defineProperty$7.sham = true;

	var parent$v = defineProperty$8.exports;
	var defineProperty$6 = parent$v;

	var defineProperty$5 = defineProperty$6;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var parent$u = defineProperty$6;
	var defineProperty$4 = parent$u;

	var defineProperty$3 = defineProperty$4;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;

	    defineProperty$3(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    defineProperty$3(obj, key, {
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

	var parent$t = isArray$6;
	var isArray$4 = parent$t;

	var isArray$3 = isArray$4;

	function _arrayWithHoles(arr) {
	  if (isArray$3(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof symbol$1 !== "undefined" && getIteratorMethod$2(arr) || arr["@@iterator"];

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

	var $$n = _export;
	var isObject$5 = isObject$f;
	var isArray$2 = isArray$c;
	var toAbsoluteIndex$1 = toAbsoluteIndex$4;
	var toLength$5 = toLength$c;
	var toIndexedObject$1 = toIndexedObject$a;
	var createProperty$1 = createProperty$5;
	var wellKnownSymbol$3 = wellKnownSymbol$j;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;
	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('slice');
	var SPECIES$1 = wellKnownSymbol$3('species');
	var nativeSlice = [].slice;
	var max$1 = Math.max; // `Array.prototype.slice` method
	// https://tc39.es/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects

	$$n({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$2
	}, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$1(this);
	    var length = toLength$5(O.length);
	    var k = toAbsoluteIndex$1(start, length);
	    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

	    var Constructor, result, n;

	    if (isArray$2(O)) {
	      Constructor = O.constructor; // cross-realm fallback

	      if (typeof Constructor == 'function' && (Constructor === Array || isArray$2(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$5(Constructor)) {
	        Constructor = Constructor[SPECIES$1];
	        if (Constructor === null) Constructor = undefined;
	      }

	      if (Constructor === Array || Constructor === undefined) {
	        return nativeSlice.call(O, k, fin);
	      }
	    }

	    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));

	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);

	    result.length = n;
	    return result;
	  }
	});

	var entryVirtual$c = entryVirtual$k;
	var slice$6 = entryVirtual$c('Array').slice;

	var slice$5 = slice$6;
	var ArrayPrototype$9 = Array.prototype;

	var slice_1 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$9 || it instanceof Array && own === ArrayPrototype$9.slice ? slice$5 : own;
	};

	var parent$s = slice_1;
	var slice$4 = parent$s;

	var parent$r = slice$4;
	var slice$3 = parent$r;

	var slice$2 = slice$3;

	var parent$q = from$3;
	var from$1 = parent$q;

	var from = from$1;

	function _arrayLikeToArray$2(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	function _unsupportedIterableToArray$2(o, minLen) {
	  var _context;

	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);

	  var n = slice$2(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest();
	}

	function _arrayWithoutHoles(arr) {
	  if (isArray$3(arr)) return _arrayLikeToArray$2(arr);
	}

	function _iterableToArray(iter) {
	  if (typeof symbol$1 !== "undefined" && getIteratorMethod$2(iter) != null || iter["@@iterator"] != null) return from(iter);
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
	}

	var symbol = symbol$3;

	var slice$1 = slice$4;

	var $$m = _export;
	var ownKeys$4 = ownKeys$6; // `Reflect.ownKeys` method
	// https://tc39.es/ecma262/#sec-reflect.ownkeys

	$$m({
	  target: 'Reflect',
	  stat: true
	}, {
	  ownKeys: ownKeys$4
	});

	var path$b = path$s;
	var ownKeys$3 = path$b.Reflect.ownKeys;

	var parent$p = ownKeys$3;
	var ownKeys$2 = parent$p;

	var ownKeys$1 = ownKeys$2;

	var $$l = _export;
	var $map = arrayIteration.map;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('map'); // `Array.prototype.map` method
	// https://tc39.es/ecma262/#sec-array.prototype.map
	// with adding support of @@species

	$$l({
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

	var entryVirtual$b = entryVirtual$k;
	var map$6 = entryVirtual$b('Array').map;

	var map$5 = map$6;
	var ArrayPrototype$8 = Array.prototype;

	var map_1 = function (it) {
	  var own = it.map;
	  return it === ArrayPrototype$8 || it instanceof Array && own === ArrayPrototype$8.map ? map$5 : own;
	};

	var parent$o = map_1;
	var map$4 = parent$o;

	var map$3 = map$4;

	var $$k = _export;
	var toObject$4 = toObject$e;
	var nativeKeys = objectKeys$4;
	var fails$6 = fails$l;
	var FAILS_ON_PRIMITIVES$1 = fails$6(function () {
	  nativeKeys(1);
	}); // `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys

	$$k({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$1
	}, {
	  keys: function keys(it) {
	    return nativeKeys(toObject$4(it));
	  }
	});

	var path$a = path$s;
	var keys$6 = path$a.Object.keys;

	var parent$n = keys$6;
	var keys$5 = parent$n;

	var keys$4 = keys$5;

	var $$j = _export; // `Date.now` method
	// https://tc39.es/ecma262/#sec-date.now

	$$j({
	  target: 'Date',
	  stat: true
	}, {
	  now: function now() {
	    return new Date().getTime();
	  }
	});

	var path$9 = path$s;
	path$9.Date.now;

	var aFunction$3 = aFunction$6;
	var isObject$4 = isObject$f;
	var slice = [].slice;
	var factories = {};

	var construct$3 = function (C, argsLength, args) {
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
	  var fn = aFunction$3(this);
	  var partArgs = slice.call(arguments, 1);

	  var boundFunction = function bound() {
	    var args = partArgs.concat(slice.call(arguments));
	    return this instanceof boundFunction ? construct$3(fn, args.length, args) : fn.apply(that, args);
	  };

	  if (isObject$4(fn.prototype)) boundFunction.prototype = fn.prototype;
	  return boundFunction;
	};

	var $$i = _export;
	var bind$8 = functionBind; // `Function.prototype.bind` method
	// https://tc39.es/ecma262/#sec-function.prototype.bind

	$$i({
	  target: 'Function',
	  proto: true
	}, {
	  bind: bind$8
	});

	var entryVirtual$a = entryVirtual$k;
	var bind$7 = entryVirtual$a('Function').bind;

	var bind$6 = bind$7;
	var FunctionPrototype = Function.prototype;

	var bind_1 = function (it) {
	  var own = it.bind;
	  return it === FunctionPrototype || it instanceof Function && own === FunctionPrototype.bind ? bind$6 : own;
	};

	var parent$m = bind_1;
	var bind$5 = parent$m;

	var bind$4 = bind$5;

	var $$h = _export;
	var isArray$1 = isArray$c;
	var nativeReverse = [].reverse;
	var test = [1, 2]; // `Array.prototype.reverse` method
	// https://tc39.es/ecma262/#sec-array.prototype.reverse
	// fix for Safari 12.0 bug
	// https://bugs.webkit.org/show_bug.cgi?id=188794

	$$h({
	  target: 'Array',
	  proto: true,
	  forced: String(test) === String(test.reverse())
	}, {
	  reverse: function reverse() {
	    // eslint-disable-next-line no-self-assign -- dirty hack
	    if (isArray$1(this)) this.length = this.length;
	    return nativeReverse.call(this);
	  }
	});

	var entryVirtual$9 = entryVirtual$k;
	var reverse$3 = entryVirtual$9('Array').reverse;

	var reverse$2 = reverse$3;
	var ArrayPrototype$7 = Array.prototype;

	var reverse_1 = function (it) {
	  var own = it.reverse;
	  return it === ArrayPrototype$7 || it instanceof Array && own === ArrayPrototype$7.reverse ? reverse$2 : own;
	};

	var parent$l = reverse_1;
	var reverse$1 = parent$l;

	var reverse = reverse$1;

	var $$g = _export;
	var toAbsoluteIndex = toAbsoluteIndex$4;
	var toInteger = toInteger$4;
	var toLength$4 = toLength$c;
	var toObject$3 = toObject$e;
	var arraySpeciesCreate$1 = arraySpeciesCreate$4;
	var createProperty = createProperty$5;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;
	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
	var max = Math.max;
	var min = Math.min;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
	// https://tc39.es/ecma262/#sec-array.prototype.splice
	// with adding support of @@species

	$$g({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT
	}, {
	  splice: function splice(start, deleteCount
	  /* , ...items */
	  ) {
	    var O = toObject$3(this);
	    var len = toLength$4(O.length);
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

	var entryVirtual$8 = entryVirtual$k;
	var splice$3 = entryVirtual$8('Array').splice;

	var splice$2 = splice$3;
	var ArrayPrototype$6 = Array.prototype;

	var splice_1 = function (it) {
	  var own = it.splice;
	  return it === ArrayPrototype$6 || it instanceof Array && own === ArrayPrototype$6.splice ? splice$2 : own;
	};

	var parent$k = splice_1;
	var splice$1 = parent$k;

	var splice = splice$1;

	var $$f = _export;
	var $includes = arrayIncludes$1.includes;
	// https://tc39.es/ecma262/#sec-array.prototype.includes

	$$f({
	  target: 'Array',
	  proto: true
	}, {
	  includes: function includes(el
	  /* , fromIndex = 0 */
	  ) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	}); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

	var entryVirtual$7 = entryVirtual$k;
	var includes$4 = entryVirtual$7('Array').includes;

	var isObject$3 = isObject$f;
	var classof$3 = classofRaw$1;
	var wellKnownSymbol$2 = wellKnownSymbol$j;
	var MATCH$1 = wellKnownSymbol$2('match'); // `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp

	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject$3(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$3(it) == 'RegExp');
	};

	var isRegExp = isRegexp;

	var notARegexp = function (it) {
	  if (isRegExp(it)) {
	    throw TypeError("The method doesn't accept regular expressions");
	  }

	  return it;
	};

	var wellKnownSymbol$1 = wellKnownSymbol$j;
	var MATCH = wellKnownSymbol$1('match');

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

	var $$e = _export;
	var notARegExp = notARegexp;
	var requireObjectCoercible = requireObjectCoercible$5;
	var toString$1 = toString$9;
	var correctIsRegExpLogic = correctIsRegexpLogic; // `String.prototype.includes` method
	// https://tc39.es/ecma262/#sec-string.prototype.includes

	$$e({
	  target: 'String',
	  proto: true,
	  forced: !correctIsRegExpLogic('includes')
	}, {
	  includes: function includes(searchString
	  /* , position = 0 */
	  ) {
	    return !!~toString$1(requireObjectCoercible(this)).indexOf(toString$1(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$6 = entryVirtual$k;
	var includes$3 = entryVirtual$6('String').includes;

	var arrayIncludes = includes$4;
	var stringIncludes = includes$3;
	var ArrayPrototype$5 = Array.prototype;
	var StringPrototype = String.prototype;

	var includes$2 = function (it) {
	  var own = it.includes;
	  if (it === ArrayPrototype$5 || it instanceof Array && own === ArrayPrototype$5.includes) return arrayIncludes;

	  if (typeof it === 'string' || it === StringPrototype || it instanceof String && own === StringPrototype.includes) {
	    return stringIncludes;
	  }

	  return own;
	};

	var parent$j = includes$2;
	var includes$1 = parent$j;

	var includes = includes$1;

	var $$d = _export;
	var fails$5 = fails$l;
	var toObject$2 = toObject$e;
	var nativeGetPrototypeOf = objectGetPrototypeOf;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
	var FAILS_ON_PRIMITIVES = fails$5(function () {
	  nativeGetPrototypeOf(1);
	}); // `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof

	$$d({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES,
	  sham: !CORRECT_PROTOTYPE_GETTER
	}, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return nativeGetPrototypeOf(toObject$2(it));
	  }
	});

	var path$8 = path$s;
	var getPrototypeOf$4 = path$8.Object.getPrototypeOf;

	var parent$i = getPrototypeOf$4;
	var getPrototypeOf$3 = parent$i;

	var getPrototypeOf$2 = getPrototypeOf$3;

	var DESCRIPTORS$4 = descriptors;
	var objectKeys = objectKeys$4;
	var toIndexedObject = toIndexedObject$a;
	var propertyIsEnumerable = objectPropertyIsEnumerable.f; // `Object.{ entries, values }` methods implementation

	var createMethod$1 = function (TO_ENTRIES) {
	  return function (it) {
	    var O = toIndexedObject(it);
	    var keys = objectKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;

	    while (length > i) {
	      key = keys[i++];

	      if (!DESCRIPTORS$4 || propertyIsEnumerable.call(O, key)) {
	        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
	      }
	    }

	    return result;
	  };
	};

	var objectToArray = {
	  // `Object.entries` method
	  // https://tc39.es/ecma262/#sec-object.entries
	  entries: createMethod$1(true),
	  // `Object.values` method
	  // https://tc39.es/ecma262/#sec-object.values
	  values: createMethod$1(false)
	};

	var $$c = _export;
	var $values = objectToArray.values; // `Object.values` method
	// https://tc39.es/ecma262/#sec-object.values

	$$c({
	  target: 'Object',
	  stat: true
	}, {
	  values: function values(O) {
	    return $values(O);
	  }
	});

	var path$7 = path$s;
	path$7.Object.values;

	var global$3 = global$i;
	var toString = toString$9;
	var trim = stringTrim.trim;
	var whitespaces$1 = whitespaces$4;
	var $parseInt = global$3.parseInt;
	var hex = /^[+-]?0[Xx]/;
	var FORCED$2 = $parseInt(whitespaces$1 + '08') !== 8 || $parseInt(whitespaces$1 + '0x16') !== 22; // `parseInt` method
	// https://tc39.es/ecma262/#sec-parseint-string-radix

	var numberParseInt = FORCED$2 ? function parseInt(string, radix) {
	  var S = trim(toString(string));
	  return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
	} : $parseInt;

	var $$b = _export;
	var parseIntImplementation = numberParseInt; // `parseInt` method
	// https://tc39.es/ecma262/#sec-parseint-string-radix

	$$b({
	  global: true,
	  forced: parseInt != parseIntImplementation
	}, {
	  parseInt: parseIntImplementation
	});

	var path$6 = path$s;
	var _parseInt$2 = path$6.parseInt;

	var parent$h = _parseInt$2;
	var _parseInt$1 = parent$h;

	var _parseInt = _parseInt$1;

	var fails$4 = fails$l;
	var whitespaces = whitespaces$4;
	var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
	// of whitespaces and has a correct name

	var stringTrimForced = function (METHOD_NAME) {
	  return fails$4(function () {
	    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
	  });
	};

	var $$a = _export;
	var $trim = stringTrim.trim;
	var forcedStringTrimMethod = stringTrimForced; // `String.prototype.trim` method
	// https://tc39.es/ecma262/#sec-string.prototype.trim

	$$a({
	  target: 'String',
	  proto: true,
	  forced: forcedStringTrimMethod('trim')
	}, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var entryVirtual$5 = entryVirtual$k;
	entryVirtual$5('String').trim;

	var $$9 = _export;
	var DESCRIPTORS$3 = descriptors;
	var create$7 = objectCreate; // `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create

	$$9({
	  target: 'Object',
	  stat: true,
	  sham: !DESCRIPTORS$3
	}, {
	  create: create$7
	});

	var path$5 = path$s;
	var Object$1 = path$5.Object;

	var create$6 = function create(P, D) {
	  return Object$1.create(P, D);
	};

	var parent$g = create$6;
	var create$5 = parent$g;

	var create$4 = create$5;

	var $$8 = _export;
	var getBuiltIn$2 = getBuiltIn$8;
	var fails$3 = fails$l;
	var $stringify = getBuiltIn$2('JSON', 'stringify');
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

	var FORCED$1 = fails$3(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify('\uDEAD') !== '"\\udead"';
	});

	if ($stringify) {
	  // `JSON.stringify` method
	  // https://tc39.es/ecma262/#sec-json.stringify
	  // https://github.com/tc39/proposal-well-formed-stringify
	  $$8({
	    target: 'JSON',
	    stat: true,
	    forced: FORCED$1
	  }, {
	    // eslint-disable-next-line no-unused-vars -- required for `.length`
	    stringify: function stringify(it, replacer, space) {
	      var result = $stringify.apply(null, arguments);
	      return typeof result == 'string' ? result.replace(re, fix) : result;
	    }
	  });
	}

	var core = path$s; // eslint-disable-next-line es/no-json -- safe

	if (!core.JSON) core.JSON = {
	  stringify: JSON.stringify
	}; // eslint-disable-next-line no-unused-vars -- required for `.length`

	var stringify$3 = function stringify(it, replacer, space) {
	  return core.JSON.stringify.apply(null, arguments);
	};

	var parent$f = stringify$3;
	var stringify$2 = parent$f;

	var stringify$1 = stringify$2;

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
	var RealHammer = Hammer$1;

	function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof symbol !== "undefined" && getIteratorMethod$2(o) || o["@@iterator"]; if (!it) { if (isArray$5(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray$1(o, minLen) { var _context21; if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = slice$1(_context21 = Object.prototype.toString.call(o)).call(_context21, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from$2(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

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
	 *
	 * @returns A brand new instance with all the supplied objects deeply merged.
	 */


	function pureDeepObjectAssign(base) {
	  var _context;

	  for (var _len = arguments.length, updates = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    updates[_key - 1] = arguments[_key];
	  }

	  return deepObjectAssign.apply(void 0, concat(_context = [{}, base]).call(_context, updates));
	}
	/**
	 * Deep version of object assign with additional deleting by the DELETE symbol.
	 *
	 * @param values - Objects to be deeply merged.
	 *
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
	 *
	 * @param values - Objects to be deeply merged.
	 *
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

	    return deepObjectAssignNonentry.apply(void 0, concat(_context2 = [deepObjectAssign(values[0], values[1])]).call(_context2, _toConsumableArray(slice$1(values).call(values, 2))));
	  }

	  var a = values[0];
	  var b = values[1];

	  var _iterator = _createForOfIteratorHelper$1(ownKeys$1(b)),
	      _step;

	  try {
	    for (_iterator.s(); !(_step = _iterator.n()).done;) {
	      var prop = _step.value;
	      if (!Object.prototype.propertyIsEnumerable.call(b, prop)) ;else if (b[prop] === DELETE) {
	        delete a[prop];
	      } else if (a[prop] !== null && b[prop] !== null && _typeof(a[prop]) === "object" && _typeof(b[prop]) === "object" && !isArray$5(a[prop]) && !isArray$5(b[prop])) {
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
	 *
	 * @returns Deep cloned object/array or unchanged a.
	 */


	function clone(a) {
	  if (isArray$5(a)) {
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

	var Hammer = typeof window !== "undefined" ? window.Hammer || RealHammer : function () {
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
	  hammer.on("tap", bind$4(_context3 = this._onTapOverlay).call(_context3, this));

	  this._cleanupQueue.push(function () {
	    hammer.destroy(); // FIXME: cleaning up hammer instances doesn't work (Timeline not removed
	    // from memory)
	  }); // block all touch events (except tap)


	  var events = ["tap", "doubletap", "press", "pinch", "pan", "panstart", "panmove", "panend"];

	  forEach$1(events).call(events, function (event) {
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


	Emitter(Activator.prototype); // The currently active activator

	Activator.current = null;
	/**
	 * Destroy the activator. Cleans up all created DOM and event listeners
	 */

	Activator.prototype.destroy = function () {
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
	  if (isArray$5(b)) {
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
	      } else if (isArray$5(b[prop])) {
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
	      if (_typeof(b[prop]) === "object" && b[prop] !== null && getPrototypeOf$2(b[prop]) === Object.prototype) {
	        if (a[prop] === undefined) {
	          a[prop] = deepExtend({}, b[prop], protoExtend); // NOTE: allowDeletion not propagated!
	        } else if (_typeof(a[prop]) === "object" && a[prop] !== null && getPrototypeOf$2(a[prop]) === Object.prototype) {
	          deepExtend(a[prop], b[prop], protoExtend); // NOTE: allowDeletion not propagated!
	        } else {
	          copyOrDelete(a, b, prop, allowDeletion);
	        }
	      } else if (isArray$5(b[prop])) {
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
	        log('Invalid type received for "' + option + '". Expected: ' + Validator.print(keys$4(refOptionObj)) + ". Received [" + optionType + '] "' + options[option] + '"');
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

	        if (isArray$5(object)) {
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
	        msg = ". Did you mean one of these: " + Validator.print(keys$4(options)) + Validator.printLocation(path, option);
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

	// https://tc39.es/ecma262/#sec-math.sign
	// eslint-disable-next-line es/no-math-sign -- safe

	var mathSign = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

	var $$7 = _export;
	var sign$3 = mathSign; // `Math.sign` method
	// https://tc39.es/ecma262/#sec-math.sign

	$$7({
	  target: 'Math',
	  stat: true
	}, {
	  sign: sign$3
	});

	var path$4 = path$s;
	var sign$2 = path$4.Math.sign;

	var parent$e = sign$2;
	var sign$1 = parent$e;

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

	  if (isArray$5(surfaceColors)) {
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

	  if (isArray$5(colormap)) {
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

	var $$6 = _export;
	var getBuiltIn$1 = getBuiltIn$8;
	var aFunction$2 = aFunction$6;
	var anObject$2 = anObject$b;
	var isObject$2 = isObject$f;
	var create$3 = objectCreate;
	var bind$3 = functionBind;
	var fails$2 = fails$l;
	var nativeConstruct = getBuiltIn$1('Reflect', 'construct'); // `Reflect.construct` method
	// https://tc39.es/ecma262/#sec-reflect.construct
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it

	var NEW_TARGET_BUG = fails$2(function () {
	  function F() {
	    /* empty */
	  }

	  return !(nativeConstruct(function () {
	    /* empty */
	  }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails$2(function () {
	  nativeConstruct(function () {
	    /* empty */
	  });
	});
	var FORCED = NEW_TARGET_BUG || ARGS_BUG;
	$$6({
	  target: 'Reflect',
	  stat: true,
	  forced: FORCED,
	  sham: FORCED
	}, {
	  construct: function construct(Target, args
	  /* , newTarget */
	  ) {
	    aFunction$2(Target);
	    anObject$2(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction$2(arguments[2]);
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
	      $args.push.apply($args, args);
	      return new (bind$3.apply(Target, $args))();
	    } // with altered newTarget, not support built-in constructors


	    var proto = newTarget.prototype;
	    var instance = create$3(isObject$2(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return isObject$2(result) ? result : instance;
	  }
	});

	var path$3 = path$s;
	var construct$2 = path$3.Reflect.construct;

	var parent$d = construct$2;
	var construct$1 = parent$d;

	var construct = construct$1;

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var parent$c = create$5;
	var create$2 = parent$c;

	var create$1 = create$2;

	var $$5 = _export;
	var setPrototypeOf$4 = objectSetPrototypeOf; // `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof

	$$5({
	  target: 'Object',
	  stat: true
	}, {
	  setPrototypeOf: setPrototypeOf$4
	});

	var path$2 = path$s;
	var setPrototypeOf$3 = path$2.Object.setPrototypeOf;

	var parent$b = setPrototypeOf$3;
	var setPrototypeOf$2 = parent$b;

	var parent$a = setPrototypeOf$2;
	var setPrototypeOf$1 = parent$a;

	var setPrototypeOf = setPrototypeOf$1;

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = create$1(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return _assertThisInitialized(self);
	}

	var parent$9 = getPrototypeOf$3;
	var getPrototypeOf$1 = parent$9;

	var getPrototypeOf = getPrototypeOf$1;

	function _getPrototypeOf(o) {
	  _getPrototypeOf = setPrototypeOf ? getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	var runtime = {exports: {}};

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (module) {
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

	    IteratorPrototype[iteratorSymbol] = function () {
	      return this;
	    };

	    var getProto = Object.getPrototypeOf;
	    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

	    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	      // This environment has a native %IteratorPrototype%; use it instead
	      // of the polyfill.
	      IteratorPrototype = NativeIteratorPrototype;
	    }

	    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	    GeneratorFunctionPrototype.constructor = GeneratorFunction;
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

	    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	      return this;
	    };

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

	    Gp[iteratorSymbol] = function () {
	      return this;
	    };

	    Gp.toString = function () {
	      return "[object Generator]";
	    };

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
	    // in case runtime.js accidentally runs in strict mode, we can escape
	    // strict mode using a global Function call. This could conceivably fail
	    // if a Content Security Policy forbids using Function, but in that case
	    // the proper solution is to fix the accidental strict mode problem. If
	    // you've misconfigured your bundler to force strict mode and applied a
	    // CSP to forbid Function, and you're not willing to fix either of those
	    // problems, please detail your unique predicament in a GitHub issue.
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	})(runtime);

	var regenerator = runtime.exports;

	var aFunction$1 = aFunction$6;
	var toObject$1 = toObject$e;
	var IndexedObject = indexedObject;
	var toLength$3 = toLength$c; // `Array.prototype.{ reduce, reduceRight }` methods implementation

	var createMethod = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aFunction$1(callbackfn);
	    var O = toObject$1(that);
	    var self = IndexedObject(O);
	    var length = toLength$3(O.length);
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
	        throw TypeError('Reduce of empty array with no initial value');
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

	var classof$2 = classofRaw$1;
	var global$2 = global$i;
	var engineIsNode = classof$2(global$2.process) == 'process';

	var $$4 = _export;
	var $reduce = arrayReduce.left;
	var arrayMethodIsStrict$1 = arrayMethodIsStrict$5;
	var CHROME_VERSION = engineV8Version;
	var IS_NODE = engineIsNode;
	var STRICT_METHOD$1 = arrayMethodIsStrict$1('reduce'); // Chrome 80-82 has a critical bug
	// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

	var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduce` method
	// https://tc39.es/ecma262/#sec-array.prototype.reduce

	$$4({
	  target: 'Array',
	  proto: true,
	  forced: !STRICT_METHOD$1 || CHROME_BUG
	}, {
	  reduce: function reduce(callbackfn
	  /* , initialValue */
	  ) {
	    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$4 = entryVirtual$k;
	var reduce$3 = entryVirtual$4('Array').reduce;

	var reduce$2 = reduce$3;
	var ArrayPrototype$4 = Array.prototype;

	var reduce_1 = function (it) {
	  var own = it.reduce;
	  return it === ArrayPrototype$4 || it instanceof Array && own === ArrayPrototype$4.reduce ? reduce$2 : own;
	};

	var parent$8 = reduce_1;
	var reduce$1 = parent$8;

	var reduce = reduce$1;

	var isArray = isArray$c;
	var toLength$2 = toLength$c;
	var bind$2 = functionBindContext; // `FlattenIntoArray` abstract operation
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

	var flattenIntoArray$1 = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? bind$2(mapper, thisArg, 3) : false;
	  var element;

	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

	      if (depth > 0 && isArray(element)) {
	        targetIndex = flattenIntoArray$1(target, original, element, toLength$2(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
	        target[targetIndex] = element;
	      }

	      targetIndex++;
	    }

	    sourceIndex++;
	  }

	  return targetIndex;
	};

	var flattenIntoArray_1 = flattenIntoArray$1;

	var $$3 = _export;
	var flattenIntoArray = flattenIntoArray_1;
	var toObject = toObject$e;
	var toLength$1 = toLength$c;
	var aFunction = aFunction$6;
	var arraySpeciesCreate = arraySpeciesCreate$4; // `Array.prototype.flatMap` method
	// https://tc39.es/ecma262/#sec-array.prototype.flatmap

	$$3({
	  target: 'Array',
	  proto: true
	}, {
	  flatMap: function flatMap(callbackfn
	  /* , thisArg */
	  ) {
	    var O = toObject(this);
	    var sourceLen = toLength$1(O.length);
	    var A;
	    aFunction(callbackfn);
	    A = arraySpeciesCreate(O, 0);
	    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return A;
	  }
	});

	var entryVirtual$3 = entryVirtual$k;
	var flatMap$3 = entryVirtual$3('Array').flatMap;

	var flatMap$2 = flatMap$3;
	var ArrayPrototype$3 = Array.prototype;

	var flatMap_1 = function (it) {
	  var own = it.flatMap;
	  return it === ArrayPrototype$3 || it instanceof Array && own === ArrayPrototype$3.flatMap ? flatMap$2 : own;
	};

	var parent$7 = flatMap_1;
	var flatMap$1 = parent$7;

	var flatMap = flatMap$1;

	var internalMetadata = {exports: {}};

	var fails$1 = fails$l;
	var freezing = !fails$1(function () {
	  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var $$2 = _export;
	var hiddenKeys = hiddenKeys$6;
	var isObject$1 = isObject$f;
	var has = has$b;
	var defineProperty$2 = objectDefineProperty.f;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
	var uid = uid$4;
	var FREEZING = freezing;
	var REQUIRED = false;
	var METADATA = uid('meta');
	var id = 0; // eslint-disable-next-line es/no-object-isextensible -- safe

	var isExtensible = Object.isExtensible || function () {
	  return true;
	};

	var setMetadata = function (it) {
	  defineProperty$2(it, METADATA, {
	    value: {
	      objectID: 'O' + id++,
	      // object ID
	      weakData: {} // weak collections IDs

	    }
	  });
	};

	var fastKey$1 = function (it, create) {
	  // return a primitive with prefix
	  if (!isObject$1(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

	  if (!has(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

	    if (!create) return 'E'; // add missing metadata

	    setMetadata(it); // return object ID
	  }

	  return it[METADATA].objectID;
	};

	var getWeakData = function (it, create) {
	  if (!has(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true; // not necessary to add metadata

	    if (!create) return false; // add missing metadata

	    setMetadata(it); // return the store of weak collections IDs
	  }

	  return it[METADATA].weakData;
	}; // add metadata on freeze-family methods calling


	var onFreeze = function (it) {
	  if (FREEZING && REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
	  return it;
	};

	var enable = function () {
	  meta.enable = function () {
	    /* empty */
	  };

	  REQUIRED = true;
	  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
	  var splice = [].splice;
	  var test = {};
	  test[METADATA] = 1; // prevent exposing of metadata key

	  if (getOwnPropertyNames(test).length) {
	    getOwnPropertyNamesModule.f = function (it) {
	      var result = getOwnPropertyNames(it);

	      for (var i = 0, length = result.length; i < length; i++) {
	        if (result[i] === METADATA) {
	          splice.call(result, i, 1);
	          break;
	        }
	      }

	      return result;
	    };

	    $$2({
	      target: 'Object',
	      stat: true,
	      forced: true
	    }, {
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

	var anObject$1 = anObject$b;
	var isArrayIteratorMethod = isArrayIteratorMethod$2;
	var toLength = toLength$c;
	var bind$1 = functionBindContext;
	var getIteratorMethod$1 = getIteratorMethod$7;
	var iteratorClose = iteratorClose$2;

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var iterate$2 = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = bind$1(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose(iterator);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject$1(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    }

	    return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod$1(iterable);
	    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = toLength(iterable.length); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && result instanceof Result) return result;
	      }

	      return new Result(false);
	    }

	    iterator = iterFn.call(iterable);
	  }

	  next = iterator.next;

	  while (!(step = next.call(iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator);
	      throw error;
	    }

	    if (typeof result == 'object' && result && result instanceof Result) return result;
	  }

	  return new Result(false);
	};

	var anInstance$2 = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) {
	    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
	  }

	  return it;
	};

	var $$1 = _export;
	var global$1 = global$i;
	var InternalMetadataModule = internalMetadata.exports;
	var fails = fails$l;
	var createNonEnumerableProperty = createNonEnumerableProperty$9;
	var iterate$1 = iterate$2;
	var anInstance$1 = anInstance$2;
	var isObject = isObject$f;
	var setToStringTag = setToStringTag$5;
	var defineProperty$1 = objectDefineProperty.f;
	var forEach = arrayIteration.forEach;
	var DESCRIPTORS$2 = descriptors;
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

	  if (!DESCRIPTORS$2 || typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
	    new NativeConstructor().entries().next();
	  }))) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    InternalMetadataModule.enable();
	  } else {
	    Constructor = wrapper(function (target, iterable) {
	      setInternalState$1(anInstance$1(target, Constructor, CONSTRUCTOR_NAME), {
	        type: CONSTRUCTOR_NAME,
	        collection: new NativeConstructor()
	      });
	      if (iterable != undefined) iterate$1(iterable, target[ADDER], {
	        that: target,
	        AS_ENTRIES: IS_MAP
	      });
	    });
	    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
	    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
	      var IS_ADDER = KEY == 'add' || KEY == 'set';

	      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
	        createNonEnumerableProperty(Constructor.prototype, KEY, function (a, b) {
	          var collection = getInternalState(this).collection;
	          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
	          var result = collection[KEY](a === 0 ? 0 : a, b);
	          return IS_ADDER ? this : result;
	        });
	      }
	    });
	    IS_WEAK || defineProperty$1(Constructor.prototype, 'size', {
	      configurable: true,
	      get: function () {
	        return getInternalState(this).collection.size;
	      }
	    });
	  }

	  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
	  exported[CONSTRUCTOR_NAME] = Constructor;
	  $$1({
	    global: true,
	    forced: true
	  }, exported);
	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
	  return Constructor;
	};

	var redefine = redefine$3;

	var redefineAll$1 = function (target, src, options) {
	  for (var key in src) {
	    if (options && options.unsafe && target[key]) target[key] = src[key];else redefine(target, key, src[key], options);
	  }

	  return target;
	};

	var getBuiltIn = getBuiltIn$8;
	var definePropertyModule = objectDefineProperty;
	var wellKnownSymbol = wellKnownSymbol$j;
	var DESCRIPTORS$1 = descriptors;
	var SPECIES = wellKnownSymbol('species');

	var setSpecies$1 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = definePropertyModule.f;

	  if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES]) {
	    defineProperty(Constructor, SPECIES, {
	      configurable: true,
	      get: function () {
	        return this;
	      }
	    });
	  }
	};

	var defineProperty = objectDefineProperty.f;
	var create = objectCreate;
	var redefineAll = redefineAll$1;
	var bind = functionBindContext;
	var anInstance = anInstance$2;
	var iterate = iterate$2;
	var defineIterator = defineIterator$3;
	var setSpecies = setSpecies$1;
	var DESCRIPTORS = descriptors;
	var fastKey = internalMetadata.exports.fastKey;
	var InternalStateModule = internalState;
	var setInternalState = InternalStateModule.set;
	var internalStateGetterFor = InternalStateModule.getterFor;
	var collectionStrong$2 = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance(that, C, CONSTRUCTOR_NAME);
	      setInternalState(that, {
	        type: CONSTRUCTOR_NAME,
	        index: create(null),
	        first: undefined,
	        last: undefined,
	        size: 0
	      });
	      if (!DESCRIPTORS) that.size = 0;
	      if (iterable != undefined) iterate(iterable, that[ADDER], {
	        that: that,
	        AS_ENTRIES: IS_MAP
	      });
	    });
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
	        if (DESCRIPTORS) state.size++;else that.size++; // add to index

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

	    redefineAll(C.prototype, {
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
	        if (DESCRIPTORS) state.size = 0;else that.size = 0;
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
	          if (DESCRIPTORS) state.size--;else that.size--;
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
	        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
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
	    redefineAll(C.prototype, IS_MAP ? {
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
	    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
	      get: function () {
	        return getInternalState(this).size;
	      }
	    });
	    return C;
	  },
	  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
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

	    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
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

	var collection$1 = collection$2;
	var collectionStrong$1 = collectionStrong$2; // `Map` constructor
	// https://tc39.es/ecma262/#sec-map-objects

	collection$1('Map', function (init) {
	  return function Map() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	}, collectionStrong$1);

	var path$1 = path$s;
	var map$2 = path$1.Map;

	var parent$6 = map$2;
	var map$1 = parent$6;

	var map = map$1;

	var collection = collection$2;
	var collectionStrong = collectionStrong$2; // `Set` constructor
	// https://tc39.es/ecma262/#sec-set-objects

	collection('Set', function (init) {
	  return function Set() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	}, collectionStrong);

	var path = path$s;
	var set$2 = path.Set;

	var parent$5 = set$2;
	var set$1 = parent$5;

	var set = set$1;

	var iterator = iterator$3;

	var anObject = anObject$b;
	var getIteratorMethod = getIteratorMethod$7;

	var getIterator$4 = function (it) {
	  var iteratorMethod = getIteratorMethod(it);

	  if (typeof iteratorMethod != 'function') {
	    throw TypeError(String(it) + ' is not iterable');
	  }

	  return anObject(iteratorMethod.call(it));
	};

	var getIterator$3 = getIterator$4;
	var getIterator_1 = getIterator$3;

	var parent$4 = getIterator_1;
	var getIterator$2 = parent$4;

	var parent$3 = getIterator$2;
	var getIterator$1 = parent$3;

	var getIterator = getIterator$1;

	var $ = _export;
	var $some = arrayIteration.some;
	var arrayMethodIsStrict = arrayMethodIsStrict$5;
	var STRICT_METHOD = arrayMethodIsStrict('some'); // `Array.prototype.some` method
	// https://tc39.es/ecma262/#sec-array.prototype.some

	$({
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

	var entryVirtual$2 = entryVirtual$k;
	var some$3 = entryVirtual$2('Array').some;

	var some$2 = some$3;
	var ArrayPrototype$2 = Array.prototype;

	var some_1 = function (it) {
	  var own = it.some;
	  return it === ArrayPrototype$2 || it instanceof Array && own === ArrayPrototype$2.some ? some$2 : own;
	};

	var parent$2 = some_1;
	var some$1 = parent$2;

	var some = some$1;

	var entryVirtual$1 = entryVirtual$k;
	var keys$3 = entryVirtual$1('Array').keys;

	var parent$1 = keys$3;
	var keys$2 = parent$1;

	var keys$1 = keys$2;
	var classof$1 = classof$9;
	var ArrayPrototype$1 = Array.prototype;
	var DOMIterables$1 = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var keys_1 = function (it) {
	  var own = it.keys;
	  return it === ArrayPrototype$1 || it instanceof Array && own === ArrayPrototype$1.keys // eslint-disable-next-line no-prototype-builtins -- safe
	  || DOMIterables$1.hasOwnProperty(classof$1(it)) ? keys$1 : own;
	};

	var keys = keys_1;

	var entryVirtual = entryVirtual$k;
	var entries$3 = entryVirtual('Array').entries;

	var parent = entries$3;
	var entries$2 = parent;

	var entries$1 = entries$2;
	var classof = classof$9;
	var ArrayPrototype = Array.prototype;
	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var entries_1 = function (it) {
	  var own = it.entries;
	  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.entries // eslint-disable-next-line no-prototype-builtins -- safe
	  || DOMIterables.hasOwnProperty(classof(it)) ? entries$1 : own;
	};

	var entries = entries_1;

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

	function ownKeys(object, enumerableOnly) { var keys = keys$4(object); if (getOwnPropertySymbols) { var symbols = getOwnPropertySymbols(object); if (enumerableOnly) { symbols = filter(symbols).call(symbols, function (sym) { return getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context32; forEach$1(_context32 = ownKeys(Object(source), true)).call(_context32, function (key) { _defineProperty(target, key, source[key]); }); } else if (getOwnPropertyDescriptors) { defineProperties(target, getOwnPropertyDescriptors(source)); } else { var _context33; forEach$1(_context33 = ownKeys(Object(source))).call(_context33, function (key) { defineProperty$5(target, key, getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !construct) return false; if (construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

	function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof symbol !== "undefined" && getIteratorMethod$2(o) || o["@@iterator"]; if (!it) { if (isArray$5(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

	function _unsupportedIterableToArray(o, minLen) { var _context31; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = slice$1(_context31 = Object.prototype.toString.call(o)).call(_context31, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return from$2(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

	function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
	/**
	 * Create new data pipe.
	 *
	 * @param from - The source data set or data view.
	 *
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
	 *
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

	    this._source = _source;
	    this._transformers = _transformers;
	    this._target = _target;
	    /**
	     * Bound listeners for use with `DataInterface['on' | 'off']`.
	     */

	    this._listeners = {
	      add: bind$4(_context = this._add).call(_context, this),
	      remove: bind$4(_context2 = this._remove).call(_context2, this),
	      update: bind$4(_context3 = this._update).call(_context3, this)
	    };
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
	     *
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
	   * Create a new data pipe factory. This is an internal constructor that
	   * should never be called from outside of this file.
	   *
	   * @param _source - The source data set or data view for this pipe.
	   */
	  function DataPipeUnderConstruction(_source) {
	    _classCallCheck(this, DataPipeUnderConstruction);

	    this._source = _source;
	    /**
	     * Array transformers used to transform items within the pipe. This is typed
	     * as any for the sake of simplicity.
	     */

	    this._transformers = [];
	  }
	  /**
	   * Filter the items.
	   *
	   * @param callback - A filtering function that returns true if given item
	   * should be piped and false if not.
	   *
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
	     *
	     * @typeParam TI - Target item type.
	     * @typeParam TP - Target item type's id property name.
	     *
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
	     *
	     * @typeParam TI - Target item type.
	     * @typeParam TP - Target item type's id property name.
	     *
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
	     *
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
	 *
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
	  /**
	   * Construct a new Queue.
	   *
	   * @param options - Queue configuration.
	   */
	  function Queue(options) {
	    _classCallCheck(this, Queue);

	    this._queue = [];
	    this._timeout = null;
	    this._extended = null; // options

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
	     *
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

	      forEach$1(_context5 = splice(_context6 = this._queue).call(_context6, 0)).call(_context5, function (entry) {
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

	    this._subscribers = {
	      "*": [],
	      add: [],
	      remove: [],
	      update: []
	    };
	    /**
	     * @deprecated Use on instead (PS: DataView.subscribe === DataView.on).
	     */

	    this.subscribe = DataSetPart.prototype.on;
	    /**
	     * @deprecated Use off instead (PS: DataView.unsubscribe === DataView.off).
	     */

	    this.unsubscribe = DataSetPart.prototype.off;
	  }
	  /**
	   * Trigger an event
	   *
	   * @param event - Event name.
	   * @param payload - Event payload.
	   * @param senderId - Id of the sender.
	   */


	  _createClass(DataSetPart, [{
	    key: "_trigger",
	    value: function _trigger(event, payload, senderId) {
	      var _context7, _context8;

	      if (event === "*") {
	        throw new Error("Cannot trigger event *");
	      }

	      forEach$1(_context7 = concat(_context8 = []).call(_context8, _toConsumableArray(this._subscribers[event]), _toConsumableArray(this._subscribers["*"]))).call(_context7, function (subscriber) {
	        subscriber(event, payload, senderId != null ? senderId : null);
	      });
	    }
	    /**
	     * Subscribe to an event, add an event listener.
	     *
	     * @remarks Non-function callbacks are ignored.
	     *
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
	     *
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
	 *
	 * @typeParam Item - The item type this stream is going to work with.
	 */


	var DataStream = /*#__PURE__*/function (_Symbol$iterator) {
	  /**
	   * Create a new data stream.
	   *
	   * @param pairs - The id, item pairs.
	   */
	  function DataStream(pairs) {
	    _classCallCheck(this, DataStream);

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
	     *
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
	     *
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
	     *
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
	     *
	     * @returns The object map of all id → item pairs from this stream.
	     */

	  }, {
	    key: "toObjectMap",
	    value: function toObjectMap() {
	      var map = create$4(null);

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
	     *
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
	     *
	     * @typeParam T - The type of the distinct value.
	     *
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
	     *
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
	     *
	     * @typeParam Mapped - The type of the item after mapping.
	     *
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
	     *
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
	     *
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
	     *
	     * @typeParam T - The type of the accumulated value.
	     *
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
	     *
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
	}(iterator);
	/**
	 * Add an id to given item if it doesn't have one already.
	 *
	 * @remarks
	 * The item will be modified.
	 *
	 * @param item - The item that will have an id after a call to this function.
	 * @param idProp - The key of the id property.
	 *
	 * @typeParam Item - Item type that may or may not have an id.
	 * @typeParam IdProp - Name of the property that contains the id.
	 *
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
	    _this3._queue = null; // correctly read optional arguments

	    if (data && !isArray$5(data)) {
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
	  /** @inheritDoc */


	  _createClass(DataSet, [{
	    key: "idProp",
	    get: function get() {
	      return this._idProp;
	    }
	    /**
	     * Set new options.
	     *
	     * @param options - The new options.
	     */

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
	     *
	     * @returns addedIds - Array with the ids (generated if not present) of the added items.
	     *
	     * @throws When an item with the same id as any of the added items already exists.
	     */

	  }, {
	    key: "add",
	    value: function add(data, senderId) {
	      var _this4 = this;

	      var addedIds = [];
	      var id;

	      if (isArray$5(data)) {
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
	     *
	     * @param data - Items to be updated (if the id is already present) or added (if the id is missing).
	     * @param senderId - Sender id.
	     *
	     * @returns updatedIds - The ids of the added (these may be newly generated if there was no id in the item from the data) or updated items.
	     *
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

	      if (isArray$5(data)) {
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

	      return concat(addedIds).call(addedIds, updatedIds);
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
	     *
	     * @param data - Updates (the id and optionally other props) to the items in this data set.
	     * @param senderId - Sender id.
	     *
	     * @returns updatedIds - The ids of the updated items.
	     *
	     * @throws When the supplied data is neither an item nor an array of items, when the ids are missing.
	     */

	  }, {
	    key: "updateOnly",
	    value: function updateOnly(data, senderId) {
	      var _context19,
	          _this6 = this;

	      if (!isArray$5(data)) {
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
	      } else if (isArray$5(first)) {
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
	     *
	     * @typeParam K - Field name type.
	     *
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

	      return reduce(_context21 = isArray$5(fields) ? // Use the supplied array
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
	     *
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
	     *
	     * @returns The ids of the removed items.
	     */

	  }, {
	    key: "remove",
	    value: function remove(id, senderId) {
	      var removedIds = [];
	      var removedItems = []; // force everything to be an array for simplicity

	      var ids = isArray$5(id) ? id : [id];

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
	     *
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
	     *
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
	     *
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
	     *
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
	     *
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
	     *
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
	     *
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

	        return new DataStream(_defineProperty({}, iterator, bind$4(_context26 = entries(this._data)).call(_context26, this._data)));
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

	    _this7.length = 0;
	    _this7._ids = new set(); // ids of the items currently in memory (just contains a boolean true)

	    _this7._options = options || {};
	    _this7._listener = bind$4(_context27 = _this7._onEvent).call(_context27, _assertThisInitialized(_this7));

	    _this7.setData(data);

	    return _this7;
	  }
	  /** @inheritDoc */


	  _createClass(DataView, [{
	    key: "idProp",
	    get: function get() {
	      return this.getDataSet().idProp;
	    } // TODO: implement a function .config() to dynamically update things like configured filter
	    // and trigger changes accordingly

	    /**
	     * Set a data source for the view.
	     *
	     * @param data - The instance containing data (directly or indirectly).
	     *
	     * @remarks
	     * Note that when the data view is bound to a data set it won't be garbage
	     * collected unless the data set is too. Use `dataView.setData(null)` or
	     * `dataView.dispose()` to enable garbage collection before you lose the last
	     * reference.
	     */

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
	        this._data = new DataSet();
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

	      if (isId(first) || isArray$5(first)) {
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

	        forEach$1(_context28 = this._data).call(_context28, callback, {
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

	      return this._data.stream(ids || _defineProperty({}, iterator, bind$4(_context30 = keys(this._ids)).call(_context30, this._ids)));
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

	      var _iterator14 = _createForOfIteratorHelper(ownKeys$1(DataView.prototype)),
	          _step14;

	      try {
	        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
	          var key = _step14.value;

	          defineProperty$5(this, key, replacement);
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
	 *
	 * @returns True if all expected values and methods match, false otherwise.
	 */


	function isDataSetLike(idProp, v) {
	  return _typeof(v) === "object" && v !== null && idProp === v.idProp && typeof v.add === "function" && typeof v.clear === "function" && typeof v.distinct === "function" && typeof forEach$1(v) === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof map$3(v) === "function" && typeof v.max === "function" && typeof v.min === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.remove === "function" && typeof v.setOptions === "function" && typeof v.stream === "function" && typeof v.update === "function" && typeof v.updateOnly === "function";
	}
	/**
	 * Check that given value is compatible with Vis Data View interface.
	 *
	 * @param idProp - The expected property to contain item id.
	 * @param v - The value to be tested.
	 *
	 * @returns True if all expected values and methods match, false otherwise.
	 */


	function isDataViewLike(idProp, v) {
	  return _typeof(v) === "object" && v !== null && idProp === v.idProp && typeof forEach$1(v) === "function" && typeof v.get === "function" && typeof v.getDataSet === "function" && typeof v.getIds === "function" && typeof v.length === "number" && typeof map$3(v) === "function" && typeof v.off === "function" && typeof v.on === "function" && typeof v.stream === "function" && isDataSetLike(idProp, v.getDataSet());
	}

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

	  if (isArray$5(rawData)) {
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


	Emitter(Graph3d.prototype);
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

	  forEach$1(top).call(top, function (obj) {
	    obj.screen = me._convert3Dto2D(obj.point);
	  });

	  forEach$1(bottom).call(bottom, function (obj) {
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

	  if (isArray$5(colormap)) {
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

	exports.DELETE = DELETE;
	exports.DataSet = DataSet;
	exports.DataStream = DataStream;
	exports.DataView = DataView;
	exports.Graph3d = Graph3d;
	exports.Graph3dCamera = Camera;
	exports.Graph3dFilter = Filter;
	exports.Graph3dPoint2d = Point2d_1;
	exports.Graph3dPoint3d = Point3d_1;
	exports.Graph3dSlider = Slider;
	exports.Graph3dStepNumber = StepNumber_1;
	exports.Queue = Queue;
	exports.createNewDataPipeFrom = createNewDataPipeFrom;
	exports.isDataSetLike = isDataSetLike;
	exports.isDataViewLike = isDataViewLike;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=vis-graph3d.js.map
