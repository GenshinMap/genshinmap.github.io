(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[778],{

/***/ 400:
/***/ (function() {

"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var t=/\((.*)\)/.exec(this.toString());return t?t[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(t,r){return r=this.concat.apply([],this),t>1&&r.some(Array.isArray)?r.flat(t-1):r},Array.prototype.flatMap=function(t,r){return this.map(t,r).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(t){if("function"!=typeof t)return this.then(t,t);var r=this.constructor||Promise;return this.then(function(o){return r.resolve(t()).then(function(){return o})},function(o){return r.resolve(t()).then(function(){throw o})})});


/***/ }),

/***/ 2771:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  var headEl = document.getElementsByTagName('head')[0];
  var headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (false) {}

  var headCount = Number(headCountEl.content);
  var oldTags = [];

  for (var i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  var newTags = components.map(reactElementToDOM).filter(function (newTag) {
    for (var k = 0, len = oldTags.length; k < len; k++) {
      var oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(function (t) {
    return t.parentNode.removeChild(t);
  });
  newTags.forEach(function (t) {
    return headEl.insertBefore(t, headCountEl);
  });
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  var updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: function updateHead(head) {
      var promise = updatePromise = Promise.resolve().then(function () {
        if (promise !== updatePromise) return;
        updatePromise = null;
        var tags = {};
        head.forEach(function (h) {
          var components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        var titleComponent = tags.title ? tags.title[0] : null;
        var title = '';

        if (titleComponent) {
          var children = titleComponent.props.children;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(function (type) {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ 7403:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(809);

var _asyncToGenerator = __webpack_require__(8561);

var _classCallCheck = __webpack_require__(2553);

var _createClass = __webpack_require__(2012);

var _inherits = __webpack_require__(9807);

var _possibleConstructorReturn = __webpack_require__(7690);

var _getPrototypeOf = __webpack_require__(9828);

var _slicedToArray = __webpack_require__(3848);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireWildcard = __webpack_require__(9448);

var _interopRequireDefault = __webpack_require__(2426);

exports.__esModule = true;
exports.render = render;
exports.renderError = renderError;
exports.default = exports.emitter = exports.router = exports.version = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(9566));

__webpack_require__(400);

var _react = _interopRequireDefault(__webpack_require__(7294));

var _reactDom = _interopRequireDefault(__webpack_require__(3935));

var _headManagerContext = __webpack_require__(4287);

var _mitt = _interopRequireDefault(__webpack_require__(7332));

var _routerContext = __webpack_require__(1642);

var _router = __webpack_require__(1689);

var _isDynamic = __webpack_require__(3288);

var querystring = _interopRequireWildcard(__webpack_require__(4915));

var envConfig = _interopRequireWildcard(__webpack_require__(9186));

var _utils = __webpack_require__(3937);

var _portal = __webpack_require__(1567);

var _headManager = _interopRequireDefault(__webpack_require__(2771));

var _pageLoader = _interopRequireDefault(__webpack_require__(7365));

var _performanceRelayer = _interopRequireDefault(__webpack_require__(4829));

var _routeAnnouncer = __webpack_require__(6975);

var _router2 = __webpack_require__(2441);
/* global location */


var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "10.2.0";
exports.version = version;

var looseToArray = function looseToArray(input) {
  return [].slice.call(input);
};

var hydrateProps = data.props,
    hydrateErr = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds,
    isFallback = data.isFallback,
    locale = data.locale,
    locales = data.locales,
    domainLocales = data.domainLocales,
    isPreview = data.isPreview;
var defaultLocale = data.defaultLocale;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = "".concat(prefix, "/_next/"); //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils.getURL)(); // make sure not to attempt stripping basePath for 404s

if ((0, _router.hasBasePath)(asPath)) {
  asPath = (0, _router.delBasePath)(asPath);
}

if (false) { var detectedDomain, localePathResult, parsedAs, _require4, formatUrl, _require3, parseRelativeUrl, _require2, detectDomainLocale, _require, normalizeLocalePath; }

if (false) { var _require5, initScriptLoader; }

var pageLoader = new _pageLoader["default"](buildId, prefix);

var register = function register(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  return pageLoader.routeLoader.onEntrypoint(r, f);
};

if (window.__NEXT_P) {
  // Defer page registration for another tick. This will increase the overall
  // latency in hydrating the page, but reduce the total blocking time.
  window.__NEXT_P.map(function (p) {
    return setTimeout(function () {
      return register(p);
    }, 0);
  });
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var headManager = (0, _headManager["default"])();
var appElement = document.getElementById('__next');

var _lastRenderReject;

var webpackHMR;
var router;
exports.router = router;
var CachedApp, onPerfEntry;

var Container = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(componentErr, info) {
      this.props.fn(componentErr, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash(); // We need to replace the router state if:
      // - the page was (auto) exported and has a query string or search (hash)
      // - it was auto exported and is a dynamic route (to provide params)
      // - if it is a client-side skeleton (fallback render)

      if (router.isSsr && // We don't update for 404 requests as this can modify
      // the asPath unexpectedly e.g. adding basePath when
      // it wasn't originally present
      page !== '/404' && !(page === '/_error' && hydrateProps && hydrateProps.pageProps && hydrateProps.pageProps.statusCode === 404) && (isFallback || data.nextExport && ((0, _isDynamic.isDynamicRoute)(router.pathname) || location.search || false) || hydrateProps && hydrateProps.__N_SSG && (location.search || false))) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + String(querystring.assign(querystring.urlQueryToSearchParams(router.query), new URLSearchParams(location.search))), asPath, {
          // @ts-ignore
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1,
          // Fallback pages must trigger the data fetch, so the transition is
          // not shallow.
          // Other pages (strictly updating query) happens shallowly, as data
          // requirements would already be present.
          shallow: !isFallback
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        return this.props.children;
      } else { var _require6, ReactDevOverlay; }
    }
  }]);

  return Container;
}(_react["default"].Component);

var emitter = (0, _mitt["default"])();
exports.emitter = emitter;
var CachedComponent;

var _default = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var opts,
        initialErr,
        appEntrypoint,
        app,
        mod,
        pageEntrypoint,
        _require7,
        isValidElementType,
        _require8,
        getNodeError,
        renderCtx,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};

            // This makes sure this specific lines are removed in production
            if (false) {}

            initialErr = hydrateErr;
            _context.prev = 3;
            _context.next = 6;
            return pageLoader.routeLoader.whenEntrypoint('/_app');

          case 6:
            appEntrypoint = _context.sent;

            if (!('error' in appEntrypoint)) {
              _context.next = 9;
              break;
            }

            throw appEntrypoint.error;

          case 9:
            app = appEntrypoint.component, mod = appEntrypoint.exports;
            CachedApp = app;

            if (mod && mod.reportWebVitals) {
              onPerfEntry = function onPerfEntry(_ref4) {
                var id = _ref4.id,
                    name = _ref4.name,
                    startTime = _ref4.startTime,
                    value = _ref4.value,
                    duration = _ref4.duration,
                    entryType = _ref4.entryType,
                    entries = _ref4.entries;
                // Combines timestamp with random number for unique ID
                var uniqueID = "".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                var perfStartEntry;

                if (entries && entries.length) {
                  perfStartEntry = entries[0].startTime;
                }

                mod.reportWebVitals({
                  id: id || uniqueID,
                  name: name,
                  startTime: startTime || perfStartEntry,
                  value: value == null ? duration : value,
                  label: entryType === 'mark' || entryType === 'measure' ? 'custom' : 'web-vital'
                });
              };
            }

            if (true) {
              _context.next = 16;
              break;
            }

            _context.t0 = {
              error: hydrateErr
            };
            _context.next = 19;
            break;

          case 16:
            _context.next = 18;
            return pageLoader.routeLoader.whenEntrypoint(page);

          case 18:
            _context.t0 = _context.sent;

          case 19:
            pageEntrypoint = _context.t0;

            if (!('error' in pageEntrypoint)) {
              _context.next = 22;
              break;
            }

            throw pageEntrypoint.error;

          case 22:
            CachedComponent = pageEntrypoint.component;

            if (true) {
              _context.next = 27;
              break;
            }

            _require7 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), isValidElementType = _require7.isValidElementType;

            if (isValidElementType(CachedComponent)) {
              _context.next = 27;
              break;
            }

            throw new Error("The default export is not a React Component in page: \"".concat(page, "\""));

          case 27:
            _context.next = 32;
            break;

          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](3);
            // This catches errors like throwing in the top level of a module
            initialErr = _context.t1;

          case 32:
            if (false) {}

            if (!window.__NEXT_PRELOADREADY) {
              _context.next = 36;
              break;
            }

            _context.next = 36;
            return window.__NEXT_PRELOADREADY(dynamicIds);

          case 36:
            exports.router = router = (0, _router2.createRouter)(page, query, asPath, {
              initialProps: hydrateProps,
              pageLoader: pageLoader,
              App: CachedApp,
              Component: CachedComponent,
              wrapApp: wrapApp,
              err: initialErr,
              isFallback: Boolean(isFallback),
              subscription: function subscription(info, App, scroll) {
                return render(Object.assign({}, info, {
                  App: App,
                  scroll: scroll
                }));
              },
              locale: locale,
              locales: locales,
              defaultLocale: defaultLocale,
              domainLocales: domainLocales,
              isPreview: isPreview
            });
            renderCtx = {
              App: CachedApp,
              initial: true,
              Component: CachedComponent,
              props: hydrateProps,
              err: initialErr
            };

            if (false) {}

            render(renderCtx);
            return _context.abrupt("return", emitter);

          case 43:
            return _context.abrupt("return", {
              emitter: emitter,
              render: render,
              renderCtx: renderCtx
            });

          case 44:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 29]]);
  }));

  return function _default() {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = _default;

function render(_x) {
  return _render.apply(this, arguments);
} // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(renderingProps) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!renderingProps.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(renderingProps);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(renderingProps);

          case 7:
            _context2.next = 16;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);

            if (!_context2.t0.cancelled) {
              _context2.next = 13;
              break;
            }

            throw _context2.t0;

          case 13:
            if (false) {}

            _context2.next = 16;
            return renderError((0, _extends2["default"])({}, renderingProps, {
              err: _context2.t0
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

function renderError(renderErrorProps) {
  var App = renderErrorProps.App,
      err = renderErrorProps.err; // In development runtime errors are caught by our overlay
  // In production we catch runtime errors using componentDidCatch which will trigger renderError

  if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


  console.error(err);
  return pageLoader.loadPage('/_error').then(function (_ref5) {
    var ErrorComponent = _ref5.page,
        styleSheets = _ref5.styleSheets;
    // In production we do a normal render with the `ErrorComponent` as component.
    // If we've gotten here upon initial render, we can use the props from the server.
    // Otherwise, we need to call `getInitialProps` on `App` before mounting.
    var AppTree = wrapApp(App);
    var appCtx = {
      Component: ErrorComponent,
      AppTree: AppTree,
      router: router,
      ctx: {
        err: err,
        pathname: page,
        query: query,
        asPath: asPath,
        AppTree: AppTree
      }
    };
    return Promise.resolve(renderErrorProps.props ? renderErrorProps.props : (0, _utils.loadGetInitialProps)(App, appCtx)).then(function (initProps) {
      return doRender((0, _extends2["default"])({}, renderErrorProps, {
        err: err,
        Component: ErrorComponent,
        styleSheets: styleSheets,
        props: initProps
      }));
    });
  });
}

var reactRoot = null;
var shouldHydrate = typeof _reactDom["default"].hydrate === 'function';

function renderReactElement(domEl, fn) {
  // mark start of hydrate/render
  if (_utils.ST) {
    performance.mark('beforeRender');
  }

  var reactEl = fn(shouldHydrate ? markHydrateComplete : markRenderComplete);

  if (false) { var createRootName; } else {
    // The check for `.hydrate` is there to support React alternatives like preact
    if (shouldHydrate) {
      _reactDom["default"].hydrate(reactEl, domEl);

      shouldHydrate = false;
    } else {
      _reactDom["default"].render(reactEl, domEl);
    }
  }
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate'); // mark end of hydration

  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender'); // mark end of render

  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');
  if (!navStartEntries.length) return;
  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
  ['Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function clearMarks() {
  ;
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
}

function AppContainer(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    fn: function fn(error) {
      return renderError({
        App: CachedApp,
        err: error
      })["catch"](function (err) {
        return console.error('Error rendering page: ', err);
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router2.makePublicRouterInstance)(router)
  }, /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: headManager
  }, children)));
}

var wrapApp = function wrapApp(App) {
  return function (wrappedAppProps) {
    var appProps = (0, _extends2["default"])({}, wrappedAppProps, {
      Component: CachedComponent,
      err: hydrateErr,
      router: router
    });
    return /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps));
  };
};

var lastAppProps;

function doRender(input) {
  var App = input.App,
      Component = input.Component,
      props = input.props,
      err = input.err;
  var styleSheets = 'initial' in input ? undefined : input.styleSheets;
  Component = Component || lastAppProps.Component;
  props = props || lastAppProps.props;
  var appProps = (0, _extends2["default"])({}, props, {
    Component: Component,
    err: err,
    router: router
  }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

  lastAppProps = appProps;
  var canceled = false;
  var resolvePromise;
  var renderPromise = new Promise(function (resolve, reject) {
    if (_lastRenderReject) {
      _lastRenderReject();
    }

    resolvePromise = function resolvePromise() {
      _lastRenderReject = null;
      resolve();
    };

    _lastRenderReject = function lastRenderReject() {
      canceled = true;
      _lastRenderReject = null;
      var error = new Error('Cancel rendering route');
      error.cancelled = true;
      reject(error);
    };
  }); // This function has a return type to ensure it doesn't start returning a
  // Promise. It should remain synchronous.

  function onStart() {
    if (!styleSheets || // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
    false) {
      return false;
    }

    var currentStyleTags = looseToArray(document.querySelectorAll('style[data-n-href]'));
    var currentHrefs = new Set(currentStyleTags.map(function (tag) {
      return tag.getAttribute('data-n-href');
    }));
    var noscript = document.querySelector('noscript[data-n-css]');
    var nonce = noscript == null ? void 0 : noscript.getAttribute('data-n-css');
    styleSheets.forEach(function (_ref7) {
      var href = _ref7.href,
          text = _ref7.text;

      if (!currentHrefs.has(href)) {
        var styleTag = document.createElement('style');
        styleTag.setAttribute('data-n-href', href);
        styleTag.setAttribute('media', 'x');

        if (nonce) {
          styleTag.setAttribute('nonce', nonce);
        }

        document.head.appendChild(styleTag);
        styleTag.appendChild(document.createTextNode(text));
      }
    });
    return true;
  }

  function onHeadCommit() {
    if ( // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
     true && // We can skip this during hydration. Running it wont cause any harm, but
    // we may as well save the CPU cycles:
    styleSheets && // Ensure this render was not canceled
    !canceled) {
      var desiredHrefs = new Set(styleSheets.map(function (s) {
        return s.href;
      }));
      var currentStyleTags = looseToArray(document.querySelectorAll('style[data-n-href]'));
      var currentHrefs = currentStyleTags.map(function (tag) {
        return tag.getAttribute('data-n-href');
      }); // Toggle `<style>` tags on or off depending on if they're needed:

      for (var idx = 0; idx < currentHrefs.length; ++idx) {
        if (desiredHrefs.has(currentHrefs[idx])) {
          currentStyleTags[idx].removeAttribute('media');
        } else {
          currentStyleTags[idx].setAttribute('media', 'x');
        }
      } // Reorder styles into intended order:


      var referenceNode = document.querySelector('noscript[data-n-css]');

      if ( // This should be an invariant:
      referenceNode) {
        styleSheets.forEach(function (_ref8) {
          var href = _ref8.href;
          var targetTag = document.querySelector("style[data-n-href=\"".concat(href, "\"]"));

          if ( // This should be an invariant:
          targetTag) {
            referenceNode.parentNode.insertBefore(targetTag, referenceNode.nextSibling);
            referenceNode = targetTag;
          }
        });
      } // Finally, clean up server rendered stylesheets:


      looseToArray(document.querySelectorAll('link[data-n-p]')).forEach(function (el) {
        el.parentNode.removeChild(el);
      }); // Force browser to recompute layout, which should prevent a flash of
      // unstyled content:

      getComputedStyle(document.body, 'height');
    }

    if (input.scroll) {
      window.scrollTo(input.scroll.x, input.scroll.y);
    }
  }

  function onRootCommit() {
    resolvePromise();
  }

  onStart();

  var elem = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Head, {
    callback: onHeadCommit
  }), /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps), /*#__PURE__*/_react["default"].createElement(_portal.Portal, {
    type: "next-route-announcer"
  }, /*#__PURE__*/_react["default"].createElement(_routeAnnouncer.RouteAnnouncer, null)))); // We catch runtime errors using componentDidCatch which will trigger renderError


  renderReactElement(appElement, function (callback) {
    return /*#__PURE__*/_react["default"].createElement(Root, {
      callbacks: [callback, onRootCommit]
    },  false ? /*#__PURE__*/0 : elem);
  });
  return renderPromise;
}

