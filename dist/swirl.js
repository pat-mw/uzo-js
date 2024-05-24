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
})({"coSfI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "1ec5c91e7a3e6b83";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dsCWj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// import './simplexNoise';
var _simplexNoise = require("./simplexNoise");
var _simplexNoiseDefault = parcelHelpers.interopDefault(_simplexNoise);
var _bgAnimUtil = require("./bgAnimUtil");
"use strict";
const particleCount = 700;
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const rangeY = 100;
const baseTTL = 50;
const rangeTTL = 150;
const baseSpeed = 0.1;
const rangeSpeed = 2;
const baseRadius = 1;
const rangeRadius = 4;
const baseHue = 220;
const rangeHue = 100;
const noiseSteps = 8;
const xOff = 0.00125;
const yOff = 0.00125;
const zOff = 0.0005;
const backgroundColor = "hsla(260,40%,5%,1)";
let container;
let canvas;
let ctx;
let center;
let gradient;
let tick;
let simplex;
let particleProps;
let positions;
let velocities;
let lifeSpans;
let speeds;
let sizes;
let hues;
const CANVAS_QUERY = ".bg-effect-canvas[bg-effect='swirl']";
function setup() {
    console.log("[bg-effect-swirl] initialising.");
    createCanvas();
    resize();
    initParticles();
    draw();
}
function initParticles() {
    tick = 0;
    simplex = new (0, _simplexNoiseDefault.default)();
    particleProps = new Float32Array(particlePropsLength);
    let i;
    for(i = 0; i < particlePropsLength; i += particlePropCount)initParticle(i);
}
function initParticle(i) {
    let x, y, vx, vy, life, ttl, speed, radius, hue;
    x = (0, _bgAnimUtil.rand)(canvas.a.width);
    y = center[1] + (0, _bgAnimUtil.randRange)(rangeY);
    vx = 0;
    vy = 0;
    life = 0;
    ttl = baseTTL + (0, _bgAnimUtil.rand)(rangeTTL);
    speed = baseSpeed + (0, _bgAnimUtil.rand)(rangeSpeed);
    radius = baseRadius + (0, _bgAnimUtil.rand)(rangeRadius);
    hue = baseHue + (0, _bgAnimUtil.rand)(rangeHue);
    particleProps.set([
        x,
        y,
        vx,
        vy,
        life,
        ttl,
        speed,
        radius,
        hue
    ], i);
}
function drawParticles() {
    let i;
    for(i = 0; i < particlePropsLength; i += particlePropCount)updateParticle(i);
}
function updateParticle(i) {
    let i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i, i8 = 7 + i, i9 = 8 + i;
    let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue;
    x = particleProps[i];
    y = particleProps[i2];
    n = simplex.noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * (0, _bgAnimUtil.TAU);
    vx = (0, _bgAnimUtil.lerp)(particleProps[i3], (0, _bgAnimUtil.cos)(n), 0.5);
    vy = (0, _bgAnimUtil.lerp)(particleProps[i4], (0, _bgAnimUtil.sin)(n), 0.5);
    life = particleProps[i5];
    ttl = particleProps[i6];
    speed = particleProps[i7];
    x2 = x + vx * speed;
    y2 = y + vy * speed;
    radius = particleProps[i8];
    hue = particleProps[i9];
    drawParticle(x, y, x2, y2, life, ttl, radius, hue);
    life++;
    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;
    (checkBounds(x, y) || life > ttl) && initParticle(i);
}
function drawParticle(x, y, x2, y2, life, ttl, radius, hue) {
    ctx.a.save();
    ctx.a.lineCap = "round";
    ctx.a.lineWidth = radius;
    ctx.a.strokeStyle = `hsla(${hue},100%,60%,${(0, _bgAnimUtil.fadeInOut)(life, ttl)})`;
    ctx.a.beginPath();
    ctx.a.moveTo(x, y);
    ctx.a.lineTo(x2, y2);
    ctx.a.stroke();
    ctx.a.closePath();
    ctx.a.restore();
}
function checkBounds(x, y) {
    return x > canvas.a.width || x < 0 || y > canvas.a.height || y < 0;
}
function createCanvas() {
    container = document.querySelector(CANVAS_QUERY);
    console.log("[bg-effect-swirl] found target container:", container);
    canvas = {
        a: document.createElement("canvas"),
        b: document.createElement("canvas")
    };
    canvas.b.style = `
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	`;
    container.appendChild(canvas.b);
    ctx = {
        a: canvas.a.getContext("2d"),
        b: canvas.b.getContext("2d")
    };
    center = [];
}
function resize() {
    const { innerWidth, innerHeight } = window;
    canvas.a.width = innerWidth;
    canvas.a.height = innerHeight;
    ctx.a.drawImage(canvas.b, 0, 0);
    canvas.b.width = innerWidth;
    canvas.b.height = innerHeight;
    ctx.b.drawImage(canvas.a, 0, 0);
    center[0] = 0.5 * canvas.a.width;
    center[1] = 0.5 * canvas.a.height;
}
function renderGlow() {
    ctx.b.save();
    ctx.b.filter = "blur(8px) brightness(200%)";
    ctx.b.globalCompositeOperation = "lighter";
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
    ctx.b.save();
    ctx.b.filter = "blur(4px) brightness(200%)";
    ctx.b.globalCompositeOperation = "lighter";
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
}
function renderToScreen() {
    ctx.b.save();
    ctx.b.globalCompositeOperation = "lighter";
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
}
function draw() {
    tick++;
    ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
    ctx.b.fillStyle = backgroundColor;
    ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height);
    drawParticles();
    renderGlow();
    renderToScreen();
    window.requestAnimationFrame(draw);
}
window.addEventListener("load", setup);
window.addEventListener("resize", resize);

},{"./bgAnimUtil":"dzFiH","./simplexNoise":"8JZaW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dzFiH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PI", ()=>PI);
parcelHelpers.export(exports, "cos", ()=>cos);
parcelHelpers.export(exports, "sin", ()=>sin);
parcelHelpers.export(exports, "abs", ()=>abs);
parcelHelpers.export(exports, "sqrt", ()=>sqrt);
parcelHelpers.export(exports, "pow", ()=>pow);
parcelHelpers.export(exports, "round", ()=>round);
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "atan2", ()=>atan2);
parcelHelpers.export(exports, "HALF_PI", ()=>HALF_PI);
parcelHelpers.export(exports, "TAU", ()=>TAU);
parcelHelpers.export(exports, "TO_RAD", ()=>TO_RAD);
parcelHelpers.export(exports, "floor", ()=>floor);
parcelHelpers.export(exports, "rand", ()=>rand);
parcelHelpers.export(exports, "randIn", ()=>randIn);
parcelHelpers.export(exports, "randRange", ()=>randRange);
parcelHelpers.export(exports, "fadeIn", ()=>fadeIn);
parcelHelpers.export(exports, "fadeOut", ()=>fadeOut);
parcelHelpers.export(exports, "fadeInOut", ()=>fadeInOut);
parcelHelpers.export(exports, "dist", ()=>dist);
parcelHelpers.export(exports, "angle", ()=>angle);
parcelHelpers.export(exports, "lerp", ()=>lerp);
const { PI, cos, sin, abs, sqrt, pow, round, random, atan2 } = Math;
const HALF_PI = 0.5 * PI;
const TAU = 2 * PI;
const TO_RAD = PI / 180;
const floor = (n)=>n | 0;
const rand = (n)=>n * random();
const randIn = (min, max)=>rand(max - min) + min;
const randRange = (n)=>n - rand(2 * n);
const fadeIn = (t, m)=>t / m;
const fadeOut = (t, m)=>(m - t) / m;
const fadeInOut = (t, m)=>{
    let hm = 0.5 * m;
    return abs((t + hm) % m - hm) / hm;
};
const dist = (x1, y1, x2, y2)=>sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
const angle = (x1, y1, x2, y2)=>atan2(y2 - y1, x2 - x1);
const lerp = (n1, n2, speed)=>(1 - speed) * n1 + speed * n2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8JZaW":[function(require,module,exports) {
!function() {
    "use strict";
    var r = .5 * (Math.sqrt(3) - 1), e = (3 - Math.sqrt(3)) / 6, t = 1 / 6, a = (Math.sqrt(5) - 1) / 4, o = (5 - Math.sqrt(5)) / 20;
    function i(r) {
        var e;
        e = "function" == typeof r ? r : r ? function() {
            var r = 0, e = 0, t = 0, a = 1, o = (i = 4022871197, function(r) {
                r = r.toString();
                for(var e = 0; e < r.length; e++){
                    var t = .02519603282416938 * (i += r.charCodeAt(e));
                    t -= i = t >>> 0, i = (t *= i) >>> 0, i += 4294967296 * (t -= i);
                }
                return 2.3283064365386963e-10 * (i >>> 0);
            });
            var i;
            r = o(" "), e = o(" "), t = o(" ");
            for(var n = 0; n < arguments.length; n++)(r -= o(arguments[n])) < 0 && (r += 1), (e -= o(arguments[n])) < 0 && (e += 1), (t -= o(arguments[n])) < 0 && (t += 1);
            return o = null, function() {
                var o = 2091639 * r + 2.3283064365386963e-10 * a;
                return r = e, e = t, t = o - (a = 0 | o);
            };
        }(r) : Math.random, this.p = n(e), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for(var t = 0; t < 512; t++)this.perm[t] = this.p[255 & t], this.permMod12[t] = this.perm[t] % 12;
    }
    function n(r) {
        var e, t = new Uint8Array(256);
        for(e = 0; e < 256; e++)t[e] = e;
        for(e = 0; e < 255; e++){
            var a = e + ~~(r() * (256 - e)), o = t[e];
            t[e] = t[a], t[a] = o;
        }
        return t;
    }
    i.prototype = {
        grad3: new Float32Array([
            1,
            1,
            0,
            -1,
            1,
            0,
            1,
            -1,
            0,
            -1,
            -1,
            0,
            1,
            0,
            1,
            -1,
            0,
            1,
            1,
            0,
            -1,
            -1,
            0,
            -1,
            0,
            1,
            1,
            0,
            -1,
            1,
            0,
            1,
            -1,
            0,
            -1,
            -1
        ]),
        grad4: new Float32Array([
            0,
            1,
            1,
            1,
            0,
            1,
            1,
            -1,
            0,
            1,
            -1,
            1,
            0,
            1,
            -1,
            -1,
            0,
            -1,
            1,
            1,
            0,
            -1,
            1,
            -1,
            0,
            -1,
            -1,
            1,
            0,
            -1,
            -1,
            -1,
            1,
            0,
            1,
            1,
            1,
            0,
            1,
            -1,
            1,
            0,
            -1,
            1,
            1,
            0,
            -1,
            -1,
            -1,
            0,
            1,
            1,
            -1,
            0,
            1,
            -1,
            -1,
            0,
            -1,
            1,
            -1,
            0,
            -1,
            -1,
            1,
            1,
            0,
            1,
            1,
            1,
            0,
            -1,
            1,
            -1,
            0,
            1,
            1,
            -1,
            0,
            -1,
            -1,
            1,
            0,
            1,
            -1,
            1,
            0,
            -1,
            -1,
            -1,
            0,
            1,
            -1,
            -1,
            0,
            -1,
            1,
            1,
            1,
            0,
            1,
            1,
            -1,
            0,
            1,
            -1,
            1,
            0,
            1,
            -1,
            -1,
            0,
            -1,
            1,
            1,
            0,
            -1,
            1,
            -1,
            0,
            -1,
            -1,
            1,
            0,
            -1,
            -1,
            -1,
            0
        ]),
        noise2D: function(t, a) {
            var o, i, n = this.permMod12, f = this.perm, s = this.grad3, v = 0, h = 0, l = 0, u = (t + a) * r, d = Math.floor(t + u), p = Math.floor(a + u), M = (d + p) * e, m = t - (d - M), c = a - (p - M);
            m > c ? (o = 1, i = 0) : (o = 0, i = 1);
            var y = m - o + e, w = c - i + e, g = m - 1 + 2 * e, A = c - 1 + 2 * e, x = 255 & d, q = 255 & p, D = .5 - m * m - c * c;
            if (D >= 0) {
                var S = 3 * n[x + f[q]];
                v = (D *= D) * D * (s[S] * m + s[S + 1] * c);
            }
            var U = .5 - y * y - w * w;
            if (U >= 0) {
                var b = 3 * n[x + o + f[q + i]];
                h = (U *= U) * U * (s[b] * y + s[b + 1] * w);
            }
            var F = .5 - g * g - A * A;
            if (F >= 0) {
                var N = 3 * n[x + 1 + f[q + 1]];
                l = (F *= F) * F * (s[N] * g + s[N + 1] * A);
            }
            return 70 * (v + h + l);
        },
        noise3D: function(r, e, a) {
            var o, i, n, f, s, v, h, l, u, d, p = this.permMod12, M = this.perm, m = this.grad3, c = (r + e + a) * (1 / 3), y = Math.floor(r + c), w = Math.floor(e + c), g = Math.floor(a + c), A = (y + w + g) * t, x = r - (y - A), q = e - (w - A), D = a - (g - A);
            x >= q ? q >= D ? (s = 1, v = 0, h = 0, l = 1, u = 1, d = 0) : x >= D ? (s = 1, v = 0, h = 0, l = 1, u = 0, d = 1) : (s = 0, v = 0, h = 1, l = 1, u = 0, d = 1) : q < D ? (s = 0, v = 0, h = 1, l = 0, u = 1, d = 1) : x < D ? (s = 0, v = 1, h = 0, l = 0, u = 1, d = 1) : (s = 0, v = 1, h = 0, l = 1, u = 1, d = 0);
            var S = x - s + t, U = q - v + t, b = D - h + t, F = x - l + 2 * t, N = q - u + 2 * t, C = D - d + 2 * t, P = x - 1 + .5, T = q - 1 + .5, _ = D - 1 + .5, j = 255 & y, k = 255 & w, z = 255 & g, B = .6 - x * x - q * q - D * D;
            if (B < 0) o = 0;
            else {
                var E = 3 * p[j + M[k + M[z]]];
                o = (B *= B) * B * (m[E] * x + m[E + 1] * q + m[E + 2] * D);
            }
            var G = .6 - S * S - U * U - b * b;
            if (G < 0) i = 0;
            else {
                var H = 3 * p[j + s + M[k + v + M[z + h]]];
                i = (G *= G) * G * (m[H] * S + m[H + 1] * U + m[H + 2] * b);
            }
            var I = .6 - F * F - N * N - C * C;
            if (I < 0) n = 0;
            else {
                var J = 3 * p[j + l + M[k + u + M[z + d]]];
                n = (I *= I) * I * (m[J] * F + m[J + 1] * N + m[J + 2] * C);
            }
            var K = .6 - P * P - T * T - _ * _;
            if (K < 0) f = 0;
            else {
                var L = 3 * p[j + 1 + M[k + 1 + M[z + 1]]];
                f = (K *= K) * K * (m[L] * P + m[L + 1] * T + m[L + 2] * _);
            }
            return 32 * (o + i + n + f);
        },
        noise4D: function(r, e, t, i) {
            var n, f, s, v, h, l, u, d, p, M, m, c, y, w, g, A, x, q = this.perm, D = this.grad4, S = (r + e + t + i) * a, U = Math.floor(r + S), b = Math.floor(e + S), F = Math.floor(t + S), N = Math.floor(i + S), C = (U + b + F + N) * o, P = r - (U - C), T = e - (b - C), _ = t - (F - C), j = i - (N - C), k = 0, z = 0, B = 0, E = 0;
            P > T ? k++ : z++, P > _ ? k++ : B++, P > j ? k++ : E++, T > _ ? z++ : B++, T > j ? z++ : E++, _ > j ? B++ : E++;
            var G = P - (l = k >= 3 ? 1 : 0) + o, H = T - (u = z >= 3 ? 1 : 0) + o, I = _ - (d = B >= 3 ? 1 : 0) + o, J = j - (p = E >= 3 ? 1 : 0) + o, K = P - (M = k >= 2 ? 1 : 0) + 2 * o, L = T - (m = z >= 2 ? 1 : 0) + 2 * o, O = _ - (c = B >= 2 ? 1 : 0) + 2 * o, Q = j - (y = E >= 2 ? 1 : 0) + 2 * o, R = P - (w = k >= 1 ? 1 : 0) + 3 * o, V = T - (g = z >= 1 ? 1 : 0) + 3 * o, W = _ - (A = B >= 1 ? 1 : 0) + 3 * o, X = j - (x = E >= 1 ? 1 : 0) + 3 * o, Y = P - 1 + 4 * o, Z = T - 1 + 4 * o, $ = _ - 1 + 4 * o, rr = j - 1 + 4 * o, er = 255 & U, tr = 255 & b, ar = 255 & F, or = 255 & N, ir = .6 - P * P - T * T - _ * _ - j * j;
            if (ir < 0) n = 0;
            else {
                var nr = q[er + q[tr + q[ar + q[or]]]] % 32 * 4;
                n = (ir *= ir) * ir * (D[nr] * P + D[nr + 1] * T + D[nr + 2] * _ + D[nr + 3] * j);
            }
            var fr = .6 - G * G - H * H - I * I - J * J;
            if (fr < 0) f = 0;
            else {
                var sr = q[er + l + q[tr + u + q[ar + d + q[or + p]]]] % 32 * 4;
                f = (fr *= fr) * fr * (D[sr] * G + D[sr + 1] * H + D[sr + 2] * I + D[sr + 3] * J);
            }
            var vr = .6 - K * K - L * L - O * O - Q * Q;
            if (vr < 0) s = 0;
            else {
                var hr = q[er + M + q[tr + m + q[ar + c + q[or + y]]]] % 32 * 4;
                s = (vr *= vr) * vr * (D[hr] * K + D[hr + 1] * L + D[hr + 2] * O + D[hr + 3] * Q);
            }
            var lr = .6 - R * R - V * V - W * W - X * X;
            if (lr < 0) v = 0;
            else {
                var ur = q[er + w + q[tr + g + q[ar + A + q[or + x]]]] % 32 * 4;
                v = (lr *= lr) * lr * (D[ur] * R + D[ur + 1] * V + D[ur + 2] * W + D[ur + 3] * X);
            }
            var dr = .6 - Y * Y - Z * Z - $ * $ - rr * rr;
            if (dr < 0) h = 0;
            else {
                var pr = q[er + 1 + q[tr + 1 + q[ar + 1 + q[or + 1]]]] % 32 * 4;
                h = (dr *= dr) * dr * (D[pr] * Y + D[pr + 1] * Z + D[pr + 2] * $ + D[pr + 3] * rr);
            }
            return 27 * (n + f + s + v + h);
        }
    }, i._buildPermutationTable = n, "undefined" != typeof define && define.amd && define(function() {
        return i;
    }), exports.SimplexNoise = i, module.exports = i;
}();

},{}]},["coSfI","dsCWj"], "dsCWj", "parcelRequire9abf")

//# sourceMappingURL=swirl.js.map
