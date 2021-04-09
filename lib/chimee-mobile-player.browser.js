
/** chimeeMobilePlayer
 * chimee-mobile-player v0.3.0
 * (c) 2017-2021 yandeqiang
 * Released under MIT
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ChimeeMobilePlayer = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _library = true;

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode: _library ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.9 Object.getPrototypeOf(O)



_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return _objectGpo(_toObject(it));
  };
});

var getPrototypeOf = _core.Object.getPrototypeOf;

var getPrototypeOf$1 = createCommonjsModule(function (module) {
module.exports = { "default": getPrototypeOf, __esModule: true };
});

var _Object$getPrototypeOf = unwrapExports(getPrototypeOf$1);

var classCallCheck = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var _classCallCheck = unwrapExports(classCallCheck);

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object = _core.Object;
var defineProperty = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty$1 = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty, __esModule: true };
});

var _Object$defineProperty = unwrapExports(defineProperty$1);

var createClass = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var _createClass = unwrapExports(createClass);

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _redefine = _hide;

var _iterators = {};

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$1 = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$1) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$2 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$2] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var iterator = _wksExt.f('iterator');

var iterator$1 = createCommonjsModule(function (module) {
module.exports = { "default": iterator, __esModule: true };
});

unwrapExports(iterator$1);

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var defineProperty$2 = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$2($Symbol, name, { value: _wksExt.f(name) });
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$4
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
};

var _objectGopnExt = {
	f: f$5
};

var gOPD = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;





















var gOPD$1 = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN$1 = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function' && !!_objectGops.f;
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$1({}, 'a', {
    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$1(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
} : dP$1;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD$1(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$1(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = _fails(function () { _objectGops.f(1); });

_export(_export.S + _export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return _objectGops.f(_toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!_isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol = _core.Symbol;

var symbol$1 = createCommonjsModule(function (module) {
module.exports = { "default": symbol, __esModule: true };
});

unwrapExports(symbol$1);

var _typeof_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator$1);



var _symbol2 = _interopRequireDefault(symbol$1);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var _typeof = unwrapExports(_typeof_1);

var possibleConstructorReturn = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
});

var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */


var check = function (O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

var setPrototypeOf = _core.Object.setPrototypeOf;

var setPrototypeOf$1 = createCommonjsModule(function (module) {
module.exports = { "default": setPrototypeOf, __esModule: true };
});

unwrapExports(setPrototypeOf$1);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

var $Object$1 = _core.Object;
var create = function create(P, D) {
  return $Object$1.create(P, D);
};

var create$1 = createCommonjsModule(function (module) {
module.exports = { "default": create, __esModule: true };
});

var _Object$create = unwrapExports(create$1);

var inherits = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$1);



var _create2 = _interopRequireDefault(create$1);



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
});

var _inherits = unwrapExports(inherits);

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys = _core.Object.keys;

var keys$1 = createCommonjsModule(function (module) {
module.exports = { "default": keys, __esModule: true };
});

var _Object$keys = unwrapExports(keys$1);

// 20.1.2.3 Number.isInteger(number)

var floor$1 = Math.floor;
var _isInteger = function isInteger(it) {
  return !_isObject(it) && isFinite(it) && floor$1(it) === it;
};

// 20.1.2.3 Number.isInteger(number)


_export(_export.S, 'Number', { isInteger: _isInteger });

var isInteger = _core.Number.isInteger;

var isInteger$1 = createCommonjsModule(function (module) {
module.exports = { "default": isInteger, __esModule: true };
});

var _Number$isInteger = unwrapExports(isInteger$1);

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space = '[' + _stringWs + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = _fails(function () {
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(_defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

var $parseFloat = _global.parseFloat;
var $trim = _stringTrim.trim;

var _parseFloat = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// 20.1.2.12 Number.parseFloat(string)
_export(_export.S + _export.F * (Number.parseFloat != _parseFloat), 'Number', { parseFloat: _parseFloat });

var _parseFloat$1 = _core.Number.parseFloat;

var _parseFloat$2 = createCommonjsModule(function (module) {
module.exports = { "default": _parseFloat$1, __esModule: true };
});

var _Number$parseFloat = unwrapExports(_parseFloat$2);

/**
 * to check whether the object is defined or not
 */
function defined(obj) {
  return typeof obj !== 'undefined';
}
/**
 * is void element or not ? Means it will return true when val is undefined or null
 */
function isVoid(obj) {
  return obj === undefined || obj === null;
}
/**
 * to check whether a variable is array
 */
function isArray(arr) {
  return Array.isArray(arr);
}

/**
 * is it a function or not
 */
function isFunction(obj) {
  return typeof obj === 'function';
}

/**
 * is it an object or not
 */
function isObject(obj) {
  // incase of arrow function and array
  return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
}
/**
 * to tell you if it's a real number
 */
function isNumber(obj) {
  return typeof obj === 'number';
}
/**
 * to tell you if the val can be transfer into number
 */
function isNumeric(obj) {
  return !isArray(obj) && obj - _Number$parseFloat(obj) + 1 >= 0;
}
/**
 * is it an interget or not
 */
function isInteger$2(num) {
  return _Number$isInteger(num);
}

/**
 * return true when the value is "", {}, [], 0, null, undefined, false.
 */
function isEmpty(obj) {
  if (isArray(obj)) {
    return obj.length === 0;
  } else if (isObject(obj)) {
    return _Object$keys(obj).length === 0;
  } else {
    return !obj;
  }
}
/**
 * is it an event or not
 */
function isEvent(obj) {
  return obj instanceof Event || (obj && obj.originalEvent) instanceof Event;
}
/**
 * is it a string
 */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
 * is Boolean or not
 */
function isBoolean(bool) {
  return typeof bool === 'boolean';
}
/**
 * is a promise or not
 */
function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 */
function isPrimitive(val) {
  return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
}
/**
 * to test if a HTML node
 */
function isNode(obj) {
  return !!((typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string');
}
/**
 * to test if a HTML element
 */
function isElement(obj) {
  return !!((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string');
}
/**
 * check if node B is node A's posterrity or not
 */
function isPosterityNode(parent, child) {
  if (!isNode(parent) || !isNode(child)) {
    return false;
  }
  while (child.parentNode) {
    child = child.parentNode;
    if (child === parent) {
      return true;
    }
  }
  return false;
}
/**
 * check if the string is an HTMLString
 */
function isHTMLString(str) {
  return (/<[^>]+?>/.test(str)
  );
}
/**
 * check if is an error
 */
function isError(val) {
  return val instanceof Error;
}

function formatter(tag, msg) {
  if (!isString(tag)) throw new TypeError('Log\'s method only acccept string as argument, but not ' + tag + ' in ' + (typeof tag === 'undefined' ? 'undefined' : _typeof(tag)));
  if (!isString(msg)) return '[' + Log.GLOBAL_TAG + '] > ' + tag;
  tag = Log.FORCE_GLOBAL_TAG ? Log.GLOBAL_TAG : tag || Log.GLOBAL_TAG;
  return '[' + tag + '] > ' + msg;
}
/**
 * Log Object
 */

var Log = function () {
  function Log() {
    _classCallCheck(this, Log);
  }

  _createClass(Log, null, [{
    key: 'error',

    /**
     * equal to console.error, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {boolean}
     */
    value: function error(tag, msg) {
      if (!Log.ENABLE_ERROR) {
        return;
      }

      (console.error || console.warn || console.log).call(console, formatter(tag, msg));
    }
    /**
     * equal to console.info, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {boolean}
     */

    /**
     * @member {string}
     */

  }, {
    key: 'info',
    value: function info(tag, msg) {
      if (!Log.ENABLE_INFO) {
        return;
      }
      (console.info || console.log).call(console, formatter(tag, msg));
    }
    /**
     * equal to console.warn, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

  }, {
    key: 'warn',
    value: function warn(tag, msg) {
      if (!Log.ENABLE_WARN) {
        return;
      }
      (console.warn || console.log).call(console, formatter(tag, msg));
    }
    /**
     * equal to console.debug, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

  }, {
    key: 'debug',
    value: function debug(tag, msg) {
      if (!Log.ENABLE_DEBUG) {
        return;
      }
      (console.debug || console.log).call(console, formatter(tag, msg));
    }
    /**
     * equal to console.verbose, output `[${tag}] > {$msg}`
     * @param {string} tag optional, the header of log 
     * @param {string} msg the message
     */

  }, {
    key: 'verbose',
    value: function verbose(tag, msg) {
      if (!Log.ENABLE_VERBOSE) {
        return;
      }
      console.log(formatter(tag, msg));
    }
  }]);

  return Log;
}();

Log.GLOBAL_TAG = 'chimee';
Log.FORCE_GLOBAL_TAG = false;
Log.ENABLE_ERROR = true;
Log.ENABLE_INFO = true;
Log.ENABLE_WARN = true;
Log.ENABLE_DEBUG = true;
Log.ENABLE_VERBOSE = true;

var uaParser = createCommonjsModule(function (module, exports) {
/*!@license
 * UAParser.js v0.7.27
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */

(function (window, undefined) {

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.27',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 255;


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        has : function (str1, str2) {
            return typeof str1 === STR_TYPE ? str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1 : false;
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str, len) {
            str = str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            // Safari < 3.0
            oldSafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            },
            oldEdge : {
                version : {
                    '0.1'   : '12.',
                    '21'    : '13.',
                    '31'    : '14.',
                    '39'    : '15.',
                    '41'    : '16.',
                    '42'    : '17.',
                    '44'    : '18.'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /(?:edgios|edga|edg)\/([\w\.]+)/i                                   // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [
            /edge\/([\w\.]+)/i                                                  // Old Edge (Trident)
            ], [[VERSION, mapper.str, maps.browser.oldEdge.version], [NAME, 'Edge']], [

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,                // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i,                         // Opera
            ], [NAME, VERSION], [
            /opios[\/\s]+([\w\.]+)/i                                            // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, 'Opera Mini']], [
            /\sopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, 'Opera']], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer|instagram)[\/\s]?([\w\.]*)/i,  // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Instagram
            // Trident based
            /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,             // Avant/IEMobile/SlimBrowser
            /(ba?idubrowser)[\/\s]?([\w\.]+)/i,                                 // Baidu Browser
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,         // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i           // UCBrowser
            ], [VERSION, [NAME, 'UCBrowser']], [
            /(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i      // WeChat Desktop for Windows Built-in Browser
            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i                     // IE11
            ], [VERSION, [NAME, 'IE']], [
            /yabrowser\/([\w\.]+)/i                                             // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure Browser'], VERSION], [
            /focus\/([\w\.]+)/i                                                 // Firefox Focus
            ], [VERSION, [NAME, 'Firefox Focus']], [
            /opt\/([\w\.]+)/i                                                   // Opera Touch
            ], [VERSION, [NAME, 'Opera Touch']], [
            /coc_coc_browser\/([\w\.]+)/i                                       // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, 'Opera Coast']],
            [/xiaomi\/miuibrowser\/([\w\.]+)/i                                  // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [
            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [
            /(qihu|qhbrowser|qihoobrowser|360browser)/i                         // 360
            ], [[NAME, '360 Browser']], [
            /(oculus|samsung|sailfish)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 Browser'], VERSION], [                       // Oculus/Samsung/Sailfish Browser
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i           // QQBrowser/Baidu App/2345 Browser
            ], [NAME, VERSION], [
            /(MetaSr)[\/\s]?([\w\.]+)/i,                                        // SouGouBrowser
            /(LBBROWSER)/i                                                      // LieBao Browser
            ], [NAME], [

            // WebView
            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android with version
            ], [VERSION, [NAME, 'Facebook']], [
            /FBAN\/FBIOS|FB_IAB\/FB4A/i                                         // Facebook App for iOS & Android without version
            ], [[NAME, 'Facebook']], [
            /\s(electron)\/([\w\.]+)\ssafari/i,                                 // Electron-based App
            /safari\s(line)\/([\w\.]+)/i,                                       // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i                                         // Line App for Android
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+)\s.*safari\//i                                     // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [

            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, 'Chrome WebView'], VERSION], [

            /droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i         // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i      // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i                      // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i                   // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldSafari.version]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /ile\svr;\srv:([\w\.]+)\).+firefox/i                                // Firefox Reality
            ], [VERSION, [NAME, 'Firefox Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,                       // Other Firefox-based
            /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,                        // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]*)/i,                                         // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|armv?8e?l?)\b/i                                         // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            // Ordered by popularity
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i
            ], [MODEL, [VENDOR, 'Samsung'], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,
            /\ssamsung[\s-]([\w-]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, 'Samsung'], [TYPE, MOBILE]], [

            // Apple
            /\((ip(?:hone|od)[\s\w]*);/i                                        // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [
            /\((ipad);[\w\s\),;-]+apple/i,                                      // iPad
            /applecoremedia\/[\w\.]+\s\((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            // Huawei
            /\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i,
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, TABLET]], [
            /d\/huawei([\w\s-]+)[;\)]/i,
            /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,
            /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\s\w]+)(?:\sbuild|\))/i,                                   // Xiaomi POCO
            /\b;\s(\w+)\sbuild\/hm\1/i,                                         // Xiaomi Hongmi 'numeric' models
            /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,                       // Xiaomi Hongmi
            /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,              // Xiaomi Redmi
            /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i  // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
            /\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i                  // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [

            // OPPO
            /;\s(\w+)\sbuild.+\soppo/i,
            /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

            // Vivo
            /\svivo\s(\w+)(?:\sbuild|\))/i,
            /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\s(rmx[12]\d{3})(?:\sbuild|;)/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,
            /\smot[\s-](\w*)/i,
            /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
            /(nexus\s[45])/i,
            /lg[e;\s\/-]+((?!browser|netcast)\w+)/i,
            /\blg(\-?[\d\w]+)\sbuild/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[\w\-\s]+)/i,
            /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i        // Lenovo tablets
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia\s\d+)/i,
            /nokia[\s_-]?([\w\.-]*)/i
            ], [MODEL, [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /droid.+;\s(pixel\sc)[\s)]/i                                        // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [
            /droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i                    // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            // Sony
            /droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [
            /sony\stablet\s[ps]\sbuild\//i,
            /(?:sony)?sgp\w+(?:\sbuild\/|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, 'Sony'], [TYPE, TABLET]], [

            // OnePlus
            /\s(kb2005|in20[12]5|be20[12][59])\b/i,
            /\ba000(1)\sbuild/i,                                                // OnePlus
            /\boneplus\s(a\d{4})[\s)]/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)(\sbuild\/|\))/i,                                    // Kindle Fire without Silk
            /(kf[a-z]+)(\sbuild\/|\)).+silk\//i                                 // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i                    // Fire Phone
            ], [[MODEL, 'Fire Phone'], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

            // BlackBerry
            /\((playbook);[\w\s\),;-]+(rim)/i                                   // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, 'ASUS'], [TYPE, TABLET]], [
            /\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i
            ], [MODEL, [VENDOR, 'ASUS'], [TYPE, MOBILE]], [

            // HTC
            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,                    // HTC

            // ZTE
            /(zte)-(\w*)/i,
            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+;\s(m[1-5]\snote)\sbuild/i,
            /\bmz-([\w-]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft);\s(lumia[\s\w]+)/i,                                    // Microsoft Lumia
            /(lenovo)[_\s-]?([\w-]+)/i,                                         // Lenovo
            /linux;.+(jolla);/i,                                                // Jolla
            /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i                              // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i,                                 // Dell Streak
            /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,                   // Le Pan Tablets
            /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,                         // Trinity Tablets
            /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,                             // Gigaset Tablets
            /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i                            // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /\s(surface\sduo)\s/i                                               // Surface Duo
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, TABLET]], [
            /droid\s[\d\.]+;\s(fp\du?)\sbuild/i
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /\s(u304aa)\sbuild/i                                                // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /sie-(\w*)/i                                                        // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /[;\/]\s?(rct\w+)\sbuild/i                                          // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /[;\/\s](venue[\d\s]{2,7})\sbuild/i                                 // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i                                   // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i          // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /[;\/]\s(tm\d{3}\w+)\sbuild/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /;\s(k88)\sbuild/i                                                  // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /;\s(nx\d{3}j)\sbuild/i                                             // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /[;\/]\s?(gen\d{3})\sbuild.*49h/i                                   // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /[;\/]\s?(zur\d{3})\sbuild/i                                        // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /[;\/]\s?((zeki)?tb.*\b)\sbuild/i                                   // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /[;\/]\s([yr]\d{2})\sbuild/i,
            /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i                   // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /[;\/]\s?(ns-?\w{0,9})\sbuild/i                                     // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i                             // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones
            /[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i                                // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /;\s(ph-1)\s/i
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [                // Essential PH-1
            /[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i                    // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i                                 // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /[;\/]\s?tu_(1491)\sbuild/i                                         // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w\s]+)\sbuild/i                                           // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint)\s(\w+)/i                                                  // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [
            /droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i     // Zebra
            ], [MODEL, [VENDOR, 'Zebra'], [TYPE, TABLET]], [
            /droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, 'Zebra'], [TYPE, MOBILE]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3utch]+)/i                                       // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+;\s(shield)\sbuild/i                                        // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation\s[345portablevi]+)/i                                  // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [
            /[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i                        // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [
            /(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i,              // LG SmartTV
            ], [[VENDOR, 'LG'], [TYPE, SMARTTV]], [
            /(apple)\s?tv/i                                                     // Apple TV
            ], [VENDOR, [MODEL, 'Apple TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google'], [TYPE, SMARTTV]], [
            /droid.+aft([\w])(\sbuild\/|\))/i                                   // Fire TV
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [
            /[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i                 // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /droid.+;\s(glass)\s\d/i                                            // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [
            /droid\s[\d\.]+;\s(wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, 'Zebra'], [TYPE, WEARABLE]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i    // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i  // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize]], [
            /(android[\w\.\s\-]{0,9});.+build/i                                 // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']], [
            /(phone)/i
            ], [[TYPE, MOBILE]]
        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,                   // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,          // iOS
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac\sos\sx)\s?([\w\s\.]*)/i,
            /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i                         // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Mobile OSes                                                      // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/\s]([\w\.]+)/i,                                    // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, 'BlackBerry']], [
            /(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i       // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS']], [
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, 'Chromecast']], [
            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Console
            /(nintendo|playstation)\s([wids345portablevuch]+)/i,                // Nintendo/Playstation
            /(xbox);\s+xbox\s([^\);]+)/i,                                       // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // GNU/Linux based
            /(mint)[\/\s\(\)]?(\w*)/i,                                          // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]*)/i,                                        // Hurd/Linux
            /(gnu)\s?([\w\.]*)/i,                                               // GNU

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,  // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            /(haiku)\s(\w+)/i                                                   // Haiku
            ], [NAME, VERSION], [

            // Other
            /(sunos)\s?([\w\.\d]*)/i                                            // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,                             // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,  // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
            /(unix)\s?([\w\.]*)/i                                               // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////
    var UAParser = function (ua, extensions) {

        if (typeof ua === 'object') {
            extensions = ua;
            ua = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _ua = ua || ((typeof window !== 'undefined' && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var _browser = { name: undefined, version: undefined };
            mapper.rgx.call(_browser, _ua, _rgxmap.browser);
            _browser.major = util.major(_browser.version); // deprecated
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = { architecture: undefined };
            mapper.rgx.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = { vendor: undefined, model: undefined, type: undefined };
            mapper.rgx.call(_device, _ua, _rgxmap.device);
            return _device;
        };
        this.getEngine = function () {
            var _engine = { name: undefined, version: undefined };
            mapper.rgx.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = { name: undefined, version: undefined };
            mapper.rgx.call(_os, _ua, _rgxmap.os);
            return _os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? util.trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };

    ///////////
    // Export
    //////////


    // check js environment
    if ('object' !== UNDEF_TYPE) {
        // nodejs env
        if ('object' !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof(undefined) === 'function' && undefined.amd) {
            undefined(function () {
                return UAParser;
            });
        } else if (typeof window !== 'undefined') {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== 'undefined' && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : commonjsGlobal);
});
var uaParser_1 = uaParser.UAParser;

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _createProperty = function (object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () { SAFE_CLOSING = true; };
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$3] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var from_1 = _core.Array.from;

var from_1$1 = createCommonjsModule(function (module) {
module.exports = { "default": from_1, __esModule: true };
});

var _Array$from = unwrapExports(from_1$1);

var toConsumableArray = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _from2 = _interopRequireDefault(from_1$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
});

var _toConsumableArray = unwrapExports(toConsumableArray);

/**
 * the handler to generate an deep traversal handler
 * @param  {Function} fn the function you wanna run when you reach in the deep property
 * @return {Function}    the handler
 */
function genTraversalHandler(fn) {
  var setter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (target, key, value) {
    target[key] = value;
  };

  // use recursive to move what in source to the target
  // if you do not provide a target, we will create a new target
  function recursiveFn(source, target, key) {
    if (isArray(source) || isObject(source)) {
      target = isPrimitive(target) ? isObject(source) ? {} : [] : target;
      for (var _key in source) {
        // $FlowFixMe: support computed key here
        setter(target, _key, recursiveFn(source[_key], target[_key], _key));
        // target[key] = recursiveFn(source[key], target[key], key);
      }
      return target;
    }
    return fn(source, target, key);
  }
  return recursiveFn;
}
var _deepAssign = genTraversalHandler(function (val) {
  return val;
});
/**
 * deeply clone an object
 * @param  {Array|Object} source if you pass in other type, it will throw an error
 * @return {clone-target}        the new Object
 */
function deepClone(source) {
  if (isPrimitive(source)) {
    throw new TypeError('deepClone only accept non primitive type');
  }
  return _deepAssign(source);
}
/**
 * merge multiple objects
 * @param  {...Object} args [description]
 * @return {merge-object}         [description]
 */
function deepAssign() {
  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length < 2) {
    throw new Error('deepAssign accept two and more argument');
  }
  for (var i = args.length - 1; i > -1; i--) {
    if (isPrimitive(args[i])) {
      throw new TypeError('deepAssign only accept non primitive type');
    }
  }
  var target = args.shift();
  args.forEach(function (source) {
    return _deepAssign(source, target);
  });
  return target;
}

/**
 * camelize any string, e.g hello world -> helloWorld
 * @param  {string} str only accept string!
 * @return {string}     camelize string
 */
function camelize(str, isBig) {
  return str.replace(/(^|[^a-zA-Z]+)([a-zA-Z])/g, function (match, spilt, initials, index) {
    return !isBig && index === 0 ? initials.toLowerCase() : initials.toUpperCase();
  });
}
/**
 * hypenate any string e.g hello world -> hello-world
 * @param  {string} str only accept string
 * @return {string}
 */
function hypenate(str) {
  return camelize(str).replace(/([A-Z])/g, function (match) {
    return '-' + match.toLowerCase();
  });
}

/**
 * bind the function with some context. we have some fallback strategy here
 * @param {function} fn the function which we need to bind the context on
 * @param {any} context the context object
 */
function bind(fn, context) {
  if (fn.bind) {
    return fn.bind(context);
  } else if (fn.apply) {
    return function __autobind__() {
      for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return fn.apply(context, args);
    };
  } else {
    return function __autobind__() {
      for (var _len3 = arguments.length, args = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
    };
  }
}

/**
 * get an deep property
 */
function getDeepProperty(obj, keys) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$throwError = _ref.throwError,
      throwError = _ref$throwError === undefined ? false : _ref$throwError,
      backup = _ref.backup;

  if (isString(keys)) {
    keys = keys.split('.');
  }
  if (!isArray(keys)) {
    throw new TypeError('keys of getDeepProperty must be string or Array<string>');
  }
  var read = [];
  var target = obj;
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    if (isVoid(target)) {
      if (throwError) {
        throw new Error('obj' + (read.length > 0 ? '.' + read.join('.') : ' itself') + ' is ' + target);
      } else {
        return backup;
      }
    }
    target = target[key];
    read.push(key);
  }
  return target;
}

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

var _forOf = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
  var f = _ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)


var SPECIES = _wks('species');
var _speciesConstructor = function (O, D) {
  var C = _anObject(O).constructor;
  var S;
  return C === undefined || (S = _anObject(C)[SPECIES]) == undefined ? D : _aFunction(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

var process = _global.process;
var setTask = _global.setImmediate;
var clearTask = _global.clearImmediate;
var MessageChannel = _global.MessageChannel;
var Dispatch = _global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process) == 'process') {
    defer = function (id) {
      process.nextTick(_ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(_ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = _ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
    defer = function (id) {
      _global.postMessage(id + '', '*');
    };
    _global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
    defer = function (id) {
      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
        _html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(_ctx(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};

var macrotask = _task.set;
var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
var process$1 = _global.process;
var Promise$1 = _global.Promise;
var isNode$1 = _cof(process$1) == 'process';

var _microtask = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode$1 && (parent = process$1.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode$1) {
    notify = function () {
      process$1.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise$1.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(_global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

// 25.4.1.5 NewPromiseCapability(C)


function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = _aFunction(resolve);
  this.reject = _aFunction(reject);
}

var f$7 = function (C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
	f: f$7
};

var _perform = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var navigator = _global.navigator;

var _userAgent = navigator && navigator.userAgent || '';

var _promiseResolve = function (C, x) {
  _anObject(C);
  if (_isObject(x) && x.constructor === C) return x;
  var promiseCapability = _newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var _redefineAll = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else _hide(target, key, src[key]);
  } return target;
};

var SPECIES$1 = _wks('species');

var _setSpecies = function (KEY) {
  var C = typeof _core[KEY] == 'function' ? _core[KEY] : _global[KEY];
  if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
    configurable: true,
    get: function () { return this; }
  });
};

var task = _task.set;
var microtask = _microtask();




var PROMISE = 'Promise';
var TypeError$1 = _global.TypeError;
var process$2 = _global.process;
var versions = process$2 && process$2.versions;
var v8 = versions && versions.v8 || '';
var $Promise = _global[PROMISE];
var isNode$2 = _classof(process$2) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

var USE_NATIVE$1 = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode$2 || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && _userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(_global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = _perform(function () {
        if (isNode$2) {
          process$2.emit('unhandledRejection', value, promise);
        } else if (handler = _global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = _global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode$2 || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(_global, function () {
    var handler;
    if (isNode$2) {
      process$2.emit('rejectionHandled', promise);
    } else if (handler = _global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE$1) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    _anInstance(this, $Promise, PROMISE, '_h');
    _aFunction(executor);
    Internal.call(this);
    try {
      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$2 ? process$2.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = _ctx($resolve, promise, 1);
    this.reject = _ctx($reject, promise, 1);
  };
  _newPromiseCapability.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
_export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export(_export.S + _export.F * (_library || !USE_NATIVE$1), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
  }
});
_export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = _perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      _forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = _perform(function () {
      _forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

_export(_export.P + _export.R, 'Promise', { 'finally': function (onFinally) {
  var C = _speciesConstructor(this, _core.Promise || _global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return _promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return _promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

// https://github.com/tc39/proposal-promise-try




_export(_export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = _newPromiseCapability.f(this);
  var result = _perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

var promise = _core.Promise;

var promise$1 = createCommonjsModule(function (module) {
module.exports = { "default": promise, __esModule: true };
});

var _Promise = unwrapExports(promise$1);

// **********************  judgement   ************************
/**
 * check if the code running in browser environment (not include worker env)
 * @returns {Boolean}
 */
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// **********************  对象操作  ************************
/**
 * 转变一个类数组对象为数组
 */
function makeArray(obj) {
  return _Array$from(obj);
}

/**
 * sort Object attributes by function
 * and transfer them into array
 * @param  {Object} obj Object form from numric
 * @param  {Function} fn sort function
 * @return {Array} the sorted attirbutes array
 */
function transObjectAttrIntoArray(obj) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
    return +a - +b;
  };

  return _Object$keys(obj).sort(fn).reduce(function (order, key) {
    return order.concat(obj[key]);
  }, []);
}
/**
 * run a queue one by one.If include function reject or return false it will stop
 * @param  {Array} queue the queue which we want to run one by one
 * @return {Promise}    tell us whether a queue run finished
 */
function runRejectableQueue(queue) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return new _Promise(function (resolve, reject) {
    var step = function step(index) {
      if (index >= queue.length) {
        resolve();
        return;
      }
      var result = isFunction(queue[index]) ? queue[index].apply(queue, _toConsumableArray(args)) : queue[index];
      if (result === false) return reject('stop');
      return _Promise.resolve(result).then(function () {
        return step(index + 1);
      }).catch(function (err) {
        return reject(err || 'stop');
      });
    };
    step(0);
  });
}
/**
 * run a queue one by one.If include function return false it will stop
 * @param  {Array} queue the queue which we want to run one by one
 * @return {boolean} tell the user if the queue run finished
 */
function runStoppableQueue(queue) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  var step = function step(index) {
    if (index >= queue.length) {
      return true;
    }
    var result = isFunction(queue[index]) ? queue[index].apply(queue, _toConsumableArray(args)) : queue[index];
    if (result === false) return false;
    return step(++index);
  };
  return step(0);
}

// requestAnimationFrame
var raf = inBrowser && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame) || function (cb) {
  return setTimeout(cb, 17);
};

// cancelAnimationFrame
var caf = inBrowser && (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame) || function (id) {
  clearTimeout(id);
};

// 根据要求的位数，将9格式化为 09\009\0009...
function strRepeat(num, bit) {
  var pBit = bit;
  num = '' + (num || '');
  var numLen = num.length;
  bit = (bit || numLen) - numLen;
  var paddingStr = bit > 0 ? num.repeat ? '0'.repeat(bit) : new Array(bit + 1).join('0') : '';
  return (paddingStr + num).slice(0, pBit);
}

// video 时间格式化
function formatTime(time) {
  var hh = Math.floor(time / 3600);
  time = Math.floor(time % 3600);
  var mm = strRepeat(Math.floor(time / 60), 2);
  time = Math.floor(time % 60);
  var ss = strRepeat(time, 2);
  return hh >= 1 ? hh + ':' + mm + ':' + ss : mm + ':' + ss;
}

// 19.1.2.1 Object.assign(target, source, ...)






var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign = _core.Object.assign;

var assign$1 = createCommonjsModule(function (module) {
module.exports = { "default": assign, __esModule: true };
});

var _Object$assign = unwrapExports(assign$1);

/**
* @module event
* @author huzunjie
* @description 自定义事件基础类
*/

/* 缓存事件监听方法及包装，内部数据格式：
 * targetIndex_<type:'click|mouseup|done'>: [ [
 *   function(){ ... handler ... },
 *   function(){ ... handlerWrap ... handler.apply(target, arguments) ... },
 *   isOnce
 * ]]
 */
var _evtListenerCache = _Object$create(null);
_evtListenerCache.count = 0;

/**
 * 得到某对象的某事件类型对应的监听队列数组
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型(这里的时间类型不只是名称，还是缓存标识，可以通过添加后缀来区分)
 * @return {Array}
 */
function getEvtTypeCache(target, type) {

  var evtId = target.__evt_id;
  if (!evtId) {

    /* 设置__evt_id不可枚举 */
    Object.defineProperty(target, '__evt_id', {
      writable: true,
      enumerable: false,
      configurable: true
    });

    /* 空对象初始化绑定索引 */
    evtId = target.__evt_id = ++_evtListenerCache.count;
  }

  var typeCacheKey = evtId + '_' + type;
  var evtTypeCache = _evtListenerCache[typeCacheKey];
  if (!evtTypeCache) {
    evtTypeCache = _evtListenerCache[typeCacheKey] = [];
  }

  return evtTypeCache;
}

/**
 * 触发事件监听方法
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Object} eventObj 触发事件时要传回的event对象
 * @return {undefined}
 */
function emitEventCache(target, type, eventObj) {
  var evt = _Object$create(null);
  evt.type = type;
  evt.target = target;
  if (eventObj) {
    _Object$assign(evt, isObject(eventObj) ? eventObj : { data: eventObj });
  }
  getEvtTypeCache(target, type).forEach(function (item) {
    (item[1] || item[0]).apply(target, [evt]);
  });
}

/**
 * 添加事件监听到缓存
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Function} handler 监听函数
 * @param {Boolean} isOnce 是否单次执行
 * @param {Function} handlerWrap
 * @return {undefined}
 */
function addEventCache(target, type, handler) {
  var isOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var handlerWrap = arguments[4];

  if (isFunction(isOnce) && !handlerWrap) {
    handlerWrap = isOnce;
    isOnce = undefined;
  }
  var handlers = [handler, undefined, isOnce];
  if (isOnce && !handlerWrap) {
    handlerWrap = function handlerWrap() {
      removeEventCache(target, type, handler, isOnce);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(target, args);
    };
  }
  if (handlerWrap) {
    handlers[1] = handlerWrap;
  }
  getEvtTypeCache(target, type).push(handlers);
}

/**
 * 移除事件监听
 * @param  {Object}  target 发生事件的对象
 * @param {String} type 事件类型
 * @param {Function} handler 监听函数
 * @return {undefined}
 */
function removeEventCache(target, type, handler) {
  var isOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var typeCache = getEvtTypeCache(target, type);

  if (handler || isOnce) {
    /* 有指定 handler 则清除对应监听 */
    var handlerId = -1;
    var handlerWrap = void 0;
    typeCache.find(function (item, i) {
      if ((!handler || item[0] === handler) && (!isOnce || item[2])) {
        handlerId = i;
        handlerWrap = item[1];
        return true;
      }
    });
    if (handlerId !== -1) {
      typeCache.splice(handlerId, 1);
    }
    return handlerWrap;
  } else {
    /* 未指定 handler 则清除type对应的所有监听 */
    typeCache.length = 0;
  }
}

/**
 * @class CustEvent
 * @description
 * Event 自定义事件类
 * 1. 可以使用不传参得到的实例作为eventBus使用
 * 2. 可以通过指定target，用多个实例操作同一target对象的事件管理
 * 3. 当设定target时，可以通过设置assign为true，来给target实现"on\once\off\emit"方法
 * @param  {Object}  target 发生事件的对象（空则默认为event实例）
 * @param  {Boolean}  assign 是否将"on\once\off\emit"方法实现到target对象上
 * @return {event}
 */
var CustEvent = function () {
  function CustEvent(target, assign) {
    var _this = this;

    _classCallCheck(this, CustEvent);

    /* 设置__target不可枚举 */
    Object.defineProperty(this, '__target', {
      writable: true,
      enumerable: false,
      configurable: true
    });
    this.__target = this;

    if (target) {

      if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object') {
        throw new Error('CusEvent target are not object');
      }
      this.__target = target;

      /* 为target实现on\once\off\emit */
      if (assign) {
        ['on', 'once', 'off', 'emit'].forEach(function (mth) {
          target[mth] = _this[mth];
        });
      }
    }
  }

  /**
   * 添加事件监听
   * @param {String} type 事件类型
   * @param {Function} handler 监听函数
   * @param {Boolean} isOnce 单次监听类型
   * @return {event}
   */


  _createClass(CustEvent, [{
    key: 'on',
    value: function on(type, handler) {
      var isOnce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      addEventCache(this.__target, type, handler, isOnce);
      return this;
    }

    /**
     * 添加事件监听,并且只执行一次
     * @param {String} type 事件类型
     * @param {Function} handler 监听函数
     * @return {event}
     */

  }, {
    key: 'once',
    value: function once(type, handler) {
      return this.on(type, handler, true);
    }

    /**
     * 移除事件监听
     * @param {String} type 事件类型
     * @param {Function} handler 监听函数(不指定handler则清除type对应的所有事件监听)
     * @param {Boolean} isOnce 单次监听类型
     * @return {event}
     */

  }, {
    key: 'off',
    value: function off(type, handler) {
      var isOnce = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      removeEventCache(this.__target, type, handler, isOnce);
      return this;
    }

    /**
     * 触发事件监听函数
     * @param {String} type 事件类型
     * @return {event}
     */

  }, {
    key: 'emit',
    value: function emit(type, data) {
      emitEventCache(this.__target, type, { data: data });
      return this;
    }
  }]);

  return CustEvent;
}();

/**
 * @module dom
 * @author huzunjie
 * @description 一些常用的DOM判断及操作方法，可以使用dom.$('*')包装DOM，实现类jQuery的链式操作；当然这里的静态方法也可以直接使用。
 */

var _divEl = inBrowser ? document.createElement('div') : {};
var _textAttrName = 'innerText';
'textContent' in _divEl && (_textAttrName = 'textContent');
var _arrPrototype = Array.prototype;

/**
 * 读取HTML元素属性值
 * @param {HTMLElement} el 目标元素
 * @param {String} attrName 目标属性名称
 * @return {String}
 */
function getAttr(el, attrName) {
  return el.getAttribute(attrName);
}

/**
 * 设置HTML元素属性值
 * @param {HTMLElement} el 目标元素
 * @param {String} attrName 目标属性名称
 * @param {String} attrVal 目标属性值
 */
function setAttr(el, attrName, attrVal) {
  if (attrVal === undefined) {
    el.removeAttribute(attrName);
  } else {
    el.setAttribute(attrName, attrVal);
  }
}

/**
 * 为HTML元素添加className
 * @param {HTMLElement} el 目标元素
 * @param {String} cls 要添加的className（多个以空格分割）
 */
function addClassName(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  var clsArr = cls.split(/\s+/);
  if (el.classList) {
    clsArr.forEach(function (c) {
      return el.classList.add(c);
    });
  } else {
    var curCls = ' ' + (el.className || '') + ' ';
    clsArr.forEach(function (c) {
      curCls.indexOf(' ' + c + ' ') === -1 && (curCls += ' ' + c);
    });
    el.className = curCls.trim();
  }
}

/**
 * 为HTML元素移除className
 * @param {HTMLElement} el 目标元素
 * @param {String} cls 要移除的className（多个以空格分割）
 */
function removeClassName(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  var clsArr = cls.split(/\s+/);
  if (el.classList) {
    clsArr.forEach(function (c) {
      return el.classList.remove(c);
    });
  } else {
    var curCls = ' ' + el.className + ' ';
    clsArr.forEach(function (c) {
      var tar = ' ' + c + ' ';
      while (curCls.indexOf(tar) !== -1) {
        curCls = curCls.replace(tar, ' ');
      }
    });
    el.className = curCls.trim();
  }
}

/**
 * 检查HTML元素是否已设置className
 * @param {HTMLElement} el 目标元素
 * @param {String} className 要检查的className
 * @return {Boolean}
 */
function hasClassName(el, className) {
  return new RegExp('(?:^|\\s)' + className + '(?=\\s|$)').test(el.className);
}

/**
 * addEventListener 是否已支持 passive
 * @return {Boolean}
 */
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  if (inBrowser) window.addEventListener('test', null, opts);
} catch (e) {
  console.error(e);
}

/**
 * 为HTML元素移除事件监听
 * @param {HTMLElement} el 目标元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} once 是否只监听一次
 * @param {Boolean} capture 是否在捕获阶段的监听
 */
function removeEvent(el, type, handler) {
  var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (capture !== undefined && !isBoolean(capture) && supportsPassive) {
    capture = { passive: true };
  }
  if (once) {
    /* 尝试从缓存中读取包装后的方法 */
    var handlerWrap = removeEventCache(el, type + '_once', handler);
    if (handlerWrap) {
      handler = handlerWrap;
    }
  }
  el.removeEventListener(type, handler, capture);
}

/**
 * 为HTML元素添加事件监听
 * @param {HTMLElement} el 目标元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} once 是否只监听一次
 * @param {Boolean|Object} capture 是否在捕获阶段监听，这里也可以传入 { passive: true } 表示被动模式
 */
function addEvent(el, type, handler) {
  var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (capture !== undefined && !isBoolean(capture) && supportsPassive) {
    capture = { passive: true };
  }
  if (once) {
    var oldHandler = handler;
    handler = function () {
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        oldHandler.apply(this, args);
        removeEvent(el, type, handler, once, capture);
      };
    }();
    /* 将包装后的方法记录到缓存中 */
    addEventCache(el, type + '_once', oldHandler, handler);
  }

  el.addEventListener(type, handler, capture);
}

/**
 * 为HTML元素添加事件代理
 * @param {HTMLElement} el 目标元素
 * @param {String} selector 要被代理的元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} capture 是否在捕获阶段监听
 */
function addDelegate(el, selector, type, handler) {
  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (capture !== undefined && !isBoolean(capture) && supportsPassive) {
    capture = { passive: true };
  }
  var handlerWrap = function handlerWrap(e) {
    var targetElsArr = findParents(e.target || e.srcElement, el, true);
    var targetElArr = query(selector, el, true);
    var retEl = void 0;
    if (targetElArr.find) {
      retEl = targetElArr.find(function (seEl) {
        return targetElsArr.find(function (tgEl) {
          return seEl === tgEl;
        });
      });
    } else {
      // Fixed IE11 Array.find not defined bug
      targetElArr.forEach(function (seEl) {
        return !retEl && targetElsArr.forEach(function (tgEl) {
          if (!retEl && seEl === tgEl) {
            retEl = tgEl;
          }
        });
      });
    }
    retEl && handler.apply(retEl, arguments);
  };
  /* 将包装后的方法记录到缓存中 */
  addEventCache(el, type + '_delegate_' + selector, handler, handlerWrap);
  el.addEventListener(type, handlerWrap, capture);
}

/**
 * 为HTML元素移除事件代理
 * @param {HTMLElement} el 目标元素
 * @param {String} selector 要被代理的元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} capture 是否在捕获阶段监听
 */
function removeDelegate(el, selector, type, handler) {
  var capture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (capture !== undefined && !isBoolean(capture) && supportsPassive) {
    capture = { passive: true };
  }
  /* 尝试从缓存中读取包装后的方法 */
  var handlerWrap = removeEventCache(el, type + '_delegate_' + selector, handler);
  handlerWrap && el.removeEventListener(type, handlerWrap, capture);
}

/**
 * 读取HTML元素样式值
 * @param {HTMLElement} el 目标元素
 * @param {String} key 样式key
 * @return {String}
 */
function getStyle(el, key) {
  return (el.currentStyle || document.defaultView.getComputedStyle(el, null))[key] || el.style[key];
}

/**
 * 设置HTML元素样式值
 * @param {HTMLElement} el 目标元素
 * @param {String} key 样式key
 * @param {String} val 样式值
 */
function setStyle(el, key, val) {
  if (isObject(key)) {
    for (var k in key) {
      setStyle(el, k, key[k]);
    }
  } else {
    el.style[key] = val;
  }
}

/**
 * 根据选择器查询目标元素
 * @param {String} selector 选择器,用于 querySelectorAll
 * @param {HTMLElement} container 父容器
 * @param {Boolean} toArray 强制输出为数组
 * @return {NodeList|Array}
 */
function query(selector) {
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var toArray = arguments[2];

  var retNodeList = container.querySelectorAll(selector);
  return toArray ? _Array$from(retNodeList) : retNodeList;
}

/**
 * 从DOM树中移除el
 * @param {HTMLElement} el 目标元素
 */
function removeEl(el) {
  el.parentNode.removeChild(el);
}

/**
 * 查找元素的父节点们
 * @param {HTMLElement} el 目标元素
 * @param {HTMLElement} endEl 最大父容器（不指定则找到html）
 * @param {Boolean} haveEl 包含当前元素
 * @param {Boolean} haveEndEl 包含设定的最大父容器
 */
function findParents(el) {
  var endEl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var haveEl = arguments[2];
  var haveEndEl = arguments[3];

  var retEls = [];
  if (haveEl) {
    retEls.push(el);
  }
  while (el && el.parentNode !== endEl) {
    el = el.parentNode;
    el && retEls.push(el);
  }
  if (haveEndEl) {
    retEls.push(endEl);
  }
  return retEls;
}

/**
 * @class NodeWrap
 * @description
 * NodeWrap DOM包装器，用以实现基本的链式操作
 * new dom.NodeWrap('*') 相当于 dom.$('*')
 * 这里面用于DOM操作的属性方法都是基于上面静态方法实现，有需要可以随时修改补充
 * @param {String} selector 选择器(兼容 String||HTMLString||NodeList||NodeArray||HTMLElement)
 * @param {HTMLElement} container 父容器（默认为document）
 */

var NodeWrap = function () {
  function NodeWrap(selector) {
    var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    _classCallCheck(this, NodeWrap);

    var _this = this;
    _this.selector = selector;

    /* String||NodeList||HTMLElement 识别处理 */
    var elsArr = void 0;
    if (selector && selector.constructor === NodeList) {
      /* 支持直接传入NodeList来构建包装器 */
      elsArr = makeArray(selector);
    } else if (isArray(selector)) {
      /* 支持直接传入Node数组来构建包装器 */
      elsArr = selector;
    } else if (isString(selector)) {
      if (selector.indexOf('<') === 0) {
        /* 支持直接传入HTML字符串来新建DOM并构建包装器 */
        _divEl.innerHTML = selector;
        elsArr = query('*', _divEl, true);
      } else {
        /* 支持直接传入字符串选择器来查找DOM并构建包装器 */
        elsArr = query(selector, container, true);
      }
    } else {
      /* 其他任意对象直接构建包装器 */
      elsArr = [selector];
    }
    _Object$assign(_this, elsArr);

    /* NodeWrap本意可以 extends Array省略构造方法中下面这部分代码，但目前编译不支持 */
    _this.length = elsArr.length;
  }

  /**
   * 循环遍历DOM集合
   * @param {Function} fn 遍历函数 fn(item, i)
   * @return {Object}
   */


  _createClass(NodeWrap, [{
    key: 'each',
    value: function each() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _arrPrototype.forEach.apply(this, args);
      return this;
    }

    /**
     * 添加元素到DOM集合
     * @param {HTMLElement} el 要加入的元素
     * @return {this}
     */

  }, {
    key: 'push',
    value: function push() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      _arrPrototype.push.apply(this, args);
      return this;
    }

    /**
     * 截取DOM集合片段，并得到新的包装器splice
     * @param {Nubmer} start
     * @param {Nubmer} count
     * @return {NodeWrap} 新的DOM集合包装器
     */

  }, {
    key: 'splice',
    value: function splice() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return $(_arrPrototype.splice.apply(this, args));
    }

    /**
     * 查找子元素
     * @param {String} selector 选择器
     * @return {NodeWrap} 新的DOM集合包装器
     */

  }, {
    key: 'find',
    value: function find(selector) {
      var childs = [];
      this.each(function (el) {
        childs = childs.concat(query(selector, el, true));
      });
      var childsWrap = $(childs);
      childsWrap.parent = this;
      childsWrap.selector = selector;
      return childsWrap;
    }

    /**
     * 添加子元素
     * @param {HTMLElement} childEls 要添加的HTML元素
     * @return {this}
     */

  }, {
    key: 'append',
    value: function append(childEls) {
      var childsWrap = $(childEls);
      var firstEl = this[0];
      childsWrap.each(function (newEl) {
        return firstEl.appendChild(newEl);
      });
      return this;
    }

    /**
     * 将元素集合添加到指定容器
     * @param {HTMLElement} parentEl 要添加到父容器
     * @return {this}
     */

  }, {
    key: 'appendTo',
    value: function appendTo(parentEl) {
      $(parentEl).append(this);
      return this;
    }

    /**
     * DOM集合text内容读写操作
     * @param {String} val 文本内容（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'text',
    value: function text(val) {
      if (arguments.length === 0) {
        return this[0][_textAttrName];
      }
      return this.each(function (el) {
        el[_textAttrName] = val;
      });
    }

    /**
     * DOM集合HTML内容读写操作
     * @param {String} html html内容（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'html',
    value: function html(_html) {
      if (arguments.length === 0) {
        return this[0].innerHTML;
      }
      return this.each(function (el) {
        el.innerHTML = _html;
      });
    }

    /**
     * DOM集合属性读写操作
     * @param {String} name 属性名称
     * @param {String} val 属性值（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'attr',
    value: function attr(name, val) {
      if (arguments.length === 1) {
        return getAttr(this[0], name);
      }
      return this.each(function (el) {
        return setAttr(el, name, val);
      });
    }

    /**
     * DOM集合dataset读写操作
     * @param {String} key 键名
     * @param {Any} val 键值（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'data',
    value: function data(key, val) {
      if (arguments.length === 0) {
        return this[0].dataset || {};
      }
      if (arguments.length === 1) {
        return (this[0].dataset || {})[key];
      }
      return this.each(function (el) {
        (el.dataset || (el.dataset = {}))[key] = val;
      });
    }

    /**
     * DOM集合样式读写操作
     * @param {String} key 样式key
     * @param {String} val 样式值（如果有设置该参数则执行写操作，否则执行读操作）
     * @return {this}
     */

  }, {
    key: 'css',
    value: function css(key, val) {
      if (arguments.length === 1 && !isObject(key)) {
        return getStyle(this[0], key);
      }
      return this.each(function (el) {
        return setStyle(el, key, val);
      });
    }

    /**
     * 为DOM集合增加className
     * @param {String} cls 要增加的className
     * @return {this}
     */

  }, {
    key: 'addClass',
    value: function addClass(cls) {
      return this.each(function (el) {
        return addClassName(el, cls);
      });
    }

    /**
     * 移除当前DOM集合的className
     * @param {String} cls 要移除的className
     * @return {this}
     */

  }, {
    key: 'removeClass',
    value: function removeClass(cls) {
      return this.each(function (el) {
        return removeClassName(el, cls);
      });
    }

    /**
     * 检查索引0的DOM是否有className
     * @param {String} cls 要检查的className
     * @return {this}
     */

  }, {
    key: 'hasClass',
    value: function hasClass(cls) {
      return hasClassName(this[0], cls);
    }

    /**
     * 为DOM集合添加事件监听
     * @param {String} type 事件名称
     * @param {Function} handler 处理函数
     * @param {Boolean} once 是否只监听一次
     * @param {Boolean} capture 是否在捕获阶段监听
     * @return {this}
     */

  }, {
    key: 'on',
    value: function on(type, handler) {
      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return this.each(function (el) {
        return addEvent(el, type, handler, once, capture);
      });
    }

    /**
     * 为DOM集合解除事件监听
     * @param {String} type 事件名称
     * @param {Function} handler 处理函数
     * @param {Boolean} once 是否只监听一次
     * @param {Boolean} capture 是否在捕获阶段监听
     * @return {this}
     */

  }, {
    key: 'off',
    value: function off(type, handler) {
      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return this.each(function (el) {
        return removeEvent(el, type, handler, once, capture);
      });
    }

    /**
     * 为DOM集合绑定事件代理
     * @param {String} selector 目标子元素选择器
     * @param {String} type 事件名称
     * @param {Function} handler 处理函数
     * @param {Boolean} capture 是否在捕获阶段监听
     * @return {this}
     */

  }, {
    key: 'delegate',
    value: function delegate(selector, type, handler) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return this.each(function (el) {
        return addDelegate(el, selector, type, handler, capture);
      });
    }

    /**
     * 为DOM集合解绑事件代理
     * @param {String} selector 目标子元素选择器
     * @param {String} type 事件名称
     * @param {Function} handler 处理函数
     * @param {Boolean} capture 是否在捕获阶段监听
     * @return {this}
     */

  }, {
    key: 'undelegate',
    value: function undelegate(selector, type, handler) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      return this.each(function (el) {
        return removeDelegate(el, selector, type, handler, capture);
      });
    }

    /**
     * 从DOM树中移除
     * @return {this}
     */

  }, {
    key: 'remove',
    value: function remove() {
      return this.each(function (el) {
        return removeEl(el);
      });
    }
  }]);

  return NodeWrap;
}();

function $(selector, container) {
  return selector.constructor === NodeWrap ? selector : new NodeWrap(selector, container);
}

// 20.1.2.4 Number.isNaN(number)


_export(_export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

var isNan = _core.Number.isNaN;

var isNan$1 = createCommonjsModule(function (module) {
module.exports = { "default": isNan, __esModule: true };
});

var _Number$isNaN = unwrapExports(isNan$1);

// all object keys, includes non-enumerable and symbols



var Reflect = _global.Reflect;
var _ownKeys = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = _objectGopn.f(_anObject(it));
  var getSymbols = _objectGops.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

// https://github.com/tc39/proposal-object-getownpropertydescriptors






_export(_export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = _toIobject(object);
    var getDesc = _objectGopd.f;
    var keys = _ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) _createProperty(result, key, desc);
    }
    return result;
  }
});

var getOwnPropertyDescriptors = _core.Object.getOwnPropertyDescriptors;

var getOwnPropertyDescriptors$1 = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertyDescriptors, __esModule: true };
});