function Root(_ref9) {
  var callbacks = _ref9.callbacks,
      children = _ref9.children;

  // We use `useLayoutEffect` to guarantee the callbacks are executed
  // as soon as React flushes the update
  _react["default"].useLayoutEffect(function () {
    return callbacks.forEach(function (callback) {
      return callback();
    });
  }, [callbacks]);

  if (undefined) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react["default"].useEffect(function () {
      window.__NEXT_HYDRATED = true;

      if (window.__NEXT_HYDRATED_CB) {
        window.__NEXT_HYDRATED_CB();
      }
    }, []);
  } // We should ask to measure the Web Vitals after rendering completes so we
  // don't cause any hydration delay:


  _react["default"].useEffect(function () {
    (0, _performanceRelayer["default"])(onPerfEntry);
  }, []);

  return children;
} // Dummy component that we render as a child of Root so that we can
// toggle the correct styles before the page is rendered.


function Head(_ref10) {
  var callback = _ref10.callback;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  return null;
}

/***/ }),

/***/ 5778:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(9448);

var next = _interopRequireWildcard(__webpack_require__(7403));

window.next = next;
(0, next["default"])()["catch"](console.error);

/***/ }),

/***/ 7365:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(2553);

var _createClass = __webpack_require__(2012);

var _interopRequireWildcard = __webpack_require__(9448);

