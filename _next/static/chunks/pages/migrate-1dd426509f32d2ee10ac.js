(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[722],{

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
var package_namespaceObject = {"i8":"1.1.0"};
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

/***/ 3374:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(809);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2447);
/* harmony import */ var D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9227);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1120);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7748);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2318);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3875);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3530);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3832);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4370);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9008);
/* harmony import */ var _components_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9420);







/**
 * The page which is embedded into Teyvat.moe when it attempts to migrate data.
 * On Chrome browsers, this process is automatic and requires no other user input.
 * On Firefox browsers, an iframe cannot access local storage unless the user attempts a direct page interaction.
 */





var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.primary.dark,
      height: '100vh',
      color: '#FFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    content: {
      marginTop: theme.spacing(3)
    },
    homeFooter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing(3)
    },
    progressContainer: {
      width: '100%',
      display: 'block'
    },
    subtitle: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 8,
      fontStyle: 'italic'
    }
  };
});

var Migrate = function Migrate() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState('pending'),
      _React$useState2 = (0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_React$useState, 2),
      status = _React$useState2[0],
      setStatus = _React$useState2[1];

  var migrateManual = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)( /*#__PURE__*/(0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var clientOnly;
    return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('Manual migration confirmed.');
            _context.next = 3;
            return __webpack_require__.e(/* import() */ 262).then(__webpack_require__.bind(__webpack_require__, 1262));

          case 3:
            clientOnly = _context.sent;
            clientOnly.handleCrossOriginManual();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  var migrateStorageAccessSuccess = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    // Display "Data migrated" text.
    setStatus('complete');
  }, [setStatus]);
  var migrateStorageAccessFailure = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    // Display the button so the user can manually try to migrate.
    // This should be only necessary on Firefox.
    setStatus('manual');
  }, [setStatus]);
  var migrateAutomatic = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)( /*#__PURE__*/(0,D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)( /*#__PURE__*/D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var clientOnly;
    return D_eric_Documents_Programming_Website_GenshinMapMigrator_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(0,_components_core__WEBPACK_IMPORTED_MODULE_5__/* .isLocal */ .D)()) {
              _context2.next = 5;
              break;
            }

            _context2.next = 3;
            return __webpack_require__.e(/* import() */ 262).then(__webpack_require__.bind(__webpack_require__, 1262));

          case 3:
            clientOnly = _context2.sent;
            clientOnly.handleCrossOrigin(migrateStorageAccessSuccess, // Call this if migration is successful.
            migrateStorageAccessFailure // Call this if migration fails.
            );

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {
    // Attempt automatic migration.
    migrateAutomatic();
  });
  var getContent = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    switch (status) {
      case 'pending':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
            gutterBottom: true,
            children: "Migrating..."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: classes.progressContainer,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {})
          })]
        });

      case 'complete':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
          children: "Data migrated."
        });

      case 'manual':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
          variant: "contained",
          onClick: migrateManual,
          children: "Confirm Migration"
        });

      default:
        return null;
    }
  }, [status, migrateManual]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_head__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
        children: "GenshinMap Data Migrator"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
      maxWidth: false,
      className: classes.root,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.content,
        children: getContent()
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.homeFooter,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
          className: classes.subtitle,
          children: ["Migrator version: v", (0,_index__WEBPACK_IMPORTED_MODULE_3__.getApplicationVersion)()]
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Migrate);

/***/ }),

/***/ 1696:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/migrate",
      function () {
        return __webpack_require__(3374);
      }
    ]);
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774,351,47,268,122], function() { return __webpack_exec__(1696); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);