var _Object$getOwnPropertyDescriptors = unwrapExports(getOwnPropertyDescriptors$1);

var getOwnPropertySymbols = _core.Object.getOwnPropertySymbols;

var getOwnPropertySymbols$1 = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertySymbols, __esModule: true };
});

var _Object$getOwnPropertySymbols = unwrapExports(getOwnPropertySymbols$1);

// 19.1.2.7 Object.getOwnPropertyNames(O)
_objectSap('getOwnPropertyNames', function () {
  return _objectGopnExt.f;
});

var $Object$2 = _core.Object;
var getOwnPropertyNames = function getOwnPropertyNames(it) {
  return $Object$2.getOwnPropertyNames(it);
};

var getOwnPropertyNames$1 = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertyNames, __esModule: true };
});

var _Object$getOwnPropertyNames = unwrapExports(getOwnPropertyNames$1);

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

var $getOwnPropertyDescriptor$1 = _objectGopd.f;

_objectSap('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor$1(_toIobject(it), key);
  };
});

var $Object$3 = _core.Object;
var getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  return $Object$3.getOwnPropertyDescriptor(it, key);
};

var getOwnPropertyDescriptor$1 = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertyDescriptor, __esModule: true };
});

var _Object$getOwnPropertyDescriptor = unwrapExports(getOwnPropertyDescriptor$1);

/**
 * bind the function with some context. we have some fallback strategy here
 * @param {function} fn the function which we need to bind the context on
 * @param {any} context the context object
 */
function bind$1(fn, context) {
  if (fn.bind) {
    return fn.bind(context);
  } else if (fn.apply) {
    return function __autobind__() {
      for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return fn.apply(context, args);
    };
  } else {
    return function __autobind__() {
      for (var _len3 = arguments.length, args = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
    };
  }
}

/**
 * get an deep property
 */
function getDeepProperty$1(obj, keys) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$throwError = _ref.throwError,
      throwError = _ref$throwError === undefined ? false : _ref$throwError,
      backup = _ref.backup;

  if (isString(keys)) {
    keys = keys.split('.');
  }
  if (!isArray(keys)) {
    throw new TypeError('keys of getDeepProperty must be string or Array<string>');
  }
  var read = [];
  var target = obj;
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    if (isVoid(target)) {
      if (throwError) {
        throw new Error('obj' + (read.length > 0 ? '.' + read.join('.') : ' itself') + ' is ' + target);
      } else {
        return backup;
      }
    }
    target = target[key];
    read.push(key);
  }
  return target;
}

var ITERATOR$4 = _wks('iterator');

var core_isIterable = _core.isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR$4] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || _iterators.hasOwnProperty(_classof(O));
};

var isIterable = core_isIterable;

var isIterable$1 = createCommonjsModule(function (module) {
module.exports = { "default": isIterable, __esModule: true };
});

unwrapExports(isIterable$1);

var core_getIterator = _core.getIterator = function (it) {
  var iterFn = core_getIteratorMethod(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return _anObject(iterFn.call(it));
};

var getIterator = core_getIterator;

var getIterator$1 = createCommonjsModule(function (module) {
module.exports = { "default": getIterator, __esModule: true };
});

var _getIterator = unwrapExports(getIterator$1);

var slicedToArray = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _isIterable3 = _interopRequireDefault(isIterable$1);



var _getIterator3 = _interopRequireDefault(getIterator$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
});

var _slicedToArray = unwrapExports(slicedToArray);

var SPECIES$2 = _wks('species');

var _arraySpeciesConstructor = function (original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES$2];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function (original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex





var _arrayMethods = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

var _validateCollection = function (it, TYPE) {
  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

var getWeak = _meta.getWeak;







var arrayFind = _arrayMethods(5);
var arrayFindIndex = _arrayMethods(6);
var id$1 = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

var _collectionWeak = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id$1++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
        return data && _has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
        return data && _has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(_anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

var dP$2 = _objectDp.f;
var each = _arrayMethods(0);


var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = _global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!_descriptors || typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    _redefineAll(C.prototype, methods);
    _meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      _anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) _forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) _hide(C.prototype, KEY, function (a, b) {
        _anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !_isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP$2(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  _setToStringTag(C, NAME);

  O[NAME] = C;
  _export(_export.G + _export.W + _export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

var es6_weakMap = createCommonjsModule(function (module) {

var each = _arrayMethods(0);






var NATIVE_WEAK_MAP = _validateCollection;
var IS_IE11 = !_global.ActiveXObject && 'ActiveXObject' in _global;
var WEAK_MAP = 'WeakMap';
var getWeak = _meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = _collectionWeak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (_isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
  _objectAssign(InternalMap.prototype, methods);
  _meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    _redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (_isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
});

// https://tc39.github.io/proposal-setmap-offrom/


var _setCollectionOf = function (COLLECTION) {
  _export(_export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
_setCollectionOf('WeakMap');

// https://tc39.github.io/proposal-setmap-offrom/





var _setCollectionFrom = function (COLLECTION) {
  _export(_export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    _aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) _aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = _ctx(mapFn, arguments[2], 2);
      _forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      _forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
_setCollectionFrom('WeakMap');

var weakMap = _core.WeakMap;

var weakMap$1 = createCommonjsModule(function (module) {
module.exports = { "default": weakMap, __esModule: true };
});

var _WeakMap = unwrapExports(weakMap$1);

var defineProperty$3 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};
});

var _defineProperty = unwrapExports(defineProperty$3);

// 19.1.2.15 Object.preventExtensions(O)

var meta = _meta.onFreeze;

_objectSap('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && _isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

var preventExtensions = _core.Object.preventExtensions;

var preventExtensions$1 = createCommonjsModule(function (module) {
module.exports = { "default": preventExtensions, __esModule: true };
});

unwrapExports(preventExtensions$1);

var getOwnPropertyDescriptor$2 = _Object$getOwnPropertyDescriptor;
// **********************  对象操作  ************************
/**
 * sort Object attributes by function
 * and transfer them into array
 * @param  {Object} obj Object form from numric
 * @param  {Function} fn sort function
 * @return {Array} the sorted attirbutes array
 */


/**
 * to check if an descriptor
 * @param {anything} desc
 */
function isDescriptor(desc) {
  if (!desc || !desc.hasOwnProperty) {
    return false;
  }

  var keys = ['value', 'initializer', 'get', 'set'];

  for (var i = 0, l = keys.length; i < l; i++) {
    if (desc.hasOwnProperty(keys[i])) {
      return true;
    }
  }
  return false;
}
/**
 * to check if the descirptor is an accessor descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isAccessorDescriptor(desc) {
  return !!desc && (isFunction(desc.get) || isFunction(desc.set)) && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && desc.writable === undefined;
}
/**
 * to check if the descirptor is an data descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isDataDescriptor(desc) {
  return !!desc && desc.hasOwnProperty('value') && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && isBoolean(desc.writable);
}
/**
 * to check if the descirptor is an initiallizer descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isInitializerDescriptor(desc) {
  return !!desc && isFunction(desc.initializer) && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && isBoolean(desc.writable);
}
/**
 * set one value on the object
 * @param {string} key
 */
function createDefaultSetter(key) {
  return function set(newValue) {
    _Object$defineProperty(this, key, {
      configurable: true,
      writable: true,
      // IS enumerable when reassigned by the outside word
      enumerable: true,
      value: newValue
    });
    return newValue;
  };
}

/**
 * Compress many function into one function, but this function only accept one arguments;
 * @param {Array<Function>} fns the array of function we need to compress into one function
 * @param {string} errmsg When we check that there is something is not function, we will throw an error, you can set your own error message
 */
function compressOneArgFnArray(fns) {
  var errmsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'You must pass me an array of function';

  if (!isArray(fns) || fns.length < 1) {
    throw new TypeError(errmsg);
  }
  if (fns.length === 1) {
    if (!isFunction(fns[0])) {
      throw new TypeError(errmsg);
    }
    return fns[0];
  }
  return fns.reduce(function (prev, curr) {
    if (!isFunction(curr) || !isFunction(prev)) throw new TypeError(errmsg);
    return function (value) {
      return bind$1(curr, this)(bind$1(prev, this)(value));
    };
  });
}

function getOwnKeysFn() {
  var getOwnPropertyNames = _Object$getOwnPropertyNames,
      getOwnPropertySymbols = _Object$getOwnPropertySymbols;

  return isFunction(getOwnPropertySymbols) ? function (obj) {
    // $FlowFixMe: do not support symwbol yet
    return _Array$from(getOwnPropertyNames(obj).concat(getOwnPropertySymbols(obj)));
  } : getOwnPropertyNames;
}

var getOwnKeys = getOwnKeysFn();

function getOwnPropertyDescriptorsFn() {
  // $FlowFixMe: In some environment, Object.getOwnPropertyDescriptors has been implemented;
  return isFunction(_Object$getOwnPropertyDescriptors) ? _Object$getOwnPropertyDescriptors : function (obj) {
    return getOwnKeys(obj).reduce(function (descs, key) {
      descs[key] = getOwnPropertyDescriptor$2(obj, key);
      return descs;
    }, {});
  };
}

var getOwnPropertyDescriptors$2 = getOwnPropertyDescriptorsFn();

function compressMultipleDecorators() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (!fns.length) throw new TypeError('You must pass in decorators in compressMultipleDecorators');
  fns.forEach(function (fn) {
    if (!isFunction(fn)) throw new TypeError('Decorators must be a function, but not "' + fn + '" in ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
  });
  if (fns.length === 1) return fns[0];
  return function (obj, prop, descirptor) {
    // $FlowFixMe: the reduce will return a descriptor
    return fns.reduce(function (descirptor, fn) {
      return fn(obj, prop, descirptor);
    }, descirptor);
  };
}

function accessor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      get = _ref.get,
      set = _ref.set;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$preGet = _ref2.preGet,
      preGet = _ref2$preGet === undefined ? false : _ref2$preGet,
      _ref2$preSet = _ref2.preSet,
      preSet = _ref2$preSet === undefined ? true : _ref2$preSet;

  if (!isFunction(get) && !isFunction(set) && !(isArray(get) && get.length > 0) && !(isArray(set) && set.length > 0)) throw new TypeError("@accessor need a getter or setter. If you don't need to add setter/getter. You should remove @accessor");
  var errmsg = '@accessor only accept function or array of function as getter/setter';
  get = isArray(get) ? compressOneArgFnArray(get, errmsg) : get;
  set = isArray(set) ? compressOneArgFnArray(set, errmsg) : set;
  return function (obj, prop, descriptor) {
    var _ref3 = descriptor || {},
        _ref3$configurable = _ref3.configurable,
        configurable = _ref3$configurable === undefined ? true : _ref3$configurable,
        _ref3$enumerable = _ref3.enumerable,
        enumerable = _ref3$enumerable === undefined ? true : _ref3$enumerable;

    var hasGet = isFunction(get);
    var hasSet = isFunction(set);
    var handleGet = function handleGet(value) {
      // $FlowFixMe: it's really function here
      return hasGet ? bind$1(get, this)(value) : value;
    };
    var handleSet = function handleSet(value) {
      // $FlowFixMe: it's really function here
      return hasSet ? bind$1(set, this)(value) : value;
    };
    if (isAccessorDescriptor(descriptor)) {
      var originGet = descriptor.get,
          originSet = descriptor.set;

      var hasOriginGet = isFunction(originGet);
      var hasOriginSet = isFunction(originSet);
      var getter = hasOriginGet || hasGet ? function () {
        var _this = this;

        var boundGetter = bind$1(handleGet, this);
        var originBoundGetter = function originBoundGetter() {
          return hasOriginGet
          // $FlowFixMe: we have do a check here
          ? bind$1(originGet, _this)() : undefined;
        };
        var order = preGet ? [boundGetter, originBoundGetter] : [originBoundGetter, boundGetter];
        // $FlowFixMe: it's all function here
        return order.reduce(function (value, fn) {
          return fn(value);
        }, undefined);
      } : undefined;
      var setter = hasOriginSet || hasSet ? function (val) {
        var _this2 = this;

        var boundSetter = bind$1(handleSet, this);
        var originBoundSetter = function originBoundSetter(value) {
          return hasOriginSet
          // $FlowFixMe: flow act like a retarded child on optional property
          ? bind$1(originSet, _this2)(value) : value;
        };
        var order = preSet ? [boundSetter, originBoundSetter] : [originBoundSetter, boundSetter];
        return order.reduce(function (value, fn) {
          return fn(value);
        }, val);
      } : undefined;
      return {
        get: getter,
        set: setter,
        configurable: configurable,
        enumerable: enumerable
      };
    } else if (isInitializerDescriptor(descriptor)) {
      // $FlowFixMe: disjoint union is horrible, descriptor is initializerDescriptor now
      var initializer = descriptor.initializer;

      var value = void 0;
      var inited = false;
      return {
        get: function get() {
          var boundFn = bind$1(handleGet, this);
          if (inited) return boundFn(value);
          value = bind$1(initializer, this)();
          inited = true;
          return boundFn(value);
        },
        set: function set(val) {
          var boundFn = bind$1(handleSet, this);
          value = preSet ? boundFn(val) : val;
          inited = true;
          if (!preSet) {
            boundFn(value);
          }
          return value;
        },

        configurable: configurable,
        enumerable: enumerable
      };
    } else {
      // $FlowFixMe: disjoint union is horrible, descriptor is DataDescriptor now
      var _ref4 = descriptor || {},
          _value = _ref4.value;

      return {
        get: function get() {
          return bind$1(handleGet, this)(_value);
        },
        set: function set(val) {
          var boundFn = bind$1(handleSet, this);
          _value = preSet ? boundFn(val) : val;
          if (!preSet) {
            boundFn(_value);
          }
          return _value;
        },

        configurable: configurable,
        enumerable: enumerable
      };
    }
  };
}

function before() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@before accept at least one parameter. If you don't need to preprocess before your function, do not add @before decorators");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may use @before straightly, @before return decorators, you should call it before you set it as decorator.');
  }
  for (var i = fns.length - 1; i > -1; i--) {
    if (!isFunction(fns[i])) throw new TypeError('@before only accept function parameter');
  }
  return function (obj, prop, descriptor) {
    var _ref = descriptor || {},
        fn = _ref.value,
        configurable = _ref.configurable,
        enumerable = _ref.enumerable,
        writable = _ref.writable;

    if (!isFunction(fn)) throw new TypeError('@before can only be used on function, please check the property "' + prop + '" is a method or not.');
    var handler = function handler() {
      var _this = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var paras = fns.reduce(function (paras, fn) {
        var result = bind$1(fn, _this).apply(undefined, _toConsumableArray(paras));
        return result === undefined ? paras : isArray(result) ? result
        // $FlowFixMe: what the hell, it can be anything
        : [result];
      }, args);
      return bind$1(fn, this).apply(undefined, _toConsumableArray(paras));
    };
    return {
      value: handler,
      configurable: configurable,
      enumerable: enumerable,
      writable: writable
    };
  };
}

function after() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@after accept at least one parameter. If you don't need to preprocess after your function, do not add @after decorators");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may have used @after straightly. @after return decorators. You should call it before you use it as decorators');
  }
  var fn = compressOneArgFnArray(fns, '@after only accept function parameter');
  return function (obj, prop, descriptor) {
    var _ref = descriptor || {},
        value = _ref.value,
        configurable = _ref.configurable,
        enumerable = _ref.enumerable,
        writable = _ref.writable;

    if (!isFunction(value)) throw new TypeError('@after can only be used on function, please checkout your property "' + prop + '" is a method or not.');
    var handler = function handler() {
      var ret = bind$1(value, this).apply(undefined, arguments);
      return bind$1(fn, this)(ret);
    };
    return {
      value: handler,
      configurable: configurable,
      enumerable: enumerable,
      writable: writable
    };
  };
}

function initialize() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@initialize accept at least one parameter. If you don't need to initialize your value, do not add @initialize.");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may use @initialize straightly, @initialize return decorators, you need to call it');
  }
  var fn = compressOneArgFnArray(fns, '@initialize only accept function parameter');
  return function (obj, prop, descriptor) {
    if (descriptor === undefined) {
      return {
        value: bind$1(fn, obj)(),
        configurable: true,
        writable: true,
        enumerable: true
      };
    }
    if (isAccessorDescriptor(descriptor)) {
      var hasBeenReset = false;
      var originSet = descriptor.set;

      return accessor({
        get: function get(value) {
          if (hasBeenReset) return value;
          return bind$1(fn, this)(value);
        },

        set: originSet ? function (value) {
          hasBeenReset = true;
          return value;
        } : undefined
      })(obj, prop, descriptor);
    }
    /**
     * when we set decorator on propery
     * we will get a descriptor with initializer
     * as they will be attach on the instance later
     * so, we need to substitute the initializer function
     */
    if (isInitializerDescriptor(descriptor)) {
      // $FlowFixMe: useless disjoint union
      var initializer = descriptor.initializer;

      var handler = function handler() {
        return bind$1(fn, this)(bind$1(initializer, this)());
      };
      return {
        initializer: handler,
        configurable: descriptor.configurable,
        // $FlowFixMe: useless disjoint union
        writable: descriptor.writable,
        enumerable: descriptor.enumerable
      };
    }
    // $FlowFixMe: useless disjoint union
    var value = bind$1(fn, this)(descriptor.value);
    return {
      value: value,
      // $FlowFixMe: useless disjoint union
      writable: descriptor.writable,
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable
    };
  };
}

var getOwnPropertyDescriptor$1$1 = _Object$getOwnPropertyDescriptor;
var defineProperty$4 = _Object$defineProperty;

function setAlias(root, prop, _ref, obj, key, _ref2) {
  var configurable = _ref.configurable,
      enumerable = _ref.enumerable;
  var force = _ref2.force,
      omit = _ref2.omit;

  var originDesc = getOwnPropertyDescriptor$1$1(obj, key);
  if (originDesc !== undefined) {
    if (omit) return;
    // TODO: we should add an github link here
    if (!force) throw new Error('"' + prop + '" is an existing property, if you want to override it, please set "force" true in @alias option.');
    if (!originDesc.configurable) {
      throw new Error('property "' + prop + '" is unconfigurable.');
    }
  }
  defineProperty$4(obj, key, {
    get: function get() {
      return root[prop];
    },
    set: function set(value) {
      root[prop] = value;
      return prop;
    },

    configurable: configurable,
    enumerable: enumerable
  });
}
function alias(other, key, option) {
  // set argument into right position
  if (arguments.length === 2) {
    if (isString(other)) {
      // $FlowFixMe: i will check this later
      option = key;
      key = other;
      other = undefined;
    }
  } else if (arguments.length === 1) {
    // $FlowFixMe: i will check this later
    key = other;
    other = undefined;
  }
  // argument validate
  if (!isString(key)) throw new TypeError('@alias need a string as a key to find the porperty to set alias on');
  var illegalObjErrorMsg = 'If you want to use @alias to set alias on other instance, you must pass in a legal instance';
  if (other !== undefined && isPrimitive(other)) throw new TypeError(illegalObjErrorMsg);

  var _ref3 = isObject(option) ? option : { force: false, omit: false },
      force = _ref3.force,
      omit = _ref3.omit;

  return function (obj, prop, descriptor) {
    descriptor = descriptor || {
      value: undefined,
      configurable: true,
      writable: true,
      enumerable: true
    };
    function getTargetAndName(other, obj, key) {
      var target = isPrimitive(other) ? obj : other;
      var keys = key.split('.');

      var _keys$slice = keys.slice(-1),
          _keys$slice2 = _slicedToArray(_keys$slice, 1),
          name = _keys$slice2[0];

      target = getDeepProperty$1(target, keys.slice(0, -1), { throwError: true });
      if (isPrimitive(target)) {
        throw new TypeError(illegalObjErrorMsg);
      }
      return {
        target: target,
        name: name
      };
    }
    if (isInitializerDescriptor(descriptor)) {
      return initialize(function (value) {
        var _getTargetAndName = getTargetAndName(other, this, key),
            target = _getTargetAndName.target,
            name = _getTargetAndName.name;

        setAlias(this, prop, descriptor, target, name, { force: force, omit: omit });
        return value;
      })(obj, prop, descriptor);
    }
    if (isAccessorDescriptor(descriptor)) {
      var inited = void 0;
      var handler = function handler(value) {
        if (inited) return value;

        var _getTargetAndName2 = getTargetAndName(other, this, key),
            target = _getTargetAndName2.target,
            name = _getTargetAndName2.name;

        setAlias(this, prop, descriptor, target, name, { force: force, omit: omit });
        inited = true;
        return value;
      };
      return accessor({ get: handler, set: handler })(obj, prop, descriptor);
    }

    var _getTargetAndName3 = getTargetAndName(other, obj, key),
        target = _getTargetAndName3.target,
        name = _getTargetAndName3.name;

    setAlias(obj, prop, descriptor, target, name, { force: force, omit: omit });
    return descriptor;
  };
}

