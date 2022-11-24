function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-bug/add-bug.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-bug/add-bug.component.html ***!
    \*************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddBugAddBugComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"secondary-col\">\n  <h5>\n    <a (click)=\"goToProject()\"><i class=\"material-icons\">arrow_back</i></a>\n    Projects\n    <i class=\"material-icons\">chevron_right</i>\n    {{project?.name}}\n    <i class=\"material-icons\">chevron_right</i>\n    Add Bug\n  </h5>\n</div>\n<h4>\n  <strong>\n    Add Bug\n  </strong>\n</h4>\n<hr>\n<div class=\"col s6\">\n  <form>\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <input type=\"text\" placeholder=\"Bug name\" [(ngModel)]=\"this.bug.name\" name=\"name\">\n            <label class=\"active\">Name</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field\">\n            <textarea [(ngModel)]=\"this.bug.description\" name=\"description\" name=\"description\" rows=\"8\" cols=\"80\"></textarea>\n            <label class=\"active\">Description</label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <mat-form-field>\n              <mat-label>\n                <link rel=\"manifest\" href=\"./manifest.json\">Priority</mat-label>\n              <mat-select [(value)]=\"this.bug.priority\">\n                <mat-option value=\"{{priority}}\" *ngFor=\"let priority of priorities\">\n                  {{priority}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <div class=\"input-field col s6\">\n            <mat-form-field>\n              <mat-label>State</mat-label>\n              <mat-select [(value)]=\"this.bug.state\">\n                <mat-option value=\"{{state}}\" *ngFor=\"let state of states\">\n                  {{state}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"secondary-content\">\n      <a (click)=\"goToProject()\" type=\"reset\" class=\"cancel\">Cancel</a>\n      <a (click)=\"onSubmit()\" type=\"submit reset\" class=\"update\">Create</a>\n    </div>\n  </form>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-project/add-project.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-project/add-project.component.html ***!
    \*********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddProjectAddProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"secondary-col\">\n  <h5>\n    <a routerLink=\"/projects\"><i class=\"material-icons\">arrow_back</i></a>\n    Projects\n    <i class=\"material-icons\">chevron_right</i>\n    Add Project\n  </h5>\n</div>\n<h4>\n  <strong>\n    Add Project\n  </strong>\n</h4>\n<hr>\n<div class=\"col s6\">\n  <form>\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <div class=\"row\">\n          <div class=\"input-field col s6\">\n            <input type=\"text\" placeholder=\"Project name\" [(ngModel)]=\"project.name\" name=\"name\">\n            <label class=\"active\">Name</label>\n          </div>\n          <div class=\"input-field col s6\">\n            <label>\n              <input type=\"checkbox\" [(ngModel)]=\"project.private\" name=\"private\">\n              <span class=\"active\">Private</span>\n            </label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <textarea [(ngModel)]=\"project.description\" cols=\"30\" rows=\"10\" name=\"description\"></textarea>\n          <label class=\"active\">Description</label>\n        </div>\n        <div class=\"row\">\n          <app-users></app-users>\n          <button class=\"btn orange\" (click)=\"selectUser()\">\n            <i class=\"material-icons\">add</i>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"secondary-content\">\n        <a routerLink=\"/projects\" class=\"cancel\">Cancel</a>\n        <a routerLink=\"/projects\" type=\"submit\" class=\"update\" (click)=\"onSubmit()\">Submit</a>\n      </div>\n    </div>\n  </form>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-user/add-user.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-user/add-user.component.html ***!
    \***************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAddUserAddUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"center\">\n  <i class=\"material-icons red circle\">bug_report</i>\n  <h5>\n    <!-- <a (click)=\"goToLogin()\"><i class=\"material-icons\">arrow_back</i></a> -->\n    Create your account\n  </h5>\n</div>\n<div class=\"card\">\n  <div class=\"card-content\">\n    <form class=\"col s6\">\n      <div class=\"input-field col s6\">\n        <input type=\"text\" [(ngModel)]=\"user.displayName\" name=\"username\" required>\n        <label class=\"active\">Username</label>\n      </div>\n      <div class=\"input-field col s6\">\n        <input type=\"text\" [(ngModel)]=\"user.email\" name=\"email\" required>\n        <label class=\"active\">Email</label>\n      </div>\n      <div class=\"input-field col s6\">\n        <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" required>\n        <label class=\"active\">Password</label>\n      </div>\n      <div>\n        Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.\n      </div>\n      <button (click)=\"submit()\" type=\"submit reset\" class=\"block\">Sign up for Bug-Tracker</button>\n    </form>\n  </div>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/bug/bug.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bug/bug.component.html ***!
    \*****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBugBugComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div *ngIf=\"auth.user$ | async as user\">\n  <div class=\"secondary-col\">\n    <h5>\n      <a (click)=\"goBackToProject()\"><i class=\"material-icons\">arrow_back</i></a>\n      Projects\n      <i class=\"material-icons\">chevron_right</i>\n      {{project?.name}}\n      <i class=\"material-icons\">chevron_right</i>\n      {{bug?.name}}\n    </h5>\n  </div>\n  <div *ngIf=\"bug != null;else nobug\">\n    <div *ngIf=\"!editState\">\n      <h4>\n        <strong>\n          {{bug?.name}}\n        </strong>\n        <div class=\"secondary-content\">\n          <a (click)=\"delete()\"><i class=\"material-icons icon-red\">delete</i></a>\n          <a><i (click)=\"toggleEditState()\" class=\"material-icons\">edit</i></a>\n        </div>\n      </h4>\n      <hr>\n      <ul class=\"collection\">\n        <li class=\"collection-item bug-description-header\">\n          <strong>{{user.displayName}}</strong>\n          <span>{{\" \"}}</span>\n          <a class=\"secondary-col\">{{ bug?.time | timeAgo }}</a>\n          <div class=\"secondary-content\">\n            <span class=\"new badge tag\" attr.data-badge-caption=\"{{bug?.state}}\"></span>\n            <span class=\"new badge tag\" attr.data-badge-caption=\"{{bug?.priority}}\"></span>\n          </div>\n        </li>\n        <li class=\"collection-item avatar\">\n          <img src=\"{{user.photoURL}}\" alt=\"\" class=\"circle\">\n          {{bug?.description}}\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div *ngIf=\"editState\">\n    <h4>\n      <strong>\n        <input [(ngModel)]=\"bug.name\" type=\"text\" class=\"title-edit\" maxlength=\"20\" size=\"20\">\n      </strong>\n      <div class=\"secondary-content\">\n        <a (click)=\"delete()\"><i class=\"material-icons icon-red\">delete</i></a>\n        <a><i (click)=\"toggleEditState()\" class=\"material-icons\">compress</i></a>\n      </div>\n    </h4>\n    <hr>\n    <ul class=\"collection\">\n      <li class=\"collection-item bug-description-header\">\n        <strong>{{user.displayName}}</strong>\n        <span>{{\" \"}}</span>\n        <a class=\"secondary-col\">{{ bug?.time | timeAgo }}</a>\n      </li>\n      <li class=\"collection-item avatar\">\n        <img src=\"{{user.photoURL}}\" alt=\"\" class=\"circle\">\n        <textarea [(ngModel)]=\"bug.description\" name=\"description\" rows=\"8\" cols=\"80\"></textarea>\n      </li>\n      <li class=\"collection-item\">\n        <div class=\"col s6\">\n          <div class=\"row\">\n            <div class=\"col s6\">\n              <mat-form-field>\n                <mat-label>\n                  <link rel=\"manifest\" href=\"./manifest.json\">Priority</mat-label>\n                <mat-select [(value)]=\"bug.priority\">\n                  <mat-option value=\"{{priority}}\" *ngFor=\"let priority of priorities\">\n                    {{priority}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div class=\"col s6\">\n              <mat-form-field>\n                <mat-label>\n                  <link rel=\"manifest\" href=\"./manifest.json\">Priority</mat-label>\n                <mat-select [(value)]=\"bug.state\">\n                  <mat-option value=\"{{state}}\" *ngFor=\"let state of states\">\n                    {{state}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </li>\n      <li class=\"collection-item secondary-content\">\n        <a (click)=\"toggleEditState()\" class=\"cancel\">Cancel</a>\n        <a (click)=\"update()\" class=\"update\">Update</a>\n      </li>\n    </ul>\n  </div>\n  <ng-template #nobug>\n    <ul class=\"collection\">\n      <li class=\"collection-item\">\n        <div class=\"item\">\n          <ngx-skeleton-loader count=\"2\" appearance=\"line\"> </ngx-skeleton-loader>\n        </div>\n      </li>\n    </ul>\n  </ng-template>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/bugs/bugs.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bugs/bugs.component.html ***!
    \*******************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBugsBugsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"secondary-col\">\n  <h5>\n    <a (click)=\"goToProjects()\"><i class=\"material-icons\">arrow_back</i></a>\n    Projects\n    <i class=\"material-icons\">chevron_right</i>\n    {{project?.name}}\n  </h5>\n</div>\n<div *ngIf=\"!editState\">\n  <h4>\n    <strong>\n      {{project?.name}}\n    </strong>\n    <div class=\"secondary-content\">\n      <a (click)=\"goToAddBug()\"><i class=\"material-icons\">add</i></a>\n      <a><i (click)=\"delete()\" class=\"material-icons icon-red\">delete</i></a>\n      <a><i (click)=\"toggleEditState()\" class=\"material-icons\">edit</i></a>\n    </div>\n  </h4>\n  <hr>\n  <ul class=\"collection\">\n    <li class=\"collection-item project-description-header\">\n      <strong>{{project?.collaborators}}</strong>\n      <span>{{\" \"}}</span>\n      <a class=\"secondary-col\">{{ project?.time | timeAgo }}</a>\n      <div class=\"secondary-content\">\n        <i class=\"material-icons\">{{ project?.private ? 'perm_identity' : 'public' }}</i>\n      </div>\n    </li>\n    <li class=\"collection-item\">\n      <div *ngIf=\"!editState\">\n        {{project?.description}}\n      </div>\n    </li>\n  </ul>\n</div>\n<div *ngIf=\"editState\">\n  <h4>\n    <strong>\n      <input [(ngModel)]=\"_project.name\" type=\"text\" class=\"title-edit\" maxlength=\"20\" size=\"20\">\n    </strong>\n    <div class=\"secondary-content\">\n      <a (click)=\"goToAddBug()\"><i class=\"material-icons\">add</i></a>\n      <a><i (click)=\"delete()\" class=\"material-icons icon-red\">delete</i></a>\n      <a><i (click)=\"toggleEditState()\" class=\"material-icons\">compress</i></a>\n    </div>\n  </h4>\n  <ul class=\"collection\">\n    <li class=\"collection-item project-description-header\">\n      <strong>{{project?.collaborators}}</strong>\n      <span>{{\" \"}}</span>\n      <a class=\"secondary-col\">{{ project?.time | timeAgo }}</a>\n      <div class=\"secondary-content\">\n        <i class=\"material-icons\">{{ project?.private ? 'perm_identity' : 'public' }}</i>\n      </div>\n    </li>\n    <li class=\"collection-item\">\n      <textarea [(ngModel)]=\"project.description\" name=\"name\" rows=\"8\" cols=\"80\"></textarea>\n    </li>\n    <li class=\"collection-item\">\n      <label>\n        <input type=\"checkbox\" [(ngModel)]=\"project.private\" name=\"private\">\n        <span>Private</span>\n      </label>\n    </li>\n    <li class=\"collection-item secondary-content\">\n      <a (click)=\"toggleEditState()\" class=\"cancel\">Cancel</a>\n      <a (click)=\"update()\" class=\"update\">Update project</a>\n    </li>\n  </ul>\n  <hr>\n</div>\n<div class=\"card\">\n  <div class=\"card-content\">\n    <nav>\n      <div class=\"nav-wrapper\">\n        <form>\n          <div class=\"input-field search\">\n            <input #txtFname id=\"search\" type=\"search\" placeholder=\"Search bugs ...\" required>\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n            <i class=\"material-icons\" (click)=\"txtFname.value=''\">close</i>\n          </div>\n        </form>\n      </div>\n    </nav>\n    <div *ngIf=\"_bugs?.length > 0;else nobugs\">\n      <table>\n        <tr>\n          <th>name</th>\n          <th>priority</th>\n          <th>state</th>\n          <th>\n            time\n            <i (click)=\"toggleTimeSort()\" *ngIf=\"sortByNewest\" class=\"material-icons\">arrow_drop_down</i>\n            <i (click)=\"toggleTimeSort()\" *ngIf=\"!sortByNewest\" class=\"material-icons\">arrow_drop_up</i>\n          </th>\n        </tr>\n        <tr *ngFor=\"let bug of bugs | searchFilter : 'name' : txtFname.value | sortgrid : (sortByNewest ? 'time' : '-time')\">\n          <td>\n            <div>\n              <strong><a (click)=\"goToBug(bug)\">{{bug.name}}</a></strong>\n            </div>\n          </td>\n          <td>\n            <span class=\"new badge tag\" attr.data-badge-caption=\"{{bug.state}}\"></span>\n          </td>\n          <td>\n            <span class=\"new badge tag\" attr.data-badge-caption=\"{{bug.priority}}\"></span>\n          </td>\n          <td>\n            {{bug.time | timeAgo }}\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <ng-template #nobugs>\n    <ul class=\"collection\">\n      <li class=\"collection-item\">\n        <div class=\"item\">\n          <ngx-skeleton-loader count=\"2\" appearance=\"line\"> </ngx-skeleton-loader>\n        </div>\n      </li>\n    </ul>\n  </ng-template>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html ***!
    \*****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"center\">\n  <i class=\"material-icons red circle\">bug_report</i>\n  <h5>\n    <!-- <a (click)=\"goToSignIn()\"><i class=\"material-icons\">arrow_back</i></a> -->\n    Reset your password\n  </h5>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-content\">\n    <form *ngIf=\"!submitted\" action=\"\" class=\"\">\n      <div>\n        <strong>\n          Enter your user account's verified email address and we will send you a password reset link.\n        </strong>\n      </div>\n      <div class=\"input-field\">\n        <input placeholder=\"Enter your email address\" [(ngModel)]=\"email\" name=\"email\" type=\"text\">\n      </div>\n      <div>\n        <button (click)=\"sendPasswordResetEmail()\" class=\"block\">\n          Send password reset email\n        </button>\n      </div>\n    </form>\n    <div *ngIf=\"submitted\">\n      <div>\n        <strong>\n          Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.\n        </strong>\n      </div>\n      <div>\n        <button (click)=\"goToSignIn()\" class=\"block return\">\n          Return to sign in\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div>\n  <div *ngIf=\"service.user$ | async as user; else login\">\n    <h5>\n      Account\n    </h5>\n    <strong>username:</strong> {{user.displayName}}\n    <p></p>\n    <strong>email:</strong> {{user.email}}\n    <hr>\n    <button class=\"btn red\" (click)=\"service.signOut()\">Sign Out</button>\n  </div>\n  <ng-template #login>\n    <div class=\"center\">\n      <i class=\"material-icons red circle\">bug_report</i>\n      <h5>\n        Sign In to Bug-Tracker\n      </h5>\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <form class=\"col s6\">\n            <div type=\"text\" class=\"input-field col s6\">\n              <input [(ngModel)]=\"username\" name=\"username\" required>\n              <label class=\"active\">Email</label>\n            </div>\n            <div class=\"input-field col s6\">\n              <a (click)=\"goToForgotPassword()\" class=\"secondary-content\">Forgot password?</a>\n              <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" required>\n              <label class=\"active\">Password</label>\n            </div>\n          </form>\n          <div>\n            <button class=\"block red\" (click)=\"signIn(); clear()\">\n              <i class=\"material-icons\">email</i>\n              Sign in with Email\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <button class=\"block google\" (click)=\"service.googleSignin()\">\n            <img height=\"20px\" width=height src=\"https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png\" alt=\"Google Logo\" />\n            Sign in with Google\n          </button>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div>\n            New to Bug-Tracker?\n            <a (click)=\"goToRegister()\">Create an account</a>\n          </div>\n        </div>\n        </div>\n    </div>\n    <div (click)=\"alert()\" class=\"block\">\n        Click Me!\n    </div>\n  </ng-template>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navigation.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navigation.component.html ***!
    \***************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-toolbar>\n  <mat-toolbar-row>\n    <span>\n      <i class=\"material-icons red circle\">bug_report</i>\n      Bug Tracker\n    </span>\n    <span class=\"example-fill-remaining-space\"></span>\n    <span class=\"align-center\"></span>\n    <span class=\"example-spacer\"></span>\n    <button routerLink=\"projects\" routerLinkActive=\"active\" mat-button>Projects</button>\n    <div *ngIf=\"service.photoURL != '' && service.photoURL != null\"\n    routerLink=\"sign-in\" routerLinkActive=\"active\">\n      <button mat-button>\n        <img src=\"{{service.photoURL}}\" alt=\"\" class=\"circle\" height=\"30px\" width=height>\n      </button>\n    </div>\n    <div class=\"secondary-content\" *ngIf=\"service.photoURL == '' || service.photoURL == null\">\n      <button mat-button\n      routerLink=\"sign-in\" routerLinkActive=\"active\">\n        <i class=\"material-icons\">account_circle</i>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
    \***************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"secondary-col\">\n  <h5><a (click)=\"goToSignIn()\"><i class=\"material-icons\">arrow_back</i></a>Projects</h5>\n</div>\n<h4>\n  <strong>Projects</strong>\n  <div class=\"secondary-content\">\n    <a (click)=\"goToAddProject()\"><i class=\"material-icons\">add</i></a>\n  </div>\n</h4>\n<hr>\n<div class=\"card\">\n  <div class=\"card-content\">\n    <nav>\n      <div class=\"nav-wrapper\">\n        <form>\n          <div class=\"input-field search\">\n            <input #txtFname id=\"search\" type=\"search\" placeholder=\"Search projects ...\" required>\n            <label class=\"label-icon\" for=\"search\"><i class=\"material-icons\">search</i></label>\n            <i class=\"material-icons\" (click)=\"txtFname.value=''\">close</i>\n          </div>\n        </form>\n      </div>\n    </nav>\n    <div *ngIf=\"projects?.length > 0;else noProjects\">\n      <table>\n        <tr>\n          <th>name</th>\n          <th>scope</th>\n          <th>\n            created\n            <i (click)=\"toggleTimeSort()\" *ngIf=\"sortByNewest\" class=\"material-icons\">arrow_drop_down</i>\n            <i (click)=\"toggleTimeSort()\" *ngIf=\"!sortByNewest\" class=\"material-icons\">arrow_drop_up</i>\n          </th>\n        </tr>\n        <tr *ngFor=\"let project of projects | searchFilter : 'name' : txtFname.value | sortgrid : (sortByNewest ? 'time' : '-time')\">\n          <td><strong><a (click)=\"goToProject(project)\">{{project.name}}</a></strong></td>\n          <td>\n            <div class=\"secondary-col\">\n              <i class=\"material-icons\">{{ project.private ? 'perm_identity' : 'public' }}</i>\n            </div>\n          </td>\n          <td><div class=\"secondary-col\">{{project?.time | timeAgo }}</div></td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n<ng-template #noProjects>\n  <ul class=\"card\">\n    <li class=\"card-panel hoverable\">\n      <ngx-skeleton-loader count=\"2\" appearance=\"lines\"> </ngx-skeleton-loader>\n    </li>\n  </ul>\n</ng-template>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-form-field>\n  <mat-label>Users</mat-label>\n  <mat-select [(value)]=\"this.selected\">\n    <mat-option value=\"{{user.displayName}}\"*ngFor=\"let user of users\" >\n      {{user.displayName}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }
      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./services/auth.guard */"./src/app/services/auth.guard.ts");
    /* harmony import */
    var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./components/projects/projects.component */"./src/app/components/projects/projects.component.ts");
    /* harmony import */
    var _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components/add-project/add-project.component */"./src/app/components/add-project/add-project.component.ts");
    /* harmony import */
    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/login/login.component */"./src/app/components/login/login.component.ts");
    /* harmony import */
    var _components_bugs_bugs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/bugs/bugs.component */"./src/app/components/bugs/bugs.component.ts");
    /* harmony import */
    var _components_add_bug_add_bug_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./components/add-bug/add-bug.component */"./src/app/components/add-bug/add-bug.component.ts");
    /* harmony import */
    var _components_bug_bug_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./components/bug/bug.component */"./src/app/components/bug/bug.component.ts");
    /* harmony import */
    var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./components/add-user/add-user.component */"./src/app/components/add-user/add-user.component.ts");
    /* harmony import */
    var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./components/forgot-password/forgot-password.component */"./src/app/components/forgot-password/forgot-password.component.ts");
    var routes = [{
      path: 'sign-in',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'sign-in/register',
      component: _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"]
    }, {
      path: 'sign-in/forgot-password',
      component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]
    }, {
      path: 'projects',
      component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'projects/add-project',
      component: _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__["AddProjectComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'projects/:pid/add-bug',
      component: _components_add_bug_add_bug_component__WEBPACK_IMPORTED_MODULE_8__["AddBugComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'projects/:pid',
      component: _components_bugs_bugs_component__WEBPACK_IMPORTED_MODULE_7__["BugsComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'projects/:pid/:bid',
      component: _components_bug_bug_component__WEBPACK_IMPORTED_MODULE_9__["BugComponent"],
      canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: '',
      redirectTo: '/sign-in',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/sign-in'
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'bug-tracker';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.css */"./src/app/app.component.css"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/material/form-field */"./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */
    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/material/select */"./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/fire */"./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */
    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/fire/firestore */"./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */
    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/fire/storage */"./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */
    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/fire/auth */"./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */
    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ngx-skeleton-loader */"./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */
    var _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./components/add-project/add-project.component */"./src/app/components/add-project/add-project.component.ts");
    /* harmony import */
    var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/material */"./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */
    var time_ago_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! time-ago-pipe */"./node_modules/time-ago-pipe/esm2015/time-ago-pipe.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./components/projects/projects.component */"./src/app/components/projects/projects.component.ts");
    /* harmony import */
    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./components/login/login.component */"./src/app/components/login/login.component.ts");
    /* harmony import */
    var _components_users_users_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./components/users/users.component */"./src/app/components/users/users.component.ts");
    /* harmony import */
    var _components_navbar_navigation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ./components/navbar/navigation.component */"./src/app/components/navbar/navigation.component.ts");
    /* harmony import */
    var _services_project_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./services/project.service */"./src/app/services/project.service.ts");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ./services/auth.service */"./src/app/services/auth.service.ts");
    /* harmony import */
    var _components_bugs_bugs_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ./components/bugs/bugs.component */"./src/app/components/bugs/bugs.component.ts");
    /* harmony import */
    var _components_add_bug_add_bug_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! ./components/add-bug/add-bug.component */"./src/app/components/add-bug/add-bug.component.ts");
    /* harmony import */
    var _util_search_filter_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! ./util/search-filter-pipe */"./src/app/util/search-filter-pipe.ts");
    /* harmony import */
    var _util_sort_grid_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! ./util/sort-grid-pipe */"./src/app/util/sort-grid-pipe.ts");
    /* harmony import */
    var _util_group_by_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! ./util/group-by-pipe */"./src/app/util/group-by-pipe.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__( /*! ./../environments/environment */"./src/environments/environment.ts");
    /* harmony import */
    var _components_bug_bug_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__( /*! ./components/bug/bug.component */"./src/app/components/bug/bug.component.ts");
    /* harmony import */
    var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__( /*! ./components/add-user/add-user.component */"./src/app/components/add-user/add-user.component.ts");
    /* harmony import */
    var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__( /*! ./components/forgot-password/forgot-password.component */"./src/app/components/forgot-password/forgot-password.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_17__["ProjectsComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"], _components_users_users_component__WEBPACK_IMPORTED_MODULE_19__["UsersComponent"], _components_navbar_navigation_component__WEBPACK_IMPORTED_MODULE_20__["NavigationComponent"], _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_12__["AddProjectComponent"], _components_bugs_bugs_component__WEBPACK_IMPORTED_MODULE_23__["BugsComponent"], _components_add_bug_add_bug_component__WEBPACK_IMPORTED_MODULE_24__["AddBugComponent"], _util_search_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["SearchFilterPipe"], _util_sort_grid_pipe__WEBPACK_IMPORTED_MODULE_26__["SortGridPipe"], _util_group_by_pipe__WEBPACK_IMPORTED_MODULE_27__["GroupByPipe"], _components_bug_bug_component__WEBPACK_IMPORTED_MODULE_29__["BugComponent"], time_ago_pipe__WEBPACK_IMPORTED_MODULE_14__["TimeAgoPipe"], _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_30__["AddUserComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__["ForgotPasswordComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].config), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_11__["NgxSkeletonLoaderModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"]],
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"], _services_project_service__WEBPACK_IMPORTED_MODULE_21__["ProjectService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/components/add-bug/add-bug.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/add-bug/add-bug.component.css ***!
    \**********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsAddBugAddBugComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".cancel, .update {\n  display: inline-block;\n  border: none;\n  background-color: #4CAF50;\n  padding: 14px 28px;\n  font-size: 16px;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 4px;\n  color: white;\n}\n\n.cancel {\n  color: red;\n  background-color: #E8E8E8;\n}\n\n.secondary-col {\n  color: #484848;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtYnVnL2FkZC1idWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1idWcvYWRkLWJ1Zy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbmNlbCwgLnVwZGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBwYWRkaW5nOiAxNHB4IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FuY2VsIHtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcbn1cblxuLnNlY29uZGFyeS1jb2wge1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cbiJdfQ== */";

    /***/
  },

  /***/"./src/app/components/add-bug/add-bug.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/add-bug/add-bug.component.ts ***!
    \*********************************************************/
  /*! exports provided: AddBugComponent */
  /***/
  function srcAppComponentsAddBugAddBugComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddBugComponent", function () {
      return AddBugComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/project.service */"./src/app/services/project.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var AddBugComponent = /*#__PURE__*/function () {
      function AddBugComponent(service, route, router) {
        _classCallCheck(this, AddBugComponent);
        this.service = service;
        this.route = route;
        this.router = router;
        this.priorities = ['Minor', 'Non-Critical', 'Impaired Functionality', 'Catastrophic'];
        this.states = ['Active', 'Test', 'Verified', 'Closed', 'Opened'];
        this.bug = this.newBug();
      }
      _createClass(AddBugComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return params.get('pid');
          })).subscribe(function (pid) {
            _this.pid = _this.pid == null ? pid : _this.pid + pid;
          });
          this.service.get(this.pid).subscribe(function (project) {
            _this.project = project;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.validBug()) {
            this.addBug();
          } else {
            console.log('Invalid!');
          }
          this.goToProject();
        }
      }, {
        key: "addBug",
        value: function addBug() {
          this.bug.time = new Date();
          this.service.addBug(this.pid, this.bug);
          this.bug = this.newBug();
        }
      }, {
        key: "validBug",
        value: function validBug() {
          return true;
        }
      }, {
        key: "empty",
        value: function empty(str) {
          return str === '';
        }
      }, {
        key: "newBug",
        value: function newBug() {
          return {
            id: '',
            name: '',
            description: '',
            priority: '',
            state: '',
            contributor: '',
            time: new Date()
          };
        }
      }, {
        key: "goToProject",
        value: function goToProject() {
          var _this2 = this;
          this.router.navigate([{
            outlets: {
              secondary: null
            }
          }]).then(function () {
            return _this2.router.navigate(['/projects/' + _this2.pid]);
          });
        }
      }]);
      return AddBugComponent;
    }();
    AddBugComponent.ctorParameters = function () {
      return [{
        type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    AddBugComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-bugs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./add-bug.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-bug/add-bug.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./add-bug.component.css */"./src/app/components/add-bug/add-bug.component.css"))["default"]]
    })], AddBugComponent);

    /***/
  },

  /***/"./src/app/components/add-project/add-project.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/add-project/add-project.component.css ***!
    \******************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsAddProjectAddProjectComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".cancel, .update {\n  display: inline-block;\n  border: none;\n  background-color: #4CAF50;\n  padding: 14px 28px;\n  font-size: 16px;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 4px;\n  color: white;\n}\n\n.cancel {\n  color: red;\n  background-color: #E8E8E8;\n}\n\n.secondary-col {\n  color: #484848;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcHJvamVjdC9hZGQtcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXByb2plY3QvYWRkLXByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW5jZWwsIC51cGRhdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgcGFkZGluZzogMTRweCAyOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhbmNlbCB7XG4gIGNvbG9yOiByZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RTg7XG59XG5cbi5zZWNvbmRhcnktY29sIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG59XG4iXX0= */";

    /***/
  },

  /***/"./src/app/components/add-project/add-project.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/add-project/add-project.component.ts ***!
    \*****************************************************************/
  /*! exports provided: AddProjectComponent */
  /***/
  function srcAppComponentsAddProjectAddProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function () {
      return AddProjectComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/project.service */"./src/app/services/project.service.ts");
    /* harmony import */
    var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../users/users.component */"./src/app/components/users/users.component.ts");
    function serialize(object) {
      return JSON.parse(JSON.stringify(object));
    }
    var AddProjectComponent = /*#__PURE__*/function () {
      function AddProjectComponent(projectService) {
        _classCallCheck(this, AddProjectComponent);
        this.projectService = projectService;
        this.project = this.clearProject();
      }
      _createClass(AddProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "validProject",
        value: function validProject() {
          return this.project.name !== '' && this.project.description !== '';
        }
      }, {
        key: "addProject",
        value: function addProject() {
          this.project.time = new Date(); // Ensures the time is when submitted
          this.projectService.add(this.project);
          this.clearProject();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.validProject()) {
            this.addProject();
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.selected = this.user.selected;
        }
      }, {
        key: "selectUser",
        value: function selectUser() {
          this.ngAfterViewInit();
          this.project.collaborators.push(this.selected);
        }
      }, {
        key: "clearProject",
        value: function clearProject() {
          return {
            id: '',
            name: '',
            description: '',
            collaborators: [],
            "private": false,
            time: new Date()
          };
        }
      }]);
      return AddProjectComponent;
    }();
    AddProjectComponent.ctorParameters = function () {
      return [{
        type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"], {
      "static": false
    })], AddProjectComponent.prototype, "user", void 0);
    AddProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./add-project.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-project/add-project.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./add-project.component.css */"./src/app/components/add-project/add-project.component.css"))["default"]]
    })], AddProjectComponent);

    /***/
  },

  /***/"./src/app/components/add-user/add-user.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/add-user/add-user.component.css ***!
    \************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsAddUserAddUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  },

  /***/"./src/app/components/add-user/add-user.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/add-user/add-user.component.ts ***!
    \***********************************************************/
  /*! exports provided: AddUserComponent */
  /***/
  function srcAppComponentsAddUserAddUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
      return AddUserComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/auth.service */"./src/app/services/auth.service.ts");
    var AddUserComponent = /*#__PURE__*/function () {
      function AddUserComponent(service, router) {
        _classCallCheck(this, AddUserComponent);
        this.service = service;
        this.router = router;
        this.user = {
          displayName: '',
          email: '',
          password: ''
        };
      }
      _createClass(AddUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          this.register();
        }
      }, {
        key: "valid",
        value: function valid() {
          return this.user.email !== '' && this.user.password !== '';
        }
      }, {
        key: "register",
        value: function register() {
          if (this.valid()) {
            this.service.register(this.user.displayName, this.user.email, this.user.password).then(function (result) {})["catch"](function (error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              var email = error.email;
              var credential = error.credential;
              alert('Error: ' + errorMessage);
            });
          }
        }
      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.router.navigate(['sign-in']);
        }
      }]);
      return AddUserComponent;
    }();
    AddUserComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./add-user.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-user/add-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./add-user.component.css */"./src/app/components/add-user/add-user.component.css"))["default"]]
    })], AddUserComponent);

    /***/
  },

  /***/"./src/app/components/bug/bug.component.css":
  /*!**************************************************!*\
    !*** ./src/app/components/bug/bug.component.css ***!
    \**************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsBugBugComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".bug-description-header {\n  background-color: #E8E8E8;\n}\n\n.tag {\n  color: #484848;\n  background-color: #E8E8E8;\n}\n\n.secondary-col {\n  color: #484848;\n}\n\n.icon-red {\n  color: red;\n}\n\n.title-edit[type=\"text\"] {\n  /* font-family: Roboto; */\n  font-size: 32px;\n  width: 50%;\n}\n\n.cancel, .update {\n  display: inline-block;\n  border: none;\n  background-color: #4CAF50;\n  padding: 14px 28px;\n  font-size: 16px;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 4px;\n  color: white;\n}\n\n.cancel {\n  color: red;\n  background-color: #E8E8E8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idWcvYnVnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idWcvYnVnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVnLWRlc2NyaXB0aW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RTg7XG59XG5cbi50YWcge1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcbn1cblxuLnNlY29uZGFyeS1jb2wge1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLmljb24tcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRpdGxlLWVkaXRbdHlwZT1cInRleHRcIl0ge1xuICAvKiBmb250LWZhbWlseTogUm9ib3RvOyAqL1xuICBmb250LXNpemU6IDMycHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jYW5jZWwsIC51cGRhdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgcGFkZGluZzogMTRweCAyOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhbmNlbCB7XG4gIGNvbG9yOiByZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RTg7XG59XG4iXX0= */";

    /***/
  },

  /***/"./src/app/components/bug/bug.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/bug/bug.component.ts ***!
    \*************************************************/
  /*! exports provided: BugComponent */
  /***/
  function srcAppComponentsBugBugComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BugComponent", function () {
      return BugComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../services/project.service */"./src/app/services/project.service.ts");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../services/auth.service */"./src/app/services/auth.service.ts");
    var BugComponent = /*#__PURE__*/function () {
      function BugComponent(service, route, router, auth) {
        _classCallCheck(this, BugComponent);
        this.service = service;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.editState = false;
        this.priorities = ['Minor', 'Non-Critical', 'Impaired Functionality', 'Catastrophic'];
        this.states = ['Active', 'Test', 'Verified', 'Closed', 'Opened'];
      }
      _createClass(BugComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;
          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return params.get('pid');
          })).subscribe(function (id) {
            _this3.pid = _this3.pid == null ? id : _this3.pid + id;
          });
          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return params.get('bid');
          })).subscribe(function (id) {
            _this3.bid = _this3.bid == null ? id : _this3.bid + id;
          });
          this.service.getBug(this.pid, this.bid).subscribe(function (bug) {
            _this3.bug = bug;
          });
          this.service.get(this.pid).subscribe(function (project) {
            _this3.project = project;
          });
        }
      }, {
        key: "goBackToProject",
        value: function goBackToProject() {
          var _this4 = this;
          if (this.pid != null) {
            this.router.navigate([{
              outlets: {
                secondary: null
              }
            }]).then(function () {
              return _this4.router.navigate(['/projects/' + _this4.pid]);
            });
          }
        }
      }, {
        key: "confirmDelete",
        value: function confirmDelete() {
          return confirm('Delete the bug: \"' + this.bug.name + '\"?');
        }
      }, {
        key: "delete",
        value: function _delete() {
          if (!this.confirmDelete()) {
            return;
          }
          this.service.deleteBug(this.pid, this.bid);
          this.goToProject();
        }
      }, {
        key: "toggleEditState",
        value: function toggleEditState() {
          this.editState = !this.editState;
        }
      }, {
        key: "update",
        value: function update() {
          this.bug.id = this.bid;
          this.service.updateBug(this.pid, this.bug);
          this.toggleEditState();
        }
      }, {
        key: "time",
        value: function time() {
          return this.bug.time;
        }
      }, {
        key: "goToProject",
        value: function goToProject() {
          var _this5 = this;
          this.router.navigate([{
            outlets: {
              secondary: null
            }
          }]).then(function () {
            return _this5.router.navigate(['/projects/' + _this5.pid]);
          });
        }
      }]);
      return BugComponent;
    }();
    BugComponent.ctorParameters = function () {
      return [{
        type: _services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };
    BugComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bug',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./bug.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/bug/bug.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./bug.component.css */"./src/app/components/bug/bug.component.css"))["default"]]
    })], BugComponent);

    /***/
  },

  /***/"./src/app/components/bugs/bugs.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/bugs/bugs.component.css ***!
    \****************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsBugsBugsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".project-description-header {\n  background-color: #E8E8E8;\n}\n\n.tag {\n  color: #484848;\n  background-color: #E8E8E8;\n}\n\n.secondary-col {\n  color: #484848;\n}\n\n.icon-red {\n  color: red;\n}\n\ninput[type=\"text\"] {\n  /* font-family: Roboto; */\n  font-size: 32px;\n  width: 50%;\n}\n\n.cancel, .update {\n  display: inline-block;\n  border: none;\n  background-color: #4CAF50;\n  padding: 14px 28px;\n  font-size: 16px;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 4px;\n  color: white;\n}\n\n.cancel {\n  color: red;\n  background-color: #E8E8E8;\n}\n\n.search {\n  background-color: #3498DB;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idWdzL2J1Z3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2J1Z3MvYnVncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtZGVzY3JpcHRpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcbn1cblxuLnRhZyB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFOEU4O1xufVxuXG4uc2Vjb25kYXJ5LWNvbCB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG4uaWNvbi1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIC8qIGZvbnQtZmFtaWx5OiBSb2JvdG87ICovXG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNhbmNlbCwgLnVwZGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBwYWRkaW5nOiAxNHB4IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FuY2VsIHtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcbn1cblxuLnNlYXJjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDk4REI7XG59XG4iXX0= */";

    /***/
  },

  /***/"./src/app/components/bugs/bugs.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/bugs/bugs.component.ts ***!
    \***************************************************/
  /*! exports provided: BugsComponent */
  /***/
  function srcAppComponentsBugsBugsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BugsComponent", function () {
      return BugsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/project.service */"./src/app/services/project.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var BugsComponent = /*#__PURE__*/function () {
      function BugsComponent(service, route, router) {
        _classCallCheck(this, BugsComponent);
        this.service = service;
        this.route = route;
        this.router = router;
        this.editState = false;
        this.sortByNewest = false;
        this.priorities = ['Minor', 'Non-Critical', 'Impaired Functionality', 'Catastrophic'];
        this.states = ['Active', 'Test', 'Verified', 'Closed', 'Opened'];
      }
      _createClass(BugsComponent, [{
        key: "bugs",
        get: function get() {
          return this._bugs;
        }
      }, {
        key: "project",
        get: function get() {
          return this._project;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;
          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this6.service.getBugs(params.get('pid'));
          })).subscribe(function (bugs) {
            _this6._bugs = bugs;
          });
          this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return params.get('pid');
          })).subscribe(function (pid) {
            _this6.pid = _this6.pid == null ? pid : _this6.pid + pid;
          });
          this.service.get(this.pid).subscribe(function (project) {
            _this6._project = project;
          });
        }
      }, {
        key: "update",
        value: function update() {
          this._project.id = this.pid;
          this.service.update(this._project);
          this.toggleEditState();
        }
      }, {
        key: "confirmDelete",
        value: function confirmDelete() {
          return confirm('Delete Project: \"' + this._project.name + '"?');
        }
      }, {
        key: "delete",
        value: function _delete() {
          if (!this.confirmDelete()) {
            return;
          }
          this.service["delete"](this.pid);
          this.toggleEditState();
          this.goToProjects();
        }
      }, {
        key: "toggleEditState",
        value: function toggleEditState() {
          this.editState = !this.editState;
        }
      }, {
        key: "toggleTimeSort",
        value: function toggleTimeSort() {
          this.sortByNewest = !this.sortByNewest;
        }
      }, {
        key: "goToProjects",
        value: function goToProjects() {
          var _this7 = this;
          this.router.navigate([{
            outlets: {
              secondary: null
            }
          }]).then(function () {
            return _this7.router.navigate(['/projects']);
          });
        }
      }, {
        key: "goToBug",
        value: function goToBug(bug) {
          var _this8 = this;
          var bugId = bug ? bug.id : null;
          this.router.navigate([{
            outlets: {
              secondary: null
            }
          }]).then(function () {
            return _this8.router.navigate(['/projects/' + _this8.pid + '/' + bugId]);
          });
        }
      }, {
        key: "goToAddBug",
        value: function goToAddBug() {
          this.router.navigate(['projects/' + this.pid + '/' + 'add-bug']);
        }
      }]);
      return BugsComponent;
    }();
    BugsComponent.ctorParameters = function () {
      return [{
        type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    BugsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bugs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./bugs.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/bugs/bugs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./bugs.component.css */"./src/app/components/bugs/bugs.component.css"))["default"]]
    })], BugsComponent);

    /***/
  },

  /***/"./src/app/components/forgot-password/forgot-password.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/forgot-password/forgot-password.component.css ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsForgotPasswordForgotPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".return {\n  color: #484848;\n  background-color: #E8E8E8;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV0dXJuIHtcbiAgY29sb3I6ICM0ODQ4NDg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RTg7XG59XG4iXX0= */";

    /***/
  },

  /***/"./src/app/components/forgot-password/forgot-password.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
    \*************************************************************************/
  /*! exports provided: ForgotPasswordComponent */
  /***/
  function srcAppComponentsForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/auth.service */"./src/app/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(service, router) {
        _classCallCheck(this, ForgotPasswordComponent);
        this.service = service;
        this.router = router;
        this.email = '';
        this.submitted = false;
      }
      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "valid",
        value: function valid() {
          return this.email !== '';
        }
      }, {
        key: "sendPasswordResetEmail",
        value: function sendPasswordResetEmail() {
          if (this.valid()) {
            this.submitted = true;
            this.service.sendPasswordResetEmail(this.email);
          }
        }
      }, {
        key: "goToSignIn",
        value: function goToSignIn() {
          this.router.navigate(['/sign-in']);
        }
      }]);
      return ForgotPasswordComponent;
    }();
    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./forgot-password.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgot-password/forgot-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./forgot-password.component.css */"./src/app/components/forgot-password/forgot-password.component.css"))["default"]]
    })], ForgotPasswordComponent);

    /***/
  },

  /***/"./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".google {\n  background-color: grey;\n  color: white;\n}\n\n.email {\n  background-color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nb29nbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5lbWFpbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbiJdfQ== */";

    /***/
  },

  /***/"./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/
  /*! exports provided: LoginComponent */
  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/auth.service */"./src/app/services/auth.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(service, router) {
        _classCallCheck(this, LoginComponent);
        this.service = service;
        this.router = router;
        this.username = '';
        this.password = '';
        this.loading = false;
      }
      _createClass(LoginComponent, [{
        key: "signIn",
        value: function signIn() {
          if (!this.invalid()) {
            this.service.emailSignIn(this.username, this.password);
          }
        }
      }, {
        key: "goToRegister",
        value: function goToRegister() {
          this.router.navigate(['sign-in/register']);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.username = '';
          this.password = '';
        }
      }, {
        key: "invalid",
        value: function invalid() {
          return this.username === '' || this.password === '';
        }
      }, {
        key: "goToProjects",
        value: function goToProjects() {
          var _this9 = this;
          this.router.navigateByUrl('/RefreshComponent', {
            skipLocationChange: true
          }).then(function () {
            _this9.router.navigate(['/projects']);
          });
        }
      }, {
        key: "goToForgotPassword",
        value: function goToForgotPassword() {
          this.router.navigate(['/sign-in/forgot-password']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return LoginComponent;
    }();
    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./login.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./login.component.css */"./src/app/components/login/login.component.css"))["default"]]
    })], LoginComponent);

    /***/
  },

  /***/"./src/app/components/navbar/navigation.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/navbar/navigation.component.css ***!
    \************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsNavbarNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJ9 */";

    /***/
  },

  /***/"./src/app/components/navbar/navigation.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/navbar/navigation.component.ts ***!
    \***********************************************************/
  /*! exports provided: NavigationComponent */
  /***/
  function srcAppComponentsNavbarNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/auth.service */"./src/app/services/auth.service.ts");
    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(service) {
        _classCallCheck(this, NavigationComponent);
        this.service = service;
      }
      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return NavigationComponent;
    }();
    NavigationComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./navigation.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navigation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./navigation.component.css */"./src/app/components/navbar/navigation.component.css"))["default"]]
    })], NavigationComponent);

    /***/
  },

  /***/"./src/app/components/projects/projects.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/projects/projects.component.css ***!
    \************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsProjectsProjectsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".new {\n  display: block;\n  width: 50%;\n  border: none;\n  background-color: #4CAF50;\n  padding: 14px 28px;\n  font-size: 16px;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 4px;\n  color: white;\n}\n\n.secondary-col {\n  color: #484848;\n}\n\n.search {\n  background-color: #3498DB;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBwYWRkaW5nOiAxNHB4IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2Vjb25kYXJ5LWNvbCB7XG4gIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG4uc2VhcmNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThEQjtcbn1cbiJdfQ== */";

    /***/
  },

  /***/"./src/app/components/projects/projects.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/projects/projects.component.ts ***!
    \***********************************************************/
  /*! exports provided: ProjectsComponent */
  /***/
  function srcAppComponentsProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/project.service */"./src/app/services/project.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent(service, router, route) {
        _classCallCheck(this, ProjectsComponent);
        this.service = service;
        this.router = router;
        this.route = route;
        this.sortByNewest = false;
      }
      _createClass(ProjectsComponent, [{
        key: "projects",
        get: function get() {
          return this._projects;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;
          this.subscription = this.service.list().subscribe(function (projects) {
            _this10._projects = projects;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "toggleTimeSort",
        value: function toggleTimeSort() {
          this.sortByNewest = !this.sortByNewest;
        }
      }, {
        key: "goToProject",
        value: function goToProject(project) {
          var projectId = project ? project.id : null;
          this.router.navigate(['/projects', projectId]);
        }
      }, {
        key: "goToAddProject",
        value: function goToAddProject() {
          this.router.navigate(['projects/add-project']);
        }
      }, {
        key: "goToSignIn",
        value: function goToSignIn() {
          this.router.navigate(['/sign-in']);
        }
      }]);
      return ProjectsComponent;
    }();
    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./projects.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./projects.component.css */"./src/app/components/projects/projects.component.css"))["default"]]
    })], ProjectsComponent);

    /***/
  },

  /***/"./src/app/components/users/users.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/users/users.component.css ***!
    \******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsUsersUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJ9 */";

    /***/
  },

  /***/"./src/app/components/users/users.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/users/users.component.ts ***!
    \*****************************************************/
  /*! exports provided: UsersComponent */
  /***/
  function srcAppComponentsUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/user.service */"./src/app/services/user.service.ts");
    var UsersComponent = /*#__PURE__*/function () {
      function UsersComponent(userService) {
        _classCallCheck(this, UsersComponent);
        this.userService = userService;
      }
      _createClass(UsersComponent, [{
        key: "users",
        get: function get() {
          return this._users;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;
          this.userService.list().subscribe(function (users) {
            _this11._users = users;
          });
        }
      }]);
      return UsersComponent;
    }();
    UsersComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./users.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/users.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./users.component.css */"./src/app/components/users/users.component.css"))["default"]]
    })], UsersComponent);

    /***/
  },

  /***/"./src/app/services/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/services/auth.guard.ts ***!
    \****************************************/
  /*! exports provided: AuthGuard */
  /***/
  function srcAppServicesAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../services/auth.service */"./src/app/services/auth.service.ts");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);
        this.auth = auth;
        this.router = router;
      }
      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this12 = this;
          return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            return !!user;
          }),
          // <-- map to boolean
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (loggedIn) {
            if (!loggedIn) {
              console.log('access denied');
              _this12.router.navigate(['/sign-in']);
            }
          }));
        }
      }]);
      return AuthGuard;
    }();
    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);

    /***/
  },

  /***/"./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/
  /*! exports provided: AuthService */
  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! firebase/app */"./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */
    var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */
    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/fire/auth */"./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */
    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/fire/firestore */"./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var AuthService = /*#__PURE__*/function () {
      function AuthService(afa, afs, router) {
        var _this13 = this;
        _classCallCheck(this, AuthService);
        this.afa = afa;
        this.afs = afs;
        this.router = router;
        this.uid = '';
        this.photoURL = '';
        this.user$ = this.afa.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
          if (user) {
            return _this13.afs.doc("users/".concat(user.uid)).valueChanges();
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
          }
        }));
        this.afa.authState.subscribe(function (user) {
          if (user) {
            _this13.uid = user.uid;
            _this13.photoURL = user.photoURL;
          }
        });
      }
      _createClass(AuthService, [{
        key: "register",
        value: function register(username, email, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var credential;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.afa.auth.createUserWithEmailAndPassword(email, password);
                  case 2:
                    credential = _context.sent;
                    this.updateUserData(credential.user);
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "emailSignIn",
        value: function emailSignIn(email, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var credential;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.afa.auth.signInWithEmailAndPassword(email, password).then(function (result) {
                      credential = result;
                    })["catch"](function (error) {
                      var errorMessage = error.message;
                      alert('Error: ' + errorMessage);
                    });
                  case 2:
                    return _context2.abrupt("return", this.updateUserData(credential.user));
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "googleSignin",
        value: function googleSignin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var provider, credential;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
                    _context3.next = 3;
                    return this.afa.auth.signInWithPopup(provider);
                  case 3:
                    credential = _context3.sent;
                    return _context3.abrupt("return", this.updateUserData(credential.user));
                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "updateUserData",
        value: function updateUserData(_ref) {
          var uid = _ref.uid,
            email = _ref.email,
            displayName = _ref.displayName,
            photoURL = _ref.photoURL;
          var userRef = this.afs.doc("users/".concat(uid));
          var data = {
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          };
          return userRef.set(data, {
            merge: true
          });
        }
      }, {
        key: "signOut",
        value: function signOut() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.afa.auth.signOut().then(function () {})["catch"](function (error) {
                      console.log(error);
                    });
                  case 2:
                    this.uid = '';
                    this.photoURL = '';
                    return _context4.abrupt("return", this.router.navigate(['/sign-in']));
                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    return _context5.abrupt("return", this.afa.auth.currentUser != null);
                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "sendPasswordResetEmail",
        value: function sendPasswordResetEmail(email) {
          this.afa.auth.sendPasswordResetEmail(email).then(function (result) {})["catch"](function (error) {
            var errorMessage = error.message;
            alert('Error: ' + errorMessage);
          });
        }
      }]);
      return AuthService;
    }();
    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);

    /***/
  },

  /***/"./src/app/services/crud.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/crud.service.ts ***!
    \******************************************/
  /*! exports provided: CrudService */
  /***/
  function srcAppServicesCrudServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "CrudService", function () {
      return CrudService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/fire/firestore */"./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    function serialize(object) {
      return JSON.parse(JSON.stringify(object));
    }
    var CrudService = /*#__PURE__*/function () {
      function CrudService(afs, collectionName) {
        _classCallCheck(this, CrudService);
        this.afs = afs;
        this.collection = this.afs.collection(collectionName);
      }
      _createClass(CrudService, [{
        key: "add",
        value: function add(entity, id) {
          var _this14 = this;
          return new Promise(function (resolve, reject) {
            if (id) {
              _this14.collection.doc(id).set(serialize(entity)).then(function (ref) {
                resolve(entity);
              });
            } else {
              _this14.collection.add(serialize(entity)).then(function (ref) {
                var newentity = Object.assign({
                  id: ref.id
                }, entity);
                resolve(newentity);
              });
            }
          });
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.collection.doc(id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (doc) {
            if (doc.payload.exists) {
              var data = doc.payload.data();
              var payloadId = doc.payload.id;
              return Object.assign({
                id: payloadId
              }, data);
            }
          }));
        }
      }, {
        key: "list",
        value: function list() {
          return this.collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (a) {
              var data = a.payload.doc.data();
              data.id = a.payload.doc.id;
              return data;
            });
          }));
        }
      }, {
        key: "update",
        value: function update(entity) {
          var _this15 = this;
          return new Promise(function (resolve, reject) {
            _this15.collection.doc(entity.id).set(serialize(entity)).then(function () {
              resolve(Object.assign({}, entity));
            });
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this16 = this;
          return new Promise(function (resolve, reject) {
            _this16.collection.doc(id)["delete"]().then(function () {
              resolve();
            });
          });
        }
      }]);
      return CrudService;
    }();
    CrudService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: String
      }];
    };
    CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CrudService);

    /***/
  },

  /***/"./src/app/services/project.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/project.service.ts ***!
    \*********************************************/
  /*! exports provided: ProjectService */
  /***/
  function srcAppServicesProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */
    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/fire/firestore */"./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */
    var _crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./crud.service */"./src/app/services/crud.service.ts");
    /* harmony import */
    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./auth.service */"./src/app/services/auth.service.ts");
    function serialize(object) {
      return JSON.parse(JSON.stringify(object));
    }
    var ProjectService = /*#__PURE__*/function (_crud_service__WEBPAC) {
      _inherits(ProjectService, _crud_service__WEBPAC);
      var _super = _createSuper(ProjectService);
      function ProjectService(
      // tslint:disable-next-line:variable-name
      _afs, service) {
        var _this17;
        _classCallCheck(this, ProjectService);
        _this17 = _super.call(this, _afs, 'users');
        _this17._afs = _afs;
        _this17.service = service;
        _this17.collectionName = 'users/' + _this17.service.uid + '/projects';
        _this17.collection = _this17.afs.collection(_this17.collectionName);
        return _this17;
      }
      _createClass(ProjectService, [{
        key: "addBug",
        value: function addBug(pid, bug) {
          this.afs.collection(this.collectionName + '/' + pid + '/bugs').add(serialize(bug));
        }
      }, {
        key: "deleteBug",
        value: function deleteBug(pid, bid) {
          var _this18 = this;
          return new Promise(function (resolve, reject) {
            _this18.afs.collection(_this18.collectionName + '/' + pid + '/bugs').doc(bid)["delete"]().then(function () {
              resolve();
            });
          });
        }
      }, {
        key: "getBugs",
        value: function getBugs(pid) {
          return this.afs.collection(this.collectionName + '/' + pid + '/bugs').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (a) {
              var data = a.payload.doc.data();
              data.id = a.payload.doc.id;
              return data;
            });
          }));
        }
      }, {
        key: "getBug",
        value: function getBug(pid, bid) {
          return this.afs.collection(this.collectionName + '/' + pid + '/bugs').doc(bid).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (doc) {
            if (doc.payload.exists) {
              var data = doc.payload.data();
              var payloadId = doc.payload.id;
              return Object.assign({
                id: payloadId
              }, data);
            }
          }));
        }
      }, {
        key: "updateBug",
        value: function updateBug(pid, bug) {
          var _this19 = this;
          return new Promise(function (resolve, reject) {
            _this19.afs.collection(_this19.collectionName + '/' + pid + '/bugs').doc(bug.id).set(serialize(bug)).then(function () {
              resolve(Object.assign({}, bug));
            });
          });
        }
      }]);
      return ProjectService;
    }(_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"]);
    ProjectService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProjectService);

    /***/
  },

  /***/"./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/
  /*! exports provided: UserService */
  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/fire/firestore */"./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */
    var _crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./crud.service */"./src/app/services/crud.service.ts");
    var UserService = /*#__PURE__*/function (_crud_service__WEBPAC2) {
      _inherits(UserService, _crud_service__WEBPAC2);
      var _super2 = _createSuper(UserService);
      function UserService(afs) {
        _classCallCheck(this, UserService);
        return _super2.call(this, afs, 'users');
      }
      return _createClass(UserService);
    }(_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]);
    UserService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);

    /***/
  },

  /***/"./src/app/util/group-by-pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/util/group-by-pipe.ts ***!
    \***************************************/
  /*! exports provided: GroupByPipe */
  /***/
  function srcAppUtilGroupByPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GroupByPipe", function () {
      return GroupByPipe;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    function compare(a, b) {
      if (a["private"] === b["private"]) {
        return 0;
      }
      if (a["private"] === 'private') {
        return 1;
      }
      return -1;
    }
    var GroupByPipe = /*#__PURE__*/function () {
      function GroupByPipe() {
        _classCallCheck(this, GroupByPipe);
      }
      _createClass(GroupByPipe, [{
        key: "transform",
        value: function transform(collection, property) {
          return collection.sort(compare);
        }
      }]);
      return GroupByPipe;
    }();
    GroupByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'groupBy'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], GroupByPipe);

    /***/
  },

  /***/"./src/app/util/search-filter-pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/util/search-filter-pipe.ts ***!
    \********************************************/
  /*! exports provided: SearchFilterPipe */
  /***/
  function srcAppUtilSearchFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function () {
      return SearchFilterPipe;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var SearchFilterPipe = /*#__PURE__*/function () {
      function SearchFilterPipe() {
        _classCallCheck(this, SearchFilterPipe);
      }
      _createClass(SearchFilterPipe, [{
        key: "transform",
        value: function transform(items, field, value) {
          if (value === '') {
            return items;
          }
          if (!items) {
            return [];
          }
          return items.filter(function (it) {
            return it[field].toLowerCase().includes(value.toLowerCase());
          });
        }
      }]);
      return SearchFilterPipe;
    }();
    SearchFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'searchFilter'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SearchFilterPipe);

    /***/
  },

  /***/"./src/app/util/sort-grid-pipe.ts":
  /*!****************************************!*\
    !*** ./src/app/util/sort-grid-pipe.ts ***!
    \****************************************/
  /*! exports provided: SortGridPipe */
  /***/
  function srcAppUtilSortGridPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SortGridPipe", function () {
      return SortGridPipe;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var SortGridPipe = /*#__PURE__*/function () {
      function SortGridPipe() {
        _classCallCheck(this, SortGridPipe);
      }
      _createClass(SortGridPipe, [{
        key: "transform",
        value: function transform(array, args) {
          if (typeof args[0] === 'undefined') {
            return array;
          }
          var direction = args[0][0];
          var column = args.replace('-', '');
          array.sort(function (a, b) {
            var left = Number(new Date(a[column]));
            var right = Number(new Date(b[column]));
            return direction === '-' ? right - left : left - right;
          });
          return array;
        }
      }]);
      return SortGridPipe;
    }();
    SortGridPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'sortgrid'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SortGridPipe);

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false,
      config: {
        apiKey: 'AIzaSyDQu481QfBjdgfsv7IHXlWXMybHy8NxY78',
        authDomain: 'bug-tracker-59d88.firebaseapp.com',
        databaseURL: 'https://bug-tracker-59d88.firebaseio.com',
        projectId: 'bug-tracker-59d88',
        storageBucket: 'bug-tracker-59d88.appspot.com',
        messagingSenderId: '1009660913153'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! hammerjs */"./node_modules/hammerjs/hammer.js");
    /* harmony import */
    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! /home/runner/work/bug-tracker/bug-tracker/src/main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map