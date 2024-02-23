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
})({"hbj89":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
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

},{}],"igcvL":[function(require,module,exports) {
// Set Toastr options
toastr.options.progressBar = true; // Enable progress bar
toastr.options.timeOut = 3000; // Timeout in milliseconds
toastr.options.positionClass = "toast-bottom-center"; // Position bottom middle
toastr.options.showMethod = "fadeIn"; // Animation for showing toast messages
toastr.options.hideMethod = "fadeOut"; // Animation for hiding toast messages
// --- Handle Window Load ---
window.onload = function() {
    checkActiveTabFromUrl();
    window.artistModalClick = artistModalClick;
};
// --- Process Document Ready ----
$(document).ready(function() {
    handleOtherInputs();
    handleSectionArtistScroll();
    handleTabScroll();
});
// --- DOM Content Loaded ---
document.addEventListener("DOMContentLoaded", function() {
    prepateCMSLoadFunctions();
});
// --- Check Active Tab from URL Hash ---
function checkActiveTabFromUrl() {
    // Get the hash part of the URL (e.g., #tab1=1&tab2=2)
    const hashParams = window.location.hash.slice(1).split("&");
    const allTabs = $("[tab]");
    console.log("All Tabs:", allTabs);
    allTabs.each(function() {
        const tabName = $(this).attr("tab");
        console.log("Checking Tab:", tabName);
        // Check if the hash params contain the current tabName
        if (hashParams.includes(tabName)) {
            // Click the tab if the tabName matches a hash param
            console.log("Clicking Tab:", tabName);
            $(this).click();
            // If you want to handle multiple matches, remove the return statement
            return false;
        }
    });
}
// --- Handle form 'other' inputs ----
function handleOtherInputs(input, otherInput) {
    // Hide all divs with attribute 'data-other-reveal' on document load
    $("[data-other-reveal]").hide();
    // Handle radio button change
    $("input[type=radio]").on("change", function() {
        // Hide all divs with attribute 'data-other-reveal'
        $("[data-other-reveal]").hide();
        // Get the group name of the selected radio button
        var groupName = $(this).attr("name");
        // Find the div with the corresponding data-other-reveal attribute
        var targetDiv = $('[data-other-reveal="' + groupName + '"]');
        // If the selected radio button's value is "Other", show the corresponding div
        if ($(this).val() === "Other") targetDiv.show();
    });
}
// --- Handle Scroll on Artist Tag click ---
function handleSectionArtistScroll() {
    var sectionArtistFilters = $("#section-artist-filters");
    $("[scroll-to-artist-filters]").click(function() {
        var sectionTop = sectionArtistFilters.offset().top - 4.5 * parseFloat($("html").css("font-size"));
        $("html, body").animate({
            scrollTop: sectionTop
        }, 1000);
    });
}
// --- Handle Scroll on Tab Click ---
function handleTabScroll() {
    var hero = $("#hero");
    var tabsSectionOffset = $("#tabs-section-offset");
    $("[tab]").click(function() {
        // Get the offset of the #hero section
        var heroBottom = hero.offset().top + hero.outerHeight() + (parseFloat(tabsSectionOffset.css("margin-top")) || 0) + 5;
        // Scroll to the adjusted bottom of the #hero section with easing
        $("html, body").animate({
            scrollTop: heroBottom
        }, 1000);
    });
}
// --- Handles New Artist Cards Loading (BG Color, Backup Image) ---
function prepateCMSLoadFunctions() {
    // function that checks and applies backup image if main immage is missing
    // Function to check and apply backup image
    function checkAndApplyBackupImage(element) {
        // Find the backup image source from the element
        var backupImage = element.querySelector("[data-image-backup]");
        var backupSrc = backupImage ? backupImage.getAttribute("src") : null;
        // Find images with the data-image attribute
        var images = element.querySelectorAll("[data-image]");
        var placeholderUrl = "https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg";
        // check each image
        images.forEach(function(image) {
            var src = image.getAttribute("src");
            // Check if the image has already loaded
            if (image.complete && src !== placeholderUrl) {
                console.log("Image already loaded");
                return; // Skip applying backup source if image is already loaded
            }
            if (src === placeholderUrl) {
                console.log("found placeholder image");
                if (!backupSrc || backupSrc === placeholderUrl) {
                    console.log("backup undefined, unable to apply. backup: ", backupSrc, " src: ", src);
                    return;
                }
                image.setAttribute("src", backupSrc);
                console.log(`Applied backup image src: ${backupSrc}`);
            }
        });
    }
    // Function to set background color based on data-artist-type
    function setBackgroundColor(element, type) {
        console.log(`Setting background color for type: ${type}`);
        switch(type){
            case "Visual Artist":
                element.style.backgroundColor = "#10225e";
                break;
            case "Musician":
                element.style.backgroundColor = "#a7612a";
                break;
            case "DJ":
                element.style.backgroundColor = "#326747";
                break;
            case "Band":
                element.style.backgroundColor = "#282906";
                break;
            case "Dance":
                element.style.backgroundColor = "#f0dfb4";
                break;
            case "Other":
                element.style.backgroundColor = "#812438";
                break;
            default:
                break;
        }
        // Call the function to check and apply backup image
        checkAndApplyBackupImage(element);
    }
    // Function to observe mutations and apply background color
    function observeMutations(mutationsList, observer) {
        mutationsList.forEach(function(mutation) {
            if (mutation.type === "childList") {
                console.log("new child detected");
                // New child nodes were added, apply background color
                mutation.addedNodes.forEach(function(parentNode) {
                    if (parentNode.nodeType === 1) {
                        // Select only direct children with 'data-artist-type'
                        var directChildren = parentNode.children;
                        for(var i = 0; i < directChildren.length; i++){
                            var element = directChildren[i];
                            if (element.nodeType === 1 && element.hasAttribute("data-artist-type")) {
                                console.log("setting background");
                                var attr_artistType = element.getAttribute("data-artist-type");
                                setBackgroundColor(element, attr_artistType);
                            }
                        }
                    }
                });
            }
        });
    }
    // run for initial nodes
    var initialNodes = document.querySelectorAll("[data-artist-type]");
    for(var i = 0; i < initialNodes.length; i++){
        var element = initialNodes[i];
        var attr_artistType = element.getAttribute("data-artist-type");
        setBackgroundColor(element, attr_artistType);
    }
    // Select the target nodes based on the 'data-artist-collection' attribute
    var targetNodes = document.querySelectorAll("[data-artist-collection]");
    // Options for the observer
    var config = {
        childList: true
    };
    // Create a MutationObserver for each target node
    targetNodes.forEach(function(targetNode) {
        var observer = new MutationObserver(function(mutationsList, observer) {
            observeMutations(mutationsList, observer);
        });
        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    });
}
// --- Handle Artist Modal Click ---
function artistModalClick(slug = "", name = "", type = "", image = "", imageBackup = "", spotifyEmbed = "", soundcloudEmbed = "", videoEmbed = "") {
    let imageEl = $("[artist-modal-image]");
    let nameEl = $("[artist-modal-name]");
    let typeEl = $("[artist-modal-type]");
    let videoEmbedEl = $("[artist-modal-video-embed]");
    let videoIframeContainerEl = $("[artist-modal-video-embed-container]");
    let spotifyEmbedEl = $("[artist-modal-spotify-embed]");
    let soundcloudEmbedEl = $("[artist-modal-soundcloud-embed]");
    let bioEl = $("[artist-modal-bio]");
    let btnModalAddArtist = $("[data-btn-modal-add-artist]");
    let formFieldArtistRequests = $("[form-field-artist-requests]");
    var placeholderUrl = "https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg";
    console.log(`opening artist modal for: ${name}`);
    var imageChoice = "";
    if (image === "" || image === placeholderUrl) {
        if (imageBackup === placeholderUrl) imageChoice = imageBackup;
        else imageChoice = "";
    } else imageChoice = image;
    console.log(`image choice: ${imageChoice}`);
    imageEl.attr("src", imageChoice);
    // handle embeds
    if (spotifyEmbed === "") spotifyEmbedEl.hide();
    else {
        console.log(`spotifyEmbed: ${spotifyEmbed}`);
        spotifyEmbedEl.show();
        spotifyEmbedEl.attr("src", spotifyEmbed);
    }
    if (soundcloudEmbed === "") soundcloudEmbedEl.hide();
    else {
        console.log(`soundcloudEmbed: ${soundcloudEmbed}`);
        soundcloudEmbedEl.show();
        soundcloudEmbedEl.attr("src", soundcloudEmbed);
    }
    nameEl.text(name);
    typeEl.text(type);
    // Handle Bio
    // need to pull bio from rich text field with attribute [artist-bio] = "slug"
    let selector = `[artist-bio="${slug}"]`;
    let bioExtracted = $(selector).text();
    console.log(`Bio: ${bioExtracted}`);
    bioEl.text(bioExtracted);
    // Handle Video Embed
    // Check if attr_videoId is set or empty
    if (videoEmbed !== "") {
        let attr_videoId = videoEmbed;
        // If attr_videoId is set, show the iframe container
        videoIframeContainerEl.show();
        // Set the srcdoc attribute for the iframe
        let srcDoc = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href="https://www.youtube.com/embed/${attr_videoId}?autoplay=0"><img src="https://img.youtube.com/vi/${attr_videoId}/hqdefault.jpg"><span>\u{25B6}</span></a>`;
        // let srcDoc = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}.aspect-ratio-container{position:relative;padding-bottom:56.25%; /* 16:9 aspect ratio (9 / 16 * 100) */}.responsive-iframe{position:absolute;width:100%;height:100%;top:0;left:0;}</style><div class="aspect-ratio-container"><iframe src="https://www.youtube.com/embed/${attr_videoId}?autoplay=1" allowfullscreen class="responsive-iframe"></iframe></div>`;
        videoEmbedEl.attr("srcdoc", srcDoc);
    } else // If attr_videoId is empty, hide the iframe container
    videoIframeContainerEl.hide();
    // Remove any previously attached click event handlers
    btnModalAddArtist.off("click");
    // Add a click event handler using jQuery
    btnModalAddArtist.on("click", function() {
        console.log(`Adding artist: ${name} to booking form`);
        // Handle form field
        formFieldArtistRequests.val(formFieldArtistRequests.val() + `${name}, `);
        toastr.success(`Added artist: ${name} to booking form`);
    });
    // SHOW MODAL
    console.log(`clicking modal btn for: ${name}`);
    document.getElementById("artist-modal-open-btn").click();
}

},{}]},["hbj89","igcvL"], "igcvL", "parcelRequire9abf")

//# sourceMappingURL=app.js.map