var defineProperty$1$1 = _Object$defineProperty;

function classify(decorator) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      requirement = _ref.requirement,
      _ref$customArgs = _ref.customArgs,
      customArgs = _ref$customArgs === undefined ? false : _ref$customArgs;

  return function () {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$exclude = _ref2.exclude,
        exclude = _ref2$exclude === undefined ? [] : _ref2$exclude,
        _ref2$include = _ref2.include,
        include = _ref2$include === undefined ? [] : _ref2$include,
        _ref2$construct = _ref2.construct,
        construct = _ref2$construct === undefined ? false : _ref2$construct,
        _ref2$self = _ref2.self,
        self = _ref2$self === undefined ? false : _ref2$self;

    if (!isArray(exclude)) throw new TypeError('options.exclude must be an array');
    if (!isArray(include)) throw new TypeError('options.include must be an array');
    return function (Klass) {
      var isClass = isFunction(Klass);
      if (!self && !isClass) throw new TypeError('@' + decorator.name + 'Class can only be used on class');
      if (self && isPrimitive(Klass)) throw new TypeError('@' + decorator.name + 'Class must be used on non-primitive type value in \'self\' mode');
      var prototype = self ? Klass : Klass.prototype;
      if (isVoid(prototype)) throw new Error('The prototype of the ' + Klass.name + ' is empty, please check it');
      var descs = getOwnPropertyDescriptors$2(prototype);
      getOwnKeys(prototype).concat(include).forEach(function (key) {
        var desc = descs[key];
        if (key === 'constructor' && !construct || self && isClass && ['name', 'length', 'prototype'].indexOf(key) > -1 || exclude.indexOf(key) > -1 || isFunction(requirement) && requirement(prototype, key, desc, { self: self }) === false) return;
        defineProperty$1$1(prototype, key, (customArgs ? decorator.apply(undefined, _toConsumableArray(args)) : decorator)(prototype, key, desc));
      });
    };
  };
}

var autobindClass = classify(autobind, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  }
});

var mapStore = void 0;
// save bound function for super
function getBoundSuper(obj, fn) {
  if (typeof _WeakMap === 'undefined') {
    throw new Error('Using @autobind on ' + fn.name + '() requires WeakMap support due to its use of super.' + fn.name + '()');
  }

  if (!mapStore) {
    mapStore = new _WeakMap();
  }

  if (mapStore.has(obj) === false) {
    mapStore.set(obj, new _WeakMap());
  }

  var superStore = mapStore.get(obj);
  // $FlowFixMe: already insure superStore is not undefined
  if (superStore.has(fn) === false) {
    // $FlowFixMe: already insure superStore is not undefined
    superStore.set(fn, bind$1(fn, obj));
  }
  // $FlowFixMe: already insure superStore is not undefined
  return superStore.get(fn);
}
/**
 * auto bind the function on the class, just support function
 * @param {Object} obj Target Object
 * @param {string} prop prop strong
 * @param {Object} descriptor
 */
function autobind(obj, prop, descriptor) {
  if (arguments.length === 1) return autobindClass()(obj);

  var _ref = descriptor || {},
      fn = _ref.value,
      configurable = _ref.configurable;

  if (!isFunction(fn)) {
    throw new TypeError('@autobind can only be used on functions, not "' + fn + '" in ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) + ' on property "' + prop + '"');
  }
  var constructor = obj.constructor;

  return {
    configurable: configurable,
    enumerable: false,
    get: function get() {
      var _this = this;

      var boundFn = function boundFn() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return fn.call.apply(fn, [_this].concat(_toConsumableArray(args)));
      };
      // Someone accesses the property directly on the prototype on which it is
      // actually defined on, i.e. Class.prototype.hasOwnProperty(key)
      if (this === obj) {
        return fn;
      }
      // Someone accesses the property directly on a prototype,
      // but it was found up the chain, not defined directly on it
      // i.e. Class.prototype.hasOwnProperty(key) == false && key in Class.prototype
      if (this.constructor !== constructor && _Object$getPrototypeOf(this).constructor === constructor) {
        return fn;
      }

      // Autobound method calling super.sameMethod() which is also autobound and so on.
      if (this.constructor !== constructor && prop in this.constructor.prototype) {
        return getBoundSuper(this, fn);
      }
      _Object$defineProperty(this, prop, {
        configurable: true,
        writable: true,
        // NOT enumerable when it's a bound method
        enumerable: false,
        value: boundFn
      });

      return boundFn;
    },

    set: createDefaultSetter(prop)
  };
}

var defineProperty$2$1 = _Object$defineProperty;
/**
 * make one attr only can be read, but could not be rewrited/ deleted
 * @param {Object} obj
 * @param {string} prop
 * @param {Object} descriptor
 * @return {descriptor}
 */

function frozen(obj, prop, descriptor) {
  if (descriptor === undefined) {
    return {
      value: undefined,
      writable: false,
      enumerable: false,
      configurable: false
    };
  }
  descriptor.enumerable = false;
  descriptor.configurable = false;
  if (isAccessorDescriptor(descriptor)) {
    var _get = descriptor.get;

    descriptor.set = undefined;
    if (!isFunction(_get)) {
      return;
    }
    return {
      get: function get() {
        var value = bind$1(_get, this)();
        defineProperty$2$1(this, prop, {
          value: value,
          writable: false,
          configurable: false,
          enumerable: false
        });
        return value;
      },

      set: undefined,
      configurable: false,
      enumerable: false
    };
  }
  // $FlowFixMe: comeon, can disjoint union be reliable?
  descriptor.writable = false;
  return descriptor;
}

var getOwnPropertyDescriptor$2$1 = _Object$getOwnPropertyDescriptor;
var defineProperty$3$1 = _Object$defineProperty;

function waituntil(key) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      other = _ref.other;

  if (!isFunction(key) && !isPromise(key) && !isString(key)) throw new TypeError('@waitUntil only accept Function, Promise or String');
  return function (obj, prop, descriptor) {
    var _ref2 = descriptor || {},
        _value = _ref2.value,
        configurable = _ref2.configurable;

    if (!isFunction(_value)) throw new TypeError('@waituntil can only be used on function, but not ' + _value + ' on property "' + prop + '"');
    var binded = false;
    var waitingQueue = [];
    var canIRun = isPromise(key) ? function () {
      return key;
    } : isFunction(key) ? key : function () {
      // $FlowFixMe: We have use isPromise to exclude
      var keys = key.split('.');
      var prop = keys.slice(-1);
      var originTarget = isPrimitive(other) ? this : other;
      if (!binded) {
        var target = getDeepProperty$1(originTarget, keys.slice(0, -1));
        if (isVoid(target)) return target;
        var _descriptor = getOwnPropertyDescriptor$2$1(target, prop);
        /**
         * create a setter hook here
         * when it get ture, it will run all function in waiting queue immediately
         */
        var set = function set(value) {
          if (value === true) {
            while (waitingQueue.length > 0) {
              waitingQueue[0]();
              waitingQueue.shift();
            }
          }
          return value;
        };
        var desc = isDescriptor(_descriptor) ? accessor({ set: set })(target, prop, _descriptor) : accessor({ set: set })(target, prop, {
          value: undefined,
          configurable: true,
          enumerable: true,
          writable: true
        });
        defineProperty$3$1(target, prop, desc);
        binded = true;
      }
      return getDeepProperty$1(originTarget, keys);
    };
    return {
      value: function value() {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var boundFn = bind$1(_value, this);
        var runnable = bind$1(canIRun, this).apply(undefined, args);
        if (isPromise(runnable)) {
          return _Promise.resolve(runnable).then(function () {
            return bind$1(_value, _this).apply(undefined, args);
          });
        } else if (runnable === true) {
          return bind$1(_value, this).apply(undefined, args);
        } else {
          return new _Promise(function (resolve) {
            var cb = function cb() {
              boundFn.apply(undefined, args);
              resolve();
            };
            waitingQueue.push(cb);
          });
        }
      },

      // function should not be enmuerable
      enumerable: false,
      configurable: configurable,
      // as we have delay this function
      // it's not a good idea to change it
      writable: false
    };
  };
}

function nonenumerable(obj, prop, descriptor) {
  if (descriptor === undefined) {
    return {
      value: undefined,
      enumerable: false,
      configurable: true,
      writable: true
    };
  }
  descriptor.enumerable = false;
  return descriptor;
}

var defineProperty$6 = _Object$defineProperty;
var getOwnPropertyDescriptor$3 = _Object$getOwnPropertyDescriptor;


function applyDecorators(Class, props) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$self = _ref.self,
      self = _ref$self === undefined ? false : _ref$self,
      _ref$omit = _ref.omit,
      omit = _ref$omit === undefined ? false : _ref$omit;

  var isPropsFunction = isFunction(props);
  if (isPropsFunction || isArray(props)) {
    // apply decorators on class
    if (!isFunction(Class)) throw new TypeError('If you want to decorator class, you must pass it a legal class');
    // $FlowFixMe: Terrible union, it's function now
    if (isPropsFunction) props(Class);else {
      // $FlowFixMe: Terrible union, it's array now
      for (var i = 0, len = props.length; i < len; i++) {
        // $FlowFixMe: Terrible union, it's array now
        var fn = props[i];
        if (!isFunction(fn)) throw new TypeError('If you want to decorate an class, you must pass it function or array of function');
        fn(Class);
      }
    }
    return Class;
  }
  if (!self && !isFunction(Class)) throw new TypeError('applyDecorators only accept class as first arguments. If you want to modify instance, you should set options.self true.');
  if (self && isPrimitive(Class)) throw new TypeError("We can't apply docorators on a primitive value, even in self mode");
  if (!isObject(props)) throw new TypeError('applyDecorators only accept object as second arguments');
  var prototype = self ? Class : Class.prototype;
  if (isVoid(prototype)) throw new Error('The class muse have a prototype, please take a check');
  for (var key in props) {
    var value = props[key];
    var decorators = isArray(value) ? value : [value];
    var handler = void 0;
    try {
      handler = compressMultipleDecorators.apply(undefined, _toConsumableArray(decorators));
    } catch (err) {
      throw new Error('The decorators set on props must be Function or Array of Function');
    }
    var descriptor = getOwnPropertyDescriptor$3(prototype, key);
    if (descriptor && !descriptor.configurable) {
      if (!omit) throw new Error(key + ' of ' + prototype + ' is unconfigurable');
      continue;
    }
    defineProperty$6(prototype, key, handler(prototype, key, descriptor));
  }
  return Class;
}

var arrayChangeMethod = ['push', 'pop', 'unshift', 'shift', 'splice', 'sort', 'reverse'];

function deepProxy(value, hook, _ref) {
  var _operateProps;

  var diff = _ref.diff,
      operationPrefix = _ref.operationPrefix;

  var mapStore = {};
  var arrayChanging = false;
  var proxyValue = new Proxy(value, {
    get: function get(target, property, receiver) {
      var value = target[property];
      if (isArray(target) && arrayChangeMethod.indexOf(property) > -1) {
        return function () {
          arrayChanging = true;
          bind$1(value, receiver).apply(undefined, arguments);
          arrayChanging = false;
          hook();
        };
      }
      if (mapStore[property] === true) return value;
      if (isObject(value) || isArray(value)) {
        var _proxyValue = mapStore[property] || deepProxy(value, hook, { diff: diff, operationPrefix: operationPrefix });
        mapStore[property] = _proxyValue;
        return _proxyValue;
      }
      mapStore[property] = true;
      return value;
    },
    set: function set(target, property, value) {
      var oldVal = target[property];
      var newVal = isObject(value) || isArray(value) ? deepProxy(value, hook, { diff: diff, operationPrefix: operationPrefix }) : value;
      target[property] = newVal;
      mapStore[property] = true;
      if (arrayChanging || diff && oldVal === newVal) return true;
      hook();
      return true;
    },
    deleteProperty: function deleteProperty(target, property) {
      delete target[property];
      delete mapStore[property];
      if (arrayChanging) return true;
      hook();
      return true;
    }
  });
  var operateProps = (_operateProps = {}, _defineProperty(_operateProps, operationPrefix + 'set', [initialize(function (method) {
    return function (property, val) {
      // $FlowFixMe: we have check the computed value
      proxyValue[property] = val;
    };
  }), nonenumerable]), _defineProperty(_operateProps, operationPrefix + 'del', [initialize(function (method) {
    return function (property) {
      // $FlowFixMe: we have check the computed value
      delete proxyValue[property];
    };
  }), nonenumerable]), _operateProps);
  applyDecorators(proxyValue, operateProps, { self: true });
  return proxyValue;
}

function deepObserve(value, hook, _ref2) {
  var _this = this,
      _operateProps2;

  var operationPrefix = _ref2.operationPrefix,
      diff = _ref2.diff;

  var mapStore = {};
  var arrayChanging = false;
  function getPropertyDecorators(keys) {
    var oldVal = void 0;
    return keys.reduce(function (props, key) {
      props[key] = [accessor({
        set: function set(value) {
          oldVal = this[key];
          return value;
        }
      }), accessor({
        get: function get(val) {
          if (mapStore[key]) return val;
          if (isObject(val) || isArray(val)) {
            deepObserve(val, hook, { operationPrefix: operationPrefix, diff: diff });
          }
          mapStore[key] = true;
          return val;
        },
        set: function set(val) {
          if (isObject(val) || isArray(val)) deepObserve(val, hook, { operationPrefix: operationPrefix, diff: diff });
          mapStore[key] = true;
          if (!arrayChanging && (!diff || oldVal !== val)) hook();
          return val;
        }
      }, { preSet: false })];
      return props;
    }, {});
  }
  var props = getPropertyDecorators(getOwnKeys(value));
  applyDecorators(value, props, { self: true, omit: true });
  if (isArray(value)) {
    var methodProps = arrayChangeMethod.reduce(function (props, key) {
      props[key] = [initialize(function (method) {
        method = isFunction(method) ? method
        // $FlowFixMe: we have check the key
        : Array.prototype[key];
        return function () {
          var originLength = value.length;
          arrayChanging = true;
          bind$1(method, value).apply(undefined, arguments);
          arrayChanging = false;
          if (originLength < value.length) {
            var keys = new Array(value.length - originLength).fill(1).map(function (value, index) {
              return (index + originLength).toString();
            });
            var _props = getPropertyDecorators(keys);
            applyDecorators(value, _props, { self: true, omit: true });
          }
          hook();
        };
      }), nonenumerable];
      return props;
    }, {});
    applyDecorators(value, methodProps, { self: true });
  }
  var operateProps = (_operateProps2 = {}, _defineProperty(_operateProps2, operationPrefix + 'set', [initialize(function (method) {
    return function (property, val) {
      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          disable = _ref3.disable,
          isNewVal = _ref3.isNewVal;

      isNewVal = isNewVal || getOwnKeys(value).indexOf(property) === -1;
      if (isFunction(method)) {
        bind$1(method, _this)(property, val, { disable: true, isNewVal: isNewVal });
      }
      if (isNewVal) {
        var _props2 = getPropertyDecorators([property]);
        applyDecorators(value, _props2, { self: true, omit: true });
      }
      if (!disable) {
        value[property] = val;
      }
    };
  }), nonenumerable]), _defineProperty(_operateProps2, operationPrefix + 'del', [initialize(function (method) {
    return function (property) {
      if (isFunction(method)) {
        bind$1(method, _this)(property);
      } else {
        delete value[property];
      }
      hook();
    };
  }), nonenumerable]), _operateProps2);
  applyDecorators(value, operateProps, { self: true });
  return value;
}

function watch() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var option = isObject(args[args.length - 1]) ? args[args.length - 1] : {};
  // $FlowFixMe: we have check if it's an object
  var deep = option.deep,
      omit = option.omit,
      other = option.other,
      _option$operationPref = option.operationPrefix,
      operationPrefix = _option$operationPref === undefined ? '__' : _option$operationPref,
      _option$diff = option.diff,
      diff = _option$diff === undefined ? true : _option$diff;
  // $FlowFixMe: we have check if it's an object

  var proxy = option.proxy;

  if (typeof Proxy !== 'function') {
    proxy = false;
  }
  if (!args.length) throw new TypeError('You must pass a function or a string to find the hanlder function.');
  if (other !== undefined && isPrimitive(other)) throw new TypeError('If you want us to trigger function on the other instance, you must pass in a legal instance');
  if (!isString(operationPrefix)) throw new TypeError('operationPrefix must be an string');
  return function (obj, prop, descriptor) {
    var fns = args.reduce(function (fns, keyOrFn, index) {
      if (!isString(keyOrFn) && !isFunction(keyOrFn)) {
        if (!index || index !== args.length - 1) throw new TypeError('You can only pass function or string as handler');
        return fns;
      }
      fns.push(isString(keyOrFn) ? function (newVal, oldVal) {
        var target = other || obj;
        // $FlowFixMe: we have ensure it must be a string
        var fn = getDeepProperty$1(target, keyOrFn);
        if (!isFunction(fn)) {
          if (!omit) throw new Error('You pass in a function for us to trigger, please ensure the property to be a function or set omit flag true');
          return;
        }
        return bind$1(fn, this)(newVal, oldVal);
      } : keyOrFn);
      return fns;
    }, []);
    var handler = function handler(newVal, oldVal) {
      var _this2 = this;

      fns.forEach(function (fn) {
        return bind$1(fn, _this2)(newVal, oldVal);
      });
    };
    var inited = false;
    var oldVal = void 0;
    var newVal = void 0;
    var proxyValue = void 0;
    return compressMultipleDecorators(accessor({
      set: function set(value) {
        var _this3 = this;

        oldVal = this[prop];
        proxyValue = undefined;
        var hook = function hook() {
          return bind$1(handler, _this3)(newVal, oldVal);
        };
        return deep && (isObject(value) || isArray(value)) ? proxy ? deepProxy(value, hook, { diff: diff, operationPrefix: operationPrefix }) : deepObserve(value, hook, { operationPrefix: operationPrefix, diff: diff }) : value;
      },
      get: function get(value) {
        var _this4 = this;

        if (proxyValue) return proxyValue;
        if (!inited) {
          inited = true;
          var hook = function hook() {
            return bind$1(handler, _this4)(newVal, oldVal);
          };
          if (deep && (isObject(value) || isArray(value))) {
            if (proxy) {
              proxyValue = deepProxy(value, hook, { diff: diff, operationPrefix: operationPrefix });
              oldVal = proxyValue;
              newVal = proxyValue;
              return proxyValue;
            }
            deepObserve(value, hook, { operationPrefix: operationPrefix, diff: diff });
          }
          oldVal = value;
          newVal = value;
        }
        return value;
      }
    }, { preSet: true }), accessor({
      set: function set(value) {
        newVal = value;
        if (!diff || oldVal !== value) bind$1(handler, this)(newVal, oldVal);
        oldVal = value;
        return value;
      }
    }, { preSet: false }))(obj, prop, descriptor);
  };
}

function runnable(key) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      other = _ref.other,
      backup = _ref.backup;

  if (!isFunction(key) && !isString(key)) throw new TypeError('@runnable only accept Function or String');
  return function (obj, prop, descriptor) {
    var _ref2 = descriptor || {},
        _value = _ref2.value,
        configurable = _ref2.configurable;

    if (!isFunction(_value)) throw new TypeError('@runnable can only be used on method, but not ' + _value + ' on property "' + prop + '".');
    var canIRun = isFunction(key) ? key : function () {
      var keys = key.split('.');
      var originTarget = isPrimitive(other) ? this : other;
      return getDeepProperty$1(originTarget, keys);
    };
    backup = isFunction(backup) ? backup : function () {};
    return {
      value: function value() {
        if (bind$1(canIRun, this).apply(undefined, arguments) === true) {
          return bind$1(_value, this).apply(undefined, arguments);
        } else {
          // $FlowFixMe: I have reassign it when it's not a function
          return bind$1(backup, this).apply(undefined, arguments);
        }
      },

      // function should not be enmuerable
      enumerable: false,
      configurable: configurable,
      // as we have delay this function
      // it's not a good idea to change it
      writable: false
    };
  };
}

function nonconfigurable(obj, prop, descriptor) {
  if (descriptor === undefined) {
    return {
      value: undefined,
      enumerable: true,
      configurable: true,
      writable: true
    };
  }
  descriptor.configurable = true;
  return descriptor;
}

function string() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isString(args[0]) ? args.shift() : '';
  args.unshift(function (value) {
    return isString(value) ? value : defaultValue;
  });
  return initialize.apply(undefined, args);
}

function boolean() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isBoolean(args[0]) ? args.shift() : false;
  args.unshift(function (value) {
    return isBoolean(value) ? value : defaultValue;
  });
  return initialize.apply(undefined, args);
}

function string$1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isString(args[0]) ? args.shift() : '';
  args.unshift(function (value) {
    return isString(value) ? value : defaultValue;
  });
  return accessor({ set: args, get: args });
}

function boolean$1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isBoolean(args[0]) ? args.shift() : false;
  args.unshift(function (value) {
    return isBoolean(value) ? value : defaultValue;
  });
  return accessor({ set: args, get: args });
}

function number$1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isNumber(args[0]) ? args.shift() : 0;
  args.unshift(function (value) {
    return isNumber(value) ? value : defaultValue;
  });
  return accessor({ set: args, get: args });
}

var before$1 = classify(before, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var after$1 = classify(after, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var runnable$1 = classify(runnable, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var waituntil$1 = classify(waituntil, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var $JSON$1 = _core.JSON || (_core.JSON = { stringify: JSON.stringify });
var stringify = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON$1.stringify.apply($JSON$1, arguments);
};

var stringify$1 = createCommonjsModule(function (module) {
module.exports = { "default": stringify, __esModule: true };
});

unwrapExports(stringify$1);

var get = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



var _getOwnPropertyDescriptor2 = _interopRequireDefault(getOwnPropertyDescriptor$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};
});

var _get = unwrapExports(get);

var VENDOR_PREFIXES = ['', 'o', 'ms', 'moz', 'webkit', 'webkitCurrent'];

var SYNONYMS = [['', ''], // empty
['exit', 'cancel'], // firefox & old webkits expect cancelFullScreen instead of exitFullscreen
['screen', 'Screen']];

var DESKTOP_FULLSCREEN_STYLE = {
  position: 'fixed',
  zIndex: '2147483647',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  width: '100%',
  height: '100%'
};

var FULLSCREEN_CHANGE = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'];

var FULLSCREEN_ERROR = ['fullscreenerror', 'webkitfullscreenerror', 'mozfullscreenerror', 'MSFullscreenError'];

var supportDocument = typeof document !== 'undefined';

function setStyle$1(el, key, val) {
  if (isObject(key)) {
    for (var k in key) {
      setStyle$1(el, k, key[k]);
    }
  } else {
    // $FlowFixMe: we found it
    el.style[key] = val;
  }
}

function native(target, name) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (isObject(name)) {
    option = name;
  }
  if (isString(target)) {
    name = target;
  }
  var _option = option,
      _option$keyOnly = _option.keyOnly,
      keyOnly = _option$keyOnly === undefined ? false : _option$keyOnly;
  /* istanbul ignore if */

  if (!supportDocument) {
    return keyOnly ? '' : undefined;
  }
  if (!isElement(target)) {
    target = document;
  }
  if (!isString(name)) throw new Error('You must pass in a string as name, but not ' + (typeof name === 'undefined' ? 'undefined' : _typeof(name)) + '.');
  for (var i = 0; i < SYNONYMS.length; i++) {
    name = name.replace(SYNONYMS[i][0], SYNONYMS[i][1]);
    for (var j = 0; j < VENDOR_PREFIXES.length; j++) {
      var prefixed = j === 0 ? name : VENDOR_PREFIXES[j] + name.charAt(0).toUpperCase() + name.substr(1);
      // $FlowFixMe: we support document computed property here
      if (target[prefixed] !== undefined) return keyOnly ? prefixed : target[prefixed];
    }
  }
  return keyOnly ? '' : undefined;
}

function dispatchEvent(element, name) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$bubbles = _ref.bubbles,
      bubbles = _ref$bubbles === undefined ? true : _ref$bubbles,
      _ref$cancelable = _ref.cancelable,
      cancelable = _ref$cancelable === undefined ? true : _ref$cancelable;

  var event = void 0;
  /* istanbul ignore else  */
  if (isFunction(Event)) {
    event = new Event(name, {
      bubbles: bubbles,
      cancelable: cancelable
    });
  } else if (supportDocument && document.createEvent) {
    event = document.createEvent('HTMLEvents');
    event.initEvent(name, true, true);
  } else if (supportDocument && document.createEventObject) {
    // $FlowFixMe: IE < 9
    event = document.createEventObject();
    event.eventType = name;
    event.eventName = name;
  }
  /* istanbul ignore next  */
  if (!isObject(event) && !isEvent(event)) throw new Error("We can't create an object on this browser, please report to author");
  /* istanbul ignore else  */
  if (element.dispatchEvent) {
    element.dispatchEvent(event);
    // $FlowFixMe: IE < 9
  } else if (element.fireEvent) {
    // $FlowFixMe: IE < 9
    element.fireEvent('on' + event.eventType, event); // can trigger only real event (e.g. 'click')
    // $FlowFixMe: support computed key
  } else if (element[name]) {
    // $FlowFixMe: support computed key
    element[name]();
    // $FlowFixMe: support computed key
  } else if (element['on' + name]) {
    // $FlowFixMe: support computed key
    element['on' + name]();
  }
}

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}
var fullscreenEnabled = native('fullscreenEnabled');
var useStyleFirst = false;

