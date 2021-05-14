(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 9420:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": function() { return /* binding */ isLocal; },
/* harmony export */   "r": function() { return /* binding */ theme; }
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9268);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(907);


var isLocal = function isLocal() {
  // Returns true if we are in a browser.
  // Returns false if we are in SSR.
  return true;
}; // Create a theme instance.

var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)({
  palette: {
    primary: {
      main: '#607d8b'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__/* .default.A400 */ .Z.A400
    }
  }
});

/***/ }),

/***/ 4370:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Home": function() { return /* binding */ Home; },
  "default": function() { return /* binding */ pages; },
  "getApplicationVersion": function() { return /* binding */ getApplicationVersion; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(809);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(2447);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 14 modules
var Box = __webpack_require__(7748);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js + 1 modules
var LinearProgress = __webpack_require__(3875);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./components/core.ts
var core = __webpack_require__(9420);
;// CONCATENATED MODULE: ./package.json
var package_namespaceObject = {"i8":"1.0.0"};
;// CONCATENATED MODULE: ./pages/index.tsx





// Ensure the app version is defined in only one location.





var useStyles = (0,makeStyles/* default */.Z)(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.primary.dark,
      height: '100vh',
      color: '#FFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    homeHeader: {
      marginTop: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    homeBody: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    homeFooter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing(3)
    },
    logo: {
      width: 192,
      height: 192,
      margin: '0 8px 0 0'
    },
    subtitle: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 8,
      fontStyle: 'italic'
    },
    alignCenter: {
      textAlign: 'center'
    }
  };
});
/**
 * Fetches the current application version from the package.json file.
 * @returns {string} The package version.
 */

var getApplicationVersion = function getApplicationVersion() {
  return package_namespaceObject.i8;
};
var MINIMUM_WAIT_TIME = 1500;
var ActionPerformer = /*#__PURE__*/react.memo(function () {
  react.useEffect(function () {
    if ((0,core/* isLocal */.D)()) {
      setTimeout( /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var clientOnly;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__.e(/* import() */ 262).then(__webpack_require__.bind(__webpack_require__, 1262));

              case 2:
                clientOnly = _context.sent;
                clientOnly.redirectToUrl('https://teyvat.moe/map');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), MINIMUM_WAIT_TIME);
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
    style: {
      textAlign: 'center'
    },
    children: "Redirecting to Teyvat.moe..."
  });
});
var Home = /*#__PURE__*/react.memo(function () {
  var classes = useStyles();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("title", {
        children: "Redirecting to Teyvat.moe..."
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Container/* default */.Z, {
      maxWidth: false,
      className: classes.root,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classes.homeHeader,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: "/logo.png",
          className: classes.logo
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
          variant: "h3",
          className: classes.alignCenter,
          children: "GenshinMap is moving!"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: classes.homeBody,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ActionPerformer, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(LinearProgress/* default */.Z, {})]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: classes.homeFooter,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.Z, {
          className: classes.subtitle,
          children: ["Migrator version: v", getApplicationVersion()]
        })
      })]
    })]
  });
});
/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 5301:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(4370);
      }
    ]);
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774,351,47,268], function() { return __webpack_exec__(5301); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);