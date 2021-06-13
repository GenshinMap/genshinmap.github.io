(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[888,179],{

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

/***/ 888:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MyApp; }
});

;// CONCATENATED MODULE: ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(2122);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/useTheme/ThemeContext.js
var ThemeContext = __webpack_require__(3800);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/useTheme/useTheme.js
var useTheme = __webpack_require__(159);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/ThemeProvider/nested.js
var nested = __webpack_require__(7076);
;// CONCATENATED MODULE: ./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js






 // To support composition of theme.

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    var mergedTheme = localTheme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  return (0,esm_extends/* default */.Z)({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  var outerTheme = (0,useTheme/* default */.Z)();

  if (false) {}

  var theme = react.useMemo(function () {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested/* default */.Z] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/react.createElement(ThemeContext/* default.Provider */.Z.Provider, {
    value: theme
  }, children);
}

 false ? 0 : void 0;

if (false) {}

/* harmony default export */ var ThemeProvider_ThemeProvider = (ThemeProvider);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js + 2 modules
var withStyles = __webpack_require__(8786);
;// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js





var html = {
  WebkitFontSmoothing: 'antialiased',
  // Antialiasing.
  MozOsxFontSmoothing: 'grayscale',
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box'
};
var body = function body(theme) {
  return (0,esm_extends/* default */.Z)({
    color: theme.palette.text.primary
  }, theme.typography.body2, {
    backgroundColor: theme.palette.background.default,
    '@media print': {
      // Save printer ink.
      backgroundColor: theme.palette.common.white
    }
  });
};
var styles = function styles(theme) {
  return {
    '@global': {
      html: html,
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      'strong, b': {
        fontWeight: theme.typography.fontWeightBold
      },
      body: (0,esm_extends/* default */.Z)({
        margin: 0
      }, body(theme), {
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        '&::backdrop': {
          backgroundColor: theme.palette.background.default
        }
      })
    }
  };
};
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

function CssBaseline(props) {
  /* eslint-disable no-unused-vars */
  var _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children,
      classes = props.classes;
  /* eslint-enable no-unused-vars */

  return /*#__PURE__*/react.createElement(react.Fragment, null, children);
}

 false ? 0 : void 0;

if (false) {}

/* harmony default export */ var CssBaseline_CssBaseline = ((0,withStyles/* default */.Z)(styles, {
  name: 'MuiCssBaseline'
})(CssBaseline));
// EXTERNAL MODULE: ./components/core.ts
var core = __webpack_require__(9420);
;// CONCATENATED MODULE: ./pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function MyApp(props) {
  var Component = props.Component,
      pageProps = props.pageProps;
  react.useEffect(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(head.default, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("title", {
        children: "Teyvat.moe"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ThemeProvider_ThemeProvider, {
      theme: core/* theme */.r,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CssBaseline_CssBaseline, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Component, _objectSpread({}, pageProps))]
    })]
  });
}

/***/ }),

/***/ 6363:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(888);
      }
    ]);
  

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774,351,47,433], function() { return __webpack_exec__(6363), __webpack_exec__(2441); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);