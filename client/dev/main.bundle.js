webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * Angular
	 */
	var platform_browser_dynamic_1 = __webpack_require__(327);
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(20);
	var router_deprecated_1 = __webpack_require__(220);
	var http_1 = __webpack_require__(44);
	var angular2_jwt_1 = __webpack_require__(749);
	/*
	 * Components
	 */
	var app_component_1 = __webpack_require__(505);
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
	    common_1.FORM_PROVIDERS,
	    router_deprecated_1.ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    core_1.provide(angular2_jwt_1.AuthHttp, {
	        useFactory: function (http) {
	            return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
	                username: 'username',
	                role: 'role'
	            }), http);
	        },
	        deps: [http_1.Http]
	    })
	]);
	//import {DemoComponent} from './demo/demo';
	//
	//bootstrap(DemoComponent);
	

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	* @module
	* @description
	* Maps application URLs into application states, to support deep-linking and navigation.
	*/
	var router_1 = __webpack_require__(144);
	exports.Router = router_1.Router;
	exports.RouterOutletMap = router_1.RouterOutletMap;
	var segments_1 = __webpack_require__(98);
	exports.RouteSegment = segments_1.RouteSegment;
	exports.UrlSegment = segments_1.UrlSegment;
	exports.Tree = segments_1.Tree;
	exports.UrlTree = segments_1.UrlTree;
	exports.RouteTree = segments_1.RouteTree;
	var decorators_1 = __webpack_require__(500);
	exports.Routes = decorators_1.Routes;
	var metadata_1 = __webpack_require__(225);
	exports.Route = metadata_1.Route;
	var router_url_serializer_1 = __webpack_require__(358);
	exports.RouterUrlSerializer = router_url_serializer_1.RouterUrlSerializer;
	exports.DefaultRouterUrlSerializer = router_url_serializer_1.DefaultRouterUrlSerializer;
	var router_providers_1 = __webpack_require__(502);
	exports.ROUTER_PROVIDERS = router_providers_1.ROUTER_PROVIDERS;
	var router_outlet_1 = __webpack_require__(496);
	var router_link_1 = __webpack_require__(495);
	/**
	 * A list of directives. To use the router directives like {@link RouterOutlet} and
	 * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
	 * component.
	 *
	 * ```
	 * import {Component} from '@angular/core';
	 * import {ROUTER_DIRECTIVES, Routes} from '@angular/router-deprecated';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @RouteConfig([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *    // ...
	 * }
	 *
	 * bootstrap(AppCmp);
	 * ```
	 */
	exports.ROUTER_DIRECTIVES = [router_outlet_1.RouterOutlet, router_link_1.RouterLink];
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 39:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	exports.IS_DART = false;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	var _devMode = true;
	var _modeLocked = false;
	function lockMode() {
	    _modeLocked = true;
	}
	exports.lockMode = lockMode;
	/**
	 * Disable Angular's development mode, which turns off assertions and other
	 * checks within the framework.
	 *
	 * One important assertion this disables verifies that a change detection pass
	 * does not result in additional changes to any bindings (also known as
	 * unidirectional data flow).
	 */
	function enableProdMode() {
	    if (_modeLocked) {
	        // Cannot use BaseException as that ends up importing from facade/lang.
	        throw 'Cannot enable prod mode after platform setup.';
	    }
	    _devMode = false;
	}
	exports.enableProdMode = enableProdMode;
	function assertionsEnabled() {
	    return _devMode;
	}
	exports.assertionsEnabled = assertionsEnabled;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === "boolean";
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === "number";
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === "string";
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === "function";
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    return obj instanceof _global.Promise;
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf("\n");
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(""); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError("Invalid integer literal when parsing " + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " +
	            radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var RegExpWrapper = (function () {
	    function RegExpWrapper() {
	    }
	    RegExpWrapper.create = function (regExpStr, flags) {
	        if (flags === void 0) { flags = ''; }
	        flags = flags.replace(/g/g, '');
	        return new _global.RegExp(regExpStr, flags + 'g');
	    };
	    RegExpWrapper.firstMatch = function (regExp, input) {
	        // Reset multimatch regex state
	        regExp.lastIndex = 0;
	        return regExp.exec(input);
	    };
	    RegExpWrapper.test = function (regExp, input) {
	        regExp.lastIndex = 0;
	        return regExp.test(input);
	    };
	    RegExpWrapper.matcher = function (regExp, input) {
	        // Reset regex state for the case
	        // someone did not loop over all matches
	        // last time.
	        regExp.lastIndex = 0;
	        return { re: regExp, input: input };
	    };
	    RegExpWrapper.replaceAll = function (regExp, input, replace) {
	        var c = regExp.exec(input);
	        var res = '';
	        regExp.lastIndex = 0;
	        var prev = 0;
	        while (c) {
	            res += input.substring(prev, c.index);
	            res += replace(c);
	            prev = c.index + c[0].length;
	            regExp.lastIndex = prev;
	            c = regExp.exec(input);
	        }
	        res += input.substring(prev);
	        return res;
	    };
	    return RegExpWrapper;
	}());
	exports.RegExpWrapper = RegExpWrapper;
	var RegExpMatcherWrapper = (function () {
	    function RegExpMatcherWrapper() {
	    }
	    RegExpMatcherWrapper.next = function (matcher) {
	        return matcher.re.exec(matcher.input);
	    };
	    return RegExpMatcherWrapper;
	}());
	exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === "function" || typeof o === "object");
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function bitWiseOr(values) {
	    return values.reduce(function (a, b) { return a | b; });
	}
	exports.bitWiseOr = bitWiseOr;
	function bitWiseAnd(values) {
	    return values.reduce(function (a, b) { return a & b; });
	}
	exports.bitWiseAnd = bitWiseAnd;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	//# sourceMappingURL=lang.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by GiangDH on 5/19/16.
	 */
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(44);
	var Observable_1 = __webpack_require__(2);
	var AuthService = (function () {
	    function AuthService(_http) {
	        this._http = _http;
	        this._regUrl = '/api/user/';
	        this._loginUrl = '/api/login';
	        this._logOutUrl = '/api/logout';
	        this._checkLoginUrl = '/api/checkLogin/';
	    }
	    AuthService.prototype.login = function (user) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _user = JSON.stringify({
	            username: user.username,
	            password: user.password
	        });
	        var usertoken = user.username;
	        return this._http.post(this._loginUrl, _user, options)
	            .map(function (res) { return res.json(); });
	    };
	    AuthService.prototype.register = function (user) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _user = JSON.stringify({
	            username: user.username,
	            password: user.password,
	            email: user.email
	        });
	        return this._http.post(this._regUrl, _user, options)
	            .map(function (res) { return res.json(); })
	            .catch(this.handleError);
	    };
	    AuthService.prototype.logout = function () {
	        return this._http.get(this._logOutUrl)
	            .map(function (res) { return res.json(); })
	            .catch(this.handleError);
	    };
	    AuthService.prototype.logoutClient = function () {
	        localStorage.removeItem('username');
	        localStorage.removeItem('role');
	    };
	    //isLoggedIn(): Observable<string[]> {
	    // return this._http.get(this._checkLoginUrl).map((res)=>res.json()).catch(this.handleError);
	    //}
	    AuthService.prototype.dashboardFilter = function () {
	        var roleToken = localStorage.getItem('role');
	        if (!roleToken) {
	            return false;
	        }
	        else if (roleToken !== 'admin') {
	            return false;
	        }
	        return true;
	    };
	    AuthService.prototype.handleError = function (error) {
	        return Observable_1.Observable.throw(error.json());
	    };
	    AuthService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], AuthService);
	    return AuthService;
	    var _a;
	}());
	exports.AuthService = AuthService;
	

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(44);
	var Observable_1 = __webpack_require__(2);
	var KnowledgeService = (function () {
	    function KnowledgeService(_http) {
	        this._http = _http;
	        this._knowledgesUrl = '/api/knowledges/:id';
	    }
	    KnowledgeService.prototype.getAllKnowledges = function () {
	        return this._http.get(this._knowledgesUrl.replace(':id', ''))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    KnowledgeService.prototype.addKnowledge = function (knowledge) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _knowledge = JSON.stringify({
	            name: knowledge.name,
	            description: knowledge.description,
	        });
	        return this._http
	            .post(this._knowledgesUrl.replace(':id', ''), _knowledge, options)
	            .map(function (r) { return r.json(); });
	    };
	    KnowledgeService.prototype.deleteKnowledge = function (id) {
	        return this._http
	            .delete(this._knowledgesUrl.replace(':id', id));
	    };
	    KnowledgeService.prototype.findKnowledgeById = function (id) {
	        return this._http
	            .get(this._knowledgesUrl.replace(':id', id))
	            .map(function (r) { return r.json(); });
	    };
	    KnowledgeService.prototype.updateKnowledge = function (knowledge) {
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _knowledge = JSON.stringify({
	            name: knowledge.name,
	            description: knowledge.description,
	        });
	        return this._http
	            .put(this._knowledgesUrl.replace(':id', knowledge._id), _knowledge, options)
	            .map(function (r) { return r.json(); });
	    };
	    //get child of a knowledge parent
	    KnowledgeService.prototype.getChildFromParent = function (knowledges) {
	        var parent = [];
	        var subCate = [];
	        for (var i = 0; i < knowledges.length; i++) {
	            if (!knowledges[i].hasOwnProperty('parent')) {
	                parent.push(knowledges[i]);
	            }
	        }
	        for (var i = 0; i < parent.length; i++) {
	            for (var j = 0; j < knowledges.length; j++) {
	                if ((knowledges[j].hasOwnProperty('parent')) && (knowledges[j].parent === parent[i]._id)) {
	                    subCate.push(knowledges[j]);
	                }
	            }
	            parent[i]["subCategory"] = subCate;
	            subCate = [];
	        }
	        knowledges = parent;
	        return parent;
	    };
	    KnowledgeService.prototype.handleError = function (error) {
	        console.error(error);
	        return Observable_1.Observable.throw(error.json().error || 'Server error');
	    };
	    KnowledgeService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], KnowledgeService);
	    return KnowledgeService;
	    var _a;
	}());
	exports.KnowledgeService = KnowledgeService;
	

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(44);
	var Observable_1 = __webpack_require__(2);
	var RequestService = (function () {
	    function RequestService(_http) {
	        this._http = _http;
	        this._requestsUrl = '/api/requests/:id';
	        this._getKnowledgeByParentUrl = '/api/knowledges/parent/:id';
	        this._searchRequetsUrl = '/api/requests-search/:id';
	        this._requestStatusUrl = '/api/request-status/:id';
	    }
	    RequestService.prototype.getAllRequests = function () {
	        return this._http.get(this._requestsUrl.replace(':id', ''))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    RequestService.prototype.addRequest = function (request) {
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _request = JSON.stringify({
	            title: request.title,
	            description: request.description,
	            knowledgeId: request.knowledgeId,
	            user: request.user
	        });
	        return this._http
	            .post(this._requestsUrl.replace(':id', ''), _request, options)
	            .map(function (r) { return r.json(); });
	    };
	    RequestService.prototype.getRequestById = function (id) {
	        return this._http.get(this._requestsUrl.replace(':id', id))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    //delete request 
	    RequestService.prototype.deleteRequest = function (request) {
	        return this._http
	            .delete(this._requestsUrl.replace(':id', request._id))
	            .map(function (r) { return r.json(); });
	    };
	    RequestService.prototype.deleteRequestById = function (id) {
	        return this._http
	            .delete(this._requestsUrl.replace(':id', id))
	            .map(function (r) { return r.json(); });
	    };
	    RequestService.prototype.updateRequest = function (request) {
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _request = JSON.stringify({
	            _id: '',
	            title: request.title,
	            description: request.description,
	            knowledgeId: request.knowledgeId
	        });
	        console.log(_request);
	        return this._http
	            .put(this._requestsUrl.replace(':id', request._id), _request, options)
	            .map(function (r) { return r.json(); });
	    };
	    RequestService.prototype.getRequestByKnowledgeId = function (id) {
	        return this._http
	            .post(this._requestsUrl.replace(':id', id), '')
	            .map(function (r) { return r.json(); });
	    };
	    // get child knowledge from parent knowledge
	    RequestService.prototype.getKnowledgeByParent = function (id) {
	        return this._http.get(this._getKnowledgeByParentUrl.replace(':id', id))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    //search request
	    RequestService.prototype.searchRequest = function (search) {
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _search = JSON.stringify({
	            text: search
	        });
	        return this._http
	            .post(this._searchRequetsUrl.replace(':id', ''), _search, options)
	            .map(function (r) { return r.json(); });
	    };
	    //change status request
	    RequestService.prototype.changeStatusRequest = function (id) {
	        return this._http.get(this._requestStatusUrl.replace(':id', id))
	            .map(function (r) { return r.json(); });
	    };
	    RequestService.prototype.handleError = function (error) {
	        console.error(error);
	        return Observable_1.Observable.throw(error.json().error || 'Server error');
	    };
	    RequestService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], RequestService);
	    return RequestService;
	    var _a;
	}());
	exports.RequestService = RequestService;
	

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(39);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).reduce(function (r, a) {
	            r.push(map[a]);
	            return r;
	        }, []);
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    ListWrapper.flatten = function (list) {
	        var target = [];
	        _flattenArray(list, target);
	        return target;
	    };
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var collection_1 = __webpack_require__(97);
	var lang_1 = __webpack_require__(39);
	var Tree = (function () {
	    function Tree(root) {
	        this._root = root;
	    }
	    Object.defineProperty(Tree.prototype, "root", {
	        get: function () { return this._root.value; },
	        enumerable: true,
	        configurable: true
	    });
	    Tree.prototype.parent = function (t) {
	        var p = this.pathFromRoot(t);
	        return p.length > 1 ? p[p.length - 2] : null;
	    };
	    Tree.prototype.children = function (t) {
	        var n = _findNode(t, this._root);
	        return lang_1.isPresent(n) ? n.children.map(function (t) { return t.value; }) : null;
	    };
	    Tree.prototype.firstChild = function (t) {
	        var n = _findNode(t, this._root);
	        return lang_1.isPresent(n) && n.children.length > 0 ? n.children[0].value : null;
	    };
	    Tree.prototype.pathFromRoot = function (t) { return _findPath(t, this._root, []).map(function (s) { return s.value; }); };
	    Tree.prototype.contains = function (tree) { return _contains(this._root, tree._root); };
	    return Tree;
	}());
	exports.Tree = Tree;
	var UrlTree = (function (_super) {
	    __extends(UrlTree, _super);
	    function UrlTree(root) {
	        _super.call(this, root);
	    }
	    return UrlTree;
	}(Tree));
	exports.UrlTree = UrlTree;
	var RouteTree = (function (_super) {
	    __extends(RouteTree, _super);
	    function RouteTree(root) {
	        _super.call(this, root);
	    }
	    return RouteTree;
	}(Tree));
	exports.RouteTree = RouteTree;
	function rootNode(tree) {
	    return tree._root;
	}
	exports.rootNode = rootNode;
	function _findNode(expected, c) {
	    // TODO: vsavkin remove it once recognize is fixed
	    if (expected instanceof RouteSegment && equalSegments(expected, c.value))
	        return c;
	    if (expected === c.value)
	        return c;
	    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
	        var cc = _a[_i];
	        var r = _findNode(expected, cc);
	        if (lang_1.isPresent(r))
	            return r;
	    }
	    return null;
	}
	function _findPath(expected, c, collected) {
	    collected.push(c);
	    // TODO: vsavkin remove it once recognize is fixed
	    if (_equalValues(expected, c.value))
	        return collected;
	    for (var _i = 0, _a = c.children; _i < _a.length; _i++) {
	        var cc = _a[_i];
	        var r = _findPath(expected, cc, collection_1.ListWrapper.clone(collected));
	        if (lang_1.isPresent(r))
	            return r;
	    }
	    return null;
	}
	function _contains(tree, subtree) {
	    if (!_equalValues(tree.value, subtree.value))
	        return false;
	    var _loop_1 = function(subtreeNode) {
	        var s = tree.children.filter(function (child) { return _equalValues(child.value, subtreeNode.value); });
	        if (s.length === 0)
	            return { value: false };
	        if (!_contains(s[0], subtreeNode))
	            return { value: false };
	    };
	    for (var _i = 0, _a = subtree.children; _i < _a.length; _i++) {
	        var subtreeNode = _a[_i];
	        var state_1 = _loop_1(subtreeNode);
	        if (typeof state_1 === "object") return state_1.value;
	    }
	    return true;
	}
	function _equalValues(a, b) {
	    if (a instanceof RouteSegment)
	        return equalSegments(a, b);
	    if (a instanceof UrlSegment)
	        return equalUrlSegments(a, b);
	    return a === b;
	}
	var TreeNode = (function () {
	    function TreeNode(value, children) {
	        this.value = value;
	        this.children = children;
	    }
	    return TreeNode;
	}());
	exports.TreeNode = TreeNode;
	var UrlSegment = (function () {
	    function UrlSegment(segment, parameters, outlet) {
	        this.segment = segment;
	        this.parameters = parameters;
	        this.outlet = outlet;
	    }
	    UrlSegment.prototype.toString = function () {
	        var outletPrefix = lang_1.isBlank(this.outlet) ? "" : this.outlet + ":";
	        return "" + outletPrefix + this.segment + _serializeParams(this.parameters);
	    };
	    return UrlSegment;
	}());
	exports.UrlSegment = UrlSegment;
	function _serializeParams(params) {
	    var res = "";
	    collection_1.StringMapWrapper.forEach(params, function (v, k) { return res += ";" + k + "=" + v; });
	    return res;
	}
	var RouteSegment = (function () {
	    function RouteSegment(urlSegments, parameters, outlet, type, componentFactory) {
	        this.urlSegments = urlSegments;
	        this.parameters = parameters;
	        this.outlet = outlet;
	        this._type = type;
	        this._componentFactory = componentFactory;
	    }
	    RouteSegment.prototype.getParam = function (param) {
	        return lang_1.isPresent(this.parameters) ? this.parameters[param] : null;
	    };
	    Object.defineProperty(RouteSegment.prototype, "type", {
	        get: function () { return this._type; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RouteSegment.prototype, "stringifiedUrlSegments", {
	        get: function () { return this.urlSegments.map(function (s) { return s.toString(); }).join("/"); },
	        enumerable: true,
	        configurable: true
	    });
	    return RouteSegment;
	}());
	exports.RouteSegment = RouteSegment;
	function serializeRouteSegmentTree(tree) {
	    return _serializeRouteSegmentTree(tree._root);
	}
	exports.serializeRouteSegmentTree = serializeRouteSegmentTree;
	function _serializeRouteSegmentTree(node) {
	    var v = node.value;
	    var children = node.children.map(function (c) { return _serializeRouteSegmentTree(c); }).join(", ");
	    return v.outlet + ":" + v.stringifiedUrlSegments + "(" + lang_1.stringify(v.type) + ") [" + children + "]";
	}
	function equalSegments(a, b) {
	    if (lang_1.isBlank(a) && !lang_1.isBlank(b))
	        return false;
	    if (!lang_1.isBlank(a) && lang_1.isBlank(b))
	        return false;
	    if (a._type !== b._type)
	        return false;
	    if (a.outlet != b.outlet)
	        return false;
	    return collection_1.StringMapWrapper.equals(a.parameters, b.parameters);
	}
	exports.equalSegments = equalSegments;
	function equalUrlSegments(a, b) {
	    if (lang_1.isBlank(a) && !lang_1.isBlank(b))
	        return false;
	    if (!lang_1.isBlank(a) && lang_1.isBlank(b))
	        return false;
	    if (a.segment != b.segment)
	        return false;
	    if (a.outlet != b.outlet)
	        return false;
	    if (lang_1.isBlank(a.parameters)) {
	        console.log("a", a);
	    }
	    if (lang_1.isBlank(b.parameters)) {
	        console.log("b", b);
	    }
	    return collection_1.StringMapWrapper.equals(a.parameters, b.parameters);
	}
	exports.equalUrlSegments = equalUrlSegments;
	function routeSegmentComponentFactory(a) {
	    return a._componentFactory;
	}
	exports.routeSegmentComponentFactory = routeSegmentComponentFactory;
	//# sourceMappingURL=segments.js.map

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(39);
	var collection_1 = __webpack_require__(97);
	var async_1 = __webpack_require__(354);
	var collection_2 = __webpack_require__(97);
	var core_2 = __webpack_require__(1);
	var recognize_1 = __webpack_require__(501);
	var link_1 = __webpack_require__(499);
	var segments_1 = __webpack_require__(98);
	var lifecycle_reflector_1 = __webpack_require__(498);
	var constants_1 = __webpack_require__(224);
	/**
	 * @internal
	 */
	var RouterOutletMap = (function () {
	    function RouterOutletMap() {
	        /** @internal */
	        this._outlets = {};
	    }
	    RouterOutletMap.prototype.registerOutlet = function (name, outlet) { this._outlets[name] = outlet; };
	    return RouterOutletMap;
	}());
	exports.RouterOutletMap = RouterOutletMap;
	/**
	 * The `Router` is responsible for mapping URLs to components.
	 *
	 * You can see the state of the router by inspecting the read-only fields `router.urlTree`
	 * and `router.routeTree`.
	 */
	var Router = (function () {
	    /**
	     * @internal
	     */
	    function Router(_rootComponent, _rootComponentType, _componentResolver, _urlSerializer, _routerOutletMap, _location) {
	        this._rootComponent = _rootComponent;
	        this._rootComponentType = _rootComponentType;
	        this._componentResolver = _componentResolver;
	        this._urlSerializer = _urlSerializer;
	        this._routerOutletMap = _routerOutletMap;
	        this._location = _location;
	        this._changes = new async_1.EventEmitter();
	        this._prevTree = this._createInitialTree();
	        this._setUpLocationChangeListener();
	        this.navigateByUrl(this._location.path());
	    }
	    Object.defineProperty(Router.prototype, "urlTree", {
	        /**
	         * Returns the current url tree.
	         */
	        get: function () { return this._urlTree; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Router.prototype, "routeTree", {
	        /**
	         * Returns the current route tree.
	         */
	        get: function () { return this._prevTree; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Router.prototype, "changes", {
	        /**
	         * An observable or url changes from the router.
	         */
	        get: function () { return this._changes; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Navigate based on the provided url. This navigation is always absolute.
	     *
	     * ### Usage
	     *
	     * ```
	     * router.navigateByUrl("/team/33/user/11");
	     * ```
	     */
	    Router.prototype.navigateByUrl = function (url) {
	        return this._navigate(this._urlSerializer.parse(url));
	    };
	    /**
	     * Navigate based on the provided array of commands and a starting point.
	     * If no segment is provided, the navigation is absolute.
	     *
	     * ### Usage
	     *
	     * ```
	     * router.navigate(['team', 33, 'team', '11], segment);
	     * ```
	     */
	    Router.prototype.navigate = function (commands, segment) {
	        return this._navigate(this.createUrlTree(commands, segment));
	    };
	    /**
	     * @internal
	     */
	    Router.prototype.dispose = function () { async_1.ObservableWrapper.dispose(this._locationSubscription); };
	    /**
	     * Applies an array of commands to the current url tree and creates
	     * a new url tree.
	     *
	     * When given a segment, applies the given commands starting from the segment.
	     * When not given a segment, applies the given command starting from the root.
	     *
	     * ### Usage
	     *
	     * ```
	     * // create /team/33/user/11
	     * router.createUrlTree(['/team', 33, 'user', 11]);
	     *
	     * // create /team/33;expand=true/user/11
	     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
	     *
	     * // you can collapse static fragments like this
	     * router.createUrlTree(['/team/33/user', userId]);
	     *
	     * // assuming the current url is `/team/33/user/11` and the segment points to `user/11`
	     *
	     * // navigate to /team/33/user/11/details
	     * router.createUrlTree(['details'], segment);
	     *
	     * // navigate to /team/33/user/22
	     * router.createUrlTree(['../22'], segment);
	     *
	     * // navigate to /team/44/user/22
	     * router.createUrlTree(['../../team/44/user/22'], segment);
	     * ```
	     */
	    Router.prototype.createUrlTree = function (commands, segment) {
	        var s = lang_1.isPresent(segment) ? segment : this._prevTree.root;
	        return link_1.link(s, this._prevTree, this.urlTree, commands);
	    };
	    /**
	     * Serializes a {@link UrlTree} into a string.
	     */
	    Router.prototype.serializeUrl = function (url) { return this._urlSerializer.serialize(url); };
	    Router.prototype._createInitialTree = function () {
	        var root = new segments_1.RouteSegment([new segments_1.UrlSegment("", {}, null)], {}, constants_1.DEFAULT_OUTLET_NAME, this._rootComponentType, null);
	        return new segments_1.RouteTree(new segments_1.TreeNode(root, []));
	    };
	    Router.prototype._setUpLocationChangeListener = function () {
	        var _this = this;
	        this._locationSubscription = this._location.subscribe(function (change) { _this._navigate(_this._urlSerializer.parse(change['url'])); });
	    };
	    Router.prototype._navigate = function (url) {
	        var _this = this;
	        this._urlTree = url;
	        return recognize_1.recognize(this._componentResolver, this._rootComponentType, url)
	            .then(function (currTree) {
	            return new _LoadSegments(currTree, _this._prevTree)
	                .load(_this._routerOutletMap, _this._rootComponent)
	                .then(function (updated) {
	                if (updated) {
	                    _this._prevTree = currTree;
	                    _this._location.go(_this._urlSerializer.serialize(_this._urlTree));
	                    _this._changes.emit(null);
	                }
	            });
	        });
	    };
	    return Router;
	}());
	exports.Router = Router;
	var _LoadSegments = (function () {
	    function _LoadSegments(currTree, prevTree) {
	        this.currTree = currTree;
	        this.prevTree = prevTree;
	        this.deactivations = [];
	        this.performMutation = true;
	    }
	    _LoadSegments.prototype.load = function (parentOutletMap, rootComponent) {
	        var _this = this;
	        var prevRoot = lang_1.isPresent(this.prevTree) ? segments_1.rootNode(this.prevTree) : null;
	        var currRoot = segments_1.rootNode(this.currTree);
	        return this.canDeactivate(currRoot, prevRoot, parentOutletMap, rootComponent)
	            .then(function (res) {
	            _this.performMutation = true;
	            if (res) {
	                _this.loadChildSegments(currRoot, prevRoot, parentOutletMap, [rootComponent]);
	            }
	            return res;
	        });
	    };
	    _LoadSegments.prototype.canDeactivate = function (currRoot, prevRoot, outletMap, rootComponent) {
	        var _this = this;
	        this.performMutation = false;
	        this.loadChildSegments(currRoot, prevRoot, outletMap, [rootComponent]);
	        var allPaths = async_1.PromiseWrapper.all(this.deactivations.map(function (r) { return _this.checkCanDeactivatePath(r); }));
	        return allPaths.then(function (values) { return values.filter(function (v) { return v; }).length === values.length; });
	    };
	    _LoadSegments.prototype.checkCanDeactivatePath = function (path) {
	        var _this = this;
	        var curr = async_1.PromiseWrapper.resolve(true);
	        var _loop_1 = function(p) {
	            curr = curr.then(function (_) {
	                if (lifecycle_reflector_1.hasLifecycleHook("routerCanDeactivate", p)) {
	                    return p.routerCanDeactivate(_this.prevTree, _this.currTree);
	                }
	                else {
	                    return _;
	                }
	            });
	        };
	        for (var _i = 0, _a = collection_1.ListWrapper.reversed(path); _i < _a.length; _i++) {
	            var p = _a[_i];
	            _loop_1(p);
	        }
	        return curr;
	    };
	    _LoadSegments.prototype.loadChildSegments = function (currNode, prevNode, outletMap, components) {
	        var _this = this;
	        var prevChildren = lang_1.isPresent(prevNode) ?
	            prevNode.children.reduce(function (m, c) {
	                m[c.value.outlet] = c;
	                return m;
	            }, {}) :
	            {};
	        currNode.children.forEach(function (c) {
	            _this.loadSegments(c, prevChildren[c.value.outlet], outletMap, components);
	            collection_2.StringMapWrapper.delete(prevChildren, c.value.outlet);
	        });
	        collection_2.StringMapWrapper.forEach(prevChildren, function (v, k) { return _this.unloadOutlet(outletMap._outlets[k], components); });
	    };
	    _LoadSegments.prototype.loadSegments = function (currNode, prevNode, parentOutletMap, components) {
	        var curr = currNode.value;
	        var prev = lang_1.isPresent(prevNode) ? prevNode.value : null;
	        var outlet = this.getOutlet(parentOutletMap, currNode.value);
	        if (segments_1.equalSegments(curr, prev)) {
	            this.loadChildSegments(currNode, prevNode, outlet.outletMap, components.concat([outlet.loadedComponent]));
	        }
	        else {
	            this.unloadOutlet(outlet, components);
	            if (this.performMutation) {
	                var outletMap = new RouterOutletMap();
	                var loadedComponent = this.loadNewSegment(outletMap, curr, prev, outlet);
	                this.loadChildSegments(currNode, prevNode, outletMap, components.concat([loadedComponent]));
	            }
	        }
	    };
	    _LoadSegments.prototype.loadNewSegment = function (outletMap, curr, prev, outlet) {
	        var resolved = core_1.ReflectiveInjector.resolve([core_1.provide(RouterOutletMap, { useValue: outletMap }), core_1.provide(segments_1.RouteSegment, { useValue: curr })]);
	        var ref = outlet.load(segments_1.routeSegmentComponentFactory(curr), resolved, outletMap);
	        if (lifecycle_reflector_1.hasLifecycleHook("routerOnActivate", ref.instance)) {
	            ref.instance.routerOnActivate(curr, prev, this.currTree, this.prevTree);
	        }
	        return ref.instance;
	    };
	    _LoadSegments.prototype.getOutlet = function (outletMap, segment) {
	        var outlet = outletMap._outlets[segment.outlet];
	        if (lang_1.isBlank(outlet)) {
	            if (segment.outlet == constants_1.DEFAULT_OUTLET_NAME) {
	                throw new core_2.BaseException("Cannot find default outlet");
	            }
	            else {
	                throw new core_2.BaseException("Cannot find the outlet " + segment.outlet);
	            }
	        }
	        return outlet;
	    };
	    _LoadSegments.prototype.unloadOutlet = function (outlet, components) {
	        var _this = this;
	        if (lang_1.isPresent(outlet) && outlet.isLoaded) {
	            collection_2.StringMapWrapper.forEach(outlet.outletMap._outlets, function (v, k) { return _this.unloadOutlet(v, components); });
	            if (this.performMutation) {
	                outlet.unload();
	            }
	            else {
	                this.deactivations.push(components.concat([outlet.loadedComponent]));
	            }
	        }
	    };
	    return _LoadSegments;
	}());
	//# sourceMappingURL=router.js.map

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var auth_services_1 = __webpack_require__(45);
	var router_1 = __webpack_require__(14);
	var NavbarComponent = (function () {
	    function NavbarComponent(_auth, router) {
	        this._auth = _auth;
	        this.router = router;
	    }
	    NavbarComponent.prototype.logout = function () {
	        var _this = this;
	        this._auth.logout().subscribe(function (status) {
	            if (status.login == false) {
	                _this._auth.logoutClient();
	            }
	        });
	        this.router.navigate(['/']);
	    };
	    NavbarComponent = __decorate([
	        core_1.Component({
	            selector: 'nav-bar',
	            templateUrl: 'client/dev/dashboard/templates/shared/nav-bar.html',
	            styleUrls: [
	                'client/dev/dashboard/styles/styles.css',
	                'client/dev/dashboard/styles/bootstrap.min.css'
	            ]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof auth_services_1.AuthService !== 'undefined' && auth_services_1.AuthService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], NavbarComponent);
	    return NavbarComponent;
	    var _a, _b;
	}());
	exports.NavbarComponent = NavbarComponent;
	

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var core_2 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var SidebarComponent = (function () {
	    function SidebarComponent() {
	    }
	    __decorate([
	        core_2.Input(), 
	        __metadata('design:type', String)
	    ], SidebarComponent.prototype, "pageTitle", void 0);
	    SidebarComponent = __decorate([
	        core_1.Component({
	            selector: 'sidebar',
	            templateUrl: 'client/dev/dashboard/templates/shared/sidebar.html',
	            styleUrls: ['client/dev/dashboard/styles/styles.css'],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SidebarComponent);
	    return SidebarComponent;
	}());
	exports.SidebarComponent = SidebarComponent;
	

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(44);
	var Observable_1 = __webpack_require__(2);
	var BadwordService = (function () {
	    function BadwordService(_http) {
	        this._http = _http;
	        this._badwordsUrl = '/api/badwords/:id';
	    }
	    BadwordService.prototype.getAllBadwords = function () {
	        return this._http.get(this._badwordsUrl.replace(':id', ''))
	            .map(function (r) { return r.json(); })
	            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
	            .catch(this.handleError);
	    };
	    BadwordService.prototype.addBadword = function (badword) {
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _badword = JSON.stringify({
	            word: badword.word,
	        });
	        console.log(_badword);
	        console.log(header);
	        return this._http
	            .post(this._badwordsUrl.replace(':id', ''), _badword, options)
	            .map(function (r) { return r.json(); });
	    };
	    BadwordService.prototype.deleteBadword = function (id) {
	        return this._http
	            .delete(this._badwordsUrl.replace(':id', id));
	    };
	    BadwordService.prototype.findBadwordById = function (id) {
	        return this._http
	            .get(this._badwordsUrl.replace(':id', id))
	            .map(function (r) { return r.json(); });
	    };
	    BadwordService.prototype.updateBadword = function (badword) {
	        console.log(badword);
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _badword = JSON.stringify({
	            word: badword.word,
	        });
	        return this._http
	            .put(this._badwordsUrl.replace(':id', badword._id), _badword, options)
	            .map(function (r) { return r.json(); });
	    };
	    BadwordService.prototype.handleError = function (error) {
	        console.error(error);
	        return Observable_1.Observable.throw(error.json().error || 'Server error');
	    };
	    BadwordService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], BadwordService);
	    return BadwordService;
	    var _a;
	}());
	exports.BadwordService = BadwordService;
	

/***/ },

/***/ 224:
/***/ function(module, exports) {

	"use strict";
	/**
	* Name of the default outlet outlet.
	* @type {string}
	*/
	exports.DEFAULT_OUTLET_NAME = "__DEFAULT";
	//# sourceMappingURL=constants.js.map

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(39);
	/**
	 * Information about a route.
	 *
	 * It has the following properties:
	 * - `path` is a string that uses the route matcher DSL.
	 * - `component` a component type.
	 *
	 * ### Example
	 * ```
	 * import {Routes} from '@angular/router';
	 *
	 * @Routes([
	 *   {path: '/home', component: HomeCmp}
	 * ])
	 * class MyApp {}
	 * ```
	 *
	 * @ts2dart_const
	 */
	var RouteMetadata = (function () {
	    function RouteMetadata() {
	    }
	    Object.defineProperty(RouteMetadata.prototype, "path", {
	        get: function () { },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RouteMetadata.prototype, "component", {
	        get: function () { },
	        enumerable: true,
	        configurable: true
	    });
	    return RouteMetadata;
	}());
	exports.RouteMetadata = RouteMetadata;
	/**
	 * See {@link RouteMetadata} for more information.
	 * @ts2dart_const
	 */
	var Route = (function () {
	    function Route(_a) {
	        var _b = _a === void 0 ? {} : _a, path = _b.path, component = _b.component;
	        this.path = path;
	        this.component = component;
	    }
	    Route.prototype.toString = function () { return "@Route(" + this.path + ", " + lang_1.stringify(this.component) + ")"; };
	    return Route;
	}());
	exports.Route = Route;
	/**
	 * Defines routes for a given component.
	 *
	 * It takes an array of {@link RouteMetadata}s.
	 * @ts2dart_const
	 */
	var RoutesMetadata = (function () {
	    function RoutesMetadata(routes) {
	        this.routes = routes;
	    }
	    RoutesMetadata.prototype.toString = function () { return "@Routes(" + this.routes + ")"; };
	    return RoutesMetadata;
	}());
	exports.RoutesMetadata = RoutesMetadata;
	//# sourceMappingURL=metadata.js.map

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(44);
	var Observable_1 = __webpack_require__(2);
	var OfferService = (function () {
	    function OfferService(_http) {
	        this._http = _http;
	        this._Url = '/api/offers/:id';
	    }
	    OfferService.prototype.addOffer = function (offer) {
	        var header = new http_1.Headers;
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _offer = JSON.stringify({
	            price: offer.price,
	            requestId: offer.requestId,
	            numberOfLecture: offer.numOfLecture,
	            message: offer.message,
	            user: offer.user
	        });
	        //console.log(_offer);
	        return this._http
	            .post(this._Url.replace(':id', ''), _offer, options)
	            .map(function (r) { return r.json(); });
	    };
	    OfferService.prototype.getOfferByRequestId = function (id) {
	        return this._http.post(this._Url.replace(':id', id), '')
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    OfferService.prototype.handleError = function (error) {
	        console.error(error);
	        return Observable_1.Observable.throw(error.json().error || 'Server error');
	    };
	    OfferService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], OfferService);
	    return OfferService;
	    var _a;
	}());
	exports.OfferService = OfferService;
	

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by GiangDH on 5/8/16.
	 */
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(44);
	var Observable_1 = __webpack_require__(2);
	var UserService = (function () {
	    function UserService(_http) {
	        this._http = _http;
	        this._usersUrl = '/api/user/:id';
	    }
	    UserService.prototype.getAllUsers = function () {
	        return this._http.get(this._usersUrl.replace(':id', ''))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    UserService.prototype.getUserById = function (id) {
	        return this._http.get(this._usersUrl.replace(':id', id))
	            .map(function (r) { return r.json(); })
	            .catch(this.handleError);
	    };
	    UserService.prototype.addUser = function (user) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _user = JSON.stringify({
	            firstName: user.firstName,
	            lastName: user.lastName,
	            displayName: user.displayName,
	            username: user.username,
	            password: user.password,
	            email: user.email,
	            role: user.role
	        });
	        return this._http
	            .post(this._usersUrl.replace(':id', ''), _user, options)
	            .map(function (r) { return r.json(); });
	    };
	    UserService.prototype.updateUser = function (user) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        console.log(user);
	        var _user = JSON.stringify({
	            _id: user._id,
	            firstName: user.firstName,
	            lastName: user.lastName,
	            displayName: user.displayName,
	            username: user.username,
	            password: user.password,
	            email: user.email,
	            role: user.role
	        });
	        return this._http
	            .put(this._usersUrl.replace(':id', user._id), _user, options)
	            .map(function (r) { return r.json(); });
	    };
	    UserService.prototype.handleError = function (error) {
	        return Observable_1.Observable.throw(error);
	    };
	    UserService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], UserService);
	    return UserService;
	    var _a;
	}());
	exports.UserService = UserService;
	

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var PaginationService = (function () {
	    function PaginationService() {
	        this.change = new core_1.EventEmitter();
	        this.instances = {};
	        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
	    }
	    Object.defineProperty(PaginationService.prototype, "defaultId", {
	        get: function () { return this.DEFAULT_ID; },
	        enumerable: true,
	        configurable: true
	    });
	    PaginationService.prototype.register = function (instance) {
	        if (!instance.id) {
	            instance.id = this.DEFAULT_ID;
	        }
	        if (!this.instances[instance.id]) {
	            this.instances[instance.id] = instance;
	            this.change.emit(instance.id);
	        }
	        else {
	            var changed = this.updateInstance(instance);
	            if (changed) {
	                this.change.emit(instance.id);
	            }
	        }
	    };
	    /**
	     * Check each property of the instance and update any that have changed. Return
	     * true if any changes were made, else return false.
	     */
	    PaginationService.prototype.updateInstance = function (instance) {
	        var changed = false;
	        for (var prop in this.instances[instance.id]) {
	            if (instance[prop] !== this.instances[instance.id][prop]) {
	                this.instances[instance.id][prop] = instance[prop];
	                changed = true;
	            }
	        }
	        return changed;
	    };
	    /**
	     * Returns the current page number.
	     */
	    PaginationService.prototype.getCurrentPage = function (id) {
	        if (this.instances[id]) {
	            return this.instances[id].currentPage;
	        }
	    };
	    /**
	     * Sets the current page number.
	     */
	    PaginationService.prototype.setCurrentPage = function (id, page) {
	        if (this.instances[id]) {
	            var instance = this.instances[id];
	            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
	            if (page <= maxPage && 1 <= page) {
	                this.instances[id].currentPage = page;
	                this.change.emit(id);
	            }
	        }
	    };
	    /**
	     * Sets the value of instance.totalItems
	     */
	    PaginationService.prototype.setTotalItems = function (id, totalItems) {
	        if (this.instances[id] && 0 <= totalItems) {
	            this.instances[id].totalItems = totalItems;
	            this.change.emit(id);
	        }
	    };
	    /**
	     * Sets the value of instance.itemsPerPage.
	     */
	    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
	        if (this.instances[id]) {
	            this.instances[id].itemsPerPage = itemsPerPage;
	            this.change.emit(id);
	        }
	    };
	    /**
	     * Returns a clone of the pagination instance object matching the id. If no
	     * id specified, returns the instance corresponding to the default id.
	     */
	    PaginationService.prototype.getInstance = function (id) {
	        if (id === void 0) { id = this.DEFAULT_ID; }
	        if (this.instances[id]) {
	            return this.clone(this.instances[id]);
	        }
	        return {};
	    };
	    /**
	     * Perform a shallow clone of an object.
	     */
	    PaginationService.prototype.clone = function (obj) {
	        var target = {};
	        for (var i in obj) {
	            if (obj.hasOwnProperty(i)) {
	                target[i] = obj[i];
	            }
	        }
	        return target;
	    };
	    return PaginationService;
	}());
	exports.PaginationService = PaginationService;


/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var lang_1 = __webpack_require__(39);
	var promise_1 = __webpack_require__(357);
	exports.PromiseWrapper = promise_1.PromiseWrapper;
	exports.PromiseCompleter = promise_1.PromiseCompleter;
	var Subject_1 = __webpack_require__(18);
	var PromiseObservable_1 = __webpack_require__(81);
	var toPromise_1 = __webpack_require__(100);
	var Observable_1 = __webpack_require__(2);
	exports.Observable = Observable_1.Observable;
	var Subject_2 = __webpack_require__(18);
	exports.Subject = Subject_2.Subject;
	var TimerWrapper = (function () {
	    function TimerWrapper() {
	    }
	    TimerWrapper.setTimeout = function (fn, millis) {
	        return lang_1.global.setTimeout(fn, millis);
	    };
	    TimerWrapper.clearTimeout = function (id) { lang_1.global.clearTimeout(id); };
	    TimerWrapper.setInterval = function (fn, millis) {
	        return lang_1.global.setInterval(fn, millis);
	    };
	    TimerWrapper.clearInterval = function (id) { lang_1.global.clearInterval(id); };
	    return TimerWrapper;
	}());
	exports.TimerWrapper = TimerWrapper;
	var ObservableWrapper = (function () {
	    function ObservableWrapper() {
	    }
	    // TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
	    ObservableWrapper.subscribe = function (emitter, onNext, onError, onComplete) {
	        if (onComplete === void 0) { onComplete = function () { }; }
	        onError = (typeof onError === "function") && onError || lang_1.noop;
	        onComplete = (typeof onComplete === "function") && onComplete || lang_1.noop;
	        return emitter.subscribe({ next: onNext, error: onError, complete: onComplete });
	    };
	    ObservableWrapper.isObservable = function (obs) { return !!obs.subscribe; };
	    /**
	     * Returns whether `obs` has any subscribers listening to events.
	     */
	    ObservableWrapper.hasSubscribers = function (obs) { return obs.observers.length > 0; };
	    ObservableWrapper.dispose = function (subscription) { subscription.unsubscribe(); };
	    /**
	     * @deprecated - use callEmit() instead
	     */
	    ObservableWrapper.callNext = function (emitter, value) { emitter.next(value); };
	    ObservableWrapper.callEmit = function (emitter, value) { emitter.emit(value); };
	    ObservableWrapper.callError = function (emitter, error) { emitter.error(error); };
	    ObservableWrapper.callComplete = function (emitter) { emitter.complete(); };
	    ObservableWrapper.fromPromise = function (promise) {
	        return PromiseObservable_1.PromiseObservable.create(promise);
	    };
	    ObservableWrapper.toPromise = function (obj) { return toPromise_1.toPromise.call(obj); };
	    return ObservableWrapper;
	}());
	exports.ObservableWrapper = ObservableWrapper;
	/**
	 * Use by directives and components to emit custom Events.
	 *
	 * ### Examples
	 *
	 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	 * title gets clicked:
	 *
	 * ```
	 * @Component({
	 *   selector: 'zippy',
	 *   template: `
	 *   <div class="zippy">
	 *     <div (click)="toggle()">Toggle</div>
	 *     <div [hidden]="!visible">
	 *       <ng-content></ng-content>
	 *     </div>
	 *  </div>`})
	 * export class Zippy {
	 *   visible: boolean = true;
	 *   @Output() open: EventEmitter<any> = new EventEmitter();
	 *   @Output() close: EventEmitter<any> = new EventEmitter();
	 *
	 *   toggle() {
	 *     this.visible = !this.visible;
	 *     if (this.visible) {
	 *       this.open.emit(null);
	 *     } else {
	 *       this.close.emit(null);
	 *     }
	 *   }
	 * }
	 * ```
	 *
	 * Use Rx.Observable but provides an adapter to make it work as specified here:
	 * https://github.com/jhusain/observable-spec
	 *
	 * Once a reference implementation of the spec is available, switch to it.
	 */
	var EventEmitter = (function (_super) {
	    __extends(EventEmitter, _super);
	    /**
	     * Creates an instance of [EventEmitter], which depending on [isAsync],
	     * delivers events synchronously or asynchronously.
	     */
	    function EventEmitter(isAsync) {
	        if (isAsync === void 0) { isAsync = true; }
	        _super.call(this);
	        this._isAsync = isAsync;
	    }
	    EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	    /**
	     * @deprecated - use .emit(value) instead
	     */
	    EventEmitter.prototype.next = function (value) { _super.prototype.next.call(this, value); };
	    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	        var schedulerFn;
	        var errorFn = function (err) { return null; };
	        var completeFn = function () { return null; };
	        if (generatorOrNext && typeof generatorOrNext === 'object') {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext.next(value); }); } :
	                function (value) { generatorOrNext.next(value); };
	            if (generatorOrNext.error) {
	                errorFn = this._isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                    function (err) { generatorOrNext.error(err); };
	            }
	            if (generatorOrNext.complete) {
	                completeFn = this._isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                    function () { generatorOrNext.complete(); };
	            }
	        }
	        else {
	            schedulerFn = this._isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                function (value) { generatorOrNext(value); };
	            if (error) {
	                errorFn =
	                    this._isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	            }
	            if (complete) {
	                completeFn =
	                    this._isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	            }
	        }
	        return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	    };
	    return EventEmitter;
	}(Subject_1.Subject));
	exports.EventEmitter = EventEmitter;
	//# sourceMappingURL=async.js.map

/***/ },

/***/ 355:
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	* A base class for the WrappedException that can be used to identify
	* a WrappedException from ExceptionHandler without adding circular
	* dependency.
	*/
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(39);
	var base_wrapped_exception_1 = __webpack_require__(355);
	var collection_1 = __webpack_require__(97);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, [provide(ExceptionHandler, {useClass: MyExceptionHandler})])
	 *
	 * ```
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join("\n");
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError("STACKTRACE:");
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError("ORIGINAL STACKTRACE:");
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError("ERROR CONTEXT:");
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join("\n\n-----async gap-----\n") :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },

/***/ 357:
/***/ function(module, exports) {

	"use strict";
	var PromiseCompleter = (function () {
	    function PromiseCompleter() {
	        var _this = this;
	        this.promise = new Promise(function (res, rej) {
	            _this.resolve = res;
	            _this.reject = rej;
	        });
	    }
	    return PromiseCompleter;
	}());
	exports.PromiseCompleter = PromiseCompleter;
	var PromiseWrapper = (function () {
	    function PromiseWrapper() {
	    }
	    PromiseWrapper.resolve = function (obj) { return Promise.resolve(obj); };
	    PromiseWrapper.reject = function (obj, _) { return Promise.reject(obj); };
	    // Note: We can't rename this method into `catch`, as this is not a valid
	    // method name in Dart.
	    PromiseWrapper.catchError = function (promise, onError) {
	        return promise.catch(onError);
	    };
	    PromiseWrapper.all = function (promises) {
	        if (promises.length == 0)
	            return Promise.resolve([]);
	        return Promise.all(promises);
	    };
	    PromiseWrapper.then = function (promise, success, rejection) {
	        return promise.then(success, rejection);
	    };
	    PromiseWrapper.wrap = function (computation) {
	        return new Promise(function (res, rej) {
	            try {
	                res(computation());
	            }
	            catch (e) {
	                rej(e);
	            }
	        });
	    };
	    PromiseWrapper.scheduleMicrotask = function (computation) {
	        PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) { });
	    };
	    PromiseWrapper.isPromise = function (obj) { return obj instanceof Promise; };
	    PromiseWrapper.completer = function () { return new PromiseCompleter(); };
	    return PromiseWrapper;
	}());
	exports.PromiseWrapper = PromiseWrapper;
	//# sourceMappingURL=promise.js.map

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var segments_1 = __webpack_require__(98);
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(39);
	/**
	 * Defines a way to serialize/deserialize a url tree.
	 */
	var RouterUrlSerializer = (function () {
	    function RouterUrlSerializer() {
	    }
	    return RouterUrlSerializer;
	}());
	exports.RouterUrlSerializer = RouterUrlSerializer;
	/**
	 * A default implementation of the serialization.
	 */
	var DefaultRouterUrlSerializer = (function (_super) {
	    __extends(DefaultRouterUrlSerializer, _super);
	    function DefaultRouterUrlSerializer() {
	        _super.apply(this, arguments);
	    }
	    DefaultRouterUrlSerializer.prototype.parse = function (url) {
	        var root = new _UrlParser().parse(url);
	        return new segments_1.UrlTree(root);
	    };
	    DefaultRouterUrlSerializer.prototype.serialize = function (tree) { return _serializeUrlTreeNode(segments_1.rootNode(tree)); };
	    return DefaultRouterUrlSerializer;
	}(RouterUrlSerializer));
	exports.DefaultRouterUrlSerializer = DefaultRouterUrlSerializer;
	function _serializeUrlTreeNode(node) {
	    return "" + node.value + _serializeChildren(node);
	}
	function _serializeUrlTreeNodes(nodes) {
	    var main = nodes[0].value.toString();
	    var auxNodes = nodes.slice(1);
	    var aux = auxNodes.length > 0 ? "(" + auxNodes.map(_serializeUrlTreeNode).join("//") + ")" : "";
	    var children = _serializeChildren(nodes[0]);
	    return "" + main + aux + children;
	}
	function _serializeChildren(node) {
	    if (node.children.length > 0) {
	        return "/" + _serializeUrlTreeNodes(node.children);
	    }
	    else {
	        return "";
	    }
	}
	var SEGMENT_RE = lang_1.RegExpWrapper.create('^[^\\/\\(\\)\\?;=&#]+');
	function matchUrlSegment(str) {
	    var match = lang_1.RegExpWrapper.firstMatch(SEGMENT_RE, str);
	    return lang_1.isPresent(match) ? match[0] : '';
	}
	var QUERY_PARAM_VALUE_RE = lang_1.RegExpWrapper.create('^[^\\(\\)\\?;&#]+');
	function matchUrlQueryParamValue(str) {
	    var match = lang_1.RegExpWrapper.firstMatch(QUERY_PARAM_VALUE_RE, str);
	    return lang_1.isPresent(match) ? match[0] : '';
	}
	var _UrlParser = (function () {
	    function _UrlParser() {
	    }
	    _UrlParser.prototype.peekStartsWith = function (str) { return this._remaining.startsWith(str); };
	    _UrlParser.prototype.capture = function (str) {
	        if (!this._remaining.startsWith(str)) {
	            throw new core_1.BaseException("Expected \"" + str + "\".");
	        }
	        this._remaining = this._remaining.substring(str.length);
	    };
	    _UrlParser.prototype.parse = function (url) {
	        this._remaining = url;
	        if (url == '' || url == '/') {
	            return new segments_1.TreeNode(new segments_1.UrlSegment('', {}, null), []);
	        }
	        else {
	            return this.parseRoot();
	        }
	    };
	    _UrlParser.prototype.parseRoot = function () {
	        var segments = this.parseSegments();
	        return new segments_1.TreeNode(new segments_1.UrlSegment('', {}, null), segments);
	    };
	    _UrlParser.prototype.parseSegments = function (outletName) {
	        if (outletName === void 0) { outletName = null; }
	        if (this._remaining.length == 0) {
	            return [];
	        }
	        if (this.peekStartsWith('/')) {
	            this.capture('/');
	        }
	        var path = matchUrlSegment(this._remaining);
	        this.capture(path);
	        if (path.indexOf(":") > -1) {
	            var parts = path.split(":");
	            outletName = parts[0];
	            path = parts[1];
	        }
	        var matrixParams = {};
	        if (this.peekStartsWith(';')) {
	            matrixParams = this.parseMatrixParams();
	        }
	        var aux = [];
	        if (this.peekStartsWith('(')) {
	            aux = this.parseAuxiliaryRoutes();
	        }
	        var children = [];
	        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
	            this.capture('/');
	            children = this.parseSegments();
	        }
	        var segment = new segments_1.UrlSegment(path, matrixParams, outletName);
	        var node = new segments_1.TreeNode(segment, children);
	        return [node].concat(aux);
	    };
	    _UrlParser.prototype.parseQueryParams = function () {
	        var params = {};
	        this.capture('?');
	        this.parseQueryParam(params);
	        while (this._remaining.length > 0 && this.peekStartsWith('&')) {
	            this.capture('&');
	            this.parseQueryParam(params);
	        }
	        return params;
	    };
	    _UrlParser.prototype.parseMatrixParams = function () {
	        var params = {};
	        while (this._remaining.length > 0 && this.peekStartsWith(';')) {
	            this.capture(';');
	            this.parseParam(params);
	        }
	        return params;
	    };
	    _UrlParser.prototype.parseParam = function (params) {
	        var key = matchUrlSegment(this._remaining);
	        if (lang_1.isBlank(key)) {
	            return;
	        }
	        this.capture(key);
	        var value = "true";
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchUrlSegment(this._remaining);
	            if (lang_1.isPresent(valueMatch)) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    _UrlParser.prototype.parseQueryParam = function (params) {
	        var key = matchUrlSegment(this._remaining);
	        if (lang_1.isBlank(key)) {
	            return;
	        }
	        this.capture(key);
	        var value = "true";
	        if (this.peekStartsWith('=')) {
	            this.capture('=');
	            var valueMatch = matchUrlQueryParamValue(this._remaining);
	            if (lang_1.isPresent(valueMatch)) {
	                value = valueMatch;
	                this.capture(value);
	            }
	        }
	        params[key] = value;
	    };
	    _UrlParser.prototype.parseAuxiliaryRoutes = function () {
	        var segments = [];
	        this.capture('(');
	        while (!this.peekStartsWith(')') && this._remaining.length > 0) {
	            segments = segments.concat(this.parseSegments("aux"));
	            if (this.peekStartsWith('//')) {
	                this.capture('//');
	            }
	        }
	        this.capture(')');
	        return segments;
	    };
	    return _UrlParser;
	}());
	//# sourceMappingURL=router_url_serializer.js.map

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(20);
	var badwords_service_1 = __webpack_require__(147);
	var router_1 = __webpack_require__(14);
	var UpdateBadwordComponent = (function () {
	    function UpdateBadwordComponent(fb, _badwordService, router, rParam) {
	        this._badwordService = _badwordService;
	        this.router = router;
	        this.id = rParam.getParam('id');
	        this.updateBadwordForm = fb.group({
	            "word": [""],
	            "_id": [""],
	        });
	    }
	    UpdateBadwordComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._badwordService.findBadwordById(this.id).subscribe(function (badword) {
	            _this.badword = badword;
	            _this.word = badword.word;
	            _this._id = badword._id;
	        }, function (error) {
	            console.log(error.text());
	        });
	    };
	    UpdateBadwordComponent.prototype.updateBadword = function (badword) {
	        this._badwordService.updateBadword(badword).subscribe(function (badword) {
	            console.log('update successed');
	        }, function (error) {
	            console.log(error.text());
	        });
	        window.location.href = 'admin/badwords';
	    };
	    UpdateBadwordComponent = __decorate([
	        core_1.Component({
	            selector: 'badword-update',
	            templateUrl: 'client/dev/dashboard/templates/badword/badword-update.html',
	            styleUrls: ['client/dev/dashboard/styles/badword-update.css'],
	            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
	            providers: [badwords_service_1.BadwordService]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(badwords_service_1.BadwordService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof badwords_service_1.BadwordService !== 'undefined' && badwords_service_1.BadwordService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof router_1.RouteSegment !== 'undefined' && router_1.RouteSegment) === 'function' && _d) || Object])
	    ], UpdateBadwordComponent);
	    return UpdateBadwordComponent;
	    var _a, _b, _c, _d;
	}());
	exports.UpdateBadwordComponent = UpdateBadwordComponent;
	

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(20);
	var offers_service_1 = __webpack_require__(226);
	var auth_services_1 = __webpack_require__(45);
	var CreateOfferComponent = (function () {
	    function CreateOfferComponent(fb, _offerService, _authService) {
	        this._offerService = _offerService;
	        this._authService = _authService;
	        this.user = localStorage.getItem('username');
	        this.offerForm = fb.group({
	            "price": [""],
	            "numberOfLecture": [""],
	            "requestId": [""],
	            "message": [""],
	            "user": [""]
	        });
	    }
	    CreateOfferComponent.prototype.addOffer = function (offer) {
	        this._offerService.addOffer(offer).subscribe(function (offer) {
	            console.log('success');
	        }, function (error) {
	            console.log(error.text());
	        });
	        window.location.reload();
	    };
	    __decorate([
	        core_1.Input('rid'), 
	        __metadata('design:type', String)
	    ], CreateOfferComponent.prototype, "rid", void 0);
	    CreateOfferComponent = __decorate([
	        core_1.Component({
	            selector: 'offer-create',
	            templateUrl: 'client/dev/dashboard/templates/request/offer-create.html',
	            directives: [common_1.FORM_DIRECTIVES]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof offers_service_1.OfferService !== 'undefined' && offers_service_1.OfferService) === 'function' && _b) || Object, (typeof (_c = typeof auth_services_1.AuthService !== 'undefined' && auth_services_1.AuthService) === 'function' && _c) || Object])
	    ], CreateOfferComponent);
	    return CreateOfferComponent;
	    var _a, _b, _c;
	}());
	exports.CreateOfferComponent = CreateOfferComponent;
	

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var knowledge_service_1 = __webpack_require__(57);
	var common_1 = __webpack_require__(20);
	var requests_service_1 = __webpack_require__(67);
	var auth_services_1 = __webpack_require__(45);
	var router_1 = __webpack_require__(14);
	var CreateRequestComponent = (function () {
	    function CreateRequestComponent(fb, _requestService, _knowledgeService, _authService) {
	        this._requestService = _requestService;
	        this._knowledgeService = _knowledgeService;
	        this._authService = _authService;
	        this.user = localStorage.getItem('username');
	        this.roleToken = localStorage.getItem('userrole');
	        this.requestForm = fb.group({
	            "knowledgeId": [""],
	            "title": [""],
	            "description": [""],
	            "user": [""]
	        });
	    }
	    CreateRequestComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
	            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
	        });
	    };
	    CreateRequestComponent.prototype.addRequest = function (request) {
	        console.log(request);
	        this._requestService.addRequest(request).subscribe(function (request) {
	            console.log('success');
	        }, function (error) {
	            console.log(error.text());
	        });
	        console.log(request);
	        window.location.reload();
	    };
	    CreateRequestComponent = __decorate([
	        core_1.Component({
	            selector: 'request-create',
	            templateUrl: 'client/dev/dashboard/templates/request/request-create.html',
	            styleUrls: ['client/dev/dashboard/styles/request-create.css'],
	            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(requests_service_1.RequestService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof requests_service_1.RequestService !== 'undefined' && requests_service_1.RequestService) === 'function' && _b) || Object, (typeof (_c = typeof knowledge_service_1.KnowledgeService !== 'undefined' && knowledge_service_1.KnowledgeService) === 'function' && _c) || Object, (typeof (_d = typeof auth_services_1.AuthService !== 'undefined' && auth_services_1.AuthService) === 'function' && _d) || Object])
	    ], CreateRequestComponent);
	    return CreateRequestComponent;
	    var _a, _b, _c, _d;
	}());
	exports.CreateRequestComponent = CreateRequestComponent;
	

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var requests_service_1 = __webpack_require__(67);
	var knowledge_service_1 = __webpack_require__(57);
	var router_1 = __webpack_require__(14);
	var common_1 = __webpack_require__(20);
	var UpdateRequestComponent = (function () {
	    function UpdateRequestComponent(fb, _requestService, router, rParam, _knowledgeService) {
	        this._requestService = _requestService;
	        this.router = router;
	        this._knowledgeService = _knowledgeService;
	        this.id = rParam.getParam('id');
	        this.updateRequestFormCli = fb.group({
	            "_id": [""],
	            "title": [""],
	            "description": [""],
	            "knowledgeId": [""]
	        });
	    }
	    UpdateRequestComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        //get all knowledge
	        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
	            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
	        });
	        this._requestService.getRequestById(this.id).subscribe(function (request) {
	            _this.request = request;
	            _this.title = request.title;
	            _this.description = request.description;
	            _this._id = request._id;
	        }, function (error) {
	            console.log(error.text());
	        });
	    };
	    UpdateRequestComponent.prototype.updateRequest = function (request) {
	        console.log(request);
	        this._requestService.updateRequest(request).subscribe(function (request) {
	            console.log('update successed');
	        }, function (error) {
	            console.log(error.text());
	        });
	        window.location.href = 'admin/requests';
	    };
	    UpdateRequestComponent = __decorate([
	        core_1.Component({
	            selector: 'request-update-cli',
	            templateUrl: 'client/dev/dashboard/templates/request/request-update.html',
	            styleUrls: ['client/dev/dashboard/styles/styles.css'],
	            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(requests_service_1.RequestService)),
	        __param(4, core_1.Inject(knowledge_service_1.KnowledgeService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof requests_service_1.RequestService !== 'undefined' && requests_service_1.RequestService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof router_1.RouteSegment !== 'undefined' && router_1.RouteSegment) === 'function' && _d) || Object, (typeof (_e = typeof knowledge_service_1.KnowledgeService !== 'undefined' && knowledge_service_1.KnowledgeService) === 'function' && _e) || Object])
	    ], UpdateRequestComponent);
	    return UpdateRequestComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.UpdateRequestComponent = UpdateRequestComponent;
	

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(44);
	var Observable_1 = __webpack_require__(2);
	var KSpaceService = (function () {
	    function KSpaceService(_http) {
	        this._http = _http;
	        this._knowledgesUrl = '/api/kspace/:id';
	    }
	    KSpaceService.prototype.addKSpace = function (learner, lecturer, requestId, offerId) {
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        var _kspace = JSON.stringify({
	            lecturer: lecturer,
	            learner: learner,
	            requestId: requestId,
	            offerId: offerId
	        });
	        console.log(_kspace);
	        return this._http
	            .post(this._knowledgesUrl.replace(':id', ''), _kspace, options)
	            .map(function (r) { return r.json(); });
	    };
	    KSpaceService.prototype.handleError = function (error) {
	        console.error(error);
	        return Observable_1.Observable.throw(error.json().error || 'Server error');
	    };
	    KSpaceService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], KSpaceService);
	    return KSpaceService;
	    var _a;
	}());
	exports.KSpaceService = KSpaceService;
	

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var requests_service_1 = __webpack_require__(67);
	var RequestSearchClientComponent = (function () {
	    function RequestSearchClientComponent(_requestService, router, rParam) {
	        this._requestService = _requestService;
	        this.router = router;
	        this.pageTitle = 'Welcome to Knowledge Sharing Network';
	        this.id = rParam.getParam('id');
	        this.type = rParam.getParam('type');
	    }
	    RequestSearchClientComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        console.log(this.search);
	        //get request from children category
	        if (this.type === "subcategory") {
	            this._requestService.getRequestByKnowledgeId(this.id).subscribe(function (requests) {
	                //format date
	                var formatDate = function (date) {
	                    if (date) {
	                        var newDate, day, month, year;
	                        year = date.substr(0, 4);
	                        month = date.substr(5, 2);
	                        day = date.substr(8, 2);
	                        return newDate = day + '/' + month + '/' + year;
	                    }
	                };
	                for (var i = 0; i < requests.length; i++) {
	                    requests[i].createdAt = formatDate(requests[i].createdAt);
	                    requests[i].modifiedDate = formatDate(requests[i].modifiedDate);
	                }
	                _this.requests = requests;
	            });
	        }
	        //get request from parent category
	        if (this.type === "category") {
	            this._requestService.getKnowledgeByParent(this.id).subscribe(function (knowledges) {
	                var formatDate = function (date) {
	                    if (date) {
	                        var newDate, day, month, year;
	                        year = date.substr(0, 4);
	                        month = date.substr(5, 2);
	                        day = date.substr(8, 2);
	                        return newDate = day + '/' + month + '/' + year;
	                    }
	                };
	                var a = [];
	                _this.knowledges = knowledges;
	                for (var i = 0; i < _this.knowledges.length; i++) {
	                    _this._requestService.getRequestByKnowledgeId(_this.knowledges[i]._id).subscribe(function (requests) {
	                        //for each child knowledge get requests
	                        for (var j = 0; j < requests.length; j++) {
	                            a.push(requests[j]);
	                        }
	                        for (var i = 0; i < a.length; i++) {
	                            a[i].createdAt = formatDate(requests[i].createdAt);
	                            a[i].modifiedDate = formatDate(requests[i].modifiedDate);
	                        }
	                        _this.requests = a;
	                    });
	                }
	            }, function (Error) {
	                console.log(Error);
	            });
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], RequestSearchClientComponent.prototype, "search", void 0);
	    RequestSearchClientComponent = __decorate([
	        core_1.Component({
	            selector: 'request-search-cli',
	            templateUrl: 'client/dev/kshare/templates/request-cli/request-search-cli.html',
	            styleUrls: ['client/dev/kshare/styles/request-list-cli.css'],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof requests_service_1.RequestService !== 'undefined' && requests_service_1.RequestService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof router_1.RouteSegment !== 'undefined' && router_1.RouteSegment) === 'function' && _c) || Object])
	    ], RequestSearchClientComponent);
	    return RequestSearchClientComponent;
	    var _a, _b, _c;
	}());
	exports.RequestSearchClientComponent = RequestSearchClientComponent;
	

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	exports.makeDecorator = core_1.__core_private__.makeDecorator;
	//# sourceMappingURL=core_private.js.map

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(144);
	var segments_1 = __webpack_require__(98);
	var lang_1 = __webpack_require__(39);
	var async_1 = __webpack_require__(354);
	var RouterLink = (function () {
	    function RouterLink(_routeSegment, _router) {
	        var _this = this;
	        this._routeSegment = _routeSegment;
	        this._router = _router;
	        this._commands = [];
	        this.isActive = false;
	        // because auxiliary links take existing primary and auxiliary routes into account,
	        // we need to update the link whenever params or other routes change.
	        this._subscription =
	            async_1.ObservableWrapper.subscribe(_router.changes, function (_) { _this._updateTargetUrlAndHref(); });
	    }
	    RouterLink.prototype.ngOnDestroy = function () { async_1.ObservableWrapper.dispose(this._subscription); };
	    Object.defineProperty(RouterLink.prototype, "routerLink", {
	        set: function (data) {
	            if (lang_1.isArray(data)) {
	                this._commands = data;
	            }
	            else {
	                this._commands = [data];
	            }
	            this._updateTargetUrlAndHref();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RouterLink.prototype.onClick = function () {
	        // If no target, or if target is _self, prevent default browser behavior
	        if (!lang_1.isString(this.target) || this.target == '_self') {
	            this._router.navigate(this._commands, this._routeSegment);
	            return false;
	        }
	        return true;
	    };
	    RouterLink.prototype._updateTargetUrlAndHref = function () {
	        var tree = this._router.createUrlTree(this._commands, this._routeSegment);
	        if (lang_1.isPresent(tree)) {
	            this.href = this._router.serializeUrl(tree);
	            this.isActive = this._router.urlTree.contains(tree);
	        }
	        else {
	            this.isActive = false;
	        }
	    };
	    RouterLink.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[routerLink]' },] },
	    ];
	    RouterLink.ctorParameters = [
	        { type: segments_1.RouteSegment, decorators: [{ type: core_1.Optional },] },
	        { type: router_1.Router, },
	    ];
	    RouterLink.propDecorators = {
	        'target': [{ type: core_1.Input },],
	        'href': [{ type: core_1.HostBinding },],
	        'isActive': [{ type: core_1.HostBinding, args: ['class.router-link-active',] },],
	        'routerLink': [{ type: core_1.Input },],
	        'onClick': [{ type: core_1.HostListener, args: ["click",] },],
	    };
	    return RouterLink;
	}());
	exports.RouterLink = RouterLink;
	//# sourceMappingURL=router_link.js.map

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(144);
	var constants_1 = __webpack_require__(224);
	var lang_1 = __webpack_require__(39);
	var RouterOutlet = (function () {
	    function RouterOutlet(parentOutletMap, _location, name) {
	        this._location = _location;
	        parentOutletMap.registerOutlet(lang_1.isBlank(name) ? constants_1.DEFAULT_OUTLET_NAME : name, this);
	    }
	    RouterOutlet.prototype.unload = function () {
	        this._loaded.destroy();
	        this._loaded = null;
	    };
	    Object.defineProperty(RouterOutlet.prototype, "loadedComponent", {
	        /**
	         * Returns the loaded component.
	         */
	        get: function () { return lang_1.isPresent(this._loaded) ? this._loaded.instance : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RouterOutlet.prototype, "isLoaded", {
	        /**
	         * Returns true is the outlet is not empty.
	         */
	        get: function () { return lang_1.isPresent(this._loaded); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Called by the Router to instantiate a new component.
	     */
	    RouterOutlet.prototype.load = function (factory, providers, outletMap) {
	        this.outletMap = outletMap;
	        var inj = core_1.ReflectiveInjector.fromResolvedProviders(providers, this._location.parentInjector);
	        this._loaded = this._location.createComponent(factory, this._location.length, inj, []);
	        return this._loaded;
	    };
	    RouterOutlet.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'router-outlet' },] },
	    ];
	    RouterOutlet.ctorParameters = [
	        { type: router_1.RouterOutletMap, },
	        { type: core_1.ViewContainerRef, },
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['name',] },] },
	    ];
	    return RouterOutlet;
	}());
	exports.RouterOutlet = RouterOutlet;
	//# sourceMappingURL=router_outlet.js.map

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(355);
	var exception_handler_1 = __webpack_require__(356);
	var exception_handler_2 = __webpack_require__(356);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = "--"; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException, _originalStack, _context) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lang_1 = __webpack_require__(39);
	function hasLifecycleHook(name, obj) {
	    if (lang_1.isBlank(obj))
	        return false;
	    var type = obj.constructor;
	    if (!(type instanceof lang_1.Type))
	        return false;
	    return name in type.prototype;
	}
	exports.hasLifecycleHook = hasLifecycleHook;
	//# sourceMappingURL=lifecycle_reflector.js.map

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var segments_1 = __webpack_require__(98);
	var lang_1 = __webpack_require__(39);
	var exceptions_1 = __webpack_require__(497);
	var collection_1 = __webpack_require__(97);
	// TODO: vsavkin: should reuse segments
	function link(segment, routeTree, urlTree, commands) {
	    if (commands.length === 0)
	        return urlTree;
	    var normalizedCommands = _normalizeCommands(commands);
	    if (_navigateToRoot(normalizedCommands)) {
	        return new segments_1.UrlTree(new segments_1.TreeNode(urlTree.root, []));
	    }
	    var startingNode = _findStartingNode(normalizedCommands, urlTree, segment, routeTree);
	    var updated = normalizedCommands.commands.length > 0 ?
	        _updateMany(collection_1.ListWrapper.clone(startingNode.children), normalizedCommands.commands) : [];
	    var newRoot = _constructNewTree(segments_1.rootNode(urlTree), startingNode, updated);
	    return new segments_1.UrlTree(newRoot);
	}
	exports.link = link;
	function _navigateToRoot(normalizedChange) {
	    return normalizedChange.isAbsolute && normalizedChange.commands.length === 1 && normalizedChange.commands[0] == "/";
	}
	var _NormalizedNavigationCommands = (function () {
	    function _NormalizedNavigationCommands(isAbsolute, numberOfDoubleDots, commands) {
	        this.isAbsolute = isAbsolute;
	        this.numberOfDoubleDots = numberOfDoubleDots;
	        this.commands = commands;
	    }
	    return _NormalizedNavigationCommands;
	}());
	function _normalizeCommands(commands) {
	    ;
	    '';
	    if (lang_1.isString(commands[0]) && commands.length === 1 && commands[0] == "/") {
	        return new _NormalizedNavigationCommands(true, 0, commands);
	    }
	    var numberOfDoubleDots = 0;
	    var isAbsolute = false;
	    var res = [];
	    for (var i = 0; i < commands.length; ++i) {
	        var c = commands[i];
	        if (!lang_1.isString(c)) {
	            res.push(c);
	            continue;
	        }
	        var parts = c.split('/');
	        for (var j = 0; j < parts.length; ++j) {
	            var cc = parts[j];
	            // first exp is treated in a special way
	            if (i == 0) {
	                if (j == 0 && cc == ".") {
	                }
	                else if (j == 0 && cc == "") {
	                    isAbsolute = true;
	                }
	                else if (cc == "..") {
	                    numberOfDoubleDots++;
	                }
	                else if (cc != '') {
	                    res.push(cc);
	                }
	            }
	            else {
	                if (cc != '') {
	                    res.push(cc);
	                }
	            }
	        }
	    }
	    return new _NormalizedNavigationCommands(isAbsolute, numberOfDoubleDots, res);
	}
	function _findUrlSegment(segment, routeTree, urlTree, numberOfDoubleDots) {
	    var s = segment;
	    while (s.urlSegments.length === 0) {
	        s = routeTree.parent(s);
	    }
	    var urlSegment = collection_1.ListWrapper.last(s.urlSegments);
	    var path = urlTree.pathFromRoot(urlSegment);
	    if (path.length <= numberOfDoubleDots) {
	        throw new exceptions_1.BaseException("Invalid number of '../'");
	    }
	    return path[path.length - 1 - numberOfDoubleDots];
	}
	function _findStartingNode(normalizedChange, urlTree, segment, routeTree) {
	    if (normalizedChange.isAbsolute) {
	        return segments_1.rootNode(urlTree);
	    }
	    else {
	        var urlSegment = _findUrlSegment(segment, routeTree, urlTree, normalizedChange.numberOfDoubleDots);
	        return _findMatchingNode(urlSegment, segments_1.rootNode(urlTree));
	    }
	}
	function _findMatchingNode(segment, node) {
	    if (node.value === segment)
	        return node;
	    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
	        var c = _a[_i];
	        var r = _findMatchingNode(segment, c);
	        if (lang_1.isPresent(r))
	            return r;
	    }
	    return null;
	}
	function _constructNewTree(node, original, updated) {
	    if (node === original) {
	        return new segments_1.TreeNode(node.value, updated);
	    }
	    else {
	        return new segments_1.TreeNode(node.value, node.children.map(function (c) { return _constructNewTree(c, original, updated); }));
	    }
	}
	function _update(node, commands) {
	    var rest = commands.slice(1);
	    var next = rest.length === 0 ? null : rest[0];
	    var outlet = _outlet(commands);
	    var segment = _segment(commands);
	    // reach the end of the tree => create new tree nodes.
	    if (lang_1.isBlank(node) && !lang_1.isStringMap(next)) {
	        var urlSegment = new segments_1.UrlSegment(segment, {}, outlet);
	        var children = rest.length === 0 ? [] : [_update(null, rest)];
	        return new segments_1.TreeNode(urlSegment, children);
	    }
	    else if (lang_1.isBlank(node) && lang_1.isStringMap(next)) {
	        var urlSegment = new segments_1.UrlSegment(segment, next, outlet);
	        return _recurse(urlSegment, node, rest.slice(1));
	    }
	    else if (outlet != node.value.outlet) {
	        return node;
	    }
	    else if (lang_1.isStringMap(segment)) {
	        var newSegment = new segments_1.UrlSegment(node.value.segment, segment, node.value.outlet);
	        return _recurse(newSegment, node, rest);
	    }
	    else if (lang_1.isStringMap(next)) {
	        var urlSegment = new segments_1.UrlSegment(segment, next, outlet);
	        return _recurse(urlSegment, node, rest.slice(1));
	    }
	    else {
	        var urlSegment = new segments_1.UrlSegment(segment, {}, outlet);
	        return _recurse(urlSegment, node, rest);
	    }
	}
	function _recurse(urlSegment, node, rest) {
	    if (rest.length === 0) {
	        return new segments_1.TreeNode(urlSegment, []);
	    }
	    return new segments_1.TreeNode(urlSegment, _updateMany(collection_1.ListWrapper.clone(node.children), rest));
	}
	function _updateMany(nodes, commands) {
	    var outlet = _outlet(commands);
	    var nodesInRightOutlet = nodes.filter(function (c) { return c.value.outlet == outlet; });
	    if (nodesInRightOutlet.length > 0) {
	        var nodeRightOutlet = nodesInRightOutlet[0]; // there can be only one
	        nodes[nodes.indexOf(nodeRightOutlet)] = _update(nodeRightOutlet, commands);
	    }
	    else {
	        nodes.push(_update(null, commands));
	    }
	    return nodes;
	}
	function _segment(commands) {
	    if (!lang_1.isString(commands[0]))
	        return commands[0];
	    var parts = commands[0].toString().split(":");
	    return parts.length > 1 ? parts[1] : commands[0];
	}
	function _outlet(commands) {
	    if (!lang_1.isString(commands[0]))
	        return null;
	    var parts = commands[0].toString().split(":");
	    return parts.length > 1 ? parts[0] : null;
	}
	//# sourceMappingURL=link.js.map

/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var metadata_1 = __webpack_require__(225);
	var core_private_1 = __webpack_require__(494);
	/**
	 * Defines routes for a given component.
	 *
	 * It takes an array of {@link RouteMetadata}s.
	 */
	exports.Routes = core_private_1.makeDecorator(metadata_1.RoutesMetadata);
	//# sourceMappingURL=decorators.js.map

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var segments_1 = __webpack_require__(98);
	var metadata_1 = __webpack_require__(225);
	var lang_1 = __webpack_require__(39);
	var collection_1 = __webpack_require__(97);
	var promise_1 = __webpack_require__(357);
	var core_1 = __webpack_require__(1);
	var constants_1 = __webpack_require__(224);
	var core_2 = __webpack_require__(1);
	// TODO: vsavkin: recognize should take the old tree and merge it
	function recognize(componentResolver, type, url) {
	    var matched = new _MatchResult(type, [url.root], {}, segments_1.rootNode(url).children, []);
	    return _constructSegment(componentResolver, matched).then(function (roots) { return new segments_1.RouteTree(roots[0]); });
	}
	exports.recognize = recognize;
	function _recognize(componentResolver, parentType, url) {
	    var metadata = _readMetadata(parentType); // should read from the factory instead
	    if (lang_1.isBlank(metadata)) {
	        throw new core_1.BaseException("Component '" + lang_1.stringify(parentType) + "' does not have route configuration");
	    }
	    var match;
	    try {
	        match = _match(metadata, url);
	    }
	    catch (e) {
	        return promise_1.PromiseWrapper.reject(e, null);
	    }
	    var main = _constructSegment(componentResolver, match);
	    var aux = _recognizeMany(componentResolver, parentType, match.aux).then(_checkOutletNameUniqueness);
	    return promise_1.PromiseWrapper.all([main, aux]).then(collection_1.ListWrapper.flatten);
	}
	function _recognizeMany(componentResolver, parentType, urls) {
	    var recognized = urls.map(function (u) { return _recognize(componentResolver, parentType, u); });
	    return promise_1.PromiseWrapper.all(recognized).then(collection_1.ListWrapper.flatten);
	}
	function _constructSegment(componentResolver, matched) {
	    return componentResolver.resolveComponent(matched.component)
	        .then(function (factory) {
	        var urlOutlet = matched.consumedUrlSegments.length === 0 ||
	            lang_1.isBlank(matched.consumedUrlSegments[0].outlet) ?
	            constants_1.DEFAULT_OUTLET_NAME :
	            matched.consumedUrlSegments[0].outlet;
	        var segment = new segments_1.RouteSegment(matched.consumedUrlSegments, matched.parameters, urlOutlet, matched.component, factory);
	        if (matched.leftOverUrl.length > 0) {
	            return _recognizeMany(componentResolver, matched.component, matched.leftOverUrl)
	                .then(function (children) { return [new segments_1.TreeNode(segment, children)]; });
	        }
	        else {
	            return _recognizeLeftOvers(componentResolver, matched.component)
	                .then(function (children) { return [new segments_1.TreeNode(segment, children)]; });
	        }
	    });
	}
	function _recognizeLeftOvers(componentResolver, parentType) {
	    return componentResolver.resolveComponent(parentType)
	        .then(function (factory) {
	        var metadata = _readMetadata(parentType);
	        if (lang_1.isBlank(metadata)) {
	            return [];
	        }
	        var r = metadata.routes.filter(function (r) { return r.path == "" || r.path == "/"; });
	        if (r.length === 0) {
	            return promise_1.PromiseWrapper.resolve([]);
	        }
	        else {
	            return _recognizeLeftOvers(componentResolver, r[0].component)
	                .then(function (children) {
	                return componentResolver.resolveComponent(r[0].component)
	                    .then(function (factory) {
	                    var segment = new segments_1.RouteSegment([], {}, constants_1.DEFAULT_OUTLET_NAME, r[0].component, factory);
	                    return [new segments_1.TreeNode(segment, children)];
	                });
	            });
	        }
	    });
	}
	function _match(metadata, url) {
	    for (var _i = 0, _a = metadata.routes; _i < _a.length; _i++) {
	        var r = _a[_i];
	        var matchingResult = _matchWithParts(r, url);
	        if (lang_1.isPresent(matchingResult)) {
	            return matchingResult;
	        }
	    }
	    var availableRoutes = metadata.routes.map(function (r) { return ("'" + r.path + "'"); }).join(", ");
	    throw new core_1.BaseException("Cannot match any routes. Current segment: '" + url.value + "'. Available routes: [" + availableRoutes + "].");
	}
	function _matchWithParts(route, url) {
	    var path = route.path.startsWith("/") ? route.path.substring(1) : route.path;
	    if (path == "*") {
	        return new _MatchResult(route.component, [], null, [], []);
	    }
	    var parts = path.split("/");
	    var positionalParams = {};
	    var consumedUrlSegments = [];
	    var lastParent = null;
	    var lastSegment = null;
	    var current = url;
	    for (var i = 0; i < parts.length; ++i) {
	        if (lang_1.isBlank(current))
	            return null;
	        var p_1 = parts[i];
	        var isLastSegment = i === parts.length - 1;
	        var isLastParent = i === parts.length - 2;
	        var isPosParam = p_1.startsWith(":");
	        if (!isPosParam && p_1 != current.value.segment)
	            return null;
	        if (isLastSegment) {
	            lastSegment = current;
	        }
	        if (isLastParent) {
	            lastParent = current;
	        }
	        if (isPosParam) {
	            positionalParams[p_1.substring(1)] = current.value.segment;
	        }
	        consumedUrlSegments.push(current.value);
	        current = collection_1.ListWrapper.first(current.children);
	    }
	    var p = lastSegment.value.parameters;
	    var parameters = collection_1.StringMapWrapper.merge(p, positionalParams);
	    var axuUrlSubtrees = lang_1.isPresent(lastParent) ? lastParent.children.slice(1) : [];
	    return new _MatchResult(route.component, consumedUrlSegments, parameters, lastSegment.children, axuUrlSubtrees);
	}
	function _checkOutletNameUniqueness(nodes) {
	    var names = {};
	    nodes.forEach(function (n) {
	        var segmentWithSameOutletName = names[n.value.outlet];
	        if (lang_1.isPresent(segmentWithSameOutletName)) {
	            var p = segmentWithSameOutletName.stringifiedUrlSegments;
	            var c = n.value.stringifiedUrlSegments;
	            throw new core_1.BaseException("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
	        }
	        names[n.value.outlet] = n.value;
	    });
	    return nodes;
	}
	var _MatchResult = (function () {
	    function _MatchResult(component, consumedUrlSegments, parameters, leftOverUrl, aux) {
	        this.component = component;
	        this.consumedUrlSegments = consumedUrlSegments;
	        this.parameters = parameters;
	        this.leftOverUrl = leftOverUrl;
	        this.aux = aux;
	    }
	    return _MatchResult;
	}());
	function _readMetadata(componentType) {
	    var metadata = core_2.reflector.annotations(componentType).filter(function (f) { return f instanceof metadata_1.RoutesMetadata; });
	    return collection_1.ListWrapper.first(metadata);
	}
	//# sourceMappingURL=recognize.js.map

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_providers_common_1 = __webpack_require__(503);
	var platform_browser_1 = __webpack_require__(139);
	var common_1 = __webpack_require__(20);
	/**
	 * A list of {@link Provider}s. To use the router, you must add this to your application.
	 *
	 * ```
	 * import {Component} from '@angular/core';
	 * import {
	 *   ROUTER_DIRECTIVES,
	 *   ROUTER_PROVIDERS,
	 *   Routes
	 * } from '@angular/router';
	 *
	 * @Component({directives: [ROUTER_DIRECTIVES]})
	 * @Routes([
	 *  {...},
	 * ])
	 * class AppCmp {
	 *   // ...
	 * }
	 *
	 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
	 * ```
	 */
	exports.ROUTER_PROVIDERS = [
	    router_providers_common_1.ROUTER_PROVIDERS_COMMON,
	    /*@ts2dart_Provider*/ { provide: common_1.PlatformLocation, useClass: platform_browser_1.BrowserPlatformLocation },
	];
	//# sourceMappingURL=router_providers.js.map

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(20);
	var router_1 = __webpack_require__(144);
	var router_url_serializer_1 = __webpack_require__(358);
	var core_2 = __webpack_require__(1);
	var core_3 = __webpack_require__(1);
	/**
	 * The Platform agnostic ROUTER PROVIDERS
	 */
	exports.ROUTER_PROVIDERS_COMMON = [
	    router_1.RouterOutletMap,
	    /*@ts2dart_Provider*/ { provide: router_url_serializer_1.RouterUrlSerializer, useClass: router_url_serializer_1.DefaultRouterUrlSerializer },
	    /*@ts2dart_Provider*/ { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }, common_1.Location,
	    /*@ts2dart_Provider*/ {
	        provide: router_1.Router,
	        useFactory: routerFactory,
	        deps: /*@ts2dart_const*/ [core_2.ApplicationRef, core_1.ComponentResolver, router_url_serializer_1.RouterUrlSerializer, router_1.RouterOutletMap, common_1.Location],
	    },
	];
	function routerFactory(app, componentResolver, urlSerializer, routerOutletMap, location) {
	    if (app.componentTypes.length == 0) {
	        throw new core_3.BaseException("Bootstrap at least one component before injecting Router.");
	    }
	    // TODO: vsavkin this should not be null
	    var router = new router_1.Router(null, app.componentTypes[0], componentResolver, urlSerializer, routerOutletMap, location);
	    app.registerDisposeListener(function () { return router.dispose(); });
	    return router;
	}
	//# sourceMappingURL=router_providers_common.js.map

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	 * Created by GiangDH on 6/7/16.
	 */
	var core_1 = __webpack_require__(1);
	var router_deprecated_1 = __webpack_require__(220);
	var LoggedinRouterOutlet = (function (_super) {
	    __extends(LoggedinRouterOutlet, _super);
	    function LoggedinRouterOutlet(_viewContainerRef, _loader, _parentRouter, nameAttr) {
	        _super.call(this, _viewContainerRef, _loader, _parentRouter, nameAttr);
	        this.parentRouter = _parentRouter;
	        this.publicRoutes = {
	            '': true,
	            'kshare': true
	        };
	    }
	    LoggedinRouterOutlet.prototype.active = function (instruction) {
	        var url = instruction.urlPath;
	        if (this._canActive(url) == false) {
	            this.parentRouter.navigateByUrl('/');
	        }
	        return _super.prototype.activate.call(this, instruction);
	    };
	    LoggedinRouterOutlet.prototype._canActive = function (url) {
	        if (!this.publicRoutes[url] && !localStorage.getItem('role')) {
	            return false;
	        }
	        else if (localStorage.getItem('role') && localStorage.getItem('role') != 'admin') {
	            return false;
	        }
	        return true;
	    };
	    LoggedinRouterOutlet = __decorate([
	        core_1.Directive({
	            selector: 'router-outlet'
	        }),
	        __param(3, core_1.Attribute('name')), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ViewContainerRef !== 'undefined' && core_1.ViewContainerRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.DynamicComponentLoader !== 'undefined' && core_1.DynamicComponentLoader) === 'function' && _b) || Object, (typeof (_c = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _c) || Object, String])
	    ], LoggedinRouterOutlet);
	    return LoggedinRouterOutlet;
	    var _a, _b, _c;
	}(router_deprecated_1.RouterOutlet));
	exports.LoggedinRouterOutlet = LoggedinRouterOutlet;
	

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by GiangDH on 5/8/16.
	 */
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(44);
	__webpack_require__(367); // Load all features
	var router_1 = __webpack_require__(14);
	var LoggedinRouterOutlet_1 = __webpack_require__(504);
	/**
	 * Page Components
	 * */
	var dashboard_component_1 = __webpack_require__(515);
	var kshare_component_1 = __webpack_require__(527);
	/**
	 * Services
	 **/
	var knowledge_service_1 = __webpack_require__(57);
	var offers_service_1 = __webpack_require__(226);
	var requests_service_1 = __webpack_require__(67);
	var users_services_1 = __webpack_require__(227);
	var auth_services_1 = __webpack_require__(45);
	var kspace_service_1 = __webpack_require__(363);
	var AppComponent = (function () {
	    function AppComponent(router) {
	        this.router = router;
	        this.pageTitle = 'Knowledge Sharing Network';
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'kshare-app',
	            templateUrl: 'client/dev/app/app.html',
	            directives: [
	                router_1.ROUTER_DIRECTIVES,
	                LoggedinRouterOutlet_1.LoggedinRouterOutlet
	            ],
	            providers: [
	                auth_services_1.AuthService,
	                users_services_1.UserService,
	                http_1.HTTP_PROVIDERS,
	                router_1.ROUTER_PROVIDERS,
	                requests_service_1.RequestService,
	                offers_service_1.OfferService,
	                knowledge_service_1.KnowledgeService,
	                kspace_service_1.KSpaceService
	            ]
	        }),
	        router_1.Routes([
	            { path: '/', component: kshare_component_1.KshareComponent },
	            { path: '/kshare', component: kshare_component_1.KshareComponent },
	            { path: '/admin', component: dashboard_component_1.DashboardComponent }
	        ]), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
	    ], AppComponent);
	    return AppComponent;
	    var _a;
	}());
	exports.AppComponent = AppComponent;
	

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(20);
	var badwords_service_1 = __webpack_require__(147);
	var CreateBadwordComponent = (function () {
	    function CreateBadwordComponent(fb, _badwordService) {
	        this._badwordService = _badwordService;
	        this.badwords = [];
	        this.badwordForm = fb.group({
	            "word": [""],
	        });
	    }
	    CreateBadwordComponent.prototype.addBadword = function (word) {
	        var _this = this;
	        this._badwordService
	            .addBadword(word)
	            .subscribe(function (m) {
	            _this.badwords.push(m);
	            window.location.reload();
	        });
	    };
	    CreateBadwordComponent = __decorate([
	        core_1.Component({
	            selector: 'badword-create',
	            templateUrl: 'client/dev/dashboard/templates/badword/badword-create.html',
	            styleUrls: ['client/dev/dashboard/styles/badword-create.css'],
	            directives: [common_1.FORM_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof badwords_service_1.BadwordService !== 'undefined' && badwords_service_1.BadwordService) === 'function' && _b) || Object])
	    ], CreateBadwordComponent);
	    return CreateBadwordComponent;
	    var _a, _b;
	}());
	exports.CreateBadwordComponent = CreateBadwordComponent;
	

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var nav_bar_1 = __webpack_require__(145);
	var sidebar_1 = __webpack_require__(146);
	var badwords_list_1 = __webpack_require__(508);
	var badword_create_1 = __webpack_require__(506);
	var badword_update_1 = __webpack_require__(359);
	var badwords_service_1 = __webpack_require__(147);
	var BadwordComponent = (function () {
	    function BadwordComponent() {
	    }
	    BadwordComponent = __decorate([
	        core_1.Component({
	            selector: 'badword-mgn',
	            templateUrl: 'client/dev/dashboard/templates/badword/badword.html',
	            directives: [badwords_list_1.BadwordListComponent, badword_update_1.UpdateBadwordComponent, badword_create_1.CreateBadwordComponent, nav_bar_1.NavbarComponent, sidebar_1.SidebarComponent, router_1.ROUTER_DIRECTIVES],
	            providers: [badwords_service_1.BadwordService],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BadwordComponent);
	    return BadwordComponent;
	}());
	exports.BadwordComponent = BadwordComponent;
	

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var badwords_service_1 = __webpack_require__(147);
	var badword_update_1 = __webpack_require__(359);
	var BadwordListComponent = (function () {
	    function BadwordListComponent(badwordService) {
	        this.badwordService = badwordService;
	        this.pageTitle = 'Badword List';
	    }
	    BadwordListComponent.prototype.ngOnInit = function () {
	        this.getAll();
	    };
	    BadwordListComponent.prototype.getAll = function () {
	        var _this = this;
	        this.badwordService
	            .getAllBadwords()
	            .subscribe(function (badwords) {
	            _this.badwords = badwords;
	            console.log("1234");
	        });
	    };
	    BadwordListComponent.prototype.deleteBadword = function (id) {
	        var _this = this;
	        this.badwordService
	            .deleteBadword(id)
	            .subscribe(function () {
	            _this.badwords.forEach(function (t, i) {
	                if (t._id === id)
	                    return _this.badwords.splice(i, 1);
	            });
	        });
	    };
	    BadwordListComponent.prototype.findBadwordById = function (id) {
	        this.badwordService
	            .findBadwordById(id)
	            .subscribe(function (badwords) {
	            return badwords;
	        });
	    };
	    BadwordListComponent = __decorate([
	        core_1.Component({
	            selector: 'badword-list',
	            templateUrl: 'client/dev/dashboard/templates/badword/badword-list.html',
	            styleUrls: ['client/dev/dashboard/styles/badword-list.css'],
	            directives: [badword_update_1.UpdateBadwordComponent]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof badwords_service_1.BadwordService !== 'undefined' && badwords_service_1.BadwordService) === 'function' && _a) || Object])
	    ], BadwordListComponent);
	    return BadwordListComponent;
	    var _a;
	}());
	exports.BadwordListComponent = BadwordListComponent;
	

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(20);
	var knowledge_service_1 = __webpack_require__(57);
	var CreateKnowledgeComponent = (function () {
	    function CreateKnowledgeComponent(fb, _knowledgeService) {
	        this._knowledgeService = _knowledgeService;
	        this.knowledges = [];
	        this.knowledgeForm = fb.group({
	            "name": [""],
	            "description": [""],
	        });
	    }
	    CreateKnowledgeComponent.prototype.addKnowledge = function (word) {
	        var _this = this;
	        this._knowledgeService
	            .addKnowledge(word)
	            .subscribe(function (m) {
	            _this.knowledges.push(m);
	            window.location.reload();
	        });
	    };
	    CreateKnowledgeComponent = __decorate([
	        core_1.Component({
	            selector: 'knowledge-create',
	            templateUrl: 'client/dev/dashboard/templates/knowledge/knowledge-create.html',
	            styleUrls: ['client/dev/dashboard/styles/knowledge/knowledge-create.css'],
	            directives: [common_1.FORM_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof knowledge_service_1.KnowledgeService !== 'undefined' && knowledge_service_1.KnowledgeService) === 'function' && _b) || Object])
	    ], CreateKnowledgeComponent);
	    return CreateKnowledgeComponent;
	    var _a, _b;
	}());
	exports.CreateKnowledgeComponent = CreateKnowledgeComponent;
	

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var nav_bar_1 = __webpack_require__(145);
	var sidebar_1 = __webpack_require__(146);
	var knowledges_list_1 = __webpack_require__(511);
	var knowledge_create_1 = __webpack_require__(509);
	var knowledge_service_1 = __webpack_require__(57);
	var KnowledgeComponent = (function () {
	    function KnowledgeComponent() {
	    }
	    KnowledgeComponent = __decorate([
	        core_1.Component({
	            selector: 'knowledge-mgn',
	            templateUrl: 'client/dev/dashboard/templates/knowledge/knowledge.html',
	            directives: [knowledges_list_1.KnowledgeListComponent, knowledge_create_1.CreateKnowledgeComponent, nav_bar_1.NavbarComponent, sidebar_1.SidebarComponent, router_1.ROUTER_DIRECTIVES],
	            providers: [knowledge_service_1.KnowledgeService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], KnowledgeComponent);
	    return KnowledgeComponent;
	}());
	exports.KnowledgeComponent = KnowledgeComponent;
	

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var knowledge_service_1 = __webpack_require__(57);
	var KnowledgeListComponent = (function () {
	    function KnowledgeListComponent(_knowledgeService) {
	        this._knowledgeService = _knowledgeService;
	        this.pageTitle = 'Knowledge List';
	    }
	    KnowledgeListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
	            var formatDate = function (date) {
	                if (date) {
	                    var newDate, day, month, year;
	                    year = date.substr(0, 4);
	                    month = date.substr(5, 2);
	                    day = date.substr(8, 2);
	                    return newDate = day + '/' + month + '/' + year;
	                }
	            };
	            for (var i = 0; i < knowledges.length; i++) {
	                knowledges[i].update = formatDate(knowledges[i].update);
	            }
	            _this.knowledges = knowledges;
	        });
	    };
	    KnowledgeListComponent.prototype.deleteKnowledge = function (id) {
	        var _this = this;
	        this._knowledgeService
	            .deleteKnowledge(id)
	            .subscribe(function () {
	            _this.knowledges.forEach(function (t, i) {
	                if (t._id === id)
	                    return _this.knowledges.splice(i, 1);
	            });
	        });
	    };
	    KnowledgeListComponent = __decorate([
	        core_1.Component({
	            selector: 'knowledge-list',
	            templateUrl: 'client/dev/dashboard/templates/knowledge/knowledge-list.html',
	            styleUrls: [
	                'client/dev/dashboard/styles/knowledge-list.css',
	                'client/dev/dashboard/styles/styles.css',
	            ]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof knowledge_service_1.KnowledgeService !== 'undefined' && knowledge_service_1.KnowledgeService) === 'function' && _a) || Object])
	    ], KnowledgeListComponent);
	    return KnowledgeListComponent;
	    var _a;
	}());
	exports.KnowledgeListComponent = KnowledgeListComponent;
	

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var requests_service_1 = __webpack_require__(67);
	var offer_create_1 = __webpack_require__(360);
	var request_update_1 = __webpack_require__(362);
	var auth_services_1 = __webpack_require__(45);
	var request_create_1 = __webpack_require__(361);
	var RequestListComponent = (function () {
	    function RequestListComponent(_requestService, _auth, router) {
	        this._requestService = _requestService;
	        this._auth = _auth;
	        this.router = router;
	        this.pageTitle = 'Request List';
	    }
	    RequestListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._requestService.getAllRequests().subscribe(function (requests) {
	            var formatDate = function (date) {
	                if (date) {
	                    var newDate, day, month, year;
	                    year = date.substr(0, 4);
	                    month = date.substr(5, 2);
	                    day = date.substr(8, 2);
	                    return newDate = day + '/' + month + '/' + year;
	                }
	            };
	            for (var i = 0; i < requests.length; i++) {
	                requests[i].createdAt = formatDate(requests[i].createdAt);
	                requests[i].modifiedDate = formatDate(requests[i].modifiedDate);
	            }
	            _this.requests = requests;
	        });
	    };
	    RequestListComponent.prototype.deleteRequest = function (request) {
	        var _this = this;
	        console.log(request);
	        this._requestService
	            .deleteRequest(request)
	            .subscribe(function () {
	            console.log("delete successful");
	        });
	        //refresh page
	        this._requestService.getAllRequests().subscribe(function (requests) {
	            var formatDate = function (date) {
	                if (date) {
	                    var newDate, day, month, year;
	                    year = date.substr(0, 4);
	                    month = date.substr(5, 2);
	                    day = date.substr(8, 2);
	                    return newDate = day + '/' + month + '/' + year;
	                }
	            };
	            for (var i = 0; i < requests.length; i++) {
	                requests[i].createdAt = formatDate(requests[i].createdAt);
	                requests[i].modifiedDate = formatDate(requests[i].modifiedDate);
	            }
	            _this.requests = requests;
	        });
	    };
	    RequestListComponent = __decorate([
	        core_1.Component({
	            selector: 'request-list',
	            templateUrl: 'client/dev/dashboard/templates/request/request-list.html',
	            styleUrls: ['client/dev/dashboard/styles/request-list.css',
	                'client/dev/dashboard/styles/styles.css'],
	            directives: [offer_create_1.CreateOfferComponent,
	                request_update_1.UpdateRequestComponent,
	                request_create_1.CreateRequestComponent,
	                offer_create_1.CreateOfferComponent,
	                router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof requests_service_1.RequestService !== 'undefined' && requests_service_1.RequestService) === 'function' && _a) || Object, (typeof (_b = typeof auth_services_1.AuthService !== 'undefined' && auth_services_1.AuthService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
	    ], RequestListComponent);
	    return RequestListComponent;
	    var _a, _b, _c;
	}());
	exports.RequestListComponent = RequestListComponent;
	

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(20);
	var router_1 = __webpack_require__(14);
	var users_services_1 = __webpack_require__(227);
	var CreateUserComponent = (function () {
	    function CreateUserComponent(fb, _userService, router) {
	        this._userService = _userService;
	        this.router = router;
	        this.pageHeader = "Create User";
	        this.users = [];
	        this.userForm = fb.group({
	            firstName: ["", common_1.Validators.required],
	            lastName: ["", common_1.Validators.required],
	            displayName: ["", common_1.Validators.required],
	            username: ["", common_1.Validators.required],
	            password: ["", common_1.Validators.required],
	            email: ["", common_1.Validators.required],
	            role: ["", common_1.Validators.required]
	        });
	    }
	    CreateUserComponent.prototype.addUser = function (user) {
	        this._userService
	            .addUser(user)
	            .subscribe(function (response) {
	            window.location.reload();
	        }, function (error) {
	            console.log(error.text());
	        });
	    };
	    CreateUserComponent = __decorate([
	        core_1.Component({
	            selector: 'user-create',
	            templateUrl: 'client/dev/dashboard/templates/users/user-create.html',
	            styleUrls: ['client/dev/dashboard/styles/styles.css'],
	            directives: [common_1.FORM_DIRECTIVES],
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(users_services_1.UserService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof users_services_1.UserService !== 'undefined' && users_services_1.UserService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
	    ], CreateUserComponent);
	    return CreateUserComponent;
	    var _a, _b, _c;
	}());
	exports.CreateUserComponent = CreateUserComponent;
	

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var nav_bar_1 = __webpack_require__(145);
	var sidebar_1 = __webpack_require__(146);
	var users_services_1 = __webpack_require__(227);
	var auth_services_1 = __webpack_require__(45);
	var user_create_1 = __webpack_require__(513);
	var router_2 = __webpack_require__(14);
	var UserListComponent = (function () {
	    function UserListComponent(_userService, _auth, router) {
	        this._userService = _userService;
	        this._auth = _auth;
	        this.router = router;
	        this.pageTitle = 'user';
	    }
	    UserListComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._userService.getAllUsers().subscribe(function (users) {
	            var formatDate = function (date) {
	                if (date) {
	                    var newDate, day, month, year;
	                    year = date.substr(0, 4);
	                    month = date.substr(5, 2);
	                    day = date.substr(8, 2);
	                    return newDate = day + '/' + month + '/' + year;
	                }
	            };
	            for (var i = 0; i < users.length; i++) {
	                users[i].createdAt = formatDate(users[i].createdAt);
	                users[i].updatedAt = formatDate(users[i].updatedAt);
	            }
	            _this.users = users;
	        }, function (error) {
	            _this.errorMessage = error.message;
	            console.log(error);
	        });
	    };
	    UserListComponent = __decorate([
	        core_1.Component({
	            selector: 'user-list',
	            templateUrl: 'client/dev/dashboard/templates/users/user-list.html',
	            styleUrls: [
	                'client/dev/dashboard/styles/styles.css',
	                'client/dev/dashboard/styles/user-list.css'
	            ],
	            directives: [
	                user_create_1.CreateUserComponent,
	                nav_bar_1.NavbarComponent,
	                sidebar_1.SidebarComponent,
	                router_1.ROUTER_DIRECTIVES
	            ]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof users_services_1.UserService !== 'undefined' && users_services_1.UserService) === 'function' && _a) || Object, (typeof (_b = typeof auth_services_1.AuthService !== 'undefined' && auth_services_1.AuthService) === 'function' && _b) || Object, (typeof (_c = typeof router_2.Router !== 'undefined' && router_2.Router) === 'function' && _c) || Object])
	    ], UserListComponent);
	    return UserListComponent;
	    var _a, _b, _c;
	}());
	exports.UserListComponent = UserListComponent;
	

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by GiangDH on 6/4/16.
	 */
	var core_1 = __webpack_require__(1);
	//import 'rxjs/Rx';   // Load all features
	var router_1 = __webpack_require__(14);
	/**
	 * Component
	 * */
	var nav_bar_1 = __webpack_require__(145);
	var sidebar_1 = __webpack_require__(146);
	var knowledge_1 = __webpack_require__(510);
	var requests_list_1 = __webpack_require__(512);
	var request_update_1 = __webpack_require__(362);
	var badword_1 = __webpack_require__(507);
	var user_list_1 = __webpack_require__(514);
	/**
	 * Services
	 * */
	var auth_services_1 = __webpack_require__(45);
	var DashboardComponent = (function () {
	    function DashboardComponent(_auth, router) {
	        this._auth = _auth;
	        this.router = router;
	    }
	    DashboardComponent.prototype.ngOnInit = function () {
	        if (!this._auth.dashboardFilter()) {
	            this.router.navigate(['/kshare']);
	        }
	    };
	    DashboardComponent = __decorate([
	        core_1.Component({
	            selector: 'kshare',
	            template: "\n  <nav-bar></nav-bar>\n  <sidebar></sidebar>\n  <router-outlet></router-outlet>\n  ",
	            directives: [
	                router_1.ROUTER_DIRECTIVES,
	                nav_bar_1.NavbarComponent,
	                sidebar_1.SidebarComponent
	            ]
	        }),
	        router_1.Routes([
	            { path: '/users', component: user_list_1.UserListComponent },
	            { path: '/badwords', component: badword_1.BadwordComponent },
	            { path: '/requests/:id', component: request_update_1.UpdateRequestComponent },
	            { path: '/requests', component: requests_list_1.RequestListComponent },
	            { path: '/knowledges', component: knowledge_1.KnowledgeComponent }
	        ]), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof auth_services_1.AuthService !== 'undefined' && auth_services_1.AuthService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], DashboardComponent);
	    return DashboardComponent;
	    var _a, _b;
	}());
	exports.DashboardComponent = DashboardComponent;
	

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by GiangDH on 5/18/16.
	 */
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	//import { SideBarComponent} from '../shared/sidebar'
	//import { HeaderComponent } from '../shared/header';
	//import { FooterComponent } from '../shared/footer';
	//import { LoginComponent } from '../shared/login';
	//import { RegisterComponent } from '../shared/register';
	var HomeComponent = (function () {
	    function HomeComponent() {
	        this.pageTitle = 'Welcome to Knowledge Sharing Network';
	    }
	    HomeComponent.prototype.ngOinit = function () {
	        console.log("what the fuck");
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home',
	            templateUrl: 'client/dev/kshare/templates/home/home.html',
	            styleUrls: ['client/dev/kshare/styles/home.css'],
	            directives: [
	                //HeaderComponent,
	                //FooterComponent,
	                //LoginComponent,
	                //RegisterComponent,
	                //SideBarComponent,
	                router_1.ROUTER_DIRECTIVES
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;
	

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var KSpaceComponent = (function () {
	    function KSpaceComponent() {
	    }
	    KSpaceComponent.prototype.ngOnInit = function () {
	        this.user = localStorage.getItem('username');
	        var webrtc = new SimpleWebRTC({
	            // the id/element dom element that will hold "our" video
	            localVideoEl: 'localVideo',
	            // the id/element dom element that will hold remote videos
	            remoteVideosEl: 'remotesVideos',
	            // immediately ask for camera access
	            autoRequestMedia: true
	        });
	        // we have to wait until it's ready
	        webrtc.on('readyToCall', function () {
	            // you can name it anything
	            webrtc.joinRoom(this.room);
	        });
	    };
	    KSpaceComponent = __decorate([
	        core_1.Component({
	            selector: 'kspace',
	            templateUrl: 'client/dev/kshare/templates/kspace/kspace.html',
	            styleUrls: ['client/dev/kshare/styles/kspace.css'],
	            directives: [
	                router_1.ROUTER_DIRECTIVES,
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], KSpaceComponent);
	    return KSpaceComponent;
	}());
	exports.KSpaceComponent = KSpaceComponent;
	

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var requests_service_1 = __webpack_require__(67);
	var offers_service_1 = __webpack_require__(226);
	var knowledge_service_1 = __webpack_require__(57);
	var kspace_service_1 = __webpack_require__(363);
	var offer_create_1 = __webpack_require__(360);
	var RequestDetailClientComponent = (function () {
	    function RequestDetailClientComponent(_requestService, _offerService, router, _knowledgeService, rParam, _kspaceService) {
	        this._requestService = _requestService;
	        this._offerService = _offerService;
	        this.router = router;
	        this._knowledgeService = _knowledgeService;
	        this._kspaceService = _kspaceService;
	        this.pageTitle = 'Welcome to Knowledge Sharing Network';
	        this.id = rParam.getParam('id');
	    }
	    RequestDetailClientComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        //get request when load the page
	        this._requestService.getRequestById(this.id).subscribe(function (request) {
	            var formatDate = function (date) {
	                if (date) {
	                    var newDate, day, month, year;
	                    year = date.substr(0, 4);
	                    month = date.substr(5, 2);
	                    day = date.substr(8, 2);
	                    return newDate = day + '/' + month + '/' + year;
	                }
	            };
	            _this.knowledgeId = request.knowledgeId;
	            _this.request = request;
	            _this.title = request.title;
	            _this.description = request.description;
	            _this._id = request._id;
	            _this.status = request.status;
	            _this.user = request.user;
	            _this.createdAt = formatDate(request.createdAt);
	            //get knowledge name by knowledgeId
	            _this._knowledgeService.findKnowledgeById(_this.knowledgeId).subscribe(function (knowledge) {
	                _this.knowledge = knowledge;
	                _this.knowledgeName = _this.knowledge.name;
	            }, function (error) {
	                console.log(error);
	            });
	        }, function (error) {
	            console.log(error.text());
	        });
	        //get offer of the request when load the page
	        this._offerService.getOfferByRequestId(this.id).subscribe(function (offers) {
	            var formatDate = function (date) {
	                if (date) {
	                    var newDate, day, month, year;
	                    year = date.substr(0, 4);
	                    month = date.substr(5, 2);
	                    day = date.substr(8, 2);
	                    return newDate = day + '/' + month + '/' + year;
	                }
	            };
	            for (var i = 0; i < offers.length; i++) {
	                offers[i].createdAt = formatDate(offers[i].createdAt);
	            }
	            _this.offers = offers;
	        }, function (error) {
	            console.log(error.text());
	        });
	    };
	    RequestDetailClientComponent.prototype.deactivateRequest = function (id) {
	        var _this = this;
	        console.log(id);
	        this._requestService
	            .changeStatusRequest(this.id)
	            .subscribe(function (r) {
	            console.log("deactivate sucess");
	            _this.router.navigateByUrl('/kshare/requests/');
	        });
	    };
	    RequestDetailClientComponent.prototype.addKshare = function (learner, lecturer, requestId, offerId) {
	        var _this = this;
	        this._kspaceService
	            .addKSpace(learner, lecturer, requestId, offerId)
	            .subscribe(function (r) {
	            console.log(r);
	            _this.router.navigateByUrl('/kshare/kspace/' + r._id);
	        });
	    };
	    RequestDetailClientComponent = __decorate([
	        core_1.Component({
	            selector: 'request-detail-cli',
	            templateUrl: 'client/dev/kshare/templates/request-cli/request-detail-cli.html',
	            styleUrls: ['client/dev/kshare/styles/request-list-cli.css'],
	            directives: [router_1.ROUTER_DIRECTIVES,
	                offer_create_1.CreateOfferComponent]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof requests_service_1.RequestService !== 'undefined' && requests_service_1.RequestService) === 'function' && _a) || Object, (typeof (_b = typeof offers_service_1.OfferService !== 'undefined' && offers_service_1.OfferService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof knowledge_service_1.KnowledgeService !== 'undefined' && knowledge_service_1.KnowledgeService) === 'function' && _d) || Object, (typeof (_e = typeof router_1.RouteSegment !== 'undefined' && router_1.RouteSegment) === 'function' && _e) || Object, (typeof (_f = typeof kspace_service_1.KSpaceService !== 'undefined' && kspace_service_1.KSpaceService) === 'function' && _f) || Object])
	    ], RequestDetailClientComponent);
	    return RequestDetailClientComponent;
	    var _a, _b, _c, _d, _e, _f;
	}());
	exports.RequestDetailClientComponent = RequestDetailClientComponent;
	

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var requests_service_1 = __webpack_require__(67);
	var friend_list_1 = __webpack_require__(522);
	var request_create_1 = __webpack_require__(361);
	var request_search_cli_1 = __webpack_require__(364);
	var auth_services_1 = __webpack_require__(45);
	var router_2 = __webpack_require__(14);
	var ng2_pagination_1 = __webpack_require__(899);
	var RequestListClientComponent = (function () {
	    function RequestListClientComponent(_requestService, _auth, router) {
	        this._requestService = _requestService;
	        this._auth = _auth;
	        this.router = router;
	        this.pageTitle = 'Welcome to Knowledge Sharing Network';
	        this.configRq = {
	            id: 'rq',
	            itemsPerPage: 10,
	            currentPage: 1
	        };
	        this.configRs = {
	            id: 'rs',
	            itemsPerPage: 10,
	            currentPage: 1
	        };
	        this.roleToken = localStorage.getItem('role');
	        this.userToken = localStorage.getItem('username');
	    }
	    RequestListClientComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.hide = false;
	        this._requestService.getAllRequests().subscribe(function (requests) {
	            var formatDate = function (date) {
	                if (date) {
	                    var newDate, day, month, year;
	                    year = date.substr(0, 4);
	                    month = date.substr(5, 2);
	                    day = date.substr(8, 2);
	                    return newDate = day + '/' + month + '/' + year;
	                }
	            };
	            for (var i = 0; i < requests.length; i++) {
	                requests[i].createdAt = formatDate(requests[i].createdAt);
	                requests[i].modifiedDate = formatDate(requests[i].modifiedDate);
	            }
	            _this.requests = requests;
	        });
	    };
	    RequestListClientComponent.prototype.search = function (search) {
	        var _this = this;
	        this._requestService.searchRequest(search).subscribe(function (requests) {
	            _this.searchs = requests;
	            _this.hide = true;
	        });
	    };
	    RequestListClientComponent = __decorate([
	        core_1.Component({
	            selector: 'request-list-cli',
	            templateUrl: 'client/dev/kshare/templates/request-cli/request-list-cli.html',
	            styleUrls: ['client/dev/kshare/styles/request-list-cli.css'],
	            directives: [
	                ng2_pagination_1.PaginationControlsCmp,
	                router_1.ROUTER_DIRECTIVES,
	                friend_list_1.FriendListComponent,
	                request_create_1.CreateRequestComponent,
	                request_search_cli_1.RequestSearchClientComponent
	            ],
	            providers: [ng2_pagination_1.PaginationService],
	            pipes: [ng2_pagination_1.PaginatePipe]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof requests_service_1.RequestService !== 'undefined' && requests_service_1.RequestService) === 'function' && _a) || Object, (typeof (_b = typeof auth_services_1.AuthService !== 'undefined' && auth_services_1.AuthService) === 'function' && _b) || Object, (typeof (_c = typeof router_2.Router !== 'undefined' && router_2.Router) === 'function' && _c) || Object])
	    ], RequestListClientComponent);
	    return RequestListClientComponent;
	    var _a, _b, _c;
	}());
	exports.RequestListClientComponent = RequestListClientComponent;
	

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var requests_service_1 = __webpack_require__(67);
	var knowledge_service_1 = __webpack_require__(57);
	var router_1 = __webpack_require__(14);
	var common_1 = __webpack_require__(20);
	var RequestUpdateClientComponent = (function () {
	    function RequestUpdateClientComponent(fb, _requestService, router, rParam, _knowledgeService) {
	        this._requestService = _requestService;
	        this.router = router;
	        this._knowledgeService = _knowledgeService;
	        this.id = rParam.getParam('id');
	        this.updateRequestFormCli = fb.group({
	            "_id": [""],
	            "title": [""],
	            "description": [""],
	            "knowledgeId": [""]
	        });
	    }
	    RequestUpdateClientComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        //get all knowledge
	        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
	            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
	        });
	        this._requestService.getRequestById(this.id).subscribe(function (request) {
	            _this.request = request;
	            _this.title = request.title;
	            _this.description = request.description;
	            _this._id = request._id;
	        }, function (error) {
	            console.log(error.text());
	        });
	    };
	    RequestUpdateClientComponent.prototype.updateRequest = function (request) {
	        this._requestService.updateRequest(request).subscribe(function (request) {
	            console.log('update successed');
	        }, function (error) {
	            console.log(error.text());
	        });
	        //window.location.href = '/kshare/requests/'+this.id;
	    };
	    RequestUpdateClientComponent = __decorate([
	        core_1.Component({
	            selector: 'request-update-cli',
	            templateUrl: 'client/dev/kshare/templates/request-cli/request-update-cli.html',
	            styleUrls: ['client/dev/kshare/styles/request-list-cli.css'],
	            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(requests_service_1.RequestService)),
	        __param(4, core_1.Inject(knowledge_service_1.KnowledgeService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof requests_service_1.RequestService !== 'undefined' && requests_service_1.RequestService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof router_1.RouteSegment !== 'undefined' && router_1.RouteSegment) === 'function' && _d) || Object, (typeof (_e = typeof knowledge_service_1.KnowledgeService !== 'undefined' && knowledge_service_1.KnowledgeService) === 'function' && _e) || Object])
	    ], RequestUpdateClientComponent);
	    return RequestUpdateClientComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.RequestUpdateClientComponent = RequestUpdateClientComponent;
	

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by GiangDH on 5/18/16.
	 */
	var core_1 = __webpack_require__(1);
	var FooterComponent = (function () {
	    function FooterComponent() {
	    }
	    FooterComponent = __decorate([
	        core_1.Component({
	            selector: 'footer',
	            templateUrl: 'client/dev/kshare/templates/shared/footer.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FooterComponent);
	    return FooterComponent;
	}());
	exports.FooterComponent = FooterComponent;
	

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var FriendListComponent = (function () {
	    function FriendListComponent() {
	    }
	    FriendListComponent = __decorate([
	        core_1.Component({
	            selector: 'friend-list',
	            templateUrl: 'client/dev/kshare/templates/shared/friend-list.html',
	            styleUrls: ['client/dev/kshare/styles/friend-list.css'],
	            directives: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FriendListComponent);
	    return FriendListComponent;
	}());
	exports.FriendListComponent = FriendListComponent;
	

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by GiangDH on 5/18/16.
	 */
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var auth_services_1 = __webpack_require__(45);
	var HeaderComponent = (function () {
	    function HeaderComponent(_auth) {
	        this._auth = _auth;
	        this.loginToken = false;
	        this.userToken = localStorage.getItem('username');
	        this.roleToken = localStorage.getItem('userrole');
	    }
	    HeaderComponent.prototype.ngOnInit = function () {
	        if (localStorage.getItem('username')) {
	            this.loginToken = true;
	        }
	    };
	    HeaderComponent.prototype.logout = function () {
	        var _this = this;
	        this._auth.logout().subscribe(function (status) {
	            if (status.login == false) {
	                _this._auth.logoutClient();
	            }
	        });
	        window.location.reload();
	    };
	    HeaderComponent = __decorate([
	        core_1.Component({
	            selector: 'header',
	            templateUrl: 'client/dev/kshare/templates/shared/header.html',
	            styleUrls: ['client/dev/kshare/styles/header.css'],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof auth_services_1.AuthService !== 'undefined' && auth_services_1.AuthService) === 'function' && _a) || Object])
	    ], HeaderComponent);
	    return HeaderComponent;
	    var _a;
	}());
	exports.HeaderComponent = HeaderComponent;
	

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	 * Created by GiangDH on 5/18/16.
	 */
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(20);
	var router_1 = __webpack_require__(14);
	var auth_services_1 = __webpack_require__(45);
	var LoginComponent = (function () {
	    function LoginComponent(fb, _authService, router) {
	        this._authService = _authService;
	        this.router = router;
	        this.user = [];
	        this.loginForm = fb.group({
	            username: ["", common_1.Validators.required],
	            password: ["", common_1.Validators.required]
	        });
	    }
	    LoginComponent.prototype.login = function (user) {
	        var _this = this;
	        this._authService
	            .login(user)
	            .subscribe(function (res) {
	            if (res.invalidUsername) {
	                _this.userValid = '*' + res.invalidUsername;
	                _this.passValid = null;
	            }
	            else if (res.invalidPassword) {
	                _this.passValid = '*' + res.invalidPassword;
	                _this.userValid = null;
	            }
	            else {
	                localStorage.setItem('username', res.username);
	                if (res.role == 'admin') {
	                    localStorage.setItem('role', res.role);
	                }
	                else {
	                    localStorage.setItem('role', 'normal');
	                }
	                window.location.reload();
	            }
	        }, function (error) {
	            console.log(error);
	        });
	    };
	    LoginComponent = __decorate([
	        core_1.Component({
	            selector: 'login',
	            templateUrl: 'client/dev/kshare/templates/shared/login.html',
	            styleUrls: ['client/dev/kshare/styles/login.css'],
	            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(auth_services_1.AuthService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof auth_services_1.AuthService !== 'undefined' && auth_services_1.AuthService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
	    ], LoginComponent);
	    return LoginComponent;
	    var _a, _b, _c;
	}());
	exports.LoginComponent = LoginComponent;
	

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	/**
	 * Created by GiangDH on 5/19/16.
	 */
	var core_1 = __webpack_require__(1);
	var common_1 = __webpack_require__(20);
	var router_1 = __webpack_require__(14);
	var auth_services_1 = __webpack_require__(45);
	var RegisterComponent = (function () {
	    function RegisterComponent(fb, _authService, router) {
	        this._authService = _authService;
	        this.router = router;
	        this.user = [];
	        this.regForm = fb.group({
	            username: ["", common_1.Validators.required],
	            password: ["", common_1.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
	            email: ["", common_1.Validators.pattern('^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$')]
	        });
	    }
	    RegisterComponent.prototype.register = function (user) {
	        this._authService
	            .register(user)
	            .subscribe(function (response) {
	            window.location.reload();
	        }, function (error) {
	            console.log(error);
	        });
	    };
	    RegisterComponent = __decorate([
	        core_1.Component({
	            selector: 'register',
	            templateUrl: 'client/dev/kshare/templates/shared/register.html',
	            styleUrls: ['client/dev/kshare/styles/login.css'],
	            directives: [common_1.FORM_DIRECTIVES]
	        }),
	        __param(0, core_1.Inject(common_1.FormBuilder)),
	        __param(1, core_1.Inject(auth_services_1.AuthService)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof auth_services_1.AuthService !== 'undefined' && auth_services_1.AuthService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
	    ], RegisterComponent);
	    return RegisterComponent;
	    var _a, _b, _c;
	}());
	exports.RegisterComponent = RegisterComponent;
	

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(14);
	var knowledge_service_1 = __webpack_require__(57);
	var SideBarComponent = (function () {
	    function SideBarComponent(_knowledgeService) {
	        this._knowledgeService = _knowledgeService;
	    }
	    SideBarComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
	            var parent = [];
	            var subCate = [];
	            for (var i = 0; i < knowledges.length; i++) {
	                if (!knowledges[i].hasOwnProperty('parent')) {
	                    parent.push(knowledges[i]);
	                }
	            }
	            for (var i = 0; i < parent.length; i++) {
	                for (var j = 0; j < knowledges.length; j++) {
	                    if ((knowledges[j].hasOwnProperty('parent')) && (knowledges[j].parent === parent[i]._id)) {
	                        subCate.push(knowledges[j]);
	                    }
	                }
	                parent[i]["subCategory"] = subCate;
	                subCate = [];
	            }
	            _this.knowledges = parent;
	        });
	    };
	    SideBarComponent = __decorate([
	        core_1.Component({
	            selector: 'sidebar',
	            templateUrl: 'client/dev/kshare/templates/shared/sidebar.html',
	            styleUrls: ['client/dev/kshare/styles/sidebar.css'],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof knowledge_service_1.KnowledgeService !== 'undefined' && knowledge_service_1.KnowledgeService) === 'function' && _a) || Object])
	    ], SideBarComponent);
	    return SideBarComponent;
	    var _a;
	}());
	exports.SideBarComponent = SideBarComponent;
	

/***/ },

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/**
	 * Created by GiangDH on 6/4/16.
	 */
	var core_1 = __webpack_require__(1);
	//import 'rxjs/Rx';   // Load all features
	var router_1 = __webpack_require__(14);
	/**
	 * Shared Components
	 */
	var header_1 = __webpack_require__(523);
	var sidebar_1 = __webpack_require__(526);
	var footer_1 = __webpack_require__(521);
	var login_1 = __webpack_require__(524);
	var register_1 = __webpack_require__(525);
	/**
	 * Page Components
	 */
	var home_1 = __webpack_require__(516);
	var request_list_cli_1 = __webpack_require__(519);
	var request_detail_cli_1 = __webpack_require__(518);
	var request_update_cli_1 = __webpack_require__(520);
	var request_search_cli_1 = __webpack_require__(364);
	var kspace_1 = __webpack_require__(517);
	var KshareComponent = (function () {
	    function KshareComponent() {
	    }
	    KshareComponent = __decorate([
	        core_1.Component({
	            selector: 'kshare-app',
	            templateUrl: 'client/dev/kshare/kshare.html',
	            directives: [
	                router_1.ROUTER_DIRECTIVES,
	                header_1.HeaderComponent,
	                sidebar_1.SideBarComponent,
	                footer_1.FooterComponent,
	                login_1.LoginComponent,
	                register_1.RegisterComponent,
	                kspace_1.KSpaceComponent
	            ]
	        }),
	        router_1.Routes([
	            { path: '/', component: home_1.HomeComponent },
	            { path: '/kspace/:id', component: kspace_1.KSpaceComponent },
	            { path: '/requests/search/:type/:id', component: request_search_cli_1.RequestSearchClientComponent },
	            { path: '/requests/update/:id', component: request_update_cli_1.RequestUpdateClientComponent },
	            { path: '/requests/:id', component: request_detail_cli_1.RequestDetailClientComponent },
	            { path: '/requests', component: request_list_cli_1.RequestListClientComponent }
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], KshareComponent);
	    return KshareComponent;
	}());
	exports.KshareComponent = KshareComponent;
	

/***/ },

/***/ 749:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(44);
	var Observable_1 = __webpack_require__(2);
	/**
	 * Sets up the authentication configuration.
	 */
	var AuthConfig = (function () {
	    function AuthConfig(config) {
	        var _this = this;
	        if (config === void 0) { config = {}; }
	        this.headerName = config.headerName || 'Authorization';
	        if (config.headerPrefix) {
	            this.headerPrefix = config.headerPrefix + ' ';
	        }
	        else if (config.noTokenScheme) {
	            this.headerPrefix = '';
	        }
	        else {
	            this.headerPrefix = 'Bearer ';
	        }
	        this.tokenName = config.tokenName || 'id_token';
	        this.noJwtError = config.noJwtError || false;
	        this.tokenGetter = config.tokenGetter || (function () { return localStorage.getItem(_this.tokenName); });
	        this.globalHeaders = config.globalHeaders || [];
	        this.noTokenScheme = config.noTokenScheme || false;
	    }
	    AuthConfig.prototype.getConfig = function () {
	        return {
	            headerName: this.headerName,
	            headerPrefix: this.headerPrefix,
	            tokenName: this.tokenName,
	            tokenGetter: this.tokenGetter,
	            noJwtError: this.noJwtError,
	            noTokenScheme: this.noTokenScheme,
	            globalHeaders: this.globalHeaders
	        };
	    };
	    return AuthConfig;
	}());
	exports.AuthConfig = AuthConfig;
	/**
	 * Allows for explicit authenticated HTTP requests.
	 */
	var AuthHttp = (function () {
	    function AuthHttp(options, http) {
	        var _this = this;
	        this.http = http;
	        this._config = options.getConfig();
	        this.tokenStream = new Observable_1.Observable(function (obs) {
	            obs.next(_this._config.tokenGetter());
	        });
	    }
	    AuthHttp.prototype.setGlobalHeaders = function (headers, request) {
	        headers.forEach(function (header) {
	            var key = Object.keys(header)[0];
	            var headerValue = header[key];
	            request.headers.set(key, headerValue);
	        });
	    };
	    AuthHttp.prototype.request = function (url, options) {
	        var request;
	        var globalHeaders = this._config.globalHeaders;
	        if (!tokenNotExpired(null, this._config.tokenGetter())) {
	            if (!this._config.noJwtError) {
	                return new Observable_1.Observable(function (obs) {
	                    obs.error(new Error('No JWT present'));
	                });
	            }
	            else {
	                request = this.http.request(url, options);
	            }
	        }
	        else if (typeof url === 'string') {
	            var reqOpts = options || {};
	            if (!reqOpts.headers) {
	                reqOpts.headers = new http_1.Headers();
	            }
	            if (globalHeaders) {
	                this.setGlobalHeaders(globalHeaders, reqOpts);
	            }
	            reqOpts.headers.set(this._config.headerName, this._config.headerPrefix + this._config.tokenGetter());
	            request = this.http.request(url, reqOpts);
	        }
	        else {
	            var req = url;
	            if (!req.headers) {
	                req.headers = new http_1.Headers();
	            }
	            if (globalHeaders) {
	                this.setGlobalHeaders(globalHeaders, req);
	            }
	            req.headers.set(this._config.headerName, this._config.headerPrefix + this._config.tokenGetter());
	            request = this.http.request(req);
	        }
	        return request;
	    };
	    AuthHttp.prototype.requestHelper = function (requestArgs, additionalOptions) {
	        var options = new http_1.RequestOptions(requestArgs);
	        if (additionalOptions) {
	            options = options.merge(additionalOptions);
	        }
	        return this.request(new http_1.Request(options));
	    };
	    AuthHttp.prototype.get = function (url, options) {
	        return this.requestHelper({ url: url, method: http_1.RequestMethod.Get }, options);
	    };
	    AuthHttp.prototype.post = function (url, body, options) {
	        return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Post }, options);
	    };
	    AuthHttp.prototype.put = function (url, body, options) {
	        return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Put }, options);
	    };
	    AuthHttp.prototype.delete = function (url, options) {
	        return this.requestHelper({ url: url, method: http_1.RequestMethod.Delete }, options);
	    };
	    AuthHttp.prototype.patch = function (url, body, options) {
	        return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Patch }, options);
	    };
	    AuthHttp.prototype.head = function (url, options) {
	        return this.requestHelper({ url: url, method: http_1.RequestMethod.Head }, options);
	    };
	    AuthHttp = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [AuthConfig, http_1.Http])
	    ], AuthHttp);
	    return AuthHttp;
	}());
	exports.AuthHttp = AuthHttp;
	/**
	 * Helper class to decode and find JWT expiration.
	 */
	var JwtHelper = (function () {
	    function JwtHelper() {
	    }
	    JwtHelper.prototype.urlBase64Decode = function (str) {
	        var output = str.replace(/-/g, '+').replace(/_/g, '/');
	        switch (output.length % 4) {
	            case 0: {
	                break;
	            }
	            case 2: {
	                output += '==';
	                break;
	            }
	            case 3: {
	                output += '=';
	                break;
	            }
	            default: {
	                throw 'Illegal base64url string!';
	            }
	        }
	        return decodeURIComponent(escape(window.atob(output))); //polyfill https://github.com/davidchambers/Base64.js
	    };
	    JwtHelper.prototype.decodeToken = function (token) {
	        var parts = token.split('.');
	        if (parts.length !== 3) {
	            throw new Error('JWT must have 3 parts');
	        }
	        var decoded = this.urlBase64Decode(parts[1]);
	        if (!decoded) {
	            throw new Error('Cannot decode the token');
	        }
	        return JSON.parse(decoded);
	    };
	    JwtHelper.prototype.getTokenExpirationDate = function (token) {
	        var decoded;
	        decoded = this.decodeToken(token);
	        if (typeof decoded.exp === "undefined") {
	            return null;
	        }
	        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
	        date.setUTCSeconds(decoded.exp);
	        return date;
	    };
	    JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
	        var date = this.getTokenExpirationDate(token);
	        offsetSeconds = offsetSeconds || 0;
	        if (date === null) {
	            return false;
	        }
	        // Token expired?
	        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
	    };
	    return JwtHelper;
	}());
	exports.JwtHelper = JwtHelper;
	/**
	 * Checks for presence of token and that token hasn't expired.
	 * For use with the @CanActivate router decorator and NgIf
	 */
	function tokenNotExpired(tokenName, jwt) {
	    if (tokenName === void 0) { tokenName = 'id_token'; }
	    var token = jwt || localStorage.getItem(tokenName);
	    var jwtHelper = new JwtHelper();
	    return token && !jwtHelper.isTokenExpired(token, null);
	}
	exports.tokenNotExpired = tokenNotExpired;
	exports.AUTH_PROVIDERS = [
	    core_1.provide(AuthHttp, {
	        useFactory: function (http) {
	            return new AuthHttp(new AuthConfig(), http);
	        },
	        deps: [http_1.Http]
	    })
	];
	

/***/ },

/***/ 895:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var paginate_pipe_1 = __webpack_require__(896);
	exports.PaginatePipe = paginate_pipe_1.PaginatePipe;
	var pagination_service_1 = __webpack_require__(259);
	exports.PaginationService = pagination_service_1.PaginationService;
	var pagination_controls_cmp_1 = __webpack_require__(897);
	exports.PaginationControlsCmp = pagination_controls_cmp_1.PaginationControlsCmp;


/***/ },

/***/ 896:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var pagination_service_1 = __webpack_require__(259);
	var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
	var PaginatePipe = (function () {
	    function PaginatePipe(service) {
	        this.service = service;
	        // store the values from the last time the pipe was invoked
	        this.state = {};
	    }
	    PaginatePipe.prototype.transform = function (collection, args) {
	        // When an observable is passed through the AsyncPipe, it will output
	        // `null` until the subscription resolves. In this case, we want to
	        // use the cached data from the `state` object to prevent the NgFor
	        // from flashing empty until the real values arrive.
	        if (args instanceof Array) {
	            // compatible with angular2 before beta16
	            args = args[0];
	        }
	        if (!(collection instanceof Array)) {
	            var _id = args.id || this.service.defaultId;
	            if (this.state[_id]) {
	                return this.state[_id].slice;
	            }
	            else {
	                return collection;
	            }
	        }
	        var serverSideMode = args.totalItems !== undefined;
	        var instance = this.createInstance(collection, args);
	        var id = instance.id;
	        var start, end;
	        var perPage = instance.itemsPerPage;
	        this.service.register(instance);
	        if (!serverSideMode && collection instanceof Array) {
	            perPage = perPage || LARGE_NUMBER;
	            start = (instance.currentPage - 1) * perPage;
	            end = start + perPage;
	            var isIdentical = this.stateIsIdentical(id, collection, start, end);
	            if (isIdentical) {
	                return this.state[id].slice;
	            }
	            else {
	                var slice = collection.slice(start, end);
	                this.saveState(id, collection, slice, start, end);
	                this.service.change.emit(id);
	                return slice;
	            }
	        }
	        // save the state for server-side collection to avoid null
	        // flash as new data loads.
	        this.saveState(id, collection, collection, start, end);
	        return collection;
	    };
	    /**
	     * Create an IPaginationInstance object, using defaults for any optional properties not supplied.
	     */
	    PaginatePipe.prototype.createInstance = function (collection, args) {
	        var config = args;
	        this.checkConfig(config);
	        return {
	            id: config.id || this.service.defaultId,
	            itemsPerPage: config.itemsPerPage || 0,
	            currentPage: config.currentPage || 1,
	            totalItems: config.totalItems || collection.length
	        };
	    };
	    /**
	     * Ensure the argument passed to the filter contains the required properties.
	     */
	    PaginatePipe.prototype.checkConfig = function (config) {
	        var required = ['itemsPerPage', 'currentPage'];
	        var missing = required.filter(function (prop) { return !config.hasOwnProperty(prop); });
	        if (0 < missing.length) {
	            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
	        }
	    };
	    /**
	     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
	     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
	     * need to check that the collection, start and end points are all identical, and if so, return the
	     * last sliced array.
	     */
	    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
	        this.state[id] = {
	            collection: collection,
	            size: collection.length,
	            slice: slice,
	            start: start,
	            end: end
	        };
	    };
	    /**
	     * For a given id, returns true if the collection, size, start and end values are identical.
	     */
	    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
	        var state = this.state[id];
	        if (!state) {
	            return false;
	        }
	        var isMetaDataIdentical = state.collection === collection &&
	            state.size === collection.length &&
	            state.start === start &&
	            state.end === end;
	        if (!isMetaDataIdentical) {
	            return false;
	        }
	        return state.slice.every(function (element, index) { return element === collection[start + index]; });
	    };
	    PaginatePipe = __decorate([
	        core_1.Pipe({
	            name: 'paginate',
	            pure: false
	        }), 
	        __metadata('design:paramtypes', [pagination_service_1.PaginationService])
	    ], PaginatePipe);
	    return PaginatePipe;
	}());
	exports.PaginatePipe = PaginatePipe;


/***/ },

/***/ 897:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var pagination_service_1 = __webpack_require__(259);
	var template_1 = __webpack_require__(898);
	var PaginationControlsCmp = (function () {
	    function PaginationControlsCmp(service) {
	        var _this = this;
	        this.service = service;
	        this.maxSize = 7;
	        this.pageChange = new core_1.EventEmitter();
	        this.pages = [];
	        this.hasTemplate = false;
	        this._directionLinks = true;
	        this._autoHide = false;
	        this.changeSub = this.service.change
	            .subscribe(function (id) {
	            if (_this.id === id) {
	                _this.updatePageLinks();
	            }
	        });
	    }
	    Object.defineProperty(PaginationControlsCmp.prototype, "directionLinks", {
	        get: function () {
	            return this._directionLinks;
	        },
	        set: function (value) {
	            this._directionLinks = !!value && value !== 'false';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PaginationControlsCmp.prototype, "autoHide", {
	        get: function () {
	            return this._autoHide;
	        },
	        set: function (value) {
	            this._autoHide = !!value && value !== 'false';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PaginationControlsCmp.prototype.ngOnInit = function () {
	        if (this.id === undefined) {
	            this.id = this.service.defaultId;
	        }
	    };
	    PaginationControlsCmp.prototype.ngOnChanges = function () {
	        this.updatePageLinks();
	    };
	    PaginationControlsCmp.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        if ((this.template) && 0 < this.template.nativeElement.children.length) {
	            setTimeout(function () { return _this.hasTemplate = true; });
	        }
	    };
	    PaginationControlsCmp.prototype.ngOnDestroy = function () {
	        this.changeSub.unsubscribe();
	    };
	    /**
	     * Go to the previous page
	     */
	    PaginationControlsCmp.prototype.previous = function () {
	        this.setCurrent(this.getCurrent() - 1);
	    };
	    /**
	     * Go to the next page
	     */
	    PaginationControlsCmp.prototype.next = function () {
	        this.setCurrent(this.getCurrent() + 1);
	    };
	    /**
	     * Returns true if current page is first page
	     */
	    PaginationControlsCmp.prototype.isFirstPage = function () {
	        return this.getCurrent() === 1;
	    };
	    /**
	     * Returns true if current page is last page
	     */
	    PaginationControlsCmp.prototype.isLastPage = function () {
	        return this.getLastPage() === this.getCurrent();
	    };
	    /**
	     * Set the current page number.
	     */
	    PaginationControlsCmp.prototype.setCurrent = function (page) {
	        this.pageChange.emit(page);
	    };
	    /**
	     * Get the current page number.
	     */
	    PaginationControlsCmp.prototype.getCurrent = function () {
	        return this.service.getCurrentPage(this.id);
	    };
	    /**
	     * Returns the last page number
	     */
	    PaginationControlsCmp.prototype.getLastPage = function () {
	        var inst = this.service.getInstance(this.id);
	        return Math.ceil(inst.totalItems / inst.itemsPerPage);
	    };
	    /**
	     * Updates the page links and checks that the current page is valid. Should run whenever the
	     * PaginationService.change stream emits a value matching the current ID, or when any of the
	     * input values changes.
	     */
	    PaginationControlsCmp.prototype.updatePageLinks = function () {
	        var inst = this.service.getInstance(this.id);
	        this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
	        var correctedCurrentPage = this.outOfBoundCorrection(inst);
	        if (correctedCurrentPage !== inst.currentPage) {
	            this.setCurrent(correctedCurrentPage);
	        }
	    };
	    /**
	     * Checks that the instance.currentPage property is within bounds for the current page range.
	     * If not, return a correct value for currentPage, or the current value if OK.
	     */
	    PaginationControlsCmp.prototype.outOfBoundCorrection = function (instance) {
	        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
	        if (totalPages < instance.currentPage && 0 < totalPages) {
	            return totalPages;
	        }
	        else if (instance.currentPage < 1) {
	            return 1;
	        }
	        return instance.currentPage;
	    };
	    /**
	     * Returns an array of IPage objects to use in the pagination controls.
	     */
	    PaginationControlsCmp.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
	        // paginationRange could be a string if passed from attribute, so cast to number.
	        paginationRange = +paginationRange;
	        var pages = [];
	        var totalPages = Math.ceil(totalItems / itemsPerPage);
	        var halfWay = Math.ceil(paginationRange / 2);
	        var isStart = currentPage <= halfWay;
	        var isEnd = totalPages - halfWay < currentPage;
	        var isMiddle = !isStart && !isEnd;
	        var ellipsesNeeded = paginationRange < totalPages;
	        var i = 1;
	        while (i <= totalPages && i <= paginationRange) {
	            var label = void 0;
	            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
	            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
	            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
	            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
	                label = '...';
	            }
	            else {
	                label = pageNumber;
	            }
	            pages.push({
	                label: label,
	                value: pageNumber
	            });
	            i++;
	        }
	        return pages;
	    };
	    /**
	     * Given the position in the sequence of pagination links [i],
	     * figure out what page number corresponds to that position.
	     */
	    PaginationControlsCmp.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
	        var halfWay = Math.ceil(paginationRange / 2);
	        if (i === paginationRange) {
	            return totalPages;
	        }
	        else if (i === 1) {
	            return i;
	        }
	        else if (paginationRange < totalPages) {
	            if (totalPages - halfWay < currentPage) {
	                return totalPages - paginationRange + i;
	            }
	            else if (halfWay < currentPage) {
	                return currentPage - halfWay + i;
	            }
	            else {
	                return i;
	            }
	        }
	        else {
	            return i;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], PaginationControlsCmp.prototype, "id", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], PaginationControlsCmp.prototype, "maxSize", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PaginationControlsCmp.prototype, "directionLinks", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], PaginationControlsCmp.prototype, "autoHide", null);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], PaginationControlsCmp.prototype, "pageChange", void 0);
	    __decorate([
	        core_1.ViewChild('template'), 
	        __metadata('design:type', Object)
	    ], PaginationControlsCmp.prototype, "template", void 0);
	    PaginationControlsCmp = __decorate([
	        core_1.Component({
	            selector: 'pagination-controls',
	            template: template_1.DEFAULT_TEMPLATE,
	            styles: [template_1.DEFAULT_STYLES]
	        }), 
	        __metadata('design:paramtypes', [pagination_service_1.PaginationService])
	    ], PaginationControlsCmp);
	    return PaginationControlsCmp;
	}());
	exports.PaginationControlsCmp = PaginationControlsCmp;


/***/ },

/***/ 898:
/***/ function(module, exports) {

	/**
	 * The default template and styles for the pagination links are borrowed directly
	 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
	 */
	"use strict";
	exports.DEFAULT_TEMPLATE = "\n    <div #template>\n        <ng-content></ng-content>\n    </div>\n    <ul class=\"ng2-pagination\" \n        role=\"navigation\" \n        aria-label=\"Pagination\" \n        *ngIf=\"!hasTemplate && !(autoHide && pages.length === 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a *ngIf=\"1 < getCurrent()\" (click)=\"previous()\" aria-label=\"Next page\">\n                Previous <span class=\"show-for-sr\">page</span>\n            </a>\n            <span *ngIf=\"isFirstPage()\">Previous <span class=\"show-for-sr\">page</span></span>\n        </li>\n\n        <li [class.current]=\"getCurrent() === page.value\" *ngFor=\"let page of pages\">\n            <a (click)=\"setCurrent(page.value)\" *ngIf=\"getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">Page</span>\n                <span>{{ page.label }}</span>\n            </a>\n            <div *ngIf=\"getCurrent() === page.value\">\n                <span class=\"show-for-sr\">You're on page</span>\n                <span>{{ page.label }}</span> \n            </div>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"isLastPage()\" *ngIf=\"directionLinks\">\n            <a *ngIf=\"!isLastPage()\" (click)=\"next()\" aria-label=\"Next page\">\n                Next <span class=\"show-for-sr\">page</span>\n            </a>\n            <span *ngIf=\"isLastPage()\">Next <span class=\"show-for-sr\">page</span></span>\n        </li>\n\n    </ul>\n    ";
	exports.DEFAULT_STYLES = "\n.ng2-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ng2-pagination::before, .ng2-pagination::after {\n    content: ' ';\n    display: table; }\n  .ng2-pagination::after {\n    clear: both; }\n  .ng2-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    font-size: 0.875rem;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ng2-pagination li {\n    display: inline-block; }\n  .ng2-pagination a,\n  .ng2-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ng2-pagination a:hover,\n    .ng2-pagination button:hover {\n      background: #e6e6e6; }\n  .ng2-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ng2-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ng2-pagination .disabled:hover {\n      background: transparent; }\n  .ng2-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n\n.ng2-pagination .pagination-previous a::before,\n.ng2-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ng2-pagination .pagination-next a::after,\n.ng2-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ng2-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";


/***/ },

/***/ 899:
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(895));


/***/ }

});
//# sourceMappingURL=main.map