// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("react-refresh/runtime");
var ErrorOverlay = require("react-error-overlay");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"react-refresh/runtime":"3FsDI","react-error-overlay":"7i2ML"}],"jJrGz":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7212190cb0336068";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ??? Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ???? ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>???? <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jzzmg":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var Typewriter_1 = require("./Typewriter");
var education = document.getElementById("education");
var skills = document.getElementById("skills");
var exp = document.getElementById("experience");
var awards = document.getElementById("awards");
var options = document.getElementsByClassName("option");
var listings = document.getElementsByClassName("resList");
var typewriterTitle = new Typewriter_1["default"](document.querySelector(".resumeTitle"), {
    loop: false,
    typingSpeed: 100,
    deletingSpeed: 100
});
var typewriterIntro = new Typewriter_1["default"](document.querySelector(".resumeIntro"), {
    loop: false,
    typingSpeed: 20,
    deletingSpeed: 100
});
var typewriterSpan1 = new Typewriter_1["default"](document.querySelector(".resSpan1"), {
    loop: false,
    typingSpeed: 50,
    deletingSpeed: 100
});
var typewriterSpan2 = new Typewriter_1["default"](document.querySelector(".resSpan2"), {
    loop: false,
    typingSpeed: 20,
    deletingSpeed: 100
});
var typewriterSpan3 = new Typewriter_1["default"](document.querySelector(".resSpan3"), {
    loop: false,
    typingSpeed: 20,
    deletingSpeed: 100
});
var typewriterSpan4 = new Typewriter_1["default"](document.querySelector(".resSpan4"), {
    loop: false,
    typingSpeed: 20,
    deletingSpeed: 100
});
var typewriterP1 = new Typewriter_1["default"](document.querySelector(".resP1"), {
    loop: false,
    typingSpeed: 30,
    deletingSpeed: 40
});
var typewriterP2 = new Typewriter_1["default"](document.querySelector(".resP2"), {
    loop: false,
    typingSpeed: 30,
    deletingSpeed: 40
});
var typewriterP3 = new Typewriter_1["default"](document.querySelector(".resP3"), {
    loop: false,
    typingSpeed: 30,
    deletingSpeed: 40
});
var typewriterP4 = new Typewriter_1["default"](document.querySelector(".resP4"), {
    loop: false,
    typingSpeed: 30,
    deletingSpeed: 40
});
typewriterTitle.typeString("Resume").start();
typewriterIntro.typeString("Interact with the buttons...").start();
var interact;
setTimeout(function() {
    interact = setInterval(function() {
        typewriterIntro.deleteChars(1).pauseFor(500).typeString(".").start();
    }, 1000);
}, 500);
var timeout;
var click;
function clear() {
    typewriterSpan1.deleteAll().start();
    typewriterSpan2.deleteAll().start();
    typewriterSpan3.deleteAll().start();
    typewriterSpan4.deleteAll().start();
    typewriterP1.deleteAll().start();
    typewriterP2.deleteAll().start();
    typewriterP3.deleteAll().start();
    typewriterP4.deleteAll().start();
}
//EDUCATION
education.addEventListener("click", function() {
    clear();
    for(var i = 0; i < options.length; i++)options[i].style.pointerEvents = "none";
    timeout = setTimeout(function() {
        for(var i = 0; i < options.length; i++)options[i].style.pointerEvents = "auto";
    }, 6000);
    typewriterTitle.deleteAll().start();
    typewriterIntro.deleteAll().start();
    clearInterval(interact);
    typewriterTitle.deleteAll().pauseFor(200).typeString("Education").start();
    typewriterSpan1.typeString("2006-2012:");
    typewriterP1.typeString("De Muse elementary").deleteChars(4).typeString("tary school Ghent").deleteChars(4).typeString("ent");
    typewriterSpan2.typeString("2006").deleteChars(2).typeString("12-2019:");
    typewriterP2.typeString("Koninklijk Atheneum Voskenslaan Gent").typeString("\n\n").typeString("- Economie Wetenschappen");
    typewriterSpan3.typeString("2019-2021:");
    typewriterP3.typeString("KU Leuven Gent").typeString("\n").typeString("- Architecture");
    typewriterSpan4.typeString("2021-2024:");
    typewriterP4.typeString("Odissee Gent").typeString("\n").typeString("- Web Design");
});
//SKILLS
skills.addEventListener("click", function() {
    clear();
    for(var i = 0; i < options.length; i++)options[i].style.pointerEvents = "none";
    timeout = setTimeout(function() {
        for(var i = 0; i < options.length; i++)options[i].style.pointerEvents = "auto";
    }, 5000);
    typewriterTitle.deleteAll().start();
    typewriterIntro.deleteAll().start();
    clearInterval(interact);
    typewriterTitle.deleteAll().pauseFor(200).typeString("Skills").start();
    typewriterSpan1.pauseFor(200).typeString("Three.js:");
    typewriterP1.typeString("\uD83E\uDD76 \uD83E\uDD76 \uD83E\uDD76");
    typewriterSpan2.pauseFor(400).typeString("CSS").deleteChars(3).typeString("SCSS:");
    typewriterP2.typeString("\uD83D\uDD25 \uD83D\uDD25 \uD83D\uDD25 \uD83D\uDD25 \uD83D\uDD25");
    typewriterSpan3.pauseFor(600).typeString("TypeScript:");
    typewriterP3.typeString("\uD83E\uDD76 \uD83E\uDD76 \uD83E\uDD76 \uD83E\uDD76");
    typewriterSpan4.pauseFor(800).typeString("Storybook:");
    typewriterP4.typeString("\uD83D\uDD25 \uD83D\uDD25 \uD83D\uDD25");
});
//EXPERIENCE
exp.addEventListener("click", function() {
    clear();
    for(var i = 0; i < options.length; i++)options[i].style.pointerEvents = "none";
    timeout = setTimeout(function() {
        for(var i = 0; i < options.length; i++)options[i].style.pointerEvents = "auto";
    }, 6000);
    typewriterTitle.deleteAll().start();
    typewriterIntro.deleteAll().start();
    clearInterval(interact);
    typewriterTitle.deleteAll().pauseFor(200).typeString("Experience").start();
    typewriterSpan1.pauseFor(200).typeString("Barman:");
    typewriterP1.typeString("Baracita");
    typewriterSpan2.pauseFor(400).typeString("Barman:");
    typewriterP2.typeString("Bowl Inn Sint-Martens-Latem");
    typewriterSpan3.pauseFor(600).typeString("Medewerker:");
    typewriterP3.typeString("Ramen & Peol");
    typewriterSpan4.pauseFor(800).typeString("Verkoopmedewerker:");
    typewriterP4.typeString("Bakkerij Aernoudt Sint Denijs");
});
//AWARDS
awards.addEventListener("click", function() {
    clear();
    clearTimeout(click);
    for(var i = 0; i < options.length; i++)options[i].style.pointerEvents = "none";
    timeout = setTimeout(function() {
        for(var i = 0; i < options.length; i++)options[i].style.pointerEvents = "auto";
    }, 6000);
    typewriterTitle.deleteAll().start();
    typewriterIntro.deleteAll().start();
    clearInterval(interact);
    typewriterTitle.deleteAll().pauseFor(200).typeString("Awards").start();
    typewriterSpan1.pauseFor(200).typeString("Hackaton Gent:");
    typewriterP1.typeString("7th place \uD83D\uDCAF");
    typewriterSpan2.pauseFor(400).typeString("Academy Award:(not really)").deleteChars(11);
    typewriterP2.typeString("1996 best actor");
    typewriterSpan3.pauseFor(600).typeString("Best Son award:");
    typewriterP3.typeString("My mother gave it to me...");
    typewriterSpan4.pauseFor(800).typeString("Digitaal VLaanderen");
    typewriterP4.typeString("1st place");
});

},{"./Typewriter":"eQV2H"}],"eQV2H":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
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
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
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
                    op = [
                        0
                    ];
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
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __classPrivateFieldSet = this && this.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = this && this.__classPrivateFieldGet || function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Typewriter_instances, _Typewriter_queue, _Typewriter_element, _Typewriter_loop, _Typewriter_typingSpeed, _Typewriter_deletingSpeed, _Typewriter_addToQueue;
exports.__esModule = true;
var Typewriter = /** @class */ function() {
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
    Typewriter.prototype.typeString = function(string) {
        var _this = this;
        __classPrivateFieldGet(this, _Typewriter_instances, "m", _Typewriter_addToQueue).call(this, function(resolve) {
            var i = 0;
            var interval = setInterval(function() {
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
    Typewriter.prototype.deleteChars = function(number) {
        var _this = this;
        __classPrivateFieldGet(this, _Typewriter_instances, "m", _Typewriter_addToQueue).call(this, function(resolve) {
            var i = 0;
            var interval = setInterval(function() {
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
    Typewriter.prototype.deleteAll = function(deleteSpeed) {
        var _this = this;
        if (deleteSpeed === void 0) deleteSpeed = __classPrivateFieldGet(this, _Typewriter_deletingSpeed, "f");
        __classPrivateFieldGet(this, _Typewriter_instances, "m", _Typewriter_addToQueue).call(this, function(resolve) {
            var interval = setInterval(function() {
                __classPrivateFieldGet(_this, _Typewriter_element, "f").innerText = __classPrivateFieldGet(_this, _Typewriter_element, "f").innerText.substring(0, __classPrivateFieldGet(_this, _Typewriter_element, "f").innerText.length - 1);
                if (__classPrivateFieldGet(_this, _Typewriter_element, "f").innerText.length === 0) {
                    clearInterval(interval);
                    resolve();
                }
            }, deleteSpeed);
        });
        return this;
    };
    Typewriter.prototype.pauseFor = function(duration) {
        __classPrivateFieldGet(this, _Typewriter_instances, "m", _Typewriter_addToQueue).call(this, function(resolve) {
            setTimeout(resolve, duration);
        });
        return this;
    };
    Typewriter.prototype.start = function() {
        return __awaiter(this, void 0, void 0, function() {
            var cb;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        cb = __classPrivateFieldGet(this, _Typewriter_queue, "f").shift();
                        _a.label = 1;
                    case 1:
                        if (!(cb != null)) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            cb()
                        ];
                    case 2:
                        _a.sent();
                        if (__classPrivateFieldGet(this, _Typewriter_loop, "f")) __classPrivateFieldGet(this, _Typewriter_queue, "f").push(cb);
                        cb = __classPrivateFieldGet(this, _Typewriter_queue, "f").shift();
                        return [
                            3 /*break*/ ,
                            1
                        ];
                    case 3:
                        return [
                            2 /*return*/ ,
                            this
                        ];
                }
            });
        });
    };
    return Typewriter;
}();
exports["default"] = Typewriter;
_Typewriter_queue = new WeakMap(), _Typewriter_element = new WeakMap(), _Typewriter_loop = new WeakMap(), _Typewriter_typingSpeed = new WeakMap(), _Typewriter_deletingSpeed = new WeakMap(), _Typewriter_instances = new WeakSet(), _Typewriter_addToQueue = function _Typewriter_addToQueue(cb) {
    __classPrivateFieldGet(this, _Typewriter_queue, "f").push(function() {
        return new Promise(cb);
    });
};

},{}]},["1xC6H","jJrGz","jzzmg"], "jzzmg", "parcelRequireecb3")

//# sourceMappingURL=index.b0336068.js.map