var _interopRequireDefault = __webpack_require__(2426);

exports.__esModule = true;
exports.default = void 0;

var _router = __webpack_require__(1689);

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(7892));

var _isDynamic = __webpack_require__(3288);

var _parseRelativeUrl = __webpack_require__(4436);

var _normalizeTrailingSlash = __webpack_require__(6528);

var _routeLoader = _interopRequireWildcard(__webpack_require__(7599));

function normalizeRoute(route) {
  if (route[0] !== '/') {
    throw new Error("Route name should start with a \"/\", got \"".concat(route, "\""));
  }

  if (route === '/') return route;
  return route.replace(/\/$/, '');
}

var PageLoader = /*#__PURE__*/function () {
  function PageLoader(buildId, assetPrefix) {
    _classCallCheck(this, PageLoader);

    this.buildId = void 0;
    this.assetPrefix = void 0;
    this.promisedSsgManifest = void 0;
    this.promisedDevPagesManifest = void 0;
    this.routeLoader = void 0;
    this.routeLoader = (0, _routeLoader["default"])(assetPrefix);
    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    /** @type {Promise<Set<string>>} */

    this.promisedSsgManifest = new Promise(function (resolve) {
      if (window.__SSG_MANIFEST) {
        resolve(window.__SSG_MANIFEST);
      } else {
        ;

        window.__SSG_MANIFEST_CB = function () {
          resolve(window.__SSG_MANIFEST);
        };
      }
    });
  }

  _createClass(PageLoader, [{
    key: "getPageList",
    value: function getPageList() {
      if (true) {
        return (0, _routeLoader.getClientBuildManifest)().then(function (manifest) {
          return manifest.sortedPages;
        });
      } else {}
    }
    /**
    * @param {string} href the route href (file-system path)
    * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
    * @returns {string}
    */

  }, {
    key: "getDataHref",
    value: function getDataHref(href, asPath, ssg, locale) {
      var _this = this;

      var _ref = (0, _parseRelativeUrl.parseRelativeUrl)(href),
          hrefPathname = _ref.pathname,
          query = _ref.query,
          search = _ref.search;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(asPath),
          asPathname = _ref2.pathname;

      var route = normalizeRoute(hrefPathname);

      var getHrefForSlug = function getHrefForSlug(path) {
        var dataRoute = (0, _getAssetPathFromRoute["default"])((0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _router.addLocale)(path, locale)), '.json');
        return (0, _router.addBasePath)("/_next/data/".concat(_this.buildId).concat(dataRoute).concat(ssg ? '' : search));
      };

      var isDynamic = (0, _isDynamic.isDynamicRoute)(route);
      var interpolatedRoute = isDynamic ? (0, _router.interpolateAs)(hrefPathname, asPathname, query).result : '';
      return isDynamic ? interpolatedRoute && getHrefForSlug(interpolatedRoute) : getHrefForSlug(route);
    }
    /**
    * @param {string} route - the route (file-system path)
    */

  }, {
    key: "_isSsg",
    value: function _isSsg(route) {
      return this.promisedSsgManifest.then(function (s) {
        return s.has(route);
      });
    }
  }, {
    key: "loadPage",
    value: function loadPage(route) {
      return this.routeLoader.loadRoute(route).then(function (res) {
        if ('component' in res) {
          return {
            page: res.component,
            mod: res.exports,
            styleSheets: res.styles.map(function (o) {
              return {
                href: o.href,
                text: o.content
              };
            })
          };
        }

        throw res.error;
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch(route) {
      return this.routeLoader.prefetch(route);
    }
  }]);

  return PageLoader;
}();

exports.default = PageLoader;

/***/ }),

