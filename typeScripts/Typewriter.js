"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Typewriter_instances, _Typewriter_queue, _Typewriter_element, _Typewriter_loop, _Typewriter_typingSpeed, _Typewriter_deletingSpeed, _Typewriter_addToQueue;
exports.__esModule = true;
var Typewriter = /** @class */ (function () {
    function Typewriter(parent, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.loop, loop = _c === void 0 ? false : _c, _d = _b.typingSpeed, typingSpeed = _d === void 0 ? 50 : _d, _e = _b.deletingSpeed, deletingSpeed = _e === void 0 ? 50 : _e;
        _Typewriter_instances.add(this);
        _Typewriter_queue.set(this, []);
        _Typewriter_element.set(this, void 0);
        _Typewriter_loop.set(this, void 0);
        _Typewriter_typingSpeed.set(this, void 0);
        _Typewriter_deletingSpeed.set(this, void 0);
        __classPrivateFieldSet(this, _Typewriter_element, document.createElement("div"), "f");
        parent.append(__classPrivateFieldGet(this, _Typewriter_element, "f"));
        __classPrivateFieldSet(this, _Typewriter_loop, loop, "f");
        __classPrivateFieldSet(this, _Typewriter_typingSpeed, typingSpeed, "f");
        __classPrivateFieldSet(this, _Typewriter_deletingSpeed, deletingSpeed, "f");
    }
    Typewriter.prototype.typeString = function (string) {
        var _this = this;
        __classPrivateFieldGet(this, _Typewriter_instances, "m", _Typewriter_addToQueue).call(this, function (resolve) {
            var i = 0;
            var interval = setInterval(function () {
                __classPrivateFieldGet(_this, _Typewriter_element, "f").append(string[i]);
                i++;
                if (i >= string.length) {
                    clearInterval(interval);
                    resolve();
                }
            }, __classPrivateFieldGet(_this, _Typewriter_typingSpeed, "f"));
        });
        return this;
    };
    Typewriter.prototype.deleteChars = function (number) {
        var _this = this;
        __classPrivateFieldGet(this, _Typewriter_instances, "m", _Typewriter_addToQueue).call(this, function (resolve) {
            var i = 0;
            var interval = setInterval(function () {
                __classPrivateFieldGet(_this, _Typewriter_element, "f").innerText = __classPrivateFieldGet(_this, _Typewriter_element, "f").innerText.substring(0, __classPrivateFieldGet(_this, _Typewriter_element, "f").innerText.length - 1);
                i++;
                if (i >= number) {
                    clearInterval(interval);
                    resolve();
                }
            }, __classPrivateFieldGet(_this, _Typewriter_deletingSpeed, "f"));
        });
        return this;
    };
    Typewriter.prototype.deleteAll = function (deleteSpeed) {
        var _this = this;
        if (deleteSpeed === void 0) { deleteSpeed = __classPrivateFieldGet(this, _Typewriter_deletingSpeed, "f"); }
        __classPrivateFieldGet(this, _Typewriter_instances, "m", _Typewriter_addToQueue).call(this, function (resolve) {
            var interval = setInterval(function () {
                __classPrivateFieldGet(_this, _Typewriter_element, "f").innerText = __classPrivateFieldGet(_this, _Typewriter_element, "f").innerText.substring(0, __classPrivateFieldGet(_this, _Typewriter_element, "f").innerText.length - 1);
                if (__classPrivateFieldGet(_this, _Typewriter_element, "f").innerText.length === 0) {
                    clearInterval(interval);
                    resolve();
                }
            }, deleteSpeed);
        });
        return this;
    };
    Typewriter.prototype.pauseFor = function (duration) {
        __classPrivateFieldGet(this, _Typewriter_instances, "m", _Typewriter_addToQueue).call(this, function (resolve) {
            setTimeout(resolve, duration);
        });
        return this;
    };
    Typewriter.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cb = __classPrivateFieldGet(this, _Typewriter_queue, "f").shift();
                        _a.label = 1;
                    case 1:
                        if (!(cb != null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, cb()];
                    case 2:
                        _a.sent();
                        if (__classPrivateFieldGet(this, _Typewriter_loop, "f"))
                            __classPrivateFieldGet(this, _Typewriter_queue, "f").push(cb);
                        cb = __classPrivateFieldGet(this, _Typewriter_queue, "f").shift();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, this];
                }
            });
        });
    };
    return Typewriter;
}());
exports["default"] = Typewriter;
_Typewriter_queue = new WeakMap(), _Typewriter_element = new WeakMap(), _Typewriter_loop = new WeakMap(), _Typewriter_typingSpeed = new WeakMap(), _Typewriter_deletingSpeed = new WeakMap(), _Typewriter_instances = new WeakSet(), _Typewriter_addToQueue = function _Typewriter_addToQueue(cb) {
    __classPrivateFieldGet(this, _Typewriter_queue, "f").push(function () { return new Promise(cb); });
};