var ESFullScreen = (_dec = autobindClass(), _dec2 = alias('requestFullscreen'), _dec3 = alias('exitFullscreen'), _dec4 = alias('addEventListener'), _dec5 = alias('removeEventListener'), _dec(_class = (_class2 = function () {
  function ESFullScreen() {
    _classCallCheck(this, ESFullScreen);

    this._fullscreenElement = null;
    this.isNativelySupport = defined(native('fullscreenElement')) && (!defined(fullscreenEnabled) || fullscreenEnabled === true);
    this._openKey = supportDocument ? native(document.body || document.documentElement, 'requestFullscreen', { keyOnly: true }) : '';
    this._exitKey = native('exitFullscreen', { keyOnly: true });
    this._useStyleFirst = false;
    this.hasUsedStyle = false;
  }

  _createClass(ESFullScreen, [{
    key: 'open',
    value: function open(element) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$force = _ref.force,
          force = _ref$force === undefined ? false : _ref$force;
      var originElement = this.fullscreenElement;
      if (originElement && originElement !== element) {
        if (!force) {
          dispatchEvent(document, 'fullscreenerror');
          return false;
        }
        this.exit();
      }

      if (!this.useStyleFirst) {
        if (this.isNativelySupport) {
          // $FlowFixMe: support computed key on HTMLElment here
          isFunction(element[this._openKey]) && element[this._openKey]();
          return true;
        }

        // add wekitEnterFullscreen support as required in https://github.com/toxic-johann/es-fullscreen/issues/4
        /* istanbul ignore if  */
        if (element instanceof HTMLVideoElement && element.webkitSupportsFullscreen &&
        // $FlowFixMe: support webkitEnterFullscreen on some werid safari
        isFunction(element.webkitEnterFullscreen)) {
          element.webkitEnterFullscreen();
          this._fullscreenElement = element;
          return true;
        }
      }

      this._savedStyles = _Object$keys(DESKTOP_FULLSCREEN_STYLE).reduce(function (styles, key) {
        // $FlowFixMe: support string here
        styles[key] = element.style[key];
        return styles;
      }, {});
      setStyle$1(element, DESKTOP_FULLSCREEN_STYLE);

      /* istanbul ignore else  */
      if (document.body) {
        this._bodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
      /* istanbul ignore else  */
      if (document.documentElement) {
        this._htmlOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
      }
      this._fullscreenElement = element;
      this.hasUsedStyle = true;
      dispatchEvent(element, 'fullscreenchange');
      return true;
    }
  }, {
    key: 'exit',
    value: function exit() {
      if (!this.isFullscreen) return false;
      if (this.isNativelySupport && !this.useStyleFirst && !this.hasUsedStyle) {
        // $FlowFixMe: support document computed key here
        document[this._exitKey]();
        return true;
      }
      // $FlowFixMe: element is an Elment here
      var element = this._fullscreenElement;
      setStyle$1(element, this._savedStyles);
      /* istanbul ignore else  */
      if (document.body) document.body.style.overflow = this._bodyOverflow;
      /* istanbul ignore else  */
      if (document.documentElement) document.documentElement.style.overflow = this._htmlOverflow;

      this._fullscreenElement = null;
      this._savedStyles = {};
      dispatchEvent(element, 'fullscreenchange');
      return true;
    }
  }, {
    key: 'on',
    value: function on(name, fn) {
      var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

      this._handleEvent(element, 'addEventListener', name, fn);
    }
  }, {
    key: 'off',
    value: function off(name, fn) {
      var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

      this._handleEvent(element, 'removeEventListener', name, fn);
    }
  }, {
    key: '_handleEvent',
    value: function _handleEvent(element, behavior, name, fn) {
      var names = name === 'fullscreenchange' ? FULLSCREEN_CHANGE : name === 'fullscreenerror' ? FULLSCREEN_ERROR : [name];
      names.forEach(function (name) {
        // $FlowFixMe: support computed attribute here
        element[behavior](name, fn);
      });
    }
  }, {
    key: 'useStyleFirst',
    get: function get() {
      return useStyleFirst;
    },
    set: function set(value) {
      value = !!value;
      if (value === useStyleFirst) return value;
      useStyleFirst = value;
      dispatchEvent(document, 'esfullscreenmethodchange');
      return value;
    }
  }, {
    key: 'fullscreenElement',
    get: function get() {
      var element = ['fullscreenElement', 'webkitFullscreenElement', 'mozFullScreenElement', 'msFullscreenElement'].reduce(function (element, key) {
        // $FlowFixMe: support computed element on document
        return element || document[key];
      }, null);
      return element || this._fullscreenElement;
    }
  }, {
    key: 'isFullscreen',
    get: function get() {
      return isElement(this.fullscreenElement);
    }
  }]);

  return ESFullScreen;
}(), _applyDecoratedDescriptor(_class2.prototype, 'open', [_dec2], _Object$getOwnPropertyDescriptor(_class2.prototype, 'open'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'exit', [_dec3], _Object$getOwnPropertyDescriptor(_class2.prototype, 'exit'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'on', [_dec4], _Object$getOwnPropertyDescriptor(_class2.prototype, 'on'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'off', [_dec5], _Object$getOwnPropertyDescriptor(_class2.prototype, 'off'), _class2.prototype), _class2)) || _class);

var index = new ESFullScreen();

var dP$3 = _objectDp.f;









var fastKey = _meta.fastKey;

var SIZE = _descriptors ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

var _collectionStrong = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = _objectCreate(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = _validateCollection(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        _validateCollection(this, NAME);
        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(_validateCollection(this, NAME), key);
      }
    });
    if (_descriptors) dP$3(C.prototype, 'size', {
      get: function () {
        return _validateCollection(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    _iterDefine(C, NAME, function (iterated, kind) {
      this._t = _validateCollection(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return _iterStep(1);
      }
      // return step by kind
      if (kind == 'keys') return _iterStep(0, entry.k);
      if (kind == 'values') return _iterStep(0, entry.v);
      return _iterStep(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    _setSpecies(NAME);
  }
};

var MAP = 'Map';

// 23.1 Map Objects
var es6_map = _collection(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
  }
}, _collectionStrong, true);

var _arrayFromIterable = function (iter, ITERATOR) {
  var result = [];
  _forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


var _collectionToJson = function (NAME) {
  return function toJSON() {
    if (_classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return _arrayFromIterable(this);
  };
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


_export(_export.P + _export.R, 'Map', { toJSON: _collectionToJson('Map') });

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
_setCollectionOf('Map');

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
_setCollectionFrom('Map');

var map = _core.Map;

var map$1 = createCommonjsModule(function (module) {
module.exports = { "default": map, __esModule: true };
});

var _Map = unwrapExports(map$1);

var isEnum$1 = _objectPie.f;
var _objectToArray = function (isEntries) {
  return function (it) {
    var O = _toIobject(it);
    var keys = _objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!_descriptors || isEnum$1.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

// https://github.com/tc39/proposal-object-values-entries

var $entries = _objectToArray(true);

_export(_export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

var entries = _core.Object.entries;

var entries$1 = createCommonjsModule(function (module) {
module.exports = { "default": entries, __esModule: true };
});

var _Object$entries = unwrapExports(entries$1);

var runtime = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = 'object' === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
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
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
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
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
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
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
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
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
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

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

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
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
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
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
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
          context.arg = undefined;
        }

        return !! caught;
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

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
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

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
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

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
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
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);
});

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

var runtimeModule = runtime;

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

var regenerator = runtimeModule;

var asyncToGenerator = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _promise2 = _interopRequireDefault(promise$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};
});

var _asyncToGenerator = unwrapExports(asyncToGenerator);

var _global$1 = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core$1 = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1$1 = _core$1.version;

var _isObject$1 = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject$1 = function (it) {
  if (!_isObject$1(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails$1 = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors$1 = !_fails$1(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$3 = _global$1.document;
// typeof document.createElement is 'object' in old IE
var is$1 = _isObject$1(document$3) && _isObject$1(document$3.createElement);
var _domCreate$1 = function (it) {
  return is$1 ? document$3.createElement(it) : {};
};

var _ie8DomDefine$1 = !_descriptors$1 && !_fails$1(function () {
  return Object.defineProperty(_domCreate$1('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive$1 = function (it, S) {
  if (!_isObject$1(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject$1(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP$4 = Object.defineProperty;

var f$8 = _descriptors$1 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject$1(O);
  P = _toPrimitive$1(P, true);
  _anObject$1(Attributes);
  if (_ie8DomDefine$1) try {
    return dP$4(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp$1 = {
	f: f$8
};

var _propertyDesc$1 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide$1 = _descriptors$1 ? function (object, key, value) {
  return _objectDp$1.f(object, key, _propertyDesc$1(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty$1 = {}.hasOwnProperty;
var _has$1 = function (it, key) {
  return hasOwnProperty$1.call(it, key);
};

var id$2 = 0;
var px$1 = Math.random();
var _uid$1 = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id$2 + px$1).toString(36));
};

var _library$1 = false;

var _shared$1 = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global$1[SHARED] || (_global$1[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core$1.version,
  mode: _library$1 ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
});

var _functionToString = _shared$1('native-function-to-string', Function.toString);

var _redefine$1 = createCommonjsModule(function (module) {
var SRC = _uid$1('src');

var TO_STRING = 'toString';
var TPL = ('' + _functionToString).split(TO_STRING);

_core$1.inspectSource = function (it) {
  return _functionToString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) _has$1(val, 'name') || _hide$1(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) _has$1(val, SRC) || _hide$1(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === _global$1) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    _hide$1(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    _hide$1(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || _functionToString.call(this);
});
});

var _aFunction$1 = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx$1 = function (fn, that, length) {
  _aFunction$1(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE$3 = 'prototype';

var $export$1 = function (type, name, source) {
  var IS_FORCED = type & $export$1.F;
  var IS_GLOBAL = type & $export$1.G;
  var IS_STATIC = type & $export$1.S;
  var IS_PROTO = type & $export$1.P;
  var IS_BIND = type & $export$1.B;
  var target = IS_GLOBAL ? _global$1 : IS_STATIC ? _global$1[name] || (_global$1[name] = {}) : (_global$1[name] || {})[PROTOTYPE$3];
  var exports = IS_GLOBAL ? _core$1 : _core$1[name] || (_core$1[name] = {});
  var expProto = exports[PROTOTYPE$3] || (exports[PROTOTYPE$3] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? _ctx$1(out, _global$1) : IS_PROTO && typeof out == 'function' ? _ctx$1(Function.call, out) : out;
    // extend global
    if (target) _redefine$1(target, key, out, type & $export$1.U);
    // export
    if (exports[key] != out) _hide$1(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
_global$1.core = _core$1;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library`
var _export$1 = $export$1;

// https://github.com/tc39/proposal-global


_export$1(_export$1.G, { global: _global$1 });

var global$1 = _core$1.global;

var tempCurrentTime = 0;

var NativeVideoKernel = function (_CustEvent) {
  _inherits(NativeVideoKernel, _CustEvent);

  _createClass(NativeVideoKernel, null, [{
    key: 'isSupport',

    /* istanbul ignore next  */
    value: function isSupport() {
      return true;
    }
  }]);

  function NativeVideoKernel(videoElement, config, customConfig) {
    _classCallCheck(this, NativeVideoKernel);

    var _this = _possibleConstructorReturn(this, (NativeVideoKernel.__proto__ || _Object$getPrototypeOf(NativeVideoKernel)).call(this));

    if (!isElement(videoElement)) throw new Error('You must pass in an legal video element but not ' + (typeof videoElement === 'undefined' ? 'undefined' : _typeof(videoElement)));
    _this.video = videoElement;
    _this.config = config;
    _this.customConfig = customConfig;
    return _this;
  }

  _createClass(NativeVideoKernel, [{
    key: 'load',
    value: function load(src) {
      this.video.setAttribute('src', src);
      this.video.src = src;
    }
  }, {
    key: 'startLoad',
    value: function startLoad(src) {
      /* istanbul ignore next */
      var currentTime = this.video.currentTime || tempCurrentTime;
      this.load(src);
      this.seek(currentTime);
    }

    // https://developer.mozilla.org/de/docs/Web/HTML/Using_HTML5_audio_and_video#Stopping_the_download_of_media

  }, {
    key: 'stopLoad',
    value: function stopLoad() {
      tempCurrentTime = this.video.currentTime;
      this.video.src = '';
      this.video.removeAttribute('src');
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      /* istanbul ignore next  */
      if (isElement(this.video)) this.stopLoad();
    }
  }, {
    key: 'play',
    value: function play() {
      return this.video.play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      return this.video.pause();
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      this.video.src = this.config.src;
    }
  }, {
    key: 'attachMedia',
    value: function attachMedia() {}
  }, {
    key: 'seek',
    value: function seek(seconds) {
      this.video.currentTime = seconds;
    }
  }]);

  return NativeVideoKernel;
}(CustEvent);

var LOG_TAG = 'chimee';
var boxSuffixMap = {
  flv: '.flv',
  hls: '.m3u8',
  native: '.mp4'
};

// return the config box
// or choose the right one according to the src
function getLegalBox(_ref) {
  var src = _ref.src,
      box = _ref.box;

  if (isString(box) && box) return box;
  src = src.toLowerCase();
  for (var key in boxSuffixMap) {
    var suffix = boxSuffixMap[key];
    if (src.indexOf(suffix) > -1) return key;
  }
  return 'native';
}

var ChimeeKernel = function () {
  /**
  * kernelWrapper
  * @param {any} wrap videoElement
  * @param {any} option
  * @class kernel
  */
  function ChimeeKernel(videoElement, config) {
    _classCallCheck(this, ChimeeKernel);

    if (!isElement(videoElement)) throw new Error('You must pass in an video element to the chimee-kernel');
    this.config = config;
    this.videoElement = videoElement;
    this.initVideoKernel();
  }

  _createClass(ChimeeKernel, [{
    key: 'destroy',
    value: function destroy() {
      this.videoKernel.destroy();
    }
  }, {
    key: 'initVideoKernel',
    value: function initVideoKernel() {
      var config = this.config;
      var box = getLegalBox(config);
      this.box = box;
      var VideoKernel = this.chooseVideoKernel(this.box, config.preset);

      if (!isFunction(VideoKernel)) throw new Error('We can\'t find video kernel for ' + box + '. Please check your config and make sure it\'s installed or provided');

      var customConfig = config.presetConfig[this.box];

      // TODO: nowaday, kernels all get config from one config
      // it's not a good way, because custom config may override kernel config
      // so we may remove this code when we check all the chimee-kernel-* setting
      if (customConfig) deepAssign(config, customConfig);

      this.videoKernel = new VideoKernel(this.videoElement, config, customConfig);
    }

    // choose the right video kernel according to the box setting

  }, {
    key: 'chooseVideoKernel',
    value: function chooseVideoKernel(box, preset) {
      switch (box) {
        case 'native':
          // $FlowFixMe: it's the same as videoKernel
          return NativeVideoKernel;
        case 'mp4':
          return this.getMp4Kernel(preset.mp4);
        case 'flv':
        case 'hls':
          return preset[box];
        default:
          throw new Error('We currently do not support box ' + box + ', please contact us through https://github.com/Chimeejs/chimee/issues.');
      }
    }

    // fetch the legal mp4 kernel
    // if it's not exist or not support
    // we will fall back to the native video kernel

  }, {
    key: 'getMp4Kernel',
    value: function getMp4Kernel(Mp4Kernel) {
      var hasLegalMp4Kernel = Mp4Kernel && isFunction(Mp4Kernel.isSupport);
      // $FlowFixMe: we have make sure it's an kernel now
      var supportMp4Kernel = hasLegalMp4Kernel && Mp4Kernel.isSupport();
      // $FlowFixMe: we have make sure it's an kernel now
      if (supportMp4Kernel) return Mp4Kernel;
      if (hasLegalMp4Kernel) Log.warn(LOG_TAG, 'mp4 decode is not support in this browser, we will switch to the native video kernel');
      this.box = 'native';
      // $FlowFixMe: it's the same as videoKernel
      return NativeVideoKernel;
    }
  }, {
    key: 'attachMedia',
    value: function attachMedia() {
      this.videoKernel.attachMedia();
    }
  }, {
    key: 'load',
    value: function load() {
      var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.src;

      this.config.src = src;
      this.videoKernel.load(src);
    }
  }, {
    key: 'startLoad',
    value: function startLoad() {
      /* istanbul ignore if */
      if (!isFunction(this.videoKernel.startLoad)) throw new Error('This video kernel do not support startLoad, please contact us on https://github.com/Chimeejs/chimee/issues');
      this.videoKernel.startLoad(this.config.src);
    }
  }, {
    key: 'stopLoad',
    value: function stopLoad() {
      /* istanbul ignore else */
      if (isFunction(this.videoKernel.stopLoad)) this.videoKernel.stopLoad();
    }
  }, {
    key: 'play',
    value: function play() {
      this.videoKernel.play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.videoKernel.pause();
    }
  }, {
    key: 'seek',
    value: function seek(seconds) {
      if (!isNumber(seconds)) {
        Log.error(LOG_TAG, 'When you try to seek, you must offer us a number, but not ' + (typeof seconds === 'undefined' ? 'undefined' : _typeof(seconds)));
        return;
      }
      this.videoKernel.seek(seconds);
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      this.videoKernel.refresh();
    }
  }, {
    key: 'on',
    value: function on(key, fn) {
      this.videoKernel.on(key, fn);
    }
  }, {
    key: 'off',
    value: function off(key, fn) {
      this.videoKernel.off(key, fn);
    }
  }, {
    key: 'currentTime',
    get: function get$$1() {
      return this.videoElement.currentTime || 0;
    }
  }]);

  return ChimeeKernel;
}();

var videoEvents = ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'encrypted', 'ended', 'error', 'interruptbegin', 'interruptend', 'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting', 'enterpictureinpicture', 'leavepictureinpicture'];
var videoReadOnlyProperties = ['buffered', 'currentSrc', 'duration', 'error', 'ended', 'networkState', 'paused', 'readyState', 'seekable', 'sinkId', 'controlsList', 'tabIndex', 'dataset', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth'];
var domEvents = ['beforeinput', 'blur', 'click', 'compositionend', 'compositionstart', 'compositionupdate', 'dblclick', 'focus', 'focusin', 'focusout', 'input', 'keydown', 'keypress', 'keyup', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll', 'select', 'wheel', 'mousewheel', 'contextmenu', 'touchstart', 'touchmove', 'touchend', 'fullscreen'];
var esFullscreenEvents = ['fullscreenchange'];
var passiveEvents = ['wheel', 'mousewheel', 'touchstart', 'touchmove'];
var selfProcessorEvents = ['silentLoad', 'fullscreen'];
var mustListenVideoDomEvents = ['mouseenter', 'mouseleave'];
var kernelMethods = ['play', 'pause', 'seek', 'startLoad', 'stopLoad'];
var dispatcherEventMethodMap = {
  load: 'load',
  enterpictureinpicture: 'requestPictureInPicture',
  leavepictureinpicture: 'exitPictureInPicture'
};
var kernelEvents = ['mediaInfo', 'heartbeat', 'error'];
var domMethods = ['focus', 'fullscreen', 'requestFullscreen', 'exitFullscreen'];
var videoMethods = ['canPlayType', 'captureStream', 'setSinkId'];

/**
 * checker for on, off, once function
 * @param {string} key
 * @param {Function} fn
 */
function eventBinderCheck(key, fn) {
  if (!isString(key)) throw new TypeError('key parameter must be String');
  if (!isFunction(fn)) throw new TypeError('fn parameter must be Function');
}
/**
 * checker for attr or css function
 */
function attrAndStyleCheck() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length > 2) {
    return ['set'].concat(args);
  }
  if (args.length === 2) {
    if (['video', 'container', 'wrapper', 'videoElement'].indexOf(args[0]) > -1) {
      return ['get'].concat(args);
    }
    return ['set', 'container'].concat(args);
  }
  return ['get', 'container'].concat(args);
}

var _dec$1, _dec2$1, _class$1, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;

  _Object$defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor$1(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function stringOrVoid(value) {
  return isString(value) ? value : undefined;
}

function accessorVideoProperty(property) {
  return accessor({
    get: function get$$1(value) {
      return this.dispatcher.videoConfigReady && this.inited ? this.dom.videoElement[property] : value;
    },
    set: function set(value) {
      if (!this.dispatcher.videoConfigReady) return value;
      this.dom.videoElement[property] = value;
      return value;
    }
  });
}

function accessorVideoAttribute(attribute) {
  var _ref = isObject(attribute) ? attribute : {
    set: attribute,
    get: attribute,
    isBoolean: false
  },
      _set = _ref.set,
      _get$$1 = _ref.get,
      isBoolean$$1 = _ref.isBoolean;

  return accessor({
    get: function get$$1(value) {
      return this.dispatcher.videoConfigReady && this.inited ? this.dom.videoElement[_get$$1] : value;
    },
    set: function set(value) {
      if (!this.dispatcher.videoConfigReady) return value;
      var val = isBoolean$$1 ? value ? '' : undefined
      /* istanbul ignore next */
      : value === null ? undefined : value;
      this.dom.setAttr('video', _set, val);
      return value;
    }
  }, {
    preSet: false
  });
}

function accessorCustomAttribute(attribute, isBoolean$$1) {
  return accessor({
    get: function get$$1(value) {
      var attrValue = this.dom.getAttr('video', attribute);
      return this.dispatcher.videoConfigReady && this.inited ? isBoolean$$1 ? !!attrValue : attrValue : value;
    },
    set: function set(value) {
      if (!this.dispatcher.videoConfigReady) return value;
      var val = isBoolean$$1 ? value || undefined : value === null ? undefined : value;
      this.dom.setAttr('video', attribute, val);
      return value;
    }
  });
}

function accessorWidthAndHeight(property) {
  return accessor({
    get: function get$$1(value) {
      if (!this.dispatcher.videoConfigReady || !this.inited) return value;
      var attr = this.dom.getAttr('video', property);
      var prop = this.dom.videoElement[property];
      if (isNumeric(attr) && isNumber(prop)) return prop;
      return attr || undefined;
    },
    set: function set(value) {
      if (!this.dispatcher.videoConfigReady) return value;
      var val = void 0;
      if (value === undefined || isNumber(value)) {
        val = value;
      } else if (isString(value) && !_Number$isNaN(parseFloat(value))) {
        val = value;
      }
      this.dom.setAttr('video', property, val);
      return val;
    }
  });
}

var accessorMap = {
  src: [string$1(), accessor({
    set: function set(val) {
      // must check val !== this.src here
      // as we will set config.src in the video
      // the may cause dead lock
      if (this.dispatcher.readySync && this.autoload && val !== this.src) this.needToLoadSrc = true;
      return val;
    }
  }), accessor({
    set: function set(val) {
      if (this.needToLoadSrc) {
        // unlock it at first, to avoid deadlock
        this.needToLoadSrc = false;
        this.dispatcher.binder.emit({
          name: 'load',
          target: 'plugin',
          id: 'dispatcher'
        }, val);
      }
      return val;
    }
  }, { preSet: false })],
  autoload: boolean$1(),
  autoplay: [boolean$1(), accessorVideoProperty('autoplay')],
  controls: [boolean$1(), accessorVideoProperty('controls')],
  width: [accessorWidthAndHeight('width')],
  height: [accessorWidthAndHeight('height')],
  crossOrigin: [accessor({ set: stringOrVoid }), accessorVideoAttribute({ set: 'crossorigin', get: 'crossOrigin' })],
  loop: [boolean$1(), accessorVideoProperty('loop')],
  defaultMuted: [boolean$1(), accessorVideoAttribute({ get: 'defaultMuted', set: 'muted', isBoolean: true })],
  muted: [boolean$1(), accessorVideoProperty('muted')],
  preload: [accessor({
    set: function set(value) {
      var options = ['none', 'auto', 'metadata', ''];
      return options.indexOf(value) > -1 ? value : 'none';
    }
  }, {
    preSet: true
  }), accessorVideoAttribute('preload')],
  poster: [
  // 因为如果在 video 上随便加一个字符串，他会将其拼接到地址上，所以这里要避免
  // 单元测试无法检测
  string$1(), accessor({
    get: function get$$1(value) {
      return this.dispatcher.videoConfigReady && this.inited ? this.dom.videoElement.poster : value;
    },
    set: function set(value) {
      if (!this.dispatcher.videoConfigReady) return value;
      if (value.length) this.dom.setAttr('video', 'poster', value);
      return value;
    }
  })],
  playsInline: [accessor({
    get: function get$$1(value) {
      var playsInline = this.dom.videoElement.playsInline;
      return this.dispatcher.videoConfigReady && this.inited ? playsInline === undefined ? value : playsInline : value;
    },
    set: function set(value) {
      if (!this.dispatcher.videoConfigReady) return value;
      this.dom.videoElement.playsInline = value;
      var val = value ? '' : undefined;
      this.dom.setAttr('video', 'playsinline', val);
      this.dom.setAttr('video', 'webkit-playsinline', val);
      this.dom.setAttr('video', 'x5-playsinline', val);
      return value;
    }
  }), boolean$1()],
  x5VideoPlayerFullscreen: [accessor({
    set: function set(value) {
      return !!value;
    },
    get: function get$$1(value) {
      return !!value;
    }
  }), accessorCustomAttribute('x5-video-player-fullscreen', true)],
  x5VideoOrientation: [accessor({ set: stringOrVoid }), accessorCustomAttribute('x5-video-orientation')],
  x5VideoPlayerType: [accessor({
    set: function set(value) {
      if (!this.dispatcher.videoConfigReady) return value;
      var val = value === 'h5-page' ? 'h5-page' : undefined;
      this.dom.setAttr('video', 'x5-video-player-type', val);
      return value;
    },
    get: function get$$1(value) {
      return this.dispatcher.videoConfigReady && value || (this.dom.getAttr('video', 'x5-video-player-type') ? 'h5-page' : undefined);
    }
  })],
  xWebkitAirplay: [accessor({
    set: function set(value) {
      return !!value;
    },
    get: function get$$1(value) {
      return !!value;
    }
  }), accessorCustomAttribute('x-webkit-airplay', true)],
  playbackRate: [number$1(1), accessorVideoProperty('playbackRate')],
  defaultPlaybackRate: [accessorVideoProperty('defaultPlaybackRate'), number$1(1)],
  disableRemotePlayback: [boolean$1(), accessorVideoProperty('disableRemotePlayback')],
  volume: [number$1(1), accessorVideoProperty('volume')]
};

var VideoConfig = (_dec$1 = boolean(), _dec2$1 = string(function (str) {
  return str.toLocaleLowerCase();
}), _class$1 = function () {

  // 转为供 kernel 使用的内部参数
  function VideoConfig(dispatcher, config) {
    _classCallCheck(this, VideoConfig);

    _initDefineProp(this, 'needToLoadSrc', _descriptor, this);

    _initDefineProp(this, 'changeWatchable', _descriptor2, this);

    _initDefineProp(this, 'inited', _descriptor3, this);

    this.src = '';

    _initDefineProp(this, 'isLive', _descriptor4, this);

    _initDefineProp(this, 'box', _descriptor5, this);

    this.preset = {};
    this.presetConfig = {};
    this.autoload = true;
    this.autoplay = false;
    this.controls = false;
    this.width = '100%';
    this.height = '100%';
    this.crossOrigin = undefined;
    this.loop = false;
    this.defaultMuted = false;
    this.muted = false;
    this.preload = 'auto';
    this.poster = undefined;
    this.playsInline = false;
    this.x5VideoPlayerFullscreen = false;
    this.x5VideoOrientation = undefined;
    this.x5VideoPlayerType = undefined;
    this.xWebkitAirplay = false;
    this.playbackRate = 1;
    this.defaultPlaybackRate = 1;
    this.disableRemotePlayback = false;
    this.volume = 1;

    _initDefineProp(this, '_kernelProperty', _descriptor6, this);

    _initDefineProp(this, '_realDomAttr', _descriptor7, this);

    applyDecorators(this, accessorMap, { self: true });
    Object.defineProperty(this, 'dispatcher', {
      value: dispatcher,
      enumerable: false,
      writable: false,
      configurable: false
    });
    Object.defineProperty(this, 'dom', {
      value: dispatcher.dom,
      enumerable: false,
      writable: false,
      configurable: false
    });
    deepAssign(this, config);
  }

  // 此处 box 只能置空，因为 kernel 会自动根据你的安装 kernel 和相关地址作智能判断。
  // 曾经 bug 详见 https://github.com/Chimeejs/chimee-kernel/issues/1

  // kernels 不在 videoConfig 上设置默认值，防止判断出错


  _createClass(VideoConfig, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this._realDomAttr.forEach(function (key) {
        // $FlowFixMe: we have check the computed here
        _this[key] = _this[key];
      });
      this.inited = true;
    }
  }]);

  return VideoConfig;
}(), _descriptor = _applyDecoratedDescriptor$1(_class$1.prototype, 'needToLoadSrc', [nonenumerable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor$1(_class$1.prototype, 'changeWatchable', [nonenumerable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor3 = _applyDecoratedDescriptor$1(_class$1.prototype, 'inited', [nonenumerable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor$1(_class$1.prototype, 'isLive', [_dec$1, nonconfigurable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor$1(_class$1.prototype, 'box', [_dec2$1, nonconfigurable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor6 = _applyDecoratedDescriptor$1(_class$1.prototype, '_kernelProperty', [frozen], {
  enumerable: true,
  initializer: function initializer() {
    return ['isLive', 'box', 'preset', 'kernels', 'presetConfig'];
  }
}), _descriptor7 = _applyDecoratedDescriptor$1(_class$1.prototype, '_realDomAttr', [frozen], {
  enumerable: true,
  initializer: function initializer() {
    return ['src', 'controls', 'width', 'height', 'crossOrigin', 'loop', 'muted', 'preload', 'poster', 'autoplay', 'playsInline', 'x5VideoPlayerFullscreen', 'x5VideoOrientation', 'xWebkitAirplay', 'playbackRate', 'defaultPlaybackRate', 'autoload', 'disableRemotePlayback', 'defaultMuted', 'volume', 'x5VideoPlayerType'];
  }
}), _class$1);

var _dec$1$1, _dec2$1$1, _dec3$1, _dec4$1, _dec5$1, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class$1$1, _class2$1;

function _applyDecoratedDescriptor$1$1(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}
var VideoWrapper = (_dec$1$1 = autobindClass(), _dec2$1$1 = alias('silentLoad'), _dec3$1 = alias('fullScreen'), _dec4$1 = alias('$fullScreen'), _dec5$1 = alias('fullscreen'), _dec6 = alias('emit'), _dec7 = alias('emitSync'), _dec8 = alias('on'), _dec9 = alias('addEventListener'), _dec10 = before(eventBinderCheck), _dec11 = alias('off'), _dec12 = alias('removeEventListener'), _dec13 = before(eventBinderCheck), _dec14 = alias('once'), _dec15 = before(eventBinderCheck), _dec16 = alias('css'), _dec17 = before(attrAndStyleCheck), _dec18 = alias('attr'), _dec19 = before(attrAndStyleCheck), _dec$1$1(_class$1$1 = (_class2$1 = function () {
  function VideoWrapper() {
    _classCallCheck(this, VideoWrapper);

    this.__events = {};
    this.__unwatchHandlers = [];
  }

  _createClass(VideoWrapper, [{
    key: '__wrapAsVideo',
    value: function __wrapAsVideo(videoConfig) {
      var _this = this;

      // bind video read only properties on instance, so that you can get info like buffered
      videoReadOnlyProperties.forEach(function (key) {
        _Object$defineProperty(_this, key, {
          get: function get$$1() {
            return this.__dispatcher.dom.videoElement[key];
          },

          set: undefined,
          configurable: false,
          enumerable: false
        });
      });
      // bind videoMethods like canplaytype on instance
      videoMethods.forEach(function (key) {
        _Object$defineProperty(_this, key, {
          get: function get$$1() {
            var video = this.__dispatcher.dom.videoElement;
            return bind(video[key], video);
          },

          set: undefined,
          configurable: false,
          enumerable: false
        });
      });
      // bind video config properties on instance, so that you can just set src by this
      var props = videoConfig._realDomAttr.concat(videoConfig._kernelProperty).reduce(function (props, key) {
        props[key] = [accessor({
          get: function get$$1() {
            // $FlowFixMe: support computed key here
            return videoConfig[key];
          },
          set: function set(value) {
            // $FlowFixMe: support computed key here
            videoConfig[key] = value;
            return value;
          }
        }), nonenumerable];
        return props;
      }, {});
      applyDecorators(this, props, { self: true });
      kernelMethods.forEach(function (key) {
        _Object$defineProperty(_this, key, {
          value: function value() {
            var _this2 = this;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return new _Promise(function (resolve) {
              var _dispatcher$binder;

              var id = _this2.__id;
              _this2.__dispatcher.binder.once({
                id: id,
                name: '_' + key,
                fn: resolve
              });
              (_dispatcher$binder = _this2.__dispatcher.binder)[/^(seek)$/.test(key) ? 'emitSync' : 'emit'].apply(_dispatcher$binder, [{
                target: 'video',
                name: key,
                id: id
              }].concat(_toConsumableArray(args)));
            });
          },

          configurable: true,
          enumerable: false,
          writable: true
        });
      });
      domMethods.forEach(function (key) {
        if (key === 'fullscreen') return;
        _Object$defineProperty(_this, key, {
          value: function value() {
            var _dispatcher$dom;

            return (_dispatcher$dom = this.__dispatcher.dom)[key].apply(_dispatcher$dom, arguments);
          },

          configurable: true,
          enumerable: false,
          writable: true
        });
      });
    }
  }, {
    key: '$watch',
    value: function $watch(key, handler) {
      var _this3 = this;

      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          deep = _ref.deep,
          _ref$diff = _ref.diff,
          diff = _ref$diff === undefined ? true : _ref$diff,
          other = _ref.other,
          _ref$proxy = _ref.proxy,
          proxy = _ref$proxy === undefined ? false : _ref$proxy;

      if (!isString(key) && !isArray(key)) throw new TypeError('$watch only accept string and Array<string> as key to find the target to spy on, but not ' + key + ', whose type is ' + (typeof key === 'undefined' ? 'undefined' : _typeof(key)));
      var watching = true;
      var watcher = function watcher() {
        if (watching && (!(this instanceof VideoConfig) || this.dispatcher.changeWatchable)) bind(handler, this).apply(undefined, arguments);
      };
      var unwatcher = function unwatcher() {
        watching = false;
        var index$$1 = _this3.__unwatchHandlers.indexOf(unwatcher);
        if (index$$1 > -1) _this3.__unwatchHandlers.splice(index$$1, 1);
      };
      var keys = isString(key) ? key.split('.') : key;
      var property = keys.pop();
      var videoConfig = this.__dispatcher.videoConfig;
      var target = keys.length === 0 && !other && videoConfig._realDomAttr.indexOf(property) > -1 ? videoConfig : ['isFullscreen', 'fullscreenElement'].indexOf(property) > -1 ? this.__dispatcher.dom : getDeepProperty(other || this, keys, { throwError: true });
      applyDecorators(target, _defineProperty({}, property, watch(watcher, { deep: deep, diff: diff, proxy: proxy })), { self: true });
      this.__unwatchHandlers.push(unwatcher);
      return unwatcher;
    }
  }, {
    key: '$set',
    value: function $set(obj, property, value) {
      if (!isObject(obj) && !isArray(obj)) throw new TypeError('$set only support Array or Object, but not ' + obj + ', whose type is ' + (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)));
      // $FlowFixMe: we have custom this function
      if (!isFunction(obj.__set)) {
        // $FlowFixMe: we support computed string on array here
        obj[property] = value;
        return;
      }
      obj.__set(property, value);
    }
  }, {
    key: '$del',
    value: function $del(obj, property) {
      if (!isObject(obj) && !isArray(obj)) throw new TypeError('$del only support Array or Object, but not ' + obj + ', whose type is ' + (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)));
      // $FlowFixMe: we have custom this function
      if (!isFunction(obj.__del)) {
        // $FlowFixMe: we support computed string on array here
        delete obj[property];
        return;
      }
      obj.__del(property);
    }
  }, {
    key: 'load',
    value: function load() {
      var _this4 = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return new _Promise(function (resolve) {
        var _dispatcher$binder2;

        _this4.__dispatcher.binder.once({
          id: _this4.__id,
          name: '_load',
          target: 'plugin',
          fn: resolve
        });
        (_dispatcher$binder2 = _this4.__dispatcher.binder).emit.apply(_dispatcher$binder2, [{
          name: 'load',
          target: 'plugin',
          id: _this4.__id
        }].concat(args));
      });
    }
  }, {
    key: '$silentLoad',
    value: function $silentLoad() {
      var _this5 = this;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.__dispatcher.binder.emit({
        name: 'silentLoad',
        target: 'video',
        id: this.__id
      }).then(function () {
        var _dispatcher;

        return (_dispatcher = _this5.__dispatcher).silentLoad.apply(_dispatcher, args);
      }).then(function (result) {
        _this5.__dispatcher.binder.trigger({
          name: 'silentLoad',
          target: 'video',
          id: _this5.__id
        }, result);
      });
    }

    /**
     * call fullscreen api on some specific element
     * @param {boolean} flag true means fullscreen and means exit fullscreen
     * @param {string} element the element you want to fullscreen, default it's container, you can choose from video | container | wrapper
     */

  }, {
    key: '$fullscreen',
    value: function $fullscreen() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'container';

      if (!this.__dispatcher.binder.emitSync({
        name: 'fullscreen',
        id: this.__id,
        target: 'video-dom'
      }, flag, element)) return false;
      var result = this.__dispatcher.dom.fullscreen(flag, element);
      this.__dispatcher.binder.triggerSync({
        name: 'fullscreen',
        id: this.__id,
        target: 'video-dom'
      }, flag, element);
      return result;
    }

    /**
     * emit an event
     * @param  {string}    key event's name
     * @param  {...args} args
     */

  }, {
    key: '$emit',
    value: function $emit(key) {
      var _dispatcher$binder3;

      var target = void 0;
      if (isObject(key) && isString(key.name) && isString(key.target)) {
        target = key.target;
        key = key.name;
      }
      if (!isString(key)) throw new TypeError('emit key parameter must be String');

      for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      return (_dispatcher$binder3 = this.__dispatcher.binder).emit.apply(_dispatcher$binder3, [{
        name: key,
        id: this.__id,
        target: target
      }].concat(_toConsumableArray(args)));
    }

    /**
     * emit a sync event
     * @param  {string}    key event's name
     * @param  {...args} args
     */

  }, {
    key: '$emitSync',
    value: function $emitSync(key) {
      var _dispatcher$binder4;

      var target = void 0;
      if (isObject(key) && isString(key.name) && isString(key.target)) {
        target = key.target;
        key = key.name;
      }
      if (!isString(key)) throw new TypeError('emitSync key parameter must be String');

      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      return (_dispatcher$binder4 = this.__dispatcher.binder).emitSync.apply(_dispatcher$binder4, [{
        name: key,
        id: this.__id,
        target: target
      }].concat(_toConsumableArray(args)));
    }

    /**
     * bind event handler through this function
     * @param  {string} key event's name
     * @param  {Function} fn event's handler
     */

  }, {
    key: '$on',
    value: function $on(key, fn) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var eventInfo = _Object$assign({}, options, {
        name: key,
        id: this.__id,
        fn: fn
      });
      this.__dispatcher.binder.on(eventInfo);
      // set on __events as mark so that i can destroy it when i destroy
      this.__addEvents(key, fn);
    }
    /**
     * remove event handler through this function
     * @param  {string} key event's name
     * @param  {Function} fn event's handler
     */

  }, {
    key: '$off',
    value: function $off(key, fn) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var eventInfo = _Object$assign({}, options, {
        name: key,
        id: this.__id,
        fn: fn
      });
      this.__dispatcher.binder.off(eventInfo);
      this.__removeEvents(key, fn);
    }
    /**
     * bind one time event handler
     * @param {string} key event's name
     * @param {Function} fn event's handler
     */

  }, {
    key: '$once',
    value: function $once(key, fn) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var self = this;
      var boundFn = function boundFn() {
        bind(fn, this).apply(undefined, arguments);
        self.__removeEvents(key, boundFn);
      };
      self.__addEvents(key, boundFn);
      var eventInfo = _Object$assign({}, options, {
        name: key,
        id: this.__id,
        fn: boundFn
      });
      this.__dispatcher.binder.once(eventInfo);
    }

    /**
     * set style
     * @param {string} element optional, default to be video, you can choose from video | container | wrapper
     * @param {string} attribute the atrribue name
     * @param {any} value optional, when it's no offer, we consider you want to get the attribute's value. When it's offered, we consider you to set the attribute's value, if the value you passed is undefined, that means you want to remove the value;
     */

  }, {
    key: '$css',
    value: function $css(method) {
      var _dispatcher$dom2;

      for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }

      return (_dispatcher$dom2 = this.__dispatcher.dom)[method + 'Style'].apply(_dispatcher$dom2, args);
    }

    /**
     * set attr
     * @param {string} element optional, default to be video, you can choose from video | container | wrapper
     * @param {string} attribute the atrribue nameß
     * @param {any} value optional, when it's no offer, we consider you want to get the attribute's value. When it's offered, we consider you to set the attribute's value, if the value you passed is undefined, that means you want to remove the value;
     */

  }, {
    key: '$attr',
    value: function $attr(method) {
      var _dispatcher$dom3;

      for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        args[_key7 - 1] = arguments[_key7];
      }

      if (method === 'set' && /video/.test(args[0])) {
        if (!this.__dispatcher.videoConfigReady) {
          return args[2];
        }
        if (this.__dispatcher.videoConfig._realDomAttr.indexOf(args[1]) > -1) {
          var key = args[1],
              val = args[2];

          this.__dispatcher.videoConfig[key] = val;
          return val;
        }
      }
      return (_dispatcher$dom3 = this.__dispatcher.dom)[method + 'Attr'].apply(_dispatcher$dom3, args);
    }
  }, {
    key: 'requestPictureInPicture',
    value: function requestPictureInPicture() {
      return this.__dispatcher.binder.emit({
        target: 'video',
        name: 'enterpictureinpicture',
        id: this.__id
      });
    }
  }, {
    key: 'exitPictureInPicture',
    value: function exitPictureInPicture() {
      return this.__dispatcher.binder.emit({
        target: 'video',
        name: 'leavepictureinpicture',
        id: this.__id
      });
    }
  }, {
    key: '__addEvents',
    value: function __addEvents(key, fn) {
      this.__events[key] = this.__events[key] || [];
      this.__events[key].push(fn);
    }
  }, {
    key: '__removeEvents',
    value: function __removeEvents(key, fn) {
      if (isEmpty(this.__events[key])) return;
      var index$$1 = this.__events[key].indexOf(fn);
      if (index$$1 < 0) return;
      this.__events[key].splice(index$$1, 1);
      if (isEmpty(this.__events[key])) delete this.__events[key];
    }
  }, {
    key: '__destroy',
    value: function __destroy() {
      var _this6 = this;

      this.__unwatchHandlers.forEach(function (unwatcher) {
        return unwatcher();
      });
      _Object$keys(this.__events).forEach(function (key) {
        if (!isArray(_this6.__events[key])) return;
        _this6.__events[key].forEach(function (fn) {
          return _this6.$off(key, fn);
        });
      });
      delete this.__events;
    }
  }, {
    key: 'currentTime',
    get: function get$$1() {
      return this.__dispatcher.kernel.currentTime;
    },
    set: function set(second) {
      this.__dispatcher.binder.emitSync({
        name: 'seek',
        target: 'video',
        id: this.__id
      }, second);
    }
  }, {
    key: 'inPictureInPictureMode',
    get: function get$$1() {
      return this.__dispatcher.inPictureInPictureMode;
    }
  }, {
    key: 'pictureInPictureWindow',
    get: function get$$1() {
      return window.__chimee_picture_in_picture_window;
    }
  }, {
    key: '$plugins',
    get: function get$$1() {
      return this.__dispatcher.plugins;
    }
  }, {
    key: '$pluginOrder',
    get: function get$$1() {
      return this.__dispatcher.order;
    }
  }, {
    key: '$wrapper',
    get: function get$$1() {
      return this.__dispatcher.dom.wrapper;
    }
  }, {
    key: '$container',
    get: function get$$1() {
      return this.__dispatcher.dom.container;
    }
  }, {
    key: '$video',
    get: function get$$1() {
      return this.__dispatcher.dom.videoElement;
    }
  }, {
    key: 'isFullscreen',
    get: function get$$1() {
      return this.__dispatcher.dom.isFullscreen;
    }
  }, {
    key: 'fullscreenElement',
    get: function get$$1() {
      return this.__dispatcher.dom.fullscreenElement;
    }
  }, {
    key: 'container',
    get: function get$$1() {
      return this.__dispatcher.containerConfig;
    },
    set: function set(config) {
      if (!isObject(config)) {
        throw new Error('The config of container must be Object, but not ' + (typeof config === 'undefined' ? 'undefined' : _typeof(config)) + '.');
      }
      deepAssign(this.__dispatcher.containerConfig, config);
      return this.__dispatcher.container;
    }
  }, {
    key: 'videoRequireGuardedAttributes',
    get: function get$$1() {
      return this.__dispatcher.dom.videoRequireGuardedAttributes;
    }
  }]);

  return VideoWrapper;
}(), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$silentLoad', [_dec2$1$1], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$silentLoad'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$fullscreen', [_dec3$1, _dec4$1, _dec5$1], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$fullscreen'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$emit', [_dec6], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$emit'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$emitSync', [_dec7], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$emitSync'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$on', [_dec8, _dec9, _dec10], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$on'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$off', [_dec11, _dec12, _dec13], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$off'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$once', [_dec14, _dec15], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$once'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$css', [_dec16, _dec17], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$css'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$attr', [_dec18, _dec19], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$attr'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, 'inPictureInPictureMode', [nonenumerable], _Object$getOwnPropertyDescriptor(_class2$1.prototype, 'inPictureInPictureMode'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, 'pictureInPictureWindow', [nonenumerable], _Object$getOwnPropertyDescriptor(_class2$1.prototype, 'pictureInPictureWindow'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$plugins', [nonenumerable], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$plugins'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$pluginOrder', [nonenumerable], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$pluginOrder'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$wrapper', [nonenumerable], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$wrapper'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$container', [nonenumerable], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$container'), _class2$1.prototype), _applyDecoratedDescriptor$1$1(_class2$1.prototype, '$video', [nonenumerable], _Object$getOwnPropertyDescriptor(_class2$1.prototype, '$video'), _class2$1.prototype), _class2$1)) || _class$1$1);

var _dec$2, _class$2;

/**
 * <pre>
 * Plugin is the class for plugin developer.
 * When we use a plugin, we will generate an instance of plugin.
 * Developer can do most of things base on this plugin
 * </pre>
 */
var Plugin = (_dec$2 = autobindClass(), _dec$2(_class$2 = function (_VideoWrapper) {
  _inherits(Plugin, _VideoWrapper);

  /**
   * <pre>
   * to create a plugin, we need three parameter
   * 1. the config of a plugin
   * 2. the dispatcher
   * 3. this option for plugin to read
   * this is the plugin base class, which you can get on Chimee
   * You can just extends it and then install
   * But in that way you must remember to pass the arguments to super()
   * </pre>
   * @param  {string}  PluginConfig.id        camelize from plugin's name or class name.
   * @param  {string}  PluginConfig.name      plugin's name or class name
   * @param  {Number}  PluginConfig.level     the level of z-index
   * @param  {Boolean} PluginConfig.operable  to tell if the plugin can be operable, if not, we will add pointer-events: none on it.
   * @param  {Function}  PluginConfig.create  the create function which we will called when plugin is used. sth like constructor in object style.
   * @param  {Function}  PluginConfig.destroy   function to be called when we destroy a plugin
   * @param  {Object}  PluginConfig.events    You can set some events handler in this object, we will bind it once you use the plugin.
   * @param  {Object}  PluginConfig.data      dataset we will bind on data in object style
   * @param  {Object<{get: Function, set: Function}}  PluginConfig.computed  dataset we will handle by getter and setter
   * @param  {Object<Function>}  PluginConfig.methods   some function we will bind on plugin
   * @param  {string|HTMLElment}  PluginConfig.el  can be string or HTMLElement, we will use this to create the dom for plugin
   * @param  {boolean} PluginConfig.penetrate boolean to let us do we need to forward the dom events for this plugin.
   * @param  {Dispatcher}  dispatcher referrence of dispatcher
   * @param  {Object}  option  PluginOption that will pass to the plugin
   * @return {Plugin}  plugin instance
   */
  function Plugin() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        id = _ref.id,
        name = _ref.name,
        _ref$level = _ref.level,
        level = _ref$level === undefined ? 0 : _ref$level,
        _ref$operable = _ref.operable,
        operable = _ref$operable === undefined ? true : _ref$operable,
        beforeCreate = _ref.beforeCreate,
        create = _ref.create,
        init = _ref.init,
        inited = _ref.inited,
        destroy = _ref.destroy,
        _ref$events = _ref.events,
        events = _ref$events === undefined ? {} : _ref$events,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? {} : _ref$data,
        _ref$computed = _ref.computed,
        computed = _ref$computed === undefined ? {} : _ref$computed,
        _ref$methods = _ref.methods,
        methods = _ref$methods === undefined ? {} : _ref$methods,
        el = _ref.el,
        _ref$penetrate = _ref.penetrate,
        penetrate = _ref$penetrate === undefined ? false : _ref$penetrate,
        _ref$inner = _ref.inner,
        inner = _ref$inner === undefined ? true : _ref$inner,
        autoFocus = _ref.autoFocus,
        className = _ref.className;

    var dispatcher = arguments[1];
    var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { name: name };

    _classCallCheck(this, Plugin);

    var _this = _possibleConstructorReturn(this, (Plugin.__proto__ || _Object$getPrototypeOf(Plugin)).call(this));

    _this.destroyed = false;
    _this.VERSION = '0.12.0';
    _this.__operable = true;
    _this.__level = 0;

    if (isEmpty(dispatcher)) {
      throw new TypeError('lack of dispatcher');
    }
    if (!isString(id)) {
      throw new TypeError('id of PluginConfig must be string');
    }
    _this.__id = id;
    _this.__dispatcher = dispatcher;
    _this.$videoConfig = _this.__dispatcher.videoConfig;
    _this.__wrapAsVideo(_this.$videoConfig);
    _this.beforeCreate = _this.beforeCreate || beforeCreate;
    try {
      isFunction(_this.beforeCreate) && _this.beforeCreate({
        events: events,
        data: data,
        computed: computed,
        methods: methods
      }, option);
    } catch (error) {
      _this.$throwError(error);
    }
    // bind plugin methods into instance
    if (!isEmpty(methods) && isObject(methods)) {
      _Object$keys(methods).forEach(function (key) {
        var fn = methods[key];
        if (!isFunction(fn)) throw new TypeError('plugins methods must be Function');
        _Object$defineProperty(_this, key, {
          value: bind(fn, _this),
          writable: true,
          enumerable: false,
          configurable: true
        });
      });
    }
    // hook plugin events on bus
    if (!isEmpty(events) && isObject(events)) {
      _Object$keys(events).forEach(function (key) {
        if (!isFunction(events[key])) throw new TypeError('plugins events hook must bind with Function');
        _this.$on(key, events[key]);
      });
    }
    // bind data into plugin instance
    if (!isEmpty(data) && isObject(data)) {
      deepAssign(_this, data);
    }
    // set the computed member by getter and setter
    if (!isEmpty(computed) && isObject(computed)) {
      var props = _Object$keys(computed).reduce(function (props, key) {
        var val = computed[key];
        if (isFunction(val)) {
          props[key] = accessor({ get: val });
          return props;
        }
        if (isObject(val) && (isFunction(val.get) || isFunction(val.set))) {
          props[key] = accessor(val);
          return props;
        }
        return props;
      }, {});
      applyDecorators(_this, props, { self: true });
    }
    /**
     * the create Function of plugin
     * @type {Function}
     */
    _this.create = _this.create || create;
    /**
     * this init Function of plugin
     * which will be called when we start to create the video player
     * the plugin can handle some config here
     * @type {Function}
     */
    _this.init = _this.init || init;
    /**
     * this inited Function of plugin
     * which will be called when we have created the video player
     * @type {Function}
     */
    _this.inited = _this.inited || inited;
    /**
     * the destroy Function of plugin
     * @type {Function}
     */
    _this.destroy = _this.destroy || destroy;
    /**
     * the dom node of whole plugin
     * @type {HTMLElement}
     */
    _this.$dom = _this.__dispatcher.dom.insertPlugin(_this.__id, el, { penetrate: penetrate, inner: inner, className: className });
    _this.$autoFocus = isBoolean(autoFocus) ? autoFocus : inner;
    // now we can frozen inner, autoFocus and penetrate
    _this.$inner = inner;
    _this.$penetrate = penetrate;
    applyDecorators(_this, {
      $inner: frozen,
      $penetrate: frozen
    }, { self: true });
    /**
     * to tell us if the plugin can be operable, can be dynamic change
     * @type {boolean}
     */
    _this.$operable = isBoolean(option.operable) ? option.operable : operable;
    _this.__level = isInteger$2(option.level) ? option.level : level;
    /**
     * pluginOption, so it's easy for plugin developer to check the config
     * @type {Object}
     */
    _this.$config = option;
    try {
      isFunction(_this.create) && _this.create();
    } catch (error) {
      _this.$throwError(error);
    }
    return _this;
  }
  /**
   * call for init lifecycle hook, which mainly handle the original config of video and kernel.
   * @param {VideoConfig} videoConfig the original config of the videoElement or Kernel
   */


  _createClass(Plugin, [{
    key: '__init',
    value: function __init(videoConfig) {
      try {
        isFunction(this.init) && this.init(videoConfig);
      } catch (error) {
        this.$throwError(error);
      }
    }
    /**
     * call for inited lifecycle hook, which just to tell the plugin we have inited.
     */

  }, {
    key: '__inited',
    value: function __inited() {
      var _this2 = this;

      var result = void 0;
      try {
        result = isFunction(this.inited) && this.inited();
      } catch (error) {
        this.$throwError(error);
      }
      this.readySync = !isPromise(result);
      this.ready = this.readySync ? _Promise.resolve(this)
      // $FlowFixMe: it's promise now
      : result.then(function () {
        _this2.readySync = true;
        return _this2;
      }).catch(function (error) {
        if (isError(error)) return _this2.$throwError(error);
        return _Promise.reject(error);
      });
      return this.readySync ? this : this.ready;
    }

    /**
     * set the plugin to be the top of all plugins
     */

  }, {
    key: '$bumpToTop',
    value: function $bumpToTop() {
      var topLevel = this.__dispatcher._getTopLevel(this.$inner);
      this.$level = topLevel + 1;
    }
  }, {
    key: '$throwError',
    value: function $throwError(error) {
      this.__dispatcher.throwError(error);
    }
    /**
     * officail destroy function for plugin
     * we will call user destory function in this method
     */

  }, {
    key: '$destroy',
    value: function $destroy() {
      if (this.destroyed) return;
      isFunction(this.destroy) && this.destroy();
      _get(Plugin.prototype.__proto__ || _Object$getPrototypeOf(Plugin.prototype), '__destroy', this).call(this);
      this.__dispatcher.dom.removePlugin(this.__id);
      delete this.__dispatcher;
      delete this.$dom;
      this.destroyed = true;
    }
    /**
     * to tell us if the plugin can be operable, can be dynamic change
     * @type {boolean}
     */

  }, {
    key: '$operable',
    set: function set(val) {
      if (!isBoolean(val)) return;
      this.$dom.style.pointerEvents = val ? 'auto' : 'none';
      this.__operable = val;
    },
    get: function get$$1() {
      return this.__operable;
    }
    /**
     * the z-index level, higher when you set higher
     * @type {boolean}
     */

  }, {
    key: '$level',
    set: function set(val) {
      if (!isInteger$2(val)) return;
      this.__level = val;
      this.__dispatcher._sortZIndex();
    },
    get: function get$$1() {
      return this.__level;
    }
  }, {
    key: '$autoFocus',
    get: function get$$1() {
      return this.__autoFocus;
    },
    set: function set(val) {
      this.__autoFocus = val;
      this.__dispatcher.dom._autoFocusToVideo(this.$dom, !val);
    }
  }]);

  return Plugin;
}(VideoWrapper)) || _class$2);

var _dec$3, _dec2$2, _dec3$1$1, _dec4$1$1, _dec5$1$1, _dec6$1, _class$3;

function _applyDecoratedDescriptor$2(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}
function targetCheck(target) {
  if (target === 'video') target = 'videoElement';
  if (!isElement(this[target])) throw new TypeError('Your target "' + target + '" is not a legal HTMLElement');

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [target].concat(args);
}
function attrOperationCheck(target, attr, val) {
  if (!isString(attr)) throw new TypeError('to handle dom\'s attribute or style, your attr parameter must be string, but not ' + attr + ' in ' + (typeof attr === 'undefined' ? 'undefined' : _typeof(attr)));
  if (!isString(target)) throw new TypeError('to handle dom\'s attribute or style, your target parameter must be string, , but not ' + target + ' in ' + (typeof target === 'undefined' ? 'undefined' : _typeof(target)));
  return [target, attr, val];
}
/**
 * <pre>
 * Dom work for Dispatcher.
 * It take charge of dom management of Dispatcher.
 * </pre>
 */
var Dom = (_dec$3 = waituntil('__dispatcher.videoConfigReady'), _dec2$2 = before(attrOperationCheck, targetCheck), _dec3$1$1 = before(attrOperationCheck, targetCheck), _dec4$1$1 = before(attrOperationCheck, targetCheck), _dec5$1$1 = before(attrOperationCheck, targetCheck), _dec6$1 = before(targetCheck), _class$3 = function () {
  _createClass(Dom, [{
    key: 'mouseInVideo',

    /**
     * to mark is the mouse in the video area
     */

    /**
     * all plugin's dom element set
     */
    get: function get$$1() {
      return this.__mouseInVideo;
    }
    /**
     * the html to restore when we are destroyed
     */
    ,
    set: function set(val) {
      this.__mouseInVideo = !!val;
    }
    /**
     * collection of video extension nodes
     * some nodes can be regarded as part of video (such as penetrate element)
     * so we store them here
     */

  }, {
    key: 'videoExtendedNodes',
    get: function get$$1() {
      return this.__videoExtendedNodes;
    }
  }]);

  function Dom(config, dispatcher) {
    _classCallCheck(this, Dom);

    this.plugins = {};
    this.originHTML = '';
    this.__mouseInVideo = false;
    this.destroyed = false;
    this.__videoExtendedNodes = [];
    this.isFullscreen = false;
    this.fullscreenElement = undefined;

    var _ref = config || {},
        wrapper = _ref.wrapper;

    this.__dispatcher = dispatcher;
    if (!isElement(wrapper) && !isString(wrapper)) throw new TypeError('Wrapper can only be string or HTMLElement, but not ' + (typeof wrapper === 'undefined' ? 'undefined' : _typeof(wrapper)));
    var $wrapper = $(wrapper);
    // TODO: we have to decalre length for wrapper
    // $FlowFixMe: we have to decalre length here
    if ($wrapper.length === 0) {
      throw new TypeError('Can not get dom node accroding wrapper. Please check your wrapper');
    }
    /**
     * the referrence of the dom wrapper of whole Chimee
     */
    // $FlowFixMe: support computed key on nodewrap
    this.wrapper = $wrapper[0];
    this.originHTML = this.wrapper.innerHTML;
    // if we find video element inside wrapper
    // we use it
    // or we create a video element by ourself.
    // $FlowFixMe: support computed key on nodewrap
    var videoElement = $wrapper.find('video')[0];
    if (!videoElement) {
      videoElement = document.createElement('video');
    }
    /**
     * referrence of video's dom element
     */
    this.installVideo(videoElement);
    this._fullscreenMonitor();
    index.on('fullscreenchange', this._fullscreenMonitor);
    // As some video attributes will missed when we switch kernel
    // we set a guarder for it
    // and we must make sure style be guarded
    var videoRequiredGuardedAttributes = isArray(config.videoRequiredGuardedAttributes) ? config.videoRequiredGuardedAttributes : [];
    if (videoRequiredGuardedAttributes.indexOf('style') < 0) {
      videoRequiredGuardedAttributes.unshift('style');
    }
    this.videoRequireGuardedAttributes = videoRequiredGuardedAttributes;
  }

  _createClass(Dom, [{
    key: 'installVideo',
    value: function installVideo(videoElement) {
      this.__videoExtendedNodes.push(videoElement);
      setAttr(videoElement, 'tabindex', -1);
      this._autoFocusToVideo(videoElement);
      if (!isElement(this.container)) {
        // create container
        if (videoElement.parentElement && isElement(videoElement.parentElement) && videoElement.parentElement !== this.wrapper) {
          this.container = videoElement.parentElement;
        } else {
          this.container = document.createElement('container');
          $(this.container).append(videoElement);
        }
      } else {
        var container = this.container;
        if (container.childNodes.length === 0) {
          container.appendChild(videoElement);
        } else {
          container.insertBefore(videoElement, container.childNodes[0]);
        }
      }
      // check container.position
      if (this.container.parentElement !== this.wrapper) {
        $(this.wrapper).append(this.container);
      }
      this.videoElement = videoElement;
      return videoElement;
    }
  }, {
    key: 'removeVideo',
    value: function removeVideo() {
      var videoElement = this.videoElement;
      this._autoFocusToVideo(this.videoElement, false);
      // when we destroy the chimee
      // binder is destroyed before dom
      // so we need to make a check here
      this.__dispatcher.binder && this.__dispatcher.binder.bindEventOnVideo(videoElement, true);
      $(videoElement).remove();
      delete this.videoElement;
      return videoElement;
    }

    /**
     * each plugin has its own dom node, this function will create one or them.
     * we support multiple kind of el
     * 1. Element, we will append this dom node on wrapper straight
     * 2. HTMLString, we will create dom based on this HTMLString and append it on wrapper
     * 3. string, we will transfer this string into hypen string, then we create a custom elment called by this and bind it on wrapper
     * 4. nothing, we will create a div and bind it on the wrapper
     */

  }, {
    key: 'insertPlugin',
    value: function insertPlugin(id, el) {
      var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!isString(id)) throw new TypeError('insertPlugin id parameter must be string');
      if (isElement(this.plugins[id])) {
        this.removePlugin(id);
      }
      if (isString(el)) {
        if (isHTMLString(el)) {
          var outer = document.createElement('div');
          outer.innerHTML = el;
          el = outer.children[0];
        } else {
          el = document.createElement(hypenate(el));
        }
      } else if (isObject(el)) {
        // $FlowFixMe: we have check el's type here and make sure it's an object
        option = el;
      }
      var _option = option,
          inner = _option.inner,
          penetrate = _option.penetrate;
      var _option2 = option,
          className = _option2.className;

      var node = el && isElement(el) ? el : document.createElement('div');
      if (isArray(className)) {
        className = className.join(' ');
      }
      if (isString(className)) {
        addClassName(node, className);
      }
      this.plugins[id] = node;
      var outerElement = inner ? this.container : this.wrapper;
      var originElement = inner ? this.videoElement : this.container;
      // auto forward the event if this plugin can be penetrate
      if (penetrate) {
        this.__dispatcher.binder.bindEventOnPenetrateNode(node);
        this.__videoExtendedNodes.push(node);
      }
      if (outerElement.lastChild === originElement) {
        outerElement.appendChild(node);
        return node;
      }
      outerElement.insertBefore(node, originElement.nextSibling);
      return node;
    }

    /**
     * remove plugin's dom
     */

  }, {
    key: 'removePlugin',
    value: function removePlugin(id) {
      if (!isString(id)) return;
      var dom = this.plugins[id];
      if (isElement(dom)) {
        dom.parentNode && dom.parentNode.removeChild(dom);
        this._autoFocusToVideo(dom, true);
      }

      var _ref2 = Dispatcher.getPluginConfig(id) || {},
          _ref2$penetrate = _ref2.penetrate,
          penetrate = _ref2$penetrate === undefined ? false : _ref2$penetrate;

      if (penetrate) this.__dispatcher.binder.bindEventOnPenetrateNode(dom, true);
      delete this.plugins[id];
    }

    /**
     * Set zIndex for a plugins list
     */

  }, {
    key: 'setPluginsZIndex',
    value: function setPluginsZIndex(plugins) {
      var _this = this;

      // $FlowFixMe: there are videoElment and container here
      plugins.forEach(function (key, index$$1) {
        return setStyle(key.match(/^(videoElement|container)$/) ? _this[key] : _this.plugins[key], 'z-index', ++index$$1);
      });
    }

    /**
     * set attribute on our dom
     * @param {string} attr attribute's name
     * @param {anything} val attribute's value
     * @param {string} target the HTMLElemnt string name, only support video/wrapper/container now
     */

  }, {
    key: 'setAttr',
    value: function setAttr$$1(target, attr, val) {
      // $FlowFixMe: flow do not support computed property/element on class, which is silly here.
      setAttr(this[target], attr, val);
    }
  }, {
    key: 'getAttr',
    value: function getAttr$$1(target, attr) {
      // $FlowFixMe: flow do not support computed property/element on class, which is silly here.
      return getAttr(this[target], attr);
    }
  }, {
    key: 'setStyle',
    value: function setStyle$$1(target, attr, val) {
      // $FlowFixMe: flow do not support computed property/element on class, which is silly here.
      setStyle(this[target], attr, val);
    }
  }, {
    key: 'getStyle',
    value: function getStyle$$1(target, attr) {
      // $FlowFixMe: flow do not support computed property/element on class, which is silly here.
      return getStyle(this[target], attr);
    }
  }, {
    key: 'requestFullscreen',
    value: function requestFullscreen(target) {
      // $FlowFixMe: flow do not support computed property/element on document, which is silly here.
      return index.open(this[target]);
    }
  }, {
    key: 'exitFullscreen',
    value: function exitFullscreen() {
      return index.exit();
    }
  }, {
    key: 'fullscreen',
    value: function fullscreen() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'container';

      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      return request ? this.requestFullscreen.apply(this, [target].concat(_toConsumableArray(args))) : this.exitFullscreen.apply(this, _toConsumableArray(args));
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.videoElement.focus();
    }
  }, {
    key: 'isNodeInsideVideo',
    value: function isNodeInsideVideo(node) {
      return this.__videoExtendedNodes.indexOf(node) > -1 || this.__videoExtendedNodes.reduce(function (flag, video) {
        if (flag) return flag;
        return isPosterityNode(video, node);
      }, false);
    }
  }, {
    key: 'migrateVideoRequiredGuardedAttributes',
    value: function migrateVideoRequiredGuardedAttributes(video) {
      var _this2 = this;

      var guardedAttributesAndValue = this.videoRequireGuardedAttributes.map(function (attr) {
        return [attr, getAttr(_this2.videoElement, attr)];
      });
      guardedAttributesAndValue.forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            attr = _ref4[0],
            value = _ref4[1];

        return setAttr(video, attr, value);
      });
    }

    /**
     * function called when we distory
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.removeVideo();
      index.off('fullscreenchange', this._fullscreenMonitor);
      this.wrapper.innerHTML = this.originHTML;
      delete this.wrapper;
      delete this.plugins;
      this.destroyed = true;
    }
  }, {
    key: '_autoFocusToVideo',
    value: function _autoFocusToVideo(element) {
      var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      /* istanbule ignore next */
      if (!isElement(element)) return;
      (remove ? removeEvent : addEvent)(element, 'mouseup', this._focusToVideo, false, true);
      (remove ? removeEvent : addEvent)(element, 'touchend', this._focusToVideo, false, true);
    }
  }, {
    key: '_focusToVideo',
    value: function _focusToVideo() {
      var x = window.scrollX;
      var y = window.scrollY;
      isFunction(this.videoElement.focus) && this.videoElement.focus();
      window.scrollTo(x, y);
    }
  }, {
    key: '_fullscreenMonitor',
    value: function _fullscreenMonitor(evt) {
      var element = index.fullscreenElement;
      var original = this.isFullscreen;
      if (!element || !isPosterityNode(this.wrapper, element) && element !== this.wrapper) {
        this.isFullscreen = false;
        this.fullscreenElement = undefined;
      } else {
        this.isFullscreen = true;
        this.fullscreenElement = this.wrapper === element ? 'wrapper' : this.container === element ? 'container' : this.videoElement === element ? 'video' : element;
      }
      if (isEvent(evt) && original !== this.isFullscreen) {
        this.__dispatcher.binder.triggerSync({
          name: 'fullscreenchange',
          target: 'esFullscreen',
          id: 'dispatcher'
        }, evt);
      }
    }
  }]);

  return Dom;
}(), _applyDecoratedDescriptor$2(_class$3.prototype, 'setAttr', [_dec$3, _dec2$2], _Object$getOwnPropertyDescriptor(_class$3.prototype, 'setAttr'), _class$3.prototype), _applyDecoratedDescriptor$2(_class$3.prototype, 'getAttr', [_dec3$1$1], _Object$getOwnPropertyDescriptor(_class$3.prototype, 'getAttr'), _class$3.prototype), _applyDecoratedDescriptor$2(_class$3.prototype, 'setStyle', [_dec4$1$1], _Object$getOwnPropertyDescriptor(_class$3.prototype, 'setStyle'), _class$3.prototype), _applyDecoratedDescriptor$2(_class$3.prototype, 'getStyle', [_dec5$1$1], _Object$getOwnPropertyDescriptor(_class$3.prototype, 'getStyle'), _class$3.prototype), _applyDecoratedDescriptor$2(_class$3.prototype, 'requestFullscreen', [_dec6$1], _Object$getOwnPropertyDescriptor(_class$3.prototype, 'requestFullscreen'), _class$3.prototype), _applyDecoratedDescriptor$2(_class$3.prototype, '_focusToVideo', [autobind], _Object$getOwnPropertyDescriptor(_class$3.prototype, '_focusToVideo'), _class$3.prototype), _applyDecoratedDescriptor$2(_class$3.prototype, '_fullscreenMonitor', [autobind], _Object$getOwnPropertyDescriptor(_class$3.prototype, '_fullscreenMonitor'), _class$3.prototype), _class$3);

var defaultContainerConfig = {
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'block'
};

// base css controller for container and wrapper

var Vessel = function Vessel(dispatcher, target, config) {
  var _this = this;

  _classCallCheck(this, Vessel);

  this.__dispatcher = dispatcher;
  this.__target = target;
  ['width', 'height', 'position', 'display'].forEach(function (key) {
    _Object$defineProperty(_this, key, {
      get: function get$$1() {
        return this.__dispatcher.dom.getStyle(this.__target, key);
      },
      set: function set(value) {
        if (isNumber(value)) {
          value = value + 'px';
        }
        if (!isString(value)) {
          throw new Error('The value of ' + key + ' in ' + this.__target + 'Config must be string, but not ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '.');
        }
        this.__dispatcher.dom.setStyle(this.__target, key, value);
        // return value;
      },

      configurable: true,
      enumerable: true
    });
  });
  deepAssign(this, config);
};

var _dec$4, _dec2$3, _dec3$2, _dec4$2, _class$4;

function _applyDecoratedDescriptor$3(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}
var secondaryReg = /^(before|after|_)/;
function secondaryChecker(key) {
  if (key.match(secondaryReg)) {
    return false;
  }
  return true;
}
/**
 * <pre>
 * event Bus class. Bus take charge of commuication between plugins and user.
 * Some of the event may trigger the kernel to do some task.
 * An event will run in four lifecycle
 * before -> processor -> main -> after -> side effect(_)
 * -------------------- emit period ----------------
 * before: once an event emit, it will run through plugins in bubble to know is it possible to run.
 * processor: if sth need to be done on kernel. It will tell kernel. If kernel will trigger event later, it will break down here. Else will run into trigger period
 * -------------------- trigger period -----------------
 * main: this procedure will trigger the main event in bubble, which means it can be stop in one plugin.
 * after: once event run through all events. It will trigger after event. This event will be trigger in broadcast way.
 * side effect(_): This events will always trigger once we bump into trigger period. So that you can know if the events been blocked. But it's not advice to listen on this effect.
 * </pre>
 */
var Bus = (_dec$4 = runnable(secondaryChecker), _dec2$3 = runnable(secondaryChecker, {
  backup: function backup() {
    return false;
  }
}), _dec3$2 = runnable(secondaryChecker), _dec4$2 = runnable(secondaryChecker, {
  backup: function backup() {
    return false;
  }
}), _class$4 = function () {
  /**
   * @param {Dispatcheer} dispatcher bus rely on dispatcher, so you mush pass dispatcher at first when you generate Bus.
   * @return {Bus}
   */

  /**
   * the handler set of all events
   * @type {Object}
   * @member events
   */
  function Bus(dispatcher, kind) {
    _classCallCheck(this, Bus);

    this.events = {};
    this.onceMap = {};

    /**
     * the referrence to dispatcher
     * @type {Dispatcher}
     */
    this.__dispatcher = dispatcher;
    this.__kind = kind;
  }
  /**
   * [Can only be called in dispatcher]bind event on bus.
   */


  _createClass(Bus, [{
    key: 'on',
    value: function on(id, eventName, fn, stage) {
      this._addEvent([eventName, stage, id], fn);
    }
    /**
     * [Can only be called in dispatcher]remove event off bus. Only suggest one by one.
     */

  }, {
    key: 'off',
    value: function off(id, eventName, fn, stage) {
      var keys = [eventName, stage, id];
      var deleted = this._removeEvent(keys, fn);
      if (deleted) return;
      var handler = this._getHandlerFromOnceMap(keys, fn);
      if (isFunction(handler)) {
        this._removeEvent(keys, handler) && this._removeFromOnceMap(keys, fn, handler);
      }
    }
    /**
     * [Can only be called in dispatcher]bind event on bus and remove it once event is triggered.
     */

  }, {
    key: 'once',
    value: function once(id, eventName, fn, stage) {
      var bus = this;
      var keys = [eventName, stage, id];
      var handler = function handler() {
        // keep the this so that it can run
        bind(fn, this).apply(undefined, arguments);
        bus._removeEvent(keys, handler);
        bus._removeFromOnceMap(keys, fn, handler);
      };
      this._addEvent(keys, handler);
      this._addToOnceMap(keys, fn, handler);
    }
    /**
     * [Can only be called in dispatcher]emit an event, which will run before -> processor period.
     * It may stop in before period.
     * @param  {string}    key event's name
     * @param  {anything} args other argument will be passed into handler
     * @return {Promise}  this promise maybe useful if the event would not trigger kernel event. In that will you can know if it runs successful. But you can know if the event been stopped by the promise.
     */

  }, {
    key: 'emit',
    value: function emit(key) {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var event = this.events[key];
      if (isEmpty(event)) {
        if (selfProcessorEvents.indexOf(key) > -1) return _Promise.resolve();
        // $FlowFixMe: conditional return here
        return this._eventProcessor.apply(this, [key, { sync: false }].concat(_toConsumableArray(args)));
      }
      var beforeQueue = this._getEventQueue(event.before, this.__dispatcher.order);
      return runRejectableQueue.apply(undefined, [beforeQueue].concat(_toConsumableArray(args))).then(function () {
        if (selfProcessorEvents.indexOf(key) > -1) return;
        return _this._eventProcessor.apply(_this, [key, { sync: false }].concat(_toConsumableArray(args)));
      }).catch(function (error) {
        if (isError(error)) _this.__dispatcher.throwError(error);
        return _Promise.reject(error);
      });
    }
    /**
     * [Can only be called in dispatcher]emit an event, which will run before -> processor period synchronize.
     * It may stop in before period.
     * @param  {string}    key event's name
     * @param  {anything} args other argument will be passed into handler
     * @return {Promise}  this promise maybe useful if the event would not trigger kernel event. In that will you can know if it runs successful. But you can know if the event been stopped by the promise.
     */

  }, {
    key: 'emitSync',
    value: function emitSync(key) {
      var event = this.events[key];

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (isEmpty(event)) {
        if (selfProcessorEvents.indexOf(key) > -1) return true;
        // $FlowFixMe: conditional return here
        return this._eventProcessor.apply(this, [key, { sync: true }].concat(_toConsumableArray(args)));
      }
      var beforeQueue = this._getEventQueue(event.before, this.__dispatcher.order);
      return runStoppableQueue.apply(undefined, [beforeQueue].concat(_toConsumableArray(args))) && (selfProcessorEvents.indexOf(key) > -1 ||
      // $FlowFixMe: conditional return here
      this._eventProcessor.apply(this, [key, { sync: true }].concat(_toConsumableArray(args))));
    }
    /**
     * [Can only be called in dispatcher]trigger an event, which will run main -> after -> side effect period
     * @param  {string}    key event's name
     * @param  {anything} args
     * @return {Promise|undefined}    you can know if event trigger finished~ However, if it's unlegal
     */

  }, {
    key: 'trigger',
    value: function trigger(key) {
      var _this2 = this;

      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var event = this.events[key];
      if (isEmpty(event)) {
        return _Promise.resolve(true);
      }
      var mainQueue = this._getEventQueue(event.main, this.__dispatcher.order);
      return runRejectableQueue.apply(undefined, [mainQueue].concat(_toConsumableArray(args))).then(function () {
        var afterQueue = _this2._getEventQueue(event.after, _this2.__dispatcher.order);
        return runRejectableQueue.apply(undefined, [afterQueue].concat(_toConsumableArray(args)));
      }).then(function () {
        return _this2._runSideEffectEvent.apply(_this2, [key, _this2.__dispatcher.order].concat(_toConsumableArray(args)));
      }).catch(function (error) {
        if (isError(error)) _this2.__dispatcher.throwError(error);
        return _this2._runSideEffectEvent.apply(_this2, [key, _this2.__dispatcher.order].concat(_toConsumableArray(args)));
      });
    }
    /**
     * [Can only be called in dispatcher]trigger an event, which will run main -> after -> side effect period in synchronize
     * @param  {string}    key event's name
     * @param  {anything} args
     * @return {boolean}    you can know if event trigger finished~ However, if it's unlegal
     */

  }, {
    key: 'triggerSync',
    value: function triggerSync(key) {
      var event = this.events[key];
      if (isEmpty(event)) {
        return true;
      }
      var mainQueue = this._getEventQueue(event.main, this.__dispatcher.order);
      var afterQueue = this._getEventQueue(event.after, this.__dispatcher.order);

      for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      var result = runStoppableQueue.apply(undefined, [mainQueue].concat(_toConsumableArray(args))) && runStoppableQueue.apply(undefined, [afterQueue].concat(_toConsumableArray(args)));
      this._runSideEffectEvent.apply(this, [key, this.__dispatcher.order].concat(_toConsumableArray(args)));
      return result;
    }
    /**
     * destroy hook which will be called when object destroy
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      delete this.events;
      delete this.__dispatcher;
    }
    /**
     * add event into bus
     * @private
     * @param {Array} keys keys map pointing to position to put event handler
     * @param {function} fn handler to put
     */

  }, {
    key: '_addEvent',
    value: function _addEvent(keys, fn) {
      keys = deepClone(keys);
      var id = keys.pop();
      var target = keys.reduce(function (target, key) {
        target[key] = target[key] || {};
        return target[key];
      }, this.events);
      // events will store like {play: {main: {plugin: []}}}
      target[id] = target[id] || [];
      target[id].push(fn);
    }
    /**
     * remove event from bus
     * @private
     * @param {Array} keys keys map pointing to position to get event handler
     * @param {function} fn handler to put
     */

  }, {
    key: '_removeEvent',
    value: function _removeEvent(keys, fn) {
      keys = deepClone(keys);
      var id = keys.pop();
      var target = this.events;
      var backtrackList = [];
      for (var i = 0, len = keys.length; i < len; i++) {
        var son = target[keys[i]];
        // if we can't find the event binder, just return
        if (isEmpty(son)) return;
        backtrackList.push([target, keys[i]]);
        target = son;
      }
      var queue = target[id] || [];
      var index$$1 = queue.indexOf(fn);
      var hasFn = index$$1 > -1;
      // if we found handler remove it
      if (hasFn) {
        queue.splice(index$$1, 1);
      }
      // if this plugin has no event binding, we remove this event session, which make us perform faster in emit & trigger period.
      if (queue.length < 1) {
        delete target[id];
        // backtrack to remove the redudant object
        for (var _i = backtrackList.length - 1; _i > -1; _i--) {
          var _backtrackList$_i = _slicedToArray(backtrackList[_i], 2),
              parent = _backtrackList$_i[0],
              key = _backtrackList$_i[1];

          if (!isEmpty(parent[key])) break;
          delete parent[key];
        }
      }
      return hasFn;
    }
  }, {
    key: '_addToOnceMap',
    value: function _addToOnceMap(keys, fn, handler) {
      var key = keys.join('-');
      var map = this.onceMap[key] = this.onceMap[key] || new _Map();
      if (!map.has(fn)) map.set(fn, []);
      var handlers = map.get(fn);
      // $FlowFixMe: flow do not understand map yet
      handlers.push(handler);
    }
  }, {
    key: '_removeFromOnceMap',
    value: function _removeFromOnceMap(keys, fn, handler) {
      var key = keys.join('-');
      var map = this.onceMap[key];
      // do not need to check now
      // if(isVoid(map) || !map.has(fn)) return;
      var handlers = map.get(fn);
      var index$$1 = handlers.indexOf(handler);
      handlers.splice(index$$1, 1);
      if (isEmpty(handlers)) map.delete(fn);
    }
  }, {
    key: '_getHandlerFromOnceMap',
    value: function _getHandlerFromOnceMap(keys, fn) {
      var key = keys.join('-');
      var map = this.onceMap[key];
      if (isVoid(map) || !map.has(fn)) return;
      var handlers = map.get(fn);
      return handlers[0];
    }
    /**
     * get event stage by evnet key name
     * @private
     * @param  {key} key event's name
     * @return {stage}  event stage
     */

  }, {
    key: '_getEventStage',
    value: function _getEventStage(key) {
      var secondaryCheck = key.match(secondaryReg);
      // $FlowFixMe: make sure it's event stage here
      var stage = secondaryCheck && secondaryCheck[0] || 'main';
      if (secondaryCheck) {
        key = camelize(key.replace(secondaryReg, ''));
      }
      return { stage: stage, key: key };
    }
    /**
     * get event handlers queue to run
     * @private
     * @param  {Object} handlerSet the object include all handler
     * @param  {Array} Array form of plugin id
     * @return {Array<Function>} event handler in queue to run
     */

  }, {
    key: '_getEventQueue',
    value: function _getEventQueue(handlerSet, order) {
      var _this3 = this;

      order = isArray(order) ? order.concat(['_vm']) : ['_vm'];
      return isEmpty(handlerSet) ? [] : order.reduce(function (queue, id) {
        if (isEmpty(handlerSet[id]) || !isArray(handlerSet[id]) ||
        // in case plugins is missed
        // _vm indicate the user. This is the function for user
        !_this3.__dispatcher.plugins[id] && id !== '_vm') {
          return queue;
        }
        return queue.concat(handlerSet[id].map(function (fn) {
          // bind context for plugin instance
          return bind(fn, _this3.__dispatcher.plugins[id] || _this3.__dispatcher.vm);
        }));
      }, []);
    }
    /**
     * event processor period. If event needs call kernel function.
     * I will called here.
     * If kernel will reponse. I will stop here.
     * Else I will trigger next period.
     * @param  {string}    key event's name
     * @param  {boolean}  options.sync we will take triggerSync if true, otherwise we will run trigger. default is false
     * @param  {anything} args
     * @return {Promise|undefined}
     */

  }, {
    key: '_eventProcessor',
    value: function _eventProcessor(key, _ref) {
      var sync = _ref.sync;

      var isKernelMethod = kernelMethods.indexOf(key) > -1;
      var isDomMethod = domMethods.indexOf(key) > -1;
      var isDispatcherMethod = Boolean(dispatcherEventMethodMap[key]);

      for (var _len5 = arguments.length, args = Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        args[_key5 - 2] = arguments[_key5];
      }

      if (isKernelMethod || isDomMethod || isDispatcherMethod) {
        if (isDispatcherMethod) {
          var _dispatcher;

          (_dispatcher = this.__dispatcher)[dispatcherEventMethodMap[key]].apply(_dispatcher, _toConsumableArray(args));
        } else {
          var _dispatcher2;

          (_dispatcher2 = this.__dispatcher[isKernelMethod ? 'kernel' : 'dom'])[key].apply(_dispatcher2, _toConsumableArray(args));
        }
        if (videoEvents.indexOf(key) > -1 || domEvents.indexOf(key) > -1) return true;
      }
      // $FlowFixMe: flow do not support computed sytax on classs, but it's ok here
      return this[sync ? 'triggerSync' : 'trigger'].apply(this, [key].concat(_toConsumableArray(args)));
    }
    /**
     * run side effect period
     * @param  {string}    key event's name
     * @param  {args} args
     */

  }, {
    key: '_runSideEffectEvent',
    value: function _runSideEffectEvent(key, order) {
      for (var _len6 = arguments.length, args = Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
        args[_key6 - 2] = arguments[_key6];
      }

      var event = this.events[key];
      if (isEmpty(event)) {
        return false;
      }
      var queue = this._getEventQueue(event._, order);
      queue.forEach(function (run) {
        return run.apply(undefined, _toConsumableArray(args));
      });
      return true;
    }
  }]);

  return Bus;
}(), _applyDecoratedDescriptor$3(_class$4.prototype, 'emit', [_dec$4], _Object$getOwnPropertyDescriptor(_class$4.prototype, 'emit'), _class$4.prototype), _applyDecoratedDescriptor$3(_class$4.prototype, 'emitSync', [_dec2$3], _Object$getOwnPropertyDescriptor(_class$4.prototype, 'emitSync'), _class$4.prototype), _applyDecoratedDescriptor$3(_class$4.prototype, 'trigger', [_dec3$2], _Object$getOwnPropertyDescriptor(_class$4.prototype, 'trigger'), _class$4.prototype), _applyDecoratedDescriptor$3(_class$4.prototype, 'triggerSync', [_dec4$2], _Object$getOwnPropertyDescriptor(_class$4.prototype, 'triggerSync'), _class$4.prototype), _class$4);

var _dec$5, _dec2$4, _dec3$3, _dec4$3, _dec5$2, _dec6$2, _dec7$1, _dec8$1, _dec9$1, _dec10$1, _dec11$1, _class$5;

function _applyDecoratedDescriptor$4(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var secondaryReg$1 = /^(before|after|_)/;

/**
 * In logic before 0.10.0, we use 'c_' and 'w_' to mark event of container and wrapper
 * we need to keep that logic work until next major version.
 * @param {string} name 事件名字
 */
function getEventTargetByOldLogic(oldName) {
  var targetKeyReg = new RegExp('^(c|w)_');
  var matches = oldName.match(targetKeyReg);
  if (matches) {
    var _name = oldName.replace(targetKeyReg, '');
    var _target = oldName.indexOf('c') === 0 ? 'container' : 'wrapper';
    return { name: _name, target: _target };
  } else if (oldName === 'error') {
    return { name: 'error', target: 'kernel' };
  }
  return false;
}

function getEventStage(name) {
  var matches = name.match(secondaryReg$1);
  // $FlowFixMe: We make sure it's event stage here
  var stage = matches && matches[0] || 'main';
  if (matches) {
    name = camelize(name.replace(secondaryReg$1, ''));
  }
  return { name: name, stage: stage };
}

function getEventTargetByEventName(name) {
  if (videoEvents.indexOf(name) > -1) return 'video';
  if (kernelEvents.indexOf(name) > -1) return 'kernel';
  if (domEvents.indexOf(name) > -1) return 'video-dom';
  if (esFullscreenEvents.indexOf(name) > -1) return 'esFullscreen';
  return 'plugin';
}

function getEventInfo(_ref) {
  var name = _ref.name,
      target = _ref.target,
      stage = _ref.stage;

  var oldInfo = getEventTargetByOldLogic(name);
  if (oldInfo) {
    name = oldInfo.name;
    target = oldInfo.target;
  }

  var _getEventStage = getEventStage(name),
      newStage = _getEventStage.stage,
      newName = _getEventStage.name;

  name = newName;

  if (!target) {
    target = getEventTargetByEventName(name);
  }

  return {
    name: name,
    stage: stage || newStage,
    target: target
  };
}

function prettifyEventParameter(info) {
  var id = info.id,
      fn = info.fn;

  var _getEventInfo = getEventInfo(info),
      name = _getEventInfo.name,
      target = _getEventInfo.target,
      stage = _getEventInfo.stage;

  if (!isFunction(fn)) {
    throw new Error('You must provide a function to handle with event ' + name + ', but not ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
  }
  return {
    id: id,
    fn: fn,
    name: name,
    target: target,
    stage: stage
  };
}

function isEventEmitalbe(_ref2) {
  var id = _ref2.id,
      name = _ref2.name;

  if (!name || !isString(name) || secondaryReg$1.test(name)) {
    Log.error('You must provide a legal event name, which is string and could not started with before/after/_');
    return false;
  }
  if (!id || !isString(id)) {
    Log.error('You must provide the id of emitter');
    return false;
  }
  return true;
}

function checkEventEmitParameter(info) {
  // $FlowFixMe: the info match requirement here
  info.target = getEventInfo(info).target;

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [info].concat(_toConsumableArray(args));
}

var Binder = (_dec$5 = before(prettifyEventParameter), _dec2$4 = before(prettifyEventParameter), _dec3$3 = before(prettifyEventParameter), _dec4$3 = runnable(isEventEmitalbe), _dec5$2 = before(checkEventEmitParameter), _dec6$2 = runnable(isEventEmitalbe, {
  backup: function backup() {
    return false;
  }
}), _dec7$1 = before(checkEventEmitParameter), _dec8$1 = runnable(isEventEmitalbe), _dec9$1 = before(checkEventEmitParameter), _dec10$1 = runnable(isEventEmitalbe, {
  backup: function backup() {
    return false;
  }
}), _dec11$1 = before(checkEventEmitParameter), _class$5 = function () {
  function Binder(dispatcher) {
    _classCallCheck(this, Binder);

    this.__dispatcher = dispatcher;
    this.kinds = ['kernel', 'container', 'wrapper', 'video', 'video-dom', 'plugin', 'esFullscreen'];
    this.buses = {};
    this.bindedEventNames = {};
    this.bindedEventInfo = {};
    this.pendingEventsInfo = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _getIterator(this.kinds), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var kind = _step.value;

        this.bindedEventNames[kind] = [];
        this.bindedEventInfo[kind] = [];
        this.pendingEventsInfo[kind] = [];
        this.buses[kind] = new Bus(dispatcher, kind);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  _createClass(Binder, [{
    key: 'on',
    value: function on(_ref3) {
      var target = _ref3.target,
          id = _ref3.id,
          name = _ref3.name,
          fn = _ref3.fn,
          stage = _ref3.stage;

      this._addEventListenerOnTarget({
        name: name,
        target: target,
        id: id
      });
      return this.buses[target].on(id, name, fn, stage);
    }
  }, {
    key: 'off',
    value: function off(_ref4) {
      var target = _ref4.target,
          id = _ref4.id,
          name = _ref4.name,
          fn = _ref4.fn,
          stage = _ref4.stage;

      var ret = this.buses[target].off(id, name, fn, stage);
      this._removeEventListenerOnTargetWhenIsUseless({ name: name, target: target });
      return ret;
    }
  }, {
    key: 'once',
    value: function once(_ref5) {
      var target = _ref5.target,
          id = _ref5.id,
          name = _ref5.name,
          fn = _ref5.fn,
          stage = _ref5.stage;

      return this.buses[target].once(id, name, fn, stage);
    }
  }, {
    key: 'emit',
    value: function emit(_ref6) {
      var _buses$target;

      var target = _ref6.target,
          name = _ref6.name;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_buses$target = this.buses[target]).emit.apply(_buses$target, [name].concat(_toConsumableArray(args)));
    }
  }, {
    key: 'emitSync',
    value: function emitSync(_ref7) {
      var _buses$target2;

      var target = _ref7.target,
          name = _ref7.name;

      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return (_buses$target2 = this.buses[target]).emitSync.apply(_buses$target2, [name].concat(_toConsumableArray(args)));
    }
  }, {
    key: 'trigger',
    value: function trigger(_ref8) {
      var _buses$target3;

      var target = _ref8.target,
          name = _ref8.name;

      for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      return (_buses$target3 = this.buses[target]).trigger.apply(_buses$target3, [name].concat(_toConsumableArray(args)));
    }
  }, {
    key: 'triggerSync',
    value: function triggerSync(_ref9) {
      var _buses$target4;

      var target = _ref9.target,
          name = _ref9.name;

      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      return (_buses$target4 = this.buses[target]).triggerSync.apply(_buses$target4, [name].concat(_toConsumableArray(args)));
    }

    // when we create a penetrate plugin, we need to rebind video events on it

  }, {
    key: 'bindEventOnPenetrateNode',
    value: function bindEventOnPenetrateNode(node) {
      var _this = this;

      var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this.bindedEventInfo['video-dom'].forEach(function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
            name = _ref11[0],
            fn = _ref11[1];

        remove ? removeEvent(node, name, fn) : _this._addEventOnDom(node, name, fn);
      });
    }

    // when we switch kernel, we will create a new video.
    // we need to transfer the event from the oldvideo to it.

  }, {
    key: 'bindEventOnVideo',
    value: function bindEventOnVideo(node) {
      var _this2 = this;

      var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this.bindedEventInfo['video-dom'].concat(this.bindedEventInfo.video).forEach(function (_ref12) {
        var _ref13 = _slicedToArray(_ref12, 2),
            name = _ref13[0],
            fn = _ref13[1];

        remove ? removeEvent(node, name, fn) : _this2._addEventOnDom(node, name, fn);
      });
    }

    // As penetrate plugin is considered to be part of video
    // we need to transfer event for it
    // so we need some specail event handler

  }, {
    key: 'listenOnMouseMoveEvent',
    value: function listenOnMouseMoveEvent(node) {
      var _this3 = this;

      var dom = this.__dispatcher.dom;
      var target = 'video-dom';
      var id = '_vm';
      mustListenVideoDomEvents.forEach(function (name) {
        var fn = function fn() {
          for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          var _args$ = args[0],
              toElement = _args$.toElement,
              currentTarget = _args$.currentTarget,
              relatedTarget = _args$.relatedTarget,
              type = _args$.type;

          var to = toElement || relatedTarget;
          // As we support penetrate plugin, the video dom event may be differnet.
          if (dom.mouseInVideo && type === 'mouseleave' && !dom.isNodeInsideVideo(to)) {
            dom.mouseInVideo = false;
            return _this3.triggerSync.apply(_this3, [{
              target: target,
              name: name,
              id: id
            }].concat(args));
          }
          if (!dom.mouseInVideo && type === 'mouseenter' && dom.isNodeInsideVideo(currentTarget)) {
            dom.mouseInVideo = true;
            return _this3.triggerSync.apply(_this3, [{
              target: target,
              name: name,
              id: id
            }].concat(args));
          }
        };
        _this3._addEventOnDom(node, name, fn);
        // this function is only used once now
        // so we do not cover this branch
        // but we still keep this judegement
        /* istanbul ignore else  */
        if (_this3.bindedEventNames[target].indexOf(name) < 0) {
          _this3.bindedEventNames[target].push(name);
          // $FlowFixMe: fn must be function now
          _this3.bindedEventInfo[target].push([name, fn]);
        }
      });
    }

    // When we switch kernel, we need to rebind the events

  }, {
    key: 'migrateKernelEvent',
    value: function migrateKernelEvent(oldKernel, newKernel) {
      var bindedEventInfoList = this.bindedEventInfo.kernel;
      bindedEventInfoList.forEach(function (_ref14) {
        var _ref15 = _slicedToArray(_ref14, 2),
            name = _ref15[0],
            fn = _ref15[1];

        oldKernel.off(name, fn);
        newKernel.on(name, fn);
      });
    }

    // when we destroy, we remove all binder

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this4 = this;

      this.kinds.forEach(function (target) {
        if (target === 'kernel') {
          _this4.bindedEventInfo.kernel.forEach(function (_ref16) {
            var _ref17 = _slicedToArray(_ref16, 2),
                name = _ref17[0],
                fn = _ref17[1];

            _this4.__dispatcher.kernel.off(name, fn);
          });
        } else {
          var targetDom = _this4._getTargetDom(target);
          _this4.bindedEventInfo[target].forEach(function (_ref18) {
            var _ref19 = _slicedToArray(_ref18, 2),
                name = _ref19[0],
                fn = _ref19[1];

            removeEvent(targetDom, name, fn);

            if (target === 'video-dom') {
              _this4.__dispatcher.dom.videoExtendedNodes.forEach(function (node) {
                return removeEvent(node, name, fn);
              });
            }
          });
        }
        _this4.bindedEventInfo.kernel = [];
        _this4.bindedEventNames.kernel = [];
      });
    }
  }, {
    key: '_addEventOnDom',
    value: function _addEventOnDom(element, key, fn) {
      if (passiveEvents.indexOf(key) > -1) {
        return addEvent(element, key, fn, false, { passive: true });
      }
      addEvent(element, key, fn);
    }

    // Some event needs us to transfer it from the real target
    // such as dom event

  }, {
    key: '_addEventListenerOnTarget',
    value: function _addEventListenerOnTarget(_ref20) {
      var _this5 = this;

      var name = _ref20.name,
          target = _ref20.target,
          id = _ref20.id;

      if (!this._isEventNeedToBeHandled(target, name)) return;
      var fn = void 0;
      // if this event has been binded, return;
      if (this.bindedEventNames[target].indexOf(name) > -1) return;
      var targetDom = this._getTargetDom(target);
      // choose the correspond method to bind
      if (target === 'kernel') {
        if (!this.__dispatcher.kernel) {
          this.addPendingEvent(target, name, id);
          return;
        }
        fn = function fn() {
          for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          return _this5.triggerSync.apply(_this5, [{ target: target, name: name, id: 'kernel' }].concat(args));
        };
        this.__dispatcher.kernel.on(name, fn);
      } else if (target === 'container' || target === 'wrapper') {
        fn = function fn() {
          for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            args[_key8] = arguments[_key8];
          }

          return _this5.triggerSync.apply(_this5, [{ target: target, name: name, id: target }].concat(args));
        };
        this._addEventOnDom(targetDom, name, fn);
      } else if (target === 'video') {
        fn = function fn() {
          for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            args[_key9] = arguments[_key9];
          }

          return _this5.trigger.apply(_this5, [{ target: target, name: name, id: target }].concat(args));
        };
        this._addEventOnDom(targetDom, name, fn);
      } else if (target === 'video-dom') {
        fn = function fn() {
          for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
          }

          return _this5.triggerSync.apply(_this5, [{ target: target, name: name, id: target }].concat(args));
        };
        this.__dispatcher.dom.videoExtendedNodes.forEach(function (node) {
          return _this5._addEventOnDom(node, name, fn);
        });
        this._addEventOnDom(targetDom, name, fn);
      }
      this.bindedEventNames[target].push(name);
      // $FlowFixMe: fn must be function now
      this.bindedEventInfo[target].push([name, fn]);
    }

    // when we off one event, we can remove the useless binder
    // actually we should remove on once event too
    // but it seems ugliy
    // TODO: add this function on once event too

  }, {
    key: '_removeEventListenerOnTargetWhenIsUseless',
    value: function _removeEventListenerOnTargetWhenIsUseless(_ref21) {
      var name = _ref21.name,
          target = _ref21.target;

      if (!this._isEventNeedToBeHandled(target, name)) return;
      var eventNamesList = this.bindedEventNames[target];
      var nameIndex = eventNamesList.indexOf(name);
      // if we have not bind this event before, we omit it
      if (nameIndex < 0) return;
      // if the buses still have another function on bind, we do not need to remove the binder
      if (!isEmpty(this.buses[target].events[name])) return;

      // we fetch the binded function from bindedEventInfo
      var bindedEventInfoList = this.bindedEventInfo[target];
      var fn = void 0;
      var index$$1 = void 0;
      for (index$$1 = 0; index$$1 < bindedEventInfoList.length; index$$1++) {
        if (bindedEventInfoList[index$$1][0] === name) {
          fn = bindedEventInfoList[index$$1][1];
          break;
        }
      }
      if (!isFunction(fn)) return;

      if (target === 'kernel') {
        this.__dispatcher.kernel.off(name, fn);
      } else {
        var targetDom = this._getTargetDom(target);

        removeEvent(targetDom, name, fn);

        // When we remove something on video dom, we also need to remove event on penetrate plugin
        if (target === 'video-dom') {
          this.__dispatcher.dom.videoExtendedNodes.forEach(function (node) {
            // $FlowFixMe: fn is function now
            removeEvent(node, name, fn);
          });
        }
      }

      bindedEventInfoList.splice(index$$1, 1);
      eventNamesList.splice(nameIndex, 1);
    }
  }, {
    key: '_getTargetDom',
    value: function _getTargetDom(target) {
      var targetDom = void 0;
      switch (target) {
        case 'container':
        case 'wrapper':
          // $FlowFixMe: fix dom index bug
          targetDom = this.__dispatcher.dom[target];
          break;
        default:
          targetDom = this.__dispatcher.dom.videoElement;
          break;
      }
      return targetDom;
    }
  }, {
    key: '_isEventNeedToBeHandled',
    value: function _isEventNeedToBeHandled(target, name) {
      // the plugin target do not need us to transfer
      // we have listened on esFullscreen in dom
      // we have listened mustListenVideoDomEvents
      // so the events above do not need to rebind
      return target !== 'plugin' && target !== 'esFullscreen' && (mustListenVideoDomEvents.indexOf(name) < 0 || target !== 'video');
    }
  }, {
    key: 'addPendingEvent',
    value: function addPendingEvent(target, name, id) {
      this.pendingEventsInfo[target].push([name, id]);
    }
  }, {
    key: 'applyPendingEvents',
    value: function applyPendingEvents(target) {
      var pendingEvents = this.pendingEventsInfo[target];
      var pendingEventsCopy = pendingEvents.splice(0, pendingEvents.length);
      while (pendingEventsCopy.length) {
        var _pendingEventsCopy$po = pendingEventsCopy.pop(),
            _pendingEventsCopy$po2 = _slicedToArray(_pendingEventsCopy$po, 2),
            _name2 = _pendingEventsCopy$po2[0],
            id = _pendingEventsCopy$po2[1];

        this._addEventListenerOnTarget({ name: _name2, target: target, id: id });
      }
    }
  }]);

  return Binder;
}(), _applyDecoratedDescriptor$4(_class$5.prototype, 'on', [_dec$5], _Object$getOwnPropertyDescriptor(_class$5.prototype, 'on'), _class$5.prototype), _applyDecoratedDescriptor$4(_class$5.prototype, 'off', [_dec2$4], _Object$getOwnPropertyDescriptor(_class$5.prototype, 'off'), _class$5.prototype), _applyDecoratedDescriptor$4(_class$5.prototype, 'once', [_dec3$3], _Object$getOwnPropertyDescriptor(_class$5.prototype, 'once'), _class$5.prototype), _applyDecoratedDescriptor$4(_class$5.prototype, 'emit', [_dec4$3, _dec5$2], _Object$getOwnPropertyDescriptor(_class$5.prototype, 'emit'), _class$5.prototype), _applyDecoratedDescriptor$4(_class$5.prototype, 'emitSync', [_dec6$2, _dec7$1], _Object$getOwnPropertyDescriptor(_class$5.prototype, 'emitSync'), _class$5.prototype), _applyDecoratedDescriptor$4(_class$5.prototype, 'trigger', [_dec8$1, _dec9$1], _Object$getOwnPropertyDescriptor(_class$5.prototype, 'trigger'), _class$5.prototype), _applyDecoratedDescriptor$4(_class$5.prototype, 'triggerSync', [_dec10$1, _dec11$1], _Object$getOwnPropertyDescriptor(_class$5.prototype, 'triggerSync'), _class$5.prototype), _class$5);

var _dec$6, _dec2$5, _dec3$4, _dec4$4, _dec5$3, _dec6$3, _class$6;

function _applyDecoratedDescriptor$5(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}
var pluginConfigSet = {};
var kernelsSet = {};
function convertNameIntoId(name) {
  if (!isString(name)) throw new Error('Plugin\'s name must be a string, but not "' + name + '" in ' + (typeof name === 'undefined' ? 'undefined' : _typeof(name)));
  return camelize(name);
}
function checkPluginConfig(config) {
  if (isFunction(config)) {
    if (!(config.prototype instanceof Plugin)) {
      throw new TypeError('Your are trying to install plugin ' + config.name + ', but it\'s not extends from Chimee.plugin.');
    }
    return;
  }
  if (!isObject(config) || isEmpty(config)) throw new TypeError('plugin\'s config must be an Object, but not "' + config + '" in ' + (typeof config === 'undefined' ? 'undefined' : _typeof(config)));
  var name = config.name;

  if (!isString(name) || name.length < 1) throw new TypeError('plugin must have a legal namea, but not "' + name + '" in ' + (typeof name === 'undefined' ? 'undefined' : _typeof(name)));
}
/**
 * <pre>
 * Dispatcher is the hub of plugins, user, and video kernel.
 * It take charge of plugins install, use and remove
 * It also offer a bridge to let user handle video kernel.
 * </pre>
 */
var Dispatcher = (_dec$6 = before(convertNameIntoId), _dec2$5 = before(convertNameIntoId), _dec3$4 = before(checkPluginConfig), _dec4$4 = before(convertNameIntoId), _dec5$3 = before(convertNameIntoId), _dec6$3 = before(convertNameIntoId), _class$6 = function () {
  /**
   * @param  {UserConfig} config UserConfig for whole Chimee player
   * @param  {Chimee} vm referrence of outer class
   * @return {Dispatcher}
   */

  /**
   * the synchronous ready flag
   * @type {boolean}
   * @member readySync
   */

  /**
   * all plugins instance set
   * @type {Object}
   * @member plugins
   */
  function Dispatcher(config, vm) {
    var _this = this;

    _classCallCheck(this, Dispatcher);

    this.plugins = {};
    this.order = [];
    this.readySync = false;
    this.zIndexMap = {
      inner: [],
      outer: []
    };
    this.changeWatchable = true;
    this.kernelEventHandlerList = [];

    if (!isObject(config)) throw new TypeError('UserConfig must be an Object, but not "' + config + '" in ' + (typeof config === 'undefined' ? 'undefined' : _typeof(config)));
    /**
     * dom Manager
     * @type {Dom}
     */
    this.dom = new Dom(config, this);
    /**
     * Chimee's referrence
     * @type {[type]}
     */
    this.vm = vm;
    /**
     * tell user have Chimee installed finished
     * @type {Promises}
     */
    this.videoConfigReady = false;
    // create the videoconfig
    this.videoConfig = new VideoConfig(this, config);
    // support both plugin and plugins here as people often cofuse both
    // $FlowFixMe: we support plugins here, which should be illegal
    if (isArray(config.plugins) && !isArray(config.plugin)) {
      config.plugin = config.plugins;
      delete config.plugins;
    }
    this.binder = new Binder(this);
    this.binder.listenOnMouseMoveEvent(this.dom.videoElement);
    // use the plugin user want to use
    this._initUserPlugin(config.plugin);
    // add default config for container
    var containerConfig = deepAssign({}, defaultContainerConfig, config.container || {});
    // trigger the init life hook of plugin
    this.order.forEach(function (key) {
      return _this.plugins[key].__init(_this.videoConfig, containerConfig);
    });
    this.videoConfigReady = true;
    this.videoConfig.init();
    this.containerConfig = new Vessel(this, 'container', containerConfig);
    /**
     * video kernel
     * @type {Kernel}
     */
    this.kernel = this._createKernel(this.dom.videoElement, this.videoConfig);
    this.binder.applyPendingEvents('kernel');
    if (config.noDefaultContextMenu) {
      var noDefaultContextMenu = config.noDefaultContextMenu;

      var target = noDefaultContextMenu === 'container' || noDefaultContextMenu === 'wrapper' ? noDefaultContextMenu : 'video-dom';
      this.binder.on({
        target: target,
        id: '_vm',
        name: 'contextmenu',
        fn: function fn(evt) {
          return evt.preventDefault();
        },
        stage: 'main'
      });
    }
    // trigger auto load event
    var asyncInitedTasks = [];
    this.order.forEach(function (key) {
      var ready = _this.plugins[key].__inited();
      if (isPromise(ready)) {
        asyncInitedTasks.push(ready);
      }
    });
    this.readySync = asyncInitedTasks.length === 0;
    // tell them we have inited the whold player
    this.ready = this.readySync ? _Promise.resolve() : _Promise.all(asyncInitedTasks).then(function () {
      _this.readySync = true;
      _this.onReady();
    });
    if (this.readySync) this.onReady();
  }
  // to save the kernel event handler, so that we can remove it when we destroy the kernel

  /**
   * the z-index map of the dom, it contain some important infomation
   * @type {Object}
   * @member zIndexMap
   */

  /**
   * plugin's order
   * @type {Array<string>}
   * @member order
   */


  _createClass(Dispatcher, [{
    key: 'onReady',
    value: function onReady() {
      this.binder.trigger({
        target: 'plugin',
        name: 'ready',
        id: 'dispatcher'
      });
      this._autoloadVideoSrcAtFirst();
    }

    /**
     * use a plugin, which means we will new a plugin instance and include int this Chimee instance
     * @param  {Object|string} option you can just set a plugin name or plugin config
     * @return {Promise}
     */

  }, {
    key: 'use',
    value: function use(option) {
      if (isString(option)) option = { name: option, alias: undefined };
      if (!isObject(option) || isObject(option) && !isString(option.name)) {
        throw new TypeError('pluginConfig do not match requirement');
      }
      if (!isString(option.alias)) option.alias = undefined;
      var _option = option,
          name = _option.name,
          alias$$1 = _option.alias;

      option.name = alias$$1 || name;
      delete option.alias;
      var key = camelize(name);
      var id = camelize(alias$$1 || name);
      var pluginOption = option;
      var pluginConfig = Dispatcher.getPluginConfig(key);
      if (isEmpty(pluginConfig)) throw new TypeError('You have not installed plugin ' + key);
      if (isObject(pluginConfig)) {
        pluginConfig.id = id;
      }
      var plugin = isFunction(pluginConfig) ? new pluginConfig({ id: id }, this, pluginOption) // eslint-disable-line
      : new Plugin(pluginConfig, this, pluginOption);
      this.plugins[id] = plugin;
      _Object$defineProperty(this.vm, id, {
        value: plugin,
        configurable: true,
        enumerable: false,
        writable: false
      });
      this.order.push(id);
      this._sortZIndex();
      if (this.videoConfigReady) plugin.__inited();
      return plugin.ready;
    }

    /**
     * unuse an plugin, we will destroy the plugin instance and exlude it
     * @param  {string} name plugin's name
     */

  }, {
    key: 'unuse',
    value: function unuse(id) {
      var plugin = this.plugins[id];
      if (!isObject(plugin) || !isFunction(plugin.$destroy)) {
        delete this.plugins[id];
        return;
      }
      plugin.$destroy();
      var orderIndex = this.order.indexOf(id);
      if (orderIndex > -1) {
        this.order.splice(orderIndex, 1);
      }
      delete this.plugins[id];
      delete this.vm[id];
    }
  }, {
    key: 'hasUsed',
    value: function hasUsed(id) {
      var plugin = this.plugins[id];
      return isObject(plugin);
    }
  }, {
    key: 'throwError',
    value: function throwError(error) {
      this.vm.__throwError(error);
    }
  }, {
    key: 'silentLoad',
    value: function silentLoad(src) {
      var _this2 = this;

      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _option$duration = option.duration,
          duration = _option$duration === undefined ? 3 : _option$duration,
          _option$bias = option.bias,
          bias = _option$bias === undefined ? 0 : _option$bias,
          _option$repeatTimes = option.repeatTimes,
          repeatTimes = _option$repeatTimes === undefined ? 0 : _option$repeatTimes,
          _option$increment = option.increment,
          increment = _option$increment === undefined ? 0 : _option$increment,
          _option$isLive = option.isLive,
          isLive = _option$isLive === undefined ? this.videoConfig.isLive : _option$isLive,
          _option$box = option.box,
          box = _option$box === undefined ? this.videoConfig.box : _option$box,
          _option$kernels = option.kernels,
          kernels = _option$kernels === undefined ? this.videoConfig.kernels : _option$kernels,
          _option$preset = option.preset,
          preset = _option$preset === undefined ? this.videoConfig.preset : _option$preset;
      // all live stream seem as immediate mode
      // it's impossible to seek on live stream

      var immediate = option.immediate || isLive;
      // form the base config for kernel
      // it should be the same as the config now
      var config = { isLive: isLive, box: box, src: src, kernels: kernels, preset: preset };
      // build tasks accroding repeat times
      var tasks = new Array(repeatTimes + 1).fill(1).map(function (value, index$$1) {
        return function () {
          return new _Promise(function (resolve, reject) {
            // if abort, give up and reject
            if (option.abort) reject({ error: true, message: 'user abort the mission' });
            var video = document.createElement('video');
            var idealTime = _this2.kernel.currentTime + duration + increment * index$$1;
            video.muted = true;
            var newVideoReady = false;
            var kernel = void 0;
            var _videoError = void 0;
            var videoCanplay = void 0;
            var videoLoadedmetadata = void 0;
            // bind time update on old video
            // when we bump into the switch point and ready
            // we switch
            var oldVideoTimeupdate = function oldVideoTimeupdate() {
              var currentTime = _this2.kernel.currentTime;
              if (bias <= 0 && currentTime >= idealTime || bias > 0 && (Math.abs(idealTime - currentTime) <= bias && newVideoReady || currentTime - idealTime > bias)) {
                removeEvent(_this2.dom.videoElement, 'timeupdate', oldVideoTimeupdate);
                removeEvent(video, 'error', _videoError, true);
                if (!newVideoReady) {
                  removeEvent(video, 'canplay', videoCanplay, true);
                  removeEvent(video, 'loadedmetadata', videoLoadedmetadata, true);
                  kernel.destroy();
                  return resolve();
                }
                return reject({
                  error: false,
                  video: video,
                  kernel: kernel
                });
              }
            };
            videoCanplay = function videoCanplay() {
              newVideoReady = true;
              // you can set it immediately run by yourself
              if (immediate) {
                removeEvent(_this2.dom.videoElement, 'timeupdate', oldVideoTimeupdate);
                removeEvent(video, 'error', _videoError, true);
                return reject({
                  error: false,
                  video: video,
                  kernel: kernel
                });
              }
            };
            videoLoadedmetadata = function videoLoadedmetadata() {
              if (!isLive) {
                kernel.seek(immediate ? _this2.kernel.currentTime : idealTime);
              }
            };
            _videoError = function videoError(evt) {
              removeEvent(video, 'canplay', videoCanplay, true);
              removeEvent(video, 'loadedmetadata', videoLoadedmetadata, true);
              removeEvent(_this2.dom.videoElement, 'timeupdate', oldVideoTimeupdate);
              kernel.off('error', _videoError);
              var error = void 0;
              if (!isEmpty(evt.data) && evt.data.errmsg) {
                var errmsg = evt.data.errmsg;

                Log.error("chimee's silentload bump into a kernel error", errmsg);
                error = new Error(errmsg);
              } else {
                error = !isEmpty(video.error) ? new Error(video.error.message) : new Error('unknow video error');
                Log.error("chimee's silentload", error.message);
              }
              kernel.destroy();
              _this2._silentLoadTempKernel = undefined;
              return index$$1 === repeatTimes ? reject(error) : resolve(error);
            };
            addEvent(video, 'canplay', videoCanplay, true);
            addEvent(video, 'loadedmetadata', videoLoadedmetadata, true);
            addEvent(video, 'error', _videoError, true);
            kernel = _this2._createKernel(video, config);
            _this2._silentLoadTempKernel = kernel;
            kernel.on('error', _videoError);
            addEvent(_this2.dom.videoElement, 'timeupdate', oldVideoTimeupdate);
            kernel.load();
          });
        };
      });
      return runRejectableQueue(tasks).then(function () {
        var message = 'The silentLoad for ' + src + ' timed out. Please set a longer duration or check your network';
        return _Promise.reject(new Error(message));
      }).catch(function (data) {
        if (isError(data)) {
          return _Promise.reject(data);
        }
        if (data.error) {
          return _Promise.reject(new Error(data.message));
        }
        var video = data.video,
            kernel = data.kernel;

        if (option.abort) {
          kernel.destroy();
          return _Promise.reject(new Error('user abort the mission'));
        }
        var paused = _this2.dom.videoElement.paused;
        if (paused) {
          _this2.switchKernel({ video: video, kernel: kernel, config: config });
          return _Promise.resolve();
        }
        return new _Promise(function (resolve) {
          addEvent(video, 'play', function () {
            _this2.switchKernel({ video: video, kernel: kernel, config: config });
            resolve();
          }, true);
          video.play();
        });
      });
    }
  }, {
    key: 'load',
    value: function load(srcOrOption) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var src = isString(srcOrOption) ? srcOrOption : isObject(srcOrOption) && isString(srcOrOption.src) ? srcOrOption.src
      // give a chance for user to clear the src
      : '';
      if (isObject(srcOrOption)) {
        delete srcOrOption.src;
        option = srcOrOption;
      }
      var oldBox = this.kernel.box;
      var videoConfig = this.videoConfig;
      var _option2 = option,
          _option2$isLive = _option2.isLive,
          isLive = _option2$isLive === undefined ? videoConfig.isLive : _option2$isLive,
          _option2$box = _option2.box,
          box = _option2$box === undefined ? getLegalBox({ src: src, box: videoConfig.box }) : _option2$box,
          _option2$preset = _option2.preset,
          preset = _option2$preset === undefined ? videoConfig.preset : _option2$preset,
          _option2$kernels = _option2.kernels,
          kernels = _option2$kernels === undefined ? videoConfig.kernels : _option2$kernels;

      if (box !== 'native' || box !== oldBox || !isEmpty(option)) {
        var video = document.createElement('video');
        var config = { isLive: isLive, box: box, preset: preset, src: src, kernels: kernels };
        var kernel = this._createKernel(video, config);
        this.switchKernel({ video: video, kernel: kernel, config: config, notifyChange: true });
      }
      var originAutoLoad = this.videoConfig.autoload;
      this._changeUnwatchable(this.videoConfig, 'autoload', false);
      this.videoConfig.src = src || this.videoConfig.src;
      this.kernel.load(this.videoConfig.src);
      this._changeUnwatchable(this.videoConfig, 'autoload', originAutoLoad);
    }
  }, {
    key: 'switchKernel',
    value: function switchKernel(_ref) {
      var _this3 = this;

      var video = _ref.video,
          kernel = _ref.kernel,
          config = _ref.config,
          notifyChange = _ref.notifyChange;

      var oldKernel = this.kernel;
      var originVideoConfig = deepClone(this.videoConfig);
      this.dom.migrateVideoRequiredGuardedAttributes(video);
      this.dom.removeVideo();
      this.dom.installVideo(video);
      // as we will reset the currentVideoConfig on the new video
      // it will trigger the watch function as they maybe differnet
      // because video config will return the real situation
      // so we need to stop them
      this.videoConfig.changeWatchable = false;
      this.videoConfig.autoload = false;
      this.videoConfig.src = config.src;
      this.videoConfig._realDomAttr.forEach(function (key) {
        // $FlowFixMe: support computed key here
        if (key !== 'src') _this3.videoConfig[key] = originVideoConfig[key];
      });
      this.videoConfig.changeWatchable = true;
      this.binder.migrateKernelEvent(oldKernel, kernel);
      this.kernel = kernel;
      this._silentLoadTempKernel = undefined;
      var isLive = config.isLive,
          box = config.box,
          preset = config.preset,
          kernels = config.kernels;

      _Object$assign(this.videoConfig, { isLive: isLive, box: box, preset: preset, kernels: kernels });
      oldKernel.destroy();
      // delay video event binding
      // so that people can't feel the default value change
      // unless it's caused by autoload
      if (notifyChange) {
        this.binder && this.binder.bindEventOnVideo && this.binder.bindEventOnVideo(video);
      } else {
        setTimeout(function () {
          _this3.binder && _this3.binder.bindEventOnVideo && _this3.binder.bindEventOnVideo(video);
        });
      }
      // if we are in picutre in picture mode
      // we need to exit thie picture in picture mode
      if (this.inPictureInPictureMode) {
        this.exitPictureInPicture();
      }
    }
  }, {
    key: 'requestPictureInPicture',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        var pipWindow, _ref3, PictureInPicture;

        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!('pictureInPictureEnabled' in document)) {
                  _context.next = 8;
                  break;
                }

                if (!this.inPictureInPictureMode) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt('return', _Promise.resolve(window.__chimee_picture_in_picture_window));

              case 3:
                _context.next = 5;
                return this.dom.videoElement.requestPictureInPicture();

              case 5:
                pipWindow = _context.sent;

                window.__chimee_picture_in_picture_window = pipWindow;
                // if (autoplay) this.play();
                return _context.abrupt('return', pipWindow);

              case 8:
                _context.next = 10;
                return Promise.resolve().then(function () { return pictureInPicture; });

              case 10:
                _ref3 = _context.sent;
                PictureInPicture = _ref3.default;

                if (!Dispatcher.hasInstalled(PictureInPicture.name)) {
                  Dispatcher.install(PictureInPicture);
                }
                if (!this.hasUsed(PictureInPicture.name)) {
                  this.use(PictureInPicture.name);
                }
                return _context.abrupt('return', this.plugins.pictureInPicture.requestPictureInPicture());

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function requestPictureInPicture() {
        return _ref2.apply(this, arguments);
      }

      return requestPictureInPicture;
    }()
  }, {
    key: 'exitPictureInPicture',
    value: function exitPictureInPicture() {
      if ('pictureInPictureEnabled' in document) {
        // if current video is not in picture-in-picture mode, do nothing
        if (this.inPictureInPictureMode) {
          window.__chimee_picture_in_picture_window = undefined;
          // $FlowFixMe: support new function in document
          return document.exitPictureInPicture();
        }
      }
      return this.plugins.pictureInPicture && this.plugins.pictureInPicture.exitPictureInPicture();
    }
  }, {
    key: 'destroy',


    /**
     * destroy function called when dispatcher destroyed
     */
    value: function destroy() {
      for (var _key in this.plugins) {
        this.unuse(_key);
      }
      this.binder.destroy();
      delete this.binder;
      this.dom.destroy();
      delete this.dom;
      this.kernel.destroy();
      delete this.kernel;
      delete this.vm;
      delete this.plugins;
      delete this.order;
    }

    /**
     * use a set of plugin
     * @param  {Array<UserPluginConfig>}  configs  a set of plugin config
     * @return {Array<Promise>}   a set of Promise indicate the plugin install stage
     */

  }, {
    key: '_initUserPlugin',
    value: function _initUserPlugin() {
      var _this4 = this;

      var configs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (!isArray(configs)) {
        configs = [];
      }
      return configs.map(function (config) {
        return _this4.use(config);
      });
    }

    /**
     * sort zIndex of plugins to make plugin display in order
     */

  }, {
    key: '_sortZIndex',
    value: function _sortZIndex() {
      var _this5 = this;

      var _order$reduce = this.order.reduce(function (levelSet, key) {
        var plugin = _this5.plugins[key];
        if (isEmpty(plugin)) return levelSet;
        var set = levelSet[plugin.$inner ? 'inner' : 'outer'];
        var level = plugin.$level;
        set[level] = set[level] || [];
        set[level].push(key);
        return levelSet;
      }, { inner: {}, outer: {} }),
          inner = _order$reduce.inner,
          outer = _order$reduce.outer;

      inner[0] = inner[0] || [];
      inner[0].unshift('videoElement');
      outer[0] = outer[0] || [];
      outer[0].unshift('container');
      var innerOrderArr = transObjectAttrIntoArray(inner);
      var outerOrderArr = transObjectAttrIntoArray(outer);
      this.dom.setPluginsZIndex(innerOrderArr);
      this.dom.setPluginsZIndex(outerOrderArr);
      this.zIndexMap.inner = innerOrderArr;
      this.zIndexMap.outer = outerOrderArr;
    }

    /**
     * get the top element's level
     * @param {boolean} inner get the inner array or the outer array
     */

  }, {
    key: '_getTopLevel',
    value: function _getTopLevel(inner) {
      var arr = this.zIndexMap[inner ? 'inner' : 'outer'];
      var plugin = this.plugins[arr[arr.length - 1]];
      return isEmpty(plugin) ? 0 : plugin.$level;
    }
  }, {
    key: '_autoloadVideoSrcAtFirst',
    value: function _autoloadVideoSrcAtFirst() {
      if (this.videoConfig.autoload) {
        if ("production" !== 'prodution' && !this.videoConfig.src) {
          Log.warn('You have not set the src, so you better set autoload to be false. Accroding to https://github.com/Chimeejs/chimee/blob/master/doc/zh-cn/chimee-api.md#src.');
          return;
        }
        this.binder.emit({
          name: 'load',
          target: 'plugin',
          id: 'dispatcher'
        }, { src: this.videoConfig.src });
      }
    }
  }, {
    key: '_changeUnwatchable',
    value: function _changeUnwatchable(object, property, value) {
      this.changeWatchable = false;
      object[property] = value;
      this.changeWatchable = true;
    }
  }, {
    key: '_createKernel',
    value: function _createKernel(video, config) {
      var kernels = config.kernels,
          preset = config.preset;
      var presetConfig = {};
      var newPreset = {};
      if (isArray(kernels)) {
        // SKC means SingleKernelConfig
        newPreset = kernels.reduce(function (kernels, keyOrSKC) {
          // if it is a string key, it means the kernel has been pre installed.
          if (isString(keyOrSKC)) {
            var kernelFn = kernelsSet[keyOrSKC];
            if (!isFunction(kernelFn)) {
              Log.warn('You have not installed kernel for ' + keyOrSKC + '.');
              return kernels;
            }
            kernels[keyOrSKC] = kernelFn;
            return kernels;
          }
          // if it is a SingleKernelConfig, it means user may pass in some config here
          // so we need to extract the handler
          // get the name of the handler
          // and collect the config for the handler
          if (isObject(keyOrSKC)) {
            var name = keyOrSKC.name,
                handler = keyOrSKC.handler;
            // if the handler is a pure string, it means the kernel has been pre installed

            if (isString(handler)) {
              var _kernelFn = kernelsSet[handler];
              if (!isFunction(_kernelFn)) {
                Log.warn('You have not installed kernel for ' + handler + '.');
                return kernels;
              }
              kernels[handler] = _kernelFn;
              presetConfig[handler] = keyOrSKC;
              return kernels;
            }
            // if the handler is a function, it means that the user pass in the kernel directly
            // if the provide name, we use it as kernel name
            // if they do not provide name, we just use the function's name
            if (isFunction(handler)) {
              var kernelName = name || handler.name;
              kernels[kernelName] = handler;
              presetConfig[kernelName] = keyOrSKC;
              return kernels;
            }
            Log.warn('When you pass in an SingleKernelConfig in Array, you must clarify it\'s handler, we only support handler in string or function but not ' + (typeof handler === 'undefined' ? 'undefined' : _typeof(handler)));
            return kernels;
          }
          Log.warn('If you pass in kernels as array, you must pass in kernels in string or function, but not ' + (typeof keyOrSKC === 'undefined' ? 'undefined' : _typeof(keyOrSKC)));
          return kernels;
        }, {});
      }

      if (isObject(kernels)) {
        // SKC means SingleKernelConfig
        _Object$keys(kernels).forEach(function (key) {
          var fnOrSKC = kernels[key];
          // if it's a function, means we need to do nothing
          if (isFunction(fnOrSKC)) {
            newPreset[key] = fnOrSKC;
            return;
          }
          if (isObject(fnOrSKC)) {
            var handler = fnOrSKC.handler;
            // if handler is an string, it means user has pre install it

            if (isString(handler)) {
              var kernelFn = kernelsSet[handler];
              if (!isFunction(kernelFn)) {
                Log.warn('You have not installed kernel for ' + handler + '.');
                return;
              }
              newPreset[key] = kernelFn;
              presetConfig[key] = fnOrSKC;
              return;
            }
            if (isFunction(handler)) {
              newPreset[key] = handler;
              presetConfig[key] = fnOrSKC;
              return;
            }
            Log.warn('When you pass in an SingleKernelConfig in Object, you must clarify it\'s handler, we only support handler in string or function but not ' + (typeof handler === 'undefined' ? 'undefined' : _typeof(handler)));
            return;
          }
          Log.warn('If you pass in kernels as object, you must pass in kernels in string or function, but not ' + (typeof fnOrSKC === 'undefined' ? 'undefined' : _typeof(fnOrSKC)));
          return kernels;
        });
      }
      config.preset = _Object$assign(newPreset, preset);
      config.presetConfig = presetConfig;
      var kernel = new ChimeeKernel(video, config);
      return kernel;
    }
    /**
     * static method to install plugin
     * we will store the plugin config
     * @type {string} plugin's id
     */

  }, {
    key: 'inPictureInPictureMode',
    get: function get$$1() {
      return 'pictureInPictureEnabled' in document
      // $FlowFixMe: support new function in document
      ? this.dom.videoElement === document.pictureInPictureElement : Boolean(this.plugins.pictureInPicture && this.plugins.pictureInPicture.isShown);
    }
  }], [{
    key: 'install',
    value: function install(config) {
      var name = config.name;

      var id = camelize(name);
      if (!isEmpty(pluginConfigSet[id])) {
      }
      var pluginConfig = isFunction(config) ? config : deepAssign({ id: id }, config);
      pluginConfigSet[id] = pluginConfig;
      return id;
    }
  }, {
    key: 'hasInstalled',
    value: function hasInstalled(id) {
      return !isEmpty(pluginConfigSet[id]);
    }
  }, {
    key: 'uninstall',
    value: function uninstall(id) {
      delete pluginConfigSet[id];
    }
    /**
     * get Plugin config based on plugin's id
     * @type {[type]}
     */

  }, {
    key: 'getPluginConfig',
    value: function getPluginConfig(id) {
      return pluginConfigSet[id];
    }
  }, {
    key: 'installKernel',
    value: function installKernel(key, value) {
      var tasks = isObject(key) ? _Object$entries(key) : [[key, value]];
      tasks.forEach(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            key = _ref5[0],
            value = _ref5[1];

        if (!isFunction(value)) throw new Error('The kernel you install on ' + key + ' must be a Function, but not ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
        if (isFunction(kernelsSet[key])) Log.warn('You have alrady install a kernel on ' + key + ', and now we will replace it');
        kernelsSet[key] = value;
      });
    }

    // only use for debug in internal

  }, {
    key: 'uninstallKernel',
    value: function uninstallKernel(key) {
      delete kernelsSet[key];
    }
  }, {
    key: 'hasInstalledKernel',
    value: function hasInstalledKernel(key) {
      return isFunction(kernelsSet[key]);
    }
  }]);

  return Dispatcher;
}(), _applyDecoratedDescriptor$5(_class$6.prototype, 'unuse', [_dec$6], _Object$getOwnPropertyDescriptor(_class$6.prototype, 'unuse'), _class$6.prototype), _applyDecoratedDescriptor$5(_class$6.prototype, 'hasUsed', [_dec2$5], _Object$getOwnPropertyDescriptor(_class$6.prototype, 'hasUsed'), _class$6.prototype), _applyDecoratedDescriptor$5(_class$6.prototype, 'throwError', [autobind], _Object$getOwnPropertyDescriptor(_class$6.prototype, 'throwError'), _class$6.prototype), _applyDecoratedDescriptor$5(_class$6.prototype, 'inPictureInPictureMode', [nonenumerable], _Object$getOwnPropertyDescriptor(_class$6.prototype, 'inPictureInPictureMode'), _class$6.prototype), _applyDecoratedDescriptor$5(_class$6, 'install', [_dec3$4], _Object$getOwnPropertyDescriptor(_class$6, 'install'), _class$6), _applyDecoratedDescriptor$5(_class$6, 'hasInstalled', [_dec4$4], _Object$getOwnPropertyDescriptor(_class$6, 'hasInstalled'), _class$6), _applyDecoratedDescriptor$5(_class$6, 'uninstall', [_dec5$3], _Object$getOwnPropertyDescriptor(_class$6, 'uninstall'), _class$6), _applyDecoratedDescriptor$5(_class$6, 'getPluginConfig', [_dec6$3], _Object$getOwnPropertyDescriptor(_class$6, 'getPluginConfig'), _class$6), _class$6);

var _class$7, _descriptor$1;

function _initDefineProp$1(target, property, descriptor, context) {
  if (!descriptor) return;

  _Object$defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor$6(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}
var GlobalConfig = (_class$7 = function () {
  _createClass(GlobalConfig, [{
    key: 'silent',
    get: function get$$1() {
      return this._silent;
    },
    set: function set(val) {
      var _this = this;

      val = !!val;
      this._silent = val;
      _Object$keys(this.log).forEach(function (key) {
        _this.log[key] = !val;
      });
    }
  }, {
    key: 'useStyleFullscreen',
    get: function get$$1() {
      return index.useStyleFirst;
    },
    set: function set(val) {
      index.useStyleFirst = !!val;
    }
  }]);

  function GlobalConfig() {
    _classCallCheck(this, GlobalConfig);

    this.log = {
      error: true,
      info: true,
      warn: true,
      debug: true,
      verbose: true
    };

    _initDefineProp$1(this, '_silent', _descriptor$1, this);

    this.errorHandler = undefined;

    var props = _Object$keys(this.log).reduce(function (props, key) {
      props[key] = accessor({
        get: function get$$1() {
          // $FlowFixMe: we have check the keys
          return Log['ENABLE_' + key.toUpperCase()];
        },
        set: function set(val) {
          // $FlowFixMe: we have check the keys
          Log['ENABLE_' + key.toUpperCase()] = val;
          if (val === true) this.silent = false;
          return val;
        }
      });
      return props;
    }, {});
    applyDecorators(this.log, props, { self: true });
  }

  return GlobalConfig;
}(), _descriptor$1 = _applyDecoratedDescriptor$6(_class$7.prototype, '_silent', [nonenumerable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _class$7);

var _dec$7, _class$8, _class2$1$1, _descriptor$2, _descriptor2$1, _descriptor3$1, _init, _init2, _init3, _init4, _init5, _init6, _init7, _init8, _init9, _class3, _temp;

function _initDefineProp$2(target, property, descriptor, context) {
  if (!descriptor) return;

  _Object$defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor$7(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Chimee = (_dec$7 = autobindClass(), _dec$7(_class$8 = (_class2$1$1 = (_temp = _class3 = function (_VideoWrapper) {
  _inherits(Chimee, _VideoWrapper);

  _createClass(Chimee, null, [{
    key: 'registerEvents',


    // In some situation, we may have custom events
    // For example, we may have a custom kernel event
    // We can register the event through this method
    value: function registerEvents() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          name = _ref.name,
          target = _ref.target;

      if (!name || !isString(name)) throw new Error('The event name must be a string, but not ' + (typeof name === 'undefined' ? 'undefined' : _typeof(name)));
      if (!target || !isString(target)) throw new Error('The event target must be a string, but not ' + (typeof target === 'undefined' ? 'undefined' : _typeof(target)));
      if (target === 'kernel') {
        kernelEvents.push(name);
      }
    }
  }]);

  function Chimee(config) {
    _classCallCheck(this, Chimee);

    /* istanbul ignore if */
    var _this = _possibleConstructorReturn(this, (Chimee.__proto__ || _Object$getPrototypeOf(Chimee)).call(this));

    _this.destroyed = false;

    _initDefineProp$2(_this, '__id', _descriptor$2, _this);

    _initDefineProp$2(_this, 'version', _descriptor2$1, _this);

    _initDefineProp$2(_this, 'config', _descriptor3$1, _this);
    if (isString(config) || isElement(config)) {
      config = {
        wrapper: config,
        controls: true
      };
    } else if (isObject(config)) {
      if (!config.wrapper) throw new Error('You must pass in an legal object');
    } else {
      throw new Error('You must pass in an Object containing wrapper or string or element to new a Chimee');
    }
    // $FlowFixMe: we have check wrapper here
    _this.__dispatcher = new Dispatcher(config, _this);
    _this.ready = _this.__dispatcher.ready;
    _this.readySync = _this.__dispatcher.readySync;
    _this.__wrapAsVideo(_this.__dispatcher.videoConfig);
    return _this;
  }

  _createClass(Chimee, [{
    key: 'destroy',
    value: function destroy() {
      if (this.destroyed) return;
      _get(Chimee.prototype.__proto__ || _Object$getPrototypeOf(Chimee.prototype), '__destroy', this).call(this);
      this.__dispatcher.destroy();
      // $FlowFixMe: normal obejct define
      Object.defineProperty(this, '__dispatcher', {
        get: function get$$1() {
          throw new Error('This instance has been destroyed.');
        },

        enumerable: true,
        configurable: true
      });
      this.destroyed = true;
    }
  }, {
    key: 'use',
    value: function use(option) {
      return this.__dispatcher.use(option);
    }
  }, {
    key: 'unuse',
    value: function unuse(name) {
      return this.__dispatcher.unuse(name);
    }
  }, {
    key: '__throwError',
    value: function __throwError(error) {
      if (isString(error)) error = new Error(error);
      var errorHandler = this.config.errorHandler || Chimee.config.errorHandler;
      if (isFunction(errorHandler)) return errorHandler(error);
      if (Chimee.config.silent) return;
      /* istanbul ignore else */
      if (isError(error)) throw error;else console.error(error);
    }
  }]);

  return Chimee;
}(VideoWrapper), _class3.plugin = Plugin, _class3.config = new GlobalConfig(), _class3.install = Dispatcher.install, _class3.uninstall = Dispatcher.uninstall, _class3.hasInstalled = Dispatcher.hasInstalled, _class3.installKernel = Dispatcher.installKernel, _class3.uninstallKernel = Dispatcher.uninstallKernel, _class3.hasInstalledKernel = Dispatcher.hasInstalledKernel, _class3.getPluginConfig = Dispatcher.getPluginConfig, _temp), _descriptor$2 = _applyDecoratedDescriptor$7(_class2$1$1.prototype, '__id', [frozen], {
  enumerable: true,
  initializer: function initializer() {
    return '_vm';
  }
}), _descriptor2$1 = _applyDecoratedDescriptor$7(_class2$1$1.prototype, 'version', [frozen], {
  enumerable: true,
  initializer: function initializer() {
    return '0.12.0';
  }
}), _descriptor3$1 = _applyDecoratedDescriptor$7(_class2$1$1.prototype, 'config', [frozen], {
  enumerable: true,
  initializer: function initializer() {
    return {
      errorHandler: undefined
    };
  }
}), _applyDecoratedDescriptor$7(_class2$1$1, 'plugin', [frozen], (_init = _Object$getOwnPropertyDescriptor(_class2$1$1, 'plugin'), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class2$1$1), _applyDecoratedDescriptor$7(_class2$1$1, 'config', [frozen], (_init2 = _Object$getOwnPropertyDescriptor(_class2$1$1, 'config'), _init2 = _init2 ? _init2.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init2;
  }
}), _class2$1$1), _applyDecoratedDescriptor$7(_class2$1$1, 'install', [frozen], (_init3 = _Object$getOwnPropertyDescriptor(_class2$1$1, 'install'), _init3 = _init3 ? _init3.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init3;
  }
}), _class2$1$1), _applyDecoratedDescriptor$7(_class2$1$1, 'uninstall', [frozen], (_init4 = _Object$getOwnPropertyDescriptor(_class2$1$1, 'uninstall'), _init4 = _init4 ? _init4.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init4;
  }
}), _class2$1$1), _applyDecoratedDescriptor$7(_class2$1$1, 'hasInstalled', [frozen], (_init5 = _Object$getOwnPropertyDescriptor(_class2$1$1, 'hasInstalled'), _init5 = _init5 ? _init5.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init5;
  }
}), _class2$1$1), _applyDecoratedDescriptor$7(_class2$1$1, 'installKernel', [frozen], (_init6 = _Object$getOwnPropertyDescriptor(_class2$1$1, 'installKernel'), _init6 = _init6 ? _init6.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init6;
  }
}), _class2$1$1), _applyDecoratedDescriptor$7(_class2$1$1, 'uninstallKernel', [frozen], (_init7 = _Object$getOwnPropertyDescriptor(_class2$1$1, 'uninstallKernel'), _init7 = _init7 ? _init7.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init7;
  }
}), _class2$1$1), _applyDecoratedDescriptor$7(_class2$1$1, 'hasInstalledKernel', [frozen], (_init8 = _Object$getOwnPropertyDescriptor(_class2$1$1, 'hasInstalledKernel'), _init8 = _init8 ? _init8.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init8;
  }
}), _class2$1$1), _applyDecoratedDescriptor$7(_class2$1$1, 'getPluginConfig', [frozen], (_init9 = _Object$getOwnPropertyDescriptor(_class2$1$1, 'getPluginConfig'), _init9 = _init9 ? _init9.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init9;
  }
}), _class2$1$1), _class2$1$1)) || _class$8);

// $FlowFixMe: we can extend create here

var PictureInPicture = function (_Plugin) {
  _inherits(PictureInPicture, _Plugin);

  function PictureInPicture(config) {
    var _ref;

    _classCallCheck(this, PictureInPicture);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = PictureInPicture.__proto__ || _Object$getPrototypeOf(PictureInPicture)).call.apply(_ref, [this, _Object$assign(config, {
      el: document.createElement('canvas'),
      penetrate: true,
      inner: false
    })].concat(_toConsumableArray(args))));

    _this.isShown = false;
    _this.hasStopRender = true;
    _this.myStyle = {
      position: 'fixed',
      top: '',
      left: '',
      right: 0,
      bottom: 0,
      width: 277,
      height: 156
    };
    return _this;
  }

  _createClass(PictureInPicture, [{
    key: 'create',
    value: function create() {
      addClassName(this.$dom, 'chimee-plugin-picture-in-picture');
      this.getContext();
    }
  }, {
    key: 'inited',
    value: function inited() {
      this.setStyle();
    }
  }, {
    key: 'show',
    value: function show() {
      setStyle(this.$dom, 'display', 'block');
      this.isShown = true;
    }
  }, {
    key: 'hide',
    value: function hide() {
      setStyle(this.$dom, 'display', 'none');
      this.isShown = false;
    }
  }, {
    key: 'closeCurrentPicture',
    value: function closeCurrentPicture() {
      if (window.__chimee_picture_in_picture && window.__chimee_picture_in_picture.plugin) {
        window.__chimee_picture_in_picture.plugin.exitPictureInPicture();
      }
    }
  }, {
    key: 'requestPictureInPicture',
    value: function requestPictureInPicture() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$autoplay = _ref2.autoplay,
          autoplay = _ref2$autoplay === undefined ? false : _ref2$autoplay;

      this.closeCurrentPicture();
      this.show();
      this.poller(this.render);
      if (autoplay && this.paused) this.play();else if (!autoplay && !this.paused) this.pause();
      window.__chimee_picture_in_picture = {
        plugin: this,
        window: this.$dom,
        element: this.$video
      };
    }
  }, {
    key: 'exitPictureInPicture',
    value: function exitPictureInPicture() {
      this.hide();
      window.__chimee_picture_in_picture = {};
    }
  }, {
    key: 'getContext',
    value: function getContext() {
      this.ctx = this.$dom.getContext('2d');
    }
  }, {
    key: 'poller',
    value: function poller(fn) {
      var _this2 = this;

      requestAnimationFrame(function () {
        fn.call(_this2);
        if (_this2.isShown) {
          _this2.poller(fn);
          _this2.hasStopRender = false;
        } else {
          _this2.hasStopRender = true;
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.isShown) {
        this.ctx.drawImage(this.$video, 0, 0, this.myStyle.width, this.myStyle.height);
      }
    }
  }, {
    key: 'setStyle',
    value: function setStyle$$1() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _Object$assign(this.myStyle, styles);
      this.$dom.setAttribute('width', this.myStyle.width.toString());
      this.$dom.setAttribute('height', this.myStyle.height.toString());
      for (var key in this.myStyle) {
        if (key === 'width' || key === 'height') continue;
        var value = this.myStyle[key];
        setStyle(this.$dom, key, value);
      }
    }
  }]);

  return PictureInPicture;
}(Plugin);

var pictureInPicture = /*#__PURE__*/Object.freeze({
  default: PictureInPicture
});

function unwrapExports$1 (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classCallCheck$1 = createCommonjsModule$1(function (module, exports) {
exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var _classCallCheck$1 = unwrapExports$1(classCallCheck$1);

var _global$2 = createCommonjsModule$1(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core$2 = createCommonjsModule$1(function (module) {
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _core_1$2 = _core$2.version;

var _aFunction$2 = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx$2 = function (fn, that, length) {
  _aFunction$2(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject$2 = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject$2 = function (it) {
  if (!_isObject$2(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails$2 = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors$2 = !_fails$2(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$4 = _global$2.document;
// typeof document.createElement is 'object' in old IE
var is$2 = _isObject$2(document$4) && _isObject$2(document$4.createElement);
var _domCreate$2 = function (it) {
  return is$2 ? document$4.createElement(it) : {};
};

var _ie8DomDefine$2 = !_descriptors$2 && !_fails$2(function () {
  return Object.defineProperty(_domCreate$2('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive$2 = function (it, S) {
  if (!_isObject$2(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject$2(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject$2(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject$2(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP$5 = Object.defineProperty;

var f$9 = _descriptors$2 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject$2(O);
  P = _toPrimitive$2(P, true);
  _anObject$2(Attributes);
  if (_ie8DomDefine$2) try {
    return dP$5(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp$2 = {
	f: f$9
};

var _propertyDesc$2 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide$2 = _descriptors$2 ? function (object, key, value) {
  return _objectDp$2.f(object, key, _propertyDesc$2(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE$4 = 'prototype';

var $export$2 = function (type, name, source) {
  var IS_FORCED = type & $export$2.F;
  var IS_GLOBAL = type & $export$2.G;
  var IS_STATIC = type & $export$2.S;
  var IS_PROTO = type & $export$2.P;
  var IS_BIND = type & $export$2.B;
  var IS_WRAP = type & $export$2.W;
  var exports = IS_GLOBAL ? _core$2 : _core$2[name] || (_core$2[name] = {});
  var expProto = exports[PROTOTYPE$4];
  var target = IS_GLOBAL ? _global$2 : IS_STATIC ? _global$2[name] : (_global$2[name] || {})[PROTOTYPE$4];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx$2(out, _global$2)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE$4] = C[PROTOTYPE$4];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx$2(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export$2.R && expProto && !expProto[key]) _hide$2(expProto, key, out);
    }
  }
};
// type bitmap
$export$2.F = 1;   // forced
$export$2.G = 2;   // global
$export$2.S = 4;   // static
$export$2.P = 8;   // proto
$export$2.B = 16;  // bind
$export$2.W = 32;  // wrap
$export$2.U = 64;  // safe
$export$2.R = 128; // real proto method for `library`
var _export$2 = $export$2;

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export$2(_export$2.S + _export$2.F * !_descriptors$2, 'Object', { defineProperty: _objectDp$2.f });

var $Object$4 = _core$2.Object;
var defineProperty$2$2 = function defineProperty(it, key, desc) {
  return $Object$4.defineProperty(it, key, desc);
};

var defineProperty$7 = createCommonjsModule$1(function (module) {
module.exports = { "default": defineProperty$2$2, __esModule: true };
});

unwrapExports$1(defineProperty$7);

var createClass$1 = createCommonjsModule$1(function (module, exports) {
exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty$7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var _createClass$1 = unwrapExports$1(createClass$1);

function getDistance(x, y, x1, y1) {

  return Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));
}

function getSpeed(s, t) {
  return s / t;
}

function isArray$1(arr) {
  return Array.isArray(arr);
}

/**
 * 手势判断组件
 * 目前判断的手势
 * 单点操作
 * tap
 * swipe
 * pan
 */

var Gesture = function () {
  function Gesture() {
    _classCallCheck$1(this, Gesture);

    // this.events = events;
    // ['tap', 'swipe', 'panstart', 'panmove', 'panend', 'press'].forEach(item => {
    //   this[item] = events[item].bind(host);
    // })

    // 手势该有的几个状态
    // swipe tapping pressing

    this.startTime = 0;
    this.endTime = 0;
    this.event = {};
    this.status = '';
  }

  _createClass$1(Gesture, [{
    key: 'touchstart',
    value: function touchstart(evt) {
      // 当前 touch 点
      this.startTouch = evt.changedTouches[0];

      // 开始时间
      this.startTime = Date.now();

      this.status = 'tapping';
    }
  }, {
    key: 'touchmove',
    value: function touchmove(evt) {

      var touch = evt.changedTouches[0];

      var distance = getDistance(this.startTouch.clientX, this.startTouch.clientY, touch.clientX, touch.clientY);

      if (this.status === 'tapping' && distance > 10) {
        this.status = 'panning';
        this.fire('panstart', evt);
      } else if (this.status === 'panning') {
        this.fire('panmove', evt);
      }
    }
  }, {
    key: 'touchend',
    value: function touchend(evt) {

      this.endTouch = evt.changedTouches[0];

      var time = Date.now();
      var distance = getDistance(this.startTouch.clientX, this.startTouch.clientY, this.endTouch.clientX, this.endTouch.clientY);
      var interval = time - this.startTime;

      // 时间 <= 250ms 距离小于 10 px 则认为是 tap
      if (interval <= 250 && distance < 10) {
        this.fire('tap', evt);
        time - this.endTime < 300 && this.fire('doubletap', evt);
      }

      // 时间 > 250ms 距离小于 10 px 则认为是 press
      interval > 250 && distance < 10 && this.fire('press', evt);

      var speed = getSpeed(distance, interval);

      // 距离大于 10 px , 速度大于 0.3 则认为是 swipe
      speed > 0.3 && distance >= 10 && this.fire('swipe', evt);

      // 处于 panning 则触发 panend 事件
      this.status === 'panning' && this.fire('panend', evt);

      this.endTime = Date.now();
    }
  }, {
    key: 'touchcancel',
    value: function touchcancel(evt) {}
  }, {
    key: 'on',
    value: function on(type, func) {
      if (isArray$1(this.event[type])) {
        this.event[type].push(func);
      } else {
        this.event[type] = [func];
      }
    }
  }, {
    key: 'fire',
    value: function fire(type, evt) {
      if (!isArray$1(this.event[type])) return;
      this.event[type].forEach(function (item) {
        item(evt);
      });
    }
  }]);

  return Gesture;
}();

var baseMobileEvent = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
var supportGesture = ['tap', 'swipe', 'panstart', 'panmove', 'panend', 'press', 'doubletap'];
function gestureFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$name = _ref.name,
      name = _ref$name === undefined ? 'chimeeGesture' : _ref$name,
      el = _ref.el,
      _ref$level = _ref.level,
      level = _ref$level === undefined ? 0 : _ref$level,
      _ref$inner = _ref.inner,
      inner = _ref$inner === undefined ? true : _ref$inner,
      autoFocus = _ref.autoFocus,
      className = _ref.className,
      _beforeCreate = _ref.beforeCreate,
      _create = _ref.create,
      init = _ref.init,
      inited = _ref.inited,
      _destroy = _ref.destroy,
      data = _ref.data,
      computed = _ref.computed,
      _ref$events = _ref.events,
      events = _ref$events === undefined ? {} : _ref$events,
      _ref$methods = _ref.methods,
      methods = _ref$methods === undefined ? {} : _ref$methods,
      _ref$penetrate = _ref.penetrate,
      penetrate = _ref$penetrate === undefined ? false : _ref$penetrate,
      _ref$operable = _ref.operable,
      operable = _ref$operable === undefined ? true : _ref$operable;

  return {
    name: name,
    el: el,
    level: level,
    inner: inner,
    autoFocus: autoFocus,
    className: className,
    data: data,
    computed: computed,
    beforeCreate: function beforeCreate(config) {
      var _this = this;

      this.gesture = new Gesture();
      this.c_gesture = new Gesture();
      this.w_gesture = new Gesture();
      this.d_gesture = new Gesture();
      baseMobileEvent.forEach(function (item) {
        config.events[item] = function (evt) {
          _this.gesture[item](evt);
        };
        config.events['c_' + item] = function (evt) {
          _this.c_gesture[item](evt);
        };
        config.events['w_' + item] = function (evt) {
          _this.w_gesture[item](evt);
        };
      });

      supportGesture.forEach(function (item) {
        _this.gesture.on(item, function (evt) {
          var func = config.events[item];
          func && func.call(_this, evt);
        });
        _this.c_gesture.on(item, function (evt) {
          var func = config.events['c_' + item];
          func && func.call(_this, evt);
        });
        _this.w_gesture.on(item, function (evt) {
          var func = config.events['w_' + item];
          func && func.call(_this, evt);
        });
        _this.d_gesture.on(item, function (evt) {
          var func = config.events['d_' + item];
          func && func.call(_this, evt);
        });
      });

      _beforeCreate && _beforeCreate.call(this);
    },
    create: function create() {
      var _this2 = this;

      this._i = this._i || 0;
      this._i++;
      baseMobileEvent.forEach(function (item) {
        var key = '__' + item;
        _this2[key] = function (evt) {
          _this2.d_gesture[item](evt);
        };
        addEvent(_this2.$dom, item, _this2[key]);
      });

      _create && _create.call(this);
    },

    init: init,
    inited: inited,
    destroy: function destroy() {
      var _this3 = this;

      baseMobileEvent.forEach(function (item) {
        var key = '__' + item;
        removeEvent(_this3.$dom, item, _this3[key]);
      });

      _destroy && _destroy.call(this);
    },

    methods: methods,
    penetrate: penetrate,
    operable: operable,
    events: events
  };
}

/**
 * 为HTML元素添加事件代理
 * @param {HTMLElement} host 目标对象
 * @param {String} selector 要被代理的元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} capture 是否在捕获阶段监听
 */
function addDelegate$1(host, selector, type, handler) {

  var el = host.$dom;
  var handlerWrap = function handlerWrap(e) {
    var targetElsArr = findParents(e.target || e.srcElement, el, true);
    var targetElArr = query(selector, el, true);
    var retEl = void 0;
    if (targetElArr.find) {
      retEl = targetElArr.find(function (seEl) {
        return targetElsArr.find(function (tgEl) {
          return seEl === tgEl;
        });
      });
    } else {
      // Fixed IE11 Array.find not defined bug
      targetElArr.forEach(function (seEl) {
        return !retEl && targetElsArr.forEach(function (tgEl) {
          if (!retEl && seEl === tgEl) {
            retEl = tgEl;
          }
        });
      });
    }
    retEl && handler.apply(retEl, arguments);
  };
  /* 将包装后的方法记录到缓存中 */
  addEventCache(el, type + '_delegate_' + selector, handler, handlerWrap);
  host.events[type] = isArray(host.events[type]) ? host.events[type] : [];
  host.events[type].push(handlerWrap);
}

/**
 * 为HTML元素移除事件代理
 * @param {HTMLElement} host 目标对象
 * @param {String} selector 要被代理的元素
 * @param {String} type 事件名称
 * @param {Function} handler 处理函数
 * @param {Boolean} capture 是否在捕获阶段监听
 */
function removeDelegate$1(host, selector, type, handler) {

  var el = host.$dom;
  /* 尝试从缓存中读取包装后的方法 */
  var handlerWrap = removeEventCache(el, type + '_delegate_' + selector, handler);
  if (handlerWrap) {
    var index = host.events[type].indexOf(handlerWrap);
    host.events[type].splice(index, 1);
  }
}

function fireEvent(host, type, evt) {
  isArray(host.events[type]) && host.events[type].forEach(function (item) {
    item(evt);
  });
}

var Base = function () {
  function Base(parent) {
    _classCallCheck(this, Base);

    this.parent = parent;
  }

  _createClass(Base, [{
    key: 'create',
    value: function create() {
      this.createEl();
      this.addAllEvent();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.removeAllEvent();
    }
  }, {
    key: 'createEl',
    value: function createEl() {
      this.$dom = document.createElement(this.option.tag);
      this.$dom.innerHTML = this.option.html;
      this.parent.$wrap.appendChild(this.$dom);
    }
  }, {
    key: 'addAllEvent',
    value: function addAllEvent() {
      var _this = this;

      this.option.defaultEvent && _Object$keys(this.option.defaultEvent).forEach(function (item) {
        var key = _this.option.defaultEvent[item];
        _this[key] = bind(_this[key], _this);
        addDelegate$1(_this.parent, _this.option.tag, item, _this[key], false, false);
      });
      this.option.event && _Object$keys(this.option.event).forEach(function (item) {
        var key = '__' + item;
        _this[key] = bind(_this.option.event[item], _this);
        addDelegate$1(_this.parent, _this.option.tag, item, _this[key], false, false);
      });
    }
  }, {
    key: 'removeAllEvent',
    value: function removeAllEvent() {
      var _this2 = this;

      this.option.defaultEvent && _Object$keys(this.option.defaultEvent).forEach(function (item) {
        var key = _this2.option.defaultEvent[item];
        _this2[key] = bind(_this2[key], _this2);
        removeDelegate$1(_this2.parent, _this2.option.tag, item, _this2[key], false, false);
      });
      this.option.event && _Object$keys(this.option.event).forEach(function (item) {
        var key = '__' + item;
        _this2[key] = bind(_this2.option.event[item], _this2);
        removeDelegate$1(_this2.parent, _this2.option.tag, item, _this2[key], false, false);
      });
    }
  }]);

  return Base;
}();

/**
 * 自定义组件配置
 */

var Component = function (_Base) {
  _inherits(Component, _Base);

  function Component(parent, option) {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, (Component.__proto__ || _Object$getPrototypeOf(Component)).call(this, parent));

    _this.option = option;
    _this.init();
    return _this;
  }

  _createClass(Component, [{
    key: 'init',
    value: function init() {
      _get(Component.prototype.__proto__ || _Object$getPrototypeOf(Component.prototype), 'create', this).call(this);
      addClassName(this.$dom, 'chimee-flex-component');
    }
  }]);

  return Component;
}(Base);

/**
 * play 配置
 */

var defaultOption = {
  tag: 'chimee-control-state',
  html: '\n    <chimee-control-state-play></chimee-control-state-play>\n    <chimee-control-state-pause></chimee-control-state-pause>\n  ',
  animate: {
    icon: '\n      <svg viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <g fill="#ffffff" stroke="#ffffff">\n          <path class="left"></path>\n          <path class="right"></path>\n        </g>\n      </svg>\n    ',
    path: {
      play: {
        left: 'M0.921875,0.265625L0.921875,197.074852L95.7890625,149L96.2929688,49Z',
        right: 'M90.3142151,45.9315226L90.3142151,151.774115L201.600944,99.9938782L201.600944,98.0237571Z'
      },
      pause: {
        left: 'M0.921875,1.265625L0.921875,198.074852L79.3611677,198.074852L79.3611677,0.258923126Z',
        right: 'M126.921875,1.265625L126.921875,198.074852L205.361168,198.074852L205.361168,0.258923126Z'
      }
    }
  },
  defaultEvent: {
    tap: 'tap'
  }
};

var Play = function (_Base) {
  _inherits(Play, _Base);

  function Play(parent, option) {
    _classCallCheck(this, Play);

    var _this = _possibleConstructorReturn(this, (Play.__proto__ || _Object$getPrototypeOf(Play)).call(this, parent));

    _this.option = deepAssign(defaultOption, isObject(option) ? option : {});
    _this.animate = false;
    _this.init();
    return _this;
  }

  _createClass(Play, [{
    key: 'init',
    value: function init() {
      // 创建 html ／ 绑定事件
      _get(Play.prototype.__proto__ || _Object$getPrototypeOf(Play.prototype), 'create', this).call(this);
      this.$dom = $(this.$dom);
      this.$dom.addClass('chimee-flex-component');

      // 判断是否是默认或者用户提供 icon
      if (this.option.icon && this.option.icon.play && this.option.icon.pause) {
        this.$play = this.$dom.find('chimee-control-state-play');
        this.$pause = this.$dom.find('chimee-control-state-pause');
        this.$play.html(this.option.icon.play);
        this.$pause.html(this.option.icon.pause);
      } else if (!this.option.bitmap) {
        this.animate = true;
        this.option.animate.path = this.option.path ? this.option.path : this.option.animate.path;
        this.$dom.html(this.option.animate.icon);
        this.$left = this.$dom.find('.left');
        this.$right = this.$dom.find('.right');
      }
      this.changeState('pause');
    }
  }, {
    key: 'changeState',
    value: function changeState(state) {
      var nextState = state === 'play' ? 'pause' : 'play';
      this.state = state;
      addClassName(this.parent.$dom, nextState);
      removeClassName(this.parent.$dom, state);
      this.animate && this.setPath(nextState);
    }
  }, {
    key: 'setPath',
    value: function setPath(state) {
      var path = this.option.animate.path;
      if (state === 'play') {
        this.$left.attr('d', path.play.left);
        this.$right.attr('d', path.play.right);
      } else {
        this.$left.attr('d', path.pause.left);
        this.$right.attr('d', path.pause.right);
      }
    }
  }, {
    key: 'tap',
    value: function tap(e) {
      var nextState = this.state === 'play' ? 'pause' : 'play';
      this.changeState(nextState);
      this.parent.$emit(nextState);
    }
  }]);

  return Play;
}(Base);

var _class$9;

function _applyDecoratedDescriptor$8(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * Screen 配置
 */

var defaultOption$1 = {
  tag: 'chimee-screen',
  html: '\n    <chimee-screen-full>\n      <svg viewBox="0 0 67 66" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n          <!-- Generator: Sketch 43.1 (39012) - http://www.bohemiancoding.com/sketch -->\n          <desc>Created with Sketch.</desc>\n          <defs></defs>\n          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n              <g id="screen-small" transform="translate(33.756308, 32.621867) rotate(45.000000) translate(-33.756308, -32.621867) translate(18.756308, -10.378133)" fill="#FFFFFF">\n                  <polygon id="Path" transform="translate(14.967695, 66.389245) rotate(180.000000) translate(-14.967695, -66.389245) " points="11.5190786 46.9431778 11.7210093 70.7913773 0.565180527 70.7913773 15.4674455 85.8353125 29.3702096 70.7913773 18.5573247 70.7702156 18.5573247 46.9431778"></polygon>\n                  <polygon id="Path" points="11.5190786 0.274130278 11.7210093 24.1223298 0.565180527 24.1223298 15.4674455 39.1662649 29.3702096 24.1223298 18.5573247 24.1011681 18.5573247 0.274130278"></polygon>\n              </g>\n          </g>\n      </svg>\n    </chimee-screen-full>\n    <chimee-screen-small>\n      <svg viewBox="0 0 61 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <!-- Generator: Sketch 43.1 (39012) - http://www.bohemiancoding.com/sketch -->\n        <desc>Created with Sketch.</desc>\n        <defs></defs>\n        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g id="Group" transform="translate(30.756308, 30.621867) rotate(45.000000) translate(-30.756308, -30.621867) translate(15.756308, -12.378133)" fill="#FFFFFF">\n                <polygon id="Path" points="11.5190786 46.9431778 11.7210093 70.7913773 0.565180527 70.7913773 15.4674455 85.8353125 29.3702096 70.7913773 18.5573247 70.7702156 18.5573247 46.9431778"></polygon>\n                <polygon id="Path" transform="translate(14.967695, 19.720198) rotate(180.000000) translate(-14.967695, -19.720198) " points="11.5190786 0.274130278 11.7210093 24.1223298 0.565180527 24.1223298 15.4674455 39.1662649 29.3702096 24.1223298 18.5573247 24.1011681 18.5573247 0.274130278"></polygon>\n            </g>\n        </g>\n      </svg>\n    </chimee-screen-small>\n  ',
  defaultEvent: {
    tap: 'tap'
  }
};

var Screen = (_class$9 = function (_Base) {
  _inherits(Screen, _Base);

  function Screen(parent, option) {
    _classCallCheck(this, Screen);

    var _this = _possibleConstructorReturn(this, (Screen.__proto__ || _Object$getPrototypeOf(Screen)).call(this, parent));

    _this.state = 'small';
    _this.option = deepAssign(defaultOption$1, isObject(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(Screen, [{
    key: 'init',
    value: function init() {
      _get(Screen.prototype.__proto__ || _Object$getPrototypeOf(Screen.prototype), 'create', this).call(this);
      this.$dom = $(this.$dom);
      this.changeState(this.state);
      // addClassName(this.$dom, 'flex-item');
      this.$dom.addClass('chimee-flex-component');

      this.$full = this.$dom.find('chimee-screen-full');
      this.$small = this.$dom.find('chimee-screen-small');
      // 判断是否是默认或者用户提供 icon
      if (this.option.icon && this.option.icon.full && this.option.icon.small) {
        // if((!this.option.icon.play && this.option.icon.puase) || (this.option.icon.play && !this.option.icon.puase)) {
        //   console.warn(`Please provide a play and pause icon！If you can't, we will use default icon!`);
        // }
        this.$full.html(this.option.icon.full);
        this.$small.html(this.option.icon.small);
      } else if (this.option.bitmap) {
        this.$full.html('');
        this.$small.html('');
      }
    }
  }, {
    key: 'changeState',
    value: function changeState(state) {
      var removeState = state === 'small' ? 'full' : 'small';
      addClassName(this.parent.$dom, state);
      removeClassName(this.parent.$dom, removeState);
    }
  }, {
    key: 'tap',
    value: function tap() {
      var full = false;
      if (this.state === 'small') {
        this.state = 'full';
        full = true;
      } else {
        this.state = 'small';
        full = false;
      }
      this.changeState(this.state);
      this.parent.$fullscreen(full, 'container');
      if (full) {
        this.watch_screen = this.parent.$watch('isFullscreen', this.screenChange);
      } else {
        this.watch_screen();
      }
    }
  }, {
    key: 'screenChange',
    value: function screenChange() {
      if (!this.parent.fullscreenElement) return;
      this.state = 'small';
      this.changeState('small');
      this.parent.$fullscreen(false, 'container');
    }
  }]);

  return Screen;
}(Base), _applyDecoratedDescriptor$8(_class$9.prototype, 'screenChange', [autobind], _Object$getOwnPropertyDescriptor(_class$9.prototype, 'screenChange'), _class$9.prototype), _class$9);

var _class$10;

function _applyDecoratedDescriptor$9(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var defaultOption$2 = {
  tag: 'chimee-progressbar',
  html: '\n    <chimee-progressbar-bg class="chimee-progressbar-line"></chimee-progressbar-bg>\n    <chimee-progressbar-buffer class="chimee-progressbar-line"></chimee-progressbar-buffer>\n    <chimee-progressbar-all class="chimee-progressbar-line">\n      <chimee-progressbar-ball></chimee-progressbar-ball>\n    </chimee-progressbar-all>\n  '
};

var ProgressBar = (_class$10 = function (_Base) {
  _inherits(ProgressBar, _Base);

  function ProgressBar(parent, option) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || _Object$getPrototypeOf(ProgressBar)).call(this, parent));

    _this.option = deepAssign(defaultOption$2, isObject(option) ? option : {});
    _this.visiable = option !== false;
    _this.init();
    return _this;
  }

  _createClass(ProgressBar, [{
    key: 'init',
    value: function init() {
      _get(ProgressBar.prototype.__proto__ || _Object$getPrototypeOf(ProgressBar.prototype), 'create', this).call(this);
      this.$dom = $(this.$dom);
      this.$buffer = this.$dom.find('chimee-progressbar-buffer');
      this.$all = this.$dom.find('chimee-progressbar-all');
      this.$ball = this.$dom.find('chimee-progressbar-ball');
      this.$dom.addClass('chimee-flex-component');

      // css 配置
      !this.visiable && this.$dom.css('visibility', 'hidden');
      this.addEvent();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.removeEvent();
      // 解绑全屏监听事件
      this.watch_screen && this.watch_screen();
      _get(ProgressBar.prototype.__proto__ || _Object$getPrototypeOf(ProgressBar.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'addEvent',
    value: function addEvent$$1() {
      addDelegate$1(this.parent, 'chimee-progressbar', 'tap', this.tap);
      addDelegate$1(this.parent, 'chimee-progressbar', 'panstart', this.mousedown);
    }
  }, {
    key: 'removeEvent',
    value: function removeEvent$$1() {
      removeDelegate$1(this.parent, 'chimee-progressbar', 'tap', this.tap);
      removeDelegate$1(this.parent, 'chimee-progressbar', 'panstart', this.mousedown);
    }

    /**
     * 缓存进度条更新 progress 事件
     */

  }, {
    key: 'progress',
    value: function progress() {
      var buffer = 0;
      try {
        buffer = this.parent.buffered.end(0);
      } catch (e) {}
      var bufferWidth = buffer / this.parent.duration * 100 + '%';
      this.$buffer.css('width', bufferWidth);
    }

    /**
     * requestAnimationFrame 来更新进度条, timeupdate 事件
     */

  }, {
    key: 'update',
    value: function update() {
      var time = this._currentTime !== undefined ? this._currentTime : this.parent.currentTime;
      var timePer = time ? time / this.parent.duration : 0;
      this.$all.css('width', timePer * 100 + '%');
    }
  }, {
    key: 'tap',
    value: function tap(e) {
      this._currentTime = (e.clientX - this.$dom[0].offsetLeft) / this.$dom[0].offsetWidth * this.parent.duration;
      this.update();
      this.parent.currentTime = this._currentTime;
      this._currentTime = undefined;
    }
  }, {
    key: 'mousedown',
    value: function mousedown(e) {
      this._currentTime = (e.clientX - this.$dom[0].offsetLeft) / this.$dom[0].offsetWidth * this.parent.duration;
      this.startX = e.clientX;
      this.startTime = this._currentTime;
      addDelegate$1(this.parent, this.option.tag, 'panmove', this.draging);
      addDelegate$1(this.parent, this.option.tag, 'panend', this.dragEnd);
    }

    /**
     * 开始拖拽
     * @param {EventObject} e 鼠标事件
     */

  }, {
    key: 'draging',
    value: function draging(e) {
      this.endX = e.clientX;
      var dragTime = (this.endX - this.startX) / this.$dom[0].offsetWidth * this.parent.duration;
      var dragAfterTime = +(this.startTime + dragTime).toFixed(2);
      this._currentTime = dragAfterTime < 0 ? 0 : dragAfterTime > this.parent.duration ? this.parent.duration : dragAfterTime;
      this.update();
    }

    /**
     * 结束拖拽
     */

  }, {
    key: 'dragEnd',
    value: function dragEnd() {
      this.startX = 0;
      this.startTime = 0;
      this.parent.currentTime = this._currentTime;
      this._currentTime = undefined;
      removeDelegate$1(this.parent, this.option.tag, 'panmove', this.draging);
      removeDelegate$1(this.parent, this.option.tag, 'panend', this.dragEnd);
    }
    /**
     * progress 不可点击
     * @param {*} value 
     */

  }, {
    key: 'changePointerEvent',
    value: function changePointerEvent(value) {
      this.$dom.css('pointerEvents', value);
    }
  }]);

  return ProgressBar;
}(Base), _applyDecoratedDescriptor$9(_class$10.prototype, 'tap', [autobind], _Object$getOwnPropertyDescriptor(_class$10.prototype, 'tap'), _class$10.prototype), _applyDecoratedDescriptor$9(_class$10.prototype, 'mousedown', [autobind], _Object$getOwnPropertyDescriptor(_class$10.prototype, 'mousedown'), _class$10.prototype), _applyDecoratedDescriptor$9(_class$10.prototype, 'draging', [autobind], _Object$getOwnPropertyDescriptor(_class$10.prototype, 'draging'), _class$10.prototype), _applyDecoratedDescriptor$9(_class$10.prototype, 'dragEnd', [autobind], _Object$getOwnPropertyDescriptor(_class$10.prototype, 'dragEnd'), _class$10.prototype), _class$10);

/**
 * currentTime 配置
 */

var defaultOption$3 = {
  tag: 'chimee-current-time',
  html: '\n    00:00\n  '
};

var CurrentTime = function (_Base) {
  _inherits(CurrentTime, _Base);

  function CurrentTime(parent, option) {
    _classCallCheck(this, CurrentTime);

    var _this = _possibleConstructorReturn(this, (CurrentTime.__proto__ || _Object$getPrototypeOf(CurrentTime)).call(this, parent));

    _this.option = deepAssign(defaultOption$3, isObject(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(CurrentTime, [{
    key: 'init',
    value: function init() {
      _get(CurrentTime.prototype.__proto__ || _Object$getPrototypeOf(CurrentTime.prototype), 'create', this).call(this);
      this.$dom = $(this.$dom);
      this.$dom.addClass('chimee-flex-component');
    }
  }, {
    key: 'updateCurrent',
    value: function updateCurrent() {
      this.$dom.text(formatTime(this.parent.currentTime));
    }
  }]);

  return CurrentTime;
}(Base);

/**
 * totalTime 配置
 */

var defaultOption$4 = {
  tag: 'chimee-total-time',
  html: '\n    00:00\n  '
};

var TotalTime = function (_Base) {
  _inherits(TotalTime, _Base);

  function TotalTime(parent, option) {
    _classCallCheck(this, TotalTime);

    var _this = _possibleConstructorReturn(this, (TotalTime.__proto__ || _Object$getPrototypeOf(TotalTime)).call(this, parent));

    _this.option = deepAssign(defaultOption$4, isObject(option) ? option : {});
    _this.init();
    return _this;
  }

  _createClass(TotalTime, [{
    key: 'init',
    value: function init() {
      _get(TotalTime.prototype.__proto__ || _Object$getPrototypeOf(TotalTime.prototype), 'create', this).call(this);
      this.$dom = $(this.$dom);
      this.$dom.addClass('chimee-flex-component');
    }
  }, {
    key: 'updateTotal',
    value: function updateTotal() {
      this.$dom.text(formatTime(this.parent.duration));
    }
  }]);

  return TotalTime;
}(Base);

function hundleChildren(plugin) {
  var childConfig = {};
  if (!plugin.$config.children) {
    childConfig = plugin.isLive ? {
      play: true, // 底部播放暂停按钮
      currentTime: false, // 播放时间
      progressBar: false, // 播放进度控制条
      totalTime: false, // 总时间
      screen: true // 全屏控制
    } : {
      play: true, // 底部播放暂停按钮
      currentTime: true, // 播放时间
      progressBar: true, // 播放进度控制条
      totalTime: true, // 总时间
      screen: true // 全屏控制
    };
  } else {
    childConfig = plugin.$config.children;
  }
  return childConfig;
}

/**
 * 1. 将所有的 ui component 输出到 html 结构中
 * 2. 为这些 component 绑定响应的事件
 * @param {*} dom 所有 ui 节点的子容器
 * @param {*} config 关于 ui 的一些列设置
 * @return {Array} 所有子节点
 */

function createChild(plugin) {
  var childConfig = plugin.config.children = hundleChildren(plugin);
  var children = {};
  _Object$keys(childConfig).forEach(function (item) {
    switch (item) {
      case 'play':
        if (childConfig.play) {
          children.play = new Play(plugin, childConfig.play);
        }
        break;
      case 'currentTime':
        if (childConfig.currentTime) {
          children.currentTime = new CurrentTime(plugin, childConfig.currentTime);
        }
        break;
      case 'progressBar':
        children.progressBar = new ProgressBar(plugin, childConfig.progressBar);
        break;
      case 'totalTime':
        if (childConfig.totalTime) {
          children.totalTime = new TotalTime(plugin, childConfig.totalTime);
        }
        break;
      case 'screen':
        if (childConfig.screen) {
          children.screen = new Screen(plugin, childConfig.screen);
        }
        break;
      default:
        children[item] = new Component(plugin, childConfig[item]);
        break;
    }
  });

  return children;
}

var majorColorStyle = '\n  .chimee-flex-component svg *{\n    fill: majorColor;\n    stroke: majorColor;\n  }\n  chimee-progressbar-all{\n    background: majorColor;\n  }\n  chimee-volume.chimee-flex-component chimee-volume-bar-all{\n    background: majorColor;    \n  }\n  chimee-clarity-list li:hover,\n  chimee-clarity-list li.active {\n    color: majorColor;\n  }\n';

var hoverColorStyle = '\n  .chimee-flex-component svg:hover *{\n    fill: hoverColor;\n    stroke: hoverColor;\n  }\n';

/**
 * 插件默认配置
 */

var defaultConfig = {
  hideBarTime: 2000
};

var barStatus = {
  timer: null,
  show: true
};

var mobiControlbar = gestureFactory({
  name: 'chimeeMobiControlbar',
  el: 'chimee-control',
  data: {
    children: {},
    show: false
  },
  level: 99,
  operable: true,
  penetrate: false,
  create: function create() {
    this.environment = new uaParser().getResult();
  },
  init: function init(videoConfig) {
    if (videoConfig.controls) {
      this.show = true;
      videoConfig.controls = false;
    }
    var _this = this;
    applyDecorators(videoConfig, {
      controls: accessor({
        get: function get() {
          return _this.show;
        },
        set: function set(value) {
          _this.show = Boolean(value);
          _this._display();
          return false;
        }
      }, { preSet: true })
    }, { self: true });
    this.config = isObject(this.$config) ? deepAssign(defaultConfig, this.$config) : defaultConfig;
    this.$dom.innerHTML = '<chimee-control-wrap></chimee-control-wrap>';
    this.$wrap = this.$dom.querySelector('chimee-control-wrap');

    this.events = {};
    this.children = createChild(this);
    this._setStyle();

    // 增加 window / document 的全局监听
    this._addGlobalEvent();

    // 监听全屏事件

    this.watch_fullscreen = this.$watch('isFullscreen', this._mousemove);
  },
  destroy: function destroy() {
    window.clearTimeout(barStatus.timer);
    barStatus.show = false;
    this._removeGlobalEvent();
    this.watch_fullscreen && this.watch_fullscreen();
  },
  inited: function inited() {
    for (var i in this.children) {
      this.children[i].inited && this.children[i].inited();
    }
  },

  events: {
    play: function play() {
      this.children.play && this.children.play.changeState('play');
      this._hideItself();
    },
    pause: function pause() {
      this.children.play && this.children.play.changeState('pause');
      this._showItself();
    },
    canplay: function canplay() {
      this.children.progressBar.changePointerEvent('auto');
    },
    load: function load() {
      // update src 充值进度条/时间/播放状态
      // load 的时候不会触发 pause(), 手动将控制条显示出来
      this._showItself();
      this._progressUpdate();
      this.children.play && this.children.play.changeState('pause');
      this.children.progressBar.changePointerEvent('none');
      this._progressUpdate();
    },
    durationchange: function durationchange() {
      this.children.totalTime && this.children.totalTime.updateTotal();
    },
    timeupdate: function timeupdate() {
      this._progressUpdate();
    },
    progress: function progress() {
      this.children.progressBar && this.children.progressBar.progress();
    },
    volumechange: function volumechange() {
      this.children.volume && this.children.volume.update();
    },
    tap: function tap(evt) {
      this._mousemove();
    },
    d_tap: function d_tap(evt) {
      !this.paused && this._mousemove();
      fireEvent(this, 'tap', evt.changedTouches[0]);
    },
    d_panstart: function d_panstart(evt) {
      !this.paused && this._mousemove();
      fireEvent(this, 'panstart', evt.changedTouches[0]);
    },
    d_panmove: function d_panmove(evt) {
      !this.paused && this._mousemove();
      fireEvent(this, 'panmove', evt.changedTouches[0]);
    },
    d_panend: function d_panend(evt) {
      !this.paused && this._mousemove();
      fireEvent(this, 'panend', evt.changedTouches[0]);
    }
  },
  methods: {
    _progressUpdate: function _progressUpdate() {
      this.children.progressBar && this.children.progressBar.update();
      this.children.currentTime && this.children.currentTime.updateCurrent();
    },
    _hideItself: function _hideItself() {
      var _this2 = this;

      window.clearTimeout(barStatus.timer);
      barStatus.timer = setTimeout(function () {
        var bottom = -_this2.$wrap.offsetHeight;
        setStyle(_this2.$wrap, {
          bottom: bottom + 'px'
        });
        setStyle(_this2.$dom, {
          visibility: 'hidden'
        });
        barStatus.show = false;
        _this2.$emit('barHide');
      }, this.config.hideBarTime);
    },
    _showItself: function _showItself() {
      window.clearTimeout(barStatus.timer);
      setStyle(this.$wrap, {
        bottom: '0'
      });
      setStyle(this.$dom, {
        visibility: 'visible'
      });
      !barStatus.show && this.$emit('barShow');
      barStatus.show = true;
    },
    _display: function _display() {
      var display = this.show ? 'block' : 'none';
      setStyle(this.$dom, {
        display: display
      });
    },
    _mousemove: function _mousemove(e) {
      if (this.paused) return;
      this._showItself();
      this._hideItself();
    },
    _setStyle: function _setStyle() {
      var css = '';
      css += this.config.majorColor ? majorColorStyle.replace(/majorColor/g, this.config.majorColor) : '';
      css += this.config.hoverColor ? hoverColorStyle.replace(/hoverColor/g, this.config.hoverColor) : '';
      var style = document.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = css;
      document.head.appendChild(style);
    },
    _weixinJSBridgeReady: function _weixinJSBridgeReady() {
      // console.log(this.environment.os === 'iOS', window.WeixinJSBridge)
      window.WeixinJSBridge && this.environment.os.name === 'iOS' && this.load();
    },

    // 增加一些全局事件监听
    _addGlobalEvent: function _addGlobalEvent() {
      addEvent(window, 'orientationchange', this._mousemove);
      addEvent(document, 'WeixinJSBridgeReady', this._weixinJSBridgeReady);
    },

    // 去除一些全局事件监听
    _removeGlobalEvent: function _removeGlobalEvent() {
      removeEvent(window, 'orientationchange', this._mousemove);
      removeEvent(document, 'WeixinJSBridgeReady', this._weixinJSBridgeReady);
    }
  }
});

var playStr = "\n<svg width=\"92px\" height=\"92px\" viewBox=\"0 0 92 92\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch -->\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <circle id=\"Oval\" fill-opacity=\"0.5\" fill=\"#000000\" cx=\"46\" cy=\"46\" r=\"46\"></circle>\n        <polygon id=\"Triangle\" fill=\"#FFFFFF\" transform=\"translate(51.000000, 46.500000) rotate(90.000000) translate(-51.000000, -46.500000) \" points=\"51 26 76 67 26 67\"></polygon>\n    </g>\n</svg>";

var loadingStr = "<svg width='120px' height='120px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-default\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect><rect  x='47' y='40' width='6' height='20' rx='5' ry='5' fill='#ffffff' transform='rotate(0 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-1s' repeatCount='indefinite'/></rect><rect  x='47' y='40' width='6' height='20' rx='5' ry='5' fill='#ffffff' transform='rotate(30 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.9166666666666666s' repeatCount='indefinite'/></rect><rect  x='47' y='40' width='6' height='20' rx='5' ry='5' fill='#ffffff' transform='rotate(60 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.8333333333333334s' repeatCount='indefinite'/></rect><rect  x='47' y='40' width='6' height='20' rx='5' ry='5' fill='#ffffff' transform='rotate(90 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.75s' repeatCount='indefinite'/></rect><rect  x='47' y='40' width='6' height='20' rx='5' ry='5' fill='#ffffff' transform='rotate(120 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.6666666666666666s' repeatCount='indefinite'/></rect><rect  x='47' y='40' width='6' height='20' rx='5' ry='5' fill='#ffffff' transform='rotate(150 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.5833333333333334s' repeatCount='indefinite'/></rect><rect  x='47' y='40' width='6' height='20' rx='5' ry='5' fill='#ffffff' transform='rotate(180 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.5s' repeatCount='indefinite'/></rect><rect  x='47' y='40' width='6' height='20' rx='5' ry='5' fill='#ffffff' transform='rotate(210 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.4166666666666667s' repeatCount='indefinite'/></rect><rect  x='47' y='40' width='6' height='20' rx='5' ry='5' fill='#ffffff' transform='rotate(240 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.3333333333333333s' repeatCount='indefinite'/></rect><rect  x='47' y='40' width='6' height='20' rx='5' ry='5' fill='#ffffff' transform='rotate(270 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.25s' repeatCount='indefinite'/></rect><rect  x='47' y='40' width='6' height='20' rx='5' ry='5' fill='#ffffff' transform='rotate(300 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.16666666666666666s' repeatCount='indefinite'/></rect><rect  x='47' y='40' width='6' height='20' rx='5' ry='5' fill='#ffffff' transform='rotate(330 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.08333333333333333s' repeatCount='indefinite'/></rect></svg>";

var defaultConfig$1 = {
  errorTips: '加载失败，请刷新重试',
  icon: {
    loading: loadingStr,
    play: playStr
  },
  expectTime: 3e4 // 超过最长加载时间则报错
};

var chimeeState = gestureFactory({
  name: 'chimeeState',
  el: '\n    <chimee-state class="play">\n      <chimee-state-loading></chimee-state-loading>\n      <chimee-state-play></chimee-state-play>\n      <chimee-state-error></chimee-state-error>\n    </chimee-state>\n  ',
  init: function init() {
    this.config = isObject(this.$config) ? deepAssign(defaultConfig$1, this.$config) : defaultConfig$1;
    this._addInnerHtml();
  },
  inited: function inited() {
    // 存在 src 并且 设置了 prelaod || autoplay 的情况下， 显示 loading
    this.src && (this.preload === 'auto' || this.preload === 'metadata' || this.preload === '' || this.autoplay === true) && this.showState('loading', true);
  },

  penetrate: true,
  operable: true,
  destroy: function destroy() {
    this.clearTimeout();
  },

  events: {
    load: function load() {
      console.log('load');
      this.showState('play', true);
    },
    pause: function pause() {
      console.log('pause');
      this.showState('play', true);
    },
    play: function play() {
      this.showState('play', false);
    },

    // loadedmetadata () {
    // this.playing();
    // console.log('loadedmetadata')
    // this.showState('play', true);
    // },
    playing: function playing() {
      this.playing();
    },

    // loadstart () {
    //   this.waiting();
    // },
    waiting: function waiting() {
      this.waiting();
    },

    // 卡顿(FLV|HLS加载异常待内部特供事件)
    // stalled () {
    //   this.showLoading();
    // },
    timeupdate: function timeupdate() {
      this.clearTimeout();
    },
    panstart: function panstart(evt) {
      this.emit('state-panstart', evt);
    },
    panmove: function panmove(evt) {
      this.emit('state-panmove', evt);
    },
    panend: function panend(evt) {
      this.emit('state-panend', evt);
    },
    tap: function tap(evt) {
      this.emit('state-tap', evt);
    },
    d_tap: function d_tap(evt) {
      var playElem = this.$dom.querySelector('chimee-state-play');
      if (playElem.contains(evt.target)) {
        this.play();
      }
    }
  },
  methods: {
    playing: function playing() {
      this.clearTimeout();
      this.showState('loading', false);
      this.showState('error', false);
    },
    waiting: function waiting() {
      var _this = this;

      this.clearTimeout();
      // 加载超过30秒则超时显示异常
      this._timeout = setTimeout(function () {
        return _this.showState('error', true);
      }, this.config.expectTime);
      !this.paused && this.showState('loading', true);
    },
    clearTimeout: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this._timeout) {
        clearTimeout(this._timeout);
        this._timeout = null;
      }
    }),
    showState: function showState(state, show) {
      console.log(state, show);
      show && this.emit('state-change', state);
      this.$dom.className = show ? state : '';
    },
    _addInnerHtml: function _addInnerHtml() {
      var dom = $(this.$dom);
      dom.find('chimee-state-loading').html(this.config.icon.loading);
      dom.find('chimee-state-play').html(this.config.icon.play);
      dom.find('chimee-state-error').html(this.config.errorTips);
    }
  }
});

function uiIsAvailable(defaultDisableUA, ua) {
  return defaultDisableUA.every(function (item) {
    return !ua.match(item);
  });
}

function reduceArray(arr1, arr2) {
  if (!isArray(arr2)) return arr1;
  var result = [];
  arr1.forEach(function (item) {
    if (arr2.indexOf(item) === -1) result.push(item);
  });
  return result;
}

var DEFAULT_DISABLE_UA = [];
var innerPlugins = [mobiControlbar.name, chimeeState.name];

Chimee.install(mobiControlbar);
Chimee.install(chimeeState);

function handlePlugins(config) {
  config.plugin = config.plugin || config.plugins;
  if (!isArray(config.plugin)) config.plugin = [];
  var configPluginNames = config.plugin.map(function (item) {
    return isObject(item) ? item.name : item;
  });
  innerPlugins.forEach(function (name) {
    if (configPluginNames.indexOf(name) > -1) return;
    config.plugin.push(name);
  });
  config.plugin = reduceArray(config.plugin, config.removeInnerPlugins);
}

var ChimeeMobilePlayer = function (_Chimee) {
  _inherits(ChimeeMobilePlayer, _Chimee);

  function ChimeeMobilePlayer(config) {
    _classCallCheck(this, ChimeeMobilePlayer);

    if (!isObject(config)) throw new TypeError('You must pass an Object as config when you new ChimeePlayer');
    var defaultDisableUA = config.disableUA === undefined ? DEFAULT_DISABLE_UA : config.disableUA;
    var isUIAvailable = uiIsAvailable(defaultDisableUA, window.navigator.userAgent);

    // 添加UI插件
    if (isUIAvailable) handlePlugins(config);

    config.box = config.box === undefined ? 'native' : config.box;

    var _this = _possibleConstructorReturn(this, (ChimeeMobilePlayer.__proto__ || _Object$getPrototypeOf(ChimeeMobilePlayer)).call(this, config));

    _this.hlsWarn(_this.box);
    _this.ready.then(function () {
      _this.$watch('box', function (box) {
        return _this.hlsWarn(box);
      });
    });
    return _this;
  }

  _createClass(ChimeeMobilePlayer, [{
    key: 'hlsWarn',
    value: function hlsWarn(box) {
      if (box === 'hls') {
        Log.warn('chimee-mobile-player', 'Mobile support m3u8, you do not need to use hls box. See more https://github.com/Chimeejs/chimee-mobile-player/blob/master/README.md#%E4%B8%BA%E4%BB%80%E4%B9%88%E7%A7%BB%E5%8A%A8%E7%AB%AF%E4%B8%8D%E8%83%BD%E6%92%AD%E6%94%BE-m3u8-%E7%9B%B4%E6%92%AD%E6%B5%81');
      }
    }
  }]);

  return ChimeeMobilePlayer;
}(Chimee);
// 暴露手势工厂方法


ChimeeMobilePlayer.gestureFactory = gestureFactory;

return ChimeeMobilePlayer;

})));