/***/ 4829:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _webVitals = __webpack_require__(5866);

var initialHref = location.href;
var isRegistered = false;
var userReportHandler;

function onReport(metric) {
  if (userReportHandler) {
    userReportHandler(metric);
  } // This code is not shipped, executed, or present in the client-side
  // JavaScript bundle unless explicitly enabled in your application.
  //
  // When this feature is enabled, we'll make it very clear by printing a
  // message during the build (`next build`).


  if (false) { var vitalsUrl, blob, body; }
}

var _default = function _default(onPerfEntry) {
  // Update function if it changes:
  userReportHandler = onPerfEntry; // Only register listeners once:

  if (isRegistered) {
    return;
  }

  isRegistered = true;
  (0, _webVitals.getCLS)(onReport);
  (0, _webVitals.getFID)(onReport);
  (0, _webVitals.getFCP)(onReport);
  (0, _webVitals.getLCP)(onReport);
  (0, _webVitals.getTTFB)(onReport);
};

exports.default = _default;

/***/ }),

/***/ 1567:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(3848);

var _interopRequireWildcard = __webpack_require__(9448);

exports.__esModule = true;
exports.Portal = void 0;

var React = _interopRequireWildcard(__webpack_require__(7294));

var _reactDom = __webpack_require__(3935);

var Portal = function Portal(_ref) {
  var children = _ref.children,
      type = _ref.type;
  var portalNode = React.useRef(null);

  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  React.useEffect(function () {
    portalNode.current = document.createElement(type);
    document.body.appendChild(portalNode.current);
    forceUpdate({});
    return function () {
      if (portalNode.current) {
        document.body.removeChild(portalNode.current);
      }
    };
  }, [type]);
  return portalNode.current ? /*#__PURE__*/(0, _reactDom.createPortal)(children, portalNode.current) : null;
};

exports.Portal = Portal;

/***/ }),

/***/ 6975:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(3848);

var _interopRequireWildcard = __webpack_require__(9448);

exports.__esModule = true;
exports.RouteAnnouncer = RouteAnnouncer;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(7294));

var _router = __webpack_require__(2441);

function RouteAnnouncer() {
  var _ref = (0, _router.useRouter)(),
      asPath = _ref.asPath;

  var _ref2 = (0, _react.useState)(''),
      _ref3 = _slicedToArray(_ref2, 2),
      routeAnnouncement = _ref3[0],
      setRouteAnnouncement = _ref3[1]; // Only announce the path change, but not for the first load because screen reader will do that automatically.


  var initialPathLoaded = (0, _react.useRef)(false); // Every time the path changes, announce the route change. The announcement will be prioritized by h1, then title
  // (from metadata), and finally if those don't exist, then the pathName that is in the URL. This methodology is
  // inspired by Marcy Sutton's accessible client routing user testing. More information can be found here:
  // https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/

  (0, _react.useEffect)(function () {
    if (!initialPathLoaded.current) {
      initialPathLoaded.current = true;
      return;
    }

    var newRouteAnnouncement;
    var pageHeader = document.querySelector('h1');

    if (pageHeader) {
      newRouteAnnouncement = pageHeader.innerText || pageHeader.textContent;
    }

    if (!newRouteAnnouncement) {
      if (document.title) {
        newRouteAnnouncement = document.title;
      } else {
        newRouteAnnouncement = asPath;
      }
    }

    setRouteAnnouncement(newRouteAnnouncement);
  }, // TODO: switch to pathname + query object of dynamic route requirements
  [asPath]);
  return /*#__PURE__*/_react["default"].createElement("p", {
    "aria-live": "assertive" // Make the announcement immediately.
    ,
    id: "__next-route-announcer__",
    role: "alert",
    style: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '1px',
      // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
      whiteSpace: 'nowrap',
      wordWrap: 'normal'
    }
  }, routeAnnouncement);
}

var _default = RouteAnnouncer;
exports.default = _default;

/***/ }),

/***/ 9186:
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.setConfig = setConfig;
exports.default = void 0;
var runtimeConfig;

var _default = function _default() {
  return runtimeConfig;
};

exports.default = _default;

function setConfig(configValue) {
  runtimeConfig = configValue;
}

/***/ }),

/***/ 5866:
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){var t={599:function(t,e){!function(t,n){ true?n(e):0}(this,function(t){"use strict";var e,n,i=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:e,delta:0,entries:[],id:i(),isFinal:!1}},r=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver(function(t){return t.getEntries().map(e)});return n.observe({type:t,buffered:!0}),n}}catch(t){}},o=!1,u=!1,s=function(t){o=!t.persisted},c=function(){addEventListener("pagehide",s),addEventListener("beforeunload",function(){})},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u||(c(),u=!0),addEventListener("visibilitychange",function(e){var n=e.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:n,isUnloading:o})},{capture:!0,once:e})},l=function(t,e,n,i){var a;return function(){n&&e.isFinal&&n.disconnect(),e.value>=0&&(i||e.isFinal||"hidden"===document.visibilityState)&&(e.delta=e.value-(a||0),(e.delta||e.isFinal||void 0===a)&&(t(e),a=e.value))}},f=function(){return void 0===e&&(e="hidden"===document.visibilityState?0:1/0,p(function(t){var n=t.timeStamp;return e=n},!0)),{get timeStamp(){return e}}},d=function(){return n||(n=new Promise(function(t){return["scroll","keydown","pointerdown"].map(function(e){addEventListener(e,t,{once:!0,passive:!0,capture:!0})})})),n};t.getCLS=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=a("CLS",0),o=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),e())},u=r("layout-shift",o);u&&(e=l(t,i,u,n),p(function(t){var n=t.isUnloading;u.takeRecords().map(o),n&&(i.isFinal=!0),e()}))},t.getFCP=function(t){var e,n=a("FCP"),i=f(),o=r("paint",function(t){"first-contentful-paint"===t.name&&t.startTime<i.timeStamp&&(n.value=t.startTime,n.isFinal=!0,n.entries.push(t),e())});o&&(e=l(t,n,o))},t.getFID=function(t){var e=a("FID"),n=f(),i=function(t){t.startTime<n.timeStamp&&(e.value=t.processingStart-t.startTime,e.entries.push(t),e.isFinal=!0,u())},o=r("first-input",i),u=l(t,e,o);o?p(function(){o.takeRecords().map(i),o.disconnect()},!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay(function(t,i){i.timeStamp<n.timeStamp&&(e.value=t,e.isFinal=!0,e.entries=[{entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+t}],u())})},t.getLCP=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=a("LCP"),o=f(),u=function(t){var n=t.startTime;n<o.timeStamp?(i.value=n,i.entries.push(t)):i.isFinal=!0,e()},s=r("largest-contentful-paint",u);if(s){e=l(t,i,s,n);var c=function(){i.isFinal||(s.takeRecords().map(u),i.isFinal=!0,e())};d().then(c),p(c,!0)}},t.getTTFB=function(t){var e,n=a("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();n.value=n.delta=e.responseStart,n.entries=[e],n.isFinal=!0,t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)},Object.defineProperty(t,"__esModule",{value:!0})})}};var e={};function __nccwpck_require__(n){if(e[n]){return e[n].exports}var i=e[n]={exports:{}};var a=true;try{t[n].call(i.exports,i,i.exports,__nccwpck_require__);a=false}finally{if(a)delete e[n]}return i.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(599)}();

/***/ }),

/***/ 9566:
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ })

}]);